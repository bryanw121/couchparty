import * as THREE from 'three';
import { createDriver } from './driverModel';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { RacerConfig } from '../types';
import { createTireTexture, createNumberDecal } from './proceduralTextures';

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
  const rootGroup = new THREE.Group();
  const bodyGroup = new THREE.Group();
  rootGroup.add(bodyGroup);

  const mainColor = new THREE.Color(config.color);
  const accentColor = new THREE.Color(config.accentColor);
  const darkMetal = new THREE.Color(0x1e293b);
  const chromeColor = new THREE.Color(0x94a3b8);

  const mainMat = new THREE.MeshStandardMaterial({
    color: mainColor,
    roughness: 0.35,
    metalness: 0.25,
  });

  const accentMat = new THREE.MeshStandardMaterial({
    color: accentColor,
    roughness: 0.3,
    metalness: 0.3,
  });

  const darkMat = new THREE.MeshStandardMaterial({
    color: darkMetal,
    roughness: 0.7,
    metalness: 0.1,
  });

  const chromeMat = new THREE.MeshStandardMaterial({
    color: chromeColor,
    roughness: 0.15,
    metalness: 0.85,
  });

  // --- 1. Main Chassis ---
  // Lower chassis floor
  const floorGeo = new THREE.BoxGeometry(1.3, 0.12, 2.4);
  const floorMesh = new THREE.Mesh(floorGeo, darkMat);
  floorMesh.position.set(0, 0.25, 0);
  floorMesh.castShadow = true;
  bodyGroup.add(floorMesh);

  // Front nose cone (tapered wedge)
  const noseGeo = new RoundedBoxGeometry(1.1, 0.32, 1.0, 2, 0.13);
  const noseMesh = new THREE.Mesh(noseGeo, mainMat);
  noseMesh.position.set(0, 0.36, 0.7);
  noseMesh.rotation.x = -0.12;
  noseMesh.castShadow = true;
  bodyGroup.add(noseMesh);

  // Front bumper / splitter
  const bumperGeo = new RoundedBoxGeometry(1.5, 0.18, 0.4, 2, 0.08);
  const bumperMesh = new THREE.Mesh(bumperGeo, accentMat);
  bumperMesh.position.set(0, 0.2, 1.25);
  bumperMesh.castShadow = true;
  bodyGroup.add(bumperMesh);

  // Side pods (left & right)
  const sidePodGeo = new RoundedBoxGeometry(0.36, 0.4, 1.2, 2, 0.12);
  const leftPod = new THREE.Mesh(sidePodGeo, mainMat);
  leftPod.position.set(-0.68, 0.35, -0.1);
  leftPod.castShadow = true;
  bodyGroup.add(leftPod);

  const rightPod = new THREE.Mesh(sidePodGeo, mainMat);
  rightPod.position.set(0.68, 0.35, -0.1);
  rightPod.castShadow = true;
  bodyGroup.add(rightPod);

  // Cockpit tub / seat
  const seatBackGeo = new THREE.BoxGeometry(0.7, 0.6, 0.15);
  const seatBack = new THREE.Mesh(seatBackGeo, darkMat);
  seatBack.position.set(0, 0.62, -0.32);
  seatBack.rotation.x = 0.15;
  bodyGroup.add(seatBack);

  // Number badge on nose
  const numberDecalTex = createNumberDecal(config.number, config.color);
  const decalMat = new THREE.MeshBasicMaterial({
    map: numberDecalTex,
    transparent: true,
    polygonOffset: true,
    polygonOffsetFactor: -1,
  });
  const decalGeo = new THREE.PlaneGeometry(0.42, 0.42);
  const decalMesh = new THREE.Mesh(decalGeo, decalMat);
  decalMesh.rotation.x = -Math.PI / 2 - 0.12;
  decalMesh.position.set(0, 0.48, 0.7);
  bodyGroup.add(decalMesh);

  // --- 2. Rear Engine & Exhausts ---
  const engineBlockGeo = new THREE.BoxGeometry(0.65, 0.45, 0.6);
  const engineBlock = new THREE.Mesh(engineBlockGeo, chromeMat);
  engineBlock.position.set(0, 0.48, -0.85);
  engineBlock.castShadow = true;
  bodyGroup.add(engineBlock);

  // Engine air intake manifold
  const intakeGeo = new THREE.CylinderGeometry(0.08, 0.08, 0.35, 8);
  const leftIntake = new THREE.Mesh(intakeGeo, darkMat);
  leftIntake.position.set(-0.16, 0.78, -0.82);
  bodyGroup.add(leftIntake);

  const rightIntake = new THREE.Mesh(intakeGeo, darkMat);
  rightIntake.position.set(0.16, 0.78, -0.82);
  bodyGroup.add(rightIntake);

  // Exhaust pipes (facing rearward)
  const exhaustGeo = new THREE.CylinderGeometry(0.06, 0.07, 0.4, 8);
  const leftExhaust = new THREE.Mesh(exhaustGeo, chromeMat);
  leftExhaust.rotation.x = Math.PI / 2;
  leftExhaust.position.set(-0.24, 0.38, -1.25);
  bodyGroup.add(leftExhaust);

  const rightExhaust = new THREE.Mesh(exhaustGeo, chromeMat);
  rightExhaust.rotation.x = Math.PI / 2;
  rightExhaust.position.set(0.24, 0.38, -1.25);
  bodyGroup.add(rightExhaust);

  // Rear Wing / Spoiler
  const wingGeo = new THREE.BoxGeometry(1.5, 0.08, 0.35);
  const wingMesh = new THREE.Mesh(wingGeo, accentMat);
  wingMesh.position.set(0, 0.88, -1.05);
  wingMesh.castShadow = true;
  bodyGroup.add(wingMesh);

  // Wing Struts
  const strutGeo = new THREE.BoxGeometry(0.06, 0.35, 0.06);
  const leftStrut = new THREE.Mesh(strutGeo, darkMat);
  leftStrut.position.set(-0.35, 0.68, -1.05);
  bodyGroup.add(leftStrut);

  const rightStrut = new THREE.Mesh(strutGeo, darkMat);
  rightStrut.position.set(0.35, 0.68, -1.05);
  bodyGroup.add(rightStrut);

  // --- 3. Steering Wheel ---
  const steeringWheelGeo = new THREE.TorusGeometry(0.14, 0.03, 6, 12);
  const steeringWheel = new THREE.Mesh(steeringWheelGeo, darkMat);
  steeringWheel.position.set(0, 0.58, 0.2);
  steeringWheel.rotation.x = -0.5;
  bodyGroup.add(steeringWheel);

  const driverHead = createDriver(bodyGroup, config);

  // --- 5. Wheels Builder ---
  const tireTex = createTireTexture();
  const wheelMat = new THREE.MeshStandardMaterial({
    color: 0x18181b,
    roughness: 0.8,
  });
  const rimMat = new THREE.MeshStandardMaterial({
    map: tireTex,
    roughness: 0.3,
    metalness: 0.4,
  });

  function buildWheel(radius: number, width: number): THREE.Group {
    const wheelGroup = new THREE.Group();

    // Tire
    const tireGeo = new THREE.CylinderGeometry(radius, radius, width, 14);
    tireGeo.rotateZ(Math.PI / 2);
    const tireMesh = new THREE.Mesh(tireGeo, wheelMat);
    tireMesh.castShadow = true;
    wheelGroup.add(tireMesh);

    // Rim Cap
    const capGeo = new THREE.CircleGeometry(radius * 0.72, 12);
    const capMesh = new THREE.Mesh(capGeo, rimMat);
    capMesh.position.x = width / 2 + 0.005;
    capMesh.rotation.y = Math.PI / 2;
    wheelGroup.add(capMesh);

    const innerCap = new THREE.Mesh(capGeo, rimMat);
    innerCap.position.x = -width / 2 - 0.005;
    innerCap.rotation.y = -Math.PI / 2;
    wheelGroup.add(innerCap);

    return wheelGroup;
  }

  // Front Wheels (Radius 0.26, Width 0.22)
  const frontLeftWheel = buildWheel(0.26, 0.22);
  frontLeftWheel.position.set(-0.72, 0.26, 0.85);
  rootGroup.add(frontLeftWheel);

  const frontRightWheel = buildWheel(0.26, 0.22);
  frontRightWheel.position.set(0.72, 0.26, 0.85);
  rootGroup.add(frontRightWheel);

  // Rear Wheels (Slightly larger for arcade stance: Radius 0.32, Width 0.32)
  const rearLeftWheel = buildWheel(0.32, 0.32);
  rearLeftWheel.position.set(-0.76, 0.32, -0.85);
  rootGroup.add(rearLeftWheel);

  const rearRightWheel = buildWheel(0.32, 0.32);
  rearRightWheel.position.set(0.76, 0.32, -0.85);
  rootGroup.add(rearRightWheel);

  return {
    rootGroup,
    bodyGroup,
    frontLeftWheel,
    frontRightWheel,
    rearLeftWheel,
    rearRightWheel,
    steeringWheel,
    driverHead,
    exhaustLeft: new THREE.Vector3(-0.24, 0.38, -1.45),
    exhaustRight: new THREE.Vector3(0.24, 0.38, -1.45),
    rearLeftSparkPos: new THREE.Vector3(-0.76, 0.15, -0.95),
    rearRightSparkPos: new THREE.Vector3(0.76, 0.15, -0.95),
  };
}
