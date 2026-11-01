import sys
import tempfile
import unittest
import zipfile
from io import BytesIO
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

from scripts.import_drive_links import extract_docx, make_entry, parse_drive_url, parse_manifest


class DriveLinkParsingTests(unittest.TestCase):
    def test_accepts_google_docs_and_drive_file_links(self):
        self.assertEqual(parse_drive_url("https://docs.google.com/document/d/Abc_123-xyz/edit?usp=sharing"), ("doc", "Abc_123-xyz"))
        self.assertEqual(parse_drive_url("https://drive.google.com/file/d/Abc_123-xyz/view?usp=sharing"), ("drive", "Abc_123-xyz"))
        self.assertEqual(parse_drive_url("https://drive.google.com/open?id=Abc_123-xyz"), ("drive", "Abc_123-xyz"))

    def test_rejects_non_https_untrusted_and_folder_urls(self):
        for value in (
            "http://drive.google.com/file/d/Abc_123-xyz/view",
            "https://example.com/file/d/Abc_123-xyz/view",
            "https://drive.google.com/drive/folders/Abc_123-xyz",
            "javascript:alert(1)",
        ):
            with self.subTest(value=value), self.assertRaises(ValueError):
                parse_drive_url(value)

    def test_reads_bare_link_lists_and_optional_csv_metadata(self):
        with tempfile.TemporaryDirectory() as tmp:
            path = Path(tmp) / "links.txt"
            path.write_text(
                "# 11 月草稿\nhttps://drive.google.com/file/d/abc123/view\n",
                encoding="utf-8",
            )
            rows = parse_manifest(path)
            self.assertEqual(len(rows), 1)
            self.assertEqual(rows[0]["url"], "https://drive.google.com/file/d/abc123/view")
            self.assertEqual(rows[0]["group"], "")
            path.write_text(
                "url,group,category,categoryNo,title\n"
                "https://docs.google.com/document/d/doc123/edit,2,詩詞,4,測試標題\n",
                encoding="utf-8",
            )
            rows = parse_manifest(path)
            self.assertEqual(rows[0]["group"], "2")
            self.assertEqual(rows[0]["category"], "詩詞")
            self.assertEqual(rows[0]["categoryNo"], "4")
            self.assertEqual(rows[0]["title"], "測試標題")


class DraftEntryTests(unittest.TestCase):
    def test_missing_metadata_and_content_make_explicit_linked_draft(self):
        url = "https://drive.google.com/file/d/abc123/view"
        entry = make_entry(2026, 11, {"url": url}, 1, {"title": "", "paragraphs": [], "images": []})
        self.assertEqual(entry["group"], 0)
        self.assertEqual(entry["category"], "待分類")
        self.assertTrue(entry["draft"])
        self.assertEqual(entry["driveUrl"], url)
        self.assertEqual(entry["driveLabel"], "在 Google Drive 開啟原稿")
        self.assertEqual(entry["paragraphs"][0], "匯入草稿：尚未讀取到可用內文，請補填標題與段落。")

    def test_infers_category_number_and_article_title_from_doc_metadata_line(self):
        url = "https://drive.google.com/file/d/abc123/view"
        entry = make_entry(
            2026,
            11,
            {"url": url},
            1,
            {"title": "文稿1 1665字", "paragraphs": ["文稿1 1665字", "實際稿件標題", "文章內文"], "images": []},
        )
        self.assertEqual(entry["category"], "文稿")
        self.assertEqual(entry["categoryNo"], 1)
        self.assertEqual(entry["title"], "實際稿件標題")
        self.assertEqual(entry["paragraphs"], ["文章內文"])
        self.assertEqual(entry["group"], 0)
        self.assertTrue(entry["draft"])

    def test_fetched_content_and_complete_metadata_make_ready_entry(self):
        url = "https://docs.google.com/document/d/doc123/edit"
        entry = make_entry(
            2026,
            11,
            {"url": url, "group": "2", "category": "詩詞", "categoryNo": "4", "title": "自訂標題"},
            1,
            {"title": "Drive 標題", "paragraphs": ["第一段", "第二段"], "images": []},
        )
        self.assertEqual(entry["group"], 2)
        self.assertEqual(entry["category"], "詩詞")
        self.assertEqual(entry["categoryNo"], 4)
        self.assertEqual(entry["title"], "自訂標題")
        self.assertEqual(entry["paragraphs"], ["第一段", "第二段"])
        self.assertFalse(entry["draft"])


class DocxExtractionTests(unittest.TestCase):
    def test_extracts_paragraph_text_and_relationship_ordered_images(self):
        doc = '''<?xml version="1.0" encoding="UTF-8"?>
        <w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"
                    xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main"
                    xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
          <w:body>
            <w:p><w:r><w:t>文章標題</w:t></w:r></w:p>
            <w:p><w:r><w:t>第一段內容</w:t></w:r></w:p>
            <w:p><w:r><w:drawing><a:blip r:embed="rIdPhoto"/></w:drawing></w:r></w:p>
            <w:p><w:r><w:t>第二段內容</w:t></w:r></w:p>
          </w:body>
        </w:document>'''.encode("utf-8")
        rels = '''<?xml version="1.0" encoding="UTF-8"?>
        <Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
          <Relationship Id="rIdPhoto" Type="image" Target="media/photo.png"/>
        </Relationships>'''.encode("utf-8")
        package = BytesIO()
        with zipfile.ZipFile(package, "w") as archive:
            archive.writestr("word/document.xml", doc)
            archive.writestr("word/_rels/document.xml.rels", rels)
            archive.writestr("word/media/photo.png", b"\x89PNG\r\n\x1a\nimage-data")
        result = extract_docx(package.getvalue())
        self.assertEqual(result["paragraphs"], ["文章標題", "第一段內容", "第二段內容"])
        self.assertEqual(len(result["images"]), 1)
        self.assertEqual(result["images"][0]["name"], "photo.png")
        self.assertEqual(result["images"][0]["data"], b"\x89PNG\r\n\x1a\nimage-data")


if __name__ == "__main__":
    unittest.main()
