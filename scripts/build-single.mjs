/**
 * Gera um ÚNICO arquivo HTML (dist-single/voar-clinic.html) com tudo embutido:
 * CSS, JavaScript, fonte, fotos e vídeo. Funciona offline e pode ser aberto direto no celular.
 *
 *   npm run build:single
 *
 * Opcional: VITE_FORM_ENDPOINT=https://formspree.io/f/xxxx npm run build:single
 */
import { createRequire } from 'node:module';
import { readFileSync, writeFileSync, mkdirSync, readdirSync, existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);
const { build } = require('esbuild');

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const out = join(root, 'dist-single');
mkdirSync(out, { recursive: true });

// 1) JS + CSS (a fonte .woff entra no CSS como data URI)
const result = await build({
  entryPoints: [join(root, 'src/main.jsx')],
  bundle: true,
  minify: true,
  write: false,
  outdir: out,
  format: 'iife',
  target: ['es2020'],
  jsx: 'automatic',
  loader: { '.js': 'jsx', '.woff': 'dataurl', '.woff2': 'dataurl' },
  define: {
    'process.env.NODE_ENV': '"production"',
    'import.meta.env': JSON.stringify({ VITE_FORM_ENDPOINT: process.env.VITE_FORM_ENDPOINT || '' }),
  },
  nodePaths: (process.env.NODE_PATH || '').split(':').filter(Boolean),
  logLevel: 'warning',
});
let js = '';
let css = '';
for (const f of result.outputFiles) {
  if (f.path.endsWith('.js')) js = f.text;
  if (f.path.endsWith('.css')) css = f.text;
}

// 2) Arquivos estáticos -> data URIs (fotos em WebP servem também como fallback do .jpg)
const pub = join(root, 'public');
const assets = {};
const b64 = (p, mime) => `data:${mime};base64,${readFileSync(p).toString('base64')}`;
for (const f of readdirSync(join(pub, 'images'))) {
  if (!f.endsWith('.webp')) continue;
  const uri = b64(join(pub, 'images', f), 'image/webp');
  const name = f.slice(0, -5);
  assets[`/images/${name}.webp`] = uri;
  assets[`/images/${name}.jpg`] = uri;
}
const video = join(pub, 'video/tour-clinica.mp4');
if (existsSync(video)) assets['/video/tour-clinica.mp4'] = b64(video, 'video/mp4');
const favicon = b64(join(pub, 'favicon.svg'), 'image/svg+xml');

// 3) Monta o HTML a partir do index.html do projeto (mantém título, SEO e dados estruturados)
let head = readFileSync(join(root, 'index.html'), 'utf8');
const headInner = head.slice(head.indexOf('<head>') + 6, head.indexOf('</head>'));
const cleanHead = headInner
  .replace(/<link rel="icon"[^>]*>/, `<link rel="icon" type="image/svg+xml" href="${favicon}" />`)
  .replace(/<meta property="og:image"[^>]*>/, '');
const safe = (s) => s.replace(/<\/(script|style)/gi, '<\\/$1');

const html = `<!doctype html>
<html lang="pt-BR">
  <head>${cleanHead}
    <style>${safe(css)}</style>
  </head>
  <body>
    <div id="root"></div>
    <script>window.__ASSETS__=${JSON.stringify(assets)};</script>
    <script>${safe(js)}</script>
  </body>
</html>
`;
const file = join(out, 'voar-clinic.html');
writeFileSync(file, html);
console.log(`OK  ${file}  (${(html.length / 1024 / 1024).toFixed(2)} MB)`);

// 4) Versão estática: index.html + app.css + app.js + images/ video/ (HTML, CSS e JavaScript separados).
//    Basta publicar a pasta dist-static em qualquer hospedagem.
import { cpSync, rmSync } from 'node:fs';
const st = join(root, 'dist-static');
rmSync(st, { recursive: true, force: true });
mkdirSync(st, { recursive: true });
cpSync(join(pub, 'images'), join(st, 'images'), { recursive: true });
cpSync(join(pub, 'video'), join(st, 'video'), { recursive: true });
cpSync(join(pub, 'favicon.svg'), join(st, 'favicon.svg'));
// fonte embutida no CSS (data URI); o app.js reaproveita o mesmo bundle sem __ASSETS__
const staticHead = headInner.replace(/<link rel="icon"[^>]*>/, '<link rel="icon" type="image/svg+xml" href="favicon.svg" />');
writeFileSync(join(st, 'app.css'), css);
writeFileSync(join(st, 'app.js'), js);
writeFileSync(
  join(st, 'index.html'),
  `<!doctype html>
<html lang="pt-BR">
  <head>${staticHead}
    <link rel="stylesheet" href="app.css" />
  </head>
  <body>
    <div id="root"></div>
    <script src="app.js"></script>
  </body>
</html>
`,
);
console.log('OK  dist-static/ (index.html, app.css, app.js, images/, video/)');
