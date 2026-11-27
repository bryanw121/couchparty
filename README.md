# CouchParty

Texas Hold'em for the TV with play money. The TV shows the game, everyone's phone is the controller. No app installs, no accounts.

**Live:** https://is.gd/couchpartytv
(redirects to https://br-raspy-feather-bdoyz6f3-couchparty.compute.c-8.us-east-2.aws.neon.tech/, a Neon Function in the `couchparty` Neon project)

## Getting started

1. Open the link in the TV's browser. Press **OK** once on the remote to turn on sound and music.
2. Everyone scans the QR code, types a name and picks a color.
3. The first player to join is the host. The host picks table options (buy-in, blinds, rebuys) on their phone and taps **Start**.
4. At the end, the TV shows the play-money ledger. Press OK, or the host taps **Back to menu**.

## Texas Hold'em (2-8 players, play money only)

- Host options: buy-in $100 / $200 / $500, blinds $1/$2, $2/$5 or $5/$10, rebuys on/off.
- Your two cards show only on your phone (tap them to hide). On your turn your phone pings and buzzes: Fold, Check/Call, or Raise (min, half pot, pot, all in, or the slider). 30 seconds per turn.
- **Rebuy**: when you're below the buy-in and not in a hand, tap Rebuy to add another buy-in. If only one player has chips left, the table waits for a rebuy.
- **Cash out**: leave the table between hands and keep your stack on the ledger.
- The TV shows the board, pot, everyone's stack and running net. Side pots and split pots are handled.
- **Ledger**: when the host ends the game (or one player has all the money and rebuys are off), the TV shows bought in, cashed out and net for everyone. Nets always add up to $0. No real money is involved.

## Audio

Recorded sounds stream from the public `bryanw121/couchparty-audio` repo through jsDelivr; if they can't load, the TV falls back to synthesized sounds.

- Card sounds: [Casino Audio](https://kenney.nl/assets/casino-audio) by Kenney, CC0.
- Music: "Airport Lounge" by Kevin MacLeod (incompetech.com), licensed under Creative Commons: By Attribution 4.0 (credited on screen).

## Run it on your own computer

```bash
npm install
npm start
```

It prints the address to open on the TV, e.g. `http://192.168.1.20:8000`. The TV, phones and computer must be on the same Wi-Fi. Phones join at `/play`.

## Deploy updates to Neon

```bash
npm run build          # minifies the pages and bundles everything into dist/index.mjs
npx neon link          # pick the "couchparty" project
npx neon functions deploy couchparty --src dist/index.mjs --no-bundle
```

## Files

| File | What it does |
| - | - |
| `public/tv.html` | TV screen: lobby, poker table, ledger, sounds and music. ES5 JavaScript for old TV browsers. |
| `public/play.html` | Phone controller: join, host table options, poker controls, rebuy and cash out. |
| `src/game.js` | Rooms, players, game menu; hands input to the active game. Works with any standard WebSocket. |
| `src/games/poker.js`, `src/games/handeval.js` | Hold'em rules, betting, side pots, hand ranking. |
| `src/function.js` | Neon Function entry (pages + `/ws` WebSocket). |
| `src/local.js` | Local Node server for development. |
| `test/sim2.mjs` | Plays poker with a fake TV and 3 bot phones (with rebuys) and checks the money always balances: run the server with `CP_FAST=1 npm start`, then `node test/sim2.mjs`. |

## TV compatibility

The game is a plain web page, so it works on any TV that has a modern web browser. It scales to 720p, 1080p and 4K, leaves a 5% margin for TVs that crop the edges, and reacts to the remote's OK / Enter and Play buttons.

| TV / device | How to open it |
| - | - |
| Fire TV (Fire OS: Stick 4K/4K Max, Cube, Omni TVs) | Install **Silk Browser** from the Appstore, open the link, bookmark it. |
| Fire TV on Vega OS (Stick 4K Select, newer sticks) | Use Silk if it's in your Appstore; otherwise a laptop over HDMI. A native Vega app (WebView wrapper) is possible later. |
| Samsung (Tizen) | Built-in **Internet** app. |
| LG (webOS) | Built-in **Web Browser** app. |
| Google TV / Android TV | Install a browser (e.g. TV Bro) or cast a Chrome tab from a laptop. |
| Roku, Apple TV | No usable browser: plug in a laptop with HDMI, or AirPlay/cast a browser tab. |
| Any TV | A laptop on HDMI, browser in full screen (F11). |

Typing the long URL with a remote is painful, so bookmark it once, or add a short custom domain in Neon (Functions → Custom domains).

## Known limits

- The QR image comes from api.qrserver.com (keeps the server tiny). If it doesn't load, players can type the room code at `/play`.
- Rooms live in memory. If Neon restarts the function, the TV and phones reconnect to the same room code, but scores reset.
- Neon may run more than one copy of the function under heavy load; for a living-room game this doesn't come up, but a very busy deploy would need a shared store (Postgres) for rooms.
- Up to 8 players per room.
- TV browsers only allow sound after a button press, so press OK once when the lobby opens.

## Roku app (play straight from the TV)

`roku/` is a native Roku channel, so no computer or screen casting is needed. It connects over a secure WebSocket like the phones do, and falls back to HTTP long-polling (`/api/tv/*`) on Rokus whose OS lacks `roWebSocket`.

Install it once (sideload, free, about 5 minutes):

1. **Turn on developer mode.** Start on the Roku Home screen and press, at an easy pace, Home ×3, Up ×2, Right, Left, Right, Left, Right (use the physical remote). Note the IP address shown, choose **Enable installer and restart**, accept the license, and set a password (username is `rokudev`). The Roku restarts.
2. **Upload the app.** On a phone or laptop on the same Wi‑Fi, open `http://<roku-ip>`, sign in as `rokudev`, choose `couchparty-roku.zip`, tap **Install**.
3. **Play.** CouchParty opens on the TV and stays in your Roku home row as "dev". Scan the QR code with phones to join.

Remote: OK starts or continues, Left/Right move, Play/Pause toggles music, Back exits.

Build the zip: `cd roku && zip -r ../couchparty-roku.zip manifest source components images fonts sounds`.
Roku only allows one sideloaded app at a time; installing another replaces it. Sideloaded apps are meant for development, and Roku can occasionally drop one, for example after an update. If it disappears, upload the zip again.

## Running across several server copies

Neon can run more than one copy of the function at once, each with its own memory. `src/relay.js` keeps that from splitting a game:

- Each room lives in memory on one copy, its owner, recorded in Postgres (`cp_rooms`, with a heartbeat every 5 s).
- A phone or TV that lands on another copy is relayed: its messages go to the owner through `cp_msgs`, and replies come back the same way (polled every 120 ms while relaying).
- When everyone lands on the owner, the usual case, messages never touch the database.
- If an owner stops heartbeating for 20 s, the next join or TV reconnect takes the room over. The game in progress is lost, and players rejoin the lobby.
- Long-poll TVs always go through the database, since each poll can land on any copy.

Without `DATABASE_URL` (local `npm start`) everything stays in memory. Test with two simulated copies: `CP_FAST=1 node test/relay.mjs` (needs `@electric-sql/pglite`).

## Kario Mart (3D)

Split-screen 3D kart racing for up to 4 phones; extra players watch. Phones steer by tilting (or with ◀ ▶ buttons),
with drift, item and brake buttons; gas is automatic by default. Items: banana, green/red/blue shells, boost, star, lightning.

- The race runs on the TV in three.js (`web/kart`, built to `web-dist/kart.js` with `node build-kart.mjs`).
- TVs load it from this public repo through jsDelivr, pinned to a commit (`web-dist/KART_REF`).
- Needs a TV browser with 3D graphics (Fire TV, smart TV browser, laptop). The Roku app shows a note and backs out.
- Credits: engine adapted from the MIT-licensed Arcade-Kart-Racer-3D; see `web/kart/NOTICE.md`.

The Mario cast's names, colors, selection IDs and stats share one roster in `src/games/kart-roster.js`.
The race uses `characterSculpt.ts` through `driverModel.ts`, with character-specific bodies in `kartBody.ts`.
The TV resolves player appearance from the selected driver ID, so older room colors cannot recolor the karts.
`node scripts/render-kart-portraits.mjs` renders selection portraits from those same sculptures;
add `--karts` (and optionally `--rear`) for full kart previews in `public/kart-models/`.
Run `npm run test:kart-models` to check menu selection through race assembly, shading and wheel animation.

Items use `itemModels.ts`: shells, mushrooms, Super Star, Bob-omb, Blooper, Boo, Bullet Bill and question boxes.
The TV HUD and phone controller use transparent icons rendered from those meshes (`public/kart-items.json`).
Bullet Bill also replaces the visible kart while that power-up is active.
`courseScenery.ts` supplies Mushroom Village, Sunshine Harbor, Snowbell Village and Rainbow Metro with
roadside towns, shops, residents, street lamps and course landmarks. Static scenery is batched by material;
building placement leaves the road and shortcuts clear.
Run `npm run build:kart-art` for offline item and course renders, and `npm run test:kart-world`
for item throws, pickup boxes, shared icons and village/shortcut clearance checks.
Preview images in `public/item-previews/` and `public/course-previews/` are offline renders of game meshes.

## Deploying page changes

The server fetches the TV and phone pages from this repo at the commit in its `PAGES_REF` setting.
After changing a page: `npm run build`, commit `web-dist/pages`, push, then set `PAGES_REF` to that commit.
Server code changes still need a function deploy.
