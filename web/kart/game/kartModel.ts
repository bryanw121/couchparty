import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { createDriver } from './driverModel';
import { createKartBody } from './kartBody';
import { RacerConfig } from '../types';

export interface KartMeshHandles {
  rootGroup: THREE.Group;
  bodyGroup: THREE.Group;
  frontLeftWheel: THREE.Group;
  frontRightWheel: THREE.Group;
  rearLeftWheel: THREE.Group;
  rearRightWheel: THREE.Group;
  steeringWheel: THREE.Mesh;
  driverHead: THREE.Group;
  exhaustLeft: THREE.Vector3;
  exhaustRight: THREE.Vector3;
  rearLeftSparkPos: THREE.Vector3;
  rearRightSparkPos: THREE.Vector3;
}


export function createKartMesh(config: RacerConfig): KartMeshHandles {
  const rootGroup=new THREE.Group(),bodyGroup=new THREE.Group();rootGroup.add(bodyGroup);
  const appearance=createKartBody(bodyGroup,config);
  rootGroup.name=appearance.character+'-kart';
  const driverHead=createDriver(bodyGroup,config);
  // The same steering and head handles are animated by the existing physics engine.
  const steeringWheel=new THREE.Mesh(new THREE.TorusGeometry(.15,.025,8,20),appearance.dark);
  steeringWheel.position.set(0,.64,.27);steeringWheel.rotation.x=-.5;bodyGroup.add(steeringWheel);
  const column=new THREE.Mesh(new THREE.CylinderGeometry(.025,.025,.33,8),appearance.chrome);
  column.position.set(0,.49,.2);column.rotation.x=.45;bodyGroup.add(column);
  const steeringHub=new THREE.Mesh(new THREE.SphereGeometry(.045,10,8),appearance.trim);
  steeringHub.position.copy(steeringWheel.position);bodyGroup.add(steeringHub);
  const tireMat=new THREE.MeshStandardMaterial({color:0x161c26,roughness:.85});
  const treadMat=new THREE.MeshStandardMaterial({color:0x303744,roughness:.9});
  tireMat.userData.preserveShading=treadMat.userData.preserveShading=true;
  function wheel(radius:number,width:number):THREE.Group {
    const group=new THREE.Group(),rotor=new THREE.Group();group.add(rotor);
    // Child zero is the entire rotating assembly, including rim, tread and spokes.
    const profile=[[radius*.58,-width/2-.005],[radius*.86,-width/2],[radius,-width*.28],[radius,width*.28],[radius*.86,width/2],[radius*.58,width/2+.005]].map(([x,y])=>new THREE.Vector2(x,y));
    const tireGeo=new THREE.LatheGeometry(profile,24);tireGeo.rotateZ(Math.PI/2);
    const tire=new THREE.Mesh(tireGeo,tireMat);tire.castShadow=true;rotor.add(tire);
    const hubGeo=new THREE.CylinderGeometry(radius*.59,radius*.59,width+.012,20);hubGeo.rotateZ(Math.PI/2);
    rotor.add(new THREE.Mesh(hubGeo,appearance.dark));
    const spokeParts:THREE.BufferGeometry[]=[],treadParts:THREE.BufferGeometry[]=[];
    for(const side of [-1,1]){
      const lip=new THREE.Mesh(new THREE.TorusGeometry(radius*.64,.018,6,24),appearance.trim);
      lip.rotation.y=Math.PI/2;lip.position.x=side*(width/2+.008);rotor.add(lip);
      const capGeo=new THREE.CylinderGeometry(radius*.2,radius*.2,.025,12);capGeo.rotateZ(Math.PI/2);
      const cap=new THREE.Mesh(capGeo,appearance.paint);cap.position.x=side*(width/2+.027);rotor.add(cap);
      for(let i=0;i<5;i++){
        const a=i*Math.PI*2/5;
        const spoke=new THREE.BoxGeometry(.018,radius*.48,.034);spoke.rotateX(a);
        spoke.translate(side*(width/2+.016),Math.cos(a)*radius*.36,Math.sin(a)*radius*.36);spokeParts.push(spoke);
      }
    }
    rotor.add(new THREE.Mesh(mergeGeometries(spokeParts),appearance.chrome));spokeParts.forEach(g=>g.dispose());
    for(let i=0;i<18;i++){
      const a=i*Math.PI/9,tread=new THREE.BoxGeometry(width*.72,.012,.032);tread.rotateX(a);
      tread.translate(0,Math.cos(a)*(radius+.001),Math.sin(a)*(radius+.001));treadParts.push(tread);
    }
    rotor.add(new THREE.Mesh(mergeGeometries(treadParts),treadMat));treadParts.forEach(g=>g.dispose());
    return group;
  }
  const frontLeftWheel=wheel(.26,.22);frontLeftWheel.position.set(-.72,.26,.85);rootGroup.add(frontLeftWheel);
  const frontRightWheel=wheel(.26,.22);frontRightWheel.position.set(.72,.26,.85);rootGroup.add(frontRightWheel);
  const rearLeftWheel=wheel(.32,.32);rearLeftWheel.position.set(-.76,.32,-.85);rootGroup.add(rearLeftWheel);
  const rearRightWheel=wheel(.32,.32);rearRightWheel.position.set(.76,.32,-.85);rootGroup.add(rearRightWheel);
  return {rootGroup,bodyGroup,frontLeftWheel,frontRightWheel,rearLeftWheel,rearRightWheel,steeringWheel,driverHead,
    exhaustLeft:new THREE.Vector3(-.24,.38,-1.45),exhaustRight:new THREE.Vector3(.24,.38,-1.45),
    rearLeftSparkPos:new THREE.Vector3(-.76,.15,-.95),rearRightSparkPos:new THREE.Vector3(.76,.15,-.95)};
}
