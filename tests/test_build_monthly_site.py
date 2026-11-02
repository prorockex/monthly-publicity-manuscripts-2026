import hashlib
import json
import re
import subprocess
import sys
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def digest(path):
    return hashlib.sha256(path.read_bytes()).hexdigest()


class MonthlySiteBuildTests(unittest.TestCase):
    def test_build_publishes_island_and_review_pages_without_changing_source_months(self):
        protected = [ROOT / "data/2026-09.json", ROOT / "data/2026-10.json"]
        before = {path: digest(path) for path in protected}
        result = subprocess.run(
            [sys.executable, "scripts/build_monthly_site.py"],
            cwd=ROOT,
            text=True,
            capture_output=True,
            check=True,
        )

        home = (ROOT / "index.html").read_text(encoding="utf-8")
        review = (ROOT / "month.html").read_text(encoding="utf-8")
        home_match = re.search(
            r'<script id="home-data" type="application/json">(.*?)</script>', home, re.S
        )
        if home_match is None:
            self.fail("home-data is missing")
        summary = json.loads(home_match.group(1))
        self.assertEqual(summary["totalMonths"], 2)
        self.assertEqual(summary["totalEntries"], 106)
        self.assertEqual([item["key"] for item in summary["months"]], ["2026-09", "2026-10"])
        self.assertIn('href="month.html?month=2026-09"', home)
        self.assertIn('href="month.html?month=2026-10"', home)
        self.assertIn('id="sideRails"', home)
        self.assertIn('class="rail rail-left"', home)
        self.assertIn('class="rail rail-right"', home)
        self.assertIn('href="month.html?month=2026-10&amp;group=1"', home)
        self.assertNotIn("清單模式", home)
        self.assertNotIn("mode-list", home)
        self.assertIn("assets/island-home.bundle.js", home)
        self.assertNotIn("__MONTH_LINKS__", home)
        self.assertNotIn("__HOME_DATA__", home)

        start = review.index("const initial=") + len("const initial=")
        months, _ = json.JSONDecoder().raw_decode(review[start:])
        self.assertEqual([(item["year"], item["month"], len(item["entries"])) for item in months], [(2026, 9, 58), (2026, 10, 48)])
        self.assertIn('<option value="0">未指定組別</option>', review)
        self.assertIn("requestedCategory=routeParams.get('category')", review)
        self.assertIn("data-review-status", review)
        self.assertIn("入選", review)
        self.assertIn("不入選", review)
        self.assertIn("ReviewDocx.build", review)
        self.assertNotIn("__DATA__", review)
        self.assertNotIn("__DOCX_EXPORT__", review)
        self.assertEqual({path: digest(path) for path in protected}, before)
        self.assertIn("Built index.html: 2 months, 106 articles", result.stdout)


if __name__ == "__main__":
    unittest.main()
