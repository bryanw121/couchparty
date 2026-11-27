import { soundEngine } from './audio';

// Original course music, synthesized live with Web Audio: a little step sequencer with
// drums, bass, an arpeggio and a lead line. Melodies are written as 16th-note steps:
// '.' rest, '-' hold, 1-7 scale degree, a-g the same degrees an octave up.

interface Song {
  bpm: number; root: number; scale: number[]; chords: number[];
  lead: string; leadWave: OscillatorType; padWave: OscillatorType;
  kick: number[]; snare: number[]; hat: number[]; swing?: number;
}
const MAJOR = [0, 2, 4, 5, 7, 9, 11], MINOR = [0, 2, 3, 5, 7, 8, 10], MIXO = [0, 2, 4, 5, 7, 9, 10];
const SONGS: Record<string, Song> = {
  meadow: {
    bpm: 132, root: 60, scale: MAJOR, chords: [1, 6, 4, 5], leadWave: 'square', padWave: 'triangle',
    lead: '5-3-5-6-5-3-1---' + '2-3-4-3-2---5---' + '6-5-6-a-6-5-3---' + '4-3-2-3-1-------',
    kick: [0, 6, 8], snare: [4, 12], hat: [2, 6, 10, 14],
  },
  sunset: {
    bpm: 116, root: 62, scale: MIXO, chords: [1, 4, 6, 5], leadWave: 'square', padWave: 'sine', swing: 0.12,
    lead: '3--5--6-5-3-2---' + '1--2--3-5---3---' + '6--5--3-2-1-2---' + '3-------5-------',
    kick: [0, 10], snare: [4, 12], hat: [0, 3, 6, 8, 11, 14],
  },
  frosty: {
    bpm: 140, root: 57, scale: MINOR, chords: [1, 6, 3, 7], leadWave: 'triangle', padWave: 'triangle',
    lead: '1-3-5-a-b-a-5-3-' + '4---3---2---5---' + '1-3-5-a-c-b-a-5-' + '6-5-4-2-1-------',
    kick: [0, 8, 11], snare: [4, 12], hat: [2, 6, 10, 14],
  },
  neon: {
    bpm: 128, root: 52, scale: MINOR, chords: [1, 6, 4, 5], leadWave: 'sawtooth', padWave: 'sawtooth',
    lead: '1---5---6-5-3---' + '4---3---2-1-2---' + '1---5---a---7---' + '6-5-4-3-2-------',
    kick: [0, 4, 8, 12], snare: [4, 12], hat: [2, 6, 10, 14],
  },
};

const hz = (midi: number) => 440 * Math.pow(2, (midi - 69) / 12);

export class CourseMusic {
  private song: Song;
  private ctx: AudioContext | null = null;
  private bus: GainNode | null = null;
  private timer: any = null;
  private step = 0;
  private nextAt = 0;
  private tempo = 1;
  private noise: AudioBuffer | null = null;

  constructor(course: string) { this.song = SONGS[course] || SONGS.meadow; }

  start() {
    const o = soundEngine.output();
    if (!o || this.timer) return;
    this.ctx = o.ctx;
    this.bus = this.ctx.createGain();
    this.bus.gain.value = 0.32;
    this.bus.connect(o.out);
    const n = this.ctx.createBuffer(1, this.ctx.sampleRate * 0.3, this.ctx.sampleRate);
    const d = n.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    this.noise = n;
    this.nextAt = this.ctx.currentTime + 0.1;
    this.timer = setInterval(() => this.pump(), 25);
  }
  // Final lap: a quick rising sting, then everything 20% faster
  finalLap() {
    if (!this.ctx || !this.bus) return;
    const t = this.ctx.currentTime + 0.05;
    [0, 4, 7, 12].forEach((s, i) => this.tone(hz(this.song.root + 12 + s), t + i * 0.09, 0.12, 'square', 0.16));
    this.tempo = 1.2;
  }
  stop() {
    clearInterval(this.timer); this.timer = null;
    if (this.bus && this.ctx) { const b = this.bus; b.gain.setTargetAtTime(0, this.ctx.currentTime, 0.2); setTimeout(() => b.disconnect(), 1200); }
    this.bus = null;
  }

  private pump() {
    if (!this.ctx) return;
    const stepDur = 60 / (this.song.bpm * this.tempo) / 4;
    while (this.nextAt < this.ctx.currentTime + 0.15) {
      const sw = this.song.swing && this.step % 2 ? stepDur * this.song.swing : 0;
      this.playStep(this.step, this.nextAt + sw, stepDur);
      this.nextAt += stepDur;
      this.step = (this.step + 1) % 64;
    }
  }

  private degree(d: number, octave = 0) {
    const sc = this.song.scale, i = d - 1;
    return this.song.root + sc[((i % 7) + 7) % 7] + 12 * (Math.floor(i / 7) + octave);
  }
  private chordNotes(bar: number) {
    const r = this.song.chords[bar % this.song.chords.length];
    return [this.degree(r), this.degree(r + 2), this.degree(r + 4)];
  }

  private playStep(step: number, t: number, dur: number) {
    const S = this.song, inBar = step % 16, bar = Math.floor(step / 16);
    const chord = this.chordNotes(bar);
    if (S.kick.includes(inBar)) this.kick(t);
    if (S.snare.includes(inBar)) this.snare(t);
    if (S.hat.includes(inBar)) this.hat(t);
    // bass: root on 8ths, fifth on the off-beat pushes
    if (inBar % 2 === 0) this.tone(hz(chord[0] - 24 + (inBar % 8 === 6 ? 7 : 0)), t, dur * 1.8, 'triangle', 0.32);
    // arpeggio
    this.tone(hz(chord[step % 3] + (Math.floor(step / 3) % 2 ? 12 : 0)), t, dur * 0.9, S.padWave, 0.05);
    // lead
    const ch = S.lead[step];
    if (ch && ch !== '.' && ch !== '-') {
      let len = 1;
      while (S.lead[(step + len) % 64] === '-' && len < 16) len++;
      const up = ch >= 'a' && ch <= 'g';
      const deg = up ? ch.charCodeAt(0) - 96 : Number(ch);
      this.tone(hz(this.degree(deg, up ? 2 : 1)), t, dur * len * 0.95, S.leadWave, S.leadWave === 'sawtooth' ? 0.07 : 0.1);
    }
  }

  private tone(f: number, t: number, len: number, wave: OscillatorType, vol: number) {
    const c = this.ctx!, o = c.createOscillator(), g = c.createGain();
    o.type = wave; o.frequency.value = f;
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vol, t + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, t + Math.max(0.05, len));
    if (wave === 'sawtooth') {
      const lp = c.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 1800;
      o.connect(lp).connect(g);
    } else o.connect(g);
    g.connect(this.bus!);
    o.start(t); o.stop(t + len + 0.05);
  }
  private kick(t: number) {
    const c = this.ctx!, o = c.createOscillator(), g = c.createGain();
    o.frequency.setValueAtTime(140, t); o.frequency.exponentialRampToValueAtTime(45, t + 0.12);
    g.gain.setValueAtTime(0.5, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.18);
    o.connect(g).connect(this.bus!); o.start(t); o.stop(t + 0.2);
  }
  private noiseHit(t: number, len: number, vol: number, freq: number, type: BiquadFilterType) {
    const c = this.ctx!, s = c.createBufferSource(), f = c.createBiquadFilter(), g = c.createGain();
    s.buffer = this.noise; f.type = type; f.frequency.value = freq;
    g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.0001, t + len);
    s.connect(f).connect(g).connect(this.bus!); s.start(t); s.stop(t + len + 0.02);
  }
  private snare(t: number) { this.noiseHit(t, 0.14, 0.22, 1800, 'bandpass'); }
  private hat(t: number) { this.noiseHit(t, 0.04, 0.07, 7000, 'highpass'); }
}
