import * as THREE from 'three';
type Surface='asphalt'|'grass'|'stucco'|'fabric'|'rubber';
const cache=new Map<Surface,{normal:THREE.DataTexture;roughness:THREE.DataTexture}>();
const tiled=new Map<string,{normal:THREE.DataTexture;roughness:THREE.DataTexture}>();
// Tileable lighting detail, separate from painted color. No geometry or draw calls added.
export function surfaceDetails(kind:Surface){
  if(cache.has(kind))return cache.get(kind)!;
  const size=256,height=new Float32Array(size*size),normal=new Uint8Array(size*size*4),roughness=new Uint8Array(size*size*4);
  const hash=(x:number,y:number)=>{let n=Math.imul(x+41,374761393)^Math.imul(y+17,668265263);n=Math.imul(n^(n>>>13),1274126177);return((n^(n>>>16))>>>0)/4294967295;};
  for(let y=0;y<size;y++)for(let x=0;x<size;x++){
    const u=x/size*Math.PI*2,v=y/size*Math.PI*2,grain=hash(x,y)-.5;
    height[y*size+x]=kind==='fabric'?.14*Math.sin(u*32)*Math.sin(v*32)+grain*.04:kind==='rubber'?.12*Math.sin(v*16)+grain*.03:kind==='grass'?.13*Math.sin(u*17+Math.sin(v*8))+grain*.12:kind==='stucco'?.08*Math.sin(u*8)*Math.cos(v*11)+grain*.1:grain*.16+.04*Math.sin(u*7)*Math.sin(v*9);
  }
  for(let y=0;y<size;y++)for(let x=0;x<size;x++){
    const at=(a:number,b:number)=>height[((b+size)%size)*size+(a+size)%size];
    const dx=(at(x+1,y)-at(x-1,y))*1.7,dy=(at(x,y+1)-at(x,y-1))*1.7,length=Math.hypot(dx,dy,1),i=(y*size+x)*4;
    normal.set([Math.round((.5-dx/length*.5)*255),Math.round((.5-dy/length*.5)*255),Math.round((.5+.5/length)*255),255],i);
    const base=kind==='asphalt'?.83:kind==='rubber'?.91:kind==='fabric'?.88:kind==='grass'?.94:.8;
    const value=Math.round(THREE.MathUtils.clamp(base+height[y*size+x]*.5,0,1)*255);roughness.set([value,value,value,255],i);
  }
  const make=(pixels:Uint8Array)=>{const t=new THREE.DataTexture(pixels,size,size);t.wrapS=t.wrapT=THREE.RepeatWrapping;t.colorSpace=THREE.NoColorSpace;t.magFilter=THREE.LinearFilter;t.minFilter=THREE.LinearMipmapLinearFilter;t.generateMipmaps=true;t.needsUpdate=true;return t;};
  const maps={normal:make(normal),roughness:make(roughness)};cache.set(kind,maps);return maps;
}
export function applySurfaceDetails(material:THREE.MeshStandardMaterial,kind:Surface,strength=.25,repeat=1){
  const maps=surfaceDetails(kind);
  const key=kind+':'+repeat;
  if(!tiled.has(key)){const normal=maps.normal.clone(),roughness=maps.roughness.clone();normal.repeat.setScalar(repeat);roughness.repeat.setScalar(repeat);tiled.set(key,{normal,roughness});}
  material.normalMap=tiled.get(key)!.normal;material.roughnessMap=tiled.get(key)!.roughness;
  material.normalScale.setScalar(strength);material.needsUpdate=true;
}
