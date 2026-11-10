// FPS player controller: move, jump, crouch, sprint, headbob, camera shake
import * as THREE from 'three';

export class Player {
  constructor(camera, world, audio) {
    this.camera = camera; this.world = world; this.audio = audio;
    this.pos = new THREE.Vector3(0, 1.7, 33); // eye pos
    this.vel = new THREE.Vector3();
    this.yaw = Math.PI; // facing -Z? yaw 0 = -Z in three? we use manual
    this.pitch = 0;
    this.yaw = 0; this.pitch = 0;
    // Note: forward = (sin(yaw)*-1?) — we compute from yaw/pitch directly
    this.health = 100; this.armor = 50;
    this.onGround = true;
    this.crouch = false;
    this.sprint = false;
    this.keys = {};
    this.sens = 1.0; this.baseFov = 90;
    this.bobT = 0; this.stepT = 0;
    this.shake = 0; this.shakeEnabled = true;
    this.dead = false;
    this.eyeH = 1.7; this.eyeCrouch = 1.15;
    this.radius = 0.42;
    this.mouseDX = 0; this.mouseDY = 0;
    this.fovKick = 0;
  }
  reset() {
    this.pos.set(0, 1.7, 33);
    this.vel.set(0, 0, 0);
    this.yaw = 0; this.pitch = 0;
    this.health = 100; this.armor = 50; this.dead = false;
    this.crouch = false; this.shake = 0;
  }
  forwardVec() {
    return new THREE.Vector3(-Math.sin(this.yaw) * Math.cos(this.pitch), Math.sin(this.pitch), -Math.cos(this.yaw) * Math.cos(this.pitch));
    // yaw=0 -> (0, sinP, -1) looking -Z. Good: spawn faces -Z (north).
  }
  rightVec() {
    return new THREE.Vector3(Math.cos(this.yaw), 0, -Math.sin(this.yaw));
  }
  look(dir, dt) {
    const s = 0.0022 * this.sens;
    this.yaw -= dir.x * s;
    this.pitch -= dir.y * s;
    this.pitch = Math.max(-1.45, Math.min(1.45, this.pitch));
    this.mouseDX = dir.x; this.mouseDY = dir.y;
  }
  takeDamage(amount, fromPos) {
    if (this.dead) return false;
    let dmg = amount;
    if (this.armor > 0) {
      const absorbed = Math.min(this.armor, dmg * 0.5);
      this.armor -= absorbed; dmg -= absorbed;
    }
    this.health -= dmg;
    this.shake = Math.min(1, this.shake + 0.45);
    this.audio.hurt();
    if (this.health <= 0) { this.health = 0; this.dead = true; return true; }
    return false;
  }
  update(dt, ads) {
    if (this.dead) return;
    const k = this.keys;
    const fwd = new THREE.Vector3(-Math.sin(this.yaw), 0, -Math.cos(this.yaw));
    const right = new THREE.Vector3(Math.cos(this.yaw), 0, -Math.sin(this.yaw));
    const wish = new THREE.Vector3();
    if (k['KeyW'] || k['ArrowUp']) wish.add(fwd);
    if (k['KeyS'] || k['ArrowDown']) wish.sub(fwd);
    if (k['KeyD'] || k['ArrowRight']) wish.add(right);
    if (k['KeyA'] || k['ArrowLeft']) wish.sub(right);
    const moving = wish.lengthSq() > 0;
    if (moving) wish.normalize();

    this.sprint = (k['ShiftLeft'] || k['ShiftRight']) && !this.crouch && ads < 0.3 && wish.dot(fwd) > 0.3;
    this.crouch = !!k['KeyC'] || !!k['ControlLeft'];

    let speed = this.crouch ? 2.2 : this.sprint ? 7.2 : 4.6;
    speed *= (1 - ads * 0.45);
    if (!this.onGround) speed *= 0.6;

    // accel
    const accel = this.onGround ? 14 : 3;
    this.vel.x += (wish.x * speed - this.vel.x) * Math.min(1, accel * dt);
    this.vel.z += (wish.z * speed - this.vel.z) * Math.min(1, accel * dt);

    // jump / gravity (eye pos; ground = 0, eye min = eyeH)
    const targetEye = this.crouch ? this.eyeCrouch : this.eyeH;
    if ((k['Space']) && this.onGround) {
      this.vel.y = 5.2; this.onGround = false; this.audio.jump();
    }
    this.vel.y -= 13.5 * dt;
    this.pos.y += this.vel.y * dt;
    if (this.pos.y <= targetEye) {
      if (!this.onGround && this.vel.y < -3) this.audio.land();
      this.pos.y = targetEye; this.vel.y = 0; this.onGround = true;
    } else if (this.pos.y > targetEye + 0.05) this.onGround = false;

    this.pos.x += this.vel.x * dt;
    this.pos.z += this.vel.z * dt;
    // collide (use feet pos for collider y-check: feet = pos.y - eyeH)
    const feet = this.pos.y - this.eyeH;
    const probe = new THREE.Vector3(this.pos.x, feet + 0.9, this.pos.z);
    this.world.collide(probe, this.radius, 1.6);
    this.pos.x = probe.x; this.pos.z = probe.z;

    // headbob + steps
    const hSpeed = Math.hypot(this.vel.x, this.vel.z);
    if (hSpeed > 0.5 && this.onGround) {
      this.bobT += dt * hSpeed * 1.6;
      this.stepT += dt * hSpeed;
      if (this.stepT > 2.4) { this.stepT = 0; this.audio.step(this.sprint); }
    }
    const bobY = Math.sin(this.bobT * 2) * 0.028 * Math.min(1, hSpeed / 4) * (this.onGround ? 1 : 0);
    const bobX = Math.cos(this.bobT) * 0.02 * Math.min(1, hSpeed / 4) * (this.onGround ? 1 : 0);

    // camera shake decay
    this.shake *= Math.pow(0.001, dt);
    const shX = (Math.random() - .5) * this.shake * 0.03;
    const shY = (Math.random() - .5) * this.shake * 0.03;

    // FOV: sprint widen, ADS narrow, recoil kick
    const targetFov = this.baseFov + (this.sprint ? 6 : 0) - ads * 18 + this.fovKick;
    this.fovKick *= Math.pow(0.0001, dt);
    if (Math.abs(this.camera.fov - targetFov) > 0.05) {
      this.camera.fov += (targetFov - this.camera.fov) * Math.min(1, dt * 10);
      this.camera.updateProjectionMatrix();
    }

    this.camera.position.set(this.pos.x + bobX * Math.cos(this.yaw), this.pos.y + bobY, this.pos.z - bobX * Math.sin(this.yaw));
    // strafe lean roll
    const latVel = this.vel.x * Math.cos(this.yaw) + this.vel.z * -Math.sin(this.yaw);
    const roll = THREE.MathUtils.clamp(-latVel * 0.012, -0.05, 0.05);
    // build rotation from yaw/pitch
    const e = new THREE.Euler(this.pitch + shY, this.yaw + shX, roll, 'YXZ');
    this.camera.quaternion.setFromEuler(e);
    this.mouseDX = 0; this.mouseDY = 0;
  }
  get speed2D() { return Math.hypot(this.vel.x, this.vel.z); }
}
