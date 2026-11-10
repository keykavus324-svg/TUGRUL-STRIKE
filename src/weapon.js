// Viewmodel weapons: TUĞRUL-47 rifle + P9 pistol. Recoil, ADS, reload, sway.
import * as THREE from 'three';

export class Weapon {
  constructor(camera, scene, audio, effects) {
    this.camera = camera; this.scene = scene; this.audio = audio; this.fx = effects;
    this.group = new THREE.Group();
    camera.add(this.group);
    scene.add(camera);
    this.buildRifle();
    this.buildPistol();
    this.current = 'rifle';
    this.group.add(this.rifle); this.group.add(this.pistol);
    this.pistol.visible = false;
    this.reset();
    // anim state
    this.bobT = 0; this.recoil = 0; this.recoilRot = 0; this.ads = 0;
    this.reloadT = 0; this.reloadDur = 0; this.swayX = 0; this.swayY = 0;
    this.triggerHeld = false; this.nextShot = 0;
    this.muzzleWorld = new THREE.Vector3();
  }

  buildRifle() {
    const g = new THREE.Group();
    const metal = new THREE.MeshStandardMaterial({ color: 0x232628, roughness: 0.38, metalness: 0.85, envMapIntensity: 1.0 });
    const metal2 = new THREE.MeshStandardMaterial({ color: 0x3a3f42, roughness: 0.45, metalness: 0.8, envMapIntensity: 0.9 });
    const wood = new THREE.MeshStandardMaterial({ color: 0x7a4a22, roughness: 0.55, metalness: 0.05, envMapIntensity: 0.5 });
    const polymer = new THREE.MeshStandardMaterial({ color: 0x1e1f1c, roughness: 0.7, metalness: 0.1 });
    const brass = new THREE.MeshStandardMaterial({ color: 0xc8a030, roughness: 0.3, metalness: 0.9 });
    const add = (geo, mat, x, y, z, rx = 0, ry = 0, rz = 0) => {
      const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); m.rotation.set(rx, ry, rz); g.add(m); return m;
    };
    // receiver
    add(new THREE.BoxGeometry(0.075, 0.11, 0.52), metal, 0, 0, -0.05);
    // barrel + muzzle brake
    add(new THREE.CylinderGeometry(0.016, 0.016, 0.34, 10), metal2, 0, 0.015, -0.42, Math.PI / 2);
    add(new THREE.CylinderGeometry(0.024, 0.024, 0.09, 10), metal, 0, 0.015, -0.56, Math.PI / 2);
    for (let i = 0; i < 3; i++) add(new THREE.BoxGeometry(0.05, 0.012, 0.02), metal, 0, 0.015, -0.53 - i * 0.025);
    // gas tube + front sight
    add(new THREE.CylinderGeometry(0.011, 0.011, 0.3, 8), metal2, 0, 0.055, -0.38, Math.PI / 2);
    add(new THREE.BoxGeometry(0.008, 0.05, 0.008), metal, 0, 0.085, -0.5);
    add(new THREE.BoxGeometry(0.03, 0.012, 0.03), metal, 0, 0.062, -0.5);
    // handguard (wood)
    add(new THREE.BoxGeometry(0.085, 0.085, 0.3), wood, 0, 0.005, -0.33);
    // rear sight block
    add(new THREE.BoxGeometry(0.05, 0.045, 0.07), metal, 0, 0.075, 0.08);
    add(new THREE.BoxGeometry(0.006, 0.02, 0.006), metal, 0, 0.105, 0.08);
    // dust cover + charging handle
    add(new THREE.BoxGeometry(0.078, 0.02, 0.3), metal2, 0, 0.058, -0.02);
    add(new THREE.BoxGeometry(0.03, 0.02, 0.05), metal, 0.05, 0.02, 0.12);
    // curved magazine
    const mag = new THREE.Group(); mag.position.set(0, -0.06, -0.08);
    const magBody = new THREE.Mesh(new THREE.BoxGeometry(0.055, 0.24, 0.11), polymer);
    magBody.position.y = -0.1; mag.add(magBody);
    const magCurve = new THREE.Mesh(new THREE.BoxGeometry(0.055, 0.12, 0.1), polymer);
    magCurve.position.set(0, -0.24, 0.03); magCurve.rotation.x = 0.35; mag.add(magCurve);
    const magPlate = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.02, 0.12), metal);
    magPlate.position.set(0, -0.29, 0.055); magPlate.rotation.x = 0.35; mag.add(magPlate);
    g.add(mag); this.mag = mag;
    // pistol grip + trigger guard
    add(new THREE.BoxGeometry(0.05, 0.14, 0.07), polymer, 0, -0.11, 0.1, 0.25);
    add(new THREE.TorusGeometry(0.035, 0.007, 6, 12, Math.PI), metal, 0, -0.075, 0.03, 0, 0, Math.PI);
    // stock (wood)
    add(new THREE.BoxGeometry(0.06, 0.09, 0.3), wood, 0, -0.01, 0.36, -0.06);
    add(new THREE.BoxGeometry(0.065, 0.13, 0.03), polymer, 0, -0.03, 0.52);
    // sling mount + details
    add(new THREE.BoxGeometry(0.02, 0.02, 0.02), brass, 0.045, 0.03, -0.2);
    // muzzle ref
    this.rifleMuzzle = new THREE.Object3D(); this.rifleMuzzle.position.set(0, 0.015, -0.62); g.add(this.rifleMuzzle);
    this.rifle = g;
    this.rifle.userData = { mag: 30, reserve: 120, auto: true, rpm: 600, dmg: 34, spread: 0.012, adsSpread: 0.002, reloadTime: 2.1, name: 'TUĞRUL-47' };
  }

  buildPistol() {
    const g = new THREE.Group();
    const metal = new THREE.MeshStandardMaterial({ color: 0x2a2d2f, roughness: 0.35, metalness: 0.85, envMapIntensity: 1.0 });
    const polymer = new THREE.MeshStandardMaterial({ color: 0x22231f, roughness: 0.7, metalness: 0.1 });
    const add = (geo, mat, x, y, z, rx = 0) => { const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); m.rotation.x = rx; g.add(m); return m; };
    add(new THREE.BoxGeometry(0.05, 0.07, 0.24), metal, 0, 0, -0.04);
    add(new THREE.CylinderGeometry(0.014, 0.014, 0.05, 8), metal, 0, 0.01, -0.17, Math.PI / 2);
    add(new THREE.BoxGeometry(0.045, 0.1, 0.06), polymer, 0, -0.08, 0.05, 0.2);
    add(new THREE.BoxGeometry(0.008, 0.02, 0.008), metal, 0, 0.045, -0.14);
    add(new THREE.BoxGeometry(0.008, 0.018, 0.008), metal, 0, 0.045, 0.06);
    this.pistolMuzzle = new THREE.Object3D(); this.pistolMuzzle.position.set(0, 0.01, -0.2); g.add(this.pistolMuzzle);
    this.pistol = g;
    this.pistol.userData = { mag: 12, reserve: 48, auto: false, rpm: 320, dmg: 26, spread: 0.02, adsSpread: 0.006, reloadTime: 1.4, name: 'P9 SIDEARM' };
  }

  get data() { return this.current === 'rifle' ? this.rifle.userData : this.pistol.userData; }
  get muzzleObj() { return this.current === 'rifle' ? this.rifleMuzzle : this.pistolMuzzle; }

  reset() {
    this.rifle.userData.mag = 30; this.rifle.userData.reserve = 120;
    this.pistol.userData.mag = 12; this.pistol.userData.reserve = 48;
    this.reloadT = 0; this.recoil = 0; this.ads = 0;
  }
  switchTo(w) {
    if (this.current === w || this.reloadT > 0) return;
    this.current = w;
    this.rifle.visible = w === 'rifle';
    this.pistol.visible = w === 'pistol';
    this.audio.reload1();
  }
  startReload() {
    const d = this.data;
    if (this.reloadT > 0 || d.mag >= (this.current === 'rifle' ? 30 : 12) || d.reserve <= 0) return;
    this.reloadT = d.reloadTime; this.reloadDur = d.reloadTime;
    this.audio.reload1();
    setTimeout(() => this.audio.reload2(), d.reloadTime * 450);
  }
  finishReload() {
    const d = this.data;
    const cap = this.current === 'rifle' ? 30 : 12;
    const need = cap - d.mag;
    const take = Math.min(need, d.reserve);
    d.mag += take; d.reserve -= take;
    this.audio.reload3();
  }

  // returns shot info or null
  tryShoot(now, adsTarget) {
    const d = this.data;
    if (this.reloadT > 0) return null;
    if (now < this.nextShot) return null;
    if (d.mag <= 0) { this.audio.dryFire(); this.nextShot = now + 0.25; this.startReload(); return null; }
    d.mag--;
    this.nextShot = now + 60 / d.rpm;
    this.recoil = Math.min(1, this.recoil + 0.55);
    this.recoilRot = Math.min(1, this.recoilRot + 0.7);
    this.audio.shoot ? (this.current === 'rifle' ? this.audio.shoot(0) : this.audio.pistol(0)) : null;
    // muzzle world pos
    this.muzzleObj.getWorldPosition(this.muzzleWorld);
    this.fx.muzzle(this.muzzleWorld, new THREE.Vector3(0, 0, -1).applyQuaternion(this.camera.quaternion), this.current === 'rifle');
    // shell eject
    const right = new THREE.Vector3(1, 0, 0).applyQuaternion(this.camera.quaternion);
    const up = new THREE.Vector3(0, 1, 0).applyQuaternion(this.camera.quaternion);
    const shellPos = this.muzzleWorld.clone().add(new THREE.Vector3(0, 0.05, 0.15).applyQuaternion(this.camera.quaternion));
    this.fx.ejectShell(shellPos, right, up);
    return { dmg: d.dmg, spread: d.spread * (1 - this.ads * 0.85) + this.recoil * 0.012 };
  }

  update(dt, moveSpeed, grounded, mouseDX, mouseDY, adsHeld, now) {
    // ADS lerp
    const adsTarget = adsHeld ? 1 : 0;
    this.ads += (adsTarget - this.ads) * Math.min(1, dt * 11);
    // sway from mouse
    this.swayX += ((-mouseDX * 0.0006) - this.swayX) * Math.min(1, dt * 8);
    this.swayY += ((mouseDY * 0.0006) - this.swayY) * Math.min(1, dt * 8);
    // bob
    const bobAmp = Math.min(1, moveSpeed / 5) * (grounded ? 1 : 0.2) * (1 - this.ads * 0.85);
    this.bobT += dt * (4 + moveSpeed * 1.4);
    const bobX = Math.sin(this.bobT) * 0.014 * bobAmp;
    const bobY = Math.abs(Math.cos(this.bobT)) * 0.011 * bobAmp;
    // recoil decay
    this.recoil *= Math.pow(0.0001, dt); // fast decay
    this.recoilRot *= Math.pow(0.0001, dt);
    // reload anim
    let reloadDip = 0, reloadRot = 0;
    if (this.reloadT > 0) {
      this.reloadT -= dt;
      const p = 1 - this.reloadT / this.reloadDur;
      reloadDip = Math.sin(p * Math.PI) * 0.22;
      reloadRot = Math.sin(p * Math.PI) * 0.5;
      if (this.reloadT <= 0) this.finishReload();
    }
    // hip position vs ADS position
    const hip = new THREE.Vector3(0.24, -0.21, -0.45);
    const adsPos = new THREE.Vector3(0, -0.148, -0.35);
    const pos = hip.lerp(adsPos, this.ads);
    pos.x += bobX + this.swayX; pos.y += -bobY + this.swayY - reloadDip;
    pos.z += this.recoil * 0.06;
    this.group.position.copy(pos);
    this.group.rotation.set(
      this.recoilRot * 0.09 + reloadRot + this.swayY * 0.6,
      this.swayX * 0.8,
      reloadRot * 0.3
    );
    // mag drop anim during reload
    if (this.mag) {
      const p = this.reloadT > 0 ? 1 - this.reloadT / this.reloadDur : 0;
      this.mag.position.y = -0.06 - Math.sin(p * Math.PI) * 0.12;
      this.mag.rotation.x = Math.sin(p * Math.PI) * 0.4;
    }
    // FOV kick handled by player via this.ads / recoil
    return { ads: this.ads, recoil: this.recoil };
  }
}
