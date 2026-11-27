import fs from 'node:fs';
import { execFileSync } from 'node:child_process';
import { build } from 'esbuild';
import audioEngine from 'web-audio-engine';

const before=process.argv.includes('--before');
const source=before?execFileSync('git',['show','4a99d470ff9fbe18be2d158b71a5497cdd0d9d33:web/kart/game/audio.ts'],{encoding:'utf8'}):fs.readFileSync('web/kart/game/audio.ts','utf8');
await build({stdin:{contents:source,resolveDir:new URL('../web/kart/game/',import.meta.url).pathname.replace(/^\/([A-Za-z]:)/,'$1'),loader:'ts'},bundle:true,platform:'node',format:'esm',outfile:'dist/engine-preview-module.mjs'});
const {soundEngine}=await import('../dist/engine-preview-module.mjs');
const ctx=new audioEngine.RenderingAudioContext({sampleRate:22050,numberOfChannels:1});soundEngine.adopt(ctx);
let boosted=false;
for(let frame=0;frame<13*60;frame++){
  const t=frame/60;
  const speed=t<1?0:t<6?(t-1)/5*1.15:t<7.5?1.15-(t-6)*.3:t<9?.7:t<10?1.3:t<11.5?1.3-(t-10)*.8:0;
  if(t<11.5)soundEngine.updateEngine(speed,t>=1&&t<6||t>=7.5&&t<10,t>=9&&t<10);else soundEngine.stopEngine();
  soundEngine.updateDriftScreech(t>=7.5&&t<9,2,speed*40);
  if(t>=9&&!boosted){soundEngine.playBoostSound();boosted=true;}
  ctx.processTo((frame+1)/60);
}
const data=ctx.exportAsAudioData(),samples=data.channelData[0];let peak=0,sum=0,tail=0;
for(let i=0;i<samples.length;i++){const v=samples[i];if(!Number.isFinite(v))throw new Error('Non-finite audio sample');peak=Math.max(peak,Math.abs(v));sum+=v*v;if(i>samples.length-22050)tail+=v*v;}
const rms=Math.sqrt(sum/samples.length),tailRms=Math.sqrt(tail/22050);
if(peak>=1||rms<.001||tailRms>rms*.05)throw new Error(`Invalid preview mix: peak ${peak}, rms ${rms}, tail ${tailRms}`);
const wav=Buffer.alloc(44+samples.length*2);wav.write('RIFF');wav.writeUInt32LE(wav.length-8,4);wav.write('WAVEfmt ',8);wav.writeUInt32LE(16,16);wav.writeUInt16LE(1,20);wav.writeUInt16LE(1,22);wav.writeUInt32LE(data.sampleRate,24);wav.writeUInt32LE(data.sampleRate*2,28);wav.writeUInt16LE(2,32);wav.writeUInt16LE(16,34);wav.write('data',36);wav.writeUInt32LE(samples.length*2,40);
for(let i=0;i<samples.length;i++)wav.writeInt16LE(Math.max(-32768,Math.min(32767,Math.round(samples[i]*32767))),44+i*2);
fs.mkdirSync('public/audio',{recursive:true});const path=`public/audio/engine-${before?'before':'after'}.wav`;fs.writeFileSync(path,wav);
console.log(path,`peak=${peak.toFixed(3)} rms=${rms.toFixed(3)} tail=${tailRms.toFixed(5)}`);
