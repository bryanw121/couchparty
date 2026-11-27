// Entry for the TV page: window.CouchKart.start(container, options) -> engine
import { CouchEngine, CouchOptions } from './game/couchEngine';

function start(container: HTMLElement, opts: CouchOptions) {
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

(window as any).CouchKart = { start, supported, version: 1 };
