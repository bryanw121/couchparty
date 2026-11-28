// Builds the 3D kart game into web-dist/kart.js (served to TVs from the public repo via jsDelivr).
import { build } from 'esbuild';
await build({
  entryPoints: ['web/kart/main.ts'],
  bundle: true,
  minify: true,
  format: 'iife',
  target: 'es2020',
  outfile: 'web-dist/kart.js',
  legalComments: 'eof',
  logLevel: 'info',
});
await build({entryPoints:['web/kart/artReview.ts'],bundle:true,minify:true,format:'iife',target:'es2020',outfile:'web-dist/kart-art-review.js',legalComments:'eof',logLevel:'info'});
await build({entryPoints:['web/kart/solo.ts'],bundle:true,minify:true,format:'iife',target:'es2020',outfile:'web-dist/kart-solo.js',legalComments:'eof',logLevel:'info'});
