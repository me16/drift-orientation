/* 3D scenery for the tactical plot: backdrop bodies (combat/backdrops.js) and hazard meshes.
 * Uses the three.js r128 globals loaded by combat/index.html. Everything is seeded, so the GM's
 * screen and the players' screens build the same rocks in the same places. */
window.Scenery = (function () {
  "use strict";
  if (!window.THREE) return null;
  const T = THREE;
  const TAU = Math.PI * 2;

  function rng(seed) { // mulberry32
    let a = seed >>> 0;
    return function () { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
  }
  function hash(s) { let h = 2166136261; for (const c of String(s)) { h ^= c.charCodeAt(0); h = Math.imul(h, 16777619); } return h >>> 0; }
  const css = n => typeof n === "string" ? n : "#" + (n >>> 0).toString(16).padStart(6, "0");
  function tex(w, h, draw) { const c = document.createElement("canvas"); c.width = w; c.height = h; draw(c.getContext("2d"), w, h); const t = new T.CanvasTexture(c); t.anisotropy = 4; return t; }
  function mix(a, b, k) { const A = new T.Color(css(a)), B = new T.Color(css(b)); return "#" + A.lerp(B, k).getHexString(); }

  let GLOW = null;
  function glowTex() {
    if (GLOW) return GLOW;
    GLOW = tex(128, 128, (x) => { const g = x.createRadialGradient(64, 64, 0, 64, 64, 64); g.addColorStop(0, "rgba(255,255,255,1)"); g.addColorStop(.25, "rgba(255,255,255,.45)"); g.addColorStop(1, "rgba(255,255,255,0)"); x.fillStyle = g; x.fillRect(0, 0, 128, 128); });
    return GLOW;
  }
  function sprite(col, scale, op, fog = false) {
    const s = new T.Sprite(new T.SpriteMaterial({ map: glowTex(), color: col, transparent: true, opacity: op, blending: T.AdditiveBlending, depthWrite: false, fog }));
    s.scale.set(scale, scale, 1); return s;
  }
  function std(col, o = {}) { return new T.MeshStandardMaterial(Object.assign({ color: col, roughness: .8, metalness: .2, flatShading: true }, o)); }
  function at(o, x, y, z) { o.position.set(x, y, z); return o; }
  function mesh(geo, mat, x = 0, y = 0, z = 0) { const m = new T.Mesh(geo, mat); m.position.set(x, y, z); return m; }

  /* ---------- textures ---------- */
  function rockyTex(c1, c2, seed, city) {
    const R = rng(seed);
    const map = tex(512, 256, (x, w, h) => {
      x.fillStyle = css(c1); x.fillRect(0, 0, w, h);
      for (let i = 0; i < 420; i++) {
        const r = 4 + R() * 40, px = R() * w, py = h * .08 + R() * h * .84;
        x.globalAlpha = .08 + R() * .22; x.fillStyle = R() < .55 ? css(c2) : mix(c1, 0x000000, .35);
        x.beginPath(); x.ellipse(px, py, r * 1.8, r, 0, 0, TAU); x.fill();
        if (px < r * 2) { x.beginPath(); x.ellipse(px + w, py, r * 1.8, r, 0, 0, TAU); x.fill(); }
      }
      x.globalAlpha = .5; x.fillStyle = "#e8eef8"; x.fillRect(0, 0, w, h * .05); x.fillRect(0, h * .95, w, h * .05);
    });
    let lights = null;
    if (city) lights = tex(512, 256, (x, w, h) => {
      x.fillStyle = "#000"; x.fillRect(0, 0, w, h);
      for (let i = 0; i < 2600; i++) { const px = R() * w, py = h * .15 + R() * h * .7; x.fillStyle = R() < .7 ? "#ffd8a0" : "#a0f0ff"; x.globalAlpha = .35 + R() * .65; x.fillRect(px, py, 1 + R() * 1.6, 1); }
    });
    return { map, lights };
  }
  function bandTex(colors, seed) {
    const R = rng(seed);
    return tex(64, 512, (x, w, h) => {
      let y = 0;
      while (y < h) { const bh = 4 + R() * 26; x.fillStyle = colors[Math.floor(R() * colors.length)]; x.fillRect(0, y, w, bh + 1); y += bh; }
      for (let i = 0; i < 60; i++) { x.globalAlpha = .15; x.fillStyle = colors[Math.floor(R() * colors.length)]; x.fillRect(0, R() * h, w, 2 + R() * 6); }
    });
  }
  function bandSphereTex(colors, seed) { // equirect bands: rotate band strip into a 512x256 map
    const R = rng(seed);
    return tex(512, 256, (x, w, h) => {
      let y = 0;
      while (y < h) { const bh = 3 + R() * 18; x.fillStyle = colors[Math.floor(R() * colors.length)]; x.fillRect(0, y, w, bh + 1); y += bh; }
      for (let i = 0; i < 80; i++) { x.globalAlpha = .18; x.fillStyle = colors[Math.floor(R() * colors.length)]; const yy = R() * h; x.beginPath(); x.ellipse(R() * w, yy, 20 + R() * 60, 2 + R() * 5, 0, 0, TAU); x.fill(); }
      x.globalAlpha = .55; x.fillStyle = colors[2] || colors[0]; x.beginPath(); x.ellipse(w * .62, h * .62, 22, 11, 0, 0, TAU); x.fill();
    });
  }
  function diskTex(inner, outer) { // radial gradient for accretion disks and planetary rings (RingGeometry UVs are planar)
    return tex(512, 512, (x, w) => {
      const g = x.createRadialGradient(w / 2, w / 2, 0, w / 2, w / 2, w / 2);
      g.addColorStop(0, "rgba(0,0,0,0)"); g.addColorStop(inner, "rgba(255,250,235,1)"); g.addColorStop(inner + .08, "rgba(255,190,110,.9)");
      g.addColorStop((inner + outer) / 2, "rgba(255,110,60,.45)"); g.addColorStop(outer, "rgba(140,40,80,0)"); g.addColorStop(1, "rgba(0,0,0,0)");
      x.fillStyle = g; x.fillRect(0, 0, w, w);
    });
  }
  function ringTex(colors, seed) {
    const R = rng(seed);
    return tex(512, 512, (x, w) => {
      for (let r = w / 2; r > w * .3; r -= 1 + R() * 3) { x.strokeStyle = colors[Math.floor(R() * colors.length)]; x.globalAlpha = .15 + R() * .5; x.lineWidth = 2; x.beginPath(); x.arc(w / 2, w / 2, r, 0, TAU); x.stroke(); }
    });
  }
  function rockGeo(r, seed, detail = 1) {
    const g = new T.IcosahedronGeometry(r, detail), p = g.attributes.position, v = new T.Vector3();
    const s = (seed % 1000) / 100;
    for (let i = 0; i < p.count; i++) {
      v.fromBufferAttribute(p, i); const n = v.clone().normalize();
      const k = 1 + .22 * Math.sin(n.x * 3.1 + s) * Math.sin(n.y * 2.7 + s * 1.3) + .12 * Math.sin(n.z * 5.3 + s * 2.1);
      v.multiplyScalar(k); v.y *= .82; p.setXYZ(i, v.x, v.y, v.z);
    }
    g.computeVertexNormals(); return g;
  }

  /* ---------- backdrop bodies ---------- */
  // The plot is viewed from above, so every body is framed the same way: kept at its bearing, pushed out to at least
  // 420 units, set 7 to 29 degrees below the horizon (the upper part of the default view), and capped in apparent size
  // so a world reads as a horizon behind the fight rather than a wall. Belts ring the play area as written.
  function framing(b) {
    const [x, y, z] = b.at || [0, 0, -250], L = Math.hypot(x, y, z) || 1;
    if (b.t === "belt") return { pos: [x, y, z], size: b.size || 40 };
    const D = Math.max(420, L * 1.4), e = Math.max(-.5, Math.min(-.12, -.16 + (y / L) * .5)), az = Math.atan2(x, z);
    const spread = b.t === "wrecks" || b.t === "habitats";
    return { pos: [Math.sin(az) * Math.cos(e) * D, Math.sin(e) * D, Math.cos(az) * Math.cos(e) * D], size: spread ? (b.size || 20) : Math.min(b.size || 40, D * .14) };
  }
  function body(b, seed, anims) {
    const g = new T.Group(); const R = rng(seed); const fr = framing(b); const s = fr.size;
    g.position.set(...fr.pos);
    switch (b.t) {
      case "star": {
        g.add(mesh(new T.SphereGeometry(s, 32, 24), new T.MeshBasicMaterial({ color: b.color, fog: false })));
        g.add(sprite(b.color, s * 3.2, .9)); g.add(sprite(b.color, s * 7, .35)); const c = sprite(0xffffff, s * 2.3, .7); g.add(c);
        anims.push(t => { c.material.opacity = .55 + .15 * Math.sin(t * 1.7 + seed); });
        break;
      }
      case "moon": case "planet": {
        const tx = rockyTex(b.color || 0x6a6a72, b.color2 || mix(b.color || 0x6a6a72, 0xffffff, .2), seed, b.city);
        const mat = std(0xffffff, { map: tx.map, flatShading: false, roughness: .95, metalness: 0 });
        if (tx.lights) { mat.emissive = new T.Color(0xffffff); mat.emissiveMap = tx.lights; mat.emissiveIntensity = .9; }
        mat.fog = false;
        const sp = mesh(new T.SphereGeometry(s, 48, 32), mat); sp.rotation.z = .3; g.add(sp);
        anims.push(t => { sp.rotation.y = t * .004; });
        if (b.atmo) g.add(sprite(b.atmo, s * 2.9, .22));
        if (b.ring) { const rg = mesh(new T.RingGeometry(s * 1.4, s * 2.2, 96), new T.MeshBasicMaterial({ map: ringTex(["#c8b8a0", "#8a7a6a", "#e8dcc8"], seed), transparent: true, side: T.DoubleSide, depthWrite: false, fog: false })); rg.rotation.x = -1.2; g.add(rg); }
        break;
      }
      case "gasgiant": {
        const cols = (b.colors && b.colors.length ? b.colors : ["#6a5a8a", "#a08cc0", "#4a3c62", "#c4b6dc"]);
        const mat = std(0xffffff, { map: bandSphereTex(cols, seed), flatShading: false, roughness: 1, metalness: 0, fog: false });
        const sp = mesh(new T.SphereGeometry(s, 64, 40), mat); sp.rotation.z = .2; g.add(sp);
        anims.push(t => { sp.rotation.y = t * .006; });
        g.add(sprite(new T.Color(cols[3] || cols[0]), s * 2.7, .2));
        if (b.ring) { const rg = mesh(new T.RingGeometry(s * 1.35, s * 2.3, 128), new T.MeshBasicMaterial({ map: ringTex(cols, seed + 7), transparent: true, side: T.DoubleSide, depthWrite: false, fog: false })); rg.rotation.x = -1.35; rg.rotation.y = .15; g.add(rg); }
        for (let i = 0; i < (b.moons || 0); i++) {
          const a = R() * TAU, d = s * (1.7 + R() * .9), mr = s * (.05 + R() * .05);
          const mm = mesh(new T.SphereGeometry(mr, 20, 14), std(0xffffff, { map: rockyTex(mix(cols[i % cols.length], 0x888888, .5), 0xb0b0b8, seed + i).map, flatShading: false, fog: false }), Math.cos(a) * d, (R() - .5) * s * .4, Math.sin(a) * d);
          g.add(mm); const sp0 = R() * .02 + .01; anims.push(t => { const aa = a + t * sp0; mm.position.x = Math.cos(aa) * d; mm.position.z = Math.sin(aa) * d; });
        }
        break;
      }
      case "blackhole": {
        g.add(mesh(new T.SphereGeometry(s, 40, 28), new T.MeshBasicMaterial({ color: 0x000000, fog: false })));
        const disk = mesh(new T.RingGeometry(s * 1.15, s * 4, 160, 1), new T.MeshBasicMaterial({ map: diskTex(.29, .9), transparent: true, side: T.DoubleSide, blending: T.AdditiveBlending, depthWrite: false, fog: false }));
        disk.rotation.x = -Math.PI / 2 + (b.tilt != null ? b.tilt : .25); g.add(disk);
        const halo = mesh(new T.RingGeometry(s * 1.02, s * 1.6, 96, 1), new T.MeshBasicMaterial({ map: diskTex(.64, .98), transparent: true, side: T.DoubleSide, blending: T.AdditiveBlending, depthWrite: false, fog: false }));
        g.add(halo); anims.push((t, cam) => { halo.lookAt(cam.position); disk.rotation.z = t * .05; });
        g.add(sprite(0xffa060, s * 6, .14));
        break;
      }
      case "station": {
        const hull = std(b.color || 0x9097c4, { metalness: .5, roughness: .45 });
        const lit = new T.MeshBasicMaterial({ color: 0xfff0c0, fog: false });
        const rot = new T.Group(); g.add(rot);
        rot.add(mesh(new T.TorusGeometry(s, s * .09, 12, 64), hull));
        rot.add(mesh(new T.CylinderGeometry(s * .16, s * .16, s * .9, 16), hull));
        rot.add(mesh(new T.SphereGeometry(s * .26, 20, 14), hull));
        for (let i = 0; i < 4; i++) { const sp = mesh(new T.CylinderGeometry(s * .03, s * .03, s * 2, 6), hull); sp.rotation.z = Math.PI / 2; sp.rotation.y = i * Math.PI / 4; rot.add(sp); }
        for (let i = 0; i < 40; i++) { const a = R() * TAU; const l = mesh(new T.BoxGeometry(s * .03, s * .03, s * .03), lit, Math.cos(a) * s, (R() - .5) * s * .12, Math.sin(a) * s); rot.add(l); }
        rot.rotation.x = .5; anims.push(t => { rot.rotation.y = t * .03; });
        hull.fog = false;
        break;
      }
      case "fortress": {
        const hull = std(b.color || 0xb8a6dc, { metalness: .5, roughness: .5, fog: false });
        const dark = std(0x2a2a3a, { fog: false });
        g.add(mesh(new T.OctahedronGeometry(s * .5, 0), hull)); g.children[0].scale.set(1, 2.2, 1);
        for (let i = 0; i < 6; i++) { const a = i / 6 * TAU; const c = mesh(new T.ConeGeometry(s * .08, s * .9, 6), dark, Math.cos(a) * s * .55, 0, Math.sin(a) * s * .55); c.rotation.z = -Math.cos(a) * 1.2; c.rotation.x = Math.sin(a) * 1.2; g.add(c); }
        g.add(mesh(new T.TorusGeometry(s * .8, s * .04, 8, 48), hull)); g.children[g.children.length - 1].rotation.x = Math.PI / 2;
        for (let i = 0; i < 24; i++) { const a = R() * TAU; g.add(at(sprite(0xffe0a0, s * .08, .9), Math.cos(a) * s * .8, 0, Math.sin(a) * s * .8)); }
        break;
      }
      case "shipyard": {
        const lm = new T.LineBasicMaterial({ color: 0x9aa0c8, transparent: true, opacity: .7, fog: false });
        for (let i = 0; i < 3; i++) {
          const box = new T.BoxGeometry(s * .5, s * .35, s * 1.3); const e = new T.LineSegments(new T.EdgesGeometry(box), lm); e.position.set((i - 1) * s * .6, 0, 0); g.add(e);
          const hull = mesh(new T.CylinderGeometry(s * .1, s * .14, s * (.6 + R() * .5), 8), std(0x6a6f90, { fog: false }), (i - 1) * s * .6, 0, 0); hull.rotation.x = Math.PI / 2; g.add(hull);
          for (let j = 0; j < 6; j++) g.add(at(sprite(R() < .5 ? 0xffb35c : 0x6ff3e0, s * .07, .9), (i - 1) * s * .6 + (R() - .5) * s * .5, (R() - .5) * s * .35, (R() - .5) * s * 1.3));
        }
        break;
      }
      case "lantern": {
        const core = mesh(new T.IcosahedronGeometry(s, 1), new T.MeshStandardMaterial({ color: 0x5a5034, emissive: 0xffe9a8, emissiveIntensity: .3, flatShading: true, metalness: .3, roughness: .6, fog: false }));
        g.add(core);
        const shell = new T.LineSegments(new T.EdgesGeometry(new T.IcosahedronGeometry(s * 1.08, 1)), new T.LineBasicMaterial({ color: 0xfff1b8, transparent: true, opacity: .35, fog: false })); g.add(shell);
        const gl = sprite(0xfff1b8, s * 5, .35); g.add(gl); g.add(sprite(0xffffff, s * 2.6, .25));
        anims.push(t => { core.rotation.y = t * .01; shell.rotation.y = -t * .006; const k = .5 + .5 * Math.sin(t * .35); core.material.emissiveIntensity = .18 + .22 * k; gl.material.opacity = .25 + .2 * k; core.material.emissive.setHSL(.12 + .05 * Math.sin(t * .13), .8, .7); });
        break;
      }
      case "array": {
        const m = std(0xb8c0d8, { metalness: .6, roughness: .4, side: T.DoubleSide, fog: false });
        const dish = mesh(new T.SphereGeometry(s * .6, 32, 12, 0, TAU, 0, .7), m); dish.rotation.x = -.9; g.add(dish);
        g.add(mesh(new T.CylinderGeometry(s * .03, s * .05, s * .9, 8), m, 0, -s * .5, 0));
        const feed = mesh(new T.CylinderGeometry(s * .015, s * .015, s * .5, 6), m, 0, s * .1, s * .2); feed.rotation.x = -.9; g.add(feed);
        const blink = sprite(0x8fb4ff, s * .18, .9); blink.position.set(0, s * .25, s * .3); g.add(blink);
        anims.push(t => { blink.material.opacity = (t * .5 % 1) < .1 ? 1 : .15; });
        break;
      }
      case "ring": {
        const r = mesh(new T.TorusGeometry(s, s * .02, 8, 128), new T.MeshBasicMaterial({ color: b.color || 0xc9a6ff, transparent: true, opacity: .55, fog: false }));
        r.rotation.y = .6; g.add(r);
        for (let i = 0; i < 16; i++) { const a = i / 16 * TAU; const sp = sprite(b.color || 0xc9a6ff, s * .12, .9); sp.position.set(Math.cos(a) * s, Math.sin(a) * s, 0).applyAxisAngle(new T.Vector3(0, 1, 0), .6); g.add(sp); }
        break;
      }
      case "cathedral": case "barge": {
        const isB = b.t === "barge";
        const hull = std(isB ? 0x2a2630 : 0xb8a6dc, { metalness: .5, roughness: .5, fog: false });
        const spine = mesh(new T.CylinderGeometry(s * .06, s * .12, s * 1.6, 8), hull); spine.rotation.x = Math.PI / 2; g.add(spine);
        const nose = mesh(new T.ConeGeometry(s * .06, s * .5, 8), hull, 0, 0, s * 1.05); nose.rotation.x = Math.PI / 2; g.add(nose);
        for (let i = 0; i < 5; i++) {
          const z = (i - 2) * s * .28, h = s * (.22 + .1 * Math.sin(i));
          const tower = mesh(new T.ConeGeometry(s * .05, h, 6), hull, 0, s * .1 + h / 2, z); g.add(tower);
          for (const sx of [-1, 1]) { const fin = mesh(new T.BoxGeometry(s * .02, s * .16, s * .18), hull, sx * s * .14, 0, z); fin.rotation.z = sx * .5; g.add(fin); }
        }
        for (let i = 0; i < 30; i++) { const sp = sprite(isB ? 0x9a86c8 : 0xe0ccff, s * .03, isB ? .35 : .9); sp.position.set((R() - .5) * s * .2, (R() - .2) * s * .25, (R() - .5) * s * 1.4); g.add(sp); }
        g.rotation.y = .7;
        if (isB) anims.push(t => { g.rotation.z = Math.sin(t * .05) * .1; g.rotation.y = .7 + t * .004; });
        break;
      }
      case "belt": {
        const n = b.count || 400, r = b.r || 160, wdt = b.width || 60;
        const geo = rockGeo(1, seed, 0), mat = std(b.color || 0x6a6258, { fog: true });
        const im = new T.InstancedMesh(geo, mat, n); const m4 = new T.Matrix4(), q = new T.Quaternion(), e = new T.Euler(), sc = new T.Vector3(), p = new T.Vector3();
        for (let i = 0; i < n; i++) {
          const a = R() * TAU, d = r + (R() - .5) * wdt, k = .6 + Math.pow(R(), 3) * 6;
          p.set(Math.cos(a) * d, (R() - .5) * wdt * .12, Math.sin(a) * d); e.set(R() * 6, R() * 6, R() * 6); q.setFromEuler(e); sc.set(k, k * (.6 + R() * .5), k);
          m4.compose(p, q, sc); im.setMatrixAt(i, m4);
        }
        g.add(im); anims.push(t => { im.rotation.y = t * .002; });
        break;
      }
      case "wrecks": {
        const n = b.count || 12, sp = b.spread || 160, mat = std(0x4a4c60, { metalness: .5, roughness: .7 });
        for (let i = 0; i < n; i++) {
          const w = new T.Group(), k = 3 + R() * 9;
          w.add(mesh(new T.BoxGeometry(k * .4, k * .25, k * 1.4), mat));
          const half = mesh(new T.CylinderGeometry(k * .15, k * .22, k * .9, 7), mat, 0, k * .1, k * .9); half.rotation.x = 1.2 + R(); w.add(half);
          if (R() < .5) w.add(mesh(new T.BoxGeometry(k * 1.3, k * .05, k * .4), mat, 0, 0, -k * .3));
          if (R() < .35) w.add(sprite(0xff8a4a, k * .5, .6, true));
          w.position.set((R() - .5) * sp, (R() - .5) * sp * .25, (R() - .5) * sp * .5); w.rotation.set(R() * 6, R() * 6, R() * 6); g.add(w);
          const spin = (R() - .5) * .02; anims.push(t => { w.rotation.y += spin * .016; });
        }
        break;
      }
      case "habitats": {
        const n = b.count || 9, sp = b.spread || 120, hs = b.size || 20;
        const rock = std(0x6a6258), pts = [];
        for (let i = 0; i < n; i++) {
          const h = new T.Group(), k = n === 1 ? hs : hs * (.6 + R() * .6);
          h.add(mesh(rockGeo(k, seed + i), rock));
          for (let j = 0; j < 14; j++) { const a = R() * TAU, yy = (R() - .5) * k * .8; const l = sprite(R() < .7 ? 0xffd8a0 : 0x6ff3e0, k * .08, .95, true); l.position.set(Math.cos(a) * k * .95, yy, Math.sin(a) * k * .95); h.add(l); }
          if (n === 1) { const mouth = sprite(0xffb35c, k * .9, .5, true); mouth.position.set(0, 0, k * .9); h.add(mouth); }
          h.position.set(n === 1 ? 0 : (R() - .5) * sp, (R() - .5) * sp * .2, n === 1 ? 0 : (R() - .5) * sp * .5); g.add(h); pts.push(h.position.clone());
        }
        if (pts.length > 1) { const seg = []; for (let i = 1; i < pts.length; i++) seg.push(pts[i - 1], pts[i]); g.add(new T.LineSegments(new T.BufferGeometry().setFromPoints(seg), new T.LineBasicMaterial({ color: 0x8a8070, transparent: true, opacity: .5 }))); }
        break;
      }
    }
    return g;
  }

  // Build a backdrop: returns {group, update(t, cam)}. The caller owns lights and fog.
  function build(def) {
    const group = new T.Group(); const anims = []; const base = hash(def.id || "x");
    const sky = def.sky || {};
    // stars
    const n = Math.round(2400 * (sky.stars == null ? 1 : sky.stars));
    if (n > 0) {
      const R = rng(base), p = new Float32Array(n * 3), c = new Float32Array(n * 3);
      for (let i = 0; i < n; i++) {
        const u = R() * 2 - 1, th = R() * TAU, r = 1200 + R() * 150, q = Math.sqrt(1 - u * u);
        p.set([r * q * Math.cos(th), r * u, r * q * Math.sin(th)], i * 3); const w = .55 + R() * .45, tint = R();
        c.set(tint < .15 ? [w, w * .85, w * .6] : tint < .3 ? [w * .8, w * .9, w] : [w, w, w], i * 3);
      }
      const g = new T.BufferGeometry(); g.setAttribute("position", new T.BufferAttribute(p, 3)); g.setAttribute("color", new T.BufferAttribute(c, 3));
      group.add(new T.Points(g, new T.PointsMaterial({ size: 1.6, sizeAttenuation: false, vertexColors: true, fog: false })));
    }
    for (const [col, x, y, z, sc, op] of (sky.neb || [])) {
      const fr = framing({ t: "neb", at: [x, y, z] }), k = Math.hypot(...fr.pos) / (Math.hypot(x, y, z) || 1);
      const s = sprite(col, sc * k, op); s.position.set(...fr.pos); group.add(s);
    }
    (def.bodies || []).forEach((b, i) => group.add(body(b, base + i * 101, anims)));
    return { group, update(t, cam) { for (const a of anims) a(t, cam); } };
  }

  /* ---------- hazards ---------- */
  // Returns a Group centred on the hazard; update(t, h) animates it.
  function hazard(h, K) {
    const g = new T.Group(); const R = rng(hash(h.kind + ":" + h.id)); const r = h.r || 2; const anims = [];
    const col = K.col;
    switch (h.kind) {
      case "asteroid": {
        const m = mesh(rockGeo(r, hash("a" + h.id)), std(0x8a8072, { roughness: .95 })); g.add(m);
        const sx = (R() - .5) * .4, sy = (R() - .5) * .4; anims.push((t, dt) => { m.rotation.x += sx * dt; m.rotation.y += sy * dt; });
        break;
      }
      case "wreck": {
        const mat = std(0x4e5168, { metalness: .5, roughness: .7 });
        g.add(mesh(new T.BoxGeometry(r * .7, r * .45, r * 1.8), mat));
        const p = mesh(new T.CylinderGeometry(r * .25, r * .35, r * 1.2, 7), mat, r * .3, r * .2, r * .9); p.rotation.x = 1.3; g.add(p);
        g.add(mesh(new T.BoxGeometry(r * 1.6, r * .08, r * .5), mat, 0, 0, -r * .4));
        const f = sprite(0xff8a4a, r * .9, .5, true); f.position.set(-r * .2, r * .3, r * .5); g.add(f);
        g.rotation.set(R() * 2, R() * 6, R() * 2);
        anims.push(t => { f.material.opacity = .3 + .3 * Math.abs(Math.sin(t * 3 + h.id)); g.rotation.y += .0008; });
        break;
      }
      case "debris": {
        const n = Math.round(30 * r), pos = new Float32Array(n * 3);
        for (let i = 0; i < n; i++) { const a = R() * TAU, d = Math.sqrt(R()) * r; pos.set([Math.cos(a) * d, (R() - .5) * r * .35, Math.sin(a) * d], i * 3); }
        const pg = new T.BufferGeometry(); pg.setAttribute("position", new T.BufferAttribute(pos, 3));
        g.add(new T.Points(pg, new T.PointsMaterial({ color: 0xa8aab8, size: .22 })));
        const mat = std(0x6a6c80, { metalness: .4 });
        for (let i = 0; i < Math.round(r * 1.6); i++) { const a = R() * TAU, d = Math.sqrt(R()) * r; const k = .2 + R() * .45; const m = mesh(new T.TetrahedronGeometry(k), mat, Math.cos(a) * d, (R() - .5) * r * .3, Math.sin(a) * d); m.rotation.set(R() * 6, R() * 6, 0); g.add(m); }
        anims.push(t => { g.rotation.y = t * .02; });
        break;
      }
      case "mine": {
        const red = new T.MeshStandardMaterial({ color: 0x55262c, emissive: 0xff3b4a, emissiveIntensity: .35, flatShading: true, metalness: .5 });
        g.add(mesh(new T.SphereGeometry(.55, 12, 8), red));
        for (let i = 0; i < 8; i++) { const d = new T.Vector3(R() - .5, R() - .5, R() - .5).normalize(); const c = mesh(new T.ConeGeometry(.12, .5, 5), red, d.x * .6, d.y * .6, d.z * .6); c.quaternion.setFromUnitVectors(new T.Vector3(0, 1, 0), d); g.add(c); }
        const bl = sprite(0xff3b4a, 2.2, .9, true); g.add(bl);
        anims.push(t => { bl.material.opacity = (t * 1.2 + h.id * .3) % 1 < .18 ? .95 : .1; g.rotation.y = t * .4; });
        break;
      }
      case "charge": {
        const amb = new T.MeshStandardMaterial({ color: 0x6a5a40, emissive: 0xffb35c, emissiveIntensity: .25, metalness: .4, roughness: .5 });
        const tank = mesh(new T.CylinderGeometry(.7, .7, 1.8, 14), amb); tank.rotation.z = Math.PI / 2; g.add(tank);
        for (const x of [-.5, .5]) { const band = mesh(new T.CylinderGeometry(.74, .74, .2, 14), new T.MeshBasicMaterial({ color: 0xffb35c }), x, 0, 0); band.rotation.z = Math.PI / 2; g.add(band); }
        const bl = sprite(0xffb35c, 2.4, .8, true); g.add(bl);
        anims.push(t => { bl.material.opacity = .25 + .5 * Math.abs(Math.sin(t * 2 + h.id)); g.rotation.x = t * .3; });
        break;
      }
      case "nebula": case "ion": case "heat": {
        const tone = h.kind === "nebula" ? col : h.kind === "ion" ? 0x8fb4ff : 0xff8a4a;
        const parts = [];
        for (let i = 0; i < 7; i++) { const s = sprite(tone, r * (1 + R() * .8), .1 + R() * .1, true); s.position.set((R() - .5) * r, (R() - .5) * r * .3, (R() - .5) * r); g.add(s); parts.push([s, R() * 6, s.material.opacity]); }
        anims.push(t => { for (const [s, ph, op] of parts) s.material.opacity = h.kind === "ion" ? op * (.6 + .8 * ((t * 3 + ph) % 1 < .07 ? 2 : .5)) : op * (.8 + .2 * Math.sin(t * .8 + ph)); });
        break;
      }
      case "well": {
        const core = Math.max(1.5, h.core || 4);
        g.add(mesh(new T.SphereGeometry(core * .8, 24, 16), new T.MeshBasicMaterial({ color: 0x000000 })));
        const disk = mesh(new T.RingGeometry(core, core * 3, 96), new T.MeshBasicMaterial({ map: diskTex(.36, .95), transparent: true, side: T.DoubleSide, blending: T.AdditiveBlending, depthWrite: false }));
        disk.rotation.x = -Math.PI / 2 + .15; g.add(disk);
        const sw = [];
        for (let i = 0; i < 3; i++) { const ring = new T.Line(new T.BufferGeometry().setFromPoints(Array.from({ length: 97 }, (_, j) => { const a = j / 96 * TAU, d = r * (.35 + i * .22) * (1 - .25 * (j / 96)); return new T.Vector3(Math.cos(a) * d, 0, Math.sin(a) * d); })), new T.LineBasicMaterial({ color: 0x8a6aff, transparent: true, opacity: .35 })); g.add(ring); sw.push(ring); }
        anims.push(t => { disk.rotation.z = t * .3; sw.forEach((s, i) => { s.rotation.y = t * (.15 + i * .1); }); });
        break;
      }
      case "current": {
        const n = Math.round(r * 14), pos = new Float32Array(n * 3), seeds = [];
        for (let i = 0; i < n; i++) seeds.push([R() * 2 - 1, (R() - .5) * .3, R() * 2 - 1, R()]);
        const pg = new T.BufferGeometry(); pg.setAttribute("position", new T.BufferAttribute(pos, 3));
        g.add(new T.Points(pg, new T.PointsMaterial({ color: col, size: .3, map: glowTex(), transparent: true, opacity: .85, blending: T.AdditiveBlending, depthWrite: false })));
        anims.push((t, dt, hz) => {
          const f = hz.flow || [1, 0], len = Math.hypot(f[0], f[1]) || 1, ux = f[0] / len, uz = f[1] / len;
          for (let i = 0; i < n; i++) {
            const s = seeds[i]; const along = ((s[3] + t * .08 * len) % 1) * 2 - 1;
            const across = s[0]; const x = (along * ux - across * uz) * r, z = (along * uz + across * ux) * r;
            if (x * x + z * z > r * r) { pos.set([0, -999, 0], i * 3); continue; }
            pos.set([x, s[1] * r, z], i * 3);
          }
          pg.attributes.position.needsUpdate = true;
        });
        break;
      }
      case "null": {
        g.add(mesh(new T.SphereGeometry(r, 24, 16), new T.MeshBasicMaterial({ color: 0x8a8ea8, wireframe: true, transparent: true, opacity: .035 })));
        const s = sprite(0x000000, r * 2, 1, true); s.material.blending = T.NormalBlending; s.material.opacity = .5; g.add(s);
        break;
      }
      default: { // body: structure, freighter, habitat
        const nm = String(h.name || "").toLowerCase(); const mat = std(0x7f86b0, { metalness: .5, roughness: .5 });
        if (/barge|freighter|tanker/.test(nm)) {
          const hull = mesh(new T.CylinderGeometry(r * .3, r * .3, r * 2, 10), mat); hull.rotation.z = Math.PI / 2; g.add(hull);
          for (let i = 0; i < 3; i++) g.add(mesh(new T.BoxGeometry(r * .4, r * .5, r * .5), std(0x6a5a40), (i - 1) * r * .55, r * .25, 0));
          g.add(at(sprite(0x8fd8ff, r * .8, .7, true), -r * 1.1, 0, 0));
        } else if (/habitat|hollow|rock/.test(nm)) {
          g.add(mesh(rockGeo(r, hash("h" + h.id)), std(0x6a6258)));
          for (let i = 0; i < 10; i++) { const a = R() * TAU; g.add(at(sprite(0xffd8a0, r * .15, .95, true), Math.cos(a) * r * .95, (R() - .5) * r * .6, Math.sin(a) * r * .95)); }
        } else {
          g.add(mesh(new T.CylinderGeometry(r * .3, r * .3, r * 1.2, 12), mat));
          const ring = mesh(new T.TorusGeometry(r * .85, r * .08, 8, 40), mat); ring.rotation.x = Math.PI / 2; g.add(ring);
          for (let i = 0; i < 4; i++) { const a = i / 4 * TAU; const sp = mesh(new T.BoxGeometry(r * .85, r * .06, r * .06), mat, Math.cos(a) * r * .42, 0, Math.sin(a) * r * .42); sp.rotation.y = -a; g.add(sp); }
          const bl = sprite(0xff6b7a, r * .3, .9, true); bl.position.y = r * .7; g.add(bl);
          anims.push(t => { ring.rotation.z = t * .1; bl.material.opacity = (t % 1.5) < .15 ? 1 : .2; });
        }
      }
    }
    return { group: g, update(t, dt, hz) { for (const a of anims) a(t, dt, hz); } };
  }

  return { build, hazard, sprite, glowTex, rng, hash };
})();
