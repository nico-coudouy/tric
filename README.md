# TriC Soluciones Integrales — Sitio web

Landing page de **TriC Soluciones Integrales**, servicio de plomería, gas (gasista matriculado) y electricidad en Mar del Plata y alrededores. El objetivo del sitio es uno solo: que el cliente escriba por **WhatsApp**.

🔗 **Online:** https://tric-ten.vercel.app/

---

## ✨ Qué incluye

- **Contacto por WhatsApp en un toque**: todos los botones abren WhatsApp con un mensaje precargado según el servicio o la urgencia, más un botón flotante.
- **Teléfono clickeable** (`tel:`) para llamar desde el celular.
- **SEO local**: meta description, Open Graph (vista previa al compartir el link), datos estructurados `Plumber`/`Electrician` (JSON-LD), `robots.txt` y `sitemap.xml`.
- **HTML prerenderizado**: el contenido viene en el HTML inicial (no depende de JavaScript para que lo lean Google o las vistas previas) y React lo hidrata después.
- **Accesibilidad**: contraste AA en textos chicos, `aria-label` en botones de ícono, animaciones que respetan "reducir movimiento".
- **Performance**: imágenes en WebP con dimensiones declaradas y carga diferida; logo y favicon en SVG.

## 🛠 Stack

- React 19 + TypeScript
- Vite 6 (build cliente + build SSR para prerender)
- Tailwind CSS 4
- Motion (animaciones)
- Lucide (íconos)
- Deploy en Vercel

## 📁 Estructura

```
.
├── public/                 # Fotos (WebP), favicon, imagen OG, robots, sitemap
├── scripts/
│   └── prerender.mjs       # Inserta el HTML renderizado en dist/index.html
├── src/
│   ├── components/         # Una sección por componente (Hero, Services, …) + Logo
│   ├── data.ts             # Textos, servicios, contacto y zonas: se editan acá
│   ├── App.tsx
│   ├── main.tsx            # Entrada cliente (hidrata el HTML prerenderizado)
│   ├── entry-server.tsx    # Entrada SSR usada solo en el build
│   └── index.css           # Tema: colores y fuentes de la marca
└── index.html              # Meta tags, Open Graph y JSON-LD
```

Para cambiar teléfono, servicios, zonas o fotos, editá `src/data.ts`.

## 🚀 Desarrollo

Requiere Node.js 18+.

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # build + prerender en dist/
npm run preview   # sirve dist/ localmente
npm run lint      # chequeo de tipos
```

## 📦 Deploy

Vercel despliega automáticamente cada push a `main` usando `npm run build`.
Si se cambia el dominio, actualizar la URL en `index.html` (canonical, Open Graph, JSON-LD), `public/robots.txt`, `public/sitemap.xml` y `src/data.ts`.

---

Hecho por **Nicolás Coudouy** — [LinkedIn](https://www.linkedin.com/in/nicocoudouy) · [GitHub](https://github.com/nico-coudouy)
