# Güncelleme Prosedürü
> Bu dosya repoda `CLAUDE.md` olarak da yer alır. Her güncelleme isteğinde bu adımlar izlenir.

## Genel kurallar
1. **Uydurma yok.** İletişim bilgisi, fiyat, proje, müşteri adı, rakam ve firmaya özgü iddia ("20 yıllık deneyim" gibi) kullanıcı vermedikçe yazılmaz.
2. **Genel bitki bilgisi yazılabilir:** Açıklama, Latince ad, güneş/sulama ihtiyacı gibi herkesçe doğrulanabilir botanik bilgiler kullanıcı istediğinde veya ürün açıklamasız eklendiğinde yazılabilir; emin olunmayan bilgi yazılmaz. Yazılan açıklamalar PR özetinde ayrıca listelenir ki kullanıcı kontrol edebilsin.
3. **Fiyat hiçbir yere yazılmaz.** İstek fiyat içeriyorsa fiyat atlanır ve bu belirtilir.
4. **İletişim bilgileri** yalnızca `src/data/firma.json`'dan değiştirilir.
5. Kategori belirsizse (örn. "gül ekle" — sarmaşık mı, çalı mı?) başlamadan önce sorulur.
6. Her değişiklikten sonra `npm run build` çalıştırılır; hata varsa düzeltilmeden PR açılmaz.
7. SEO kuralları (`07-seo-stratejisi.md`) her yeni içerikte uygulanır: başlık, meta açıklama, alt metin, iç linkler.

## İşlemler

### Ürün ekle
"Çalı bitkilerine X eklendi, şu bilgilerle" →
1. Kategori/alt kategoriyi eşle.
2. Slug üret. Aynı slug varsa sor.
3. Görsel verildiyse küçült, `<slug>.jpg` olarak md dosyasının yanına koy; alt metin yaz. Gerçek fotoğraf bir stok görselin yerine geliyorsa `stok_gorsel` ve `gorsel_kaynak` satırlarını sil (bkz. `05-icerik-semasi.md`, "Stok görseller").
4. `src/content/urunler/<kategori>/<slug>.md` dosyasını oluştur.
5. Build → commit → pull request.

### Ürün güncelle
Yalnızca belirtilen alanlar değişir. Ad değişirse slug **değişmez**.

### Ürünü kaldır
- "Stokta yok" → `stokta: false`
- "Şimdilik kaldır" → `gizli: true`
- Kullanıcı açıkça "tamamen sil" demedikçe dosya silinmez. Silinirse adres `_redirects`'e kategori sayfasına 301 olarak eklenir.

### Toplu ekleme
Liste halinde gelen ürünler tek PR'da eklenir; önce eklenecek liste kullanıcıya gösterilir.

### Proje ekle
`src/content/projeler/<slug>/` + `index.md` + görseller. Kapak verilmediyse ilk görsel kapak olur. İlgili hizmet bağlanır.

### Hizmet ekle / güncelle
`src/content/hizmetler/<slug>.md`. Yeni hizmet menüye, footer'a ve ana sayfaya otomatik yansır.

### Kategori / alt kategori ekle
`src/content/kategoriler/`'e eklenir; giriş metni yazılır; menüler otomatik güncellenir.

### Firma bilgisi değiştir
Yalnızca `firma.json`. WhatsApp linki formatı: `https://wa.me/90XXXXXXXXXX` (boşluksuz).

## Commit / PR başlığı formatı
```
urun: lavanta eklendi (cali-ve-sus-bitkileri)
urun: begonya güncellendi (görsel)
urun: fırça çalısı gizlendi
proje: riverside-hotel-tas-doseme eklendi
hizmet: bahce-bakimi metni güncellendi
firma: telefon güncellendi
```

## Yayın
1. Değişiklik yeni bir dalda yapılır ve pull request açılır.
2. Cloudflare PR için önizleme adresi üretir; kullanıcıya bu adres verilir.
3. Kullanıcı onaylayınca PR main'e birleştirilir → canlı site ~1-2 dk içinde güncellenir. Sitemap otomatik yenilenir.
