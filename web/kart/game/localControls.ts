import type {PadInput} from './couchEngine';
// Independent pointer IDs keep steering, drifting and items working together.
export class LocalControls {
  autoGas=true;
  private held=new Map<string,string>();
  private analog=0;
  hold(id:string,action:string){this.held.set(id,action);}
  release(id:string){this.held.delete(id);}
  steer(value:number){this.analog=Math.max(-1,Math.min(1,value));}
  reset(){this.held.clear();this.analog=0;}
  snapshot():PadInput{
    const active=new Set(this.held.values()),brake=active.has('brake');
    return {steer:Math.max(-1,Math.min(1,this.analog+(active.has('left')?1:0)-(active.has('right')?1:0))),gas:!brake&&(this.autoGas||active.has('gas')),brake,drift:active.has('drift'),item:active.has('item'),aim:active.has('back')?'back':'front'};
  }
}
