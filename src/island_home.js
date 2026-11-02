import { mountClassicIsland } from "./island_classic.js";
import { mountSkyIsland } from "./island_sky.js";

(() => {
  const status = document.getElementById("sceneFallback");
  const stage = document.getElementById("islandStage");
  const canvasHost = document.getElementById("three-root");
  const labelHost = document.getElementById("label-root");
  const rotateButton = document.getElementById("rotateToggle");
  const resetButton = document.getElementById("resetView");
  const sceneNote = document.getElementById("sceneNote");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const NOTES = {
    classic: "滑鼠／觸控拖曳旋轉，滾輪或雙指縮放。外海兩艘遊輪只是風景，不能點選。組別、類別與月份請用文稿導覽。",
    sky: "滑鼠／觸控拖曳旋轉，滾輪或雙指縮放。兩架玩具飛機只是風景，不能點選。可切換白天、傍晚、夜晚。組別、類別與月份請用文稿導覽。"
  };

  const legacyArticle = decodeURIComponent(location.hash.slice(1));
  const legacyKey = legacyArticle.match(/^(\d{4}-\d{2})-/);
  const params = new URLSearchParams(location.search);
  if (legacyKey) {
    location.replace(`month.html?month=${encodeURIComponent(legacyKey[1])}${location.hash}`);
    return;
  }
  if (/^\d{4}-\d{2}$/.test(params.get("month") || "")) {
    location.replace(`month.html${location.search}${location.hash}`);
    return;
  }

  let data;
  try {
    data = JSON.parse(document.getElementById("home-data").textContent || "{}");
  } catch (_) {
    data = {};
  }
  const months = Array.isArray(data.months) ? data.months : [];
  let storedMonth = null;
  try { storedMonth = localStorage.getItem("homeIslandMonth"); } catch (_) {}
  const latest = months.find((month) => month.key === storedMonth) || months[months.length - 1];

  function unavailable(message) {
    status.textContent = message;
    status.hidden = false;
    rotateButton.disabled = true;
    rotateButton.setAttribute("aria-pressed", "false");
    rotateButton.textContent = "3D 旋轉未啟用";
    resetButton.disabled = true;
  }

  if (!months.length || !latest) {
    unavailable("目前尚無月份資料；請使用文稿導覽，或稍後再試。");
    return;
  }
  const probe = document.createElement("canvas");
  if (!probe.getContext("webgl2")) {
    unavailable("此瀏覽器未啟用 WebGL；請使用文稿導覽進入審稿頁。若導覽已收合，按上方「顯示導覽」。");
    return;
  }

  function readEdition() {
    try {
      if (localStorage.getItem("homeIslandEdition") === "classic") return "classic";
    } catch (_) {}
    return "sky";
  }

  function applyChrome(edition) {
    document.body.classList.toggle("edition-classic", edition === "classic");
    document.body.classList.toggle("edition-sky", edition === "sky");
    document.body.classList.remove("tod-day", "tod-dusk", "tod-night");
    if (edition === "sky") {
      let tod = "day";
      try {
        const stored = localStorage.getItem("homeSkyTod");
        if (stored === "dusk" || stored === "night") tod = stored;
      } catch (_) {}
      document.body.classList.add(`tod-${tod}`);
    }
    if (sceneNote) sceneNote.textContent = NOTES[edition];
    document.querySelectorAll(".edition-switch [data-edition]").forEach((button) => {
      button.setAttribute("aria-checked", button.getAttribute("data-edition") === edition ? "true" : "false");
    });
  }

  const env = { status, stage, canvasHost, labelHost, rotateButton, resetButton, reducedMotion, data, months, latest };
  let dispose = null;
  let active = null;

  function mount(edition) {
    if (dispose) {
      dispose();
      dispose = null;
    }
    canvasHost.replaceChildren();
    labelHost.replaceChildren();
    applyChrome(edition);
    active = edition;
    try {
      dispose = edition === "classic" ? mountClassicIsland(env) : mountSkyIsland(env);
    } catch (error) {
      console.error(error);
      unavailable("3D 場景無法啟動；文稿導覽仍可完整使用。若導覽已收合，按上方「顯示導覽」。");
    }
  }

  mount(readEdition());
  window.addEventListener("home-island-edition", (event) => {
    const next = event.detail === "classic" ? "classic" : "sky";
    if (next === active) return;
    mount(next);
  });
})();
