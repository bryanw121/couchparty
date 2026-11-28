import * as THREE from 'three';
import { RacerState, CameraView } from '../types';
import {response, angleDifference} from './motion';

export class CameraController {
  public camera: THREE.PerspectiveCamera;
  public currentView: CameraView = 'chase';

  private targetPosition: THREE.Vector3 = new THREE.Vector3();
  private targetLookAt: THREE.Vector3 = new THREE.Vector3();
  private baseFOV = 68;
  private followHeading: number | null = null;
  private lookAt = new THREE.Vector3();
  private framedView: CameraView | null = null;
  private chaseDistance = 5.8;
  private chaseHeight = 2.4;
  private driftOffset = 0;

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
    if(this.followHeading === null)this.followHeading = playerState.rotation.y;
    // The body can spin independently without orbiting the player's camera.
    if(playerState.spinOutTimer <= 0){
      this.followHeading += angleDifference(playerState.rotation.y,this.followHeading) * response(9,delta);
    }
    const heading = this.currentView === 'cockpit' && playerState.spinOutTimer <= 0 ? playerState.rotation.y : this.followHeading;
    const firstFrame = this.framedView !== this.currentView;
    const speedRatio = Math.min(1.5, Math.abs(playerState.speed) / playerState.config.topSpeed);

    // Dynamic FOV punch during boost
    let targetFOV = this.baseFOV;
    if (playerState.boostTimer > 0) {
      targetFOV = this.baseFOV + 16;
    } else {
      targetFOV = this.baseFOV + speedRatio * 8;
    }
    this.camera.fov = THREE.MathUtils.lerp(this.camera.fov, targetFOV, response(6,delta));
    this.camera.updateProjectionMatrix();

    const kartPos = new THREE.Vector3(playerState.position.x, playerState.position.y, playerState.position.z);

    if (this.currentView === 'chase') {
      // Classic 3rd person chase cam - Mario Kart 8 style dynamic framing
      this.chaseDistance = THREE.MathUtils.lerp(this.chaseDistance,playerState.isGliding ? 8.5 : 5.8,response(5,delta));
      this.chaseHeight = THREE.MathUtils.lerp(this.chaseHeight,playerState.isGliding ? 3.6 : 2.4,response(5,delta));
      const distBehind = this.chaseDistance;
      const height = this.chaseHeight;

      // Dynamic drift camera angle swing
      const slide = playerState.slideAngle ?? (playerState.isDrifting ? playerState.driftDirection*.26 : 0);
      this.driftOffset = THREE.MathUtils.lerp(this.driftOffset,-THREE.MathUtils.clamp(slide/.26,-1,1)*.9,response(8,delta));
      const driftOffset = this.driftOffset;

      const idealOffset = new THREE.Vector3(
        -Math.sin(heading) * distBehind + Math.cos(heading) * driftOffset,
        height,
        -Math.cos(heading) * distBehind - Math.sin(heading) * driftOffset
      );

      this.targetPosition.copy(kartPos).add(idealOffset);
      const lookAhead = 8 + Math.min(1.3,speedRatio) * 6;
      this.targetLookAt.copy(kartPos).add(new THREE.Vector3(
        Math.sin(heading) * lookAhead,
        1.1,
        Math.cos(heading) * lookAhead
      ));

      // Smooth camera dampening
      if(firstFrame){this.camera.position.copy(this.targetPosition);this.lookAt.copy(this.targetLookAt);}
      else {this.camera.position.lerp(this.targetPosition,response(12,delta));this.lookAt.lerp(this.targetLookAt,response(14,delta));}
      this.camera.lookAt(this.lookAt);

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
      if(firstFrame){this.camera.position.copy(this.targetPosition);this.lookAt.copy(this.targetLookAt);}
      else {this.camera.position.lerp(this.targetPosition,response(14,delta));this.lookAt.lerp(this.targetLookAt,response(14,delta));}
      this.camera.lookAt(this.lookAt);

    } else if (this.currentView === 'topdown') {
      // High-angle tactical view
      this.targetPosition.set(kartPos.x, kartPos.y + 40, kartPos.z + 10);
      if(firstFrame)this.camera.position.copy(this.targetPosition);
      else this.camera.position.lerp(this.targetPosition, response(6,delta));
      this.camera.lookAt(kartPos);
    }
    this.framedView = this.currentView;
  }

  public onResize(width: number, height: number) {
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
  }
}
