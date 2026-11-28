import type {TrackSystem} from './track';
import type {RacerState} from '../types';
export function wrongWay(state:RacerState,track:TrackSystem,previous:number,delta:number){
  if(state.spinOutTimer>0||(state.airHeight||0)>.3||state.isFinished||Math.abs(state.speed)<5)return 0;
  const closest=track.getClosestTrackPoint(state.position.x,state.position.z);let x=closest.point.tangentX,z=closest.point.tangentZ;
  if(track.shortcut&&closest.distanceToCenter>track.roadWidth/2+.5&&track.onShortcut(state.position.x,state.position.z)!==null){x=track.shortcut.bx-track.shortcut.ax;z=track.shortcut.bz-track.shortcut.az;const length=Math.hypot(x,z);x/=length;z/=length;}
  const direction=(Math.sin(state.rotation.y)*x+Math.cos(state.rotation.y)*z)*Math.sign(state.speed);
  return direction<-.45?Math.min(10,previous+delta):0;
}
