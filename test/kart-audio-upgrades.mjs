import assert from 'node:assert/strict';
import {build} from 'esbuild';
import * as THREE from 'three';
import {createCanvas} from '@napi-rs/canvas';
import {DRIVERS} from '../src/games/kart-roster.js';
await build({stdin:{contents:`export {instrumentSamples} from './web/kart/game/instruments';export {soundEngine} from './web/kart/game/audio';export {CourseMusic} from './web/kart/game/music';export {createKartMesh} from './web/kart/game/kartModel';export {animateDriverReaction} from './web/kart/game/driverAnimation';`,resolveDir:process.cwd(),loader:'ts'},bundle:true,platform:'node',format:'esm',packages:'external',outfile:'dist/audio-upgrades-test.mjs'});
const {instrumentSamples,soundEngine,CourseMusic,createKartMesh,animateDriverReaction}=await import('../dist/audio-upgrades-test.mjs');
for(const kind of ['piano','marimba','brass','strings','bass']){
 const pcm=instrumentSamples(kind,440,.5);assert.ok(pcm.every(Number.isFinite));assert.equal(pcm[0],0);assert.ok(Math.abs(pcm.at(-1))<.001);assert.ok(Math.max(...pcm)<1);assert.ok(pcm.reduce((a,x)=>a+x*x,0)/pcm.length>.005);assert.notDeepEqual(pcm,instrumentSamples(kind==='piano'?'marimba':'piano',440,.5));
}
const param=()=>({value:0,targets:[],setValueAtTime(v){this.value=v;},setTargetAtTime(v){this.value=v;this.targets.push(v);},linearRampToValueAtTime(v){this.value=v;},exponentialRampToValueAtTime(v){this.value=v;}});
const node=()=>({gain:param(),frequency:param(),Q:param(),detune:param(),connect(dest){return dest;},disconnect(){},start(){},stop(){}});
const ctx={currentTime:2,sampleRate:22050,destination:node(),createGain:node,createBiquadFilter:node,createOscillator:node,createBuffer:(c,n,rate)=>({getChannelData:()=>new Float32Array(n),copyToChannel(){}}),createBufferSource:node};
const engine=new soundEngine.constructor();engine.adopt(ctx);assert.equal(engine.engineOsc1.type,'sine');
engine.setMix({music:.25,effects:.4});assert.equal(engine.musicGain.gain.value,.25);assert.equal(engine.effectsGain.gain.value,.4);assert.equal(engine.output().out,engine.effectsGain);assert.equal(engine.musicOutput().out,engine.musicGain);engine.setMix({music:NaN,effects:2});assert.equal(engine.musicGain.gain.value,.25);assert.equal(engine.effectsGain.gain.value,1);
engine.updateEngine(1,true,true);assert.ok(engine.engineGain.gain.value>0&&engine.engineGain.gain.value<.05,'engine gain stays quiet');assert.ok(engine.engineOsc1.frequency.value<150,'no high-pitch buzzing');
engine.updateRoadSound(43,'road');const road=engine.rollingGain.gain.value;engine.updateRoadSound(43,'rough');assert.ok(engine.rollingGain.gain.value>road);engine.updateRoadSound(43,'air');assert.ok(engine.rollingGain.gain.value<road);
engine.updateDriftScreech(true,3,43);assert.ok(engine.screechGain.gain.value<.05);engine.playLanding();engine.stopEngine();assert.equal(engine.engineGain.gain.value,0);assert.equal(engine.rollingGain.gain.value,0);assert.equal(engine.screechGain.gain.value,0);
engine.toggleMute();assert.equal(engine.masterGain.gain.value,0);
for(const course of ['meadow','sunset','frosty','neon']){
 const music=new CourseMusic(course),events=[];music.ctx=ctx;music.bus=node();music.fxSend=node();music.sample=(kind,f,t,len,volume)=>events.push({kind,f,t,len,volume});music.kick=music.snare=music.hat=()=>{};
 for(let i=0;i<256;i++)music.playStep(i,i*.1,.1);
 assert.ok(events.some(e=>e.kind==='strings')&&events.some(e=>e.kind==='bass'));assert.ok(events.some(e=>e.kind===(course==='meadow'?'piano':course==='neon'?'brass':'marimba')));
 music.setPaused(true);const count=events.length;music.pump();assert.equal(events.length,count);music.setPaused(false);assert.ok(music.nextAt>ctx.currentTime);music.finalLap();assert.equal(music.tempo,1.15);
}
console.log('PASS instrumental PCM/envelopes, quieter layered engine, surface audio, landing/mute/stop, four arrangements and music pause/final lap');
globalThis.document={createElement:()=>createCanvas(128,128)};
for(const driver of DRIVERS){
 const {driverHead:head}=createKartMesh({...driver,number:1});
 if(driver.id!=='ace')assert.equal(head.userData.blinkEyes.length,2,driver.name+' independent eyes');
 let blink=false;for(let i=0;i<300;i++){animateDriverReaction(head,1/60,{hit:i<30,boost:i>=30&&i<90,air:i>=90&&i<150,celebrate:i>=150});if((head.userData.blinkEyes||[]).some(e=>e.scale.y<.3))blink=true;assert.ok(Number.isFinite(head.rotation.x)&&Math.abs(head.rotation.x)<.2);}
 if(driver.id!=='ace')assert.ok(blink,driver.name+' blinks');
 assert.ok(head.position.y>=1.05&&head.position.y<1.1,'bounded celebration motion');console.log('PASS',driver.name,'blink / hit / boost / airborne / celebration reaction');
}
delete globalThis.document;
