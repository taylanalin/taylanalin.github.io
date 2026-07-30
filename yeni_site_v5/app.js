const book = {
  title: "Kamu BT Liderliği Akademisi",
  kicker: "Sıfırdan Üst Düzey Kamu Teknoloji Yöneticiliğine",
  subtitle:
    "Bilgisayar temellerinden kamu ihalesine, siber güvenlikten yapay zekaya, proje yöneticiliğinden stratejik teknoloji liderliğine uzanan 200 başlıklı bütünleşik rota.",
  promise:
    "Bu rehber, bilgi teknolojileri alanında yalnız teknik bilen değil; kamu kurumunun işleyişini, proje teslim disiplinini, resmi süreçleri, bütçeyi, tedariki, güvenliği, veriyi, yapay zekayı ve üst düzey karar dilini birlikte taşıyabilecek yönetici adayları için tasarlandı."
};

const categoryDefinitions = [
  {
    id: "temel-okuryazarlik",
    title: "Temel BT Okuryazarlığı",
    summary: "Bilgisayar, işletim sistemi, ağ, web, dosya, terminal ve temel sistem düşüncesi.",
    frame:
      "Bu üst başlıkta amaç, teknoloji dünyasına ilk kez giren kişinin zemini sağlam kurmasıdır. Buradaki her konu daha sonra proje, güvenlik, veri, bulut ve yönetim kararlarına temel oluşturur.",
    chapters: [
      ["Bilgi Teknolojilerine Büyük Resimden Bakmak", "alan haritası", "BT'nin kurum içinde bilgi, hizmet, süreç ve karar üretimini nasıl taşıdığını anlamak."],
      ["Bilgisayarın İç Düzeni", "donanım", "CPU, RAM, disk, anakart ve güç bileşenlerini hizmet sürekliliği açısından okumak."],
      ["İşletim Sisteminin Görevi", "sistem", "süreç, bellek, dosya sistemi, sürücü ve servis mantığını kavramak."],
      ["Dosya Sistemi ve Klasör Düzeni", "dosya", "kurumsal kayıtların nerede durduğunu ve nasıl yönetildiğini anlamak."],
      ["Kullanıcı, Grup ve Yetki Mantığı", "erişim", "göreve göre erişim ilkesinin teknik temellerini öğrenmek."],
      ["Terminal ve Komut Satırı Kültürü", "kanıt", "sisteme kısa komutlarla soru sorma ve çıktıdan kanıt üretme alışkanlığı kazanmak."],
      ["Log Okumaya İlk Giriş", "iz", "hata, olay ve davranış izlerinin nasıl okunacağını öğrenmek."],
      ["Ağ Nedir?", "bağlantı", "IP, port, subnet, gateway ve routing kavramlarını temel seviyede kavramak."],
      ["DNS Mantığı", "ad çözümleme", "insanların yazdığı adreslerle sistemlerin kullandığı adresler arasındaki köprüyü anlamak."],
      ["HTTP ve HTTPS", "web protokolü", "tarayıcıdan sunucuya giden isteğin güvenli ve anlaşılır yolculuğunu okumak."],
      ["Tarayıcı Nasıl Çalışır?", "istemci", "HTML, CSS, JavaScript ve ağ isteklerinin kullanıcı ekranına nasıl dönüştüğünü görmek."],
      ["Sunucu Kavramı", "altyapı", "bir hizmetin nerede çalıştığını, nasıl dinlediğini ve nasıl cevap verdiğini anlamak."],
      ["İstemci-Sunucu İlişkisi", "mimari temel", "kullanıcı cihazı ile merkezdeki hizmet arasındaki iş bölümünü görmek."],
      ["Temel Güvenlik Farkındalığı", "güven", "parola, güncelleme, zararlı yazılım ve erişim risklerini ilk seviyede kavramak."],
      ["Yedek Kavramı", "dayanıklılık", "verinin kopyalanması ile hizmetin geri döndürülebilmesi arasındaki farkı görmek."],
      ["Envanter Mantığı", "varlık", "cihaz, yazılım, lisans ve servis bilgisini yönetilebilir varlık olarak düşünmek."],
      ["Teknik Belirti Okuma", "sorun çözme", "yavaşlık, erişememe, hata ve kesinti gibi belirtileri katmanlara ayırmak."],
      ["Temel BT Terimleri Arasında Bağ Kurmak", "kavram ilişkisi", "ezber yerine kavramların birbirine nasıl dayandığını anlamak."],
      ["Küçük Bir Sistemi Uçtan Uca Düşünmek", "bütünlük", "ekran, uygulama, veri, ağ ve güvenliği aynı akışta okumak."],
      ["Temelden Yöneticiliğe Geçiş Bakışı", "yönetim zemini", "teknik temelin yöneticilikte doğru soru sormaya nasıl dönüştüğünü kavramak."]
    ]
  },
  {
    id: "yazilim-muhendisligi",
    title: "Yazılım ve Uygulama Mühendisliği",
    summary: "Programlama, API, mimari, kalite, test, kullanıcı deneyimi ve sürdürülebilir yazılım.",
    frame:
      "Bu üst başlık, yazılımı yalnız kod yazma işi olarak değil, kurumsal süreci çalışan dijital hizmete çevirme disiplini olarak ele alır.",
    chapters: [
      ["Programlama Düşüncesi", "kodlama", "problemi bilgisayarın izleyebileceği açık adımlara dönüştürmek."],
      ["Değişken, Koşul ve Döngü", "temel akış", "programın veri tutma, karar verme ve tekrar etme mantığını öğrenmek."],
      ["Fonksiyon ve Modül Mantığı", "kod düzeni", "karmaşık işi adı konmuş küçük parçalara ayırmak."],
      ["Nesne Yönelimli Tasarım", "sorumluluk", "sınıf, nesne, kapsülleme ve sorumluluk paylaşımını kavramak."],
      ["Veri Yapıları ve Algoritma Sezgisi", "performans", "veriyi doğru düzende tutmanın hız ve bakım etkisini görmek."],
      ["Hata Yönetimi", "dayanıklılık", "beklenmeyen durumlarda sistemin anlaşılır ve güvenli davranmasını sağlamak."],
      ["JSON ve Veri Formatları", "veri alışverişi", "sistemler arası ortak veri dilini anlamak."],
      ["API Mantığı", "entegrasyon", "endpoint, istek, cevap, durum kodu ve sözleşme kavramlarını öğrenmek."],
      ["REST API Tasarımı", "servis", "kaynak, metot, sürümleme, hata ve güvenlik sınırlarını doğru kurmak."],
      ["Backend Katmanı", "iş kuralı", "kurum kurallarının uygulama arkasında nasıl yürütüldüğünü görmek."],
      ["Frontend ve Kullanıcı Arayüzü", "ekran", "HTML, CSS ve JavaScript'in kullanıcıyla kurduğu ilişkiyi anlamak."],
      ["Mobil Uygulama Mantığı", "mobil hizmet", "cihaz, bağlantı, bildirim, oturum ve API bağımlılıklarını görmek."],
      ["Kimlik ve Oturum Tasarımı", "uygulama güvenliği", "login, token, cookie, session ve yetki kontrolünü uygulama bağlamında okumak."],
      ["Cache ve Performans", "hız", "önbelleğin hız ile doğruluk arasındaki dengesini anlamak."],
      ["Mesaj Kuyrukları", "asenkron akış", "uzun süren işleri sıraya alma, retry ve idempotency mantığını kavramak."],
      ["Test Kültürü", "kalite", "unit, integration, end-to-end ve kabul testlerinin yerini öğrenmek."],
      ["Kod İnceleme ve Teknik Borç", "sürdürülebilirlik", "çalışan kod ile yaşanabilir kod arasındaki farkı görmek."],
      ["Sürüm Kontrolü ve Git", "ekip hafızası", "commit, branch, pull request ve release mantığını kurumsal hafıza olarak kullanmak."],
      ["Uygulama Mimarisini Okumak", "büyük resim", "arayüz, backend, veri, güvenlik ve operasyonu tek diyagramda düşünmek."],
      ["Yazılım Kalitesini Yönetmek", "yönetim", "kaliteyi kişisel iyi niyet yerine süreç ve kabul ölçütü haline getirmek."]
    ]
  },
  {
    id: "veri-ve-analitik",
    title: "Veri, Raporlama ve Analitik",
    summary: "Veritabanı, SQL, veri kalitesi, veri yönetişimi, raporlama, karar destek ve veri etiği.",
    frame:
      "Bu üst başlık, veriyi kurumun hafızası ve karar zemini olarak ele alır. Sağlam veri olmadan rapor, yapay zeka ve strateji güvenilir olmaz.",
    chapters: [
      ["Veritabanı Nedir?", "veri temeli", "kurumsal kayıtların düzenli ve sorgulanabilir biçimde tutulmasını anlamak."],
      ["Tablo, Satır ve İlişki Mantığı", "modelleme", "verinin hangi varlığı temsil ettiğini doğru tanımlamak."],
      ["SQL'e Giriş", "sorgu", "veriye açık ve denetlenebilir sorular sormayı öğrenmek."],
      ["JOIN ve İlişkisel Düşünme", "ilişki", "tablolar arası bağların rapor sonucunu nasıl değiştirdiğini görmek."],
      ["Index ve Sorgu Performansı", "hız", "arama ve raporlama performansını veri yapısıyla ilişkilendirmek."],
      ["Transaction ve Veri Bütünlüğü", "tutarlılık", "bir işlemin ya tam gerçekleşmesi ya da hiç gerçekleşmemesi ilkesini kavramak."],
      ["PostgreSQL ile Kurumsal Veri", "veritabanı", "açık kaynak güçlü veritabanının kurumsal kullanımını anlamak."],
      ["Veri Kalitesi", "güvenilirlik", "eksik, yanlış, tekrar eden ve çelişkili verinin karar üzerindeki etkisini görmek."],
      ["Veri Sözlüğü", "ortak dil", "kurumda aynı kavramın herkes için aynı anlama gelmesini sağlamak."],
      ["Ana Veri Yönetimi", "master data", "kişi, kurum, ürün, hizmet gibi temel kayıtların tutarlılığını yönetmek."],
      ["ETL ve Veri Boru Hatları", "akış", "verinin kaynaktan rapora giderken nasıl dönüştüğünü anlamak."],
      ["Veri Ambarı", "karar deposu", "operasyonel veriyi raporlama ve analiz için düzenlemek."],
      ["Data Lake Mantığı", "geniş veri", "farklı türde verileri gelecekteki analizler için saklama yaklaşımını görmek."],
      ["Dashboard ve KPI", "gösterge", "yönetim panolarının neyi ölçtüğünü ve neyi saklayabileceğini anlamak."],
      ["Raporlama Tuzakları", "yorum", "güzel grafiğin doğru karar anlamına gelmediğini öğrenmek."],
      ["Veri Kataloğu ve Lineage", "izlenebilirlik", "bir verinin nereden gelip hangi dönüşümlerden geçtiğini takip etmek."],
      ["KVKK Açısından Veri", "mahremiyet", "kişisel verinin teknik sistemlerde nasıl korunacağını kavramak."],
      ["Veri Paylaşımı ve Protokoller", "kurumlar arası veri", "kurumlar arası veri alışverişinin sınırlarını ve kayıtlarını anlamak."],
      ["Karar Destek Sistemleri", "analitik yönetim", "raporu yönetsel karara bağlayan yaklaşımı kurmak."],
      ["Veri Yönetişimini Yönetmek", "liderlik", "veri sahipliği, kalite ve ortak dil disiplinini kurumsallaştırmak."]
    ]
  },
  {
    id: "altyapi-bulut-operasyon",
    title: "Altyapı, Bulut ve Operasyon",
    summary: "Sunucu, veri merkezi, bulut, DevOps, konteyner, yedekleme, izleme ve hizmet sürekliliği.",
    frame:
      "Bu üst başlık, sistemlerin yalnız kurulmasını değil, yıllarca güvenilir, ölçülebilir ve geri döndürülebilir biçimde işletilmesini öğretir.",
    chapters: [
      ["Sunucu İşletimi", "sunucu", "canlı hizmetlerin çalıştığı ortamı kaynak, servis ve güvenlik açısından okumak."],
      ["Linux Sunucu Temelleri", "linux", "kullanıcı, paket, servis, izin ve log düzenini işletim bakışıyla anlamak."],
      ["Windows Sunucu Temelleri", "windows", "etki alanı, politika, kullanıcı ve kurumsal servis mantığını kavramak."],
      ["Veri Merkezi Mantığı", "fiziksel altyapı", "enerji, soğutma, raf, ağ ve fiziksel güvenliği hizmet sürekliliğiyle ilişkilendirmek."],
      ["Sanallaştırma", "kaynak paylaşımı", "fiziksel kaynakları mantıksal sunuculara bölme yaklaşımını öğrenmek."],
      ["Depolama Sistemleri", "storage", "blok, dosya, nesne depolama ve yedeklilik mantığını anlamak."],
      ["Load Balancer", "yük dağıtımı", "trafiği birden fazla servis örneğine güvenli biçimde dağıtmak."],
      ["Monitoring ve Alerting", "izleme", "metrik ve alarmlarla sistemi canlı izlemek."],
      ["Log Yönetimi", "operasyon izi", "uygulama ve altyapı kayıtlarını merkezi ve aranabilir hale getirmek."],
      ["Observability", "görünürlük", "log, metrik ve trace ile sistem davranışını kanıta dayalı okumak."],
      ["Bulut Bilişim", "cloud", "IaaS, PaaS, SaaS, region, IAM ve yönetilen servisleri anlamak."],
      ["Bulut Maliyet Yönetimi", "finops", "kaynak tüketimini bütçe, etiket ve alarm disipliniyle yönetmek."],
      ["DevOps Kültürü", "teslimat", "geliştirme ve operasyon sorumluluğunu aynı hizmet yaşam döngüsünde birleştirmek."],
      ["CI/CD Pipeline", "otomasyon", "build, test, paketleme, dağıtım ve rollback hattını kurmak."],
      ["Infrastructure as Code", "tekrarlanabilirlik", "altyapıyı elle kurmak yerine sürümlenebilir tanıma dönüştürmek."],
      ["Docker ve Konteyner", "paketleme", "uygulamayı bağımlılıklarıyla taşınabilir hale getirmek."],
      ["Kubernetes", "orkestrasyon", "çok sayıda konteyneri istenen durumda tutma yaklaşımını anlamak."],
      ["Yedekleme ve Geri Dönüş", "backup", "yedek almanın restore başarısıyla anlam kazandığını görmek."],
      ["Felaket Kurtarma", "DR", "RPO, RTO, alternatif merkez ve geri dönüş tatbikatını planlamak."],
      ["İş Sürekliliği Yönetimi", "süreklilik", "kritik kamu hizmetlerinin kesinti karşısında nasıl sürdürüleceğini yönetmek."]
    ]
  },
  {
    id: "siber-guvenlik",
    title: "Siber Güvenlik ve Risk Yönetimi",
    summary: "Risk, IAM, ağ güvenliği, uygulama güvenliği, SOC, olay müdahalesi, veri güvenliği ve denetim.",
    frame:
      "Bu üst başlık, güvenliği araç listesi değil, kamu hizmetini ve vatandaş güvenini koruyan bütünleşik risk yönetimi olarak ele alır.",
    chapters: [
      ["Siber Güvenliğe Risk Olarak Bakmak", "risk", "güvenliği korku değil ölçülebilir risk diliyle ele almak."],
      ["Varlık Envanteri", "varlık", "neyi koruduğunu bilmeden güvenlik kurulamayacağını anlamak."],
      ["Tehdit, Zafiyet ve Etki", "risk modeli", "güvenlik riskini bileşenlerine ayırmak."],
      ["Kimlik ve Erişim Yönetimi", "IAM", "kimin hangi sisteme hangi yetkiyle erişeceğini yönetmek."],
      ["MFA ve SSO", "giriş güvenliği", "parola riskini azaltan ve deneyimi sadeleştiren yaklaşımları anlamak."],
      ["Ayrıcalıklı Hesap Yönetimi", "PAM", "kritik yetkilerin kayıtlı, süreli ve denetlenebilir olmasını sağlamak."],
      ["Ağ Güvenliği", "network security", "firewall, segmentasyon, VPN ve sınır güvenliğini kavramak."],
      ["Zero Trust", "modern güven", "iç ağ varsayımına güvenmeden kimlik ve bağlamla karar vermek."],
      ["WAF ve Uygulama Sınırı", "web güvenliği", "web uygulamalarını yaygın saldırı desenlerine karşı korumak."],
      ["OWASP ve Güvenli Kod", "uygulama güvenliği", "sık görülen web güvenliği hatalarını süreç içinde azaltmak."],
      ["SAST, DAST ve Dependency Taraması", "güvenli SDLC", "güvenlik testlerini geliştirme yaşam döngüsüne eklemek."],
      ["Endpoint Güvenliği", "uç nokta", "cihazların güncel, izlenebilir ve korunabilir olmasını sağlamak."],
      ["SIEM Mantığı", "log korelasyonu", "loglardan anlamlı güvenlik uyarısı üretmek."],
      ["SOC Operasyonu", "güvenlik izleme", "alarmdan olaya giden karar hattını yönetmek."],
      ["Olay Müdahalesi", "incident response", "tespit, çevreleme, temizleme, kurtarma ve ders çıkarma akışını kurmak."],
      ["Siber Kriz İletişimi", "iletişim", "teknik olayın yönetim, hukuk ve kamu iletişimi boyutunu ele almak."],
      ["Veri Sızıntısı Yönetimi", "veri ihlali", "ihlal şüphesinde kanıt, bildirim ve azaltma planını yönetmek."],
      ["Güvenlik Farkındalığı", "insan faktörü", "personelin günlük davranışlarını güvenlik kültürüne bağlamak."],
      ["Denetim ve Uyum", "kontrol", "güvenlik kontrollerini denetlenebilir kanıtlarla izlemek."],
      ["Siber Güvenlik Programını Yönetmek", "liderlik", "araç, süreç, insan ve bütçeyi bütünleşik güvenlik programına dönüştürmek."]
    ]
  },
  {
    id: "yapay-zeka",
    title: "Yapay Zeka, Otomasyon ve Yeni Teknolojiler",
    summary: "Makine öğrenmesi, LLM, RAG, ajan sistemleri, AI yönetişimi, otomasyon ve teknoloji trendleri.",
    frame:
      "Bu üst başlık, yapay zekayı gösterişli demo olarak değil, veri, güven, ölçüm ve kamu sorumluluğu gerektiren yeni bir karar destek katmanı olarak ele alır.",
    chapters: [
      ["Yapay Zekaya İş Problemiyle Başlamak", "AI stratejisi", "modelden önce iyileştirilecek karar veya süreci tanımlamak."],
      ["Veri Hazırlığı", "data prep", "modelin göreceği veriyi temiz, anlamlı ve ayrılmış hale getirmek."],
      ["Makine Öğrenmesi Mantığı", "ML", "veriden örüntü öğrenme ve genelleme fikrini kavramak."],
      ["Derin Öğrenme", "DL", "sinir ağları, katmanlar ve temsil öğrenme mantığını anlamak."],
      ["Model Değerlendirme", "ölçüm", "doğruluk, hata, bias ve canlı performansı birlikte değerlendirmek."],
      ["MLOps", "model işletimi", "modelin sürüm, izleme ve geri bildirim döngüsünü kurmak."],
      ["LLM Temelleri", "dil modeli", "büyük dil modellerinin neyi iyi yaptığını ve nerede yanılabileceğini anlamak."],
      ["Token ve Embedding", "metin temsili", "metni parçalara ve anlam yakınlıklarına dönüştürmek."],
      ["Vektör Veritabanı", "arama", "anlam benzerliğiyle belge ve bilgi aramayı desteklemek."],
      ["RAG Mimarisi", "kurumsal bilgi", "modeli kurum belgeleriyle kaynaklı cevap verecek hale getirmek."],
      ["Prompt Tasarımı", "talimat", "modele bağlam, sınır ve çıktı biçimi vermek."],
      ["Function Calling", "araç kullanımı", "modelin tanımlı araçlarla güvenli işlem yapmasını sağlamak."],
      ["Ajan Sistemleri", "AI ajan", "araç kullanan, planlayan ve adım atan sistemlerin risklerini anlamak."],
      ["AI Güvenliği", "prompt injection", "modelin okuduğu metinle talimat sınırını karıştırmasını önlemek."],
      ["AI Yönetişimi", "sorumlu AI", "model riskini, insan onayını ve denetlenebilirliği yönetmek."],
      ["Kurumsal Asistan Tasarımı", "asistan", "kurum içinde güvenilir bilgi asistanı kurmanın şartlarını görmek."],
      ["RPA ve Süreç Otomasyonu", "otomasyon", "tekrarlı işlerin kural tabanlı otomasyonla nasıl azaltılacağını anlamak."],
      ["Low-Code ve No-Code", "hızlı geliştirme", "hız ile yönetişim arasındaki dengeyi kurmak."],
      ["IoT ve Sensör Verisi", "nesnelerin interneti", "fiziksel dünyadan gelen veriyi kurum sistemlerine bağlamak."],
      ["Yeni Teknolojileri Değerlendirmek", "trend yönetimi", "heyecanı değer, risk, maliyet ve uygulanabilirlikle tartmak."]
    ]
  },
  {
    id: "kamu-surecleri",
    title: "Kamu Kurumu, Mevzuat ve Resmi Süreçler",
    summary: "Kamu çalışma prensibi, resmi yazı, olur, ihale, şartname, sözleşme, komisyon ve muayene-kabul.",
    frame:
      "Bu üst başlık, kamu kurumunda teknolojinin idari ve hukuki zeminden ayrı yaşayamayacağını gösterir.",
    chapters: [
      ["Kamu Kurumunun Çalışma Mantığı", "idari yapı", "hiyerarşi, yetki, görev ve kayıt düzenini anlamak."],
      ["Merkez ve Taşra İşleyişi", "örgüt", "farklı teşkilat yapılarının teknoloji projelerine etkisini görmek."],
      ["Resmi Yazı Kültürü", "yazışma", "talep, görüş, bilgilendirme ve karar yazılarının önemini kavramak."],
      ["Makam Oluru", "onay", "hangi kararların yetkili makam onayı gerektirdiğini anlamak."],
      ["Yetki Devri ve Sorumluluk", "idari yetki", "kararı kimin alabileceğini ve kimin uygulayacağını ayırmak."],
      ["Komisyon Mantığı", "ortak karar", "ihale, kabul, değerlendirme ve inceleme komisyonlarının rolünü görmek."],
      ["İhale Süreci", "kamu alımı", "rekabet, saydamlık, eşit muamele ve ihtiyaç teminini anlamak."],
      ["Yaklaşık Maliyet ve Piyasa Araştırması", "maliyet", "alım öncesi mali gerçekliği ve bütçe zeminini hazırlamak."],
      ["İdari Şartname", "ihale dokümanı", "teknik ihtiyaç dışındaki idari koşulları anlamak."],
      ["Teknik Şartname", "gereksinim", "ihtiyacı ölçülebilir teknik dile çevirmek."],
      ["Sözleşme Yönetimi", "bağlayıcılık", "teslim, destek, ceza, bakım ve sorumlulukların yazılı çerçevesini yönetmek."],
      ["SLA ve Bakım Maddeleri", "hizmet seviyesi", "destek süresi, müdahale, çözüm ve bakım beklentilerini netleştirmek."],
      ["Muayene ve Kabul", "teslim", "teslim edilen işin şartnameye uygunluğunu kanıtla değerlendirmek."],
      ["Kabul Komisyonu Hazırlığı", "kanıt dosyası", "test, rapor, lisans, eğitim ve doküman kanıtlarını düzenlemek."],
      ["Hakediş ve Ödeme Süreci", "mali işleyiş", "teslimin ödeme sürecine nasıl bağlandığını anlamak."],
      ["Denetim İzi", "hesap verebilirlik", "işlemlerin sonradan izlenebilir ve açıklanabilir kalmasını sağlamak."],
      ["Arşiv ve Saklama Süreleri", "kurumsal hafıza", "belge ve verilerin mevzuata uygun saklanmasını yönetmek."],
      ["KVKK ve Kamu Verisi", "hukuki uyum", "kişisel veriyi kamu hizmeti içinde sorumlu biçimde işlemek."],
      ["Kurumlar Arası Protokol", "iş birliği", "veri ve hizmet paylaşımını resmi zemine oturtmak."],
      ["Kamu Sürecini Teknoloji Projesine Bağlamak", "bütünlük", "idari süreç ile teknik teslimi aynı plan içinde yönetmek."]
    ]
  },
  {
    id: "bt-proje-yonetimi",
    title: "BT Proje, Program ve Portföy Yönetimi",
    summary: "Proje yöneticiliği, analiz, planlama, risk, toplantı, tutanak, kabul, değişiklik ve program yönetimi.",
    frame:
      "Bu üst başlık, BT proje yöneticisini teknik ekip, kullanıcı birimi, tedarikçi ve üst yönetim arasında gerçek bağ kuracak şekilde hazırlar.",
    chapters: [
      ["BT Proje Yöneticisinin Rolü", "rol", "proje yöneticisinin teknik, idari ve iletişim sorumluluklarını kavramak."],
      ["Proje Başlatma", "başlangıç", "amaç, kapsam, paydaş ve başarı ölçütünü baştan netleştirmek."],
      ["İş Analizi", "ihtiyaç", "istek ile gerçek gereksinimi ayırmak."],
      ["Paydaş Analizi", "ilişki", "kim etkilenir, kim karar verir, kim uygulanır sorularını yanıtlamak."],
      ["RACI Matrisi", "sorumluluk", "responsible, accountable, consulted ve informed rollerini netleştirmek."],
      ["Kapsam Yönetimi", "sınır", "projenin neyi içerip neyi içermediğini yönetmek."],
      ["İş Kırılım Yapısı", "plan", "büyük işi yönetilebilir parçalara ayırmak."],
      ["Zaman Planı", "takvim", "bağımlılıkları ve kritik yolu görünür hale getirmek."],
      ["Kaynak Planlama", "kapasite", "insan, bütçe, ortam ve tedarik ihtiyaçlarını planlamak."],
      ["Risk Yönetimi", "belirsizlik", "olası sorunları etki ve azaltma planıyla takip etmek."],
      ["Sorun Yönetimi", "engel", "gerçekleşmiş problemleri sahip ve tarih ile yönetmek."],
      ["Değişiklik Yönetimi", "kapsam kontrolü", "yeni taleplerin süre, maliyet, kalite ve sözleşme etkisini görmek."],
      ["Toplantı Yönetimi", "ritim", "gündem, karar, aksiyon ve takip düzeni kurmak."],
      ["Tutanak Yazma", "kayıt", "kararları ve sorumlulukları kurumsal hafızaya geçirmek."],
      ["Durum Raporu", "raporlama", "üst yönetime sade, doğru ve karar odaklı bilgi sunmak."],
      ["Test ve Kabul Planı", "kalite", "teslim kanıtlarını proje sonuna bırakmadan hazırlamak."],
      ["Canlıya Geçiş Planı", "geçiş", "kesinti, eğitim, destek ve geri dönüş planını kurmak."],
      ["Tedarikçi Yönetimi", "dış ekip", "yüklenici performansını sözleşme ve kanıtla takip etmek."],
      ["Program Yönetimi", "çoklu proje", "birbiriyle ilişkili projeleri ortak hedef etrafında yönetmek."],
      ["Portföy Yönetimi", "öncelik", "projeleri değer, risk, kaynak ve stratejiye göre sıralamak."]
    ]
  },
  {
    id: "yonetisim-strateji",
    title: "BT Yönetişimi, Strateji ve Finans",
    summary: "BT stratejisi, bütçe, lisans, teknik borç, standartlar, mimari, tedarik ve dijital egemenlik.",
    frame:
      "Bu üst başlık, teknolojiyi kurum stratejisine bağlamayı ve kaynakları uzun vadeli kamu değeri üretecek şekilde yönetmeyi öğretir.",
    chapters: [
      ["BT Stratejisi", "strateji", "teknoloji yatırımlarını kurum hedefleriyle ilişkilendirmek."],
      ["Yol Haritası Hazırlama", "planlama", "kısa, orta ve uzun vadeli teknoloji adımlarını kurmak."],
      ["BT Yönetişimi", "governance", "karar, standart, sorumluluk ve denetim düzeni kurmak."],
      ["Kurumsal Mimari", "mimari", "iş, veri, uygulama ve altyapı katmanlarını birlikte okumak."],
      ["Standart ve Politika Yönetimi", "standart", "teknoloji kullanımında ortak kurallar oluşturmak."],
      ["Dokümantasyon Yönetimi", "hafıza", "kurumsal bilgiyi kişilere bağımlı olmaktan çıkarmak."],
      ["Teknik Borç Yönetimi", "borç", "ertelenmiş teknik sorunların maliyetini görünür kılmak."],
      ["Lisans Yönetimi", "lisans", "yazılım haklarını, kullanımını ve yenileme risklerini yönetmek."],
      ["BT Bütçesi", "finans", "yatırım, bakım, lisans, bulut ve insan kaynağı maliyetlerini planlamak."],
      ["FinOps", "bulut finansı", "bulut tüketimini mali disiplinle kontrol etmek."],
      ["Tedarik Stratejisi", "satın alma", "ne içeride yapılır, ne dışarıdan alınır sorusunu stratejik cevaplamak."],
      ["Vendor Lock-in", "bağımlılık", "tedarikçi ve platform bağımlılığını erken görmek."],
      ["Dijital Egemenlik", "stratejik bağımsızlık", "kritik veri, altyapı ve yazılım bağımlılıklarını yönetmek."],
      ["Açık Kaynak Politikası", "ekosistem", "açık kaynak kullanımını risk ve katkı çerçevesinde değerlendirmek."],
      ["Hizmet Kataloğu", "BT hizmetleri", "BT'nin sunduğu hizmetleri anlaşılır ve yönetilebilir hale getirmek."],
      ["SLA Yönetimi", "hizmet seviyesi", "hizmet beklentilerini ölçülebilir taahhütlere bağlamak."],
      ["KPI ve OKR Kullanımı", "performans", "BT başarısını doğru göstergelerle izlemek."],
      ["Yönetim Kurulu ve Üst Makam Sunumu", "iletişim", "teknik konuyu karar verilebilir yönetim diline çevirmek."],
      ["Mevzuat ve Teknoloji Stratejisi", "uyum", "stratejiyi hukuki ve idari sınırlarla birlikte düşünmek."],
      ["BT Değerini Kanıtlamak", "değer", "teknoloji yatırımını kamu hizmeti, risk ve verimlilik çıktılarıyla göstermek."]
    ]
  },
  {
    id: "ust-duzey-liderlik",
    title: "Üst Düzey Kamu BT Liderliği",
    summary: "Ekip, kültür, kriz, iletişim, etik, değişim, ilk 100 gün, kişisel rota ve gelecek vizyonu.",
    frame:
      "Bu üst başlık, teknik bilgiyi kurum yönetimi, insan, etik, kriz ve gelecek vizyonu ile birleştirir.",
    chapters: [
      ["Teknik Liderlikten Kurumsal Liderliğe", "liderlik", "uzmanlıktan stratejik sorumluluğa geçişi anlamak."],
      ["Ekip Kurmak", "insan", "farklı uzmanlıkları ortak hizmet hedefinde buluşturmak."],
      ["Yetenek Geliştirme", "kapasite", "ekibin öğrenme ve yedeklilik kapasitesini büyütmek."],
      ["Bilgiyi Tek Kişiye Hapsetmemek", "dayanıklılık", "kritik bilgiyi dokümantasyon ve paylaşım kültürüyle yaymak."],
      ["Kurum Kültürü ve Değişim", "kültür", "teknoloji değişimini insan alışkanlıklarıyla birlikte yönetmek."],
      ["Dijital Dönüşüm Liderliği", "dönüşüm", "süreçleri yalnız dijitale taşımak yerine yeniden düşünmek."],
      ["Kriz Anında İlk 60 Dakika", "kriz", "rol, iletişim, kanıt ve karar düzenini hızla kurmak."],
      ["Kriz Sonrası Öğrenme", "iyileştirme", "olay raporunu suçlama değil kalıcı gelişim aracına çevirmek."],
      ["Üst Makama Teknik Konu Anlatmak", "karar dili", "teknik ayrıntıyı etki, risk ve seçenek diline çevirmek."],
      ["Kamuoyu ve Paydaş İletişimi", "iletişim", "kesinti, veri ihlali veya büyük değişimde güven veren dil kurmak."],
      ["Etik ve Kamu Sorumluluğu", "etik", "teknolojinin hak, mahremiyet ve adalet boyutunu yönetmek."],
      ["Karar Alma Disiplini", "karar", "hız, risk, kanıt ve geri dönüş yolunu birlikte düşünmek."],
      ["Müzakere ve Çatışma Yönetimi", "ilişki", "tedarikçi, birim ve üst yönetim arasında sağlıklı uzlaşma kurmak."],
      ["Kişisel Öğrenme Sistemi", "öğrenme", "yöneticinin kendi gelişimini sürekli ve bilinçli yönetmesi."],
      ["Teknoloji Trendlerini Okumak", "gelecek", "moda ile stratejik fırsatı ayırmak."],
      ["Yapay Zeka Çağında Liderlik", "AI liderliği", "AI'nin ekip, süreç, etik ve verimlilik etkilerini yönetmek."],
      ["Sürdürülebilirlik ve Enerji", "yeşil BT", "veri merkezi, bulut ve donanım kararlarını enerji etkisiyle düşünmek."],
      ["Ulusal Teknoloji Ekosistemi", "ekosistem", "yerli üretim, üniversite, özel sektör ve kamu iş birliğini değerlendirmek."],
      ["Kamu BT Liderinin İlk 100 Günü", "başlangıç planı", "kritik sistem, risk, ekip, bütçe ve proje fotoğrafını hızla çıkarmak."],
      ["From Zero to Hero Kişisel Yol Haritası", "kişisel rota", "temelden üst düzey liderliğe uzanan öğrenme ve uygulama planını tamamlamak."]
    ]
  }
];

const categories = categoryDefinitions.map((category, categoryIndex) => ({
  ...category,
  categoryNumber: categoryIndex + 1,
  chapters: category.chapters.map(([title, lens, focus], chapterIndex) => ({
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
  number: index + 1,
  displayNumber: `${chapter.categoryNumber}.${chapter.numberInCategory}`
}));

const state = {
  activeCategory: null
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

const aiStartChapter = chapters.find((chapter) => chapter.categoryId === "yapay-zeka") || chapters[100];

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

function pick(items, seed) {
  if (!Array.isArray(items) || !items.length) return "";
  const index = Number.isFinite(seed) ? Math.abs(seed) % items.length : 0;
  return items[index];
}

function chapterSeed(chapter) {
  return chapter.number + chapter.numberInCategory * 7 + getCategory(chapter.categoryId).categoryNumber * 13;
}

function articleText(chapter) {
  const customArticles = {
    "Dosya Sistemi ve Klasör Düzeni":
      "Bir kurumda dosya sistemi çoğu zaman kimsenin törenle anlatmadığı, fakat herkesin her gün kullandığı sessiz bir hafızadır. Yeni başlayan biri bilgisayarında klasör açmayı basit bir düzenleme işi sanabilir; ama kamu kurumunda bir dosyanın nerede durduğu, kimin eriştiği, hangi adla saklandığı, ne kadar süre korunacağı ve gerektiğinde nasıl bulunacağı doğrudan iş sürekliliğiyle ilgilidir. Bunu en iyi, yıllar önce kapanmış görünen bir iş için eski bir karar yazısı, taranmış bir ek, imzalı bir tutanak veya kabul komisyonu raporu arandığında anlarsın. O an konu artık “klasör açtım, içine belge attım” basitliğinde değildir; kurumun hafızası ya düzenli konuşur ya da herkes birbirine aynı soruyu sormaya başlar: Bu dosya kimdeydi? Son hali hangisiydi? Bunu silmeye yetkimiz var mıydı? Dosya sistemi ve klasör düzeni bu yüzden teknik bir ayrıntı değil, kurumsal güven meselesidir. Sağlıklı bir düzende klasör adı işin türünü anlatır, dosya adı belgenin içeriğini ve tarihini ele verir, sürüm bilgisi yanlış dosyanın imzaya gitmesini engeller, erişim yetkisi kişisel merakı değil görev sorumluluğunu esas alır. Bir proje yöneticisi bu konuyu ciddiye aldığında yalnız ortak klasörde güzel bir ağaç yapısı kurmaz; projenin teklif dosyasını, resmi yazışmalarını, toplantı notlarını, şartname taslaklarını, test kanıtlarını, kabul evrakını ve işletim dokümanını baştan aynı mantığın içine yerleştirir. Çünkü proje ilerledikçe bilgi dağılmaya meyillidir: biri masaüstüne kaydeder, biri e-posta ekinde tutar, biri eski sürüm üzerinden yorum yapar, biri dosyayı kişisel diskte unutup izne çıkar. Bu da küçük bir dağınıklık gibi başlar, sonra yanlış evrakla karar alma, eksik kanıtla kabul yapma, denetimde belge bulamama veya kritik bilgiye erişememe riskine dönüşür. İyi dosya düzeni ise işi yavaşlatmaz; tersine herkesin aynı gerçeğe bakmasını sağlar. Burada öğrenilmesi gereken şey klasör simgesinin kendisi değil, bilginin yaşam döngüsüdür: belge doğar, kullanılır, güncellenir, paylaşılır, korunur, arşivlenir ve gerektiğinde kanıt olarak geri çağrılır. Bu döngüyü anlayan kişi dosya sistemine teknik depo gibi değil, kurumun ortak hafızasını taşıyan bir kayıt düzeni gibi bakar. Sonuçta dosya sistemi ve klasör düzeni, kamu BT yöneticisi için küçük görünen ama büyük sonuçlar doğuran alanlardan biridir; doğru kurulduğunda iş sakinleşir, yanlış kurulduğunda herkes doğru belgeyi ararken zaman, güven ve karar kalitesi kaybeder."
  };
  if (customArticles[chapter.title]) return customArticles[chapter.title];

  const chapterMoments = {
    "temel-okuryazarlik": [
      "Bir toplantıda herkes uygulama, ağ ve güvenlik diye ayrı ayrı konuşurken asıl eksik şeyin ortak BT haritası olduğunu fark edersin.",
      "Kasanın içindeki parça listesi ilk anda teknik ayrıntı gibi görünür; yavaşlayan bir hizmette CPU, RAM ve disk aynı hikayenin karakterlerine dönüşür.",
      "Sunucuda çalışan bir servisin neden durduğunu ararken işletim sisteminin görünmeyen trafik polisi gibi süreçleri yönettiğini anlarsın.",
      "Bir kurumda dosya sistemi çoğu zaman kimsenin törenle anlatmadığı, fakat herkesin her gün kullandığı sessiz bir hafızadır.",
      "Yeni gelen personele yanlış klasör yetkisi verildiğinde erişim meselesinin nezaket değil görev sınırı olduğunu görürsün.",
      "Terminal ekranında tek satırlık bir komut bazen uzun bir toplantıdan daha dürüst cevap verir.",
      "Log dosyasında görünen küçük bir zaman damgası, bütün gün anlatılan tahminleri bir anda hizaya sokar.",
      "Ağ kopunca herkes uygulamayı suçlar; oysa ilk bakılması gereken şey çoğu zaman paketin yolda nereye kadar gidebildiğidir.",
      "Bir adresin yazılıp doğru sunucuya ulaşması sihir değildir; DNS bozulduğunda kurumun tabelası yerinde durur ama kapı bulunamaz.",
      "Tarayıcıdaki küçük kilit simgesi, vatandaşın verisinin yolda çıplak gezmediğini anlatan ciddi bir güvencedir.",
      "Bir ekranın açılması için HTML, CSS, JavaScript ve ağ isteklerinin sahne arkasında nasıl sıraya girdiğini gördüğünde arayüze başka bakarsın.",
      "Sunucu, odada duran güçlü bir makineden çok, kuruma sürekli cevap verme sözü veren nöbetçi bir hizmet noktasıdır.",
      "İstemci ile sunucunun iş bölümü anlaşılmadığında her hata kullanıcı bilgisayarına ya da merkeze haksızca yüklenir.",
      "Bir parolanın paylaşılması küçük kolaylık gibi başlar, sonra kimin hangi işlemi yaptığı sorusunu cevapsız bırakır.",
      "Yedek dosyası alındı sanılan bir sistemde geri dönüş testi yapılmadıysa elde güvence değil yalnız umut vardır.",
      "Envanter listesi güncel değilse kurum aslında neye sahip olduğunu, neyi koruduğunu ve neye para ödediğini bilemez.",
      "Yavaşlık şikayeti geldiğinde iyi gözlemci önce belirtinin hangi katmanda doğduğunu ayırır.",
      "Terimleri tek tek bilmek yetmez; IP, DNS, sunucu, yetki ve log arasındaki bağ kurulunca teknoloji konuşmaya başlar.",
      "Küçük bir hizmeti uçtan uca çizdiğinde ekranın arkasında veri, ağ, güvenlik ve operasyonun aynı zincirde yürüdüğünü görürsün.",
      "Temel bilgiden yöneticiliğe geçiş, her ayrıntıyı yapmak değil, doğru ayrıntının hangi kararı etkilediğini bilmektir."
    ],
    "yazilim-muhendisligi": [
      "Bir iş kuralını bilgisayara anlatmaya çalıştığında belirsiz cümlelerin kodda nasıl tökezlediğini görürsün.",
      "Koşul ve döngü ilk başta ders örneği gibidir; gerçek sistemde yanlış koşul yüzlerce kaydı aynı hataya sürükler.",
      "Fonksiyonlara bölünmemiş kod, kalabalık bir odada herkesin aynı anda konuşmasına benzer.",
      "Nesnelerin sorumluluğu karıştığında uygulama çalışsa bile kim neyi değiştirecek sorusu ekibi yorar.",
      "Yanlış veri yapısı seçimi küçük ekranda görünmez; yoğun kullanım başladığında performans hesabı kendini hatırlatır.",
      "Hata yönetimi olmayan uygulama, kötü haberi saklayan memur gibi davranır ve sorunu büyütür.",
      "JSON ilk bakışta süslü metindir; iki sistemin birbirini yanlış anlamaması için ortak sözleşmeye dönüşür.",
      "API konuşması net değilse kurumlar arası entegrasyon iyi niyetli ama kırılgan bir el sıkışma olarak kalır.",
      "REST tasarımında kaynak adları ve durum kodları düzgünse sistem kendi niyetini daha kolay anlatır.",
      "Backend katmanında iş kuralı dağınıksa aynı karar farklı ekranlarda farklı sonuç üretir.",
      "Arayüzde yanlış yazılmış bir alan adı, sağlam backend'i kullanıcı gözünde başarısız gösterir.",
      "Mobil uygulamada bağlantı kopması, bildirim gecikmesi ve oturum süresi masaüstünden farklı düşünülmelidir.",
      "Oturum tasarımı zayıfsa kullanıcı içeri girmiş görünür ama sistem onun kim olduğunu güvenle taşıyamaz.",
      "Cache hız kazandırır; fakat eski bilgi gösterdiğinde hızın doğrulukla pazarlık ettiğini anlarsın.",
      "Mesaj kuyruğu, uzun işlerin kapıda yığılmasını önleyen sabırlı bir sıra defteri gibidir.",
      "Test kültürü yoksa canlı ortam, ekibin hiç planlamadığı en pahalı sınav salonuna dönüşür.",
      "Kod incelemesi kişisel eleştiri değil, altı ay sonraki ekibe bırakılan bakım kolaylığıdır.",
      "Git geçmişi düzgün tutulduğunda kurum hangi kararın ne zaman koda dönüştüğünü hatırlar.",
      "Mimariyi okuyamayan yönetici yalnız parça görür; iyi mimari çizimi parçaların neden birlikte durduğunu anlatır.",
      "Yazılım kalitesi tesadüfe bırakıldığında çalışan ekranlar zamanla yönetilemeyen yük haline gelir."
    ],
    "veri-ve-analitik": [
      "Veritabanı, kurumun hafızasını çekmeceden çıkarıp sorgulanabilir düzene koyar.",
      "Tabloda yanlış temsil edilen bir varlık, raporların yıllarca yanlış konuşmasına neden olur.",
      "SQL öğrenen kişi veriye ricada bulunmaz, açık ve denetlenebilir soru sorar.",
      "JOIN yanlış kurulduğunda iki doğru tablo birleşip yanlış bir yönetim sonucuna varabilir.",
      "Index eksikliği bazen kötü yazılım sanılır; oysa sorun verinin aranma yolundadır.",
      "Transaction mantığı, yarım kalan işlemin kurum kayıtlarında hayalet gibi dolaşmasını önler.",
      "PostgreSQL gibi güçlü bir veritabanı, doğru yönetilmezse yine kötü modelin yükünü taşımak zorunda kalır.",
      "Veri kalitesi bozuksa gösterge paneli parlak olabilir ama kararın zemini çamurludur.",
      "Veri sözlüğü yoksa aynı kelime farklı birimlerde farklı gerçekleri anlatır.",
      "Ana veri dağılırsa kişi, kurum veya hizmet kaydı her sistemde başka kimliğe bürünür.",
      "ETL hattında küçük bir dönüşüm hatası, rapora gelene kadar büyük bir kanaate dönüşebilir.",
      "Veri ambarı, günlük işlem telaşını yönetim sorusuna cevap verecek sakin düzene çevirir.",
      "Data lake her şeyi atma gölü değildir; düzen yoksa bilgi değil sis biriktirir.",
      "Dashboard ekrana sayı koyar; KPI ise o sayının hangi davranışı değiştireceğini sorar.",
      "Raporlama tuzağı, güzel grafiğin eksik tanımı sakladığı yerde başlar.",
      "Lineage bilinmiyorsa bir rakamın nereden geldiği tartışması karar masasını esir alır.",
      "KVKK açısından veri, yalnız kolon değil kişiye dokunan sorumluluktur.",
      "Kurumlar arası veri paylaşımı teknik bağlantıdan önce yetki, amaç ve kayıt meselesidir.",
      "Karar destek sistemi, yönetici yerine karar vermez; kararın dayandığı zemini berraklaştırır.",
      "Veri yönetişimi kurulmadığında herkes veri ister ama kimse kalitesinden sahiplik duymaz."
    ],
    "altyapi-bulut-operasyon": [
      "Sunucu işletimi, çalışan hizmetin nabzını kaynak, servis ve güvenlik üzerinden tutmaktır.",
      "Linux sunucuda küçük bir izin hatası, uygulamanın bütün mantığını çalışmaz hale getirebilir.",
      "Windows sunucu tarafında politika ve etki alanı düzeni, kullanıcı deneyimini sessizce belirler.",
      "Veri merkezi kapısının ardında enerji, soğutma ve fiziksel güvenlik dijital hizmetin gerçek bedenidir.",
      "Sanallaştırma kaynakları çoğaltmaz; onları daha akıllı paylaştırmayı öğretir.",
      "Depolama kararı yanlışsa yedek, performans ve maliyet aynı anda şikayet etmeye başlar.",
      "Load balancer iyi çalışırken fark edilmez; bozulduğunda bütün trafik tek kapıya yığılır.",
      "Monitoring olmayan sistem karanlık odada çalışan makine gibidir; ses gelene kadar kimse durumunu bilmez.",
      "Log yönetimi dağınıksa olay sonrası herkes kendi defterinden ayrı gerçek okur.",
      "Observability, sistemin yalnız öldüğünü değil neden yorulduğunu da anlatır.",
      "Bulut bilişim hız verir; ama kimlik, bölge ve maliyet düşünülmezse hız dağınıklığa dönüşür.",
      "Bulut maliyeti küçük kaynakların geceleri de çalıştığı unutulduğunda şişer.",
      "DevOps kültürü duvar yıkmak değil, teslim edilen hizmetin ortak sorumluluğunu kabul etmektir.",
      "CI/CD hattı düzgünse dağıtım kahramanlık değil tekrarlanabilir bir alışkanlık olur.",
      "Infrastructure as Code, altyapıyı kişisel hafızadan çıkarıp sürümlenebilir kanıta dönüştürür.",
      "Konteyner, uygulamayı çantaya koyar; ama çantanın nerede, nasıl ve kimle çalışacağını ayrıca yönetmek gerekir.",
      "Kubernetes güçlüdür; fakat ne istediğini açık söylemezsen karmaşayı otomatikleştirir.",
      "Yedekleme, geri dönmeyen yedekle değil başarıyla yapılmış restore ile anlam kazanır.",
      "Felaket kurtarma planı okunmadan rafta duruyorsa kriz anında plan değil dosya olur.",
      "İş sürekliliği, teknik sistemi değil kamu hizmetinin toplumdaki etkisini ayakta tutma disiplinidir."
    ],
    "siber-guvenlik": [
      "Güvenliğe risk olarak bakmak, korkuyu ölçülebilir karara çevirmektir.",
      "Varlık envanteri yoksa neyi koruduğunu bilmeden kale duvarı örmeye çalışırsın.",
      "Tehdit, zafiyet ve etki ayrılmadığında her alarm aynı büyüklükte görünür.",
      "Kimlik yönetimi zayıfsa sistem kapısı açıktır ama kimin girdiği belirsizdir.",
      "MFA ve SSO doğru kurulunca hem güvenlik artar hem kullanıcı gereksiz parola yükünden kurtulur.",
      "Ayrıcalıklı hesaplar kayıt altına alınmazsa en güçlü anahtarlar cebinde kimin gezdiği bilinmez.",
      "Ağ güvenliği, sınır çizmek kadar içerideki hareketi de anlamayı gerektirir.",
      "Zero Trust, kurum içindeyim diye güvenme alışkanlığını disipline eder.",
      "WAF web uygulamasının kapısında durur ama kötü tasarımın yerine geçmez.",
      "OWASP hataları, yazılımın aceleyle unutulan kapı ve pencerelerini gösterir.",
      "SAST ve DAST güvenliği son kontrolden çıkarıp geliştirme yolculuğuna katar.",
      "Endpoint güvenliği ihmal edilirse en modern merkez, eski bir cihazdan yara alabilir.",
      "SIEM, log kalabalığını anlamlı güvenlik cümlelerine çevirmeye çalışır.",
      "SOC operasyonunda değer, alarm sayısında değil doğru olayın zamanında anlaşılmasındadır.",
      "Olay müdahalesi paniği sıraya koyar: tespit, çevreleme, temizlik, kurtarma ve öğrenme.",
      "Siber kriz iletişimi kötü kurulursa teknik olay güven krizine dönüşür.",
      "Veri sızıntısında ilk refleks saklamak değil kanıtı koruyup sorumluluğu yerine getirmektir.",
      "Farkındalık eğitimi afiş değil, günlük küçük davranışların güvenli alışkanlığa dönüşmesidir.",
      "Denetim ve uyum, yapılan güvenlik işinin kanıtla konuşabilmesini sağlar.",
      "Güvenlik programı yönetimi araçları değil insan, süreç, bütçe ve önceliği birlikte yönetir."
    ],
    "yapay-zeka": [
      "Yapay zekaya modelle değil, iyileştirilecek kararın gerçekten var olup olmadığını sorarak başlanır.",
      "Veri hazırlığı sıkıcı görünür; ama modelin karakteri çoğu zaman bu masada şekillenir.",
      "Makine öğrenmesi, geçmiş kayıtlardan örüntü çıkarır ama geçmişin hatalarını da öğrenebilir.",
      "Derin öğrenme etkileyicidir; fakat katmanların gücü açıklama sorumluluğunu ortadan kaldırmaz.",
      "Model değerlendirme yalnız doğruluk yüzdesi değil, yanlışın kime neye mal olduğunu sormaktır.",
      "MLOps yoksa model laboratuvarda başarılı olur, canlıda sessizce yaşlanır.",
      "LLM güçlü bir dil işçisidir; emin görünmesi her zaman doğru bildiği anlamına gelmez.",
      "Token ve embedding, metni bilgisayarın yakınlık kurabileceği parçalara dönüştürür.",
      "Vektör veritabanı, kelimeyi değil anlam akrabalığını aradığı için kurum bilgisinde yeni kapı açar.",
      "RAG mimarisi modele hafıza vermez; doğru belgeye dayanarak konuşma disiplini kazandırır.",
      "Prompt tasarımı modele rica yazmak değil, işi, sınırı ve beklenen kanıtı net söylemektir.",
      "Function calling, modelin konuşmaktan çıkıp tanımlı araçlarla işlem yapmasını sağlar.",
      "Ajan sistemleri büyüleyicidir; fakat plan yapan sistemin nerede duracağını bilmesi gerekir.",
      "AI güvenliği, modelin okuduğu metinle aldığı talimatı karıştırmamasını sağlamaya çalışır.",
      "AI yönetişimi, heyecanı insan onayı, risk kaydı ve denetlenebilirlikle dengeler.",
      "Kurumsal asistan, her soruya cevap veren oyuncak değil güvenilir kaynağa bağlı çalışma arkadaşıdır.",
      "RPA tekrarlı işi azaltır; yanlış süreç otomatikleşirse hata da hız kazanır.",
      "Low-code hızlıdır; yönetişim kurulmazsa küçük çözümler görünmez gölge sistemlere dönüşür.",
      "IoT sensörü sahadan veri getirir; ama o verinin güveni, zamanı ve anlamı ayrıca yönetilmelidir.",
      "Yeni teknoloji değerlendirmesi, parlayan fikri değer, risk, maliyet ve uygulanabilirlikle tartma disiplinidir."
    ],
    "kamu-surecleri": [
      "Kamu kurumunun çalışma mantığı, kararın kimde doğduğunu ve kaydın nerede yaşadığını anlamakla başlar.",
      "Merkez ve taşra farklı ritimlerle çalışır; teknoloji projesi bu ritimleri hesaba katmazsa sahada zorlanır.",
      "Resmi yazı kültürü, kurumun hafızasına düzgün cümleyle iz bırakma sanatıdır.",
      "Makam oluru, iyi fikri yetkili karar haline getiren resmi eşiktir.",
      "Yetki devri bilinmezse herkes işi ister ama kararın sorumlusu belirsiz kalır.",
      "Komisyon mantığı, tek kişinin kanaatini kurumsal değerlendirme ve kayıt düzenine taşır.",
      "İhale süreci yalnız satın alma değil, kamu kaynağını saydam ve rekabetçi kullanma sınavıdır.",
      "Yaklaşık maliyet zayıfsa bütçe daha ihale başlamadan gerçeklikten kopar.",
      "İdari şartname, teknik işin hangi hukuki ve idari kurallarla alınacağını belirler.",
      "Teknik şartname belirsiz yazılırsa teslim günü herkes kendi anladığını savunur.",
      "Sözleşme yönetimi imzadan sonra başlar; destek, ceza, bakım ve sorumluluk orada gerçek olur.",
      "SLA maddeleri iyi yazılmazsa kesinti anında beklenti çok, dayanak az olur.",
      "Muayene ve kabul, teslim edilen şeyin vaat edilen işle aynı olup olmadığını kanıtla sorar.",
      "Kabul komisyonu hazırlığı son gün evrak toplamak değil, proje boyunca kanıt biriktirmektir.",
      "Hakediş süreci teknik teslimin mali kayıtla buluştuğu yerdir.",
      "Denetim izi yoksa doğru yapılan iş bile sonradan anlatılamaz hale gelir.",
      "Arşiv ve saklama süresi, belgenin ne zaman korunacağını ve ne zaman bırakılacağını öğretir.",
      "KVKK ve kamu verisi, hizmet göreviyle kişisel mahremiyet arasındaki ince çizgiyi yönetir.",
      "Kurumlar arası protokol, iyi niyeti yetki, amaç, süre ve sorumlulukla yazılı zemine taşır.",
      "Kamu sürecini teknoloji projesine bağlamak, teknik teslimle idari hesabı aynı dosyada buluşturur."
    ],
    "bt-proje-yonetimi": [
      "BT proje yöneticisinin rolü, herkesin dilini anlayıp ortak karar cümlesi kurmaktır.",
      "Proje başlatma aşaması bulanıksa en iyi ekip bile nereye koştuğunu tartışır.",
      "İş analizi, yüksek sesle söylenen isteğin arkasındaki gerçek ihtiyacı ortaya çıkarır.",
      "Paydaş analizi yapılmazsa sessiz kalan kişi proje sonunda en güçlü itirazı getirebilir.",
      "RACI matrisi, iyi niyeti sorumluluk tablosuna çevirir.",
      "Kapsam yönetimi yoksa proje her toplantıda biraz daha büyür ve kimse fark etmez.",
      "İş kırılım yapısı, büyük ve ürkütücü işi yönetilebilir lokmalara ayırır.",
      "Zaman planı yalnız tarih listesi değil, bağımlılıkların açıkça görünmesidir.",
      "Kaynak planlama eksikse takvim doğru görünür ama ekip nefes alamaz.",
      "Risk yönetimi kehanet değil, olası darbeyi önceden yumuşatma çabasıdır.",
      "Sorun yönetimi gerçekleşmiş engeli sahibi, tarihi ve kararıyla görünür kılar.",
      "Değişiklik yönetimi, yeni talebin bedelini nezaketle ama açıkça konuşur.",
      "Toplantı yönetimi iyi değilse kararlar konuşulur, aksiyonlar havada kalır.",
      "Tutanak yazmak bürokrasi değil, toplantıda oluşan gerçeği kurumsal hafızaya sabitlemektir.",
      "Durum raporu üst yönetimi ayrıntıya boğmadan karar gerektiren noktayı gösterir.",
      "Test ve kabul planı sona bırakılırsa teslim günü kanıt arama telaşı başlar.",
      "Canlıya geçiş planı, hizmeti sahaya indirirken kesinti ve geri dönüş ihtimalini önceden düşünür.",
      "Tedarikçi yönetimi güvene dayanır ama kanıt, sözleşme ve ritimle ayakta kalır.",
      "Program yönetimi birden çok projenin aynı hedefe çarpışmadan yürümesini sağlar.",
      "Portföy yönetimi, her iyi fikrin aynı anda yapılamayacağını kabul edip öncelik kurar."
    ],
    "yonetisim-strateji": [
      "BT stratejisi, teknoloji isteklerini kurumun hizmet hedefleriyle aynı masaya oturtur.",
      "Yol haritası yoksa bugün alınan karar yarının mimarisini sessizce kilitleyebilir.",
      "BT yönetişimi, kimin hangi teknoloji kararını hangi ölçüte göre alacağını netleştirir.",
      "Kurumsal mimari, iş, veri, uygulama ve altyapının birbirine nasıl yaslandığını gösterir.",
      "Standart ve politika yoksa her ekip iyi niyetle başka düzen kurar.",
      "Dokümantasyon yönetimi, kurumsal bilgiyi kişilerin hafızasından çıkarır.",
      "Teknik borç görünmezse bütçe günü geldiğinde geçmiş kararların faizi ödenir.",
      "Lisans yönetimi dağınıksa kurum hem hukuki hem mali risk taşır.",
      "BT bütçesi yalnız para cetveli değil, stratejik önceliğin sayıya dökülmüş halidir.",
      "FinOps, buluttaki esnekliği mali disiplinle aynı çizgide tutar.",
      "Tedarik stratejisi, neyi içeride öğreneceğini ve neyi dışarıdan alacağını bilinçli seçer.",
      "Vendor lock-in, kolay başlayan bağımlılığın ileride pazarlık gücünü azaltabileceğini hatırlatır.",
      "Dijital egemenlik, kritik veri ve sistemlerde bağımlılık sorusunu strateji seviyesine taşır.",
      "Açık kaynak politikası, özgürlüğü sorumluluk, güvenlik ve katkıyla birlikte düşünür.",
      "Hizmet kataloğu, BT'nin ne sunduğunu ve hangi beklentiyle sunduğunu görünür kılar.",
      "SLA yönetimi, beklentiyi ölçülebilir hizmet sözüne çevirir.",
      "KPI ve OKR, yapılan işin gerçekten değer üretip üretmediğini sormaya yarar.",
      "Üst makam sunumu, teknik ayrıntıyı seçenek, risk ve karar diline dönüştürür.",
      "Mevzuat ve teknoloji stratejisi, yenilik isteğini hukuki ve idari gerçeklikle uzlaştırır.",
      "BT değerini kanıtlamak, yatırımı hizmet kalitesi, risk azalması ve verimlilikle anlatmaktır."
    ],
    "ust-duzey-liderlik": [
      "Teknik liderlikten kurumsal liderliğe geçiş, çözümü bilmekten doğru sistemi kurmaya geçmektir.",
      "Ekip kurmak, uzmanları aynı odada toplamak değil ortak hizmet sorumluluğunda buluşturmaktır.",
      "Yetenek geliştirme yapılmazsa kurum aynı kişilerin iyi niyetine bağımlı kalır.",
      "Bilgiyi tek kişiye hapsetmek, o kişi izin aldığında kurum hafızasını da izne çıkarmaktır.",
      "Kurum kültürü değişimi, yeni sistemi değil insanların alışkanlığını yönetmeyi gerektirir.",
      "Dijital dönüşüm, kağıttaki süreci ekrana taşımakla değil işi yeniden düşünmekle başlar.",
      "Kriz anında ilk altmış dakika, karar düzeni kurulursa paniğin önüne geçer.",
      "Kriz sonrası öğrenme suçlu aramak değil, aynı olayın tekrarını zorlaştırmaktır.",
      "Üst makama teknik konu anlatmak, ayrıntıyı etki, seçenek ve risk cümlesine çevirmektir.",
      "Kamuoyu iletişimi kötü olursa teknik kesinti güven kaybına dönüşür.",
      "Etik ve kamu sorumluluğu, teknolojinin insana dokunduğu yerde başlar.",
      "Karar alma disiplini, hız ile kanıtı ve geri dönüş yolunu birlikte düşünür.",
      "Müzakere yönetimi, haklı taraf seçmekten çok sürdürülebilir uzlaşma kurmaktır.",
      "Kişisel öğrenme sistemi olmayan yönetici, hızla değişen teknoloji karşısında eski sezgilerine mahkum kalır.",
      "Trendleri okumak, modayı stratejik fırsattan ayırma sabrı ister.",
      "Yapay zeka çağında liderlik, verimlilik kadar etik, iş gücü ve güven etkisini de yönetir.",
      "Sürdürülebilirlik ve enerji, dijital hizmetin fiziksel dünyadaki bedelini hatırlatır.",
      "Ulusal teknoloji ekosistemi, kamu, özel sektör ve akademi bilgisini aynı hedefe bağlama fırsatıdır.",
      "İlk yüz gün, yeni liderin sistem, risk, ekip ve bütçe fotoğrafını hızla çektiği dönemdir.",
      "From Zero to Hero rotası, temel meraktan üst düzey sorumluluğa uzanan bilinçli çalışma planıdır."
    ]
  };
  const moment = (chapterMoments[chapter.categoryId] || [])[chapter.numberInCategory - 1] || chapter.focus;

  const categoryProfiles = {
    "temel-okuryazarlik": {
      scene: "masanın üzerindeki bilgisayardan başlayan ve kullanıcının fark etmeden geçtiği teknik katmanlara doğru açılan ilk öğrenme sahnesi",
      risk: "kavramların ezberlenip birbirine bağlanmaması; böyle olunca sorun çıktığında kişi ekrana bakar ama arka planda hangi düzenin aksadığını okuyamaz",
      manager: "temel bilgiyi, karmaşık bir projede doğru soruyu sormaya yarayan sakin bir pusulaya çevirmek",
      close: "Bu başlık sağlam oturduğunda teknoloji korkutucu bir terimler yığını olmaktan çıkar ve kurum hizmetinin nasıl çalıştığını gösteren anlaşılır bir haritaya dönüşür."
    },
    "yazilim-muhendisligi": {
      scene: "kullanıcının bir butona bastığı anda başlayan, arayüzden iş kuralına ve oradan veriye uzanan uygulama yolculuğu",
      risk: "yazılımın yalnız kod teslimi sanılması; bu bakış gereksinimi belirsiz, testi zayıf, bakımı pahalı ve kullanıcı tarafı huzursuz sistemler üretir",
      manager: "ekran, servis, veri, test ve sürüm kararlarını aynı hizmet amacı etrafında toplamak",
      close: "Bu başlık doğru kavrandığında yazılım, geliştirici odasında kapanan bir iş değil, kurumun iş yapma biçimini taşıyan canlı bir hizmet haline gelir."
    },
    "veri-ve-analitik": {
      scene: "bir raporda görünen tek sayının arkasında duran kayıt, tanım, kaynak, dönüşüm ve yorum zinciri",
      risk: "verinin doğru sanılması; tanımı, kaynağı ve kalitesi bilinmeyen veri güzel grafikler üretir ama kötü kararları da aynı güzellikle süsler",
      manager: "hangi veriye neden güvenildiğini, hangi raporun hangi kararı beslediğini ve hangi bilginin kim tarafından sahiplenildiğini açıklamak",
      close: "Bu başlık yerli yerine oturduğunda veri, klasörlerde bekleyen ham kayıt değil, kurumun ne yaptığını ve nereye gitmesi gerektiğini gösteren karar zemini olur."
    },
    "altyapi-bulut-operasyon": {
      scene: "kimsenin görmediği ama herkesin kesintisiz çalışmasını beklediği sunucu, ağ, depolama, izleme ve yedek düzeni",
      risk: "sistemin yalnız kurulum gününde başarılı sayılması; izlenmeyen, belgelenmeyen ve geri döndürülmeyen altyapı ilk ciddi arızada kurumu savunmasız bırakır",
      manager: "kapasite, süreklilik, güvenlik, maliyet ve geri dönüş planını tek işletim disiplini içinde okumak",
      close: "Bu başlık öğrenildiğinde altyapı görünmez bir masraf kalemi olmaktan çıkar ve kamu hizmetinin ayakta kalmasını sağlayan ana omurga olarak görülür."
    },
    "siber-guvenlik": {
      scene: "bir kullanıcının oturum açmasıyla başlayan ve veri, yetki, kayıt, ağ ve insan davranışına kadar genişleyen güven alanı",
      risk: "güvenliğin tek ürünle çözüleceğinin sanılması; araç alınır ama süreç, farkındalık, kayıt ve sorumluluk kurulmazsa açık kapı başka yerden belirir",
      manager: "hangi varlığın neden korunacağını, kabul edilebilir riskin nerede bittiğini ve olay anında kimin ne yapacağını netleştirmek",
      close: "Bu başlık olgunlaştığında güvenlik korku diliyle değil, hizmeti ve vatandaş güvenini koruyan yönetim aklıyla ele alınır."
    },
    "yapay-zeka": {
      scene: "akıllı görünen bir çıktının arkasında duran veri seçimi, model davranışı, insan onayı ve sorumluluk sınırı",
      risk: "demoya aldanmak; ölçülmeyen, açıklanmayan ve denetlenmeyen yapay zeka hızlı görünür ama yanlış kararı daha hızlı yayabilir",
      manager: "verimlilik vaadini mahremiyet, adalet, açıklanabilirlik, güvenlik ve kamu sorumluluğu ile birlikte tartmak",
      close: "Bu başlık yerleştiğinde yapay zeka sihirli bir kutu gibi değil, doğru sınırlarla kullanıldığında karar kalitesini artıran dikkatli bir yardımcı gibi görülür."
    },
    "kamu-surecleri": {
      scene: "teknik ihtiyacın resmi yazı, olur, ihale dokümanı, komisyon kararı, sözleşme ve kabul tutanağına dönüşen idari yolculuğu",
      risk: "teknik doğruluğun tek başına yeterli sanılması; kamu sürecine bağlanmayan iyi fikir, imza, bütçe, yetki veya denetim aşamasında takılır",
      manager: "hukuki iz, idari sorumluluk, mali disiplin ve teknik gereksinimi aynı karar dosyasında buluşturmak",
      close: "Bu başlık kavrandığında kamu süreci yavaşlatan bir formalite gibi değil, kararın izini ve kurumun hesabını koruyan yönetim düzeni olarak okunur."
    },
    "bt-proje-yonetimi": {
      scene: "ihtiyaç cümlesinden başlayıp kapsam, plan, risk, tedarik, test, kabul ve işletime devre kadar uzanan proje hattı",
      risk: "proje yönetiminin yalnız takvim takip etmek sanılması; anlamı netleşmeyen iş, en sonunda gecikme, ek maliyet ve kabul tartışması olarak geri döner",
      manager: "kullanıcı, teknik ekip, tedarikçi, güvenlik, satın alma ve üst yönetimi aynı hedef etrafında konuşturmak",
      close: "Bu başlık oturduğunda proje yöneticisi yalnız toplantı düzenleyen kişi değil, belirsizliği yönetilebilir karara dönüştüren ana bağ olur."
    },
    "yonetisim-strateji": {
      scene: "tek bir teknoloji kararının bütçe, risk, insan kaynağı, bağımlılık, hizmet kalitesi ve uzun vadeli kurum yönüyle birlikte değerlendirildiği yönetim masası",
      risk: "stratejinin güzel hedef cümlelerinden ibaret kalması; ölçülmeyen ve kaynakla bağlanmayan strateji, günlük işlerin gürültüsünde kaybolur",
      manager: "hangi teknoloji yatırımının hangi kamu değerini ürettiğini ve hangi önceliğin neden seçildiğini savunmak",
      close: "Bu başlık olgunlaştığında teknoloji yönetimi satın alma listesi olmaktan çıkar ve kurumun geleceğini şekillendiren bilinçli bir tercih düzenine dönüşür."
    },
    "ust-duzey-liderlik": {
      scene: "teknik ayrıntının insan, kültür, kriz, iletişim, etik ve kurumsal güvenle aynı anda yönetildiği üst seviye karar alanı",
      risk: "liderliğin her şeyi bilmek sanılması; oysa üst düzey yönetici her ayrıntıyı ezberleyen değil, doğru insanları doğru sorularla aynı sorumlulukta buluşturandır",
      manager: "ekibin kapasitesini büyütmek, kriz anında sakin karar vermek ve teknolojiyi kamu yararıyla uyumlu tutmak",
      close: "Bu başlık yerleştiğinde liderlik makam değil, kurumun teknik aklını insan hayatına dokunan hizmetlere dönüştürme sorumluluğu olarak anlaşılır."
    }
  };
  const profile = categoryProfiles[chapter.categoryId] || categoryProfiles["temel-okuryazarlik"];
  const title = chapter.title;
  const lens = chapter.lens;
  const focus = chapter.focus;
  return `${moment} ${title} başlığını bu yüzden soyut bir terim olarak değil, ${profile.scene} içinde okunması gereken bağımsız bir konu gibi ele almak gerekir. Bu sayfanın merkezindeki bilgi şudur: ${focus} Yeni başlayan biri için bu cümle önce tanım gibi durabilir; fakat ${lens} açısından bakıldığında konu hemen kurum hayatına iner. Çünkü her başlık kendi küçük sahnesinde kullanıcıyı, teknik ekibi, resmi süreci, denetim izini ve yönetsel kararı farklı biçimde etkiler. ${title} özelinde ilk sorulacak soru “bu kavram nedir?” değil, “bu kavram yok sayılırsa hangi iş aksar, hangi kayıt eksik kalır, hangi karar yanlış zemine oturur?” sorusudur. Cevap burada başlar: ${profile.risk}. Bu risk yalnız teknik bir kusur değildir; proje takvimini, şartname dilini, kabul kanıtını, bakım sorumluluğunu ve üst yönetimin güven duygusunu da etkiler. Bu nedenle iyi bir proje yöneticisi konuyu masaya aldığında ${profile.manager} görevini üstlenir. Gereksinim yazılırken hangi ifade kullanılacak, testte ne görülecek, kabul komisyonu hangi belgeyle ikna olacak, işletim ekibi bunu nasıl izleyecek, kullanıcı birimi sonucu nerede hissedecek? Bu sorular başlığı dağıtmaz; tersine metnin omurgasını kurar. ${title} öğrenildiğinde okurun elinde yalnız bir tanım değil, toplantıda kullanılabilir bir sezgi kalmalıdır. O sezgi sayesinde kişi konuyu duyduğunda doğru ekibi çağırır, doğru kanıtı ister, yanlış kolaycılığı fark eder ve üst yönetime sade bir cümle kurar. ${profile.close}`;
}

function readingMinutes(chapter) {
  const words = articleText(chapter).split(/\s+/).filter(Boolean).length;
  return Math.max(10, Math.round(words / 180));
}

function renderArticle(chapter) {
  return `<p>${escapeHtml(articleText(chapter))}</p>`;
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
      const isOpen = query || state.activeCategory === category.id || filtered.some((chapter) => chapter.id === activeId);
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
      state.activeCategory = state.activeCategory === id ? null : id;
      renderNav();
    });
  });
}

function renderHome() {
  state.activeCategory = null;
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
            <a class="text-button" href="#/chapter/${aiStartChapter.id}">Yapay zeka bölümüne git</a>
          </div>
        </div>
        <div class="artifact" aria-hidden="true">
          <div class="artifact-lines">
            <i></i><i></i><i></i><i></i><i></i>
          </div>
          <strong>10 ana başlık, 200 alt başlık, tek gelişim rotası.</strong>
        </div>
      </div>
      <div class="stats-row">
        <div><strong>${chapters.length}</strong><span>alt başlık</span></div>
        <div><strong>${categories.length}</strong><span>ana başlık</span></div>
        <div><strong>1</strong><span>yönetici rotası</span></div>
      </div>
    </section>
    <section class="route-panel">
      <h2>Ana Başlıklar</h2>
      <p>${escapeHtml(book.subtitle)}</p>
      <div class="route-grid">
        ${categories
          .map(
            (category) => `
              <a class="route-card" href="#/chapter/${chapters.find((chapter) => chapter.categoryId === category.id).id}">
                <small>${category.categoryNumber}. ana başlık / ${category.chapters.length} alt başlık</small>
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

function renderChapter(id) {
  const chapter = getChapter(id);
  const route = routeInfo(chapter);
  state.activeCategory = chapter.categoryId;
  closeMobileSidebar();
  els.home.classList.add("hidden");
  els.chapter.classList.remove("hidden");

  const progress = Math.round(((route.index + 1) / chapters.length) * 100);
  els.chapter.innerHTML = `
    <article class="article-card">
      <p class="kicker">${chapter.displayNumber} / ${escapeHtml(chapter.categoryTitle)}</p>
      <h1>${escapeHtml(chapter.title)}</h1>
      <p class="chapter-subtitle">${escapeHtml(chapter.categorySummary)}</p>
      <div class="meta-row">
        <span>${readingMinutes(chapter)} dk okuma</span>
        <span>%${progress}</span>
        <span>${escapeHtml(chapter.lens)}</span>
      </div>
      <div class="article-body">${renderArticle(chapter)}</div>
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
