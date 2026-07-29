const book = {
  title: "Teknoloji Atlası",
  kicker: "Mülakat, Saha ve Üst Düzey BT Yönetimi İçin Yol Haritası",
  subtitle: "Bilgisayar temellerinden yapay zekâ ve bulut yönetimine kadar uzanan konuları, mülakatlarda sorulacak netlikte ve büyük kurumlarda karar aldıracak olgunlukta sıraya koyar.",
  promise:
    "Okur önce bilgisayarın gerçekten nasıl çalıştığını görür, sonra kodun, ağın, verinin, güvenliğin, yapay zekânın ve yöneticilik kararlarının aynı büyük sistemde nasıl birbirine bağlandığını adım adım izler."
};

const categories = [
  {
    id: "asama-1-bilgisayar-temelleri",
    title: "1. Aşama: Bilgisayar Temelleri",
    summary: "Donanım, işletim sistemi, Linux, terminal, ağ mantığı, DNS, HTTP, Git ve GitHub ile teknik zemini kurar.",
    mode: "systems",
    chapters: [
      "Yola giriş: bilgisayarı parça listesi değil çalışan düzen olarak görmek",
      "Bilgisayar donanımı: CPU, RAM, disk, anakart ve veri yolu",
      "İşletim sistemi mantığı: süreç, bellek, dosya sistemi ve sürücü",
      "Terminal kullanımı: komut satırında düşünmeyi öğrenmek",
      "Linux kullanımı: kullanıcılar, izinler, servisler ve paket yönetimi",
      "Ağ temelleri: TCP/IP, port, subnet, gateway ve routing",
      "DNS, HTTP ve HTTPS: web isteğinin görünmeyen yolculuğu",
      "Git ve GitHub: versiyon kontrolü, branch, pull request ve ekip hafızası",
      "Teknik mülakat zemini: temel kavramları ezberden açıklamaya çevirmek"
    ]
  },
  {
    id: "asama-2-programlama",
    title: "2. Aşama: Programlama ve Veri",
    summary: "Python, algoritmik düşünme, OOP, JSON, API kullanımı, SQL ve PostgreSQL ile üretim seviyesinde yazılım temeli kurar.",
    mode: "software",
    chapters: [
      "Programlamaya giriş: problemi bilgisayarın anlayacağı akışa çevirmek",
      "Python temelleri: değişkenler, tipler, koşullar ve döngüler",
      "Fonksiyonlar, modüller ve okunabilir kod alışkanlığı",
      "OOP mantığı: sınıf, nesne, kapsülleme ve tasarım sezgisi",
      "Hata yönetimi, dosya işlemleri, JSON ve veri formatları",
      "API kullanımı: HTTP isteği göndermek, cevap okumak ve hata ayıklamak",
      "SQL temeli: tablo, ilişki, JOIN, index ve sorgu düşüncesi",
      "PostgreSQL ile kalıcı kayıt, transaction ve veri bütünlüğü",
      "Python ekosistemi: FastAPI, Pandas, PyTorch ve TensorFlow'a hazırlık",
      "Kod mülakatı ve portföy: neyi bildiğini çalışır örnekle göstermek"
    ]
  },
  {
    id: "asama-3-web-api",
    title: "3. Aşama: Web, API ve Servis Mimarisi",
    summary: "Frontend, backend, REST API, JWT, Redis, mesaj kuyrukları, test ve servis tasarımıyla modern uygulama akışını anlatır.",
    mode: "software",
    chapters: [
      "Web'e giriş: tarayıcıdan backend'e bir isteğin hikâyesi",
      "HTML, CSS ve JavaScript: ekrandaki deneyimin üç katmanı",
      "Backend mantığı: endpoint, servis, controller ve iş kuralı",
      "REST API tasarımı: kaynak, metot, durum kodu ve sözleşme",
      "Kimlik ve oturum: JWT, OAuth2, cookie, session ve yetki sınırı",
      "Redis, cache ve CDN: hız kazanırken eski veri riskini yönetmek",
      "Mesaj kuyrukları: Kafka, RabbitMQ ve olay tabanlı çalışma",
      "Test, logging ve observability: sistemin kendi sesini duyabilmesi",
      "Docker ile geliştirme ortamı ve servis paketleme",
      "Web mülakatları: API, güvenlik ve ölçekleme sorularına olgun cevap vermek"
    ]
  },
  {
    id: "asama-4-ai-temelleri",
    title: "4. Aşama: Yapay Zekâ Temelleri",
    summary: "Makine öğrenmesi, derin öğrenme, sinir ağları, token, embedding, RAG ve model değerlendirmeyi zemine oturtur.",
    mode: "ai",
    chapters: [
      "Yapay zekâya giriş: model büyüsünü iş probleminden ayırmak",
      "Makine öğrenmesi mantığı: veri, özellik, hedef ve genelleme",
      "Derin öğrenme ve sinir ağları: katmanlar, ağırlıklar ve eğitim",
      "Veri hazırlığı: temizlik, etiketleme, bölme ve sızıntı riskleri",
      "Token, embedding ve vektör uzayı: metni sayıya çevirmek",
      "RAG mantığı: modeli kurum bilgisiyle konuşturmak",
      "Model değerlendirme: doğruluk, halüsinasyon, bias ve güven",
      "PyTorch ve TensorFlow: araştırmadan üretime giden araçlar",
      "AI mülakatları: kavramı ezberlemeden örnekle açıklamak"
    ]
  },
  {
    id: "asama-5-llm-gelistirme",
    title: "5. Aşama: LLM Geliştirme ve Ajan Sistemleri",
    summary: "OpenAI API, Ollama, prompt tasarımı, function calling, MCP, ajan araçları, güvenlik ve LLMOps pratiğini anlatır.",
    mode: "ai",
    chapters: [
      "LLM geliştirmeye giriş: sohbet kutusundan kurumsal ürüne geçmek",
      "OpenAI API kullanımı: model seçimi, mesaj yapısı ve maliyet bilinci",
      "Prompt tasarımı: rol, bağlam, örnek, sınır ve çıktı şeması",
      "Function calling ve tool use: modelin sistemlerle güvenli konuşması",
      "Ollama ve yerel modeller: mahremiyet, kapasite ve kalite dengesi",
      "MCP mantığı: araçları, veriyi ve ajanları standart bağlamak",
      "Kurumsal RAG tasarımı: belge toplama, chunking, arama ve kaynak gösterme",
      "LLMOps: değerlendirme seti, izleme, sürümleme ve geri bildirim döngüsü",
      "LLM güvenliği: prompt injection, veri sızıntısı ve insan onayı",
      "LLM mülakatları ve portföy: küçük demo değil denetlenebilir sistem göstermek"
    ]
  },
  {
    id: "asama-6-devops-bulut",
    title: "6. Aşama: DevOps ve Bulut",
    summary: "Docker, Kubernetes, CI/CD, monitoring, AWS, Google Cloud, yedekleme, maliyet ve üretim işletimi üzerine kurulur.",
    mode: "systems",
    chapters: [
      "DevOps'a giriş: yazan ekiple işleten ekibin aynı sorumluluğu taşıması",
      "Docker: imaj, container, volume, network ve registry",
      "Kubernetes: pod, deployment, service, ingress ve autoscaling",
      "CI/CD: build, test, artifact, deployment ve rollback",
      "Monitoring ve logging: metrik, alarm, dashboard ve olay takibi",
      "Bulut temelleri: IaaS, PaaS, SaaS, region, availability zone ve IAM",
      "AWS ve Google Cloud: compute, storage, network ve managed servisler",
      "Yedekleme, felaket kurtarma ve iş sürekliliği tatbikatı",
      "Bulut maliyeti ve kapasite planı: hızın faturasını yönetmek",
      "DevOps mülakatları: üretim ortamını gerçekten işletmiş gibi konuşmak"
    ]
  },
  {
    id: "siber-guvenlik",
    title: "Siber Güvenlik ve Güvenilirlik",
    summary: "Kimlik, ağ güvenliği, uygulama güvenliği, SIEM, SOC, olay müdahalesi, KVKK ve güvenlik kültürünü işletilebilir hale getirir.",
    mode: "security",
    chapters: [
      "Siber güvenliğe giriş: korku değil görünür risk yönetimi",
      "Kimlik güvenliği: IAM, MFA, SSO, PAM ve least privilege",
      "Ağ güvenliği: firewall, IDS/IPS, WAF, segmentasyon ve Zero Trust",
      "Uygulama güvenliği: OWASP, güvenli kod, SAST, DAST ve dependency riski",
      "Uç nokta güvenliği: EDR, hardening, patch ve cihaz yönetimi",
      "Log, SIEM ve SOC: alarmdan olaya giden karar hattı",
      "Veri güvenliği: sınıflandırma, DLP, maskeleme ve KVKK",
      "Olay müdahalesi: tespit, çevreleme, temizleme ve ders çıkarma",
      "Siber tatbikat, farkındalık ve yönetim raporu",
      "Siber güvenlik mülakatları: riski teknik ve yönetsel dille anlatmak"
    ]
  },
  {
    id: "buyuk-mimariler",
    title: "Büyük Sistemler ve Mimari Okuryazarlık",
    summary: "E-ticaret, banka, kamu portalı, sağlık, savunma ve gerçek zamanlı sistemleri uçtan uca okuyacak mimari refleks kazandırır.",
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
    id: "proje-kamu-yonetim",
    title: "Proje, Kamu ve Kurumsal Yönetim",
    summary: "İhtiyaç analizi, şartname, kabul, bütçe, tedarikçi, proje yönetimi ve kamu BT işleyişini sahadaki haliyle anlatır.",
    mode: "project",
    chapters: [
      "Kurumsal projeye giriş: fikri takvime değil değere bağlamak",
      "İhtiyaç analizi ve kapsam: istekle gereksinimi ayırmak",
      "Teknik şartname, ölçülebilir kabul ve teslim kanıtı",
      "Paydaş haritası, RACI ve karar makamı",
      "Risk, varsayım, sorun kaydı ve kapsam kayması",
      "Test stratejisi, canlıya geçiş, rollback ve iletişim",
      "Tedarikçi yönetimi, SLA, bakım ve sözleşme takibi",
      "Bütçe, lisans, envanter ve varlık yönetimi",
      "Kamu BT işleyişi: merkez, taşra, belediye, üniversite ve savunma şirketi",
      "KVKK, denetim izi, resmi yazı ve kurumsal hafıza",
      "Proje ve kamu mülakatları: süreçleri sahada yaşamış gibi anlatmak"
    ]
  },
  {
    id: "liderlik-kriz-gelecek",
    title: "Teknik Liderlik, Kriz ve Gelecek",
    summary: "Üst düzey BT yöneticiliği, ekip dili, kriz yönetimi, teknoloji stratejisi, dijital egemenlik ve gelecek ajandasını birleştirir.",
    mode: "leadership",
    chapters: [
      "Teknik liderliğe giriş: ayrıntıyı bilip bütünü yönetmek",
      "Üst makama teknik meseleyi sade ve dürüst anlatmak",
      "Ekip kurmak: uzmanlık, güven, yedeklilik ve ölçü",
      "Karar almak: hız, risk, geri dönüş yolu ve sorumluluk",
      "Bütçe savunması: maliyeti risk ve değer diliyle anlatmak",
      "Krizlere giriş: ilk dakika, ilk karar, ilk kayıt",
      "Veritabanı kilidi ve yavaş sorgu",
      "SSL sertifikası, DNS ve erişim kesintisi",
      "DDoS baskısı ve trafik savunması",
      "Yedek dönmüyor: kâğıt üstündeki güvenin çökmesi",
      "Kriz sonrası olay raporu, kök neden analizi ve kalıcı düzeltme",
      "Yapay zekânın ofise girişi",
      "Veri merkezlerinde enerji, GPU ve kapasite baskısı",
      "Dijital egemenlik, yarı iletken yarışı ve bulut bağımlılığı",
      "Üst düzey BT yöneticisi için kişisel rota"
    ]
  },
  {
    id: "mulakat-ve-ust-duzey-hazirlik",
    title: "Mülakat ve Üst Düzey Hazırlık",
    summary: "Bilgisayar, yazılım, sistem, siber güvenlik, yapay zekâ ve yöneticilik konularını soru-cevap refleksine dönüştürür.",
    mode: "interview",
    chapters: [
      "Mülakat stratejisi: cevabı ezber değil düşünce zinciriyle kurmak",
      "Bilgisayar temelleri için beklenen sorular ve iyi cevap yapısı",
      "Python, OOP, SQL ve API sorularında derinlik göstermek",
      "Web, backend, JWT, cache ve mesaj kuyruğu soruları",
      "Linux, ağ, Docker, Kubernetes ve bulut soruları",
      "Siber güvenlik ve olay müdahalesi soruları",
      "Yapay zekâ, RAG, LLM ve MLOps soruları",
      "Sistem tasarımı mülakatı: büyük resmi tahtada kurmak",
      "Yöneticilik mülakatı: bütçe, risk, insan ve karar dili",
      "Kişisel gelişim rotası: teknisyenlikten stratejik BT liderliğine"
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
  },
  interview: {
    scene: "mülakat ve üst düzey hazırlıkta bilgi, ezberlenen tanımdan çıkıp örnekle savunulan düşünceye dönüşür",
    actors: "aday, teknik değerlendirici, yönetici, insan kaynakları, ekip lideri ve bazen kurumun gerçek ihtiyacı aynı konuşmada görünür hale gelir",
    stakes: "kavramı bilmek yetmez; nerede kullanıldığını, neyi bozabileceğini ve nasıl işletileceğini anlatamayan aday güven veremez",
    tech: ["Python", "SQL", "REST", "Docker", "Kubernetes", "SIEM", "RAG", "PostgreSQL"]
  }
};

const techDetails = {
  "Terminal": [
    "Terminal, bilgisayarla süslü ekranları aradan çıkararak konuşma yoludur. Dosya aramak, servis durumuna bakmak, log izlemek, Git komutu çalıştırmak veya uzak sunucuya bağlanmak çoğu zaman burada başlar.",
    "Komut satırını bilen kişi sistemin nabzını daha hızlı tutar. `pwd`, `ls`, `cd`, `cat`, `grep`, `tail`, `ps`, `kill`, `ssh` gibi komutlar kuru ezber değil, sorun anında yol bulma aracıdır.",
    "Mülakatta terminal sorusu çoğu zaman adayın gerçekten üretim ortamı görüp görmediğini anlamaya yarar. İyi cevap, komut adını saymakla kalmaz; hangi durumda hangi komutun kanıt ürettiğini anlatır."
  ],
  "Linux": [
    "Linux, modern sunucu dünyasının sessiz ana zemini gibidir. Web servisleri, veritabanları, konteyner platformları, ağ araçları ve güvenlik sistemleri çoğu kurumda Linux üzerinde nefes alır.",
    "Kullanıcı, grup, izin, servis, paket, log ve dosya sistemi mantığı anlaşılmadan Linux yalnız siyah ekran gibi görünür. Oysa iyi sistemci için `/var/log`, `systemd`, `chmod`, `sudo`, paket yöneticisi ve shell betikleri günlük işin haritasıdır.",
    "Üst düzey kurumlarda Linux bilgisi yalnız komut kullanmak değildir; kim neye erişebilir, servis nasıl izlenir, güncelleme nasıl planlanır, değişiklik nasıl geri alınır sorularını sakin cevaplayabilmektir."
  ],
  "İşletim sistemi": [
    "İşletim sistemi, donanım ile uygulama arasındaki düzenleyicidir. CPU zamanını süreçlere paylaştırır, belleği yönetir, dosya sistemini sunar, sürücülerle donanıma ulaşır ve kullanıcıya güvenli çalışma alanı açar.",
    "Bir program yavaşladığında mesele yalnız kod olmayabilir; süreç bekliyor, bellek şişiyor, disk I/O tıkanıyor veya işletim sistemi kaynakları başka işlere dağıtıyor olabilir. Bu yüzden temel işletim sistemi bilgisi yazılımcıya da yöneticilik adayına da gerekir.",
    "Mülakatta iyi cevap, işletim sistemini 'Windows veya Linux' diye değil, kaynak yöneten ve uygulamalara kontrollü ortam sağlayan ana katman olarak anlatır."
  ],
  "DNS": [
    "DNS, kullanıcıların hatırladığı alan adlarını makinelerin anlayacağı IP adreslerine çeviren rehberdir. Bir web sitesine girildiğinde ilk yolculuk çoğu zaman görünmez biçimde DNS ile başlar.",
    "A kaydı, CNAME, TTL, resolver, authoritative server ve cache kavramları küçük ayrıntı gibi durur; fakat yanlış DNS kaydı bütün hizmeti erişilemez gösterebilir. Sertifika, CDN ve load balancer kararları da DNS ile birlikte düşünülür.",
    "Krizde DNS bilen kişi paniği azaltır: sorun uygulamada mı, alan adı çözümlemesinde mi, TTL yüzünden eski kayıt mı dönüyor, yalnız belirli bölgeler mi etkileniyor sorularını sıraya koyar."
  ],
  "Python": [
    "Python, öğrenmesi yumuşak ama kullanım alanı çok geniş bir dildir. Değişkenler, döngüler ve fonksiyonlarla başlar; otomasyon, web servisleri, veri analizi ve yapay zekâ işlerine kadar uzanır.",
    "İyi Python yazmak yalnız çalışır kod yazmak değildir. Okunabilir fonksiyonlar kurmak, istisnaları doğru yakalamak, modülleri ayırmak, sanal ortam kullanmak, bağımlılıkları yönetmek ve test edilebilir tasarım yapmak gerekir.",
    "Mülakatta Python sorusu çoğu zaman adayın temel akış kurma becerisini ölçer. Güçlü cevap, liste işlemlerinden OOP'ye, JSON okumadan API çağrısına kadar küçük parçaları gerçek bir iş senaryosuna bağlar."
  ],
  "OOP": [
    "OOP, dünyayı nesne diye paketleyip her şeyi sınıfa boğmak değildir. Asıl mesele veriyle davranışı anlamlı sınırlar içinde tutmak, değişiklik geldiğinde kodun tamamının dağılmasını önlemektir.",
    "Sınıf, nesne, kapsülleme, kalıtım ve polimorfizm kavramları ancak örnekle anlam kazanır. Bir ödeme servisi, kullanıcı oturumu veya envanter kaydı tasarlanırken hangi sorumluluğun hangi sınıfta kalacağı mimari kaliteyi belirler.",
    "İyi aday OOP anlatırken jargonla oyalanmaz; yanlış soyutlamanın kodu nasıl ağırlaştırdığını, doğru soyutlamanın ise bakım ve test yükünü nasıl azalttığını açıklar."
  ],
  "JSON": [
    "JSON, sistemlerin birbirine veri taşırken kullandığı sade ve yaygın formattır. Web API cevapları, yapılandırma dosyaları, log parçaları ve entegrasyon mesajları çoğu zaman JSON olarak akar.",
    "Basit görünmesi aldatıcıdır. Alan adları, veri tipleri, zorunlu alanlar, null değerler, tarih formatı ve geriye uyumluluk konuşulmadan JSON sözleşmesi kırılgan hale gelir.",
    "Mülakatta JSON'u bilen aday yalnız süslü parantezi tarif etmez; bir API cevabını nasıl parse edeceğini, hatalı alan geldiğinde ne yapacağını ve sürüm değişikliğini nasıl yöneteceğini anlatır."
  ],
  "SQL": [
    "SQL, kurum hafızasına soru sorma dilidir. Tablo, satır, kolon, ilişki, JOIN, WHERE, GROUP BY ve index kavramları raporun, ekranın ve denetimin arkasındaki gerçek kayda bağlanır.",
    "Kötü SQL yalnız yavaş sorgu üretmez; yanlış JOIN ile sayıları şişirir, eksik transaction ile veriyi tutarsız bırakır, index düşünülmeden yazıldığında canlı sistemi yorar. Bu yüzden SQL, yazılımcı için de yönetici için de kritik okuryazarlıktır.",
    "İyi cevap, 'SELECT biliyorum' seviyesini geçer. Aday transaction ne zaman gerekir, index neyi hızlandırır, migration nasıl yönetilir ve PostgreSQL gibi sistemlerde kalıcı kayıt neden ana defterdir sorularını örnekle açıklar."
  ],
  "PostgreSQL": [
    "PostgreSQL, açık kaynak dünyasının güçlü kurumsal veritabanlarından biridir. Transaction, index, constraint, view, JSONB, replication ve extension desteğiyle hem klasik kayıt hem modern uygulama ihtiyaçlarını taşır.",
    "Bir kurumda PostgreSQL yalnız tablo saklamaz; siparişin, başvurunun, ödeme kaydının, personel bilgisinin ve denetim izinin ana gerçeğini tutar. Bu yüzden backup, migration, yetki ve performans konusu yazılımın dışına taşar.",
    "Mülakatta PostgreSQL'i anlatırken ACID, transaction, index ve query plan kavramlarını iş etkisiyle bağlamak gerekir. Çünkü veri kaybı olduğunda teknik ayrıntı bir anda yönetim krizine dönüşür."
  ],
  "REST API": [
    "REST API, kaynakları HTTP üzerinden okunur, oluşturulur, güncellenir ve silinir hale getiren yaygın servis yaklaşımıdır. GET, POST, PUT, PATCH ve DELETE metotları doğru kullanıldığında ekipler aynı sözleşmeye bakar.",
    "İyi API yalnız endpoint listesi değildir. Durum kodları, hata mesajı, sayfalama, versiyonlama, rate limit, kimlik doğrulama ve idempotency konuşulmadan API üretim ortamında sorun çıkarır.",
    "Mülakatta iyi cevap, 'REST nedir?' sorusunu bir kullanıcı kayıt akışı üzerinden anlatır: istek gelir, doğrulanır, yetki kontrol edilir, veri yazılır, anlamlı durum kodu döner ve log izi kalır."
  ],
  "JWT": [
    "JWT, kimlik ve bazı yetki bilgilerini imzalı token içinde taşıyan formattır. Mikroservislerde ve stateless API tasarımlarında sık görülür çünkü her istekle birlikte doğrulanabilir bilgi taşır.",
    "JWT kolaylık sağlar ama dikkat ister. Token süresi, refresh akışı, imza algoritması, gizli anahtar yönetimi, fazla bilgi koymama ve iptal stratejisi düşünülmezse güvenlik açığı doğar.",
    "İyi teknik cevap JWT'yi sihirli oturum çözümü gibi satmaz; cookie, session, OAuth2 ve SSO ile nerede birleştiğini, hangi riskleri artırdığını ve nasıl izlenmesi gerektiğini anlatır."
  ],
  "Docker": [
    "Docker, uygulamayı bağımlılıklarıyla birlikte taşınabilir bir imaja dönüştürür. Geliştiricide çalışan kodun test ve üretim ortamında başka davranma ihtimalini azaltır.",
    "Image, container, volume, network, registry ve Dockerfile kavramları birlikte düşünülür. Container kalıcı veri deposu değildir; log, secret ve volume kararları baştan verilmelidir.",
    "Mülakatta Docker bilen aday 'konteyner sanal makine değildir' ayrımını yapar ve küçük bir servisin nasıl paketlenip registry'ye gönderileceğini anlatabilir."
  ],
  "Kubernetes": [
    "Kubernetes, çok sayıda konteyneri bir kümede çalıştırmak, izlemek, ölçeklemek ve bozulan parçayı yeniden ayağa kaldırmak için kullanılır. Pod, deployment, service, ingress ve config map temel yapı taşlarıdır.",
    "Kubernetes gücü kadar işletme yükü de getirir. Kaynak limitleri, health check, secret yönetimi, rollout, rollback, observability ve cluster maliyeti düşünülmezse platform çözüm değil yeni karmaşa olur.",
    "Üst düzey kurumlarda Kubernetes sorusu teknolojiyi kurmaktan çok işletmeyi anlamaya bakar: kim yönetecek, hangi servis aday, hangi metrik izlenecek, hata anında geri dönüş nasıl yapılacak?"
  ],
  "Bulut": [
    "Bulut, sunucu almamak değildir; kapasiteyi hizmet olarak tüketmek ve bunun güvenlik, maliyet, ağ, kimlik ve operasyon sorumluluğunu doğru yönetmektir.",
    "IaaS, PaaS, SaaS, region, availability zone, object storage, managed database ve IAM kavramları bulut mimarisinin karar dilidir. AWS ve Google Cloud farklı ürün adları sunsa da temel sorular benzerdir.",
    "Bulut mülakatında güçlü cevap, 'ölçeklenir' demekle kalmaz; maliyet alarmı, yedekleme, veri egemenliği, erişim yetkisi ve felaket kurtarma tasarımını da konuşur."
  ],
  "RAG": [
    "RAG, büyük dil modelinin cevabını kurum belgeleri, veritabanı kayıtları veya bilgi tabanından getirilen bağlamla güçlendirme yaklaşımıdır. Amaç modelin her şeyi ezbere bilmesini beklemek değil, doğru kaynağa bakmasını sağlamaktır.",
    "İyi RAG tasarımında belge toplama, temizleme, chunking, embedding, vektör arama, reranking, kaynak gösterme ve cevap değerlendirme birlikte çalışır. Yalnız PDF yükleyip sohbet ekranı açmak kurumsal çözüm sayılmaz.",
    "Mülakatta RAG anlatırken en kritik cümle şudur: model cevap üretir, fakat kaynak seçimi, yetki sınırı, güncellik ve halüsinasyon kontrolü sistem tasarımının sorumluluğudur."
  ],
  "OpenAI API": [
    "OpenAI API, büyük dil modellerini uygulama akışlarına bağlamak için kullanılır. Mesaj yapısı, model seçimi, token maliyeti, çıktı formatı ve hata yönetimi üretim kalitesini belirler.",
    "Basit demo ile kurumsal kullanım arasında fark büyüktür. Loglama, gizli bilgi filtreleme, rate limit, retry, değerlendirme seti, insan onayı ve model değişikliği stratejisi kurulmadan API entegrasyonu kırılgan kalır.",
    "İyi geliştirici API'yi yalnız çağırmaz; cevabın ne zaman güvenilir sayılacağını, hangi verinin modele gitmeyeceğini ve maliyetin nasıl izleneceğini de tasarlar."
  ],
  "MCP": [
    "MCP, modelin araçlara ve veri kaynaklarına daha standart biçimde bağlanmasını hedefleyen bir bağlama mantığıdır. Model tek başına konuşmak yerine dosya, sistem, servis veya iş aracıyla kontrollü etkileşime geçebilir.",
    "Bu yaklaşım ajan sistemlerinde önemlidir çünkü araç çağırma, yetki sınırı, veri kaynağı ve işlem kaydı da konuşmanın parçası olur. Modelin neye eriştiği ve hangi işlemi yaptığı denetlenebilir kalmalıdır.",
    "Yönetici açısından MCP gibi yaklaşımların değeri, yapay zekâyı gösterişli sohbetten çıkarıp iş akışına, güvenli araca ve kayıtlı aksiyona bağlamasıdır."
  ],
  "Git": [
    "Git, kodun zaman içindeki hikâyesini tutar. Hangi satır ne zaman değişti, kim değiştirdi, hangi dalda denendi ve hangi sürümde canlıya çıktı soruları Git olmadan kişisel hafızaya kalır.",
    "GitHub bu hafızayı ekip çalışmasına çevirir. Pull request, code review, issue, branch protection ve action yapıları kodun yalnız yazılmasını değil, gözden geçirilmesini ve kontrollü teslim edilmesini sağlar.",
    "Mülakatta Git bilen aday `commit`, `branch`, `merge`, `rebase` ve conflict kavramlarını komut listesi gibi değil, ekip düzeni ve geri dönüş güvenliği olarak anlatır."
  ],
  "CI/CD": [
    "CI/CD, yazılımın el yordamıyla ortama kopyalanmasını üretim hattına dönüştürür. Kod depoya girer, testler çalışır, paket hazırlanır, uygun ortama kontrollü biçimde alınır.",
    "Bu hatta otomasyon kadar durma noktaları da önemlidir. Test başarısızsa dağıtım durmalı, güvenlik taraması bulgu üretirse ekip görmeli, canlıya geçişte rollback yolu açık olmalıdır.",
    "İyi cevap CI/CD'yi yalnız hız olarak anlatmaz; kalite kapısı, denetim izi, sürüm bilgisi ve kriz anında hangi değişikliğin geri alınacağını bilme disiplini olarak konumlandırır."
  ],
  "Docker": [
    "Docker, uygulamayı bağımlılıklarıyla birlikte paketleyerek çalışacağı ortamı daha öngörülebilir hale getirir. Kod, kütüphane, çalışma zamanı ve yapılandırma tek imaj fikrinde buluşur.",
    "Container geçici çalışır; kalıcı veri, secret, network ve log stratejisi ayrıca tasarlanmalıdır. Bu ayrım anlaşılmazsa geliştirme kolaylığı üretim ortamında veri ve güvenlik riskine dönüşebilir.",
    "İyi aday Docker anlatırken imaj ile container farkını, Dockerfile mantığını, volume kullanımını ve registry üzerinden dağıtım akışını sade bir örnekle kurar."
  ],
  "Redis": [
    "Redis, veriyi bellek içinde tutarak çok hızlı okuma yazma sağlayan bir sistemdir. Oturum, sepet, geçici sayaç, rate limit ve kısa süreli cache senaryolarında sık kullanılır.",
    "Hızın bedeli veri ömrünü doğru yönetmektir. TTL, invalidation, ana kayıt ile cache ayrımı ve bellek kapasitesi düşünülmeden Redis eski veya eksik bilgi gösteren sessiz bir risk haline gelebilir.",
    "Mülakatta Redis'i iyi anlatmak, 'hızlıdır' demekten fazlasıdır; hangi verinin Redis'e uygun olmadığını söyleyebilmek asıl olgunluk işaretidir."
  ],
  "AWS": [
    "AWS ve Google Cloud gibi bulut sağlayıcıları compute, storage, network, database, IAM ve observability hizmetlerini yönetilebilir servisler olarak sunar. İsimler değişse de temel mimari sorular aynıdır.",
    "Bulutta hız kazanmak kolaydır; maliyeti, erişim yetkisini, veri konumunu, yedeklemeyi ve felaket kurtarmayı yönetmek disiplin ister. Yanlış IAM kuralı veya açık storage bucket teknik tercihi bir anda güvenlik olayına çevirebilir.",
    "İyi cevap sağlayıcı fanatikliği yapmaz. Hangi iş yükü için hangi servis seçilir, managed servis ne kazandırır, vendor lock-in nerede başlar ve maliyet nasıl izlenir sorularına dengeli bakar."
  ],
  "Monitoring": [
    "Monitoring, sistemin nabzını düzenli ölçme işidir. CPU, bellek, disk, hata oranı, yanıt süresi, kuyruk uzunluğu ve kullanıcı etkisi görülmeden sistem sağlıklı mı hasta mı anlaşılmaz.",
    "Log, metrik ve trace birlikte okunursa olayın yalnız nerede patladığı değil, nasıl ilerlediği de anlaşılır. Alarm eşiği yanlışsa ekip ya sürekli gereksiz uyarı alır ya da gerçek krizi geç fark eder.",
    "Yönetici için monitoring, teknik ekran değil karar aracıdır. Hangi hizmet etkileniyor, kaç kullanıcı görüyor, SLA riski var mı ve ne zaman üst makama bilgi verilmeli soruları buradan beslenir."
  ],
  "Makine öğrenmesi": [
    "Makine öğrenmesi, açıkça kural yazmak yerine veriden örüntü öğrenme yaklaşımıdır. Model geçmiş örneklerden ilişki çıkarır ve yeni veride tahmin yapmaya çalışır.",
    "İyi makine öğrenmesi projesi algoritmadan önce veriyle başlar. Hedef değişken doğru mu, veri sızıntısı var mı, eğitim ve test ayrımı temiz mi, model gerçekten genelliyor mu soruları cevaplanmalıdır.",
    "Mülakatta güçlü aday doğruluk oranı söylemekle yetinmez; overfitting, validation, feature engineering, bias ve yanlış kararın iş etkisini konuşur."
  ],
  "Derin öğrenme": [
    "Derin öğrenme, çok katmanlı sinir ağlarıyla veriden temsil öğrenmeye çalışır. Görüntü, ses, metin ve karmaşık örüntülerde gücünü bu temsil öğrenme kabiliyetinden alır.",
    "Katman, ağırlık, aktivasyon, loss, optimizer ve backpropagation kavramları işin matematik omurgasıdır. Fakat kurum projesinde veri kalitesi, GPU maliyeti ve izlenebilirlik en az mimari kadar önemlidir.",
    "İyi açıklama, sinir ağını büyülü kutu gibi anlatmaz; eğitilen parametrelerin verideki ilişkilere göre güncellendiğini ve kötü veriyle iyi model beklenmeyeceğini açıklar."
  ],
  "Embedding": [
    "Embedding, metin, belge veya başka bir nesneyi anlam benzerliği kurulabilecek sayısal vektöre çevirir. Böylece sistem aynı kelimeyi aramadan, benzer anlamdaki içerikleri bulabilir.",
    "Kurumsal RAG sistemlerinde embedding doğru belgeyi bulmanın temel adımıdır. Chunk boyutu, dil, alan terimleri, güncellik ve yetki filtresi yanlışsa modelin cevabı da zayıf kaynağa yaslanır.",
    "Mülakatta embedding anlatırken 'metni sayıya çevirir' cümlesi başlangıçtır; asıl olgunluk bu sayısal temsilin arama, öneri, sınıflandırma ve RAG içinde nasıl kullanıldığını göstermektir."
  ],
  "LLM": [
    "LLM, büyük metin kütleleri üzerinde eğitilmiş ve dil örüntülerini kullanarak cevap üreten model ailesidir. Metin yazabilir, özetleyebilir, kod önerebilir ve konuşma akışını takip edebilir.",
    "Fakat LLM güvenilir kaynak sistemi değildir. Bağlamı yanlışsa ikna edici biçimde yanlış cevap verebilir, hassas veriyi uygunsuz işleyebilir veya araç kullanımında sınırları zorlayabilir.",
    "İyi LLM geliştirme, prompt yazmanın ötesine geçer: veri sınırı, kaynak gösterme, değerlendirme, maliyet, loglama, insan onayı ve güvenli araç kullanımı birlikte tasarlanır."
  ],
  "Ollama": [
    "Ollama, yerel modelleri geliştirici makinesinde veya kurum içi ortamda denemeyi kolaylaştıran bir araçtır. Mahremiyet, gecikme ve bağımsız deneme açısından yararlı olabilir.",
    "Yerel model kullanmak otomatik olarak daha iyi çözüm anlamına gelmez. Model kalitesi, donanım kapasitesi, güncelleme, güvenlik, lisans ve bakım sorumluluğu kurumun üzerinde kalır.",
    "Mülakatta Ollama konuşulurken güçlü cevap şudur: yerel model bir seçenek olabilir, ama hangi veri için, hangi kalite eşiğinde, hangi GPU maliyetiyle ve hangi güvenlik sınırıyla kullanılacağı netleşmelidir."
  ],
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

const manualArticles = {
  "asama-1-bilgisayar-temelleri-1": [
    "Bilgisayarı ilk kez gerçekten anlamaya başladığım gün, kasanın kapağı açıktı ve kimse ekrandaki hatadan söz etmiyordu. Herkes anakarta, diske, güç kablosuna, fana bakıyordu. O an şunu öğrenirsin: bilgisayar bir kutu değil, küçük bir şehir gibidir. Elektrik gelir, yollar açılır, bellek çalışır, işlemci hesap yapar, disk hatırlar, işletim sistemi bu kalabalığı sıraya koyar.",
    "Bu bölümün amacı parça ezberletmek değil, teknik dünyaya bakışını değiştirmektir. Bir mülakatta CPU sorulunca yalnız çekirdek sayısı söyleyen aday başka, CPU'nun iş kuyruğu, bellek ve diskle ilişkisini anlatan aday bambaşka görünür. Büyük kurumlarda da fark buradan başlar; ekrandaki yavaşlığı yalnız yazılıma yüklemeyen kişi, sistemin tamamını okumaya başlamıştır.",
    "Yolun başında en değerli alışkanlık şudur: her teknolojiye 'hangi işi yapıyor, hangi parçaya bağlı, bozulursa kim etkilenir?' diye bakmak. Bu soru seni ezberden çıkarır, mühendis gibi düşündürür."
  ],
  "asama-1-bilgisayar-temelleri-2": [
    "CPU'yu kurumun en hızlı ama en sabırsız memuru gibi düşün. Önüne gelen işi parçalar, hesaplar, sıradakine geçer. RAM masanın üstüdür; o anda çalışılan evrak oradadır. Disk arşivdir; kapattığında bile bilgi orada kalır. Anakart ise bu odaların koridorudur. Koridor dar, masa küçük, arşiv yavaşsa en zeki memur bile mucize yaratamaz.",
    "Bir veri merkezinde ilk defa disk arızası gördüğümde kimse dramatik konuşmadı; ışığın rengine, RAID durumuna, yedek saatine baktılar. Donanım uzmanlığı biraz da paniği ölçülebilir işarete çevirmektir. CPU yüzde kaçta, RAM swap'e düşmüş mü, disk I/O bekliyor mu, ağ kartında hata var mı? Bunlar kullanıcının 'sistem dondu' cümlesinin arkasındaki gerçek sorulardır.",
    "Mülakatlarda donanım sorusu basit görünür ama derinlik arar. İyi cevap, parçaları saymakla kalmaz; video işleme, veritabanı, yapay zekâ eğitimi ve web sunucusu gibi farklı yüklerde hangi parçanın neden kritikleştiğini anlatır."
  ],
  "asama-1-bilgisayar-temelleri-3": [
    "İşletim sistemi, binanın görünmeyen idare amiri gibidir. Kim hangi odayı kullanacak, hangi dosyaya erişecek, hangi iş önce çalışacak, hangi cihazla nasıl konuşulacak, hepsini o düzenler. Uygulama geliştirirken işletim sistemini unutmak kolaydır; ta ki süreç kilitlenene, bellek şişene veya dosya izni yüzünden servis açılmayana kadar.",
    "Bir gece canlı sistemde servis başlamıyordu. Kod değişmemişti, veritabanı ayaktaydı, ağ açıktı. Sorun küçük bir izin hatasıydı; servis kullanıcısı log dosyasına yazamıyordu. O olay bana işletim sisteminin nazik ama kesin bir hakem olduğunu öğretti. Senin niyetinle değil, verdiğin izinle ilgilenir.",
    "Süreç, thread, bellek, dosya sistemi ve sürücü kavramları bu yüzden teorik değildir. Bunları anlayan kişi hata ayıklarken daha kısa yol yürür; anlamayan kişi aynı odada dönüp durur."
  ],
  "asama-1-bilgisayar-temelleri-4": [
    "Terminal ilk başta soğuk görünür; siyah ekran, kısa komutlar, hataya yer bırakmayan bir dil. Ama bir süre sonra terminalin aslında en dürüst arayüz olduğunu fark edersin. Grafik ekran sana hikâye anlatır, terminal çoğu zaman gerçeği söyler: dosya burada mı, servis çalışıyor mu, port açık mı, log ne yazmış?",
    "İyi bir sistemciyi terminalde izlemek marangozu atölyede izlemek gibidir. Gereksiz hareket yoktur. `tail` ile log akar, `grep` ile iz bulunur, `ps` ile süreç görülür, `ssh` ile uzak makineye girilir. Her komut küçük bir el feneridir; karanlık sistem odasında yolu o fenerlerle bulursun.",
    "Mülakatta terminal bilgisi sorulduğunda komut listesi okumak yerine bir arıza hikâyesi anlat: uygulama cevap vermiyor, önce process'e bakarım, sonra portu kontrol ederim, sonra logun son satırlarını okurum. Bu cevap, gerçekten sahaya yaklaşabildiğini gösterir."
  ],
  "asama-1-bilgisayar-temelleri-5": [
    "Linux'u öğrenmek, sunucu odasının anahtarını almak gibidir. Web servisleri, veritabanları, konteynerler, güvenlik araçları ve otomasyonların büyük bölümü bu dünyanın üzerinde yaşar. Linux bilmeyen yazılımcı kod yazabilir; ama kodu üretim ortamında kimin, hangi kullanıcıyla, hangi izinle, hangi servis olarak çalıştırdığını anlamakta zorlanır.",
    "Bir kurumda küçük bir servis duruyordu. Geliştirici 'bende çalışıyor' dedi, sistemci servis dosyasını açtı, çalışma dizinini ve kullanıcı yetkisini gösterdi. Sorun kodda değil, Linux servis tanımındaydı. İşte Linux böyle öğretir: uygulama yalnız dosya değildir; kullanıcı, izin, ortam değişkeni, log ve servis yaşam döngüsüdür.",
    "Kullanıcılar, gruplar, `chmod`, `systemctl`, paket yöneticisi ve log dizinleri ezber değil, işletme refleksidir. Bunları bilen aday, büyük kurumların gerçek çalışma zeminine daha yakın durur."
  ],
  "asama-1-bilgisayar-temelleri-6": [
    "Ağ temelleri, bilgisayarların birbirine nasıl selam verdiğini anlamaktır. IP adresi ev adresi gibidir, port kapı numarasıdır, subnet mahalle sınırıdır, gateway şehir dışına çıkan ana yoldur. Routing ise paketin hangi yoldan gideceğine karar veren trafik bilgisidir.",
    "Bir ofiste herkes 'internet yok' diyordu. Oysa internet vardı; belirli bir VLAN'daki makineler gateway'e ulaşamıyordu. Sorun dünyayla bağlantı değil, binanın içindeki yönlendirmeydi. Ağ böyle bir alandır: dışarıdan tek sorun görünür, içeride katman katman ayrılır.",
    "TCP/IP, port, subnet ve routing öğrenirken hedefin ağ mühendisi olmak zorunda değil. Ama bir API çalışmıyorsa bunun koddan mı, DNS'ten mi, firewall'dan mı, rotadan mı kaynaklandığını ayıracak kadar ağ bilmek her teknik kariyeri güçlendirir."
  ],
  "asama-1-bilgisayar-temelleri-7": [
    "Tarayıcıya bir adres yazdığında küçük bir sefer başlar. Önce DNS'e sorulur: bu isim hangi IP'ye gidiyor? Sonra bağlantı kurulur, HTTPS ile güvenli kanal açılır, sunucu isteği alır, cevap döner, tarayıcı sayfayı çizer. Kullanıcı bir saniyelik bekleme görür; arkada küçük bir lojistik operasyon vardır.",
    "Bir kamu portalı sabah açılmadığında herkes uygulama çöktü sandı. Uygulama ayaktaydı, veritabanı sağlıklıydı, sorun süresi dolmuş sertifikaydı. HTTPS'in o küçük kilit simgesi yalnız süs değil; güvenin teknik karşılığıdır. DNS kaydı, TTL, sertifika zinciri ve HTTP durum kodları bu yüzden sahada hayatidir.",
    "Mülakatta bu konuyu anlatırken bir isteğin yolculuğunu hikâye et. Alan adı çözülür, TCP bağlantısı kurulur, TLS el sıkışması yapılır, HTTP isteği gider, cevap koduyla döner. Bu akışı anlatabilen kişi web'i yalnız ekran sanmaz."
  ],
  "asama-1-bilgisayar-temelleri-8": [
    "Git, kodun hafızasıdır; GitHub ise o hafızanın ekip masasına açılmış halidir. Bir projede en tehlikeli cümlelerden biri 'kim değiştirdi hatırlamıyorum'dur. Git bu cümleyi zayıflatır. Commit, branch ve pull request yalnız komut değil, ekip içinde güven kurma biçimidir.",
    "Bir canlıya geçişte hata çıktı. Panik büyümeden Git geçmişine bakıldı, son değişiklik bulundu, pull request tartışması okundu, rollback kararı verildi. O gün Git'in sadece geliştirici aracı olmadığını gördüm; doğru kullanıldığında kriz kısaltan kurumsal hafızadır.",
    "İyi Git kullanımı küçük commit, anlamlı mesaj, temiz branch, kod inceleme ve geri dönüş planı demektir. Mülakatta `merge conflict` anlatırken bile insan ilişkisini unutma: iki kişi aynı satıra dokunduğunda teknik araç kadar iletişim de gerekir."
  ],
  "asama-1-bilgisayar-temelleri-9": [
    "Temel kavramlar mülakatta çoğu zaman adayın sesini ölçmek için sorulur. 'RAM nedir?' sorusu kolaydır; ama aday RAM'i çalışma masası, disk'i arşiv, CPU'yu işlemci memur gibi anlatıp sonra performans örneğine bağlayabiliyorsa konuşma derinleşir.",
    "Ben iyi adayların ortak bir alışkanlığını gördüm: bilmedikleri yerde dururlar ama bildikleri kısmı düzenli anlatırlar. 'Bunu ezbere söylemeyeyim, ama şöyle kontrol ederim' cümlesi bazen özgüvenli uydurmadan daha güçlüdür. Teknik dünya her şeyi bilenleri değil, doğru kanıta yürüyenleri sever.",
    "Bu bölümde kazanılacak refleks basit: tanım ver, örnek kur, sınırı söyle, arıza halinde neye bakacağını anlat. Böyle cevap veren kişi temel konularda bile üst seviye olgunluk gösterir."
  ],
  "asama-2-programlama-1": [
    "Programlama, bilgisayara emir yağdırmak değil, dağınık bir problemi adım adım yürünebilir hale getirmektir. İlk yıllarda herkes dili öğrenmeye çalışır; yıllar geçince asıl meselenin değişken adı, sınır koşulu, veri şekli ve okunabilir akış olduğunu anlarsın.",
    "Bir stajyerin yazdığı küçük betik bir birimin üç saatlik işini beş dakikaya indirmişti. Kod çok parlak değildi ama problem doğru anlaşılmıştı: Excel dosyasını oku, hatalı satırı ayır, sonucu raporla. Programlama böyle başlar; küçük bir sıkıntıyı disiplinli bir akışa çevirirsin.",
    "Mülakatta iyi programcı yalnız syntax bilmez. Problemi böler, varsayımlarını söyler, test örneği verir, hata ihtimalini düşünür. Kod satırları bu düşüncenin kaydıdır."
  ],
  "asama-2-programlama-2": [
    "Python'un güzelliği, yeni başlayan kişiyi fazla tökezletmeden düşünceye yaklaştırmasıdır. Değişkenler isimlendirilmiş kutular, koşullar yol ayrımları, döngüler tekrar eden işlerdir. Basit görünürler ama bütün büyük sistemlerin içinde bu küçük taşlar vardır.",
    "Bir otomasyon işinde yüzlerce dosyanın adı değiştirilecek, içinden belirli alanlar okunacak, sonuç bir CSV'ye yazılacaktı. Python burada ağır bir mühendislik gösterisi yapmadı; sade bir yardımcı gibi işi aldı ve bitirdi. Bazen iyi araç, seni kendisiyle uğraştırmayan araçtır.",
    "Temel Python sorularında amaç `for` döngüsünü ezbere duymak değildir. Adayın veriyi nasıl tuttuğu, koşulu nasıl netleştirdiği, boş liste veya hatalı tip gelince ne yapacağı görülmek istenir."
  ],
  "asama-2-programlama-3": [
    "Fonksiyon yazmak, koda küçük sorumluluk odaları açmaktır. Her şey tek dosyada, tek blokta durduğunda kod ilk gün hızlı ilerler; üçüncü hafta kimse nereye dokunacağını bilemez. Fonksiyonlar ve modüller yazılımın nefes alma aralıklarıdır.",
    "Bir bakım projesinde yüzlerce satırlık bir fonksiyon gördüm; içinde e-posta gönderiyor, veritabanı yazıyor, dosya siliyor, rapor hazırlıyordu. Hata çıktığında herkes o fonksiyonun etrafında dolaşıyordu. Parçalara ayırınca yalnız kod değil, ekip de rahatladı.",
    "Okunabilir kod iyi niyet meselesi değildir; kurumsal zorunluluktur. Bir gün senin yazdığın kodu gece nöbetindeki başka biri okuyacak. O kişiye küçük bir iyilik yap: isimleri açık seç, fonksiyonları kısa tut, modülü sorumluluğuna göre ayır."
  ],
  "asama-2-programlama-4": [
    "OOP'yi ilk öğrenenlerin çoğu her şeyi sınıfa çevirmek ister. Sonra gerçek projede öğrenirsin: iyi nesne tasarımı gösterişli kalıtım ağacı değil, sorumluluğu doğru yerde tutma sanatıdır. Sınıf, ilgili veriyle davranışı aynı sınır içinde topluyorsa değerlidir.",
    "Bir ödeme akışında `Payment`, `Invoice`, `Customer` ve `Refund` sınıfları yalnız teknik adlar değildir; iş dünyasının kavramlarıdır. Yanlış sınır çizilirse iade işlemi fatura kodunu bozar, müşteri güncellemesi ödeme geçmişine dokunur. OOP burada düzen sağlar.",
    "Mülakatta kapsülleme, kalıtım, polimorfizm sorulursa tanım ver ama orada kalma. Bir servis büyüdüğünde hangi tasarımın bakım maliyetini azalttığını anlat. Tecrübe, soyut kavramı somut acıya bağlayabilmektir."
  ],
  "asama-2-programlama-5": [
    "Hata yönetimi, yazılımın kibri bırakıp dünyanın kusurlu olduğunu kabul etmesidir. Dosya olmayabilir, JSON bozuk gelebilir, ağ kopabilir, kullanıcı beklenen alanı boş bırakabilir. İyi kod yalnız güzel günde değil, kötü günde de anlaşılır davranır.",
    "Bir entegrasyon gecesinde karşı sistem bazen sayı, bazen metin gönderiyordu. Kod ilk başta patladı; sonra gelen veriyi doğrulayan, hatalı kaydı ayıran ve loglayan küçük bir katman eklendi. Kriz, veri formatının sözleşme kadar önemli olduğunu öğretti.",
    "JSON basittir ama hafife alınmaz. Alan adı, tip, tarih formatı, boş değer ve sürüm değişikliği konuşulmadan entegrasyon yapılmaz. Mülakatta bu konuyu anlatırken 'hatalı veri gelirse ne yaparım?' sorusunu mutlaka cevapla."
  ],
  "asama-2-programlama-6": [
    "API kullanmak, başka bir sistemin kapısını çalmaktır. Kapıyı doğru adrese çalman, doğru kimlikle gitmen, cevabı anlaman ve kapı açılmazsa neden açılmadığını okuyabilmen gerekir. HTTP isteği göndermek teknik olarak kolaydır; üretim kalitesinde kullanmak daha dikkatli iştir.",
    "Bir ekip entegrasyonun çalışmadığını söylüyordu. Sorun karşı tarafta sanıldı; sonra görüldü ki hata kodu okunmuyor, her başarısız cevap aynı genel mesaja düşüyordu. API cevaplarını iyi okumayan sistem, karşı taraf konuşsa bile duymayan insan gibidir.",
    "Mülakatta API kullanımı sorulursa `requests.get` örneği yetmez. Timeout, retry, auth header, durum kodu, rate limit ve loglama konuş. Böylece yalnız istek atan değil, entegrasyonu yaşatabilecek biri gibi görünürsün."
  ],
  "asama-2-programlama-7": [
    "SQL öğrenmek, kurumun hafızasına soru sormayı öğrenmektir. Tablo raf, satır kayıt, kolon özellik, JOIN ise ayrı raflardaki bilgiyi anlamlı biçimde birleştirme sanatıdır. Yanlış JOIN bazen yanlış rapordan daha tehlikelidir; çünkü rakam doğruymuş gibi görünür.",
    "Bir raporda başvuru sayıları iki kat görünüyordu. Kimse veritabanının bozuk olduğunu düşünmedi; sorguya bakıldı ve bire-çok ilişki yanlış bağlanmıştı. SQL böyle öğretir: veri yalan söylemez ama sen yanlış sorarsan yanlış cevap üretir.",
    "Mülakatta index sorusu gelirse sadece hızlandırır deme. Hangi sorguyu hızlandırır, yazma maliyetini nasıl etkiler, neden her kolona index konmaz, query plan ne işe yarar? Bu ayrıntılar seni ezberden çıkarır."
  ],
  "asama-2-programlama-8": [
    "PostgreSQL, birçok kurumda ana defterdir. Sipariş, başvuru, ödeme, envanter veya personel kaydı burada duruyorsa sistemin gerçeği de buradadır. Bu yüzden veritabanı yalnız geliştiricinin bağlantı string'i değildir; denetim, yedek, yetki ve tutarlılık meselesidir.",
    "Bir gece veri aktarımı yapılırken transaction kullanılmadığı için kayıtların yarısı geçmiş, yarısı kalmıştı. Ekran ilk bakışta çalışıyor görünüyordu ama kurumun hafızası ikiye bölünmüştü. Transaction kavramı o gün ders kitabından çıkıp masaya oturdu.",
    "PostgreSQL anlatırken ACID, constraint, foreign key, index ve backup kavramlarını iş etkisiyle bağla. Veri bütünlüğü bozulduğunda sorun teknik kalmaz; rapora, faturaya, vatandaş işlemine ve yöneticinin güvenine dokunur."
  ],
  "asama-2-programlama-9": [
    "Python ekosistemi büyük bir atölye gibidir. FastAPI ile servis yazarsın, Pandas ile veriyi yoğurursun, PyTorch ve TensorFlow ile model denersin. Ama atölyedeki her alet aynı işe yaramaz; iyi geliştirici hangi aleti ne zaman eline alacağını bilir.",
    "Bir veri ekibi ilk model denemesini notebook'ta yaptı, sonuç etkileyiciydi. Sonra aynı işi API haline getirmek, loglamak, versiyonlamak ve zamanında cevap döndürmek gerekti. Araştırma kodu ile üretim servisi arasındaki mesafe orada görünür oldu.",
    "Bu başlık hazırlık başlığıdır: Python temelini sağlam tut, veri yapısını oku, API yazmayı öğren, sonra yapay zekâ araçlarına geç. Temeli zayıf olan kişi güçlü kütüphaneyi de oyuncak gibi kullanır."
  ],
  "asama-2-programlama-10": [
    "Portföy, 'biliyorum' cümlesinin çalışan karşılığıdır. Küçük ama tamamlanmış bir proje, yarım bırakılmış on parlak fikirden daha değerlidir. API'si olan, veritabanı kullanan, README'si düzgün, hata durumları düşünülmüş bir proje mülakatta senin adına konuşur.",
    "Bir aday basit bir görev takip uygulaması göstermişti. Tasarım büyüleyici değildi ama migration dosyaları vardı, testler çalışıyordu, API hataları anlamlıydı, Docker ile kalkıyordu. O proje şunu söylüyordu: bu kişi yalnız kod yazmamış, kodun yaşayacağı ortamı düşünmüş.",
    "Kod mülakatına hazırlanırken her projeye küçük bir hikâye yaz: problem neydi, nasıl böldün, hangi teknolojiyi neden seçtin, nerede zorlandın, neyi farklı yapardın? Bu hikâye seni CV satırından çıkarıp sahici adaya çevirir."
  ],
  "asama-3-web-api-1": [
    "Web isteği küçük bir yolculuktur: tarayıcı adresi çözer, güvenli bağlantı kurar, backend'e seslenir, cevap alır ve ekranda bir dünya kurar. Kullanıcı yalnız butona basar; mühendis o butonun arkasındaki yolu görür.",
    "Bir kurum portalında başvuru butonu çalışmıyordu. Önce frontend suçlandı, sonra API, sonra veritabanı. Gerçek sebep CORS ayarında yapılan küçük bir değişiklikti. Web böyle öğretir: ekranın gördüğü hata, arka taraftaki zincirin herhangi bir halkasından gelebilir.",
    "Bu başlıkta hedef, tarayıcıdan backend'e kadar isteğin hikâyesini anlatabilmektir. Bu hikâyeyi bilen kişi debugging yaparken rastgele değil, katman katman ilerler."
  ],
  "asama-3-web-api-2": [
    "HTML iskeleti kurar, CSS o iskelete duruş verir, JavaScript sahneye hareket getirir. İyi frontend, yalnız güzel görünen ekran değildir; kullanıcının ne yapacağını sezdiği, hata olunca kaybolmadığı, yavaş ağda bile sabrını tüketmeyen deneyimdir.",
    "Bir başvuru formunda kırmızı uyarı metni vardı ama ekran okuyucu onu duymuyordu. Tasarım ekibi için küçük görünen bu eksik, görme engelli kullanıcı için kapalı kapıydı. Frontend uzmanlığı burada başlar: piksel kadar erişilebilirlik de önemlidir.",
    "Mülakatta HTML-CSS-JS anlatırken üç katmanı ayır. HTML anlam, CSS düzen, JavaScript davranış üretir. Bu ayrımı temiz kuran aday frameworklerden önce web'in kendisini anladığını gösterir."
  ],
  "asama-3-web-api-3": [
    "Backend, kurumun iş kurallarının mutfağıdır. Ekranda tek bir 'Kaydet' butonu görünür; arkada yetki kontrolü, doğrulama, veri yazma, bildirim, log ve hata yönetimi sırayla çalışır.",
    "Bir ödeme ekranında frontend doğru çalışıyordu ama backend aynı isteği iki kez işleyip çift kayıt açıyordu. Sorun tasarımdaydı: idempotency düşünülmemişti. Backend yazmak, gelen isteğe cevap vermekten çok daha fazlasıdır; sonuçların güvenilirliğini korumaktır.",
    "Endpoint, controller ve servis ayrımını anlatırken restoran mutfağı örneği işe yarar. Garson siparişi alır, mutfak iş kuralını uygular, kasa kaydı tutar. Herkes aynı işi yaparsa mutfak karışır."
  ],
  "asama-3-web-api-4": [
    "REST API, sistemler arasındaki anlaşma dilidir. Kaynaklar adlandırılır, HTTP metotları niyeti söyler, durum kodları sonucu açıklar. İyi API, karşı ekibin tahmin yapmasına gerek bırakmaz.",
    "Bir entegrasyonda her hata 200 OK dönüyordu; gövdede küçük bir `success:false` alanı vardı. Karşı sistem bunu başarı sandı ve işler sessizce birikti. Durum kodları süs değildir; operasyonun erken uyarı sistemidir.",
    "REST tasarımı sorulunca kaynak, metot, status code, pagination, versioning ve hata formatını birlikte anlat. API sözleşmesi iyi yazılırsa ekipler birbirinin niyetini daha az okumaya çalışır."
  ],
  "asama-3-web-api-5": [
    "Kimlik ve oturum, dijital binanın kapılarıdır. JWT, OAuth2, cookie ve session farklı anahtar türleri gibi çalışır. Hepsi kapı açabilir; ama hangi kapıya, ne kadar süreyle, hangi iz bırakılarak açtığı asıl meseledir.",
    "Bir uygulamada token süresi çok uzundu. Kullanıcı rahat ediyordu ama ele geçirilen bir token günlerce geçerli kalıyordu. Güvenlik çoğu zaman konforla pazarlık eder; iyi mimar bu pazarlığı görünür yapar.",
    "Mülakatta JWT anlatırken imza, süre, refresh, saklama yeri ve iptal stratejisini konuş. 'Stateless' kelimesi güzel durur ama yetki sınırı yanlışsa güzel kelime kötü olayı kurtarmaz."
  ],
  "asama-3-web-api-6": [
    "Redis, cache ve CDN hızın farklı yüzleridir. Ama hız her zaman masum değildir; eski fiyat göstermek, yanlış stok sunmak veya süresi dolmuş oturumu yaşatmak kullanıcı güvenini kırabilir.",
    "Bir kampanya gününde ürün kartları çok hızlı açılıyordu ama fiyat değişikliği cache'ten dolayı geç yansıyordu. Teknik ekip sistemi hızlandırmıştı, operasyon ekibi krizi yaşıyordu. Cache tasarımı bu yüzden iş kuralıyla birlikte yapılır.",
    "Bu başlığı anlatırken hangi verinin cache'e uygun olmadığını söyleyebilmek önemlidir. Ana kayıt nerede, cache ne zaman temizlenir, TTL kaçtır, invalidation nasıl yapılır? Olgun cevap burada başlar."
  ],
  "asama-3-web-api-7": [
    "Mesaj kuyruğu, işleri elden ele bekletmeden sıraya alan banttır. Ödeme olur, fatura, bildirim, kargo ve raporlama kendi zamanında çalışır. Servisler birbirinin nefesini tutmadan ilerler.",
    "Bir sistemde kuyruk görünmez biçimde büyümüş, kullanıcıya bildirimler saatler sonra gitmişti. Uygulama ayaktaydı ama iş süreci gecikiyordu. Kuyruklar böyle tuhaftır; kapı açıktır, içeride sıra uzamıştır.",
    "Kafka ve RabbitMQ anlatırken yalnız hız veya ölçek değil, retry, dead-letter, ordering, idempotency ve izleme konuş. Mesaj mimarisi güvenilirlik disiplinidir."
  ],
  "asama-3-web-api-8": [
    "Test, logging ve observability sistemin kendi hakkında konuşmasını sağlar. Test gelecekteki kırılmayı erken yakalar, log geçmişe ışık tutar, metrik şu anki nabzı gösterir.",
    "Bir hata yalnız canlıda çıkıyordu. Loglarda kullanıcı id yoktu, trace yoktu, metrikler genel ortalamayı gösteriyordu. Ekip sorunu saatlerce aradı. O gün herkes şunu gördü: iz bırakmayan sistem, kendi savunmasını yapamayan sistemdir.",
    "Mülakatta observability anlatırken üçlü ayrımı kur: log olay anlatır, metrik sayı verir, trace yolculuğu gösterir. Bunlar birlikte olursa karanlık azalır."
  ],
  "asama-3-web-api-9": [
    "Docker geliştirme ortamını daha taşınabilir hale getirir. Yeni gelen geliştiricinin günlerce kurulumla uğraşması yerine servisler tek komutla kalkabilir. Bu, ekip hızına doğrudan etki eder.",
    "Bir projede 'bende çalışıyor' cümlesi o kadar sık duyuluyordu ki sonunda herkesin ortamı container ile eşitlendi. Cümle tamamen ölmedi ama sesi azaldı. Docker'ın küçük mucizesi budur: ortam farkını tartışma konusu olmaktan çıkarır.",
    "Docker anlatırken image, container, volume, network ve registry kavramlarını bir geliştirme hikâyesine bağla. Container kalıcı veri yeri değildir; bu ayrımı bilen aday üretime daha yakın düşünür."
  ],
  "asama-3-web-api-10": [
    "Web mülakatları genellikle adayın uçtan uca düşünebilmesini ölçer. Bir istek nereden gelir, nasıl doğrulanır, nerede cache'lenir, hata nasıl döner, trafik artınca ne olur? Bu sorular tek tek değil, aynı akışın parçalarıdır.",
    "İyi aday, API tasarımını anlatırken güvenliği unutmaz; cache anlatırken tutarlılığı söyler; Docker anlatırken log ve secret konusunu açar. Görüşmeci çoğu zaman tam da bu geçişleri dinler.",
    "Cevap verirken küçük bir sistem seç: kullanıcı giriş yapar, ürün arar, sepete ekler, ödeme yapar. Sonra her teknolojiyi bu hikâyede yerine koy. Böylece cevap ezber değil mimari okuma gibi duyulur."
  ],
  "asama-4-ai-temelleri-1": [
    "Yapay zekâya sağlıklı giriş, model büyüsünü biraz söndürmekle başlar. Model önemlidir ama iş problemi, veri kalitesi, insan onayı ve yanlış kararın bedeli daha önemlidir. Demo etkileyebilir; üretim sistemi hesap sorar.",
    "Bir kurumda belge özetleme denemesi çok beğenilmişti. Sonra model eski yönetmeliğe dayanarak cevap verdi. Herkes şunu öğrendi: yapay zekâ hızlı konuşur ama kaynağın güncelliğini sen sağlamazsan hızlıca yanlış yere götürür.",
    "Bu başlıkta amaç korkmak veya büyülenmek değil. Yapay zekâyı, veriyle karar arasına giren güçlü ama denetlenmesi gereken bir araç olarak okumaktır."
  ],
  "asama-4-ai-temelleri-2": [
    "Makine öğrenmesi, bilgisayara her kuralı tek tek yazmak yerine örneklerden örüntü buldurmaktır. Geçmiş veriyi verir, hedefi gösterir, modelin yeni durumda tahmin yapmasını beklersin.",
    "Bir çağrı merkezinde hangi taleplerin gecikeceği tahmin edilmek isteniyordu. İlk model iyi görünüyordu ama eğitim verisinde gelecekte bilinmeyecek alanlar vardı. Buna veri sızıntısı denir; sınavda cevap anahtarını çaktırmadan masaya koymak gibidir.",
    "Mülakatta makine öğrenmesi anlatırken eğitim, test, validation, overfitting ve feature kavramlarını iş örneğine bağla. Model başarısı yalnız skor değil, gerçek hayatta doğru genelleme yapabilmesidir."
  ],
  "asama-4-ai-temelleri-3": [
    "Derin öğrenme ve sinir ağları çok katmanlı temsil öğrenme işidir. Görüntü, ses ve metin gibi karmaşık verilerde gücünü buradan alır. Ama katman sayısı arttıkça sorumluluk da artar: veri, maliyet ve açıklanabilirlik masaya gelir.",
    "Bir görüntü sınıflandırma projesinde model laboratuvarda çok başarılıydı, sahada düştü. Çünkü eğitim görselleri düzenli ışıkta, saha görselleri tozlu ve eğikti. Model dünyayı değil, gördüğü verinin alışkanlığını öğrenmişti.",
    "Sinir ağı anlatırken ağırlık, loss, optimizer ve backpropagation kavramlarını basitleştir; sonra mutlaka veri çeşitliliğine gel. Derin model kötü veriyi affetmez, sadece daha pahalı öğrenir."
  ],
  "asama-4-ai-temelleri-4": [
    "Veri hazırlığı yapay zekânın mutfak temizliğidir; kimse fotoğrafını paylaşmaz ama yemek orada belirlenir. Eksik alan, yanlış etiket, tekrar kayıt, dengesiz sınıf ve veri sızıntısı modeli sessizce bozar.",
    "Bir projede modelin başarısı çok yüksekti. Sonra anlaşıldı ki aynı kişinin kayıtları hem eğitim hem test tarafına düşmüş. Model genelleme yapmamış, tanıdığı örneği yeniden görmüştü. Güzel skor bir anda utandırıcı hale geldi.",
    "Bu başlıkta uzmanlık, veriye şüpheyle ama saygıyla bakmaktır. Temizlik, etiketleme, train-test ayrımı ve kalite kontrol yapılmadan model eğitmek, temeli atılmamış binaya kat çıkmaya benzer."
  ],
  "asama-4-ai-temelleri-5": [
    "Token, modelin metni küçük parçalara ayırma biçimidir. Embedding ise metni anlam benzerliği kurulabilecek sayısal uzaya taşır. İnsan cümle okur; model sayılarla ilişki kurar.",
    "Bir kurum asistanında kullanıcı 'izin dilekçesi' arıyordu, belgede 'mazeret başvurusu' yazıyordu. Kelime aynı değildi ama anlam yakındı. Embedding burada klasik aramadan ayrılır; aynı kelimeyi değil, yakın anlamı bulmaya çalışır.",
    "Mülakatta token ve embedding anlatırken maliyeti de unutma. Uzun belge daha çok token, daha çok gecikme ve maliyet demektir. Anlam araması güçlüdür ama belge parçalama kötü yapılırsa doğru cevabı yanlış rafta arar."
  ],
  "asama-4-ai-temelleri-6": [
    "RAG, modele kurumun raflarından belge getirip 'cevabını buna dayanarak ver' demektir. Güzel tarafı şudur: model her şeyi ezberlemek zorunda kalmaz. Riskli tarafı da şudur: yanlış rafı getirirsen yanlış cevap daha inandırıcı olur.",
    "Bir mevzuat asistanında model doğru üslupta ama eski genelgeye göre cevap veriyordu. Sorun modelde değil, arama ve belge güncelliğindeydi. RAG projeleri böyle öğretir: cevap kalitesi, retrieval kalitesiyle başlar.",
    "İyi RAG tasarımı belge toplama, chunking, embedding, arama, kaynak gösterme ve değerlendirmeyi birlikte düşünür. Sadece PDF yüklemekle kurumsal bilgi asistanı yapılmaz."
  ],
  "asama-4-ai-temelleri-7": [
    "Model değerlendirme, yapay zekâya duyulan heyecanı ölçülebilir zemine indirir. Doğruluk, halüsinasyon, bias, tutarlılık ve insan onayı konuşulmadan model güvenilir hizmete dönüşmez.",
    "Bir chatbot pilotunda kullanıcılar cevapları beğeniyordu ama uzmanlar kaynakların yarısının zayıf olduğunu fark etti. Memnuniyet tek başına başarı değildir; özellikle kamu, sağlık, finans ve savunma gibi alanlarda yanlış cevap pahalıdır.",
    "Değerlendirme seti hazırlamak sıkıcı görünür ama projenin sigortasıdır. Hangi sorular kritik, hangi cevap kabul edilebilir, model ne zaman 'bilmiyorum' demeli? Bunlar yazılmadan üretime çıkmak kumardır."
  ],
  "asama-4-ai-temelleri-8": [
    "PyTorch ve TensorFlow araştırma fikrini çalışan modele çevirmek için kullanılan güçlü araçlardır. Notebook'ta deneme yapmak kolaydır; aynı modeli izlenen, sürümlenen, tekrar üretilebilir hale getirmek ayrı iştir.",
    "Bir ekip PyTorch ile iyi sonuç aldı ama modeli başka makinede çalıştırınca bağımlılık farkı yüzünden sonuçlar değişti. Araştırma defteriyle üretim düzeni arasındaki mesafe burada ortaya çıkar.",
    "Bu araçları öğrenirken tensor, dataset, dataloader, eğitim döngüsü ve model kaydetme konularını gerçek küçük projeyle çalış. Kütüphane adını bilmek değil, deneyin tekrar edilebilir olması seni güçlendirir."
  ],
  "asama-4-ai-temelleri-9": [
    "AI mülakatında en kötü tuzak, moda kelimeleri arka arkaya dizmektir. 'RAG, embedding, transformer' demek kolaydır; bunların hangi problemi çözdüğünü ve nerede kırıldığını anlatmak daha değerlidir.",
    "İyi aday küçük bir örnek kurar: kurum belgeleri var, kullanıcı soru soruyor, belgeler parçalanıyor, embedding üretiliyor, en yakın parçalar geliyor, model cevap veriyor, kaynak gösteriliyor, cevap değerlendiriliyor. Görüşmeci bu akışta gerçek anlayışı duyar.",
    "Cevaplarında daima üçlü denge kur: teknik mekanizma, veri riski, iş etkisi. Yapay zekâ alanında olgunluk, heyecanı söndürmeden denetim kurabilmektir."
  ],
  "asama-5-llm-gelistirme-1": [
    "LLM geliştirme, sohbet kutusuna güzel prompt yazmaktan çok daha geniştir. Kurumsal üründe kullanıcı kim, model hangi veriye erişiyor, cevap nerede loglanıyor, yanlış cevap kime zarar verir, maliyet nasıl izlenir soruları gelir.",
    "Bir demo odasında herkes modelin akıcı cevabına hayran kalmıştı. Sonra güvenlik ekibi tek soru sordu: bu cevap hangi belgeye dayanıyor? O soru odanın havasını değiştirdi. LLM ürünleri şiir gibi konuşabilir ama kurumda kanıt ister.",
    "Bu rota, modeli büyülü danışman değil kontrollü bileşen olarak ele alır. Sohbetten ürüne geçiş, kaynak, yetki, araç, değerlendirme ve insan onayıyla olur."
  ],
  "asama-5-llm-gelistirme-2": [
    "OpenAI API kullanmak teknik olarak birkaç satırdır; doğru kullanmak ürün disiplinidir. Model seçimi, mesaj yapısı, token maliyeti, çıktı formatı, retry ve hata yönetimi baştan düşünülür.",
    "Bir ekip her kullanıcı mesajını olduğu gibi modele gönderiyordu. Maliyet hızla büyüdü, bazı hassas bilgiler de gereksiz yere dışarı gidiyordu. API entegrasyonu burada ders verdi: modele ne göndermediğin de en az ne gönderdiğin kadar önemlidir.",
    "Mülakatta API anlatırken yalnız çağrı örneği verme. Sistem mesajı, response schema, rate limit, timeout, logging, maliyet alarmı ve veri maskeleme konuş. Bu ayrıntılar demo geliştiricisini ürün geliştiricisinden ayırır."
  ],
  "asama-5-llm-gelistirme-3": [
    "Prompt tasarımı, modele bağırarak daha iyi cevap alma sanatı değildir. Rol, bağlam, örnek, sınır, çıktı biçimi ve başarısızlık davranışı netleştirilir. İyi prompt, iyi iş talimatına benzer.",
    "Bir asistan sürekli uzun cevap veriyordu. Prompt'a 'kısa cevap ver' yazıldı, düzelmedi. Sonra çıktı şeması, hedef kullanıcı, örnek cevap ve kaynak zorunluluğu eklendi. Model sonunda kurumun istediği ritme yaklaştı.",
    "Prompt mülakatında güçlü cevap, deneme yanılmayı sistematik hale getirmektir. Versiyon tut, örnek setle değerlendir, kötü cevabı kaydet, prompt'u kanıtla iyileştir. Prompt da yazılım gibi yönetilir."
  ],
  "asama-5-llm-gelistirme-4": [
    "Function calling ve tool use, modelin yalnız konuşmasını değil, iş yapmasını sağlar. Takvimden uygun saat bulabilir, veritabanından kayıt çekebilir, hesaplama yapabilir. Ama iş yapma yetkisi gelince risk de büyür.",
    "Bir ajan yanlış yorumladığı talep yüzünden gereksiz kayıt açıyordu. Model zeki görünüyordu ama araç yetkisi fazla genişti. Tool use dersini sert verir: modelin niyetini değil, izinlerini tasarlarsın.",
    "İyi tasarımda araç şeması dar, doğrulama açık, hassas işlem insan onayına bağlıdır. Mülakatta bunu anlatan aday LLM'i oyuncak değil, kontrollü otomasyon bileşeni olarak gördüğünü gösterir."
  ],
  "asama-5-llm-gelistirme-5": [
    "Ollama ve yerel modeller mahremiyet ve deneme özgürlüğü sağlar. Kurum içi belgelerle çalışırken dış API kullanmak istemeyebilirsin; yerel model burada cazip görünür. Ama yerel çalıştırmak sorumluluğu da yerelleştirir.",
    "Bir ekip yerel modeli kurdu, ilk hafta mutluydu. İkinci hafta GPU yetmedi, üçüncü hafta kalite farkı tartışıldı, dördüncü hafta model güncelleme süreci soruldu. Yerel model kararının teknik olduğu kadar işletme kararı olduğu anlaşıldı.",
    "Ollama anlatırken mahremiyet, gecikme, donanım, model lisansı, kalite ve bakım dengesini kur. Yerel model romantizmi güzel olabilir; kurumda sürdürülebilirlik daha güzeldir."
  ],
  "asama-5-llm-gelistirme-6": [
    "MCP mantığı, modellerin araçlara ve veri kaynaklarına daha düzenli bağlanması fikridir. Modelin her entegrasyon için ayrı ayrı yamalanması yerine, araçların daha anlaşılır bir sözleşmeyle sunulması hedeflenir.",
    "Bir kurumda asistan dosya sistemi, issue sistemi ve doküman arşiviyle konuşmak istiyordu. Her bağlantı ayrı yazıldığında bakım zorlaştı. Standart bağlama fikri burada değer kazandı: araçların ne yaptığı, hangi izinle çalıştığı ve nasıl kayıt bıraktığı net olmalıydı.",
    "MCP gibi yaklaşımları anlatırken moda kelimeye kapılma. Asıl konu güvenli araç çağırma, yetki sınırı, gözlemlenebilirlik ve ajanların kurum sistemleriyle sorumlu biçimde çalışmasıdır."
  ],
  "asama-5-llm-gelistirme-7": [
    "Kurumsal RAG tasarımı, belgeyi yükleyip modele okutmak değildir. Belge nereden geliyor, güncel mi, kim görebilir, nasıl parçalanacak, hangi embedding modeli kullanılacak, cevapta kaynak gösterilecek mi? Bütün bu sorular tasarımın parçasıdır.",
    "Bir bilgi asistanı gizli dokümanı yetkisiz kullanıcıya özetlediğinde sorun modelde değil, retrieval katmanındaydı. Yetki filtresi aramadan önce uygulanmalıydı. Kurumsal RAG'de güvenlik sonradan eklenen şerit değil, yolun kendisidir.",
    "İyi RAG sistemi kaynak gösterir, bilmiyorsa durur, kalite setiyle ölçülür, belge güncellemelerini takip eder. Böyle sistem yöneticinin önüne demo değil, işletilebilir ürün olarak çıkar."
  ],
  "asama-5-llm-gelistirme-8": [
    "LLMOps, LLM ürününün canlıda yaşama disiplinidir. Prompt değişti mi, model versiyonu ne oldu, cevap kalitesi düştü mü, maliyet arttı mı, kullanıcı hangi cevabı beğenmedi? Bunlar izlenmezse ürün sis içinde yürür.",
    "Bir asistan ilk ay iyiydi, ikinci ay cevapları uzamaya başladı. Kimse prompt değişikliğini kaydetmemişti. Küçük bir ayar, kullanıcı deneyimini bozmuştu. Sürümleme ve değerlendirme bu yüzden lüks değildir.",
    "LLMOps anlatırken eval set, tracing, feedback, maliyet metriği, prompt versiyonu ve güvenlik olaylarını birlikte konuş. Model canlıya çıktıktan sonra proje bitmez; asıl hayatı başlar."
  ],
  "asama-5-llm-gelistirme-9": [
    "LLM güvenliği, modelin iyi niyetli görünmesine aldanmamaktır. Prompt injection, veri sızıntısı, aşırı yetkili araçlar ve kaynak manipülasyonu gerçek risklerdir. Model nazik konuşabilir ama sistem sınırı teknik olarak çizilmelidir.",
    "Bir kullanıcı belgeye 'önceki talimatları unut' yazmıştı; model bu metni talimat sandı. İnsan için komik görünen şey sistem için güvenlik açığıydı. RAG ve ajan sistemlerinde içerik ile talimat ayrımı hayati hale gelir.",
    "Güvenli tasarımda hassas veri maskelenir, araç yetkileri dar tutulur, kaynaklar doğrulanır, kritik işlem insan onayından geçer. Mülakatta bunu söyleyen aday yapay zekâyı gerçek dünyaya indirmiş olur."
  ],
  "asama-5-llm-gelistirme-10": [
    "LLM portföyünde küçük demo yapmak kolaydır; denetlenebilir sistem göstermek zordur. Görüşmeci artık yalnız sohbet ekranı görmek istemez. Kaynak nerede, eval nasıl, maliyet ne, güvenlik sınırı nasıl çizildi diye sorar.",
    "Güçlü bir portföy projesi şöyle görünür: belgeler yüklenir, chunk'lanır, embedding üretilir, arama yapılır, cevap kaynakla döner, kullanıcı geri bildirim verir, hatalı cevap kaydedilir. Basit ama tam bir akış.",
    "Mülakatta kendi projenin zayıf yerini de söyle. 'Burada reranking eklerdim, burada yetki filtresini güçlendirirdim' cümlesi olgunluk gösterir. Kusursuz demo değil, öğrenebilen mühendis güven verir."
  ],
  "asama-6-devops-bulut-1": [
    "DevOps, yazan ekiple işleten ekip arasındaki duvarı inceltme kültürüdür. Kod canlıda çalışmıyorsa 'benim işim bitti' cümlesi eksiktir. Teslimat, izleme, geri dönüş ve sorumluluk aynı hikâyeye bağlanır.",
    "Bir projede geliştirici ekip cuma akşamı kodu bıraktı, operasyon ekibi gece hata aradı. Sonra ortak pipeline, ortak log ve ortak nöbet düzeni kuruldu. DevOps'un adı havalıdır ama özü basittir: acıyı tek ekibe yıkma.",
    "Bu başlıkta araçlardan önce zihniyet gelir. Docker, Kubernetes ve CI/CD ancak ekip aynı sorumluluğu paylaşıyorsa değer üretir."
  ],
  "asama-6-devops-bulut-2": [
    "Docker imajı tarif, container çalışan yemek gibidir. Volume kalıcı malzeme dolabı, network servislerin konuştuğu koridor, registry ise paketlerin depolandığı raf olur. Bu benzetme basit ama üretimde çok işe yarar.",
    "Bir servis container içinde güzel çalışıyordu ama loglar container silinince kayboluyordu. Ekip ilk kez şunu gördü: container geçicidir, kanıt kalıcı yerde tutulmalıdır. Docker kolaylık getirir ama işletme disiplinini iptal etmez.",
    "Mülakatta Docker anlatırken image-container farkı, Dockerfile katmanları, volume, port mapping ve registry akışını küçük bir servis üzerinden kur. Cevap anında somutlaşır."
  ],
  "asama-6-devops-bulut-3": [
    "Kubernetes, container kalabalığını şehir düzenine sokar. Pod ev, deployment apartman planı, service adres defteri, ingress dış kapı, autoscaling ise yoğunluk artınca yeni daire açma refleksidir.",
    "Bir ekip Kubernetes'e geçti ama resource limit koymadı. Bir servis fazla bellek yiyince komşularını da etkiledi. Platform büyüyünce komşuluk hukuku gerekir; limit, health check ve namespace bu yüzden önemlidir.",
    "Kubernetes mülakatında komut ezberi yerine işletme konuş. Servis nasıl deploy edilir, health check neyi korur, rollback nasıl yapılır, log nereden okunur, cluster maliyeti nasıl izlenir?"
  ],
  "asama-6-devops-bulut-4": [
    "CI/CD hattı yazılımın üretim bandıdır. Kod gelir, test edilir, paketlenir, ortama alınır, gerekirse geri döndürülür. İyi pipeline hızlı olduğu kadar durmayı da bilir.",
    "Bir pipeline test başarısız olduğu halde deploy'a izin veriyordu. Herkes otomasyon var sanıyordu ama otomasyon yanlış kapıyı açıyordu. CI/CD'nin değeri yalnız çalışmasında değil, doğru yerde durmasındadır.",
    "Build, test, artifact, deployment ve rollback kavramlarını bir canlıya geçiş gecesi gibi anlat. Böylece pipeline soyut YAML dosyası olmaktan çıkar, kurumun güvenlik kemeri olur."
  ],
  "asama-6-devops-bulut-5": [
    "Monitoring ve logging, üretim ortamının dili kulağıdır. Metrik sayı verir, log olay anlatır, dashboard tabloyu toplar, alarm dikkat ister. Bunlar yoksa sistem ancak kullanıcı bağırınca fark edilir.",
    "Bir disk dolmuştu ama alarm eşiği yanlış ayarlanmıştı. Sistem günlerce fısıldadı, kimse duymadı; sonunda bağırdı. Monitoring'in görevi sistem bağırmadan önce fısıltıyı yakalamaktır.",
    "İyi alarm az ama anlamlıdır. Her şeyi alarm yapmak ekibi kör eder; hiçbir şeyi alarm yapmamak kurumu sağır eder. Denge burada uzmanlık ister."
  ],
  "asama-6-devops-bulut-6": [
    "Bulut temelleri, başkasının bilgisayarını kiralamaktan ibaret değildir. Region, availability zone, IAM, network, storage ve managed servisler doğru seçilmezse hızla gelen kolaylık hızla gelen karmaşaya dönüşür.",
    "Bir ekip birkaç tıklamayla ortam kurdu, ay sonunda fatura geldiğinde herkes mimariyi yeniden okumaya başladı. Bulutta kapasite almak kolaydır; kapasiteyi yönetmek asıl iştir.",
    "IaaS, PaaS ve SaaS ayrımını anlatırken sorumluluk paylaşımını vurgula. Bulut sağlayıcı her şeyi üstlenmez; erişim, veri, yapılandırma ve maliyet hâlâ senin masandadır."
  ],
  "asama-6-devops-bulut-7": [
    "AWS ve Google Cloud farklı isimler kullanır ama benzer sorulara cevap verir: nerede compute çalışacak, veri nerede duracak, ağ nasıl kurulacak, kim erişecek, nasıl izlenecek?",
    "Bir projede managed database seçildi ve ekip bakım yükünden kurtuldu. Başka bir projede aynı seçim maliyet ve veri konumu yüzünden tartışma yarattı. Bulut servislerinde doğru cevap bağlama göre değişir.",
    "Mülakatta sağlayıcı adı yarıştırma. Compute, storage, network, IAM, managed database ve monitoring ailelerini anlat; sonra hangi ihtiyaca hangi servis mantığının uyduğunu göster."
  ],
  "asama-6-devops-bulut-8": [
    "Yedekleme, felaket günü hatırlanacak bir sigorta değildir; düzenli prova isteyen bir kas hafızasıdır. Yedek var demek yetmez, geri dönebiliyor musun? Asıl soru budur.",
    "Bir kurumda yedekler yıllarca başarıyla alınmış görünüyordu. İlk geri dönüş denemesinde kritik dosyaların eksik olduğu anlaşıldı. Kâğıt üstündeki güven o gün çöktü. Tatbikat yapılmayan yedek, umut dosyasıdır.",
    "RPO, RTO, offsite yedek, immutable backup ve restore testi kavramlarını öğren. İş sürekliliği, teknik planın yönetim masasına çevrilmiş halidir."
  ],
  "asama-6-devops-bulut-9": [
    "Bulut maliyeti sessiz büyür. Bugün açılan küçük test makinesi, unutulan disk, gereksiz log saklama ve yanlış ölçekleme ay sonunda bütçe toplantısında konuşur.",
    "Bir ekip performans sorununu daha büyük makineyle çözdü. Sorun geçti ama fatura katlandı. Sonra sorgu iyileştirildi, cache düzenlendi, kapasite küçüldü. Bulut sana kaynak verir; akıl hâlâ senden beklenir.",
    "Maliyet planında etiketleme, bütçe alarmı, rightsizing, reserved capacity ve kapanma politikaları önemlidir. Hızın faturası yönetilemiyorsa teknik başarı yönetim başarısına dönüşmez."
  ],
  "asama-6-devops-bulut-10": [
    "DevOps mülakatında görüşmeci üretim kokusu arar. Pipeline gördün mü, log okudun mu, rollback yaptın mı, alarm gürültüsüyle uğraştın mı, container neden düştü baktın mı?",
    "İyi cevap küçük bir olay anlatır. Deploy çıktı, hata oranı yükseldi, metrik görüldü, log incelendi, rollback yapıldı, kök neden yazıldı. Bu hikâye, araç adlarından daha çok güven verir.",
    "Üretim ortamını gerçekten işletmiş gibi konuşmak için her teknolojiyi olayla bağla. Docker paketler, Kubernetes yaşatır, CI/CD taşır, monitoring haber verir, ekip karar alır."
  ],
  "siber-guvenlik-1": [
    "Siber güvenlik korku satmak değil, riski görünür hale getirmektir. İyi güvenlikçi her şeye hayır diyen kişi değildir; hangi kapının neden kapalı kalması gerektiğini, hangisinin hangi kayıtla açılabileceğini anlatan kişidir.",
    "Bir kurumda herkes firewall alınınca güvende olduğunu sanıyordu. İlk olayda asıl açığın paylaşılan yönetici parolası olduğu ortaya çıktı. Güvenlik ürünle başlamaz; kimlik, süreç, kayıt ve sorumlulukla başlar.",
    "Bu rotada güvenliği tek başına teknik kale gibi değil, yaşayan kurum düzeni gibi okuyacağız. İnsan davranışı, ağ sınırı, uygulama hatası ve denetim izi aynı masada duracak."
  ],
  "siber-guvenlik-2": [
    "Kimlik güvenliği, dijital kurumun anahtar disiplinidir. IAM kimin kim olduğunu, MFA gerçekten o kişi olup olmadığını, SSO geçişi nasıl sadeleştireceğini, PAM ise güçlü hesapların nasıl dizginleneceğini anlatır.",
    "Bir ayrılan personelin hesabı açık kalmıştı; aylar sonra raporda hâlâ işlem yaptığı görüldü. Ortada kötü niyet olmayabilir ama kontrol eksikliği tek başına risktir. Least privilege bu yüzden kibar bir öneri değil, işletme kuralıdır.",
    "Mülakatta kimlik anlatırken yaşam döngüsünü söyle: işe giriş, rol atama, yetki onayı, düzenli gözden geçirme ve ayrılışta kapatma. Güvenlik çoğu zaman kapıyı açmaktan çok kapıyı zamanında kapatmaktır."
  ],
  "siber-guvenlik-3": [
    "Ağ güvenliği, trafiğin nereden gelip nereye gidebileceğini belirler. Firewall kapı görevlisi, WAF uygulama girişindeki kontrol masası, IDS/IPS şüpheli hareketi fark eden göz, segmentasyon ise binayı yangın bölmelerine ayıran plandır.",
    "Bir zararlı yazılım tek kullanıcı cihazından sunucu ağına kadar ilerledi çünkü ağ düz bir ova gibiydi. Segmentasyon olsaydı ilerleme erken duracaktı. Güvenlikte amaç saldırı hiç olmayacak sanmak değil, olduğunda yayılmasını sınırlamaktır.",
    "Zero Trust cümlesi havalıdır ama özü nettir: kimse varsayılan olarak güvenilir değildir. Kimlik doğrulanır, cihaz durumu kontrol edilir, erişim ihtiyaca göre verilir, kayıt tutulur."
  ],
  "siber-guvenlik-4": [
    "Uygulama güvenliği, hatayı kullanıcıdan önce bulma çabasıdır. OWASP listeleri kuru madde değildir; SQL injection, XSS, broken access control gibi açıklar gerçek para, veri ve itibar kaybına dönüşebilir.",
    "Bir form alanı yalnız metin bekliyordu ama doğrulama sunucu tarafında yapılmamıştı. Test ortamında küçük görünen bu eksik, canlıda veri sızıntısı riski üretti. Güvenli kod, iyi niyetli kullanıcıya göre değil kötü niyetli denemeye göre yazılır.",
    "SAST, DAST ve dependency taraması araçtır; asıl disiplin geliştirici refleksidir. Girdi doğrulama, yetki kontrolü, secret saklama ve hata mesajı tasarımı kodun doğal parçası olmalıdır."
  ],
  "siber-guvenlik-5": [
    "Uç nokta güvenliği, kurumun en dağınık sınırını yönetir: kullanıcı cihazları ve sunucular. EDR davranışı izler, hardening gereksiz kapıları kapatır, patch yönetimi bilinen açıkları azaltır.",
    "Bir laptop güncelleme almadığı için eski bir açıkla ele geçirildi. Sunucu odası kilitliydi ama kurumun kapısı çantada taşınan cihazdan açıldı. Modern güvenlikte sınır yalnız veri merkezi değildir.",
    "Bu başlıkta cihaz envanteri kritik hale gelir. Hangi cihaz var, kimin üzerinde, hangi sürümde, hangi güvenlik ajanı çalışıyor? Bilmediğin şeyi koruyamazsın."
  ],
  "siber-guvenlik-6": [
    "Log, SIEM ve SOC güvenliğin hafızası ve dikkatidir. Tek bir başarısız giriş önemsiz olabilir; aynı kullanıcıdan farklı ülkelerden gelen denemeler, dosya hareketi ve olağandışı trafik birleşince olay görünür olur.",
    "Bir olayda herkes 'ne zaman başladı?' diye sordu. Log saklama süresi kısa olduğu için ilk iz kaybolmuştu. O gün SIEM ekranından çok, log politikasının değeri anlaşıldı.",
    "SOC iyi çalışıyorsa alarmı olaya çevirir, olayı önceliklendirir, ekibe anlaşılır görev verir. Mülakatta bu hattı anlatırken gürültü azaltma ve olay zenginleştirme kavramlarını unutma."
  ],
  "siber-guvenlik-7": [
    "Veri güvenliği, hangi bilginin ne kadar hassas olduğunu bilmekle başlar. Sınıflandırma yoksa herkes kendi sezgisine göre davranır; bu da kurumda görünmez risk üretir.",
    "Bir rapor iyi niyetle dış paydaşla paylaşılmıştı ama içinde maskelenmemiş kişisel veri vardı. Kimse saldırıya uğramamıştı; yine de olay güvenlik ve KVKK meselesine dönüştü. Güvenlik bazen niyeti değil sonucu tartar.",
    "DLP, maskeleme ve erişim kontrolü ancak veri sahibi belliyse anlam kazanır. Hangi veri kimindir, kim görebilir, ne kadar saklanır, nasıl anonimleşir? Bu sorular yöneticinin de sorusudur."
  ],
  "siber-guvenlik-8": [
    "Olay müdahalesi, saldırı anında kahramanlık gösterisi değil, önceden prova edilmiş sakinliktir. Tespit, çevreleme, temizleme ve öğrenme sırayla ilerler; sırayı kaybedersen gürültü büyür.",
    "Bir fidye yazılımı şüphesinde ilk refleks herkesin makinesini kapatmasıydı. Sonra delil kaybı ve yayılım analizi tartışıldı. Olay müdahalesinde hız önemlidir ama kör hız bazen kanıtı yok eder.",
    "İyi olay raporu suçlu aramaz; zaman çizelgesi, etki, kök neden, alınan aksiyon ve kalıcı düzeltmeyi yazar. Krizden öğrenmeyen kurum aynı dersi daha pahalıya tekrar eder."
  ],
  "siber-guvenlik-9": [
    "Siber tatbikat, yangın merdivenini yangın çıkmadan denemektir. Masa başı senaryo bile ekibin kimin kimi arayacağını, hangi loga bakacağını, üst makama ne söyleyeceğini gösterir.",
    "Bir tatbikatta teknik ekip hazırdı ama iletişim planı yoktu. Hizmet etkisi sorulduğunda herkes farklı sayı verdi. Güvenlik krizi yalnız teknik değil, anlatım krizidir de.",
    "Farkındalık eğitimleri de korkutma seansı olmamalıdır. Kullanıcıya suçlu gibi davranırsan saklar; doğru davranışı kolaylaştırırsan erken haber verir."
  ],
  "siber-guvenlik-10": [
    "Siber güvenlik mülakatında iyi aday tehditleri ezberden saymaz; riski iş etkisine bağlar. 'SQL injection veri sızıntısına yol açabilir' der, sonra bunu log, WAF, güvenli kod ve testle nasıl azaltacağını anlatır.",
    "Yönetsel görüşmede aynı cevap başka dile döner: hangi risk kabul edilebilir, hangisi bütçe ister, hangi kontrol denetimde kanıt olur, olay olursa kim konuşur? Güvenlik uzmanı teknik bilir; güvenlik lideri kurum diline çevirir.",
    "Hazırlanırken her güvenlik kavramına bir olay ekle. Kimlik, ağ, uygulama, uç nokta, veri ve SOC başlıklarını gerçek senaryolarla anlatırsan cevapların kuru liste olmaktan çıkar."
  ],
  "buyuk-mimariler-1": [
    "Mimari okuryazarlık, ekrandaki tek işlemin arkasındaki kalabalığı görmektir. Kullanıcı butona basar; CDN, WAF, load balancer, API Gateway, servisler, veritabanı, cache, kuyruk ve log sistemi aynı anda küçük roller oynar.",
    "Bir mimari çizimde kutular güzel duruyordu ama kimse verinin resmi kaydının nerede olduğunu söyleyemedi. O anda çizimin süs olduğu anlaşıldı. İyi mimari görsel, kriz anında yol tarif eder.",
    "Bu rotada amaç ezbere kutu dizmek değil. Her sistemde kullanıcı yolunu, veri yolunu, hata yolunu ve sorumluluk yolunu ayrı ayrı okuyacağız."
  ],
  "buyuk-mimariler-2": [
    "Trendyol benzeri sipariş yolculuğunda kullanıcı ürün arar, sepete ekler, ödeme yapar, kargoyu bekler. Arkada arama servisi, stok, kampanya, ödeme, bildirim ve lojistik entegrasyonu birlikte çalışır.",
    "Bir kampanya gününde arama hızlıydı ama stok senkronu gecikti. Kullanıcı aldığı ürünü sonra iptal mesajıyla gördü. Büyük e-ticarette hız kadar tutarlılık da müşteri güvenidir.",
    "Bu mimaride PostgreSQL resmi siparişi, Redis sepeti, Kafka olayları, Elasticsearch aramayı taşır. Her parçanın görevi karışırsa kriz kimin sorumluluğunda tartışması başlar."
  ],
  "buyuk-mimariler-3": [
    "Ödeme sistemi saniyelerle çalışır ama muhasebe defteri kadar ciddi olmalıdır. Kullanıcı sonuç görmek ister; kurum paranın gerçekten alınıp alınmadığını, tek mi çift mi işlendiğini ve itirazda hangi kanıtın sunulacağını bilmek zorundadır.",
    "Bir timeout olayında banka parayı çekmiş, uygulama siparişi oluşturamamıştı. Sorun saniyelikti ama etkisi finansaldı. Idempotency, mutabakat ve log bu yüzden ödeme mimarisinin kalbidir.",
    "Ödeme anlatırken fraud kontrolü, 3D Secure, callback, transaction kaydı ve bildirim ayrımını kur. Hız istenir ama doğruluk hızdan değerlidir."
  ],
  "buyuk-mimariler-4": [
    "Lojistik takip mimarisi, paketin fiziksel yolunu dijital izlerle görünür yapar. Depo, kargo şirketi, çağrı merkezi ve müşteri aynı gerçeğe bakamazsa küçük gecikme büyük güven sorununa dönüşür.",
    "Bir kargo entegrasyonu saatlerce eski durum dönüyordu. Kullanıcı paket kayıp sandı, çağrı merkezi yanlış bilgi verdi, operasyon geç fark etti. Takip sistemi yalnız konum değil, iletişim düzenidir.",
    "Burada olay akışı önemlidir: paket hazırlandı, teslim edildi, yola çıktı, dağıtıma geçti. Her olay kayıt, bildirim ve sorgulama tarafında iz bırakmalıdır."
  ],
  "buyuk-mimariler-5": [
    "Kamu kapısı başvuru akışı dijital evrak odası gibidir. Vatandaş form doldurur, kimlik doğrular, belge yükler; kurum ise başvurunun zamanını, sahibini, eklerini ve işlem durumunu kanıtlamak zorundadır.",
    "Bir başvuru sisteminde dosya yüklenmiş ama resmi kayıtla bağlanmamıştı. Ekran başarılı diyordu, arşiv sessizdi. Kamu sistemlerinde ekrandaki başarı, kayıt başarısıyla birleşmelidir.",
    "Bu mimaride kimlik doğrulama, KVKK, object storage, PostgreSQL, iş akışı ve log birlikte düşünülür. Hızlı form yapmak kolaydır; hesap verebilir başvuru sistemi kurmak uzmanlık ister."
  ],
  "buyuk-mimariler-6": [
    "Hastane randevu sistemi, teknik gecikmenin koridorda insana dönüştüğü yerdir. Bir ekran yavaşlarsa yalnız performans metriği bozulmaz; hasta bekler, doktor aksar, kayıt masası gerilir.",
    "Bir yoğun günde randevu sorguları cache'siz çalışıyor ve veritabanını yoruyordu. Teknik çözüm basitti ama mahremiyet sınırı dikkat istiyordu. Sağlık sistemlerinde hız ile gizlilik birlikte yürür.",
    "Bu mimaride hasta kaydı, erişim logu, yetki, laboratuvar entegrasyonu ve bildirimler hassastır. Her veri herkesin değildir; her hızlandırma da güvenlikten bağımsız değildir."
  ],
  "buyuk-mimariler-7": [
    "Banka transferi mimarisi, hız ile kesinliğin en sert pazarlığıdır. Para hareketinde 'yaklaşık doğru' diye bir konfor yoktur. Bakiye, yetki, fraud, mutabakat ve bildirim aynı çizgide ilerler.",
    "Bir transferde bildirim gitmemişti ama para geçmişti. Kullanıcı işlemin olmadığını sandı ve tekrar denedi. Arka planda idempotency ve kullanıcı iletişimi eksikse teknik başarı güven üretmeyebilir.",
    "Bu sistemi anlatırken ACID, audit log, fraud sinyali, iki aşamalı onay ve mutabakat kavramlarını bağla. Bankacılıkta mimari aynı zamanda güven sözleşmesidir."
  ],
  "buyuk-mimariler-8": [
    "Savunma üretiminde dijital iz, bir parçanın geçmişini anlatabilme gücüdür. Hangi malzeme geldi, kim onayladı, hangi istasyondan geçti, hangi doküman sürümüyle üretildi? Sorular teknik olduğu kadar stratejiktir.",
    "Bir parça üzerinde kalite sorunu çıktığında kayıtlar eksikse herkes hafızasına döner. Hafıza iyi niyetlidir ama denetim hafıza kabul etmez. Seri numarası, doküman versiyonu ve erişim izi bu yüzden kritiktir.",
    "Bu mimaride güvenlik, kalite ve üretim ayrılmaz. Veriyi korurken üretimi yavaşlatmamak; iz bırakırken gereksiz bürokrasi üretmemek gerçek ustalıktır."
  ],
  "buyuk-mimariler-9": [
    "Komuta kontrol ve simülasyon sistemlerinde gecikme, karar değerini doğrudan etkiler. Ekrandaki küçük noktanın arkasında sensör, mesajlaşma, harita, yetki ve kayıt vardır.",
    "Bir tatbikatta veri birkaç saniye geç geliyordu. Laboratuvarda önemsiz görünen gecikme, karar senaryosunda büyük fark yarattı. Gerçek zamanlı sistemlerde zaman da verinin parçasıdır.",
    "Bu mimaride Kafka benzeri olay akışları, düşük gecikmeli ağ, yetki kontrolü ve monitoring birlikte çalışır. Güvenilir ekran, kaynağı ve gecikmesi bilinen ekrandır."
  ],
  "buyuk-mimariler-10": [
    "Çağrı merkezi ve CRM entegrasyonu, kullanıcının sesini kurum hafızasına bağlar. Temsilci geçmişi görmezse aynı soruyu yeniden sorar; sistemler konuşmazsa müşteri kurumun iç dağınıklığını duyar.",
    "Bir çağrıda temsilci ödeme kaydını göremediği için kullanıcıyı yanlış yönlendirdi. Ödeme sistemi çalışıyordu, CRM güncel değildi. Entegrasyon gecikmesi müşteri deneyiminde güven kaybına dönüştü.",
    "Bu mimaride telefon altyapısı, CRM, ticket, bilgi bankası, kimlik doğrulama ve raporlama birlikte tasarlanır. Çağrı merkezi teknik mimarinin insan sesidir."
  ],
  "buyuk-mimariler-11": [
    "Gerçek zamanlı bildirim sistemi kurumun zilidir. Doğru kişiye, doğru zamanda, doğru kanaldan çalarsa hayat kolaylaşır; gereksiz veya yanlış çalarsa herkes duymamayı öğrenir.",
    "Bir bildirim kuyruğu birikti ve randevu hatırlatmaları geç gitti. Sistem teknik olarak çalışıyordu ama iş değeri kaçmıştı. Bildirimde zamanlama içeriğin yarısıdır.",
    "Bu mimaride olay üretimi, kuyruk, kanal seçimi, retry, kayıt ve kullanıcı tercihi önemlidir. Aynı bildirimi beş kez göndermek de hiç göndermemek kadar kötüdür."
  ],
  "buyuk-mimariler-12": [
    "Kimlik, yetki ve oturum mimarisi dijital binanın kartlı geçişidir. Kullanıcı bir kez giriş yapmak ister; kurum kimin hangi kapıdan geçtiğini bilmek zorundadır.",
    "Bir yetki hatasında kullanıcı kendi biriminin dışındaki raporu görebiliyordu. Kimse sistemi kırmamıştı; rol tasarımı gevşekti. Güvenlik olayları bazen saldırı değil, yanlış kolaylık yüzünden doğar.",
    "SSO, MFA, OAuth2, JWT, rol ve log birlikte düşünülür. Oturum mimarisi iyi kurulursa kullanıcı rahat eder, denetçi de iz bulur."
  ],
  "buyuk-mimariler-13": [
    "Raporlama ve veri ambarı akışı, yöneticinin tek ekranda gördüğü sayının arkasındaki uzun yolu anlatır. Kaynak sistem, ETL, veri ambarı, kalite kontrol ve dashboard aynı zincirdedir.",
    "Bir yönetim raporunda iki birim aynı kavramı farklı sayıyordu. Biri başvuru oluşturma tarihini, diğeri onay tarihini esas almıştı. Veri ambarında teknik temizlik kadar kavram birliği de gerekir.",
    "Bu mimaride veri sözlüğü, lineage, güncelleme zamanı ve kalite kontrolleri önemlidir. Güzel grafik, yanlış tanımı saklıyorsa karar ekranı değil dekor olur."
  ],
  "buyuk-mimariler-14": [
    "Mobil uygulama ile backend arasındaki yol kesintili ağ, küçük ekran ve sabırsız kullanıcıyla sınanır. Telefon cebindedir; kurum süreci ise veri merkezi kadar büyüktür.",
    "Bir saha uygulaması tünelde bağlantı kaybedince aynı işlemi iki kez göndermişti. Backend bunu ayırt edemedi. Mobil dünyada offline durum, retry ve idempotency baştan tasarlanmalıdır.",
    "JWT, API Gateway, cache, push notification ve hata mesajı mobil deneyimin görünmeyen parçalarıdır. Kullanıcı teknik açıklama istemez; işlemin ne durumda olduğunu bilmek ister."
  ],
  "buyuk-mimariler-15": [
    "Yüksek trafikte ölçekleme, yalnız sunucu eklemek değildir. CDN, WAF, load balancer, cache, kuyruk, veritabanı sınırı ve hata yalıtımı birlikte planlanır.",
    "Bir sınav başvuru sistemi ilk saat çöktü. Uygulama sunucuları artırılmıştı ama veritabanı tek noktada tıkanmıştı. Kalabalıkta en dar kapı bütün binanın kaderini belirler.",
    "Ölçekleme anlatırken bottleneck arama refleksini göster. Hangi katman doyuyor, hangi iş asenkron olabilir, hangi hata izole edilir, degrade mode var mı? Büyük sistem sorusu böyle olgunlaşır."
  ],
  "proje-kamu-yonetim-1": [
    "Kurumsal proje fikri takvime yazılınca başlamaz; hangi değeri üreteceği netleşince başlar. 'Bir ekran yapalım' cümlesi ihtiyaç değildir, sadece isteğin ilk halidir.",
    "Bir projede herkes teslim tarihini biliyordu ama başarı ölçütünü bilmiyordu. Son gün sistem çalıştı, kullanıcı memnun kalmadı. Değer tanımı yapılmadan biten proje, teknik olarak kapanıp kurumsal olarak açık kalabilir.",
    "Proje yöneticisi burada çevirmen gibi çalışır: iş dili, teknik dil, bütçe dili ve kabul dili aynı hikâyeye bağlanır."
  ],
  "proje-kamu-yonetim-2": [
    "İhtiyaç analizi, kullanıcının söylediğini aynen yazmak değildir. Kullanıcı çoğu zaman çözüm tarif eder; analistin işi alttaki ihtiyacı bulmaktır.",
    "Bir birim 'Excel yükleme ekranı' istiyordu. Görüşmeler sonunda asıl ihtiyacın hatalı veri girişini azaltmak olduğu anlaşıldı. Çözüm ekran değil, doğrulama kuralları ve entegrasyondu.",
    "Kapsam iyi çizilirse ekip rahatlar. Neyin yapılacağı kadar neyin yapılmayacağı da yazılmalıdır; aksi halde proje büyürken kimse büyüdüğünü kabul etmez."
  ],
  "proje-kamu-yonetim-3": [
    "Teknik şartname, tedarikçiye dilek değil ölçülebilir sözleşme diliyle konuşmalıdır. 'Hızlı çalışacak' belirsizdir; 'şu yükte şu sürede cevap verecek' ölçüdür.",
    "Bir kabul toplantısında taraflar aynı cümleyi farklı anlamıştı. Tedarikçi teslim ettim dedi, kurum beklediğim bu değildi dedi. Sorun kötü niyet değil, kötü yazılmış kabul ölçütüydü.",
    "Teslim kanıtı baştan düşünülür: test sonucu, ekran kaydı, log, performans raporu, doküman, eğitim tutanağı. Kabul günü hafıza değil kanıt konuşmalıdır."
  ],
  "proje-kamu-yonetim-4": [
    "Paydaş haritası projedeki görünmez kuvvetleri gösterir. Karar kimde, kim etkilenecek, kim itiraz edebilir, kim onay vermeden iş ilerlemez? Bunları bilmeden plan yapmak sisli yolda hızlanmaktır.",
    "Bir projede teknik ekip hazırdı ama hukuk onayı unutulmuştu. Canlıya geçiş haftası veri paylaşım protokolü masaya geldi ve takvim durdu. Paydaş geç fark edilirse takvim bedel öder.",
    "RACI matrisi sıkıcı tablo gibi görünür ama kriz anında hayat kurtarır. Sorumlu, hesap veren, danışılan ve bilgilendirilen kişi karışmazsa toplantı sayısı azalır."
  ],
  "proje-kamu-yonetim-5": [
    "Risk kaydı, kötümserlik defteri değildir; gelecekteki tartışmayı bugünden görünür kılma aracıdır. Varsayım doğrulanmazsa risk olur, risk gerçekleşirse sorun kaydına döner.",
    "Bir entegrasyon için 'karşı kurum zamanında hazır olur' varsayımı yazılmamıştı. Olmayınca herkes şaşırmış gibi yaptı. Oysa sürpriz değildi; sadece kayıtsızdı.",
    "Kapsam kayması genellikle küçük iyiliklerle başlar. 'Şunu da ekleyelim' cümlesi masumdur; etkisi takvim, test, bütçe ve kabul üzerinde görünür yapılmalıdır."
  ],
  "proje-kamu-yonetim-6": [
    "Test stratejisi son hafta hataları toplama işi değildir. Ne test edilecek, kim test edecek, veri nasıl hazırlanacak, hata hangi öncelikle kapanacak, canlıya geçişte geri dönüş nasıl olacak baştan yazılır.",
    "Bir canlıya geçişte rollback planı vardı ama kimse denememişti. Geri dönüş gerektiğinde plan kâğıtta kaldı. Test edilmeyen geri dönüş yolu, acil çıkış kapısının kilitli olması gibidir.",
    "İletişim planı da teknik plan kadar önemlidir. Kullanıcı ne zaman bilgilendirilecek, destek masası ne söyleyecek, yönetici hangi metrikle karar verecek? Canlıya geçiş sessizce yapılmaz."
  ],
  "proje-kamu-yonetim-7": [
    "Tedarikçi yönetimi, toplantıda parlak sunumu dinlemekten ibaret değildir. SLA, bakım süresi, hata önceliği, sürüm takibi, doküman ve bilgi transferi ölçülebilir olmalıdır.",
    "Bir sistem tedarikçiye bağımlıydı; kurumda kimse temel ayarı bile bilmiyordu. Tedarikçi değişince bilgi de gitmiş oldu. Sözleşme yalnız hizmet almaz, kurumsal hafızayı da korumalıdır.",
    "İyi yönetici tedarikçiyle kavga etmez, belirsizliği azaltır. Vaat ne, kanıt ne, teslim ne, kapsam dışı ne? Bu sorular ilişkiyi de işi de temizler."
  ],
  "proje-kamu-yonetim-8": [
    "Bütçe, lisans ve envanter sıkıcı görünür; ta ki denetim veya yenileme zamanı gelene kadar. Hangi yazılım nerede kurulu, kaç lisans var, hangi sunucu kime ait bilinmiyorsa kurum kendi malını bile sis içinde yönetir.",
    "Bir lisans yenilemesinde yıllardır kullanılmayan ürünlere para ödendiği görüldü. Kimse kötü niyetli değildi; envanter dağınıktı. Para bazen teknik eksikten değil, kayıt eksikliğinden akar.",
    "Varlık yönetimi iyi yapılırsa güvenlik, bütçe ve kapasite planı güçlenir. Bilmediğin cihazı yamayamaz, bilmediğin lisansı savunamazsın."
  ],
  "proje-kamu-yonetim-9": [
    "Kamu BT işleyişi tek tip değildir. Merkez strateji konuşur, taşra bağlantı ve destek bekler, belediye vatandaş hizmetine odaklanır, üniversite dönemsel yoğunluk yaşar, savunma şirketi güvenilirlik ve gizlilikle çalışır.",
    "Bir bakanlık entegrasyonunda teknik bağlantı hazırdı ama resmi protokol tamamlanmamıştı. Özel sektörde küçük bir imza gibi görünen şey, kamuda sorumluluk sınırını çizer. Teknoloji kararı idari karardan ayrı yürümez.",
    "Bu başlık yönetici adayına gerçekçilik kazandırır. Kurum şemasını ezberlemek yetmez; hangi işin hangi belge, bütçe, ekip ve tedarikçiyle yaşadığını görmek gerekir."
  ],
  "proje-kamu-yonetim-10": [
    "KVKK, denetim izi ve resmi yazı teknoloji projelerinin dış süsü değildir. Kişisel veri nerede duruyor, kim erişti, hangi amaçla işlendi, karar neye dayanıyor? Bunlar proje tasarımının içindedir.",
    "Bir rapor ekranı iyi çalışıyordu ama fazla veri gösteriyordu. Kullanıcı işini daha hızlı yapıyordu, kurum gereksiz kişisel veri riski taşıyordu. İyi niyet, mevzuat riskini ortadan kaldırmaz.",
    "Kurumsal hafıza kayıtla oluşur. Karar yazılır, onay saklanır, log tutulur, arşiv düzenlenir. İnsanlar değişir; kurumun hatırlaması için belge gerekir."
  ],
  "proje-kamu-yonetim-11": [
    "Proje ve kamu mülakatlarında adayın sahayı anlayıp anlamadığı hızlı belli olur. Şartname, kabul, bütçe, tedarikçi ve KVKK kelimelerini yan yana getirebiliyorsa yalnız yazılım değil kurum işi de görmüştür.",
    "İyi cevap bir toplantı sahnesi kurar: talep sahibi aciliyet anlatır, teknik ekip bağımlılığı gösterir, satın alma usulü sorar, hukuk veri sınırını çizer, yönetici karar ister. Aday bu masayı anlatabiliyorsa olgun görünür.",
    "Hazırlık için her sürece kanıt sorusu ekle. Bu işin kabul kanıtı ne, risk kaydı nerede, kim onaylıyor, kullanıcı nasıl bilgilendiriliyor? Kamu ve kurumsal yönetim dili burada güçlenir."
  ],
  "liderlik-kriz-gelecek-1": [
    "Teknik liderlik, her ayrıntıyı ezberlemek değil, ayrıntının ne zaman stratejik hale geldiğini sezebilmektir. Lider CPU darboğazını da bütçe diline, güvenlik açığını da itibar riskine çevirebilir.",
    "Bir toplantıda uzmanlar Kubernetes node sorununu anlatıyordu, üst makam hizmet etkisini soruyordu. İyi lider iki dili de duydu: teknik kökü saklamadı, yöneticiye etki ve çözüm penceresi verdi.",
    "Bu rota teknik bilgiyi insan, bütçe, risk ve gelecek kararlarıyla birleştirir. Üst düzey BT yöneticiliği tam da bu çeviri gücüdür."
  ],
  "liderlik-kriz-gelecek-2": [
    "Üst makama teknik meseleyi sade anlatmak, ayrıntıyı yok etmek değildir. Ayrıntıyı doğru sıraya koyup karar aldıracak hale getirmektir: etki, seçenek, risk, maliyet, öneri.",
    "Bir kesintide yöneticiye 'veritabanı lock bekliyor' dendiğinde oda sessizleşti. Aynı bilgi 'ödeme ekranında kullanıcıların yüzde 20'si bekliyor, veri kaybı yok, iki çözüm seçeneğimiz var' diye verilince karar mümkün oldu.",
    "Sadelik dürüstlükle birlikte yürür. Bilinmeyeni saklamak güveni kırar; bilinmeyeni sınırlandırıp ne zaman netleşeceğini söylemek liderliktir."
  ],
  "liderlik-kriz-gelecek-3": [
    "Ekip kurmak CV toplamak değildir. Uzmanlık, güven, yedeklilik ve ölçü gerekir. Tek kahramana bağlı ekip hızlı görünebilir ama uzun vadede kırılgandır.",
    "Bir kurumda tek kişi tüm veritabanı bilgisini taşıyordu. İzin günü kriz çıktı ve herkes o kişiyi aradı. Bilgi paylaşımı yapılmadığında insan kaynağı riski teknik riskten daha keskin hale gelir.",
    "İyi lider ekipte derin uzmanlık kadar ortak dil de kurar. Herkes her şeyi bilmez ama herkes kime, hangi kanıtla, hangi anda gideceğini bilir."
  ],
  "liderlik-kriz-gelecek-4": [
    "Karar almak, bütün belirsizlik bitene kadar beklemek değildir. Bazen yüzde yetmiş bilgiyle yön seçersin; ama geri dönüş yolunu ve sorumluluğu açık tutarsın.",
    "Bir canlıya geçişte risk vardı. Ekip iki seçenek sundu: erteleme veya sınırlı kullanıcıyla kontrollü açılış. Lider ikinciyi seçti çünkü rollback planı denenmişti. Cesaret, hazırlıksız atlamak değildir.",
    "Hız, risk ve sorumluluk birlikte düşünülür. Kararın neden alındığı yazılırsa yarın hesap vermek savunma değil öğrenme olur."
  ],
  "liderlik-kriz-gelecek-5": [
    "Bütçe savunması fiyat listesi okumak değildir. Yedeklilik neden gerekli, SIEM hangi riski azaltır, GPU kapasitesi hangi iş değerini üretir, lisans yenilemesi yapılmazsa ne olur? Maliyet hikâyeye bağlanmalıdır.",
    "Bir yönetici pahalı görünen yedekleme yatırımını reddetmek üzereydi. Teknik ekip RTO, RPO ve hizmet etkisini anlattı; konu cihaz alımından iş sürekliliğine döndü. Bütçe dili böyle değişir.",
    "İyi BT lideri para isterken araç adıyla değil risk ve değerle konuşur. Bu, üst yönetimin de doğru karar vermesini sağlar."
  ],
  "liderlik-kriz-gelecek-6": [
    "Krizde ilk dakika sisli geçer. Kullanıcı bağırır, alarm düşer, tedarikçi bekleyin der, üst yönetim etkiyi sorar. Liderin görevi sisin içinde ilk sırayı kurmaktır.",
    "İlk karar çoğu zaman teknik çözüm değildir; kayıt açmak, etkiyi ölçmek, iletişim kanalını belirlemek ve varsayımları ayırmaktır. Kayıt yoksa kriz bittiğinde bile kurum ne yaşadığını bilemez.",
    "Kriz yönetiminde sakinlik kişilik özelliği değil, hazırlık sonucudur. Kim aranacak, hangi metrik okunacak, hangi sistem kapatılacak, kim açıklama yapacak önceden bilinmelidir."
  ],
  "liderlik-kriz-gelecek-7": [
    "Veritabanı kilidi küçük bir teknik terim gibi görünür ama canlı sistemde kuyruk, ödeme, rapor ve çağrı merkezi etkisine dönüşebilir. Yavaş sorgu bazen bütün kurumun ritmini düşürür.",
    "Bir rapor sorgusu gündüz çalıştırılmış ve ana tabloyu kilitlemişti. Rapor isteyen birim haklıydı, operasyon haklıydı, kullanıcı da haklıydı. Çözüm suçlu bulmak değil, rapor mimarisini yeniden düşünmekti.",
    "Bu krizde bakılacak yerler bellidir: aktif sorgular, lock bekleyen işlemler, index durumu, transaction süresi ve son değişiklikler. Veritabanı krizi kanıtla konuşmayı sever."
  ],
  "liderlik-kriz-gelecek-8": [
    "SSL sertifikası ve DNS hatası küçük kayıt işi gibi görünür; bozulduğunda bütün kurum kapısız kalır. Kullanıcı için tek gerçek vardır: site açılmıyor.",
    "Bir sertifika süresi hafta sonu dolmuştu. Uygulama ayaktaydı, veritabanı sağlamdı, ama tarayıcı güvenmiyordu. Güven zinciri kırılınca çalışan sistem çalışmıyor gibi görünür.",
    "Bu olaylarda TTL, sertifika bitiş tarihi, chain, DNS resolver ve CDN ayarları kontrol edilir. Basit görünen altyapı kayıtları takvimle ve izlemeyle yönetilmelidir."
  ],
  "liderlik-kriz-gelecek-9": [
    "DDoS baskısı, hizmetin kapısını kalabalıkla tıkama girişimidir. Gerçek kullanıcıyla sahte trafiği ayırmak, kapasiteyi korumak ve iletişimi doğru yapmak gerekir.",
    "Bir saldırıda ekip yalnız sunucu artırmaya odaklandı; trafik filtrelenmediği için maliyet büyüdü, hizmet yine zorlandı. DDoS savunması kaba güç değil, doğru yerde süzme işidir.",
    "WAF, CDN, rate limit, upstream kapasite ve olay iletişimi birlikte düşünülür. Kullanıcıya sessiz kalmak da krizin parçasıdır; güvenlik kadar iletişim de yönetilir."
  ],
  "liderlik-kriz-gelecek-10": [
    "Yedek dönmüyorsa kurumun güven cümlesi sınanır. Herkes 'yedek var' demiş olabilir; gerçek soru restore çalışıyor mu, ne kadar sürüyor, hangi veri kaybediliyor sorusudur.",
    "Bir tatbikatta yedek dosyası vardı ama şifre anahtarı başka ekipteydi, o ekip de süreçte yoktu. Teknik yedek tamam, organizasyonel yedek eksikti. Felaket kurtarma ekip işi olarak tasarlanmalıdır.",
    "Bu başlıkta RPO, RTO, restore testi ve sorumluluk matrisi birlikte okunur. Kâğıt üstündeki güven, prova edilmezse kriz günü dağılır."
  ],
  "liderlik-kriz-gelecek-11": [
    "Kriz sonrası rapor, yaşananı kapatma evrakı değil öğrenme aracıdır. Zaman çizelgesi, etki, kök neden, müdahale, iletişim ve kalıcı düzeltme açık yazılır.",
    "Bir olay raporunda 'sistemsel hata' yazıyordu. Bu cümle hiçbir şeyi öğretmez. Sonra ekip ayrıntıya indi: alarm yoktu, disk dolmuştu, log rotasyonu yanlıştı, sahiplik belirsizdi. Ders ancak isim konunca çıkar.",
    "Kalıcı düzeltme yapılmazsa olay yalnız ertelenir. Alarm eşiği, test, doküman, eğitim veya mimari değişiklik raporun sonunda gerçek aksiyona dönüşmelidir."
  ],
  "liderlik-kriz-gelecek-12": [
    "Yapay zekânın ofise girişi sessiz başladı: özet çıkarma, e-posta taslağı, kod yardımı, doküman arama. Sonra soru değişti: bu araç hangi veriyi görüyor, cevabı kim kontrol ediyor?",
    "Bir ekip toplantı notlarını modelle özetliyordu; içinde hassas proje bilgileri vardı. Kolaylık güzeldi, veri sınırı belirsizdi. Yapay zekâ ofiste verimlilik kadar yönetişim meselesidir.",
    "Lider bu konuda yasakçı veya büyülenmiş olmamalı. Kullanım alanı, veri sınıfı, onay noktası, eğitim ve denetim birlikte belirlenirse teknoloji faydaya yaklaşır."
  ],
  "liderlik-kriz-gelecek-13": [
    "Veri merkezlerinde enerji ve GPU baskısı, yapay zekâ çağının somut tarafıdır. Model konuşurken arka tarafta elektrik, soğutma, tedarik ve kapasite planı çalışır.",
    "Bir yapay zekâ pilotu başarılı oldu ama üretime alınacak GPU kapasitesi yoktu. Demo ucuz, sürekli hizmet pahalı çıktı. Teknik lider, heyecanın faturasını baştan görmelidir.",
    "Enerji verimliliği, donanım tedariği, model boyutu ve kullanım yoğunluğu aynı planın parçasıdır. Büyük kurumda kapasite yalnız teknik metrik değil stratejik varlıktır."
  ],
  "liderlik-kriz-gelecek-14": [
    "Dijital egemenlik, verinin ve kritik hizmetlerin kimin altyapısında, hangi hukuki sınırda ve hangi tedarik zinciriyle yaşadığını sormaktır. Bulut bağımlılığı bu yüzden yalnız teknik tercih değildir.",
    "Bir kurum kritik verisini taşıyacağı bulut için performansa bakmış ama veri konumu ve çıkış stratejisini geç konuşmuştu. Sonra karar stratejik tartışmaya döndü. Teknoloji seçimi bazen ülke, sektör ve tedarik boyutuna çıkar.",
    "Yarı iletken yarışı ve GPU tedariki de aynı resimdedir. Lider gelecek planı yaparken yalnız bugünkü fiyatı değil, yarın erişilebilirliği ve bağımlılığı da düşünür."
  ],
  "liderlik-kriz-gelecek-15": [
    "Üst düzey BT yöneticisi için kişisel rota geniş ama dağınık olmamalıdır. Temel bilgisayar, yazılım, ağ, güvenlik, veri, bulut ve yapay zekâ konularını karar verecek kadar bilmek gerekir.",
    "En iyi yöneticiler her konunun uzmanı gibi davranmaz; uzmanla konuşacak kadar bilir, doğru soruyu sorar, riski anlar, kararı kayıt altına alır. Bu alçakgönüllü yetkinlik büyük kurumlarda çok değerlidir.",
    "Kişisel rota için her ay bir teknik derinlik, bir yönetim pratiği, bir kriz raporu ve bir mimari okuma seç. Zamanla bilgi ansiklopedi değil pusula haline gelir."
  ],
  "mulakat-ve-ust-duzey-hazirlik-1": [
    "Mülakat stratejisi ezber listesini daha hızlı okumak değildir. İyi aday cevabı küçük bir düşünce zinciriyle kurar: tanım, örnek, risk, ölçüm ve öğrenilen ders.",
    "Bir görüşmede aday Docker'ı tanımladı ama nerede kullanacağını anlatamadı. Başka aday basit bir deployment hikâyesi anlattı; imaj, container, log ve rollback doğal biçimde geçti. İkinci cevap daha az süslüydü ama daha güven vericiydi.",
    "Her başlık için kendine şu alıştırmayı yap: bunu beş yaşındaki çocuğa nasıl anlatırım, stajyere nasıl anlatırım, genel müdüre nasıl anlatırım? Üç seviyede anlatabilen kişi gerçekten anlamaya yaklaşır."
  ],
  "mulakat-ve-ust-duzey-hazirlik-2": [
    "Bilgisayar temelleri soruları adayın zemininin sağlamlığını ölçer. CPU, RAM, disk, işletim sistemi, süreç, ağ ve DNS konularında sade ama ilişkili cevap beklenir.",
    "İyi cevap şuna benzer: kullanıcı yavaşlık görüyor; önce CPU ve bellek metriklerine, sonra disk I/O'ya, sonra ağ gecikmesine, sonra uygulama loguna bakarım. Bu sıra mülakatta deneyim kokusu taşır.",
    "Temel konularda gösteriş yapma. Basit kavramı doğru örnekle anlatmak, karmaşık terimi yanlış yerde kullanmaktan daha güçlüdür."
  ],
  "mulakat-ve-ust-duzey-hazirlik-3": [
    "Python, OOP, SQL ve API soruları adayın üretim yapıp yapamayacağını gösterir. Değişken ve döngü temelidir; ama okunabilir kod, veri bütünlüğü ve hata yönetimi asıl farkı yaratır.",
    "Bir cevapta küçük proje hikâyesi kullan: Python ile veri okudum, PostgreSQL'e transaction içinde yazdım, REST API ile dış sisteme bildirdim, hata olursa logladım. Bu akış dört konuyu tek sahnede toplar.",
    "Derinlik göstermek için sınırları söyle. OOP her yerde gerekmez, SQL yanlış JOIN ile yanıltır, API timeout ister, Python hızlı geliştirme sağlar ama paket ve ortam yönetimi ister."
  ],
  "mulakat-ve-ust-duzey-hazirlik-4": [
    "Web ve backend sorularında görüşmeci uçtan uca akış duymak ister. Tarayıcı isteği, API Gateway, auth, backend, cache, kuyruk, veritabanı ve cevap kodu aynı yolculukta yer alır.",
    "JWT sorulduğunda güvenliği; cache sorulduğunda eski veri riskini; kuyruk sorulduğunda idempotency ve retry'ı anmak cevabı güçlendirir. İyi aday teknolojiye yanında taşıdığı sorunla birlikte bakar.",
    "Hazırlık için bir e-ticaret sipariş akışını tahtada çiz. Sonra her soruyu bu akışta yerine koy. Böylece cevaplar birbirinden kopuk değil, mimari bütünlük içinde gelir."
  ],
  "mulakat-ve-ust-duzey-hazirlik-5": [
    "Linux, ağ, Docker, Kubernetes ve bulut soruları üretim ortamı sezgisini ölçer. Bu başlıklarda teorik tanım kadar arıza anında neye bakacağını söylemek önemlidir.",
    "Bir aday 'pod restart ediyor' sorusunda image, environment variable, resource limit, readiness probe ve log kontrolünü sırayla anlattı. Cevap komut ezberi değildi; olay çözme düzeniydi.",
    "Bulut sorusunda maliyeti unutma. Teknik ekip ölçeklenmeyi sever; yönetici ay sonunda faturayı görür. İyi cevap ikisini aynı cümlede taşır."
  ],
  "mulakat-ve-ust-duzey-hazirlik-6": [
    "Siber güvenlik mülakatında olgunluk, riskin iş etkisini görmekle anlaşılır. Firewall, WAF, SIEM, EDR, IAM ve DLP kavramlarını ürün listesi gibi değil kontrol ailesi gibi anlat.",
    "Olay müdahalesi sorulursa sırayı koru: tespit, etki analizi, çevreleme, temizleme, kurtarma, raporlama ve kalıcı düzeltme. Bu sıra panik yerine disiplin gösterir.",
    "Yönetsel cevapta bütçe ve denetim dilini ekle. Hangi kontrol hangi riski azaltıyor, hangi log kanıt sayılır, hangi olay üst makama çıkar? Bu sorular seni uzmanlıktan liderliğe taşır."
  ],
  "mulakat-ve-ust-duzey-hazirlik-7": [
    "Yapay zekâ, RAG, LLM ve MLOps sorularında moda kelimeler kolay tuzaktır. Güçlü cevap model, veri, kaynak, değerlendirme, maliyet ve güvenlik sınırını birlikte kurar.",
    "Bir RAG sorusunda belge toplama, chunking, embedding, retrieval, kaynak gösterme ve eval akışını anlat. Sonra prompt injection ve yetki filtresini ekle. İşte o zaman cevap demo seviyesini geçer.",
    "LLMOps sorulursa model canlıya çıktıktan sonraki hayatı konuş: prompt versiyonu, cevap kalitesi, kullanıcı geri bildirimi, maliyet ve güvenlik olayı. Yapay zekâ ürünü de yaşayan sistemdir."
  ],
  "mulakat-ve-ust-duzey-hazirlik-8": [
    "Sistem tasarımı mülakatı büyük resmi tahtada kurma sınavıdır. Önce gereksinimi sor, sonra kullanıcı akışını çiz, sonra veri modelini, API'leri, cache'i, kuyruğu, güvenliği ve ölçeklemeyi ekle.",
    "Bir aday URL kısaltma sistemi tasarlarken önce veritabanına atladı. Başka aday okuma-yazma oranını, kısa kod üretimini, çakışma riskini, cache ve rate limit'i konuştu. İkinci aday sistemi gerçekten tasarlıyordu.",
    "Tahtada mükemmel çizim arama; kararlarını gerekçelendir. Nerede tutarlılık, nerede hız, nerede basitlik, nerede maliyet seçtin? Sistem tasarımı bu tercihleri görünür yapmaktır."
  ],
  "mulakat-ve-ust-duzey-hazirlik-9": [
    "Yöneticilik mülakatında teknik bilgi karar diline çevrilmelidir. Bütçe, risk, insan, tedarikçi, mevzuat ve iş sürekliliği aynı cevapta yer bulur.",
    "Bir aday Kubernetes yatırımını savunurken 'modern teknoloji' dedi ve zayıf kaldı. Başka aday dağıtım hızı, hata yalıtımı, ekip yetkinliği, işletme maliyeti ve geçiş riskini anlattı. Yönetim dili ikinci cevaptadır.",
    "Bu görüşmelerde bilmediğini saklama, sınırlandır. 'Bu konuda uzman görüşü alırım; karar için şu metriklere bakarım' demek olgun bir lider refleksidir."
  ],
  "mulakat-ve-ust-duzey-hazirlik-10": [
    "Teknisyenlikten stratejik BT liderliğine geçiş, elindeki tornavidayı bırakmak değil, hangi sorunda hangi tornavidanın gerektiğini bilmektir. Derinlik kaybolmaz; perspektif genişler.",
    "Kariyerin başında komut öğrenirsin, sonra sistem kurarsın, sonra ekibin nasıl çalıştığını görürsün, en sonunda teknolojinin bütçe, risk ve kurum hedefiyle ilişkisini yönetirsin. Her aşama öncekinin üstüne çıkar.",
    "Kişisel rota için her projeden bir teknik ders, bir insan dersi ve bir karar dersi çıkar. Zamanla CV'nin yanında daha değerli bir şey oluşur: sahadan süzülmüş yargı gücü."
  ]
};

function manualArticle(category, chapter) {
  const article = manualArticles[chapter.id];
  if (!article) {
    return [
      paragraph(`Bu bölüm için bağımsız metin henüz yazılmadı: ${cleanTitle(chapter)}.`),
      paragraph("Eski şablon anlatımı özellikle devre dışı bırakıldı; böylece eksik sayfalar gözden kaçmaz.")
    ].join("");
  }
  return article.map((block) => {
    if (typeof block === "string") return paragraph(block);
    if (block.type === "heading") return `<h2>${escapeHtml(block.text)}</h2>`;
    if (block.type === "list") return `<ul>${block.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
    return paragraph(block.text);
  }).join("") + visualFor(category, chapter);
}

function interviewChapter(category, chapter) {
  const topic = cleanTitle(chapter);
  const focus = firstPhrase(topic);
  return [
    paragraph(`${topic} başlığına mülakat odasında girildiğinde asıl ölçülen şey yalnız doğru terimi bilmek değildir. Değerlendirici çoğu zaman adayın düşünme düzenini dinler: problemi nasıl parçalıyor, bilinmeyeni nasıl sınırlıyor, örneği nasıl kuruyor, riski fark edince cümlesini nasıl düzeltiyor? İyi cevap, aceleyle söylenen parlak tanımdan çok, sakin kurulmuş küçük bir sistem gibidir.`),
    paragraph(`${focus} için güçlü cevap üç katmanda ilerler. Önce kavram sade tanımlanır; sonra gerçek bir kullanım senaryosuna bağlanır; en sonda da sınırı ve riski söylenir. Örneğin Redis sorulursa yalnız "hızlıdır" demek yetmez. Hangi veriyi cache'e koyacağını, eski veri riskini nasıl yöneteceğini, ana kayıtla cache arasındaki farkı ve izleme metriğini anlatmak gerekir.`),
    paragraph(`Teknik mülakatta adayın güven vermesi, her soruya ansiklopedi gibi cevap vermesine bağlı değildir. Bazen "bu ayrıntıyı ezbere söylemeyeyim, ama üretim ortamında şöyle kontrol ederim" diyebilmek daha değerlidir. Çünkü büyük kurumlarda kimse her şeyi zihninde taşımıyor; değerli olan doğru soruyu sormak, doğru kanıta bakmak ve yanlış varsayımı erken yakalamaktır.`),
    paragraph(`Üst düzey hazırlıkta aynı konu başka bir dile çevrilir. ${focus} yalnız teknik tercih değilse bütçe, insan kaynağı, güvenlik, tedarikçi bağımlılığı, bakım modeli ve hizmet sürekliliğiyle birlikte anlatılır. Bir yöneticilik görüşmesinde Docker veya RAG anlatırken bile konuşma sonunda "bunu kim işletecek, nasıl ölçeceğiz, hata olursa nasıl döneceğiz?" sorularına dokunmak gerekir.`),
    paragraph(`Bu başlık için iyi çalışma yöntemi kısa ama düzenlidir: bir paragraf tanım, bir somut örnek, bir hata senaryosu, bir metrik, bir de yönetici cümlesi hazırlanır. Böyle çalışınca cevap ezber gibi durmaz; adayın sahayı görmüş, en azından sahayı doğru hayal etmeyi öğrenmiş olduğu anlaşılır.`),
    paragraph(`${topic} sonunda okurun kazanması gereken refleks şudur: Her teknik soruya önce net tanım, sonra akış, sonra risk, sonra kanıt. Bu dört adım korunursa bilgisayar temellerinden LLMOps'a kadar çok farklı başlıklar aynı olgunlukla anlatılabilir.`)
  ].join("") + visualFor(category, chapter);
}

function contentFor(category, chapter) {
  return manualArticle(category, chapter);
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
