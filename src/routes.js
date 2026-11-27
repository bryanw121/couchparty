// Plain HTTP routes shared by the local server and the Neon Function.
// The TV draws its QR code from a public QR image service (see tv.html), keeping this bundle tiny.
export async function route(url, pages) {
  const path = url.pathname.replace(/\/+$/, '') || '/';
  const html = { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-cache' };
  if (path === '/' || path === '/tv') return { status: 200, headers: html, body: pages.tv };
  if (path === '/play' || path === '/join') return { status: 200, headers: html, body: pages.play };
  if (path === '/health') return { status: 200, headers: { 'content-type': 'text/plain' }, body: 'ok' };
  return { status: 404, headers: { 'content-type': 'text/plain' }, body: 'Not found' };
}
