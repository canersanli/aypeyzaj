import { getCollection, type CollectionEntry } from 'astro:content';
import firma from '../data/firma.json';

export type Urun = CollectionEntry<'urunler'>;
export type Kategori = CollectionEntry<'kategoriler'>;
export type Hizmet = CollectionEntry<'hizmetler'>;
export type Proje = CollectionEntry<'projeler'>;

export { firma };

type MesajTuru = keyof typeof firma.mesajlar;

/** Önceden doldurulmuş mesajlı WhatsApp bağlantısı (şablonlar firma.json'da). */
export function whatsapp(tur: MesajTuru = 'genel', ad?: string) {
  const mesaj = firma.mesajlar[tur].replace('{ad}', ad ?? '');
  return `${firma.whatsapp}?text=${encodeURIComponent(mesaj)}`;
}

/** Ürün dosyasının adı (klasörden bağımsız) = URL slug'ı. */
export const urunSlug = (urun: Urun) => urun.id.split('/').pop()!;

const siraVeAd = <T extends { data: { sira: number } }>(ad: (x: T) => string) => (a: T, b: T) =>
  a.data.sira - b.data.sira || ad(a).localeCompare(ad(b), 'tr');

export async function urunleriGetir() {
  const urunler = await getCollection('urunler', ({ data }) => !data.gizli);
  return urunler.sort(siraVeAd<Urun>((u) => u.data.ad));
}

export async function kategorileriGetir() {
  const kategoriler = await getCollection('kategoriler');
  return kategoriler.sort((a, b) => a.data.sira - b.data.sira);
}

export async function hizmetleriGetir() {
  const hizmetler = await getCollection('hizmetler');
  return hizmetler.sort((a, b) => a.data.sira - b.data.sira);
}

export async function projeleriGetir() {
  const projeler = await getCollection('projeler');
  return projeler.sort(siraVeAd<Proje>((p) => p.data.baslik));
}

export const gorselAlt = (urun: Urun) =>
  urun.data.gorsel_alt ?? `${urun.data.ad} — ${firma.kisa_ad} ${firma.sehir}`;

/** Meta açıklamayı 155 karakterle sınırlar. */
export function kisalt(metin: string, sinir = 155) {
  if (metin.length <= sinir) return metin;
  return metin.slice(0, sinir - 1).replace(/\s+\S*$/, '') + '…';
}
