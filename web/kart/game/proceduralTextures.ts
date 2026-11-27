import * as THREE from 'three';

export function createTerrainTexture(course:string):THREE.CanvasTexture {
  const canvas=document.createElement('canvas');canvas.width=canvas.height=256;
  const g=canvas.getContext('2d')!;g.fillStyle='#f8faf7';g.fillRect(0,0,256,256);
  let seed=419;const random=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;};
  if(course==='neon'){
    g.fillStyle='#eef4ff';g.fillRect(0,0,256,256);g.strokeStyle='#a1b5d4';g.lineWidth=1;
    for(let x=0;x<=256;x+=64){g.beginPath();g.moveTo(x,0);g.lineTo(x,256);g.stroke();g.beginPath();g.moveTo(0,x);g.lineTo(256,x);g.stroke();}
    g.fillStyle='#cfdbed';for(let y=12;y<256;y+=64)for(let x=12;x<256;x+=64)g.fillRect(x,y,40,40);
  }else if(course==='sunset'){
    g.strokeStyle='#d9c9a950';g.lineWidth=2;
    for(let y=0;y<280;y+=24){g.beginPath();g.moveTo(-12,y);g.bezierCurveTo(60,y-13,170,y+14,268,y);g.stroke();}
  }else if(course==='meadow'){
    g.fillStyle='#d9e4d25c';for(let x=0;x<256;x+=64)g.fillRect(x,0,32,256);
  }
  for(let i=0;i<1000;i++){const x=random()*256,y=random()*256;g.fillStyle=course==='frosty'?(i%3?'#dae8f033':'#ffffff88'):'#9ca58e18';g.fillRect(x,y,course==='frosty'?3:1,course==='meadow'?3:1);}
  const texture=new THREE.CanvasTexture(canvas);texture.colorSpace=THREE.SRGBColorSpace;texture.wrapS=texture.wrapT=THREE.RepeatWrapping;texture.repeat.set(18,18);return texture;
}

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

export function createRoadTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d')!;

  // Cool slate asphalt keeps the candy-colored karts legible.
  ctx.fillStyle = '#41495e';
  ctx.fillRect(0, 0, 512, 512);

  // Subtle asphalt grain
  for (let i = 0; i < 6000; i++) {
    const x = Math.random() * 512;
    const y = Math.random() * 512;
    const shade = Math.floor(62 + Math.random() * 12);
    ctx.fillStyle = `rgb(${shade},${shade + 7},${shade + 21})`;
    ctx.fillRect(x, y, 2, 2);
  }

  // White dashed center line
  ctx.fillStyle = '#f8fafc';
  const dashCount = 8;
  const dashH = 512 / dashCount;
  for (let i = 0; i < dashCount; i++) {
    ctx.fillRect(256 - 6, i * dashH + 12, 12, dashH - 24);
  }

  // Solid outer edge lines (yellow rumble edge)
  ctx.fillStyle = '#eab308';
  ctx.fillRect(24, 0, 8, 512);
  ctx.fillRect(512 - 32, 0, 8, 512);

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(1, 40);
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
  texture.repeat.set(1, 22);
  return texture;
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
