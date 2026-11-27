# Kart menu flow: local server, TV page and Bryan's phone in headless Chrome, Mia over WebSocket.
# Walks mode → speed → drivers → course → rules → race, screenshotting TV and phone at each step.
import asyncio, json, os, subprocess, time
import websockets
from playwright.async_api import async_playwright
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = '/tmp/karttest'

async def mia(code, state):
    async with websockets.connect('ws://localhost:8000/ws') as ws:
        await ws.send(json.dumps({'t': 'join', 'room': code, 'name': 'Mia'}))
        async def reader():
            async for raw in ws:
                m = json.loads(raw)
                if m['t'] == 'state': state['s'] = m['s']
        task = asyncio.create_task(reader())
        while not state.get('quit'):
            g = (state.get('s') or {}).get('g') or {}
            if g.get('kind') == 'kart' and g.get('step') == 'driver' and g.get('phase') == 'menu' and state.get('mia_go'):
                me = [p for p in g['picks'] if p['driver'] != 'zippy']
                await ws.send(json.dumps({'t': 'kmenu', 'a': 'driver', 'v': 'bunbun'}))
                await asyncio.sleep(0.3)
                await ws.send(json.dumps({'t': 'kmenu', 'a': 'ready'}))
                state['mia_go'] = False
            if g.get('phase') == 'race':
                await ws.send(json.dumps({'t': 'kin', 's': 0.1, 'g': True, 'b': False, 'd': False, 'i': False}))
            await asyncio.sleep(0.1)
        task.cancel()

async def main():
    srv = subprocess.Popen(['node', 'src/local.js'], cwd=ROOT, stdout=subprocess.DEVNULL, stderr=subprocess.STDOUT)
    await asyncio.sleep(1)
    try:
        async with async_playwright() as p:
            b = await p.chromium.launch(executable_path='/usr/bin/google-chrome', args=['--use-gl=swiftshader', '--enable-webgl', '--ignore-gpu-blocklist'])
            tv = await b.new_page(viewport={'width': 1280, 'height': 720})
            errs = []
            tv.on('pageerror', lambda e: errs.append('tv: ' + str(e)))
            await tv.route('**/web-dist/kart.js', lambda r: r.fulfill(path=os.path.join(ROOT, 'web-dist/kart.js'), content_type='application/javascript'))
            await tv.goto('http://localhost:8000/')
            await tv.wait_for_timeout(1200)
            code = (await tv.text_content('#code')).strip()
            ph = await b.new_page(viewport={'width': 390, 'height': 844}, has_touch=True, is_mobile=True)
            ph.on('pageerror', lambda e: errs.append('phone: ' + str(e)))
            await ph.goto('http://localhost:8000/play')
            await ph.fill('#room', code)
            await ph.fill('#name', 'Bryan')
            await ph.click('#joinBtn')
            await ph.wait_for_timeout(800)
            state = {}
            mt = asyncio.create_task(mia(code, state))
            await ph.wait_for_timeout(800)
            # Bryan (host) picks Kart Racer and starts
            await ph.evaluate("send({t:'pick', game:'kart'})")
            await ph.wait_for_timeout(300)
            await ph.evaluate("send({t:'start'})")
            await ph.wait_for_timeout(900)
            async def snap(name):
                await tv.wait_for_timeout(500)
                await tv.screenshot(path=f'{OUT}/menu-tv-{name}.png')
                await ph.screenshot(path=f'{OUT}/menu-phone-{name}.png')
            await snap('1-mode')
            await ph.click('[data-kchoose="vs"]'); await snap('2-speed')
            await ph.click('[data-kchoose="fast"]'); await ph.wait_for_timeout(300)
            await ph.click('[data-kdrv="zippy"]'); await ph.wait_for_timeout(200)
            await ph.click('#kMenuP [data-steer="stick"]'); await snap('3-driver')
            state['mia_go'] = True
            await ph.wait_for_timeout(800)
            await ph.click('[data-km="ready"]'); await snap('4-course')
            await ph.click('[data-kchoose="neon"]'); await ph.wait_for_timeout(300)
            await ph.click('[data-klaps="2"]'); await snap('5-rules')
            await ph.click('[data-km="go"]')
            await ph.wait_for_timeout(9000)
            # hold the joystick a bit to the left
            box = await ph.locator('#kStick').bounding_box()
            if box:
                await ph.mouse.move(box['x'] + box['width'] / 2, box['y'] + box['height'] / 2)
                await ph.mouse.down(); await ph.mouse.move(box['x'] + box['width'] / 2 - 35, box['y'] + box['height'] / 2)
            await ph.wait_for_timeout(1500)
            await tv.screenshot(path=f'{OUT}/menu-tv-6-race.png')
            await ph.set_viewport_size({'width': 844, 'height': 390})
            await ph.wait_for_timeout(400)
            await ph.screenshot(path=f'{OUT}/menu-phone-6-race.png')
            await ph.mouse.up()
            g = (state.get('s') or {}).get('g') or {}
            print('race phase', g.get('phase'), 'course', g.get('course'), 'racers', [(r['name'], r['driver']) for r in g.get('racers', [])])
            print('errors', errs[:6])
            state['quit'] = True
            await mt
            await b.close()
    finally:
        srv.terminate()
asyncio.run(main())
