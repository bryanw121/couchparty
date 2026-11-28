import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import type {CourseTheme} from './tracks';

// Race and art-review studio use the same tone mapping, reflections and light rig.
export function configureArtRenderer(renderer:THREE.WebGLRenderer){
  renderer.outputColorSpace=THREE.SRGBColorSpace;
  renderer.toneMapping=THREE.NeutralToneMapping;
  renderer.toneMappingExposure=1.02;
  renderer.shadowMap.type=THREE.PCFSoftShadowMap;
}
export function createArtLightRig(theme:CourseTheme,shadows=true){
  const ambient=new THREE.HemisphereLight(theme.hemiSky,theme.glow?0x302b52:0x968878,theme.glow?.42:.36);
  const sun=new THREE.DirectionalLight(theme.sunColor,theme.sun*1.3);sun.position.set(-250,390,230);
  sun.name='course-sun';sun.castShadow=shadows;
  sun.shadow.mapSize.set(shadows ? 2048 : 1024,shadows ? 2048 : 1024);
  sun.shadow.bias=-.00008;sun.shadow.normalBias=.06;
  Object.assign(sun.shadow.camera,{left:-330,right:330,top:330,bottom:-330,near:1,far:1100});
  sun.shadow.camera.updateProjectionMatrix();
  const fill=new THREE.DirectionalLight(0xdceeff,.28);fill.position.set(80,35,55);
  const rim=new THREE.DirectionalLight(theme.glow?0xb7a2ff:0xffefd4,.55);rim.position.set(15,70,-95);
  return {sun,ambient,fill,rim};
}
export function addArtLighting(scene:THREE.Scene,renderer:THREE.WebGLRenderer,theme:CourseTheme){
  const pmrem=new THREE.PMREMGenerator(renderer),room=new RoomEnvironment();
  const environment=pmrem.fromScene(room,.05);room.dispose();pmrem.dispose();
  scene.environment=environment.texture;scene.environmentIntensity=theme.glow?.5:.38;
  const {sun,ambient,fill,rim}=createArtLightRig(theme,renderer.shadowMap.enabled);scene.add(sun,ambient,fill,rim);
  return {dispose(){sun.shadow.dispose();environment.dispose();scene.environment=null;scene.remove(sun,ambient,fill,rim);}};
}

const clothTextures=new Map<string,THREE.CanvasTexture>();
export function surfaceTexture(kind:'fabric'|'rubber'|'stone'|'wood'){
  if(clothTextures.has(kind))return clothTextures.get(kind)!;
  const c=document.createElement('canvas');c.width=c.height=128;const g=c.getContext('2d')!;
  g.fillStyle=kind==='wood'?'#b38664':'#d8d8d8';g.fillRect(0,0,128,128);
  let seed=41;const rnd=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;};
  for(let i=0;i<1800;i++){
    const value=Math.round(150+rnd()*80);g.fillStyle=`rgb(${value},${value},${value})`;
    const x=rnd()*128,y=rnd()*128;
    g.fillRect(x,y,kind==='wood'?1:kind==='fabric'?3:2,kind==='wood'?12:1);
  }
  const t=new THREE.CanvasTexture(c);t.wrapS=t.wrapT=THREE.RepeatWrapping;t.repeat.set(kind==='fabric'?5:2,kind==='fabric'?5:2);
  clothTextures.set(kind,t);return t;
}
