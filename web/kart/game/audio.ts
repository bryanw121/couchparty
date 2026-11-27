/**
 * Procedural Web Audio Engine for Low-Poly Arcade Kario Mart
 * Zero external audio files — 100% synthesized in real time.
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

  // Drift screech nodes
  private screechGain: GainNode | null = null;
  private screechFilter: BiquadFilterNode | null = null;
  private screechSource: AudioBufferSourceNode | null = null;

  private masterGain: GainNode | null = null;

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
    this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : 0.6, ctx.currentTime);
    this.connectOutput(ctx);
    this.setupEngineSynth();
    this.setupScreechSynth();
    this.isInitialized = true;
  }
  private connectOutput(ctx: AudioContext) {
    const compressor = ctx.createDynamicsCompressor();
    compressor.threshold.value = -15; compressor.knee.value = 12;
    compressor.ratio.value = 4; compressor.attack.value = 0.008; compressor.release.value = 0.18;
    this.masterGain!.connect(compressor).connect(ctx.destination);
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
      this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : 0.6, this.ctx.currentTime);
      this.connectOutput(this.ctx);

      this.setupEngineSynth();
      this.setupScreechSynth();

      this.isInitialized = true;
    } catch (e) {
      console.warn('Web Audio API not supported or blocked:', e);
    }
  }

  private setupEngineSynth() {
    if (!this.ctx || !this.masterGain) return;

    // Dual-oscillator engine model (sawtooth + square for throaty kart 2-stroke tone)
    this.engineGain = this.ctx.createGain();
    this.engineGain.gain.setValueAtTime(0.0, this.ctx.currentTime);

    this.engineFilter = this.ctx.createBiquadFilter();
    this.engineFilter.type = 'lowpass';
    this.engineFilter.frequency.setValueAtTime(600, this.ctx.currentTime);
    this.engineFilter.Q.setValueAtTime(0.7, this.ctx.currentTime);

    this.engineOsc1 = this.ctx.createOscillator();
    this.engineOsc1.type = 'triangle';
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
    this.screechFilter.Q.setValueAtTime(3.0, this.ctx.currentTime);

    this.screechGain = this.ctx.createGain();
    this.screechGain.gain.setValueAtTime(0.0, this.ctx.currentTime);

    this.screechSource.connect(this.screechFilter);
    this.screechFilter.connect(this.screechGain);
    this.screechGain.connect(this.masterGain);

    this.screechSource.start();
  }

  /**
   * Updates continuous engine pitch and volume based on kart speed and throttle.
   */
  public updateEngine(speedNormalized: number, throttle: boolean, isBoosted: boolean) {
    if (!this.ctx || !this.engineGain || !this.engineOsc1 || !this.engineOsc2 || !this.engineFilter) return;

    const t = this.ctx.currentTime;
    const absSpeed = Math.abs(speedNormalized);

    // RPM mapping: idle ~65Hz, redline ~340Hz, boosted ~480Hz
    let targetFreq = 55 + Math.min(absSpeed, 1.6) * 120;
    if (throttle) targetFreq += 25;
    if (isBoosted) targetFreq += 80;

    // Frequency filter expands as throttle opens
    const filterFreq = 400 + absSpeed * 1200 + (throttle ? 400 : 0);

    const targetGain = 0.025 + Math.min(absSpeed, 1.6) * 0.065 + (throttle ? 0.025 : 0);

    this.engineOsc1.frequency.setTargetAtTime(targetFreq, t, 0.08);
    this.engineOsc2.frequency.setTargetAtTime(targetFreq * 2.005, t, 0.08);
    this.engineFilter.frequency.setTargetAtTime(filterFreq, t, 0.08);
    this.engineGain.gain.setTargetAtTime(targetGain, t, 0.08);
  }

  /**
   * Updates tire screech noise based on drift intensity.
   */
  public updateDriftScreech(isDrifting: boolean, driftLevel: number, speed: number) {
    if (!this.ctx || !this.screechGain || !this.screechFilter) return;

    const t = this.ctx.currentTime;
    if (isDrifting && Math.abs(speed) > 5) {
      const targetGain = 0.04 + driftLevel * 0.025;
      const targetFreq = 1200 + driftLevel * 500;
      this.screechGain.gain.setTargetAtTime(targetGain, t, 0.05);
      this.screechFilter.frequency.setTargetAtTime(targetFreq, t, 0.05);
    } else {
      this.screechGain.gain.setTargetAtTime(0.0, t, 0.05);
    }
  }

  public stopEngine() {
    if (!this.ctx || !this.engineGain) return;
    this.engineGain.gain.setTargetAtTime(0.0, this.ctx.currentTime, 0.1);
    if (this.screechGain) {
      this.screechGain.gain.setTargetAtTime(0.0, this.ctx.currentTime, 0.1);
    }
  }

  /**
   * Countdown tone (3, 2, 1, GO!)
   */
  public playCountdownBeep(isGo: boolean = false) {
    if (!this.ctx || !this.masterGain || this.isMuted) return;

    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    if (isGo) {
      // High pitch triumphant GO tone (C6 chord)
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(1046.5, t); // C6
      gain.gain.setValueAtTime(0.3, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.6);

      const osc2 = this.ctx.createOscillator();
      const gain2 = this.ctx.createGain();
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(1318.5, t); // E6
      gain2.gain.setValueAtTime(0.2, t);
      gain2.gain.exponentialRampToValueAtTime(0.001, t + 0.6);

      osc2.connect(gain2);
      gain2.connect(this.masterGain);
      osc2.start(t);
      osc2.stop(t + 0.6);
    } else {
      // Low crisp beep (A4)
      osc.type = 'square';
      osc.frequency.setValueAtTime(440, t);
      gain.gain.setValueAtTime(0.2, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.25);
    }

    osc.connect(gain);
    gain.connect(this.masterGain);
    osc.start(t);
    osc.stop(t + (isGo ? 0.6 : 0.25));
  }

  /**
   * Boost / Mini-turbo sound
   */
  public playBoostSound() {
    if (!this.ctx || !this.masterGain || this.isMuted) return;

    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(250, t);
    osc.frequency.exponentialRampToValueAtTime(950, t + 0.35);

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1200, t);
    filter.frequency.exponentialRampToValueAtTime(4000, t + 0.35);

    gain.gain.setValueAtTime(0.25, t);
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
      this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : 0.6, this.ctx.currentTime);
    }
    return this.isMuted;
  }

  public getMuted(): boolean {
    return this.isMuted;
  }
}

export const soundEngine = new SoundEngine();
