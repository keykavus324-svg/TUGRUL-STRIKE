// TUĞRUL STRIKE — Saltline Operasyonu
// Small scope, AAA presentation: PBR + shadows + bloom + film grain, 6 AI hostiles.
import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { makeTextures } from './textures.js';
import { World } from './world.js';
import { Player } from './player.js';
import { Weapon } from './weapon.js';
import { EnemyManager } from './enemies.js';
import { Effects } from './effects.js';
import { GameAudio } from './audio.js';
import { UI } from './ui.js';

const canvas = document.getElementById('game');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
renderer.setSize(innerWidth, innerHeight);
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.12;
renderer.outputColorSpace = THREE.SRGBColorSpace;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(90, innerWidth / innerHeight, 0.05, 600);
camera.position.set(0, 6, 40);

const ui = new UI();
const audio = new GameAudio();
let world, player, weapon, enemies, fx;
let state = 'loading';
let timeLeft = 180, elapsed = 0;
let stats = { shots: 0, hits: 0, kills: 0, headshots: 0, accuracy: 0, time: '0:00' };
let justShot = false;
let menuOrbit = 0;
let settings = { sens: 1, fov: 90, quality: 'high', mute: false, shake: true };

// ---------- POST ----------
let composer, bloomPass;
function setupPost() {
  composer = new EffectComposer(renderer);
  composer.addPass(new RenderPass(scene, camera));
  bloomPass = new UnrealBloomPass(new THREE.Vector2(innerWidth, innerHeight), 0.32, 0.7, 0.82);
  composer.addPass(bloomPass);
  const grade = new ShaderPass({
    uniforms: { tDiffuse: { value: null }, uTime: { value: 0 }, uVig: { value: 0.42 } },
    vertexShader: `varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }`,
    fragmentShader: `
      uniform sampler2D tDiffuse; uniform float uTime; uniform float uVig; varying vec2 vUv;
      float hash(vec2 p){ return fract(sin(dot(p, vec2(12.9898,78.233)))*43758.5453); }
      void main(){
        vec3 col = texture2D(tDiffuse, vUv).rgb;
        // subtle warm grade
        col = mix(col, col * vec3(1.06, 1.0, 0.92), 0.55);
        // vignette
        float d = distance(vUv, vec2(0.5));
        col *= smoothstep(0.95, 0.35, d * (1.0 + uVig));
        // film grain
        col += (hash(vUv * vec2(1920.0,1080.0) + fract(uTime)) - 0.5) * 0.045;
        // slight chromatic aberration at edges
        vec2 off = (vUv - 0.5) * 0.0035;
        col.r = texture2D(tDiffuse, vUv + off).r * 0.0 + col.r;
        gl_FragColor = vec4(col, 1.0);
      }`,
  });
  grade.name = 'grade';
  composer.addPass(grade);
  composer.addPass(new OutputPass());
  composer.userData.grade = grade;
}
setupPost();

function applyQuality() {
  const q = settings.quality;
  if (q === 'high') { renderer.setPixelRatio(Math.min(devicePixelRatio, 2)); bloomPass.enabled = true; bloomPass.strength = 0.32; }
  else if (q === 'med') { renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5)); bloomPass.enabled = true; bloomPass.strength = 0.22; }
  else { renderer.setPixelRatio(1); bloomPass.enabled = false; }
  onResize();
}

// ---------- BOOT ----------
async function boot() {
  const bar = document.getElementById('loadBar');
  const txt = document.getElementById('loadText');
  const step = async (p, t) => { bar.style.width = p + '%'; txt.textContent = t; await new Promise(r => setTimeout(r, 30)); };
  try {
    await step(15, 'Dokular üretiliyor…');
    const T = makeTextures();
    await step(45, 'Harita inşa ediliyor…');
    world = new World(scene, T, renderer);
    fx = new Effects(scene);
    player = new Player(camera, world, audio);
    weapon = new Weapon(camera, scene, audio, fx);
    enemies = new EnemyManager(scene, T, world, audio, fx);
    await step(75, 'Düşmanlar yerleştiriliyor…');
    await step(100, 'Hazır');
  } catch (err) {
    console.error(err);
    txt.textContent = 'Hata: ' + (err && err.message ? err.message : err) + ' — sayfayı yenile';
    txt.style.color = '#ff5a3c';
    return;
  }
  document.getElementById('loading').classList.add('hidden');
  state = 'menu';
  ui.show('menu');
  refreshMenuStats();
  requestAnimationFrame(loop);
}
boot();

function refreshMenuStats() {
  const best = localStorage.getItem('ts_best');
  document.getElementById('statBest').textContent = best ? best : '—';
  document.getElementById('statWins').textContent = localStorage.getItem('ts_wins') || '0';
  document.getElementById('statKills').textContent = localStorage.getItem('ts_kills') || '0';
}

// ---------- GAME FLOW ----------
function startGame() {
  audio.init(); audio.resume();
  player.reset(); weapon.reset(); enemies.reset();
  timeLeft = 180; elapsed = 0;
  stats = { shots: 0, hits: 0, kills: 0, headshots: 0, accuracy: 0, time: '0:00' };
  justShot = false;
  ui.hide('menu'); ui.hide('end'); ui.hide('pause');
  ui.setHUDVisible(true);
  state = 'playing';
  canvas.requestPointerLock();
  ui.centerMsg('OPERASYON BAŞLADI — 6 DÜŞMANI BUL VE ETKİSİZ HALE GETİR', 3);
  ui.addKillfeed('◉ Görev başladı: Saltline temizlenecek');
}

function endGame(win) {
  state = 'ended';
  document.exitPointerLock?.();
  ui.setHUDVisible(false);
  stats.accuracy = stats.shots ? Math.round(stats.hits / stats.shots * 100) : 0;
  stats.time = `${Math.floor(elapsed / 60)}:${String(Math.floor(elapsed % 60)).padStart(2, '0')}`;
  if (win) {
    audio.win();
    const prev = localStorage.getItem('ts_best');
    if (!prev || elapsed < parseFloat(prev)) localStorage.setItem('ts_best', stats.time);
    localStorage.setItem('ts_wins', (parseInt(localStorage.getItem('ts_wins') || '0') + 1));
  } else audio.lose();
  localStorage.setItem('ts_kills', (parseInt(localStorage.getItem('ts_kills') || '0') + stats.kills));
  ui.showEnd(win, stats);
}

// ---------- INPUT ----------
addEventListener('keydown', (e) => {
  if (player) player.keys[e.code] = true;
  if (state === 'playing') {
    if (e.code === 'KeyR') weapon.startReload();
    if (e.code === 'Digit1') weapon.switchTo('rifle');
    if (e.code === 'Digit2') weapon.switchTo('pistol');
  }
  if (e.code === 'Escape' && state === 'playing') pauseGame();
});
addEventListener('keyup', (e) => { if (player) player.keys[e.code] = false; });
addEventListener('mousemove', (e) => {
  if (state !== 'playing' || document.pointerLockElement !== canvas) return;
  player.look({ x: e.movementX, y: e.movementY }, 0);
});
let mouseDown = false, adsHeld = false;
addEventListener('mousedown', (e) => {
  if (state !== 'playing') return;
  if (e.button === 0) mouseDown = true;
  if (e.button === 2) adsHeld = true;
});
addEventListener('mouseup', (e) => {
  if (e.button === 0) mouseDown = false;
  if (e.button === 2) adsHeld = false;
});
addEventListener('contextmenu', (e) => e.preventDefault());
document.addEventListener('pointerlockchange', () => {
  if (document.pointerLockElement !== canvas && state === 'playing') pauseGame();
});
function pauseGame() {
  if (state !== 'playing') return;
  state = 'paused';
  ui.show('pause');
  document.exitPointerLock?.();
}
function resumeGame() {
  ui.hide('pause');
  state = 'playing';
  safeLock();
}

// menu buttons
const click = (id, fn) => document.getElementById(id).addEventListener('click', () => { audio.init(); audio.uiClick(); fn(); });
click('btnPlay', startGame);
click('btnHow', () => { ui.hide('menu'); ui.show('howto'); });
click('btnHowBack', () => { ui.hide('howto'); ui.show('menu'); });
click('btnSettings', () => { ui.hide('menu'); ui.show('settings'); });
click('btnSetBack', () => { ui.hide('settings'); ui.show('menu'); });
click('btnResume', resumeGame);
click('btnRestart', startGame);
click('btnQuit', () => { ui.hide('pause'); ui.setHUDVisible(false); state = 'menu'; ui.show('menu'); refreshMenuStats(); });
click('btnAgain', startGame);
click('btnMenu2', () => { ui.hide('end'); state = 'menu'; ui.show('menu'); refreshMenuStats(); });

document.getElementById('setSens').addEventListener('input', (e) => {
  settings.sens = parseFloat(e.target.value);
  document.getElementById('sensVal').textContent = settings.sens.toFixed(1);
  if (player) player.sens = settings.sens;
});
document.getElementById('setFov').addEventListener('input', (e) => {
  settings.fov = parseInt(e.target.value);
  document.getElementById('fovVal').textContent = settings.fov;
  if (player) player.baseFov = settings.fov;
});
document.getElementById('setQuality').addEventListener('change', (e) => { settings.quality = e.target.value; applyQuality(); });
document.getElementById('setMute').addEventListener('change', (e) => { settings.mute = e.target.checked; audio.setMuted(settings.mute); });
document.getElementById('setShake').addEventListener('change', (e) => { settings.shake = e.target.checked; if (player) player.shakeEnabled = settings.shake; });

// touch
const isTouch = matchMedia('(pointer: coarse)').matches;
if (isTouch) {
  document.getElementById('touchUI').classList.remove('hidden');
  const joy = document.getElementById('joy'), knob = document.getElementById('joyKnob');
  let joyId = null, lookId = null, lx = 0, ly = 0;
  joy.addEventListener('touchstart', (e) => { joyId = e.changedTouches[0].identifier; }, { passive: true });
  addEventListener('touchmove', (e) => {
    for (const t of e.changedTouches) {
      if (t.identifier === joyId) {
        const r = joy.getBoundingClientRect();
        const dx = (t.clientX - (r.left + r.width / 2)) / (r.width / 2);
        const dy = (t.clientY - (r.top + r.height / 2)) / (r.height / 2);
        knob.style.transform = `translate(calc(-50% + ${dx * 34}px), calc(-50% + ${dy * 34}px))`;
        if (player) {
          player.keys['KeyW'] = dy < -0.25; player.keys['KeyS'] = dy > 0.25;
          player.keys['KeyA'] = dx < -0.25; player.keys['KeyD'] = dx > 0.25;
        }
      } else if (t.identifier === lookId) {
        if (player) player.look({ x: (t.clientX - lx) * 2.2, y: (t.clientY - ly) * 2.2 }, 0);
        lx = t.clientX; ly = t.clientY;
      }
    }
  }, { passive: true });
  addEventListener('touchstart', (e) => {
    for (const t of e.changedTouches) {
      if (t.clientX > innerWidth * 0.4 && lookId === null && state === 'playing') { lookId = t.identifier; lx = t.clientX; ly = t.clientY; }
    }
  }, { passive: true });
  addEventListener('touchend', (e) => {
    for (const t of e.changedTouches) {
      if (t.identifier === joyId) { joyId = null; knob.style.transform = 'translate(-50%,-50%)'; if (player) ['KeyW','KeyS','KeyA','KeyD'].forEach(k => player.keys[k] = false); }
      if (t.identifier === lookId) lookId = null;
    }
  });
  document.getElementById('tFire').addEventListener('touchstart', (e) => { e.preventDefault(); mouseDown = true; }, { passive: false });
  document.getElementById('tFire').addEventListener('touchend', () => mouseDown = false);
  document.getElementById('tJump').addEventListener('touchstart', (e) => { e.preventDefault(); if (player) player.keys['Space'] = true; setTimeout(() => player.keys['Space'] = false, 120); }, { passive: false });
  document.getElementById('tReload').addEventListener('touchstart', (e) => { e.preventDefault(); weapon.startReload(); }, { passive: false });
}

// ---------- SHOOTING ----------
const raycaster = new THREE.Raycaster();
function wallHitPoint(origin, dir, maxDist) {
  // step along ray against colliders
  const step = 0.4;
  const p = new THREE.Vector3();
  for (let d = step; d < maxDist; d += step) {
    p.copy(origin).addScaledVector(dir, d);
    if (p.y < 0) return { point: p.clone(), dist: d };
    for (const c of world.colliders) {
      if (p.x > c.min.x && p.x < c.max.x && p.y > c.min.y && p.y < c.max.y && p.z > c.min.z && p.z < c.max.z) {
        return { point: p.clone(), dist: d };
      }
    }
  }
  return null;
}
function raySphere(origin, dir, center, r) {
  const oc = new THREE.Vector3().subVectors(center, origin);
  const tca = oc.dot(dir);
  if (tca < 0) return null;
  const d2 = oc.lengthSq() - tca * tca;
  if (d2 > r * r) return null;
  const thc = Math.sqrt(r * r - d2);
  const t = tca - thc;
  return t > 0 ? t : null;
}

function playerShoot(now) {
  const shot = weapon.tryShoot(now, weapon.ads);
  if (!shot) return;
  justShot = true;
  stats.shots++;
  const origin = camera.position.clone();
  const dir = new THREE.Vector3(0, 0, -1).applyQuaternion(camera.quaternion);
  // spread
  dir.x += (Math.random() - .5) * shot.spread * 2;
  dir.y += (Math.random() - .5) * shot.spread * 2;
  dir.z += (Math.random() - .5) * shot.spread * 2;
  dir.normalize();
  player.fovKick = Math.min(2.2, player.fovKick + 0.5);
  if (player.shakeEnabled) player.shake = Math.min(1, player.shake + 0.12);
  player.pitch += 0.0035 + Math.random() * 0.002; // recoil climb

  const maxDist = 120;
  const wall = wallHitPoint(origin, dir, maxDist);
  const wallDist = wall ? wall.dist : maxDist;

  // enemy hits
  let best = null;
  for (const e of enemies.enemies) {
    if (!e.alive) continue;
    const th = raySphere(origin, dir, e.headPos(), 0.19);
    if (th && th < wallDist && (!best || th < best.t)) best = { e, t: th, head: true };
    const tc = raySphere(origin, dir, e.chestPos(), 0.42);
    if (tc && tc < wallDist && (!best || tc < best.t)) best = { e, t: tc, head: false };
    const tp = raySphere(origin, dir, new THREE.Vector3(e.pos.x, 0.7, e.pos.z), 0.36);
    if (tp && tp < wallDist && (!best || tp < best.t)) best = { e, t: tp, head: false };
  }

  const muzzlePos = weapon.muzzleWorld.clone();
  if (best) {
    const hitPoint = origin.clone().addScaledVector(dir, best.t);
    fx.tracer(muzzlePos, hitPoint);
    let dmg = shot.dmg * (best.head ? 4 : 1);
    if (best.t > 35) dmg *= 0.75;
    const wasAlive = best.e.alive;
    best.e.takeDamage(dmg, best.head, hitPoint);
    stats.hits++;
    if (best.head) stats.headshots++;
    ui.hitmarker(!best.e.alive && wasAlive);
    if (best.head) audio.headshot(); else audio.hit();
    if (!best.e.alive && wasAlive) {
      stats.kills++;
      ui.addKillfeed(`✕ Düşman etkisiz hale getirildi (${best.head ? 'KAFA VURUŞU' : 'VÜCUT'}) — ${enemies.aliveCount} kaldı`);
      ui.killBanner(best.head ? 'KAFA VURUŞU!' : 'ETKİSİZ HALE GETİRİLDİ');
      if (enemies.aliveCount <= 0) setTimeout(() => { if (state === 'playing') endGame(true); }, 900);
    }
  } else if (wall) {
    fx.tracer(muzzlePos, wall.point);
    fx.dustPuff(wall.point, 7, 0.6);
    fx.sparkBurst(wall.point, 5);
    audio.impact();
  } else {
    fx.tracer(muzzlePos, origin.clone().addScaledVector(dir, maxDist));
  }
}

function handleEnemyShots(shots) {
  for (const s of shots) {
    if (s.blocked) continue;
    // closest approach of enemy ray to player capsule
    const eye = player.pos.clone();
    const feet = eye.clone(); feet.y -= 1.55;
    // segment feet->eye vs ray from->dir
    const ray = new THREE.Ray(s.from, s.dir);
    const seg = new THREE.Line3(feet, eye);
    const closest = new THREE.Vector3();
    ray.closestPointToPoint(seg.getPoint(0.5, new THREE.Vector3()), closest);
    const distToPlayer = closest.distanceTo(seg.getPoint(0.5, new THREE.Vector3()));
    const playerSpeed = player.speed2D;
    const hitChance = Math.max(0.08, 0.62 - s.dist * 0.008 - playerSpeed * 0.05);
    if (distToPlayer < 0.55 && Math.random() < hitChance + 0.25) {
      const died = player.takeDamage(9 + Math.random() * 7, s.from);
      ui.damageFlash();
      fx.bloodPuff(eye.clone().add(new THREE.Vector3((Math.random() - .5) * .3, -0.3, (Math.random() - .5) * .3)));
      if (died) { ui.centerMsg('ÖLDÜN — GÖREV BAŞARISIZ', 2); setTimeout(() => { if (state === 'playing') endGame(false); }, 1100); }
    } else {
      // near miss: impact near player
      const miss = eye.clone().add(new THREE.Vector3((Math.random() - .5) * 2.4, (Math.random() - .5) * 1.2, (Math.random() - .5) * 2.4));
      miss.y = Math.max(0.1, miss.y);
      fx.dustPuff(miss, 5, 0.5);
      audio.impact();
    }
  }
}

// ---------- LOOP ----------
const clock = new THREE.Clock();
let semiAutoLock = false;
function loop() {
  requestAnimationFrame(loop);
  const dt = Math.min(0.05, clock.getDelta());
  const now = performance.now() / 1000;
  if (composer.userData.grade) composer.userData.grade.uniforms.uTime.value = now;

  if (state === 'menu' || state === 'ended') {
    // cinematic orbit
    menuOrbit += dt * 0.07;
    const r = 30;
    camera.position.set(Math.cos(menuOrbit) * r, 9 + Math.sin(menuOrbit * 0.7) * 2, Math.sin(menuOrbit) * r);
    camera.lookAt(0, 1.5, 0);
    camera.fov = 60; camera.updateProjectionMatrix();
    if (world) { fx.update(dt); }
    composer.render();
    return;
  }
  if (state === 'paused') { composer.render(); return; }
  if (state !== 'playing') { composer.render(); return; }

  elapsed += dt;
  timeLeft -= dt;
  if (timeLeft <= 0) { timeLeft = 0; endGame(false); }

  // shooting input
  const d = weapon.data;
  if (mouseDown) {
    if (d.auto || !semiAutoLock) { playerShoot(now); semiAutoLock = true; }
  } else semiAutoLock = false;

  const wState = weapon.update(dt, player.speed2D, player.onGround, player.mouseDX, player.mouseDY, adsHeld && !player.sprint, now);
  player.update(dt, wState.ads);
  // crosshair ADS style
  document.getElementById('crosshair').classList.toggle('ads', wState.ads > 0.6);

  const shots = enemies.update(dt, player.pos, player.pos, justShot, player.speed2D);
  justShot = false;
  handleEnemyShots(shots);

  fx.update(dt);
  ui.update(dt);
  ui.updateHUD(player, weapon, enemies.aliveCount, timeLeft, player.yaw);
  ui.drawRadar(player, enemies.enemies);
  composer.render();
}

addEventListener('resize', onResize);
function onResize() {
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
  composer.setSize(innerWidth, innerHeight);
}
