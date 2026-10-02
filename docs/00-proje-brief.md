# Ay Peyzaj ve Çiçekçilik — Web Sitesi Proje Özeti

## Firma
Ay Peyzaj ve Çiçekçilik, Bartın merkezli bir firmadır. Ana uzmanlığı **peyzaj tasarımı ve uygulamasıdır**; bunun yanında çiçek, fidan, salon bitkisi, saksı ve bahçe ekipmanı satışı yapar.

## Sitenin amacı
1. **Google'da yerel aramalarda öne çıkmak:** "Bartın çiçek", "Bartın çiçekçi", "Bartın peyzaj", "Bartın fidan" gibi aramalarda ilk sıralarda görünmek (bkz. `07-seo-stratejisi.md`).
2. **Ürünleri göstermek:** Kategorilere ayrılmış, kolay gezilen, geniş bir bitki ve ürün kataloğu.
3. **Hizmetleri anlatmak:** Peyzaj tasarımı, bahçe bakımı, çim, aranjman gibi hizmetlerin her biri için ayrı, açıklayıcı sayfa.
4. **İletişime dönüştürmek:** Her sayfadan tek dokunuşla WhatsApp veya telefonla ulaşılabilmek.

## Hedef kitle
- Bartın'da çiçek, saksı bitkisi veya fidan arayan bireysel müşteriler
- Bahçesini düzenletmek isteyen ev ve villa sahipleri
- Kurumlar (valilik, belediye, otel, site yönetimleri) — peyzaj projeleri

## Temel kararlar
- **Fiyat gösterilmez.**
- **Sipariş ve iletişim WhatsApp üzerinden.** Her ürün ve hizmet sayfasında önceden doldurulmuş mesajlı "WhatsApp'tan Sor" butonu.
- **Teknoloji:** Astro (statik site) + içerik koleksiyonları. Her ürün, hizmet, kategori ve proje ayrı bir Markdown dosyası.
- **Hosting:** Cloudflare. Kod GitHub'da; main dalı canlı sitedir.
- **Güncelleme:** Tek mesajla, Claude Code Project üzerinden (bkz. `06-guncelleme-proseduru.md`).
- **Domain:** aypeyzaj.com (proje sahibinde).
- **Performans ve SEO** her tasarım kararında önceliklidir: hızlı, mobil öncelikli, yapılandırılmış veri içeren bir site.

## Ton ve dil
- Türkçe, sıcak, sade ve güven veren bir dil. Abartılı pazarlama dili yok.
- "Biz" dili ("bahçenizi birlikte tasarlıyoruz").
- Bitki bilgisi anlaşılır ve doğru verilir.

## Elimizdeki içerik
- Ürün listesi (`03-urun-katalogu.md`), firma bilgileri, hizmetler ve çalışma süreci (`01-firma-bilgileri.md`).
- **Gelecek:** logo dosyası, yapılan işlerin görsel arşivi, müşteriden ürün fotoğrafları.

## Yaklaşım
Elimizdeki içerikle siteyi kur ve yayınla; eksik ürünler ve görseller sonradan tek mesajla eklenir. Görseli olmayan ürünler şık bir yer tutucu ile gösterilir.

## Açık noktalar
- [ ] Logo dosyası (tercihen vektör: SVG/AI/PDF)
- [ ] Görsel arşivi (proje fotoğrafları)
- [ ] Bahçe Alet/Ekipmanları ürün listesi
- [ ] Ağaçlar (Yapraklı, Şekilli, Palmiye, Meyve, Hediyelik Nikâh), Mevsimlik (Kış, Bahar, Çok Yıllık) ve Salon Bitkileri (Çiçekli, Kaktüs - Sukkulent) alt kategori ürünleri
- [ ] Firma kesme çiçek, buket, çelenk, saksı çiçeği satışı ve Bartın içi teslimat yapıyor mu? ("Bartın çiçek" aramalarının büyük kısmı bu niyetle yapılır; cevaba göre bir hizmet sayfası eklenir.)
- [ ] Hizmet verilen ilçeler (Amasra, Kurucaşile, Ulus vb.) — müşteriden teyit
- [ ] Çalışma saatleri
- [ ] Kuruluş yılı ve gerçek rakamlar (proje sayısı, düzenlenen alan) — teyit edilmeden sitede kullanılmaz
