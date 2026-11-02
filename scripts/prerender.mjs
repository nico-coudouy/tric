// Inserta el HTML renderizado por React dentro de dist/index.html,
// así Google y las vistas previas ven el contenido sin ejecutar JavaScript.
import { readFile, writeFile, rm } from 'node:fs/promises';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const htmlPath = path.join(root, 'dist', 'index.html');
const ssrDir = path.join(root, 'dist-ssr');

const { render } = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href);
const template = await readFile(htmlPath, 'utf8');

if (!template.includes('<!--app-html-->')) {
  throw new Error('No se encontró el marcador <!--app-html--> en dist/index.html');
}

await writeFile(htmlPath, template.replace('<!--app-html-->', render()));
await rm(ssrDir, { recursive: true, force: true });
console.log('✓ HTML prerenderizado en dist/index.html');
