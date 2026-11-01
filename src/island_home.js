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
  scene.background = new THREE.Color("#244d47");
  scene.fog = new THREE.Fog("#244d47", 38, 92);
  const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 160);
  const world = new THREE.Group();
  scene.add(world);

  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.6));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.06;
  renderer.domElement.setAttribute("aria-hidden", "true");
  renderer.domElement.setAttribute("role", "presentation");
  canvasHost.appendChild(renderer.domElement);

  const labelRenderer = new CSS2DRenderer();
  labelRenderer.domElement.style.position = "absolute";
  labelRenderer.domElement.style.inset = "0";
  labelRenderer.domElement.style.overflow = "hidden";
  labelRenderer.domElement.style.pointerEvents = "none";
  labelHost.appendChild(labelRenderer.domElement);

  scene.add(new THREE.HemisphereLight("#e7f0dc", "#315145", 2.25));
  const sun = new THREE.DirectionalLight("#fff0d2", 3.4);
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
    new THREE.MeshStandardMaterial({ color: "#315e55", roughness: 0.92, metalness: 0.02 })
  );
  water.rotation.x = -Math.PI / 2;
  water.position.y = -0.17;
  water.receiveShadow = true;
  world.add(water);

  const targets = [];
  const selectableRoots = new Set();
  const palette = {
    land: ["#7b9b72", "#6b8d68", "#879b6f", "#63836c"],
    soil: ["#9b7654", "#a7815a", "#8d7053", "#ad8259"],
    roof: ["#bd744a", "#d29a4b", "#528176", "#557366", "#b75d4b"],
    building: ["#eee7d3", "#e3ddc6", "#e6e2d3"],
    ink: "#173a31"
  };
  const categoryPositions = [
    { x: -2.7, z: 1.9 }, { x: -1.7, z: -2.0 }, { x: 0, z: 1.9 },
    { x: 1.7, z: -2.0 }, { x: 2.7, z: 1.9 }
  ];
  const categoryColors = { "文稿": "#bd744a", "剪影": "#d19a4a", "詩詞": "#4c827a", "親子園地": "#769468", "封底": "#ba6150", "待分類": "#858b78" };

  function material(color, options = {}) {
    return new THREE.MeshStandardMaterial({ color, roughness: 0.86, flatShading: true, ...options });
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

  function addIsland(month, x, z, radius, isMain = false) {
    const root = new THREE.Group();
    root.position.set(x, 0, z);
    world.add(root);
    const landColor = palette.land[(month.month + month.year) % palette.land.length];
    const soilColor = palette.soil[(month.month + month.year) % palette.soil.length];
    const base = mesh(new THREE.CylinderGeometry(radius * 0.97, radius * 1.1, 0.58, 8, 1), soilColor);
    base.position.y = 0.34;
    root.add(base);
    const grassyRim = mesh(new THREE.CylinderGeometry(radius * 0.98, radius * 1.02, 0.28, 8, 1), "#9e9a68");
    grassyRim.position.y = 0.74;
    root.add(grassyRim);
    const top = mesh(new THREE.CylinderGeometry(radius * 0.96, radius * 0.99, 0.24, 8, 1), landColor);
    top.position.y = 0.99;
    root.add(top);
    const groundRoot = new THREE.Group();
    groundRoot.add(base.clone(), grassyRim.clone(), top.clone());
    // Keep the actual meshes in the island root; the root itself is the ground hit target.
    markRoot(root, reviewURL(month.key));
    root.userData.topY = 1.1;
    return root;
  }

  function addBuilding(parent, x, z, label, route, color, scale = 1, detail = "", labelOffset = 0) {
    const building = new THREE.Group();
    building.position.set(x, 1.1, z);
    parent.add(building);
    const footing = mesh(new THREE.BoxGeometry(0.98 * scale, 0.16 * scale, 0.82 * scale), "#d3c6a1");
    footing.position.y = 0.08 * scale;
    building.add(footing);
    const body = mesh(new THREE.BoxGeometry(0.72 * scale, 0.76 * scale, 0.62 * scale), palette.building[(label.length + Math.round(x * 10)) % palette.building.length]);
    body.position.y = 0.52 * scale;
    building.add(body);
    const roof = mesh(new THREE.ConeGeometry(0.62 * scale, 0.54 * scale, 4, 1), color);
    roof.position.y = 1.15 * scale;
    roof.rotation.y = Math.PI / 4;
    building.add(roof);
    const door = mesh(new THREE.BoxGeometry(0.19 * scale, 0.34 * scale, 0.045 * scale), "#53614c", { roughness: 1 });
    door.position.set(0, 0.28 * scale, 0.33 * scale);
    building.add(door);
    for (const side of [-1, 1]) {
      const windowMesh = mesh(new THREE.BoxGeometry(0.13 * scale, 0.14 * scale, 0.04 * scale), "#88a8a0", { roughness: 0.36, metalness: 0.1 });
      windowMesh.position.set(side * 0.22 * scale, 0.64 * scale, 0.33 * scale);
      building.add(windowMesh);
    }
    markRoot(building, route);
    building.add(makeLabel(label, detail, route, { x: 0, y: 2.02 * scale + labelOffset, z: 0 }));
    return building;
  }

  function addTree(parent, x, z, scale = 1, tint = "#496c4e") {
    const tree = new THREE.Group();
    tree.position.set(x, 1.05, z);
    parent.add(tree);
    const trunk = mesh(new THREE.CylinderGeometry(0.08 * scale, 0.12 * scale, 0.55 * scale, 5), "#806044");
    trunk.position.y = 0.28 * scale;
    tree.add(trunk);
    const crown = mesh(new THREE.DodecahedronGeometry(0.44 * scale, 0), tint);
    crown.position.y = 0.78 * scale;
    tree.add(crown);
    const crown2 = mesh(new THREE.DodecahedronGeometry(0.31 * scale, 0), "#69885a");
    crown2.position.set(0.12 * scale, 1.02 * scale, 0.04 * scale);
    tree.add(crown2);
  }

  function addGroupMarker(parent, month, group, x, z, count) {
    const route = reviewURL(month.key, { group: group.id });
    const marker = new THREE.Group();
    marker.position.set(x, 1.1, z);
    parent.add(marker);
    const post = mesh(new THREE.CylinderGeometry(0.045, 0.06, 0.82, 5), "#805d3d");
    post.position.y = 0.42;
    marker.add(post);
    const flag = mesh(new THREE.BoxGeometry(0.62, 0.34, 0.06), categoryColors["文稿"], { roughness: 0.8 });
    flag.position.set(0.27, 0.67, 0);
    marker.add(flag);
    const number = document.createElement("span");
    number.textContent = group.id === 0 ? "?" : String(group.id);
    number.style.cssText = "display:block;font-weight:900;font-size:12px;line-height:1;color:#fffdf3;text-align:center";
    const numberLabel = new CSS2DObject(number);
    numberLabel.position.set(0.27, 0.67, 0.05);
    marker.add(numberLabel);
    markRoot(marker, route);
    marker.add(makeLabel(group.label, `${count} 篇`, route, { x: 0, y: 1.23, z: 0 }));
  }

  function addBridge(angle, distance) {
    const start = 5.0;
    const end = Math.max(start + 0.65, distance - 2.7);
    const length = end - start;
    const bridge = new THREE.Group();
    bridge.position.set(Math.cos(angle) * (start + end) / 2, 0.62, Math.sin(angle) * (start + end) / 2);
    bridge.rotation.y = -angle;
    world.add(bridge);
    const plankCount = Math.max(3, Math.ceil(length / 0.48));
    for (let i = 0; i < plankCount; i += 1) {
      const plank = mesh(new THREE.BoxGeometry(length / plankCount - 0.045, 0.12, 0.56), i % 2 ? "#9b7654" : "#ae835b");
      plank.position.x = -length / 2 + (i + 0.5) * (length / plankCount);
      bridge.add(plank);
    }
    for (const side of [-1, 1]) {
      const rail = mesh(new THREE.BoxGeometry(length, 0.08, 0.05), "#856749");
      rail.position.set(0, 0.2, side * 0.31);
      bridge.add(rail);
    }
  }

  function monthPosition(index, count, ringRadius) {
    const angle = count === 1 ? 0 : (Math.PI * 2 * index) / count;
    return { x: Math.cos(angle) * ringRadius, z: Math.sin(angle) * ringRadius, angle };
  }

  const mainIsland = { key: latest.key, year: latest.year, month: latest.month, label: "文宣作品集總覽", categories: latest.categories, groups: latest.groups };
  const archiveTotal = Number(data.totalEntries) || months.reduce((sum, month) => sum + Number(month.entries || 0), 0);
  const mainRoot = addIsland(mainIsland, 0, 0, 4.75, true);
  addBuilding(mainRoot, 0, -1.15, "作品總覽", reviewURL(latest.key), "#b96c43", 1.28, `${archiveTotal} 篇 · ${Number(data.totalMonths) || months.length} 個月份`);
  const categoryNames = latest.categories.map((item) => item.name);
  const positions = categoryPositions;
  categoryNames.forEach((name, index) => {
    const spot = positions[index] || { x: (index - 2) * 0.88, z: 2.25 };
    addBuilding(mainRoot, spot.x, spot.z, name, reviewURL(latest.key, { category: name }), categoryColors[name] || "#777f6d", 0.68);
  });
  addTree(mainRoot, -3.6, -1.6, 0.8, "#547550");
  addTree(mainRoot, 3.6, -1.65, 0.82, "#4e7050");
  addTree(mainRoot, -3.9, 1.7, 0.62, "#607d59");

  const ringRadius = Math.max(9.2, months.length > 2 ? 2.9 / Math.sin(Math.PI / months.length) : 9.2);
  const viewDistance = (width) => Math.max(width < 560 ? 34 : 27, ringRadius * (width < 560 ? 3.4 : 2.9));
  months.forEach((month, index) => {
    const spot = monthPosition(index, months.length, ringRadius);
    addBridge(spot.angle, ringRadius);
    const island = addIsland(month, spot.x, spot.z, 2.48, false);
    const subtitle = `${month.entries} 篇 · ${month.images} 張附圖`;
    addBuilding(island, 0, -0.3, `${month.month} 月`, reviewURL(month.key), "#c27c4d", 0.98, subtitle, 0.72);
    const groupPositions = [{ x: -1.55, z: 1.05 }, { x: 1.55, z: 1.05 }, { x: 0, z: -1.55 }];
    month.groups.forEach((group, groupIndex) => {
      const point = groupPositions[groupIndex] || { x: (groupIndex - 1) * 0.74, z: 1.55 };
      addGroupMarker(island, month, group, point.x, point.z, group.count);
    });
    addTree(island, -1.9, -0.9, 0.48, "#52724e");
  });

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.075;
  controls.enablePan = false;
  controls.enableZoom = true;
  controls.enableRotate = true;
  controls.rotateSpeed = 0.48;
  controls.zoomSpeed = 0.78;
  controls.minPolarAngle = 0.32;
  controls.maxPolarAngle = 1.23;
  controls.minDistance = 17;
  controls.maxDistance = 58;
  controls.target.set(0, 0.85, 0);
  controls.autoRotate = !reducedMotion;
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
    rotateButton.textContent = controls.autoRotate ? "暫停自動旋轉" : "啟動自動旋轉";
  }
  syncRotateButton();
  if (reducedMotion) rotateButton.textContent = "啟動自動旋轉";
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
    window.setTimeout(() => { location.href = hit.route; }, 110);
  }, { passive: true });
  renderer.domElement.addEventListener("pointercancel", () => { down = null; }, { passive: true });
  renderer.domElement.addEventListener("webglcontextlost", (event) => {
    event.preventDefault();
    unavailable("3D 圖形暫時中斷；請使用右側清單繼續瀏覽。");
  });

  status.hidden = true;
  let animationId = 0;
  function animate() {
    animationId = window.requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
    labelRenderer.render(scene, camera);
  }
  animate();
})();
