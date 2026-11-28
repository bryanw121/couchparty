import fs from 'node:fs';
import {build} from 'esbuild';
import {DRIVERS} from '../src/games/kart-roster.js';
await build({entryPoints:['web/kart/game/driverVoice.ts'],bundle:true,platform:'node',format:'esm',outfile:'dist/voice-preview.mjs'});
const {driverVoiceSamples}=await import('../dist/voice-preview.mjs');
const rate=22050,parts=[];
for(const driver of DRIVERS){
 for(const call of ['boost','hit','finish']){
  const samples=driverVoiceSamples(driver.topper,call,rate);
  parts.push(Float32Array.from(samples,x=>x*.48),new Float32Array(Math.floor(rate*.28)));
 }
 parts.push(new Float32Array(rate*.65));
}
const count=parts.reduce((sum,part)=>sum+part.length,0),wav=Buffer.alloc(44+count*2);
wav.write('RIFF');wav.writeUInt32LE(wav.length-8,4);wav.write('WAVEfmt ',8);wav.writeUInt32LE(16,16);wav.writeUInt16LE(1,20);wav.writeUInt16LE(1,22);wav.writeUInt32LE(rate,24);wav.writeUInt32LE(rate*2,28);wav.writeUInt16LE(2,32);wav.writeUInt16LE(16,34);wav.write('data',36);wav.writeUInt32LE(count*2,40);
let offset=44;for(const part of parts)for(const value of part){wav.writeInt16LE(Math.round(value*32767),offset);offset+=2;}
fs.writeFileSync('audio/kart-driver-voices-preview.wav',wav);
console.log('Preview order (boost / hit / finish each):',DRIVERS.map(d=>d.name).join(', '),'; duration',Math.round(count/rate),'seconds');
