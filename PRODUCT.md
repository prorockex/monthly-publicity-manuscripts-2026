# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Based on the current inline review workflow, the primary users are provisionally assumed to be 文宣組工作者與審稿委員 who need to find and review monthly manuscripts. The site is also publicly reachable to readers. The priority for the new entry page was not confirmed because the structured check could not be delivered; this build therefore prioritizes the review workflow.

## Product Purpose

Organize union publicity manuscripts by year, month, group, and category. Let reviewers search and filter articles, record a pending/selected/rejected decision and notes, collect selected work, and export it to Word. A navigable island homepage should make the monthly archive and category routes easy to explore.

## Positioning

A static, month-based review archive whose synchronized group/category filters and per-article review tools work alongside a visual island index. A reproducible import script turns shared Google Drive manuscript links into month data; inaccessible sources remain honest drafts rather than fabricated article text.

## Operating Context

The existing archive currently contains 58 entries for 2026-09 and 48 for 2026-10. Manuscripts are maintained in Google Drive and the published data is built from `data/YYYY-MM.json`. Existing group values are 1–3 and categories include 文稿、剪影、詩詞、親子園地、封底.

## Capabilities and Constraints

- The site is static and hosted publicly with GitHub Pages; there is no server-side account or review synchronization.
- Review states and opinions are stored in each browser's localStorage and do not sync between devices.
- Only publicly readable Google Drive/Docs links can be fetched by the unauthenticated import script. Restricted or unparseable links must still produce a clearly marked draft with its original `driveUrl`.
- When group/category metadata is missing, the provisional import behavior is 未指定組別／待分類; it must be visible and filterable rather than silently assigned to a real group.
- Preserve the existing 2026-09 and 2026-10 JSON data and all current review/export behavior.
- The 3D scene is progressive enhancement: keyboard/touch-accessible HTML navigation remains usable when WebGL or JavaScript is unavailable.
- Only content intended for public release may be committed to this public repository and deployed.

## Brand Commitments

- All user-facing interface text is in Traditional Chinese.
- The new entry page uses a low-poly, rotatable island metaphor inspired by the interaction reference supplied by the user; it must not reuse that reference's political content or copy its page.

## Evidence on Hand

- `data/2026-09.json` and `data/2026-10.json` are the existing 106-entry source data.
- `site_template.html` contains the live review, synchronized filters, local review storage, and browser-side `.docx` export flow.
- The current site and repository are public. October manuscript and verified source links already exist in the current data.

## Product Principles

- Keep original source data intact; generated site files are reproducible from month JSON.
- Make month, category, and group navigation direct and understandable.
- Preserve source provenance; never invent article content or mislabel a folder as an individual file.
- Prefer explicit draft and missing-data states over guessed classifications.
- Keep the review flow usable without WebGL and disclose local-only review storage.

## Accessibility & Inclusion

Provide a semantic, keyboard-operable list of months, categories, and groups independent of the 3D scene. Support pointer and touch rotation, honor reduced-motion preferences, provide clear focus/selection feedback, and keep readable Traditional Chinese labels on mobile.
