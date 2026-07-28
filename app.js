const book = {
  title: "Teknoloji Atlası",
  kicker: "Kamu, Yazılım ve Gelecek İçin Saha Kitabı",
  subtitle: "Kamu kurumlarında, savunma sanayiinde ve büyük ölçekli şirketlerde karşılaşılan yazılım, altyapı, siber güvenlik, veri ve yapay zekâ meselelerini aynı çalışma hayatının içinde sıraya koyar.",
  promise:
    "Bir sabah kullanıcı ekranı açılmaz, öğleden sonra tedarikçi toplantısı başlar, akşam kabul tutanağı masaya gelir. Aynı günün içinde kod, kurum, insan, bütçe ve mimari birbirine bağlanır."
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
    summary: "Teknik insanların görünen cümleleri, iç baskıları, direnç sebepleri ve karar anındaki gerçek dertleri.",
    mode: "people",
    chapters: [
      "İnsanlar ve teknoloji: söylenen cümlenin arkasındaki ihtiyaç",
      "Kamu personelinin güvenlik ve sorumluluk kaygısı",
      "Özel sektör teknik ekibinin hız ve performans baskısı",
      "Yazılımcı, sistemci, ağcı ve güvenlikçinin aynı olaya bakışı",
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
    stakes: "yaşanmış gibi anlatılan olay, ileride benzer masada daha erken uyarı sezgisi kazandırır",
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
    scene: "yakın gelecek kurumların büyüyen kapasite, güvenlik, veri ve insan baskısında kendini gösterir",
    actors: "devletler, teknoloji şirketleri, kurum yöneticileri, güvenlik ekipleri, kullanıcılar ve tedarikçiler aynı değişimin farklı tarafında durur",
    stakes: "öngörü, kesin kehanet değil; hangi baskının büyüdüğünü doğru okumaktır",
    tech: ["RAG", "GPU", "Zero Trust", "VPN", "Object storage", "Kubernetes"]
  },
  software: {
    scene: "yazılım ve veri tarafında her araç, çözdüğü ihtiyaç ve taşıdığı sorumlulukla birlikte okunur",
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
    "Güncel hayatta programlama dili, binanın taşıyıcı sistemi gibidir. Dışarıdan görünmez, ama kat çıkılacaksa, tadilat yapılacaksa ve bina uzun süre kullanılacaksa taşıyıcı sistemin doğru seçilmiş olması her şeyden önemlidir."
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
    "Buradaki karşılık noter defteridir. Herkes hızlıca not alabilir, ekranda kopya gösterebilir; ama sonradan hesap sorulacak kayıt hangi defterdeyse kurumun gerçeği oradadır."
  ],
  "Hız ve geçici veri": [
    "Redis, cache ve CDN aynı ailede düşünülür: hepsi kullanıcıyı bekletmemek ve ana sistemi yormamak için sık kullanılan bilgiyi daha yakın veya daha hızlı yerde tutar. Redis bellek içinde geçici veri saklar; CDN statik içeriği kullanıcıya yakın dağıtır; cache genel olarak yeniden hesaplamayı azaltır.",
    "E-ticarette sepet, oturum, kampanya sayacı veya sık okunan ürün bilgisi Redis ile hızlanabilir. Büyük görseller ve betikler CDN üzerinden verildiğinde ana sunucu nefes alır. Fakat fiyat, stok ve sipariş gibi kritik bilgilerde eski veri gösterme riski baştan düşünülmelidir.",
    "Bu aileyi mola yerindeki hazır çay tepsisi gibi düşün. Her bardak için yeniden su kaynatmazsın; ama tepsideki çayın bayatlamadığını, kime verildiğini ve ne zaman yenileneceğini bilmek zorundasın."
  ],
  "Arama ve log": [
    "Elasticsearch büyük metin, ürün, belge ve log kümelerinde hızlı arama yapmak için kullanılır. Logstash farklı kaynaklardan gelen logları toplar, düzenler ve Elasticsearch'e gönderir. Kibana ise bu veriyi arama ekranı, grafik ve gösterge paneli haline getirir.",
    "Ana veritabanı ile arama motoru aynı şey değildir. PostgreSQL siparişin resmi kaydını tutarken Elasticsearch o siparişler içinde hızlı arama, filtreleme ve analiz sağlar. Log incelemesinde de amaç milyonlarca satır içinde doğru zamanı, doğru hatayı ve doğru kullanıcı etkisini bulmaktır.",
    "Elasticsearch büyük bir arşivin hızlı katalog görevlisine benzer. Belgenin aslı arşivdedir; katalog görevlisi doğru rafı, benzer kayıtları ve aranan izleri hızla gösterir."
  ],
  "Mesajlaşma": [
    "Kafka ve RabbitMQ, servislerin birbirini doğrudan beklemeden çalışmasını sağlar. Ödeme tamamlandığında fatura, kargo, bildirim ve raporlama aynı anda farklı servislerin işi olabilir. Her servisi sırayla bekletmek yerine olay veya mesaj kuyruğa bırakılır.",
    "Kafka yüksek hacimli olay akışlarında güçlüdür; RabbitMQ işlerin kontrollü sıraya alınmasında sık kullanılır. İkisi de sorunları yok etmez, sorunların akışını yönetilebilir hale getirir. Kuyruk birikirse gecikme büyür; mesaj kaybolursa iş süreci eksik kalır.",
    "Bunu kargo ayrıştırma bandı gibi düşün. Paketleri tek tek elden ele bekletmezsin; banda koyarsın, ilgili ekip alır. Ama bantta birikme varsa bina dışarıdan hâlâ açık görünse bile içeride iş gecikiyordur."
  ],
  "Paketleme": [
    "Docker uygulamayı bağımlılıklarıyla birlikte paketler. Git kodun geçmişini tutar. GitHub ekip çalışmasını, kod incelemeyi ve otomasyonu görünür kılar. CI/CD ise kodun testten geçip kontrollü biçimde ortama alınmasını sağlar.",
    "Bu aile yazılımın üretim hattıdır. Geliştirici kodu yazar, Git'e işler, ekip GitHub üzerinde inceler, testler çalışır, paket hazırlanır, uygun ortamda dağıtılır. Bir halka zayıfsa canlıya çıkan hatanın nereden geldiğini bulmak zorlaşır.",
    "Bu düzen fabrikadaki kalite kapılarına benzer. Ürün elden ele dolaşırken her adımda kayıt, kontrol ve geri dönüş imkânı varsa hata saklanmaz; erken yakalanır."
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
    "Kimlik yönetimi kurum binasındaki giriş kartı, özel oda anahtarı ve ziyaretçi defteri gibidir. Herkes binaya girebilir diye kasaya da giremez; giren kişinin izi de tutulmalıdır."
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

const routeNarratives = {
  "kamu-rehberi": [
    "Kamu tarafında teknoloji çoğu zaman bir ekranla değil, bir ihtiyaç yazısıyla başlar. Bir daire başkanı hizmetin aksadığını söyler, bilgi işlem ekibi mevcut sistemin sınırlarını anlatır, satın alma yaklaşık maliyeti sorar, hukuk birimi kişisel veriye dikkat çeker, üst yönetim ise işin ne zaman vatandaşa dokunacağını bilmek ister. Aynı masada teknik, idari, mali ve hukuki dil yan yana durur; önce o masanın dili sadeleşir.",
    "İhale ihtiyacı doğru yazılmadan iyi teknik şartname çıkmaz; teknik şartname ölçülebilir kurulmadan kabul komisyonu rahat çalışmaz; kabul netleşmeden de kurum aldığı hizmetin gerçekten işine yarayıp yaramadığını savunamaz. Bir sunucu alımı, bir yazılım geliştirme işi, bir veri paylaşım protokolü veya bir bakım sözleşmesi dışarıdan küçük bir işlem gibi görünür. İçeride ise imza, bütçe, denetim, tedarikçi, kullanıcı ve hizmet sürekliliği birbirine bağlanır.",
    "Kamuya yeni giren biri bazen resmi yazıyı yavaşlık, ihale sürecini bürokrasi, komisyonu formalite sanabilir. Sahada işler bu kadar basit değildir. Resmi yazı kurum hafızasını tutar; ihale rekabeti ve hesap verebilirliği korur; kabul komisyonu teslim edilen işin gerçekten sözleşmedeki iş olup olmadığını kayıt altına alır. İyi bilgi teknolojileri yöneticisi bu yapıları ezberlemez, hangi riski azalttıklarını bilir.",
    "İhtiyaç tarifinden teknik şartnameye, yaklaşık maliyetten muayene kabule, protokolden KVKK'ya, lisans envanterinden felaket kurtarmaya kadar kamu BT'nin ana omurgası sırayla açılır. Burada mevzuat maddesi saymaktan çok, bir bakanlıkta, belediyede, üniversitede veya savunma şirketinde teknik kararın nasıl resmî karara dönüştüğü ve masadaki her cümlenin neye temas ettiği izlenir."
  ],
  insanlar: [
    "Teknoloji projelerinde en zor parça çoğu zaman sunucu, kod veya ağ değildir; aynı olaya bakan insanların farklı kaygılarıdır. Yazılımcı değişiklik ister, sistemci istikrar ister, güvenlikçi sınır ister, kullanıcı hız ister, yönetici hesap verebilirlik ister. Herkes haklı bir parçayı tutar ama parçalar tek resme bağlanmazsa toplantı uzar, karar gecikir ve sorun teknikmiş gibi görünürken aslında insan diliyle büyür.",
    "Kamu personeli riskten kaçıyor gibi görünebilir; çoğu zaman imzanın ağırlığını taşır. Özel sektör ekibi aceleci görünebilir; çoğu zaman pazar baskısını ve müşteri kaybını hisseder. Tedarikçi fazla parlak konuşabilir; çoğu zaman sözleşme kapsamını genişletmeden işi yönetmeye çalışır. Kullanıcı direniyor gibi görünebilir; çoğu zaman işini kaybetmekten, hata yapmaktan veya alıştığı düzeni yitirmekten korkar.",
    "Teknik cümlelerin arkasında çoğu zaman görünmeyen bir insan hâli vardır. Bir sistemci 'bu ortamı açamayız' dediğinde bazen güvenlik açığını, bazen kapasite yetersizliğini, bazen de daha önce yaşanmış ve kayda geçmemiş bir krizi hatırlıyordur. Bir yazılımcı 'bu istek küçük değil' dediğinde yalnız kod satırını değil, test yükünü, veri etkisini ve canlıya geçiş riskini de anlatmaya çalışıyordur.",
    "İyi yönetici bu seslerin hangisinin direnç, hangisinin uyarı, hangisinin yorgunluk, hangisinin gerçek risk olduğunu ayırmaya başlar. İnsanlar ve teknoloji başlığı bu yüzden teknik atlasın yumuşak ama belirleyici zeminidir. Çünkü aynı sistemi iki farklı ekip işletebilir; birinde kriz büyür, diğerinde aynı sorun sakin bir bakım kaydına dönüşür."
  ],
  "tarihsel-evrim": [
    "Teknolojinin tarihi yılların ve cihaz adlarının listesi değildir. İlk bilgisayarlar ortaya çıktığında amaç eğlenceli uygulamalar yazmak değildi; savaş hesapları, nüfus sayımı, bilimsel modelleme ve tekrar eden büyük işlemleri daha hızlı yapmaktı. Sonra makine küçüldü, transistor geldi, ana bilgisayar kurum merkezine yerleşti, programlama dilleri makineyle insan işi arasında köprü kurdu. Her yeni adım bir önceki çözümün büyüttüğü yeni soruna cevap verdi.",
    "Mainframe güvenilir kayıt fikrini doğurdu; kişisel bilgisayar teknolojiyi masaya indirdi; yerel ağlar ofisleri birbirine bağladı; web bilgiyi kurum duvarının dışına taşıdı. Veritabanı raporu mümkün kılınca denetim daha fazla veri istemeye başladı. Web hizmeti hız kazandırınca vatandaş ve müşteri gece de erişim bekledi. Mobil uygulama yaygınlaşınca kimlik, bildirim, güvenlik ve kullanıcı deneyimi cebin içine kadar girdi.",
    "Sonra bulut, konteyner, DevOps, büyük veri ve siber güvenlik aynı dönemin farklı cevapları olarak büyüdü. Kurumlar artık yalnız uygulama yazmıyor; izliyor, ölçekliyor, yedekliyor, denetliyor, saldırıya hazırlanıyor ve tedarik bağımlılığını yönetiyor. Yapay zekâ da bu zincirin son halkası gibi görünse de aslında eski bir ihtiyacın yeni biçimiyle ilgilidir: çok büyük bilgi yığını içinde anlamlı cevap bulmak.",
    "İlk bilgisayardan bugüne uzanan çizgi, teknoloji ailesinin neden bu kadar genişlediğini gösterir. Bir kavramın hangi dönemde doğduğunu bilmek, bugünkü projede neden hâlâ yaşadığını anlamayı sağlar. Çünkü kurumlar geçmişi geride bırakmaz; eski kayıt, yeni API, yeni bulut hesabı, eski mevzuat ve yeni güvenlik beklentisi çoğu zaman aynı toplantıda yan yana oturur."
  ],
  "kamu-bt": [
    "Türkiye'de kamu bilgi teknolojileri tek tip bir oda değildir. Cumhurbaşkanlığı düzeyinde strateji ve koordinasyon konuşulurken, bakanlık bilgi işlem dairesinde hizmet sürekliliği, entegrasyon, güvenlik, yazılım bakımı ve kullanıcı desteği aynı gün içinde gündeme gelir. Bağlı kuruluş başka bir öncelikle gelir, taşra teşkilatı farklı bağlantı sorunuyla arar, belediye vatandaş hizmetini düşünür, üniversite kayıt haftasındaki yoğunluğu yönetmeye çalışır.",
    "Bu dünyanın içinde yazılım ekibi ekran ve servis geliştirir; sistem ekibi sunucu, sanallaştırma, yedekleme ve veri merkezi düzenini taşır; ağ ekibi omurgayı, internet çıkışını, VPN'i ve kurumlar arası hatları yönetir; siber güvenlik ekibi log, yetki, zafiyet ve olay müdahalesine bakar. Servis masası kullanıcının ilk sesini duyar. Envanter ve lisans ekibi görünmez gibi dursa da bütçe ve denetim zamanı kurumun elini güçlendirir.",
    "Savunma sanayii şirketlerinde tablo biraz daha katmanlıdır. ASELSAN benzeri yapılarda kurumsal BT, üretim ve mühendislik ekiplerinin güvenilir çalışmasını sağlar; HAVELSAN benzeri yapılarda yazılım, sistem entegrasyonu ve proje teslim kültürü daha belirgin hissedilir. Burada yalnız bilgisayar çalışsın diye uğraşılmaz. Güvenlik, süreklilik, kalite, izlenebilirlik ve teslimat disiplini aynı dosyada buluşur.",
    "Kamu BT yöneticisi olmak isteyen birinin arka planı bu gündelik gerçeklerin içinde kurulur. Hangi ekip ne yapar, kim kime bağlıdır, hangi iş içeride yapılır, hangisi tedarikçiyle yürür, entegrasyon neden yalnız teknik bağlantı değildir, resmî karar teknik mimariyi nasıl etkiler; bütün bu sorular kurum şemasını ezberletmeden, o şemanın içinde teknoloji işinin nasıl yürüdüğünü gösterir."
  ],
  "saha-hikayeleri": [
    "Bazı bilgiler kitapta kuru durur ama toplantı odasında canlanır. Bakanlık entegrasyonunda imza beklenir, banka canlıya geçişinde saat ilerler, savunma üretim hattında parça izi kaybolur, belediyede seçim gecesi sistemin ayakta kalması gerekir. Her hikâyede ekranda küçük görünen bir belirti, arka tarafta yazılım, altyapı, veri, güvenlik ve insan kararına bağlanır.",
    "Olayın nasıl büyüdüğü, nerede yanlış anlaşıldığı ve hangi kayıtla çözüldüğü adım adım izlenir. Bir tedarikçi 'sorun bizden değil' dediğinde log ne söyler, bir kullanıcı 'ekran açılmıyor' dediğinde ağ ne durumdadır, bir yönetici 'ne zaman düzelir' diye sorduğunda ekip hangi kanıtla konuşur; asıl öğretici olan bu ara cümlelerdir.",
    "Kamu ve özel sektörün ritmi farklıdır ama kriz anında ihtiyaç benzerdir: doğru bilgi, net sorumluluk, ölçülebilir etki ve uygulanabilir karar. Olaylar gerçek hayattan esinlenen sahneler gibi ilerler. Yaşanmış bir anıyı süslemek yerine, o anının içindeki teknik ve yönetsel ders görünür hale gelir.",
    "Bir süre sonra okuyanın zihninde ortak bir refleks oluşur. Her parlak çözümün arkasında kabul ölçütü aranır, her kesintide önce etki alanı sorulur, her entegrasyonda veri sahibi ve log izi düşünülür. Deneyim biraz da budur: aynı acıyı yıllarca yaşamadan, başkalarının yaşadığı akışlardan erken sezgi kazanmak."
  ],
  "proje-yonetimi": [
    "Proje yönetimi takvim doldurmakla başlamaz; belirsizliği görünür hale getirmekle başlar. Bir iş birimi 'basit bir ekran' ister, teknik ekip bunun üç sisteme dokunduğunu fark eder, tedarikçi kapsamın dışına taşan işleri işaret eder, üst yönetim tarihe bakar. Proje yöneticisi bu sesleri aynı zemine indirir: hedef ne, başarı nasıl ölçülecek, karar kimde, risk nerede, kabul günü neye bakılacak.",
    "İyi proje daha ilk haftasında kendini belli eder. Gereksinim cümlesi ölçülebilirdir, kapsamın sınırı konuşulmuştur, bağımlılıklar saklanmamıştır, toplantı notu karar kaydına dönüşür. Kötü projede herkes çalışıyor görünür ama ekipler farklı başarı tanımıyla ilerler. Son hafta gelince test eksik, veri hazırlığı geç, kullanıcı eğitimi belirsiz, tedarikçi teslimi tartışmalı hale gelir.",
    "Kamu projelerinde bu disiplin daha da önemlidir. Şartname, sözleşme, muayene kabul, resmi yazı ve bütçe savunması proje planının dışında değildir; planın iskeletidir. Özel sektörde hız baskısı daha görünürdür ama orada da kullanıcı deneyimi, gelir kaybı, marka itibarı ve operasyon yükü proje kararlarını belirler. İki dünyada da proje yöneticisinin değeri, ayrıntıları tek gerçek tabloya bağlayabilmesidir.",
    "Kapsamdan riske, paydaş haritasından test stratejisine, canlıya geçişten proje kapanışına kadar akış sıraya girer. Metodoloji adı ezberlemek yerine, gerçek bir projede hangi cümlenin ileride pahalıya çıkacağı, hangi sessizliğin risk sakladığı ve hangi kaydın kabul gününü kurtaracağı belirginleşir."
  ],
  "teknik-yonetici": [
    "Teknik üst düzey yönetici ayrıntıyı tamamen uzmana bırakıp kenara çekilemez; ama her ayrıntının içine girip ekibin işini de boğamaz. Zor denge buradadır. Üst makam hızlı ve net cümle ister, uzman ekip teknik gerçekliği anlatmak ister, tedarikçi kendi çözümünü savunur, güvenlik ekibi sınır çizer, kullanıcı hizmetin kesilmemesini bekler. Yönetici bu diller arasında tercümanlık yapar.",
    "Bu görevde karar yalnız doğru teknolojiyi seçmek değildir. Bazen eski sistemi bir yıl daha taşımak, bazen riskli bir canlıya geçişi ertelemek, bazen pahalı görünen yedekliliği savunmak, bazen de ekipten gelen popüler teknoloji talebine mesafe koymak gerekir. Her kararın arkasında maliyet, zaman, güvenlik, insan yetkinliği, mevzuat ve kurum itibarı birlikte durur.",
    "Teknik yönetici adayının kazanması gereken şey geniş ama ölçülü bir bakıştır. PostgreSQL'in ne işe yaradığını bilmelidir ama veritabanı yöneticisinin yerine geçmeye çalışmamalıdır. SIEM'in neden gerektiğini anlamalıdır ama her alarmı kendisi incelememelidir. Kubernetes, RAG, API Gateway, VPN veya DLP konuşulduğunda bu teknolojilerin kurumda hangi sorumluluğu doğurduğunu ayırt edebilmelidir.",
    "Üst makama anlatım, ekip kurma, tedarikçi masası, bütçe savunması, kriz iletişimi ve kurum hafızası aynı çizgide ilerler. Büyük kurumlarda yönetici gücü, her şeyi bilmekten çok doğru soruyu doğru zamanda doğru kişiye sorabilmekle ortaya çıkar. Bunun için de teknik kavramların insan, bütçe ve karar tarafıyla birlikte okunması gerekir."
  ],
  "kriz-cozum": [
    "Teknolojik kriz geldiğinde ilk dakika çoğu zaman sisli geçer. Kullanıcı ekranın açılmadığını söyler, izleme sistemi birkaç alarm üretir, tedarikçi beklemeyi önerir, üst yönetim etkiyi sorar. O anda en değerli şey yüksek ses değil, doğrulanmış bilgidir. Hangi hizmet etkilendi, kaç kullanıcı görüyor, veri kaybı var mı, güvenlik şüphesi var mı, geri dönüş yolu açık mı; kriz yönetimi bu sırayla nefes alır.",
    "Bir veritabanı kilidi yalnız veritabanı meselesi değildir; çağrı merkezine, rapora, ödeme akışına ve kullanıcı güvenine dokunabilir. DNS hatası küçük bir kayıt gibi görünür ama bütün kurum erişilemez hale gelebilir. Yedek dönmüyorsa sorun yalnız teknik değildir; daha önce yapılmayan tatbikatın bedeli o gün ödenir. Krizler teknolojinin görünmeyen borçlarını çok hızlı tahsil eder.",
    "Kesinti, DDoS, yanlış ortam, dolan disk, eski cache, biriken kuyruk, delinen yetki ve duran üçüncü taraf servis gibi olaylarda önce belirti, sonra etki alanı, sonra teknik kök sebep, sonra kalıcı düzeltme görünür hale gelir. Gereksiz ayrıntı yerine sahada karar aldıran bilgi öne çıkar.",
    "Krizden sonra kurumun kazanması gereken şey yalnız normale dönüş değildir. Olay raporu yazılır, alarm eşiği güncellenir, sorumluluk matrisi netleşir, yedek tatbikatı planlanır, tedarikçi taahhüdü ölçülür. Aynı olay ikinci kez yaşandığında kurum daha hızlı, daha sakin ve daha kanıtlı davranıyorsa kriz boşa gitmemiştir."
  ],
  "buyuk-mimariler": [
    "Büyük sistemler kullanıcıya tek ekran gibi görünür. Bir kişi ürünü arar, sepete ekler, ödeme yapar, kargo bilgisini görür; ekranda birkaç saniyelik bir yolculuk vardır. Arka tarafta ise CDN, WAF, load balancer, API Gateway, backend servisleri, veritabanı, Redis, Kafka, Elasticsearch, log sistemi, monitoring ve güvenlik kuralları aynı anda çalışır. Mimari tam olarak bu görünmeyen düzenin haritasıdır.",
    "Trendyol benzeri bir e-ticaret akışı iyi örnektir. Kullanıcının gördüğü ürün kartı ayrı bir servisle, stok bilgisi başka bir kayıtla, ödeme güvenliği başka bir sistemle, kargo takibi başka bir entegrasyonla yaşar. PostgreSQL siparişin resmi kaydını tutarken Redis hızlı oturum ve sepet bilgisini taşır; Kafka ödeme sonrası bildirim, fatura ve kargo olaylarını sıraya alır; Elasticsearch arama ve log incelemeyi hızlandırır.",
    "Aynı düşünce kamu portalı, banka transferi, hastane randevusu veya savunma üretim izinde de geçerlidir. Bir başvuru formu yalnız form değildir; kimlik doğrulama, yetki, veri paylaşımı, arşiv, denetim izi ve kesinti anında geri dönüş planı ister. Bir üretim parçası yalnız stok kaydı değildir; tedarik zinciri, kalite kanıtı, seri numarası, doküman sürümü ve güvenlik sınırıyla birlikte yaşar.",
    "Görsel akışlar kutu ezberletmek için değil, karar anında hangi parçanın hangi sorumluluğu taşıdığını hatırlatmak için kullanılır. Mimariyi iyi okuyan kişi ekrandaki hatayı yalnız ekranda aramaz; trafiğin nereden geçtiğini, verinin nerede kalıcı olduğunu, olayın hangi logda iz bıraktığını ve hangi ekibin hangi anda devreye gireceğini bilir."
  ],
  "yakin-gelecek": [
    "Yakın gelecek bir anda gökten düşmez; bugünün kurumlarında büyüyen baskıların içinden çıkar. Pandemi uzaktan çalışmayı hızlandırdı, bulut kapasiteyi esnekleştirdi, siber saldırılar kimlik merkezli güvenliği öne çıkardı, yapay zekâ ofis işlerini ve yazılım üretimini değiştirmeye başladı. Her yenilik bir kolaylık getirirken yeni bir yönetim sorumluluğu da doğurdu.",
    "Bir bakanlık için gelecek, yalnız yapay zekâ pilotu yapmak değildir; verinin nerede durduğunu, hangi bulutun hangi bağımlılığı doğurduğunu, kritik hizmetin kesinti anında nasıl döneceğini ve vatandaş bilgisinin nasıl korunacağını bilmektir. Bir savunma şirketi için gelecek, GPU kapasitesi kadar tedarik zinciri, yerli kabiliyet, güvenli yazılım ve uzun ömürlü bakım anlamına gelir.",
    "Önümüzdeki yıllarda edge computing, IoT, sıfır güven, post-kuantum hazırlık, üretken yapay zekâ, ajan sistemleri, enerji verimliliği ve veri egemenliği daha sık aynı masaya gelecek. Bu kavramların her biri tek başına parlak görünebilir. Kurumsal hayatta değerleri, hangi hizmeti daha güvenli, daha hızlı, daha denetlenebilir veya daha sürdürülebilir yaptıklarıyla ölçülür.",
    "Tahmin yapılırken kehanet dili yerine bugünün kapasite sıkışması, güvenlik riski, mevzuat baskısı, kullanıcı beklentisi ve tedarik bağımlılığı takip edilir. Çünkü yarının büyük teknolojik kararı çoğu zaman bugünkü küçük operasyon sıkıntısının büyümüş halidir."
  ],
  "teknoloji-atlasi-yazilim": [
    "Yazılım ve veri atlası tek tek ürün adı saymak için kurulmaz. Programlama dilleri, web arayüzleri, backend servisleri, API sözleşmeleri, veritabanları, cache, arama motorları, mesaj kuyrukları ve teslimat hatları aynı sistemin farklı görevlerini taşır. Java, Python, C# veya JavaScript birer dil olarak başlar; gerçek projede ekip yetkinliği, bakım süresi, performans, güvenlik ve kurumsal alışkanlıkla birlikte anlam kazanır.",
    "Bir kamu portalında kullanıcı başvuru formunu doldururken frontend ekranda düzeni sağlar, backend iş kuralını çalıştırır, API başka kurumdan veri alır, PostgreSQL kalıcı kaydı tutar, Redis sık okunan geçici bilgiyi hızlandırır, Kafka yan işleri sıraya alır, Elasticsearch belge ve log aramasını kolaylaştırır. Git ve GitHub kodun geçmişini, CI/CD ise güvenli teslimat akışını taşır.",
    "Teknik ayrıntı dozunda kalır. Java'nın uzun ömürlü kurumsal sistemlerde neden sevildiği, Python'un veri ve otomasyon işlerinde neden yaygın olduğu, JavaScript'in web deneyimini nasıl taşıdığı anlatılır; ama amaç dil yarıştırmak değildir. Aynı şekilde PostgreSQL ana kayıt defteri, Redis hızlı bellek katmanı, Kafka olay taşıyıcı, Docker paketleme düzeni olarak yerli yerine oturur.",
    "Yazılım tarafını böyle gruplandırmak zihni rahatlatır. Bir toplantıda her teknoloji aynı seviyede konuşulmaz; bazıları kullanıcı deneyimini, bazıları iş kuralını, bazıları kalıcı veriyi, bazıları teslimat disiplinini ilgilendirir. Atlasın bu parçası, isim kalabalığını iş akışındaki rollere ayırır."
  ],
  "teknoloji-atlasi-sistem-ag": [
    "Sistem, ağ ve donanım tarafı çoğu zaman görünmez çalıştığı için değeri ancak aksadığında anlaşılır. Kullanıcı uygulamayı yavaş sanır; oysa sorun dolan disk, zayıf bellek, yanlış VLAN, doygun internet çıkışı, hatalı DNS, yetersiz yedekleme veya soğutma problemi olabilir. Yazılımın ayakta durduğu zemin sağlam değilse en iyi kod bile sahada güven vermez.",
    "Bir veri merkezinde rack kabin, sunucu, CPU, RAM, SSD, SAN, NAS, switch, router, firewall, UPS ve soğutma aynı hikâyenin parçalarıdır. Bulutta bu parçalar daha soyut görünür ama kaybolmaz; yalnızca sanal kaynak, servis kotası, bölge seçimi, ağ kuralı ve maliyet metriği olarak karşımıza çıkar. Yönetici için önemli olan, kaynağın fiziksel mi sanal mı olduğundan önce hangi hizmeti taşıdığıdır.",
    "Sistem ekibi sanallaştırmayı, yedeklemeyi, işletim sistemini ve servis sağlığını izler; ağ ekibi kurumun damarlarını açık tutar; veri merkezi ekibi enerji ve fiziksel sürekliliği korur; güvenlik ekibi bu zemine sınır çizer. Bir kesintide ekiplerin aynı haritaya bakması, çözüm süresini doğrudan etkiler.",
    "Donanım yazılımdan ayrı bir dünya gibi değil, yazılımın nefes aldığı ortam olarak görünür. CPU neden yetmez, RAM ne zaman dar boğaz olur, NVMe neden fark yaratır, VLAN neden düzen sağlar, VPN neden kapasite ister, Kubernetes neden yalnız yazılım konusu değildir; bütün cevaplar gerçek işletme akışı içinde yerini bulur."
  ],
  "teknoloji-atlasi-siber": [
    "Siber güvenlik tek bir ürün satın alıp rahatlama işi değildir. Kimlik, yetki, ağ, uygulama, veri, uç nokta, log, insan davranışı ve olay müdahalesi birlikte yönetilir. Kurum büyüdükçe yalnız saldırgan sayısı artmaz; kullanıcı, tedarikçi, entegrasyon, bulut hesabı ve eski sistem sayısı da artar. Risk bu kalabalığın arasından doğar.",
    "Bir saldırı anında SOC analisti alarmı görür, sistemci sunucuyu kontrol eder, ağcı trafiğe bakar, uygulama ekibi log ister, hukuk ve yönetim veri etkisini anlamaya çalışır. SIEM kayıtları bir araya getirir, EDR uç noktadaki davranışı yakalar, WAF web trafiğini süzer, DLP hassas verinin dışarı çıkmasını izler, IAM ve MFA kimliğin gerçekten doğru kişiye ait olup olmadığını güçlendirir.",
    "Kamu ve savunma dünyasında güvenlik ayrıca hesap verebilirlik meselesidir. KVKK, gizlilik derecesi, denetim izi, yetki onayı, zafiyet yönetimi ve tedarik zinciri güvenliği yalnız teknik ekiplerin gündemi değildir. Bir sistem güvenliyse, yalnız engellediği saldırıyla değil, olay olduğunda neyin ne zaman yaşandığını açıklayabilmesiyle de değer kazanır.",
    "Siber güvenlik korku diliyle değil, işletme disipliniyle ele alınır. Firewall nerede durur, WAF neyi süzer, SIEM neden log ister, MFA hangi riski azaltır, segmentasyon neden hayat kurtarır, tatbikat neden yapılır; her konu kurumun günlük akışı içinde anlatılır."
  ],
  "teknoloji-atlasi-yapay-zeka": [
    "Yapay zekâ konuşulduğunda ilk cümle çoğu zaman model adı olur; kurumsal projede asıl mesele modelden önce iş akışıdır. Hangi veri kullanılacak, veri güncel mi, hassas bilgi var mı, cevap nasıl denetlenecek, yanlış cevap kime zarar verir, insan onayı nerede devreye girecek; bu sorular net değilse güçlü model bile güvenilir hizmete dönüşmez.",
    "Makine öğrenmesi geçmiş veriden örüntü çıkarır, üretken yapay zekâ metin ve kod gibi içerikler üretir, embedding metni sayısal benzerlik alanına taşır, RAG kurum dokümanını cevaba bağlar, ajan sistemleri araç kullanarak adım adım iş yapmaya çalışır. Bunlar ayrı sihirler değildir; veri, güvenlik, maliyet, kapasite ve denetimle birlikte çalışan araç aileleridir.",
    "Bir bakanlık mevzuat arama asistanı kurduğunda mesele yalnız hızlı cevap değildir. Kaynak gösterilmeli, eski mevzuatla yeni karar karışmamalı, kişisel veri modele gereksiz taşınmamalı, cevapların sınırı bilinmelidir. Bir savunma şirketinde yapay zekâ kod yardımında, doküman özetinde veya test otomasyonunda kullanılabilir; fakat güvenlik ve gizlilik sınırı en baştan çizilmelidir.",
    "Yapay zekâ büyü bozulmadan ama abartıya kapılmadan ele alınır. Modelin ne yaptığı, verinin neden belirleyici olduğu, RAG'in neden kurumsal bilgi için önemli olduğu, GPU maliyetinin neden konuşulduğu ve denetlenebilirliğin neden lüks değil zorunluluk olduğu sırayla görünür hale gelir."
  ]
};

function modeIntro(category) {
  const lex = modeLexicon[category.mode];
  return [
    `${category.title} rotası sahadaki tabloyla başlar. ${lex.scene}.`,
    `Masada ${lex.actors}. Aynı olay birinin gözünde proje, diğerinin gözünde risk, bir başkasının gözünde bütçe veya hizmet sürekliliğidir.`,
    `Başlangıçta bu kalabalık yerli yerine oturur. Kimin hangi kararı taşıdığı, hangi belgenin hangi riski azalttığı, hangi teknik tercihin hangi insan davranışını değiştirdiği görünür hale gelir.`,
    `Teknik şartname kabul komisyonuna, Redis eski veri riskine, SIEM denetim kanıtına, API kurumlar arası sorumluluğa uzanır. Bir başlık bitip diğeri başladığında konu değişmiş gibi görünür; aslında aynı kurumun başka odasına geçilir.`,
    `${lex.stakes}. Kavramların değeri adlarında değil, iş akışında neyi değiştirdiklerinde ortaya çıkar.`,
    `${lex.tech.join(", ")} gibi kavramlar gerekli yerde sahneye girer. Ayrıntı olayın önüne geçmez; olay ayrıntının ne işe yaradığını gösterir.`,
    `Teknoloji araç listesinden çıkar; kurumun çalışma biçimine, toplantı diline, kabul düzenine ve kriz refleksine bağlanır.`
  ];
}

function routeIntro(category, chapter) {
  const intro = routeNarratives[category.id] || modeIntro(category);
  return `
    <p class="opening-line">${intro[0]}</p>
    ${intro.slice(1).map(paragraph).join("")}
    ${visualFor(category, chapter)}
  `;
}

function narrativeChapter(category, chapter) {
  const topic = cleanTitle(chapter);
  const family = firstPhrase(topic);
  const lower = topic.toLocaleLowerCase("tr");
  const bodies = {
    public: [
      `${topic} masaya geldiğinde odada yalnız bilgi işlem bulunmaz. Talep sahibi birim işin neden acil olduğunu anlatır, satın alma dosyanın hangi usulle ilerleyeceğini düşünür, hukuk veri ve sorumluluk sınırını yoklar, teknik ekip ise söylenen ihtiyacın gerçekten uygulanabilir olup olmadığını tartar. Kamu tarafında basit görünen her teknik kararın arkasında imza, bütçe, denetim ve hizmet sürekliliği vardır.`,
      `${family} doğru kurulursa sonraki adımlar sakinleşir. Teknik şartname daha ölçülebilir olur, yaklaşık maliyet daha savunulabilir hale gelir, muayene ve kabul komisyonu son gün neye bakacağını bilir. Yanlış kurulursa herkes aynı kelimeyi kullanır ama farklı şeyi kasteder; biri yazılım isterken diğeri hazır ürün anlar, biri entegrasyon derken diğeri yalnız dosya aktarımı bekler.`,
      `Gündelik örnek basittir: bir kurum vatandaş başvuru ekranı ister. Ekranın arkasında kimlik doğrulama, veri paylaşım protokolü, log kaydı, KVKK sınırı, yedekleme, destek masası ve bakım taahhüdü vardır. ${topic} bu zincirin hangi halkasına dokunuyorsa orada karar dili netleşmelidir. Kamu işi yavaş ilerlediği için değil, kararın sonradan açıklanabilir olması gerektiği için kayıt ister.`,
      `${topic} iyi ele alındığında kurum yalnız bir dosyayı kapatmaz; daha sonra gelecek tedarikçiye, denetçiye, kullanıcıya ve üst makama aynı hikâyeyi tutarlı biçimde anlatabilecek hafıza kazanır. Bu hafıza yoksa aynı sorun farklı toplantılarda yeniden doğar ve her seferinde ilk kez yaşanıyormuş gibi enerji tüketir.`
    ],
    people: [
      `${topic} teknoloji projesinin insan tarafını açar. Aynı masada yazılımcı kodun karmaşıklığını, sistemci işletme yükünü, ağcı bağlantı sınırını, güvenlikçi yetki riskini, kullanıcı günlük işinin aksamasını düşünür. Dışarıdan bakınca herkes kendi alanını savunuyor gibi görünür; içeriden bakınca herkes daha önce canını yakan bir hatanın tekrar etmemesi için tutunduğu noktayı korur.`,
      `Bir kamu personeli imzadan çekiniyorsa bu her zaman isteksizlik değildir; çoğu zaman denetimde hesabını vereceği belgenin eksik kalmasından korkar. Özel sektör ekibi hızlı davranıyorsa bu her zaman plansızlık değildir; müşteri kaybı, kampanya tarihi veya gelir baskısı yakındadır. ${family} bu farklı baskıları aynı cümlede buluşturabildiğinde toplantı kavgadan çıkıp işe dönüşür.`,
      `Gündelik bir sahne düşünülürse konu hemen anlaşılır: kullanıcı yeni ekran ister, yazılımcı veri modelinin değişeceğini söyler, güvenlikçi kişisel veri alanını işaret eder, tedarikçi bunun ek kapsam olduğunu belirtir. Yönetici bu seslerin hiçbirini susturmadan sıraya koyabilirse mesele kişisel inat olmaktan çıkar, yönetilebilir bir karara dönüşür.`,
      `${topic} doğru okunduğunda ekip davranışı daha anlaşılır hale gelir. Direnç nerede gerçek risktir, nerede alışkanlıktır, nerede yorgunluktur, nerede kötü deneyimin izidir; bunlar seçilmeye başlar. Teknoloji projelerinde tecrübe biraz da insanların cümlelerinde saklı kalan riski erken duyabilmektir.`
    ],
    publicIt: [
      `${topic} Türkiye'deki kamu BT dünyasının günlük akışı içinde düşünülmelidir. Bir bakanlıkta bilgi işlem dairesi sabah kullanıcı çağrısıyla başlar, öğlen kurumlar arası entegrasyon toplantısına girer, gün sonunda yedekleme raporuna ve güvenlik alarmına bakar. Bağlı kuruluş, taşra, belediye, üniversite veya savunma şirketi aynı başlığı farklı yoğunlukta yaşar.`,
      `Bu yapıda yazılım ekibi ekranı ve servisi üretir, sistem ekibi sunucu ve sanallaştırmayı taşır, ağ ekibi kurumun damarlarını açık tutar, siber güvenlik ekibi log ve yetki izini takip eder, servis masası ise kullanıcının ilk şikâyetini duyar. ${family} bu ekiplerden hangisine dokunuyorsa işin dili de ona göre değişir; bazen teknik çözüm, bazen protokol, bazen bakım planı, bazen de üst yazı gerekir.`,
      `ASELSAN benzeri yapılarda kurumsal BT mühendislik, üretim ve güvenlik hassasiyetiyle birlikte yaşar. HAVELSAN benzeri yapılarda yazılım geliştirme, sistem entegrasyonu ve proje teslim kültürü daha belirgin hissedilir. Kamu kurumlarında ise hizmet sürekliliği, mevzuat, veri paylaşımı ve denetlenebilirlik ağır basar. ${topic} bu dünyaların ortak yerinde durur: teknoloji çalışmalı, kayıt kalmalı, sorumluluk belirsiz kalmamalıdır.`,
      `${topic} iyi yönetildiğinde kurumun iç ritmi rahatlar. Kullanıcı kime başvuracağını bilir, teknik ekip hangi sınırda karar alacağını görür, yönetici üst makama daha sade rapor verir, tedarikçi de neyin kapsam içinde olduğunu tartışmasız anlar. Kamu BT yöneticisinin arka planı bu küçük görünen ama kurumu ayakta tutan düzenlerin toplamından oluşur.`
    ],
    project: [
      `${topic} proje yönetiminde çoğu zaman bir form alanı gibi görünür ama gerçekte ekibin kaderini belirler. İş birimi hızlı sonuç ister, teknik ekip bağımlılıkları gösterir, tedarikçi kapsam sınırını korur, üst yönetim tarih ve bütçe sorar. Proje yöneticisi bu konuşmayı tek bir zemine indirir; ne yapılacak, kim karar verecek, hangi kanıt kabul edilecek ve gecikme olursa kimin işi etkilenecek.`,
      `${family} net değilse proje ilerlerken huzursuzluk artar. Herkes çalışır ama aynı hedefe çalışmaz. Toplantı notunda karar görünmez, risk kaydı güncellenmez, testin neyi kanıtlayacağı son haftaya kalır. Kamu tarafında bu durum kabul komisyonunda, özel sektörde canlıya geçiş gecesinde patlar. İki dünyada da bedel aynıdır: güven azalır ve ekip enerjisini üretmek yerine açıklama yapmaya harcar.`,
      `Sahada sağlam proje yöneticisi büyük laflardan çok küçük izleri takip eder. Bir gereksinim cümlesinin ölçülebilir olup olmadığına, bir değişikliğin hangi takvimi bozduğuna, bir tedarikçi vaadinin sözleşmede karşılığının bulunup bulunmadığına bakar. ${topic} burada kuru yönetim tekniği değil, yarın çıkacak tartışmayı bugünden görünür kılan disiplin olur.`,
      `${topic} doğru kurulduğunda proje yalnız teslim tarihine yaklaşmaz; ekip aynı gerçeğe bakmaya başlar. Kabul günü geldiğinde kimse eski e-postaları aramaz, kararın sahibi bellidir, test sonucu konuşur, riskin ne zaman fark edildiği kayıttadır. İyi proje yönetimi biraz da budur: son günkü gürültüyü ilk haftadaki netlikle azaltmak.`
    ],
    leadership: [
      `${topic} teknik yöneticinin en zor dengesine dokunur. Yönetici ayrıntıyı bilmeden karar veremez, ama her ayrıntıya girerse ekibin nefesini keser. Üst makam kısa cümle ister, uzman ekip teknik gerçeği anlatmak ister, tedarikçi kendi çözümünü savunur, güvenlik ekibi sınır çizer, kullanıcı hizmetin kesilmemesini bekler. Bu odada yöneticinin işi, herkesin dilini aynı karara çevirmektir.`,
      `${family} gündeme geldiğinde iyi yönetici önce kararın etkisini arar. Bu konu maliyeti mi artırıyor, güvenliği mi etkiliyor, hizmet sürekliliğini mi değiştiriyor, insan yetkinliği mi istiyor, tedarikçiye bağımlılık mı doğuruyor? Teknik ayrıntı saygı görür ama karar ayrıntının içinde kaybolmaz. Kurumun ihtiyacı, uzmanlığın emeği ve üst makamın beklentisi aynı çizgide tutulur.`,
      `Bir örnekte ekip Kubernetes ister, başka bir örnekte güvenlik SIEM yatırımı savunur, başka bir masada eski sistemin bir yıl daha yaşatılması gerekir. Bunların hiçbiri yalnız teknoloji tercihi değildir. Lisans bütçesi, işletme yetkinliği, bakım modeli, eğitim ihtiyacı, mevzuat ve kriz anındaki sorumluluk aynı anda düşünülür. ${topic} bu yüzden yöneticinin karar kasını büyüten konulardandır.`,
      `${topic} iyi yönetildiğinde ekip yöneticiden mucize beklemez; netlik bekler. Ne zaman risk alınacağı, ne zaman durulacağı, hangi kararın kayıt altına alınacağı, hangi teknik itirazın üst makama taşınacağı belirginleşir. Büyük kurumlarda saygınlık biraz da bu sakin tutarlılıktan doğar.`
    ],
    crisis: [
      `${topic} kriz anında kendini bir anda gösterir. Telefonlar çalar, izleme ekranında alarm belirir, kullanıcı sosyal medyada veya çağrı merkezinde sesini yükseltir, tedarikçi ilk açıklamayı yapar, yönetici ise etkinin sınırını öğrenmek ister. İlk dakikalarda panik kolaydır; zor olan, az bilgiyle doğru sırayı kurmaktır.`,
      `${family} yönetilirken önce etkinin alanı bulunur. Hangi hizmet etkilendi, kaç kullanıcı görüyor, veri kaybı var mı, güvenlik şüphesi var mı, geri dönüş yolu açık mı? Bu sorular cevaplanmadan yapılan her açıklama risktir. Bir kesinti yalnız teknik arıza değildir; güven, itibar, denetim ve iş sürekliliği aynı anda hareket eder.`,
      `Kriz odasında herkes kendi penceresinden haklıdır. Sistemci kaynaklara, ağcı trafiğe, yazılımcı son değişikliğe, güvenlikçi olağandışı davranışa, kullanıcı temsilcisi sahadaki etkiye bakar. ${topic} bu parçaları tek zaman çizelgesinde birleştirdiğinde sorun büyüklüğünü kaybeder; artık karanlık bir gürültü değil, yönetilebilir bir olaydır.`,
      `${topic} sonrasında kurumun asıl kazancı normale dönmekten fazlasıdır. Alarm eşiği değişir, log saklama düzeni netleşir, yedek tatbikatı planlanır, tedarikçi taahhüdü ölçülür, olay raporu sonraki projeye ders olur. Kriz boşa gitmezse kurum aynı darbeyi ikinci kez daha sakin karşılar.`
    ],
    future: [
      `${topic} bugünün çalışma hayatında küçük işaretlerle başlar. Bir ekip uzaktan çalışmayı kalıcı hale getirir, başka bir kurum bulut maliyetini tartışır, güvenlik ekibi kimliği yeni sınır olarak görür, veri merkezi GPU ve enerji baskısını konuşur. Gelecek çoğu zaman büyük bir duyuru değil, mevcut sistemlerin artık eskisi gibi yetmemesiyle gelir.`,
      `${family} değerlendirilirken parlak vaatlerden önce kurum baskılarına bakılır. Kullanıcı daha hızlı hizmet ister, mevzuat daha açıklanabilir kayıt bekler, siber saldırılar daha ısrarcı hale gelir, veri hacmi büyür, tedarik zinciri kırılganlaşır. Yeni teknoloji bu baskılardan birini azaltıyorsa değer üretir; yalnız yeni olduğu için gündeme geliyorsa kısa sürede yük olur.`,
      `Kamu kurumları, savunma şirketleri ve büyük özel sektör yapıları bu değişimi farklı yerlerinden hisseder. Bakanlık için mesele vatandaş hizmetinin kesilmemesi ve verinin korunmasıdır; savunma sanayii için güvenilirlik, gizlilik ve yerli kabiliyet öne çıkar; özel sektör için hız, ölçek ve müşteri deneyimi baskısı daha belirgindir. ${topic} bu farklı gündemleri aynı haritada birleştirir.`,
      `${topic} doğru okunduğunda tahmin falcılığa dönüşmez. Bugünkü kapasite sorunu yarının bulut kararına, bugünkü güvenlik açığı yarının sıfır güven mimarisine, bugünkü doküman kalabalığı yarının RAG projesine dönüşebilir. Gelecek, bugünün sıkışan yerlerini dikkatle izleyen kurumlara daha erken görünür.`
    ]
  };
  const selected = bodies[category.mode] || [
    `${topic} kurum hayatında tek başına duran bir kavram değildir; insan, süreç, teknoloji ve karar aynı anda hareket eder.`,
    `${family} doğru ele alındığında ekipler aynı hedefe bakar, yanlış ele alındığında aynı kelimeler farklı beklentilere dönüşür.`,
    `Gündelik iş akışında bu konu teknik ayrıntı kadar belge, sorumluluk, bakım ve kullanıcı alışkanlığıyla da ilgilidir.`,
    `${topic} geride daha net karar, daha iyi kayıt ve daha sakin işletme disiplini bırakıyorsa değer üretmiş demektir.`
  ];
  return selected.map(paragraph).join("") + visualFor(category, chapter);
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
    paragraph(`Bu geçişlerin ortak tarafı nettir: önce küçük bir teknik kolaylık gelir, sonra o kolaylık alışkanlığa dönüşür, ardından kurumun işleyişi ona göre yeniden şekillenir. Veritabanı raporu kolaylaştırınca denetim daha ayrıntılı veri ister; web hizmeti hızlandırınca kullanıcı yirmi dört saat erişim bekler; mobil uygulama yaygınlaşınca kimlik ve güvenlik sınırı cebe kadar uzanır.`),
    paragraph(`Bir kamu kurumu veya savunma şirketi açısından bu dönemlerden çıkarılacak ders açıktır: ${details[2]}. Bugünün ihale dokümanı, veri merkezi kararı veya yapay zekâ pilotu da aynı mantığa bağlıdır. Önce baskı büyür, sonra araç doğar, ardından organizasyon değişmek zorunda kalır.`),
    paragraph(`Bu bakış Türkiye'deki büyük kurumlar için özellikle değerlidir. Cumhurbaşkanlığı düzeyinde dijital dönüşüm konuşulurken, bakanlıkta entegrasyon beklenirken, ASELSAN veya HAVELSAN benzeri yapılarda güvenilir sistem üretimi hedeflenirken aynı tarihsel ders tekrar eder: teknoloji yalnız satın alınmaz, kurumun çalışma düzenine yerleştirilir.`),
    paragraph(`Bu yüzden ${topic.toLocaleLowerCase("tr")} yalnız geçmiş bilgisi değildir. Bir teknolojinin hangi ihtiyaçtan doğduğunu anlayan yönetici, yeni bir kavram duyduğunda önce hangi eski soruna cevap verdiğini ve hangi yeni sorumluluğu doğurduğunu sorgular.`)
  ].join("") + visualFor(getCategory("tarihsel-evrim"), chapter);
}

function techChapter(category, chapter) {
  const topic = cleanTitle(chapter);
  const rawTitle = chapter.title;
  const key = Object.keys(techDetails).find((item) =>
    normalizeText(rawTitle).includes(normalizeText(item)) || normalizeText(topic).includes(normalizeText(item))
  ) || category.mode;
  const paragraphs = techDetails[key] || techDetails[category.mode === "ai" ? "Yapay zekâ" : category.mode === "security" ? "Siber izleme" : category.mode === "systems" ? "Donanım" : "Backend ve servis"];
  const sceneByMode = {
    software: "Bir kamu portalı, e-ticaret ekranı veya kurum içi iş uygulaması açıldığında kullanıcı yalnız formu ve butonu görür; arka tarafta dil, servis, veri, entegrasyon ve teslimat düzeni birlikte çalışır.",
    systems: "Bir uygulama yavaşladığında ilk şikâyet yazılıma gelir; oysa sorun çoğu zaman işlemci, bellek, disk, ağ, sanallaştırma, enerji veya yedekleme tarafında saklıdır.",
    security: "Bir güvenlik alarmı düştüğünde olay yalnız saldırı ihtimali değildir; kimlik, yetki, uç nokta, ağ, uygulama, veri ve log aynı anda anlam kazanır.",
    ai: "Bir yapay zekâ denemesi başladığında odadaki heyecan model adından gelir; projenin kaderini ise veri kalitesi, kaynak gösterme, yetki sınırı, maliyet ve insan onayı belirler."
  };
  const bridgeByMode = {
    software: "Yazılım tarafında iyi karar, teknolojiyi tek başına değil üretim hattındaki rolüyle görür.",
    systems: "Sistem ve ağ tarafında iyi karar, görünmeyen zeminin hangi hizmeti taşıdığını açık eder.",
    security: "Siber güvenlik tarafında iyi karar, korkuyu değil kanıtı ve işletilebilir kontrolü büyütür.",
    ai: "Yapay zekâ tarafında iyi karar, hız vaadini denetlenebilir bilgiyle dengeler."
  };
  const closingByMode = {
    software: `${topic} yanlış yerde seçilirse ilk gün değil, bakım, test, canlıya geçiş ve ekip değişimi sırasında pahalılaşır. Doğru yerde kullanıldığında kodun geçmişi, verinin kalıcılığı, servislerin konuşması ve kullanıcının deneyimi aynı çizgide ilerler.`,
    systems: `${topic} ihmal edildiğinde kullanıcı bunu çoğu zaman 'sistem yavaş' diye anlatır; fakat kök sebep kapasite, ağ yolu, depolama veya işletme düzenidir. Doğru kurulduğunda yazılımın nefes alacağı güvenilir zemin oluşur.`,
    security: `${topic} eksik kaldığında kurum olaydan sonra gerçeği bulmakta zorlanır. Doğru kurulduğunda saldırı ihtimali azalır, olay gerçekleşirse de iz, sorumluluk ve müdahale sırası kaybolmaz.`,
    ai: `${topic} abartıldığında kurum hızlı demo görür ama kalıcı fayda üretemez. Doğru kurulduğunda belge, karar, yazılım ve destek süreçleri hızlanır; insan onayı ve kaynak izi korunur.`
  };
  return [
    paragraph(`${sceneByMode[category.mode] || sceneByMode.software} ${topic} bu akışın içinde belirli bir yükü taşır; adı tek başına değerli değildir, hangi sorunu azalttığı ve hangi sorumluluğu doğurduğu anlaşılınca yerine oturur.`),
    paragraph(`${paragraphs[0]} ${paragraphs[1] || ""}`),
    paragraph(`${paragraphs[2] || ""} Gerçek bir projede ${topic.toLocaleLowerCase("tr")} yanında bütçe, güvenlik, bakım, insan yetkinliği, tedarikçi desteği ve kabul ölçütüyle gelir. ${bridgeByMode[category.mode] || bridgeByMode.software}`),
    paragraph(`${closingByMode[category.mode] || closingByMode.software} Karar masasında hangi ekip işletecek, hangi kayıt kanıt sayılacak, hangi metrik izlenecek ve hangi kullanıcı grubu etkilenecek soruları netleştiğinde konu teknik terim olmaktan çıkar, kurumun çalışma düzenine girer.`)
  ].join("") + visualFor(category, chapter);
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
    paragraph(`Arka planda akış belirgin bir sırayla ilerler: ${profile.flow}. Bu cümlede geçen her parça farklı bir sorumluluk taşır. Biri trafiği dengeler, biri kimliği kontrol eder, biri iş kuralını çalıştırır, biri de olayın izini tutar.`),
    paragraph(`Veri tarafında tablo daha da netleşir. ${profile.data}. Büyük mimarilerde ana kayıt, hızlı kopya, arama indeksi ve olay kuyruğu birbirine karıştırılmaz. Hangi bilginin resmi kayıt, hangisinin hızlandırıcı kopya olduğu bilinirse kriz anında ekip aynı gerçeğe bakar.`),
    paragraph(`Donanım ve altyapı bu akışın sessiz zeminidir. Sunucuların CPU, RAM ve disk kapasitesi; ağın gecikmesi; veri merkezinin enerji ve soğutması; buluttaki kaynak limitleri bu deneyimi doğrudan etkiler. Yazılım iyi yazılmış olsa bile altyapı sınırı görülmezse sorun kullanıcı ekranına düşer.`),
    paragraph(`Bu mimarinin kırılgan yeri çoğu zaman burada belirir: ${profile.risk}. Mimari çizim yalnız kutular ve oklar değildir; hata anında hangi kutunun neyi etkilediğini gösteren karar aracıdır.`),
    paragraph(`${profile.analogy} Kalıcı ders teknolojinin adında değil, akıştaki görevinde ve bozulduğunda hangi hizmeti etkilediğinde kalır.`)
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
    paragraph(`Kapanışta geriye yalnız arıza kaydı kalmaz; hangi kararın işe yaradığı, hangi bilginin geç geldiği, hangi bağımlılığın görünmez kaldığı ve hangi toplantının gereksiz olduğu da ortaya çıkar. Bu kayıt bir sonraki projede daha sakin davranan, daha erken kanıt isteyen ve tedarikçi cümlesini daha dikkatli tartan kurumsal hafızaya dönüşür.`)
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
    `${name} karar masasında iş akışındaki yeriyle anlam kazanır.`,
    `${name} bütçe, sahiplik ve işletme sorumluluğuyla birlikte düşünülür.`,
    `${name} konuşulurken etkilediği kayıt, hizmet ve kullanıcı grubu da masada olmalıdır.`,
    `${name} doğru konumlandığında ekiplerin günlük işini sadeleştirir.`,
    `${name} yanlış bağlamda yeni bağımlılık ve bakım yükü doğurabilir.`
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
  scrollToPageTop();
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
  scrollToPageTop();
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
  scrollToPageTop();
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

function scrollToPageTop() {
  const jump = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    document.querySelector(".content")?.scrollTo({ top: 0, left: 0, behavior: "auto" });
  };
  jump();
  requestAnimationFrame(jump);
  setTimeout(jump, 80);
  setTimeout(jump, 220);
  setTimeout(jump, 420);
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

function navigateTo(hash) {
  if (location.hash === hash) {
    router();
    return;
  }
  history.pushState(null, "", hash);
  router();
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
