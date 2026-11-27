// Run on your own computer: node src/local.js  (then open http://<your-ip>:8000 on the TV)
import http from 'node:http';
import fs from 'node:fs';
import os from 'node:os';
import { WebSocketServer } from 'ws';
import { handleSocket } from './game.js';
import { route } from './routes.js';
import { tvApi } from './httptv.js';

const PORT = Number(process.env.PORT) || 8000;
const dir = process.env.DIST ? '../dist/' : '../public/'; // DIST=1 serves the minified build
const read = (f) => fs.readFileSync(new URL(dir + f, import.meta.url), 'utf8');
const pages = () => ({ tv: read('tv.html'), play: read('play.html') }); // re-read so edits show on refresh

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
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
