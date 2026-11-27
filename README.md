# CouchParty

Party games for the TV. The TV shows the game, everyone's phone is the controller. No app installs, no accounts.

**Live:** https://is.gd/couchpartytv
(redirects to https://br-raspy-feather-bdoyz6f3-couchparty.compute.c-8.us-east-2.aws.neon.tech/, a Neon Function in the `couchparty` Neon project)

## Getting started

1. Open the link in the TV's browser. Press **OK** once on the remote to turn on sound.
2. Everyone scans the QR code, types a name and picks a color.
3. The first player to join is the host. The host picks a game on their phone (or use **left/right + OK** on the remote) and taps **Start**.
4. At the end, the TV shows the leaderboard. Press OK, or the host taps **Back to menu**.

## Light Cycles (1-8 players)

- Each player rides a light cycle that leaves a trail. Hitting a wall or any trail (yours too) crashes you.
- Swipe on your phone, or tap the arrows, to turn. Your phone buzzes when you crash.
- Points per round = riders you outlasted; the last rider standing gets a bonus point. 5 rounds.

## Texas Hold'em (2-8 players, play chips only)

- Everyone starts with 1,000 chips. Blinds 10/20. Your two cards show only on your phone (tap them to hide).
- On your turn your phone pings and buzzes: Fold, Check/Call, or Raise (presets for min, half pot, pot and all in, or use the slider). 30 seconds per turn; time out checks or folds.
- The TV shows the board, pot, everyone's chips and bets, and the showdown. Side pots and split pots are handled.
- The game ends when one player has all the chips, or the host taps **End game**.

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
| `public/tv.html` | TV screen: lobby + game menu, Light Cycles arena, poker table, leaderboard, sounds (Web Audio). ES5 JavaScript for old TV browsers. |
| `public/play.html` | Phone controller: join, game picker (host), D-pad/swipe, poker controls. |
| `src/game.js` | Rooms, players, game menu; hands input to the active game. Works with any standard WebSocket. |
| `src/games/cycles.js` | Light Cycles rules. |
| `src/games/poker.js`, `src/games/handeval.js` | Hold'em rules, betting, side pots, hand ranking. |
| `src/questions.js` | Old trivia questions (trivia is no longer in the menu). |
| `src/function.js` | Neon Function entry (pages + `/ws` WebSocket). |
| `src/local.js` | Local Node server for development. |
| `test/sim2.mjs` | Plays both games with a fake TV and 3 bot phones and checks chip totals: run the server with `CP_FAST=1 npm start`, then `node test/sim2.mjs`. |

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
