// Run on your own computer: node src/local.js  (then open http://<your-ip>:8000 on the TV)
import http from 'node:http';
import fs from 'node:fs';
import os from 'node:os';
import { WebSocketServer } from 'ws';
import { handleSocket } from './game.js';
import { route } from './routes.js';
import { tvApi } from './httptv.js';
import { assetType } from './assets.js';

const PORT = Number(process.env.PORT) || 8000;
const dir = process.env.DIST ? '../dist/' : '../public/'; // DIST=1 serves the minified build
const read = (f) => fs.readFileSync(new URL(dir + f, import.meta.url), 'utf8');
const art = () => fs.readFileSync(new URL('../public/kart-art.js', import.meta.url), 'utf8').replace('/*KART_PORTRAITS*/', () => fs.readFileSync(new URL('../public/kart-portraits.js', import.meta.url), 'utf8')).replace('/*KART_ITEMS*/', () => 'var KART_ITEMS = ' + fs.readFileSync('public/kart-items.json', 'utf8') + ';').replace('/*KART_COURSES*/', () => fs.readFileSync('public/kart-courses.js', 'utf8'));
const inc = (h) => h.replace('/*KART_ART*/', () => art()).replace('__MUSIC_REF__', 'main').replace('__KART_REF__', 'main');
const pages = () => ({ tv: inc(read('tv.html')), play: inc(read('play.html')) }); // re-read so edits show on refresh

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  if(url.pathname.startsWith('/game-assets/')){
    const path=url.pathname.slice('/game-assets/'.length),type=assetType(path);
    const file=type&&new URL('../'+path,import.meta.url);
    if(!file||!fs.existsSync(file)){res.writeHead(404);res.end('Not found');return;}
    res.writeHead(200,{'content-type':type});fs.createReadStream(file).pipe(res);return;
  }
  if(url.pathname==='/kart-art'){res.writeHead(200,{'content-type':'text/html; charset=utf-8'});res.end(inc(read('kart-art-review.html')));return;}
  if(url.pathname==='/kart-solo'){res.writeHead(200,{'content-type':'text/html; charset=utf-8'});res.end(inc(read('kart-solo.html')));return;}
  const r = url.pathname.startsWith('/api/tv/') ? await tvApi(url, req.method) : await route(url, pages());
  res.writeHead(r.status, r.headers);
  res.end(r.body);
});

const wss = new WebSocketServer({ server, path: '/ws' });
wss.on('connection', (ws) => handleSocket(ws));

server.listen(PORT, '0.0.0.0', () => {
  const ips = Object.values(os.networkInterfaces()).flat()
    .filter((i) => i && i.family === 'IPv4' && !i.internal).map((i) => i.address);
  console.log(`CouchParty running. On the TV open:`);
  for (const ip of ips) console.log(`  http://${ip}:${PORT}`);
  console.log(`  http://localhost:${PORT}  (this computer)`);
});
