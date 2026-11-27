# End-to-end: local server, TV page in headless Chrome (kart.js served locally), two phones over WebSocket.
import asyncio, json, os, subprocess, sys, time
import websockets
from playwright.async_api import async_playwright
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

async def phone(name, code, log, steer_fn):
    async with websockets.connect('ws://localhost:8000/ws') as ws:
        await ws.send(json.dumps({'t': 'join', 'room': code, 'name': name}))
        state = {}
        async def reader():
            async for raw in ws:
                m = json.loads(raw)
                if m['t'] in ('khud', 'kev'): log.append((name, m['t'], m.get('h') or m.get('e')))
                if m['t'] == 'state': state['s'] = m['s']; state['you'] = m['you']
        task = asyncio.create_task(reader())
        await asyncio.sleep(1.5)
        if state['you']['isHost']:
            await ws.send(json.dumps({'t': 'pick', 'game': 'kart'}))
            await ws.send(json.dumps({'t': 'set', 'game': 'kart', 'key': 'laps', 'value': 2}))
            await asyncio.sleep(0.3)
            await ws.send(json.dumps({'t': 'start'}))
        t0 = time.time()
        while time.time() - t0 < 70:
            s = state.get('s') or {}
            if s.get('phase') == 'final': break
            t = time.time() - t0
            await ws.send(json.dumps({'t': 'kin', 's': steer_fn(t), 'g': True, 'b': False, 'd': False, 'i': int(t) % 5 == 0}))
            await asyncio.sleep(0.05)
        task.cancel()
        return state.get('s')

async def main():
    srv = subprocess.Popen(['node', 'src/local.js'], cwd=ROOT, stdout=subprocess.DEVNULL, stderr=subprocess.STDOUT)
    await asyncio.sleep(1)
    try:
        async with async_playwright() as p:
            b = await p.chromium.launch(executable_path='/usr/bin/google-chrome', args=['--use-gl=swiftshader', '--enable-webgl', '--ignore-gpu-blocklist'])
            pg = await b.new_page(viewport={'width': 1280, 'height': 720})
            errs = []
            pg.on('pageerror', lambda e: errs.append(str(e)))
            await pg.route('**/web-dist/kart.js', lambda r: r.fulfill(path=os.path.join(ROOT, 'web-dist/kart.js'), content_type='application/javascript'))
            await pg.goto('http://localhost:8000/')
            await pg.wait_for_timeout(1500)
            code = await pg.text_content('#code')
            log = []
            # Phones: no real driving skill, so steer gently toward the AI line isn't possible here; just wiggle.
            async def force_finish():
                await asyncio.sleep(22)
                await pg.screenshot(path='/tmp/karttest/e2e-race.png')
                await pg.evaluate("CouchKart.current.humans.forEach(function(r){ r.state.currentLap = 3; })")
            res = await asyncio.gather(
                force_finish(),
                phone('Bryan', code, log, lambda t: 0.25 * __import__('math').sin(t)),
                phone('Mia', code, log, lambda t: -0.2 * __import__('math').sin(t * 0.7)),
                (lambda: None)() or asyncio.sleep(0),
            )
            await pg.wait_for_timeout(1000)
            await pg.screenshot(path='/tmp/karttest/e2e-final.png')
            final = res[1] or {}
            print('room code', code, '| final phase', final.get('phase'))
            print('results', [(r['name'], r.get('time'), r.get('human')) for r in (final.get('results') or [])][:6])
            kinds = {}
            for n, t, v in log: kinds[t] = kinds.get(t, 0) + 1
            print('phone messages', kinds, 'sample', [x for x in log if x[1] == 'khud'][:2])
            print('page errors', errs[:5])
            await b.close()
    finally:
        srv.terminate()
asyncio.run(main())
