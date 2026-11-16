const assert = require("assert");
const path = require("path");
const ReviewCollection = require(path.join(__dirname, "..", "scripts", "review_collection.js"));

const months = [
  { year: 2026, month: 10, label: "2026 年 10 月", entries: [{ id: "2026-10-1-文稿-1-1", title: "十月稿", group: 1, category: "文稿", categoryNo: 1 }] },
  { year: 2026, month: 11, label: "2026 年 11 月", entries: [{ id: "2026-11-drive-abc", title: "十一月稿", group: 2, category: "詩詞", categoryNo: 5 }] }
];

function testSelectedEntriesOnlyCurrentMonth() {
  const store = {
    "2026-10|2026-10-1-文稿-1-1": { status: "selected", note: "十月入選" },
    "2026-11|2026-11-drive-abc": { status: "selected", note: "十一月入選" },
    "2026-10|missing": { status: "selected", note: "" }
  };
  const october = ReviewCollection.selectedEntries(store, months, months[0]);
  const november = ReviewCollection.selectedEntries(store, months, months[1]);
  assert.strictEqual(october.length, 1, "10 月只應列出該月入選");
  assert.strictEqual(october[0].e.title, "十月稿");
  assert.strictEqual(october[0].r.note, "十月入選");
  assert.strictEqual(november.length, 1, "11 月只應列出該月入選");
  assert.strictEqual(november[0].e.title, "十一月稿");
  assert.deepStrictEqual(
    ReviewCollection.selectedEntries(store, months, { year: 2026, month: 9 }).map((item) => item.e.title),
    [],
    "沒有入選的月份應為空清單"
  );
}

function testNormalizeMigratesBareArticleIds() {
  const store = {
    "2026-11-drive-abc": { status: "selected", note: "舊鍵" },
    "2026-10|2026-10-1-文稿-1-1": { status: "rejected", note: "已有月份鍵" }
  };
  const result = ReviewCollection.normalizeReviews(store, months);
  assert.strictEqual(result.changed, true);
  assert.deepStrictEqual(result.reviews["2026-11|2026-11-drive-abc"], { status: "selected", note: "舊鍵" });
  assert.ok(!Object.prototype.hasOwnProperty.call(result.reviews, "2026-11-drive-abc"));
  assert.deepStrictEqual(result.reviews["2026-10|2026-10-1-文稿-1-1"], { status: "rejected", note: "已有月份鍵" });
}

function testNormalizeMergesBareKeyIntoExistingMonthKey() {
  const store = {
    "2026-10-1-文稿-1-1": { status: "selected", note: "來自舊勾選" },
    "2026-10|2026-10-1-文稿-1-1": { status: "pending", note: "已有意見" }
  };
  const result = ReviewCollection.normalizeReviews(store, months);
  assert.strictEqual(result.changed, true);
  assert.deepStrictEqual(result.reviews["2026-10|2026-10-1-文稿-1-1"], { status: "selected", note: "已有意見\n來自舊勾選" });
  assert.strictEqual(Object.keys(result.reviews).length, 1);
}

function testNormalizeLeavesUnknownKeysIntact() {
  const store = { "mystery-id": { status: "selected", note: "無法對應" } };
  const result = ReviewCollection.normalizeReviews(store, months);
  assert.strictEqual(result.changed, false);
  assert.deepStrictEqual(result.reviews, store);
}

testSelectedEntriesOnlyCurrentMonth();
testNormalizeMigratesBareArticleIds();
testNormalizeMergesBareKeyIntoExistingMonthKey();
testNormalizeLeavesUnknownKeysIntact();
console.log("ok");
