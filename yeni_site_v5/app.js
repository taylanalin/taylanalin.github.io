const book = {
  title: "Kamu Teknoloji ve Liderlik Rehberi",
  kicker: "Sıfırdan Yönetici Bakışına",
  subtitle:
    "Bu site üç büyük yolda ilerler: teknoloji sözlüğü, kamu işleyişi ve BT proje yöneticiliği. Amaç ezberletmek değil; okuyanın teknoloji, kurum, ihale, proje, ekip ve strateji arasında gerçek bağ kurmasını sağlamaktır.",
  promise:
    "Her başlık ayrı bir makale gibi ele alınır. Kavramlar gündelik dille, kamu ve özel sektör gerçekliğine yakın örneklerle, bir yöneticinin masasında gerçekten işe yarayacak bakış açısıyla anlatılır."
};

const categoryDefinitions = [
  {
    id: "teknoloji-sozlugu",
    title: "Teknoloji Sözlüğü",
    summary: "Teknoloji kavramlarını birbirleriyle ilişkili, örnekli ve yönetici bakışıyla okunabilir hale getiren rota.",
    frame:
      "Bu bölümde kavramlar kuru tanım olarak değil, gerçek hayatta nereye dokunduklarıyla birlikte okunur. Bir okuyucu OSI katmanından API'ye, firewall'dan log yönetimine, programlama mantığından yapay zekaya kadar teknoloji dünyasının haritasını parça parça değil, birbirine bağlı bir şehir gibi görür.",
    chapters: [
      ["001-bilgi-teknolojilerine-buyuk-resimden-bakmak.html", "Bilgi Teknolojilerine Büyük Resimden Bakmak", "alan haritası", "BT'nin kurum içinde bilgi, hizmet, süreç ve karar üretimini nasıl taşıdığını anlamak."],
      ["002-bilgisayarin-ic-duzeni.html", "Bilgisayarın İç Düzeni", "donanım", "CPU, RAM, disk, anakart ve güç bileşenlerini hizmet sürekliliği açısından okumak."],
      ["003-isletim-sisteminin-gorevi.html", "İşletim Sisteminin Görevi", "sistem", "süreç, bellek, dosya sistemi, sürücü ve servis mantığını kavramak."],
      ["004-dosya-sistemi-ve-klasor-duzeni.html", "Dosya Sistemi ve Klasör Düzeni", "dosya", "kurumsal kayıtların nerede durduğunu ve nasıl yönetildiğini anlamak."],
      ["005-kullanici-grup-ve-yetki-mantigi.html", "Kullanıcı, Grup ve Yetki Mantığı", "erişim", "göreve göre erişim ilkesinin teknik temellerini öğrenmek."],
      ["006-terminal-ve-komut-satiri-kulturu.html", "Terminal ve Komut Satırı Kültürü", "kanıt", "sisteme kısa komutlarla soru sorma ve çıktıdan kanıt üretme alışkanlığı kazanmak."],
      ["007-log-okumaya-ilk-giris.html", "Log Okumaya İlk Giriş", "iz", "hata, olay ve davranış izlerinin nasıl okunacağını öğrenmek."],
      ["008-ag-nedir.html", "Ağ Nedir?", "bağlantı", "IP, port, subnet, gateway ve routing kavramlarını temel seviyede kavramak."],
      ["009-dns-mantigi.html", "DNS Mantığı", "ad çözümleme", "insanların yazdığı adreslerle sistemlerin kullandığı adresler arasındaki köprüyü anlamak."],
      ["010-http-ve-https.html", "HTTP ve HTTPS", "web protokolü", "tarayıcıdan sunucuya giden isteğin güvenli ve anlaşılır yolculuğunu okumak."],
      ["011-tarayici-nasil-calisir.html", "Tarayıcı Nasıl Çalışır?", "istemci", "HTML, CSS, JavaScript ve ağ isteklerinin kullanıcı ekranına nasıl dönüştüğünü görmek."],
      ["012-sunucu-kavrami.html", "Sunucu Kavramı", "altyapı", "bir hizmetin nerede çalıştığını, nasıl dinlediğini ve nasıl cevap verdiğini anlamak."],
      ["013-istemci-sunucu-iliskisi.html", "İstemci-Sunucu İlişkisi", "mimari temel", "kullanıcı cihazı ile merkezdeki hizmet arasındaki iş bölümünü görmek."],
      ["014-temel-guvenlik-farkindaligi.html", "Temel Güvenlik Farkındalığı", "güven", "parola, güncelleme, zararlı yazılım ve erişim risklerini ilk seviyede kavramak."],
      ["015-yedek-kavrami.html", "Yedek Kavramı", "dayanıklılık", "verinin kopyalanması ile hizmetin geri döndürülebilmesi arasındaki farkı görmek."],
      ["016-envanter-mantigi.html", "Envanter Mantığı", "varlık", "cihaz, yazılım, lisans ve servis bilgisini yönetilebilir varlık olarak düşünmek."],
      ["017-teknik-belirti-okuma.html", "Teknik Belirti Okuma", "sorun çözme", "yavaşlık, erişememe, hata ve kesinti gibi belirtileri katmanlara ayırmak."],
      ["018-temel-bt-terimleri-arasinda-bag-kurmak.html", "OSI Katmanları ve TCP/IP Mantığı", "ağ haritası", "Verinin kablodan uygulamaya çıkarken geçtiği katmanları günlük örneklerle anlamak."],
      ["019-kucuk-bir-sistemi-uctan-uca-dusunmek.html", "Küçük Bir Sistemi Uçtan Uca Düşünmek", "bütünlük", "ekran, uygulama, veri, ağ ve güvenliği aynı akışta okumak."],
      ["020-temelden-yoneticilige-gecis-bakisi.html", "Temelden Yöneticiliğe Geçiş Bakışı", "yönetim zemini", "teknik temelin yöneticilikte doğru soru sormaya nasıl dönüştüğünü kavramak."],
      ["021-programlama-dusuncesi.html", "Programlama Dilleri Nasıl Seçilir?", "dil seçimi", "Python, JavaScript, Java, C# ve benzeri dillerin hangi işlerde öne çıktığını kavramak."],
      ["022-degisken-kosul-ve-dongu.html", "Python, JavaScript ve Kurumsal Kod Dili", "programlama dili", "Popüler dillerin ekip, bakım, entegrasyon ve hız açısından nasıl değerlendirileceğini öğrenmek."],
      ["023-fonksiyon-ve-modul-mantigi.html", "Fonksiyon ve Modül Mantığı", "kod düzeni", "karmaşık işi adı konmuş küçük parçalara ayırmak."],
      ["024-nesne-yonelimli-tasarim.html", "Nesne Yönelimli Tasarım", "sorumluluk", "sınıf, nesne, kapsülleme ve sorumluluk paylaşımını kavramak."],
      ["025-veri-yapilari-ve-algoritma-sezgisi.html", "Veri Yapıları ve Algoritma Sezgisi", "performans", "veriyi doğru düzende tutmanın hız ve bakım etkisini görmek."],
      ["026-hata-yonetimi.html", "Hata Yönetimi", "dayanıklılık", "beklenmeyen durumlarda sistemin anlaşılır ve güvenli davranmasını sağlamak."],
      ["027-json-ve-veri-formatlari.html", "JSON ve Veri Formatları", "veri alışverişi", "sistemler arası ortak veri dilini anlamak."],
      ["028-api-mantigi.html", "API Mantığı", "entegrasyon", "endpoint, istek, cevap, durum kodu ve sözleşme kavramlarını öğrenmek."],
      ["029-rest-api-tasarimi.html", "REST API Tasarımı", "servis", "kaynak, metot, sürümleme, hata ve güvenlik sınırlarını doğru kurmak."],
      ["030-backend-katmani.html", "Backend Katmanı", "iş kuralı", "kurum kurallarının uygulama arkasında nasıl yürütüldüğünü görmek."],
      ["031-frontend-ve-kullanici-arayuzu.html", "Frontend ve Kullanıcı Arayüzü", "ekran", "HTML, CSS ve JavaScript'in kullanıcıyla kurduğu ilişkiyi anlamak."],
      ["032-mobil-uygulama-mantigi.html", "Mobil Uygulama Mantığı", "mobil hizmet", "cihaz, bağlantı, bildirim, oturum ve API bağımlılıklarını görmek."],
      ["033-kimlik-ve-oturum-tasarimi.html", "Kimlik ve Oturum Tasarımı", "uygulama güvenliği", "login, token, cookie, session ve yetki kontrolünü uygulama bağlamında okumak."],
      ["034-cache-ve-performans.html", "Cache ve Performans", "hız", "önbelleğin hız ile doğruluk arasındaki dengesini anlamak."],
      ["035-mesaj-kuyruklari.html", "Mesaj Kuyrukları", "asenkron akış", "uzun süren işleri sıraya alma, retry ve idempotency mantığını kavramak."],
      ["036-test-kulturu.html", "Test Kültürü", "kalite", "unit, integration, end-to-end ve kabul testlerinin yerini öğrenmek."],
      ["037-kod-inceleme-ve-teknik-borc.html", "Kod İnceleme ve Teknik Borç", "sürdürülebilirlik", "çalışan kod ile yaşanabilir kod arasındaki farkı görmek."],
      ["038-surum-kontrolu-ve-git.html", "Sürüm Kontrolü ve Git", "ekip hafızası", "commit, branch, pull request ve release mantığını kurumsal hafıza olarak kullanmak."],
      ["039-uygulama-mimarisini-okumak.html", "Uygulama Mimarisini Okumak", "büyük resim", "arayüz, backend, veri, güvenlik ve operasyonu tek diyagramda düşünmek."],
      ["040-yazilim-kalitesini-yonetmek.html", "Yazılım Kalitesini Yönetmek", "yönetim", "kaliteyi kişisel iyi niyet yerine süreç ve kabul ölçütü haline getirmek."],
      ["041-veritabani-nedir.html", "Veritabanı Nedir?", "veri temeli", "kurumsal kayıtların düzenli ve sorgulanabilir biçimde tutulmasını anlamak."],
      ["042-tablo-satir-ve-iliski-mantigi.html", "Tablo, Satır ve İlişki Mantığı", "modelleme", "verinin hangi varlığı temsil ettiğini doğru tanımlamak."],
      ["043-sql-e-giris.html", "SQL'e Giriş", "sorgu", "veriye açık ve denetlenebilir sorular sormayı öğrenmek."],
      ["044-join-ve-iliskisel-dusunme.html", "JOIN ve İlişkisel Düşünme", "ilişki", "tablolar arası bağların rapor sonucunu nasıl değiştirdiğini görmek."],
      ["045-index-ve-sorgu-performansi.html", "Index ve Sorgu Performansı", "hız", "arama ve raporlama performansını veri yapısıyla ilişkilendirmek."],
      ["046-transaction-ve-veri-butunlugu.html", "Transaction ve Veri Bütünlüğü", "tutarlılık", "bir işlemin ya tam gerçekleşmesi ya da hiç gerçekleşmemesi ilkesini kavramak."],
      ["047-postgresql-ile-kurumsal-veri.html", "PostgreSQL ile Kurumsal Veri", "veritabanı", "açık kaynak güçlü veritabanının kurumsal kullanımını anlamak."],
      ["048-veri-kalitesi.html", "Veri Kalitesi", "güvenilirlik", "eksik, yanlış, tekrar eden ve çelişkili verinin karar üzerindeki etkisini görmek."],
      ["049-veri-sozlugu.html", "Veri Sözlüğü", "ortak dil", "kurumda aynı kavramın herkes için aynı anlama gelmesini sağlamak."],
      ["050-ana-veri-yonetimi.html", "Ana Veri Yönetimi", "master data", "kişi, kurum, ürün, hizmet gibi temel kayıtların tutarlılığını yönetmek."],
      ["051-etl-ve-veri-boru-hatlari.html", "ETL ve Veri Boru Hatları", "akış", "verinin kaynaktan rapora giderken nasıl dönüştüğünü anlamak."],
      ["052-veri-ambari.html", "Veri Ambarı", "karar deposu", "operasyonel veriyi raporlama ve analiz için düzenlemek."],
      ["053-data-lake-mantigi.html", "Data Lake Mantığı", "geniş veri", "farklı türde verileri gelecekteki analizler için saklama yaklaşımını görmek."],
      ["054-dashboard-ve-kpi.html", "Dashboard ve KPI", "gösterge", "yönetim panolarının neyi ölçtüğünü ve neyi saklayabileceğini anlamak."],
      ["055-raporlama-tuzaklari.html", "Raporlama Tuzakları", "yorum", "güzel grafiğin doğru karar anlamına gelmediğini öğrenmek."],
      ["056-veri-katalogu-ve-lineage.html", "Veri Kataloğu ve Lineage", "izlenebilirlik", "bir verinin nereden gelip hangi dönüşümlerden geçtiğini takip etmek."],
      ["057-kvkk-acisindan-veri.html", "KVKK Açısından Veri", "mahremiyet", "kişisel verinin teknik sistemlerde nasıl korunacağını kavramak."],
      ["058-veri-paylasimi-ve-protokoller.html", "Veri Paylaşımı ve Protokoller", "kurumlar arası veri", "kurumlar arası veri alışverişinin sınırlarını ve kayıtlarını anlamak."],
      ["059-karar-destek-sistemleri.html", "Karar Destek Sistemleri", "analitik yönetim", "raporu yönetsel karara bağlayan yaklaşımı kurmak."],
      ["060-veri-yonetisimini-yonetmek.html", "Veri Yönetişimini Yönetmek", "liderlik", "veri sahipliği, kalite ve ortak dil disiplinini kurumsallaştırmak."],
      ["061-sunucu-isletimi.html", "Sunucu İşletimi", "sunucu", "canlı hizmetlerin çalıştığı ortamı kaynak, servis ve güvenlik açısından okumak."],
      ["062-linux-sunucu-temelleri.html", "Linux Sunucu Temelleri", "linux", "kullanıcı, paket, servis, izin ve log düzenini işletim bakışıyla anlamak."],
      ["063-windows-sunucu-temelleri.html", "Windows Sunucu Temelleri", "windows", "etki alanı, politika, kullanıcı ve kurumsal servis mantığını kavramak."],
      ["064-veri-merkezi-mantigi.html", "Veri Merkezi Mantığı", "fiziksel altyapı", "enerji, soğutma, raf, ağ ve fiziksel güvenliği hizmet sürekliliğiyle ilişkilendirmek."],
      ["065-sanallastirma.html", "Sanallaştırma", "kaynak paylaşımı", "fiziksel kaynakları mantıksal sunuculara bölme yaklaşımını öğrenmek."],
      ["066-depolama-sistemleri.html", "Depolama Sistemleri", "storage", "blok, dosya, nesne depolama ve yedeklilik mantığını anlamak."],
      ["067-load-balancer.html", "Load Balancer", "yük dağıtımı", "trafiği birden fazla servis örneğine güvenli biçimde dağıtmak."],
      ["068-monitoring-ve-alerting.html", "Monitoring ve Alerting", "izleme", "metrik ve alarmlarla sistemi canlı izlemek."],
      ["069-log-yonetimi.html", "Elasticsearch, Logstash ve Kibana", "ELK", "Log toplama, arama ve görselleştirme dünyasını gerçek operasyon ihtiyacıyla anlamak."],
      ["070-observability.html", "Observability", "görünürlük", "log, metrik ve trace ile sistem davranışını kanıta dayalı okumak."],
      ["071-bulut-bilisim.html", "Bulut Bilişim", "cloud", "IaaS, PaaS, SaaS, region, IAM ve yönetilen servisleri anlamak."],
      ["072-bulut-maliyet-yonetimi.html", "Bulut Maliyet Yönetimi", "finops", "kaynak tüketimini bütçe, etiket ve alarm disipliniyle yönetmek."],
      ["073-devops-kulturu.html", "DevOps Kültürü", "teslimat", "geliştirme ve operasyon sorumluluğunu aynı hizmet yaşam döngüsünde birleştirmek."],
      ["074-ci-cd-pipeline.html", "CI/CD Pipeline", "otomasyon", "build, test, paketleme, dağıtım ve rollback hattını kurmak."],
      ["075-infrastructure-as-code.html", "Infrastructure as Code", "tekrarlanabilirlik", "altyapıyı elle kurmak yerine sürümlenebilir tanıma dönüştürmek."],
      ["076-docker-ve-konteyner.html", "Docker ve Konteyner", "paketleme", "uygulamayı bağımlılıklarıyla taşınabilir hale getirmek."],
      ["077-kubernetes.html", "Kubernetes", "orkestrasyon", "çok sayıda konteyneri istenen durumda tutma yaklaşımını anlamak."],
      ["078-yedekleme-ve-geri-donus.html", "Yedekleme ve Geri Dönüş", "backup", "yedek almanın restore başarısıyla anlam kazandığını görmek."],
      ["079-felaket-kurtarma.html", "Felaket Kurtarma", "DR", "RPO, RTO, alternatif merkez ve geri dönüş tatbikatını planlamak."],
      ["080-is-surekliligi-yonetimi.html", "İş Sürekliliği Yönetimi", "süreklilik", "kritik kamu hizmetlerinin kesinti karşısında nasıl sürdürüleceğini yönetmek."],
      ["081-siber-guvenlige-risk-olarak-bakmak.html", "Siber Güvenliğe Risk Olarak Bakmak", "risk", "güvenliği korku değil ölçülebilir risk diliyle ele almak."],
      ["082-varlik-envanteri.html", "Varlık Envanteri", "varlık", "neyi koruduğunu bilmeden güvenlik kurulamayacağını anlamak."],
      ["083-tehdit-zafiyet-ve-etki.html", "Tehdit, Zafiyet ve Etki", "risk modeli", "güvenlik riskini bileşenlerine ayırmak."],
      ["084-kimlik-ve-erisim-yonetimi.html", "Kimlik ve Erişim Yönetimi", "IAM", "kimin hangi sisteme hangi yetkiyle erişeceğini yönetmek."],
      ["085-mfa-ve-sso.html", "MFA ve SSO", "giriş güvenliği", "parola riskini azaltan ve deneyimi sadeleştiren yaklaşımları anlamak."],
      ["086-ayricalikli-hesap-yonetimi.html", "Ayrıcalıklı Hesap Yönetimi", "PAM", "kritik yetkilerin kayıtlı, süreli ve denetlenebilir olmasını sağlamak."],
      ["087-ag-guvenligi.html", "Firewall ve Ağ Sınırı", "güvenlik duvarı", "Firewall, kural seti, segmentasyon ve ağ geçişlerini anlaşılır örneklerle okumak."],
      ["088-zero-trust.html", "Zero Trust", "modern güven", "iç ağ varsayımına güvenmeden kimlik ve bağlamla karar vermek."],
      ["089-waf-ve-uygulama-siniri.html", "WAF ve Uygulama Sınırı", "web güvenliği", "web uygulamalarını yaygın saldırı desenlerine karşı korumak."],
      ["090-owasp-ve-guvenli-kod.html", "OWASP ve Güvenli Kod", "uygulama güvenliği", "sık görülen web güvenliği hatalarını süreç içinde azaltmak."],
      ["091-sast-dast-ve-dependency-taramasi.html", "SAST, DAST ve Dependency Taraması", "güvenli SDLC", "güvenlik testlerini geliştirme yaşam döngüsüne eklemek."],
      ["092-endpoint-guvenligi.html", "Endpoint Güvenliği", "uç nokta", "cihazların güncel, izlenebilir ve korunabilir olmasını sağlamak."],
      ["093-siem-mantigi.html", "SIEM Mantığı", "log korelasyonu", "loglardan anlamlı güvenlik uyarısı üretmek."],
      ["094-soc-operasyonu.html", "SOC Operasyonu", "güvenlik izleme", "alarmdan olaya giden karar hattını yönetmek."],
      ["095-olay-mudahalesi.html", "Olay Müdahalesi", "incident response", "tespit, çevreleme, temizleme, kurtarma ve ders çıkarma akışını kurmak."],
      ["096-siber-kriz-iletisimi.html", "Siber Kriz İletişimi", "iletişim", "teknik olayın yönetim, hukuk ve kamu iletişimi boyutunu ele almak."],
      ["097-veri-sizintisi-yonetimi.html", "Veri Sızıntısı Yönetimi", "veri ihlali", "ihlal şüphesinde kanıt, bildirim ve azaltma planını yönetmek."],
      ["098-guvenlik-farkindaligi.html", "Güvenlik Farkındalığı", "insan faktörü", "personelin günlük davranışlarını güvenlik kültürüne bağlamak."],
      ["099-denetim-ve-uyum.html", "Denetim ve Uyum", "kontrol", "güvenlik kontrollerini denetlenebilir kanıtlarla izlemek."],
      ["100-siber-guvenlik-programini-yonetmek.html", "Siber Güvenlik Programını Yönetmek", "liderlik", "araç, süreç, insan ve bütçeyi bütünleşik güvenlik programına dönüştürmek."],
      ["101-yapay-zekaya-is-problemiyle-baslamak.html", "Yapay Zekaya İş Problemiyle Başlamak", "AI stratejisi", "modelden önce iyileştirilecek karar veya süreci tanımlamak."],
      ["102-veri-hazirligi.html", "Veri Hazırlığı", "data prep", "modelin göreceği veriyi temiz, anlamlı ve ayrılmış hale getirmek."],
      ["103-makine-ogrenmesi-mantigi.html", "Makine Öğrenmesi Mantığı", "ML", "veriden örüntü öğrenme ve genelleme fikrini kavramak."],
      ["104-derin-ogrenme.html", "Derin Öğrenme", "DL", "sinir ağları, katmanlar ve temsil öğrenme mantığını anlamak."],
      ["105-model-degerlendirme.html", "Model Değerlendirme", "ölçüm", "doğruluk, hata, bias ve canlı performansı birlikte değerlendirmek."],
      ["106-mlops.html", "MLOps", "model işletimi", "modelin sürüm, izleme ve geri bildirim döngüsünü kurmak."],
      ["107-llm-temelleri.html", "LLM Temelleri", "dil modeli", "büyük dil modellerinin neyi iyi yaptığını ve nerede yanılabileceğini anlamak."],
      ["108-token-ve-embedding.html", "Token ve Embedding", "metin temsili", "metni parçalara ve anlam yakınlıklarına dönüştürmek."],
      ["109-vektor-veritabani.html", "Vektör Veritabanı", "arama", "anlam benzerliğiyle belge ve bilgi aramayı desteklemek."],
      ["110-rag-mimarisi.html", "RAG Mimarisi", "kurumsal bilgi", "modeli kurum belgeleriyle kaynaklı cevap verecek hale getirmek."],
      ["111-prompt-tasarimi.html", "Prompt Tasarımı", "talimat", "modele bağlam, sınır ve çıktı biçimi vermek."],
      ["112-function-calling.html", "Function Calling", "araç kullanımı", "modelin tanımlı araçlarla güvenli işlem yapmasını sağlamak."],
      ["113-ajan-sistemleri.html", "Ajan Sistemleri", "AI ajan", "araç kullanan, planlayan ve adım atan sistemlerin risklerini anlamak."],
      ["114-ai-guvenligi.html", "AI Güvenliği", "prompt injection", "modelin okuduğu metinle talimat sınırını karıştırmasını önlemek."],
      ["115-ai-yonetisimi.html", "AI Yönetişimi", "sorumlu AI", "model riskini, insan onayını ve denetlenebilirliği yönetmek."],
      ["116-kurumsal-asistan-tasarimi.html", "Kurumsal Asistan Tasarımı", "asistan", "kurum içinde güvenilir bilgi asistanı kurmanın şartlarını görmek."],
      ["117-rpa-ve-surec-otomasyonu.html", "RPA ve Süreç Otomasyonu", "otomasyon", "tekrarlı işlerin kural tabanlı otomasyonla nasıl azaltılacağını anlamak."],
      ["118-low-code-ve-no-code.html", "Low-Code ve No-Code", "hızlı geliştirme", "hız ile yönetişim arasındaki dengeyi kurmak."],
      ["119-iot-ve-sensor-verisi.html", "IoT ve Sensör Verisi", "nesnelerin interneti", "fiziksel dünyadan gelen veriyi kurum sistemlerine bağlamak."],
      ["120-yeni-teknolojileri-degerlendirmek.html", "Yeni Teknolojileri Değerlendirmek", "trend yönetimi", "heyecanı değer, risk, maliyet ve uygulanabilirlikle tartmak."]
    ]
  },
  {
    id: "kamu-isleyisi",
    title: "Temel Kamu Bilgisi ve Kamu İşleyişi",
    summary: "Kamu kurumunun karar alma, yazışma, olur, ihale, şartname, komisyon, kabul, ödeme, arşiv ve denetim düzeni.",
    frame:
      "Bu bölüm teknoloji yöneticisinin kamu zeminini öğrenmesi içindir. Çünkü kamu kurumunda iyi fikir tek başına yetmez; yetki, yazı, onay, komisyon, bütçe, sözleşme ve denetim izi doğru kurulmadığında en iyi teknik çözüm bile ilerleyemez.",
    chapters: [
      ["121-kamu-kurumunun-calisma-mantigi.html", "Kamu Kurumunun Çalışma Mantığı", "idari yapı", "hiyerarşi, yetki, görev ve kayıt düzenini anlamak."],
      ["122-merkez-ve-tasra-isleyisi.html", "Merkez ve Taşra İşleyişi", "örgüt", "farklı teşkilat yapılarının teknoloji projelerine etkisini görmek."],
      ["123-resmi-yazi-kulturu.html", "Resmi Yazı Kültürü", "yazışma", "talep, görüş, bilgilendirme ve karar yazılarının önemini kavramak."],
      ["124-makam-oluru.html", "Makam Oluru", "onay", "hangi kararların yetkili makam onayı gerektirdiğini anlamak."],
      ["125-yetki-devri-ve-sorumluluk.html", "Yetki Devri ve Sorumluluk", "idari yetki", "kararı kimin alabileceğini ve kimin uygulayacağını ayırmak."],
      ["126-komisyon-mantigi.html", "Komisyon Mantığı", "ortak karar", "ihale, kabul, değerlendirme ve inceleme komisyonlarının rolünü görmek."],
      ["127-ihale-sureci.html", "İhale Süreci", "kamu alımı", "rekabet, saydamlık, eşit muamele ve ihtiyaç teminini anlamak."],
      ["128-yaklasik-maliyet-ve-piyasa-arastirmasi.html", "Yaklaşık Maliyet ve Piyasa Araştırması", "maliyet", "alım öncesi mali gerçekliği ve bütçe zeminini hazırlamak."],
      ["129-idari-sartname.html", "İdari Şartname", "ihale dokümanı", "teknik ihtiyaç dışındaki idari koşulları anlamak."],
      ["130-teknik-sartname.html", "Teknik Şartname", "gereksinim", "ihtiyacı ölçülebilir teknik dile çevirmek."],
      ["131-sozlesme-yonetimi.html", "Sözleşme Yönetimi", "bağlayıcılık", "teslim, destek, ceza, bakım ve sorumlulukların yazılı çerçevesini yönetmek."],
      ["132-sla-ve-bakim-maddeleri.html", "SLA ve Bakım Maddeleri", "hizmet seviyesi", "destek süresi, müdahale, çözüm ve bakım beklentilerini netleştirmek."],
      ["133-muayene-ve-kabul.html", "Muayene ve Kabul", "teslim", "teslim edilen işin şartnameye uygunluğunu kanıtla değerlendirmek."],
      ["134-kabul-komisyonu-hazirligi.html", "Kabul Komisyonu Hazırlığı", "kanıt dosyası", "test, rapor, lisans, eğitim ve doküman kanıtlarını düzenlemek."],
      ["135-hakedis-ve-odeme-sureci.html", "Hakediş ve Ödeme Süreci", "mali işleyiş", "Teslim edilen iş, kabul kanıtı ve ödeme kararının aynı çizgide buluşması."],
      ["136-denetim-izi.html", "Denetim İzi", "hesap verebilirlik", "işlemlerin sonradan izlenebilir ve açıklanabilir kalmasını sağlamak."],
      ["137-arsiv-ve-saklama-sureleri.html", "Arşiv ve Saklama Süreleri", "kurumsal hafıza", "belge ve verilerin mevzuata uygun saklanmasını yönetmek."],
      ["138-kvkk-ve-kamu-verisi.html", "KVKK ve Kamu Verisi", "hukuki uyum", "kişisel veriyi kamu hizmeti içinde sorumlu biçimde işlemek."],
      ["139-kurumlar-arasi-protokol.html", "Kurumlar Arası Protokol", "iş birliği", "veri ve hizmet paylaşımını resmi zemine oturtmak."],
      ["140-kamu-surecini-teknoloji-projesine-baglamak.html", "Kamu Sürecini Teknoloji Projesine Bağlamak", "bütünlük", "idari süreç ile teknik teslimi aynı plan içinde yönetmek."]
    ]
  },
  {
    id: "proje-yoneticisi",
    title: "BT Proje Yöneticisi ve Üst Düzey Liderlik",
    summary: "Teknik genel müdürlükte, büyük kamu kurumunda veya Aselsan gibi kurumsal yapılarda yönetici olmak isteyenler için proje, program, portföy, strateji ve liderlik rotası.",
    frame:
      "Bu bölüm teknik bilgiyi karar, insan, bütçe, tedarik, risk ve üst yönetim diliyle birleştirir. Buradaki amaç yalnız proje takip eden biri yetiştirmek değil; karmaşık teknoloji işlerini kurumsal değere dönüştürebilen sakin, kanıta dayalı ve güvenilir bir yönetici bakışı kurmaktır.",
    chapters: [
      ["141-bt-proje-yoneticisinin-rolu.html", "BT Proje Yöneticisinin Rolü", "rol", "proje yöneticisinin teknik, idari ve iletişim sorumluluklarını kavramak."],
      ["142-proje-baslatma.html", "Proje Başlatma", "başlangıç", "amaç, kapsam, paydaş ve başarı ölçütünü baştan netleştirmek."],
      ["143-is-analizi.html", "İş Analizi", "ihtiyaç", "istek ile gerçek gereksinimi ayırmak."],
      ["144-paydas-analizi.html", "Paydaş Analizi", "ilişki", "kim etkilenir, kim karar verir, kim uygulanır sorularını yanıtlamak."],
      ["145-raci-matrisi.html", "RACI Matrisi", "sorumluluk", "responsible, accountable, consulted ve informed rollerini netleştirmek."],
      ["146-kapsam-yonetimi.html", "Kapsam Yönetimi", "sınır", "projenin neyi içerip neyi içermediğini yönetmek."],
      ["147-is-kirilim-yapisi.html", "İş Kırılım Yapısı", "plan", "büyük işi yönetilebilir parçalara ayırmak."],
      ["148-zaman-plani.html", "Zaman Planı", "takvim", "bağımlılıkları ve kritik yolu görünür hale getirmek."],
      ["149-kaynak-planlama.html", "Kaynak Planlama", "kapasite", "insan, bütçe, ortam ve tedarik ihtiyaçlarını planlamak."],
      ["150-risk-yonetimi.html", "Risk Yönetimi", "belirsizlik", "olası sorunları etki ve azaltma planıyla takip etmek."],
      ["151-sorun-yonetimi.html", "Sorun Yönetimi", "engel", "gerçekleşmiş problemleri sahip ve tarih ile yönetmek."],
      ["152-degisiklik-yonetimi.html", "Değişiklik Yönetimi", "kapsam kontrolü", "yeni taleplerin süre, maliyet, kalite ve sözleşme etkisini görmek."],
      ["153-toplanti-yonetimi.html", "Toplantı Yönetimi", "ritim", "gündem, karar, aksiyon ve takip düzeni kurmak."],
      ["154-tutanak-yazma.html", "Tutanak Yazma", "kayıt", "kararları ve sorumlulukları kurumsal hafızaya geçirmek."],
      ["155-durum-raporu.html", "Durum Raporu", "raporlama", "üst yönetime sade, doğru ve karar odaklı bilgi sunmak."],
      ["156-test-ve-kabul-plani.html", "Test ve Kabul Planı", "kalite", "teslim kanıtlarını proje sonuna bırakmadan hazırlamak."],
      ["157-canliya-gecis-plani.html", "Canlıya Geçiş Planı", "geçiş", "kesinti, eğitim, destek ve geri dönüş planını kurmak."],
      ["158-tedarikci-yonetimi.html", "Tedarikçi Yönetimi", "dış ekip", "yüklenici performansını sözleşme ve kanıtla takip etmek."],
      ["159-program-yonetimi.html", "Program Yönetimi", "çoklu proje", "birbiriyle ilişkili projeleri ortak hedef etrafında yönetmek."],
      ["160-portfoy-yonetimi.html", "Portföy Yönetimi", "öncelik", "projeleri değer, risk, kaynak ve stratejiye göre sıralamak."],
      ["161-bt-stratejisi.html", "BT Stratejisi", "strateji", "teknoloji yatırımlarını kurum hedefleriyle ilişkilendirmek."],
      ["162-yol-haritasi-hazirlama.html", "Yol Haritası Hazırlama", "planlama", "kısa, orta ve uzun vadeli teknoloji adımlarını kurmak."],
      ["163-bt-yonetisimi.html", "BT Yönetişimi", "governance", "karar, standart, sorumluluk ve denetim düzeni kurmak."],
      ["164-kurumsal-mimari.html", "Kurumsal Mimari", "mimari", "iş, veri, uygulama ve altyapı katmanlarını birlikte okumak."],
      ["165-standart-ve-politika-yonetimi.html", "Standart ve Politika Yönetimi", "standart", "teknoloji kullanımında ortak kurallar oluşturmak."],
      ["166-dokumantasyon-yonetimi.html", "Dokümantasyon Yönetimi", "hafıza", "kurumsal bilgiyi kişilere bağımlı olmaktan çıkarmak."],
      ["167-teknik-borc-yonetimi.html", "Teknik Borç Yönetimi", "borç", "ertelenmiş teknik sorunların maliyetini görünür kılmak."],
      ["168-lisans-yonetimi.html", "Lisans Yönetimi", "lisans", "yazılım haklarını, kullanımını ve yenileme risklerini yönetmek."],
      ["169-bt-butcesi.html", "BT Bütçesi", "finans", "yatırım, bakım, lisans, bulut ve insan kaynağı maliyetlerini planlamak."],
      ["170-finops.html", "FinOps", "bulut finansı", "bulut tüketimini mali disiplinle kontrol etmek."],
      ["171-tedarik-stratejisi.html", "Tedarik Stratejisi", "satın alma", "ne içeride yapılır, ne dışarıdan alınır sorusunu stratejik cevaplamak."],
      ["172-vendor-lock-in.html", "Vendor Lock-in", "bağımlılık", "tedarikçi ve platform bağımlılığını erken görmek."],
      ["173-dijital-egemenlik.html", "Dijital Egemenlik", "stratejik bağımsızlık", "kritik veri, altyapı ve yazılım bağımlılıklarını yönetmek."],
      ["174-acik-kaynak-politikasi.html", "Açık Kaynak Politikası", "ekosistem", "açık kaynak kullanımını risk ve katkı çerçevesinde değerlendirmek."],
      ["175-hizmet-katalogu.html", "Hizmet Kataloğu", "BT hizmetleri", "BT'nin sunduğu hizmetleri anlaşılır ve yönetilebilir hale getirmek."],
      ["176-sla-yonetimi.html", "SLA Yönetimi", "hizmet seviyesi", "hizmet beklentilerini ölçülebilir taahhütlere bağlamak."],
      ["177-kpi-ve-okr-kullanimi.html", "KPI ve OKR Kullanımı", "performans", "BT başarısını doğru göstergelerle izlemek."],
      ["178-yonetim-kurulu-ve-ust-makam-sunumu.html", "Yönetim Kurulu ve Üst Makam Sunumu", "iletişim", "teknik konuyu karar verilebilir yönetim diline çevirmek."],
      ["179-mevzuat-ve-teknoloji-stratejisi.html", "Mevzuat ve Teknoloji Stratejisi", "uyum", "stratejiyi hukuki ve idari sınırlarla birlikte düşünmek."],
      ["180-bt-degerini-kanitlamak.html", "BT Değerini Kanıtlamak", "değer", "teknoloji yatırımını kamu hizmeti, risk ve verimlilik çıktılarıyla göstermek."],
      ["181-teknik-liderlikten-kurumsal-liderlige.html", "Teknik Liderlikten Kurumsal Liderliğe", "liderlik", "uzmanlıktan stratejik sorumluluğa geçişi anlamak."],
      ["182-ekip-kurmak.html", "Ekip Kurmak", "insan", "farklı uzmanlıkları ortak hizmet hedefinde buluşturmak."],
      ["183-yetenek-gelistirme.html", "Yetenek Geliştirme", "kapasite", "ekibin öğrenme ve yedeklilik kapasitesini büyütmek."],
      ["184-bilgiyi-tek-kisiye-hapsetmemek.html", "Bilgiyi Tek Kişiye Hapsetmemek", "dayanıklılık", "kritik bilgiyi dokümantasyon ve paylaşım kültürüyle yaymak."],
      ["185-kurum-kulturu-ve-degisim.html", "Kurum Kültürü ve Değişim", "kültür", "teknoloji değişimini insan alışkanlıklarıyla birlikte yönetmek."],
      ["186-dijital-donusum-liderligi.html", "Dijital Dönüşüm Liderliği", "dönüşüm", "süreçleri yalnız dijitale taşımak yerine yeniden düşünmek."],
      ["187-kriz-aninda-ilk-60-dakika.html", "Kriz Anında İlk 60 Dakika", "kriz", "rol, iletişim, kanıt ve karar düzenini hızla kurmak."],
      ["188-kriz-sonrasi-ogrenme.html", "Kriz Sonrası Öğrenme", "iyileştirme", "olay raporunu suçlama değil kalıcı gelişim aracına çevirmek."],
      ["189-ust-makama-teknik-konu-anlatmak.html", "Üst Makama Teknik Konu Anlatmak", "karar dili", "teknik ayrıntıyı etki, risk ve seçenek diline çevirmek."],
      ["190-kamuoyu-ve-paydas-iletisimi.html", "Kamuoyu ve Paydaş İletişimi", "iletişim", "kesinti, veri ihlali veya büyük değişimde güven veren dil kurmak."],
      ["191-etik-ve-kamu-sorumlulugu.html", "Etik ve Kamu Sorumluluğu", "etik", "teknolojinin hak, mahremiyet ve adalet boyutunu yönetmek."],
      ["192-karar-alma-disiplini.html", "Karar Alma Disiplini", "karar", "hız, risk, kanıt ve geri dönüş yolunu birlikte düşünmek."],
      ["193-muzakere-ve-catisma-yonetimi.html", "Müzakere ve Çatışma Yönetimi", "ilişki", "tedarikçi, birim ve üst yönetim arasında sağlıklı uzlaşma kurmak."],
      ["194-kisisel-ogrenme-sistemi.html", "Kişisel Öğrenme Sistemi", "öğrenme", "yöneticinin kendi gelişimini sürekli ve bilinçli yönetmesi."],
      ["195-teknoloji-trendlerini-okumak.html", "Teknoloji Trendlerini Okumak", "gelecek", "moda ile stratejik fırsatı ayırmak."],
      ["196-yapay-zeka-caginda-liderlik.html", "Yapay Zeka Çağında Liderlik", "AI liderliği", "AI'nin ekip, süreç, etik ve verimlilik etkilerini yönetmek."],
      ["197-surdurulebilirlik-ve-enerji.html", "Sürdürülebilirlik ve Enerji", "yeşil BT", "veri merkezi, bulut ve donanım kararlarını enerji etkisiyle düşünmek."],
      ["198-ulusal-teknoloji-ekosistemi.html", "Ulusal Teknoloji Ekosistemi", "ekosistem", "yerli üretim, üniversite, özel sektör ve kamu iş birliğini değerlendirmek."],
      ["199-kamu-bt-liderinin-ilk-100-gunu.html", "Kamu BT Liderinin İlk 100 Günü", "başlangıç planı", "kritik sistem, risk, ekip, bütçe ve proje fotoğrafını hızla çıkarmak."],
      ["200-from-zero-to-hero-kisisel-yol-haritasi.html", "From Zero to Hero Kişisel Yol Haritası", "kişisel rota", "temelden üst düzey liderliğe uzanan öğrenme ve uygulama planını tamamlamak."]
    ]
  }
];
const categories = categoryDefinitions.map((category, categoryIndex) => ({
  ...category,
  categoryNumber: categoryIndex + 1,
  chapters: category.chapters.map(([file, title, lens, focus], chapterIndex) => ({
    file,
    title,
    lens,
    focus,
    categoryId: category.id,
    categoryTitle: category.title,
    categorySummary: category.summary,
    categoryFrame: category.frame,
    categoryNumber: categoryIndex + 1,
    numberInCategory: chapterIndex + 1
  }))
}));

const chapters = categories.flatMap((category) => category.chapters).map((chapter, index) => ({
  ...chapter,
  id: `${String(index + 1).padStart(3, "0")}-${slug(chapter.title)}`,
  articlePath: `articles/${chapter.file}`,
  number: index + 1,
  displayNumber: `${chapter.categoryNumber}.${chapter.numberInCategory}`
}));

const state = {
  activeCategory: null,
  collapsedCategories: new Set()
};

const els = {
  home: document.querySelector("#homeView"),
  chapter: document.querySelector("#chapterView"),
  nav: document.querySelector("#chapterNav"),
  search: document.querySelector("#searchInput"),
  sidebar: document.querySelector("#sidebar"),
  themeToggle: document.querySelector("#themeToggle"),
  menuToggle: document.querySelector("#menuToggle")
};

function slug(value) {
  return value
    .toLocaleLowerCase("tr-TR")
    .replace(/ı/g, "i")
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ı/g, "i")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function normalizeText(value) {
  return value.toLocaleLowerCase("tr-TR").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

const managerStartChapter = chapters.find((chapter) => chapter.categoryId === "proje-yoneticisi") || chapters[140];

function getChapter(id) {
  return chapters.find((chapter) => chapter.id === id) || chapters[0];
}

function getCategory(id) {
  return categories.find((category) => category.id === id) || categories[0];
}

function routeInfo(chapter) {
  const index = chapters.findIndex((item) => item.id === chapter.id);
  return {
    index,
    previous: chapters[index - 1],
    next: chapters[index + 1]
  };
}

function readingMinutes(articleHtml) {
  const text = articleHtml.replace(/<[^>]+>/g, " ");
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(10, Math.round(words / 180));
}

async function renderArticle(chapter) {
  const response = await fetch(chapter.articlePath, { cache: "no-store" });
  if (!response.ok) {
    throw new Error(`Makale dosyası bulunamadı: ${chapter.articlePath}`);
  }
  return response.text();
}

function closeMobileSidebar() {
  els.sidebar.classList.remove("open");
}

function scrollToPageTop() {
  const jump = () => window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  jump();
  requestAnimationFrame(jump);
  setTimeout(jump, 80);
}

function renderNav() {
  const query = normalizeText(els.search.value.trim());
  const activeId = location.hash.startsWith("#/chapter/") ? location.hash.replace("#/chapter/", "") : "";

  els.nav.innerHTML = categories
    .map((category) => {
      const categoryChapters = chapters.filter((chapter) => chapter.categoryId === category.id);
      const filtered = categoryChapters.filter((chapter) => {
        if (!query) return true;
        const haystack = normalizeText(`${category.title} ${category.summary} ${chapter.title} ${chapter.lens} ${chapter.focus}`);
        return haystack.includes(query);
      });
      if (query && !filtered.length && !normalizeText(`${category.title} ${category.summary}`).includes(query)) return "";
      const isOpen =
        query ||
        (!state.collapsedCategories.has(category.id) &&
          (state.activeCategory === category.id || filtered.some((chapter) => chapter.id === activeId)));
      return `
        <div class="category-group ${isOpen ? "open" : ""}">
          <button class="category-button" type="button" data-category="${category.id}">
            <span>${category.categoryNumber}. ${escapeHtml(category.title)}</span>
            <small>${category.chapters.length} başlık</small>
          </button>
          <div class="chapter-list">
            ${filtered
              .map(
                (chapter) => `
                  <a class="chapter-link ${activeId === chapter.id ? "active" : ""}" href="#/chapter/${chapter.id}" data-category="${category.id}">
                    <strong>${chapter.displayNumber} ${escapeHtml(chapter.title)}</strong>
                    <span>${escapeHtml(chapter.lens)}</span>
                  </a>
                `
              )
              .join("")}
          </div>
        </div>
      `;
    })
    .join("");

  document.querySelectorAll(".category-button").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.dataset.category;
      const group = button.closest(".category-group");
      const isOpen = group?.classList.contains("open");
      if (isOpen) {
        state.collapsedCategories.add(id);
        if (state.activeCategory === id) state.activeCategory = null;
      } else {
        state.collapsedCategories.delete(id);
        state.activeCategory = id;
      }
      renderNav();
    });
  });
}

function renderHome() {
  state.activeCategory = null;
  state.collapsedCategories.clear();
  closeMobileSidebar();
  els.home.classList.remove("hidden");
  els.chapter.classList.add("hidden");

  els.home.innerHTML = `
    <section class="home-hero">
      <div class="hero-stage">
        <div>
          <p class="kicker">${escapeHtml(book.kicker)}</p>
          <h1>${escapeHtml(book.title)}</h1>
          <p class="hero-copy">${escapeHtml(book.promise)}</p>
          <div class="hero-actions">
            <a class="text-button primary" href="#/chapter/${chapters[0].id}">Baştan başla</a>
            <a class="text-button" href="#/chapter/${managerStartChapter.id}">Yönetici rotasına git</a>
          </div>
        </div>
        <div class="artifact" aria-hidden="true">
          <div class="artifact-lines">
            <i></i><i></i><i></i><i></i><i></i>
          </div>
          <strong>3 büyük rota, 200 bağımsız sayfa, tek yönetici bakışı.</strong>
        </div>
      </div>
      <div class="stats-row">
        <div><strong>${chapters.length}</strong><span>bağımsız sayfa</span></div>
        <div><strong>${categories.length}</strong><span>üst rota</span></div>
        <div><strong>1</strong><span>yönetici rotası</span></div>
      </div>
    </section>
    <section class="route-panel">
      <h2>Üç Ana Rota</h2>
      <p>${escapeHtml(book.subtitle)}</p>
      <div class="route-grid">
        ${categories
          .map(
            (category) => `
              <a class="route-card" href="#/chapter/${chapters.find((chapter) => chapter.categoryId === category.id).id}">
                <small>${category.categoryNumber}. rota / ${category.chapters.length} sayfa</small>
                <h3>${escapeHtml(category.title)}</h3>
                <p>${escapeHtml(category.summary)}</p>
              </a>
            `
          )
          .join("")}
      </div>
    </section>
  `;
  renderNav();
  scrollToPageTop();
}

async function renderChapter(id) {
  const chapter = getChapter(id);
  const route = routeInfo(chapter);
  state.activeCategory = chapter.categoryId;
  state.collapsedCategories.delete(chapter.categoryId);
  closeMobileSidebar();
  els.home.classList.add("hidden");
  els.chapter.classList.remove("hidden");

  const progress = Math.round(((route.index + 1) / chapters.length) * 100);
  let articleHtml = "";
  try {
    articleHtml = await renderArticle(chapter);
  } catch (error) {
    articleHtml = `<p class="article-missing">${escapeHtml(error.message)}</p>`;
  }
  els.chapter.innerHTML = `
    <article class="article-card">
      <p class="kicker">${chapter.displayNumber} / ${escapeHtml(chapter.categoryTitle)}</p>
      <h1>${escapeHtml(chapter.title)}</h1>
      <p class="chapter-subtitle">${escapeHtml(chapter.focus)}</p>
      <div class="meta-row">
        <span>${readingMinutes(articleHtml)} dk okuma</span>
        <span>%${progress}</span>
        <span>${escapeHtml(chapter.lens)}</span>
      </div>
      <div class="article-body">${articleHtml}</div>
      <nav class="bottom-nav" aria-label="Başlık geçişi">
        ${route.previous ? `<a class="text-button" href="#/chapter/${route.previous.id}">Önceki</a>` : `<a class="text-button" href="#/">Ana sayfa</a>`}
        ${route.next ? `<a class="text-button primary" href="#/chapter/${route.next.id}">Sonraki</a>` : `<a class="text-button primary" href="#/">Ana sayfa</a>`}
      </nav>
    </article>
  `;
  renderNav();
  scrollToPageTop();
}

function initTheme() {
  const saved = localStorage.getItem("theme-v5") || "dark";
  document.documentElement.dataset.theme = saved;
}

function toggleTheme() {
  const next = document.documentElement.dataset.theme === "sepia" ? "dark" : "sepia";
  document.documentElement.dataset.theme = next;
  localStorage.setItem("theme-v5", next);
}

function navigateTo(hash) {
  if (location.hash === hash) {
    router();
    return;
  }
  history.pushState(null, "", hash);
  router();
}

function router() {
  const hash = location.hash || "#/";
  if (hash === "#/" || hash === "#") {
    renderHome();
  } else if (hash.startsWith("#/chapter/")) {
    renderChapter(hash.replace("#/chapter/", ""));
  } else {
    renderHome();
  }
}

function init() {
  initTheme();
  els.themeToggle.addEventListener("click", toggleTheme);
  els.menuToggle.addEventListener("click", () => els.sidebar.classList.toggle("open"));
  els.search.addEventListener("input", renderNav);
  document.addEventListener("click", (event) => {
    const link = event.target.closest('a[href^="#/"]');
    if (!link) return;
    event.preventDefault();
    navigateTo(link.getAttribute("href"));
  });
  window.addEventListener("hashchange", router);
  window.addEventListener("popstate", router);
  router();
}

init();
