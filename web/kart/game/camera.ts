import * as THREE from 'three';
import { RacerState, CameraView } from '../types';

export class CameraController {
  public camera: THREE.PerspectiveCamera;
  public currentView: CameraView = 'chase';

  private targetPosition: THREE.Vector3 = new THREE.Vector3();
  private targetLookAt: THREE.Vector3 = new THREE.Vector3();
  private baseFOV = 60;

  constructor(aspect: number) {
    this.camera = new THREE.PerspectiveCamera(this.baseFOV, aspect, 0.2, 1000);
    this.camera.position.set(0, 10, 20);
  }

  public setView(view: CameraView) {
    this.currentView = view;
  }

  public cycleView(): CameraView {
    const views: CameraView[] = ['chase', 'cockpit', 'action', 'topdown'];
    const nextIdx = (views.indexOf(this.currentView) + 1) % views.length;
    this.currentView = views[nextIdx];
    return this.currentView;
  }

  public update(playerState: RacerState, delta: number) {
    const heading = playerState.rotation.y;
    const speedRatio = Math.min(1.5, Math.abs(playerState.speed) / playerState.config.topSpeed);

    // Dynamic FOV punch during boost
    let targetFOV = this.baseFOV;
    if (playerState.boostTimer > 0) {
      targetFOV = this.baseFOV + 16;
    } else {
      targetFOV = this.baseFOV + speedRatio * 8;
    }
    this.camera.fov = THREE.MathUtils.lerp(this.camera.fov, targetFOV, delta * 6);
    this.camera.updateProjectionMatrix();

    const kartPos = new THREE.Vector3(playerState.position.x, playerState.position.y, playerState.position.z);

    if (this.currentView === 'chase') {
      // Classic 3rd person chase cam - Mario Kart 8 style dynamic framing
      const distBehind = 6.2;
      const height = 2.7;

      // Dynamic drift camera angle swing
      const driftOffset = playerState.isDrifting ? -playerState.driftDirection * 0.9 : 0;

      const idealOffset = new THREE.Vector3(
        -Math.sin(heading) * distBehind + Math.cos(heading) * driftOffset,
        height,
        -Math.cos(heading) * distBehind - Math.sin(heading) * driftOffset
      );

      this.targetPosition.copy(kartPos).add(idealOffset);
      this.targetLookAt.copy(kartPos).add(new THREE.Vector3(
        Math.sin(heading) * 14,
        1.1,
        Math.cos(heading) * 14
      ));

      // Smooth camera dampening
      this.camera.position.lerp(this.targetPosition, delta * 10);
      this.camera.lookAt(this.targetLookAt);

    } else if (this.currentView === 'cockpit') {
      // Hood / Cockpit View
      const hoodOffset = new THREE.Vector3(
        Math.sin(heading) * 0.4,
        0.95,
        Math.cos(heading) * 0.4
      );
      this.camera.position.copy(kartPos).add(hoodOffset);
      const lookTarget = kartPos.clone().add(new THREE.Vector3(
        Math.sin(heading) * 20,
        0.8,
        Math.cos(heading) * 20
      ));
      this.camera.lookAt(lookTarget);

    } else if (this.currentView === 'action') {
      // Low wide dynamic action angle
      const distBehind = 3.5;
      const height = 1.1;
      const idealOffset = new THREE.Vector3(
        -Math.sin(heading) * distBehind,
        height,
        -Math.cos(heading) * distBehind
      );
      this.targetPosition.copy(kartPos).add(idealOffset);
      this.targetLookAt.copy(kartPos).add(new THREE.Vector3(
        Math.sin(heading) * 8,
        0.8,
        Math.cos(heading) * 8
      ));
      this.camera.position.lerp(this.targetPosition, delta * 14);
      this.camera.lookAt(this.targetLookAt);

    } else if (this.currentView === 'topdown') {
      // High-angle tactical view
      this.targetPosition.set(kartPos.x, kartPos.y + 40, kartPos.z + 10);
      this.camera.position.lerp(this.targetPosition, delta * 6);
      this.camera.lookAt(kartPos);
    }
  }

  public onResize(width: number, height: number) {
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
  }
}
