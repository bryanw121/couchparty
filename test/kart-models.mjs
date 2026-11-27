// Exercise the real server menu, race assembly and animation without WebGL.
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { build } from 'esbuild';
import * as THREE from 'three';
import { DRIVERS, meta, start } from '../src/games/kart.js';

fs.mkdirSync('dist', { recursive: true });
await build({ stdin: { contents: `
  export { CouchEngine } from './web/kart/game/couchEngine';
  export { KartPhysicsEngine } from './web/kart/game/kartPhysics';
  export { toonGradient } from './web/kart/game/style';
`, resolveDir: process.cwd(), loader: 'ts' }, bundle: true, platform: 'node', format: 'esm', packages: 'external', outfile: 'dist/kart-model-test.mjs' });
const { CouchEngine, KartPhysicsEngine, toonGradient } = await import('../dist/kart-model-test.mjs');
globalThis.document = { createElement: () => ({ style: {}, getContext: () => ({
  createRadialGradient: () => ({ addColorStop() {} }), fillRect() {},
}) }) };
const portraits = {};
vm.runInNewContext(fs.readFileSync('public/kart-portraits.js', 'utf8'), portraits);
const art = { ...portraits };
vm.runInNewContext(fs.readFileSync('public/kart-art.js', 'utf8').replace('/*KART_PORTRAITS*/', ''), art);
const expected = ['Luigi', 'Daisy', 'Bowser', 'Yoshi', 'Peach', 'Toad', 'Mario', 'Donkey Kong'];
assert.equal(meta.name, 'Kario Mart');
assert.deepEqual(DRIVERS.map(d => d.name), expected);

for (const driver of DRIVERS) {
  const p = { id: 'phone-1', name: 'Player', isHost: true };
  const relayed = [];
  const menu = start({ players: () => [p], allPlayers: () => [p], broadcast() {}, toTv: m => relayed.push(m) });
  const input = (a, v) => menu.input(p, { t: 'kmenu', a, v });
  input('choose', 'cup'); input('choose', 'fast');
  input('driver', driver.id); input('ready'); input('go');
  const pub = menu.pub();
  assert.equal(pub.phase, 'race');
  assert.equal(pub.racers[0].driver, driver.id);
  assert.equal(pub.racers[0].color, driver.color);
  menu.input(p, { t: 'kin', i: true, a: 'back', s: .5, g: true, d: true });
  assert.equal(relayed.at(-1).a, 'back', 'backward item throw still relays');

  // A stale room's paint/topper must not override the selected character ID.
  const race = Object.assign(Object.create(CouchEngine.prototype), {
    opts: { players: [{ ...pub.racers[0], color: '#abcdef', topper: 'unknown' }] },
    scene: new THREE.Scene(), gradient: toonGradient(), overlay: { appendChild() {} },
    shadows: new Map(), racers: [], humans: [], track: {}, onResize() {},
  });
  race.build();
  assert.equal(race.racers.length, 8);
  assert.equal(new Set(race.racers.map(r => r.state.config.topper)).size, 8);
  const human = race.humans[0], handles = human.handles;
  const who = driver.name.toLowerCase().replaceAll(' ', '');
  assert.equal(handles.rootGroup.name, who + '-kart');
  assert.equal(handles.driverHead.name, who + '-head');
  assert.equal(human.state.config.color, driver.color);
  assert.equal(human.state.config.name, 'Player');
  if (driver.id === 'lulu' || driver.id === 'bunbun') {
    assert.ok(handles.rootGroup.getObjectByName('princess-face'), 'corrected princess face');
  }
  let smoothMeshes = 0;
  handles.rootGroup.traverse(o => {
    if (!o.isMesh) return;
    for (const m of [o.material].flat()) if (m.userData.preserveShading) {
      assert.ok(m.isMeshStandardMaterial, 'smooth shading survives race toon pass'); smoothMeshes++;
    }
  });
  assert.ok(smoothMeshes > 20);
  const state = human.state;
  state.speed = 12; state.angularVelocity = .8;
  new KartPhysicsEngine({}, {}).syncMesh(state, handles, 1 / 60);
  for (const wheel of [handles.frontLeftWheel, handles.frontRightWheel, handles.rearLeftWheel, handles.rearRightWheel]) {
    assert.ok(wheel.children[0].rotation.x > 0, 'entire wheel assembly rolls');
    assert.ok(wheel.children[0].children.length > 2, 'detailed rim and tread assembly');
  }
  assert.ok(handles.frontLeftWheel.rotation.y > 0);
  assert.ok(handles.driverHead.rotation.y > 0);
  assert.ok(handles.steeringWheel.rotation.z < 0);
  const png = fs.readFileSync(`public/kart-portraits/${driver.id}.png`);
  assert.equal(portraits.KART_PORTRAITS[driver.id], 'data:image/png;base64,' + png.toString('base64'));
  assert.ok(art.KA.driver(driver).startsWith('<img '), 'menus use 3D portrait');
  console.log('PASS', driver.name, 'menu → race, CPU roster, shading, animation, portrait');
}
delete globalThis.document;
