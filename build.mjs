// Bundles the Neon Function: minifies the pages' inline CSS/JS, then bundles server + pages.
import { build, transformSync } from 'esbuild';
import fs from 'node:fs';
const mini = (html, target) => html
  .replace(/<script>([\s\S]*?)<\/script>/g, (_, js) => `<script>${transformSync(js, { minify: true, target }).code}</script>`)
  .replace(/<style>([\s\S]*?)<\/style>/g, (_, css) => `<style>${transformSync(css, { loader: 'css', minify: true }).code}</style>`)
  .replace(/>\s+</g, '><');
fs.mkdirSync('dist', { recursive: true });
// The 3D kart game loads from the public repo at a pinned commit (web-dist/KART_REF), so TVs never get a stale cached copy.
const kartArt = fs.readFileSync('public/kart-art.js', 'utf8').replace('/*KART_PORTRAITS*/', () => fs.readFileSync('public/kart-portraits.js', 'utf8')).replace('/*KART_ITEMS*/', () => 'var KART_ITEMS = ' + fs.readFileSync('public/kart-items.json', 'utf8') + ';').replace('/*KART_COURSES*/', () => fs.readFileSync('public/kart-courses.js', 'utf8'));
const inc = (html) => html.replace('/*KART_ART*/', () => kartArt);
const kartRef = (process.env.KART_REF || (fs.existsSync('web-dist/KART_REF') ? fs.readFileSync('web-dist/KART_REF', 'utf8') : 'main')).trim();
fs.writeFileSync('dist/tv.html', mini(inc(fs.readFileSync('public/tv.html', 'utf8')).replace('__KART_REF__', kartRef).replace('__MUSIC_REF__', kartRef), 'es5'));
fs.writeFileSync('dist/play.html', mini(inc(fs.readFileSync('public/play.html', 'utf8')), 'es2018'));
fs.writeFileSync('dist/kart-art-review.html',mini(fs.readFileSync('public/kart-art-review.html','utf8').replace('__KART_REF__',kartRef),'es2018'));
// Same pages go to web-dist/pages for the public repo; the server fetches them at PAGES_REF.
fs.mkdirSync('web-dist/pages', { recursive: true });
for (const n of ['tv', 'play']) fs.copyFileSync(`dist/${n}.html`, `web-dist/pages/${n}.html`);
fs.copyFileSync('dist/kart-art-review.html','web-dist/pages/kart-art-review.html');
await build({
  entryPoints: ['src/function.js'], bundle: true, minify: true, legalComments: 'none',
  platform: 'node', target: 'node24', format: 'esm', outfile: 'dist/index.mjs',
  loader: { '.html': 'text' },
  plugins: [{ name: 'pages', setup(b) { b.onResolve({ filter: /public\/(tv|play)\.html$/ }, (a) => ({ path: new URL(`./dist/${a.path.split('/').pop()}`, import.meta.url).pathname })); } }],
});
console.log('built', fs.statSync('dist/index.mjs').size, 'bytes');
