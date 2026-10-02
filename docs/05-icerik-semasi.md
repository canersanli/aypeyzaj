# İçerik Şeması

## Klasör yapısı
```
src/
  content/
    urunler/
      <kategori-slug>/
        <urun-slug>.md
        <urun-slug>.jpg          ← görsel, md ile aynı klasörde
    kategoriler/
      <kategori-slug>.md         ← kategori + alt kategori tanımı ve giriş metni
    hizmetler/
      <hizmet-slug>.md
    projeler/
      <proje-slug>/
        index.md
        kapak.jpg
        01.jpg, 02.jpg ...
  data/
    firma.json                   ← iletişim bilgileri (tek kaynak)
    hero.json                    ← ana sayfa hero görselinin alt metni ve stok bilgisi
  assets/
    hero.jpg                     ← ana sayfa hero görseli
public/
  _redirects                     ← 301 yönlendirmeleri
```

## Ürün (`src/content/urunler/<kategori>/<slug>.md`)
```md
---
ad: Lavanta                       # zorunlu
kategori: cali-ve-sus-bitkileri   # zorunlu
altkategori:                      # opsiyonel, yalnızca alt kategorisi olan kategorilerde
gorsel: ./lavanta.jpg             # opsiyonel; yoksa yer tutucu
gorsel_alt:                       # opsiyonel; boşsa "{ad} — Ay Peyzaj Bartın"
stok_gorsel: true                 # opsiyonel; true → geçici stok fotoğraf (Unsplash/Pexels)
gorsel_kaynak: https://www.pexels.com/photo/...   # stok fotoğrafın sayfa URL'si (stok_gorsel: true ise zorunlu)
gorseller: []                     # opsiyonel ek görseller
latince:                          # opsiyonel, örn. Lavandula angustifolia
aciklama:                         # opsiyonel, 1-2 cümle; meta description'da da kullanılır
ozellikler:                       # opsiyonel
  gunes:                          # tam güneş | yarı gölge | gölge
  boy:                            # örn. "40-60 cm"
  sulama:                         # az | orta | çok
  renk:
  cicek_donemi:
seo_baslik:                       # opsiyonel; boşsa şablondan üretilir
seo_aciklama:                     # opsiyonel; boşsa aciklama veya şablon
stokta: true                      # false → "Şu an stokta yok, WhatsApp'tan sorun"
one_cikan: false
gizli: false                      # true → sitede görünmez, sitemap'ten çıkar
sira: 100
---

(İsteğe bağlı uzun açıklama: bakım ipuçları, kullanım alanları. Markdown.)
```

## Kategori (`src/content/kategoriler/<slug>.md`)
```md
---
ad: Salon Bitkileri
sira: 5
altkategoriler:
  - { ad: Yapraklı Bitkiler, slug: yaprakli-bitkiler, giris: "..." }
  - { ad: Çiçekli Bitkiler, slug: cicekli-bitkiler, giris: "..." }
  - { ad: Kaktüs - Sukkulent, slug: kaktus-sukkulent, giris: "..." }
gorsel: ./salon-bitkileri.jpg     # opsiyonel; katalog kartlarında kullanılır
gorsel_alt: ...
stok_gorsel: true                 # opsiyonel; ürünlerdeki gibi
gorsel_kaynak: https://www.pexels.com/photo/...
seo_baslik: Bartın Salon Bitkileri | Ay Peyzaj ve Çiçekçilik
seo_aciklama: ...
---

Kategori giriş metni (2-4 cümle, sayfada H1'in altında görünür).
```

## Hizmet (`src/content/hizmetler/<slug>.md`)
```md
---
ad: Peyzaj Tasarımı
ikon: peyzaj
kisa: Alanınıza özel, estetik ve işlevsel peyzaj projeleri tasarlıyoruz.
sira: 1
sss:                              # opsiyonel; FAQPage yapılandırılmış verisi üretir
  - { soru: "...", cevap: "..." }
seo_baslik: Bartın Peyzaj Tasarımı | Ay Peyzaj
seo_aciklama: ...
---

Hizmet sayfasının ana metni.
```

## Proje (`src/content/projeler/<slug>/index.md`)
```md
---
baslik: Ay Yıldız Uygulaması      # zorunlu
musteri: Bartın Valiliği
konum: Bartın
tarih: 2025-05                    # YYYY veya YYYY-MM
hizmet: peyzaj-tasarimi           # hizmet slug'ı → hizmet sayfasında listelenir
kapak: ./kapak.jpg                # görsel arşivi gelene kadar boş kalabilir; boşsa "Örnek görsel" etiketli yer tutucu gösterilir ve sayfa noindex olur
gorseller: [./01.jpg, ./02.jpg]
one_cikan: true
sira: 100
---

Proje açıklaması.
```

## Slug kuralları
- Küçük harf; ç→c, ğ→g, ı→i, İ→i, ö→o, ş→s, ü→u
- Boşluk ve parantez → tire; ardışık tireler teke iner. "Horoz İbiği (Balta)" → `horoz-ibigi-balta`
- Yayınlanmış slug değiştirilmez. Zorunlu kalırsa eski adres `_redirects`'e 301 olarak eklenir.

## Stok görseller (demo dönemi)
- Logo ve gerçek fotoğraflar gelene kadar ürün, kategori ve ana sayfa hero görsellerinde **yalnızca Unsplash/Pexels'ten ücretsiz lisanslı** stok fotoğraf kullanılır. Galeri (projeler) için stok fotoğraf kullanılmaz.
- Her stok görselde `stok_gorsel: true` ve `gorsel_kaynak: <fotoğraf sayfası URL'si>` yazılır (ürün/kategori dosyasında; hero için `src/data/hero.json`'da).
- Bitkiyle tam eşleşen fotoğraf yoksa görsel boş bırakılır (yer tutucu). Emin olunmayan eşleşmeler PR özetinde listelenir.
- Ürün sayfasında stok görselin altında "Temsili görsel" notu görünür.
- Gerçek fotoğraf gelince görsel dosyası değiştirilir, `stok_gorsel` ve `gorsel_kaynak` satırları silinir.

## Görsel kuralları
- Repoya eklenmeden önce uzun kenar en fazla **2000px**, JPG kalitesi ~82.
- Dosya adı ürün slug'ıyla aynı (SEO için anlamlı dosya adı). Ek görsellerde `-2`, `-3`.
- Her görselin alt metni olur.
