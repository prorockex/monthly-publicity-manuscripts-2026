import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { CSS2DObject, CSS2DRenderer } from "three/addons/renderers/CSS2DRenderer.js";

(() => {
  const status = document.getElementById("sceneFallback");
  const stage = document.getElementById("islandStage");
  const canvasHost = document.getElementById("three-root");
  const labelHost = document.getElementById("label-root");
  const rotateButton = document.getElementById("rotateToggle");
  const resetButton = document.getElementById("resetView");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

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
  const latest = months[months.length - 1];
  const reviewURL = (month, options = {}) => {
    const query = new URLSearchParams({ month });
    if (options.group !== undefined) query.set("group", String(options.group));
    if (options.category) query.set("category", options.category);
    return `month.html?${query.toString()}`;
  };

  function unavailable(message) {
    status.textContent = message;
    status.hidden = false;
    rotateButton.disabled = true;
    rotateButton.setAttribute("aria-pressed", "false");
    rotateButton.textContent = "3D 旋轉未啟用";
    resetButton.disabled = true;
  }

  if (!months.length || !latest) {
    unavailable("目前尚無月份資料；請使用清單或稍後再試。 ");
    return;
  }

  const probe = document.createElement("canvas");
  if (!probe.getContext("webgl2")) {
    unavailable("此瀏覽器未啟用 WebGL；請使用月份、類別或組別清單進入審稿頁。");
    return;
  }

  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: "low-power" });
  } catch (_) {
    unavailable("3D 場景無法啟動；右側清單仍可完整使用。");
    return;
  }

  const scene = new THREE.Scene();
  scene.background = new THREE.Color("#fff8f4");
  scene.fog = new THREE.Fog("#edddcf", 48, 110);
  const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 200);
  const world = new THREE.Group();
  scene.add(world);

  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.6));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.0;
  renderer.domElement.setAttribute("aria-hidden", "true");
  renderer.domElement.setAttribute("role", "presentation");
  canvasHost.appendChild(renderer.domElement);

  const labelRenderer = new CSS2DRenderer();
  labelRenderer.domElement.style.position = "absolute";
  labelRenderer.domElement.style.inset = "0";
  labelRenderer.domElement.style.overflow = "hidden";
  labelRenderer.domElement.style.pointerEvents = "none";
  labelHost.appendChild(labelRenderer.domElement);

  scene.add(new THREE.HemisphereLight("#fff8f4", "#c5b5a7", 1.9));
  const fill = new THREE.DirectionalLight("#cfe4f2", 0.9);
  fill.position.set(12, 8, -10);
  scene.add(fill);
  const sun = new THREE.DirectionalLight("#ffe9cf", 3.0);
  sun.position.set(-8, 18, 12);
  sun.castShadow = true;
  sun.shadow.mapSize.set(1024, 1024);
  sun.shadow.camera.left = -28;
  sun.shadow.camera.right = 28;
  sun.shadow.camera.top = 26;
  sun.shadow.camera.bottom = -26;
  sun.shadow.bias = -0.00035;
  scene.add(sun);

  const water = new THREE.Mesh(
    new THREE.PlaneGeometry(120, 120),
    new THREE.MeshStandardMaterial({ color: "#45abbb", roughness: 0.8, metalness: 0 })
  );
  const shallows = new THREE.Mesh(new THREE.CircleGeometry(15, 48), new THREE.MeshStandardMaterial({ color: "#8fd3da", roughness: 0.8, metalness: 0, transparent: true, opacity: 0.7 }));
  shallows.rotation.x = -Math.PI / 2;
  shallows.position.y = -0.12;
  world.add(shallows);
  water.rotation.x = -Math.PI / 2;
  water.position.y = -0.17;
  water.receiveShadow = true;
  world.add(water);

  const targets = [];
  const selectableRoots = new Set();
  const palette = {
    land: ["#e6d8c8", "#d3c4aa", "#f4ece4"],
    soil: ["#c5b5a7", "#b8a07e", "#c5b5a7", "#b8a07e"],
    roof: ["#db6a41", "#e08a5f", "#c9583a"],
    building: ["#fff8f4", "#f4ebdd", "#fffdf9"],
    ink: "#211d1d"
  };
  const categoryColors = { "文稿": "#db6a41", "剪影": "#e6a15a", "詩詞": "#45abbb", "親子園地": "#e9c46a", "封底": "#c9583a", "待分類": "#78685e" };

  function material(color, options = {}) {
    return new THREE.MeshStandardMaterial({ color, roughness: 0.8, metalness: 0, flatShading: true, ...options });
  }

  function mesh(geometry, color, options = {}) {
    const result = new THREE.Mesh(geometry, material(color, options));
    result.castShadow = true;
    result.receiveShadow = true;
    return result;
  }

  function makeLabel(primaryText, detailText, url, position, className = "") {
    const anchor = document.createElement("a");
    anchor.className = `island-label ${className}`.trim();
    anchor.href = url;
    if (className.includes("group-label")) anchor.dataset.num = (primaryText.match(/\d+/) || [""])[0];
    anchor.setAttribute("aria-label", detailText ? `${primaryText}，${detailText}，開啟審稿頁` : `${primaryText}，開啟審稿頁`);
    const name = document.createElement("span");
    name.textContent = primaryText;
    anchor.appendChild(name);
    if (detailText) {
      const detail = document.createElement("small");
      detail.textContent = detailText;
      anchor.appendChild(detail);
    }
    const label = new CSS2DObject(anchor);
    label.position.set(position.x, position.y, position.z);
    return label;
  }

  function markRoot(root, url) {
    root.userData.route = url;
    root.traverse((child) => {
      if (!child.isMesh) return;
      child.userData.route = url;
      child.userData.interactiveRoot = root;
      const materials = Array.isArray(child.material) ? child.material : [child.material];
      for (const mat of materials) {
        if (mat && mat.emissive) mat.userData.originalEmissive = mat.emissive.getHex();
      }
      targets.push(child);
    });
    selectableRoots.add(root);
  }

  function addBuilding(parent, x, z, label, route, color, scale = 1, detail = "", labelOffset = 0) {
    const building = new THREE.Group();
    building.position.set(x, 1.1, z);
    parent.add(building);
    const footing = mesh(new THREE.BoxGeometry(0.98 * scale, 0.16 * scale, 0.82 * scale), "#f4ebdd");
    footing.position.y = 0.08 * scale;
    building.add(footing);
    const body = mesh(new THREE.BoxGeometry(0.72 * scale, 0.76 * scale, 0.62 * scale), palette.building[(label.length + Math.round(x * 10)) % palette.building.length]);
    body.position.y = 0.52 * scale;
    building.add(body);
    const roof = mesh(new THREE.ConeGeometry(0.62 * scale, 0.54 * scale, 4, 1), color);
    roof.position.y = 1.15 * scale;
    roof.rotation.y = Math.PI / 4;
    building.add(roof);
    const door = mesh(new THREE.BoxGeometry(0.19 * scale, 0.34 * scale, 0.045 * scale), "#78685e", { roughness: 0.9 });
    door.position.set(0, 0.28 * scale, 0.33 * scale);
    building.add(door);
    for (const side of [-1, 1]) {
      const windowMesh = mesh(new THREE.BoxGeometry(0.13 * scale, 0.14 * scale, 0.04 * scale), "#8fd3da", { roughness: 0.6 });
      windowMesh.position.set(side * 0.22 * scale, 0.64 * scale, 0.33 * scale);
      building.add(windowMesh);
    }
    markRoot(building, route);
    building.add(makeLabel(label, detail, route, { x: 0, y: 2.02 * scale + labelOffset, z: 0 }, "cat-label"));
    return building;
  }


  function addTree(parent, x, z, scale = 1, tint = "#9fbf8f") {
    const tree = new THREE.Group();
    tree.position.set(x, 1.05, z);
    parent.add(tree);
    const trunk = mesh(new THREE.CylinderGeometry(0.08 * scale, 0.12 * scale, 0.55 * scale, 5), "#a77a55");
    trunk.position.y = 0.28 * scale;
    tree.add(trunk);
    const crown = mesh(new THREE.DodecahedronGeometry(0.44 * scale, 0), tint);
    crown.position.y = 0.78 * scale;
    tree.add(crown);
    const crown2 = mesh(new THREE.DodecahedronGeometry(0.31 * scale, 0), "#b7cf9f");
    crown2.position.set(0.12 * scale, 1.02 * scale, 0.04 * scale);
    tree.add(crown2);
  }

  // ── 三組島嶼：等邊三角形配置（島嶼物理官可調 LAYOUT） ──
  const LAYOUT = { ringRadius: 8, islandRadius: 3.4, buildingRing: 2.15, hubRadius: 1.55 };
  const groupColors = { 1: "#e6d8c8", 2: "#d3c4aa", 3: "#f4ece4" };
  const groupIds = [1, 2, 3];
  const latestGroupCats = (latest.groupCategories && typeof latest.groupCategories === "object") ? latest.groupCategories : {};
  const groupCount = (id) => {
    const found = (latest.groups || []).find((g) => Number(g.id) === id);
    return found ? Number(found.count) || 0 : 0;
  };
  const islandCenters = {};
  groupIds.forEach((id, index) => {
    const angle = -Math.PI / 2 + (index * Math.PI * 2) / 3;
    islandCenters[id] = { x: Math.cos(angle) * LAYOUT.ringRadius, z: Math.sin(angle) * LAYOUT.ringRadius, angle };
  });

  function addGroupIsland(id) {
    const c = islandCenters[id];
    const r = LAYOUT.islandRadius;
    const root = new THREE.Group();
    root.position.set(c.x, 0, c.z);
    world.add(root);
    const base = mesh(new THREE.CylinderGeometry(r * 0.97, r * 1.1, 0.58, 9, 1), id % 2 ? "#c5b5a7" : "#b8a07e");
    base.position.y = 0.34;
    const rim = mesh(new THREE.CylinderGeometry(r * 0.98, r * 1.02, 0.28, 9, 1), "#f4ebdd");
    rim.position.y = 0.74;
    const top = mesh(new THREE.CylinderGeometry(r * 0.96, r * 0.99, 0.24, 9, 1), groupColors[id]);
    top.position.y = 0.99;
    root.add(base, rim, top);
    const route = reviewURL(latest.key, { group: id });
    // 島本體：只帶 group 篩選
    root.userData.route = route;
    for (const m of [base, rim, top]) {
      m.userData.route = route;
      m.userData.interactiveRoot = root;
      m.material.userData.originalEmissive = m.material.emissive.getHex();
      targets.push(m);
    }
    selectableRoots.add(root);
    root.add(makeLabel(`第 ${id} 組`, `${groupCount(id)} 篇 · ${latest.month} 月`, route, { x: 0, y: 3.35, z: 0 }, "group-label"));

    // 類別建築：避開朝中心（橋）的 120° 扇區，排在外側 200° 弧上
    let cats = Array.isArray(latestGroupCats[String(id)]) ? latestGroupCats[String(id)] : [];
    if (!cats.length) cats = (latest.categories || []).map((item) => ({ name: item.name, count: null }));
    const outward = c.angle;
    const span = (200 * Math.PI) / 180;
    cats.forEach((cat, i) => {
      const a = cats.length === 1 ? outward : outward - span / 2 + (span * i) / (cats.length - 1);
      const local = { x: Math.cos(a) * LAYOUT.buildingRing, z: Math.sin(a) * LAYOUT.buildingRing };
      const detail = cat.count === null || cat.count === undefined ? "" : `${cat.count} 篇`;
      addBuilding(root, local.x, local.z, cat.name.length > 7 ? cat.name.slice(0, 7) + "…" : cat.name, reviewURL(latest.key, { group: id, category: cat.name }), categoryColors[cat.name] || "#777f6d", 0.62, detail, (i % 2) * 0.45);
    });
    addTree(root, Math.cos(outward + Math.PI) * 0.9, Math.sin(outward + Math.PI) * 0.9, 0.62, "#9fbf8f");
    addTree(root, 0.2, 0.25, 0.48, "#b7cf9f");
    return root;
  }

  function addBridgeBetween(a, b) {
    const ca = islandCenters[a];
    const cb = islandCenters[b];
    const dx = cb.x - ca.x;
    const dz = cb.z - ca.z;
    const dist = Math.hypot(dx, dz);
    const ux = dx / dist;
    const uz = dz / dist;
    const r = LAYOUT.islandRadius;
    const start = { x: ca.x + ux * r, z: ca.z + uz * r };
    const end = { x: cb.x - ux * r, z: cb.z - uz * r };
    const length = dist - 2 * r;
    const bridge = new THREE.Group();
    bridge.position.set((start.x + end.x) / 2, 0.92, (start.z + end.z) / 2);
    bridge.rotation.y = -Math.atan2(dz, dx);
    world.add(bridge);
    const plankCount = Math.max(3, Math.ceil(length / 0.48));
    for (let i = 0; i < plankCount; i += 1) {
      const plank = mesh(new THREE.BoxGeometry(length / plankCount - 0.045, 0.12, 0.62), i % 2 ? "#b48560" : "#a77a55");
      plank.position.x = -length / 2 + (i + 0.5) * (length / plankCount);
      bridge.add(plank);
    }
    for (const side of [-1, 1]) {
      const rail = mesh(new THREE.BoxGeometry(length, 0.08, 0.05), side > 0 ? "#db6a41" : "#ffffff");
      rail.position.set(0, 0.22, side * 0.33);
      bridge.add(rail);
      for (let k = 0; k <= 4; k += 1) {
        const post = mesh(new THREE.BoxGeometry(0.07, 0.3, 0.07), "#fff8f4");
        post.position.set(-length / 2 + (k * length) / 4, 0.12, side * 0.33);
        bridge.add(post);
      }
    }
    return { start, end };
  }

  function addHub() {
    const root = new THREE.Group();
    world.add(root);
    const rock = mesh(new THREE.CylinderGeometry(LAYOUT.hubRadius, LAYOUT.hubRadius * 1.12, 0.5, 7, 1), "#b8a07e");
    rock.position.y = 0.3;
    const lawn = mesh(new THREE.CylinderGeometry(LAYOUT.hubRadius * 0.95, LAYOUT.hubRadius, 0.18, 7, 1), "#f4ece4");
    lawn.position.y = 0.62;
    root.add(rock, lawn);
    const tower = mesh(new THREE.CylinderGeometry(0.22, 0.3, 1.2, 6), "#fff8f4");
    tower.position.y = 1.3;
    const cap = mesh(new THREE.ConeGeometry(0.42, 0.5, 6), "#db6a41");
    cap.position.y = 2.15;
    root.add(tower, cap);
    const route = reviewURL(latest.key);
    root.userData.route = route;
    for (const m of [rock, lawn, tower, cap]) {
      m.userData.route = route;
      m.userData.interactiveRoot = root;
      m.material.userData.originalEmissive = m.material.emissive.getHex();
      targets.push(m);
    }
    const archiveTotal = Number(data.totalEntries) || months.reduce((s, m) => s + Number(m.entries || 0), 0);
    root.add(makeLabel("月份總覽", `最新 ${latest.label} · 共 ${archiveTotal} 篇`, route, { x: 0, y: 2.9, z: 0 }, "hub-label"));
  }

  // ── 島民：巴哥（Q版巴哥）、澄瑛（chibi） ──；不進 raycast targets
  function residentLabel(person, name, y) {
    const tag = document.createElement("span");
    tag.className = "resident-label";
    tag.textContent = name;
    const label = new CSS2DObject(tag);
    label.position.set(0, y, 0);
    person.add(label);
    person.userData.tag = tag;
  }
  function makePug(name) {
    const person = new THREE.Group();
    const fur = "#e8d4b8", dark = "#6b4a33";
    const body = mesh(new THREE.CapsuleGeometry(0.2, 0.32, 3, 8), fur);
    body.rotation.z = Math.PI / 2; body.position.y = 0.3;
    const head = mesh(new THREE.SphereGeometry(0.22, 10, 8), fur); head.position.set(0.3, 0.52, 0);
    const muzzle = mesh(new THREE.SphereGeometry(0.11, 8, 6), dark); muzzle.scale.set(0.7, 0.8, 1.1); muzzle.position.set(0.47, 0.47, 0);
    const collar = mesh(new THREE.TorusGeometry(0.15, 0.035, 6, 14), "#db6a41"); collar.rotation.y = Math.PI / 2; collar.position.set(0.2, 0.4, 0);
    person.add(body, head, muzzle, collar);
    for (const side of [-1, 1]) {
      const ear = mesh(new THREE.ConeGeometry(0.07, 0.12, 4), dark); ear.position.set(0.28, 0.72, side * 0.14); ear.rotation.x = side * 0.5;
      const eye = mesh(new THREE.SphereGeometry(0.03, 6, 4), "#211d1d"); eye.position.set(0.48, 0.58, side * 0.08);
      person.add(ear, eye);
      for (const fx of [-0.18, 0.18]) { const leg = mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.16, 6), fur); leg.position.set(fx, 0.08, side * 0.12); person.add(leg); }
    }
    const tail = mesh(new THREE.TorusGeometry(0.06, 0.025, 5, 10, Math.PI * 1.5), fur); tail.position.set(-0.36, 0.45, 0); person.add(tail);
    residentLabel(person, name, 1.05);
    person.userData.body = body;
    world.add(person);
    return person;
  }
  function makeChibi(name) {
    const person = new THREE.Group();
    const legs = mesh(new THREE.CylinderGeometry(0.09, 0.1, 0.22, 6), "#78685e"); legs.position.y = 0.11;
    const body = mesh(new THREE.CapsuleGeometry(0.16, 0.24, 3, 8), "#fff8f4"); body.position.y = 0.42;
    const vest = mesh(new THREE.CylinderGeometry(0.175, 0.19, 0.2, 8, 1, true), "#db6a41"); vest.position.y = 0.44;
    const head = mesh(new THREE.SphereGeometry(0.24, 12, 10), "#f3cfae"); head.position.y = 0.9;
    const hair = mesh(new THREE.SphereGeometry(0.262, 12, 10, 0, Math.PI * 2, 0, Math.PI * 0.58), "#2e2522"); hair.position.y = 0.92; hair.rotation.z = -0.25;
    person.add(legs, body, vest, head, hair);
    for (const side of [-1, 1]) { const eye = mesh(new THREE.SphereGeometry(0.03, 6, 4), "#211d1d"); eye.position.set(0.22, 0.88, side * 0.08); person.add(eye); }
    residentLabel(person, name, 1.5);
    person.userData.body = body;
    world.add(person);
    return person;
  }

  // 島民沿「朝橋」短弧路徑閒晃（島座標 -> 世界座標）
  function residentPath(groupId, towardId, radius) {
    const c = islandCenters[groupId];
    const t = islandCenters[towardId];
    const base = Math.atan2(t.z - c.z, t.x - c.x);
    return { c, base, radius, spread: 0.42 };
  }

  groupIds.forEach((id) => addGroupIsland(id));
  const bridges = [addBridgeBetween(1, 2), addBridgeBetween(2, 3), addBridgeBetween(3, 1)];
  addHub();
  world.userData.bridges = bridges;
  const residents = [
    { mesh: makePug("巴哥"), path: residentPath(1, 2, 2.75), phase: 0 },
    { mesh: makeChibi("澄瑛"), path: residentPath(2, 3, 2.75), phase: 1.7 },
    { mesh: makePug("巴哥"), path: residentPath(3, 1, 2.75), phase: 3.1 },
    { mesh: makeChibi("澄瑛"), path: residentPath(3, 2, 2.6), phase: 4.4 }
  ];
  function placeResident(res, time) {
    const p = res.path;
    const s = reducedMotion ? 0 : Math.sin(time * 0.25 + res.phase);
    const a = p.base + s * p.spread;
    res.mesh.position.set(p.c.x + Math.cos(a) * p.radius, 1.1, p.c.z + Math.sin(a) * p.radius);
    const dir = reducedMotion ? 0 : Math.cos(time * 0.25 + res.phase);
    res.mesh.rotation.y = -(a + (dir >= 0 ? Math.PI / 2 : -Math.PI / 2));
    const breathe = reducedMotion ? 1 : 1 + Math.sin(time * 2.1 + res.phase) * 0.035;
    res.mesh.userData.body.scale.set(1, breathe, 1);
  }
  residents.forEach((res) => placeResident(res, 0));

  const sceneExtent = LAYOUT.ringRadius + LAYOUT.islandRadius;
  const viewDistance = (width) => Math.max(width < 560 ? 44 : 34, sceneExtent * (width < 560 ? 3.6 : 2.9));

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.07;
  controls.enablePan = false;
  controls.enableZoom = true;
  controls.enableRotate = true;
  controls.rotateSpeed = 0.48;
  controls.zoomSpeed = 0.78;
  controls.minPolarAngle = (25 * Math.PI) / 180;
  controls.maxPolarAngle = (70 * Math.PI) / 180;
  controls.minDistance = 22;
  controls.maxDistance = 80;
  controls.target.set(0, 0.85, 0);
  controls.autoRotate = false;
  controls.autoRotateSpeed = 0.24;
  controls.addEventListener("start", () => {
    if (controls.autoRotate) {
      controls.autoRotate = false;
      syncRotateButton();
    }
  });

  function syncRotateButton() {
    rotateButton.disabled = false;
    rotateButton.setAttribute("aria-pressed", String(Boolean(controls.autoRotate)));
    rotateButton.textContent = controls.autoRotate ? "暫停旋轉" : "開始旋轉";
  }
  syncRotateButton();
  rotateButton.addEventListener("click", () => {
    controls.autoRotate = !controls.autoRotate;
    syncRotateButton();
  });
  resetButton.addEventListener("click", () => {
    controls.target.set(0, 0.85, 0);
    const width = stage.getBoundingClientRect().width;
    const distance = viewDistance(width);
    camera.position.set(0, distance * 0.82, distance * 0.58);
    controls.update();
  });

  function resize() {
    const rect = stage.getBoundingClientRect();
    const width = Math.max(1, rect.width);
    const height = Math.max(1, rect.height);
    const mobileLayout = width < 560;
    if (world.userData.mobileLayout !== mobileLayout) {
      world.rotation.y = mobileLayout ? Math.PI / 2 : 0;
      world.userData.mobileLayout = mobileLayout;
    }
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height, false);
    labelRenderer.setSize(width, height);
    const distance = viewDistance(width);
    camera.position.set(0, distance * 0.82, distance * 0.58);
    controls.update();
  }
  if (window.ResizeObserver) new ResizeObserver(resize).observe(stage);
  else window.addEventListener("resize", resize);
  resize();

  let down = null;
  let hovered = null;
  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();

  function rootAt(clientX, clientY) {
    const rect = renderer.domElement.getBoundingClientRect();
    pointer.x = ((clientX - rect.left) / rect.width) * 2 - 1;
    pointer.y = -((clientY - rect.top) / rect.height) * 2 + 1;
    raycaster.setFromCamera(pointer, camera);
    const intersections = raycaster.intersectObjects(targets, false);
    for (const hit of intersections) {
      const root = hit.object.userData.interactiveRoot;
      const route = hit.object.userData.route;
      if (root && route) return { root, route };
    }
    return null;
  }

  function highlight(root, enabled) {
    if (!root) return;
    root.traverse((child) => {
      if (!child.isMesh) return;
      const list = Array.isArray(child.material) ? child.material : [child.material];
      for (const mat of list) {
        if (!mat || !mat.emissive) continue;
        const original = mat.userData.originalEmissive || 0;
        mat.emissive.setHex(enabled ? 0x473b15 : original);
      }
    });
  }

  renderer.domElement.addEventListener("pointerdown", (event) => {
    down = { x: event.clientX, y: event.clientY, pointerId: event.pointerId };
  }, { passive: true });
  renderer.domElement.addEventListener("pointermove", (event) => {
    if (down && (Math.abs(event.clientX - down.x) > 6 || Math.abs(event.clientY - down.y) > 6)) return;
    const hit = rootAt(event.clientX, event.clientY);
    const next = hit && hit.root;
    if (next !== hovered) {
      highlight(hovered, false);
      hovered = next;
      highlight(hovered, true);
    }
    renderer.domElement.style.cursor = hit ? "pointer" : (down ? "grabbing" : "grab");
  }, { passive: true });
  renderer.domElement.addEventListener("pointerup", (event) => {
    if (!down || down.pointerId !== event.pointerId) return;
    const moved = Math.hypot(event.clientX - down.x, event.clientY - down.y);
    down = null;
    renderer.domElement.style.cursor = "grab";
    if (moved > 6) return;
    const hit = rootAt(event.clientX, event.clientY);
    if (!hit) return;
    highlight(hit.root, true);
    flyTo(hit.root, hit.route);
  }, { passive: true });
  renderer.domElement.addEventListener("pointercancel", () => { down = null; }, { passive: true });
  renderer.domElement.addEventListener("webglcontextlost", (event) => {
    event.preventDefault();
    unavailable("3D 圖形暫時中斷；請使用右側清單繼續瀏覽。");
  });

  let flight = null;
  function flyTo(root, route) {
    if (reducedMotion) { location.href = route; return; }
    const goal = new THREE.Vector3();
    root.getWorldPosition(goal);
    flight = {
      t0: performance.now(), dur: 650, route,
      fromPos: camera.position.clone(), fromTarget: controls.target.clone(),
      toTarget: goal.clone().setY(1),
      toPos: goal.clone().add(camera.position.clone().sub(controls.target).setLength(16))
    };
    controls.autoRotate = false;
    syncRotateButton();
  }
  status.hidden = true;
  let animationId = 0;
  function animate() {
    animationId = window.requestAnimationFrame(animate);
    const now = performance.now();
    if (flight) {
      const k = Math.min(1, (now - flight.t0) / flight.dur);
      const e = 1 - Math.pow(1 - k, 3);
      camera.position.lerpVectors(flight.fromPos, flight.toPos, e);
      controls.target.lerpVectors(flight.fromTarget, flight.toTarget, e);
      if (k >= 1) { const r = flight.route; flight = null; location.href = r; }
    }
    if (!reducedMotion) residents.forEach((res) => placeResident(res, now / 1000));
    const near = camera.position.distanceTo(controls.target) < 30;
    residents.forEach((res) => { if (res.mesh.userData.tag) res.mesh.userData.tag.style.opacity = near ? "1" : "0"; });
    controls.update();
    renderer.render(scene, camera);
    labelRenderer.render(scene, camera);
  }
  animate();
})();
