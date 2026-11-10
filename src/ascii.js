// ASCII render motoru — sahneyi karakter atlasına döker (CRT phosphor görünümü)
import * as THREE from 'three';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';

// Parlaklık sırasına göre 32 glif (uzaya yakın → yoğun @)
const RAMP = [
  ' ', '.', ',', ':', '-', '_', '~', '=',
  '+', '*', 'x', 'c', 's', 'r', 'n', 'u',
  'o', 'a', 'e', 'h', 'm', 'w', '%', '0',
  'O', 'Q', '#', '8', 'B', 'M', 'W', '@',
];

const CELL = 16;           // atlas glyph hücresi (px)
const COLS = 8;            // atlas sütun sayısı
const ATLAS_SIZE = COLS * CELL; // 128

// Canvas'a glifleri çizer → texture döndürür
export function makeGlyphAtlas() {
  const canvas = document.createElement('canvas');
  canvas.width = ATLAS_SIZE;
  canvas.height = ATLAS_SIZE;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#000000';
  ctx.fillRect(0, 0, ATLAS_SIZE, ATLAS_SIZE);
  ctx.fillStyle = '#ffffff';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.font = '700 16px "Share Tech Mono", "Courier New", monospace';
  ctx.shadowColor = 'rgba(255,255,255,0.9)';
  ctx.shadowBlur = 2.5;
  for (let i = 0; i < RAMP.length; i++) {
    const gx = (i % COLS) * CELL + CELL / 2;
    const gy = Math.floor(i / COLS) * CELL + CELL / 2 + 1;
    ctx.fillText(RAMP[i], gx, gy);
  }
  const tex = new THREE.CanvasTexture(canvas);
  tex.minFilter = THREE.LinearFilter;
  tex.magFilter = THREE.LinearFilter;
  tex.generateMipmaps = false;
  tex.flipY = false;
  tex.needsUpdate = true;
  return tex;
}

const AsciiShader = {
  uniforms: {
    tDiffuse: { value: null },
    uAtlas: { value: null },
    uCells: { value: new THREE.Vector2(160, 68) }, // ekran genelindeki karakter sayısı
    uGlyphCount: { value: RAMP.length },
    uTint: { value: new THREE.Color(1.0, 0.72, 0.22) }, // amber phosphor
    uTime: { value: 0 },
  },
  vertexShader: /* glsl */`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: /* glsl */`
    uniform sampler2D tDiffuse;
    uniform sampler2D uAtlas;
    uniform vec2 uCells;
    uniform float uGlyphCount;
    uniform vec3 uTint;
    uniform float uTime;
    varying vec2 vUv;

    float hash(vec2 p) {
      return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
    }
    vec3 sceneAt(vec2 uv) { return texture2D(tDiffuse, uv).rgb; }
    float lumOf(vec3 c) { return dot(c, vec3(0.2126, 0.7152, 0.0722)); }

    void main() {
      vec2 cell = floor(vUv * uCells);
      vec2 cellUv = fract(vUv * uCells);
      vec2 center = (cell + 0.5) / uCells;
      vec2 hc = 0.5 / uCells;

      // 2x2 örnek ortalaması — kararlı parlaklık
      vec3 col = (sceneAt(center + vec2(-hc.x, -hc.y))
                + sceneAt(center + vec2( hc.x, -hc.y))
                + sceneAt(center + vec2(-hc.x,  hc.y))
                + sceneAt(center + vec2( hc.x,  hc.y))) * 0.25;
      float lum = lumOf(col);

      // çift eksenli kenar tespiti — dikey + yatay detay
      float lx = lumOf(sceneAt(center + vec2( hc.x * 2.0, 0.0))) - lumOf(sceneAt(center - vec2( hc.x * 2.0, 0.0)));
      float ly = lumOf(sceneAt(center + vec2(0.0,  hc.y * 2.0))) - lumOf(sceneAt(center - vec2(0.0,  hc.y * 2.0)));
      float edge = clamp((abs(lx) + abs(ly)) * 2.1, 0.0, 1.0);

      // gamma + kaldırma: karanlıklar okunur, parlaklar dolu
      float v = clamp(lum * 1.12 + edge * 0.55, 0.0, 1.0);
      v = pow(v, 1.14);
      v = smoothstep(0.015, 0.96, v);
      v = v * 0.94 + 0.045;

      float idx = floor(v * (uGlyphCount - 1.0) + 0.5);
      float glyphCol = mod(idx, 8.0);
      float glyphRow = floor(idx / 8.0);
      vec2 aUv = (vec2(glyphCol, glyphRow) * 16.0
                + vec2(cellUv.x * 14.0 + 1.0, (1.0 - cellUv.y) * 14.0 + 1.0)) / 128.0;
      float g = texture2D(uAtlas, aUv).r;

      // phosphor tonu — sahnenin renginden biraz taşıyarak, artık daha parlak
      vec3 tint = uTint * (0.78 + 0.42 * col);
      float flick = 0.95 + 0.05 * hash(cell + floor(uTime * 11.0));
      vec3 outCol = tint * g * (0.60 + 0.62 * v) * flick;
      outCol *= 0.93 + 0.07 * sin(gl_FragCoord.y * 3.14159);

      gl_FragColor = vec4(outCol, 1.0);
    }
  `,
};

export function makeAsciiPass(atlasTex) {
  return new ShaderPass({
    ...AsciiShader,
    uniforms: {
      tDiffuse: { value: null },
      uAtlas: { value: atlasTex },
      uCells: { value: new THREE.Vector2(160, 68) },
      uGlyphCount: { value: RAMP.length },
      uTint: { value: new THREE.Color(1.0, 0.72, 0.22) },
      uTime: { value: 0 },
    },
  });
}

// Görüntü kalitesine göre karakter boyutu (px)
export function asciiCellForQuality(quality) {
  if (quality === 'low') return [14, 18];
  if (quality === 'med') return [11, 15];
  return [9, 13]; // high
}

export function updateAsciiCells(pass, width, height, quality) {
  if (!pass) return;
  const [cw, ch] = asciiCellForQuality(quality);
  pass.uniforms.uCells.value.set(Math.max(40, Math.floor(width / cw)), Math.max(22, Math.floor(height / ch)));
}
