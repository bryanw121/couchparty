// Entry for the TV page: window.CouchKart.start(container, options) -> engine
import { CouchEngine, CouchOptions } from './game/couchEngine';
import { soundEngine } from './game/audio';

// Browsers keep sound off until someone clicks or presses a key on the page
const wake = () => soundEngine.init();
['pointerdown', 'keydown', 'click', 'touchstart'].forEach((e) => document.addEventListener(e, wake, { capture: true }));

function start(container: HTMLElement, opts: CouchOptions & { audioContext?: AudioContext }) {
  if (opts.audioContext) soundEngine.adopt(opts.audioContext);
  const engine = new CouchEngine(container, opts);
  engine.start();
  (window as any).CouchKart.current = engine; // handy for debugging on a TV
  return engine;
}

function supported() {
  try {
    const c = document.createElement('canvas');
    return !!(c.getContext('webgl2') || c.getContext('webgl'));
  } catch (e) {
    return false;
  }
}

(window as any).CouchKart = { start, supported, version: 1, soundOn: () => soundEngine.running() };
