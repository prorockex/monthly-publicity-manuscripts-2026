#!/usr/bin/env python3
"""Build the island homepage and self-contained monthly review page."""
from pathlib import Path
import html
import json

from monthly_site_data import home_navigation_html, reviewer_url, summarize_months

ROOT = Path(__file__).resolve().parents[1]
REVIEW_TEMPLATE = ROOT / "site_template.html"
HOME_TEMPLATE = ROOT / "home_template.html"
HOME_OUT = ROOT / "index.html"
REVIEW_OUT = ROOT / "month.html"
DATA_DIR = ROOT / "data"
DOCX_EXPORTER = ROOT / "scripts" / "docx_export.js"
ALLOWED_GROUPS = {0, 1, 2, 3}
ALLOWED_CATEGORIES = {"文稿", "剪影", "詩詞", "親子園地", "封底", "待分類"}


def _payload(value):
    return json.dumps(value, ensure_ascii=False, separators=(",", ":")).replace("<", "\\u003c")


def _replace_once(template, token, value, name):
    if template.count(token) != 1:
        raise SystemExit("{} must contain exactly one {} token".format(name, token))
    return template.replace(token, value)


def main():
    review_template = REVIEW_TEMPLATE.read_text(encoding="utf-8")
    home_template = HOME_TEMPLATE.read_text(encoding="utf-8")
    exporter = DOCX_EXPORTER.read_text(encoding="utf-8")
    months = [json.loads(path.read_text(encoding="utf-8")) for path in sorted(DATA_DIR.glob("*.json"))]
    if not months:
        raise SystemExit("No month JSON data found")

    seen_months = set()
    seen_ids = set()
    for month_data in months:
        key = (int(month_data["year"]), int(month_data["month"]))
        if key in seen_months:
            raise SystemExit("Duplicate month: {}".format(key))
        seen_months.add(key)
        for entry in month_data.get("entries", []):
            if entry["id"] in seen_ids:
                raise SystemExit("Duplicate article id: {}".format(entry["id"]))
            seen_ids.add(entry["id"])
            try:
                group = int(entry.get("group", 0))
            except (TypeError, ValueError):
                raise SystemExit("Invalid group in article {}".format(entry["id"]))
            if group not in ALLOWED_GROUPS:
                raise SystemExit("Unsupported group in article {}: {}".format(entry["id"], group))
            if entry.get("category") not in ALLOWED_CATEGORIES:
                raise SystemExit("Unsupported category in article {}: {}".format(entry["id"], entry.get("category")))
            for image in entry.get("images", []):
                asset = (ROOT / image["src"]).resolve()
                if ROOT.resolve() not in asset.parents or not asset.is_file():
                    raise SystemExit("Missing or unsafe image path: {}".format(image["src"]))

    months.sort(key=lambda item: (int(item["year"]), int(item["month"])))
    review_html = _replace_once(review_template, "__DATA__", _payload(months), "site_template.html")
    review_html = _replace_once(review_html, "__DOCX_EXPORT__", exporter, "site_template.html")

    summary = summarize_months(months)
    nav = home_navigation_html(summary)
    latest = summary["months"][-1]
    status = "{} 個月份 · {} 篇稿件 · {} 個附圖位置".format(
        summary["totalMonths"], summary["totalEntries"], summary["totalImages"]
    )
    home_html = _replace_once(home_template, "__HOME_DATA__", _payload(summary), "home_template.html")
    home_html = _replace_once(home_html, "__ARCHIVE_STATUS__", html.escape(status), "home_template.html")
    home_html = _replace_once(home_html, "__LATEST_MONTH__", html.escape(reviewer_url(latest["key"]), quote=True), "home_template.html")
    for token, value in (
        ("__MONTH_LINKS__", nav["months"]),
        ("__CATEGORY_LINKS__", nav["categories"]),
        ("__GROUP_LINKS__", nav["groups"]),
    ):
        home_html = _replace_once(home_html, token, value, "home_template.html")

    HOME_OUT.write_text(home_html, encoding="utf-8")
    REVIEW_OUT.write_text(review_html, encoding="utf-8")
    print("Built {}: {} months, {} articles".format(HOME_OUT.name, len(months), len(seen_ids)))
    print("Built {}: {} months, {} articles".format(REVIEW_OUT.name, len(months), len(seen_ids)))
    for month_data in months:
        print("{}: {} entries, {} image placements".format(
            month_data["label"],
            len(month_data.get("entries", [])),
            sum(len(entry.get("images", [])) for entry in month_data.get("entries", [])),
        ))


if __name__ == "__main__":
    main()
