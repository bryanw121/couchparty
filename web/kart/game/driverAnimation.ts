import * as THREE from 'three';
const personality:Record<string,{bounce:number;tempo:number}>={mario:{bounce:1,tempo:7},luigi:{bounce:.85,tempo:6},peach:{bounce:.65,tempo:5},daisy:{bounce:1.15,tempo:8},yoshi:{bounce:1.3,tempo:9},toad:{bounce:1.4,tempo:10},bowser:{bounce:.5,tempo:4},donkeykong:{bounce:.8,tempo:5.5}};
export function animateDriverReaction(head:THREE.Group,delta:number,options:{hit?:boolean;boost?:boolean;air?:boolean;celebrate?:boolean;steer?:number}={}){
  const character=head.userData.character||'mario',profile=personality[character]||personality.mario;
  const time=(head.userData.reactionTime||0)+delta;head.userData.reactionTime=time;
  for(const eye of head.userData.blinkEyes||[]){const phase=(time+(character.length%3)*.37)%4.8;eye.scale.y=phase>4.58?Math.max(.05,Math.abs((phase-4.69)/.11)):1;}
  // Head/neck reactions leave approved face meshes and race heading untouched.
  const pitch=options.hit?Math.sin(time*24)*.12:options.boost?-.06:options.air?-.04:options.celebrate?Math.sin(time*profile.tempo)*.055:0;
  head.rotation.x=THREE.MathUtils.damp(head.rotation.x,pitch*profile.bounce,10,delta);
  if(!head.userData.heroRig){
    const roll=options.celebrate?Math.sin(time*profile.tempo)*.09:-(options.steer||0)*.04;
    head.rotation.z=THREE.MathUtils.damp(head.rotation.z,roll*profile.bounce,9,delta);
  }
  head.position.y=1.05+(options.celebrate?Math.abs(Math.sin(time*profile.tempo))*.025*profile.bounce:0);
}
