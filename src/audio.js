// Procedural WebAudio — no external files
export class GameAudio {
  constructor() {
    this.ctx = null; this.master = null; this.muted = false;
    this.noiseBuf = null;
  }
  init() {
    if (this.ctx) return;
    const AC = window.AudioContext || window.webkitAudioContext;
    this.ctx = new AC();
    this.master = this.ctx.createGain(); this.master.gain.value = 0.55;
    this.master.connect(this.ctx.destination);
    const len = this.ctx.sampleRate * 2;
    this.noiseBuf = this.ctx.createBuffer(1, len, this.ctx.sampleRate);
    const d = this.noiseBuf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    this.startAmbience();
  }
  resume() { if (this.ctx && this.ctx.state === 'suspended') this.ctx.resume(); }
  setMuted(m) { this.muted = m; if (this.master) this.master.gain.value = m ? 0 : 0.55; }

  noise(dur, { type = 'bandpass', freq = 1000, q = 1, gain = 0.5, sweepTo = null, delay = 0 } = {}) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime + delay;
    const src = this.ctx.createBufferSource(); src.buffer = this.noiseBuf; src.loop = true;
    src.playbackRate.value = 0.8 + Math.random() * 0.4;
    const f = this.ctx.createBiquadFilter(); f.type = type; f.frequency.setValueAtTime(freq, t); f.Q.value = q;
    if (sweepTo) f.frequency.exponentialRampToValueAtTime(sweepTo, t + dur);
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(gain, t); g.gain.exponentialRampToValueAtTime(0.001, t + dur);
    src.connect(f); f.connect(g); g.connect(this.master);
    src.start(t); src.stop(t + dur + 0.05);
  }
  tone(freq, dur, { type = 'sine', gain = 0.3, sweepTo = null, delay = 0 } = {}) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime + delay;
    const o = this.ctx.createOscillator(); o.type = type; o.frequency.setValueAtTime(freq, t);
    if (sweepTo) o.frequency.exponentialRampToValueAtTime(sweepTo, t + dur);
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(gain, t); g.gain.exponentialRampToValueAtTime(0.001, t + dur);
    o.connect(g); g.connect(this.master); o.start(t); o.stop(t + dur + 0.05);
  }

  shoot(dist = 0) {
    const vol = Math.max(0.12, 0.9 - dist * 0.03);
    this.noise(0.09, { type: 'highpass', freq: 900, gain: vol * 0.9 });
    this.noise(0.16, { type: 'lowpass', freq: 900, gain: vol * 0.8, sweepTo: 120 });
    this.tone(140, 0.12, { type: 'triangle', gain: vol * 0.5, sweepTo: 45 });
    this.noise(0.05, { type: 'bandpass', freq: 3200, q: 2, gain: vol * 0.4, delay: 0.01 });
  }
  pistol(dist = 0) {
    const vol = Math.max(0.1, 0.7 - dist * 0.03);
    this.noise(0.07, { type: 'highpass', freq: 1100, gain: vol * 0.8 });
    this.tone(180, 0.09, { type: 'triangle', gain: vol * 0.4, sweepTo: 60 });
  }
  dryFire() { this.tone(2200, 0.03, { type: 'square', gain: 0.12 }); this.noise(0.03, { freq: 3000, gain: 0.1 }); }
  reload1() { this.noise(0.05, { freq: 1800, gain: 0.25 }); this.tone(900, 0.04, { type: 'square', gain: 0.08 }); }
  reload2() { this.noise(0.05, { freq: 1200, gain: 0.3 }); this.tone(600, 0.05, { type: 'square', gain: 0.1 }); }
  reload3() { this.noise(0.06, { freq: 2400, gain: 0.35 }); this.tone(1400, 0.05, { type: 'square', gain: 0.12 }); }
  hit() { this.tone(1800, 0.05, { type: 'sine', gain: 0.25 }); }
  headshot() { this.tone(2400, 0.07, { type: 'sine', gain: 0.3 }); this.tone(3200, 0.09, { type: 'sine', gain: 0.2, delay: 0.05 }); }
  kill() { this.tone(700, 0.12, { type: 'sawtooth', gain: 0.15, sweepTo: 200 }); }
  hurt() { this.noise(0.12, { type: 'lowpass', freq: 500, gain: 0.4 }); this.tone(110, 0.15, { type: 'sawtooth', gain: 0.2, sweepTo: 60 }); }
  step(run = false) { this.noise(run ? 0.09 : 0.07, { type: 'lowpass', freq: 400 + Math.random() * 200, gain: run ? 0.16 : 0.1 }); }
  jump() { this.noise(0.08, { freq: 600, gain: 0.08 }); }
  land() { this.noise(0.1, { type: 'lowpass', freq: 300, gain: 0.25 }); }
  impact() { this.noise(0.05, { freq: 2000 + Math.random() * 1500, gain: 0.12 }); }
  uiClick() { this.tone(1200, 0.04, { type: 'sine', gain: 0.12 }); }
  win() { [523, 659, 784, 1047].forEach((f, i) => this.tone(f, 0.35, { type: 'triangle', gain: 0.2, delay: i * 0.14 })); }
  lose() { [392, 330, 262, 196].forEach((f, i) => this.tone(f, 0.4, { type: 'triangle', gain: 0.2, delay: i * 0.16 })); }
  startAmbience() {
    if (!this.ctx) return;
    const src = this.ctx.createBufferSource(); src.buffer = this.noiseBuf; src.loop = true;
    const f = this.ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 380;
    const g = this.ctx.createGain(); g.gain.value = 0.05;
    const lfo = this.ctx.createOscillator(); lfo.frequency.value = 0.13;
    const lg = this.ctx.createGain(); lg.gain.value = 0.025;
    lfo.connect(lg); lg.connect(g.gain);
    src.connect(f); f.connect(g); g.connect(this.master);
    src.start(); lfo.start();
    // distant birds / insects chirps
    const chirp = () => {
      if (!this.muted) { this.tone(2800 + Math.random() * 1200, 0.08, { type: 'sine', gain: 0.015 }); }
      setTimeout(chirp, 1800 + Math.random() * 4000);
    };
    setTimeout(chirp, 2000);
  }
}
