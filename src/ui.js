// HUD + menus
export class UI {
  constructor() {
    this.$ = (id) => document.getElementById(id);
    this.hud = this.$('hud');
    this.killfeed = this.$('killfeed');
    this.centerMsgT = 0;
    this.radar = this.$('radar').getContext('2d');
    this.compassStrip = this.$('compassStrip');
    this.buildCompass();
    this.hitT = 0;
    this.dmgT = 0;
  }
  buildCompass() {
    const dirs = ['K', 'KD', 'D', 'GD', 'G', 'GB', 'B', 'GBB', 'BAT', 'BB', 'BKB', 'KB'];
    let html = '';
    // 360 degrees, each 30deg labeled; repeat 3x for wrap
    const labels = { 0: 'K', 45: 'KD', 90: 'D', 135: 'GD', 180: 'G', 225: 'GB', 270: 'B', 315: 'GBB' };
    for (let rep = 0; rep < 3; rep++) {
      for (let a = 0; a < 360; a += 15) {
        const lab = labels[a] || (a % 45 === 0 ? '' : '·');
        html += `<span style="display:inline-block;width:22px;text-align:center">${lab}</span>`;
      }
    }
    this.compassStrip.innerHTML = html;
    this.compassStrip.style.width = 'max-content';
  }
  show(id) { this.$(id).classList.remove('hidden'); }
  hide(id) { this.$(id).classList.add('hidden'); }
  setHUDVisible(v) { this.hud.classList.toggle('hidden', !v); }

  updateHUD(player, weapon, enemiesAlive, timeLeft, yaw) {
    this.$('hpNum').textContent = Math.ceil(player.health);
    const hp = this.$('hpFill');
    hp.style.width = Math.max(0, player.health) + '%';
    hp.classList.toggle('hurt', player.health < 35);
    this.$('armorFill').style.width = Math.max(0, player.armor) + '%';
    const d = weapon.data;
    this.$('ammoMag').textContent = d.mag;
    this.$('ammoRes').textContent = d.reserve;
    this.$('ammo').classList.toggle('low', d.mag <= 6);
    this.$('weaponName').textContent = d.name;
    this.$('fireMode').textContent = d.auto ? 'OTO' : 'YARI-OTO';
    this.$('reloadHint').classList.toggle('hidden', !(d.mag <= 6 && d.reserve > 0));
    this.$('objText').textContent = `${enemiesAlive} düşmanı etkisiz hale getir`;
    const t = Math.max(0, timeLeft);
    const mm = String(Math.floor(t / 60)).padStart(2, '0');
    const ss = String(Math.floor(t % 60)).padStart(2, '0');
    const timer = this.$('timer');
    timer.textContent = `${mm}:${ss}`;
    timer.classList.toggle('low', t < 30);
    // compass: yaw 0 = north(-Z). degrees clockwise from north
    const deg = ((-yaw * 180 / Math.PI) % 360 + 360) % 360;
    // strip: each 15deg = 22px, total width per 360 = 24*22=528
    const offset = 170 - (deg / 15) * 22 - 528; // center copy
    this.compassStrip.style.transform = `translateX(${offset}px)`;
  }

  hitmarker(kill = false) {
    const h = this.$('hitmarker');
    h.textContent = kill ? '✕' : '✕';
    h.classList.toggle('kill', kill);
    h.style.opacity = 1;
    this.hitT = 0.22;
  }
  damageFlash() { this.dmgT = 0.5; }
  centerMsg(text, dur = 2.2) {
    const el = this.$('centerMsg');
    el.textContent = text; el.style.opacity = 1;
    this.centerMsgT = dur;
  }
  killBanner(text) {
    const el = this.$('killBanner');
    el.textContent = text; el.style.opacity = 1;
    setTimeout(() => el.style.opacity = 0, 1400);
  }
  addKillfeed(text) {
    const div = document.createElement('div');
    div.textContent = text;
    this.killfeed.prepend(div);
    setTimeout(() => { div.style.opacity = 0; setTimeout(() => div.remove(), 400); }, 3800);
    while (this.killfeed.children.length > 5) this.killfeed.lastChild.remove();
  }
  drawRadar(player, enemies) {
    const c = this.radar;
    const S = 140, C = S / 2, R = 62;
    c.clearRect(0, 0, S, S);
    c.fillStyle = 'rgba(10,14,8,0.85)';
    c.beginPath(); c.arc(C, C, R, 0, 7); c.fill();
    c.strokeStyle = 'rgba(245,166,35,0.5)'; c.lineWidth = 1.5;
    c.beginPath(); c.arc(C, C, R, 0, 7); c.stroke();
    c.beginPath(); c.arc(C, C, R * 0.55, 0, 7); c.stroke();
    c.beginPath(); c.moveTo(C, C - R); c.lineTo(C, C + R); c.moveTo(C - R, C); c.lineTo(C + R, C); c.stroke();
    // player heading tick
    c.fillStyle = '#ffd27a';
    c.beginPath(); c.moveTo(C, C - 8); c.lineTo(C - 5, C + 5); c.lineTo(C + 5, C + 5); c.fill();
    const range = 45; // meters shown
    const cos = Math.cos(player.yaw), sin = Math.sin(player.yaw);
    for (const e of enemies) {
      if (!e.alive) continue;
      const dx = e.pos.x - player.pos.x, dz = e.pos.z - player.pos.z;
      // rotate into player space: forward = (-sin yaw, -cos yaw)
      const fx = -sin, fz = -cos;
      const rx = cos, rz = -sin; // right = (cos, -sin)? check: right=(cos yaw, -sin yaw) in xz
      const fwdD = dx * fx + dz * fz;
      const rightD = dx * rx + dz * rz;
      const rx2 = rightD / range * R, ry2 = -fwdD / range * R;
      if (Math.hypot(rx2, ry2) > R - 4) continue;
      const alert = e.state !== 'patrol';
      c.fillStyle = alert ? '#ff3b1f' : '#ff9a3c';
      c.beginPath(); c.arc(C + rx2, C + ry2, alert ? 4 : 3, 0, 7); c.fill();
    }
  }
  update(dt) {
    if (this.hitT > 0) { this.hitT -= dt; if (this.hitT <= 0) this.$('hitmarker').style.opacity = 0; }
    if (this.dmgT > 0) { this.dmgT -= dt; this.$('dmgVignette').style.opacity = Math.max(0, this.dmgT * 1.4); }
    if (this.centerMsgT > 0) { this.centerMsgT -= dt; if (this.centerMsgT <= 0) this.$('centerMsg').style.opacity = 0; }
  }
  showEnd(win, stats) {
    const end = this.$('end');
    end.classList.remove('hidden');
    end.classList.toggle('win', win); end.classList.toggle('lose', !win);
    this.$('endKicker').textContent = win ? 'GÖREV TAMAMLANDI' : 'GÖREV BAŞARISIZ';
    this.$('endTitle').textContent = win ? 'ZAFER' : 'YENİLDİ';
    this.$('endSub').textContent = win ? 'Saltline bileşkesi temizlendi. Bölge güvenli.' : 'Operasyon yarıda kaldı. Tekrar dene, komando.';
    const rows = [
      [stats.kills, 'LEŞ'], [stats.shots, 'ATIŞ'], [stats.hits, 'İSABET'],
      [stats.accuracy + '%', 'İSABET ORANI'], [stats.time, 'SÜRE'], [stats.headshots, 'KAFA VURUŞU'],
    ];
    this.$('endStats').innerHTML = rows.map(([v, l]) => `<div><b>${v}</b><span>${l}</span></div>`).join('');
  }
}
