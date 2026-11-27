// Neon Function entry: serves the pages and the /ws WebSocket.
import { upgradeWebSocket } from '@neon/functions';
import * as game from './game.js';
import { neonHttp } from './dbhttp.js';
import { createRelay } from './relay.js';
import { route } from './routes.js';
import { tvApi as memTvApi } from './httptv.js';

// With Postgres on the branch, rooms work across server copies; otherwise everything stays in memory.
const db = process.env.DATABASE_URL ? neonHttp(process.env.DATABASE_URL) : null;
const relay = db ? createRelay({ sql: db, game, log: console.error }) : null;
const attach = relay ? relay.attach : game.handleSocket;
const tvApi = relay ? relay.tvApi : memTvApi;
import tv from '../public/tv.html';
import play from '../public/play.html';

function publicUrl(request) {
  const url = new URL(request.url);
  const host = request.headers.get('x-forwarded-host');
  if (host) url.host = host;
  url.protocol = 'https:';
  url.port = '';
  return url;
}

const handler = {
  async fetch(request) {
    const url = publicUrl(request);
    if (url.pathname === '/ws') {
      if (request.headers.get('upgrade')?.toLowerCase() !== 'websocket') {
        return new Response('WebSocket endpoint', { status: 426 });
      }
      const { socket, response } = upgradeWebSocket(request);
      attach(socket);
      return response;
    }
    const r = url.pathname.startsWith('/api/tv/') ? await tvApi(url, request.method) : await route(url, { tv, play });
    return new Response(r.body, { status: r.status, headers: r.headers });
  },
};

export default handler;
