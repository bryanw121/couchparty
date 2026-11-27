// Bundles the Neon Function: minifies the pages' inline CSS/JS, then bundles server + pages.
import { build, transformSync } from 'esbuild';
import fs from 'node:fs';
const mini = (html, target) => html
  .replace(/<script>([\s\S]*?)<\/script>/g, (_, js) => `<script>${transformSync(js, { minify: true, target }).code}</script>`)
  .replace(/<style>([\s\S]*?)<\/style>/g, (_, css) => `<style>${transformSync(css, { loader: 'css', minify: true }).code}</style>`)
  .replace(/>\s+</g, '><');
fs.mkdirSync('dist', { recursive: true });
fs.writeFileSync('dist/tv.html', mini(fs.readFileSync('public/tv.html', 'utf8'), 'es5'));
fs.writeFileSync('dist/play.html', mini(fs.readFileSync('public/play.html', 'utf8'), 'es2018'));
await build({
  entryPoints: ['src/function.js'], bundle: true, minify: true, legalComments: 'none',
  platform: 'node', target: 'node24', format: 'esm', outfile: 'dist/index.mjs',
  loader: { '.html': 'text' },
  plugins: [{ name: 'pages', setup(b) { b.onResolve({ filter: /public\/(tv|play)\.html$/ }, (a) => ({ path: new URL(`./dist/${a.path.split('/').pop()}`, import.meta.url).pathname })); } }],
});
console.log('built', fs.statSync('dist/index.mjs').size, 'bytes');
