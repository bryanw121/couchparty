import * as THREE from 'three';
import { createKartMesh } from './kartModel';
import { createGlider } from './courseFeatures';
import type { RacerConfig, RacerState } from '../types';

// Records stay on this TV/browser. Separate rulesets never compete with each other.
export type GhostSample = [number,number,number,number,number,number]; // time,x,y,z,yaw,gliding
export interface TrialRecord { version:1; time:number; bestLap:number|null; name:string; topper:string; color:string; samples:GhostSample[] }
export function trialKey(course:string,speed:string,laps:number){return `kario:trial:v2:${course}:${speed}:${laps}`;}
export function readTrial(storage:Pick<Storage,'getItem'>|null,key:string):TrialRecord|null {
  try{
    const r=JSON.parse(storage?.getItem(key)||'null');
    if(!r||r.version!==1||!Number.isFinite(r.time)||r.time<=0||r.time>1200||!Array.isArray(r.samples)||r.samples.length<2||r.samples.length>12002)return null;
    if(typeof r.name!=='string'||r.name.length>80||typeof r.topper!=='string'||typeof r.color!=='string'||!/^#[\da-f]{6}$/i.test(r.color))return null;
    let prev=-1;
    for(const s of r.samples){if(!Array.isArray(s)||s.length!==6||!s.every(Number.isFinite)||s[0]<=prev||s[0]<0||s[0]>r.time+.2||s.slice(1,4).some((v:number)=>Math.abs(v)>2000))return null;prev=s[0];}
    if(r.samples[0][0]>.2||r.samples.at(-1)[0]<r.time-.25)return null;
    if(r.bestLap!==null&&(!Number.isFinite(r.bestLap)||r.bestLap<=0||r.bestLap>r.time))return null;
    return r;
  }catch{return null;}
}
export function ghostPose(samples:GhostSample[],time:number):GhostSample {
  let lo=0,hi=samples.length-1;
  while(lo+1<hi){const mid=(lo+hi)>>1;if(samples[mid][0]<=time)lo=mid;else hi=mid;}
  const a=samples[lo],b=samples[hi],t=Math.max(0,Math.min(1,(time-a[0])/(b[0]-a[0])));
  const yaw=Math.atan2(Math.sin(b[4]-a[4]),Math.cos(b[4]-a[4]));
  return [time,a[1]+(b[1]-a[1])*t,a[2]+(b[2]-a[2])*t,a[3]+(b[3]-a[3])*t,a[4]+yaw*t,t<.5?a[5]:b[5]];
}
export class TimeTrial {
  readonly previous:TrialRecord|null;
  best:TrialRecord|null;
  readonly ghost:THREE.Group|null;
  saved = false;
  private runs=new Map<string,GhostSample[]>();
  private last=new Map<string,number>();
  constructor(private storage:Pick<Storage,'getItem'|'setItem'>|null,private key:string,scene:THREE.Scene,config:RacerConfig){
    this.previous=this.best=readTrial(storage,key);this.ghost=null;
    if(this.previous){
      const handles=createKartMesh({...config,topper:this.previous.topper,color:this.previous.color});
      this.ghost=handles.rootGroup;this.ghost.name='time-trial-ghost';handles.driverHead.scale.setScalar(1.18);
      this.ghost.add(createGlider(this.previous.color));
      this.ghost.traverse(o=>{const mesh=o as THREE.Mesh;if(!mesh.isMesh)return;mesh.castShadow=false;mesh.receiveShadow=false;
        const convert=(m:THREE.Material)=>{const copy=m.clone() as THREE.MeshStandardMaterial;copy.transparent=true;copy.opacity=.3;copy.depthWrite=false;copy.userData.preserveShading=true;if(copy.emissive){copy.emissive.setHex(0x2edfff);copy.emissiveIntensity=.4;}return copy;};
        mesh.material=Array.isArray(mesh.material)?mesh.material.map(convert):convert(mesh.material);
      });scene.add(this.ghost);this.updateGhost(0);
    }
  }
  capture(state:RacerState,force=false){
    const t=state.totalRaceTime;if(t>1200)return;
    if(!force&&t-(this.last.get(state.config.id)??-1)<.1)return;
    const samples=this.runs.get(state.config.id)||[];this.runs.set(state.config.id,samples);
    const sample:GhostSample=[t,...[state.position.x,state.position.y,state.position.z,state.rotation.y].map(v=>Math.round(v*1000)/1000),state.isGliding?1:0] as GhostSample;
    if(samples.length&&t<=samples.at(-1)![0]){if(force)samples[samples.length-1]=sample;return;}
    samples.push(sample);this.last.set(state.config.id,t);
  }
  finish(state:RacerState):boolean {
    this.capture(state,true);
    const samples=this.runs.get(state.config.id)||[];
    if(samples.length<2||state.totalRaceTime<=0||state.totalRaceTime>1200)return false;
    const faster=!this.best||state.totalRaceTime<this.best.time;
    const lap=state.bestLapTime;
    const bestLap=lap&&(!this.best?.bestLap||lap<this.best.bestLap)?lap:this.best?.bestLap??lap;
    if(!faster&&bestLap===this.best!.bestLap)return false;
    const record:TrialRecord=faster?{version:1,time:state.totalRaceTime,bestLap,name:state.config.name.slice(0,80),topper:state.config.topper||'cap',color:state.config.color,samples}:{...this.best!,bestLap};
    // Validate the exact serialization that will be loaded next time.
    const value=JSON.stringify(record);if(!readTrial({getItem:()=>value},this.key))return false;
    this.best=record;this.saved=false;
    try{if(this.storage){this.storage.setItem(this.key,value);this.saved=true;}}catch{}
    return true;
  }
  updateGhost(time:number){
    if(!this.ghost||!this.previous)return;
    this.ghost.visible=time<=this.previous.time;
    const pose=ghostPose(this.previous.samples,time);this.ghost.position.set(pose[1],pose[2],pose[3]);this.ghost.rotation.y=pose[4];
    const glider=this.ghost.getObjectByName('kart-glider');if(glider)glider.visible=!!pose[5];
  }
  dispose(){this.ghost?.removeFromParent();if(this.ghost)this.ghost.traverse(o=>{const m=(o as THREE.Mesh);if(m.isMesh){m.geometry.dispose();for(const mat of [m.material].flat())mat.dispose();}});}
}
