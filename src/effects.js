// Particles, tracers, muzzle flash, shells, dust
import * as THREE from 'three';

const MAXP = 3000;

export class Effects {
  constructor(scene) {
    this.scene = scene;
    this.pos = new Float32Array(MAXP * 3);
    this.vel = new Float32Array(MAXP * 3);
    this.life = new Float32Array(MAXP);
    this.maxLife = new Float32Array(MAXP);
    this.size = new Float32Array(MAXP);
    this.col = new Float32Array(MAXP * 3);
    this.grav = new Float32Array(MAXP);
    this.drag = new Float32Array(MAXP);
    this.head = 0;
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(this.pos, 3));
    geo.setAttribute('aColor', new THREE.BufferAttribute(this.col, 3));
    geo.setAttribute('aSize', new THREE.BufferAttribute(this.size, 1));
    const mat = new THREE.ShaderMaterial({
      transparent: true, depthWrite: false, blending: THREE.NormalBlending,
      uniforms: { uTex: { value: this.makeSprite() } },
      vertexShader: `
        attribute float aSize; attribute vec3 aColor; varying vec3 vC; varying float vA;
        uniform float uLife; 
        void main(){ vC=aColor; vec4 mv=modelViewMatrix*vec4(position,1.0);
          gl_PointSize = aSize * (140.0 / -mv.z); gl_Position=projectionMatrix*mv; }`,
      fragmentShader: `
        uniform sampler2D uTex; varying vec3 vC;
        void main(){ vec4 t=texture2D(uTex, gl_PointCoord);
          gl_FragColor=vec4(vC, t.a); if(gl_FragColor.a<0.02) discard; }`,
    });
    // per-particle alpha via life stored in size? use color darkening instead; simpler: use additive for sparks via second system
    this.points = new THREE.Points(geo, mat);
    this.points.frustumCulled = false;
    this.points.renderOrder = 10;
    scene.add(this.points);
    // init all dead far away
    for (let i = 0; i < MAXP; i++) { this.pos[i * 3 + 1] = -100; this.life[i] = 0; }
    this.geo = geo;

    // additive sparks system
    this.sPos = new Float32Array(600 * 3); this.sVel = new Float32Array(600 * 3);
    this.sLife = new Float32Array(600); this.sCol = new Float32Array(600 * 3); this.sSize = new Float32Array(600);
    this.sHead = 0;
    const sgeo = new THREE.BufferGeometry();
    sgeo.setAttribute('position', new THREE.BufferAttribute(this.sPos, 3));
    sgeo.setAttribute('aColor', new THREE.BufferAttribute(this.sCol, 3));
    sgeo.setAttribute('aSize', new THREE.BufferAttribute(this.sSize, 1));
    const smat = new THREE.ShaderMaterial({
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
      uniforms: { uTex: { value: this.makeSprite() } },
      vertexShader: `attribute float aSize; attribute vec3 aColor; varying vec3 vC;
        void main(){ vC=aColor; vec4 mv=modelViewMatrix*vec4(position,1.0);
          gl_PointSize=aSize*(140.0/-mv.z); gl_Position=projectionMatrix*mv; }`,
      fragmentShader: `uniform sampler2D uTex; varying vec3 vC;
        void main(){ vec4 t=texture2D(uTex, gl_PointCoord); gl_FragColor=vec4(vC*t.rgb, t.a); }`,
    });
    this.sparks = new THREE.Points(sgeo, smat);
    this.sparks.frustumCulled = false; this.sparks.renderOrder = 11;
    scene.add(this.sparks);
    this.sgeo = sgeo;
    for (let i = 0; i < 600; i++) { this.sPos[i * 3 + 1] = -100; }

    // tracers pool
    this.tracers = [];
    const tgeo = new THREE.CylinderGeometry(0.012, 0.012, 1, 5);
    tgeo.translate(0, 0.5, 0); tgeo.rotateX(Math.PI / 2);
    for (let i = 0; i < 24; i++) {
      const m = new THREE.Mesh(tgeo, new THREE.MeshBasicMaterial({ color: 0xffd27a, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false }));
      m.visible = false; scene.add(m);
      this.tracers.push({ mesh: m, life: 0 });
    }
    // shells pool
    this.shells = [];
    const shgeo = new THREE.CylinderGeometry(0.012, 0.012, 0.045, 6);
    const shmat = new THREE.MeshStandardMaterial({ color: 0xd8a830, metalness: 0.9, roughness: 0.3 });
    for (let i = 0; i < 30; i++) {
      const m = new THREE.Mesh(shgeo, shmat); m.visible = false; scene.add(m);
      this.shells.push({ mesh: m, vel: new THREE.Vector3(), angVel: new THREE.Vector3(), life: 0 });
    }
    // muzzle flash light
    this.flashLight = new THREE.PointLight(0xffb060, 0, 18, 1.6);
    scene.add(this.flashLight);
    // muzzle sprite
    this.flashSprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: this.makeFlashTex(), transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false }));
    this.flashSprite.scale.set(0.6, 0.6, 1);
    scene.add(this.flashSprite);
    this.flashLife = 0;
    // ambient dust
    this.makeAmbientDust(scene);
  }

  makeSprite() {
    const c = document.createElement('canvas'); c.width = c.height = 64;
    const x = c.getContext('2d');
    const g = x.createRadialGradient(32, 32, 0, 32, 32, 32);
    g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(0.4, 'rgba(255,255,255,.6)'); g.addColorStop(1, 'rgba(255,255,255,0)');
    x.fillStyle = g; x.fillRect(0, 0, 64, 64);
    return new THREE.CanvasTexture(c);
  }
  makeFlashTex() {
    const c = document.createElement('canvas'); c.width = c.height = 128;
    const x = c.getContext('2d');
    const g = x.createRadialGradient(64, 64, 0, 64, 64, 64);
    g.addColorStop(0, 'rgba(255,240,180,1)'); g.addColorStop(0.25, 'rgba(255,180,60,.9)');
    g.addColorStop(0.6, 'rgba(255,120,20,.35)'); g.addColorStop(1, 'rgba(255,80,0,0)');
    x.fillStyle = g; x.fillRect(0, 0, 128, 128);
    // spikes
    x.globalCompositeOperation = 'lighter';
    for (let i = 0; i < 4; i++) {
      x.save(); x.translate(64, 64); x.rotate(i * Math.PI / 2 + 0.4);
      const lg = x.createLinearGradient(0, 0, 64, 0);
      lg.addColorStop(0, 'rgba(255,220,140,.8)'); lg.addColorStop(1, 'rgba(255,120,0,0)');
      x.fillStyle = lg; x.beginPath(); x.moveTo(0, -5); x.lineTo(64, 0); x.lineTo(0, 5); x.fill(); x.restore();
    }
    return new THREE.CanvasTexture(c);
  }
  makeAmbientDust(scene) {
    const N = 700;
    const p = new Float32Array(N * 3);
    for (let i = 0; i < N; i++) {
      p[i * 3] = (Math.random() - .5) * 90;
      p[i * 3 + 1] = Math.random() * 9 + 0.3;
      p[i * 3 + 2] = (Math.random() - .5) * 90;
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(p, 3));
    const m = new THREE.PointsMaterial({ color: 0xe8d0a0, size: 0.045, transparent: true, opacity: 0.55, depthWrite: false, sizeAttenuation: true });
    this.dust = new THREE.Points(g, m);
    this.dust.frustumCulled = false;
    scene.add(this.dust);
  }

  spawn(x, y, z, vx, vy, vz, life, size, r, g, b, grav = -2, drag = 1) {
    const i = this.head; this.head = (this.head + 1) % MAXP;
    this.pos[i * 3] = x; this.pos[i * 3 + 1] = y; this.pos[i * 3 + 2] = z;
    this.vel[i * 3] = vx; this.vel[i * 3 + 1] = vy; this.vel[i * 3 + 2] = vz;
    this.life[i] = life; this.maxLife[i] = life; this.size[i] = size;
    this.col[i * 3] = r; this.col[i * 3 + 1] = g; this.col[i * 3 + 2] = b;
    this.grav[i] = grav; this.drag[i] = drag;
  }
  burst(pos, n, speed, life, size, color, grav = -3, up = 1) {
    for (let k = 0; k < n; k++) {
      const th = Math.random() * Math.PI * 2, ph = Math.acos(2 * Math.random() - 1);
      const sp = speed * (0.3 + Math.random() * 0.7);
      this.spawn(pos.x, pos.y, pos.z,
        Math.sin(ph) * Math.cos(th) * sp, Math.cos(ph) * sp * up + speed * 0.25, Math.sin(ph) * Math.sin(th) * sp,
        life * (0.5 + Math.random() * 0.8), size * (0.6 + Math.random() * 0.8),
        color.r, color.g, color.b, grav, 1.5);
    }
  }
  dustPuff(pos, n = 10, spread = 1.2) {
    const c = new THREE.Color(0xc9a86e);
    for (let k = 0; k < n; k++) {
      this.spawn(pos.x + (Math.random() - .5) * spread, pos.y + Math.random() * 0.4, pos.z + (Math.random() - .5) * spread,
        (Math.random() - .5) * 1.2, 0.5 + Math.random() * 1.2, (Math.random() - .5) * 1.2,
        0.7 + Math.random() * 0.9, 0.35 + Math.random() * 0.5, c.r, c.g, c.b, 0.4, 2.2);
    }
  }
  bloodPuff(pos) {
    const c = new THREE.Color(0x8a1410);
    this.burst(pos, 14, 2.2, 0.6, 0.22, c, -5);
    const c2 = new THREE.Color(0x5a0a08);
    this.burst(pos, 8, 1.4, 0.8, 0.3, c2, -4);
  }
  sparkBurst(pos, n = 8) {
    for (let k = 0; k < n; k++) {
      const i = this.sHead; this.sHead = (this.sHead + 1) % 600;
      this.sPos[i * 3] = pos.x; this.sPos[i * 3 + 1] = pos.y; this.sPos[i * 3 + 2] = pos.z;
      const th = Math.random() * Math.PI * 2, sp = 2 + Math.random() * 5;
      this.sVel[i * 3] = Math.cos(th) * sp; this.sVel[i * 3 + 1] = Math.random() * 4; this.sVel[i * 3 + 2] = Math.sin(th) * sp;
      this.sLife[i] = 0.25 + Math.random() * 0.3;
      const warm = 0.7 + Math.random() * 0.3;
      this.sCol[i * 3] = 1; this.sCol[i * 3 + 1] = warm * 0.75; this.sCol[i * 3 + 2] = warm * 0.3;
      this.sSize[i] = 0.06 + Math.random() * 0.08;
    }
  }
  tracer(from, to) {
    const t = this.tracers.find(t => t.life <= 0) || this.tracers[0];
    t.mesh.visible = true; t.life = 0.07;
    t.mesh.position.copy(from);
    const dir = new THREE.Vector3().subVectors(to, from);
    const len = dir.length();
    t.mesh.scale.set(1, 1, len);
    t.mesh.lookAt(to);
    t.mesh.material.opacity = 0.9;
  }
  ejectShell(pos, right, up) {
    const s = this.shells.find(s => s.life <= 0) || this.shells[0];
    s.mesh.visible = true; s.life = 1.6;
    s.mesh.position.copy(pos);
    s.vel.copy(right).multiplyScalar(1.2 + Math.random()).add(up.clone().multiplyScalar(1.6 + Math.random()));
    s.angVel.set(Math.random() * 20, Math.random() * 20, Math.random() * 20);
  }
  muzzle(pos, dir, big = true) {
    this.flashSprite.position.copy(pos);
    this.flashSprite.material.rotation = Math.random() * Math.PI;
    const s = big ? 0.55 + Math.random() * 0.25 : 0.35;
    this.flashSprite.scale.set(s, s, 1);
    this.flashSprite.material.opacity = 1;
    this.flashLife = 0.05;
    this.flashLight.position.copy(pos);
    this.flashLight.intensity = big ? 26 : 14;
    // smoke
    const c = new THREE.Color(0xcccccc);
    for (let k = 0; k < 3; k++) {
      this.spawn(pos.x + dir.x * 0.3, pos.y + dir.y * 0.3, pos.z + dir.z * 0.3,
        dir.x * 2.5 + (Math.random() - .5), dir.y * 2.5 + 0.6, dir.z * 2.5 + (Math.random() - .5),
        0.5 + Math.random() * 0.5, 0.22, c.r, c.g, c.b, 1.2, 2);
    }
  }

  update(dt) {
    for (let i = 0; i < MAXP; i++) {
      if (this.life[i] <= 0) continue;
      this.life[i] -= dt;
      if (this.life[i] <= 0) { this.pos[i * 3 + 1] = -100; continue; }
      const d = Math.max(0, 1 - this.drag[i] * dt);
      this.vel[i * 3] *= d; this.vel[i * 3 + 2] *= d;
      this.vel[i * 3 + 1] = this.vel[i * 3 + 1] * d + this.grav[i] * dt;
      this.pos[i * 3] += this.vel[i * 3] * dt;
      this.pos[i * 3 + 1] += this.vel[i * 3 + 1] * dt;
      this.pos[i * 3 + 2] += this.vel[i * 3 + 2] * dt;
      if (this.pos[i * 3 + 1] < 0.02) { this.pos[i * 3 + 1] = 0.02; this.vel[i * 3 + 1] *= -0.3; }
      // fade by shrinking
      this.size[i] *= (1 - dt * 0.4);
    }
    this.geo.attributes.position.needsUpdate = true;
    this.geo.attributes.aColor.needsUpdate = true;
    this.geo.attributes.aSize.needsUpdate = true;

    for (let i = 0; i < 600; i++) {
      if (this.sLife[i] <= 0) continue;
      this.sLife[i] -= dt;
      if (this.sLife[i] <= 0) { this.sPos[i * 3 + 1] = -100; continue; }
      this.sVel[i * 3 + 1] -= 12 * dt;
      this.sPos[i * 3] += this.sVel[i * 3] * dt;
      this.sPos[i * 3 + 1] += this.sVel[i * 3 + 1] * dt;
      this.sPos[i * 3 + 2] += this.sVel[i * 3 + 2] * dt;
      if (this.sPos[i * 3 + 1] < 0.02) this.sLife[i] = 0;
    }
    this.sgeo.attributes.position.needsUpdate = true;
    this.sgeo.attributes.aColor.needsUpdate = true;
    this.sgeo.attributes.aSize.needsUpdate = true;

    for (const t of this.tracers) {
      if (t.life > 0) { t.life -= dt; t.mesh.material.opacity = Math.max(0, t.life / 0.07) * 0.9; if (t.life <= 0) t.mesh.visible = false; }
    }
    for (const s of this.shells) {
      if (s.life > 0) {
        s.life -= dt;
        s.vel.y -= 9.8 * dt;
        s.mesh.position.addScaledVector(s.vel, dt);
        if (s.mesh.position.y < 0.03) { s.mesh.position.y = 0.03; s.vel.y *= -0.35; s.vel.x *= 0.7; s.vel.z *= 0.7; }
        s.mesh.rotation.x += s.angVel.x * dt; s.mesh.rotation.y += s.angVel.y * dt; s.mesh.rotation.z += s.angVel.z * dt;
        if (s.life <= 0) s.mesh.visible = false;
      }
    }
    if (this.flashLife > 0) { this.flashLife -= dt; if (this.flashLife <= 0) { this.flashSprite.material.opacity = 0; this.flashLight.intensity = 0; } }
    else this.flashLight.intensity *= 0.6;
    // dust drift
    this.dust.rotation.y += dt * 0.008;
    const p = this.dust.geometry.attributes.position;
    for (let i = 0; i < p.count; i++) {
      p.array[i * 3] += Math.sin(performance.now() * 0.0003 + i) * dt * 0.25;
      p.array[i * 3 + 1] += Math.cos(performance.now() * 0.0002 + i * 2) * dt * 0.12;
    }
    p.needsUpdate = true;
  }
}
