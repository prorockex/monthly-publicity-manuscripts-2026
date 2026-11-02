# Surface brief: 島嶼入口

## Scope

- Surface: root landing page (`index.html`) for the public monthly publicity-manuscript archive.
- Visitor mode: Experience — the archive's island map leads; the list is a fully usable alternate route.
- Audience: provisionally 文宣組工作者／審稿委員, inferred from the existing reviewer workflow because the structured confirmation was unavailable.
- Job: choose a month, category, or group and enter the existing reviewer with the selected filter already applied.
- Constraints: Traditional Chinese interface; retain static hosting and local-file opening; support touch, keyboard, reduced motion, and non-WebGL browsers; do not alter the existing September/October source data or review/export features.

## Direction contract

**THESIS:** The archive behaves like a small archipelago: each month is a reachable island, while category buildings and group markers are shortcuts into the same review context. It refuses to make the 3D picture the only navigation.

**OWN-WORLD:** Extend the existing green publication-site palette into low-poly grass, stone, and blue-green water, with restrained warm roof/marker accents. Use the actual manuscript categories and dates as labels; no generic policy topics or copied campaign content.

**STORY:** A visitor first sees the archipelago, then chooses a month, group, or category from the side rails (or from the islands themselves). Drag/touch rotates the view, wheel/pinch zooms, selecting a structure highlights it and opens the reviewer. The same links stay in the document when WebGL or JavaScript is unavailable. A single control shows or hides the rails; there is no second layout that shrinks the island.

**FIRST VIEWPORT:** The island scene fills the viewport, with the three group islands and the central overview readable in the middle. On wide screens, group links sit in the left margin and category/month links sit in the right margin. On narrow or square screens the same links stack under the scene so they do not cover the 3D controls. Links remain visible without JavaScript.

**FORM:** User-pinned low-poly island topology and HEART-style interaction reference; visual content and copy remain about union publicity manuscripts. Concept seeding is intentionally skipped because the structure, controls, routes, and exclusions were specified in the request. Seed key: not applicable.

**FINISH:** unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
