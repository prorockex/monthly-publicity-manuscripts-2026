#!/usr/bin/env python3
"""Build a self-contained monthly archive HTML from data/*.json."""
from pathlib import Path
import json

ROOT = Path(__file__).resolve().parents[1]
TEMPLATE = ROOT / "site_template.html"
OUT = ROOT / "index.html"
DATA_DIR = ROOT / "data"

template = TEMPLATE.read_text(encoding="utf-8")
if template.count("__DATA__") != 1:
    raise SystemExit("site_template.html must contain exactly one __DATA__ token")
months = [json.loads(p.read_text(encoding="utf-8")) for p in sorted(DATA_DIR.glob("*.json"))]
if not months:
    raise SystemExit("No month JSON data found")
seen_months = set()
seen_ids = set()
for m in months:
    key = (int(m["year"]), int(m["month"]))
    if key in seen_months:
        raise SystemExit(f"Duplicate month: {key}")
    seen_months.add(key)
    for entry in m.get("entries", []):
        if entry["id"] in seen_ids:
            raise SystemExit(f"Duplicate article id: {entry['id']}")
        seen_ids.add(entry["id"])
        for image in entry.get("images", []):
            asset = (ROOT / image["src"]).resolve()
            if ROOT.resolve() not in asset.parents or not asset.is_file():
                raise SystemExit(f"Missing or unsafe image path: {image['src']}")
months.sort(key=lambda m: (int(m["year"]), int(m["month"])))
payload = json.dumps(months, ensure_ascii=False, separators=(",", ":")).replace("<", "\\u003c")
OUT.write_text(template.replace("__DATA__", payload), encoding="utf-8")
print(f"Built {OUT.name}: {len(months)} months, {len(seen_ids)} articles")
for m in months:
    print(f"{m['label']}: {len(m.get('entries', []))} entries, {sum(len(e.get('images', [])) for e in m.get('entries', []))} image placements")
