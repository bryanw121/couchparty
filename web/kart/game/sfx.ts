import { soundEngine } from './audio';

// Race sound effects, synthesized live (no files). Voices are little formant-synth
// "yahoo!" / "whoa!" calls, pitched per driver so you can tell who is cheering.

const VOICE: Record<string, number> = { cat: 330, bunny: 400, crown: 210, horns: 190, bow: 370, antenna: 290, cap: 300, bear: 150 };
const VOWEL: Record<string, [number, number, number]> = {
  a: [800, 1150, 2800], o: [450, 800, 2830], u: [325, 700, 2530], e: [400, 2000, 2550], i: [300, 2300, 3000], h: [600, 1400, 2600],
};
let noiseBuf: AudioBuffer | null = null;
let lastBeep = 0;

function out() {
  const o = soundEngine.output();
  if (!o || o.ctx.state !== 'running') return null;
  return o;
}
function noise(ctx: AudioContext) {
  if (!noiseBuf || noiseBuf.sampleRate !== ctx.sampleRate) {
    noiseBuf = ctx.createBuffer(1, ctx.sampleRate, ctx.sampleRate);
    const d = noiseBuf.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
  }
  return noiseBuf;
}
function tone(type: OscillatorType, f0: number, f1: number, at: number, len: number, vol: number, lp = 0) {
  const o = out(); if (!o) return;
  const c = o.ctx, t = c.currentTime + at;
  const osc = c.createOscillator(), g = c.createGain();
  osc.type = type; osc.frequency.setValueAtTime(f0, t); osc.frequency.exponentialRampToValueAtTime(Math.max(20, f1), t + len);
  g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + 0.012); g.gain.exponentialRampToValueAtTime(0.0001, t + len);
  let node: AudioNode = osc;
  if (lp) { const f = c.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = lp; osc.connect(f); node = f; }
  node.connect(g).connect(o.out); osc.start(t); osc.stop(t + len + 0.05);
}
function hiss(at: number, len: number, vol: number, type: BiquadFilterType, f0: number, f1: number, q = 1) {
  const o = out(); if (!o) return;
  const c = o.ctx, t = c.currentTime + at;
  const s = c.createBufferSource(), f = c.createBiquadFilter(), g = c.createGain();
  s.buffer = noise(c); f.type = type; f.Q.value = q;
  f.frequency.setValueAtTime(f0, t); f.frequency.exponentialRampToValueAtTime(Math.max(30, f1), t + len);
  g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + 0.01); g.gain.exponentialRampToValueAtTime(0.0001, t + len);
  s.connect(f).connect(g).connect(o.out); s.start(t, Math.random() * 0.5); s.stop(t + len + 0.05);
}
// One voiced syllable: pitch glide f0→f1 through vowel formants v0→v1
function syllable(at: number, len: number, f0: number, f1: number, v0: string, v1: string, vol: number) {
  const o = out(); if (!o) return;
  const c = o.ctx, t = c.currentTime + at;
  const src = c.createOscillator(), vib = c.createOscillator(), vibG = c.createGain(), g = c.createGain();
  src.type = 'sawtooth';
  src.frequency.setValueAtTime(f0, t); src.frequency.exponentialRampToValueAtTime(f1, t + len);
  vib.frequency.value = 6; vibG.gain.value = f0 * 0.025; vib.connect(vibG).connect(src.frequency);
  g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + 0.03);
  g.gain.setValueAtTime(vol, t + len * 0.7); g.gain.exponentialRampToValueAtTime(0.0001, t + len);
  g.connect(o.out);
  const A = VOWEL[v0], B = VOWEL[v1];
  A.forEach((fa, i) => {
    const bp = c.createBiquadFilter(), bg = c.createGain();
    bp.type = 'bandpass'; bp.Q.value = 9;
    bp.frequency.setValueAtTime(fa, t); bp.frequency.linearRampToValueAtTime(B[i], t + len * 0.6);
    bg.gain.value = [1, 0.6, 0.25][i] * 3;
    src.connect(bp).connect(bg).connect(g);
  });
  src.start(t); vib.start(t); src.stop(t + len + 0.05); vib.stop(t + len + 0.05);
}
const pitch = (topper?: string) => (VOICE[topper || 'cap'] || 280) * (0.97 + Math.random() * 0.06);

export const sfx = {
  // Your item landed on someone: "ya-hoo!"
  cheer(topper?: string) {
    const p = pitch(topper);
    syllable(0, 0.16, p * 1.1, p * 1.35, 'i', 'a', 0.22);
    syllable(0.17, 0.42, p * 1.6, p * 1.25, 'h', 'u', 0.24);
    [0, 4, 7, 12].forEach((s, i) => tone('triangle', 880 * Math.pow(2, s / 12), 880 * Math.pow(2, s / 12), 0.08 + i * 0.06, 0.18, 0.05));
  },
  // You got hit: crash, then "whoa-oh!" and a spin-out slide whistle down
  ouch(topper?: string) {
    const p = pitch(topper);
    hiss(0, 0.35, 0.35, 'lowpass', 1800, 200);
    tone('sine', 160, 40, 0, 0.3, 0.45);
    syllable(0.1, 0.22, p * 1.4, p * 1.2, 'o', 'a', 0.2);
    syllable(0.33, 0.4, p * 1.15, p * 0.7, 'o', 'u', 0.2);
    tone('sine', 1400, 300, 0.15, 0.7, 0.07);
  },
  // Throwing / dropping / firing an item
  throwItem(kind?: string, back?: boolean) {
    if (kind === 'banana' || kind === 'fake') { if (back) { tone('sine', 420, 140, 0, 0.14, 0.18); hiss(0.02, 0.08, 0.08, 'bandpass', 900, 500, 2); } else { hiss(0, 0.25, 0.12, 'bandpass', 600, 2400, 2); tone('sine', 300, 700, 0, 0.22, 0.1); } return; }
    if (kind === 'bomb') { hiss(0, 0.6, 0.08, 'highpass', 3000, 5000, 1); tone('square', 220, 330, 0, 0.12, 0.05, 1200); return; }
    if (kind === 'red' || kind === 'blue') { hiss(0, 0.45, 0.16, 'bandpass', 500, 2600, 1.5); tone('sawtooth', 140, 420, 0, 0.45, 0.06, 1400); return; }
    hiss(0, 0.2, 0.14, 'bandpass', 900, 2600, 2); tone('triangle', 500, 900, 0, 0.12, 0.08); // bouncer
  },
  pickup() { [0, 3, 7, 10, 14].forEach((s, i) => tone('square', 660 * Math.pow(2, s / 12), 660 * Math.pow(2, s / 12), i * 0.035, 0.08, 0.035, 3000)); },
  block() { tone('square', 1400, 1100, 0, 0.12, 0.08, 4000); tone('triangle', 2100, 2100, 0.02, 0.2, 0.06); hiss(0, 0.1, 0.1, 'highpass', 3000, 3000, 1); },
  bump() { tone('sine', 220, 70, 0, 0.16, 0.35); tone('square', 180, 120, 0, 0.08, 0.06, 900); },
  wall() { tone('sine', 120, 45, 0, 0.2, 0.45); hiss(0, 0.18, 0.18, 'bandpass', 700, 300, 1.5); tone('triangle', 900, 860, 0, 0.18, 0.05); },
  boom() { tone('sine', 90, 30, 0, 0.7, 0.6); hiss(0, 0.9, 0.45, 'lowpass', 2500, 120); },
  zap() { for (let i = 0; i < 5; i++) hiss(i * 0.05, 0.08, 0.2, 'bandpass', 3000 - i * 300, 1200, 6); tone('sawtooth', 1200, 80, 0, 0.6, 0.08, 3000); },
  horn() { tone('square', 233, 233, 0, 0.5, 0.12, 1600); tone('square', 294, 294, 0, 0.5, 0.1, 1600); },
  splat() { hiss(0, 0.25, 0.3, 'lowpass', 1400, 200); tone('sine', 300, 90, 0, 0.18, 0.2); },
  steal() { hiss(0, 0.3, 0.15, 'bandpass', 2400, 600, 3); tone('triangle', 900, 1600, 0.05, 0.15, 0.06); },
  star() { [0, 4, 7, 11, 14, 19].forEach((s, i) => tone('triangle', 784 * Math.pow(2, s / 12), 784 * Math.pow(2, s / 12), i * 0.05, 0.2, 0.05)); },
  driftLevel(level: number) { const f = [0, 880, 1175, 1568][level] || 1568; tone('triangle', f, f, 0, 0.12, 0.07); tone('triangle', f * 1.5, f * 1.5, 0.05, 0.12, 0.05); },
  overtake() { tone('square', 784, 784, 0, 0.07, 0.04, 3000); tone('square', 1175, 1175, 0.07, 0.12, 0.04, 3000); },
  // Reversing: "beep... beep..." while backing up
  reverse() {
    const o = out(); if (!o) return;
    const now = o.ctx.currentTime;
    if (now - lastBeep < 0.6) return;
    lastBeep = now;
    tone('square', 1046, 1046, 0, 0.22, 0.05, 2500);
  },
};
