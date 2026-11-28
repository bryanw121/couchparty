import {MathUtils} from 'three';
import type {RacerState} from '../types';
import type {KartMeshHandles} from './kartModel';
export function animateKartMotion(state:RacerState,handles:KartMeshHandles,delta:number){
  const body=handles.bodyGroup,data=body.userData,time=(data.motionTime||0)+delta;data.motionTime=time;
  const acceleration=data.lastSpeed===undefined?0:(state.speed-data.lastSpeed)/Math.max(delta,.001);data.lastSpeed=state.speed;
  const rolling=Math.min(1,Math.abs(state.speed)/30),hit=state.spinOutTimer>0;
  const heave=hit?Math.abs(Math.sin(time*22))*.035:Math.sin(time*11)*.008*rolling;
  body.position.y=MathUtils.damp(body.position.y,heave,14,delta);
  data.suspensionPitch=MathUtils.damp(data.suspensionPitch||0,MathUtils.clamp(-acceleration*.001,-.045,.045),10,delta);
  body.rotation.x=state.rotation.pitch+data.suspensionPitch+(hit?Math.sin(time*19)*.035:0);
  if(!handles.driverHead.userData.heroRig)handles.driverHead.rotation.z=MathUtils.damp(handles.driverHead.rotation.z,-MathUtils.clamp(state.angularVelocity,-2,2)*.035,9,delta);
}
