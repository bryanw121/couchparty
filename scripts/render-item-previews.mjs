// Deterministic offline triangle renderer. Uses the race's actual meshes; no browser/GPU.
import fs from 'node:fs';
import zlib from 'node:zlib';
import { build } from 'esbuild';
import * as THREE from 'three';


fs.mkdirSync('dist', { recursive: true });
await build({ stdin: { contents: "export { createItemModel, ITEM_NAMES } from './web/kart/game/itemModels';", resolveDir: process.cwd(), loader: 'ts' }, bundle: true, platform: 'node', format: 'esm', packages: 'external', outfile: 'dist/item-model.mjs' });
const { createItemModel, ITEM_NAMES } = await import('../dist/item-model.mjs');
const DRIVERS = [...Object.entries(ITEM_NAMES).map(([id,name])=>({id,name})), {id:'box',name:'Item Box'}];
const SIZE = 192, SS = 2, W = SIZE * SS;
const light = new THREE.Vector3(-2.5, 4, 5).normalize();
const fill = new THREE.Vector3(3, 1, 1).normalize();
const camera = new THREE.OrthographicCamera(-1.2,1.2,1.2,-1.2,.1,15);
camera.position.set(1.4,1.8,4);camera.lookAt(0,0,0);camera.updateMatrixWorld();
const shadowCamera = new THREE.OrthographicCamera(-2.2,2.2,2.2,-2.2,.1,10);
shadowCamera.position.copy(light.clone().multiplyScalar(4).add(new THREE.Vector3(0,1,0))); shadowCamera.lookAt(0,1,0); shadowCamera.updateMatrixWorld();
const viewProjection = c => new THREE.Matrix4().multiplyMatrices(c.projectionMatrix,c.matrixWorldInverse);
const mainVP = viewProjection(camera), shadowVP = viewProjection(shadowCamera);
function triangles(group) {
  const result = []; group.updateMatrixWorld(true);
  group.traverse(o => {
    if (!o.isMesh) return;
    const geo=o.geometry, pos=geo.attributes.position, norm=geo.attributes.normal, idx=geo.index;
    const normalMatrix=new THREE.Matrix3().getNormalMatrix(o.matrixWorld);
    const vertices=[];
    for(let i=0;i<pos.count;i++) vertices.push({ p:new THREE.Vector3().fromBufferAttribute(pos,i).applyMatrix4(o.matrixWorld), n:new THREE.Vector3().fromBufferAttribute(norm,i).applyNormalMatrix(normalMatrix) });
    const count=idx?idx.count:pos.count;
    for(let i=0;i<count;i+=3) {
      const a=vertices[idx?idx.getX(i):i],b=vertices[idx?idx.getX(i+1):i+1],c=vertices[idx?idx.getX(i+2):i+2];
      const m=Array.isArray(o.material)?o.material[0]:o.material;
      result.push({ v:[a,b,c],color:m.color,rough:m.roughness??.5,metal:m.metalness??0 });
    }
  }); return result;
}
function project(v,m,size) { const p=v.clone().applyMatrix4(m); return [(p.x*.5+.5)*size,(.5-p.y*.5)*size,p.z]; }
function raster(tris,m,size,shade) {
  const depth=new Float32Array(size*size); depth.fill(Infinity);
  for(const tri of tris) {
    const v=tri.v.map(v=>project(v.p,m,size));
    const [a,b,c]=v,area=(b[1]-c[1])*(a[0]-c[0])+(c[0]-b[0])*(a[1]-c[1]);
    if(Math.abs(area)<1e-7)continue;
    const x0=Math.max(0,Math.floor(Math.min(a[0],b[0],c[0]))),x1=Math.min(size-1,Math.ceil(Math.max(a[0],b[0],c[0])));
    const y0=Math.max(0,Math.floor(Math.min(a[1],b[1],c[1]))),y1=Math.min(size-1,Math.ceil(Math.max(a[1],b[1],c[1])));
    for(let y=y0;y<=y1;y++)for(let x=x0;x<=x1;x++) {
      const px=x+.5,py=y+.5;
      const u=((b[1]-c[1])*(px-c[0])+(c[0]-b[0])*(py-c[1]))/area;
      const vv=((c[1]-a[1])*(px-c[0])+(a[0]-c[0])*(py-c[1]))/area, w=1-u-vv;
      if(u<0||vv<0||w<0)continue;
      const z=u*a[2]+vv*b[2]+w*c[2],i=y*size+x;
      if(z>=depth[i])continue;depth[i]=z;if(shade)shade(tri,u,vv,w,i,x,y);
    }
  } return depth;
}
const aces = x => Math.max(0,Math.min(1,(x*(2.51*x+.03))/(x*(2.43*x+.59)+.14)));
const srgb = x => x<=.0031308?x*12.92:1.055*Math.pow(x,1/2.4)-.055;
const outputDir='public/item-previews';fs.mkdirSync(outputDir,{recursive:true});
const atlas=new Uint8Array(SIZE*4*SIZE*4*4),embedded={};
for(const [index,d] of DRIVERS.entries()) {
  const group=createItemModel(d.id);
  const bounds=new THREE.Box3().setFromObject(group),center=bounds.getCenter(new THREE.Vector3()),size=bounds.getSize(new THREE.Vector3());
  const scale=1.75/Math.max(size.x,size.y,size.z);group.scale.setScalar(scale);group.position.copy(center.multiplyScalar(-scale));
  const tris=triangles(group),shadow=raster(tris,shadowVP,512),rgb=new Float32Array(W*W*4);
  raster(tris,mainVP,W,(tri,u,v,w,i)=>{
    const [a,b,c]=tri.v;
    const n=new THREE.Vector3().copy(a.n).multiplyScalar(u).addScaledVector(b.n,v).addScaledVector(c.n,w).normalize();
    const p=new THREE.Vector3().copy(a.p).multiplyScalar(u).addScaledVector(b.p,v).addScaledVector(c.p,w);
    const sp=project(p,shadowVP,512);let lit=0;
    for(const [dx,dy]of [[-1,-1],[1,-1],[-1,1],[1,1]]){const x=Math.round(sp[0])+dx,y=Math.round(sp[1])+dy;lit+=x<0||x>=512||y<0||y>=512||sp[2]-.0035<=shadow[y*512+x]?1:0;}
    lit/=4;
    const diffuse=Math.max(0,n.dot(light)),f=Math.max(0,n.dot(fill));
    const ambient=.26+.1*(n.y*.5+.5),direct=diffuse*lit*1.25;
    const view=camera.position.clone().sub(p).normalize(),half=view.clone().add(light).normalize();
    const spec=Math.pow(Math.max(0,n.dot(half)),22+(1-tri.rough)*65)*lit*(.045+(1-tri.rough)*.15);
    const rim=Math.pow(1-Math.max(0,n.dot(view)),3)*Math.max(0,n.x)*.16;
    const base=tri.color;
    rgb[i*4]=base.r*(ambient+direct+f*.16)+spec+rim*.55;
    rgb[i*4+1]=base.g*(ambient+direct*.94+f*.2)+spec*.96+rim*.8;
    rgb[i*4+2]=base.b*(ambient+direct*.88+f*.3)+spec*.9+rim;
    rgb[i*4+3]=1;
  });
  const rgba=new Uint8Array(SIZE*SIZE*4);
  for(let y=0;y<SIZE;y++)for(let x=0;x<SIZE;x++)for(let ch=0;ch<4;ch++) {
    let sum=0;for(let yy=0;yy<SS;yy++)for(let xx=0;xx<SS;xx++)sum+=rgb[((y*SS+yy)*W+x*SS+xx)*4+ch];
    rgba[(y*SIZE+x)*4+ch]=ch===3?Math.round(255*sum/(SS*SS)):Math.round(255*srgb(aces(sum/(SS*SS))));
  }
  const png=encodePNG(SIZE,SIZE,rgba);fs.writeFileSync(`${outputDir}/${d.id}.png`,png);embedded[d.id]='data:image/png;base64,'+png.toString('base64');
  const ax=index%4*SIZE,ay=Math.floor(index/4)*SIZE;
  for(let y=0;y<SIZE;y++)atlas.set(rgba.subarray(y*SIZE*4,(y+1)*SIZE*4),((ay+y)*SIZE*4+ax)*4);
  console.log(d.name,Math.round(png.length/1024)+' KB',tris.length+' triangles');
}
fs.writeFileSync(`${outputDir}/roster.png`,encodePNG(SIZE*4,SIZE*4,atlas));
fs.writeFileSync('public/kart-items.json',JSON.stringify(embedded)+'\n');

function encodePNG(width,height,pixels) {
  const table=Array.from({length:256},(_,n)=>{for(let i=0;i<8;i++)n=n&1?0xedb88320^(n>>>1):n>>>1;return n>>>0;});
  const crc=bytes=>{let n=0xffffffff;for(const b of bytes)n=table[(n^b)&255]^(n>>>8);return(n^0xffffffff)>>>0;};
  const chunk=(type,data)=>{const t=Buffer.from(type),out=Buffer.alloc(data.length+12);out.writeUInt32BE(data.length);t.copy(out,4);data.copy(out,8);out.writeUInt32BE(crc(Buffer.concat([t,data])),data.length+8);return out;};
  const hdr=Buffer.alloc(13);hdr.writeUInt32BE(width);hdr.writeUInt32BE(height,4);hdr[8]=8;hdr[9]=6;
  const raw=Buffer.alloc((width*4+1)*height);for(let y=0;y<height;y++){raw[y*(width*4+1)]=0;Buffer.from(pixels.buffer,pixels.byteOffset+y*width*4,width*4).copy(raw,y*(width*4+1)+1);}
  return Buffer.concat([Buffer.from([137,80,78,71,13,10,26,10]),chunk('IHDR',hdr),chunk('IDAT',zlib.deflateSync(raw,{level:9})),chunk('IEND',Buffer.alloc(0))]);
}
