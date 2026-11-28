import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import {createKartMesh} from './game/kartModel';
import {createDriver} from './game/characterSculpt';
import {createItemModel,ITEM_NAMES} from './game/itemModels';
import {TrackSystem} from './game/track';
import {COURSES} from './game/tracks';
import {applyCartoonStyle,blobShadow} from './game/style';
import {configureArtRenderer,addArtLighting} from './game/artDirection';
import {DRIVERS} from '../../src/games/kart.js';

const view=document.getElementById('view')!,status=document.getElementById('status')!;
const collection=document.getElementById('collection') as HTMLSelectElement,model=document.getElementById('model') as HTMLSelectElement,lighting=document.getElementById('lighting') as HTMLSelectElement;
const params=new URLSearchParams(location.search);
try{
 const renderer=new THREE.WebGLRenderer({antialias:true});renderer.setPixelRatio(Math.min(devicePixelRatio,2));renderer.shadowMap.enabled=true;configureArtRenderer(renderer);view.appendChild(renderer.domElement);
 const camera=new THREE.PerspectiveCamera(36,1,.03,1200),controls=new OrbitControls(camera,renderer.domElement);controls.enableDamping=true;controls.autoRotate=true;controls.autoRotateSpeed=1.2;controls.maxPolarAngle=Math.PI*.49;
 let scene:THREE.Scene,rig:{dispose:()=>void},track:TrackSystem|undefined,style:ReturnType<typeof applyCartoonStyle>|undefined;
 const source=()=>collection.value==='item'?[...Object.entries(ITEM_NAMES).map(([id,name])=>({id,name})),{id:'box',name:'Item Box'}]:collection.value==='course'?Object.values(COURSES):DRIVERS;
 function choices(pick?:string){model.replaceChildren(...source().map(o=>{const option=document.createElement('option');option.value=o.id;option.textContent=o.name;return option;}));if(pick&&source().some(o=>o.id===pick))model.value=pick;show();}
 function shortcutView(){if(!track)return;const route=track.adventure,target=route.point(.45),a=route.point(0),b=route.point(1),direction=b.sub(a).normalize();controls.target.copy(target);camera.position.copy(target).add(new THREE.Vector3(-direction.z*34-direction.x*38,32,direction.x*34-direction.z*38));controls.update();}
 function show(){
  rig?.dispose();const oldScene=scene;scene=new THREE.Scene();scene.background=new THREE.Color('#d9edf6');track=undefined;style=undefined;
  if(oldScene){const geometries=new Set<THREE.BufferGeometry>(),materials=new Set<THREE.Material>();oldScene.traverse(o=>{const mesh=o as THREE.Mesh;if(!mesh.isMesh)return;geometries.add(mesh.geometry);for(const m of [mesh.material].flat())materials.add(m);});geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());oldScene.clear();}
  const course=COURSES[collection.value==='course'?model.value:lighting.value]||COURSES.meadow;rig=addArtLighting(scene,renderer,course.theme);
  document.getElementById('shortcut')!.hidden=collection.value!=='course';
  if(collection.value==='course'){
   track=new TrackSystem(scene,course.id);style=applyCartoonStyle(scene,track);const p=track.trackPoints[22];controls.target.set(p.x,p.y+4,p.z);camera.position.set(p.x+46,p.y+33,p.z+65);controls.minDistance=12;controls.maxDistance=420;if(params.get('feature')==='shortcut')shortcutView();
  }else{
   const driver=DRIVERS.find(d=>d.id===model.value)||DRIVERS[0],config={...driver,number:1};let object:THREE.Group;
   if(collection.value==='item')object=createItemModel(model.value as any);
   else if(collection.value==='character'){object=new THREE.Group();createDriver(object,config).scale.setScalar(1.18);}
   else object=createKartMesh(config).rootGroup;
   scene.add(object);const bounds=new THREE.Box3().setFromObject(object),center=bounds.getCenter(new THREE.Vector3()),size=bounds.getSize(new THREE.Vector3());const extent=Math.max(size.x,size.y,size.z);
   const floor=new THREE.Mesh(new THREE.CircleGeometry(20,80),new THREE.MeshStandardMaterial({color:0xe4f1f6,roughness:.83}));floor.rotation.x=-Math.PI/2;floor.position.y=bounds.min.y-.025;floor.receiveShadow=true;scene.add(floor);
   const shadow=blobShadow();shadow.position.y=bounds.min.y-.015;shadow.scale.setScalar(extent/3);scene.add(shadow);
   controls.target.copy(center);camera.position.copy(center).add(new THREE.Vector3(.9,.5,1.4).multiplyScalar(extent*1.55));controls.minDistance=extent*.8;controls.maxDistance=extent*5;
  }
  controls.update();status.hidden=true;
 }
 collection.onchange=()=>choices();model.onchange=show;lighting.onchange=show;document.getElementById('shortcut')!.onclick=shortcutView;
 document.getElementById('rotate')!.onclick=()=>{controls.autoRotate=!controls.autoRotate;document.getElementById('rotate')!.textContent=controls.autoRotate?'Pause rotation':'Rotate model';};
 function resize(){renderer.setSize(innerWidth,innerHeight);camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix();}addEventListener('resize',resize);resize();if(['course','kart','character','item'].includes(params.get('collection')||''))collection.value=params.get('collection')!;choices(params.get('model')||undefined);
 let last=performance.now();function frame(now:number){const dt=Math.min(.05,(now-last)/1000);last=now;controls.update();if(track){track.features.active=true;track.update(now/1000,dt);}style?.update(now/1000);renderer.render(scene,camera);requestAnimationFrame(frame);}requestAnimationFrame(frame);
}catch(e){status.textContent='This device could not open the 3D studio. '+String(e);}
