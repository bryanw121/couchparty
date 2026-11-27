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

export function createRoadTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d')!;

  // Dark asphalt base
  ctx.fillStyle = '#27272a';
  ctx.fillRect(0, 0, 512, 512);

  // Subtle asphalt grain
  for (let i = 0; i < 6000; i++) {
    const x = Math.random() * 512;
    const y = Math.random() * 512;
    const shade = Math.floor(35 + Math.random() * 15);
    ctx.fillStyle = `rgb(${shade},${shade},${shade})`;
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

export function createCurbTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 128;
  canvas.height = 256;
  const ctx = canvas.getContext('2d')!;

  const segments = 8;
  const segH = canvas.height / segments;

  for (let i = 0; i < segments; i++) {
    ctx.fillStyle = i % 2 === 0 ? '#dc2626' : '#ffffff'; // Vibrant red and white
    ctx.fillRect(0, i * segH, canvas.width, segH);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(1, 80);
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
