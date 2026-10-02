# SEO Stratejisi

## Hedef
Bartın'da çiçek, bitki ve peyzaj arayan kişilerin Google'da (hem normal sonuçlarda hem harita sonuçlarında) Ay Peyzaj'ı bulması.

## Hedef anahtar kelimeler
| Öncelik | Anahtar kelime grubu | Hedef sayfa |
|---|---|---|
| 1 | Bartın çiçek, Bartın çiçekçi, Bartın çiçekçilik | Ana sayfa (+ çiçek/aranjman hizmet sayfası, bkz. açık nokta) |
| 1 | Bartın peyzaj, Bartın peyzaj firması, Bartın bahçe düzenleme | Ana sayfa, `/hizmetlerimiz/peyzaj-tasarimi` |
| 2 | Bartın fidan, Bartın fidanlık, Bartın ağaç fidanı | `/cesitlerimiz/agaclar` |
| 2 | Bartın saksı çiçeği, Bartın salon bitkisi | `/cesitlerimiz/salon-bitkileri` |
| 2 | Bartın mevsimlik çiçek | `/cesitlerimiz/mevsimlik-cicekler` |
| 2 | Bartın bahçe bakımı, Bartın çim ekimi, hazır çim Bartın | İlgili hizmet sayfaları |
| 3 | Bartın saksı, bahçe malzemeleri Bartın | `/cesitlerimiz/saksi-cesitleri`, `/cesitlerimiz/bahce-alet-ve-ekipmanlari` |
| 3 | "{bitki adı} Bartın" (uzun kuyruk) | Ürün sayfaları |

Anahtar kelimeler metne doğal yerleştirilir; aynı kelime art arda tekrar edilmez.

## Sayfa düzeyinde kurallar
- **Her sayfada tek H1**, anahtar kelimeyi doğal biçimde içerir.
- **Title şablonları** (≤ 60 karakter hedef):
  - Ana sayfa: `Ay Peyzaj ve Çiçekçilik | Bartın Çiçekçi ve Peyzaj`
  - Kategori: `Bartın {Kategori} | Ay Peyzaj`
  - Alt kategori: `{Alt kategori} — Bartın {Kategori} | Ay Peyzaj`
  - Ürün: `{Ürün} | Bartın {Kategori} | Ay Peyzaj`
  - Hizmet: `Bartın {Hizmet} | Ay Peyzaj`
  - Proje: `{Proje} — {Konum} | Ay Peyzaj Projeleri`
- **Meta description** (≤ 155 karakter): içerikteki `seo_aciklama` → `aciklama` → şablon sırasıyla. Her sayfada benzersiz; Bartın ve WhatsApp'tan ulaşma çağrısı içerir.
- **Kategori ve alt kategori sayfaları** ana sıralama sayfalarıdır: her birinde 2-4 cümlelik özgün giriş metni bulunur (ne tür bitkiler var, Bartın iklimine uygunluk, teslim/danışmanlık).
- **Hizmet sayfaları** en az ~300 kelime özgün metin, ilgili projeler ve (varsa) SSS içerir.
- **Görseller:** anlamlı dosya adı + alt metin ("Limoni selvi fidanı — Ay Peyzaj Bartın").
- **İç linkler:** ürün → kategori → ilgili hizmet; hizmet → ilgili projeler ve kategoriler; footer'da kategoriler ve hizmetler.
- **Breadcrumb** tüm iç sayfalarda.

## Teknik SEO
- `<html lang="tr">`, canonical URL her sayfada, `https://aypeyzaj.com` (www'suz) tek sürüm; www → www'suz 301.
- `sitemap.xml` otomatik (Astro sitemap entegrasyonu); `gizli` ürünler ve boş kategoriler hariç.
- `robots.txt` sitemap adresini içerir.
- Boş kategori/alt kategori sayfaları `noindex, follow`.
- Open Graph ve Twitter kartları her sayfada (ürün/proje görseli veya varsayılan marka görseli).
- 404 sayfası: kategorilere ve WhatsApp'a yönlendirir.
- Performans hedefleri `04-tasarim-yonergesi.md`'de.

## Yapılandırılmış veri (JSON-LD)
- **Tüm sayfalarda:** `LocalBusiness` alt türleri olarak `["Florist", "GardenStore"]` — ad, adres, telefon, e-posta, geo, çalışma saatleri (teyit edilince), `sameAs` (Instagram, Facebook), `areaServed` (Bartın).
- **Hizmet sayfaları:** `Service` (provider: işletme, areaServed: Bartın) + varsa `FAQPage`.
- **Ürün sayfaları:** `Product` (ad, görsel, açıklama, marka/satıcı). Fiyat olmadığı için `offers` eklenmez.
- **Tüm iç sayfalar:** `BreadcrumbList`.
- Yapılandırılmış veri Google Rich Results Test ile doğrulanır.

## Site dışı (yerel SEO) — sitenin kendisi kadar önemli
1. **Google İşletme Profili:** sahiplenilir/doğrulanır; ad, adres, telefon sitedekiyle birebir aynı; birincil kategori "Çiçekçi", ek kategoriler "Peyzaj mimarı", "Fidanlık", "Bahçe merkezi"; web sitesi linki; düzenli fotoğraf ve gönderi.
2. **Google yorumları:** memnun müşterilerden yorum istenir (WhatsApp ile kısa bir link gönderilebilir).
3. **Google Search Console:** domain doğrulanır, sitemap gönderilir, yayından sonraki haftalarda 404 ve indeksleme raporları izlenir.
4. **Instagram ve Facebook** profillerinde web sitesi linki ve aynı NAP bilgisi.
5. Yerel rehberler (Yandex Haritalar, Apple Haritalar vb.) ve Bartın'daki yerel sitelerde aynı NAP ile kayıt.

## İkinci aşama (yayından sonra)
- **Rehber / blog** bölümü: "Bartın'da kışa dayanıklı bitkiler", "Balkon için mevsimlik çiçek seçimi" gibi mevsimsel, yerel içerikler — uzun kuyruk aramalar ve kategori sayfalarına iç link için.
- Hizmet verilen ilçeler teyit edilirse ilçe odaklı içerik (her ilçe için ayrı ince sayfa açılmaz; hizmet sayfalarında doğal biçimde anılır).
