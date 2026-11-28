// Original race-start cues. Rendered samples keep the attack clean on TV speakers.
export function countdownSamples(isGo: boolean, sampleRate = 44100, stage = 1): Float32Array {
  const duration = isGo ? .82 : .28;
  const samples = new Float32Array(Math.ceil(duration * sampleRate));
  const notes = isGo ? [261.6256, 523.2511, 659.2551, 783.9909, 1046.5023]
    : [[523.2511], [587.3295], [659.2551]][Math.max(0, Math.min(2, stage - 1))];
  for (let i = 0; i < samples.length; i++) {
    const t = i / sampleRate;
    const attack = Math.min(1, t / .006);
    const release = Math.min(1, (duration - t) / (isGo ? .22 : .065));
    const envelope = attack * release * Math.exp(-t * (isGo ? 2.5 : 5));
    let value = 0;
    for (let n = 0; n < notes.length; n++) {
      const f = notes[n], phase = 2 * Math.PI * f * t;
      const bell = Math.sin(phase) + .3 * Math.sin(phase * 2) * Math.exp(-t * 8)
        + .1 * Math.sin(phase * 3) * Math.exp(-t * 14);
      value += bell * (isGo ? [ .2, .42, .3, .26, .12 ][n] : .72);
    }
    // Low, soft click gives each light a tactile onset without a harsh square wave.
    value += .12 * Math.sin(2 * Math.PI * 105 * t) * Math.exp(-t * 65);
    samples[i] = Math.tanh(value * envelope) * .7;
  }
  return samples;
}

const buffers = new WeakMap<AudioContext, Map<string, AudioBuffer>>();
export function playCountdownCue(ctx: AudioContext, out: AudioNode, isGo: boolean, stage = 1) {
  let cache = buffers.get(ctx);if (!cache) { cache = new Map();buffers.set(ctx, cache); }
  const key = isGo ? 'go' : String(stage);
  let buffer = cache.get(key);
  if (!buffer) {
    const samples = countdownSamples(isGo, ctx.sampleRate, stage);
    buffer = ctx.createBuffer(1, samples.length, ctx.sampleRate);
    buffer.copyToChannel(samples, 0);cache.set(key, buffer);
  }
  const source = ctx.createBufferSource(), gain = ctx.createGain();
  source.buffer = buffer;gain.gain.value = isGo ? .65 : .48;
  source.connect(gain).connect(out);
  source.onended = () => { source.disconnect();gain.disconnect(); };
  source.start(ctx.currentTime);
}
