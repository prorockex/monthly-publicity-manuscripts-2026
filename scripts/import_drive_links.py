#!/usr/bin/env python3
"""Import public Google Drive manuscript links into a new monthly JSON draft.

Only Google Docs and individual Drive file URLs are accepted. The importer has
no Google credentials and never bypasses access controls: inaccessible sources
remain explicit, editable drafts with their original Drive URL.
"""
import argparse
import csv
import hashlib
import html
import json
import mimetypes
import posixpath
import re
import sys
import urllib.error
import urllib.parse
import urllib.request
import zipfile
from email.message import Message
from html.parser import HTMLParser
from io import BytesIO
from pathlib import Path
from xml.etree import ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
CATEGORIES = {"文稿", "剪影", "詩詞", "親子園地", "封底"}
GROUPS = {1, 2, 3}
ID_RE = re.compile(r"^[A-Za-z0-9_-]{5,200}$")


def parse_drive_url(value):
    """Return (kind, file_id) for an individual HTTPS Docs/Drive URL."""
    value = str(value or "").strip()
    try:
        parsed = urllib.parse.urlsplit(value)
    except ValueError as exc:
        raise ValueError("無效的 Google Drive 網址") from exc
    host = (parsed.hostname or "").lower()
    if parsed.scheme.lower() != "https" or host not in {"drive.google.com", "docs.google.com"}:
        raise ValueError("只接受 HTTPS 的 drive.google.com 或 docs.google.com 個別檔案網址")
    if parsed.username or parsed.password or parsed.port not in (None, 443):
        raise ValueError("不接受含帳密或非標準連接埠的網址")
    path = urllib.parse.unquote(parsed.path)
    file_id = None
    kind = "drive"
    if host == "docs.google.com":
        match = re.search(r"/document/(?:u/\d+/)?d/([^/]+)", path)
        if match:
            kind, file_id = "doc", match.group(1)
    else:
        match = re.search(r"/file/d/([^/]+)", path)
        if match:
            file_id = match.group(1)
        elif path.rstrip("/") in {"/open", "/uc"}:
            file_id = urllib.parse.parse_qs(parsed.query).get("id", [None])[0]
    if not file_id or not ID_RE.fullmatch(file_id):
        raise ValueError("網址必須指向單一 Google 文件或 Drive 檔案；資料夾網址不適用")
    return kind, file_id


def parse_manifest(path):
    """Read a CSV (url, group, category, categoryNo, title) or plain URL list."""
    text = Path(path).read_text(encoding="utf-8-sig")
    lines = [line for line in text.splitlines() if line.strip() and not line.lstrip().startswith("#")]
    if not lines:
        return []
    first = next(csv.reader([lines[0]]))
    normalized = [cell.strip().lower() for cell in first]
    aliases = {"url", "driveurl", "drive_url", "sourceurl", "source_url"}
    if any(cell in aliases for cell in normalized):
        reader = csv.DictReader(lines)
        if not reader.fieldnames:
            raise ValueError("CSV 缺少標題列")
        name_map = {name.strip().lower(): name for name in reader.fieldnames if name}
        url_field = next((name_map[x] for x in aliases if x in name_map), None)
        if not url_field:
            raise ValueError("CSV 必須有 url 欄")
        result = []
        for raw in reader:
            result.append({
                "url": (raw.get(url_field) or "").strip(),
                "group": _csv_value(raw, name_map, "group"),
                "category": _csv_value(raw, name_map, "category"),
                "categoryNo": _csv_value(raw, name_map, "categoryno", "category_no"),
                "title": _csv_value(raw, name_map, "title"),
            })
        return [row for row in result if row["url"]]
    result = []
    for line in lines:
        for item in next(csv.reader([line])):
            item = item.strip()
            if item:
                result.append({"url": item, "group": "", "category": "", "categoryNo": "", "title": ""})
    return result


def _csv_value(raw, name_map, *keys):
    for key in keys:
        if key in name_map:
            return (raw.get(name_map[key]) or "").strip()
    return ""


def extract_docx(payload):
    """Extract paragraph text and in-document-order images from a DOCX package."""
    try:
        archive = zipfile.ZipFile(BytesIO(payload))
        document = ET.fromstring(archive.read("word/document.xml"))
    except (zipfile.BadZipFile, KeyError, ET.ParseError) as exc:
        raise ValueError("不是可讀取的 DOCX 文件") from exc

    title = ""
    try:
        core = ET.fromstring(archive.read("docProps/core.xml"))
        for node in core.iter():
            if node.tag.endswith("}title"):
                value = (node.text or "").strip()
                if value:
                    title = value
                    break
    except (KeyError, ET.ParseError):
        pass

    paragraphs = []
    for node in document.iter():
        if node.tag.endswith("}p"):
            text = "".join((child.text or "") for child in node.iter() if child.tag.endswith("}t"))
            text = re.sub(r"\s+", " ", text).strip()
            if text:
                paragraphs.append(text)

    relationships = {}
    try:
        rel_root = ET.fromstring(archive.read("word/_rels/document.xml.rels"))
        for rel in rel_root:
            rel_id = rel.attrib.get("Id")
            target = rel.attrib.get("Target", "")
            if rel_id and target and not target.startswith("/"):
                relationships[rel_id] = posixpath.normpath(posixpath.join("word", target))
            elif rel_id and target.startswith("/word/"):
                relationships[rel_id] = target.lstrip("/")
    except (KeyError, ET.ParseError):
        pass

    images, seen = [], set()
    embed_attr = "{http://schemas.openxmlformats.org/officeDocument/2006/relationships}embed"
    for blip in document.iter():
        if not blip.tag.endswith("}blip"):
            continue
        rel_id = blip.attrib.get(embed_attr)
        target = relationships.get(rel_id)
        if not target or target in seen or not target.startswith("word/media/"):
            continue
        try:
            data = archive.read(target)
        except KeyError:
            continue
        seen.add(target)
        images.append({"name": Path(target).name, "data": data})
    archive.close()
    if not title and paragraphs:
        title = paragraphs[0][:100]
    return {"title": title, "paragraphs": paragraphs, "images": images}


class _ReadableHTML(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.skip = 0
        self.title_mode = False
        self.title = []
        self.text = []

    def handle_starttag(self, tag, attrs):
        if tag in {"script", "style", "svg", "noscript"}:
            self.skip += 1
        if tag == "title":
            self.title_mode = True

    def handle_endtag(self, tag):
        if tag in {"script", "style", "svg", "noscript"} and self.skip:
            self.skip -= 1
        if tag == "title":
            self.title_mode = False

    def handle_data(self, data):
        value = re.sub(r"\s+", " ", html.unescape(data)).strip()
        if not value or self.skip:
            return
        if self.title_mode:
            self.title.append(value)
        elif value:
            self.text.append(value)


def _split_text(text):
    return [re.sub(r"\s+", " ", part).strip() for part in re.split(r"\n\s*\n|\r\n|\n", text) if part.strip()]


def _from_response(data, content_type):
    if zipfile.is_zipfile(BytesIO(data)):
        return extract_docx(data)
    if data.startswith(b"%PDF"):
        try:
            from importlib import import_module
            PdfReader = import_module("pypdf").PdfReader
            reader = PdfReader(BytesIO(data))
            paragraphs = []
            for page in reader.pages:
                paragraphs.extend(_split_text(page.extract_text() or ""))
            title = (reader.metadata.title or "").strip() if reader.metadata else ""
            return {"title": title, "paragraphs": paragraphs, "images": []}
        except ImportError:
            return {"title": "", "paragraphs": [], "images": [], "error": "PDF 文字擷取需要選用套件 pypdf"}
        except Exception as exc:
            return {"title": "", "paragraphs": [], "images": [], "error": "PDF 文字擷取失敗：" + type(exc).__name__}
    if content_type.startswith("image/"):
        return {"title": "", "paragraphs": [], "images": [{"name": "preview" + (mimetypes.guess_extension(content_type) or ".jpg"), "data": data}]}
    if content_type.startswith("text/plain"):
        text = data.decode("utf-8", errors="replace")
        return {"title": "", "paragraphs": _split_text(text), "images": []}
    if content_type.startswith("text/html") or data.lstrip().startswith(b"<!DOCTYPE html") or data.lstrip().startswith(b"<html"):
        source = data.decode("utf-8", errors="replace")
        if re.search(r"sign in|request access|you need access|登入|要求存取", source, re.I):
            return {"title": "", "paragraphs": [], "images": [], "error": "來源頁面要求登入或權限"}
        parser = _ReadableHTML()
        parser.feed(source)
        text = "\n".join(parser.text)
        title = " ".join(parser.title).strip()
        if title.lower() in {"google drive", "google docs", "sign in - google accounts"}:
            title = ""
        return {"title": title, "paragraphs": _split_text(text), "images": []}
    return {"title": "", "paragraphs": [], "images": [], "error": "無法辨識來源文件格式"}


def _request(url, opener, timeout):
    request = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 (compatible; PublicityManuscriptImporter/1.0)"})
    with opener.open(request, timeout=timeout) as response:
        return response.read(), response.headers.get_content_type(), response.geturl()


def fetch_public_source(kind, file_id, timeout=25):
    """Fetch only public Google exports/downloads; never uses account credentials."""
    from http.cookiejar import CookieJar
    opener = urllib.request.build_opener(urllib.request.HTTPCookieProcessor(CookieJar()))
    errors = []
    urls = []
    if kind == "doc":
        urls = [
            ("https://docs.google.com/document/d/{}/export?format=docx".format(file_id), "docx"),
            ("https://docs.google.com/document/d/{}/export?format=txt".format(file_id), "text"),
        ]
    else:
        urls = [("https://drive.google.com/uc?export=download&id={}".format(urllib.parse.quote(file_id)), "download")]

    for url, purpose in urls:
        try:
            data, content_type, final_url = _request(url, opener, timeout)
            if purpose == "download" and content_type.startswith("text/html"):
                body = data.decode("utf-8", errors="replace")
                confirm = re.search(r"[?&]confirm=([0-9A-Za-z_-]+)", body)
                if confirm:
                    confirm_url = "https://drive.google.com/uc?export=download&confirm={}&id={}".format(
                        urllib.parse.quote(confirm.group(1)), urllib.parse.quote(file_id)
                    )
                    data, content_type, final_url = _request(confirm_url, opener, timeout)
            result = _from_response(data, content_type)
            result.setdefault("sourceUrl", final_url)
            if result.get("paragraphs") or result.get("images") or result.get("title"):
                return result
            errors.append(result.get("error", "來源沒有可擷取的文字或預覽圖"))
        except (urllib.error.URLError, TimeoutError, OSError, ValueError) as exc:
            if isinstance(exc, urllib.error.HTTPError):
                errors.append("HTTP {}".format(exc.code))
            else:
                errors.append(type(exc).__name__)
    return {"title": "", "paragraphs": [], "images": [], "error": "；".join(errors) or "來源不可讀取"}


def _metadata_line(value):
    text = re.sub(r"\s+", " ", str(value or "")).strip()
    match = re.fullmatch(
        r"(?:(?:第\s*([1-3])\s*組)[\s·|｜:：、-]*)?"
        r"(文稿|剪影|詩詞|親子園地|封底)\s*([0-9]+)?"
        r"(?:\s*[-–—:：]?\s*[0-9][0-9,]*\s*字)?",
        text,
    )
    if not match:
        return None
    return {
        "group": int(match.group(1)) if match.group(1) else None,
        "category": match.group(2),
        "categoryNo": int(match.group(3)) if match.group(3) else None,
    }


def make_entry(year, month, row, index, fetched):
    kind, file_id = parse_drive_url(row["url"])
    raw_paragraphs = [re.sub(r"\s+", " ", str(p)).strip() for p in fetched.get("paragraphs", []) if str(p).strip()]
    metadata = _metadata_line(raw_paragraphs[0] if raw_paragraphs else "") or _metadata_line(fetched.get("title", ""))
    if raw_paragraphs and _metadata_line(raw_paragraphs[0]):
        raw_paragraphs = raw_paragraphs[1:]

    raw_group = str(row.get("group", "")).strip()
    try:
        group_num = int(raw_group) if raw_group else int((metadata or {}).get("group") or 0)
    except (TypeError, ValueError):
        group_num = 0
    raw_category = str(row.get("category", "")).strip()
    category = raw_category or (metadata.get("category", "") if metadata else "")
    raw_category_no = str(row.get("categoryNo", "")).strip()
    try:
        category_no = int(raw_category_no) if raw_category_no else int((metadata or {}).get("categoryNo") or 0)
        if category_no < 1:
            raise ValueError
    except (TypeError, ValueError):
        category_no = index

    reasons = []
    if group_num not in GROUPS:
        group_num = 0
        reasons.append("未指定組別")
    if category not in CATEGORIES:
        category = "待分類"
        reasons.append("待分類")
    if not raw_category_no and not (metadata and metadata.get("categoryNo")):
        reasons.append("稿件序號待確認")

    supplied_title = str(row.get("title", "")).strip()
    fetched_title = str(fetched.get("title", "")).strip()
    if _metadata_line(fetched_title):
        fetched_title = ""
    title = supplied_title or fetched_title
    if not title and raw_paragraphs:
        title = raw_paragraphs.pop(0)[:100]
    elif raw_paragraphs and raw_paragraphs[0] == title:
        raw_paragraphs = raw_paragraphs[1:]
    if not title:
        title = "待補標題 {:02d}".format(index)
        reasons.append("待補標題")

    paragraphs = raw_paragraphs
    if not paragraphs:
        paragraphs = ["匯入草稿：尚未讀取到可用內文，請補填標題與段落。"]
        reasons.append(fetched.get("error", "待補內文"))

    entry = {
        "id": "{}-{:02d}-drive-{}".format(year, month, file_id),
        "year": int(year),
        "month": int(month),
        "group": group_num,
        "category": category,
        "categoryNo": category_no,
        "title": title,
        "paragraphs": paragraphs,
        "images": [],
        "driveUrl": row["url"],
        "driveLabel": "在 Google Drive 開啟原稿",
        "draft": bool(reasons),
        "draftReason": list(dict.fromkeys(reasons)),
        "importSource": "Google Drive",
    }
    if kind == "doc":
        entry["driveKind"] = "document"
    entry["_images"] = fetched.get("images", [])
    return entry


def _image_extension(image):
    name = Path(str(image.get("name", ""))).name
    extension = Path(name).suffix.lower()
    if re.fullmatch(r"\.[a-z0-9]{1,5}", extension):
        return extension
    data = image.get("data", b"")
    if data.startswith(b"\x89PNG\r\n\x1a\n"):
        return ".png"
    if data.startswith(b"\xff\xd8\xff"):
        return ".jpg"
    if data.startswith((b"GIF87a", b"GIF89a")):
        return ".gif"
    if data.startswith(b"RIFF") and data[8:12] == b"WEBP":
        return ".webp"
    return ".bin"


def _store_images(entry, root, assets_dir):
    for number, image in enumerate(entry.pop("_images", []), 1):
        data = image.get("data", b"")
        if not data:
            continue
        extension = _image_extension(image)
        digest = hashlib.sha256(data).hexdigest()[:8]
        filename = "drive-{}-{}-{:02d}{}".format(entry["id"].split("-drive-", 1)[-1][:10], digest, number, extension)
        target = assets_dir / filename
        target.parent.mkdir(parents=True, exist_ok=True)
        if target.exists() and target.read_bytes() != data:
            raise FileExistsError("拒絕覆寫不同內容的既有素材：{}".format(target))
        target.write_bytes(data)
        relative = target.resolve().relative_to(root.resolve()).as_posix()
        entry["images"].append({"src": relative, "caption": "Google Drive 原稿預覽圖 {}".format(number)})


def main(argv=None):
    parser = argparse.ArgumentParser(description="將可公開讀取的 Google Drive 文宣稿件連結匯入新月份 JSON。")
    parser.add_argument("--year", type=int, required=True, help="年份，例如 2026")
    parser.add_argument("--month", type=int, required=True, help="月份 1–12")
    parser.add_argument("--input", required=True, help="CSV 表格或每行一個 Drive 連結的文字檔")
    parser.add_argument("--root", default=str(ROOT), help="專案根目錄（測試時可指定暫存目錄）")
    parser.add_argument("--no-fetch", action="store_true", help="不連線讀取 Drive，只產生保留 driveUrl 的草稿")
    parser.add_argument("--timeout", type=int, default=25, help="每個公開來源要求的逾時秒數")
    parser.add_argument("--force", action="store_true", help="明確允許覆寫同月份 JSON；不會刪除舊素材")
    args = parser.parse_args(argv)

    if args.year < 2000 or args.month < 1 or args.month > 12:
        parser.error("年份須大於等於 2000，月份須介於 1–12")
    root = Path(args.root).expanduser().resolve()
    output = root / "data" / "{:04d}-{:02d}.json".format(args.year, args.month)
    assets_dir = root / "assets"
    if output.exists() and not args.force:
        parser.error("目標月份資料已存在，為保護既有資料拒絕覆寫：{}（確認後加 --force）".format(output))

    try:
        rows = parse_manifest(args.input)
    except (OSError, UnicodeError, ValueError) as exc:
        parser.error("讀取清單失敗：{}".format(exc))
    if not rows:
        parser.error("清單沒有任何 Drive 連結")

    parsed_rows, ids = [], set()
    for row in rows:
        try:
            kind, file_id = parse_drive_url(row["url"])
        except ValueError as exc:
            parser.error("無效連結 {!r}：{}".format(row.get("url", ""), exc))
        if file_id in ids:
            parser.error("清單包含重複的 Drive 檔案 ID：{}".format(file_id))
        ids.add(file_id)
        parsed_rows.append((row, kind, file_id))

    entries = []
    fetched_count = 0
    for index, (row, kind, file_id) in enumerate(parsed_rows, 1):
        if args.no_fetch:
            fetched = {"title": "", "paragraphs": [], "images": [], "error": "未執行來源讀取"}
        else:
            fetched = fetch_public_source(kind, file_id, timeout=args.timeout)
        if fetched.get("paragraphs") or fetched.get("images") or fetched.get("title"):
            fetched_count += 1
        entry = make_entry(args.year, args.month, row, index, fetched)
        _store_images(entry, root, assets_dir)
        entries.append(entry)
        outcome = "草稿" if entry["draft"] else "已擷取"
        print("[{}] {} — {}".format(outcome, entry["title"], row["url"]))

    month_data = {
        "year": args.year,
        "month": args.month,
        "label": "{} 年 {} 月".format(args.year, args.month),
        "source": "由 Google Drive 連結匯入；公開站台僅應發布已核准內容。",
        "entries": entries,
    }
    output.parent.mkdir(parents=True, exist_ok=True)
    temporary = output.with_suffix(output.suffix + ".tmp")
    temporary.write_text(json.dumps(month_data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    temporary.replace(output)
    drafts = sum(1 for entry in entries if entry["draft"])
    print(json.dumps({
        "output": str(output),
        "entries": len(entries),
        "sources_readable": fetched_count,
        "drafts": drafts,
        "images": sum(len(entry["images"]) for entry in entries),
        "note": "公開 GitHub Pages 前請確認稿件與 Drive 原檔均核准公開。",
    }, ensure_ascii=False))
    return 0


if __name__ == "__main__":
    sys.exit(main())
