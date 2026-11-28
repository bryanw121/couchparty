import {DRIVERS} from '../../../src/games/kart.js';

export function previewPlayers(count:number){
  return ['Mario','Luigi','Peach','Yoshi'].slice(0,Math.max(1,Math.min(4,Math.floor(count)||1))).map((name,index)=>{
    const driver=DRIVERS.find(d=>d.name===name)!;
    return {id:'art-preview-'+index,name,driver:driver.id,topper:driver.topper,color:driver.color};
  });
}
