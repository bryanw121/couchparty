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
    bpm: 132, root: 60, scale: MAJOR, chords: [1, 6, 4, 5], leadWave: 'triangle', padWave: 'triangle',
    lead: '5-3-5-6-5-3-1---' + '2-3-4-3-2---5---' + '6-5-6-a-6-5-3---' + '4-3-2-3-1-------',
    kick: [0, 6, 8], snare: [4, 12], hat: [2, 6, 10, 14],
  },
  sunset: {
    bpm: 116, root: 62, scale: MIXO, chords: [1, 4, 6, 5], leadWave: 'triangle', padWave: 'sine', swing: 0.12,
    lead: '3--5--6-5-3-2---' + '1--2--3-5---3---' + '6--5--3-2-1-2---' + '3-------5-------',
    kick: [0, 10], snare: [4, 12], hat: [0, 3, 6, 8, 11, 14],
  },
  frosty: {
    bpm: 140, root: 57, scale: MINOR, chords: [1, 6, 3, 7], leadWave: 'triangle', padWave: 'triangle',
    lead: '1-3-5-a-b-a-5-3-' + '4---3---2---5---' + '1-3-5-a-c-b-a-5-' + '6-5-4-2-1-------',
    kick: [0, 8, 11], snare: [4, 12], hat: [2, 6, 10, 14],
  },
  neon: {
    bpm: 128, root: 52, scale: MINOR, chords: [1, 6, 4, 5], leadWave: 'triangle', padWave: 'sine',
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
  private space: GainNode | null = null;
  private phrase = 0;

  constructor(course: string) { this.song = SONGS[course] || SONGS.meadow; }

  start() {
    const o = soundEngine.output();
    if (!o || this.timer) return;
    this.ctx = o.ctx;
    this.bus = this.ctx.createGain();
    this.bus.gain.value = 0.48;
    this.bus.connect(o.out);
    this.space = this.ctx.createGain(); this.space.gain.value = 0.17;
    const delay = this.ctx.createDelay(1); delay.delayTime.value = 60 / this.song.bpm * 0.75;
    const soften = this.ctx.createBiquadFilter(); soften.type = 'lowpass'; soften.frequency.value = 2300;
    this.space.connect(delay).connect(soften).connect(this.bus);
    this.step = 0; this.phrase = 0; this.tempo = 1;
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
    [0, 4, 7, 12].forEach((s, i) => this.tone(hz(this.song.root + 12 + s), t + i * 0.09, 0.12, 'triangle', 0.13));
    this.tempo = 1.2;
  }
  stop() {
    clearInterval(this.timer); this.timer = null;
    if (this.bus && this.ctx) { const b = this.bus; b.gain.setTargetAtTime(0, this.ctx.currentTime, 0.2); setTimeout(() => b.disconnect(), 1200); }
    if (this.space) { const space = this.space; setTimeout(() => space.disconnect(), 1200); }
    this.space = null;
    this.bus = null;
  }

  private pump() {
    if (!this.ctx) return;
    const stepDur = 60 / (this.song.bpm * this.tempo) / 4;
    // Resuming a backgrounded TV must never produce a burst of overdue notes.
    if (this.nextAt < this.ctx.currentTime - 0.2) this.nextAt = this.ctx.currentTime + 0.03;
    while (this.nextAt < this.ctx.currentTime + 0.15) {
      const sw = this.song.swing && this.step % 2 ? stepDur * this.song.swing : 0;
      this.playStep(this.step, this.nextAt + sw, stepDur);
      this.nextAt += stepDur;
      this.step = (this.step + 1) % 128;
      if (this.step === 0) this.phrase++;
    }
  }

  private degree(d: number, octave = 0) {
    const sc = this.song.scale, i = d - 1;
    return this.song.root + sc[((i % 7) + 7) % 7] + 12 * (Math.floor(i / 7) + octave);
  }
  private chordNotes(bar: number) {
    const progression = this.song.chords.concat([4, 5, 2, 5]);
    const r = progression[bar % progression.length];
    return [this.degree(r), this.degree(r + 2), this.degree(r + 4)];
  }

  private playStep(step: number, t: number, dur: number) {
    const S = this.song, inBar = step % 16, bar = Math.floor(step / 16);
    const chord = this.chordNotes(bar);
    if (S.kick.includes(inBar)) this.kick(t);
    if (S.snare.includes(inBar)) this.snare(t);
    if (S.hat.includes(inBar)) this.hat(t);
    // Syncopated bass and offbeat comping leave room for the lead and racing cues.
    if ([0, 3, 6, 8, 10, 14].includes(inBar)) {
      const walk = inBar === 14 ? 2 : inBar === 6 || inBar === 10 ? 1 : 0;
      this.tone(hz(chord[walk] - 24), t, dur * 1.5, 'triangle', 0.26);
    }
    if ([2, 6, 10, 14].includes(inBar)) for (const n of chord) this.tone(hz(n), t, dur * 1.2, S.padWave, 0.055);
    if (inBar % 4 === 0 && bar % 2 === 1) this.tone(hz(chord[(inBar / 4) % 3] + 12), t, dur * 2.5, 'sine', 0.065);
    const phraseStep = step % 64;
    const ch = S.lead[phraseStep];
    if (ch && ch !== '.' && ch !== '-' && !(bar === 7 && inBar > 9)) {
      let len = 1;
      while (S.lead[(phraseStep + len) % 64] === '-' && len < 16) len++;
      const up = ch >= 'a' && ch <= 'g';
      let deg = up ? ch.charCodeAt(0) - 96 : Number(ch);
      if (bar >= 4) deg = Math.max(1, deg + (bar % 2 ? -1 : 2));
      this.tone(hz(this.degree(deg, up ? 1 : 0)), t, dur * len * 0.88, S.leadWave, 0.19);
    }
    if (bar === 7 && [11, 13, 15].includes(inBar)) this.snare(t);
    if (this.phrase % 2 && [7, 15].includes(inBar)) this.tone(hz(chord[2] + 12), t, dur * 2, 'sine', 0.07);
  }

  private tone(f: number, t: number, len: number, wave: OscillatorType, vol: number) {
    const c = this.ctx!, o = c.createOscillator(), g = c.createGain();
    o.type = wave; o.frequency.value = f;
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vol, t + 0.01);
    g.gain.exponentialRampToValueAtTime(vol * 0.5, t + Math.max(0.025, len * 0.3));
    g.gain.exponentialRampToValueAtTime(0.0001, t + Math.max(0.06, len) + 0.08);
    const lp = c.createBiquadFilter(); lp.type = 'lowpass';
    lp.frequency.setValueAtTime(Math.min(5000, f * 7), t);
    lp.frequency.exponentialRampToValueAtTime(Math.max(350, f * 2), t + Math.max(0.06, len));
    o.connect(lp).connect(g);
    g.connect(this.bus!);
    if (this.space && f > 250) g.connect(this.space);
    o.onended = () => { o.disconnect(); lp.disconnect(); g.disconnect(); };
    o.start(t); o.stop(t + Math.max(0.06, len) + 0.1);
  }
  private kick(t: number) {
    const c = this.ctx!, o = c.createOscillator(), g = c.createGain();
    o.frequency.setValueAtTime(140, t); o.frequency.exponentialRampToValueAtTime(45, t + 0.12);
    g.gain.setValueAtTime(0.5, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.18);
    o.connect(g).connect(this.bus!); o.onended = () => { o.disconnect(); g.disconnect(); }; o.start(t); o.stop(t + 0.2);
  }
  private noiseHit(t: number, len: number, vol: number, freq: number, type: BiquadFilterType) {
    const c = this.ctx!, s = c.createBufferSource(), f = c.createBiquadFilter(), g = c.createGain();
    s.buffer = this.noise; f.type = type; f.frequency.value = freq;
    g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.0001, t + len);
    s.connect(f).connect(g).connect(this.bus!); s.onended = () => { s.disconnect(); f.disconnect(); g.disconnect(); }; s.start(t); s.stop(t + len + 0.02);
  }
  private snare(t: number) { this.noiseHit(t, 0.1, 0.12, 1800, 'bandpass'); }
  private hat(t: number) { this.noiseHit(t, 0.035, 0.035, 6500, 'highpass'); }
}
