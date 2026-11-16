(function (root) {
  "use strict";

  function monthKey(month) {
    return String(month.year) + "-" + String(month.month).padStart(2, "0");
  }

  function reviewKey(month, entryId) {
    var key = typeof month === "string" ? month : monthKey(month);
    return key + "|" + String(entryId);
  }

  function parseReviewKey(value) {
    var text = String(value || "");
    var cut = text.indexOf("|");
    if (cut < 1) return { monthKey: "", id: text };
    return { monthKey: text.slice(0, cut), id: text.slice(cut + 1) };
  }

  function findEntryMonths(months, entryId) {
    var found = [];
    (months || []).forEach(function (month) {
      if ((month.entries || []).some(function (entry) { return String(entry.id) === String(entryId); })) {
        found.push(month);
      }
    });
    return found;
  }

  function mergeReview(left, right) {
    var first = left || {};
    var second = right || {};
    var status = "pending";
    if (first.status === "selected" || second.status === "selected") status = "selected";
    else if (first.status === "rejected" || second.status === "rejected") status = "rejected";
    else status = first.status || second.status || "pending";
    var note = String(first.note || "").trim();
    var other = String(second.note || "").trim();
    if (other && other !== note) note = note ? note + "\n" + other : other;
    return { status: status, note: note };
  }

  function normalizeReviews(store, months) {
    var out = {};
    var changed = false;
    var keys = Object.keys(store || {});
    keys.sort(function (a, b) {
      return (parseReviewKey(a).monthKey ? 0 : 1) - (parseReviewKey(b).monthKey ? 0 : 1);
    });
    keys.forEach(function (key) {
      var record = store[key];
      var parsed = parseReviewKey(key);
      var nextKey = key;
      if (!parsed.monthKey && parsed.id) {
        var matches = findEntryMonths(months, parsed.id);
        if (matches.length === 1) {
          nextKey = reviewKey(matches[0], parsed.id);
          changed = true;
        }
      }
      if (Object.prototype.hasOwnProperty.call(out, nextKey)) {
        record = mergeReview(out[nextKey], record);
        changed = true;
      }
      out[nextKey] = record;
    });
    return { reviews: out, changed: changed };
  }

  function selectedEntries(store, months, current) {
    var currentKey = monthKey(current);
    var entries = [];
    Object.keys(store || {}).forEach(function (key) {
      var record = store[key];
      if (!record || record.status !== "selected") return;
      var parsed = parseReviewKey(key);
      if (parsed.monthKey !== currentKey) return;
      var month = (months || []).find(function (item) { return monthKey(item) === parsed.monthKey; });
      var entry = month && (month.entries || []).find(function (item) { return String(item.id) === String(parsed.id); });
      if (entry) entries.push({ k: key, m: month, e: entry, r: record });
    });
    return entries;
  }

  var api = {
    monthKey: monthKey,
    reviewKey: reviewKey,
    parseReviewKey: parseReviewKey,
    findEntryMonths: findEntryMonths,
    mergeReview: mergeReview,
    normalizeReviews: normalizeReviews,
    selectedEntries: selectedEntries
  };
  root.ReviewCollection = api;
  if (typeof module !== "undefined" && module.exports) module.exports = api;
})(typeof window !== "undefined" ? window : globalThis);
