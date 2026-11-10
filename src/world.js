// Level: "Saltline" — small desert compound, dense props, AAA dressing
import * as THREE from 'three';
import { pbr } from './textures.js';

export class World {
  constructor(scene, T) {
    this.scene = scene;
    this.T = T;
    this.colliders = []; // {min,max}
    this.spawnPoints = [];
    this.patrols = [];
    this.build();
  }

  addCollider(x, y, z, w, h, d) {
    this.colliders.push({
      min: new THREE.Vector3(x - w / 2, y - h / 2, z - d / 2),
      max: new THREE.Vector3(x + w / 2, y + h / 2, z + d / 2),
    });
  }
  box(w, h, d, mat, x, y, z, ry = 0, collide = true, cast = true, recv = true) {
    const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
    m.position.set(x, y, z); m.rotation.y = ry;
    m.castShadow = cast; m.receiveShadow = recv;
    this.scene.add(m);
    if (collide) {
      if (ry === 0) this.addCollider(x, y, z, w, h, d);
      else {
        // approximate rotated box with slightly larger AABB
        const c = Math.abs(Math.cos(ry)), s = Math.abs(Math.sin(ry));
        this.addCollider(x, y, z, w * c + d * s, h, w * s + d * c);
      }
    }
    return m;
  }

  build() {
    const T = this.T;
    const S = this.scene;

    // ---------- SKY ----------
    const skyGeo = new THREE.SphereGeometry(400, 32, 20);
    const skyMat = new THREE.ShaderMaterial({
      side: THREE.BackSide, depthWrite: false, fog: false,
      uniforms: { uSunDir: { value: new THREE.Vector3(-0.55, 0.38, -0.45).normalize() } },
      vertexShader: `varying vec3 vDir; void main(){ vDir=normalize(position); gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }`,
      fragmentShader: `
        varying vec3 vDir; uniform vec3 uSunDir;
        float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7)))*43758.5453); }
        float noise(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.0-2.0*f);
          return mix(mix(hash(i),hash(i+vec2(1,0)),f.x), mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x), f.y); }
        float fbm(vec2 p){ float v=0.0, a=0.5; for(int i=0;i<5;i++){ v+=a*noise(p); p*=2.1; a*=0.5; } return v; }
        void main(){
          vec3 d = normalize(vDir);
          float h = clamp(d.y, -0.1, 1.0);
          vec3 zen = vec3(0.16,0.30,0.52);
          vec3 mid = vec3(0.62,0.58,0.52);
          vec3 hor = vec3(0.98,0.72,0.42);
          vec3 col = mix(hor, mid, smoothstep(0.0,0.18,h));
          col = mix(col, zen, smoothstep(0.15,0.65,h));
          float sunAmt = max(dot(d, uSunDir), 0.0);
          col += vec3(1.0,0.55,0.22)*pow(sunAmt, 220.0)*3.0;   // disc
          col += vec3(1.0,0.62,0.28)*pow(sunAmt, 8.0)*0.35;    // glow
          col += vec3(0.9,0.45,0.18)*pow(sunAmt, 2.0)*0.12;
          // clouds
          if (d.y > 0.02) {
            vec2 uv = d.xz / (d.y + 0.25);
            float cl = fbm(uv*1.4 + vec2(3.7, 1.2));
            float cov = smoothstep(0.52, 0.78, cl) * smoothstep(0.02, 0.25, d.y);
            vec3 cloudCol = mix(vec3(0.98,0.90,0.82), vec3(0.55,0.48,0.45), clamp(cl*1.2-0.3,0.0,1.0));
            cloudCol += vec3(1.0,0.5,0.2)*pow(sunAmt,3.0)*0.25;
            col = mix(col, cloudCol, cov*0.75);
          }
          // haze at horizon
          col = mix(col, vec3(0.92,0.70,0.45), smoothstep(0.12,0.0,d.y)*0.6);
          gl_FragColor = vec4(col, 1.0);
        }`,
    });
    const sky = new THREE.Mesh(skyGeo, skyMat);
    S.add(sky);
    this.sky = sky;

    // ---------- LIGHTS ----------
    const sun = new THREE.DirectionalLight(0xffd9a0, 3.2);
    sun.position.set(-55, 42, -48);
    sun.castShadow = true;
    sun.shadow.mapSize.set(2048, 2048);
    sun.shadow.camera.left = -55; sun.shadow.camera.right = 55;
    sun.shadow.camera.top = 55; sun.shadow.camera.bottom = -55;
    sun.shadow.camera.near = 5; sun.shadow.camera.far = 180;
    sun.shadow.bias = -0.0004; sun.shadow.normalBias = 0.03;
    S.add(sun); S.add(sun.target);
    this.sun = sun;
    const hemi = new THREE.HemisphereLight(0xbfd4e8, 0x8a6a42, 0.55);
    S.add(hemi);
    const amb = new THREE.AmbientLight(0xffe0b8, 0.12);
    S.add(amb);
    S.fog = new THREE.FogExp2(0xd8b078, 0.011);

    // environment reflections from sky
    const pmrem = new THREE.PMREMGenerator(S);
    const envScene = new THREE.Scene();
    envScene.add(new THREE.Mesh(new THREE.SphereGeometry(50, 16, 12), skyMat.clone()));
    const envRT = pmrem.fromScene(envScene, 0.04);
    S.environment = envRT.texture;

    // ---------- GROUND ----------
    const sandMat = pbr(T.clone(T.sand, 26, 26), { roughness: 1, envMapIntensity: 0.25 });
    const ground = new THREE.Mesh(new THREE.PlaneGeometry(320, 320), sandMat);
    ground.rotation.x = -Math.PI / 2; ground.receiveShadow = true;
    S.add(ground);

    // compound floor (packed earth / asphalt mix)
    const floorMat = pbr(T.clone(T.asphalt, 7, 7), { roughness: 0.95, envMapIntensity: 0.3 });
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(78, 78), floorMat);
    floor.rotation.x = -Math.PI / 2; floor.position.y = 0.02; floor.receiveShadow = true;
    S.add(floor);
    // sand patches inside
    const patchMat = pbr(T.clone(T.sand, 3, 3), { roughness: 1, envMapIntensity: 0.2 });
    [[-14, 12, 18, 14], [16, 16, 20, 16], [2, -22, 24, 14], [-24, -6, 14, 20]].forEach(([x, z, w, d]) => {
      const p = new THREE.Mesh(new THREE.PlaneGeometry(w, d), patchMat);
      p.rotation.x = -Math.PI / 2; p.position.set(x, 0.045, z); p.receiveShadow = true; S.add(p);
    });
    // tire tracks
    const trackMat = new THREE.MeshStandardMaterial({ color: 0x3a332a, roughness: 1 });
    for (let i = 0; i < 3; i++) {
      const tr = new THREE.Mesh(new THREE.PlaneGeometry(1.1, 46), trackMat);
      tr.rotation.x = -Math.PI / 2; tr.rotation.z = 0.25 + i * 0.18;
      tr.position.set(-6 + i * 7, 0.05, 4); tr.receiveShadow = true; S.add(tr);
    }
    // distant dunes + mountains
    const duneMat = pbr(T.clone(T.sand, 4, 4), { roughness: 1, envMapIntensity: 0.15 });
    const mtnMat = new THREE.MeshStandardMaterial({ color: 0x9a7a55, roughness: 1 });
    for (let i = 0; i < 10; i++) {
      const a = (i / 10) * Math.PI * 2 + 0.3;
      const r = 130 + Math.random() * 60;
      const h = 14 + Math.random() * 22;
      const dune = new THREE.Mesh(new THREE.ConeGeometry(30 + Math.random() * 30, h, 7), i % 3 ? duneMat : mtnMat);
      dune.position.set(Math.cos(a) * r, h / 2 - 2, Math.sin(a) * r);
      dune.scale.y = 0.55;
      S.add(dune);
    }

    // ---------- MATERIALS ----------
    const concMat = pbr(T.clone(T.concrete, 1.6, 1.6), { roughness: 0.9, envMapIntensity: 0.4 });
    const concDark = pbr(T.clone(T.concrete, 1.2, 1.2), { roughness: 0.95, color: 0xb8b0a4, envMapIntensity: 0.35 });
    const brickMat = pbr(T.clone(T.brick, 2, 1.4), { roughness: 0.92, envMapIntensity: 0.35 });
    const paintMat = pbr(T.clone(T.paint, 1.4, 1.4), { roughness: 0.75, envMapIntensity: 0.5 });
    const woodMat = pbr(T.clone(T.wood, 1, 1), { roughness: 0.85, envMapIntensity: 0.3 });
    const metalMat = pbr(T.clone(T.metal, 1, 1), { roughness: 0.55, metalness: 0.65, envMapIntensity: 0.9 });
    const rustMat = pbr(T.clone(T.metal, 1, 1), { roughness: 0.8, metalness: 0.4, color: 0xc08a5a, envMapIntensity: 0.5 });
    const rockMat = pbr(T.clone(T.rock, 1, 1), { roughness: 1, envMapIntensity: 0.2 });
    const darkGlass = new THREE.MeshStandardMaterial({ color: 0x1a2228, roughness: 0.15, metalness: 0.8, envMapIntensity: 1.4 });
    const doorMat = pbr(T.clone(T.metal, 0.6, 0.6), { roughness: 0.6, metalness: 0.5, color: 0x8a6a3a, envMapIntensity: 0.6 });

    // ---------- PERIMETER WALLS ----------
    const W = 38, wallH = 3.4, wallT = 0.6;
    const wallMat = brickMat;
    this.box(W * 2, wallH, wallT, wallMat, 0, wallH / 2, -W);
    this.box(W * 2, wallH, wallT, wallMat, 0, wallH / 2, W);
    this.box(wallT, wallH, W * 2, wallMat, -W, wallH / 2, 0);
    this.box(wallT, wallH, W * 2, wallMat, W, wallH / 2, 0);
    // wall caps + pillars
    for (let x = -W; x <= W; x += 9.5) {
      this.box(1.1, wallH + 0.5, 1.1, concDark, x, (wallH + 0.5) / 2, -W);
      this.box(1.1, wallH + 0.5, 1.1, concDark, x, (wallH + 0.5) / 2, W);
    }
    for (let z = -W; z <= W; z += 9.5) {
      this.box(1.1, wallH + 0.5, 1.1, concDark, -W, (wallH + 0.5) / 2, z);
      this.box(1.1, wallH + 0.5, 1.1, concDark, W, (wallH + 0.5) / 2, z);
    }
    // barbed wire hint (dark torus segments on top) — simple: thin dark boxes
    const wireMat = new THREE.MeshStandardMaterial({ color: 0x2a2a2a, roughness: 0.6, metalness: 0.7 });
    this.box(W * 2, 0.08, 0.08, wireMat, 0, wallH + 0.35, -W, 0, false, false);
    this.box(W * 2, 0.08, 0.08, wireMat, 0, wallH + 0.35, W, 0, false, false);

    // ---------- BUILDINGS ----------
    const building = (x, z, w, d, h, mat, ry = 0) => {
      const g = new THREE.Group(); g.position.set(x, 0, z); g.rotation.y = ry;
      const body = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
      body.position.y = h / 2; body.castShadow = body.receiveShadow = true; g.add(body);
      // roof slab + parapet
      const roof = new THREE.Mesh(new THREE.BoxGeometry(w + 0.5, 0.25, d + 0.5), concDark);
      roof.position.y = h + 0.12; roof.castShadow = roof.receiveShadow = true; g.add(roof);
      const par = new THREE.Mesh(new THREE.BoxGeometry(w + 0.5, 0.5, 0.18), mat);
      par.position.set(0, h + 0.4, -d / 2 - 0.15); par.castShadow = true; g.add(par);
      const par2 = par.clone(); par2.position.z = d / 2 + 0.15; g.add(par2);
      const par3 = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.5, d + 0.5), mat);
      par3.position.set(-w / 2 - 0.15, h + 0.4, 0); par3.castShadow = true; g.add(par3);
      const par4 = par3.clone(); par4.position.x = w / 2 + 0.15; g.add(par4);
      // windows (front face +z)
      const cols = Math.max(1, Math.floor(w / 3));
      for (let i = 0; i < cols; i++) {
        const wx = -w / 2 + (i + 0.5) * (w / cols);
        const win = new THREE.Mesh(new THREE.BoxGeometry(1.3, 1.1, 0.08), darkGlass);
        win.position.set(wx, h * 0.62, d / 2 + 0.02); g.add(win);
        const frame = new THREE.Mesh(new THREE.BoxGeometry(1.5, 1.3, 0.05), concDark);
        frame.position.set(wx, h * 0.62, d / 2 + 0.005); g.add(frame);
        const win2 = win.clone(); win2.position.z = -d / 2 - 0.02; g.add(win2);
      }
      // door
      const door = new THREE.Mesh(new THREE.BoxGeometry(1.1, 2.2, 0.1), doorMat);
      door.position.set(w * 0.28, 1.1, d / 2 + 0.03); g.add(door);
      const knob = new THREE.Mesh(new THREE.SphereGeometry(0.05, 8, 8), metalMat);
      knob.position.set(w * 0.28 + 0.38, 1.1, d / 2 + 0.1); g.add(knob);
      // AC unit + pipes + antenna
      const ac = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.7, 0.5), paintMat);
      ac.position.set(-w * 0.3, h + 0.6, 0); ac.castShadow = true; g.add(ac);
      const pipe = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.09, h, 8), metalMat);
      pipe.position.set(w / 2 + 0.18, h / 2, d * 0.2); pipe.castShadow = true; g.add(pipe);
      const ant = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 2.4, 6), metalMat);
      ant.position.set(w * 0.35, h + 1.4, -d * 0.25); g.add(ant);
      const dish = new THREE.Mesh(new THREE.SphereGeometry(0.55, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2.4), paintMat);
      dish.position.set(w * 0.35, h + 2.2, -d * 0.25); dish.rotation.x = Math.PI * 0.7; g.add(dish);
      S.add(g);
      // collider (AABB approx)
      const c = Math.abs(Math.cos(ry)), s = Math.abs(Math.sin(ry));
      this.addCollider(x, h / 2, z, w * c + d * s, h, w * s + d * c);
      return g;
    };

    building(-20, -14, 15, 11, 5.2, concMat);            // warehouse west
    building(17, -18, 11, 9, 4.2, brickMat, 0.12);      // east house
    building(-6, -26, 9, 7, 3.6, paintMat);             // north small
    building(24, 6, 8, 8, 3.4, concMat, -0.2);           // east shed
    building(-26, 14, 8, 7, 3.2, brickMat, 0.3);        // SW hut
    building(8, 26, 10, 6, 3.0, paintMat, 0.08);        // south building (behind player start)

    // ---------- WATCHTOWER ----------
    {
      const tx = 26, tz = -6, th = 6;
      const legMat = metalMat;
      [[-1.4, -1.4], [1.4, -1.4], [-1.4, 1.4], [1.4, 1.4]].forEach(([dx, dz]) => {
        const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.18, th, 8), legMat);
        leg.position.set(tx + dx, th / 2, tz + dz); leg.castShadow = true; S.add(leg);
      });
      const plat = new THREE.Mesh(new THREE.BoxGeometry(4.2, 0.25, 4.2), woodMat);
      plat.position.set(tx, th, tz); plat.castShadow = plat.receiveShadow = true; S.add(plat);
      const cabin = new THREE.Mesh(new THREE.BoxGeometry(3.4, 2.2, 3.4), concMat);
      cabin.position.set(tx, th + 1.35, tz); cabin.castShadow = true; S.add(cabin);
      const roof = new THREE.Mesh(new THREE.ConeGeometry(3.1, 1.4, 4), rustMat);
      roof.position.set(tx, th + 3.1, tz); roof.rotation.y = Math.PI / 4; roof.castShadow = true; S.add(roof);
      // railing
      const rail = new THREE.Mesh(new THREE.BoxGeometry(4.2, 0.08, 0.08), metalMat);
      rail.position.set(tx, th + 1.0, tz + 2.05); S.add(rail);
      const rail2 = rail.clone(); rail2.position.z = tz - 2.05; S.add(rail2);
      this.addCollider(tx, th / 2, tz, 3.2, th, 3.2);
      // searchlight glow
      const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: this.glowTex(), color: 0xffe9b0, transparent: true, opacity: 0.85, blending: THREE.AdditiveBlending, depthWrite: false }));
      glow.scale.set(1.4, 1.4, 1); glow.position.set(tx, th + 1.6, tz + 1.8); S.add(glow);
    }

    // ---------- CONTAINERS ----------
    const container = (x, z, ry, color) => {
      const mat = pbr(T.clone(T.metal, 2, 1), { roughness: 0.6, metalness: 0.55, color, envMapIntensity: 0.7 });
      const g = new THREE.Group(); g.position.set(x, 1.3, z); g.rotation.y = ry;
      const body = new THREE.Mesh(new THREE.BoxGeometry(6, 2.6, 2.4), mat);
      body.castShadow = body.receiveShadow = true; g.add(body);
      for (let i = -2; i <= 2; i++) {
        const rib = new THREE.Mesh(new THREE.BoxGeometry(0.14, 2.5, 2.5), mat);
        rib.position.x = i * 1.2; g.add(rib);
      }
      S.add(g);
      const c = Math.abs(Math.cos(ry)), s = Math.abs(Math.sin(ry));
      this.addCollider(x, 1.3, z, 6 * c + 2.4 * s, 2.6, 6 * s + 2.4 * c);
    };
    container(-2, -8, 0.15, 0x9a4a2a);
    container(12, -4, -0.1, 0x3a5a7a);
    container(12.2, -7.6, 0.05, 0x3a5a7a);
    container(-14, 22, 1.35, 0x5a6a3a);

    // ---------- CRATES ----------
    const crate = (x, y, z, s, ry = 0) => {
      const m = this.box(s, s, s, woodMat, x, y, z, ry);
      // edge trim
      const trim = new THREE.Mesh(new THREE.BoxGeometry(s + 0.06, s * 0.16, s + 0.06), metalMat);
      trim.position.set(x, y, z); trim.rotation.y = ry; S.add(trim);
      return m;
    };
    // central cluster
    crate(0, 0.6, 2, 1.2); crate(1.3, 0.6, 2.2, 1.2, 0.2); crate(0.6, 1.8, 2.1, 1.2, 0.1);
    crate(-1.5, 0.5, 3.4, 1.0, 0.4); crate(3.2, 0.75, 0.5, 1.5, -0.15); crate(3.3, 2.25, 0.4, 1.5, 0.05);
    crate(-8, 0.6, -16, 1.2); crate(-6.6, 0.6, -15.4, 1.2, 0.3); crate(-7.3, 1.8, -15.7, 1.2);
    crate(6, 0.6, 12, 1.2, 0.2); crate(7.4, 0.6, 11.4, 1.2); crate(6.7, 1.8, 11.7, 1.2, 0.5);
    crate(-18, 0.6, 2, 1.2); crate(-16.6, 0.6, 2.4, 1.2, 0.2);
    crate(20, 0.6, 18, 1.2, 0.1); crate(21.4, 0.6, 17.4, 1.2, 0.4); crate(20.7, 1.8, 17.7, 1.2);
    crate(-4, 0.5, -20, 1.0); crate(14, 0.5, 8, 1.0, 0.3);
    // big crate
    crate(-10, 1.0, 8, 2.0, 0.12);

    // ---------- BARRELS ----------
    const barrel = (x, z, ry = 0) => {
      const g = new THREE.Group(); g.position.set(x, 0, z);
      const b = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.42, 0.95, 14), rustMat);
      b.position.y = 0.48; b.castShadow = b.receiveShadow = true; g.add(b);
      [0.25, 0.7].forEach(y => {
        const ring = new THREE.Mesh(new THREE.TorusGeometry(0.43, 0.025, 6, 20), metalMat);
        ring.rotation.x = Math.PI / 2; ring.position.y = y; g.add(ring);
      });
      const lid = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.4, 0.05, 14), metalMat);
      lid.position.y = 0.97; g.add(lid);
      S.add(g);
      this.addCollider(x, 0.5, z, 0.85, 1.0, 0.85);
    };
    [[-3, 6], [-2.1, 6.4], [-2.6, 5.2], [9, -12], [9.8, -11.2], [-12, -4], [-11.2, -3.2], [18, 2], [18.9, 2.6], [4, 18], [4.8, 18.6], [-20, 18], [22, -14], [-8, 14]].forEach(([x, z]) => barrel(x, z));

    // ---------- SANDBAGS ----------
    const bagMat = pbr(T.clone(T.camo, 1, 1), { roughness: 1, color: 0xb8a888, envMapIntensity: 0.2 });
    const sandbagWall = (x, z, ry, len = 4) => {
      const g = new THREE.Group(); g.position.set(x, 0, z); g.rotation.y = ry;
      const bagGeo = new THREE.SphereGeometry(0.32, 8, 6);
      for (let row = 0; row < 3; row++) {
        const n = Math.floor(len / 0.55);
        for (let i = 0; i < n; i++) {
          const bag = new THREE.Mesh(bagGeo, bagMat);
          bag.scale.set(1.3, 0.55, 0.8);
          bag.position.set(-len / 2 + i * 0.55 + (row % 2) * 0.14, 0.18 + row * 0.3, (row % 2 ? 0.08 : -0.05));
          bag.rotation.y = (Math.random() - .5) * 0.4;
          bag.castShadow = bag.receiveShadow = true;
          g.add(bag);
        }
      }
      S.add(g);
      const c = Math.abs(Math.cos(ry)), s = Math.abs(Math.sin(ry));
      this.addCollider(x, 0.5, z, len * c + 0.7 * s, 1.0, len * s + 0.7 * c);
    };
    sandbagWall(0, -14, 0, 5);
    sandbagWall(-10, 0, Math.PI / 2, 4);
    sandbagWall(10, 14, 0.2, 4);
    sandbagWall(-16, -20, 0.5, 3);
    sandbagWall(22, 12, -0.4, 4);

    // ---------- ROCKS ----------
    const rock = (x, z, s) => {
      const geo = new THREE.IcosahedronGeometry(s, 1);
      const pos = geo.attributes.position;
      for (let i = 0; i < pos.count; i++) {
        const v = new THREE.Vector3().fromBufferAttribute(pos, i);
        const n = 1 + (Math.sin(v.x * 5 + x) + Math.cos(v.y * 4 + z)) * 0.12 + Math.random() * 0.08;
        v.multiplyScalar(n); pos.setXYZ(i, v.x, v.y * 0.75, v.z);
      }
      geo.computeVertexNormals();
      const m = new THREE.Mesh(geo, rockMat);
      m.position.set(x, s * 0.35, z); m.rotation.y = Math.random() * 3;
      m.castShadow = m.receiveShadow = true; S.add(m);
      this.addCollider(x, s * 0.4, z, s * 1.5, s, s * 1.5);
    };
    [[-30, -24, 1.6], [30, 20, 2.0], [-32, 8, 1.2], [32, -28, 1.8], [14, 30, 1.4], [-14, 32, 1.1], [28, 28, 1.3], [-28, -30, 1.5], [6, -32, 1.2], [-34, -8, 1.0]].forEach(([x, z, s]) => rock(x, z, s));

    // ---------- DEAD TREES + DRY BUSHES ----------
    const trunkMat = new THREE.MeshStandardMaterial({ color: 0x4a3826, roughness: 1 });
    const tree = (x, z, s = 1) => {
      const g = new THREE.Group(); g.position.set(x, 0, z); g.scale.setScalar(s);
      const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.22, 2.6, 7), trunkMat);
      trunk.position.y = 1.3; trunk.rotation.z = (Math.random() - .5) * 0.25; trunk.castShadow = true; g.add(trunk);
      for (let i = 0; i < 4; i++) {
        const br = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.07, 1.4, 5), trunkMat);
        br.position.set(Math.sin(i * 1.7) * 0.5, 2.2 + i * 0.18, Math.cos(i * 1.7) * 0.5);
        br.rotation.set(Math.cos(i * 1.7) * 0.9, 0, Math.sin(i * 1.7) * 0.9);
        br.castShadow = true; g.add(br);
      }
      S.add(g);
      this.addCollider(x, 1, z, 0.5, 2, 0.5);
    };
    [[-24, -24], [28, -22], [-30, 20], [30, 30], [12, -30], [-12, 28]].forEach(([x, z]) => tree(x, z, 0.9 + Math.random() * 0.5));

    // dry grass tufts (crossed planes)
    const grassTex = (() => {
      const c = document.createElement('canvas'); c.width = c.height = 128;
      const x = c.getContext('2d');
      x.strokeStyle = '#9a8a4a'; x.lineWidth = 2;
      for (let i = 0; i < 40; i++) {
        const bx = 20 + Math.random() * 88;
        x.beginPath(); x.moveTo(bx, 128);
        x.quadraticCurveTo(bx + (Math.random() - .5) * 30, 70, bx + (Math.random() - .5) * 50, 10 + Math.random() * 40);
        x.stroke();
      }
      const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
    })();
    const grassMat = new THREE.MeshStandardMaterial({ map: grassTex, transparent: true, alphaTest: 0.25, side: THREE.DoubleSide, roughness: 1 });
    for (let i = 0; i < 90; i++) {
      const x = (Math.random() - .5) * 72, z = (Math.random() - .5) * 72;
      const g = new THREE.Group(); g.position.set(x, 0, z); g.rotation.y = Math.random() * 3;
      for (let k = 0; k < 2; k++) {
        const p = new THREE.Mesh(new THREE.PlaneGeometry(0.9, 0.6), grassMat);
        p.position.y = 0.3; p.rotation.y = k * Math.PI / 2; g.add(p);
      }
      S.add(g);
    }

    // ---------- LAMPS / POLES + WIRES ----------
    const poleMat = metalMat;
    const lampPos = [[-8, -8], [8, -20], [-16, 10], [16, 20], [0, 0]];
    lampPos.forEach(([x, z]) => {
      const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.09, 4.2, 8), poleMat);
      pole.position.set(x, 2.1, z); pole.castShadow = true; S.add(pole);
      const head = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.18, 0.28), darkGlass);
      head.position.set(x, 4.25, z); S.add(head);
      const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: this.glowTex(), color: 0xffd9a0, transparent: true, opacity: 0.5, blending: THREE.AdditiveBlending, depthWrite: false }));
      glow.scale.set(1.6, 1.6, 1); glow.position.set(x, 4.2, z); S.add(glow);
      this.addCollider(x, 2, z, 0.3, 4, 0.3);
    });
    // wires between lamp tops
    const wirePts = [];
    for (let i = 0; i < lampPos.length - 1; i++) {
      const [x1, z1] = lampPos[i], [x2, z2] = lampPos[i + 1];
      const mid = new THREE.Vector3((x1 + x2) / 2, 3.6, (z1 + z2) / 2);
      const curve = new THREE.QuadraticBezierCurve3(new THREE.Vector3(x1, 4.2, z1), mid, new THREE.Vector3(x2, 4.2, z2));
      const geo = new THREE.TubeGeometry(curve, 16, 0.02, 4);
      const wire = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color: 0x1a1a1a, roughness: 0.8 }));
      S.add(wire);
    }

    // ---------- JEEP (dressing, non-colliding detailed prop) ----------
    {
      const jx = -6, jz = 16, jry = 0.5;
      const g = new THREE.Group(); g.position.set(jx, 0, jz); g.rotation.y = jry;
      const bodyMat = pbr(T.clone(T.metal, 1, 1), { roughness: 0.5, metalness: 0.5, color: 0x5a5a42, envMapIntensity: 0.7 });
      const body = new THREE.Mesh(new THREE.BoxGeometry(4.4, 0.9, 1.9), bodyMat);
      body.position.y = 0.85; body.castShadow = true; g.add(body);
      const hood = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.5, 1.8), bodyMat);
      hood.position.set(1.6, 1.15, 0); hood.castShadow = true; g.add(hood);
      const cab = new THREE.Mesh(new THREE.BoxGeometry(2.0, 0.8, 1.8), bodyMat);
      cab.position.set(-0.4, 1.6, 0); cab.castShadow = true; g.add(cab);
      const glass = new THREE.Mesh(new THREE.BoxGeometry(1.9, 0.6, 1.7), darkGlass);
      glass.position.set(-0.4, 1.65, 0); g.add(glass);
      const wheelGeo = new THREE.CylinderGeometry(0.42, 0.42, 0.3, 14);
      const wheelMat = new THREE.MeshStandardMaterial({ color: 0x1c1c1c, roughness: 0.95 });
      [[1.5, 0.95], [1.5, -0.95], [-1.5, 0.95], [-1.5, -0.95]].forEach(([wx, wz]) => {
        const w = new THREE.Mesh(wheelGeo, wheelMat);
        w.rotation.x = Math.PI / 2; w.position.set(wx, 0.42, wz); w.castShadow = true; g.add(w);
        const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 0.32, 10), metalMat);
        hub.rotation.x = Math.PI / 2; hub.position.set(wx, 0.42, wz); g.add(hub);
      });
      // spare + jerry cans + roof rack
      const spare = new THREE.Mesh(wheelGeo, wheelMat);
      spare.rotation.z = Math.PI / 2; spare.position.set(-2.25, 1.0, 0); g.add(spare);
      const can = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.6, 0.25), rustMat);
      can.position.set(-2.1, 0.9, 0.6); g.add(can);
      const rack = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.08, 1.6), metalMat);
      rack.position.set(-0.4, 2.05, 0); g.add(rack);
      // headlights
      const hl = new THREE.Mesh(new THREE.CircleGeometry(0.14, 10), new THREE.MeshStandardMaterial({ color: 0xfff2c0, emissive: 0xffedb0, emissiveIntensity: 0.6 }));
      hl.position.set(2.21, 1.0, 0.6); hl.rotation.y = Math.PI / 2; g.add(hl);
      const hl2 = hl.clone(); hl2.position.z = -0.6; g.add(hl2);
      S.add(g);
      const c = Math.abs(Math.cos(jry)), s = Math.abs(Math.sin(jry));
      this.addCollider(jx, 1, jz, 4.6 * c + 2.1 * s, 2, 4.6 * s + 2.1 * c);
    }

    // ---------- GROUND DECALS: blood-free scorch / oil stains ----------
    const stainMat = new THREE.MeshStandardMaterial({ color: 0x241c12, roughness: 1, transparent: true, opacity: 0.55 });
    [[4, -6, 3], [-12, 6, 2.4], [10, 22, 2.8], [-22, -2, 2]].forEach(([x, z, r]) => {
      const st = new THREE.Mesh(new THREE.CircleGeometry(r, 16), stainMat);
      st.rotation.x = -Math.PI / 2; st.position.set(x, 0.055, z); st.receiveShadow = true; S.add(st);
    });

    // ---------- SPAWNS / PATROLS ----------
    this.playerSpawn = new THREE.Vector3(0, 1.7, 33);
    this.playerSpawnDir = new THREE.Vector3(0, 0, -1);
    this.enemySpawns = [
      new THREE.Vector3(-14, 0, -21), new THREE.Vector3(10, 0, -24),
      new THREE.Vector3(0, 0, -24), new THREE.Vector3(-22, 0, 2),
      new THREE.Vector3(22, 0, -2), new THREE.Vector3(4, 0, -12),
    ];
    this.patrols = [
      [new THREE.Vector3(-14, 0, -21), new THREE.Vector3(-6, 0, -16), new THREE.Vector3(-14, 0, -8)],
      [new THREE.Vector3(10, 0, -24), new THREE.Vector3(6, 0, -14), new THREE.Vector3(16, 0, -8)],
      [new THREE.Vector3(0, 0, -24), new THREE.Vector3(-4, 0, -18), new THREE.Vector3(4, 0, -18)],
      [new THREE.Vector3(-22, 0, 2), new THREE.Vector3(-16, 0, 6), new THREE.Vector3(-18, 0, 12)],
      [new THREE.Vector3(22, 0, -2), new THREE.Vector3(18, 0, 4), new THREE.Vector3(20, 0, 12)],
      [new THREE.Vector3(4, 0, -12), new THREE.Vector3(0, 0, -4), new THREE.Vector3(6, 0, 2)],
    ];
  }

  glowTex() {
    if (this._glow) return this._glow;
    const c = document.createElement('canvas'); c.width = c.height = 64;
    const x = c.getContext('2d');
    const g = x.createRadialGradient(32, 32, 0, 32, 32, 32);
    g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(1, 'rgba(255,255,255,0)');
    x.fillStyle = g; x.fillRect(0, 0, 64, 64);
    this._glow = new THREE.CanvasTexture(c);
    return this._glow;
  }

  // AABB collision resolve for a capsule (radius r, height h) at pos
  collide(pos, r, h) {
    for (const c of this.colliders) {
      // closest point on AABB to pos (xz), check overlap in y too
      if (pos.y > c.max.y || pos.y - h < c.min.y) continue;
      const cx = Math.max(c.min.x, Math.min(pos.x, c.max.x));
      const cz = Math.max(c.min.z, Math.min(pos.z, c.max.z));
      const dx = pos.x - cx, dz = pos.z - cz;
      const d2 = dx * dx + dz * dz;
      if (d2 < r * r) {
        if (d2 > 1e-8) {
          const d = Math.sqrt(d2);
          pos.x += (dx / d) * (r - d);
          pos.z += (dz / d) * (r - d);
        } else {
          // inside box: push out along smallest penetration
          const pl = pos.x - c.min.x, pr = c.max.x - pos.x, pn = pos.z - c.min.z, pf = c.max.z - pos.z;
          const m = Math.min(pl, pr, pn, pf);
          if (m === pl) pos.x = c.min.x - r; else if (m === pr) pos.x = c.max.x + r;
          else if (m === pn) pos.z = c.min.z - r; else pos.z = c.max.z + r;
        }
      }
    }
    // world bounds
    pos.x = Math.max(-37, Math.min(37, pos.x));
    pos.z = Math.max(-37, Math.min(37, pos.z));
  }

  // line of sight blocked?
  rayBlocked(from, to) {
    // sample along segment against colliders (cheap, few colliders)
    const steps = 24;
    for (let i = 1; i < steps; i++) {
      const t = i / steps;
      const x = from.x + (to.x - from.x) * t;
      const y = from.y + (to.y - from.y) * t;
      const z = from.z + (to.z - from.z) * t;
      for (const c of this.colliders) {
        if (x > c.min.x && x < c.max.x && y > c.min.y && y < c.max.y && z > c.min.z && z < c.max.z) return true;
      }
    }
    return false;
  }
}
