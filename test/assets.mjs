import assert from 'node:assert/strict';
import { gameAsset } from '../src/assets.js';
const ref='024f426ec9924013a2a03cce523ffb6777fd908e';
process.env.PAGES_REF=ref;
const requests=[];
globalThis.fetch=async url=>{requests.push(url);return new Response('asset bytes');};
for(const [path,type] of [['web-dist/kart.js','text/javascript'],['web-dist/kart-art-review.js','text/javascript'],['web-dist/kart-solo.js','text/javascript'],['audio/kart-instrumental-preview.wav','audio/wav'],['audio/kart-countdown-preview.wav','audio/wav'],['audio/kart-victory.mp3','audio/mpeg'],['public/art-review/four-player-lighting-study.png','image/png'],['public/art-review/presentation-study.png','image/png']]){
  const r=await gameAsset(new URL('https://game.test/game-assets/'+path+'?ref='+ref));
  assert.equal(r.status,200);assert.ok(r.headers.get('content-type').startsWith(type));
  assert.match(r.headers.get('cache-control'),/immutable/);assert.equal(await r.text(),'asset bytes');
  assert.equal(requests.at(-1),'https://raw.githubusercontent.com/bryanw121/couchparty/'+ref+'/'+path);
}
const unpinned=await gameAsset(new URL('https://game.test/game-assets/audio/kart-meadow.mp3'));
assert.equal(unpinned.headers.get('cache-control'),'public, max-age=60');
const count=requests.length;
for(const suffix of ['secrets.txt','web-dist/kart.js?ref=main','audio/other.mp3']){
  const r=await gameAsset(new URL('https://game.test/game-assets/'+suffix));
  assert.ok(r.status===404||r.status===503);
}
assert.equal(requests.length,count);
globalThis.fetch=async()=>new Response('missing',{status:404});
assert.equal((await gameAsset(new URL('https://game.test/game-assets/web-dist/kart.js'))).status,502);
console.log('Asset delivery: pinned public paths, MIME types, cache policy and failure handling passed.');
