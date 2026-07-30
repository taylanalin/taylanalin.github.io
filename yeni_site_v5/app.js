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
  return items[Math.abs(seed) % items.length];
}

function chapterSeed(chapter) {
  return chapter.number + chapter.numberInCategory * 7 + getCategory(chapter.categoryId).order * 13;
}

function articleIntro(chapter) {
  const seed = chapterSeed(chapter);
  const intros = {
    "temel-okuryazarlik": [
      `${chapter.title} ilk bakışta küçük bir teknik konu gibi durabilir; fakat bilgi teknolojilerinde sağlam yürümek isteyen biri için burası zemindeki taşlardan biridir. ${chapter.focus} Bu zemini kurarken acele edip araç isimlerine atlamak yerine, kavramın günlük kurum hayatında hangi problemi çözdüğünü görmek daha değerlidir.`,
      `Bu bölümde konuyu en yalın yerinden tutalım: ${chapter.focus} Bir kamu hizmeti ekranda tek işlem gibi görünür, ama arkasında cihazdan ağa, işletim sisteminden kayda kadar uzanan sessiz bir düzen vardır. ${chapter.title} o düzenin hangi parçasını aydınlattığını gösterir.`,
      `Teknoloji öğrenirken bazı başlıklar gösterişli değildir ama her yerde karşına çıkar. ${chapter.title} de onlardan biridir. ${chapter.focus} Bu kavramı iyi oturtan kişi, ileride daha karmaşık sistemleri okurken nereden başlayacağını daha rahat bulur.`
    ],
    "yazilim-muhendisligi": [
      `Yazılım dünyasında ${chapter.title.toLocaleLowerCase("tr-TR")} konusunu anlamak, yalnız kod yazanlar için değil, o kodun hangi hizmeti taşıdığını yönetenler için de önemlidir. ${chapter.focus} Çünkü kurumsal yazılım, insan işini makinenin takip edebileceği açık bir düzene dönüştürür.`,
      `${chapter.title} bir uygulamanın görünen yüzüyle görünmeyen emeği arasında duran konulardan biridir. ${chapter.focus} Bu noktayı kavramadan proje takvimi, test kapsamı, bakım maliyeti veya kullanıcı etkisi sağlıklı okunamaz.`,
      `Bir kamu uygulaması başarılı olduğunda kullanıcı çoğu zaman yalnız ekranı görür; başarısız olduğunda ise bütün kurum etkilenir. ${chapter.title}, bu başarının arkasındaki yazılım düşüncesinin bir parçasıdır. ${chapter.focus}`
    ],
    "veri-ve-analitik": [
      `Veriyle ilgili her konu, kurumun hafızasına dokunur. ${chapter.title} bu hafızanın daha doğru, daha sorgulanabilir ve daha güvenilir kullanılmasına yardım eder. ${chapter.focus} Yanlış veriyle kurulan karar, ne kadar güzel raporlanırsa raporlansın kurumu yanlış yöne götürebilir.`,
      `${chapter.title} yalnız teknik bir veri konusu değildir; yönetimin neye inanarak karar verdiğiyle ilgilidir. ${chapter.focus} Bir sayı panoya düştüğünde arkasındaki tanım, kaynak, dönüşüm ve kalite bilinmiyorsa o sayı güven üretmez.`,
      `Kamu kurumunda veri satır satır birikmez; başvuru, hizmet, denetim, ödeme ve vatandaş deneyimi olarak birikir. ${chapter.title}, bu birikimi anlamlı karara dönüştürme zincirindeki önemli halkalardan biridir. ${chapter.focus}`
    ],
    "altyapi-bulut-operasyon": [
      `${chapter.title} konusunu düşünürken akılda tutulması gereken şey şudur: canlı sistemler yalnız kuruldukları gün değil, her gün yeniden sınanır. ${chapter.focus} Bu yüzden altyapı ve operasyon başlıkları, görünmeyen ama hizmeti ayakta tutan yönetim alanlarıdır.`,
      `Bir hizmetin çalışıyor olması başlangıçtır; güvenilir, izlenebilir, ölçeklenebilir ve geri döndürülebilir olması ise olgunluktur. ${chapter.title} bu olgunluğun bir parçasını anlatır. ${chapter.focus}`,
      `Kamu hizmetinde kesinti yalnız teknik arıza değildir; vatandaşın işinin durması, kurumun güven kaybetmesi ve ekiplerin baskı altında kalmasıdır. ${chapter.title}, bu baskıyı azaltacak işletim düşüncesine bağlanır. ${chapter.focus}`
    ],
    "siber-guvenlik": [
      `Güvenlik başlıklarını korku diliyle değil, sorumluluk diliyle okumak gerekir. ${chapter.title}, kurumun hangi varlığı hangi riske karşı nasıl koruyacağını anlamaya yardım eder. ${chapter.focus}`,
      `${chapter.title} güvenliğin tek bir cihaz veya yazılımla çözülemeyeceğini hatırlatır. ${chapter.focus} İnsan, süreç, teknoloji, kayıt ve denetim birlikte çalışmadığında güvenlik kağıt üzerinde kalır.`,
      `Kamu kurumunda güvenlik, yalnız sistemleri değil vatandaşın kuruma duyduğu güveni de korur. ${chapter.title} bu güvenin teknik ve yönetsel taraflarını aynı çerçevede düşünmeyi sağlar. ${chapter.focus}`
    ],
    "yapay-zeka": [
      `Yapay zeka alanında ${chapter.title.toLocaleLowerCase("tr-TR")} konusu, heyecanla temkin arasındaki doğru mesafeyi kurmak için önemlidir. ${chapter.focus} Çünkü akıllı görünen bir sistemin gerçekten değer üretmesi veri, ölçüm, güvenlik ve insan onayıyla mümkündür.`,
      `${chapter.title} yeni teknolojilere kapılmadan önce basit bir soruya dönmeyi sağlar: Bu yetenek hangi işi daha doğru, daha hızlı veya daha güvenilir hale getiriyor? ${chapter.focus}`,
      `Kamu kurumunda yapay zeka yalnız verimlilik aracı değildir; karar kalitesi, mahremiyet, açıklanabilirlik ve sorumluluk meselesidir. ${chapter.title} bu nedenle teknik olduğu kadar yönetsel bir başlıktır. ${chapter.focus}`
    ],
    "kamu-surecleri": [
      `${chapter.title}, teknoloji işinin kamu kurumunda hangi idari zeminde yürüdüğünü gösterir. ${chapter.focus} Bu zemini bilmeyen kişi teknik olarak doğru bir işi yanlış süreçle ilerletip projeyi gereksiz yere zorlaştırabilir.`,
      `Kamu tarafında işlerin yazıya, olura, komisyona, sözleşmeye ve kabule bağlanması bazen yavaşlık gibi görünür; aslında kararın izini korur. ${chapter.title} bu iz düzeninin teknoloji projeleriyle nasıl birleştiğini anlatır. ${chapter.focus}`,
      `Bir kamu BT yöneticisi için ${chapter.title.toLocaleLowerCase("tr-TR")} konusu, teknik bilgi kadar kritik olabilir. ${chapter.focus} Çünkü hizmetin hayata geçmesi çoğu zaman doğru sistem kadar doğru süreçle mümkündür.`
    ],
    "bt-proje-yonetimi": [
      `BT proje yöneticiliğinde ${chapter.title.toLocaleLowerCase("tr-TR")} konusu, işin dağılmadan ilerlemesini sağlayan temel parçalardan biridir. ${chapter.focus} Proje yöneticisi teknik ayrıntıyı, kullanıcı beklentisini, resmi süreci ve teslim kanıtını aynı akışta tutmak zorundadır.`,
      `${chapter.title} iyi yönetilmediğinde küçük belirsizlikler büyüyerek takvim, bütçe, kalite ve kabul sorununa dönüşür. ${chapter.focus} Bu yüzden proje yönetimi, yalnız takip işi değil, anlamı ve sorumluluğu düzenleme işidir.`,
      `Bir projede herkes kendi açısından haklı olabilir; proje yöneticisinin değeri bu haklılıkları ortak plana dönüştürmesidir. ${chapter.title} bu ortak planın kurulmasında özel bir yere sahiptir. ${chapter.focus}`
    ],
    "yonetisim-strateji": [
      `${chapter.title}, teknoloji kararlarını günlük ihtiyaçların ötesine taşıyıp kurumun uzun vadeli yönüyle ilişkilendirir. ${chapter.focus} Üst düzey yönetici için bu başlık, kaynakların neden ve hangi öncelikle kullanılacağını açıklama becerisidir.`,
      `Strateji tarafında mesele daha fazla teknoloji almak değil, doğru teknolojiyle doğru kurumsal değeri üretmektir. ${chapter.title} bu değeri risk, maliyet, bağımlılık ve sürdürülebilirlik açısından okumaya yardım eder. ${chapter.focus}`,
      `${chapter.title} yönetim masasında teknik ayrıntının nasıl karar diline çevrileceğini gösterir. ${chapter.focus} Burada başarı, yalnız projeyi başlatmak değil, yıllar sonra da savunulabilir bir yön kurmaktır.`
    ],
    "ust-duzey-liderlik": [
      `${chapter.title} artık teknik bilginin insan, kurum ve kamu sorumluluğu ile birleştiği seviyeye aittir. ${chapter.focus} Bu seviyede liderlik, her şeyi bilmekten çok doğru insanları, doğru soruları ve doğru karar düzenini kurabilmektir.`,
      `Üst düzey BT liderliği, kriz anında sakin kalmayı, normal zamanda ekip yetiştirmeyi ve stratejik anda kurum adına doğru önceliği seçmeyi gerektirir. ${chapter.title} bu olgunluğun bir parçasını anlatır. ${chapter.focus}`,
      `${chapter.title} kişiyi araç isimlerinden çıkarıp etki, güven, etik, iletişim ve sürdürülebilirlik alanına taşır. ${chapter.focus} Çünkü kamu teknoloji liderliği sonunda insan hayatına dokunan hizmetleri yönetme sorumluluğudur.`
    ]
  };
  return pick(intros[chapter.categoryId], seed);
}

function articleMiddle(chapter) {
  const seed = chapterSeed(chapter);
  const transitions = [
    `Burada dikkat edilmesi gereken ilk şey, konunun tek başına durmadığıdır. Bir karar alındığında kullanıcı deneyimi, hizmet sürekliliği, güvenlik, mevzuat, bütçe, tedarik ve denetim aynı masaya gelir. Bu nedenle öğrenme süreci de tek yönde ilerlememelidir; önce kavram anlaşılır, sonra bu kavramın hangi ekiplerin işini etkilediği ve hangi belgelerde görünür hale geldiği düşünülür.`,
    `Bu konuyu gerçek bir kurum ortamına taşıdığında resim genişler. Teknik ekip uygulanabilirliği, kullanıcı birimi ihtiyacı, güvenlik ekibi riski, satın alma süreci şartları, yönetim ise etkiyi ve önceliği sorar. İyi yönetici bu soruları birbirinden kopuk gündemler gibi değil, aynı kararın farklı yüzleri gibi ele alır.`,
    `Kavramı öğrenirken yalnız olumlu senaryoyu düşünmek yeterli değildir. Gecikirse ne olur, yanlış uygulanırsa kim etkilenir, veri kalitesi bozulursa hangi rapor şaşar, yetki hatası çıkarsa hangi risk doğar, kabul aşamasında hangi kanıt istenir? Bu sorular konuyu ağırlaştırmaz; aksine onu hayata yaklaştırır.`
  ];
  return pick(transitions, seed);
}

function articleProjectFlow(chapter) {
  const seed = chapterSeed(chapter);
  const flows = [
    `BT proje yöneticisi açısından bu bilgi, toplantıda söylenecek güzel bir cümleden fazlasıdır. Gereksinim yazılırken kapsamı netleştirir, risk kaydında belirsizliği görünür yapar, şartname hazırlanırken ölçülebilir maddeye dönüşür, test planında doğrulama adımı olur ve kabul komisyonu önüne geldiğinde kanıtla konuşur. Böyle ilerleyen projede bilgi parçalanmaz; fikirden teslimata kadar aynı çizgide taşınır.`,
    `Proje akışında bu başlık önce ihtiyaç cümlesine, sonra teknik değerlendirmeye, ardından plan ve sorumluluk paylaşımına dönüşür. Eğer dış tedarikçi varsa sözleşme ve SLA tarafı da bu akışa eklenir; kamu tarafında resmi yazı, olur, ihale dokümanı veya kabul tutanağı gerektiğinde konu idari zemine oturur. Proje yöneticisi tam da bu geçişleri koparmadan yöneten kişidir.`,
    `Bu yüzden proje yöneticisi, konuyu kimden dinlediğine göre anlamını değiştirmemelidir. Kullanıcı başka, mühendis başka, güvenlik uzmanı başka, satın alma başka kelimeler kullanabilir; ama proje yöneticisi bu kelimeleri aynı hedefe bağlar. İyi tutanak, iyi karar kaydı ve iyi kabul kriteri bu ortak anlamı korumak için vardır.`
  ];
  return pick(flows, seed);
}

function articlePractice(chapter) {
  const seed = chapterSeed(chapter);
  const examples = [
    "başvuru alma",
    "randevu verme",
    "ödeme toplama",
    "belge doğrulama",
    "kurum içi raporlama",
    "vatandaş bilgilendirme",
    "denetim kaydı oluşturma",
    "kurumlar arası veri paylaşımı"
  ];
  const example = pick(examples, seed);
  return `Bunu pekiştirmek için ${example} gibi sade bir kamu hizmetini gözünün önüne getir. ${chapter.title} bu hizmetin neresinde duruyor, kullanıcı hangi adımda sonucunu hissediyor, teknik ekip hangi noktada işletiyor, yönetici bunu hangi karara bağlıyor, denetçi hangi kayıtla izliyor? Aynı hizmet üzerinde bu soruları sormak metni daha canlı hale getirir; çünkü konu artık soyut bir başlık değil, kurum içinde ilerleyen gerçek bir iş akışı olur.`;
}

function articleClosing(chapter) {
  const seed = chapterSeed(chapter);
  const closings = [
    `${chapter.title} üzerinde yetkinleşmek, onu ezberlemekten çok doğru bağlama yerleştirmektir. Konu önce teknik anlamıyla anlaşılır, sonra proje yönetimi içinde sorumluluk kazanır, kamu sürecinde belge ve onay düzenine bağlanır, en sonunda üst yönetim seviyesinde risk, maliyet ve değer diliyle savunulur. Bu zincir kurulduğunda bilgi dağılmaz; kişinin karar alma gücünü artırır.`,
    `Bu başlığın sonunda beklenen şey, okurun yalnız tanım yapabilmesi değildir. Beklenen şey, bir projede bu konu ortaya çıktığında hangi soruları soracağını, hangi ekibi masaya çağıracağını, hangi kanıtı arayacağını ve hangi kararı üst makama nasıl anlatacağını sezebilmesidir. Üst düzey kamu BT yöneticiliği tam olarak bu sezginin üzerine kurulur.`,
    `Sonuçta ${chapter.title}, 200 başlıklı rotanın tek bir tuğlası gibi düşünülebilir. Tek başına küçük görünebilir; fakat önceki ve sonraki başlıklarla birleştiğinde teknolojiyle kurum yönetme becerisini güçlendirir. Bu yüzden okurken amaç hızlı geçmek değil, kavramın kurum hayatındaki yerini sakin biçimde görmektir.`
  ];
  return pick(closings, seed);
}

function articleParagraphs(chapter) {
  return [
    articleIntro(chapter),
    articleMiddle(chapter),
    articleProjectFlow(chapter),
    articlePractice(chapter),
    articleClosing(chapter)
  ];
}

function readingMinutes(chapter) {
  const words = articleParagraphs(chapter).join(" ").split(/\s+/).filter(Boolean).length;
  return Math.max(10, Math.round(words / 180));
}

function renderArticle(chapter) {
  return articleParagraphs(chapter).map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("");
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
