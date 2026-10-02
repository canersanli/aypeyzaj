# Site Haritası ve URL Yapısı

## Sayfalar
| Sayfa | URL | İçerik |
|---|---|---|
| Ana Sayfa | `/` | Hero (slogan + WhatsApp CTA), hizmetler, öne çıkan projeler, katalog kategorileri, çalışma süreci, iletişim bandı |
| Hizmetlerimiz | `/hizmetlerimiz` | 6 hizmetin özeti + süreç + teklif CTA |
| Hizmet detayı | `/hizmetlerimiz/[slug]` | Her hizmet için ayrı sayfa (SEO için): açıklama, ilgili projeler, SSS, WhatsApp CTA |
| Galeri (projeler) | `/galeri` | Proje galerisi |
| Proje detayı | `/galeri/[slug]` | Proje görselleri, açıklama, müşteri/yer |
| Çeşitlerimiz (katalog) | `/cesitlerimiz` | Tüm kategoriler |
| Kategori | `/cesitlerimiz/[kategori]` | Giriş metni + kategorinin tüm ürünleri; alt kategori varsa sol menü (mobilde yatay sekmeler) |
| Alt kategori | `/cesitlerimiz/[kategori]/[altkategori]` | Giriş metni + o alt kategorinin ürünleri |
| Ürün detayı | `/urun/[slug]` | Görsel, ad, açıklama, özellikler, "WhatsApp'tan Sor", aynı kategoriden diğer ürünler |
| Hakkımızda | `/hakkimizda` | Firma hikâyesi, değerler |
| İletişim | `/iletisim` | Adres, gömülü harita, telefonlar, WhatsApp, e-posta, çalışma saatleri, sosyal medya |

## Menü
- **Üst menü:** Ana Sayfa · Hakkımızda · Çeşitlerimiz · Hizmetlerimiz · Galeri · İletişim · [WhatsApp butonu]
- **Katalog menüsü:** 7 ana kategori, Çeşitlerimiz sayfalarında yatay bant olarak her zaman görünür.
- **Sabit WhatsApp butonu:** mobilde sağ alt köşede her sayfada.
- **Footer:** iletişim bilgileri (NAP), kategoriler, hizmetler, sosyal medya.
- **Breadcrumb:** katalog, ürün, hizmet ve proje sayfalarında (yapılandırılmış veriyle birlikte).

## Katalog kategorileri
| Kategori | slug | Alt kategoriler (slug) |
|---|---|---|
| Ağaçlar | `agaclar` | İbreli Ağaçlar (`ibreli-agaclar`), Yapraklı Ağaçlar (`yaprakli-agaclar`), Şekilli Ağaçlar (`sekilli-agaclar`), Palmiye Ağaçları (`palmiye-agaclari`), Meyve Ağaçları (`meyve-agaclari`), Hediyelik Nikâh Ağaçları (`hediyelik-nikah-agaclari`) |
| Çalı ve Süs Bitkileri | `cali-ve-sus-bitkileri` | — |
| Sarılıcılar ve Tırmanıcılar | `sarilicilar-ve-tirmanicilar` | — |
| Mevsimlik Çiçekler | `mevsimlik-cicekler` | Yaz Çiçekleri (`yaz-cicekleri`), Kış Çiçekleri (`kis-cicekleri`), Bahar Çiçekleri (`bahar-cicekleri`), Çok Yıllık Çiçekler (`cok-yillik-cicekler`) |
| Salon Bitkileri | `salon-bitkileri` | Yapraklı Bitkiler (`yaprakli-bitkiler`), Çiçekli Bitkiler (`cicekli-bitkiler`), Kaktüs - Sukkulent (`kaktus-sukkulent`) |
| Saksı Çeşitleri | `saksi-cesitleri` | — |
| Bahçe Alet ve Ekipmanları | `bahce-alet-ve-ekipmanlari` | — |

## Boş kategori / alt kategori davranışı
Ürünü olmayan kategori veya alt kategori menüde görünür; sayfasında giriş metni, "Bu kategorideki ürünlerimizi yakında ekleyeceğiz. Güncel çeşitler için WhatsApp'tan bize yazın." mesajı ve WhatsApp butonu gösterilir. Boş sayfalar `noindex` olur, ürün eklenince otomatik olarak indekslenebilir hale gelir.

## Adres kararı
Domainde hâlihazırda kullanılan sayfa adresleri (`/hakkimizda`, `/cesitlerimiz`, `/hizmetlerimiz`, `/galeri`, `/iletisim`) aynen korunur; yayın günü yönlendirme gerekmez. Yeni sayfalar bu adreslerin altına eklenir.

`public/_redirects` dosyası yine de bulunur; ileride slug değişirse veya ürün silinirse 301 için kullanılır.
