"""Small, deterministic helpers for the published island-home summary."""
import html
from collections import Counter
from urllib.parse import urlencode

CATEGORY_ORDER = ["文稿", "剪影", "詩詞", "親子園地", "封底", "待分類"]


def reviewer_url(month_key, group=None, category=None):
    params = {"month": str(month_key)}
    if group is not None:
        params["group"] = str(group)
    if category is not None:
        params["category"] = str(category)
    return "month.html?" + urlencode(params)


def summarize_months(months):
    """Return only navigation counts; never embed manuscript text in home.html."""
    summaries = []
    for month in sorted(months, key=lambda item: (int(item["year"]), int(item["month"]))):
        entries = list(month.get("entries", []))
        category_counts = Counter(str(entry.get("category", "待分類")) for entry in entries)
        group_counts = Counter()
        for entry in entries:
            try:
                group_counts[int(entry.get("group", 0))] += 1
            except (TypeError, ValueError):
                group_counts[0] += 1
        categories = sorted(category_counts, key=lambda value: (CATEGORY_ORDER.index(value) if value in CATEGORY_ORDER else len(CATEGORY_ORDER), value))
        groups = sorted(group_counts)
        key = "{}-{:02d}".format(int(month["year"]), int(month["month"]))
        summaries.append({
            "year": int(month["year"]),
            "month": int(month["month"]),
            "key": key,
            "label": str(month.get("label") or key),
            "entries": len(entries),
            "images": sum(len(entry.get("images", [])) for entry in entries),
            "categories": [{"name": name, "count": category_counts[name]} for name in categories],
            "groups": [
                {"id": group, "label": "未指定組別" if group == 0 else "第 {} 組".format(group), "count": group_counts[group]}
                for group in groups
            ],
        })
    return {
        "months": summaries,
        "totalMonths": len(summaries),
        "totalEntries": sum(month["entries"] for month in summaries),
        "totalImages": sum(month["images"] for month in summaries),
    }


def _link(label, href, count):
    return '<li><a href="{}">{}</a><span>{} 篇</span></li>'.format(
        html.escape(href, quote=True), html.escape(str(label)), int(count)
    )


def home_navigation_html(summary):
    """Render static anchors used when WebGL or client-side JavaScript is absent."""
    months = summary.get("months", [])
    month_links = "".join(_link(month["label"], reviewer_url(month["key"]), month["entries"]) for month in reversed(months))
    if not months:
        return {"months": "<li>目前沒有可瀏覽的月份。</li>", "categories": "<li>目前沒有可篩選的類別。</li>", "groups": "<li>目前沒有可篩選的組別。</li>"}
    latest = months[-1]
    category_links = "".join(
        _link(item["name"], reviewer_url(latest["key"], category=item["name"]), item["count"])
        for item in latest["categories"]
    )
    group_links = "".join(
        _link(item["label"], reviewer_url(latest["key"], group=item["id"]), item["count"])
        for item in latest["groups"]
    )
    return {"months": month_links, "categories": category_links, "groups": group_links}
