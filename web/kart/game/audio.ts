import { playCountdownCue } from './countdownAudio';
/**
 * Shared Web Audio effects bus: quiet layered motor, surface noise and cues.
 * Recorded victory/menu playback is owned by the host page.
 */

class SoundEngine {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;
  private isInitialized: boolean = false;

  // Engine sound nodes
  private engineGain: GainNode | null = null;
  private engineOsc1: OscillatorNode | null = null;
  private engineOsc2: OscillatorNode | null = null;
  private engineFilter: BiquadFilterNode | null = null;
  private rollingGain: GainNode | null = null;
  private rollingFilter: BiquadFilterNode | null = null;

  // Drift screech nodes
  private screechGain: GainNode | null = null;
  private screechFilter: BiquadFilterNode | null = null;
  private screechSource: AudioBufferSourceNode | null = null;

  private masterGain: GainNode | null = null;
  private connectMaster(){
    if(!this.ctx||!this.masterGain)return;
    if(typeof this.ctx.createDynamicsCompressor==='function'){
      const compressor=this.ctx.createDynamicsCompressor();compressor.threshold.value=-8;compressor.knee.value=12;compressor.ratio.value=4;compressor.attack.value=.004;compressor.release.value=.18;
      this.masterGain.connect(compressor).connect(this.ctx.destination);
    }else this.masterGain.connect(this.ctx.destination);
  }

  // For the course music: the shared context and master output (null until audio starts)
  public output(): { ctx: AudioContext; out: GainNode } | null { this.init(); return this.ctx && this.masterGain ? { ctx: this.ctx, out: this.masterGain } : null; }

  constructor() {
    // Lazy init on first user interaction
  }

  // Use an audio context the host page already unlocked (TV pages unlock theirs on OK/click)
  public adopt(ctx: AudioContext) {
    if (this.ctx === ctx) return;
    if (this.isInitialized) return;
    this.ctx = ctx;
    this.masterGain = ctx.createGain();
    this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : 1.0, ctx.currentTime);
    this.connectMaster();
    this.setupEngineSynth();
    this.setupScreechSynth();
    this.isInitialized = true;
  }
  public running() { return !!this.ctx && this.ctx.state === 'running'; }

  public init() {
    if (this.isInitialized && this.ctx) {
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
      return;
    }

    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
      
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : 1.0, this.ctx.currentTime);
      this.connectMaster();

      this.setupEngineSynth();
      this.setupScreechSynth();

      this.isInitialized = true;
    } catch (e) {
      console.warn('Web Audio API not supported or blocked:', e);
    }
  }

  private setupEngineSynth() {
    if (!this.ctx || !this.masterGain) return;

    // Rounded low motor pulse plus a quiet harmonic layer.
    this.engineGain = this.ctx.createGain();
    this.engineGain.gain.setValueAtTime(0.0, this.ctx.currentTime);

    this.engineFilter = this.ctx.createBiquadFilter();
    this.engineFilter.type = 'lowpass';
    this.engineFilter.frequency.setValueAtTime(600, this.ctx.currentTime);
    this.engineFilter.Q.setValueAtTime(0.55, this.ctx.currentTime);

    this.engineOsc1 = this.ctx.createOscillator();
    this.engineOsc1.type = 'sine';
    this.engineOsc1.frequency.setValueAtTime(55, this.ctx.currentTime);

    this.engineOsc2 = this.ctx.createOscillator();
    this.engineOsc2.type = 'triangle';
    this.engineOsc2.frequency.setValueAtTime(110, this.ctx.currentTime);

    this.engineOsc1.connect(this.engineFilter);
    this.engineOsc2.connect(this.engineFilter);
    this.engineFilter.connect(this.engineGain);
    this.engineGain.connect(this.masterGain);

    this.engineOsc1.start();
    this.engineOsc2.start();
  }

  private setupScreechSynth() {
    if (!this.ctx || !this.masterGain) return;

    // White noise buffer for tire friction
    const bufferSize = this.ctx.sampleRate * 2;
    const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1;
    }

    this.screechSource = this.ctx.createBufferSource();
    this.screechSource.buffer = noiseBuffer;
    this.screechSource.loop = true;

    this.screechFilter = this.ctx.createBiquadFilter();
    this.screechFilter.type = 'bandpass';
    this.screechFilter.frequency.setValueAtTime(1400, this.ctx.currentTime);
    this.screechFilter.Q.setValueAtTime(1.2, this.ctx.currentTime);

    this.screechGain = this.ctx.createGain();
    this.screechGain.gain.setValueAtTime(0.0, this.ctx.currentTime);

    this.screechSource.connect(this.screechFilter);
    this.screechFilter.connect(this.screechGain);
    this.screechGain.connect(this.masterGain);

    this.rollingFilter=this.ctx.createBiquadFilter();this.rollingFilter.type='lowpass';this.rollingFilter.frequency.value=700;
    this.rollingGain=this.ctx.createGain();this.rollingGain.gain.value=0;
    this.screechSource.connect(this.rollingFilter).connect(this.rollingGain).connect(this.masterGain);
    this.screechSource.start();
  }

  /**
   * Updates continuous engine pitch and volume based on kart speed and throttle.
   */
  public updateEngine(speedNormalized: number, throttle: boolean, isBoosted: boolean) {
    if (!this.ctx || !this.engineGain || !this.engineOsc1 || !this.engineOsc2 || !this.engineFilter) return;
    const t=this.ctx.currentTime,speed=Math.min(1.5,Math.abs(speedNormalized));
    const frequency=48+speed*62+(throttle?7:0)+(isBoosted?12:0);
    this.engineOsc1.frequency.setTargetAtTime(frequency,t,.12);
    this.engineOsc2.frequency.setTargetAtTime(frequency*2.005,t,.15);
    this.engineFilter.frequency.setTargetAtTime(220+speed*420,t,.14);
    this.engineGain.gain.setTargetAtTime(speed<.01&&!throttle?0:.012+speed*.016+(throttle?.006:0),t,.12);
  }
  public updateRoadSound(speed:number,surface:'road'|'rough'|'air'){
    if(!this.ctx||!this.rollingGain||!this.rollingFilter)return;
    const ratio=Math.min(1.5,Math.abs(speed)/43),t=this.ctx.currentTime;
    this.rollingGain.gain.setTargetAtTime(surface==='air'?ratio*.006:ratio*(surface==='rough'?.025:.009),t,.1);
    this.rollingFilter.frequency.setTargetAtTime(surface==='air'?1800:surface==='rough'?550:950,t,.12);
  }
  public playLanding(intensity=1){
    if(!this.ctx||!this.masterGain||this.isMuted)return;
    const c=this.ctx,t=c.currentTime,o=c.createOscillator(),g=c.createGain();o.type='sine';
    o.frequency.setValueAtTime(105,t);o.frequency.exponentialRampToValueAtTime(42,t+.18);
    g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(.13*Math.min(1,intensity),t+.008);g.gain.exponentialRampToValueAtTime(.0001,t+.23);
    o.connect(g).connect(this.masterGain);o.start(t);o.stop(t+.25);
  }

  /**
   * Updates tire screech noise based on drift intensity.
   */
  public updateDriftScreech(isDrifting: boolean, driftLevel: number, speed: number) {
    if (!this.ctx || !this.screechGain || !this.screechFilter) return;

    const t = this.ctx.currentTime;
    if (isDrifting && Math.abs(speed) > 5) {
      const targetGain = 0.012 + driftLevel * 0.009;
      const targetFreq = 850 + driftLevel * 250;
      this.screechGain.gain.setTargetAtTime(targetGain, t, 0.05);
      this.screechFilter.frequency.setTargetAtTime(targetFreq, t, 0.05);
    } else {
      this.screechGain.gain.setTargetAtTime(0.0, t, 0.05);
    }
  }

  public stopEngine() {
    if (!this.ctx || !this.engineGain) return;
    this.engineGain.gain.setTargetAtTime(0.0, this.ctx.currentTime, 0.1);
    this.rollingGain?.gain.setTargetAtTime(0,this.ctx.currentTime,.1);
    if (this.screechGain) {
      this.screechGain.gain.setTargetAtTime(0.0, this.ctx.currentTime, 0.1);
    }
  }

  /**
   * Countdown tone (3, 2, 1, GO!)
   */
  public playCountdownBeep(isGo: boolean = false, stage = 1) {
    if (!this.ctx || !this.masterGain || this.isMuted) return;
    playCountdownCue(this.ctx, this.masterGain, isGo, stage);
  }

  /**
   * Boost / Mini-turbo sound
   */
  public playBoostSound() {
    if (!this.ctx || !this.masterGain || this.isMuted) return;

    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(250, t);
    osc.frequency.exponentialRampToValueAtTime(950, t + 0.35);

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1200, t);
    filter.frequency.exponentialRampToValueAtTime(4000, t + 0.35);

    gain.gain.setValueAtTime(0.1, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.45);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    osc.start(t);
    osc.stop(t + 0.45);
  }

  /**
   * Collision thud
   */
  public playCollisionSound(intensity: number = 1.0) {
    if (!this.ctx || !this.masterGain || this.isMuted) return;

    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(140, t);
    osc.frequency.exponentialRampToValueAtTime(35, t + 0.18);

    const clampedIntensity = Math.min(Math.max(intensity, 0.2), 1.0);
    gain.gain.setValueAtTime(0.4 * clampedIntensity, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.2);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(t);
    osc.stop(t + 0.2);
  }

  /**
   * Checkpoint / Lap bell
   */
  public playCoin() {
    if (!this.ctx || !this.masterGain || this.isMuted) return;
    const t = this.ctx.currentTime;
    [988, 1319].forEach((f, i) => {
      const o = this.ctx!.createOscillator(), g = this.ctx!.createGain();
      o.type = 'square'; o.frequency.value = f;
      g.gain.setValueAtTime(0.0001, t + i * 0.07);
      g.gain.exponentialRampToValueAtTime(0.06, t + i * 0.07 + 0.01);
      g.gain.exponentialRampToValueAtTime(0.0001, t + i * 0.07 + 0.14);
      o.connect(g).connect(this.masterGain!); o.start(t + i * 0.07); o.stop(t + i * 0.07 + 0.16);
    });
  }

  public playLapChime(isFinalLap: boolean = false) {
    if (!this.ctx || !this.masterGain || this.isMuted) return;

    const notes = isFinalLap ? [659.25, 880, 1174.66] : [587.33, 880];
    notes.forEach((freq, idx) => {
      if (!this.ctx || !this.masterGain) return;
      const t = this.ctx.currentTime + idx * 0.08;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, t);
      gain.gain.setValueAtTime(0.25, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.5);

      osc.connect(gain);
      gain.connect(this.masterGain);
      osc.start(t);
      osc.stop(t + 0.55);
    });
  }

  /**
   * Finish Fanfare (8-note retro victory riff)
   */
  public playFinishFanfare() {
    if (!this.ctx || !this.masterGain || this.isMuted) return;

    const melody = [
      { f: 523.25, d: 0.12 }, // C5
      { f: 659.25, d: 0.12 }, // E5
      { f: 783.99, d: 0.12 }, // G5
      { f: 1046.5, d: 0.25 }, // C6
      { f: 880.00, d: 0.15 }, // A5
      { f: 1046.5, d: 0.45 }, // C6 hold
    ];

    let timeOffset = 0;
    melody.forEach((note) => {
      if (!this.ctx || !this.masterGain) return;
      const t = this.ctx.currentTime + timeOffset;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(note.f, t);
      gain.gain.setValueAtTime(0.3, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + note.d);

      osc.connect(gain);
      gain.connect(this.masterGain);
      osc.start(t);
      osc.stop(t + note.d + 0.05);

      timeOffset += note.d * 0.9;
    });
  }

  public toggleMute(): boolean {
    this.isMuted = !this.isMuted;
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : 1.0, this.ctx.currentTime);
    }
    return this.isMuted;
  }

  public getMuted(): boolean {
    return this.isMuted;
  }
}

export const soundEngine = new SoundEngine();
