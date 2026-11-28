import fs from 'node:fs';
import { build } from 'esbuild';
await build({ entryPoints: ['web/kart/game/countdownAudio.ts'], bundle: true, platform: 'node', format: 'esm', outfile: 'dist/countdown-preview.mjs' });
const { countdownSamples } = await import('../dist/countdown-preview.mjs');
const rate = 44100, data = new Float32Array(rate * 4.2);
for (let step = 0; step < 4; step++) {
  const go = step === 3, samples = countdownSamples(go, rate, step + 1);
  for (let i = 0; i < samples.length; i++) data[step * rate + i] += samples[i] * (go ? .65 : .48);
}
const wav = Buffer.alloc(44 + data.length * 2);
wav.write('RIFF');wav.writeUInt32LE(wav.length - 8, 4);wav.write('WAVEfmt ', 8);
wav.writeUInt32LE(16, 16);wav.writeUInt16LE(1, 20);wav.writeUInt16LE(1, 22);
wav.writeUInt32LE(rate, 24);wav.writeUInt32LE(rate * 2, 28);wav.writeUInt16LE(2, 32);wav.writeUInt16LE(16, 34);
wav.write('data', 36);wav.writeUInt32LE(data.length * 2, 40);
for (let i = 0; i < data.length; i++) wav.writeInt16LE(Math.round(Math.max(-1, Math.min(1, data[i])) * 32767), 44 + i * 2);
fs.writeFileSync('audio/kart-countdown-preview.wav', wav);
console.log('Rendered the actual 3, 2, 1, GO cues:', data.length / rate, 'seconds');
