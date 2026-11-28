import * as THREE from 'three';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';
import {createItemModel} from './itemModels';
import type {TrackSystem} from './track';
import type {RacerState} from '../types';

export const SHORTCUT_THEMES={
  meadow:{name:'Garden Dash',hint:'MUSHROOM THROUGH THE GATE',color:0x64bd78,surface:0xd9b67b},
  sunset:{name:'Tideway',hint:'LOW TIDE OR MUSHROOM',color:0x3ed3d6,surface:0xe8c88e},
  frosty:{name:'Crystal Cut',hint:'MUSHROOM THROUGH DEEP SNOW',color:0x88ddf3,surface:0xc4edfa},
  neon:{name:'Metro Express',hint:'GREEN GATE OR MUSHROOM',color:0xd478f2,surface:0x645fae},
} as const;
export type ShortcutEvent='enter'|'open'|'blocked'|'exit'|'snow';
export interface ShortcutSample {t:number;side:number;height:number;inside:boolean}
export class ShortcutAdventure {
  readonly group=new THREE.Group();
  readonly theme:typeof SHORTCUT_THEMES[keyof typeof SHORTCUT_THEMES];
  readonly length:number;
  readonly entryT:number;
  time=0;
  openUntil=0;
  onEvent?:(state:RacerState,event:ShortcutEvent)=>void;
  private ux=0;private uz=1;
  private gates:THREE.Group[]=[];
  private signals:THREE.MeshStandardMaterial[]=[];
  private water?:THREE.Mesh;
  private flakes:THREE.Mesh[]=[];
  private snowCleared=[0,0,0];
  private racers=new Map<string,{inside:boolean;entry:number;alert:number;passed:boolean}>();
  constructor(parent:THREE.Object3D,private track:TrackSystem){
    this.group.name='interactive-shortcut';parent.add(this.group);
    this.theme=SHORTCUT_THEMES[track.course.id as keyof typeof SHORTCUT_THEMES]||SHORTCUT_THEMES.meadow;
    const sc=track.shortcut;this.length=sc?Math.hypot(sc.bx-sc.ax,sc.bz-sc.az):0;this.entryT=.2;
    if(!sc||this.length<1)return;
    this.ux=(sc.bx-sc.ax)/this.length;this.uz=(sc.bz-sc.az)/this.length;
    // Gates sit beyond the shoulder; they can never close the main racing line.
    for(let t=.12;t<.4;t+=.01){if([-(sc.w/2+.8),0,sc.w/2+.8].every(side=>{const p=this.point(t,side);return track.getClosestTrackPoint(p.x,p.z).distanceToCenter>track.roadWidth/2+2;})){this.entryT=t;break;}}
    this.build();this.update(0,false);
  }
  point(t:number,side=0){const sc=this.track.shortcut!;return new THREE.Vector3(sc.ax+(sc.bx-sc.ax)*t-this.uz*side,sc.ay+(sc.by-sc.ay)*t,sc.az+(sc.bz-sc.az)*t+this.ux*side);}
  sample(x:number,z:number):ShortcutSample|null {
    const sc=this.track.shortcut;if(!sc)return null;
    const dx=x-sc.ax,dz=z-sc.az,t=(dx*this.ux+dz*this.uz)/this.length,side=-dx*this.uz+dz*this.ux;
    return {t,side,height:sc.ay+(sc.by-sc.ay)*Math.max(0,Math.min(1,t)),inside:t>=0&&t<=1&&Math.abs(side)<sc.w/2+.8};
  }
  get highTide(){return this.track.course.id==='sunset'&&Math.sin(this.time*Math.PI*2/14)>.3;}
  get gateOpen(){return this.openUntil>this.time||(this.track.course.id==='neon'&&this.time%9<4.5);}
  get mapColor(){return this.track.course.id==='sunset'?(this.highTide?'#fb9e6b':'#55e5cf'):this.gates.length?(this.gateOpen?'#55e5b8':'#ffba64'):'#8edff4';}
  reset(state:RacerState){this.racers.delete(state.config.id);}
  private material(color:number,metalness=.02){const m=new THREE.MeshStandardMaterial({color,roughness:.53,metalness});m.userData.preserveShading=true;return m;}
  private mesh(p:THREE.Object3D,geometry:THREE.BufferGeometry,m:THREE.Material,x=0,y=0,z=0){const o=new THREE.Mesh(geometry,m);o.position.set(x,y,z);o.castShadow=o.receiveShadow=true;p.add(o);return o;}
  private box(p:THREE.Object3D,m:THREE.Material,x:number,y:number,z:number,w:number,h:number,d:number){return this.mesh(p,new RoundedBoxGeometry(w,h,d,2,Math.min(.12,w*.15,h*.15,d*.15)),m,x,y,z);}
  private anchor(t:number){const g=new THREE.Group();g.position.copy(this.point(t));g.rotation.y=Math.atan2(this.ux,this.uz);this.group.add(g);return g;}
  private build(){
    const sc=this.track.shortcut!,id=this.track.course.id,ivory=this.material(0xfff4db),dark=this.material(0x263a51),paint=this.material(this.theme.color);
    const positions:number[]=[],uv:number[]=[],indices:number[]=[];
    for(let i=0;i<=24;i++){const t=i/24;for(const side of [-sc.w/2,sc.w/2]){const p=this.point(t,side);positions.push(p.x,p.y-.035,p.z);uv.push(side/sc.w+.5,t*this.length/6);}if(i<24){const k=i*2;indices.push(k,k+1,k+2,k+1,k+3,k+2);}}
    const geo=new THREE.BufferGeometry();geo.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));geo.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));geo.setIndex(indices);geo.computeVertexNormals();
    const texture=document.createElement('canvas');texture.width=128;texture.height=256;const ctx=texture.getContext('2d')!;ctx.fillStyle='#'+this.theme.surface.toString(16);ctx.fillRect(0,0,128,256);
    ctx.fillStyle=id==='frosty'?'#f1fcff':'#b79d75';for(let i=0;i<160;i++)ctx.fillRect(i*37%128,i*67%256,id==='frosty'?20:2,2);
    ctx.fillStyle='#fff6db';ctx.fillRect(2,0,3,256);ctx.fillRect(123,0,3,256);const map=new THREE.CanvasTexture(texture);map.colorSpace=THREE.SRGBColorSpace;map.wrapT=THREE.RepeatWrapping;
    this.mesh(this.group,geo,new THREE.MeshStandardMaterial({map,roughness:id==='frosty'?.2:.9})).name='shortcut-surface';
    for(let t=.08;t<.96;t+=.1){const marker=this.anchor(t);for(const s of [-1,1]){
      this.box(marker,paint,s*(sc.w/2+.5),.4,0,.3,.8,.3);
      this.box(marker,ivory,s*(sc.w/2+.5),.82,0,.48,.15,.48);
    }}
    // Readable signs and a mushroom model at the actual entrance, facing the racing approach.
    const entrance=new THREE.Group(),approach=this.track.trackPoints[Math.max(0,sc.ia-3)];
    const turnSide=Math.sign(approach.normalX*this.ux+approach.normalZ*this.uz)||1;
    entrance.name='mushroom-shortcut-sign';entrance.position.set(approach.x+approach.normalX*turnSide*(this.track.roadWidth/2+5),approach.y,approach.z+approach.normalZ*turnSide*(this.track.roadWidth/2+5));entrance.rotation.y=Math.atan2(approach.tangentX,approach.tangentZ);this.group.add(entrance);
    const sign=document.createElement('canvas');sign.width=512;sign.height=192;const sg=sign.getContext('2d')!;
    sg.fillStyle='#23334e';sg.fillRect(0,0,512,192);sg.fillStyle='#fff4db';sg.textAlign='center';sg.font='bold 49px sans-serif';sg.fillText(this.theme.name.toUpperCase(),256,72);sg.font='bold 23px sans-serif';sg.fillText(this.theme.hint,256,126);sg.font='20px sans-serif';sg.fillText(turnSide>0?'← SHORTCUT':'SHORTCUT →',256,166);
    const signTexture=new THREE.CanvasTexture(sign);signTexture.colorSpace=THREE.SRGBColorSpace;
    const signMat=new THREE.MeshStandardMaterial({map:signTexture,side:THREE.DoubleSide,roughness:.6});
    const board=this.mesh(entrance,new THREE.PlaneGeometry(7,2.6),signMat,0,3,0);board.rotation.y=Math.PI;
    this.box(entrance,ivory,0,1.4,0,.2,2.8,.2);
    const mushroom=createItemModel('boost');mushroom.position.set(0,4.5,0);mushroom.scale.setScalar(1.25);entrance.add(mushroom);
    if(id==='meadow'||id==='neon'){
      const arch=this.anchor(this.entryT);arch.name=id==='meadow'?'garden-breakaway-gate':'metro-timed-gate';
      for(const s of [-1,1]){
        this.box(arch,paint,s*(sc.w/2+.35),2.4,0,.65,4.8,.65);
        const pivot=new THREE.Group();pivot.position.set(s*sc.w/2,0,0);arch.add(pivot);pivot.userData.side=s;this.gates.push(pivot);
        this.box(pivot,id==='meadow'?ivory:paint,-s*sc.w/4,1.1,0,sc.w/2,.2,.25);
        this.box(pivot,id==='meadow'?ivory:paint,-s*sc.w/4,2.2,0,sc.w/2,.2,.25);
        for(let k=1;k<=5;k++)this.box(pivot,id==='meadow'?ivory:dark,-s*k*sc.w/12,1.7,0,.25,2.7,.32);
        const signal=this.material(0xf18e50);signal.emissive.setHex(0xf18e50);signal.emissiveIntensity=.3;this.signals.push(signal);this.mesh(arch,new THREE.SphereGeometry(.42,16,12),signal,s*(sc.w/2+.35),5,0);
      }
    }else if(id==='sunset'){
      const water=new THREE.Mesh(geo.clone(),new THREE.MeshPhysicalMaterial({color:0x42bbce,transparent:true,opacity:.25,roughness:.18,metalness:.12,depthWrite:false}));water.name='shortcut-tide-water';water.position.y=.075;this.group.add(water);this.water=water;
      for(const t of [.32,.5,.68]){const wave=this.anchor(t);wave.name='tide-foam';this.box(wave,ivory,0,.085,0,sc.w*.8,.035,.1);}
    }else{
      for(const t of [.34,.58,.75]){const snow=this.anchor(t);snow.name='shortcut-snowdrift';for(const s of [-1,1]){
        const drift=this.mesh(snow,new THREE.SphereGeometry(1,20,14),ivory,s*2,.25,0);drift.scale.set(2.7,.65,1.6);this.flakes.push(drift);
      }}
      for(const t of [.3,.7])for(const s of [-1,1]){const crystal=this.anchor(t);const shard=this.mesh(crystal,new THREE.ConeGeometry(.8,4,6),paint,s*(sc.w/2+1),2,0);shard.rotation.z=s*.15;}
    }
    // A directional floor chevron makes the exit easy to read at speed.
    const exit=this.anchor(.88);for(const s of [-1,1]){const arrow=this.box(exit,ivory,s*.8,.035,0,2.2,.06,.3);arrow.rotation.y=s*.6;}
  }
  update(delta:number,active:boolean){
    if(active)this.time+=delta;
    for(const g of this.gates){const target=this.gateOpen?(g.userData.side as number)*1.4:0;g.rotation.y=THREE.MathUtils.damp(g.rotation.y,target,12,Math.max(0,delta));}
    for(const m of this.signals){m.color.setHex(this.gateOpen?0x49e7ac:0xffa65e);m.emissive.copy(m.color);}
    if(this.water){const m=this.water.material as THREE.MeshPhysicalMaterial;m.opacity=this.highTide?.62:.12;this.water.position.y=this.highTide?.1:.045;}
    for(const [i,f] of this.flakes.entries()){f.rotation.z=Math.sin(this.time*1.6+i)*.015;f.scale.y=THREE.MathUtils.damp(f.scale.y,this.snowCleared[Math.floor(i/2)]>this.time?.08:.65,10,Math.max(0,delta));}
  }
  step(state:RacerState):{speedRatio:number;grip:number}|null {
    if(!this.track.shortcut)return null;
    const sample=this.sample(state.position.x,state.position.z)!;
    const offRoad=sample.inside&&(state.airHeight||0)<.25&&this.track.getClosestTrackPoint(state.position.x,state.position.z).distanceToCenter>this.track.roadWidth/2+.5;
    let memory=this.racers.get(state.config.id);if(!memory){memory={inside:false,entry:0,alert:-100,passed:false};this.racers.set(state.config.id,memory);}
    const travel=Math.sin(state.rotation.y)*this.ux+Math.cos(state.rotation.y)*this.uz;
    if(state.isFinished){memory.inside=false;return null;}
    if(offRoad&&!memory.inside){memory.entry=sample.t;memory.passed=false;this.onEvent?.(state,'enter');}
    if(!offRoad&&memory.inside&&memory.entry<.4&&sample.t>.88&&memory.passed)this.onEvent?.(state,'exit');
    memory.inside=offRoad;
    if(!offRoad)return null;
    const boosted=state.boostTimer>0||(state.starTimer||0)>0||(state.rideTimer||0)>0;
    if(this.gates.length&&Math.abs(sample.t-this.entryT)*this.length<3.0&&(state.airHeight||0)<3.2){
      if(!this.gateOpen&&boosted&&Math.abs(state.speed)>15){this.openUntil=this.time+6;this.onEvent?.(state,'open');}
      else if(!this.gateOpen){
        const direction=Math.sign(state.speed*travel)||1;
        const p=this.point(this.entryT-direction*3.1/this.length,sample.side);state.position.x=p.x;state.position.z=p.z;state.speed=Math.sign(state.speed)*Math.min(Math.abs(state.speed),4);
        if(this.time-memory.alert>1.6){memory.alert=this.time;this.onEvent?.(state,'blocked');}
      }
    }
    if(sample.t>.6)memory.passed=true;
    const id=this.track.course.id;
    if(id==='frosty'&&boosted)for(const [i,t]of [.34,.58,.75].entries())if(Math.abs(sample.t-t)*this.length<3){if(this.snowCleared[i]<=this.time)this.onEvent?.(state,'snow');this.snowCleared[i]=this.time+2.5;}
    const deepSnow=id==='frosty'&&[.34,.58,.75].some((t,i)=>Math.abs(sample.t-t)*this.length<3&&this.snowCleared[i]<=this.time);
    return {speedRatio:boosted?1:id==='sunset'?(this.highTide?.38:.72):id==='frosty'?(deepSnow?.3:.75):id==='neon'?.88:.48,grip:id==='frosty'&&!boosted?.68:1};
  }
}
