// Original synthesized arcade start signal, not a Nintendo recording.
// All three lights use one short tone; GO jumps an octave and holds longer.
export function countdownSamples(isGo: boolean, sampleRate = 44100, _stage = 1): Float32Array {
  const duration = isGo ? .64 : .19;
  const samples = new Float32Array(Math.ceil(duration * sampleRate));
  const frequency = isGo ? 1760 : 880;
  for (let i = 0; i < samples.length; i++) {
    const t = i / sampleRate;
    const attack = Math.min(1, t / .004);
    const release = Math.min(1, (duration - t) / (isGo ? .10 : .025));
    const envelope = attack * release * (1-.18*t/duration);
    let value = 0;
    for (const [harmonic,level] of [[1,.70],[3,.19],[5,.07]]) {
      if(frequency*harmonic < sampleRate*.45)
        value += level * Math.sin(2*Math.PI*frequency*harmonic*t);
    }
    samples[i] = value * envelope * .7;
  }
  return samples;
}

const buffers = new WeakMap<AudioContext, Map<string, AudioBuffer>>();
export function playCountdownCue(ctx: AudioContext, out: AudioNode, isGo: boolean, stage = 1) {
  let cache = buffers.get(ctx);if (!cache) { cache = new Map();buffers.set(ctx, cache); }
  const key = isGo ? 'go' : 'ready';
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
