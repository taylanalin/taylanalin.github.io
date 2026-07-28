const book = {
  title: "Teknoloji Atlası",
  kicker: "Kamu, Yazılım ve Gelecek İçin Saha Kitabı",
  subtitle: "Kamu, savunma sanayii, büyük ölçekli özel sektör, yazılım, altyapı, siber güvenlik ve yapay zekâ projelerini aynı teknoloji haritasında buluşturan koyu temalı okuma sitesi.",
  promise:
    "Bir sabah kullanıcı ekranı açılmaz, öğleden sonra tedarikçi toplantısı başlar, akşam kabul tutanağı masaya gelir. Teknoloji Atlası, o günün içinde kodun, kurumun, insanın, bütçenin ve mimarinin nasıl birbirine bağlandığını anlatır."
};

const categories = [
  {
    id: "kamu-rehberi",
    title: "Kamu Rehberi",
    summary: "İhale, resmi yazı, kabul komisyonu, protokol, denetim, veri güvenliği ve kurumsal hafıza.",
    mode: "public",
    chapters: [
      "Kamu rehberine giriş: kurumun dili, imzanın ağırlığı",
      "İhtiyacın doğru tarif edilmesi",
      "Teknik şartname ve ölçülebilir kabul",
      "Yaklaşık maliyet, piyasa araştırması ve bütçe savunması",
      "Muayene, kabul ve teslim kanıtları",
      "Resmi yazı, olur, onay ve karar izi",
      "Protokol, veri paylaşımı ve kurumlar arası sınır",
      "Kişisel veri, KVKK ve bilgi güvenliği sorumluluğu",
      "Denetim izi, arşiv ve kurumsal hafıza",
      "Tedarikçi yönetimi, bakım ve destek",
      "Lisans, envanter ve varlık disiplini",
      "Acil durum, yedekleme ve iş sürekliliği",
      "Taşra teşkilatı, merkez ve saha gerçekliği",
      "Kamu yöneticisinin toplantı dili",
      "Kamu BT yöneticisi için bütün resim"
    ]
  },
  {
    id: "insanlar",
    title: "İnsanlar ve Teknoloji",
    summary: "Teknik insanlar ne söyler, ne düşünür, neden direnir, neyi saklar ve hangi baskıyla karar verir?",
    mode: "people",
    chapters: [
      "İnsanlar ve teknoloji: söylenen cümlenin arkasındaki ihtiyaç",
      "Kamu personelinin güvenlik ve sorumluluk kaygısı",
      "Özel sektör teknik ekibinin hız ve performans baskısı",
      "Yazılımcı, sistemci, ağcı ve güvenlikçi aynı olaya nasıl bakar?",
      "Tedarikçi sunumunda parlayan cümlelerin arkasını okumak",
      "Üst makam, saha ekibi ve kullanıcı arasında tercüman olmak",
      "Değişime direnç: tembellik değil çoğu zaman korunma refleksi",
      "Toplantı psikolojisi ve sessiz kalan riskler",
      "Başarıyı sahiplenen, hatayı dağıtan organizasyonlar",
      "Teknik borcun insan davranışına dönüşmesi",
      "Kriz anında karakter, görev ve iletişim",
      "İyi ekip kültürünün kurumsal hafızaya dönüşmesi"
    ]
  },
  {
    id: "tarihsel-evrim",
    title: "Teknolojinin Tarihsel Evrimi",
    summary: "İlk bilgisayardan bugünün bulut, mobil, siber güvenlik ve yapay zekâ dünyasına kronolojik yolculuk.",
    mode: "history",
    chapters: [
      "Teknoloji tarihine giriş: hesap ihtiyacından kurum zekâsına",
      "İlk bilgisayarlar: savaş, sayım ve hız ihtiyacı",
      "Transistor ve mainframe: güvenilir makine kurumun merkezine giriyor",
      "Programlama dillerinin doğuşu: makineye iş dili öğretmek",
      "Unix, dosya sistemi ve çok kullanıcılı dünya",
      "İlişkisel veritabanı ve SQL: kurum hafızasının düzenlenmesi",
      "Mikroişlemci, kişisel bilgisayar ve grafik arayüz",
      "Yerel ağlar, Ethernet ve client-server düzeni",
      "Web'in doğuşu: HTTP, HTML, URL ve tarayıcı",
      "Açık kaynak, Linux ve internetin üretim kültürü",
      "E-ticaret, arama motorları ve veri ekonomisi",
      "Sanal makine, bulut ve kullandıkça öde mantığı",
      "Akıllı telefon, mobil uygulama ve sürekli kullanıcı beklentisi",
      "Büyük veri, log analizi ve olay tabanlı mimari",
      "DevOps, konteyner ve Kubernetes dönemi",
      "Siber güvenliğin kurumsal yönetime dönüşmesi",
      "Üretken yapay zekâ, RAG ve ajan sistemleri",
      "Dijital egemenlik, yarı iletken yarışı ve yakın gelecek"
    ]
  },
  {
    id: "kamu-bt",
    title: "Türkiye'de Kamu BT Birimleri",
    summary: "Cumhurbaşkanlığı, bakanlıklar, bağlı kurumlar, belediyeler, üniversiteler ve savunma şirketlerinde BT işleyişi.",
    mode: "publicIt",
    chapters: [
      "Kamu BT dünyasına giriş: merkez, taşra, şirket ve hizmet",
      "Cumhurbaşkanlığı ve merkezi dijital dönüşüm koordinasyonu",
      "Bakanlık bilgi işlem dairesinin gerçek işi",
      "Genel müdürlük, bağlı kuruluş ve taşra BT ilişkisi",
      "Belediye ve üniversite bilgi işleminde günlük işletme",
      "ASELSAN benzeri savunma şirketinde kurumsal BT",
      "HAVELSAN benzeri yazılım ve sistem entegrasyonu kültürü",
      "Yazılım geliştirme, entegrasyon ve veri ekipleri",
      "Sistem, sanallaştırma, veri merkezi ve yedekleme ekibi",
      "Ağ, güvenlik duvarı, internet çıkışı ve kurumun damarları",
      "Siber güvenlik biriminin günlük ritmi",
      "Servis masası, kullanıcı desteği ve beklenti yönetimi",
      "Lisans, envanter, varlık ve tedarik disiplini",
      "İş sürekliliği, felaket kurtarma ve tatbikat",
      "Kamu BT yöneticisinin kazanması gereken arka plan"
    ]
  },
  {
    id: "saha-hikayeleri",
    title: "Kamu ve Özel Sektörden Teknolojik Hikâyeler",
    summary: "Gerçek hayattan esinlenen, öğretici ve toplantı havasını hissettiren teknoloji öyküleri.",
    mode: "story",
    chapters: [
      "Hikâyelere giriş: toplantı kokusundan sistem okumak",
      "Bakanlık entegrasyonunda imza bekleyen karar",
      "Savunma üretim hattında kaybolan parça izi",
      "Komuta kontrol projesinde kabul provası",
      "Bankada cuma akşamı canlıya geçiş",
      "Kargo firmasının API krizi",
      "Belediyede seçim gecesi bilgi işlem nöbeti",
      "Üniversitede kayıt haftası ve kapasite baskısı",
      "Çağrı merkezinden gelen ilk teknik sinyal",
      "KVKK toplantısında yeniden çizilen veri akışı",
      "Tedarikçi sunumunda parlayan ama ölçülmeyen vaat",
      "Veri aktarım gecesinde bekleyen ekip",
      "Saha ekibinin söylemediği gerçek",
      "Kapanış toplantısında kalan ders"
    ]
  },
  {
    id: "proje-yonetimi",
    title: "Proje Yönetimi",
    summary: "Kamu ve özel sektörde proje yöneticisi olacak kişiyi süreç, risk, kabul ve iletişim disiplinine hazırlar.",
    mode: "project",
    chapters: [
      "Proje yönetimine giriş: işi formdan çıkarıp akışa çevirmek",
      "Kapsam, hedef ve başarı ölçütünün kurulması",
      "Paydaş haritası, karar makamı ve sorumluluk matrisi",
      "İş analizi, kullanıcı hikâyesi ve gereksinim netliği",
      "Plan, takvim, bağımlılık ve kritik yol",
      "Risk, varsayım ve sorun kaydı",
      "Değişiklik yönetimi ve kapsam kayması",
      "Tedarikçi performansı ve sözleşme takibi",
      "Test stratejisi, hata yönetimi ve kabul hazırlığı",
      "Canlıya geçiş planı, geri dönüş ve iletişim",
      "Kalite, dokümantasyon ve proje hafızası",
      "Bütçe, kaynak ve kapasite yönetimi",
      "Agile, Scrum, Kanban ve kamu gerçekliği",
      "Kriz anında proje yöneticisinin tutumu",
      "Proje kapanışı ve devre alma",
      "İyi proje yöneticisinin karar kası"
    ]
  },
  {
    id: "teknik-yonetici",
    title: "Teknik Üst Düzey Yönetici Notları",
    summary: "Yönetici dili, ekip psikolojisi, üst makam, tedarikçi, bütçe, risk ve karar alma.",
    mode: "leadership",
    chapters: [
      "Teknik yöneticiliğe giriş: ayrıntıyı boğmadan bütünü görmek",
      "Üst makama teknik meseleyi sade anlatmak",
      "Ekip kurmak: uzmanlık, güven ve ölçü",
      "Karar almak: hız, risk ve geri dönüş yolu",
      "Tedarikçiyle masaya oturmak",
      "Bütçeyi savunmak ve maliyeti görünür kılmak",
      "Krizde iletişim ve sorumluluk",
      "Mimari kararların organizasyona etkisi",
      "Güvenlik, mevzuat ve iş sürekliliğini aynı masaya almak",
      "Kurum hafızası oluşturan yönetici davranışı",
      "Yenilik, pilot proje ve kontrollü yaygınlaştırma",
      "Üst düzey BT yöneticisi için kişisel rota"
    ]
  },
  {
    id: "kriz-cozum",
    title: "Teknolojik Krizler ve Çözümleri",
    summary: "Kesinti, veri kaybı, siber saldırı, performans çöküşü ve itibar krizlerinde pratik lider refleksi.",
    mode: "crisis",
    chapters: [
      "Krizlere giriş: ilk dakika, ilk karar, ilk kayıt",
      "Veritabanı kilidi ve yavaş sorgu",
      "SSL sertifikası, DNS ve erişim kesintisi",
      "Yanlış ortamın canlı sanılması",
      "DDoS baskısı ve trafik savunması",
      "Yedek dönmüyor: kâğıt üstündeki güvenin çökmesi",
      "Disk doldu ama kimse görmedi",
      "Cache eski fiyat gösterdi",
      "Mesaj kuyruğu birikti ve işler geride kaldı",
      "Yetki matrisi delindi",
      "Üçüncü taraf servis durdu",
      "Kriz sonrası olay raporu ve kalıcı düzeltme"
    ]
  },
  {
    id: "buyuk-mimariler",
    title: "Büyük Projeler ve Mimari Görseller",
    summary: "Trendyol benzeri e-ticaret, banka, kamu portalı, savunma ve sağlık sistemlerinin arka planı.",
    mode: "architecture",
    chapters: [
      "Mimariye giriş: ekrandaki tek işlem, arkadaki büyük akış",
      "Trendyol benzeri sipariş yolculuğu",
      "Ödeme sisteminde saniyelerin hesabı",
      "Kargo ve lojistik takip mimarisi",
      "Kamu kapısı başvuru akışı",
      "Hastane randevu ve hasta kabul sistemi",
      "Banka para transferi arka planı",
      "Savunma üretiminde dijital iz",
      "Komuta kontrol ve simülasyon mimarisi",
      "Çağrı merkezi ve CRM entegrasyonu",
      "Gerçek zamanlı bildirim sistemi",
      "Kimlik, yetki ve oturum mimarisi",
      "Raporlama ve veri ambarı akışı",
      "Mobil uygulama ile backend arasındaki yol",
      "Yüksek trafikte ölçekleme ve hata yalıtımı"
    ]
  },
  {
    id: "yakin-gelecek",
    title: "Yakın Geçmiş ve Gelecek",
    summary: "Son yılların büyük kırılmaları ve önümüzdeki döneme dair temkinli teknik öngörüler.",
    mode: "future",
    chapters: [
      "Yakın geçmişe giriş: hızlanan teknoloji, yavaş değişen kurum",
      "Pandemi ve uzaktan çalışma altyapısı",
      "Bulutun olgunlaşması ve dijital egemenlik tartışması",
      "Sıfır güven, kimlik merkezli güvenlik ve yeni sınır",
      "Yapay zekânın ofise girişi",
      "Veri merkezlerinde enerji, GPU ve kapasite baskısı",
      "Edge computing, IoT ve sahada karar",
      "Low-code, no-code ve gölge BT riski",
      "Yarı iletken yarışı ve tedarik bağımlılığı",
      "Kuantum hazırlığı ve uzun ömürlü verinin korunması",
      "Önümüzdeki beş yılın kurum ajandası",
      "Geleceği tahmin etmek için bugünün baskısını okumak"
    ]
  },
  {
    id: "teknoloji-atlasi-yazilim",
    title: "Teknoloji Atlası: Yazılım ve Veri",
    summary: "Programlama dilleri, web, backend, API, veritabanı, cache, arama, kuyruk ve DevOps ailesi.",
    mode: "software",
    chapters: [
      "Yazılım ve veri atlasına giriş: parçaları ailelere ayırmak",
      "Programlama dilleri: Java, Python, C#, JavaScript",
      "Web arayüzü: HTML, CSS, TypeScript, React ve Vue",
      "Backend ve servis mantığı: Node.js, Java, .NET ve Python",
      "API ve entegrasyon sözleşmeleri: REST, GraphQL ve API Gateway",
      "Veritabanı ailesi: PostgreSQL, SQL ve kalıcı kayıt",
      "Hız ve geçici veri katmanı: Redis, cache ve CDN",
      "Arama ve log analizi: Elasticsearch, Logstash ve Kibana",
      "Mesajlaşma ve olay akışı: Kafka ve RabbitMQ",
      "Paketleme, teslimat ve ekip hafızası: Docker, Git, GitHub ve CI/CD",
      "Yazılım atlasını büyük projede birlikte okumak"
    ]
  },
  {
    id: "teknoloji-atlasi-sistem-ag",
    title: "Teknoloji Atlası: Sistem, Ağ ve Donanım",
    summary: "Sunucu, işlemci, bellek, disk, ağ, sanallaştırma, veri merkezi, yedekleme ve işletim omurgası.",
    mode: "systems",
    chapters: [
      "Sistem, ağ ve donanım atlasına giriş: yazılımın fiziksel zemini",
      "Bilgisayar donanımı: CPU, RAM, disk ve anakart",
      "Sunucu donanımı: rack, blade, HCI ve kurumsal kapasite",
      "Depolama sistemleri: SAN, NAS, RAID, SSD ve NVMe",
      "Ağ temeli: switch, router, VLAN, subnet ve omurga",
      "İnternet kapısı: DNS, DHCP, NAT, VPN ve sertifika",
      "Trafik yönetimi: Nginx, reverse proxy ve load balancer",
      "Sanallaştırma: VMware, Hyper-V, KVM ve kaynak paylaşımı",
      "Platform işletimi: Docker, Kubernetes ve servis sağlığı",
      "Veri merkezi: kabin, enerji, UPS, jeneratör ve soğutma",
      "Yedekleme, felaket kurtarma ve monitoring"
    ]
  },
  {
    id: "teknoloji-atlasi-siber",
    title: "Teknoloji Atlası: Siber Güvenlik",
    summary: "Kimlik, yetki, firewall, WAF, EDR, SIEM, SOC, zafiyet, KVKK, olay müdahalesi ve güvenlik kültürü.",
    mode: "security",
    chapters: [
      "Siber güvenlik atlasına giriş: riskin görünür hale gelmesi",
      "Kimlik güvenliği: IAM, MFA, SSO ve PAM",
      "Ağ güvenliği: firewall, IDS/IPS, WAF ve segmentasyon",
      "Uç nokta güvenliği: EDR, antivirüs, hardening ve cihaz yönetimi",
      "Zafiyet ve yama yönetimi",
      "Log, SIEM ve SOC: alarmdan olaya giden hat",
      "Veri güvenliği: sınıflandırma, DLP, KVKK ve maskeleme",
      "Uygulama güvenliği: OWASP, güvenli kod ve test",
      "Olay müdahalesi: tespit, çevreleme, temizleme ve öğrenme",
      "Tedarik zinciri güvenliği",
      "Siber tatbikat ve güvenlik kültürü"
    ]
  },
  {
    id: "teknoloji-atlasi-yapay-zeka",
    title: "Teknoloji Atlası: Yapay Zekâ",
    summary: "Makine öğrenmesi, üretken yapay zekâ, LLM, embedding, RAG, ajanlar, MLOps ve denetlenebilirlik.",
    mode: "ai",
    chapters: [
      "Yapay zekâ atlasına giriş: model değil iş akışı",
      "Makine öğrenmesi, derin öğrenme ve üretken modeller",
      "Veri hazırlığı, kalite ve yönetişim",
      "LLM ve prompt kullanımı",
      "Embedding ve vektör arama",
      "RAG ve kurumsal bilgi asistanları",
      "Ajan sistemleri ve araç kullanımı",
      "Model değerlendirme: doğruluk ve halüsinasyon",
      "MLOps, LLMOps ve model yaşam döngüsü",
      "GPU, maliyet ve kapasite planı",
      "Yapay zekâ güvenliği, etik ve denetlenebilirlik"
    ]
  },
  {
    id: "hap-bilgiler",
    title: "Rastgele Hap Bilgiler",
    summary: "500 rastgele sayfada, her sayfada 10 açıklayıcı teknik ve yönetsel kısa not.",
    mode: "pills",
    chapters: Array.from({ length: 500 }, (_, index) => `Hap bilgi sayfası ${index + 1}`)
  }
];

categories.forEach((category, index) => {
  category.order = index + 1;
  category.count = category.chapters.length;
});

const glossary = {
  "API": "İki sistemin belirli kurallarla konuşmasını sağlayan arayüzdür.",
  "API Gateway": "API trafiğini kimlik, limit, yönlendirme ve izleme kurallarıyla yöneten ana kapıdır.",
  "CDN": "Statik içerikleri kullanıcıya yakın noktalardan sunarak gecikmeyi azaltan dağıtım ağıdır.",
  "CI/CD": "Kodun test edilip paketlenerek kontrollü biçimde ortama alınmasını sağlayan teslimat hattıdır.",
  "CPU": "Bilgisayarın işlem yapan ana hesaplama birimidir.",
  "DDoS": "Bir hizmeti çok yoğun sahte trafikle erişilemez hale getirmeye çalışan saldırı türüdür.",
  "DHCP": "Cihazlara otomatik ağ adresi dağıtan servistir.",
  "DLP": "Hassas verinin kurum dışına kontrolsüz çıkmasını önlemeye çalışan veri güvenliği yaklaşımıdır.",
  "DNS": "Alan adını IP adresine çeviren internet rehberidir.",
  "Docker": "Uygulamayı bağımlılıklarıyla birlikte taşınabilir konteyner paketine koyar.",
  "EDR": "Sunucu ve kullanıcı cihazlarında şüpheli davranışları izleyen uç nokta güvenliği çözümüdür.",
  "Elasticsearch": "Büyük metin, ürün, belge ve log kümelerinde hızlı arama sağlayan arama motorudur.",
  "Embedding": "Metin veya belgeleri anlam benzerliği kurulabilecek sayısal temsillere dönüştürme yaklaşımıdır.",
  "Firewall": "Ağ trafiğini izin ve engel kurallarına göre süzen güvenlik duvarıdır.",
  "Git": "Kod değişikliklerinin geçmişini tutan versiyon kontrol sistemidir.",
  "GitHub": "Git depolarını ekip çalışması, kod inceleme ve otomasyonla yöneten platformdur.",
  "GraphQL": "İstemcinin ihtiyaç duyduğu veriyi daha esnek biçimde sorgulamasını sağlayan API yaklaşımıdır.",
  "GPU": "Paralel hesaplama gücü yüksek olduğu için grafik ve yapay zekâ işlerinde kullanılan işlem birimidir.",
  "HCI": "Sunucu, depolama ve sanallaştırma kaynaklarını tek platformda birleştiren altyapı yaklaşımıdır.",
  "HTML": "Web sayfasının iskeletini kuran işaretleme dilidir.",
  "CSS": "Web sayfasının görünümünü ve yerleşimini belirleyen stil dilidir.",
  "IAM": "Kimlik ve erişim yönetimi disiplinidir.",
  "IDS/IPS": "Ağdaki saldırı izlerini tespit eden veya engelleyen güvenlik sistemleridir.",
  "Java": "Uzun ömürlü kurumsal servislerde sık kullanılan programlama dilidir.",
  "JavaScript": "Web arayüzlerinde ve sunucu tarafında kullanılabilen programlama dilidir.",
  "JWT": "Kimlik ve yetki bilgisini imzalı token içinde taşıyan formattır.",
  "Kafka": "Olayları yüksek hacimde taşıyan dağıtık mesajlaşma ve akış platformudur.",
  "Kibana": "Elasticsearch verisini paneller, grafikler ve arama ekranlarıyla görünür kılar.",
  "Kubernetes": "Konteynerleri çok sayıda sunucuda çalıştıran ve yöneten orkestrasyon platformudur.",
  "KVKK": "Kişisel verilerin işlenmesi, saklanması ve korunmasına ilişkin Türkiye'deki temel kanundur.",
  "LLM": "Metin anlama ve üretme işlerinde kullanılan büyük dil modelidir.",
  "Logstash": "Log ve veri akışlarını toplayıp dönüştürerek hedef sistemlere gönderen araçtır.",
  "MFA": "Girişte parolaya ek ikinci doğrulama adımı kullanılmasıdır.",
  "MLOps": "Makine öğrenmesi modellerini canlı ortamda güvenilir biçimde yönetme disiplinidir.",
  "NAS": "Ağ üzerinden dosya paylaşımı sağlayan depolama sistemidir.",
  "NAT": "Özel ağ adreslerini internete çıkarken başka adreslere çeviren ağ tekniğidir.",
  "Nginx": "Web sunucusu, ters vekil ve yük dengeleme amacıyla kullanılan yazılımdır.",
  "NVMe": "SSD disklerde yüksek hızlı veri erişimi sağlayan modern bağlantı protokolüdür.",
  "OAuth2": "Şifre paylaşmadan sınırlı yetki vermeyi sağlayan yetkilendirme standardıdır.",
  "Object storage": "Dosya, görsel, yedek ve büyük nesneleri ölçekli biçimde saklayan depolama türüdür.",
  "OWASP": "Web uygulama güvenliği risklerini ve iyi uygulamaları derleyen açık topluluktur.",
  "PAM": "Ayrıcalıklı hesapların güvenli yönetimi için kullanılan yaklaşımdır.",
  "PostgreSQL": "Kalıcı ve tutarlı kayıtlar için kullanılan açık kaynak ilişkisel veritabanıdır.",
  "RabbitMQ": "İşleri kuyruğa koyup servisler arasında kontrollü teslimat sağlayan mesajlaşma sistemidir.",
  "RAG": "Yapay zekânın cevap üretirken kurum belgelerinden bağlam almasını sağlayan yaklaşımdır.",
  "RAID": "Diskleri performans veya dayanıklılık amacıyla birlikte kullanan depolama tekniğidir.",
  "RAM": "Bilgisayarın çalışırken hızlıca kullandığı geçici bellektir.",
  "Redis": "Sık okunan veya geçici veriyi bellekte tutarak sistemi hızlandıran veri deposudur.",
  "REST": "HTTP üzerinden kaynak temelli API tasarlama yaklaşımıdır.",
  "RPO": "Veri kaybı açısından kabul edilebilir en uzun zaman aralığıdır.",
  "RTO": "Bir hizmetin ne kadar sürede ayağa kaldırılması gerektiğini ifade eder.",
  "SAN": "Sunuculara yüksek hızlı blok depolama sağlayan kurumsal depolama ağıdır.",
  "SIEM": "Güvenlik loglarını toplayıp ilişkilendirerek alarm ve olay görünürlüğü sağlayan sistemdir.",
  "SOC": "Güvenlik olaylarını izleyen ve müdahale eden operasyon merkezidir.",
  "SQL": "İlişkisel veritabanlarında veri sorgulamak için kullanılan dildir.",
  "SSD": "Mekanik diskten daha hızlı çalışan yarı iletken depolama birimidir.",
  "SSO": "Kullanıcının bir kimlikle birden fazla sisteme erişmesini sağlayan tek oturum açma yaklaşımıdır.",
  "TypeScript": "JavaScript'e tip sistemi ekleyerek büyük projelerde hata riskini azaltan dildir.",
  "UPS": "Elektrik kesintisinde sistemlere kısa süreli enerji sağlayan kesintisiz güç kaynağıdır.",
  "VLAN": "Aynı fiziksel ağ üzerinde mantıksal ağ bölümleri oluşturan tekniktir.",
  "VPN": "Uzak bağlantıyı şifreli ağ tüneli üzerinden sağlayan teknolojidir.",
  "WAF": "Web uygulamalarına gelen şüpheli istekleri süzen güvenlik duvarıdır.",
  "Vector Database": "Embedding değerlerini saklayıp anlam benzerliğine göre hızlı arama yapan veritabanı türüdür.",
  "Zero Trust": "Hiçbir kullanıcı veya cihazı varsayılan olarak güvenilir kabul etmeyen güvenlik yaklaşımıdır."
};

const modeLexicon = {
  public: {
    scene: "kurum koridorunda kararın yalnız teknik gerekçeyle değil, imza, mevzuat, bütçe ve denetimle birlikte yürüdüğü görülür",
    actors: "talep sahibi birim, bilgi işlem, hukuk, satın alma, muayene kabul komisyonu, tedarikçi ve üst yönetim aynı işin farklı yüzlerine bakar",
    stakes: "yanlış yazılan ihtiyaç, iyi çalışan bir sistemi bile kabul gününde tartışmalı hale getirebilir",
    tech: ["KVKK", "API", "Log", "PostgreSQL", "Yedekleme", "Monitoring"]
  },
  people: {
    scene: "aynı toplantıda yazılımcı hız, sistemci süreklilik, güvenlikçi risk, kullanıcı ise işinin aksamasını düşünür",
    actors: "ekip lideri, uzman, kullanıcı temsilcisi, tedarikçi, üst makam ve destek ekibi aynı kelimeleri kullansa bile çoğu zaman farklı şeyler kasteder",
    stakes: "insanı anlamayan teknik karar, doğru araçla bile yanlış alışkanlık üretir",
    tech: ["Git", "CI/CD", "Monitoring", "SIEM", "API"]
  },
  history: {
    scene: "her yeni teknoloji bir önceki dönemin yetmeyen hızına, artan verisine veya büyüyen koordinasyon ihtiyacına cevap olarak doğar",
    actors: "mühendisler, kurumlar, kullanıcılar, üreticiler, devletler ve pazar baskısı aynı tarih çizgisinde birbirini iter",
    stakes: "tarihi yalnız yıl sırası gibi okumak yetmez; hangi ihtiyacın hangi aracı doğurduğunu görmek gerekir",
    tech: ["CPU", "RAM", "SQL", "Linux", "HTTP", "Kubernetes", "RAG"]
  },
  publicIt: {
    scene: "kamu BT birimi sabah kullanıcı çağrısıyla, öğlen entegrasyon toplantısıyla, akşam yedek raporuyla aynı gün içinde uğraşabilir",
    actors: "bilgi işlem dairesi, yazılım ekibi, sistem ekibi, ağ ekibi, siber güvenlik, veri merkezi, servis masası ve tedarikçiler birbirine bağlı çalışır",
    stakes: "BT'nin arka plandaki işi görünmez kaldığında kurum yalnız hata anında teknolojiyle yüzleşir",
    tech: ["VPN", "DNS", "Firewall", "SIEM", "PostgreSQL", "Kubernetes"]
  },
  story: {
    scene: "hikâye bir toplantıyla başlar, fakat asıl mesele çoğu zaman ekrandaki hata değil o hatayı doğuran eski karar zinciridir",
    actors: "proje yöneticisi, teknik ekip, saha temsilcisi, tedarikçi ve karar makamı birbirinden eksik parçaları tamamlamaya çalışır",
    stakes: "yaşanmış gibi anlatılan olay, okurun ileride benzer masada daha erken soru sormasını sağlar",
    tech: ["API", "Log", "Redis", "Kafka", "PostgreSQL", "SIEM"]
  },
  project: {
    scene: "proje yönetimi takvim tutmaktan ibaret değildir; belirsizliği görünür hale getirip ekibin aynı gerçeğe bakmasını sağlar",
    actors: "sponsor, iş birimi, proje yöneticisi, analist, geliştirici, testçi, operasyon ve tedarikçi planın farklı risklerini taşır",
    stakes: "kapsam, kabul ölçütü ve karar kaydı net değilse proje ilerledikçe teknik başarı bile yönetim başarısına dönüşmez",
    tech: ["GitHub", "CI/CD", "Jira", "API", "Monitoring", "Docker"]
  },
  leadership: {
    scene: "üst düzey teknik yönetici ayrıntıyı bilmek zorundadır ama ayrıntının içinde kaybolmadan karar etkisini konuşur",
    actors: "uzman ekipler, üst makam, tedarikçi, denetçi, kullanıcı ve kurum dışı paydaşlar farklı hızlarda karar bekler",
    stakes: "iyi yönetici teknolojinin ne işe yaradığını, hangi riski taşıdığını ve hangi insan düzeniyle yaşayacağını birlikte görür",
    tech: ["SIEM", "Kubernetes", "PostgreSQL", "RAG", "CI/CD", "VPN"]
  },
  crisis: {
    scene: "krizde ilk ihtiyaç panik azaltmak, etki alanını görmek ve doğrulanmış bilgiyle konuşmaktır",
    actors: "nöbetçi ekip, uygulama sahibi, sistemci, ağcı, güvenlikçi, tedarikçi ve yönetici aynı zaman çizelgesine bağlanır",
    stakes: "kayıt yoksa kriz bittiğinde bile kurum ne öğrendiğini bilemez",
    tech: ["Log", "Monitoring", "DNS", "Load balancer", "Redis", "SIEM"]
  },
  architecture: {
    scene: "büyük sistemlerde kullanıcı tek ekran görür; arka tarafta servisler, veritabanları, kuyruklar, önbellekler ve güvenlik katmanları birlikte çalışır",
    actors: "ürün ekibi, yazılım, veri, altyapı, siber güvenlik, operasyon ve iş birimi aynı akışın farklı duraklarına sahip çıkar",
    stakes: "mimari doğru okunmazsa sorun ekranda görünür ama sebebi çok daha geride kalır",
    tech: ["CDN", "WAF", "API Gateway", "PostgreSQL", "Redis", "Kafka", "Elasticsearch", "Kibana"]
  },
  future: {
    scene: "yakın gelecek, bugünün moda kelimelerinden değil kurumların büyüyen kapasite, güvenlik, veri ve insan baskısından doğar",
    actors: "devletler, teknoloji şirketleri, kurum yöneticileri, güvenlik ekipleri, kullanıcılar ve tedarikçiler aynı değişimin farklı tarafında durur",
    stakes: "öngörü, kesin kehanet değil; hangi baskının büyüdüğünü doğru okumaktır",
    tech: ["RAG", "GPU", "Zero Trust", "VPN", "Object storage", "Kubernetes"]
  },
  software: {
    scene: "yazılım ve veri tarafında amaç aracı ezberlemek değil, hangi ihtiyacın hangi teknoloji ailesiyle çözüldüğünü görmektir",
    actors: "geliştirici, mimar, veri ekibi, DevOps, test ekibi ve ürün sahibi aynı yazılımın farklı sorumluluklarını taşır",
    stakes: "dil, veritabanı, API, kuyruk ve teslimat hattı birlikte düşünülmezse sistem büyüdükçe bakım zorlaşır",
    tech: ["Java", "Python", "C#", "JavaScript", "TypeScript", "REST", "PostgreSQL", "Redis", "Kafka", "Docker"]
  },
  systems: {
    scene: "sistem, ağ ve donanım tarafı yazılımın ayakta durduğu fiziksel ve sanal zemini kurar",
    actors: "sistem uzmanı, ağ uzmanı, veri merkezi ekibi, güvenlik ekibi, donanım tedarikçisi ve operasyon lideri aynı süreklilik hedefini taşır",
    stakes: "CPU, RAM, disk, ağ ve enerji görünmez sanılır; biri yetmediğinde yazılımın bütün kalitesi gölgede kalır",
    tech: ["CPU", "RAM", "SSD", "SAN", "NAS", "VLAN", "VPN", "UPS", "Kubernetes"]
  },
  security: {
    scene: "siber güvenlik tek ürün değil; kimlik, ağ, uygulama, veri, uç nokta ve insan davranışının birlikte yönetilmesidir",
    actors: "SOC analisti, sistemci, ağcı, geliştirici, veri sahibi, hukuk ve üst yönetim aynı riskin farklı parçasını görür",
    stakes: "güvenlik yalnız engelleme değil, olay olduğunda neyin ne zaman olduğunu açıklayabilme disiplinidir",
    tech: ["IAM", "MFA", "WAF", "EDR", "SIEM", "DLP", "OWASP", "KVKK"]
  },
  ai: {
    scene: "yapay zekâ projelerinde asıl mesele modelin adı değil, verinin kalitesi, kullanım sınırı, kaynak gösterme ve insan kontrolüdür",
    actors: "veri ekibi, hukuk, iş birimi, mimar, güvenlik ekibi, model sağlayıcı ve kullanıcı birlikte tasarım yapar",
    stakes: "doğru denetlenmeyen yapay zekâ hızlı cevap verir ama yanlış kararın sorumluluğunu ortada bırakabilir",
    tech: ["LLM", "RAG", "MLOps", "GPU", "Vector Database", "Embedding", "Object storage"]
  }
};

const techDetails = {
  "Programlama dilleri": [
    "Programlama dili, kurumun fikirlerini çalışan sisteme çeviren ana ifade biçimidir. Java uzun ömürlü kurumsal servislerde, C# özellikle Microsoft ekosisteminde ve masaüstü/iç iş uygulamalarında, Python veri, otomasyon ve yapay zekâ işlerinde, JavaScript ise web arayüzünden sunucu tarafına kadar geniş bir alanda görülür.",
    "Dil seçimi yalnız hız tablosuyla yapılmaz. Mevcut ekibin yetkinliği, kurumun eski kodu, tedarikçi havuzu, güvenlik gereksinimi, bakım süresi, lisans modeli ve işe alım piyasası birlikte değerlendirilir. Yanlış dil seçimi ilk ayda değil, üçüncü yıl bakım talebi geldiğinde pahalılaşır.",
    "Güncel hayatta bunu bina taşıyıcı sistemi gibi düşünebilirsin. Dışarıdan görünmez, ama kat çıkılacaksa, tadilat yapılacaksa ve bina uzun süre kullanılacaksa taşıyıcı sistemin doğru seçilmiş olması her şeyden önemlidir."
  ],
  "Web arayüzü": [
    "Web arayüzü, kullanıcının kurumla temas ettiği yüzdür. HTML sayfanın iskeletini, CSS görünümünü, JavaScript davranışını kurar. TypeScript büyük projelerde JavaScript'e tip disiplini ekleyerek hata yakalama gücünü artırır. React ve Vue gibi frameworkler karmaşık ekranların bileşenlere ayrılmasını sağlar.",
    "Kamu portalında başvuru formu, e-ticaret sitesinde ürün listesi, bankada işlem ekranı veya kurum içi panel aynı temel gerçeğe bağlıdır: kullanıcı doğru bilgiyi görmeli, doğru adımı atmalı ve hata olduğunda ne yapacağını anlamalıdır.",
    "Arayüz yalnız güzel görünüm değildir. Erişilebilirlik, performans, form doğrulama, oturum güvenliği, mobil uyum, hata mesajı ve kullanıcı alışkanlığı birlikte düşünülür. Kötü arayüz iyi backend'i saklar; iyi arayüz ise karmaşık süreci sakin gösterir."
  ],
  "Backend ve servis": [
    "Backend, ekranda görünmeyen iş kurallarının çalıştığı yerdir. Kullanıcı başvuru yapar, ödeme başlatır, stok sorar veya dosya yükler; backend bu isteğin yetkili olup olmadığını, hangi veriye yazılacağını, hangi servise haber verileceğini ve hangi kaydın tutulacağını yönetir.",
    "Node.js hızlı web servislerinde ve gerçek zamanlı işlerde, Java büyük kurumsal yapılarda, .NET Microsoft ağırlıklı kurumlarda, Python ise veri ve otomasyonla birleşen servislerde sık görülür. Bunların hiçbiri tek başına iyi ya da kötü değildir; doğru bağlamda anlam kazanır.",
    "Backend'i restoran mutfağı gibi düşünmek kolaydır. Müşteri masada tek tabak görür; arkada sipariş alma, hazırlık, stok, ödeme, temizlik ve teslim disiplini vardır. Mutfak karışıksa salonun güzel olması hizmeti kurtarmaz."
  ],
  "API ve entegrasyon": [
    "API, iki sistemin birbirine verdiği teknik sözdür. Bir kurum başka bir kurumdan kimlik doğrulama alır, ödeme kuruluşuyla konuşur, kargo firmasına teslimat kaydı yollar veya raporlama sistemine veri gönderir. Bu temas noktası yazılı değilse entegrasyon şansa kalır.",
    "REST yaygın ve anlaşılır bir HTTP yaklaşımıdır. GraphQL istemcinin ihtiyaç duyduğu veriyi daha seçici almasını sağlar. API Gateway ise kimlik, kota, yönlendirme, izleme ve bazı güvenlik kurallarını tek kapıda toplar.",
    "API sözleşmesi iyi kurulursa ekipler birbirini beklemeden çalışır. Alan adı değişti mi, veri tipi ne, hata kodu ne, kimlik nasıl taşınır, hız limiti nedir, eski sürüm ne zaman kapanır? Bu sorular net değilse teknik problem kısa sürede kurumsal tartışmaya dönüşür."
  ],
  "Veritabanı": [
    "Veritabanı, kurumun kayıt hafızasıdır. PostgreSQL ve SQL dünyası sipariş, başvuru, ödeme, envanter, personel veya işlem kaydı gibi kalıcı ve tutarlı bilgileri düzenli tutar. Bu veriler yalnız uygulama için değil, rapor, denetim ve hukuki sorumluluk için de önemlidir.",
    "Kalıcı kayıt ile hızlı kopya birbirine karıştırılmamalıdır. Siparişin resmi değeri PostgreSQL tarafında dururken, arama veya hız için başka sistemler kullanılabilir. Ana defterin neresi olduğu bilinmezse kriz anında herkes farklı kaydı doğru sanabilir.",
    "Bunu noter defteri gibi düşün. Herkes hızlıca not alabilir, ekranda kopya gösterebilir; ama sonradan hesap sorulacak kayıt hangi defterdeyse kurumun gerçeği oradadır."
  ],
  "Hız ve geçici veri": [
    "Redis, cache ve CDN aynı ailede düşünülür: hepsi kullanıcıyı bekletmemek ve ana sistemi yormamak için sık kullanılan bilgiyi daha yakın veya daha hızlı yerde tutar. Redis bellek içinde geçici veri saklar; CDN statik içeriği kullanıcıya yakın dağıtır; cache genel olarak yeniden hesaplamayı azaltır.",
    "E-ticarette sepet, oturum, kampanya sayacı veya sık okunan ürün bilgisi Redis ile hızlanabilir. Büyük görseller ve betikler CDN üzerinden verildiğinde ana sunucu nefes alır. Fakat fiyat, stok ve sipariş gibi kritik bilgilerde eski veri gösterme riski baştan düşünülmelidir.",
    "Bu aileyi mola yerindeki hazır çay tepsisi gibi düşün. Her bardak için yeniden su kaynatmazsın; ama tepsideki çayın bayatlamadığını, kime verildiğini ve ne zaman yenileneceğini bilmek zorundasın."
  ],
  "Arama ve log": [
    "Elasticsearch büyük metin, ürün, belge ve log kümelerinde hızlı arama yapmak için kullanılır. Logstash farklı kaynaklardan gelen logları toplar, düzenler ve Elasticsearch'e gönderir. Kibana ise bu veriyi arama ekranı, grafik ve gösterge paneli haline getirir.",
    "Ana veritabanı ile arama motoru aynı şey değildir. PostgreSQL siparişin resmi kaydını tutarken Elasticsearch o siparişler içinde hızlı arama, filtreleme ve analiz sağlar. Log incelemesinde de amaç milyonlarca satır içinde doğru zamanı, doğru hatayı ve doğru kullanıcı etkisini bulmaktır.",
    "Bunu büyük bir arşivin hızlı katalog görevlisi gibi düşünebilirsin. Belgenin aslı arşivdedir; katalog görevlisi sana doğru rafı, benzer kayıtları ve aradığın izleri hızla gösterir."
  ],
  "Mesajlaşma": [
    "Kafka ve RabbitMQ, servislerin birbirini doğrudan beklemeden çalışmasını sağlar. Ödeme tamamlandığında fatura, kargo, bildirim ve raporlama aynı anda farklı servislerin işi olabilir. Her servisi sırayla bekletmek yerine olay veya mesaj kuyruğa bırakılır.",
    "Kafka yüksek hacimli olay akışlarında güçlüdür; RabbitMQ işlerin kontrollü sıraya alınmasında sık kullanılır. İkisi de sorunları yok etmez, sorunların akışını yönetilebilir hale getirir. Kuyruk birikirse gecikme büyür; mesaj kaybolursa iş süreci eksik kalır.",
    "Bunu kargo ayrıştırma bandı gibi düşün. Paketleri tek tek elden ele bekletmezsin; banda koyarsın, ilgili ekip alır. Ama bantta birikme varsa bina dışarıdan hâlâ açık görünse bile içeride iş gecikiyordur."
  ],
  "Paketleme": [
    "Docker uygulamayı bağımlılıklarıyla birlikte paketler. Git kodun geçmişini tutar. GitHub ekip çalışmasını, kod incelemeyi ve otomasyonu görünür kılar. CI/CD ise kodun testten geçip kontrollü biçimde ortama alınmasını sağlar.",
    "Bu aile yazılımın üretim hattıdır. Geliştirici kodu yazar, Git'e işler, ekip GitHub üzerinde inceler, testler çalışır, paket hazırlanır, uygun ortamda dağıtılır. Bir halka zayıfsa canlıya çıkan hatanın nereden geldiğini bulmak zorlaşır.",
    "Bunu fabrikadaki kalite kapıları gibi düşünebilirsin. Ürün elden ele dolaşırken her adımda kayıt, kontrol ve geri dönüş imkânı varsa hata saklanmaz; erken yakalanır."
  ],
  "Donanım": [
    "CPU işlem yapar, RAM çalışan veriyi hızlı tutar, disk kalıcı kaydı saklar, anakart bu parçaların birlikte çalıştığı zemindir. Yazılım ne kadar iyi olursa olsun bu kaynaklardan biri tıkanırsa kullanıcı yavaşlık görür.",
    "Kurumsal sistemlerde donanım seçimi yalnız fiyatla yapılmaz. İşlem yükü, bellek ihtiyacı, disk okuma yazma hızı, yedeklilik, garanti süresi, tedarik süresi ve bakım modeli birlikte değerlendirilir.",
    "Bunu mutfak ekipmanı gibi düşün. Aşçı iyi olabilir, tarif doğru olabilir; ama ocak yetmezse, tezgâh küçükse veya buzdolabı bozulursa servis aksar."
  ],
  "Ağ": [
    "Switch aynı ağdaki cihazları, router farklı ağları, VLAN mantıksal ayrımı, subnet adres planını, VPN güvenli uzaktan erişimi, NAT ise özel ağların internete çıkışını yönetir. Ağ görünmez bir damar sistemi gibidir.",
    "Kurumda ağ tasarımı bozulduğunda yazılımcı uygulama hatası, kullanıcı internet sorunu, güvenlikçi açık, sistemci kaynak problemi görebilir. Oysa kök sebep yanlış segment, doygun omurga, hatalı DNS veya zayıf VPN kapasitesi olabilir.",
    "Ağ tarafında iyi dokümantasyon hayat kurtarır. Hangi cihaz nerede, hangi VLAN hangi sistemi taşır, internet çıkışı nereden geçer, yedek hat nasıl devreye girer? Bunlar kriz anında aranıyorsa geç kalınmıştır."
  ],
  "Veri merkezi": [
    "Veri merkezi, sunucunun durduğu oda değildir; enerji, soğutma, kabin, ağ omurgası, yangın önlemi, fiziksel güvenlik, izleme ve bakım disiplinidir. Bulut kullansan bile bu gerçek başka birinin veri merkezinde devam eder.",
    "UPS kısa süreli enerji sağlar, jeneratör daha uzun kesintide devreye girer, soğutma düzeni donanımın ömrünü korur, kablolama ve etiketleme müdahaleyi hızlandırır. Bunlar görünmez ama aksadığında yazılımın bütün itibarı etkilenir.",
    "Bunu hastanenin yoğun bakım altyapısı gibi düşün. Cihazın ekrandaki göstergesi önemlidir; fakat elektrik, oksijen, bakım ve nöbet düzeni yoksa cihaz tek başına güvence vermez."
  ],
  "Kimlik güvenliği": [
    "IAM, MFA, SSO ve PAM kimlik güvenliği ailesidir. Kullanıcı kim, hangi sisteme hangi yetkiyle girebilir, yetki kim tarafından onaylandı, ayrıcalıklı hesap nasıl izlenir soruları bu alanın temelidir.",
    "Parola tek başına zayıf bir sınırdır. MFA ikinci doğrulama ekler, SSO kullanıcı deneyimini sadeleştirir, PAM kritik yönetici hesaplarını daha sıkı denetler. Fakat süreç kurulmazsa araç yalnız ekranda yeni bir kutu olur.",
    "Bunu kurum binasındaki giriş kartı, özel oda anahtarı ve ziyaretçi defteri gibi düşünebilirsin. Herkes binaya girebilir diye kasaya da giremez; giren kişinin izi de tutulmalıdır."
  ],
  "Siber izleme": [
    "SIEM, SOC, EDR ve log yönetimi güvenlik görünürlüğü sağlar. Saldırı çoğu zaman tek parlak işaretle gelmez; başarısız girişler, olağandışı dosya hareketleri, garip ağ trafiği ve uç nokta davranışları birleşince anlam kazanır.",
    "SOC bu işaretleri izler, önceliklendirir ve olaya dönüştürür. EDR cihaz üzerindeki davranışı görür, SIEM farklı kaynaklardan gelen kayıtları ilişkilendirir. İz yoksa olaydan sonra yalnız tahmin kalır.",
    "Bunu şehir güvenlik kamerası ve olay merkezi gibi düşün. Kamera tek başına karar vermez; fakat doğru yere bakıyor, kayıt tutuyor ve merkez olayı zamanında görüyorsa müdahale hızlanır."
  ],
  "Yapay zekâ": [
    "Yapay zekâ tarafında LLM, embedding, vektör arama, RAG, ajan, MLOps ve GPU aynı konuşmanın parçalarıdır. Model metin üretir, embedding anlam benzerliği kurar, RAG kurum belgelerinden bağlam alır, MLOps modeli canlıda izler.",
    "Kurumda yapay zekâ; belge arama, çağrı merkezi desteği, mevzuat karşılaştırma, kod yardımı, rapor özetleme ve karar destek gibi alanlarda kullanılır. En önemli soru modelin adı değil, hangi veriye eriştiği ve cevabın nasıl denetlendiğidir.",
    "Bunu çok hızlı çalışan bir araştırma asistanı gibi düşün. Kaynakları doğru verirsen hız kazandırır; kaynağı, yetkiyi ve insan onayını kaldırırsan yanlış cevabı özgüvenle büyütebilir."
  ]
};

const pillConcepts = [
  ["API", "iki sistemin belirli kurallarla konuşmasını sağlar", "Kamu portalında başvuru kaydı, kimlik doğrulama ve ödeme farklı servislerdeyse API bu servislerin ortak dilidir."],
  ["Log", "olaydan sonra gerçeği bulmak için iz bırakır", "Kesinti sonrasında kimin ne zaman hangi isteği gönderdiğini anlamak loglarla mümkün olur."],
  ["Cache", "sık okunan veriyi yakında tutarak gecikmeyi azaltır", "Ürün listesi veya kurum duyurusu her istekte ana veritabanından okunmasın diye cache kullanılabilir."],
  ["DNS", "alan adını sunucu adresine çevirir", "Kullanıcı kurum adresini yazdığında tarayıcı önce DNS ile nereye gideceğini öğrenir."],
  ["WAF", "web uygulamasına gelen şüpheli istekleri süzer", "İnternete açık başvuru ekranlarında zararlı istekler uygulamaya ulaşmadan WAF üzerinde durdurulabilir."],
  ["CDN", "statik içeriği kullanıcıya yakın noktadan verir", "Yoğun kampanya gününde görseller ve betikler CDN üzerinden gelirse ana sistem daha az yorulur."],
  ["Load balancer", "trafiği sağlıklı sunucular arasında paylaştırır", "Bir sunucu bakımdayken kullanıcı isteği diğer sunucuya aktarılabilir."],
  ["PostgreSQL", "kalıcı ve tutarlı kayıtları saklar", "Sipariş, başvuru ve ödeme gibi resmi değeri olan kayıtlar PostgreSQL gibi veritabanlarında tutulur."],
  ["Redis", "geçici ve hızlı veriyi bellekte tutar", "Sepet, oturum ve kısa süreli sayaçlar Redis üzerinde tutulduğunda ana veritabanı rahatlar."],
  ["Kafka", "olayları yüksek hacimde taşır", "Ödeme sonrası fatura, kargo ve bildirim servisleri birbirini beklemeden Kafka üzerinden haberleşebilir."],
  ["RabbitMQ", "işleri kuyruğa koyup kontrollü teslim eder", "E-posta gönderimi veya rapor hazırlama gibi işler RabbitMQ ile sıraya alınabilir."],
  ["Elasticsearch", "büyük metin ve log kümelerinde hızlı arama sağlar", "Milyonlarca ürün veya log içinde saniyeler içinde arama yapmak için Elasticsearch kullanılır."],
  ["Kibana", "log ve olay verisini panellere dönüştürür", "Operasyon ekibi hata oranını ve yanıt süresini Kibana ekranından izleyebilir."],
  ["Docker", "uygulamayı bağımlılıklarıyla birlikte paketler", "Geliştiricide çalışan kodun test ortamında farklı davranmaması için Docker kullanılır."],
  ["Kubernetes", "çok sayıda konteyneri çalıştırır ve izler", "Servis düşerse yeniden başlatma ve trafik artarsa ölçekleme Kubernetes ile yönetilebilir."],
  ["Git", "kodun değişiklik geçmişini tutar", "Hatalı sürüm çıktıysa hangi değişikliğin geldiğini Git geçmişi gösterir."],
  ["GitHub", "kod inceleme ve ekip iş birliğini görünür kılar", "Pull request ile kod canlıya gitmeden ekip tarafından incelenir."],
  ["CI/CD", "kodun testten geçip kontrollü dağıtılmasını sağlar", "Kod depoya girince testlerin çalışması ve paketin hazırlanması CI/CD hattıyla yapılır."],
  ["OAuth2", "şifre paylaşmadan sınırlı yetki verir", "Bir uygulama başka sistemdeki veriye kullanıcının şifresini almadan erişebilir."],
  ["JWT", "kimlik bilgisini imzalı token olarak taşır", "Kullanıcı giriş yaptıktan sonra oturum bilgisi JWT ile servisler arasında taşınabilir."],
  ["SIEM", "güvenlik loglarını ilişkilendirir", "Başarısız giriş, şüpheli dosya hareketi ve ağ trafiği SIEM üzerinde aynı olayda birleşebilir."],
  ["EDR", "uç noktalarda şüpheli davranışı izler", "Bir sunucuda olağandışı süreç çalışırsa EDR güvenlik ekibine sinyal verebilir."],
  ["RAG", "yapay zekâ cevabını kurum belgelerine dayandırır", "Kurum asistanı mevzuat belgesinden kaynak bularak cevap üretebilir."],
  ["Object storage", "dosya, yedek ve büyük nesneleri ölçekli saklar", "Fatura görselleri, rapor dosyaları ve yedekler object storage üzerinde tutulabilir."],
  ["Monitoring", "sistemin nabzını ölçer", "CPU, bellek, hata oranı ve yanıt süresi izlenirse sorun büyümeden görülebilir."]
];

const pillDomains = [
  "bakanlık başvuru portalında",
  "belediye ödeme sisteminde",
  "üniversite kayıt haftasında",
  "savunma sanayii test ortamında",
  "e-ticaret kampanya gününde",
  "banka mutabakat sürecinde",
  "hastane randevu akışında",
  "çağrı merkezi yoğunluğunda",
  "veri merkezi bakım penceresinde",
  "mobil uygulama canlıya geçişinde",
  "taşra bağlantı sorununda",
  "tedarikçi kabul toplantısında",
  "siber olay incelemesinde",
  "raporlama paneli hazırlığında",
  "lisans yenileme görüşmesinde",
  "felaket kurtarma tatbikatında",
  "kurum içi doküman yönetiminde",
  "kimlik entegrasyonu çalışmasında",
  "veri aktarım gecesinde",
  "üst yönetim bilgilendirmesinde"
];

const pillMoments = [
  "ihtiyaç yazılırken",
  "teknik şartname hazırlanırken",
  "mimari çizim gözden geçirilirken",
  "test senaryosu kurulurken",
  "canlıya geçiş planlanırken",
  "bakım penceresi açılırken",
  "kriz etkisi ölçülürken",
  "kabul kanıtı toplanırken",
  "kapasite hesabı yapılırken",
  "güvenlik istisnası değerlendirilirken",
  "entegrasyon protokolü yazılırken",
  "yedekten dönüş denenirken",
  "loglar incelenirken",
  "lisans yenilemesi konuşulurken",
  "kullanıcı eğitimi verilirken",
  "tedarikçi taahhüdü ölçülürken",
  "üst makama durum sunulurken",
  "veri paylaşımı açılırken",
  "olay sonrası rapor yazılırken",
  "sürüm geri dönüşü tartışılırken"
];

const pillEvidence = [
  "karar kaydı",
  "test sonucu",
  "log izi",
  "mimari çizim",
  "erişim matrisi",
  "servis kataloğu",
  "kapasite grafiği",
  "yedek dönüş raporu",
  "kabul tutanağı",
  "hata zaman çizelgesi",
  "varlık envanteri",
  "API sözleşmesi",
  "güvenlik bulgusu",
  "maliyet kırılımı",
  "kullanıcı geri bildirimi",
  "değişiklik talebi",
  "sürüm notu",
  "izleme alarmı",
  "veri sözlüğü",
  "risk kaydı"
];

const pillRisks = [
  "sahibi belli değilse karar kişilerin hafızasına kalır",
  "ölçüt yazılmamışsa kabul gününde tartışma büyür",
  "log tutulmamışsa olaydan sonra yalnız tahmin kalır",
  "veri sınıfı bilinmiyorsa güvenlik ve mevzuat riski doğar",
  "geri dönüş planı yoksa hızlı geçiş pahalı kesintiye dönüşebilir",
  "kapasite ölçülmüyorsa başarı günü bile sistem zorlanabilir",
  "tedarikçi taahhüdü ölçülmüyorsa vaat ile teslim karışır",
  "yetki sınırı çizilmezse küçük kolaylık büyük açıklığa döner",
  "yedek denenmemişse güvence kâğıt üzerinde kalır",
  "kullanıcı etkisi ölçülmezse teknik doğruluk hizmet başarısı sayılmaz",
  "maliyet görünür değilse küçük başlangıç zamanla bütçeyi büyütür",
  "dokümantasyon yoksa bakım bir sonraki ekibe yük olur",
  "alarm eşiği yanlışsa gerçek olay gürültünün içinde kaybolur",
  "API sözleşmesi belirsizse iki ekip aynı hatayı farklı yorumlar",
  "sürüm bilgisi tutulmuyorsa hatanın ne zaman geldiği anlaşılmaz",
  "ağ sınırı belirsizse kesinti ve güvenlik olayı birbirine karışır",
  "kişisel veri ayrımı yapılmazsa iyi niyetli rapor bile riskli olabilir",
  "test ortamı gerçeğe benzemiyorsa canlı sistem ilk ciddi deneme olur",
  "işletme modeli kurulmazsa araç kurulur ama kurumda yaşatılmaz",
  "karar kayda geçmezse aynı tartışma başka toplantıda yeniden başlar"
];

const pillKinds = {
  akış: ["API", "DNS", "CDN", "Load balancer", "Kafka", "RabbitMQ"],
  veri: ["Log", "Cache", "PostgreSQL", "Redis", "Elasticsearch", "Kibana", "Object storage", "Monitoring"],
  teslimat: ["Docker", "Kubernetes", "Git", "GitHub", "CI/CD"],
  güvenlik: ["WAF", "OAuth2", "JWT", "SIEM", "EDR"],
  zeka: ["RAG"]
};

const pillContextByKind = {
  akış: {
    domains: ["bakanlık başvuru portalında", "belediye ödeme sisteminde", "e-ticaret kampanya gününde", "mobil uygulama canlıya geçişinde", "taşra bağlantı sorununda"],
    moments: ["entegrasyon protokolü yazılırken", "canlı trafik izlenirken", "kapasite hesabı yapılırken", "hata akışı incelenirken", "bakım penceresi planlanırken"],
    evidence: ["API sözleşmesi", "hata zaman çizelgesi", "izleme alarmı", "kapasite grafiği", "servis kataloğu"]
  },
  veri: {
    domains: ["raporlama paneli hazırlığında", "veri aktarım gecesinde", "banka mutabakat sürecinde", "kurum içi doküman yönetiminde", "üniversite kayıt haftasında"],
    moments: ["veri sınıfı belirlenirken", "loglar incelenirken", "rapor doğruluğu kontrol edilirken", "yedekten dönüş denenirken", "arama sonucu karşılaştırılırken"],
    evidence: ["veri sözlüğü", "log izi", "risk kaydı", "yedek dönüş raporu", "kullanıcı geri bildirimi"]
  },
  teslimat: {
    domains: ["mobil uygulama canlıya geçişinde", "tedarikçi kabul toplantısında", "felaket kurtarma tatbikatında", "veri merkezi bakım penceresinde", "üst yönetim bilgilendirmesinde"],
    moments: ["test senaryosu kurulurken", "sürüm geri dönüşü tartışılırken", "canlıya geçiş planlanırken", "değişiklik talebi kapatılırken", "kabul kanıtı toplanırken"],
    evidence: ["test sonucu", "sürüm notu", "değişiklik talebi", "kabul tutanağı", "karar kaydı"]
  },
  güvenlik: {
    domains: ["siber olay incelemesinde", "kimlik entegrasyonu çalışmasında", "güvenlik istisnası toplantısında", "denetim hazırlığında", "ağ segmentasyonu çalışmasında"],
    moments: ["yetki matrisi gözden geçirilirken", "güvenlik bulgusu kapatılırken", "log korelasyonu yapılırken", "veri paylaşımı açılırken", "olay sonrası rapor yazılırken"],
    evidence: ["erişim matrisi", "güvenlik bulgusu", "log izi", "varlık envanteri", "risk kaydı"]
  },
  zeka: {
    domains: ["yapay zekâ pilotunda", "kurum içi bilgi asistanında", "mevzuat arama ekranında", "çağrı merkezi destek senaryosunda", "rapor özetleme çalışmasında"],
    moments: ["kaynak belge seçilirken", "cevap doğruluğu kontrol edilirken", "model çıktısı kayda alınırken", "kişisel veri sınırı çizilirken", "pilot sonucu değerlendirilirken"],
    evidence: ["veri sözlüğü", "kullanıcı geri bildirimi", "risk kaydı", "karar kaydı", "test sonucu"]
  }
};

function pillKind(name) {
  return Object.entries(pillKinds).find(([, names]) => names.includes(name))?.[0] || "veri";
}

const state = {
  activeCategory: null,
  lastPillPages: []
};

const els = {
  themeToggle: document.querySelector("#themeToggle"),
  menuToggle: document.querySelector("#menuToggle"),
  sidebar: document.querySelector("#sidebar"),
  search: document.querySelector("#searchInput"),
  nav: document.querySelector("#categoryNav"),
  home: document.querySelector("#homeView"),
  chapter: document.querySelector("#chapterView"),
  pills: document.querySelector("#pillsView")
};

function slug(value) {
  return value
    .toLocaleLowerCase("tr")
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
  return value.toLocaleLowerCase("tr").normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/ı/g, "i");
}

function chapterId(category, number) {
  return `${category.id}-${number}`;
}

function allChapters() {
  return categories.flatMap((category) =>
    category.chapters.map((title, index) => ({
      id: chapterId(category, index + 1),
      categoryId: category.id,
      categoryTitle: category.title,
      number: index + 1,
      title
    }))
  );
}

const chapters = allChapters();

function getChapter(id) {
  return chapters.find((chapter) => chapter.id === id) || chapters[0];
}

function getCategory(id) {
  return categories.find((category) => category.id === id) || categories[0];
}

function routeInfo(chapter) {
  const index = chapters.findIndex((item) => item.id === chapter.id);
  return {
    previous: chapters[index - 1],
    next: chapters[index + 1],
    index
  };
}

function wordsFromHtml(html) {
  return html.replace(/<[^>]*>/g, " ").trim().split(/\s+/).filter(Boolean).length;
}

function readingMinutes(html) {
  return Math.max(1, Math.round(wordsFromHtml(html) / 180));
}

function cleanTitle(chapter) {
  return chapter.title.replace(/^[^:]+:\s*/, "");
}

function firstPhrase(title) {
  return title.split(":")[0].trim();
}

function splitTopic(title) {
  return title.split(":")[0].trim();
}

function detectTerms(text) {
  const normalized = ` ${text} `;
  return Object.keys(glossary)
    .filter((term) => new RegExp(`(^|[^A-Za-zÇĞİÖŞÜçğıöşü0-9])${term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}([^A-Za-zÇĞİÖŞÜçğıöşü0-9]|$)`, "i").test(normalized))
    .sort((a, b) => a.localeCompare(b, "tr"));
}

function termsPanel(html, title) {
  const terms = detectTerms(`${title} ${html}`);
  if (!terms.length) return "";
  return `
    <section class="term-panel">
      <h2>Bu Bölümde Adı Geçen Teknolojiler</h2>
      <dl>
        ${terms.map((term) => `<div><dt>${term}</dt><dd>${glossary[term]}</dd></div>`).join("")}
      </dl>
    </section>
  `;
}

function paragraph(text) {
  return `<p>${text}</p>`;
}

function section(title, paragraphs) {
  return `<h2>${title}</h2>${paragraphs.map(paragraph).join("")}`;
}

function modeIntro(category) {
  const lex = modeLexicon[category.mode];
  return [
    `${category.title} bölümünün kapısı, tek bir kavramı ezberletmek için değil, kurum içinde teknoloji işinin nasıl yaşadığını göstermek için açılır. Burada ${lex.scene}.`,
    `Bu başlıkta kişiler önemlidir: ${lex.actors}. Aynı olayın masadaki adı bazen proje, bazen risk, bazen bütçe, bazen de hizmet sürekliliğidir.`,
    `İlk dosyanın görevi harita çıkarmaktır. Hangi aktör nerede duruyor, hangi belge neyi koruyor, hangi teknik karar hangi insan davranışına bağlanıyor ve hangi noktada yönetici devreye girmek zorunda kalıyor, bunları önce topluca görmek gerekir.`,
    `Bu bölüm ilerledikçe konular birbirine bağlanır. Bir yerde teknik şartname konuşulurken başka yerde kabul komisyonu görünür; bir yerde Redis yalnız hız gibi dururken başka yerde eski veri riski olarak karşımıza çıkar; bir yerde SIEM güvenlik ekranı iken başka yerde denetim kanıtına dönüşür.`,
    `Temel gerilim şudur: ${lex.stakes}. Bu nedenle her sayfa tekil bilgi vermekle kalmayacak, o bilginin hangi iş akışında işe yaradığını da gösterecek.`,
    `Bu bölümde sık karşılaşacağın teknoloji ve kavramlar şunlardır: ${lex.tech.join(", ")}. Bunlar ayrıntı yarışına sokulmayacak; ihtiyaç doğduğu anda, ilgili olayın içinde açıklanacak.`,
    `Böylece bölümün sonunda yalnız kavram adı değil, o kavramın kurum hayatında nerede durduğu, kimlerin sorumluluğuna dokunduğu ve yanlış anlaşılırsa hangi sorunu büyüteceği daha net hale gelir.`
  ];
}

function routeIntro(category, chapter) {
  return `
    <p class="opening-line">${modeIntro(category)[0]}</p>
    ${modeIntro(category).slice(1).map(paragraph).join("")}
    ${visualFor(category, chapter)}
  `;
}

function narrativeChapter(category, chapter) {
  const lex = modeLexicon[category.mode];
  const topic = cleanTitle(chapter);
  const family = firstPhrase(topic);
  return [
    paragraph(`${topic} başlığı, ${category.title.toLocaleLowerCase("tr")} içinde tek başına duran kuru bir madde değildir. Kurumda bu konu genellikle bir talep, bir toplantı, bir hata, bir denetim sorusu ya da bir teslim tarihiyle görünür hale gelir.`),
    paragraph(`Günün başında mesele basit sanılabilir: bir ekran yapılacak, bir servis bağlanacak, bir yazı yazılacak veya bir ürün alınacaktır. Fakat iş ilerledikçe ${lex.actors}. Bu yüzden teknik kararın diliyle kurumsal kararın dili aynı cümlede buluşmak zorundadır.`),
    paragraph(`${family} etrafında ilk bakılacak şey ihtiyaçtır. İhtiyaç doğru yazılmışsa teknik ekip çözümü daraltabilir, satın alma doğru kalemi arayabilir, tedarikçi ne teslim edeceğini bilir, kabul komisyonu da neyi ölçeceğini son gün keşfetmez. İhtiyaç bulanıksa herkes kendi iyi niyetli yorumuyla başka yöne çekilir.`),
    paragraph(`Sahada en sık görülen hata, konunun yalnız teknik araç gibi ele alınmasıdır. Oysa ${topic.toLocaleLowerCase("tr")} bazen mevzuat sınırına, bazen veri sahibine, bazen yedekleme düzenine, bazen de kullanıcı alışkanlığına dokunur. Bu bağlantılar baştan konuşulmazsa proje ilerler ama kurumun zihni geride kalır.`),
    paragraph(`Bir örnek düşün: tedarikçi çözümünü anlatır, ekip mimari çizimi inceler, kullanıcı temsilcisi kendi ekranını sorar, güvenlikçi log ve yetki ister, satın alma lisans modeline bakar. Aynı masada beş ayrı gerçek vardır. İyi yönetilen iş, bu gerçekleri birbirine düşürmeden tek karar kaydında toplar.`),
    paragraph(`Bu noktada teknoloji ayrıntısı gerektiği kadar devreye girer. API varsa hangi sistemle konuştuğu, log varsa hangi olayı kanıtladığı, veritabanı varsa hangi kaydı kalıcı tuttuğu, ağ varsa hangi hizmeti taşıdığı, güvenlik varsa hangi riski azalttığı açıklanır. Ama teknik ayrıntı metnin efendisi değil, olayın aracı olarak kalır.`),
    paragraph(`${topic} iyi yönetildiğinde kurum yalnız o işi bitirmiş olmaz. Sonraki proje için daha iyi şartname, daha net kabul ölçütü, daha doğru destek modeli ve daha sakin kriz refleksi kazanır. Asıl değer de buradadır: tekrar eden tartışmaları azaltan kurumsal hafıza oluşur.`),
    paragraph(`Kötü yönetildiğinde ise aynı başlık başka adlarla geri döner. Bir ay sonra performans sorunu, üç ay sonra güvenlik istisnası, yıl sonunda denetim bulgusu, bakım döneminde tedarikçi bağımlılığı olarak karşımıza çıkabilir. Bu yüzden ${category.title.toLocaleLowerCase("tr")} içinde bu konu, yalnız öğrenilecek bilgi değil, erken fark edilecek örüntüdür.`)
  ].join("") + visualFor(category, chapter);
}

function historyChapter(chapter) {
  const topic = cleanTitle(chapter);
  const era = firstPhrase(topic);
  const map = {
    "İlk bilgisayarlar": ["savaş ve nüfus sayımı gibi büyük hesap ihtiyaçları", "vakum tüpleriyle çalışan dev makineler", "bilgisayarın önce hız ve tekrar edilebilir hesap için doğduğunu"],
    "Transistor ve mainframe": ["daha az arıza ve daha az ısı ihtiyacı", "kurum merkezine yerleşen büyük bilgisayarlar", "güvenilirlik artınca kurum kayıtlarının makineye taşınabildiğini"],
    "Programlama dillerinin doğuşu": ["makine diliyle iş dili arasındaki uçurum", "FORTRAN ve COBOL gibi diller", "yazılımın ayrı bir meslek ve yönetim konusu haline geldiğini"],
    "Unix, dosya sistemi ve çok kullanıcılı dünya": ["tek makineyi çok kişinin kullanma ihtiyacı", "dosya, süreç, kabuk ve kullanıcı hesabı fikri", "modern sunucu kültürünün sade prensiplerle büyüdüğünü"],
    "İlişkisel veritabanı ve SQL": ["dağınık kayıtların raporlanabilir hale getirilmesi", "tablolar, ilişkiler ve SQL", "kurum hafızasının veri modeliyle disipline edildiğini"],
    "Mikroişlemci, kişisel bilgisayar ve grafik arayüz": ["bilgisayarı laboratuvardan masaya indirme baskısı", "mikroişlemci, PC ve pencereli arayüz", "kullanıcının teknolojiyle doğrudan temas etmeye başladığını"],
    "Yerel ağlar, Ethernet ve client-server düzeni": ["ofisteki makinelerin veri paylaşma ihtiyacı", "Ethernet, dosya sunucusu ve client-server mimari", "ağ uzmanlığının kurum içinde ayrı bir yetkinliğe dönüştüğünü"],
    "Web'in doğuşu": ["bilgiyi belge ve bağlantı üzerinden paylaşma ihtiyacı", "HTTP, HTML, URL ve tarayıcı", "internetin kurum dışındaki kullanıcıya kapı açtığını"],
    "Açık kaynak, Linux ve internetin üretim kültürü": ["yazılımı kapalı kutudan çıkarma isteği", "Linux, Apache ve açık topluluklar", "tedarikçi bağımlılığının teknik ve stratejik konu olduğunu"],
    "E-ticaret, arama motorları ve veri ekonomisi": ["kullanıcının mağazaya değil ekran başına gelmesi", "sepet, ödeme, arama motoru ve reklam algoritmaları", "verinin ticari kararın ana hammaddesine dönüştüğünü"],
    "Sanal makine, bulut ve kullandıkça öde mantığı": ["sunucu kapasitesini daha verimli kullanma ihtiyacı", "sanallaştırma, bulut ve elastik kaynak", "altyapının satın alınan cihazdan tüketilen hizmete dönüştüğünü"],
    "Akıllı telefon, mobil uygulama ve sürekli kullanıcı beklentisi": ["kullanıcının hizmeti cebinde taşıma isteği", "uygulama mağazaları, mobil ödeme ve bildirimler", "kesintisiz hizmet beklentisinin kalıcı hale geldiğini"],
    "Büyük veri, log analizi ve olay tabanlı mimari": ["sistemlerin ürettiği veri hacminin artması", "Hadoop, Spark, Kafka ve log analitiği", "olayın sonradan değil akarken okunmaya başladığını"],
    "DevOps, konteyner ve Kubernetes dönemi": ["yazan ekiple işleten ekip arasındaki duvarı azaltma ihtiyacı", "CI/CD, Docker ve Kubernetes", "teslimat hızının işletme disipliniyle birleştiğini"],
    "Siber güvenliğin kurumsal yönetime dönüşmesi": ["saldırıların sürekli ve kurumsal hale gelmesi", "SIEM, SOC, EDR, sıfır güven ve denetim izi", "güvenliğin ürün değil yönetim meselesi olduğunu"],
    "Üretken yapay zekâ, RAG ve ajan sistemleri": ["metin, kod ve bilgi işlerinin hızlanması", "LLM, embedding, RAG ve ajan yaklaşımları", "yapay zekânın kurum bilgisini kullanırken denetlenmesi gerektiğini"],
    "Dijital egemenlik, yarı iletken yarışı ve yakın gelecek": ["veri, çip ve bulut bağımlılığının stratejik hale gelmesi", "GPU, yerli veri merkezi, edge computing ve post-kuantum hazırlık", "teknoloji kararının ülke, kurum ve tedarik zinciri ölçeğine çıktığını"]
  };
  const details = map[era] || ["büyüyen işlem ve koordinasyon ihtiyacı", "yeni donanım, yazılım ve ağ yaklaşımları", "teknolojinin ihtiyaca cevap olarak doğduğunu"];
  return [
    paragraph(`${topic} dönemine girildiğinde teknoloji sahnesinde belirleyici olan şey ${details[0]} idi. İnsanlar daha çok kayıt tutmak, daha hızlı hesap yapmak, daha uzak sistemleri birbirine bağlamak veya aynı işi daha az hatayla tekrarlamak istiyordu.`),
    paragraph(`Bu ihtiyacın cevabı ${details[1]} oldu. Yeni araç ortaya çıktığında yalnız teknik kabiliyet getirmedi; kurumların iş yapma biçimini, ekiplerin görev tanımını ve yöneticilerin sorduğu soruları da değiştirdi.`),
    paragraph(`Önceki dönemin çözümü büyüdükçe yeni sorunlar doğdu. Makine hızlandı ama programlama zorlaştı; kayıt arttı ama veri modeli gerekti; ağ kuruldu ama güvenlik sınırı belirdi; bulut hız verdi ama maliyet ve egemenlik tartışması açıldı. Tarih, bu zincirin adıdır.`),
    paragraph(`${topic} kendi döneminde bir son durak gibi görünse de aslında sonraki teknolojinin zeminini hazırladı. Bir araç yaygınlaştığında kullanıcı beklentisi değişti, ekipler yeni uzmanlıklar kazandı, tedarikçiler yeni ürünler sundu ve kurum yöneticileri eskiden teknik sayılan kararları bütçe ve strateji meselesi olarak konuşmaya başladı.`),
    paragraph(`Bu geçişlerin ortak tarafı şudur: önce küçük bir teknik kolaylık gelir, sonra o kolaylık alışkanlığa dönüşür, ardından kurumun işleyişi ona göre yeniden şekillenir. Veritabanı raporu kolaylaştırınca denetim daha ayrıntılı veri ister; web hizmeti hızlandırınca kullanıcı yirmi dört saat erişim bekler; mobil uygulama yaygınlaşınca kimlik ve güvenlik sınırı cebe kadar uzanır.`),
    paragraph(`Bir kamu kurumu veya savunma şirketi açısından bu dönemlerden çıkarılacak ders şudur: ${details[2]}. Bugünün ihale dokümanı, veri merkezi kararı veya yapay zekâ pilotu da aynı mantığa bağlıdır. Önce baskı büyür, sonra araç doğar, ardından organizasyon değişmek zorunda kalır.`),
    paragraph(`Bu bakış Türkiye'deki büyük kurumlar için özellikle değerlidir. Cumhurbaşkanlığı düzeyinde dijital dönüşüm konuşulurken, bakanlıkta entegrasyon beklenirken, ASELSAN veya HAVELSAN benzeri yapılarda güvenilir sistem üretimi hedeflenirken aynı tarihsel ders tekrar eder: teknoloji yalnız satın alınmaz, kurumun çalışma düzenine yerleştirilir.`),
    paragraph(`Bu yüzden ${topic.toLocaleLowerCase("tr")} yalnız geçmiş bilgisi değildir. Bir teknolojinin hangi ihtiyaçtan doğduğunu anlayan yönetici, yeni moda kelime duyduğunda hemen büyülenmez; önce hangi eski soruna cevap verdiğini ve hangi yeni sorumluluğu doğurduğunu sorar.`)
  ].join("") + visualFor(getCategory("tarihsel-evrim"), chapter);
}

function techChapter(category, chapter) {
  const topic = cleanTitle(chapter);
  const key = Object.keys(techDetails).find((item) => normalizeText(topic).includes(normalizeText(item))) || category.mode;
  const paragraphs = techDetails[key] || techDetails[category.mode === "ai" ? "Yapay zekâ" : category.mode === "security" ? "Siber izleme" : category.mode === "systems" ? "Donanım" : "Backend ve servis"];
  const intro = `${topic} başlığı, ${category.title.toLocaleLowerCase("tr")} içinde aynı ailede düşünülmesi gereken parçaları bir araya getirir. Amaç her teknolojiyi ayrı ders gibi uzatmak değil, hangi ihtiyaçta hangi parçanın devreye girdiğini netleştirmektir.`;
  const projectUse = `Gerçek bir projede ${topic.toLocaleLowerCase("tr")} çoğu zaman tek başına gündeme gelmez. Yanında bütçe, güvenlik, bakım, insan yetkinliği, tedarikçi desteği ve kabul ölçütü gelir. Bu yüzden konuya ürün kataloğu gibi değil, çalışan hizmetin bir parçası gibi bakmak gerekir.`;
  const missing = `Bu aile hiç kullanılmasa ya da yanlış yerde kullanılsa ne olur? Bazen kullanıcı yalnız yavaşlık görür; bazen veri tutarsız kalır, bazen canlıya geçiş korkulu hale gelir, bazen de güvenlik ekibi olaydan sonra yeterli iz bulamaz. Teknolojinin değeri, tam da bu aksaklığı hangi noktada azalttığıyla anlaşılır.`;
  const managerView = `Yönetici açısından doğru okuma şudur: ayrıntıya saygı duymak ama kararı ayrıntıya boğmamaktır. Hangi ekip işletecek, hangi kayıt kanıt sayılacak, hangi metrik izlenecek, hangi durumda geri dönülecek ve hangi kullanıcı grubu etkilenecek soruları netleşiyorsa teknoloji kurumun diline girmiş demektir.`;
  return [paragraph(intro), ...paragraphs.map(paragraph), paragraph(projectUse), paragraph(missing), paragraph(managerView)].join("") + visualFor(category, chapter);
}

const architectureProfiles = {
  2: {
    scene: "Trendyol benzeri sipariş yolculuğu",
    user: "kullanıcı ayakkabı arar, filtreleri değiştirir, ürünü sepete ekler, ödeme yapar ve kargo hareketini bekler",
    flow: "CDN statik dosyaları hızlı getirir, WAF zararlı isteği süzer, load balancer trafiği sağlıklı servise yollar, API Gateway kimlik ve kota kurallarını uygular, backend servisleri ürün, sepet, ödeme ve kargo işlerini ayırır",
    data: "PostgreSQL siparişin kalıcı kaydını tutar; Redis sepet ve oturum gibi hızlı değişen geçici veriyi taşır; Kafka ödeme sonrası fatura, bildirim ve kargo olaylarını sıraya alır; Elasticsearch ürün aramasını ve log incelemeyi hızlandırır",
    risk: "arama yavaşsa kullanıcı gider, stok tutarsızsa güven kaybolur, ödeme iki kez alınırsa kriz finansal hale gelir",
    analogy: "Bu akış büyük bir mağazanın görünmeyen deposu gibidir; müşteri tek kasa görür, arkada raf, stok, ödeme, paketleme ve sevkiyat birlikte çalışır."
  },
  3: {
    scene: "Ödeme sisteminde saniyelerin hesabı",
    user: "kullanıcı kart bilgisi girer ve ekranda yalnız başarılı ya da başarısız cevabını görmek ister",
    flow: "frontend ödeme isteğini backend'e yollar, backend ödeme sağlayıcısıyla API üzerinden konuşur, fraud kontrolü ve kimlik doğrulama devreye girer, sonuç kalıcı kayıtla güvenceye alınır",
    data: "PostgreSQL ödeme kaydını ve mutabakat bilgisini tutar; Kafka başarılı ödeme olayını fatura ve bildirim servislerine taşır; loglar itiraz anında zaman çizelgesi kurar",
    risk: "idempotency düşünülmezse aynı ödeme iki kez denenebilir, log eksikse müşteri itirazı kanıtlanamaz, zaman aşımı yanlış yorumlanırsa para alındığı halde sipariş oluşmayabilir",
    analogy: "Ödeme, bankodaki mühür gibidir; hızlı basılmalı ama hangi belgeye, hangi saatte, kimin onayıyla basıldığı sonradan izlenebilmelidir."
  },
  4: {
    scene: "Kargo ve lojistik takip mimarisi",
    user: "kullanıcı siparişin nerede olduğunu görmek ister; depo, kargo firması ve çağrı merkezi aynı bilgiyi okumalıdır",
    flow: "sipariş hazırlandığında depo sistemi olay üretir, kargo API'si takip numarası döner, bildirim servisi kullanıcıya haber verir, çağrı merkezi aynı kaydı CRM ekranında görür",
    data: "Kafka hareket olaylarını taşır, PostgreSQL resmi teslimat kaydını tutar, Elasticsearch takip geçmişinde hızlı arama sağlar, monitoring geciken entegrasyonu görünür kılar",
    risk: "kargo entegrasyonu koparsa kullanıcı ekranı eski bilgi gösterir, çağrı merkezi yanlış açıklama yapar ve operasyon nerede takıldığını geç fark eder",
    analogy: "Lojistik akışı tren garı gibidir; her vagonun nerede olduğu bilinirse gecikme yönetilir, bilinmezse bütün hat durmuş sanılır."
  },
  5: {
    scene: "Kamu kapısı başvuru akışı",
    user: "vatandaş form doldurur, kimliğini doğrular, belge ekler ve başvurusunun kuruma ulaştığını bilmek ister",
    flow: "kimlik doğrulama servisi, başvuru servisi, belge depolama, resmi kayıt, bildirim ve kurum içi iş akışı birbirine bağlanır",
    data: "Object storage ekleri saklar, PostgreSQL başvuru ve durum kaydını tutar, API protokolleri kurumlar arası veri alışverişini sınırlar, loglar denetim izini oluşturur",
    risk: "kişisel veri sınırı çizilmezse iyi niyetli entegrasyon KVKK riskine döner, kabul ölçütü belirsizse çalışan hizmet bile tartışılır",
    analogy: "Kamu başvurusu dijital evrak odası gibidir; dosya hızlı taşınır ama zimmet, tarih, yetki ve arşiv düzeni kaybolmamalıdır."
  },
  6: {
    scene: "Hastane randevu ve hasta kabul sistemi",
    user: "hasta randevu alır, poliklinik ekranı sırayı görür, doktor geçmiş bilgiyi açar, vezne ve laboratuvar aynı kayda bağlanır",
    flow: "randevu servisi, hasta kabul, kimlik doğrulama, laboratuvar, e-reçete ve bildirim servisleri kesintisiz çalışmalıdır",
    data: "PostgreSQL hasta işlem kaydını, loglar erişim izini, cache sık okunan randevu bilgisini, monitoring yoğun saatlerde gecikmeyi gösterir",
    risk: "mahremiyet ihlali güveni yıkar, sistem yavaşlığı hastane koridorunda kalabalık üretir, entegrasyon hatası klinik süreci aksatır",
    analogy: "Bu mimari hastane içindeki yönlendirme levhaları gibidir; hasta doğru odaya giderse süreç sakinleşir, levha yanlışsa herkes aynı koridorda bekler."
  },
  7: {
    scene: "Banka para transferi arka planı",
    user: "müşteri para gönderir ve işlemin hem hızlı hem kesin olmasını bekler",
    flow: "kimlik, yetki, bakiye kontrolü, fraud analizi, transfer emri, mutabakat ve bildirim servisleri milisaniyeler içinde sıralanır",
    data: "PostgreSQL benzeri kalıcı kayıt sistemleri muhasebe izini tutar; kuyruklar yan işleri ayırır; SIEM olağandışı davranışı izler; loglar itirazda kanıt olur",
    risk: "tutarlılık zayıfsa para hareketi tartışmalı hale gelir, güvenlik gevşekse hesap ele geçirilir, izleme yoksa olay geç fark edilir",
    analogy: "Banka transferi çift imzalı kasa defteri gibidir; hız istenir ama defterdeki satırın doğruluğu hızdan daha değerlidir."
  },
  8: {
    scene: "Savunma üretiminde dijital iz",
    user: "mühendis, üretim planlama, kalite ve tedarik ekipleri aynı parçanın geçmişini görmek ister",
    flow: "ürün ağacı, malzeme kabul, üretim istasyonu, kalite kontrol, seri numarası ve doküman yönetimi birbirine bağlanır",
    data: "PostgreSQL kalıcı üretim kaydını, Object storage teknik dokümanı, loglar değişiklik izini, yetki matrisi kritik bilgi erişimini korur",
    risk: "parça izi kaybolursa kalite sorunu büyür, doküman sürümü karışırsa yanlış üretim yapılır, tedarik zinciri belirsizse güvenlik riski doğar",
    analogy: "Savunma üretimi ameliyathane kaydı gibidir; hangi aletin, hangi işlemde, kim tarafından kullanıldığı sonradan açıklanabilmelidir."
  },
  9: {
    scene: "Komuta kontrol ve simülasyon mimarisi",
    user: "operatör gerçek zamanlı durumu görmek, komut vermek ve olayın etkisini güvenli biçimde izlemek ister",
    flow: "sensör verisi, harita, mesajlaşma, karar destek, simülasyon motoru ve kullanıcı ekranı düşük gecikmeyle birlikte çalışır",
    data: "Kafka olay akışını taşır, Redis anlık durumu hızlandırır, PostgreSQL görev kaydını tutar, monitoring gecikme ve paket kaybını gösterir",
    risk: "gecikme artarsa karar değeri düşer, veri kaynağı belirsizse ekran güvenilmez olur, yetki sınırı zayıfsa kritik komut riske girer",
    analogy: "Bu yapı hava trafik kontrolüne benzer; ekrandaki nokta küçük görünür ama arkasında zaman, konum, yetki ve kayıt vardır."
  },
  10: {
    scene: "Çağrı merkezi ve CRM entegrasyonu",
    user: "müşteri arar, temsilci geçmiş işlemleri görür, teknik ekip talebin hangi sisteme dokunduğunu anlamaya çalışır",
    flow: "telefon altyapısı, CRM, kimlik doğrulama, ticket sistemi, bilgi bankası ve raporlama paneli tek deneyim üretir",
    data: "API entegrasyonları müşteri kaydını taşır, Elasticsearch bilgi bankasında arama yapar, loglar temsilci işlemini kaydeder, dashboard kuyruk yoğunluğunu gösterir",
    risk: "bilgi dağınıksa temsilci yanlış yönlendirir, kuyruk görünmezse bekleme büyür, kişisel veri sınırı yoksa kayıtlar risk üretir",
    analogy: "Çağrı merkezi iyi çalışan bir santral gibidir; doğru kişiye hızlı bağlar ama her konuşmanın sınırı ve kaydı bellidir."
  },
  11: {
    scene: "Gerçek zamanlı bildirim sistemi",
    user: "kullanıcı sipariş, ödeme, randevu veya güvenlik uyarısını zamanında almak ister",
    flow: "olay üreten servis mesajı kuyruğa bırakır, bildirim servisi kanal seçer, SMS, e-posta veya mobil push gönderilir, başarısız denemeler yeniden işlenir",
    data: "Kafka veya RabbitMQ olayları taşır, Redis kısa süreli durum tutar, PostgreSQL gönderim kaydını saklar, monitoring geciken bildirimleri gösterir",
    risk: "aynı bildirim defalarca giderse güven azalır, hiç gitmezse iş süreci aksar, yanlış kişiye giderse güvenlik ve mahremiyet sorunu doğar",
    analogy: "Bildirim sistemi kurumun zilidir; doğru kişiye doğru zamanda çalarsa işe yarar, sürekli çalarsa kimse ciddiye almaz."
  },
  12: {
    scene: "Kimlik, yetki ve oturum mimarisi",
    user: "kullanıcı bir kez giriş yapıp yetkisi olan ekranlara güvenli biçimde erişmek ister",
    flow: "SSO, MFA, OAuth2, JWT, rol yönetimi, oturum süresi ve erişim logları birlikte tasarlanır",
    data: "IAM kullanıcı ve rol bilgisini yönetir, JWT oturum bilgisini taşır, loglar erişim izini tutar, SIEM olağandışı girişleri ilişkilendirir",
    risk: "fazla yetki veri sızıntısına, uzun ömürlü token hesap ele geçirmeye, eksik log denetim zafiyetine dönüşebilir",
    analogy: "Bu mimari kurum binasının kartlı geçiş sistemi gibidir; kapı açılır ama kim, ne zaman, hangi yetkiyle geçti bilinmelidir."
  },
  13: {
    scene: "Raporlama ve veri ambarı akışı",
    user: "yönetici tek ekranda doğru sayıyı görmek ister; veri ekibi ise bu sayının hangi kayıttan geldiğini kanıtlamak zorundadır",
    flow: "operasyonel veritabanları, ETL süreçleri, veri ambarı, kalite kontrolleri ve gösterge panelleri sıralı çalışır",
    data: "PostgreSQL kaynak kayıt tutar, veri ambarı analitik sorguyu taşır, veri sözlüğü anlam birliğini sağlar, dashboard karar ekranını oluşturur",
    risk: "tanım birliği yoksa iki rapor aynı kavramı farklı sayar, veri gecikirse karar eski gerçekle alınır, kalite kontrol yoksa güven azalır",
    analogy: "Raporlama muhasebe kapanışı gibidir; rakam hızlı gelsin istenir ama hangi defterden geldiği bilinmeden imzalanmaz."
  },
  14: {
    scene: "Mobil uygulama ile backend arasındaki yol",
    user: "telefon ekranında hızlı ve sade deneyim ister; ağ kesilse bile bazı işlemlerin kontrollü davranmasını bekler",
    flow: "mobil uygulama API Gateway'e gider, backend iş kuralını çalıştırır, cache sık okunan veriyi hızlandırır, bildirim servisi kullanıcıya geri döner",
    data: "JWT oturumu taşır, Redis geçici durum tutar, PostgreSQL kalıcı kaydı saklar, CDN uygulama varlıklarını hızlandırır",
    risk: "zayıf bağlantı düşünülmezse kullanıcı işlemi yarım sanır, eski token güvenlik açığı üretir, hata mesajı belirsizse destek yükü artar",
    analogy: "Mobil uygulama saha personelinin el terminali gibidir; ekran küçük olabilir ama arkasındaki kurum süreci büyüktür."
  },
  15: {
    scene: "Yüksek trafikte ölçekleme ve hata yalıtımı",
    user: "kampanya, sınav başvurusu veya yoğun kamu hizmetinde sayfanın açılmasını ve işlemin tamamlanmasını bekler",
    flow: "CDN, WAF, load balancer, yatay ölçeklenen servisler, cache, kuyruk ve veritabanı sınırları birlikte çalışır",
    data: "monitoring kapasiteyi izler, loglar hatayı gösterir, Kafka yan işleri ayırır, PostgreSQL tutarlılık sınırını korur",
    risk: "her katman aynı anda düşünülmezse en zayıf halka bütün hizmeti yavaşlatır; ölçekleme yalnız sunucu eklemekle çözülmez",
    analogy: "Yoğun trafik büyük bir konser çıkışı gibidir; kapı, güvenlik, yönlendirme, otopark ve yol aynı anda planlanmazsa kalabalık tek noktada düğümlenir."
  }
};

function architectureChapter(category, chapter) {
  const profile = architectureProfiles[chapter.number] || architectureProfiles[2];
  const topic = profile.scene;
  return [
    paragraph(`${topic} ekranda tek bir işlem gibi görünür. ${profile.user}. Kullanıcı bu yolun arkasındaki servisleri bilmez; onun için önemli olan işlemin hızlı, doğru ve güvenilir tamamlanmasıdır.`),
    paragraph(`Arka planda akış şöyle kurulur: ${profile.flow}. Bu cümlede geçen her parça farklı bir sorumluluk taşır. Biri trafiği dengeler, biri kimliği kontrol eder, biri iş kuralını çalıştırır, biri de olayın izini tutar.`),
    paragraph(`Veri tarafında tablo daha da netleşir. ${profile.data}. Büyük mimarilerde ana kayıt, hızlı kopya, arama indeksi ve olay kuyruğu birbirine karıştırılmaz. Hangi bilginin resmi kayıt, hangisinin hızlandırıcı kopya olduğu bilinirse kriz anında ekip aynı gerçeğe bakar.`),
    paragraph(`Donanım ve altyapı bu akışın sessiz zeminidir. Sunucuların CPU, RAM ve disk kapasitesi; ağın gecikmesi; veri merkezinin enerji ve soğutması; buluttaki kaynak limitleri bu deneyimi doğrudan etkiler. Yazılım iyi yazılmış olsa bile altyapı sınırı görülmezse sorun kullanıcı ekranına düşer.`),
    paragraph(`En kritik risk şudur: ${profile.risk}. Bu yüzden mimari çizim yalnız kutular ve oklar değildir; hata anında hangi kutunun neyi etkilediğini gösteren karar aracıdır.`),
    paragraph(`${profile.analogy} Yönetici için öğrenilmesi gereken ayrıntı budur: teknolojinin adı değil, akıştaki görevi ve bozulduğunda hangi hizmeti etkilediğidir.`)
  ].join("") + visualFor(category, chapter);
}

function storyChapter(category, chapter) {
  const topic = cleanTitle(chapter);
  return [
    paragraph(`${topic} sabahı genellikle büyük cümlelerle başlamaz. Bir kullanıcı ekranın ağır açıldığını söyler, bir uzman loglarda küçük bir hata görür, tedarikçi bunun geçici olduğunu anlatır, yönetici ise hizmetin ne zaman normale döneceğini sorar.`),
    paragraph(`Olay büyüdükçe ilk görünen belirtiyle gerçek sebep arasındaki mesafe açılır. Ekrandaki hata bir API zaman aşımı olabilir; zaman aşımı veritabanı kilidine, kilit yanlış rapor sorgusuna, sorgu da aylar önce yazılmış eksik kabul ölçütüne bağlanabilir. Bu yüzden iyi teknik okuma yalnız sunucuya bakmakla bitmez.`),
    paragraph(`Masada herkes haklı bir parçayı tutar. Yazılımcı kodun çalıştığını, sistemci kaynakların sınırda olduğunu, güvenlikçi fazla yetki verilemeyeceğini, kullanıcı ise işinin durduğunu söyler. Hikâyenin öğretici kısmı burada başlar: doğru karar, bu parçaları tek zaman çizelgesine bağlayabilmektir.`),
    paragraph(`Bu noktada küçük ayrıntılar büyür. Bir hata kodu eksik yazılmışsa çağrı merkezi yanlış açıklama yapar; bir log alanı tutulmamışsa olayın başlangıcı karanlıkta kalır; bir API sözleşmesi güncel değilse iki ekip aynı kelimeyle farklı veriyi anlatır. Hikâyenin akışı bu yüzden teknik ayrıntıya uğrar ama orada oyalanmaz.`),
    paragraph(`Olayı izleyen yönetici için değerli olan şey suçlu bulmak değil, sistemin nerede zayıf kaldığını anlamaktır. Bir kişi gece müdahale ederek hizmeti ayağa kaldırabilir; fakat kurum aynı zayıflıkla bir sonraki haftaya giriyorsa iş gerçekten çözülmüş sayılmaz.`),
    paragraph(`${topic} sonunda kurumun kazanması gereken şey yalnız çözüm değildir. Bir daha aynı olay olduğunda hangi alarma bakılacağı, hangi logun saklanacağı, hangi API sözleşmesinin güncelleneceği, hangi tedarikçi taahhüdünün ölçüleceği ve hangi kullanıcı grubunun önceden bilgilendirileceği netleşmelidir.`),
    paragraph(`Bu tür hikâyelerde tempo, teknik olayın insan tarafıyla birleştiği yerde artar. Kullanıcı sabırsızdır çünkü işi beklemektedir; tedarikçi savunmadadır çünkü taahhüdü sorgulanmaktadır; ekip yorgundur çünkü sistemin geçmiş borcunu o anda taşımaktadır. İyi karar, bu gerilimi görüp yine de somut kanıta dönmektir.`),
    paragraph(`Böyle okunduğunda teknoloji hikâyesi dedikoduya dönüşmez. Her olay, kamu veya özel sektörde yıllarca çalışan birinin sezgisini besleyen küçük bir deneyim kaydına dönüşür.`)
  ].join("") + visualFor(category, chapter);
}

function contentFor(category, chapter) {
  if (chapter.number === 1) return routeIntro(category, chapter);
  if (category.mode === "history") return historyChapter(chapter);
  if (["software", "systems", "security", "ai"].includes(category.mode)) return techChapter(category, chapter);
  if (category.mode === "architecture") return architectureChapter(category, chapter);
  if (category.mode === "story") return storyChapter(category, chapter);
  return narrativeChapter(category, chapter);
}

function svgFigure(kind, caption, svg) {
  return `
    <figure class="visual-canvas ${kind}">
      ${svg}
      <figcaption>${caption}</figcaption>
    </figure>
  `;
}

function visualFor(category, chapter) {
  const title = cleanTitle(chapter);
  const n = normalizeText(title);
  if (chapter.number === 1 && category.mode !== "pills") {
    return svgFigure("visual-map", `${category.title} için ana ilişki haritası: konu, kişi, kanıt ve karar aynı akışta okunur.`, `
      <svg viewBox="0 0 900 260" role="img" aria-label="${category.title} ilişki haritası">
        <path class="v-line" d="M90 160 C220 60 320 210 450 130 S650 45 805 145" fill="none"/>
        <g class="v-node" style="--i:0"><circle cx="90" cy="160" r="10"/><text x="55" y="210">İhtiyaç</text></g>
        <g class="v-node" style="--i:1"><circle cx="290" cy="145" r="10"/><text x="260" y="70">Kişi</text></g>
        <g class="v-node" style="--i:2"><circle cx="500" cy="110" r="10"/><text x="466" y="205">Kanıt</text></g>
        <g class="v-node" style="--i:3"><circle cx="805" cy="145" r="10"/><text x="772" y="80">Karar</text></g>
      </svg>`);
  }
  if (category.mode === "architecture" && (n.includes("sipariş") || n.includes("ödeme") || n.includes("başvuru"))) {
    return svgFigure("visual-flow", "Kullanıcının tek işlemi; güvenlik, iş kuralı, veri, kuyruk ve izleme katmanlarından geçer.", `
      <svg viewBox="0 0 900 280" role="img" aria-label="Büyük sistem akışı">
        <g class="v-box" style="--i:0"><rect x="40" y="95" width="125" height="70" rx="10"/><text x="72" y="135">Ekran</text></g>
        <g class="v-box" style="--i:1"><rect x="220" y="95" width="125" height="70" rx="10"/><text x="247" y="135">Gateway</text></g>
        <g class="v-box" style="--i:2"><rect x="400" y="95" width="125" height="70" rx="10"/><text x="430" y="135">Servis</text></g>
        <g class="v-box" style="--i:3"><rect x="580" y="45" width="125" height="70" rx="10"/><text x="612" y="85">Veri</text></g>
        <g class="v-box" style="--i:4"><rect x="580" y="155" width="125" height="70" rx="10"/><text x="606" y="195">Kuyruk</text></g>
        <g class="v-box" style="--i:5"><rect x="760" y="95" width="105" height="70" rx="10"/><text x="790" y="135">Log</text></g>
        <path class="v-line" d="M165 130 H220 M345 130 H400 M525 130 C555 130 555 80 580 80 M525 130 C555 130 555 190 580 190 M705 80 C735 80 735 130 760 130 M705 190 C735 190 735 130 760 130" fill="none"/>
      </svg>`);
  }
  if (category.mode === "software" && n.includes("programlama")) {
    return svgFigure("visual-language-family", "Diller ayrı ezber değil; kurumun bakım ömrüne, ekip yetkinliğine ve ürün ailesine göre seçilen araçlardır.", `
      <svg viewBox="0 0 900 250" role="img" aria-label="Programlama dili ailesi">
        ${["Java", "Python", "C#", "JavaScript"].map((label, i) => `<g class="v-box" style="--i:${i}"><rect x="${80 + i * 205}" y="${80 + (i % 2) * 24}" width="150" height="78" rx="12"/><text x="${120 + i * 205}" y="${126 + (i % 2) * 24}">${label}</text></g>`).join("")}
        <path class="v-line" d="M155 185 H750" fill="none"/><text class="v-small" x="315" y="220">ekip, bakım, güvenlik, ölçek</text>
      </svg>`);
  }
  if (category.mode === "software" && (n.includes("arama") || n.includes("log"))) {
    return svgFigure("visual-search", "Logstash toplar, Elasticsearch arar, Kibana görünür kılar.", `
      <svg viewBox="0 0 900 240" role="img" aria-label="Log ve arama hattı">
        <path class="v-line" d="M70 120 H250 H430 H610 H790" fill="none"/>
        ${["Log", "Logstash", "Elasticsearch", "Kibana"].map((label, i) => `<g class="v-box" style="--i:${i}"><rect x="${35 + i * 205}" y="82" width="145" height="76" rx="11"/><text x="${62 + i * 205}" y="126">${label}</text></g>`).join("")}
      </svg>`);
  }
  if (category.mode === "systems" && (n.includes("donanım") || n.includes("veri merkezi"))) {
    return svgFigure("visual-datacenter", "Yazılımın arkasındaki gerçek zemin: işlem, bellek, depolama, ağ, enerji ve soğutma.", `
      <svg viewBox="0 0 900 260" role="img" aria-label="Veri merkezi bileşenleri">
        ${["CPU", "RAM", "Disk", "Ağ", "UPS"].map((label, i) => `<g class="v-box" style="--i:${i}"><rect x="${65 + i * 160}" y="${70 + (i % 2) * 40}" width="110" height="75" rx="10"/><text x="${96 + i * 160}" y="${115 + (i % 2) * 40}">${label}</text></g>`).join("")}
        <path class="v-line" d="M120 200 H760" fill="none"/>
      </svg>`);
  }
  if (category.mode === "security" && (n.includes("giriş") || n.includes("kimlik") || n.includes("ağ güvenliği"))) {
    return svgFigure("visual-security", "Güvenlik katmanları aynı veriyi farklı risklerden korur.", `
      <svg viewBox="0 0 900 260" role="img" aria-label="Siber güvenlik katmanları">
        <circle class="v-ring" cx="450" cy="130" r="46"/><circle class="v-ring" cx="450" cy="130" r="86"/><circle class="v-ring" cx="450" cy="130" r="126"/>
        <text x="423" y="137">Veri</text>
        <text x="190" y="75">Kimlik</text><text x="645" y="75">Ağ</text><text x="175" y="205">Uç nokta</text><text x="645" y="205">İzleme</text>
      </svg>`);
  }
  if (category.mode === "ai" && (n.includes("rag") || n.includes("embedding") || n.includes("yapay zekâ"))) {
    return svgFigure("visual-rag", "Kurumsal yapay zekâda cevap, modelin genel bilgisinden çok seçilmiş kaynağa bağlandığında değer kazanır.", `
      <svg viewBox="0 0 900 260" role="img" aria-label="RAG akışı">
        ${["Soru", "Kaynak", "Vektör arama", "Model", "Cevap"].map((label, i) => `<g class="v-box" style="--i:${i}"><rect x="${40 + i * 170}" y="${85 + (i % 2) * 35}" width="125" height="68" rx="10"/><text x="${65 + i * 170}" y="${126 + (i % 2) * 35}">${label}</text></g>`).join("")}
        <path class="v-line" d="M165 120 C245 120 245 155 335 155 S435 85 505 85 S610 155 675 155 S760 120 845 120" fill="none"/>
      </svg>`);
  }
  return "";
}

function pillText(index) {
  const [name, definition, useCase] = pillConcepts[index % pillConcepts.length];
  const kind = pillKind(name);
  const pools = pillContextByKind[kind];
  const domain = pools.domains[(index * 7 + Math.floor(index / 25)) % pools.domains.length];
  const moment = pools.moments[(index * 11 + Math.floor(index / 10)) % pools.moments.length];
  const evidence = pools.evidence[(index * 13 + Math.floor(index / 50)) % pools.evidence.length];
  const risk = pillRisks[(index * 17 + Math.floor(index / 100)) % pillRisks.length];
  const angle = [
    `${name} için asıl değer, ürün adından çok iş akışındaki yerini anlayınca ortaya çıkar.`,
    `${name} kısa not gibi okunabilir; fakat arkasında bütçe, sahiplik ve işletme sorumluluğu vardır.`,
    `${name} toplantıda duyulduğunda yalnız adını bilmek yetmez, hangi kaydı veya hizmeti etkilediğini görmek gerekir.`,
    `${name} doğru konumlandığında teknik ekibin işini azaltır ve yöneticinin kararını sadeleştirir.`,
    `${name} yanlış bağlamda kullanıldığında çözümden çok yeni bağımlılık doğurabilir.`
  ][(index * 19 + Math.floor(index / 125)) % 5];
  return `${name}, ${definition}. ${useCase} Örneğin ${domain} ${moment} ${evidence} üzerinden değerlendirilir; çünkü ${risk}. ${angle}`;
}

const pills = Array.from({ length: 5000 }, (_, index) => pillText(index));

function pillItemsForPage(pageNumber) {
  const start = (pageNumber - 1) * 10;
  return pills.slice(start, start + 10);
}

function renderPillPage(pageNumber) {
  const safePage = Math.min(500, Math.max(1, Number(pageNumber) || 1));
  const items = pillItemsForPage(safePage);
  return `
    <article class="article-card">
      <p class="kicker">Rastgele Hap Bilgi</p>
      <div class="article-title-row">
        <h1>Hap bilgi sayfası ${safePage}</h1>
        <span class="reading-pill">10 açıklama</span>
      </div>
      <ol class="pill-list">
        ${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
      </ol>
      <div class="bottom-nav">
        <button class="text-button primary" id="randomPillButton" type="button">Rastgele</button>
        <button class="text-button" id="backPillButton" type="button">Geri</button>
        <a class="text-button" href="#/">Ana sayfa</a>
      </div>
    </article>
  `;
}

function randomPillPage() {
  const page = Math.floor(Math.random() * 500) + 1;
  state.lastPillPages.push(page);
  if (state.lastPillPages.length > 30) state.lastPillPages.shift();
  return page;
}

function renderPills() {
  closeMobileSidebar();
  els.home.classList.add("hidden");
  els.chapter.classList.add("hidden");
  els.pills.classList.remove("hidden");
  const requested = Number((location.hash.match(/^#\/pills\/(\d+)/) || [])[1]);
  const initial = requested ? Math.min(500, Math.max(1, requested)) : state.lastPillPages.at(-1) || randomPillPage();
  if (requested) state.lastPillPages.push(initial);
  els.pills.innerHTML = renderPillPage(initial);
  bindPillButtons();
  renderNav();
}

function bindPillButtons() {
  document.querySelector("#randomPillButton")?.addEventListener("click", () => {
    els.pills.innerHTML = renderPillPage(randomPillPage());
    bindPillButtons();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  document.querySelector("#backPillButton")?.addEventListener("click", () => {
    if (state.lastPillPages.length > 1) state.lastPillPages.pop();
    els.pills.innerHTML = renderPillPage(state.lastPillPages.at(-1) || randomPillPage());
    bindPillButtons();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function renderNav() {
  const query = normalizeText(els.search.value.trim());
  const activeId = location.hash.startsWith("#/chapter/") ? location.hash.replace("#/chapter/", "") : "";

  els.nav.innerHTML = categories
    .map((category) => {
      const open = query ? true : state.activeCategory === category.id;
      const chapterLinks = category.mode === "pills" && !query
        ? ""
        : category.chapters
            .map((title, index) => {
              const chapter = {
                id: chapterId(category, index + 1),
                title,
                number: index + 1,
                categoryId: category.id
              };
              const haystack = normalizeText(`${category.title} ${category.summary} ${title} ${category.mode === "pills" ? pillItemsForPage(index + 1).join(" ") : ""}`);
              if (query && !haystack.includes(query)) return "";
              return `<a class="chapter-link ${activeId === chapter.id ? "active" : ""}" href="${category.mode === "pills" ? `#/pills/${index + 1}` : `#/chapter/${chapter.id}`}" data-category="${category.id}">
                <span>${index + 1}. ${escapeHtml(title)}</span>
                <small>${category.mode === "pills" ? "Rastgele bölüm" : `Dosya ${index + 1}`}</small>
              </a>`;
            })
            .join("");
      if (query && !chapterLinks && !normalizeText(`${category.title} ${category.summary}`).includes(query)) return "";
      return `
        <div class="category-group ${open ? "open" : ""}">
          <button class="category-button" type="button" data-category="${category.id}">
            <span>${category.order}. ${escapeHtml(category.title)}</span>
            <small>${category.count} bölüm</small>
          </button>
          <div class="chapter-list">${chapterLinks}</div>
        </div>
      `;
    })
    .join("");

  document.querySelectorAll(".category-button").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.dataset.category;
      const category = getCategory(id);
      if (category.mode === "pills") {
        location.hash = "#/pills";
        return;
      }
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
  els.pills.classList.add("hidden");
  const readingChapters = categories.reduce((sum, category) => sum + (category.mode === "pills" ? 0 : category.count), 0);
  els.home.innerHTML = `
    <section class="home-hero">
      <p class="kicker">${book.kicker}</p>
      <h1>${book.title}</h1>
      <p class="hero-copy">${book.promise}</p>
      <div class="stats-row">
        <div><strong>${readingChapters}</strong><span>okuma bölümü</span></div>
        <div><strong>${categories.length}</strong><span>ana başlık</span></div>
        <div><strong>5000</strong><span>hap bilgi</span></div>
      </div>
      <div class="hero-actions">
        <a class="text-button primary" href="#/chapter/${chapterId(categories[0], 1)}">Baştan başla</a>
        <a class="text-button" href="#/pills">Rastgele hap bilgi</a>
      </div>
    </section>
    <section class="route-section">
      <h2>Okuma Rotası</h2>
      <p>${book.subtitle}</p>
      <div class="category-grid">
        ${categories.map((category) => `
          <a class="category-card" href="${category.mode === "pills" ? "#/pills" : `#/chapter/${chapterId(category, 1)}`}">
            <small>${category.order}</small>
            <h3>${escapeHtml(category.title)}</h3>
            <p>${escapeHtml(category.summary)}</p>
            <span>${category.count} bölüm</span>
          </a>
        `).join("")}
      </div>
    </section>
  `;
  renderNav();
}

function renderChapter(id) {
  const chapter = getChapter(id);
  const category = getCategory(chapter.categoryId);
  const route = routeInfo(chapter);
  state.activeCategory = category.id;
  closeMobileSidebar();
  els.home.classList.add("hidden");
  els.pills.classList.add("hidden");
  els.chapter.classList.remove("hidden");
  const article = contentFor(category, chapter);
  const minutes = readingMinutes(article);
  const progress = Math.round(((route.index + 1) / chapters.filter((item) => getCategory(item.categoryId).mode !== "pills").length) * 100);
  els.chapter.innerHTML = `
    <article class="article-card">
      <p class="kicker">${category.order}. ${escapeHtml(category.title)} / Bölüm ${chapter.number}</p>
      <h1>${escapeHtml(chapter.title)}</h1>
      <p class="chapter-subtitle">${escapeHtml(category.summary)}</p>
      <div class="meta-row">
        <span>${minutes} dk okuma</span>
        <span>${category.count} bölümlük rota</span>
        <span>%${progress}</span>
      </div>
      <div class="article-body">${article}${termsPanel(article, chapter.title)}</div>
      <nav class="bottom-nav" aria-label="Bölüm geçişi">
        ${route.previous ? `<a class="text-button" href="#/chapter/${route.previous.id}">Önceki</a>` : `<a class="text-button" href="#/">Ana sayfa</a>`}
        ${route.next ? `<a class="text-button primary" href="#/chapter/${route.next.id}">Sonraki</a>` : `<a class="text-button primary" href="#/pills">Hap bilgiler</a>`}
      </nav>
    </article>
  `;
  renderNav();
}

function router() {
  const hash = location.hash || "#/";
  if (hash === "#/" || hash === "#") {
    renderHome();
  } else if (hash.startsWith("#/chapter/")) {
    renderChapter(hash.replace("#/chapter/", ""));
  } else if (hash.startsWith("#/pills")) {
    renderPills();
  } else {
    renderHome();
  }
}

function closeMobileSidebar() {
  els.sidebar.classList.remove("open");
}

function initTheme() {
  const saved = localStorage.getItem("theme") || "dark";
  document.documentElement.dataset.theme = saved;
}

function toggleTheme() {
  const next = document.documentElement.dataset.theme === "sepia" ? "dark" : "sepia";
  document.documentElement.dataset.theme = next;
  localStorage.setItem("theme", next);
}

function init() {
  initTheme();
  els.themeToggle.addEventListener("click", toggleTheme);
  els.menuToggle.addEventListener("click", () => els.sidebar.classList.toggle("open"));
  els.search.addEventListener("input", renderNav);
  window.addEventListener("hashchange", router);
  router();
}

init();
