import sys
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

from scripts.monthly_site_data import home_navigation_html, reviewer_url, summarize_months


class MonthlyHomeDataTests(unittest.TestCase):
    def setUp(self):
        self.months = [
            {
                "year": 2026,
                "month": 10,
                "label": "2026 年 10 月",
                "entries": [
                    {"id": "a", "group": 1, "category": "剪影", "images": [{"src": "a.png"}]},
                    {"id": "b", "group": 0, "category": "待分類", "images": []},
                ],
            },
            {
                "year": 2026,
                "month": 9,
                "label": "2026 年 9 月",
                "entries": [{"id": "c", "group": 2, "category": "文稿", "images": [{"src": "b.png"}]}],
            },
        ]

    def test_summarizes_months_without_copying_article_bodies(self):
        summary = summarize_months(self.months)
        self.assertEqual([m["key"] for m in summary["months"]], ["2026-09", "2026-10"])
        self.assertEqual(summary["totalEntries"], 3)
        self.assertEqual(summary["totalImages"], 2)
        october = summary["months"][1]
        self.assertEqual(october["entries"], 2)
        self.assertEqual(october["groups"], [{"id": 0, "label": "未指定組別", "count": 1}, {"id": 1, "label": "第 1 組", "count": 1}])
        self.assertEqual(october["categories"], [{"name": "剪影", "count": 1}, {"name": "待分類", "count": 1}])
        self.assertNotIn("paragraphs", october)
        self.assertEqual(october["groupCategories"]["1"], [{"name": "剪影", "count": 1}])

    def test_group_directory_nests_category_links_under_each_group(self):
        nav = home_navigation_html(summarize_months(self.months))
        self.assertIn('href="month.html?month=2026-10&amp;group=1&amp;category=%E5%89%AA%E5%BD%B1"', nav["groups"])

    def test_reviewer_routes_preserve_month_and_filters(self):
        self.assertEqual(reviewer_url("2026-09"), "month.html?month=2026-09")
        self.assertEqual(reviewer_url("2026-10", group=2), "month.html?month=2026-10&group=2")
        self.assertEqual(
            reviewer_url("2026-10", category="親子園地"),
            "month.html?month=2026-10&category=%E8%A6%AA%E5%AD%90%E5%9C%92%E5%9C%B0",
        )

    def test_static_navigation_contains_working_links_for_no_webgl_or_javascript(self):
        summary = summarize_months(self.months)
        nav = home_navigation_html(summary)
        self.assertIn('href="month.html?month=2026-09"', nav["months"])
        self.assertIn('href="month.html?month=2026-10&amp;category=%E5%89%AA%E5%BD%B1"', nav["categories"])
        self.assertIn('href="month.html?month=2026-10&amp;group=0"', nav["groups"])
        self.assertIn("未指定組別", nav["groups"])


if __name__ == "__main__":
    unittest.main()
