import * as THREE from 'three';
import type { TrackSystem } from './track';
import type { RacerState, InputState, TrackPoint } from '../types';

type Flight = { time: number; duration: number; peak: number; glide: boolean; trick: boolean; trickAt: number; cooldown: number };
export interface Ramp { point: TrackPoint; mesh: THREE.Group; glide: boolean; width: number }
export interface Hazard { point: TrackPoint; mesh: THREE.Group; kind: 'crusher' | 'cart'; lateral: number; height: number; dangerous: boolean; warning: THREE.Mesh }
export class CourseFeatures {
  readonly group = new THREE.Group();
  readonly ramps: Ramp[] = [];
  readonly hazards: Hazard[] = [];
  active = false;
  time = 0;
  onEvent?: (racer: RacerState, event: 'jump' | 'glide' | 'trick' | 'landing' | 'hazard') => void;
  private flights = new Map<string, Flight>();
  private drift = new Map<string, boolean>();
  private hitUntil = new Map<string, number>();
  constructor(parent: THREE.Object3D, private track: TrackSystem) {
    this.group.name = 'course-features';parent.add(this.group);
    for (const [fraction, glide] of [[.105, false], [.565, false], [.805, true]] as const) this.addRamp(fraction, glide);
    this.addHazard(.345, 'crusher');this.addHazard(.705, 'cart');this.update(0);
  }
  private mat(color: number, glow = false) {
    const m = new THREE.MeshStandardMaterial({color, roughness:.4, metalness:.12, emissive:glow?color:0, emissiveIntensity:glow?.45:0});m.userData.preserveShading=true;return m;
  }
  private box(p: THREE.Object3D, w: number, h: number, d: number, m: THREE.Material, x=0, y=0, z=0) {
    const o=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),m);o.position.set(x,y,z);o.castShadow=o.receiveShadow=true;p.add(o);return o;
  }
  private anchor(fraction:number) {
    const point=this.track.trackPoints[Math.floor(fraction*this.track.trackPoints.length)],mesh=new THREE.Group();
    mesh.position.set(point.x,point.y,point.z);mesh.rotation.y=Math.atan2(point.tangentX,point.tangentZ);this.group.add(mesh);return {point,mesh};
  }
  private addRamp(fraction:number,glide:boolean) {
    const {point,mesh}=this.anchor(fraction);mesh.name=glide?'glider-ramp':'trick-ramp';
    const paint=this.mat(glide?0x29cbe5:0xf6a62d),edge=this.mat(0xfff5bd,true),width=10;
    const v=[-5,0,-4,5,0,-4,-5,0,4,5,0,4,-5,1.6,4,5,1.6,4];
    const geo=new THREE.BufferGeometry();geo.setAttribute('position',new THREE.Float32BufferAttribute(v,3));
    geo.setIndex([0,4,5,0,5,1,2,3,5,2,5,4,0,2,4,1,5,3,0,1,3,0,3,2]);geo.computeVertexNormals();
    const wedge=new THREE.Mesh(geo,paint);wedge.receiveShadow=true;mesh.add(wedge);
    for(const x of [-5.1,5.1]){const rail=this.box(mesh,.16,.16,8.2,edge,x,.85,0);rail.rotation.x=-Math.atan(.2);}
    for(const z of [-1.5,.5,2.5])for(const s of [-1,1]){const arrow=this.box(mesh,2.1,.06,.25,edge,s*.72,(z+4)*.2+.08,z);arrow.rotation.y=s*.6;}
    // Elevated wing-shaped sign reads from a distance without blocking the driving lanes.
    for(const s of [-1,1]){this.box(mesh,.2,4,.2,paint,s*7,2,3);const flag=this.box(mesh,2.3,.12,1,edge,s*7,4,3);flag.rotation.z=s*.2;}
    this.ramps.push({point,mesh,glide,width});
  }
  private addHazard(fraction:number,kind:Hazard['kind']) {
    const {point,mesh}=this.anchor(fraction);mesh.name=kind==='crusher'?'stone-crusher':'mushroom-delivery-cart';
    const dark=this.mat(0x273449),stone=this.mat(this.track.course.id==='frosty'?0x9ce3ee:0x8996ad),gold=this.mat(0xffcf4c),red=this.mat(0xe85561);
    const moving=new THREE.Group();moving.name='moving-hazard';mesh.add(moving);
    if(kind==='crusher') {
      this.box(moving,4.5,3.5,3.2,stone,0,1.75);
      for(const s of [-1,1]){this.box(moving,.7,.45,.12,dark,s*.9,2.4,1.65);const brow=this.box(moving,1.3,.22,.15,dark,s*.9,2.85,1.7);brow.rotation.z=s*.25;}
      this.box(moving,2.3,.55,.1,dark,0,1.05,1.65);
      for(let i=0;i<5;i++)this.box(moving,.25,.25,.12,gold,-.9+i*.45,1.12,1.74);
      for(const s of [-1,1])this.box(mesh,.4,11,.4,stone,s*10,5.5);
      this.box(mesh,20.4,.5,.6,stone,0,11);
    } else {
      const wood=this.mat(0xa56b3e);this.box(moving,3,1.2,2.4,wood,0,1);
      for(const x of [-1.45,1.45])for(const z of [-.8,.8]){const wheel=new THREE.Mesh(new THREE.CylinderGeometry(.48,.48,.25,12),dark);wheel.rotation.z=Math.PI/2;wheel.position.set(x,.48,z);moving.add(wheel);}
      const cap=new THREE.Mesh(new THREE.SphereGeometry(1,16,10),red);cap.scale.set(1.3,.65,1.1);cap.position.y=2;moving.add(cap);
      for(const x of [-.6,.6]){const dot=new THREE.Mesh(new THREE.SphereGeometry(.28,10,8),this.mat(0xfff4dc));dot.position.set(x,2.35,.7);moving.add(dot);}
    }
    const warning=new THREE.Mesh(new THREE.RingGeometry(kind==='crusher'?2.5:1.8,kind==='crusher'?3.1:2.2,24),new THREE.MeshBasicMaterial({color:0xff6b48,transparent:true,opacity:.55,side:THREE.DoubleSide,depthWrite:false}));
    warning.rotation.x=-Math.PI/2;warning.position.y=.08;mesh.add(warning);
    this.hazards.push({point,mesh,kind,lateral:0,height:8,dangerous:false,warning});
  }
  update(delta:number) {
    if(this.active)this.time+=delta;
    for(const h of this.hazards){
      const moving=h.mesh.getObjectByName('moving-hazard')!;
      if(h.kind==='crusher'){
        const phase=this.time%7;
        h.height=phase<2?8:phase<2.35?8*(1-(phase-2)/.35):phase<3.5?0:phase<4.7?8*(phase-3.5)/1.2:8;
        h.dangerous=h.height<2.1;moving.position.y=h.height;
        (h.warning.material as THREE.MeshBasicMaterial).opacity=phase>1&&phase<3.6?.5+.4*Math.sin(this.time*15):.15;
      }else{h.lateral=Math.sin(this.time*.85)*6;moving.position.x=-h.lateral;h.height=0;h.dangerous=true;h.warning.position.x=-h.lateral;}
    }
  }
  reset(state:RacerState){this.flights.delete(state.config.id);this.drift.delete(state.config.id);state.airHeight=0;state.isGliding=false;state.trickRoll=0;}
  step(state:RacerState,input:InputState,delta:number) {
    const id=state.config.id,pressed=input.drift&&!this.drift.get(id);this.drift.set(id,input.drift);
    if(state.isFinished){state.airHeight=0;state.isGliding=false;state.trickRoll=0;this.flights.delete(id);return;}
    if(!this.active){return;}
    let f=this.flights.get(id);
    if(f){
      f.cooldown=Math.max(0,f.cooldown-delta);
      if(f.time<f.duration){
        f.time=Math.min(f.duration,f.time+delta);
        if(!f.trick&&f.time>.08&&f.time<f.duration-.15&&(pressed||!state.config.isPlayer)){f.trick=true;f.trickAt=f.time;this.onEvent?.(state,'trick');}
        const t=f.time/f.duration;
        state.airHeight=Math.max(0,1.6*(1-t)+Math.sin(Math.PI*t)*f.peak);
        state.isGliding=f.glide&&t<1;state.trickRoll=f.trick?Math.min(1,(f.time-f.trickAt)/Math.max(.15,Math.min(.65,f.duration-f.trickAt)))*Math.PI*2:0;
        state.isDrifting=false;state.hopT=0;
        if(f.time>=f.duration){state.airHeight=0;state.isGliding=false;state.trickRoll=0;
          if(f.trick){state.boostTimer=Math.max(state.boostTimer,1.3);state.boostMultiplier=Math.max(state.boostMultiplier,1.4);state.speed=Math.max(state.speed,state.config.topSpeed*1.14);this.onEvent?.(state,'landing');}}
      }
      if(f.time>=f.duration&&f.cooldown<=0){this.flights.delete(id);f=undefined;}
    }
    if(!f){state.airHeight=0;state.isGliding=false;}
    if(!f&&state.speed>17&&state.spinOutTimer<=0&&!(state.rideTimer!>0))for(const ramp of this.ramps){
      const dx=state.position.x-ramp.point.x,dz=state.position.z-ramp.point.z;
      const along=dx*ramp.point.tangentX+dz*ramp.point.tangentZ,side=dx*ramp.point.normalX+dz*ramp.point.normalZ;
      if(Math.abs(side)<ramp.width/2-1&&along>=-4&&along<=4.5){
        state.airHeight=Math.max(0,(along+4)*.2);
        const facing=Math.sin(state.rotation.y)*ramp.point.tangentX+Math.cos(state.rotation.y)*ramp.point.tangentZ;
        if(along>=2.1&&facing>.4){this.flights.set(id,{time:0,duration:ramp.glide?3.6:1.2,peak:ramp.glide?7:3.1,glide:ramp.glide,trick:false,trickAt:0,cooldown:ramp.glide?4.7:2.4});state.isGliding=ramp.glide;this.onEvent?.(state,ramp.glide?'glide':'jump');}
        break;
      }else state.airHeight=0;
    }
    if((state.airHeight||0)>2||state.invulnerableTimer>0||(state.starTimer||0)>0||(state.rideTimer||0)>0||(state.ghostTimer||0)>0||(this.hitUntil.get(id)||0)>this.time)return;
    for(const h of this.hazards){if(!h.dangerous)continue;
      const dx=state.position.x-h.point.x,dz=state.position.z-h.point.z;
      const along=dx*h.point.tangentX+dz*h.point.tangentZ,side=dx*h.point.normalX+dz*h.point.normalZ;
      if(Math.abs(along)<(h.kind==='crusher'?2.8:2.4)&&Math.abs(side-h.lateral)<(h.kind==='crusher'?3.1:2.4)){
        state.speed*=.5;state.spinOutTimer=Math.max(state.spinOutTimer,.8);state.invulnerableTimer=1.5;this.hitUntil.set(id,this.time+2);this.onEvent?.(state,'hazard');break;
      }
    }
  }
}

export function createGlider(color:string):THREE.Group {
  const g=new THREE.Group();g.name='kart-glider';
  const m=new THREE.MeshStandardMaterial({color,roughness:.35,side:THREE.DoubleSide});m.userData.preserveShading=true;
  const canopy=new THREE.SphereGeometry(1,20,8,0,Math.PI*2,0,Math.PI/2);const wing=new THREE.Mesh(canopy,m);wing.scale.set(2.4,.55,1.15);wing.position.set(0,2.2,-.2);g.add(wing);
  const ropes=new THREE.MeshStandardMaterial({color:0xfff4d9,roughness:.6,side:THREE.DoubleSide});ropes.userData.preserveShading=true;
  for(const phi of [Math.PI*.15,Math.PI*.85,Math.PI*1.15,Math.PI*1.85]){
    const stripe=new THREE.Mesh(new THREE.SphereGeometry(1.006,5,8,phi,.14,0,Math.PI/2),ropes);stripe.scale.copy(wing.scale);stripe.position.copy(wing.position);g.add(stripe);
  }
  for(const s of [-1,1])for(const z of [-.7,.5]){
    const from=new THREE.Vector3(s*.45,.65,z*.5),to=new THREE.Vector3(s*1.8,2.3,z),direction=to.clone().sub(from);
    const rope=new THREE.Mesh(new THREE.CylinderGeometry(.025,.025,direction.length(),6),ropes);rope.position.copy(from.add(to).multiplyScalar(.5));rope.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),direction.normalize());g.add(rope);
  }
  return g;
}
