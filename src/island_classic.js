import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { CSS2DObject, CSS2DRenderer } from "three/addons/renderers/CSS2DRenderer.js";

export function mountClassicIsland(env) {
  const status = env.status;
  const stage = env.stage;
  const canvasHost = env.canvasHost;
  const labelHost = env.labelHost;
  const rotateButton = env.rotateButton;
  const resetButton = env.resetButton;
  const reducedMotion = env.reducedMotion;
  const data = env.data;
  const months = env.months;
  const latest = env.latest;
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
  resetButton.disabled = false;

  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: "low-power" });
  } catch (_) {
    unavailable("3D 場景無法啟動；文稿導覽仍可完整使用。若導覽已收合，按上方「顯示導覽」。");
    return () => {};
  }

  const scene = new THREE.Scene();
  scene.background = new THREE.Color("#fff8f4");
  scene.fog = new THREE.Fog("#edddcf", 48, 110);
  const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 200);
  const world = new THREE.Group();
  scene.add(world);

  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.6));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFShadowMap;
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

  const hemi = new THREE.HemisphereLight("#fff8f4", "#c5b5a7", 1.9);
  scene.add(hemi);
  const ambient = new THREE.AmbientLight("#ffc090", 0);
  scene.add(ambient);
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

  const skyMat = new THREE.ShaderMaterial({
    side: THREE.BackSide,
    depthWrite: false,
    toneMapped: false,
    uniforms: {
      top: { value: new THREE.Vector3(197 / 255, 223 / 255, 240 / 255) },
      mid: { value: new THREE.Vector3(232 / 255, 242 / 255, 247 / 255) },
      bottom: { value: new THREE.Vector3(243 / 255, 235 / 255, 227 / 255) },
      resolution: { value: new THREE.Vector2(1, 1) }
    },
    vertexShader: "void main(){ gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",
    fragmentShader: "uniform vec3 top; uniform vec3 mid; uniform vec3 bottom; uniform vec2 resolution; void main(){ float y = clamp(gl_FragCoord.y / max(resolution.y, 1.0), 0.0, 1.0); vec3 col = y < 0.5 ? mix(bottom, mid, y * 2.0) : mix(mid, top, (y - 0.5) * 2.0); gl_FragColor = vec4(col, 1.0); }"
  });
  const sky = new THREE.Mesh(new THREE.SphereGeometry(180, 28, 18), skyMat);
  sky.frustumCulled = false;
  sky.renderOrder = -10;
  scene.add(sky);

  const water = new THREE.Mesh(
    new THREE.CircleGeometry(42, 80),
    new THREE.MeshStandardMaterial({ color: "#45abbb", roughness: 0.8, metalness: 0, emissive: "#45abbb", emissiveIntensity: 0 })
  );
  const shallows = new THREE.Mesh(new THREE.CircleGeometry(15, 48), new THREE.MeshStandardMaterial({ color: "#8fd3da", roughness: 0.8, metalness: 0, transparent: true, opacity: 0.7, emissive: "#8fd3da", emissiveIntensity: 0 }));
  shallows.rotation.x = -Math.PI / 2;
  shallows.position.y = -0.12;
  world.add(shallows);
  water.rotation.x = -Math.PI / 2;
  water.position.y = -0.17;
  water.receiveShadow = true;
  world.add(water);

  const targets = [];
  const selectableRoots = new Set();
  const windowMats = [];
  const bridgeLanterns = [];
  const lamps = [];
  const shallowMats = [];
  shallowMats.push(shallows.material);
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

  function addBuilding(parent, x, z, label, route, color, scale = 1, detail = "", labelOffset = 0, fullName = label) {
    const building = new THREE.Group();
    building.position.set(x, 1.1, z);
    parent.add(building);
    const footing = mesh(new THREE.BoxGeometry(0.98 * scale, 0.16 * scale, 0.82 * scale), "#f4ebdd");
    footing.position.y = 0.08 * scale;
    building.add(footing);
    const shellCount = palette.building.length;
    const shellIndex = ((label.length + Math.round(x * 10)) % shellCount + shellCount) % shellCount;
    const body = mesh(new THREE.BoxGeometry(0.72 * scale, 0.76 * scale, 0.62 * scale), palette.building[shellIndex]);
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
      const windowMesh = mesh(new THREE.BoxGeometry(0.13 * scale, 0.14 * scale, 0.04 * scale), "#8fd3da", { roughness: 0.6, emissive: "#fcea8b", emissiveIntensity: 0 });
      windowMesh.position.set(side * 0.22 * scale, 0.64 * scale, 0.33 * scale);
      windowMesh.material.userData.todManaged = true;
      windowMats.push(windowMesh.material);
      building.add(windowMesh);
    }
    const eave = mesh(new THREE.BoxGeometry(0.86 * scale, 0.06 * scale, 0.76 * scale), "#f4ebdd");
    eave.position.y = 0.92 * scale;
    building.add(eave);
    const awning = mesh(new THREE.BoxGeometry(0.34 * scale, 0.04 * scale, 0.16 * scale), color);
    awning.position.set(0, 0.5 * scale, 0.38 * scale); awning.rotation.x = 0.35;
    building.add(awning);
    const step = mesh(new THREE.BoxGeometry(0.3 * scale, 0.06 * scale, 0.14 * scale), "#c5b5a7");
    step.position.set(0, 0.19 * scale, 0.42 * scale);
    building.add(step);
    for (const side of [-1, 1]) {
      const frame = mesh(new THREE.BoxGeometry(0.17 * scale, 0.03 * scale, 0.06 * scale), "#fff8f4");
      frame.position.set(side * 0.22 * scale, 0.56 * scale, 0.34 * scale);
      building.add(frame);
    }
    addCategoryProp(building, label.replace("…", ""), scale, color);
    building.rotation.y = -Math.atan2(z, x) + Math.PI / 2;
    markRoot(building, route);
    const catLabel = makeLabel(label, detail, route, { x: 0, y: 1.9 * scale + labelOffset, z: 0 }, "cat-label");
    catLabel.element.title = fullName + (detail ? `（${detail}）` : "");
    building.add(catLabel);
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


  // 類別道具（掛在建築群組上，點擊同 route）
  function addCategoryProp(b, cat, k, color) {
    const add = (geo, col, x, y, z, ry = 0) => { const m = mesh(geo, col); m.position.set(x * k, y * k, z * k); m.rotation.y = ry; b.add(m); return m; };
    if (cat.startsWith("文稿")) {
      add(new THREE.BoxGeometry(0.5, 0.14, 0.04), "#211d1d", 0, 1.5, 0.05);
      add(new THREE.BoxGeometry(0.44, 0.09, 0.05), "#fcea8b", 0, 1.5, 0.08);
      add(new THREE.BoxGeometry(0.3, 0.4, 0.14), "#a77a55", 0.55, 0.4, 0.2);
      ["#db6a41", "#45abbb", "#fcea8b", "#78685e"].forEach((c, i) => add(new THREE.BoxGeometry(0.05, 0.13, 0.1), c, 0.46 + i * 0.06, 0.5, 0.26));
    } else if (cat.startsWith("剪影")) {
      add(new THREE.BoxGeometry(0.36, 0.05, 0.36), "#b48560", 0.62, 0.62, 0.1);
      for (const [dx, dz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) add(new THREE.CylinderGeometry(0.025, 0.025, 0.6, 5), "#a77a55", 0.62 + dx * 0.15, 0.3, 0.1 + dz * 0.15);
      add(new THREE.BoxGeometry(0.16, 0.11, 0.1), "#211d1d", 0.62, 0.72, 0.1);
      const lens = add(new THREE.CylinderGeometry(0.04, 0.04, 0.08, 8), "#8fd3da", 0.62, 0.72, 0.18); lens.rotation.x = Math.PI / 2;
    } else if (cat.startsWith("詩詞")) {
      add(new THREE.BoxGeometry(0.18, 0.42, 0.08), "#c5b5a7", 0.58, 0.29, 0.25);
      add(new THREE.BoxGeometry(0.24, 0.06, 0.12), "#b8a07e", 0.58, 0.1, 0.25);
      for (const dx of [-1, 1]) add(new THREE.CylinderGeometry(0.025, 0.025, 0.42, 5), "#db6a41", -0.62 + dx * 0.13, 0.29, 0.25);
      add(new THREE.ConeGeometry(0.24, 0.16, 6), color, -0.62, 0.58, 0.25);
    } else if (cat.startsWith("親子")) {
      for (const dx of [-1, 1]) { const leg = add(new THREE.CylinderGeometry(0.02, 0.02, 0.5, 5), "#db6a41", 0.62 + dx * 0.18, 0.25, 0.25); leg.rotation.z = dx * 0.12; }
      add(new THREE.CylinderGeometry(0.02, 0.02, 0.4, 5), "#db6a41", 0.62, 0.5, 0.25).rotation.z = Math.PI / 2;
      add(new THREE.BoxGeometry(0.12, 0.02, 0.07), "#fcea8b", 0.62, 0.22, 0.25);
      add(new THREE.BoxGeometry(0.34, 0.06, 0.34), "#f4ece4", -0.6, 0.1, 0.3);
      add(new THREE.SphereGeometry(0.06, 6, 4), "#45abbb", -0.6, 0.16, 0.3);
    } else if (cat.startsWith("封底")) {
      for (const dx of [-1, 1]) add(new THREE.CylinderGeometry(0.025, 0.025, 0.55, 5), "#a77a55", 0.6 + dx * 0.2, 0.27, 0.3);
      add(new THREE.BoxGeometry(0.46, 0.3, 0.04), "#fff8f4", 0.6, 0.45, 0.3);
      ["#db6a41", "#fcea8b", "#8fd3da"].forEach((c, i) => add(new THREE.BoxGeometry(0.1, 0.12, 0.01), c, 0.46 + i * 0.14, 0.46, 0.33));
    }
  }

  // ── ACNH 式島嶼細節：不規則島緣、淺水環、小路、植栽、碼頭（純裝飾，不進 raycast）──
  const decoGeo = {
    rock: new THREE.DodecahedronGeometry(0.16, 0), bush: new THREE.IcosahedronGeometry(0.16, 0),
    flower: new THREE.SphereGeometry(0.05, 5, 4), stone: new THREE.CylinderGeometry(0.16, 0.18, 0.04, 6),
    pile: new THREE.CylinderGeometry(0.045, 0.05, 0.6, 5), plank: new THREE.BoxGeometry(0.22, 0.05, 0.6)
  };
  function deco(parent, geo, color, x, y, z, sc = 1, ry = 0) {
    const m = mesh(geo, color); m.position.set(x, y, z); m.scale.setScalar(sc); m.rotation.y = ry; m.castShadow = sc > 0.6; parent.add(m); return m;
  }
  function decorateIsland(root, id, outward, cats) {
    const r = LAYOUT.islandRadius;
    const pol = (a, d) => ({ x: Math.cos(a) * d, z: Math.sin(a) * d });
    const seed = (n) => { const v = Math.sin(id * 91.7 + n * 12.9) * 43758.5; return v - Math.floor(v); };
    // 淺水環
    const shallow = new THREE.Mesh(new THREE.CylinderGeometry(r * 1.32, r * 1.32, 0.04, 28), material("#8fd3da", { transparent: true, opacity: 0.7, emissive: "#8fd3da", emissiveIntensity: 0 }));
    shallow.position.y = 0.06; shallow.receiveShadow = true; shallowMats.push(shallow.material); root.add(shallow);
    // 不規則凸角
    for (let i = 0; i < 7; i += 1) {
      const p = pol(outward + i * 0.9 + seed(i), r * (0.9 + seed(i + 3) * 0.12));
      const lobe = mesh(new THREE.CylinderGeometry(0.55 + seed(i) * 0.35, 0.7 + seed(i) * 0.35, 0.7 + seed(i + 1) * 0.25, 6), i % 2 ? "#c5b5a7" : "#b8a07e");
      lobe.position.set(p.x, 0.36, p.z); lobe.rotation.y = seed(i + 9) * 3; root.add(lobe);
      const grass = mesh(new THREE.CylinderGeometry(0.5 + seed(i) * 0.3, 0.55 + seed(i) * 0.3, 0.12, 6), groupColors[id]);
      grass.position.set(p.x, 0.72 + seed(i + 1) * 0.12, p.z); grass.rotation.y = lobe.rotation.y; root.add(grass);
    }
    // 石板小路：中心 → 兩座橋頭
    groupIds.filter((o) => o !== id).forEach((o) => {
      const a = Math.atan2(islandCenters[o].z - islandCenters[id].z, islandCenters[o].x - islandCenters[id].x);
      for (let d = 0.5; d < r - 0.1; d += 0.42) { const p = pol(a + Math.sin(d * 2) * 0.06, d); deco(root, decoGeo.stone, "#f4ebdd", p.x, 1.13, p.z, 1, d); }
    });
    // 樹（避開建築弧與小路）：放在內側扇區＆建築間隙外緣
    const inward = outward + Math.PI;
    const span = (200 * Math.PI) / 180;
    const treeSpots = [[inward, 1.3, 0.6], [inward + 0.35, 2.4, 0.5], [inward - 0.35, 2.5, 0.45]];
    for (let i = 0; i < Math.max(1, cats.length - 1); i += 1) {
      const a = cats.length < 2 ? outward + 0.6 : outward - span / 2 + (span * (i + 0.5)) / (cats.length - 1);
      treeSpots.push([a, 3.0, 0.4 + seed(i + 20) * 0.2]);
    }
    treeSpots.slice(0, 6).forEach(([a, d, sc], i) => { const p = pol(a, d); addTree(root, p.x, p.z, sc, i % 2 ? "#9fbf8f" : "#8db07c"); });
    // 草叢＋花叢
    const flowerColors = ["#db6a41", "#fcea8b", "#fff8f4", "#e6a15a"];
    for (let i = 0; i < 6; i += 1) {
      const p = pol(inward + (i - 2.5) * 0.28, 1.9 + seed(i + 30) * 0.9);
      deco(root, decoGeo.bush, i % 2 ? "#a9c796" : "#8db07c", p.x, 1.16, p.z, 0.9 + seed(i) * 0.5);
      for (let f = 0; f < 3; f += 1) deco(root, decoGeo.flower, flowerColors[(i + f) % 4], p.x + (f - 1) * 0.12, 1.3, p.z + seed(i + f) * 0.14 - 0.07, 1);
    }
    // 石頭
    for (let i = 0; i < 3; i += 1) { const p = pol(outward + (i - 1) * 1.6 + 0.4, r * 1.08); deco(root, decoGeo.rock, "#c5b5a7", p.x, 0.25, p.z, 1.1 + seed(i + 40) * 1.2, seed(i) * 3); }
    // 碼頭：外側水邊
    const dockA = outward + 0.3;
    const dock = new THREE.Group(); const dp = pol(dockA, r + 0.35); dock.position.set(dp.x, 0.62, dp.z); dock.rotation.y = -dockA + Math.PI / 2; root.add(dock);
    for (let i = 0; i < 5; i += 1) deco(dock, decoGeo.plank, i % 2 ? "#b48560" : "#a77a55", 0, 0, -0.5 + i * 0.25, 1, Math.PI / 2);
    for (const [x, z] of [[-0.28, -0.6], [0.28, -0.6], [-0.28, 0.5], [0.28, 0.5]]) deco(dock, decoGeo.pile, "#a77a55", x, -0.15, z, 1);
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
    root.add(makeLabel(`第 ${id} 組`, `${groupCount(id)} 篇 · ${latest.month} 月`, route, { x: 0, y: 4.35, z: 0 }, "group-label"));

    // 類別建築：避開朝中心（橋）的 120° 扇區，排在外側 200° 弧上
    let cats = Array.isArray(latestGroupCats[String(id)]) ? latestGroupCats[String(id)] : [];
    if (!cats.length) cats = (latest.categories || []).map((item) => ({ name: item.name, count: null }));
    const outward = c.angle;
    const span = (200 * Math.PI) / 180;
    cats.forEach((cat, i) => {
      const a = cats.length === 1 ? outward : outward - span / 2 + (span * i) / (cats.length - 1);
      const local = { x: Math.cos(a) * LAYOUT.buildingRing, z: Math.sin(a) * LAYOUT.buildingRing };
      const detail = cat.count === null || cat.count === undefined ? "" : `${cat.count} 篇`;
      addBuilding(root, local.x, local.z, cat.name.length > 4 ? cat.name.slice(0, 4) + "…" : cat.name, reviewURL(latest.key, { group: id, category: cat.name }), categoryColors[cat.name] || "#777f6d", 0.62, detail, 0.18 + (i % 5) * 0.28, cat.name);
    });
    decorateIsland(root, id, outward, cats);
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
      const posts = Math.max(6, Math.ceil(length / 0.5));
      for (let k = 0; k <= posts; k += 1) {
        const post = mesh(new THREE.BoxGeometry(0.08, 0.36, 0.08), "#fff8f4");
        post.position.set(-length / 2 + (k * length) / posts, 0.14, side * 0.33);
        bridge.add(post);
      }
      const lowRail = mesh(new THREE.BoxGeometry(length, 0.04, 0.04), "#f4ebdd");
      lowRail.position.set(0, 0.08, side * 0.33); bridge.add(lowRail);
      const pole = mesh(new THREE.CylinderGeometry(0.03, 0.035, 0.75, 5), "#211d1d");
      pole.position.set(side * length * 0.25, 0.42, side * 0.38); bridge.add(pole);
      const lantern = mesh(new THREE.BoxGeometry(0.14, 0.16, 0.14), "#fcea8b", { emissive: "#fcea8b", emissiveIntensity: 0.5 });
      lantern.position.set(side * length * 0.25, 0.86, side * 0.38);
      lantern.material.userData.todManaged = true;
      bridgeLanterns.push(lantern.material);
      bridge.add(lantern);
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
    root.add(makeLabel("月份總覽", `${latest.label} ${latest.entries} 篇 · 全部 ${archiveTotal} 篇`, route, { x: 0, y: 2.9, z: 0 }, "hub-label"));
  }

  // ── 島民：巴哥、澄瑛（皆 chibi 人物） ──；不進 raycast targets
  function residentLabel(person, name, y) {
    const tag = document.createElement("span");
    tag.className = "resident-label";
    tag.textContent = name;
    const wrap = document.createElement("div"); // CSS2DRenderer 會覆寫 wrap 的 transform；縮放放在內層
    wrap.style.pointerEvents = "none";
    wrap.appendChild(tag);
    const label = new CSS2DObject(wrap);
    label.position.set(0, y, 0);
    person.add(label);
    person.userData.tag = tag;
  }
  // 兩位島民皆為 chibi 人物；以髮型／衣色區分
  function makeChibi(name, look = {}) {
    const o = { pants: "#78685e", shirt: "#fff8f4", vest: "#db6a41", hair: "#2e2522", hairCap: 0.58, hairTilt: -0.25, bangs: false, ...look };
    const person = new THREE.Group();
    const legs = mesh(new THREE.CylinderGeometry(0.09, 0.1, 0.22, 6), o.pants); legs.position.y = 0.11;
    const body = mesh(new THREE.CapsuleGeometry(0.16, 0.24, 3, 8), o.shirt); body.position.y = 0.42;
    const vest = mesh(new THREE.CylinderGeometry(0.175, 0.19, 0.2, 8, 1, true), o.vest); vest.position.y = 0.44;
    const head = mesh(new THREE.SphereGeometry(0.24, 12, 10), "#f3cfae"); head.position.y = 0.9;
    const hair = mesh(new THREE.SphereGeometry(0.262, 12, 10, 0, Math.PI * 2, 0, Math.PI * o.hairCap), o.hair); hair.position.y = 0.92; hair.rotation.z = o.hairTilt;
    person.add(legs, body, vest, head, hair);
    if (o.bangs) { const fringe = mesh(new THREE.BoxGeometry(0.1, 0.06, 0.34), o.hair); fringe.position.set(0.18, 1.08, 0); person.add(fringe); }
    for (const side of [-1, 1]) { const eye = mesh(new THREE.SphereGeometry(0.03, 6, 4), "#211d1d"); eye.position.set(0.22, 0.88, side * 0.08); person.add(eye); }
    residentLabel(person, name, 1.5);
    person.userData.body = body;
    world.add(person);
    return person;
  }

  groupIds.forEach((id) => addGroupIsland(id));
  const bridges = [addBridgeBetween(1, 2), addBridgeBetween(2, 3), addBridgeBetween(3, 1)];
  addHub();
  // 水面浮標＋小船（裝飾，不進 raycast）
  [[0.5, 12.6], [2.6, 12.2], [4.6, 12.8]].forEach(([a, d], i) => {
    const g = new THREE.Group(); g.position.set(Math.cos(a) * d, 0.12, Math.sin(a) * d); g.rotation.y = a; world.add(g);
    if (i === 1) {
      const hull = mesh(new THREE.BoxGeometry(0.9, 0.18, 0.38), "#fff8f4"); g.add(hull);
      const trim = mesh(new THREE.BoxGeometry(0.92, 0.05, 0.4), "#db6a41"); trim.position.y = 0.1; g.add(trim);
    } else {
      const b = mesh(new THREE.CylinderGeometry(0.14, 0.18, 0.28, 8), i ? "#db6a41" : "#fcea8b"); g.add(b);
      const t = mesh(new THREE.ConeGeometry(0.08, 0.2, 6), "#fff8f4"); t.position.y = 0.24; g.add(t);
    }
  });
  world.userData.bridges = bridges;

  function makeSeaLamp(x, z) {
    const lamp = new THREE.Group();
    lamp.position.set(x, 2.55, z);
    const pole = mesh(new THREE.CylinderGeometry(0.045, 0.058, 1.45, 6), "#b8a07e");
    pole.position.y = -0.86;
    const shade = mesh(new THREE.SphereGeometry(0.14, 8, 6), "#fff8f4", { emissive: "#ffe0a8", emissiveIntensity: 0.15, roughness: 0.55 });
    shade.scale.set(1, 0.78, 1);
    shade.material.userData.todManaged = true;
    const cap = mesh(new THREE.ConeGeometry(0.11, 0.09, 6), "#db6a41");
    cap.position.y = 0.12;
    lamp.add(pole, shade, cap);
    const light = new THREE.PointLight("#ffb978", 0, 5.5, 2);
    light.castShadow = false;
    lamp.add(light);
    world.add(lamp);
    lamp.traverse((obj) => { obj.raycast = () => {}; });
    lamps.push({ light, shade: shade.material });
  }
  groupIds.forEach((id) => {
    const center = islandCenters[id];
    for (const delta of [-0.62, 0.62]) {
      const angle = center.angle + delta;
      makeSeaLamp(center.x + Math.cos(angle) * 2.55, center.z + Math.sin(angle) * 2.55);
    }
  });

  // ── 外圈遊輪：低多邊形玩具船，對向巡航，不進 raycast、無名牌 ──
  // 島群外緣（淺水）約 12.5、最外浮標約 13.0。規格帶 13.2–13.8 寬只有 0.6，容不下船寬 1.11 的對向交會，
  // 因此內側取帶內 13.62（船殼內緣約 13.07，避開浮標），外側 14.86，交會橫距約 0.13。
  const CRUISE = {
    y: 0.22,
    period: 115,
    ships: [
      { radius: 13.62, phase: 0, dir: 1, stripe: "#45abbb", funnel: "#db6a41" },
      { radius: 14.86, phase: Math.PI, dir: -1, stripe: "#db6a41", funnel: "#45abbb" }
    ]
  };
  const cruiseMat = { roughness: 0.82, metalness: 0 };
  function makeCruiseShip(stripe, funnel) {
    const ship = new THREE.Group();
    const add = (geo, color, x, y, z) => {
      const part = mesh(geo, color, cruiseMat);
      part.position.set(x, y, z);
      ship.add(part);
      return part;
    };
    // 船底薄條、奶油船殼、吃水／腰線。原點約在水線，+Z 為船首。
    add(new THREE.BoxGeometry(0.92, 0.07, 3.28), "#c5b5a7", 0, -0.145, -0.16);
    add(new THREE.BoxGeometry(1.02, 0.40, 3.36), "#fff8f4", 0, 0.06, -0.12);
    add(new THREE.BoxGeometry(1.10, 0.055, 3.30), stripe, 0, -0.02, -0.14);
    add(new THREE.BoxGeometry(0.78, 0.30, 0.42), "#fff8f4", 0, 0.02, 1.68);
    add(new THREE.BoxGeometry(0.46, 0.18, 0.28), "#fff8f4", 0, -0.02, 1.98);
    add(new THREE.BoxGeometry(0.80, 0.045, 0.36), stripe, 0, -0.02, 1.66);
    // 兩層甲板＋短煙囪（奶油帽）
    add(new THREE.BoxGeometry(0.96, 0.08, 2.42), "#e6d8c8", 0, 0.30, -0.28);
    add(new THREE.BoxGeometry(0.72, 0.38, 1.82), "#fff8f4", 0, 0.53, -0.42);
    add(new THREE.BoxGeometry(0.62, 0.07, 1.22), "#e6d8c8", 0, 0.755, -0.52);
    add(new THREE.BoxGeometry(0.46, 0.22, 0.52), "#fff8f4", 0, 0.90, -0.12);
    add(new THREE.CylinderGeometry(0.10, 0.125, 0.58, 6), funnel, 0, 1.07, -0.86);
    add(new THREE.CylinderGeometry(0.15, 0.15, 0.08, 6), "#fff8f4", 0, 1.39, -0.86);
    for (const side of [-1, 1]) {
      for (let i = 0; i < 5; i += 1) {
        add(new THREE.BoxGeometry(0.045, 0.09, 0.12), "#8fd3da", side * 0.532, 0.10, -1.12 + i * 0.46);
      }
    }
    ship.traverse((obj) => { obj.raycast = () => {}; });
    return ship;
  }
  const cruises = CRUISE.ships.map((spec) => ({ ...spec, group: makeCruiseShip(spec.stripe, spec.funnel) }));
  cruises.forEach((ship) => world.add(ship.group));
  function poseCruise(ship, angle) {
    ship.group.position.set(Math.cos(angle) * ship.radius, CRUISE.y, Math.sin(angle) * ship.radius);
    ship.group.rotation.y = ship.dir > 0 ? -angle : Math.PI - angle;
  }
  cruises.forEach((ship) => poseCruise(ship, ship.phase));
  let cruiseStart = null;
  function placeCruises(nowSec) {
    if (reducedMotion) return;
    if (cruiseStart === null) cruiseStart = nowSec;
    const base = ((nowSec - cruiseStart) / CRUISE.period) * Math.PI * 2;
    cruises.forEach((ship) => poseCruise(ship, ship.phase + ship.dir * base));
  }
  // 島民：只有巴哥、澄瑛兩位；輪流逛遍三座島（走完一座再挑下一座未逛的），沿岸弧線＋橋面移動，不穿建築
  const WALK_R = 2.75; // 建築環 2.15 之外、近水岸
  const EDGE_R = LAYOUT.islandRadius - 0.1;
  const angTo = (from, to) => Math.atan2(islandCenters[to].z - islandCenters[from].z, islandCenters[to].x - islandCenters[from].x);
  const onIsland = (id, a, r = WALK_R, y = 1.1) => new THREE.Vector3(islandCenters[id].x + Math.cos(a) * r, y, islandCenters[id].z + Math.sin(a) * r);
  function arcPoints(id, a0, a1) {
    let d = a1 - a0;
    while (d > Math.PI) d -= Math.PI * 2;
    while (d < -Math.PI) d += Math.PI * 2;
    const steps = Math.max(1, Math.ceil(Math.abs(d) / 0.25));
    const pts = [];
    for (let i = 1; i <= steps; i += 1) pts.push(onIsland(id, a0 + (d * i) / steps));
    return pts;
  }
  function planLeg(res) {
    let pool = groupIds.filter((id) => id !== res.island && !res.visited.has(id));
    if (!pool.length) { res.visited = new Set([res.island]); pool = groupIds.filter((id) => id !== res.island); }
    const next = pool[Math.floor(Math.random() * pool.length)];
    const out = angTo(res.island, next);
    const inA = angTo(next, res.island);
    const pts = arcPoints(res.island, res.angle, out);
    pts.push(onIsland(res.island, out, EDGE_R, 1.1));
    pts.push(onIsland(next, inA, EDGE_R, 1.1));
    pts.push(onIsland(next, inA));
    const stroll = inA + (Math.random() < 0.5 ? -1 : 1) * (1.2 + Math.random() * 2.6);
    pts.push(...arcPoints(next, inA, stroll));
    res.island = next; res.angle = stroll; res.visited.add(next);
    res.queue = pts;
    res.pause = 1.2 + Math.random() * 2.5;
  }
  function makeResident(meshObj, island, angle) {
    const res = { mesh: meshObj, island, angle, visited: new Set([island]), queue: [], pause: 0, phase: Math.random() * 6 };
    meshObj.position.copy(onIsland(island, angle));
    meshObj.rotation.y = -(angle + Math.PI / 2);
    return res;
  }
  const residents = [
    makeResident(makeChibi("巴哥", { shirt: "#45abbb", vest: "#fcea8b", pants: "#211d1d", hair: "#6b4a33", hairCap: 0.42, hairTilt: 0, bangs: true }), 1, angTo(1, 2) - 0.9),
    makeResident(makeChibi("澄瑛"), 3, angTo(3, 2) + 0.9)
  ];
  const WALK_SPEED = 0.9;
  let lastTick = 0;
  function stepResident(res, time, dt) {
    if (res.pause > 0) { res.pause -= dt; }
    else {
      if (!res.queue.length) planLeg(res);
      let move = WALK_SPEED * dt;
      while (move > 0 && res.queue.length) {
        const target = res.queue[0];
        const dx = target.x - res.mesh.position.x, dz = target.z - res.mesh.position.z;
        const d = Math.hypot(dx, dz);
        if (d > 1e-4) res.mesh.rotation.y = -Math.atan2(dz, dx);
        if (d <= move) { res.mesh.position.copy(target); res.queue.shift(); move -= d; }
        else { res.mesh.position.x += (dx / d) * move; res.mesh.position.z += (dz / d) * move; move = 0; }
      }
      if (!res.queue.length) res.pause = 1.2 + Math.random() * 2.5;
    }
    const walking = res.pause <= 0;
    res.mesh.position.y = 1.1 + (walking ? Math.abs(Math.sin(time * 9 + res.phase)) * 0.05 : 0);
    const breathe = 1 + Math.sin(time * 2.1 + res.phase) * 0.035;
    res.mesh.userData.body.scale.set(1, breathe, 1);
  }
  function placeResident(res, time) {
    const dt = lastTick ? Math.min(0.1, time - lastTick) : 0;
    stepResident(res, time, dt);
  }

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
  function onRotateClick() {
    controls.autoRotate = !controls.autoRotate;
    syncRotateButton();
  }
  rotateButton.addEventListener("click", onRotateClick);
  function onResetClick() {
    controls.target.set(0, 0.85, 0);
    const width = stage.getBoundingClientRect().width;
    const distance = viewDistance(width);
    camera.position.set(0, distance * 0.82, distance * 0.58);
    controls.update();
  }
  resetButton.addEventListener("click", onResetClick);

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
    skyMat.uniforms.resolution.value.set(renderer.domElement.width, renderer.domElement.height);
    labelRenderer.setSize(width, height);
    const distance = viewDistance(width);
    camera.position.set(0, distance * 0.82, distance * 0.58);
    controls.update();
  }
  let resizeObserver = null;
  if (window.ResizeObserver) {
    resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(stage);
  } else window.addEventListener("resize", resize);
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
        if (!mat || !mat.emissive || mat.userData.todManaged) continue;
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
    if (disposed) return;
    event.preventDefault();
    unavailable("3D 圖形暫時中斷；請改用文稿導覽。若導覽已收合，按上方「顯示導覽」。");
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
  const SEA_PERIODS = {
    day: {
      sky: ["#c5dff0", "#e8f2f7", "#f3ebe3"],
      fog: "#edddcf", fogNear: 48, fogFar: 110,
      hemiSky: "#fff8f4", hemiGround: "#c5b5a7", hemiI: 1.9,
      sun: "#ffe9cf", sunI: 3.0, sunPos: [-8, 18, 12], castShadow: true,
      fill: "#cfe4f2", fillI: 0.9, fillPos: [12, 8, -10],
      amb: "#ffc090", ambI: 0, exposure: 1.0,
      sea: "#45abbb", seaEmissive: 0, shallow: "#8fd3da", shallowOp: 0.7,
      win: 0, lantern: 0.5, lampI: 0, lampColor: "#ffb978", bulbE: 0.15
    },
    dusk: {
      sky: ["#7a9ec4", "#c9a48a", "#e8b89a"],
      fog: "#d9a882", fogNear: 40, fogFar: 95,
      hemiSky: "#f5c49a", hemiGround: "#8a6a55", hemiI: 1.1,
      sun: "#ff9a5c", sunI: 1.35, sunPos: [-14, 6, 8], castShadow: true,
      fill: "#6a7ea0", fillI: 0.45, fillPos: [10, 5, -12],
      amb: "#ffc090", ambI: 0.15, exposure: 0.92,
      sea: "#3f6f86", seaEmissive: 0.35, shallow: "#c9a48a", shallowOp: 0.55,
      win: 0.15, lantern: 1.2, lampI: 0.55, lampColor: "#ffb978", bulbE: 0.9
    },
    night: {
      sky: ["#1e2a3a", "#2a3545", "#3a3340"],
      fog: "#121820", fogNear: 35, fogFar: 85,
      hemiSky: "#2a3550", hemiGround: "#0e1218", hemiI: 0.35,
      sun: "#a8c0e8", sunI: 0.22, sunPos: [6, 22, -10], castShadow: false,
      fill: "#3a4560", fillI: 0.18, fillPos: [-10, 8, 6],
      amb: "#1e2838", ambI: 0.08, exposure: 0.85,
      sea: "#1c3344", seaEmissive: 0.55, shallow: "#2a4558", shallowOp: 0.5,
      win: 0.45, lantern: 2.0, lampI: 1.6, lampColor: "#ffd6a0", bulbE: 1.8
    }
  };
  const mixA = new THREE.Color();
  const mixB = new THREE.Color();
  const srgbA = new THREE.Vector3();
  const srgbB = new THREE.Vector3();
  const mixNum = (a, b, t) => a + (b - a) * t;
  const smooth = (t) => { const x = Math.min(1, Math.max(0, t)); return x * x * (3 - 2 * x); };
  function mixHex(out, a, b, t) { mixA.set(a); mixB.set(b); out.copy(mixA).lerp(mixB, t); }
  function srgbVec(hex, out) {
    const n = parseInt(String(hex).replace("#", ""), 16);
    return out.set(((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255);
  }
  function mixSrgb(out, a, b, t) {
    srgbVec(a, srgbA);
    srgbVec(b, srgbB);
    out.copy(srgbA).lerp(srgbB, t);
  }
  function vecToHex(v) {
    const byte = (n) => Math.round(Math.min(255, Math.max(0, n * 255))).toString(16).padStart(2, "0");
    return `#${byte(v.x)}${byte(v.y)}${byte(v.z)}`;
  }
  function applySeaTod(from, to, sceneT, lampTOf) {
    mixSrgb(skyMat.uniforms.top.value, from.sky[0], to.sky[0], sceneT);
    mixSrgb(skyMat.uniforms.mid.value, from.sky[1], to.sky[1], sceneT);
    mixSrgb(skyMat.uniforms.bottom.value, from.sky[2], to.sky[2], sceneT);
    mixHex(scene.background, from.sky[2], to.sky[2], sceneT);
    mixHex(scene.fog.color, from.fog, to.fog, sceneT);
    scene.fog.near = mixNum(from.fogNear, to.fogNear, sceneT);
    scene.fog.far = mixNum(from.fogFar, to.fogFar, sceneT);
    mixHex(hemi.color, from.hemiSky, to.hemiSky, sceneT);
    mixHex(hemi.groundColor, from.hemiGround, to.hemiGround, sceneT);
    hemi.intensity = mixNum(from.hemiI, to.hemiI, sceneT);
    mixHex(sun.color, from.sun, to.sun, sceneT);
    sun.intensity = mixNum(from.sunI, to.sunI, sceneT);
    sun.position.set(
      mixNum(from.sunPos[0], to.sunPos[0], sceneT),
      mixNum(from.sunPos[1], to.sunPos[1], sceneT),
      mixNum(from.sunPos[2], to.sunPos[2], sceneT)
    );
    sun.castShadow = sceneT < 0.5 ? from.castShadow : to.castShadow;
    mixHex(fill.color, from.fill, to.fill, sceneT);
    fill.intensity = mixNum(from.fillI, to.fillI, sceneT);
    fill.position.set(
      mixNum(from.fillPos[0], to.fillPos[0], sceneT),
      mixNum(from.fillPos[1], to.fillPos[1], sceneT),
      mixNum(from.fillPos[2], to.fillPos[2], sceneT)
    );
    mixHex(ambient.color, from.amb, to.amb, sceneT);
    ambient.intensity = mixNum(from.ambI, to.ambI, sceneT);
    renderer.toneMappingExposure = mixNum(from.exposure, to.exposure, sceneT);
    mixHex(water.material.color, from.sea, to.sea, sceneT);
    mixHex(water.material.emissive, from.sea, to.sea, sceneT);
    water.material.emissiveIntensity = mixNum(from.seaEmissive, to.seaEmissive, sceneT);
    shallowMats.forEach((mat) => {
      mixHex(mat.color, from.shallow, to.shallow, sceneT);
      if (mat.emissive) mixHex(mat.emissive, from.shallow, to.shallow, sceneT);
      if (mat.emissive) mat.emissiveIntensity = mixNum(from.seaEmissive * 0.45, to.seaEmissive * 0.45, sceneT);
      mat.opacity = mixNum(from.shallowOp, to.shallowOp, sceneT);
    });
    const winI = mixNum(from.win, to.win, sceneT);
    windowMats.forEach((mat) => { mat.emissive.set("#fcea8b"); mat.emissiveIntensity = winI; });
    const lanternI = mixNum(from.lantern, to.lantern, sceneT);
    bridgeLanterns.forEach((mat) => { mat.emissive.set("#fcea8b"); mat.emissiveIntensity = lanternI; });
    lamps.forEach((lamp, index) => {
      const lt = lampTOf(index);
      const src = from.lamps && from.lamps[index];
      lamp.light.intensity = mixNum(src ? src.intensity : from.lampI, to.lampI, lt);
      mixHex(lamp.light.color, src ? src.color : from.lampColor, to.lampColor, lt);
      lamp.shade.emissive.set("#ffe0a8");
      lamp.shade.emissiveIntensity = mixNum(src ? src.emissive : from.bulbE, to.bulbE, lt);
    });
  }
  function readSeaTod() {
    return {
      sky: [vecToHex(skyMat.uniforms.top.value), vecToHex(skyMat.uniforms.mid.value), vecToHex(skyMat.uniforms.bottom.value)],
      fog: "#" + scene.fog.color.getHexString(), fogNear: scene.fog.near, fogFar: scene.fog.far,
      hemiSky: "#" + hemi.color.getHexString(), hemiGround: "#" + hemi.groundColor.getHexString(), hemiI: hemi.intensity,
      sun: "#" + sun.color.getHexString(), sunI: sun.intensity, sunPos: [sun.position.x, sun.position.y, sun.position.z], castShadow: sun.castShadow,
      fill: "#" + fill.color.getHexString(), fillI: fill.intensity, fillPos: [fill.position.x, fill.position.y, fill.position.z],
      amb: "#" + ambient.color.getHexString(), ambI: ambient.intensity, exposure: renderer.toneMappingExposure,
      sea: "#" + water.material.color.getHexString(),
      seaEmissive: water.material.emissiveIntensity,
      shallow: shallowMats.length ? "#" + shallowMats[0].color.getHexString() : "#8fd3da",
      shallowOp: shallowMats.length ? shallowMats[0].opacity : 0.7,
      win: windowMats.length ? windowMats[0].emissiveIntensity : 0,
      lantern: bridgeLanterns.length ? bridgeLanterns[0].emissiveIntensity : 0.5,
      lampI: lamps.length ? lamps[0].light.intensity : 0,
      lampColor: lamps.length ? "#" + lamps[0].light.color.getHexString() : "#ffb978",
      bulbE: lamps.length ? lamps[0].shade.emissiveIntensity : 0.15,
      lamps: lamps.map((lamp) => ({ intensity: lamp.light.intensity, color: "#" + lamp.light.color.getHexString(), emissive: lamp.shade.emissiveIntensity }))
    };
  }
  function readStoredTod() {
    try {
      const value = localStorage.getItem("homeSkyTod");
      if (value === "dusk" || value === "night") return value;
    } catch (_) {}
    return "day";
  }
  let todKey = readStoredTod();
  let todAnim = null;
  function beginSeaTod(next) {
    if (next !== "day" && next !== "dusk" && next !== "night") return;
    if (next === todKey && !todAnim) return;
    const from = readSeaTod();
    todKey = next;
    document.body.classList.remove("tod-day", "tod-dusk", "tod-night");
    document.body.classList.add(`tod-${next}`);
    if (reducedMotion) {
      applySeaTod(from, SEA_PERIODS[next], 1, () => 1);
      todAnim = null;
      return;
    }
    todAnim = { from, to: SEA_PERIODS[next], t0: performance.now() };
  }
  applySeaTod(SEA_PERIODS[todKey], SEA_PERIODS[todKey], 1, () => 1);
  function onClassicTod(event) { beginSeaTod(event.detail); }
  window.addEventListener("home-sky-tod", onClassicTod);

  status.hidden = true;
  let animationId = 0;
  let disposed = false;
  function animate() {
    if (disposed) return;
    animationId = window.requestAnimationFrame(animate);
    const now = performance.now();
    if (flight) {
      const k = Math.min(1, (now - flight.t0) / flight.dur);
      const e = 1 - Math.pow(1 - k, 3);
      camera.position.lerpVectors(flight.fromPos, flight.toPos, e);
      controls.target.lerpVectors(flight.fromTarget, flight.toTarget, e);
      if (k >= 1) { const r = flight.route; flight = null; location.href = r; }
    }
    if (todAnim) {
      const elapsed = (now - todAnim.t0) / 1000;
      const sceneT = smooth(Math.min(1, elapsed / 0.45));
      const lampT = (index) => smooth(Math.min(1, Math.max(0, (elapsed - index * 0.1) / 0.8)));
      applySeaTod(todAnim.from, todAnim.to, sceneT, lampT);
      if (elapsed >= 0.8 + Math.max(0, lamps.length - 1) * 0.1) {
        applySeaTod(todAnim.from, todAnim.to, 1, () => 1);
        todAnim = null;
      }
    }
    sky.position.copy(camera.position);
    if (!reducedMotion) {
      const t = now / 1000;
      residents.forEach((res) => placeResident(res, t));
      placeCruises(t);
      lastTick = t;
    }
    const camDist = camera.position.distanceTo(controls.target);
    const tagScale = camDist < 26 ? 1 : Math.max(0.78, 1 - (camDist - 26) / 60);
    residents.forEach((res) => { const t = res.mesh.userData.tag; if (t) { t.style.opacity = "1"; t.style.setProperty("--tag-scale", tagScale.toFixed(2)); } });
    const dist = camera.position.distanceTo(controls.target);
    const catOpacity = dist < 34 ? "1" : dist < 42 ? "0.35" : "0";
    if (catOpacity !== world.userData.catOpacity) {
      world.userData.catOpacity = catOpacity;
      document.querySelectorAll(".island-label.cat-label").forEach((el) => { el.style.opacity = catOpacity; el.style.pointerEvents = catOpacity === "0" ? "none" : "auto"; });
    }
    controls.update();
    renderer.render(scene, camera);
    labelRenderer.render(scene, camera);
  }

  animate();
  return function disposeClassicIsland() {
    if (disposed) return;
    disposed = true;
    window.cancelAnimationFrame(animationId);
    if (resizeObserver) resizeObserver.disconnect();
    window.removeEventListener("resize", resize);
    window.removeEventListener("home-sky-tod", onClassicTod);
    rotateButton.removeEventListener("click", onRotateClick);
    resetButton.removeEventListener("click", onResetClick);
    controls.dispose();
    scene.traverse((obj) => {
      if (obj.geometry) obj.geometry.dispose();
      const mats = obj.material ? (Array.isArray(obj.material) ? obj.material : [obj.material]) : [];
      mats.forEach((mat) => { if (mat && mat.dispose) mat.dispose(); });
    });
    renderer.dispose();
    renderer.forceContextLoss();
    renderer.domElement.remove();
    if (labelRenderer.domElement.parentNode) labelRenderer.domElement.remove();
  };
}
