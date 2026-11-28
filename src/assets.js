// Serve pinned public game files with browser-safe MIME types. The growing art
// repository exceeds jsDelivr's package limit, so fetch GitHub's raw files.
export function assetType(path) {
  return ['web-dist/kart.js','web-dist/kart-art-review.js','web-dist/kart-solo.js'].includes(path)
    ? 'text/javascript; charset=utf-8'
    : ['audio/kart-instrumental-preview.wav','audio/kart-countdown-preview.wav','audio/kart-driver-voices-preview.wav'].includes(path) ? 'audio/wav'
    : /^audio\/(?:kart-(?:meadow|sunset|frosty|neon|menu|victory)|lobby)\.mp3$/.test(path)
      ? 'audio/mpeg' : ['public/art-review/four-player-lighting-study.png','public/art-review/presentation-study.png'].includes(path) ? 'image/png' : null;
}
export async function gameAsset(url) {
  const path = url.pathname.slice('/game-assets/'.length);
  const type = assetType(path);
  if (!type) return new Response('Not found', { status: 404 });
  const ref = url.searchParams.get('ref') || String(process.env.PAGES_REF || '').trim();
  if (!/^[0-9a-f]{7,40}$/.test(ref)) return new Response('Release unavailable', { status: 503 });
  const upstream = await fetch('https://raw.githubusercontent.com/bryanw121/couchparty/' + ref + '/' + path);
  if (!upstream.ok) return new Response('Asset temporarily unavailable', { status: 502 });
  return new Response(upstream.body, { headers: {
    'content-type': type,
    'cache-control': url.searchParams.has('ref') ? 'public, max-age=31536000, immutable' : 'public, max-age=60',
    'x-content-type-options': 'nosniff',
  } });
}
