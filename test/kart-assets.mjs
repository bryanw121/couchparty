// Runtime geometry and audio scheduling checks. No browser or GPU required.
import assert from 'node:assert/strict';
import { build } from 'esbuild';
import * as THREE from 'three';
import vm from 'node:vm';
import fs from 'node:fs';

await build({ stdin: { contents: `export { createKartMesh } from './web/kart/game/kartModel';
export { CourseMusic } from './web/kart/game/music';
export { soundEngine } from './web/kart/game/audio';
export { ItemSystem } from './web/kart/game/items';
export { TrackSystem } from './web/kart/game/track';
export { KartPhysicsEngine } from './web/kart/game/kartPhysics';
export { applyCartoonStyle } from './web/kart/game/style';
export { COURSES } from './web/kart/game/tracks';`, resolveDir: process.cwd(), loader: 'ts' },
  bundle: true, platform: 'node', format: 'esm', packages: 'external', outfile: 'dist/kart-test.mjs' });
const { createKartMesh, CourseMusic, soundEngine, ItemSystem, TrackSystem, KartPhysicsEngine, applyCartoonStyle, COURSES } = await import('../dist/kart-test.mjs');

// Texture generation uses canvas drawing only; geometry remains real Three.js geometry.
const drawing = new Proxy({}, { get: (_, key) => key === 'createLinearGradient' || key === 'createRadialGradient'
  ? () => ({ addColorStop() {} }) : () => {} });
globalThis.document = { createElement: () => ({ getContext: () => drawing }) };
const { DRIVERS } = await import('../src/games/kart.js');
const { handleSocket } = await import('../src/game.js');
class Socket {
  readyState = 1; messages = []; listeners = {};
  constructor() { handleSocket(this); }
  addEventListener(event, fn) { this.listeners[event] = fn; }
  send(raw) { this.messages.push(JSON.parse(raw)); }
  input(msg) { this.listeners.message({ data: JSON.stringify(msg) }); }
  state() { return this.messages.findLast(m => m.t === 'state').s; }
}
const tv = new Socket(); tv.input({ t: 'tv:hello' });
const code = tv.messages.find(m => m.t === 'tv:room').code;
const phone = new Socket(); phone.input({ t: 'join', room: code, name: 'Driver' });
assert.equal(phone.state().games.find(g => g.id === 'kart').name, 'Kario Mart');
phone.input({ t: 'pick', game: 'kart' }); phone.input({ t: 'start' });
for (const v of ['vs', 'fast']) phone.input({ t: 'kmenu', a: 'choose', v });
phone.input({ t: 'kmenu', a: 'driver', v: 'ace' }); phone.input({ t: 'kmenu', a: 'ready' });
phone.input({ t: 'kmenu', a: 'choose', v: 'neon' }); phone.input({ t: 'kmenu', a: 'go' });
assert.equal(tv.state().g.phase, 'race'); assert.equal(tv.state().g.racers[0].topper, 'cap');
assert.equal(tv.state().g.course, 'neon');
const artContext = {}; vm.runInNewContext(fs.readFileSync('public/kart-art.js', 'utf8').replace('/*KART_PORTRAITS*/', () => fs.readFileSync('public/kart-portraits.js', 'utf8')), artContext);
const silhouettes = new Set();
for (const d of DRIVERS) {
  const kart = createKartMesh({ ...d, accentColor: '#ffffff', helmetColor: d.color, visorColor: '#20233d', number: 1 });
  let meshes = 0;
  kart.rootGroup.updateMatrixWorld(true);
  kart.rootGroup.traverse(o => {
    if (!o.isMesh) return;
    meshes++;
    const bounds = new THREE.Box3().setFromObject(o);
    for (const v of [...bounds.min.toArray(), ...bounds.max.toArray()]) assert.ok(Number.isFinite(v));
  });
  assert.ok(meshes > 40, d.id + ' has a complete driver and kart');
  // A public physics update must rotate every part of each wheel, including rims and treads.
  const wheels=[kart.frontLeftWheel,kart.frontRightWheel,kart.rearLeftWheel,kart.rearRightWheel];
  const orientations=()=>{
    kart.rootGroup.updateMatrixWorld(true);
    const result=new Map();
    for(const wheel of wheels){
      const inverse=wheel.getWorldQuaternion(new THREE.Quaternion()).invert();
      wheel.traverse(o=>{if(o.isMesh)result.set(o.uuid,inverse.clone().multiply(o.getWorldQuaternion(new THREE.Quaternion())));});
    }
    return result;
  };
  const beforeSpin=orientations();
  const physics=new KartPhysicsEngine(null,null); // spin-out rendering does not query the track
  physics.updateRacer({spinOutTimer:.3,speed:15,position:{x:0,y:.1,z:0},rotation:{y:0,pitch:0,roll:0},angularVelocity:.2,isDrifting:false}, {}, kart, .016, []);
  for(const [id,rotation] of orientations())assert.ok(rotation.angleTo(beforeSpin.get(id))>.01,'the full wheel assembly spins');
  const size = new THREE.Box3().setFromObject(kart.driverHead).getSize(new THREE.Vector3());
  silhouettes.add(size.toArray().map(n => n.toFixed(3)).join(','));
  const portrait = artContext.KA.driver(d);
  assert.ok(portrait.startsWith('<img') && portrait.includes('data:image/png;base64,'));
  const png = Buffer.from(artContext.KARIO_PORTRAITS[d.id].split(',')[1], 'base64');
  assert.equal(png.subarray(1, 4).toString(), 'PNG');
  assert.equal(png.readUInt32BE(16), 256); assert.equal(png.readUInt32BE(20), 256);
  assert.ok(!portrait.includes('undefined'));
}
assert.ok(silhouettes.size >= 6, 'roster has distinct head silhouettes');
for (const course of Object.values(COURSES)) {
  const scene = new THREE.Scene(); const track = new TrackSystem(scene, course.id);
  scene.add(track.sceneryGroup); const style = applyCartoonStyle(scene, track);
  const items = new ItemSystem(scene, track);
  style.update(10); assert.equal(style.pads.length, 8);
  const racer = { config: { id: 'test' }, position: { x: 0, y: 0, z: 0 }, rotation: { y: 0 }, rank: 1 };
  for (const kind of ['green', 'red', 'blue', 'banana', 'bomb', 'fake']) {
    items.held.set('test', { kind, rollLeft: 0, shown: kind, count: 1, trailing: false, trail: [] });
    items.press('test', [racer]); items.release('test', [racer]);
    assert.ok(!items.held.has('test'), 'item fires: ' + kind);
  }
  scene.updateMatrixWorld(true);
  scene.traverse(o => { if (o.isMesh) { o.geometry.computeBoundingBox(); assert.ok(Number.isFinite(o.geometry.boundingBox.min.x)); } });
  items.reset();
}

// Reject invalid Web Audio automation and past scheduling across every arrangement.
let ctx;
let scheduled = 0;
const param = () => ({ value: 0, setValueAtTime(v, t) { check(v, t); }, exponentialRampToValueAtTime(v, t) { assert.ok(v > 0); check(v, t); }, setTargetAtTime(v, t) { check(v, t); } });
function check(v, t) { assert.ok(Number.isFinite(v) && Number.isFinite(t)); assert.ok(t >= ctx.currentTime - 0.001); }
function node() { return { gain: param(), frequency: param(), Q: param(), delayTime: param(), threshold: param(), knee: param(), ratio: param(), attack: param(), release: param(), connect(n) { return n; }, disconnect() {}, start(t = ctx.currentTime) { check(1, t); scheduled++; }, stop(t) { check(1, t); this.onended?.(); } }; }
ctx = { currentTime: 0, sampleRate: 22050, state: 'running', destination: node(), createGain: node, createBiquadFilter: node,
  createOscillator: node, createBufferSource: node, createDelay: node, createDynamicsCompressor: node,
  createBuffer: (_, length) => ({ getChannelData: () => new Float32Array(length) }) };
const realInterval = globalThis.setInterval, realTimeout = globalThis.setTimeout;
let pump;
globalThis.setInterval = fn => { pump = fn; return 123; };
globalThis.clearInterval = () => {};
globalThis.setTimeout = fn => { fn(); return 456; };
soundEngine.adopt(ctx);
for (const course of Object.keys(COURSES)) {
  const song = new CourseMusic(course); song.start();
  for (let i = 0; i < 2400; i++) { ctx.currentTime += 0.025; pump(); }
  song.finalLap(); pump();
  ctx.currentTime += 300;
  const before = scheduled; pump(); assert.ok(scheduled - before < 25, 'resuming never floods overdue notes');
  song.stop(); song.start(); pump(); song.stop();
}
globalThis.setInterval = realInterval; globalThis.setTimeout = realTimeout;
assert.ok(scheduled > 3000);
console.log('PASS: phone/TV menu flow, 8 driver models/portraits, 4 courses, 6 projectiles, all music arrangements, final lap, pause recovery and restart.');
