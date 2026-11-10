// Enemy AI: patrol -> alert -> engage. Humanoid built from primitives with PBR.
import * as THREE from 'three';
import { pbr } from './textures.js';

export class Enemy {
  constructor(scene, T, spawn, patrol, world, audio, fx, id) {
    this.scene = scene; this.world = world; this.audio = audio; this.fx = fx; this.id = id;
    this.spawn = spawn.clone(); this.patrol = patrol;
    this.patrolIdx = 0;
    this.pos = spawn.clone(); this.pos.y = 0;
    this.yaw = Math.random() * Math.PI * 2;
    this.health = 100; this.alive = true;
    this.state = 'patrol'; // patrol | alert | engage | dead
    this.alertT = 0; this.shootT = 1 + Math.random() * 2;
    this.burstLeft = 0; this.burstT = 0;
    this.walkT = Math.random() * 10;
    this.flinch = 0; this.deathT = 0;
    this.speed = 2.0 + Math.random() * 0.7;
    this.engageSpeed = 3.4 + Math.random() * 0.8;
    this.reaction = 0.5 + Math.random() * 0.5;
    this.accuracy = 0.55 + Math.random() * 0.25;
    this.lastSeen = new THREE.Vector3();
    this.buildModel(T);
    this.group.position.copy(this.pos);
    scene.add(this.group);
    this.headMesh = this.head; this.bodyMesh = this.torso;
  }

  buildModel(T) {
    const g = new THREE.Group();
    const camo = pbr(T.clone(T.camo, 1, 1), { roughness: 0.9, envMapIntensity: 0.35 });
    const skin = new THREE.MeshStandardMaterial({ color: 0xb08860, roughness: 0.7 });
    const vest = new THREE.MeshStandardMaterial({ color: 0x2e2f26, roughness: 0.85 });
    const helmet = new THREE.MeshStandardMaterial({ color: 0x3d402c, roughness: 0.6, metalness: 0.2 });
    const gunMat = new THREE.MeshStandardMaterial({ color: 0x1e2022, roughness: 0.4, metalness: 0.8 });
    const boot = new THREE.MeshStandardMaterial({ color: 0x2a2018, roughness: 0.9 });

    // legs
    const mkLeg = (side) => {
      const hip = new THREE.Group(); hip.position.set(0.13 * side, 0.95, 0);
      const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.075, 0.85, 8), camo);
      leg.position.y = -0.42; leg.castShadow = true; hip.add(leg);
      const bootM = new THREE.Mesh(new THREE.BoxGeometry(0.13, 0.1, 0.26), boot);
      bootM.position.set(0, -0.88, 0.05); hip.add(bootM);
      g.add(hip); return hip;
    };
    this.legL = mkLeg(-1); this.legR = mkLeg(1);
    // torso group
    const torsoG = new THREE.Group(); torsoG.position.y = 0.95; g.add(torsoG);
    this.torsoG = torsoG;
    const torso = new THREE.Mesh(new THREE.BoxGeometry(0.46, 0.62, 0.26), camo);
    torso.position.y = 0.31; torso.castShadow = true; torsoG.add(torso);
    this.torso = torso;
    const vestM = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.42, 0.32), vest);
    vestM.position.y = 0.32; vestM.castShadow = true; torsoG.add(vestM);
    // pouches
    for (let i = 0; i < 3; i++) {
      const p = new THREE.Mesh(new THREE.BoxGeometry(0.11, 0.14, 0.06), vest);
      p.position.set(-0.14 + i * 0.14, 0.22, 0.19); torsoG.add(p);
    }
    // backpack
    const pack = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.44, 0.16), vest);
    pack.position.set(0, 0.36, -0.22); pack.castShadow = true; torsoG.add(pack);
    // head
    const headG = new THREE.Group(); headG.position.y = 0.72; torsoG.add(headG);
    this.headG = headG;
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.14, 12, 10), skin);
    head.castShadow = true; headG.add(head);
    this.head = head;
    const helm = new THREE.Mesh(new THREE.SphereGeometry(0.155, 12, 8, 0, Math.PI * 2, 0, Math.PI * 0.55), helmet);
    helm.position.y = 0.02; helm.castShadow = true; headG.add(helm);
    // goggles
    const gog = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.06, 0.08), new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.2, metalness: 0.5 }));
    gog.position.set(0, 0.02, 0.11); headG.add(gog);
    // arms
    const mkArm = (side) => {
      const sh = new THREE.Group(); sh.position.set(0.28 * side, 0.52, 0);
      const arm = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.06, 0.55, 8), camo);
      arm.position.y = -0.26; arm.castShadow = true; sh.add(arm);
      const hand = new THREE.Mesh(new THREE.SphereGeometry(0.06, 8, 8), skin);
      hand.position.y = -0.56; sh.add(hand);
      torsoG.add(sh); return sh;
    };
    this.armL = mkArm(-1); this.armR = mkArm(1);
    // rifle held forward
    const rifle = new THREE.Group();
    const rb = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.09, 0.55), gunMat); rifle.add(rb);
    const rbar = new THREE.Mesh(new THREE.CylinderGeometry(0.014, 0.014, 0.3, 8), gunMat);
    rbar.rotation.x = Math.PI / 2; rbar.position.z = -0.4; rifle.add(rbar);
    const rmag = new THREE.Mesh(new THREE.BoxGeometry(0.045, 0.16, 0.09), gunMat);
    rmag.position.set(0, -0.1, 0.02); rmag.rotation.x = 0.2; rifle.add(rmag);
    rifle.position.set(0.1, 0.32, 0.3); rifle.rotation.x = 0.12;
    torsoG.add(rifle);
    this.rifle = rifle;
    this.muzzle = new THREE.Object3D(); this.muzzle.position.set(0.1, 0.34, 0.85); torsoG.add(this.muzzle);
    // name tag sprite? small red marker for visibility at distance
    this.group = g;
    this.deathPivot = g;
  }

  get eyePos() { return new THREE.Vector3(this.pos.x, 1.62, this.pos.z); }
  get chestPos() { return new THREE.Vector3(this.pos.x, 1.25, this.pos.z); }
  get headPos() { return new THREE.Vector3(this.pos.x, 1.68, this.pos.z); }

  canSee(playerPos, playerEye) {
    const d = this.pos.distanceTo(playerPos);
    if (d > 55) return false;
    const eye = this.eyePos;
    // FOV check unless very close or already alerted
    const toP = new THREE.Vector3().subVectors(playerPos, this.pos).normalize();
    const fwd = new THREE.Vector3(Math.sin(this.yaw), 0, Math.cos(this.yaw));
    const dot = toP.dot(fwd);
    if (this.state === 'patrol' && dot < 0.15 && d > 4) return false;
    if (this.world.rayBlocked(eye, playerEye)) return false;
    return true;
  }

  takeDamage(amount, isHead, hitPos) {
    if (!this.alive) return 0;
    this.health -= amount;
    this.flinch = 1;
    if (hitPos) this.fx.bloodPuff(hitPos);
    if (this.state === 'patrol') { this.state = 'alert'; this.alertT = this.reaction; }
    if (this.health <= 0) {
      this.alive = false; this.state = 'dead'; this.deathT = 0;
      this.audio.kill();
      return amount;
    }
    return amount;
  }

  update(dt, playerPos, playerEye, onPlayerShoot) {
    if (!this.alive) {
      this.deathT += dt;
      // fall over
      const k = Math.min(1, this.deathT * 2.2);
      this.group.rotation.x = -k * Math.PI / 2 * 0.92;
      this.group.position.y = Math.sin(k * Math.PI / 2) * 0.15;
      if (this.deathT > 6) this.group.position.y = -0.4;
      return;
    }
    this.flinch *= Math.pow(0.001, dt);
    const dist = this.pos.distanceTo(playerPos);
    const sees = this.canSee(playerPos, playerEye);

    if (sees) {
      this.lastSeen.copy(playerPos);
      if (this.state === 'patrol') { this.state = 'alert'; this.alertT = this.reaction; }
      else if (this.state === 'alert') { this.alertT -= dt; if (this.alertT <= 0) this.state = 'engage'; }
    }
    if (onPlayerShoot && dist < 30 && this.state === 'patrol') {
      // heard shot
      this.state = 'alert'; this.alertT = this.reaction; this.lastSeen.copy(playerPos);
    }

    let moveDir = new THREE.Vector3();
    let speed = 0;
    let faceTarget = null;

    if (this.state === 'patrol') {
      const target = this.patrol[this.patrolIdx];
      const d = new THREE.Vector3().subVectors(target, this.pos); d.y = 0;
      if (d.length() < 1.2) this.patrolIdx = (this.patrolIdx + 1) % this.patrol.length;
      else { moveDir.copy(d.normalize()); speed = this.speed; faceTarget = target; }
    } else if (this.state === 'alert') {
      faceTarget = this.lastSeen;
      if (dist > 14) { moveDir.subVectors(this.lastSeen, this.pos).setY(0).normalize(); speed = this.engageSpeed * 0.8; }
    } else if (this.state === 'engage') {
      faceTarget = playerPos;
      // strafe / advance / hold
      const toP = new THREE.Vector3().subVectors(playerPos, this.pos).setY(0).normalize();
      const side = new THREE.Vector3(-toP.z, 0, toP.x);
      const strafeDir = Math.sin(performance.now() * 0.0004 + this.id * 2.1) > 0 ? 1 : -1;
      if (dist > 16) { moveDir.copy(toP); speed = this.engageSpeed; }
      else if (dist < 7) { moveDir.copy(toP).multiplyScalar(-0.6).add(side.clone().multiplyScalar(strafeDir * 0.7)); speed = this.engageSpeed * 0.7; }
      else { moveDir.copy(side).multiplyScalar(strafeDir * 0.6); speed = this.engageSpeed * 0.55; }
      // shooting
      if (sees) {
        this.shootT -= dt;
        if (this.burstLeft > 0) {
          this.burstT -= dt;
          if (this.burstT <= 0) { this.fire(playerPos, playerEye); this.burstLeft--; this.burstT = 0.11; }
        } else if (this.shootT <= 0) {
          this.burstLeft = 3 + ((Math.random() * 3) | 0);
          this.burstT = 0;
          this.shootT = 0.7 + Math.random() * 1.3;
        }
      }
    }

    // move + collide
    if (speed > 0 && moveDir.lengthSq() > 0) {
      moveDir.normalize();
      this.pos.addScaledVector(moveDir, speed * dt);
      const probe = new THREE.Vector3(this.pos.x, 0.9, this.pos.z);
      this.world.collide(probe, 0.4, 1.6);
      this.pos.x = probe.x; this.pos.z = probe.z;
      this.walkT += dt * speed * 2.6;
    }
    // face
    if (faceTarget) {
      const want = Math.atan2(faceTarget.x - this.pos.x, faceTarget.z - this.pos.z);
      let diff = want - this.yaw;
      while (diff > Math.PI) diff -= Math.PI * 2;
      while (diff < -Math.PI) diff += Math.PI * 2;
      this.yaw += diff * Math.min(1, dt * 6);
    }
    this.group.position.set(this.pos.x, 0, this.pos.z);
    this.group.rotation.y = this.yaw;
    // animate limbs
    const walking = speed > 0.1;
    const sw = walking ? Math.sin(this.walkT) * 0.55 : 0;
    this.legL.rotation.x = sw; this.legR.rotation.x = -sw;
    const aiming = this.state === 'engage' || this.state === 'alert';
    this.armR.rotation.x = aiming ? -1.25 : -0.3 + sw * 0.3;
    this.armL.rotation.x = aiming ? -1.05 : -0.3 - sw * 0.3;
    this.armL.rotation.z = aiming ? 0.5 : 0.1;
    this.torsoG.rotation.x = this.flinch * 0.18 + (aiming ? 0.06 : 0);
    this.torsoG.position.y = 0.95 + (walking ? Math.abs(Math.sin(this.walkT)) * 0.03 : 0);
    this.headG.rotation.x = -this.flinch * 0.12;
  }

  fire(playerPos, playerEye) {
    const from = this.muzzle.getWorldPosition(new THREE.Vector3());
    // aim at player chest with error
    const target = playerEye.clone();
    target.y -= 0.25;
    const err = (1 - this.accuracy) * 1.6;
    target.x += (Math.random() - .5) * err;
    target.y += (Math.random() - .5) * err * 0.6;
    target.z += (Math.random() - .5) * err;
    const dir = new THREE.Vector3().subVectors(target, from).normalize();
    const dist = from.distanceTo(playerPos);
    this.audio.shoot(dist);
    this.fx.muzzle(from, dir, false);
    // raycast vs player: simple sphere check + world block
    const blocked = this.world.rayBlocked(from, target);
    // hit chance based on distance & player movement handled by caller via return
    const hitDist = from.distanceTo(target);
    this.fx.tracer(from, from.clone().add(dir.clone().multiplyScalar(Math.min(hitDist, 60))));
    this.lastShot = { dir, from, blocked, dist, target };
    return this.lastShot;
  }
}

export class EnemyManager {
  constructor(scene, T, world, audio, fx) {
    this.enemies = [];
    world.enemySpawns.forEach((s, i) => {
      this.enemies.push(new Enemy(scene, T, s, world.patrols[i % world.patrols.length], world, audio, fx, i));
    });
  }
  get aliveCount() { return this.enemies.filter(e => e.alive).length; }
  update(dt, playerPos, playerEye, onPlayerShoot, playerSpeed) {
    const shots = [];
    for (const e of this.enemies) {
      const before = e.burstLeft;
      e.update(dt, playerPos, playerEye, onPlayerShoot);
      // fire() was called inside update; we need to capture — instead Enemy.fire returns via callback hack:
      // We detect muzzle flash by checking fx? Simpler: Enemy stores lastShot.
      if (e.lastShot) { shots.push(e.lastShot); e.lastShot = null; }
    }
    return shots;
  }
  reset() {
    for (const e of this.enemies) {
      e.pos.copy(e.spawn); e.health = 100; e.alive = true; e.state = 'patrol';
      e.patrolIdx = 0; e.deathT = 0; e.flinch = 0;
      e.group.rotation.set(0, 0, 0); e.group.position.copy(e.pos);
      e.group.visible = true;
    }
  }
}
