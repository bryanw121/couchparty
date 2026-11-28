import {instrumentSamples,Instrument} from './instruments';
import { soundEngine } from './audio';

// Original course music, synthesized live with Web Audio.
// Each song: a verse (lighter) and a chorus (full drums, lead up high), looping.
// Melodies are 16th-note steps: '.' rest, '-' hold, 1-7 scale degree, a-g the same an octave up.
// Bass patterns: R root, 5 fifth, 8 octave, '.' rest. Drums: k kick, s snare, h hat, o open hat.

interface Section { chords: number[]; lead: string; drums: string[]; bass: string; leadOct: number; arp: boolean; pad: boolean }
interface Song { bpm: number; root: number; scale: number[]; swing?: number; lead: OscillatorType; verse: Section; chorus: Section }

const MAJOR = [0, 2, 4, 5, 7, 9, 11], MINOR = [0, 2, 3, 5, 7, 8, 10], MIXO = [0, 2, 4, 5, 7, 9, 10];
const D_POP = ['k.h.s.h.k.k.s.h.', 'k.h.s.h.k.hks.ho'];
const D_FOUR = ['k.h.k.h.k.h.k.ho', 'k.hsk.h.k.hsk.hs'];
const D_HALF = ['k...h...s...h...', 'k...h.k.s...h.hh'];
const D_SHUFFLE = ['k..h.hs..h.hk.hh', 'k..h.hs..hkhs.ho'];

const SONGS: Record<string, Song> = {
  meadow: {
    bpm: 140, root: 60, scale: MAJOR, lead: 'square',
    verse: { chords: [1, 5, 6, 4], leadOct: 1, arp: true, pad: true, bass: 'R.R.5.R.R.8.5.R.',
      lead: '1-3-5-3-6-5-3---2-4-6-4-5---3---1-3-5-a-6-5-3-2-1-------5-------', drums: D_POP },
    chorus: { chords: [4, 5, 3, 6], leadOct: 1, arp: true, pad: true, bass: 'R.8.R.8.R.8.5.8.',
      lead: 'a---b-a-6-5-6---5---6-5-3-2-3---6-5-6-a-b-a-6-5-a-------6---5---', drums: D_FOUR },
  },
  sunset: {
    bpm: 118, root: 62, scale: MIXO, swing: 0.14, lead: 'triangle',
    verse: { chords: [1, 7, 4, 1], leadOct: 1, arp: false, pad: true, bass: 'R..R..5.R..8..5.',
      lead: '5--3--1-2-3-----4--3--2-1-2-----5--6--b-a-6-----5-------3-------', drums: D_SHUFFLE },
    chorus: { chords: [4, 1, 7, 5], leadOct: 1, arp: true, pad: true, bass: 'R..R..5.R..R..8.',
      lead: 'a--b--a-6-5-6---b--a--6-5-3-----a--b--c-b-a-6---5-------a-------', drums: D_SHUFFLE },
  },
  frosty: {
    bpm: 150, root: 57, scale: MINOR, lead: 'triangle',
    verse: { chords: [1, 6, 4, 5], leadOct: 1, arp: true, pad: false, bass: 'R.R.R.R.5.5.R.R.',
      lead: '1-5-a-5-3-5-a-5-6-a-c-a-5-a-c-a-4-6-b-6-3-5-a-5-7-2-5-2-7-------', drums: D_POP },
    chorus: { chords: [6, 7, 3, 5], leadOct: 1, arp: true, pad: true, bass: 'R.8.R.8.5.8.R.8.',
      lead: 'a---c---b-a-5---6---a---c-b-a---b---a---6-5-4---5---7---b-------', drums: D_FOUR },
  },
  neon: {
    bpm: 112, root: 52, scale: MINOR, lead: 'sawtooth',
    verse: { chords: [1, 6, 3, 7], leadOct: 1, arp: true, pad: true, bass: 'R.RR.RR.R.RR.R8.',
      lead: '1-------5---3---4-------3---2---1-------7---5---6-------5-------', drums: D_HALF },
    chorus: { chords: [6, 4, 1, 5], leadOct: 1, arp: true, pad: true, bass: 'R.RR.RR.R.RR.R8.',
      lead: 'a---b---c---b---a---6---5---6---a---b---c---e---d-------b-------', drums: D_FOUR },
  },
};

const hz = (midi: number) => 440 * Math.pow(2, (midi - 69) / 12);

export class CourseMusic {
  private paused=false;
  setPaused(value:boolean){this.paused=value;if(this.ctx&&this.bus){this.bus.gain.setTargetAtTime(value?0:.55,this.ctx.currentTime,.08);if(!value)this.nextAt=this.ctx.currentTime+.05;}}
  private song: Song;
  private ctx: AudioContext | null = null;
  private bus: GainNode | null = null;
  private fxSend: GainNode | null = null;
  private timer: any = null;
  private step = 0; // 0..255: 16 bars of 16ths (8 verse, 8 chorus)
  private nextAt = 0;
  private tempo = 1;
  private noise: AudioBuffer | null = null;

  private buffers=new Map<string,AudioBuffer>();
  private instrument:Instrument;
  constructor(course: string) { this.song = SONGS[course] || SONGS.meadow;this.instrument=course==='sunset'?'marimba':course==='neon'?'brass':course==='frosty'?'marimba':'piano'; }

  start() {
    const o = soundEngine.musicOutput();
    if (!o || this.timer) return;
    const c = (this.ctx = o.ctx);
    this.bus = c.createGain();
    this.bus.gain.value = 0.55;
    this.bus.connect(o.out);
    // echo + small room on a send
    this.fxSend = c.createGain();
    this.fxSend.gain.value = 0.35;
    const delay = c.createDelay(1);
    delay.delayTime.value = (60 / this.song.bpm) * 0.75;
    const fb = c.createGain(); fb.gain.value = 0.32;
    const tone = c.createBiquadFilter(); tone.type = 'lowpass'; tone.frequency.value = 2600;
    this.fxSend.connect(delay); delay.connect(tone); tone.connect(fb); fb.connect(delay); tone.connect(this.bus);
    const verb = c.createConvolver();
    const len = c.sampleRate * 1.4, ir = c.createBuffer(2, len, c.sampleRate);
    for (let ch = 0; ch < 2; ch++) { const d = ir.getChannelData(ch); for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 2.6); }
    verb.buffer = ir;
    const verbGain = c.createGain(); verbGain.gain.value = 0.5;
    this.fxSend.connect(verb); verb.connect(verbGain); verbGain.connect(this.bus);
    const n = c.createBuffer(1, c.sampleRate * 0.4, c.sampleRate);
    const nd = n.getChannelData(0);
    for (let i = 0; i < nd.length; i++) nd[i] = Math.random() * 2 - 1;
    this.noise = n;
    this.nextAt = c.currentTime + 0.1;
    this.timer = setInterval(() => this.pump(), 25);
  }
  // Final lap: a rising fanfare, then the song jumps to the chorus, faster
  finalLap() {
    if (!this.ctx || !this.bus) return;
    const t = this.ctx.currentTime + 0.05;
    [0, 4, 7, 12, 16].forEach((s, i) => this.voice(hz(this.song.root + 12 + s), t + i * 0.08, 0.16, 'square', 0.12, true));
    this.tempo = 1.15;
    this.step = 128;
  }
  stop() {
    clearInterval(this.timer); this.timer = null;
    if (this.bus && this.ctx) { const b = this.bus; b.gain.setTargetAtTime(0, this.ctx.currentTime, 0.25); setTimeout(() => b.disconnect(), 1500); }
    this.bus = null;
  }

  private pump() {
    if (!this.ctx || this.paused) return;
    const stepDur = 60 / (this.song.bpm * this.tempo) / 4;
    while (this.nextAt < this.ctx.currentTime + 0.15) {
      const sw = this.song.swing && this.step % 2 ? stepDur * this.song.swing : 0;
      this.playStep(this.step, this.nextAt + sw, stepDur);
      this.nextAt += stepDur;
      this.step = (this.step + 1) % 256;
    }
  }

  private deg(d: number, octave = 0) {
    const sc = this.song.scale, i = d - 1;
    return this.song.root + sc[((i % 7) + 7) % 7] + 12 * (Math.floor(i / 7) + octave);
  }

  private playStep(step: number, t: number, dur: number) {
    const chorus = step >= 128;
    const sec = chorus ? this.song.chorus : this.song.verse;
    const local = step % 128, bar = Math.floor(local / 16), inBar = local % 16;
    const r = sec.chords[bar % sec.chords.length];
    const chord = [this.deg(r), this.deg(r + 2), this.deg(r + 4)];
    // drums: second pattern on every 4th bar for a fill
    const pat = sec.drums[bar % 4 === 3 ? 1 : 0];
    const d = pat[inBar];
    if (d === 'k') this.kick(t);
    if (d === 's') this.snare(t);
    if (d === 'h') this.hat(t, false);
    if (d === 'o') this.hat(t, true);
    if (chorus && inBar % 4 === 2 && d !== 's') this.hat(t, false);
    // bass
    const b = sec.bass[inBar];
    if (b && b !== '.') this.bassNote(hz(chord[0] - 24 + (b === '5' ? 7 : b === '8' ? 12 : 0)), t, dur * 1.6);
    // pad: chord swell at the top of each bar
    if (sec.pad && inBar === 0) chord.forEach((m, i) => this.pad(hz(m + (i === 0 ? 0 : 0)), t, dur * 16));
    // arpeggio
    if (sec.arp && inBar % 2 === 0) this.voice(hz(chord[(inBar / 2) % 3] + 12), t, dur * 1.2, 'square', 0.035, false);
    // lead
    const ch = sec.lead[local % 64];
    if (ch && ch !== '.' && ch !== '-') {
      let len = 1;
      while (sec.lead[(local + len) % 64] === '-' && len < 16) len++;
      const up = ch >= 'a' && ch <= 'g';
      const dd = up ? ch.charCodeAt(0) - 96 : Number(ch);
      this.lead(hz(this.deg(dd, sec.leadOct + (up ? 1 : 0))), t, dur * len * 0.95, chorus);
    }
  }

  private env(g: GainNode, t: number, a: number, peak: number, len: number) {
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(peak, t + a);
    g.gain.exponentialRampToValueAtTime(0.0001, t + Math.max(a + 0.02, len));
  }
  private sample(kind:Instrument,f:number,t:number,len:number,volume:number,fx=true){
    const c=this.ctx!,key=kind+':'+f.toFixed(2)+':'+len.toFixed(3);
    if(!this.buffers.has(key)){
      const samples=instrumentSamples(kind,f,len,c.sampleRate),buffer=c.createBuffer(1,samples.length,c.sampleRate);buffer.copyToChannel(samples,0);
      if(this.buffers.size>=96)this.buffers.delete(this.buffers.keys().next().value!);this.buffers.set(key,buffer);
    }
    const source=c.createBufferSource(),gain=c.createGain();source.buffer=this.buffers.get(key)!;gain.gain.value=volume;
    source.connect(gain);gain.connect(this.bus!);if(fx)gain.connect(this.fxSend!);source.onended=()=>{source.disconnect();gain.disconnect();};source.start(t);
  }
  private voice(f:number,t:number,len:number,wave:OscillatorType,vol:number,fx:boolean){this.sample('marimba',f,t,len,vol,fx);}
  private lead(f:number,t:number,len:number,bright:boolean){this.sample(this.instrument,f,t,len,bright?.2:.17);}
  private bassNote(f:number,t:number,len:number){this.sample('bass',f,t,len,.24,false);}
  private pad(f:number,t:number,len:number){this.sample('strings',f,t,len,.035);}
  private kick(t: number) {
    const c = this.ctx!, o = c.createOscillator(), g = c.createGain();
    o.frequency.setValueAtTime(150, t); o.frequency.exponentialRampToValueAtTime(42, t + 0.14);
    this.env(g, t, 0.002, 0.7, 0.22);
    o.connect(g).connect(this.bus!); o.start(t); o.stop(t + 0.25);
    this.noiseHit(t, 0.015, 0.12, 3000, 'highpass'); // click
  }
  private noiseHit(t: number, len: number, vol: number, freq: number, type: BiquadFilterType, fx = false) {
    const c = this.ctx!, s = c.createBufferSource(), f = c.createBiquadFilter(), g = c.createGain();
    s.buffer = this.noise; f.type = type; f.frequency.value = freq;
    this.env(g, t, 0.002, vol, len);
    s.connect(f).connect(g); g.connect(this.bus!); if (fx) g.connect(this.fxSend!);
    s.start(t); s.stop(t + len + 0.02);
  }
  private snare(t: number) {
    this.noiseHit(t, 0.18, 0.3, 1700, 'bandpass', true);
    const c = this.ctx!, o = c.createOscillator(), g = c.createGain();
    o.type = 'triangle'; o.frequency.setValueAtTime(220, t); o.frequency.exponentialRampToValueAtTime(140, t + 0.08);
    this.env(g, t, 0.002, 0.18, 0.1);
    o.connect(g).connect(this.bus!); o.start(t); o.stop(t + 0.12);
  }
  private hat(t: number, open: boolean) { this.noiseHit(t, open ? 0.22 : 0.045, open ? 0.08 : 0.06, 8000, 'highpass'); }
}

// The race soundtrack now uses the original fuller instrumental arrangement.
// Existing recorded menu/victory tracks and their credits remain unchanged.
export function preloadCourseTrack(course:string) { /* Instrument buffers are created lazily after audio unlock. */ }
export class TrackMusic {
  private synth:CourseMusic;
  constructor(course:string){this.synth=new CourseMusic(course);}
  start(){this.synth.start();}
  finalLap(){this.synth.finalLap();}
  stop(){this.synth.stop();}
  setPaused(value:boolean){this.synth.setPaused(value);}
}
