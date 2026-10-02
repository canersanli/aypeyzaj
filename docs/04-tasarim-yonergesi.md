# Tasarım Yönergesi

## İlke
Doğal, ferah ve güven veren bir görünüm. Bitki fotoğrafları ve proje görselleri ön planda; arayüz sade. Ziyaretçi aradığı ürünü veya hizmeti en fazla iki tıkla bulmalı ve her sayfadan iletişime geçebilmeli. Hız ve mobil kullanım her kararda önceliklidir.

## Marka öğeleri
- **Logo:** el yazısı "Ay" + PEYZAJ / ÇİÇEKÇİLİK. Dosya gelene kadar metin tabanlı geçici logo.
- **Zeytin yeşili** ana renk (logodaki yeşil).
- **Sarı** vurgu rengi — ölçülü: aktif menü, küçük vurgular, rozetler.
- Başlıklarda **serif**, gövdede sade sans-serif yazı tipi.

## Renk paleti (logo dosyası gelince ince ayar yapılacak)
| Token | Değer | Kullanım |
|---|---|---|
| `--yesil-900` | #2F3B1C | Footer, koyu bölümler |
| `--yesil-700` | #4E6128 | Ana marka rengi, başlıklar, butonlar |
| `--yesil-100` | #EEF1E4 | Açık zemin bölümleri |
| `--sari-500` | #E8B923 | Vurgu, aktif durum |
| `--krem` | #FAF8F2 | Sayfa zemini |
| `--metin` | #23261E | Gövde metni |
| `--whatsapp` | #25D366 | Yalnızca WhatsApp butonları |

Metin/zemin kontrastı WCAG AA seviyesini sağlamalı.

## Tipografi (Türkçe karakter desteği zorunlu: ç ğ ı İ ö ş ü)
- Başlık: **Fraunces** (serif)
- Gövde: **Figtree** (sans-serif)
- Fontlar siteyle birlikte barındırılır (self-host), yalnızca kullanılan ağırlıklar yüklenir.
- Gövde metni en az 16px, satır yüksekliği 1.6

## Gezinme
- **Katalog bandı:** 7 ana kategori katalog sayfalarında yatay bant olarak her zaman erişilebilir.
- **Alt kategori menüsü** (Ağaçlar, Mevsimlik Çiçekler, Salon Bitkileri): masaüstünde solda, mobilde yatay kaydırılabilir sekmeler.
- **İletişim her zaman görünür:** üst barda telefon + WhatsApp, mobilde sabit WhatsApp butonu.

## Bileşenler
- **Ürün kartı:** 4:3 görsel, köşe yuvarlaklığı 12px, altında ürün adı; hover'da hafif büyüme. Görsel yoksa: açık yeşil zemin + yaprak ikonu + ürün adı.
- **Ürün detayı:** büyük görsel, ad, (varsa) Latince ad, açıklama, özellik rozetleri (güneş, boy, sulama vb.), büyük "WhatsApp'tan Sor" butonu, "Telefonla Ara" ikincil butonu, aynı kategoriden diğer ürünler. **Fiyat alanı yok.**
- **Hizmet kartı:** ikon, başlık, kısa açıklama, "Detaylı bilgi" linki.
- **Proje kartı:** büyük kapak görseli, başlık, müşteri/yer etiketi.
- **Kategori sayfası başlığı:** H1 + 2-4 cümlelik giriş metni, altında ürün ızgarası.
- **Breadcrumb:** sayfa başlığının üstünde, küçük ve sade.

## Ana sayfa akışı
1. Hero: tam genişlik proje fotoğrafı, H1 (Bartın ve hizmet anahtar kelimelerini içeren), slogan, "WhatsApp'tan Yazın" + "Kataloğa Göz At"
2. Hizmetler (6 kart → hizmet sayfalarına link)
3. Öne çıkan projeler (`one_cikan: true`)
4. Katalog kategorileri (7 kart)
5. Çalışma süreci (4 adım)
6. İletişim bandı: adres, harita, telefonlar, WhatsApp, çalışma saatleri

## Teknik kalite hedefleri
- Mobil öncelikli, 360px'den itibaren düzgün
- Lighthouse performans, erişilebilirlik, SEO ve en iyi uygulamalar ≥ 95
- Core Web Vitals: LCP < 2.5 sn, CLS < 0.1, INP < 200 ms
- Görseller Astro ile optimize (AVIF/WebP, `width`/`height` belirtili, lazy-load; hero görseli öncelikli yüklenir)
- JavaScript minimumda; etkileşim gerekmeyen hiçbir şey JS ile yapılmaz
