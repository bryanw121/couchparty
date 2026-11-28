// Dry preview of the actual course score and instrument samples; runtime adds room/echo.
import fs from 'node:fs';
import {build} from 'esbuild';
await build({stdin:{contents:`export {CourseMusic} from './web/kart/game/music';export {instrumentSamples} from './web/kart/game/instruments';`,resolveDir:process.cwd(),loader:'ts'},bundle:true,platform:'node',format:'esm',outfile:'dist/music-preview-source.mjs'});
const {CourseMusic,instrumentSamples}=await import('../dist/music-preview-source.mjs');
const sampleRate=44100,music=new CourseMusic('meadow'),duration=60/music.song.bpm/4,seconds=duration*128+.6,pcm=new Float32Array(Math.ceil(seconds*sampleRate));
function mix(samples,t,volume){const start=Math.round(t*sampleRate);for(let i=0;i<samples.length&&start+i<pcm.length;i++)pcm[start+i]+=samples[i]*volume*.55;}
music.sample=(kind,f,t,len,volume)=>mix(instrumentSamples(kind,f,len,sampleRate),t,volume);
let seed=71;const random=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296*2-1;};
function drum(t,kind){const len=kind==='kick'?.23:kind==='snare'?.18:.045,samples=new Float32Array(Math.ceil(len*sampleRate));let phase=0;
 for(let i=0;i<samples.length;i++){const time=i/sampleRate,envelope=Math.min(1,time/.002)*Math.exp(-time/(kind==='kick'?.055:.03));phase+=2*Math.PI*(42+108*Math.exp(-time*22))/sampleRate;samples[i]=(kind==='kick'?Math.sin(phase)*.65:random()*(kind==='snare'?.22:.045))*envelope;}mix(samples,t,1);
}
music.kick=t=>drum(t,'kick');music.snare=t=>drum(t,'snare');music.hat=t=>drum(t,'hat');
for(let step=0;step<128;step++)music.playStep(step,step*duration,duration);
let peak=0;for(let i=0;i<pcm.length;i++){const fade=Math.min(1,i/(sampleRate*.02),(pcm.length-1-i)/(sampleRate*.12));pcm[i]*=fade;peak=Math.max(peak,Math.abs(pcm[i]));}
const gain=Math.min(1,.7/peak),file=Buffer.alloc(44+pcm.length*2);file.write('RIFF');file.writeUInt32LE(file.length-8,4);file.write('WAVEfmt ',8);file.writeUInt32LE(16,16);file.writeUInt16LE(1,20);file.writeUInt16LE(1,22);file.writeUInt32LE(sampleRate,24);file.writeUInt32LE(sampleRate*2,28);file.writeUInt16LE(2,32);file.writeUInt16LE(16,34);file.write('data',36);file.writeUInt32LE(pcm.length*2,40);for(let i=0;i<pcm.length;i++)file.writeInt16LE(Math.round(pcm[i]*gain*32767),44+i*2);
fs.writeFileSync('audio/kart-instrumental-preview.wav',file);console.log('Saved original instrumental preview:',seconds.toFixed(2)+'s; dry peak '+peak.toFixed(3));
