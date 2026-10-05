import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Boş bırakılan YAML alanları (ör. "latince:") null gelir; şablondaki boş alanlar
// hata vermesin diye null değerler "yok" sayılır.
const bos = <T extends z.ZodTypeAny>(sema: T) =>
  sema.nullish().transform((v) => v ?? undefined);

const stokAlanlari = {
  // true → Unsplash/Pexels'ten geçici stok fotoğraf; gerçek fotoğraf gelince kaldırılır
  stok_gorsel: z.boolean().nullish().transform((v) => v ?? false),
  // Stok fotoğrafın kaynak sayfası (lisans takibi için)
  gorsel_kaynak: bos(z.string().url()),
};

const urunler = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/urunler' }),
  schema: ({ image }) =>
    z.object({
      ad: z.string(),
      kategori: z.string(),
      altkategori: bos(z.string()),
      gorsel: bos(image()),
      gorsel_alt: bos(z.string()),
      ...stokAlanlari,
      gorseller: bos(z.array(image())),
      latince: bos(z.string()),
      aciklama: bos(z.string()),
      ozellikler: bos(
        z.object({
          gunes: bos(z.string()),
          boy: bos(z.string()),
          sulama: bos(z.string()),
          renk: bos(z.string()),
          cicek_donemi: bos(z.string()),
        }),
      ),
      seo_baslik: bos(z.string()),
      seo_aciklama: bos(z.string()),
      stokta: z.boolean().nullish().transform((v) => v ?? true),
      one_cikan: z.boolean().nullish().transform((v) => v ?? false),
      gizli: z.boolean().nullish().transform((v) => v ?? false),
      sira: z.number().nullish().transform((v) => v ?? 100),
    }),
});

const kategoriler = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/kategoriler' }),
  schema: ({ image }) =>
    z.object({
      ad: z.string(),
      sira: z.number(),
      altkategoriler: bos(
        z.array(z.object({ ad: z.string(), slug: z.string(), giris: z.string() })),
      ),
      gorsel: bos(image()),
      gorsel_alt: bos(z.string()),
      ...stokAlanlari,
      seo_baslik: bos(z.string()),
      seo_aciklama: bos(z.string()),
    }),
});

const hizmetler = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/hizmetler' }),
  schema: z.object({
    ad: z.string(),
    ikon: z.string(),
    kisa: z.string(),
    sira: z.number(),
    sss: bos(z.array(z.object({ soru: z.string(), cevap: z.string() }))),
    seo_baslik: bos(z.string()),
    seo_aciklama: bos(z.string()),
  }),
});

const projeler = defineCollection({
  loader: glob({
    pattern: '*/index.md',
    base: './src/content/projeler',
    generateId: ({ entry }) => entry.split('/')[0],
  }),
  schema: ({ image }) =>
    z.object({
      baslik: z.string(),
      musteri: bos(z.string()),
      konum: bos(z.string()),
      tarih: bos(z.union([z.string(), z.number(), z.date()])),
      hizmet: bos(z.string()),
      // Görsel arşivi gelene kadar boş kalabilir; boşsa "Örnek görsel" yer tutucusu gösterilir
      kapak: bos(image()),
      gorseller: bos(z.array(image())),
      one_cikan: z.boolean().nullish().transform((v) => v ?? false),
      sira: z.number().nullish().transform((v) => v ?? 100),
    }),
});

export const collections = { urunler, kategoriler, hizmetler, projeler };
