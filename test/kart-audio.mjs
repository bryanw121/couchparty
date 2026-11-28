import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { build } from 'esbuild';
await build({ stdin: { contents: `export { countdownSamples, playCountdownCue } from './web/kart/game/countdownAudio'; export { CouchEngine } from './web/kart/game/couchEngine';`, resolveDir: process.cwd(), loader: 'ts' }, bundle: true, packages: 'external', platform: 'node', format: 'esm', outfile: 'dist/kart-audio-test.mjs' });
const { countdownSamples, playCountdownCue, CouchEngine } = await import('../dist/kart-audio-test.mjs');
const cues = [1, 2, 3].map(n => countdownSamples(false, 44100, n));
const go = countdownSamples(true);
for(const samples of [...cues,go]) {
  assert.ok(samples.every(Number.isFinite));
  assert.ok(Math.max(...samples) < .75);
  assert.ok(samples.reduce((s,v) => s+v*v,0)/samples.length > .001);
  assert.ok(Math.abs(samples.at(-1)) < .001, 'smooth release avoids clicks');
}
function crossings(a){let n=0;for(let i=1;i<6600;i++)if(a[i-1]<0&&a[i]>=0)n++;return n;}
assert.deepEqual(cues[0],cues[1]);assert.deepEqual(cues[1],cues[2]);
assert.ok(Math.abs(crossings(go)/crossings(cues[0])-2)<.06,'GO is an octave above the three identical ready beeps');
assert.ok(go.length > cues[0].length * 2, 'GO is a longer single signal');
const sources = [], makeNode = () => ({ gain: {value:0},connect(){return this;},disconnect(){} });
const ctx = { sampleRate:44100, currentTime:2, createGain:makeNode, createBuffer:(c,n,r)=>({n,r,copyToChannel(a){this.samples=a;}}), createBufferSource:()=>{const s={...makeNode(),start(t){this.started=t;}};sources.push(s);return s;} };
playCountdownCue(ctx,{},false,1);playCountdownCue(ctx,{},false,3);playCountdownCue(ctx,{},true);
assert.equal(sources[0].buffer,sources[1].buffer,'reuse decoded cue');assert.equal(sources[2].started,2);
console.log('PASS countdown: three matching ready beeps, octave-up GO, smooth envelopes and cached playback');

const tv = fs.readFileSync('public/tv.html','utf8');
const nodes = {}, tracks = [];
class Audio {
  constructor(url){this.url=url;this.paused=true;this.currentTime=0;this.plays=0;tracks.push(this);}
  play(){this.paused=false;this.plays++;return Promise.resolve();} pause(){this.paused=true;} load(){}
}
const fixture = {Audio, MUSIC_BASE:'https://example.test/audio/',AUDIO_BASE:'https://example.test/',$:id=>nodes[id]||(nodes[id]={style:{}})};
vm.createContext(fixture);
const block=tv.slice(tv.indexOf("  var musicWant ="),tv.indexOf('  var FX ='));
vm.runInContext(block,fixture);
const lobby={phase:'lobby',selected:'kart'}, race={phase:'game',selected:'kart',g:{kind:'kart',phase:'race',raceId:'race-1'}};
fixture.musicFor(lobby);fixture.music(true);fixture.musicFor(race);fixture.music(false);
fixture.KART={raceId:'race-1'};fixture.raceId='race-1';fixture.S=race;
const callback=tv.match(/onCelebration: (function \(\) \{[\s\S]*?\n        \}),/)[1];
const celebration=vm.runInContext('('+callback+')',fixture);
celebration();const victory=tracks.find(t=>t.url.endsWith('/kart-victory.mp3'));
assert.ok(victory && victory.loop && !victory.paused);
assert.equal(nodes.musicCredit.style.display,'block');
const plays= victory.plays;victory.currentTime=14;
fixture.musicFor({phase:'game',selected:'kart',g:{kind:'kart',phase:'standings'}});fixture.music(true);
fixture.musicFor({phase:'final',selected:'kart',g:null,results:[{id:'winner'}]});fixture.music(true);
assert.equal(victory.plays,plays,'standings/results do not restart the track');assert.equal(victory.currentTime,14);
fixture.musicFor({...race,g:{...race.g,raceId:'race-2'}});fixture.music(false);assert.ok(victory.paused,'next race stops celebration');
fixture.musicFor(lobby);fixture.music(true);assert.equal(fixture.musicWant,'lobby');assert.ok(victory.paused);
console.log('PASS victory: finish callback, looping replay/podium, Cup standings, final results, next race and lobby handoff');

const originalTimeout=globalThis.setTimeout,timers=[];globalThis.setTimeout=(fn)=>{timers.push(fn);return 1;};
let celebrations=0,results=0;
const engine=Object.assign(Object.create(CouchEngine.prototype),{opts:{onCelebration:()=>celebrations++,onFinish:()=>results++},banner:{style:{}},disposed:false});
try{engine.finish([]);assert.equal(celebrations,1);engine.disposed=true;timers.at(-1)();assert.equal(results,0,'disposed race cannot send stale results');}finally{globalThis.setTimeout=originalTimeout;}
assert.ok(fs.statSync('audio/kart-victory.mp3').size>100000);
console.log('PASS engine finish starts celebration immediately; disposed races cannot fire delayed results');
