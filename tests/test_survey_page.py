import math
import re
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SURVEY = ROOT / "survey/index.html"
CLASSIC = ROOT / "src/island_classic.js"
SKY = ROOT / "src/island_sky.js"
HOME_TEMPLATE = ROOT / "home_template.html"
HOME = ROOT / "index.html"

QUESTIONS = [
    "1. 您的服務單位或身分：",
    "2. 您的服務年資（非同仁免填）：",
    "3. 您閱讀《中鋼勞工月刊》的頻率：",
    "4. 您目前主要的閱讀管道：",
    "5. 您對現行月刊「版面設計與排版」的滿意度：",
    "6. 您最感興趣的單元／主題（可複選，最多 3 項）：",
    "7. 未來希望增加或深入報導的主題（簡答）：",
    "8. 對《中鋼勞工月刊》的整體改進建議或想對編輯部說的話（開放式簡答）：",
]

SECTIONS = [
    "第一部分：基本資料",
    "第二部分：閱讀習慣與體驗",
    "第三部分：內容喜好與建議",
]

Q1 = ["中鋼本公司同仁", "集團子公司同仁", "退休同仁", "眷屬／外部讀者"]
Q2 = ["5 年以下", "5～15 年", "15～25 年", "25 年以上"]
Q3 = ["每期必讀", "經常閱讀（選擇感興趣的主題閱讀）", "偶爾翻閱", "幾乎不讀"]
Q4 = ["紙本月刊", "公司內網／電子書版本", "行動裝置（手機／平板）"]
Q5 = ["非常滿意", "滿意", "普通", "不滿意", "非常不滿意"]
Q6 = [
    "勞資溝通與權益宣導",
    "工安防護與健康促進",
    "職場技能與技術分享",
    "同仁人物故事與社團活動",
    "藝文創作與生活休閒",
    "集團重大動態與企劃",
    "其他：",
]


def option_values(html, name):
    return re.findall(rf'<input type="(?:radio|checkbox)" name="{name}" value="([^"]+)"', html)


class SurveyPageTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.html = SURVEY.read_text(encoding="utf-8")
        cls.classic = CLASSIC.read_text(encoding="utf-8")
        cls.sky = SKY.read_text(encoding="utf-8")
        cls.home_template = HOME_TEMPLATE.read_text(encoding="utf-8")
        cls.home = HOME.read_text(encoding="utf-8") if HOME.exists() else ""

    def test_questions_and_options_match_source_wording(self):
        for text in SECTIONS + QUESTIONS:
            with self.subTest(text=text):
                self.assertIn(text, self.html)
        self.assertEqual(option_values(self.html, "q1"), Q1)
        self.assertEqual(option_values(self.html, "q2"), Q2)
        self.assertEqual(option_values(self.html, "q3"), Q3)
        self.assertEqual(option_values(self.html, "q4"), Q4)
        self.assertEqual(option_values(self.html, "q5"), Q5)
        self.assertIn("其他：", self.html)
        for topic in Q6[:-1]:
            self.assertIn(f'value="{topic}"', self.html)

    def test_live_submit_posts_to_endpoint_and_has_no_link_back(self):
        self.assertRegex(self.html, r'var SURVEY_ENDPOINT = "https://script\.google\.com/macros/s/[^"]+/exec"')
        self.assertIn('method: "POST"', self.html)
        self.assertIn("text/plain;charset=utf-8", self.html)
        self.assertIn("fetch(SURVEY_ENDPOINT", self.html)
        self.assertIn("送出失敗，請稍後再試", self.html)
        self.assertIn("送出中…", self.html)
        self.assertIn("submitButton.disabled = true", self.html)
        self.assertNotIn("XMLHttpRequest", self.html)
        self.assertNotIn("預覽版", self.html)
        self.assertNotIn("reset=1", self.html)
        self.assertNotIn("wantsReset", self.html)
        lowered = self.html.lower()
        self.assertNotIn("index.html", lowered)
        self.assertNotIn("month.html", lowered)
        self.assertNotIn("href=\"../", lowered)
        self.assertIsNone(re.search(r'href\s*=\s*["\'](?!#)', self.html))

    def test_q6_is_capped_at_three_choices(self):
        self.assertIn("picked.length >= 3", self.html)
        self.assertIn("checkedQ6().length > 3", self.html)
        self.assertIn('name="q6"', self.html)

    def test_q2_disabled_for_guest_readers(self):
        self.assertIn("眷屬／外部讀者", self.html)
        self.assertIn("本題可免填", self.html)
        self.assertIn("el.disabled = guest", self.html)

    def test_homepage_adds_survey_entries_without_list_mode(self):
        for source in (self.home_template, self.home):
            self.assertIn('href="survey/index.html"', source)
            self.assertIn("target=\"_blank\"", source)
            self.assertIn("讀者問卷", source)
            self.assertIn("survey-rail-link", source)
            self.assertIn("survey-label", source)
            self.assertNotIn("預覽版", source)
            self.assertNotIn("清單模式", source)

    def test_both_editions_open_survey_in_a_new_tab(self):
        for source in (self.classic, self.sky):
            self.assertIn("SURVEY_ISLAND", source)
            self.assertIn("survey/index.html", source)
            self.assertIn("讀者問卷", source)
            self.assertIn("addSurveyIsland()", source)
            self.assertIn('window.open(route, "_blank", "noopener,noreferrer")', source)
            self.assertIn("openInNewTab", source)
            self.assertIn("survey-label", source)
            self.assertNotIn("預覽版", source)

    def test_survey_island_clearance_from_existing_layout(self):
        # 與 src 中常數一致：xz=(0, 9.2), r=1.65；天空版 y=6
        survey_xz = (0.0, 9.2)
        radius = 1.65
        islands = {
            1: ((0.0, -8.0), 3.4),
            2: ((8 * math.cos(-math.pi / 2 + 2 * math.pi / 3), 8 * math.sin(-math.pi / 2 + 2 * math.pi / 3)), 3.4),
            3: ((8 * math.cos(-math.pi / 2 + 4 * math.pi / 3), 8 * math.sin(-math.pi / 2 + 4 * math.pi / 3)), 3.4),
        }

        def dist(a, b):
            return math.hypot(a[0] - b[0], a[1] - b[1])

        distances = {k: dist(survey_xz, c) for k, (c, _r) in islands.items()}
        nearest = min(distances.values())
        self.assertAlmostEqual(nearest, 8.6626, places=3)
        self.assertGreater(nearest - 3.4 - radius, 3.6)
        self.assertGreater(dist(survey_xz, (0.0, 0.0)) - 1.55 - radius, 5.9)
        self.assertGreater(13.62 - dist(survey_xz, (0.0, 0.0)) - radius - 0.555, 2.2)
        self.assertGreater(abs(survey_xz[1] - 4.0) - radius - 0.40, 3.1)

        for source in (self.classic, self.sky):
            self.assertIn("x: 0", source)
            self.assertIn("z: 9.2", source)
            self.assertIn("radius: 1.65", source)

    def test_one_response_per_device_blocks_form_until_successful_submit(self):
        self.assertIn("survey-2026-reader-v1", self.html)
        self.assertIn("localStorage.setItem", self.html)
        self.assertIn("document.cookie", self.html)
        self.assertIn("indexedDB", self.html)
        self.assertIn("crypto.randomUUID", self.html)
        self.assertIn("您已填答過本問卷，感謝您的參與", self.html)
        self.assertIn('id="already"', self.html)
        self.assertIn("showAlready", self.html)
        self.assertIn("persistMark", self.html)
        self.assertIn("ensureDeviceId", self.html)
        self.assertIn('data.reason === "duplicate"', self.html)
        self.assertIn("showThanks", self.html)
        self.assertIn("failSubmit", self.html)
        self.assertNotIn("wantsReset", self.html)
        self.assertNotIn("reset=1", self.html)
        self.assertNotIn("預覽版", self.html)
        # 本機記號以 JSON record 寫入，不把各題答案當作 setItem 的獨立 key
        self.assertNotRegex(
            self.html,
            r"localStorage\.setItem\([^)]*(q1|q2|q3|q4|q5|q6|q7|q8)",
        )
        self.assertIn("answersFromPayload", self.html)
        self.assertIn("record.answers", self.html)
        self.assertIn("deviceId:", self.html)
        self.assertIn("submitted: true", self.html)
        self.assertIn("showAlready();", self.html)
        lowered = self.html.lower()
        self.assertNotIn("month.html", lowered)


    def test_submitted_answers_are_shown_read_only_and_cannot_resubmit(self):
        self.assertIn("showReview", self.html)
        self.assertIn("setFormReadOnly", self.html)
        self.assertIn("applyAnswers", self.html)
        self.assertIn("hasStoredAnswers", self.html)
        self.assertIn("formatSubmittedAt", self.html)
        self.assertIn('id="review-note"', self.html)
        self.assertIn("您已於 ", self.html)
        self.assertIn("填答，以下是您的回覆（僅供檢視，無法再次送出）", self.html)
        self.assertIn("此裝置未保留答案內容", self.html)
        self.assertIn("is-readonly", self.html)
        self.assertIn("submitButton.hidden = true", self.html)
        self.assertIn('form.classList.contains("is-readonly")', self.html)
        self.assertIn("Asia/Taipei", self.html)
        self.assertIn("persistMark(result.deviceId, answersFromPayload(result.payload))", self.html)
        self.assertIn("if (isFilledRecord(mark) && hasStoredAnswers(mark)) showReview(mark)", self.html)
        self.assertIn('checkRadio("q1", answers.q1)', self.html)
        self.assertIn('checkRadio("q5", answers.q5)', self.html)
        self.assertIn("answers.q7", self.html)
        self.assertIn("answers.q8", self.html)
        self.assertIn("answers.q6", self.html)
        self.assertIn("answers.q6Other", self.html)



if __name__ == "__main__":
    unittest.main()
