import * as THREE from 'three';

/**
 * Procedural Canvas Texture Generator for Three.js
 * Generates high-quality pixel-crisp textures entirely in code.
 */

export function createCheckeredTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 128;
  const ctx = canvas.getContext('2d')!;

  const rows = 4;
  const cols = 16;
  const cellW = canvas.width / cols;
  const cellH = canvas.height / rows;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      ctx.fillStyle = (r + c) % 2 === 0 ? '#ffffff' : '#18181b';
      ctx.fillRect(c * cellW, r * cellH, cellW, cellH);
    }
  }

  // Border accents
  ctx.fillStyle = '#eab308';
  ctx.fillRect(0, 0, canvas.width, 6);
  ctx.fillRect(0, canvas.height - 6, canvas.width, 6);

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  return texture;
}

export function createRoadTexture(course='meadow'): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d')!;

  // Dark asphalt base
  ctx.fillStyle = course==='frosty'?'#526b87':course==='neon'?'#293252':course==='sunset'?'#746879':'#596575';
  ctx.fillRect(0, 0, 512, 512);

  // Subtle asphalt grain
  for (let i = 0; i < 6000; i++) {
    const x = (i*97.23)%512;
    const y = (i*61.71)%512;
    ctx.fillStyle = i%2?'rgba(255,255,255,.045)':'rgba(0,0,0,.045)';
    ctx.fillRect(x, y, 1, 1);
  }

  // White dashed center line
  ctx.fillStyle = '#f8fafc';
  const dashCount = 2;
  const dashH = 512 / dashCount;
  for (let i = 0; i < dashCount; i++) {
    ctx.fillRect(256 - 3, i * dashH + 45, 6, dashH - 90);
  }

  // Solid outer edge lines (yellow rumble edge)
  ctx.fillStyle = course==='neon'?'#a8e8ff':'#f1e8d6';
  ctx.fillRect(12, 0, 5, 512);
  ctx.fillRect(512 - 17, 0, 5, 512);

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.colorSpace=THREE.SRGBColorSpace;
  return texture;
}

export function createCurbTexture(a = '#dc2626', b = '#ffffff'): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 128;
  canvas.height = 256;
  const ctx = canvas.getContext('2d')!;

  const segments = 8;
  const segH = canvas.height / segments;

  for (let i = 0; i < segments; i++) {
    ctx.fillStyle = i % 2 === 0 ? a : b;
    ctx.fillRect(0, i * segH, canvas.width, segH);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.colorSpace=THREE.SRGBColorSpace;
  return texture;
}

export function createTerrainTexture(course:string):THREE.CanvasTexture {
  const canvas=document.createElement('canvas');canvas.width=canvas.height=256;const g=canvas.getContext('2d')!;
  g.fillStyle='#ffffff';g.fillRect(0,0,256,256);
  for(let i=0;i<1300;i++){
    const x=(i*43.73)%256,y=(i*91.19)%256;
    g.fillStyle=i%3?'rgba(255,255,255,.06)':'rgba(45,73,61,.055)';
    g.fillRect(x,y,course==='sunset'?12:course==='frosty'?5:2,course==='sunset'?1:3);
  }
  const t=new THREE.CanvasTexture(canvas);t.wrapS=t.wrapT=THREE.RepeatWrapping;t.repeat.set(60,60);t.colorSpace=THREE.SRGBColorSpace;return t;
}

export function createSponsorBannerTexture(text: string, bgColor: string, textColor: string): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 128;
  const ctx = canvas.getContext('2d')!;

  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, 512, 128);

  // Border & Chevron accents
  ctx.fillStyle = textColor;
  ctx.fillRect(0, 0, 512, 8);
  ctx.fillRect(0, 120, 512, 8);

  ctx.font = 'bold 44px sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = textColor;
  ctx.fillText(text, 256, 64);

  const texture = new THREE.CanvasTexture(canvas);
  return texture;
}

export function createTireTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext('2d')!;

  // Dark rubber
  ctx.fillStyle = '#18181b';
  ctx.fillRect(0, 0, 256, 256);

  // Wheel rim
  ctx.beginPath();
  ctx.arc(128, 128, 90, 0, Math.PI * 2);
  ctx.fillStyle = '#3f3f46';
  ctx.fill();

  ctx.beginPath();
  ctx.arc(128, 128, 70, 0, Math.PI * 2);
  ctx.fillStyle = '#e4e4e7';
  ctx.fill();

  // 5-spoke design
  ctx.strokeStyle = '#18181b';
  ctx.lineWidth = 14;
  for (let i = 0; i < 5; i++) {
    const angle = (i * Math.PI * 2) / 5;
    ctx.beginPath();
    ctx.moveTo(128, 128);
    ctx.lineTo(128 + Math.cos(angle) * 70, 128 + Math.sin(angle) * 70);
    ctx.stroke();
  }

  // Center hub
  ctx.beginPath();
  ctx.arc(128, 128, 22, 0, Math.PI * 2);
  ctx.fillStyle = '#eab308';
  ctx.fill();

  return new THREE.CanvasTexture(canvas);
}

export function createNumberDecal(number: number, color: string): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 128;
  canvas.height = 128;
  const ctx = canvas.getContext('2d')!;

  // White circle backdrop
  ctx.fillStyle = '#ffffff';
  ctx.beginPath();
  ctx.arc(64, 64, 56, 0, Math.PI * 2);
  ctx.fill();

  ctx.lineWidth = 6;
  ctx.strokeStyle = color;
  ctx.stroke();

  ctx.fillStyle = '#09090b';
  ctx.font = '900 64px sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(String(number), 64, 68);

  return new THREE.CanvasTexture(canvas);
}
