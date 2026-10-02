// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

// Sitemap'ten çıkarılacak sayfalar: ürünü olmayan (noindex) kategori ve alt kategoriler
// ile görseli henüz gelmemiş proje sayfaları. Ürün dosyalarının frontmatter'ı burada
// basitçe okunur; gizli ürünler hiç sayfa üretmediği için zaten sitemap'te yer almaz.
function doluKatalogYollari() {
  const kok = './src/content/urunler';
  const yollar = new Set();
  for (const klasor of readdirSync(kok, { withFileTypes: true })) {
    if (!klasor.isDirectory()) continue;
    for (const dosya of readdirSync(join(kok, klasor.name))) {
      if (!dosya.endsWith('.md')) continue;
      const fm = readFileSync(join(kok, klasor.name, dosya), 'utf8').split('---')[1] ?? '';
      const alan = (ad) => fm.match(new RegExp(`^${ad}:[ \\t]*(\\S.*)?$`, 'm'))?.[1]?.trim();
      if (alan('gizli') === 'true') continue;
      const kategori = alan('kategori');
      const altkategori = alan('altkategori');
      if (kategori) yollar.add(`/cesitlerimiz/${kategori}`);
      if (kategori && altkategori) yollar.add(`/cesitlerimiz/${kategori}/${altkategori}`);
    }
  }
  return yollar;
}

function gorselliProjeYollari() {
  const kok = './src/content/projeler';
  const yollar = new Set();
  for (const klasor of readdirSync(kok, { withFileTypes: true })) {
    if (!klasor.isDirectory()) continue;
    const fm = readFileSync(join(kok, klasor.name, 'index.md'), 'utf8').split('---')[1] ?? '';
    if (/^kapak:[ \t]*\S/m.test(fm)) yollar.add(`/galeri/${klasor.name}`);
  }
  return yollar;
}

const doluKatalog = doluKatalogYollari();
const gorselliProjeler = gorselliProjeYollari();

export default defineConfig({
  site: 'https://aypeyzaj.com',
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [
    sitemap({
      filter: (sayfa) => {
        const yol = new URL(sayfa).pathname.replace(/\/$/, '');
        if (/^\/cesitlerimiz\/[^/]+(\/[^/]+)?$/.test(yol)) return doluKatalog.has(yol);
        if (/^\/galeri\/[^/]+$/.test(yol)) return gorselliProjeler.has(yol);
        return true;
      },
    }),
  ],
});
