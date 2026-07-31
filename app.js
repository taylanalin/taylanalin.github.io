const book = {
  "title": "Kamu Teknoloji ve Liderlik Rehberi",
  "kicker": "Sıfırdan Üst Düzey Yönetici Bakışına",
  "subtitle": "Bu site sekiz büyük yolda ilerler: temel BT okuryazarlığı, operasyon, yazılım, veri ve yapay zeka, siber güvenlik, kamu işleyişi, proje yönetimi ve stratejik liderlik. Amaç ezberletmek değil; okuyan kişinin teknoloji, kurum, mevzuat, ekip, bütçe ve karar arasındaki gerçek bağı kurmasını sağlamaktır.",
  "promise": "Başlıklar sıfırdan ileri seviyeye doğru dizilir. Her bölüm, okuyucuyu önce kavramla tanıştırır, sonra o kavramın gerçek projede ve kamu kurumunda neye dönüştüğünü gösterir."
};

const categoryDefinitions = [
  {
    "id": "bt-zihniyeti",
    "title": "BT Zihniyeti ve Temel Okuryazarlık",
    "summary": "Teknolojiye hiç bilmeyen birinin güvenle girmesi için bilgisayar, sistem, hizmet, arıza ve kurum mantığını birlikte kuran başlangıç rotası.",
    "frame": "Bu bölüm okuyucuyu terim kalabalığına sokmadan önce teknoloji denen şeyin kurum hayatında ne işe yaradığını anlatır. Amaç parçaları ezberletmek değil; ekran, cihaz, dosya, kullanıcı, hizmet, hata ve karar arasındaki ilişkiyi sezilebilir hale getirmektir.",
    "chapters": [
      [
        "001-bilgi-teknolojilerine-buyuk-resimden-bakmak.html",
        "Bilgi Teknolojilerine Büyük Resimden Bakmak",
        "alan haritası",
        "teknolojiyi cihaz ve yazılım toplamı değil, kurumun hizmet üretme düzeni olarak görmek."
      ],
      [
        "002-bilgisayarin-ic-duzeni.html",
        "Bilgisayarın İç Düzeni",
        "donanım",
        "CPU, RAM, disk, anakart ve güç bileşenlerinin hizmete nasıl etki ettiğini anlamak."
      ],
      [
        "003-isletim-sisteminin-gorevi.html",
        "İşletim Sisteminin Görevi",
        "sistem",
        "program, bellek, dosya, sürücü ve servis ilişkisini başlangıç seviyesinde kavramak."
      ],
      [
        "004-dosya-sistemi-ve-klasor-duzeni.html",
        "Dosya Sistemi ve Klasör Düzeni",
        "dosya",
        "bilginin nerede durduğunu, nasıl bulunduğunu ve neden düzen istediğini öğrenmek."
      ],
      [
        "005-kullanici-grup-ve-yetki-mantigi.html",
        "Kullanıcı, Grup ve Yetki Mantığı",
        "erişim",
        "kişiye değil göreve göre yetki verme düşüncesini kavramak."
      ],
      [
        "006-terminal-ve-komut-satiri-kulturu.html",
        "Terminal ve Komut Satırı Kültürü",
        "kanıt",
        "sisteme kısa komutlarla soru sorup çıktıyı kanıt gibi okumak."
      ],
      [
        "007-log-okumaya-ilk-giris.html",
        "Log Okumaya İlk Giriş",
        "iz",
        "hata ve olay kayıtlarının kurum hafızasındaki yerini anlamak."
      ],
      [
        "008-envanter-mantigi.html",
        "Envanter Mantığı",
        "varlık",
        "cihaz, yazılım, lisans ve servis bilgisini yönetilebilir varlık olarak görmek."
      ],
      [
        "009-teknik-belirti-okuma.html",
        "Teknik Belirti Okuma",
        "sorun sezgisi",
        "yavaşlık, kesinti ve hata belirtilerini katmanlara ayırmak."
      ],
      [
        "010-yedek-kavrami.html",
        "Yedek Kavramı",
        "dayanıklılık",
        "yedek almak ile geri dönebilmek arasındaki farkı anlamak."
      ],
      [
        "011-sistem-servis-ve-surec-ayrimi.html",
        "Sistem, Servis ve Süreç Ayrımı",
        "çalışma düzeni",
        "arka planda çalışan işlerin hizmete nasıl dönüştüğünü görmek."
      ],
      [
        "012-kimlik-oturum-ve-gunluk-kullanici-deneyimi.html",
        "Kimlik, Oturum ve Günlük Kullanıcı Deneyimi",
        "kullanıcı yolu",
        "giriş yapma, oturum koruma ve çıkış yapma davranışlarını anlamak."
      ],
      [
        "013-yetki-hatasi-mi-sistem-hatasi-mi.html",
        "Yetki Hatası mı Sistem Hatası mı?",
        "ayırt etme",
        "erişim sorunu ile teknik arızayı birbirinden ayırmak."
      ],
      [
        "014-performans-sikayetini-okumak.html",
        "Performans Şikayetini Okumak",
        "hız",
        "kullanıcının yavaşlık dediği şeyin hangi katmanlarda doğabileceğini görmek."
      ],
      [
        "015-dosya-paylasimi-ve-ortak-calisma.html",
        "Dosya Paylaşımı ve Ortak Çalışma",
        "işbirliği",
        "ortak klasör, izin ve sürüm karmaşasının kurum işine etkisini anlamak."
      ],
      [
        "016-kurulum-guncelleme-ve-bakim-mantigi.html",
        "Kurulum, Güncelleme ve Bakım Mantığı",
        "yaşam döngüsü",
        "bir yazılımın ilk kurulumdan bakıma kadar nasıl yaşadığını görmek."
      ],
      [
        "017-teknik-dokumana-bakmayi-ogrenmek.html",
        "Teknik Dokümana Bakmayı Öğrenmek",
        "okuma",
        "kılavuz, hata mesajı ve sürüm notunu iş bilgisine dönüştürmek."
      ],
      [
        "018-basit-bir-hizmeti-uctan-uca-dusunmek.html",
        "Basit Bir Hizmeti Uçtan Uca Düşünmek",
        "bütünlük",
        "ekran, ağ, uygulama, veri ve güvenliği tek akışta okumak."
      ],
      [
        "019-kullanici-sikayetinden-kok-nedene-gitmek.html",
        "Kullanıcı Şikayetinden Kök Nedene Gitmek",
        "problem çözme",
        "şikayeti suçlama değil araştırılabilir iz olarak ele almak."
      ],
      [
        "020-bt-ekibinin-rolleri.html",
        "BT Ekibinin Rolleri",
        "ekip",
        "sistemci, yazılımcı, ağcı, güvenlikçi ve analistin nerede devreye girdiğini görmek."
      ],
      [
        "021-temel-bt-terimlerini-birbirine-baglamak.html",
        "Temel BT Terimlerini Birbirine Bağlamak",
        "sözlük zemini",
        "terimleri ayrı ayrı değil aynı hizmet haritasının parçaları olarak okumak."
      ],
      [
        "022-kucuk-kurum-ile-buyuk-kurum-farki.html",
        "Küçük Kurum ile Büyük Kurum Farkı",
        "ölçek",
        "ölçek büyüdükçe süreç, güvenlik ve koordinasyon ihtiyacının neden arttığını anlamak."
      ],
      [
        "023-teknik-kararda-kanit-aramak.html",
        "Teknik Kararda Kanıt Aramak",
        "kanıt kültürü",
        "tahmin ile ölçülmüş bilginin yönetimdeki farkını görmek."
      ],
      [
        "024-teknoloji-harcamasini-hizmetle-iliskilendirmek.html",
        "Teknoloji Harcamasını Hizmetle İlişkilendirmek",
        "değer",
        "cihaz ya da yazılım alımının hangi hizmet sorununu çözdüğünü sormak."
      ],
      [
        "025-temelden-yoneticilige-gecis-bakisi.html",
        "Temelden Yöneticiliğe Geçiş Bakışı",
        "yönetim zemini",
        "temel teknik okuryazarlığı doğru soru sorma becerisine dönüştürmek."
      ],
      [
        "026-kurum-ici-teknik-dilin-tercumesi.html",
        "Kurum İçi Teknik Dilin Tercümesi",
        "iletişim",
        "uzman dilini yöneticinin, kullanıcının ve idarenin anlayacağı dile çevirmek."
      ],
      [
        "027-hizmet-sistem-ve-urun-ayrimi.html",
        "Hizmet, Sistem ve Ürün Ayrımı",
        "kavram disiplini",
        "bir uygulamanın ürün mü hizmet mi sistem mi olduğunu ayırmak."
      ],
      [
        "028-teknoloji-yasam-dongusunu-gormek.html",
        "Teknoloji Yaşam Döngüsünü Görmek",
        "ömür",
        "alım, kurulum, işletim, yenileme ve emeklilik aşamalarını kavramak."
      ],
      [
        "029-ilk-teknik-toplantiya-hazirlik.html",
        "İlk Teknik Toplantıya Hazırlık",
        "hazırlık",
        "bilmeden de doğru soru sorabilmek için toplantı öncesi düşünme düzeni kurmak."
      ],
      [
        "030-bt-okuryazarligindan-kurumsal-sorumluluga.html",
        "BT Okuryazarlığından Kurumsal Sorumluluğa",
        "kapanış",
        "teknik merakı kamu hizmeti ve yönetim sorumluluğuyla birleştirmek."
      ]
    ]
  },
  {
    "id": "ag-sistem-bulut-operasyon",
    "title": "Ağ, Sistem, Bulut ve Operasyon",
    "summary": "Ağdan sunucuya, veri merkezinden buluta, izleme ve felaket kurtarmaya kadar canlı hizmeti ayakta tutan operasyon dünyası.",
    "frame": "Bu bölüm teknolojinin çalıştığı zemini anlatır. Okuyucu burada ağ paketinin yolunu, sunucunun görevini, bulutun vaatlerini, izleme sisteminin önemini ve kesinti anında ayakta kalmanın disiplinini öğrenir.",
    "chapters": [
      [
        "031-ag-nedir.html",
        "Ağ Nedir?",
        "bağlantı",
        "IP, port, subnet, gateway ve routing kavramlarını hizmet akışı içinde anlamak."
      ],
      [
        "032-osi-katmanlari-ve-tcp-ip-mantigi.html",
        "OSI Katmanları ve TCP/IP Mantığı",
        "ağ haritası",
        "verinin kablodan uygulamaya çıkarken geçtiği katmanları kavramak."
      ],
      [
        "033-dns-mantigi.html",
        "DNS Mantığı",
        "ad çözümleme",
        "insanların yazdığı adreslerle sistemlerin kullandığı adresler arasındaki köprüyü anlamak."
      ],
      [
        "034-http-ve-https.html",
        "HTTP ve HTTPS",
        "web protokolü",
        "tarayıcıdan sunucuya giden isteğin güvenli yolculuğunu okumak."
      ],
      [
        "035-sunucu-kavrami.html",
        "Sunucu Kavramı",
        "altyapı",
        "bir hizmetin nerede çalıştığını, nasıl dinlediğini ve nasıl cevap verdiğini anlamak."
      ],
      [
        "036-linux-sunucu-temelleri.html",
        "Linux Sunucu Temelleri",
        "linux",
        "kullanıcı, paket, servis, izin ve log düzenini işletim bakışıyla okumak."
      ],
      [
        "037-windows-sunucu-ve-etki-alani.html",
        "Windows Sunucu ve Etki Alanı",
        "windows",
        "domain, grup ilkesi, kullanıcı ve kurumsal servis mantığını kavramak."
      ],
      [
        "038-veri-merkezi-mantigi.html",
        "Veri Merkezi Mantığı",
        "fiziksel altyapı",
        "enerji, soğutma, raf, ağ ve fiziksel güvenliği hizmet sürekliliğiyle ilişkilendirmek."
      ],
      [
        "039-sanallastirma.html",
        "Sanallaştırma",
        "kaynak paylaşımı",
        "fiziksel kaynakları mantıksal sunuculara bölme yaklaşımını öğrenmek."
      ],
      [
        "040-depolama-sistemleri.html",
        "Depolama Sistemleri",
        "storage",
        "blok, dosya, nesne depolama ve yedeklilik mantığını anlamak."
      ],
      [
        "041-load-balancer.html",
        "Load Balancer",
        "yük dağıtımı",
        "trafiği birden fazla servis örneğine güvenli biçimde dağıtmak."
      ],
      [
        "042-proxy-reverse-proxy-ve-gateway.html",
        "Proxy, Reverse Proxy ve Gateway",
        "geçiş noktası",
        "istemci ile servis arasındaki ara katmanların rolünü kavramak."
      ],
      [
        "043-vpn-ve-guvenli-uzak-erisim.html",
        "VPN ve Güvenli Uzak Erişim",
        "erişim",
        "kurum dışından güvenli bağlantı kurmanın sınırlarını anlamak."
      ],
      [
        "044-monitoring-ve-alerting.html",
        "Monitoring ve Alerting",
        "izleme",
        "metrik ve alarmlarla sistemi canlı izlemek."
      ],
      [
        "045-elasticsearch-logstash-ve-kibana.html",
        "Elasticsearch, Logstash ve Kibana",
        "ELK",
        "log toplama, arama ve görselleştirme dünyasını operasyon ihtiyacıyla anlamak."
      ],
      [
        "046-observability.html",
        "Observability",
        "görünürlük",
        "log, metrik ve trace ile sistem davranışını kanıta dayalı okumak."
      ],
      [
        "047-capacity-planning.html",
        "Capacity Planning",
        "kapasite",
        "CPU, bellek, disk, ağ ve insan kapasitesini gelecek talebe göre planlamak."
      ],
      [
        "048-konfigurasyon-yonetimi.html",
        "Konfigürasyon Yönetimi",
        "düzen",
        "ortam ayarlarının kim tarafından, nerede ve nasıl değiştirildiğini yönetmek."
      ],
      [
        "049-patch-ve-guncelleme-yonetimi.html",
        "Patch ve Güncelleme Yönetimi",
        "bakım",
        "güvenlik ve kararlılık güncellemelerini hizmet kesmeden planlamak."
      ],
      [
        "050-bulut-bilisim.html",
        "Bulut Bilişim",
        "cloud",
        "IaaS, PaaS, SaaS, region, IAM ve yönetilen servisleri anlamak."
      ],
      [
        "051-hybrid-cloud-ve-coklu-bulut.html",
        "Hybrid Cloud ve Çoklu Bulut",
        "karma mimari",
        "veri merkezi ile bulut servislerinin birlikte çalışmasını değerlendirmek."
      ],
      [
        "052-bulut-maliyet-yonetimi.html",
        "Bulut Maliyet Yönetimi",
        "finops",
        "kaynak tüketimini bütçe, etiket ve alarm disipliniyle yönetmek."
      ],
      [
        "053-infrastructure-as-code.html",
        "Infrastructure as Code",
        "tekrarlanabilirlik",
        "altyapıyı elle kurmak yerine sürümlenebilir tanıma dönüştürmek."
      ],
      [
        "054-docker-ve-konteyner.html",
        "Docker ve Konteyner",
        "paketleme",
        "uygulamayı bağımlılıklarıyla taşınabilir hale getirmek."
      ],
      [
        "055-kubernetes.html",
        "Kubernetes",
        "orkestrasyon",
        "çok sayıda konteyneri istenen durumda tutma yaklaşımını anlamak."
      ],
      [
        "056-service-mesh-ve-modern-trafik-yonetimi.html",
        "Service Mesh ve Modern Trafik Yönetimi",
        "servis ağı",
        "mikroservisler arasındaki trafiği güvenli ve görünür yönetmek."
      ],
      [
        "057-devops-kulturu.html",
        "DevOps Kültürü",
        "teslimat",
        "geliştirme ve operasyon sorumluluğunu aynı hizmet yaşam döngüsünde birleştirmek."
      ],
      [
        "058-ci-cd-pipeline.html",
        "CI/CD Pipeline",
        "otomasyon",
        "build, test, paketleme, dağıtım ve rollback hattını kurmak."
      ],
      [
        "059-surumleme-release-ve-rollback.html",
        "Sürümleme, Release ve Rollback",
        "yayın",
        "canlıya alınan değişikliğin izlenebilir ve geri dönebilir olmasını sağlamak."
      ],
      [
        "060-yedekleme-ve-geri-donus.html",
        "Yedekleme ve Geri Dönüş",
        "backup",
        "yedek almanın restore başarısıyla anlam kazandığını görmek."
      ],
      [
        "061-felaket-kurtarma.html",
        "Felaket Kurtarma",
        "DR",
        "RPO, RTO, alternatif merkez ve geri dönüş tatbikatını planlamak."
      ],
      [
        "062-is-surekliligi-yonetimi.html",
        "İş Sürekliliği Yönetimi",
        "süreklilik",
        "kritik hizmetlerin kesinti karşısında nasıl sürdürüleceğini yönetmek."
      ],
      [
        "063-operasyon-merkezi-ve-nobet-kulturu.html",
        "Operasyon Merkezi ve Nöbet Kültürü",
        "işletim",
        "7/24 hizmetlerde alarm, nöbet ve eskalasyon düzenini kurmak."
      ],
      [
        "064-canli-sistemlerde-degisiklik-disiplini.html",
        "Canlı Sistemlerde Değişiklik Disiplini",
        "change",
        "çalışan hizmete dokunurken risk ve geri dönüş planını beraber düşünmek."
      ],
      [
        "065-operasyonel-olgunluk-modeli.html",
        "Operasyonel Olgunluk Modeli",
        "olgunluk",
        "altyapı ekibinin kişilere bağımlı olmadan güvenilir hizmet üretmesini sağlamak."
      ]
    ]
  },
  {
    "id": "yazilim-mimari-urun",
    "title": "Yazılım, Mimari ve Ürünleştirme",
    "summary": "Programlama düşüncesinden API tasarımına, frontend ve backend’den kalite, teknik borç ve ürün yönetimine uzanan yazılım rotası.",
    "frame": "Bu bölüm yazılımı yalnız kod yazmak olarak değil, kurum ihtiyacını çalışan, sürdürülebilir ve kullanıcıya değer veren bir ürüne dönüştürme sanatı olarak ele alır.",
    "chapters": [
      [
        "066-programlama-dusuncesi.html",
        "Programlama Düşüncesi",
        "mantık",
        "problemi adımlara ayırıp bilgisayarın anlayacağı düzene çevirmek."
      ],
      [
        "067-programlama-dilleri-nasil-secilir.html",
        "Programlama Dilleri Nasıl Seçilir?",
        "dil seçimi",
        "Python, JavaScript, Java, C# ve benzeri dillerin hangi işlerde öne çıktığını kavramak."
      ],
      [
        "068-degisken-kosul-ve-dongu.html",
        "Değişken, Koşul ve Döngü",
        "kod temeli",
        "programların karar verme ve tekrar etme mantığını öğrenmek."
      ],
      [
        "069-fonksiyon-ve-modul-mantigi.html",
        "Fonksiyon ve Modül Mantığı",
        "kod düzeni",
        "karmaşık işi adı konmuş küçük parçalara ayırmak."
      ],
      [
        "070-nesne-yonelimli-tasarim.html",
        "Nesne Yönelimli Tasarım",
        "sorumluluk",
        "sınıf, nesne, kapsülleme ve sorumluluk paylaşımını kavramak."
      ],
      [
        "071-veri-yapilari-ve-algoritma-sezgisi.html",
        "Veri Yapıları ve Algoritma Sezgisi",
        "performans",
        "veriyi doğru düzende tutmanın hız ve bakım etkisini görmek."
      ],
      [
        "072-hata-yonetimi.html",
        "Hata Yönetimi",
        "dayanıklılık",
        "beklenmeyen durumlarda sistemin anlaşılır ve güvenli davranmasını sağlamak."
      ],
      [
        "073-json-xml-ve-veri-formatlari.html",
        "JSON, XML ve Veri Formatları",
        "veri alışverişi",
        "sistemler arası ortak veri dilini anlamak."
      ],
      [
        "074-api-mantigi.html",
        "API Mantığı",
        "entegrasyon",
        "endpoint, istek, cevap, durum kodu ve sözleşme kavramlarını öğrenmek."
      ],
      [
        "075-rest-api-tasarimi.html",
        "REST API Tasarımı",
        "servis",
        "kaynak, metot, sürümleme, hata ve güvenlik sınırlarını doğru kurmak."
      ],
      [
        "076-graphql-ve-modern-api-yaklasimlari.html",
        "GraphQL ve Modern API Yaklaşımları",
        "API seçimi",
        "istemcinin ihtiyaç duyduğu veriyi esnek biçimde alma yaklaşımını değerlendirmek."
      ],
      [
        "077-backend-katmani.html",
        "Backend Katmanı",
        "iş kuralı",
        "kurum kurallarının uygulama arkasında nasıl yürütüldüğünü görmek."
      ],
      [
        "078-frontend-ve-kullanici-arayuzu.html",
        "Frontend ve Kullanıcı Arayüzü",
        "ekran",
        "HTML, CSS ve JavaScript'in kullanıcıyla kurduğu ilişkiyi anlamak."
      ],
      [
        "079-mobil-uygulama-mantigi.html",
        "Mobil Uygulama Mantığı",
        "mobil hizmet",
        "cihaz, bağlantı, bildirim, oturum ve API bağımlılıklarını görmek."
      ],
      [
        "080-kimlik-ve-oturum-tasarimi.html",
        "Kimlik ve Oturum Tasarımı",
        "uygulama güvenliği",
        "login, token, cookie, session ve yetki kontrolünü uygulama bağlamında okumak."
      ],
      [
        "081-cache-ve-performans.html",
        "Cache ve Performans",
        "hız",
        "önbelleğin hız ile doğruluk arasındaki dengesini anlamak."
      ],
      [
        "082-mesaj-kuyruklari.html",
        "Mesaj Kuyrukları",
        "asenkron akış",
        "uzun süren işleri sıraya alma, retry ve idempotency mantığını kavramak."
      ],
      [
        "083-mikroservis-ve-monolit-ayrimi.html",
        "Mikroservis ve Monolit Ayrımı",
        "mimari karar",
        "küçük servisler ile tek parça uygulama arasındaki yönetim farkını görmek."
      ],
      [
        "084-event-driven-architecture.html",
        "Event-Driven Architecture",
        "olay akışı",
        "sistemlerin olaylar üzerinden gevşek bağlı çalışmasını anlamak."
      ],
      [
        "085-uygulama-mimarisini-okumak.html",
        "Uygulama Mimarisini Okumak",
        "büyük resim",
        "arayüz, backend, veri, güvenlik ve operasyonu tek diyagramda düşünmek."
      ],
      [
        "086-test-kulturu.html",
        "Test Kültürü",
        "kalite",
        "unit, integration, end-to-end ve kabul testlerinin yerini öğrenmek."
      ],
      [
        "087-kod-inceleme-ve-teknik-borc.html",
        "Kod İnceleme ve Teknik Borç",
        "sürdürülebilirlik",
        "çalışan kod ile yaşanabilir kod arasındaki farkı görmek."
      ],
      [
        "088-surum-kontrolu-ve-git.html",
        "Sürüm Kontrolü ve Git",
        "ekip hafızası",
        "commit, branch, pull request ve release mantığını kurumsal hafıza olarak kullanmak."
      ],
      [
        "089-yazilim-kalitesini-yonetmek.html",
        "Yazılım Kalitesini Yönetmek",
        "yönetim",
        "kaliteyi kişisel iyi niyet yerine süreç ve kabul ölçütü haline getirmek."
      ],
      [
        "090-ux-yazimi-ve-kullanici-dili.html",
        "UX Yazımı ve Kullanıcı Dili",
        "deneyim",
        "ekrandaki kelimelerin hizmet kalitesini nasıl etkilediğini görmek."
      ],
      [
        "091-accessibility-ve-kapsayici-tasarim.html",
        "Accessibility ve Kapsayıcı Tasarım",
        "erişilebilirlik",
        "engelli ve farklı kullanıcı grupları için adil dijital hizmet tasarlamak."
      ],
      [
        "092-urun-yonetimi-ile-proje-yonetimi-farki.html",
        "Ürün Yönetimi ile Proje Yönetimi Farkı",
        "ürün bakışı",
        "teslim tarihinden öte sürekli değer üreten ürün düşüncesini anlamak."
      ],
      [
        "093-mvp-pilot-ve-yayginlastirma.html",
        "MVP, Pilot ve Yaygınlaştırma",
        "aşamalı teslim",
        "fikri küçük deneyle doğrulayıp kontrollü büyütmek."
      ],
      [
        "094-legacy-sistemlerle-yasamak.html",
        "Legacy Sistemlerle Yaşamak",
        "eski sistem",
        "kurumun eski ama kritik sistemlerini acele yıkmadan modernize etmek."
      ],
      [
        "095-refactoring-ve-modernizasyon.html",
        "Refactoring ve Modernizasyon",
        "iyileştirme",
        "çalışan sistemi bozmadan iç yapıyı güçlendirme yaklaşımını kavramak."
      ]
    ]
  },
  {
    "id": "veri-analitik-ai",
    "title": "Veri, Analitik ve Yapay Zeka",
    "summary": "Veritabanı, veri yönetişimi, raporlama, karar destek ve yapay zeka sistemlerini aynı değer zinciri içinde anlatan bölüm.",
    "frame": "Bu bölüm veriyi tablo satırlarından çıkarıp kurumun karar alma kası olarak ele alır. Okuyucu burada veri kalitesi, raporlama, yapay zeka ve model yönetişimi arasındaki bağı görür.",
    "chapters": [
      [
        "096-veritabani-nedir.html",
        "Veritabanı Nedir?",
        "veri temeli",
        "kurumsal kayıtların düzenli ve sorgulanabilir biçimde tutulmasını anlamak."
      ],
      [
        "097-tablo-satir-ve-iliski-mantigi.html",
        "Tablo, Satır ve İlişki Mantığı",
        "modelleme",
        "verinin hangi varlığı temsil ettiğini doğru tanımlamak."
      ],
      [
        "098-sql-e-giris.html",
        "SQL'e Giriş",
        "sorgu",
        "veriye açık ve denetlenebilir sorular sormayı öğrenmek."
      ],
      [
        "099-join-ve-iliskisel-dusunme.html",
        "JOIN ve İlişkisel Düşünme",
        "ilişki",
        "tablolar arası bağların rapor sonucunu nasıl değiştirdiğini görmek."
      ],
      [
        "100-index-ve-sorgu-performansi.html",
        "Index ve Sorgu Performansı",
        "hız",
        "arama ve raporlama performansını veri yapısıyla ilişkilendirmek."
      ],
      [
        "101-transaction-ve-veri-butunlugu.html",
        "Transaction ve Veri Bütünlüğü",
        "tutarlılık",
        "bir işlemin ya tam gerçekleşmesi ya da hiç gerçekleşmemesi ilkesini kavramak."
      ],
      [
        "102-postgresql-ile-kurumsal-veri.html",
        "PostgreSQL ile Kurumsal Veri",
        "veritabanı",
        "açık kaynak güçlü veritabanının kurumsal kullanımını anlamak."
      ],
      [
        "103-nosql-mantigi.html",
        "NoSQL Mantığı",
        "esnek veri",
        "belge, key-value ve kolon tabanlı veri yaklaşımlarını ne zaman seçeceğini görmek."
      ],
      [
        "104-veri-kalitesi.html",
        "Veri Kalitesi",
        "güvenilirlik",
        "eksik, yanlış, tekrar eden ve çelişkili verinin karar üzerindeki etkisini görmek."
      ],
      [
        "105-veri-sozlugu.html",
        "Veri Sözlüğü",
        "ortak dil",
        "kurumda aynı kavramın herkes için aynı anlama gelmesini sağlamak."
      ],
      [
        "106-ana-veri-yonetimi.html",
        "Ana Veri Yönetimi",
        "master data",
        "kişi, kurum, ürün, hizmet gibi temel kayıtların tutarlılığını yönetmek."
      ],
      [
        "107-etl-ve-veri-boru-hatlari.html",
        "ETL ve Veri Boru Hatları",
        "akış",
        "verinin kaynaktan rapora giderken nasıl dönüştüğünü anlamak."
      ],
      [
        "108-veri-ambari.html",
        "Veri Ambarı",
        "karar deposu",
        "operasyonel veriyi raporlama ve analiz için düzenlemek."
      ],
      [
        "109-data-lake-mantigi.html",
        "Data Lake Mantığı",
        "geniş veri",
        "farklı türde verileri gelecekteki analizler için saklama yaklaşımını görmek."
      ],
      [
        "110-dashboard-ve-kpi.html",
        "Dashboard ve KPI",
        "gösterge",
        "yönetim panolarının neyi ölçtüğünü ve neyi saklayabileceğini anlamak."
      ],
      [
        "111-raporlama-tuzaklari.html",
        "Raporlama Tuzakları",
        "yorum",
        "güzel grafiğin doğru karar anlamına gelmediğini öğrenmek."
      ],
      [
        "112-veri-katalogu-ve-lineage.html",
        "Veri Kataloğu ve Lineage",
        "izlenebilirlik",
        "bir verinin nereden gelip hangi dönüşümlerden geçtiğini takip etmek."
      ],
      [
        "113-kvkk-acisindan-veri.html",
        "KVKK Açısından Veri",
        "mahremiyet",
        "kişisel verinin teknik sistemlerde nasıl korunacağını kavramak."
      ],
      [
        "114-veri-paylasimi-ve-protokoller.html",
        "Veri Paylaşımı ve Protokoller",
        "kurumlar arası veri",
        "kurumlar arası veri alışverişinin sınırlarını ve kayıtlarını anlamak."
      ],
      [
        "115-karar-destek-sistemleri.html",
        "Karar Destek Sistemleri",
        "analitik yönetim",
        "raporu yönetsel karara bağlayan yaklaşımı kurmak."
      ],
      [
        "116-yapay-zekaya-is-problemiyle-baslamak.html",
        "Yapay Zekaya İş Problemiyle Başlamak",
        "AI stratejisi",
        "modelden önce iyileştirilecek karar veya süreci tanımlamak."
      ],
      [
        "117-veri-hazirligi.html",
        "Veri Hazırlığı",
        "data prep",
        "modelin göreceği veriyi temiz, anlamlı ve ayrılmış hale getirmek."
      ],
      [
        "118-makine-ogrenmesi-mantigi.html",
        "Makine Öğrenmesi Mantığı",
        "ML",
        "veriden örüntü öğrenme ve genelleme fikrini kavramak."
      ],
      [
        "119-derin-ogrenme.html",
        "Derin Öğrenme",
        "DL",
        "sinir ağları, katmanlar ve temsil öğrenme mantığını anlamak."
      ],
      [
        "120-model-degerlendirme.html",
        "Model Değerlendirme",
        "ölçüm",
        "doğruluk, hata, bias ve canlı performansı birlikte değerlendirmek."
      ],
      [
        "121-mlops.html",
        "MLOps",
        "model işletimi",
        "modelin sürüm, izleme ve geri bildirim döngüsünü kurmak."
      ],
      [
        "122-llm-temelleri.html",
        "LLM Temelleri",
        "dil modeli",
        "büyük dil modellerinin neyi iyi yaptığını ve nerede yanılabileceğini anlamak."
      ],
      [
        "123-token-ve-embedding.html",
        "Token ve Embedding",
        "metin temsili",
        "metni parçalara ve anlam yakınlıklarına dönüştürmek."
      ],
      [
        "124-vektor-veritabani.html",
        "Vektör Veritabanı",
        "arama",
        "anlam benzerliğiyle belge ve bilgi aramayı desteklemek."
      ],
      [
        "125-rag-mimarisi.html",
        "RAG Mimarisi",
        "kurumsal bilgi",
        "modeli kurum belgeleriyle kaynaklı cevap verecek hale getirmek."
      ],
      [
        "126-prompt-tasarimi.html",
        "Prompt Tasarımı",
        "talimat",
        "modele bağlam, sınır ve çıktı biçimi vermek."
      ],
      [
        "127-function-calling.html",
        "Function Calling",
        "araç kullanımı",
        "modelin tanımlı araçlarla güvenli işlem yapmasını sağlamak."
      ],
      [
        "128-ajan-sistemleri.html",
        "Ajan Sistemleri",
        "AI ajan",
        "araç kullanan, planlayan ve adım atan sistemlerin risklerini anlamak."
      ],
      [
        "129-ai-guvenligi.html",
        "AI Güvenliği",
        "prompt injection",
        "modelin okuduğu metinle talimat sınırını karıştırmasını önlemek."
      ],
      [
        "130-ai-yonetisimi.html",
        "AI Yönetişimi",
        "sorumlu AI",
        "model riskini, insan onayını ve denetlenebilirliği yönetmek."
      ]
    ]
  },
  {
    "id": "siber-risk-dayaniklilik",
    "title": "Siber Güvenlik, Risk ve Dayanıklılık",
    "summary": "Kimlik, ağ güvenliği, uygulama güvenliği, SOC, olay müdahalesi ve kurumsal risk programını birlikte ele alan güvenlik rotası.",
    "frame": "Bu bölüm güvenliği korku diliyle değil, varlık, tehdit, zafiyet, etki, kontrol ve kurumsal dayanıklılık diliyle anlatır. Amaç yöneticinin güvenliği araç alımı değil sürekli risk yönetimi olarak görmesini sağlamaktır.",
    "chapters": [
      [
        "131-siber-guvenlige-risk-olarak-bakmak.html",
        "Siber Güvenliğe Risk Olarak Bakmak",
        "risk",
        "güvenliği korku değil ölçülebilir risk diliyle ele almak."
      ],
      [
        "132-varlik-envanteri.html",
        "Varlık Envanteri",
        "varlık",
        "neyi koruduğunu bilmeden güvenlik kurulamayacağını anlamak."
      ],
      [
        "133-tehdit-zafiyet-ve-etki.html",
        "Tehdit, Zafiyet ve Etki",
        "risk modeli",
        "güvenlik riskini bileşenlerine ayırmak."
      ],
      [
        "134-kimlik-ve-erisim-yonetimi.html",
        "Kimlik ve Erişim Yönetimi",
        "IAM",
        "kimin hangi sisteme hangi yetkiyle erişeceğini yönetmek."
      ],
      [
        "135-mfa-ve-sso.html",
        "MFA ve SSO",
        "giriş güvenliği",
        "parola riskini azaltan ve deneyimi sadeleştiren yaklaşımları anlamak."
      ],
      [
        "136-ayricalikli-hesap-yonetimi.html",
        "Ayrıcalıklı Hesap Yönetimi",
        "PAM",
        "kritik yetkilerin kayıtlı, süreli ve denetlenebilir olmasını sağlamak."
      ],
      [
        "137-firewall-ve-ag-siniri.html",
        "Firewall ve Ağ Sınırı",
        "güvenlik duvarı",
        "firewall, kural seti, segmentasyon ve ağ geçişlerini anlaşılır örneklerle okumak."
      ],
      [
        "138-zero-trust.html",
        "Zero Trust",
        "modern güven",
        "iç ağ varsayımına güvenmeden kimlik ve bağlamla karar vermek."
      ],
      [
        "139-waf-ve-uygulama-siniri.html",
        "WAF ve Uygulama Sınırı",
        "web güvenliği",
        "web uygulamalarını yaygın saldırı desenlerine karşı korumak."
      ],
      [
        "140-owasp-ve-guvenli-kod.html",
        "OWASP ve Güvenli Kod",
        "uygulama güvenliği",
        "sık görülen web güvenliği hatalarını süreç içinde azaltmak."
      ],
      [
        "141-sast-dast-ve-dependency-taramasi.html",
        "SAST, DAST ve Dependency Taraması",
        "güvenli SDLC",
        "güvenlik testlerini geliştirme yaşam döngüsüne eklemek."
      ],
      [
        "142-endpoint-guvenligi.html",
        "Endpoint Güvenliği",
        "uç nokta",
        "cihazların güncel, izlenebilir ve korunabilir olmasını sağlamak."
      ],
      [
        "143-edr-ve-xdr-mantigi.html",
        "EDR ve XDR Mantığı",
        "tehdit görünürlüğü",
        "uç nokta ve ağ davranışından saldırı izlerini yakalamayı anlamak."
      ],
      [
        "144-siem-mantigi.html",
        "SIEM Mantığı",
        "log korelasyonu",
        "loglardan anlamlı güvenlik uyarısı üretmek."
      ],
      [
        "145-soc-operasyonu.html",
        "SOC Operasyonu",
        "güvenlik izleme",
        "alarmdan olaya giden karar hattını yönetmek."
      ],
      [
        "146-olay-mudahalesi.html",
        "Olay Müdahalesi",
        "incident response",
        "tespit, çevreleme, temizleme, kurtarma ve ders çıkarma akışını kurmak."
      ],
      [
        "147-siber-kriz-iletisimi.html",
        "Siber Kriz İletişimi",
        "iletişim",
        "teknik olayın yönetim, hukuk ve kamu iletişimi boyutunu ele almak."
      ],
      [
        "148-veri-sizintisi-yonetimi.html",
        "Veri Sızıntısı Yönetimi",
        "veri ihlali",
        "ihlal şüphesinde kanıt, bildirim ve azaltma planını yönetmek."
      ],
      [
        "149-guvenlik-farkindaligi.html",
        "Güvenlik Farkındalığı",
        "insan faktörü",
        "personelin günlük davranışlarını güvenlik kültürüne bağlamak."
      ],
      [
        "150-denetim-ve-uyum.html",
        "Denetim ve Uyum",
        "kontrol",
        "güvenlik kontrollerini denetlenebilir kanıtlarla izlemek."
      ],
      [
        "151-iso-27001-ve-bgys-mantigi.html",
        "ISO 27001 ve BGYS Mantığı",
        "standart",
        "bilgi güvenliği yönetim sisteminin kurumda neyi disipline ettiğini anlamak."
      ],
      [
        "152-nist-csf-ile-guvenlik-olgunlugu.html",
        "NIST CSF ile Güvenlik Olgunluğu",
        "çerçeve",
        "identify, protect, detect, respond ve recover mantığını kullanmak."
      ],
      [
        "153-risk-kabulu-ve-istisna-yonetimi.html",
        "Risk Kabulü ve İstisna Yönetimi",
        "risk kararı",
        "her riskin kapatılamayacağını ama kayıtsız da bırakılamayacağını görmek."
      ],
      [
        "154-tedarikci-guvenligi.html",
        "Tedarikçi Güvenliği",
        "üçüncü taraf",
        "dış hizmetlerin kurum riskine nasıl dönüştüğünü değerlendirmek."
      ],
      [
        "155-bulut-guvenligi.html",
        "Bulut Güvenliği",
        "cloud security",
        "bulut kaynaklarında kimlik, ağ, log ve veri güvenliğini yönetmek."
      ],
      [
        "156-konteyner-ve-kubernetes-guvenligi.html",
        "Konteyner ve Kubernetes Güvenliği",
        "platform güvenliği",
        "imaj, secret, network policy ve runtime risklerini anlamak."
      ],
      [
        "157-e-posta-guvenligi-ve-sosyal-muhendislik.html",
        "E-posta Güvenliği ve Sosyal Mühendislik",
        "insan hedefi",
        "phishing ve aldatma tekniklerine karşı kurumsal refleks geliştirmek."
      ],
      [
        "158-dlp-ve-veri-siniflandirma.html",
        "DLP ve Veri Sınıflandırma",
        "veri koruma",
        "hangi verinin nereden çıkamayacağını belirlemek."
      ],
      [
        "159-kriptografi-ve-anahtar-yonetimi.html",
        "Kriptografi ve Anahtar Yönetimi",
        "şifreleme",
        "şifrelemenin yalnız algoritma değil anahtar disiplini olduğunu görmek."
      ],
      [
        "160-guvenlik-mimarisi.html",
        "Güvenlik Mimarisi",
        "tasarım",
        "kontrolleri sonradan eklemek yerine mimarinin içine yerleştirmek."
      ],
      [
        "161-siber-guvenlik-programini-yonetmek.html",
        "Siber Güvenlik Programını Yönetmek",
        "liderlik",
        "araç, süreç, insan ve bütçeyi bütünleşik güvenlik programına dönüştürmek."
      ],
      [
        "162-kirmizi-takim-mavi-takim-ve-tatbikat.html",
        "Kırmızı Takım, Mavi Takım ve Tatbikat",
        "hazırlık",
        "kurumun saldırı ve savunma refleksini kontrollü biçimde sınamak."
      ],
      [
        "163-siber-sigorta-ve-finansal-risk.html",
        "Siber Sigorta ve Finansal Risk",
        "mali etki",
        "güvenlik olaylarının bütçe ve sorumluluk tarafını değerlendirmek."
      ],
      [
        "164-ulusal-siber-ekosistem.html",
        "Ulusal Siber Ekosistem",
        "ülke ölçeği",
        "sektörel ve ulusal güvenlik sorumluluklarını kurum ölçeğiyle bağlamak."
      ],
      [
        "165-dayanikli-guvenlik-kulturu.html",
        "Dayanıklı Güvenlik Kültürü",
        "kültür",
        "güvenliği tek ekibin işi olmaktan çıkarıp kurumsal davranışa dönüştürmek."
      ]
    ]
  },
  {
    "id": "kamu-mevzuat-isleyis",
    "title": "Kamu İşleyişi, Mevzuat ve Resmi Süreçler",
    "summary": "Kamu kurumunda hiyerarşi, resmi yazı, ihale, şartname, komisyon, kabul, ödeme, arşiv ve denetim düzenini anlatan bölüm.",
    "frame": "Bu bölüm teknoloji yöneticisinin kamu zeminini öğrenmesi içindir. Kamu kurumunda iyi fikir tek başına yetmez; yetki, yazı, onay, komisyon, bütçe, sözleşme ve denetim izi doğru kurulmalıdır.",
    "chapters": [
      [
        "166-kamu-kurumunun-calisma-mantigi.html",
        "Kamu Kurumunun Çalışma Mantığı",
        "idari yapı",
        "hiyerarşi, yetki, görev ve kayıt düzenini anlamak."
      ],
      [
        "167-merkez-ve-tasra-isleyisi.html",
        "Merkez ve Taşra İşleyişi",
        "örgüt",
        "farklı teşkilat yapılarının teknoloji projelerine etkisini görmek."
      ],
      [
        "168-resmi-yazi-kulturu.html",
        "Resmi Yazı Kültürü",
        "yazışma",
        "talep, görüş, bilgilendirme ve karar yazılarının önemini kavramak."
      ],
      [
        "169-makam-oluru.html",
        "Makam Oluru",
        "onay",
        "hangi kararların yetkili makam onayı gerektirdiğini anlamak."
      ],
      [
        "170-yetki-devri-ve-sorumluluk.html",
        "Yetki Devri ve Sorumluluk",
        "idari yetki",
        "kararı kimin alabileceğini ve kimin uygulayacağını ayırmak."
      ],
      [
        "171-komisyon-mantigi.html",
        "Komisyon Mantığı",
        "ortak karar",
        "ihale, kabul, değerlendirme ve inceleme komisyonlarının rolünü görmek."
      ],
      [
        "172-ihale-sureci.html",
        "İhale Süreci",
        "kamu alımı",
        "rekabet, saydamlık, eşit muamele ve ihtiyaç teminini anlamak."
      ],
      [
        "173-yaklasik-maliyet-ve-piyasa-arastirmasi.html",
        "Yaklaşık Maliyet ve Piyasa Araştırması",
        "maliyet",
        "alım öncesi mali gerçekliği ve bütçe zeminini hazırlamak."
      ],
      [
        "174-idari-sartname.html",
        "İdari Şartname",
        "ihale dokümanı",
        "teknik ihtiyaç dışındaki idari koşulları anlamak."
      ],
      [
        "175-teknik-sartname.html",
        "Teknik Şartname",
        "gereksinim",
        "ihtiyacı ölçülebilir teknik dile çevirmek."
      ],
      [
        "176-sozlesme-yonetimi.html",
        "Sözleşme Yönetimi",
        "bağlayıcılık",
        "teslim, destek, ceza, bakım ve sorumlulukların yazılı çerçevesini yönetmek."
      ],
      [
        "177-sla-ve-bakim-maddeleri.html",
        "SLA ve Bakım Maddeleri",
        "hizmet seviyesi",
        "destek süresi, müdahale, çözüm ve bakım beklentilerini netleştirmek."
      ],
      [
        "178-muayene-ve-kabul.html",
        "Muayene ve Kabul",
        "teslim",
        "teslim edilen işin şartnameye uygunluğunu kanıtla değerlendirmek."
      ],
      [
        "179-kabul-komisyonu-hazirligi.html",
        "Kabul Komisyonu Hazırlığı",
        "kanıt dosyası",
        "test, rapor, lisans, eğitim ve doküman kanıtlarını düzenlemek."
      ],
      [
        "180-hakedis-ve-odeme-sureci.html",
        "Hakediş ve Ödeme Süreci",
        "mali işleyiş",
        "teslim edilen iş, kabul kanıtı ve ödeme kararının aynı çizgide buluşması."
      ],
      [
        "181-denetim-izi.html",
        "Denetim İzi",
        "hesap verebilirlik",
        "işlemlerin sonradan izlenebilir ve açıklanabilir kalmasını sağlamak."
      ],
      [
        "182-arsiv-ve-saklama-sureleri.html",
        "Arşiv ve Saklama Süreleri",
        "kurumsal hafıza",
        "belge ve verilerin mevzuata uygun saklanmasını yönetmek."
      ],
      [
        "183-kvkk-ve-kamu-verisi.html",
        "KVKK ve Kamu Verisi",
        "hukuki uyum",
        "kişisel veriyi kamu hizmeti içinde sorumlu biçimde işlemek."
      ],
      [
        "184-kurumlar-arasi-protokol.html",
        "Kurumlar Arası Protokol",
        "iş birliği",
        "veri ve hizmet paylaşımını resmi zemine oturtmak."
      ],
      [
        "185-butce-hazirligi-ve-odenek-yonetimi.html",
        "Bütçe Hazırlığı ve Ödenek Yönetimi",
        "bütçe",
        "teknoloji ihtiyacını mali planlama takvimiyle ilişkilendirmek."
      ],
      [
        "186-tasinir-lisans-ve-varlik-kaydi.html",
        "Taşınır, Lisans ve Varlık Kaydı",
        "kayıt",
        "alınan ürünün kurum envanterine doğru girmesini sağlamak."
      ],
      [
        "187-kamu-personeli-ve-gorev-tanimi.html",
        "Kamu Personeli ve Görev Tanımı",
        "insan kaynağı",
        "rol, sorumluluk ve vekalet düzeninin teknoloji işlerine etkisini görmek."
      ],
      [
        "188-ic-kontrol-ve-risk-yonetimi.html",
        "İç Kontrol ve Risk Yönetimi",
        "kontrol",
        "kamu süreçlerinde risk ve kontrol dilini teknolojiye bağlamak."
      ],
      [
        "189-sayistay-ve-denetime-hazirlik.html",
        "Sayıştay ve Denetime Hazırlık",
        "denetim",
        "teknoloji kararlarını sonradan açıklanabilir kanıtlarla desteklemek."
      ],
      [
        "190-yazisma-ile-teknik-karar-arasindaki-bag.html",
        "Yazışma ile Teknik Karar Arasındaki Bağ",
        "tercüme",
        "teknik ihtiyacın resmi yazıda nasıl karşılık bulduğunu görmek."
      ],
      [
        "191-kamu-surecini-teknoloji-projesine-baglamak.html",
        "Kamu Sürecini Teknoloji Projesine Bağlamak",
        "bütünlük",
        "idari süreç ile teknik teslimi aynı plan içinde yönetmek."
      ],
      [
        "192-bilgi-edinme-cimer-ve-vatandas-talebi.html",
        "Bilgi Edinme, CİMER ve Vatandaş Talebi",
        "kamusal temas",
        "dijital hizmetin vatandaş geri bildirimiyle nasıl yüzleştiğini anlamak."
      ],
      [
        "193-mevzuat-degisikligini-sisteme-yansitmak.html",
        "Mevzuat Değişikliğini Sisteme Yansıtmak",
        "uyum",
        "kanun ve yönetmelik değişikliklerinin yazılım ve süreçlere etkisini yönetmek."
      ],
      [
        "194-kamu-etik-ilkeleri-ve-cikar-catismasi.html",
        "Kamu Etik İlkeleri ve Çıkar Çatışması",
        "etik",
        "teknoloji kararlarında tarafsızlık ve kamu yararı ilkesini korumak."
      ],
      [
        "195-kamu-hafizasi-ve-kurumsal-devamlilik.html",
        "Kamu Hafızası ve Kurumsal Devamlılık",
        "hafıza",
        "kişiler değişse de kurum bilgisinin ayakta kalmasını sağlamak."
      ]
    ]
  },
  {
    "id": "proje-program-portfoy",
    "title": "BT Proje, Program ve Portföy Yönetimi",
    "summary": "Proje başlatmadan kabul ve portföy kararlarına kadar teknoloji işlerini zaman, kapsam, risk, tedarikçi ve değer ekseninde yöneten rota.",
    "frame": "Bu bölüm proje yöneticisini yalnız takvim takip eden kişi olmaktan çıkarıp karmaşık teknoloji işlerini ölçülebilir, savunulabilir ve kuruma değer üreten teslimlere dönüştüren kişiye hazırlar.",
    "chapters": [
      [
        "196-bt-proje-yoneticisinin-rolu.html",
        "BT Proje Yöneticisinin Rolü",
        "rol",
        "proje yöneticisinin teknik, idari ve iletişim sorumluluklarını kavramak."
      ],
      [
        "197-proje-baslatma.html",
        "Proje Başlatma",
        "başlangıç",
        "amaç, kapsam, paydaş ve başarı ölçütünü baştan netleştirmek."
      ],
      [
        "198-is-analizi.html",
        "İş Analizi",
        "ihtiyaç",
        "istek ile gerçek gereksinimi ayırmak."
      ],
      [
        "199-paydas-analizi.html",
        "Paydaş Analizi",
        "ilişki",
        "kim etkilenir, kim karar verir, kim uygulanır sorularını yanıtlamak."
      ],
      [
        "200-raci-matrisi.html",
        "RACI Matrisi",
        "sorumluluk",
        "responsible, accountable, consulted ve informed rollerini netleştirmek."
      ],
      [
        "201-kapsam-yonetimi.html",
        "Kapsam Yönetimi",
        "sınır",
        "projenin neyi içerip neyi içermediğini yönetmek."
      ],
      [
        "202-is-kirilim-yapisi.html",
        "İş Kırılım Yapısı",
        "plan",
        "büyük işi yönetilebilir parçalara ayırmak."
      ],
      [
        "203-zaman-plani.html",
        "Zaman Planı",
        "takvim",
        "bağımlılıkları ve kritik yolu görünür hale getirmek."
      ],
      [
        "204-kaynak-planlama.html",
        "Kaynak Planlama",
        "kapasite",
        "insan, bütçe, ortam ve tedarik ihtiyaçlarını planlamak."
      ],
      [
        "205-risk-yonetimi.html",
        "Risk Yönetimi",
        "belirsizlik",
        "olası sorunları etki ve azaltma planıyla takip etmek."
      ],
      [
        "206-sorun-yonetimi.html",
        "Sorun Yönetimi",
        "engel",
        "gerçekleşmiş problemleri sahip ve tarih ile yönetmek."
      ],
      [
        "207-degisiklik-yonetimi.html",
        "Değişiklik Yönetimi",
        "kapsam kontrolü",
        "yeni taleplerin süre, maliyet, kalite ve sözleşme etkisini görmek."
      ],
      [
        "208-toplanti-yonetimi.html",
        "Toplantı Yönetimi",
        "ritim",
        "gündem, karar, aksiyon ve takip düzeni kurmak."
      ],
      [
        "209-tutanak-yazma.html",
        "Tutanak Yazma",
        "kayıt",
        "kararları ve sorumlulukları kurumsal hafızaya geçirmek."
      ],
      [
        "210-durum-raporu.html",
        "Durum Raporu",
        "raporlama",
        "üst yönetime sade, doğru ve karar odaklı bilgi sunmak."
      ],
      [
        "211-test-ve-kabul-plani.html",
        "Test ve Kabul Planı",
        "kalite",
        "teslim kanıtlarını proje sonuna bırakmadan hazırlamak."
      ],
      [
        "212-canliya-gecis-plani.html",
        "Canlıya Geçiş Planı",
        "geçiş",
        "kesinti, eğitim, destek ve geri dönüş planını kurmak."
      ],
      [
        "213-tedarikci-yonetimi.html",
        "Tedarikçi Yönetimi",
        "dış ekip",
        "yüklenici performansını sözleşme ve kanıtla takip etmek."
      ],
      [
        "214-agile-scrum-ve-kamu-gercekligi.html",
        "Agile, Scrum ve Kamu Gerçekliği",
        "çevik uyum",
        "çevik yöntemleri kamu süreci ve sözleşme düzeniyle uyumlu düşünmek."
      ],
      [
        "215-waterfall-hibrit-ve-teslim-modeli-secimi.html",
        "Waterfall, Hibrit ve Teslim Modeli Seçimi",
        "yöntem",
        "işin belirsizliğine göre proje yaklaşımını seçmek."
      ],
      [
        "216-kabul-kriteri-yazmak.html",
        "Kabul Kriteri Yazmak",
        "kanıt",
        "başarının yoruma değil ölçülebilir kanıta dayanmasını sağlamak."
      ],
      [
        "217-kalite-guvencesi-ve-qa-yonetimi.html",
        "Kalite Güvencesi ve QA Yönetimi",
        "kalite",
        "testten önce kalite düşüncesini proje akışına yerleştirmek."
      ],
      [
        "218-proje-finansmani-ve-maliyet-takibi.html",
        "Proje Finansmanı ve Maliyet Takibi",
        "finans",
        "bütçe, hakediş, değişiklik ve bakım maliyetini birlikte izlemek."
      ],
      [
        "219-proje-iletisim-plani.html",
        "Proje İletişim Planı",
        "iletişim",
        "doğru bilginin doğru kişiye doğru zamanda ulaşmasını sağlamak."
      ],
      [
        "220-eskalasyon-ve-karar-merdiveni.html",
        "Eskalasyon ve Karar Merdiveni",
        "karar",
        "çözülemeyen konunun hangi seviyede nasıl karara bağlanacağını bilmek."
      ],
      [
        "221-program-yonetimi.html",
        "Program Yönetimi",
        "çoklu proje",
        "birbiriyle ilişkili projeleri ortak hedef etrafında yönetmek."
      ],
      [
        "222-portfoy-yonetimi.html",
        "Portföy Yönetimi",
        "öncelik",
        "projeleri değer, risk, kaynak ve stratejiye göre sıralamak."
      ],
      [
        "223-pmo-kurmak.html",
        "PMO Kurmak",
        "ofis",
        "proje yönetim disiplinini kişilere bağlı olmaktan çıkarmak."
      ],
      [
        "224-proje-sonrasi-deger-olcumu.html",
        "Proje Sonrası Değer Ölçümü",
        "değer",
        "teslim edilen işin gerçekten beklenen faydayı üretip üretmediğini ölçmek."
      ],
      [
        "225-zor-projeyi-kurtarma.html",
        "Zor Projeyi Kurtarma",
        "müdahale",
        "dağılmış işi suçlamadan yeniden planlanabilir hale getirmek."
      ]
    ]
  },
  {
    "id": "strateji-liderlik-kurumsal-yonetim",
    "title": "Strateji, Liderlik ve Kurumsal Yönetim",
    "summary": "Üst düzey kamu ve teknoloji yöneticiliği için strateji, yönetişim, bütçe, ekip, kültür, kriz, etik ve ulusal teknoloji ekosistemini bir araya getirir.",
    "frame": "Bu bölüm teknik bilgiyi karar, insan, bütçe, tedarik, kültür ve üst makam diliyle birleştirir. Amaç yalnız iyi proje yapan değil, kurumu teknolojiyle daha akıllı yöneten lider bakışı kurmaktır.",
    "chapters": [
      [
        "226-bt-stratejisi.html",
        "BT Stratejisi",
        "strateji",
        "teknoloji yatırımlarını kurum hedefleriyle ilişkilendirmek."
      ],
      [
        "227-yol-haritasi-hazirlama.html",
        "Yol Haritası Hazırlama",
        "planlama",
        "kısa, orta ve uzun vadeli teknoloji adımlarını kurmak."
      ],
      [
        "228-bt-yonetisimi.html",
        "BT Yönetişimi",
        "governance",
        "karar, standart, sorumluluk ve denetim düzeni kurmak."
      ],
      [
        "229-kurumsal-mimari.html",
        "Kurumsal Mimari",
        "mimari",
        "iş, veri, uygulama ve altyapı katmanlarını birlikte okumak."
      ],
      [
        "230-standart-ve-politika-yonetimi.html",
        "Standart ve Politika Yönetimi",
        "standart",
        "teknoloji kullanımında ortak kurallar oluşturmak."
      ],
      [
        "231-dokumantasyon-yonetimi.html",
        "Dokümantasyon Yönetimi",
        "hafıza",
        "kurumsal bilgiyi kişilere bağımlı olmaktan çıkarmak."
      ],
      [
        "232-teknik-borc-yonetimi.html",
        "Teknik Borç Yönetimi",
        "borç",
        "ertelenmiş teknik sorunların maliyetini görünür kılmak."
      ],
      [
        "233-lisans-yonetimi.html",
        "Lisans Yönetimi",
        "lisans",
        "yazılım haklarını, kullanımını ve yenileme risklerini yönetmek."
      ],
      [
        "234-bt-butcesi.html",
        "BT Bütçesi",
        "finans",
        "yatırım, bakım, lisans, bulut ve insan kaynağı maliyetlerini planlamak."
      ],
      [
        "235-finops.html",
        "FinOps",
        "bulut finansı",
        "bulut tüketimini mali disiplinle kontrol etmek."
      ],
      [
        "236-tedarik-stratejisi.html",
        "Tedarik Stratejisi",
        "satın alma",
        "ne içeride yapılır, ne dışarıdan alınır sorusunu stratejik cevaplamak."
      ],
      [
        "237-vendor-lock-in.html",
        "Vendor Lock-in",
        "bağımlılık",
        "tedarikçi ve platform bağımlılığını erken görmek."
      ],
      [
        "238-dijital-egemenlik.html",
        "Dijital Egemenlik",
        "stratejik bağımsızlık",
        "kritik veri, altyapı ve yazılım bağımlılıklarını yönetmek."
      ],
      [
        "239-acik-kaynak-politikasi.html",
        "Açık Kaynak Politikası",
        "ekosistem",
        "açık kaynak kullanımını risk ve katkı çerçevesinde değerlendirmek."
      ],
      [
        "240-hizmet-katalogu.html",
        "Hizmet Kataloğu",
        "BT hizmetleri",
        "BT'nin sunduğu hizmetleri anlaşılır ve yönetilebilir hale getirmek."
      ],
      [
        "241-sla-yonetimi.html",
        "SLA Yönetimi",
        "hizmet seviyesi",
        "hizmet beklentilerini ölçülebilir taahhütlere bağlamak."
      ],
      [
        "242-kpi-ve-okr-kullanimi.html",
        "KPI ve OKR Kullanımı",
        "performans",
        "BT başarısını doğru göstergelerle izlemek."
      ],
      [
        "243-yonetim-kurulu-ve-ust-makam-sunumu.html",
        "Yönetim Kurulu ve Üst Makam Sunumu",
        "iletişim",
        "teknik konuyu karar verilebilir yönetim diline çevirmek."
      ],
      [
        "244-mevzuat-ve-teknoloji-stratejisi.html",
        "Mevzuat ve Teknoloji Stratejisi",
        "uyum",
        "stratejiyi hukuki ve idari sınırlarla birlikte düşünmek."
      ],
      [
        "245-bt-degerini-kanitlamak.html",
        "BT Değerini Kanıtlamak",
        "değer",
        "teknoloji yatırımını kamu hizmeti, risk ve verimlilik çıktılarıyla göstermek."
      ],
      [
        "246-teknik-liderlikten-kurumsal-liderlige.html",
        "Teknik Liderlikten Kurumsal Liderliğe",
        "liderlik",
        "uzmanlıktan stratejik sorumluluğa geçişi anlamak."
      ],
      [
        "247-ekip-kurmak.html",
        "Ekip Kurmak",
        "insan",
        "farklı uzmanlıkları ortak hizmet hedefinde buluşturmak."
      ],
      [
        "248-yetenek-gelistirme.html",
        "Yetenek Geliştirme",
        "kapasite",
        "ekibin öğrenme ve yedeklilik kapasitesini büyütmek."
      ],
      [
        "249-bilgiyi-tek-kisiye-hapsetmemek.html",
        "Bilgiyi Tek Kişiye Hapsetmemek",
        "dayanıklılık",
        "kritik bilgiyi dokümantasyon ve paylaşım kültürüyle yaymak."
      ],
      [
        "250-kurum-kulturu-ve-degisim.html",
        "Kurum Kültürü ve Değişim",
        "kültür",
        "teknoloji değişimini insan alışkanlıklarıyla birlikte yönetmek."
      ],
      [
        "251-dijital-donusum-liderligi.html",
        "Dijital Dönüşüm Liderliği",
        "dönüşüm",
        "süreçleri yalnız dijitale taşımak yerine yeniden düşünmek."
      ],
      [
        "252-kriz-aninda-ilk-60-dakika.html",
        "Kriz Anında İlk 60 Dakika",
        "kriz",
        "rol, iletişim, kanıt ve karar düzenini hızla kurmak."
      ],
      [
        "253-kriz-sonrasi-ogrenme.html",
        "Kriz Sonrası Öğrenme",
        "iyileştirme",
        "olay raporunu suçlama değil kalıcı gelişim aracına çevirmek."
      ],
      [
        "254-ust-makama-teknik-konu-anlatmak.html",
        "Üst Makama Teknik Konu Anlatmak",
        "karar dili",
        "teknik ayrıntıyı etki, risk ve seçenek diline çevirmek."
      ],
      [
        "255-kamuoyu-ve-paydas-iletisimi.html",
        "Kamuoyu ve Paydaş İletişimi",
        "iletişim",
        "kesinti, veri ihlali veya büyük değişimde güven veren dil kurmak."
      ],
      [
        "256-etik-ve-kamu-sorumlulugu.html",
        "Etik ve Kamu Sorumluluğu",
        "etik",
        "teknolojinin hak, mahremiyet ve adalet boyutunu yönetmek."
      ],
      [
        "257-karar-alma-disiplini.html",
        "Karar Alma Disiplini",
        "karar",
        "hız, risk, kanıt ve geri dönüş yolunu birlikte düşünmek."
      ],
      [
        "258-muzakere-ve-catisma-yonetimi.html",
        "Müzakere ve Çatışma Yönetimi",
        "ilişki",
        "tedarikçi, birim ve üst yönetim arasında sağlıklı uzlaşma kurmak."
      ],
      [
        "259-kisisel-ogrenme-sistemi.html",
        "Kişisel Öğrenme Sistemi",
        "öğrenme",
        "yöneticinin kendi gelişimini sürekli ve bilinçli yönetmesi."
      ],
      [
        "260-teknoloji-trendlerini-okumak.html",
        "Teknoloji Trendlerini Okumak",
        "gelecek",
        "moda ile stratejik fırsatı ayırmak."
      ],
      [
        "261-yapay-zeka-caginda-liderlik.html",
        "Yapay Zeka Çağında Liderlik",
        "AI liderliği",
        "AI'nin ekip, süreç, etik ve verimlilik etkilerini yönetmek."
      ],
      [
        "262-surdurulebilirlik-ve-enerji.html",
        "Sürdürülebilirlik ve Enerji",
        "yeşil BT",
        "veri merkezi, bulut ve donanım kararlarını enerji etkisiyle düşünmek."
      ],
      [
        "263-ulusal-teknoloji-ekosistemi.html",
        "Ulusal Teknoloji Ekosistemi",
        "ekosistem",
        "yerli üretim, üniversite, özel sektör ve kamu iş birliğini değerlendirmek."
      ],
      [
        "264-kamu-bt-liderinin-ilk-100-gunu.html",
        "Kamu BT Liderinin İlk 100 Günü",
        "başlangıç planı",
        "kritik sistem, risk, ekip, bütçe ve proje fotoğrafını hızla çıkarmak."
      ],
      [
        "265-from-zero-to-hero-kisisel-yol-haritasi.html",
        "From Zero to Hero Kişisel Yol Haritası",
        "kişisel rota",
        "temelden üst düzey liderliğe uzanan öğrenme ve uygulama planını tamamlamak."
      ]
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
  let response;
  try {
    response = await fetch(chapter.articlePath, { cache: "no-store" });
  } catch (error) {
    const hint =
      location.protocol === "file:"
        ? "Makale dosyası tarayıcı tarafından engellendi. Siteyi dosyaya çift tıklayarak değil, https://taylanalin.github.io/ adresinden ya da yerel bir web sunucusu üzerinden açmalısınız."
        : "Makale dosyası şu an yüklenemedi. Sayfayı yenileyin; sorun sürerse tarayıcı önbelleğini temizleyip tekrar deneyin.";
    throw new Error(hint);
  }
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
          <strong>8 büyük rota, 265 bağımsız sayfa, tek yönetici bakışı.</strong>
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

  const progress = Math.max(1, Math.round(((route.index + 1) / chapters.length) * 100));
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
