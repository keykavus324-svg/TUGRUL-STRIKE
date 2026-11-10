// Procedural PBR textures — canvas-generated albedo + normal + roughness
import * as THREE from 'three';

function rng(seed) { let s = seed; return () => { s = (s * 16807) % 2147483647; return (s - 1) / 2147483646; }; }

function makeCanvas(size, h) {
  const c = document.createElement('canvas'); c.width = size; c.height = h || size;
  return [c, c.getContext('2d')];
}

function speckle(ctx, size, rand, count, colors, minR, maxR, alpha) {
  for (let i = 0; i < count; i++) {
    ctx.globalAlpha = alpha * (0.4 + rand() * 0.6);
    ctx.fillStyle = colors[(rand() * colors.length) | 0];
    const r = minR + rand() * (maxR - minR);
    ctx.beginPath(); ctx.arc(rand() * size, rand() * size, r, 0, 7); ctx.fill();
  }
  ctx.globalAlpha = 1;
}

function heightToNormal(heightCanvas, strength = 2.0) {
  const w = heightCanvas.width, h = heightCanvas.height;
  const src = heightCanvas.getContext('2d').getImageData(0, 0, w, h).data;
  const [out, octx] = makeCanvas(w, h);
  const img = octx.createImageData(w, h);
  const H = (x, y) => {
    x = (x + w) % w; y = (y + h) % h;
    return src[(y * w + x) * 4] / 255;
  };
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    const dx = (H(x + 1, y) - H(x - 1, y)) * strength;
    const dy = (H(x, y + 1) - H(x, y - 1)) * strength;
    const inv = 1 / Math.hypot(dx, dy, 1);
    const i = (y * w + x) * 4;
    img.data[i] = (-dx * inv * 0.5 + 0.5) * 255;
    img.data[i + 1] = (dy * inv * 0.5 + 0.5) * 255;
    img.data[i + 2] = inv * 255;
    img.data[i + 3] = 255;
  }
  octx.putImageData(img, 0, 0);
  return out;
}

function toTex(canvas, repeat = 1, srgb = true) {
  const t = new THREE.CanvasTexture(canvas);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(repeat, repeat);
  t.anisotropy = 8;
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

function buildSet(albedoDraw, heightDraw, roughBase, size = 512, seed = 7) {
  const rand = rng(seed);
  const [alb, actx] = makeCanvas(size);
  albedoDraw(actx, size, rand);
  const [hgt, hctx] = makeCanvas(size);
  heightDraw(hctx, size, rand);
  const [rgh, rctx] = makeCanvas(size);
  rctx.fillStyle = `rgb(${roughBase},${roughBase},${roughBase})`; rctx.fillRect(0, 0, size, size);
  // roughness variation from height
  rctx.globalAlpha = 0.35;
  rctx.drawImage(hgt, 0, 0);
  rctx.globalAlpha = 1;
  return { map: toTex(alb), normalMap: toTex(heightToNormal(hgt), 1, false), roughnessMap: toTex(rgh, 1, false) };
}

export function makeTextures() {
  const T = {};

  // ---- SAND (ground) ----
  T.sand = buildSet((c, s, r) => {
    const g = c.createLinearGradient(0, 0, s, s);
    g.addColorStop(0, '#c9a86e'); g.addColorStop(.5, '#bd9c60'); g.addColorStop(1, '#c4a468');
    c.fillStyle = g; c.fillRect(0, 0, s, s);
    // wind ripples
    for (let i = 0; i < 90; i++) {
      c.strokeStyle = `rgba(90,66,30,${0.05 + r() * 0.08})`; c.lineWidth = 1 + r() * 2;
      c.beginPath(); const y = r() * s; c.moveTo(0, y);
      for (let x = 0; x <= s; x += 16) c.lineTo(x, y + Math.sin(x * 0.02 + i) * 4);
      c.stroke();
    }
    speckle(c, s, r, 9000, ['#a8854c', '#e0c48c', '#8f713c', '#d6b87e'], .5, 2.2, .5);
    speckle(c, s, r, 260, ['#7a5f33', '#5d4826'], 2, 7, .35);
    // small stones
    for (let i = 0; i < 90; i++) { c.fillStyle = `rgba(110,92,60,${.4 + r() * .4})`; c.beginPath(); c.ellipse(r() * s, r() * s, 2 + r() * 5, 1.5 + r() * 3, r() * 3, 0, 7); c.fill(); }
  }, (c, s, r) => {
    c.fillStyle = '#808080'; c.fillRect(0, 0, s, s);
    speckle(c, s, r, 7000, ['#666', '#999', '#555', '#aaa'], .5, 2.5, .5);
  }, 235);

  // ---- CONCRETE (walls/buildings) ----
  T.concrete = buildSet((c, s, r) => {
    c.fillStyle = '#9a938a'; c.fillRect(0, 0, s, s);
    speckle(c, s, r, 6000, ['#8a837b', '#aaa49b', '#7d766e', '#b5aea4'], .5, 3, .45);
    // stains
    for (let i = 0; i < 26; i++) {
      const x = r() * s, y = r() * s, rad = 20 + r() * 70;
      const g = c.createRadialGradient(x, y, 0, x, y, rad);
      g.addColorStop(0, `rgba(70,62,50,${.10 + r() * .14})`); g.addColorStop(1, 'rgba(70,62,50,0)');
      c.fillStyle = g; c.beginPath(); c.arc(x, y, rad, 0, 7); c.fill();
    }
    // cracks
    c.strokeStyle = 'rgba(50,46,40,.5)';
    for (let i = 0; i < 14; i++) {
      c.lineWidth = .7 + r(); c.beginPath();
      let x = r() * s, y = r() * s; c.moveTo(x, y);
      for (let k = 0; k < 8; k++) { x += (r() - .5) * 46; y += (r() - .5) * 46; c.lineTo(x, y); }
      c.stroke();
    }
    // formwork lines
    c.fillStyle = 'rgba(60,55,48,.18)';
    for (let y = 0; y < s; y += s / 4) c.fillRect(0, y, s, 2);
  }, (c, s, r) => {
    c.fillStyle = '#7f7f7f'; c.fillRect(0, 0, s, s);
    speckle(c, s, r, 5000, ['#5f5f5f', '#9f9f9f'], .5, 3, .5);
    c.strokeStyle = 'rgba(40,40,40,.8)';
    for (let i = 0; i < 12; i++) { c.lineWidth = 1; c.beginPath(); let x = r() * s, y = r() * s; c.moveTo(x, y); for (let k = 0; k < 6; k++) { x += (r() - .5) * 40; y += (r() - .5) * 40; c.lineTo(x, y); } c.stroke(); }
  }, 200);

  // ---- WOOD PLANK ----
  T.wood = buildSet((c, s, r) => {
    c.fillStyle = '#8a6238'; c.fillRect(0, 0, s, s);
    const rows = 5, rh = s / rows;
    for (let i = 0; i < rows; i++) {
      c.fillStyle = `rgba(${110 + r() * 40 | 0},${76 + r() * 26 | 0},${40 + r() * 16 | 0},.55)`;
      c.fillRect(0, i * rh, s, rh);
      c.fillStyle = 'rgba(40,24,10,.7)'; c.fillRect(0, i * rh, s, 3);
      // grain
      for (let k = 0; k < 26; k++) {
        c.strokeStyle = `rgba(60,38,16,${.12 + r() * .2})`; c.lineWidth = .8;
        c.beginPath(); const y = i * rh + r() * rh; c.moveTo(0, y);
        c.bezierCurveTo(s * .3, y + (r() - .5) * 8, s * .7, y + (r() - .5) * 8, s, y); c.stroke();
      }
      // knots
      for (let k = 0; k < 3; k++) { const x = r() * s, y = i * rh + r() * rh; c.strokeStyle = 'rgba(50,30,12,.5)'; for (let q = 1; q < 4; q++) { c.beginPath(); c.ellipse(x, y, q * 3, q * 1.8, 0, 0, 7); c.stroke(); } }
      // nails
      c.fillStyle = '#3a3a3a';
      [14, s - 14].forEach(x => { c.beginPath(); c.arc(x, i * rh + rh / 2, 3, 0, 7); c.fill(); });
    }
  }, (c, s, r) => {
    c.fillStyle = '#808080'; c.fillRect(0, 0, s, s);
    const rows = 5, rh = s / rows;
    for (let i = 0; i < rows; i++) { c.fillStyle = '#6a6a6a'; c.fillRect(0, i * rh, s, 3); speckle(c, s, r, 300, ['#666', '#999'], .5, 2, .3); }
  }, 190);

  // ---- RUSTY METAL ----
  T.metal = buildSet((c, s, r) => {
    c.fillStyle = '#5d6468'; c.fillRect(0, 0, s, s);
    speckle(c, s, r, 5000, ['#4d5458', '#6d7478', '#596065'], .5, 3, .4);
    for (let i = 0; i < 60; i++) {
      const x = r() * s, y = r() * s, rad = 6 + r() * 30;
      const g = c.createRadialGradient(x, y, 0, x, y, rad);
      g.addColorStop(0, `rgba(150,84,40,${.25 + r() * .3})`); g.addColorStop(1, 'rgba(150,84,40,0)');
      c.fillStyle = g; c.beginPath(); c.arc(x, y, rad, 0, 7); c.fill();
    }
    // scratches
    c.strokeStyle = 'rgba(200,205,210,.35)';
    for (let i = 0; i < 40; i++) { c.lineWidth = .6; c.beginPath(); const x = r() * s, y = r() * s; c.moveTo(x, y); c.lineTo(x + (r() - .5) * 90, y + (r() - .5) * 90); c.stroke(); }
    // panel lines + rivets
    c.strokeStyle = 'rgba(30,32,34,.6)'; c.lineWidth = 3; c.strokeRect(4, 4, s - 8, s - 8);
    c.fillStyle = '#33383c';
    for (let x = 24; x < s; x += 48) for (let y = 24; y < s; y += 48) { c.beginPath(); c.arc(x, y, 4, 0, 7); c.fill(); }
  }, (c, s, r) => {
    c.fillStyle = '#808080'; c.fillRect(0, 0, s, s);
    speckle(c, s, r, 4000, ['#606060', '#a0a0a0'], .5, 3, .5);
  }, 110);

  // ---- DARK CONCRETE / ASPHALT ----
  T.asphalt = buildSet((c, s, r) => {
    c.fillStyle = '#4c4a47'; c.fillRect(0, 0, s, s);
    speckle(c, s, r, 9000, ['#3e3c39', '#5c5a56', '#6a6863', '#33312e'], .5, 2.4, .5);
    for (let i = 0; i < 18; i++) { const x = r() * s, y = r() * s, rad = 14 + r() * 50; const g = c.createRadialGradient(x, y, 0, x, y, rad); g.addColorStop(0, `rgba(20,18,16,${.15 + r() * .2})`); g.addColorStop(1, 'rgba(20,18,16,0)'); c.fillStyle = g; c.beginPath(); c.arc(x, y, rad, 0, 7); c.fill(); }
  }, (c, s, r) => {
    c.fillStyle = '#808080'; c.fillRect(0, 0, s, s);
    speckle(c, s, r, 7000, ['#666', '#999'], .5, 2.5, .5);
  }, 225);

  // ---- CAMO FABRIC ----
  T.camo = buildSet((c, s, r) => {
    c.fillStyle = '#4a4d38'; c.fillRect(0, 0, s, s);
    const cols = ['#3d402c', '#5a5d42', '#6b6a4e', '#2f3324', '#7a7355'];
    for (let i = 0; i < 130; i++) {
      c.fillStyle = cols[(r() * cols.length) | 0]; c.globalAlpha = .5 + r() * .5;
      c.beginPath(); const x = r() * s, y = r() * s;
      c.ellipse(x, y, 12 + r() * 30, 8 + r() * 18, r() * 3, 0, 7); c.fill();
    }
    c.globalAlpha = 1;
    speckle(c, s, r, 2500, ['#00000022', '#ffffff14'], .5, 2, .4);
  }, (c, s, r) => { c.fillStyle = '#808080'; c.fillRect(0, 0, s, s); speckle(c, s, r, 2000, ['#6a6a6a', '#969696'], .5, 2, .4); }, 230);

  // ---- SANDSTONE BRICK ----
  T.brick = buildSet((c, s, r) => {
    c.fillStyle = '#b08d5a'; c.fillRect(0, 0, s, s);
    const bh = s / 8, bw = s / 4;
    for (let row = 0; row < 8; row++) {
      const off = (row % 2) * bw / 2;
      for (let col = -1; col < 5; col++) {
        const x = col * bw + off, y = row * bh;
        c.fillStyle = `rgb(${168 + r() * 26 | 0},${132 + r() * 20 | 0},${84 + r() * 16 | 0})`;
        c.fillRect(x + 2, y + 2, bw - 4, bh - 4);
        c.fillStyle = 'rgba(255,240,200,.10)'; c.fillRect(x + 2, y + 2, bw - 4, 3);
        c.fillStyle = 'rgba(60,40,16,.18)'; c.fillRect(x + 2, y + bh - 6, bw - 4, 4);
      }
    }
    speckle(c, s, r, 4000, ['#96763f', '#c8a96e'], .5, 2.5, .4);
  }, (c, s, r) => {
    c.fillStyle = '#808080'; c.fillRect(0, 0, s, s);
    const bh = s / 8, bw = s / 4;
    c.fillStyle = '#555';
    for (let row = 0; row < 8; row++) { const off = (row % 2) * bw / 2; for (let col = -1; col < 5; col++) c.fillRect(col * bw + off, row * bh, bw, 3); }
    speckle(c, s, r, 3000, ['#666', '#9a9a9a'], .5, 2.5, .4);
  }, 215);

  // ---- WHITE PAINT (building trim) ----
  T.paint = buildSet((c, s, r) => {
    c.fillStyle = '#cfc8ba'; c.fillRect(0, 0, s, s);
    speckle(c, s, r, 3500, ['#bdb4a2', '#e2dccf', '#a89e8a'], .5, 3, .35);
    for (let i = 0; i < 20; i++) { const x = r() * s, y = r() * s, rad = 12 + r() * 40; const g = c.createRadialGradient(x, y, 0, x, y, rad); g.addColorStop(0, `rgba(120,100,70,${.08 + r() * .12})`); g.addColorStop(1, 'rgba(120,100,70,0)'); c.fillStyle = g; c.beginPath(); c.arc(x, y, rad, 0, 7); c.fill(); }
  }, (c, s, r) => { c.fillStyle = '#808080'; c.fillRect(0, 0, s, s); speckle(c, s, r, 3000, ['#6a6a6a', '#969696'], .5, 3, .4); }, 180);

  // ---- ROCK ----
  T.rock = buildSet((c, s, r) => {
    c.fillStyle = '#8d7a5f'; c.fillRect(0, 0, s, s);
    speckle(c, s, r, 7000, ['#75624a', '#a08a68', '#6a563e', '#b09a76'], .5, 3.5, .5);
    for (let i = 0; i < 30; i++) { c.strokeStyle = `rgba(50,38,22,${.15 + r() * .2})`; c.lineWidth = 1 + r() * 2; c.beginPath(); const x = r() * s, y = r() * s; c.moveTo(x, y); c.lineTo(x + (r() - .5) * 80, y + (r() - .5) * 80); c.stroke(); }
  }, (c, s, r) => { c.fillStyle = '#808080'; c.fillRect(0, 0, s, s); speckle(c, s, r, 5000, ['#5f5f5f', '#a5a5a5'], .5, 4, .5); }, 240);

  // helper to clone with repeat
  T.clone = (set, rx, ry) => {
    const o = {};
    for (const k of ['map', 'normalMap', 'roughnessMap']) {
      o[k] = set[k].clone(); o[k].repeat.set(rx, ry); o[k].needsUpdate = true;
    }
    return o;
  };
  return T;
}

export function pbr(set, opts = {}) {
  return new THREE.MeshStandardMaterial({
    map: set.map, normalMap: set.normalMap, roughnessMap: set.roughnessMap,
    roughness: opts.roughness ?? 1.0, metalness: opts.metalness ?? 0.0,
    color: opts.color ?? 0xffffff, envMapIntensity: opts.envMapIntensity ?? 0.6,
    emissive: opts.emissive ?? 0x000000, emissiveIntensity: opts.emissiveIntensity ?? 1,
  });
}
