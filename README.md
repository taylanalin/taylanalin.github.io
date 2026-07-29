# Teknoloji Atlası

HTML, CSS ve JavaScript ile hazırlanmış koyu temalı statik teknoloji okuma arşivi.

## İçerik Yapısı

Site 11 ana eğitim rotası, 119 uzun okuma bölümü ve 500 rastgele hap bilgi sayfasından oluşur. Her hap bilgi sayfasında 10 açıklayıcı not bulunur; toplam hap bilgi havuzu 5000 maddedir.

Ana rota bilgisayar temelleriyle başlar; programlama, web/API, yapay zekâ, LLM geliştirme, DevOps ve bulut, siber güvenlik, büyük sistem mimarileri, proje/kamu yönetimi ve mülakat hazırlığıyla devam eder. Amaç yalnız terim öğretmek değil; okuyucuyu bilgisayar ve yazılım mühendisliği mülakatlarında güçlü cevap verecek, aynı zamanda büyük kurumların bilgi teknolojileri birimlerinde karar alabilecek seviyeye taşımaktır.

Bölümler tek tek HTML dosyası olarak üretilmez. Performans için içerik `app.js` içindeki veri ve anlatım motoru ile tarayıcıda oluşturulur. Rastgele hap bilgi sayfaları sol menüye yığılmaz; arama yapıldığında sonuçlarda görünür.

## Localde Çalıştırma

Bu klasörde:

```powershell
py -3 -m http.server 8090
```

Tarayıcıda:

```text
http://localhost:8090
```

## GitHub Pages'e Yükleme

GitHub kullanıcı adınız `taylanalin` olduğu için repository adı şu olmalı:

```text
taylanalin.github.io
```

GitHub'da public repository oluşturduktan sonra bu klasörde şunları çalıştırın:

```powershell
git init
git add .
git commit -m "Teknoloji Atlası ilk sürüm"
git branch -M main
git remote add origin https://github.com/taylanalin/taylanalin.github.io.git
git push -u origin main
```

Birkaç dakika sonra site şu adresten açılır:

```text
https://taylanalin.github.io
```

## Sonradan Güncelleme

Dosyaları değiştirdikten sonra:

```powershell
git add .
git commit -m "Teknoloji Atlası güncellemesi"
git push
```

GitHub Pages yeni sürümü otomatik yayınlar.
