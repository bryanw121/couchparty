import assert from 'node:assert/strict';
import {build} from 'esbuild';
import {DRIVERS} from '../src/games/kart-roster.js';
await build({stdin:{contents:`export * from './web/kart/game/driverVoice';export {soundEngine} from './web/kart/game/audio';export {CouchEngine} from './web/kart/game/couchEngine';`,resolveDir:process.cwd(),loader:'ts'},bundle:true,platform:'node',format:'esm',packages:'external',outfile:'dist/driver-voice-tests.mjs'});
const {driverVoiceSamples,DriverVoiceDirector,soundEngine,CouchEngine}=await import('../dist/driver-voice-tests.mjs');
const signatures=new Set();
for(const driver of DRIVERS){
 for(const call of ['start','boost','trick','hit','item','overtake','finish']){
  const pcm=driverVoiceSamples(driver.topper,call,22050);
  assert.ok(pcm.every(Number.isFinite));assert.equal(pcm[0],0);assert.equal(pcm.at(-1),0);
  let peak=0,energy=0;for(const sample of pcm){peak=Math.max(peak,Math.abs(sample));energy+=sample*sample;}
  assert.ok(peak<.53&&energy/pcm.length>.0001,driver.name+' '+call+' audible without clipping');
  assert.notDeepEqual(pcm,driverVoiceSamples(driver.topper,call,22050,1));
 }
 signatures.add(Buffer.from(driverVoiceSamples(driver.topper,'boost',22050).buffer).toString('base64'));
 console.log('PASS',driver.name,'seven event calls and delivery variation');
}
assert.equal(signatures.size,8,'all drivers have distinct PCM');
const nodes=[],param=()=>({value:0}),node=()=>({gain:param(),connect(dest){return dest;},disconnect(){this.disconnected=true;},start(){},stop(){this.stopped=true;}});
const ctx={state:'running',currentTime:0,sampleRate:22050,createBuffer:(channels,length)=>({length,copyToChannel(){}}),createGain:node,createBufferSource(){const s=node();nodes.push(s);return s;}};
const original=soundEngine.output;soundEngine.output=()=>({ctx,out:node()});
const voices=new DriverVoiceDirector();assert.equal(voices.play('p1','cap','boost'),true);
assert.equal(voices.play('p2','bow','boost'),false,'equal priority cannot overlap');
assert.equal(voices.play('p1','cap','hit'),true,'hit interrupts boost even during cooldown');assert.equal(nodes[0].stopped,true);
assert.equal(voices.play('p1','cap','item'),false,'repeated lower priority call is suppressed');
assert.equal(voices.play('p2','bow','finish'),true,'finish takes priority');
voices.stop();assert.equal(nodes.at(-1).stopped,true);ctx.currentTime=3;
assert.equal(voices.play('p1','cat','trick'),true);voices.stop();ctx.state='suspended';assert.equal(voices.play('p1','cat','finish'),false);
soundEngine.output=()=>null;
// Exercise real event dispatch without creating a renderer/audio device.
const calls=[],me={state:{config:{id:'p1',topper:'horns'},isFinished:false}},by={state:{config:{id:'p2',topper:'bear'},isFinished:false}};
const engine=Object.assign(Object.create(CouchEngine.prototype),{opts:{},humans:[me,by],voices:{play:(...args)=>calls.push(args),stop(){}},say(){}});
engine.onItemEvent({type:'use',racer:'p1',item:'boost'});assert.equal(calls.at(-1)[2],'boost');assert.equal(calls.at(-1)[1],'horns');
engine.onItemEvent({type:'hit',racer:'p1',by:'p2',item:'banana'});assert.ok(calls.some(c=>c[0]==='p1'&&c[2]==='hit'));assert.ok(calls.some(c=>c[0]==='p2'&&c[2]==='overtake'));
engine.disposed=true;const count=calls.length;engine.voice(me,'boost');assert.equal(calls.length,count,'disposed engine cannot play voices');
soundEngine.output=original;
console.log('PASS voice priorities, cooldown, pause/stop, suspended audio and real character-specific event dispatch');
