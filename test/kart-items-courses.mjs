import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { build } from 'esbuild';
import { createCanvas } from '@napi-rs/canvas';
import * as THREE from 'three';
import { COURSES as MENU_COURSES } from '../src/games/kart.js';

await build({ stdin: { contents: `
export { createItemModel, ITEM_NAMES } from './web/kart/game/itemModels';
export { ItemSystem, ITEM_KINDS } from './web/kart/game/items';
export { TrackSystem } from './web/kart/game/track';
export { applyCartoonStyle } from './web/kart/game/style';
`, resolveDir: process.cwd(), loader: 'ts' }, bundle: true, platform: 'node', format: 'esm', packages: 'external', outfile: 'dist/items-courses-test.mjs' });
const { createItemModel, ITEM_NAMES, ItemSystem, ITEM_KINDS, TrackSystem, applyCartoonStyle } = await import('../dist/items-courses-test.mjs');
globalThis.document = { createElement: () => createCanvas(256, 256) };
const images = JSON.parse(fs.readFileSync('public/kart-items.json', 'utf8'));
const art = {};
vm.runInNewContext(fs.readFileSync('public/kart-art.js', 'utf8')
  .replace('/*KART_ITEMS*/', 'var KART_ITEMS = ' + JSON.stringify(images) + ';')
  .replace('/*KART_COURSES*/', fs.readFileSync('public/kart-courses.js', 'utf8')), art);
for (const kind of [...ITEM_KINDS, 'box']) {
  const m = createItemModel(kind), bounds = new THREE.Box3().setFromObject(m);
  assert.equal(m.name, 'item-' + kind);
  assert.ok(!bounds.isEmpty() && bounds.min.y > -.2 && bounds.max.y < 2);
  let draws = 0;
  m.traverse(o => { if(o.isMesh || o.isLineSegments) draws++; });
  assert.ok(draws <= 10, kind + ' keeps a bounded draw count');
  const png = fs.readFileSync(`public/item-previews/${kind}.png`);
  assert.equal(images[kind], 'data:image/png;base64,' + png.toString('base64'));
  assert.ok(art.KA.item(kind).includes(images[kind]), 'phone uses same rendered model');
}
assert.equal(ITEM_NAMES.green, 'Green Shell'); assert.equal(ITEM_NAMES.ride, 'Bullet Bill');
// The inflated star uses custom surfaces; reversed winding would disappear on GPU
// even though the two-sided offline preview could still paint its triangles.
const starModel=createItemModel('star');let frontNormal=0,frontVertices=0;
starModel.traverse(o=>{if(!o.isMesh)return;const p=o.geometry.attributes.position,n=o.geometry.attributes.normal;
  for(let i=0;i<p.count;i++)if(p.getZ(i)>.22&&Math.abs(p.getX(i))<.3){frontNormal+=n.getZ(i);frontVertices++;}
});
assert.ok(frontVertices>0&&frontNormal/frontVertices>.4,'inflated star faces outward for GPU culling');
console.log('PASS all 15 item models, question box, shared icons and bounded draw calls');

for(const menuCourse of MENU_COURSES) {
  const scene = new THREE.Scene(), track = new TrackSystem(scene, menuCourse.id);
  assert.equal(track.course.name, menuCourse.name);
  const itemSystem = new ItemSystem(scene, track);
  assert.equal(itemSystem.boxes.length, 20);
  assert.ok(itemSystem.boxes.every(b => b.mesh.name === 'item-box'));
  itemSystem.update(.016, 1, [], new Set(), () => {});
  assert.ok(itemSystem.boxes[0].mesh.rotation.y > 0);
  const receiver = { config: {id: 'target', isPlayer: false}, rank: 1, position: {x:0,y:0,z:-40}, rotation:{y:0}, speed:20, spinOutTimer:0 };
  const racer = { config: {id:'racer',isPlayer:false,topSpeed:40}, rank:2, position:{x:0,y:0,z:0}, rotation:{y:0}, speed:20, spinOutTimer:0, boostTimer:0, boostMultiplier:1, invulnerableTimer:0 };
  for(const kind of ['banana','green','red','blue','fake','bomb'])for(const aim of ['front','back']) {
    itemSystem.held.set('racer', { kind, shown:kind, count:1, rollLeft:0, trailing:false, trail:[] });
    itemSystem.press('racer', [racer,receiver], aim);itemSystem.release('racer',[racer,receiver],aim);
    const thrown = itemSystem.thrown.at(-1);
    assert.equal(thrown.mesh.name,'item-'+kind);
    assert.ok(aim === 'front' ? thrown.z > 0 : thrown.z < 0, 'throw direction preserved');
    if(kind === 'red' && aim === 'front')assert.equal(thrown.target, 'target');
  }
  itemSystem.reset();assert.equal(itemSystem.thrown.length,0);
  assert.ok(itemSystem.boxes.every(b=>b.mesh.visible));
  applyCartoonStyle(scene, track);
  const landmarks = track.sceneryGroup.getObjectByName('course-landmarks-' + menuCourse.id);
  assert.ok(landmarks.userData.townBuildings >= 12, 'populated village district');
  assert.ok(landmarks.userData.drawCalls <= 40, 'scenery is batched for split-screen');
  for(const site of landmarks.children.filter(c=>c.userData.clearanceRadius)) {
    const radius = site.userData.clearanceRadius;
    assert.ok(track.trackPoints.every(p => Math.hypot(p.x-site.position.x,p.z-site.position.z) >= track.roadWidth/2 + radius + 4 - .01), site.name + ' road clearance');
    const s = track.shortcut;
    if(s){const dx=s.bx-s.ax,dz=s.bz-s.az,t=Math.max(0,Math.min(1,((site.position.x-s.ax)*dx+(site.position.z-s.az)*dz)/(dx*dx+dz*dz)));
      assert.ok(Math.hypot(site.position.x-s.ax-dx*t,site.position.z-s.az-dz*t)>=s.w/2+radius+4-.01, site.name+' shortcut clearance');}
  }
  assert.ok(art.KA.course(menuCourse).startsWith('<img '));
  console.log('PASS',menuCourse.name,landmarks.userData.townBuildings,'houses;',landmarks.userData.drawCalls,'scenery draws; throw directions and road/shortcut clearance');
}
delete globalThis.document;
