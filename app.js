const book = {
  title: "Teknoloji Atlası",
  kicker: "Temel Bilgisayar Okuryazarlığı, Saha Dili ve Karar Rehberi",
  subtitle: "Tek tek teknoloji ezberletmek yerine bilgisayar, yazılım, ağ, veri, güvenlik, bulut ve yapay zekâ kavramlarının kurum içinde ne işe yaradığını sade bir akışla anlatır.",
  promise:
    "Okur bir teknolojinin adını ezberlemek yerine onun hangi sorunu çözdüğünü, hangi riski taşıdığını, hangi kanıtla izleneceğini ve karar masasında nasıl konuşulacağını öğrenir."
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
      "Kod mülakatı ve portföy: neyi bildiğini çalışır örnekle göstermek",
      "Veri yapıları ve algoritma sezgisi: array, hash map, stack, queue ve Big O"
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
      "Yüksek trafikte ölçekleme ve hata yalıtımı",
      "Veri mühendisliği: ETL, data lake, warehouse, kalite ve katalog"
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
      "Üst düzey BT yöneticisi için kişisel rota",
      "ITSM ve değişiklik yönetimi: incident, problem, change, CAB ve release"
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

const chapterTitleOverrides = {
  "asama-2-programlama-2": "Programlama dili mantığı: Python örneğiyle temel akış",
  "asama-2-programlama-9": "Yazılım ekosistemi: framework, veri aracı ve model kütüphanesi ne işe yarar",
  "asama-4-ai-temelleri-8": "Model geliştirme araçları: araştırma kodundan üretime geçiş",
  "asama-5-llm-gelistirme-2": "Model API'si kullanımı: mesaj, maliyet, sınır ve kayıt düzeni",
  "asama-5-llm-gelistirme-5": "Yerel ve bulut modeller: mahremiyet, kapasite ve kalite dengesi",
  "asama-6-devops-bulut-2": "Container mantığı: uygulamayı taşınabilir paket gibi düşünmek",
  "asama-6-devops-bulut-3": "Orkestrasyon mantığı: çok sayıda servisi düzenli işletmek",
  "asama-6-devops-bulut-7": "Bulut servis aileleri: işlem, depolama, ağ, kimlik ve izleme",
  "siber-guvenlik-2": "Kimlik ve erişim: kullanıcı, rol, onay ve en az yetki",
  "siber-guvenlik-4": "Uygulama güvenliği: girdi, yetki, bağımlılık ve test disiplini",
  "buyuk-mimariler-2": "Sipariş sistemi mantığı: arama, sepet, ödeme ve teslimat akışı",
  "mulakat-ve-ust-duzey-hazirlik-3": "Kod ve veri soruları: dil değil düşünme düzeni anlatmak",
  "mulakat-ve-ust-duzey-hazirlik-5": "Sistem soruları: Linux, ağ, container ve bulutu aynı olayda okumak",
  "mulakat-ve-ust-duzey-hazirlik-7": "Yapay zekâ soruları: veri, kaynak, güven ve ölçümle cevap vermek"
};

Object.entries(chapterTitleOverrides).forEach(([id, title]) => {
  const match = id.match(/^(.*)-(\d+)$/);
  if (!match) return;
  const category = categories.find((item) => item.id === match[1]);
  const index = Number(match[2]) - 1;
  if (category?.chapters[index]) category.chapters[index] = title;
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

Object.assign(glossary, {
  "Big O": "AlgoritmanÄ±n veri bÃ¼yÃ¼dÃ¼kÃ§e zaman veya bellek maliyetinin nasÄ±l arttÄ±ÄŸÄ±nÄ± tarif eden yaklaÅŸÄ±mdÄ±r.",
  "CAB": "YÃ¼ksek riskli deÄŸiÅŸiklikleri etki, geri dÃ¶nÃ¼ÅŸ ve zamanlama aÃ§Ä±sÄ±ndan deÄŸerlendiren deÄŸiÅŸiklik kuruludur.",
  "Change": "Ãœretim ortamÄ±nda yapÄ±lacak kontrollÃ¼ teknik veya sÃ¼reÃ§ deÄŸiÅŸikliÄŸidir.",
  "Data lake": "FarklÄ± formatlardaki ham veya yarÄ± iÅŸlenmiÅŸ veriyi geniÅŸ Ã¶lÃ§ekte tutan veri depolama yaklaÅŸÄ±mÄ±dÄ±r.",
  "Data warehouse": "Raporlama ve analitik iÃ§in temizlenmiÅŸ, modellenmiÅŸ ve tutarlÄ± veri tutan kurumsal depodur.",
  "ELT": "Veriyi Ã¶nce hedef depoya yÃ¼kleyip dÃ¶nÃ¼ÅŸÃ¼mÃ¼ hedef ortamda yapan veri iÅŸleme yaklaÅŸÄ±mÄ±dÄ±r.",
  "ETL": "Veriyi kaynaktan alÄ±p dÃ¶nÃ¼ÅŸtÃ¼rerek hedef sisteme yÃ¼kleyen veri iÅŸleme hattÄ±dÄ±r.",
  "Incident": "Hizmetin bozulduÄŸu veya kullanÄ±cÄ± etkisinin oluÅŸtuÄŸu olay kaydÄ±dÄ±r.",
  "ITSM": "BT hizmetlerini incident, problem, change, SLA ve sÃ¼rekli iyileÅŸtirme disipliniyle yÃ¶netme yaklaÅŸÄ±mÄ±dÄ±r.",
  "Problem": "Tekrar eden veya kritik incident'larÄ±n kÃ¶k nedenini bulmaya odaklanan kayÄ±t ve analiz disiplinidir.",
  "Release": "DeÄŸiÅŸikliÄŸin kullanÄ±cÄ±ya kontrollÃ¼ paket, iletiÅŸim, izleme ve geri dÃ¶nÃ¼ÅŸ planÄ±yla taÅŸÄ±nmasÄ±dÄ±r."
});

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

function displayCategoryTitle(category) {
  return /^\d+\./.test(category.title) ? category.title : `${category.order}. ${category.title}`;
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
        ${terms.map((term) => `<div><dt>${svgLabel(term)}</dt><dd>${svgLabel(glossary[term])}</dd></div>`).join("")}
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
    "Bilgisayarı parça listesi olarak değil de çalışan bir düzen olarak görmeye başladığın an, teknik dünyanın kapısı biraz daha sessiz ama çok daha ciddi biçimde açılır. Çoğu kişi bu yolculuğa CPU, RAM, disk, ekran kartı gibi isimleri ezberleyerek başlar; bunda yanlış bir şey yoktur, ama yalnızca isimleri bilmek, bir şehri sokak tabelalarından ibaret sanmaya benzer. Şehrin nasıl yaşadığını anlamak için sabah trafiğine, elektrik kesildiğinde hangi mahallelerin karardığına, pazar kurulduğunda hangi yolların tıkandığına, belediye ekiplerinin hangi sırayla müdahale ettiğine bakmak gerekir. Bilgisayar da böyledir. İşlemci hesap yapar ama beklediği veri bellekte yoksa duraksar; bellek hızlıdır ama darsa işler diske taşar; disk kalıcıdır ama yavaşsa bütün sistem bekler; işletim sistemi bu kalabalığı sıraya koyar; ağ dış dünyaya kapı açar; güvenlik kimin hangi kapıdan geçeceğini belirler. Ben bu gerçeği ilk yıllarımda, kullanıcıların 'sistem kötü' diye tarif ettiği ama her seferinde başka kökten çıkan arızaları izlerken öğrendim. Bazen sorun gerçekten yazılımdı, bazen DNS yanlış çözüyordu, bazen bir servis yetkisiz kullanıcıyla çalışıyordu, bazen de eski bir disk bütün ofisin sabrını kemiriyordu. Bu yüzden bilgisayar temelleri rotası sana tek tek bilgi parçaları vermek için değil, o parçaları aynı canlı organizmanın organları gibi okutmak için var. Büyük kurumlarda iyi teknikçi ile ezberci teknikçi arasındaki fark burada belirginleşir: ezberci kişi 'RAM artırın' der, iyi teknikçi önce belirtileri dinler; ezberci kişi 'internet yok' der, iyi teknikçi DNS mi, gateway mi, firewall mı, sertifika mı diye yolu ayırır; ezberci kişi 'kod çalışmıyor' der, iyi teknikçi süreç, izin, ortam değişkeni, port, log ve veri bağlantısına bakar. Bu rota boyunca öğreneceğin her kavramı üç soruyla birlikte taşı: Bu parça ne iş yapıyor, hangi parçaya bağımlı çalışıyor, bozulduğunda kullanıcı bunu nasıl hissediyor? Böyle sorduğunda CPU yalnız işlemci, Linux yalnız siyah ekran, Git yalnız komut, DNS yalnız alan adı çevirici olmaktan çıkar. Hepsi, gerçek hayatta hizmet veren sistemlerin içinde rol alan karakterlere dönüşür. Bilgisayar temelleri güçlü olan kişi, mülakatta sakin konuşur; çünkü kavramları birbirinden kopuk değil, bir olayın içinde anlatabilir. Daha önemlisi, ileride yapay zekâ, Kubernetes, bulut, siber güvenlik ya da üst düzey BT yöneticiliği konuşurken ayakları yere basar. Çünkü en büyük sistemler bile eninde sonunda elektrik alan, veri taşıyan, bellek kullanan, dosya okuyan, ağa çıkan ve hata olduğunda iz bırakması gereken makinelerin üzerinde yaşar."
  ],
  "asama-1-bilgisayar-temelleri-2": [
    "Bilgisayar donanımını gerçekten anlamaya başladığım günü hâlâ net hatırlarım; yeni kurulmuş, kabloları bile henüz masa altlarında düzgünce toplanmamış küçük bir ofisteydik ve herkesin 'bu makine güçlü, bunda sorun çıkmaz' dediği bilgisayar, en sıradan dosyayı açarken bile insanı bekletiyordu. Kasanın üzerinde parlak bir işlemci etiketi vardı, belleği kâğıt üstünde yeterli görünüyordu, diski de yeni alınmıştı; yani dışarıdan bakınca suçlayacak bir parça bulmak kolay değildi. İşte donanım denen şeyi parça listesi olmaktan çıkarıp çalışan bir düzen olarak görmeye insan böyle anlarda başlıyor. Çünkü bilgisayar, içinde CPU, RAM, disk, anakart, güç kaynağı, ekran kartı, fan ve kablo bulunan bir kutu değildir yalnızca; doğru anda doğru veriyi doğru yere taşıması gereken küçük bir şehir, hatta biraz daha canlı söylemek gerekirse, içinde herkesin birbirine bağımlı çalıştığı kalabalık bir atölyedir. O gün makinenin başına oturduğumda ilk yaptığım şey kapağı açmak olmadı; önce davranışını izledim. Açılışta mı yavaşlıyor, dosya açarken mi bekliyor, tarayıcıda sekme değiştirirken mi takılıyor, rapor kaydederken mi sabır tüketiyor? Donanım arızalarında acemi refleks hemen parça değiştirmektir, usta refleks ise belirtiyi dinlemektir; çünkü bilgisayar çoğu zaman bağırmaz, küçük gecikmelerle, fan sesinin değişmesiyle, diskin beklemesiyle, ısının yükselmesiyle fısıldar. Bu fısıltıyı duyabilmek için önce CPU'nun ne yaptığını bilmek gerekir. CPU bilgisayarın hesap yapan merkezidir ama onu tek başına kahraman yapmak yanıltıcıdır; çok hızlı düşünen, önüne gelen işi küçük komutlara bölüp işleyen sabırsız bir usta gibidir, fakat bu usta boşlukta çalışmaz. Yapacağı işi RAM'den alır, geçici sonuçları yine belleğe koyar, kalıcı bilgi gerektiğinde diske gider, klavye, ekran, ağ kartı ve diğer parçalarla anakart üzerinden konuşur. Bu yüzden CPU'nun gücü yalnız kendi hızıyla değil, işin ona ne kadar hızlı ulaştığıyla da belirlenir. Çok iyi bir aşçıyı dar bir mutfağa koyarsan yemek yine gecikir; çünkü mesele yalnız aşçının yeteneği değildir, tezgâhın genişliği, malzemenin nerede durduğu, fırının ne kadar hızlı ısındığı ve garsonun siparişi mutfağa ne kadar düzgün getirdiği de sonucu belirler. RAM bu benzetmede çalışma masasıdır. Bilgisayar o anda neyle uğraşıyorsa onu RAM üzerinde tutar: tarayıcıdaki sekmeler, açık ofis dosyaları, çalışan servisler, geliştirme ortamı, arka planda bekleyen küçük uygulamalar, hatta kullanıcının fark etmediği güncelleme süreçleri bile bu masadan yer ister. Masa genişse işler rahat yayılır; masa daralırsa işletim sistemi bazı şeyleri kaldırıp diske taşımaya başlar. Kullanıcı bunu 'bilgisayar kasıyor' diye anlatır, teknik tarafta bunun adı bellek baskısıdır, kimi zaman disk takasına kadar gider. RAM yetmediğinde disk geçici masa gibi kullanılır ama disk RAM'in hızına yaklaşamaz; mekanik diskse aradaki fark uçurumdur, SSD ise daha iyi dayanır ama yine de RAM değildir. O ofisteki makinede ilk ciddi ipucu burada belirdi: işlemci çoğu zaman boşta bekliyor, RAM sınırda geziyor, disk ise küçük küçük ama sürekli uğraşıyordu. Yani herkesin gözünü diktiği CPU suçlu değildi; usta iyiydi, mutfakta tezgâh daralmış, arşive gidip gelme çoğalmıştı. Disk bilgisayarın hafızasıdır; makine kapansa bile dosyaların, programların, fotoğrafların, veritabanı kayıtlarının ve işletim sisteminin durduğu yer orasıdır. Eski mekanik disklerde dönen plakalar ve hareket eden okuyucu kafalar vardı, bu yüzden veriyi bulmak fiziksel bir gecikme taşırdı. SSD'ler bu hissi değiştirdi; özellikle NVMe diskler modern bilgisayarda hız duygusunu dramatik biçimde artırır. Eski bir bilgisayara SSD takıldığında kullanıcının 'yeni bilgisayar aldım sanki' demesi tesadüf değildir, çünkü gündelik beklemelerin çoğu işlemcinin düşünmesinden değil, verinin diskte aranıp getirilmesinden kaynaklanır. Ama disk de tek başına kurtarıcı değildir. Anakart bu parçaların üzerinde buluştuğu zemindir; yalnız parçaların takıldığı bir levha değil, veri yollarının, güç dağıtımının, chipset'in, portların, bellek yuvalarının, genişleme slotlarının ve BIOS/UEFI düzeninin yaşadığı ana cadde sistemidir. Anakartın desteklediği veri yolu sınırlıysa çok hızlı bir diski eski bir yoldan yürütürsün; güçlü ekran kartı takarsın ama güç ve soğutma yetmez; RAM artırırsın ama bellek tipi ve kanal düzeni yüzünden beklediğin verimi alamazsın. Kurumsal bilgisayarlarda bu tablo sık görülür: bir parça yükseltilir, kullanıcı rahatlayacak sanılır, sonra darboğazın başka yerde olduğu anlaşılır. Donanımda darboğaz çoğu zaman en pahalı parçada değil, parçaları birbirine bağlayan yolda saklanır. Güç kaynağı ve soğutma da bu hikâyenin sessiz karakterleridir. Bilgisayarın çalışması için yalnız elektrik gelmesi yetmez; doğru voltajda, istikrarlı ve yeterli güç gerekir. Zayıf ya da kalitesiz güç kaynağı bazen anlaşılması zor kapanmalara, bazen parça ömrünün kısalmasına, bazen de yük altındayken garip davranışlara yol açar. Soğutma da aynı derecede önemlidir; CPU ve GPU ısındıkça kendini korumak için hızını düşürür. Kullanıcı bunu 'bir süre sonra yavaşlıyor' diye anlatır, teknik gerçek ise cihazın ısındığı ve hayatta kalmak için performansını kıstığıdır. Bazen performans çözümü yeni işlemci almak değil, kasanın içindeki tozu temizlemek, termal macunu yenilemek, hava akışını düzeltmek ve fanın gerçekten çalışıp çalışmadığını kontrol etmektir. GPU ise uzun süre yalnız oyun veya grafik işiyle anıldı ama bugün yapay zekâ, görüntü işleme, simülasyon ve paralel hesaplama sayesinde bambaşka bir yere taşındı. CPU karmaşık ve sıralı işleri iyi yürütürken GPU çok sayıda benzer işlemi aynı anda yapma konusunda ustadır; derin öğrenme modellerinin GPU üzerinde hızlanması bu yüzdendir. Fakat burada da tek başına pahalı ekran kartı yetmez. Veri diskte yavaş geliyorsa, RAM yetmiyorsa, güç kaynağı sınırdaysa, soğutma zayıfsa, sürücüler doğru kurulmamışsa GPU potansiyelinin altında çalışır. Büyük kurumların yapay zekâ altyapısı kurarken yalnız ekran kartı fiyatı değil, veri yolu, depolama, bellek, enerji, soğutma ve bakım düzeni konuşması bundandır. Donanımı öğrenirken en tehlikeli alışkanlık performansı tek sayıya indirmektir: 'işlemcisi güçlü olsun', 'RAM'i yüksek olsun', 'SSD olsun' gibi cümleler başlangıçtır ama karar değildir. Video işleyen bir makine CPU ve GPU ister; büyük Excel dosyaları, tarayıcı sekmeleri ve geliştirme ortamları RAM ister; veritabanı diskin gecikmesine ve I/O kapasitesine hassastır; dosya sunucusu depolama güvenilirliği ve ağ kartıyla yaşar; yapay zekâ eğitimi GPU kadar hızlı disk ve yeterli RAM bekler; web sunucusu çoğu zaman CPU, bellek, ağ ve disk arasında dengeli bir tasarım ister. 'En iyi bilgisayar' diye tek cevap yoktur; hangi iş için, hangi bütçeyle, hangi süre boyunca, hangi bakım şartlarıyla kullanılacağı sorulmadan donanım seçimi yapılmaz. Bir kurumda donanım satın alma toplantısına girdiğinde bu gerçek daha da görünür olur. Kullanıcı hızlı bilgisayar ister, satın alma fiyatı sorar, bilgi işlem bakım kolaylığını düşünür, güvenlik disk şifrelemesini gündeme getirir, yönetici cihazın kaç yıl kullanılacağını bilmek ister. Teknik uzmanın görevi parça ismi yarıştırmak değil, iş yükünü okumaktır: Bu cihaz yalnız e-posta ve ofis uygulaması mı çalıştıracak, yazılım geliştirme mi yapılacak, grafik tasarım mı var, veri analizi mi yürütülecek, sanal makine mi açılacak, saha koşulunda mı kullanılacak? Aynı bütçeyle farklı cevaplar çıkabilir. Her kullanıcıya aynı cihazı vermek yönetimi kolaylaştırır ama bazı ekiplerde verimi düşürür; herkese özel cihaz vermek performansı artırabilir ama destek, yedek parça ve envanter yükünü büyütür. Donanım bilgisi burada yalnız teknik bilgi olmaktan çıkar, yöneticilik kararına dönüşür. Arıza tarafında da aynı bütüncül bakış gerekir. Kullanıcı 'bilgisayar dondu' dediğinde iyi teknikçi hemen RAM siparişi vermez, işlemciyi suçlamaz, diski değiştirmez; önce olayın zamanını ve davranışını dinler. Açılışta mı oluyor, belirli programda mı, ısınınca mı, ağdaki dosyayı açarken mi, büyük raporda mı, elektrik kesintisinden sonra mı? Sonra kaynaklara bakar: CPU sürekli yüzde yüz mü, RAM dolmuş mu, disk kullanım zamanı yükselmiş mi, sıcaklıklar normal mi, ağ kartında hata var mı, işletim sistemi logunda ipucu var mı? Bu sıra bir dedektifin olay yerinde önce izlere bakmasına benzer. Parça değiştirmek kolaydır; doğru parçayı değiştirmek ustalık ister. O ofisteki yavaş bilgisayarda da sonunda mesele tek bir sihirli parçaya bağlanmadı. RAM sınırdaydı, disk bekleme yaratıyordu, arka planda gereksiz başlangıç programları çalışıyordu, kasanın hava akışı da iyi değildi. Küçük küçük düzeltmeler birleşince kullanıcı için büyük fark oluştu. İşte donanımı anlamanın tadı burada başlar: Bir cihazı yalnız satın alınan ürün olarak değil, davranışları olan bir sistem olarak okumaya başlarsın. Mülakatlarda donanım sorusu bu yüzden basit görünse de güzel bir derinlik sınavıdır. 'CPU nedir?' sorusuna 'işlemcidir' demek doğrudur ama iz bırakmaz. Daha iyi cevap, CPU'nun komutları işlediğini, RAM'in o anda çalışan veriyi tuttuğunu, diskin kalıcı saklama sağladığını, anakartın bu parçaları konuşturduğunu, performansın ise çoğu zaman en zayıf halkaya göre hissedildiğini anlatır. Sonra örnek verirsin: Veritabanında disk I/O kritikleşir, yapay zekâ eğitiminde GPU öne çıkar, çok sekmeli ofis kullanımında RAM belirleyici olur, ısınan cihazda soğutma performansı düşürür. Böyle anlattığında görüşmeci yalnız tanım duymamış olur; sistemi okuyabilen birini dinler. Bu bölümün sonunda akılda kalması gereken fikir şudur: Donanım canlı sistemin bedenidir. Yazılım o bedenin üzerinde yürür, işletim sistemi organları koordine eder, ağ bedeni dış dünyaya bağlar, güvenlik sınır çizer. Bedeni anlamayan kişi hastalığı yalnız ekrandaki belirtiyle yorumlar; bedeni anlayan kişi yavaşlığın, ısının, sesin, gecikmenin, veri kaybının ve güç kesintisinin aynı büyük hikâyenin farklı işaretleri olduğunu görür. Bilgisayar donanımı böyle öğrenildiğinde parça ezberi olmaktan çıkar ve teknik aklın ilk gerçek sahnesine dönüşür."
  ],
  "asama-1-bilgisayar-temelleri-3": [
    "İşletim sistemiyle ilk ciddi karşılaşma genellikle bir hata anında olur; normal günlerde onu pek fark etmeyiz. Uygulama açılır, dosya kaydedilir, yazıcı çalışır, tarayıcı internete çıkar, kullanıcı da bütün bunların kendiliğinden olduğunu sanır. Oysa arka planda çok sakin ama çok otoriter bir düzenleyici vardır. İşletim sistemi CPU zamanını süreçlere paylaştırır, belleği kimin kullanacağını belirler, dosya sisteminde neyin nereye yazılacağını yönetir, sürücüler aracılığıyla donanımla konuşur, kullanıcıların hangi kaynağa erişebileceğine karar verir. Bir binada herkesin aynı anda toplantı odasına girmek istediğini, arşivden dosya istediğini, asansörü çağırdığını, güvenlik kapısından geçtiğini düşün; bina kendi başına ayakta duruyor gibi görünür ama görünmeyen bir yönetim olmazsa koridorlar birkaç dakika içinde karışır. İşletim sistemi bu karışıklığı engelleyen yönetimdir. Bunu en iyi, bir gece canlı sistemde başlamayan küçük bir servis sayesinde öğrenmiştim. Kod değişmemişti, veritabanı ayaktaydı, ağ erişimi vardı, port boştu; herkes uygulamanın içinde bir hata arıyordu. Sonra log dizinine bakıldı ve servis kullanıcısının yazma izni olmadığı görüldü. Yazılım doğruydu, niyet doğruydu, ama işletim sistemi niyetle ilgilenmez; kullanıcı kim, dosya kime ait, izin ne diyor, süreç hangi ortamda çalışıyor, ona bakar. O gece benim için süreç, kullanıcı, izin ve dosya sistemi kavramları ders kitabından çıkıp canlı birer karaktere dönüştü. Süreç dediğimiz şey çalışan programın işletim sistemindeki karşılığıdır; thread aynı süreç içinde daha küçük çalışma yolları açabilir; bellek yönetimi uygulamanın ne kadar alan kullanacağını, ne zaman zorlanacağını belirler; dosya sistemi yalnız klasör ağacı değil, sahiplik ve erişim düzenidir; sürücüler donanımı yazılım dünyasına tercüme eder. İşletim sistemini anlamayan geliştirici, kodu çalışmadığında çoğu zaman kendi dosyasının içinde debelenir. İşletim sistemini anlayan kişi ise daha geniş bakar: süreç gerçekten çalışıyor mu, hangi kullanıcıyla çalışıyor, ortam değişkenleri doğru mu, dosyaya yazabiliyor mu, portu dinliyor mu, bellek şişiyor mu, servis yeniden başlatılınca ne oluyor? Mülakatta işletim sistemi sorusu geldiğinde 'Windows ve Linux vardır' demek çocuk haritasıdır; iyi cevap, işletim sisteminin kaynak yöneten, güvenlik sınırı çizen, uygulamalara kontrollü çalışma alanı açan ana katman olduğunu anlatır. Üst düzey kurumlarda bu bilgi daha da değerlidir, çünkü bir kesinti anında yöneticinin de şunu ayırt etmesi gerekir: sorun kod kalitesinde mi, işletim sistemi konfigürasyonunda mı, izinlerde mi, kaynak yetersizliğinde mi, yoksa donanım sürücüsünde mi? İşletim sistemi, bilgisayarın günlük hayatında görünmeyen ama yokluğunda her şeyi durduran o sessiz idare amiridir; onu tanıyan kişi sistemin davranışını çok daha erken okumaya başlar."
  ],
  "asama-1-bilgisayar-temelleri-4": [
    "Terminalle ilk karşılaşan birçok kişi aynı duyguyu yaşar: sanki bilgisayarın ışıkları kapanmış, geriye yalnız siyah bir oda ve kısa emirler kalmıştır. Grafik arayüzde düğmeler, pencereler, simgeler vardır; terminalde ise komut yazarsın ve bilgisayar senden ne istediğini açıkça bilmeni bekler. Bu başta soğuk gelir ama bir süre sonra terminalin aslında en dürüst arayüzlerden biri olduğunu fark edersin. Grafik ekran bazen durumu güzelleştirir, bazen saklar, bazen bekleme animasyonu ile seni oyalar; terminal çoğu zaman doğrudan söyler: dosya yok, izin yok, süreç çalışmıyor, port dolu, bağlantı reddedildi, log burada. İyi bir sistemciyi terminalde izlemek, ustalaşmış bir marangozu atölyede izlemek gibidir; gereksiz hareket azdır, her komutun bir amacı vardır. Bir gün üretim ortamında uygulama cevap vermediğinde telaşlı bir ekip ekranlara bakarken yaşlı bir sistem uzmanı terminale geçti, önce süreci gördü, sonra portu kontrol etti, sonra logun son satırlarını akıttı, ardından konfigürasyon dosyasındaki küçük bir yolu işaret etti. O kadar sakin ilerledi ki arıza çözmekten çok eski bir kitabı doğru sayfasından açıyor gibiydi. Terminal kullanımı böyle bir kas hafızasıdır. `pwd` nerede olduğunu söyler, `ls` etrafı gösterir, `cd` seni başka dizine götürür, `cat` dosyayı açar, `grep` kalabalık metnin içinden ipucu ayıklar, `tail -f` canlı logu dinletir, `ps` ve benzeri araçlar çalışan süreçleri gösterir, `kill` gerektiğinde süreci sonlandırır, `ssh` uzak makineye kapı açar, `curl` bir servisin gerçekten cevap verip vermediğini test eder. Bunlar komut ezberi değildir; karanlık bir binada yaktığın küçük fenerlerdir. Terminali iyi kullanan kişi dosya sistemiyle daha yakın ilişki kurar, hatayı daha hızlı sınırlar, otomasyon yazmaya daha kolay başlar. Çünkü terminal seni tekrar eden işleri düşünmeye zorlar: Bugün elle yaptığın on adımı yarın bir betik yapabilir mi? Bir log dosyasında her gün aynı hatayı arıyorsan bunu tek komuta indirebilir misin? Bir sunucuya bağlanıp aynı kontrolleri yapıyorsan bunları belgeleyebilir misin? Mülakatta terminal sorusu geldiğinde komut listesi okumak yerine bir arıza yolculuğu anlatmak daha etkilidir: Uygulama cevap vermiyorsa önce servis çalışıyor mu bakarım, sonra port dinleniyor mu kontrol ederim, sonra son logları okurum, sonra konfigürasyon ve izinleri incelerim, gerekirse ağ isteğini `curl` ile denerim. Bu cevap, terminali yalnız yazı yazılan siyah ekran değil, sistemin nabzını tutan bir stetoskop gibi gördüğünü gösterir. Büyük kurumlarda terminal bilen kişi daha az bekler; çünkü arayüz açılmadığında, panel bozulduğunda, uzak makineye yalnız SSH kaldığında hâlâ konuşabileceği bir dil vardır."
  ],
  "asama-1-bilgisayar-temelleri-5": [
    "Linux'u öğrenmek, sunucu odasının anahtarını almak gibidir; ilk başta kapı ağır görünür, içerideki raflar karışık gelir, ama bir süre sonra modern teknoloji dünyasının büyük kısmının bu odada çalıştığını fark edersin. Web servisleri, veritabanları, konteyner platformları, güvenlik araçları, otomasyon betikleri ve bulut makineleri çoğu zaman Linux üzerinde yaşar. Linux bilmeyen yazılımcı elbette kod yazabilir; fakat kodunun üretim ortamında hangi kullanıcıyla çalıştığını, hangi dosyaya yazabildiğini, hangi servis yöneticisi tarafından ayağa kaldırıldığını, hangi log dosyasında iz bıraktığını ve güncelleme geldiğinde nasıl etkileneceğini anlamakta zorlanır. Bunu bir kurumda duran küçük bir servis sayesinde çok net görmüştüm. Geliştirici kodun kendi bilgisayarında çalıştığını söylüyordu, veritabanı bağlantısı doğruydu, ağda engel görünmüyordu. Sistemci terminalde servis tanımını açtı; çalışma dizini yanlıştı, servis kullanıcısının bazı dosyalara erişimi yoktu, ortam değişkenlerinden biri de test değerinde kalmıştı. Kod kötü değildi; Linux üzerindeki yaşam koşulları yanlıştı. İşte Linux böyle öğretir: Uygulama yalnız çalışan bir dosya değildir, bir kullanıcıya, gruba, izne, çalışma dizinine, paketlere, servis yöneticisine, log düzenine ve güvenlik sınırına bağlıdır. Kullanıcılar ve gruplar kimin ne yapabileceğini belirler; `chmod` ve `chown` gibi araçlar dosya dünyasında sahiplik ve izin dilini kurar; `systemctl` servislerin ne zaman başlayacağını, duracağını, yeniden başlayacağını gösterir; paket yöneticisi yazılım kurulumunu ve güncellemeyi disipline eder; `/var/log` altındaki kayıtlar sistemin hafızasına açılan kapıdır. Linux kullanmayı gerçekten öğrenen kişi, 'komut biliyorum' seviyesinden 'bu sistem nasıl yaşıyor' seviyesine geçer. Bir web servisi neden açılmadı diye baktığında yalnız uygulama loguna değil, servis durumuna, port dinleme bilgisine, izinlere, firewall kurallarına, disk alanına, bellek durumuna ve ortam değişkenlerine bakar. Büyük kurumlarda Linux bilgisi daha da kritikleşir; çünkü yüzlerce sunucuda aynı düzenin tekrarlanması gerekir. Bir yerde elle yapılan küçük değişiklik başka yerde unutulursa tutarsızlık doğar, güvenlik açığı kalır, bakım zorlaşır. Bu yüzden Linux aynı zamanda otomasyon kültürünün de toprağıdır. Shell betikleri, konfigürasyon yönetimi, container dünyası ve bulut operasyonları bu zeminde güçlenir. Mülakatta Linux sorulduğunda en iyi cevap, birkaç komut saymakla yetinmez; bir servisin nasıl deploy edildiğini, hangi kullanıcıyla çalıştırıldığını, logunun nerede tutulduğunu, izin sorunu çıkarsa nasıl teşhis edileceğini ve paket güncellemesinin nasıl planlanacağını anlatır. Linux'u böyle okuyan kişi, sunucuyu uzak ve gizemli bir makine gibi değil, düzenli bakıldığında güvenle hizmet veren bir çalışma ortamı gibi görür."
  ],
  "asama-1-bilgisayar-temelleri-6": [
    "Ağ temelleri, bilgisayarların birbirine nasıl selam verdiğini öğrenmektir; bu selam bazen aynı odadaki iki bilgisayar arasında, bazen başka şehirdeki veri merkezine, bazen de dünyanın öbür ucundaki bir bulut servisine gider. Kullanıcı için ağ çoğu zaman 'internet var mı yok mu' kadar basittir, ama teknik tarafta bu cümlenin altında katman katman bir yolculuk vardır. IP adresi bir ev adresi gibidir, port o evdeki kapı numarasıdır, subnet mahalle sınırını çizer, gateway mahalleden dışarı çıkan ana kapıdır, routing ise paketin hangi yoldan gideceğine karar veren trafik bilgisidir. Bir ofiste herkes internetin kesildiğini söylüyordu; telefonlar çalışıyor, bazı bilgisayarlar dışarı çıkıyor, bazıları hiçbir yere ulaşamıyordu. İlk bakışta tek sorun var sanırsın, oysa ağda tek belirti birçok köke bağlanabilir. Sonunda görüldü ki belirli bir VLAN'daki makineler gateway'e ulaşamıyordu; yani dünya yıkılmamıştı, binanın içindeki bir koridor yanlış yere bağlanmıştı. Ağ böyle bir alandır: dışarıdan tek cümleyle anlatılır, içeride ayrıntıyla çözülür. TCP/IP dediğimiz yapı, verinin parçalara ayrılıp adreslenmesini, karşı tarafa ulaştırılmasını, gerekirse kayıp paketlerin yeniden istenmesini sağlar. TCP güvenilir teslimata odaklanır; UDP daha hafif ve hızlıdır ama teslim garantisi vermez. Web servisi, veritabanı bağlantısı, DNS sorgusu, video görüşmesi, dosya paylaşımı gibi farklı işler farklı portlar ve protokollerle yaşar. Bu yüzden 'uygulama çalışmıyor' dendiğinde iyi teknikçi önce hangi yola bakacağını bilir: İsim çözülüyor mu, IP'ye erişiliyor mu, port açık mı, firewall engelliyor mu, rota doğru mu, karşı servis dinliyor mu? Ağ bilgisi yazılımcı için de değerlidir, çünkü API hatalarının bir kısmı koddan değil bağlantı yolundan doğar. Sistemci için değerlidir, çünkü sunucu ayakta olsa bile yanlış subnet veya gateway yüzünden görünmez kalabilir. Güvenlikçi için değerlidir, çünkü segmentasyon yapılmayan ağda küçük bir ihlal hızla büyür. Yönetici için değerlidir, çünkü kurumun internet çıkışı, VPN kapasitesi, yedek hatları ve kurumlar arası bağlantıları hizmet sürekliliğinin damar sistemidir. Ağ temellerini öğrenirken hedef herkesin ağ mühendisi olması değildir; hedef, bir sorun çıktığında yolculuğu aklında canlandırabilmektir. Bir paket nereden çıkıyor, hangi adrese gidiyor, hangi kapıdan geçiyor, hangi güvenlik duvarına uğruyor, hangi servisten cevap bekliyor? Bu soruları sorabilen kişi karanlıkta kalmaz. Mülakatta ağ sorusu geldiğinde ev adresi benzetmesiyle başlayıp gerçek arıza sırasına geçmek iyi çalışır: DNS çözümlemesini kontrol ederim, ping veya benzeri araçlarla erişimi sınarım, port bağlantısını denerim, routing ve firewall ihtimalini ayırırım, uygulama loguyla sonucu karşılaştırırım. Böyle bir cevap, ağı yalnız kablo ve modem sanmadığını; modern yazılımın görünmeyen yol sistemini okuyabildiğini gösterir."
  ],
  "asama-1-bilgisayar-temelleri-7": [
    "Tarayıcıya bir adres yazdığında ekranda neredeyse hiçbir şey olmamış gibi görünür; birkaç harf, bir Enter tuşu, kısa bir bekleme ve sayfa açılır. Oysa o bir saniyenin içinde küçük ama kusursuz işlemesi gereken bir sefer vardır. Önce tarayıcı alan adının hangi IP adresine gittiğini öğrenmek için DNS'e başvurur. DNS'i eski şehir rehberleri gibi düşünebilirsin: Sen kurumun adını bilirsin, sistem ise hangi adrese gideceğini öğrenmek zorundadır. DNS cevabı geldikten sonra bağlantı kurulmaya çalışılır; web dünyasında çoğu zaman TCP ile güvenilir bir kanal açılır, ardından HTTPS devreye girer ve TLS el sıkışmasıyla iki taraf güvenli konuşmanın şartlarını belirler. Kullanıcının gördüğü küçük kilit simgesi, arka tarafta yapılan bu kriptografik anlaşmanın sade işaretidir. Sonra HTTP isteği gider: hangi sayfa isteniyor, hangi metot kullanılıyor, hangi başlıklar gönderiliyor, kullanıcı kimliğini gösteren çerez ya da token var mı? Sunucu isteği alır, gerekirse backend'e yönlendirir, veritabanına bakar, cevap üretir ve bir durum koduyla geri döner. 200 başarıyı, 301 yönlendirmeyi, 401 kimlik sorununu, 403 yetki engelini, 404 bulunamayan kaynağı, 500 ise sunucu tarafındaki daha derin sıkıntıyı anlatabilir. Bir kamu portalının sabah açılmadığı günü hatırlıyorum; herkes uygulama çöktü sandı, çünkü kullanıcı açısından site açılmıyordu. Uygulama ayaktaydı, veritabanı sağlıklıydı, sunucular cevap verebiliyordu. Sorun sertifika zincirindeydi; tarayıcı güvenmediği için kapıyı kapatıyordu. O gün HTTPS'in yalnız 'güvenli olsun' kutucuğu olmadığını, hizmet sürekliliğinin parçası olduğunu bir kez daha gördük. DNS tarafı da aynı kadar hassastır. Yanlış A kaydı kullanıcıyı eski sunucuya götürebilir, CNAME zinciri beklenmedik gecikme yaratabilir, TTL yüksekse düzelttiğin kayıt saatlerce eski haliyle yaşamaya devam edebilir. HTTP tarafında da hata kodlarını doğru kullanmayan API'ler operasyonu kör eder; her hataya 200 dönen servis, karşı tarafa yalan söyleyen nazik bir görevli gibidir. Bu başlığı öğrenirken amaç protokol isimlerini sıraya dizmek değildir; tarayıcıdan sunucuya giden yolu gözünde canlandırmaktır. Bir kullanıcı 'site açılmıyor' dediğinde hangi soruları soracağını bilmelisin: Alan adı çözülüyor mu, IP doğru mu, port açık mı, sertifika geçerli mi, TLS zinciri sağlam mı, HTTP durum kodu ne, cevap CDN'den mi geliyor, backend'e ulaşıyor mu? Mülakatta bu konu sorulduğunda bir isteğin yolculuğunu hikâye et: Kullanıcı adresi yazar, DNS IP'yi bulur, TCP bağlantısı kurulur, TLS güvenli kanalı açar, HTTP isteği gider, sunucu işler, cevap döner, tarayıcı HTML, CSS ve JavaScript'i yorumlayıp sayfayı çizer. Bu akışı anlatabilen kişi web'i yalnız görünen ekran sanmaz; ekrandaki sakinliğin arkasındaki düzenli trafiği de okur."
  ],
  "asama-1-bilgisayar-temelleri-8": [
    "Git'i ilk öğrenirken insana biraz gereksiz tören gibi gelebilir: dosyayı değiştirdin, sonra ekle, sonra commit at, sonra branch aç, sonra push et, sonra pull request bekle. Küçük bir dosyada bu kadar adıma ne gerek var diye düşünebilirsin. Fakat ekip büyüdüğünde, canlı sistem hata verdiğinde, üç ay önce alınan karar bugün sorgulandığında Git'in aslında kodun hafızası olduğunu anlarsın. Bir projede en tehlikeli cümlelerden biri 'kim değiştirdi hatırlamıyorum'dur; Git bu cümleyi zayıflatır. Hangi satır ne zaman değişti, hangi gerekçeyle commit edildi, hangi branch'te geliştirildi, kim inceledi, hangi sürümde canlıya çıktı soruları artık kişisel hafızaya kalmaz. GitHub ise bu hafızayı ekip masasına taşır. Pull request yalnız kodu birleştirme isteği değildir; tartışmanın, incelemenin, test sonucunun, güvenlik uyarısının ve ekip kararının kayda geçtiği yerdir. Bir canlıya geçiş gecesinde bunu çok net görmüştüm. Yeni sürüm çıktıktan sonra belirli kullanıcıların işlemi hata vermeye başladı. İlk refleks panikti; sonra Git geçmişi açıldı. Son değişiklikler incelendi, ilgili pull request bulundu, orada yapılan tartışma okundu, testte kapsanmayan bir sınır koşulu fark edildi ve rollback kararı hızlıca verildi. O gece Git yalnız geliştirici aracı değil, krizi kısaltan kurumsal hafıza oldu. Branch mantığı da bu yüzden değerlidir. Ana hattı koruyup yeni işi ayrı dalda geliştirmek, laboratuvarla canlı yolu birbirinden ayırmak gibidir. Commit küçük ve anlamlıysa geri dönmek kolaylaşır; commit mesajı açıklayıcıysa gelecekteki okuyucuya not bırakılmış olur. Büyük, belirsiz, her şeyi içeren commit ise kapalı koli gibidir; içinde ne olduğunu ancak açınca anlarsın. Merge conflict ise Git'in sana söylediği basit ama önemli bir gerçektir: iki kişi aynı yere dokundu, şimdi insan kararı gerekiyor. Bu yüzden Git öğrenirken komutların yanında ekip iletişimini de öğrenirsin. `add`, `commit`, `branch`, `merge`, `rebase`, `pull`, `push` teknik kelimelerdir ama arkasında güven düzeni vardır. GitHub tarafında issue, review, branch protection ve CI/CD entegrasyonu devreye girince kod artık bireysel üretim olmaktan çıkar, denetlenebilir ekip çalışmasına dönüşür. Mülakatta Git sorulduğunda komut ezberi yapmak yerine küçük bir hikâye anlat: Yeni özellik için branch açarım, küçük commitlerle ilerlerim, pull request oluştururum, testler çalışır, ekip inceler, conflict varsa niyeti anlayarak çözerim, canlıda sorun çıkarsa hangi commit'in geldiğini bulup geri dönüş planı yaparım. Böyle anlattığında Git'i yalnız dosya geçmişi değil, yazılım üretiminin emniyet kemeri olarak gördüğün anlaşılır. Üst düzey kurumlarda bu emniyet kemeri daha da kritiktir; çünkü kod yalnız çalışmak zorunda değildir, neden çalıştığını, kim tarafından değiştirildiğini ve gerektiğinde nasıl geri alınacağını da anlatabilmelidir."
  ],
  "asama-1-bilgisayar-temelleri-9": [
    "Teknik mülakatta temel kavramlar çoğu zaman kolay soru gibi görünür ama aslında adayın düşünme biçimini ölçer. 'RAM nedir?' sorusu çocukça gelebilir; fakat aday RAM'i çalışma masası gibi anlatıp, diskle farkını kurup, bellek yetmediğinde işletim sisteminin diski geçici alan gibi kullanacağını söyleyip, bunun kullanıcıya yavaşlık olarak döneceğini açıklıyorsa görüşme bir anda derinleşir. 'DNS nedir?' sorusu da yalnız 'alan adını IP'ye çevirir' cevabıyla kapanabilir; ama iyi aday tarayıcıdan başlayan isteğin DNS, TCP, TLS, HTTP, backend ve cevap kodu üzerinden yürüdüğünü anlatırsa masadaki hava değişir. Ben iyi adayların ortak bir alışkanlığını zamanla fark ettim: Bilmedikleri yerde dururlar ama bildikleri kısmı düzenli anlatırlar. 'Bu ayrıntıyı ezbere söylemeyeyim, ama üretim ortamında önce şu metriklere ve şu loglara bakarım' cümlesi bazen kendinden çok emin uydurmalardan daha güçlüdür. Çünkü teknik dünya her şeyi ezbere bilenleri değil, doğru kanıta yürüyenleri sever. Temel kavramlara hazırlanırken kendine küçük bir cevap düzeni kur: Önce sade tanım ver, sonra gerçek hayattan bir benzetme yap, ardından bir arıza veya proje örneğiyle kavramı çalıştır, en sonunda da sınırını söyle. CPU için 'komutları işler' de, sonra RAM ve diskle ilişkisini anlat; Linux için 'sunucu işletim sistemi' de, sonra kullanıcı, izin, servis ve log düzenine bağla; Git için 'versiyon kontrolüdür' de, sonra rollback ve pull request hikâyesiyle kurumsal hafızaya getir; ağ için IP, port, gateway ve routing'i bir paketin yolculuğu gibi anlat. Bu yöntem seni ezberden çıkarır. Mülakatta görüşmeci çoğu zaman yalnız doğru cevabı değil, cevabın içinde kaybolup kaybolmadığını izler. Konuyu fazla büyütüp ana soruyu unutmak da zayıflıktır; çok kısa kesip bağlam vermemek de. Olgun cevap, sade başlayıp gerektiği kadar derinleşen cevaptır. Üst düzey kurumlarda teknik yöneticiliğe giden yol da aynı alışkanlıktan geçer. Yönetici her komutu ezbere bilmek zorunda değildir ama temel kavramları yanlış anlarsa yanlış kişiye yanlış soru sorar. Bir kesintide 'sunucu güçlüydü, nasıl yavaşlar?' diyen yönetici ile CPU, RAM, disk, ağ ve veritabanı darboğazını ayırabilen yönetici aynı karar kalitesinde değildir. Bu bölümün sonunda kazanman gereken refleks şudur: Her teknik kavramı tanım, akış, risk ve kanıt dörtlüsüyle anlat. Tanım bilginin kapısıdır, akış kavramı hayata sokar, risk olgunluk katar, kanıt ise seni sahaya bağlar. Böyle konuşan kişi temel konularda bile üst seviye izlenim bırakır."
  ],
  "asama-2-programlama-1": [
    "Programlamayı ilk öğrenirken insan dili öğreniyormuş gibi hisseder: değişken, döngü, fonksiyon, sınıf, liste, sözlük, dosya, hata. Fakat yıllar geçip birkaç gerçek proje gördüğünde şunu anlarsın: programlama bilgisayara emir yağdırmak değil, dağınık bir problemi adım adım yürünebilir hale getirmektir. Bir birimde her sabah üç saat süren küçük bir iş vardı; farklı klasörlerden Excel dosyaları toplanıyor, bazı satırlar kontrol ediliyor, hatalı olanlar ayrılıyor, sonuç başka bir dosyaya yazılıyor ve yöneticiye gönderiliyordu. Bunu yapan kişi işi iyi biliyordu ama işi her gün aynı şekilde yapmak zorundaydı. Genç bir geliştirici çok parlak olmayan, hatta ilk bakışta sıradan görünen bir Python betiği yazdı: klasörü gez, dosyayı oku, beklenen kolonlar var mı kontrol et, hatalı satırı ayrı listeye koy, temiz veriyi raporla, sonunda kısa bir özet üret. Kod dünyayı değiştirmedi ama birimin sabahını değiştirdi. İşte programlama böyle başlar; karmaşık görünen gündelik sıkıntıyı küçük, açık, tekrar edilebilir adımlara bölersin. İyi programcı syntax bilen kişi değildir yalnızca; problemi dinleyen, varsayımı yakalayan, verinin şeklini soran, hata durumunu düşünen, okuyan kişinin anlayacağı isimler seçen kişidir. Değişken adı bile karakter meselesidir: `x` bazen yeterlidir, ama üç ay sonra başka birinin okuyacağı iş kodunda `basvuru_tarihi` ya da `geciken_kayitlar` daha insaflıdır. Akış tasarlarken de aynı dikkat gerekir. Önce girdiyi tanırsın, sonra dönüşümü kurarsın, sonra çıktıyı güvenceye alırsın, sonra beklenmeyen durumları düşünürsün. Kullanıcı boş dosya verirse ne olur, tarih formatı bozuksa ne olur, API cevap vermezse ne olur, veritabanı bağlantısı koparsa ne olur? Programlama seni bu sorulara alıştırır. Mülakatta 'programlama nedir?' diye sorulmasa bile her teknik sorunun altında bu refleks vardır. Bir problem verildiğinde hemen kod yazmaya atlamayan, önce örnek veri isteyen, sınır koşullarını konuşan, sonra sade bir çözüm kuran aday olgun görünür. Büyük kurumlarda bu olgunluk daha değerlidir; çünkü kod yalnız bugün çalışmaz, yarın değişir, başka ekip tarafından okunur, canlı sistemde hata verir, denetimde sorulur, yeni ihtiyaçla genişler. Programlamaya giriş bu yüzden klavyede hızlanma dersi değil, düşünceyi düzenleme dersidir. Kod satırları o düşüncenin kaydıdır; düşünce karışıksa kod da karışır, düşünce berraksa kullanılan dil ne olursa olsun sistem nefes almaya başlar."
  ],
  "asama-2-programlama-2": [
    "Python'un güzelliği, yeni başlayan kişiyi fazla tökezletmeden düşüncenin kendisine yaklaştırmasıdır. Bazı diller ilk günden noktalı virgül, tip bildirimi ve uzun yapıların arasında insanı biraz gerer; Python daha sade bir kapı açar ve 'önce ne yapmak istediğini söyle' der. Değişkenler isim verdiğin küçük kutulardır; bir başvuru sayısı, bir kullanıcı adı, bir dosya yolu, bir toplam tutar bu kutularda durur. Koşullar yol ayrımlarıdır; kayıt eksikse başka yere git, tutar sıfırdan büyükse işle, kullanıcı yetkili değilse dur. Döngüler tekrar eden işleri yorulmadan yaptırır; klasördeki tüm dosyaları gez, listedeki tüm kullanıcıları kontrol et, API'den gelen tüm kayıtları işle. Bunlar basit görünür ama büyük sistemlerin temel taşlarıdır. Bir otomasyon işinde yüzlerce dosyanın adı kurum standardına göre değiştirilecek, her dosyanın içinden belirli alanlar okunacak, sonuç CSV olarak raporlanacaktı. Python burada ağır bir mühendislik gösterisi yapmadı; sade bir yardımcı gibi işi aldı ve bitirdi. `os` ile klasör gezildi, `csv` ile çıktı yazıldı, birkaç koşulla hatalı kayıtlar ayrıldı, sonunda kullanıcıya kaç dosyanın işlendiği söylendi. İşin sihri dilin gösterişinde değil, problemin doğru parçalanmasındaydı. Python temellerini öğrenirken değişkenin değer taşıdığını, tipin davranışı etkilediğini, listenin sıralı veri tuttuğunu, sözlüğün anahtar-değer ilişkisi kurduğunu, döngünün tekrar eden işi düzenlediğini anlamak gerekir. Boş liste gelirse ne olacak, sayı beklerken metin gelirse ne olacak, dosya yolu yanlışsa program nasıl davranacak? Yeni başlayan kişi çoğu zaman sadece mutlu yolu yazar; deneyim arttıkça kötü günleri de hesaba katmaya başlar. Mülakatta Python sorusu geldiğinde `for` döngüsünü ezbere göstermek yerine küçük bir senaryo anlatmak daha değerlidir: Bir klasördeki JSON dosyalarını okuyup hatalı olanları ayırırım, geçerli kayıtları listeye alırım, toplamları hesaplarım, sonuçları yazmadan önce tip ve zorunlu alan kontrolü yaparım. Böyle bir cevap, Python'u yalnız öğrenme dili değil, gerçek iş yardımcısı olarak gördüğünü gösterir. Python sana hızlı başlama imkânı verir ama dikkatsizliği affetmez; kötü isimlendirme, kontrolsüz büyüyen fonksiyon, yakalanmayan hata ve test edilmeyen varsayım küçük betiği bile bakım yüküne çevirebilir. Bu yüzden Python temelleri hafif görünse de ciddiye alınmalıdır. Değişken, koşul ve döngü doğru oturursa ileride FastAPI, Pandas, PyTorch veya otomasyon dünyasına geçtiğinde elin daha sağlam olur."
  ],
  "asama-2-programlama-3": [
    "Fonksiyon yazmak, koda küçük sorumluluk odaları açmaktır. Her şeyi tek dosyada, tek uzun akışta tutmak başlangıçta hızlı hissettirir; çünkü düşünceyi bölmeden yazarsın, hemen çalıştırırsın, sonuç alırsın. Fakat üçüncü hafta bir hata çıktığında veya yeni istek geldiğinde o tek parça kod, içine girilmesi zor bir depoya dönüşür. Bir bakım projesinde yüzlerce satırlık bir fonksiyon görmüştüm; aynı gövdenin içinde veritabanından kayıt çekiliyor, dosya oluşturuluyor, e-posta gönderiliyor, rapor hazırlanıyor, eski dosya siliniyor, hata olursa kullanıcıya mesaj dönülüyordu. İlk yazan kişi muhtemelen aceleyle işi bitirmişti; fakat yıllar sonra ekip o fonksiyonun etrafında sessizce dolaşıyor, bir satıra dokununca başka yerin bozulmasından korkuyordu. Parçalara ayırma işi başladığında yalnız kod değil, ekibin yüzü de rahatladı. `kayitlari_getir`, `raporu_olustur`, `eposta_gonder`, `hatali_kayitlari_ayir` gibi küçük fonksiyonlar ortaya çıktıkça sistemin niyeti okunur hale geldi. Modüller de aynı disiplinin daha büyük odalarıdır. Bir dosya yalnız veritabanı erişimini, başka bir dosya API istemcisini, başka biri iş kurallarını, başka biri yardımcı dönüşümleri taşıyorsa proje içinde yol bulmak kolaylaşır. Okunabilir kod lüks değildir; kurumsal zorunluluktur. Çünkü senin bugün yazdığın kodu yarın başka biri okuyacak, belki gece nöbetinde, belki canlı sistem hata verirken, belki sen artık o ekipte değilken. O kişiye yapılacak en büyük iyilik, kodun niyetini açık bırakmaktır. İsimlendirme burada sessiz bir öğretmendir. `data` yerine `geciken_basvurular`, `handle` yerine `odeme_sonucunu_isle`, `temp` yerine `rapor_satirlari` yazmak yalnız güzellik değil, bakım kolaylığıdır. Fonksiyonların kısa olması da yalnız estetik değildir; test edilebilirliği artırır. Küçük fonksiyonun girdisi ve çıktısı daha kolay anlaşılır, hata yeri daha hızlı bulunur, değişiklik etkisi daha dar kalır. Mülakatta fonksiyon ve modül sorulduğunda 'kod tekrarını azaltır' demek doğru ama eksiktir. Daha güçlü cevap, fonksiyonların sorumluluğu görünür kıldığını, modüllerin projeyi zihinsel olarak bölünebilir hale getirdiğini, okunabilirliğin ekip verimliliği ve hata yönetimi için kritik olduğunu anlatır. Büyük kurumlarda kod çoğu zaman bireysel üretim değil, yıllarca yaşayacak kurumsal varlıktır. O varlığın dili açık, odaları düzenli, kapıları anlaşılır olmalıdır."
  ],
  "asama-2-programlama-4": [
    "OOP yani nesne yönelimli programlama ilk öğrenildiğinde biraz büyülü görünür; sınıflar, nesneler, kalıtım, kapsülleme, polimorfizm gibi kelimeler gelir ve insan her şeyi sınıfa çevirmek ister. Sonra gerçek projede yavaş yavaş anlarsın ki iyi OOP, gösterişli sınıf diyagramları çizmek değil, sorumluluğu doğru yerde tutma sanatıdır. Bir ödeme sistemini düşün: müşteri var, ödeme var, fatura var, iade var, kampanya var, işlem geçmişi var. Bunları gelişi güzel fonksiyonlarla her yere dağıtırsan bir gün iade kuralı değiştiğinde fatura kodu bozulur, müşteri güncellemesi ödeme geçmişine dokunur, kampanya indirimi muhasebe raporunu etkiler. OOP burada dünyayı küçük anlamlı kavramlara ayırır. `Payment` yalnız tutar tutmaz; ödeme başlatma, doğrulama, durum değiştirme gibi davranışlarla ilgilenebilir. `Invoice` belgenin kesilmesi, iptali ve arşivlenmesiyle yaşar. `Customer` müşteri bilgisini taşır ama her işi yapmaya kalkarsa sınıf şişer ve sistemin küçük bir tanrısına dönüşür. Kapsülleme, bir nesnenin iç düzenini kontrolsüz erişimden korur; dışarıya gerekli davranışı sunar ama iç hesaplaşmayı her yere açmaz. Kalıtım ortak özellikleri paylaşmak için kullanılabilir ama kötü kullanıldığında sistemi beton gibi sertleştirir. Polimorfizm, aynı çağrının farklı nesnelerde farklı davranabilmesini sağlar; örneğin farklı ödeme sağlayıcıları aynı `odeme_al` sözleşmesini uygulayabilir. Bunlar tanım olarak basit görünür ama değerleri bakım günü ortaya çıkar. Bir projede indirim kuralları her yere dağılmıştı; yeni kampanya geldiğinde üç farklı yerde üç farklı hesap yapılmış, raporlar tutmamıştı. Kurallar daha anlamlı sınıflara ve servislere ayrılınca hata yalnız düzelmedi, ekip de hangi işin nerede yaşadığını görmeye başladı. Mülakatta OOP sorulduğunda kapsülleme, kalıtım, polimorfizm tanımlarını ver ama orada kalma. Bir iş alanı örneği seç ve sınır çizmenin neden önemli olduğunu anlat. İyi tasarım, değişiklik geldiğinde sistemin tamamının titrememesidir. Üst düzey kurumlarda OOP veya genel olarak tasarım becerisi, kodun bugünkü çalışmasından çok yarınki bakım maliyetini belirler. Bir sınıfın sorumluluğu genişledikçe ekip o sınıfa dokunmaktan korkuyorsa, teknik borç artık insan davranışına dönüşmüş demektir."
  ],
  "asama-2-programlama-5": [
    "Hata yönetimi, yazılımın kibri bırakıp dünyanın kusurlu olduğunu kabul etmesidir. Dosya beklediğin yerde olmayabilir, JSON bozuk gelebilir, ağ isteği yarıda kesilebilir, kullanıcı zorunlu alanı boş bırakabilir, tarih formatı değişebilir, karşı sistem bugün sayı gönderdiği alanı yarın metin olarak dönebilir. Mutlu yolda çalışan kod ilk demo için yeterlidir; gerçek hayatta yaşayan kod ise kötü günlerde nasıl davrandığıyla değer kazanır. Bir entegrasyon gecesinde bunu sert biçimde görmüştük. Karşı sistemden gelen kayıtların içinde tutar alanı bazen sayı, bazen metin, bazen de boş değer olarak geliyordu. İlk yazılan kod, verinin sözleşmeye uygun geleceğini varsaymıştı ve ilk bozuk kayıtta durdu. İşin kötü tarafı, hatalı kayıt ayrılmadığı için hangi satırın sorun çıkardığı da hemen anlaşılamadı. Sonra küçük ama çok değerli bir doğrulama katmanı eklendi: Gelen JSON önce zorunlu alanlar açısından kontrol edildi, tipler dönüştürülebildiği yerde dönüştürüldü, dönüştürülemeyen kayıtlar ayrı hata listesine alındı, her hataya anlaşılır mesaj ve log eklendi. Sistem bir anda daha zeki olmadı ama daha olgun hale geldi. JSON bu noktada özellikle öğreticidir. Basit görünür; süslü parantezler, anahtar-değer çiftleri, listeler. Fakat entegrasyon dünyasında alan adı, veri tipi, tarih formatı, `null` değerin anlamı, boş string ile eksik alan arasındaki fark, sürüm değişikliği ve geriye uyumluluk çok önemlidir. İki sistem aynı JSON'u farklı yorumluyorsa teknik bağlantı kurulmuş olsa bile iş anlaşması kurulmamış demektir. Hata yönetimi yalnız `try-except` yazmak da değildir. Hangi hatayı kullanıcıya göstereceksin, hangisini loglayacaksın, hangisinde yeniden deneyeceksin, hangisinde işlemi durduracaksın, hangisinde hatalı kaydı ayırıp diğerleriyle devam edeceksin? Bu kararlar iş süreciyle ilgilidir. Banka ödemesinde sessizce devam etmek tehlikeli olabilir; toplu rapor aktarımında tek hatalı satır yüzünden bin kaydı durdurmak gereksiz olabilir. Mülakatta dosya işlemleri, JSON veya hata yönetimi sorulduğunda 'exception yakalarım' demek başlangıçtır. Daha iyi cevap, hatanın türüne göre davranış tasarlamaktır: Dosya yoksa kullanıcıya anlamlı mesaj veririm, JSON parse edilemiyorsa ham cevabı güvenli biçimde loglarım, zorunlu alan eksikse kaydı reddederim, geçici ağ hatasında sınırlı retry uygularım, kritik işlemde tutarlılığı korumak için transaction kullanırım. İyi yazılım yalnız güzel günde değil, kötü günde de anlaşılır davranır. Kullanıcıya ne olduğunu söyler, geliştiriciye iz bırakır, yöneticiyi yanlış güven duygusuna sokmaz."
  ],
  "asama-2-programlama-6": [
    "API kullanmak, başka bir sistemin kapısını çalmaktır. Kapıyı doğru adreste çalman, doğru kimlikle gitmen, içeri girince hangi dili konuşacağını bilmen, cevap geldiğinde gerçekten ne söylendiğini anlaman gerekir. HTTP isteği göndermek birkaç satır kodla yapılabilir; üretim kalitesinde API kullanmak ise sabır, dikkat ve biraz da diplomasi ister. Bir entegrasyonda ekip günlerce karşı sistemin çalışmadığını düşünmüştü. Bizim uygulama her başarısız cevabı aynı genel hata mesajına çeviriyor, durum kodunu ve cevap gövdesini düzgün okumuyordu. Karşı taraf aslında 'yetkiniz yok', 'alan eksik', 'rate limit aşıldı' gibi farklı şeyler söylüyordu; bizim sistem hepsini 'entegrasyon hatası' diye duyuyordu. API cevabını iyi okumayan uygulama, karşısındaki insan konuştuğu halde duymayan biri gibidir. İyi API kullanımı adresle başlar: endpoint doğru mu, path parametreleri yerinde mi, query parametreleri beklenen formatta mı? Sonra kimlik gelir: API key, bearer token, OAuth2 akışı, imza veya kurumlar arası sertifika gerekebilir. Ardından istek gövdesi gelir: JSON alanları doğru mu, tarih formatı uyuyor mu, zorunlu alanlar tamam mı? Cevap tarafında durum kodu, hata mesajı, boş cevap, sayfalama, limit ve retry davranışı okunmalıdır. Timeout değeri konulmamış bir API çağrısı, sistemin sonsuza kadar kapıda beklemesine yol açabilir. Retry düşünülmemişse geçici ağ hatası kalıcı başarısızlığa dönüşür; sınırsız retry yazılmışsa bu kez karşı sistemi döven kaba bir komşu olursun. Rate limit aşılırsa beklemeyi, idempotency gerekiyorsa aynı isteğin iki kez işlenmemesini, log tutulacaksa hassas verinin maskelenmesini düşünmek gerekir. API entegrasyonları teknik olduğu kadar sözleşmeseldir. İki ekip aynı alan adından aynı anlamı çıkarmıyorsa sorun koddan önce anlaşmadadır. Mülakatta API kullanımı sorulduğunda `requests.get` örneği verip durma; küçük bir iş akışı anlat: Kimlik bilgisiyle isteği hazırlarım, timeout koyarım, durum kodunu ayırırım, geçici hatalarda sınırlı retry uygularım, kalıcı hatalarda anlaşılır log üretirim, hassas veriyi saklamam, API sözleşmesi değişirse versiyon bilgisini takip ederim. Böyle anlattığında yalnız istek atan değil, entegrasyonu yaşatabilecek biri gibi görünürsün. Büyük kurumlarda API, iki sistemin birbirine verdiği teknik sözdür; sözü dikkatli dinlemek de en az sözü göndermek kadar önemlidir."
  ],
  "asama-2-programlama-7": [
    "SQL öğrenmek, kurumun hafızasına doğru soru sormayı öğrenmektir. Birçok uygulamanın arkasında sessizce duran tablolar vardır; başvuru tablosu, kullanıcı tablosu, ödeme tablosu, stok tablosu, log tablosu. Tabloyu raf gibi, satırı rafın içindeki kayıt gibi, kolonu kaydın özelliği gibi düşünebilirsin. Fakat SQL'in asıl gücü tek rafı okumakta değil, farklı raflardaki bilgiyi anlamlı biçimde birleştirmektedir. JOIN burada devreye girer ve iyi kullanıldığında dağınık kayıtları hikâyeye çevirir; kötü kullanıldığında ise yanlış raporu çok ikna edici gösterir. Bir yönetim raporunda başvuru sayıları beklenenden neredeyse iki kat fazla görünüyordu. İlk anda kimse veritabanının bozuk olduğunu düşünmedi, çünkü kayıtlar yerindeydi. Sorgu incelendiğinde başvuru tablosu ile işlem geçmişi tablosu bire-çok ilişkiyle bağlanmış, her başvuru işlem sayısı kadar çoğalmıştı. Veri yalan söylememişti; biz yanlış soru sormuştuk. SQL böyle bir disiplindir. `SELECT` ile ne istediğini söylersin, `WHERE` ile sınır çizersin, `JOIN` ile ilişkileri kurarsın, `GROUP BY` ile özetlersin, `ORDER BY` ile sıralarsın. Fakat her adımın anlamını bilmek gerekir. `LEFT JOIN` ile `INNER JOIN` arasındaki fark rapor sonucunu değiştirebilir; `COUNT(*)` ile `COUNT(DISTINCT ...)` arasındaki fark yönetim kararını etkileyebilir. Index konusu da bu dünyanın ayrı bir dersidir. Index sorguyu hızlandırabilir ama sihir değildir. Hangi kolonlarda arama yapılıyor, veri seçiciliği ne, yazma işlemleri ne kadar yoğun, index bakım maliyeti kabul edilebilir mi? Her kolona index koymak, her kitaba ayrı ayrı yüz dizin eklemeye benzer; aramada bazı şeyler kolaylaşır ama rafı düzenlemek ağırlaşır. Query plan okumak ise veritabanının sorgunu nasıl yürüttüğünü anlamaktır. Büyük tabloda yanlış sorgu yalnız yavaş rapor üretmez; canlı sistemi yorabilir, disk I/O artırabilir, lock bekletebilir. Mülakatta SQL sorusu geldiğinde syntax göstermek yetmez. Bir rapor hatası, bir performans sorunu veya bir transaction ihtiyacı üzerinden anlat. 'Başvuru sayısı neden fazla çıktı?' gibi bir örnek, JOIN mantığını kuru tanımdan daha iyi gösterir. Üst düzey kurumlarda SQL bilen yönetici bile avantajlıdır; çünkü rapordaki sayıya körü körüne güvenmez, tanım birliğini, kaynak tabloyu, güncelleme zamanını ve sorgu mantığını sorar. SQL, verinin dilidir; bu dili doğru konuşmayan kurum kendi hafızasını yanlış okuyabilir."
  ],
  "asama-2-programlama-8": [
    "PostgreSQL birçok kurumda ana defter gibidir; sipariş, başvuru, ödeme, envanter, personel veya işlem kaydı burada duruyorsa sistemin gerçeği de büyük ölçüde buradadır. Uygulama ekranı güzel olabilir, cache hızlı olabilir, arama motoru sonuçları parlak gösterebilir; fakat hesap sorulduğunda resmi kayıt neredeyse kurumun hafızası orasıdır. PostgreSQL'i yalnız geliştiricinin bağlantı string'i olarak görmek bu yüzden büyük hatadır. Bu dünya transaction, constraint, foreign key, index, backup, yetki ve migration gibi kavramlarla yaşar. Bir gece veri aktarımı yapılırken transaction kullanılmadığı için kayıtların yarısı geçmiş, yarısı kalmıştı. Ekran ilk bakışta çalışıyor görünüyordu ama kurumun hafızası ikiye bölünmüştü; bazı başvurular vardı ama ilişkili detayları yoktu, bazı ödeme kayıtları oluşmuş ama durum alanları güncellenmemişti. Transaction kavramı o gece ders kitabından çıkıp masaya oturdu. ACID diye anlatılan özellikler de böyle anlaşılır: Atomicity işlemin ya tamamen olmasını ya hiç olmamasını ister; Consistency verinin kurallara uygun kalmasını sağlar; Isolation aynı anda çalışan işlemlerin birbirini bozmasını engeller; Durability işlem tamamlandıktan sonra kaydın kalıcı olmasını bekler. Constraint'ler veriye sınır çizer; zorunlu alan, benzersizlik, yabancı anahtar ilişkisi gibi kurallar uygulama unutsa bile veritabanı tarafından korunabilir. Foreign key, iki tablo arasındaki ilişkinin rastgele metin eşleşmesi değil, veritabanı düzeyinde tanınan bağ olmasını sağlar. Index performans için önemlidir ama yanlış kullanılırsa yazma maliyetini artırır. Backup ve restore ise güven cümlesinin test edilmiş halidir; yedek alıyorum demek yetmez, geri dönebiliyor muyum sorusu sorulmalıdır. PostgreSQL'in güçlü taraflarından biri de açık kaynak olmasına rağmen kurumsal ciddiyet taşımasıdır. JSONB gibi esnek alanlar, extension ekosistemi, replication imkânı ve gelişmiş sorgu yetenekleri onu farklı işlerde değerli kılar. Fakat güç arttıkça sorumluluk da artar. Migration dosyaları kontrolsüz çalıştırılırsa canlı veri bozulabilir; yetkiler geniş verilirse hassas kayıtlar gereksiz kişilerin önüne açılabilir; yavaş sorgular izlenmezse sistem sessizce yorulur. Mülakatta PostgreSQL sorulduğunda tablo oluşturmayı göstermek başlangıçtır. Daha güçlü cevap, bir sipariş veya başvuru akışı üzerinden veri bütünlüğünü anlatır: Kayıt transaction içinde yazılır, ilişkiler foreign key ile korunur, kritik alanlara constraint konur, sorgu yoğunluğu için uygun index düşünülür, migration sürümlenir, backup düzenli test edilir. Üst düzey kurumlarda PostgreSQL bilmek yalnız veritabanı uzmanının işi değildir; teknik yönetici de ana kayıt nerede duruyor, nasıl korunuyor, nasıl yedekleniyor, kim erişiyor ve rapor hangi veriden besleniyor sorularını sorabilmelidir. Çünkü veri bütünlüğü bozulduğunda sorun teknik kalmaz; rapora, faturaya, vatandaş işlemine, denetime ve yöneticinin güvenine dokunur."
  ],
  "asama-2-programlama-9": [
    "Python ekosistemi büyük bir atölye gibidir; bir köşede FastAPI ile web servisi yazarsın, başka köşede Pandas ile veriyi temizlersin, bir rafta PyTorch ve TensorFlow modelleri durur, yanında test araçları, paket yöneticileri, notebook'lar ve otomasyon betikleri vardır. Bu atölye zengin olduğu için çekicidir ama her alet her işe uygun değildir. İyi geliştirici eline ilk gelen çekici kullanmaz; önce işin ne olduğunu anlar. Bir veri ekibi ilk model denemesini notebook üzerinde yapmıştı. CSV dosyası okunuyor, birkaç temizlik adımı uygulanıyor, model eğitiliyor, sonuçlar etkileyici görünüyordu. Toplantıda herkes memnundu. Sonra aynı modelin gerçek kullanıcıya API üzerinden cevap vermesi istendiğinde hava değişti. Notebook'ta rahatça çalışan kodun servis haline gelmesi gerekiyordu: Girdi doğrulanmalıydı, cevap süresi ölçülmeliydi, model dosyası versiyonlanmalıydı, log tutulmalıydı, hata olursa anlamlı mesaj dönmeliydi, aynı anda gelen istekler düşünülmeliydi. Araştırma kodu ile üretim servisi arasındaki mesafe orada görünür oldu. FastAPI bu noktada hafif ve güçlü bir araçtır; Python fonksiyonlarını HTTP endpoint'lerine dönüştürmeyi kolaylaştırır, tip ipuçlarıyla istek ve cevap şemasını okunur hale getirir. Pandas veriyle çalışırken müthiş hız kazandırır ama dikkatsiz kullanılırsa belleği şişirebilir veya veri tiplerini sessizce dönüştürerek rapor hatası üretebilir. PyTorch ve TensorFlow model geliştirme için güçlüdür ama model eğitmek yalnız kütüphane çağırmak değildir; veri hazırlığı, eğitim/validasyon ayrımı, metrik seçimi, tekrar üretilebilirlik ve dağıtım düşünülmelidir. Python ekosistemini öğrenirken temel dil bilgisini küçümsememek gerekir. Liste, sözlük, fonksiyon, modül, exception, dosya işlemi ve sanal ortam kavramları zayıfsa büyük kütüphane de oyuncak gibi kullanılır. `venv`, `pip`, bağımlılık dosyaları, paket sürümleri ve ortam ayrımı üretim disiplininin parçasıdır. Bir kütüphane yerel bilgisayarda çalışıp sunucuda çalışmıyorsa sorun çoğu zaman koddan önce ortam yönetimindedir. Mülakatta Python ekosistemi sorulduğunda araç adlarını yarıştırma. Küçük bir proje akışı kur: Pandas ile veriyi okur ve temizlerim, modeli PyTorch ile denerim, sonucu FastAPI üzerinden servis ederim, Docker ile paketlerim, log ve metrik eklerim, bağımlılıkları sürümlerim. Böyle anlattığında Python'u yalnız kolay dil değil, uçtan uca ürün çıkarabilecek bir çalışma zemini olarak gördüğün anlaşılır."
  ],
  "asama-2-programlama-10": [
    "Portföy, 'biliyorum' cümlesinin çalışan karşılığıdır. CV'de Python, SQL, REST API, Docker yazabilir; fakat küçük de olsa tamamlanmış bir proje bunların gerçekten nasıl birleştiğini gösterir. Yarım bırakılmış on parlak fikir yerine, sade ama uçtan uca düşünülmüş tek proje mülakatta daha çok konuşur. Bir adayın gösterdiği basit görev takip uygulamasını hatırlıyorum. Tasarım büyüleyici değildi, ekranlar çok gösterişli değildi, ama proje nefes alıyordu. API endpoint'leri anlamlıydı, PostgreSQL migration dosyaları vardı, hata cevapları rastgele değildi, README yeni gelen birinin projeyi nasıl çalıştıracağını anlatıyordu, Docker ile ortam kalkıyordu, birkaç temel test yazılmıştı, örnek veri vardı, `.env` dosyası şablonlanmıştı. O proje şunu söylüyordu: Bu kişi yalnız kod yazmamış, kodun yaşayacağı ortamı da düşünmüş. Kod mülakatlarında portföyün gücü burada ortaya çıkar. Görüşmeci çoğu zaman kusursuz ürün beklemez; düşünülmüş kararlar görmek ister. Neden FastAPI seçtin, neden PostgreSQL kullandın, neden JWT yerine session kullanmadın, hata durumlarını nasıl tasarladın, veritabanı şemasında hangi ilişkiyi kurdun, Docker neden var, testte neyi kapsadın, canlıya alsan neyi iyileştirirdin? Bu sorulara cevap verebiliyorsan projen küçük olsa bile değeri büyür. Portföy hazırlarken her projeye bir hikâye yazmak gerekir. Problem neydi, kullanıcı kimdi, veri nereden geldi, iş akışı nasıl bölündü, hangi teknolojiyi neden seçtin, nerede zorlandın, hangi hatayı sonradan fark ettin, bugün yeniden yapsan neyi değiştirirdin? Bu hikâye seni CV satırından çıkarıp sahici adaya çevirir. Ayrıca portföy projesi yalnız geliştiricilik için değil, ileride teknik yöneticilik için de alıştırmadır. Çünkü küçük projede bile kapsam, veri modeli, güvenlik, dağıtım, dokümantasyon ve bakım kararı verirsin. Büyük kurumlarda bu kararlar daha pahalıdır ama mantık aynıdır. İyi portföyde gösterişten çok tamamlanmışlık aranır. Giriş ekranı varsa şifre nasıl saklanıyor, API varsa durum kodları doğru mu, veritabanı varsa migration var mı, dış servis varsa timeout var mı, Docker varsa secret yönetimi düşünülmüş mü, README varsa gerçekten çalıştırıyor mu? Mülakatta projenin eksiklerini dürüstçe söylemekten korkma. 'Burada test kapsamını artırırdım, burada role-based authorization eklerdim, burada CI/CD hattı kurardım' demek zayıflık değil, gelişim bilincidir. Portföy, yalnız bildiklerini değil, nasıl düşündüğünü gösterir; iyi hazırlanırsa sen odadan çıkmadan önce bile senin adına konuşmaya başlamıştır."
  ],
  "asama-3-web-api-1": [
    "Web'i gerçekten anlamak için ekrandaki butona değil, butona basıldıktan sonra başlayan görünmez yolculuğa bakmak gerekir. Kullanıcı bir başvuru formunu doldurur ve 'Gönder' düğmesine basar; onun dünyasında olay birkaç saniyelik bekleyişten ibarettir. Fakat tarayıcı o anda alan adını çözmüş, güvenli bağlantıyı kurmuş, JavaScript ile formu doğrulamış, backend'e HTTP isteği göndermiş, kimlik bilgisini taşımış, sunucudan cevap beklemiş ve sonucu ekrana çevirmiştir. Bir kurum portalında başvuru butonu çalışmadığında bu zincirin ne kadar kırılgan olduğunu görmüştük. İlk suçlu frontend sanıldı; çünkü kullanıcı ekranda hata görüyordu. Sonra API'ye bakıldı; endpoint ayaktaydı. Veritabanı kontrol edildi; bağlantı sağlıklıydı. En sonunda küçük bir CORS ayarı değişikliğinin tarayıcı tarafında isteği engellediği anlaşıldı. Sunucu cevap verebilirdi ama tarayıcı güvenlik politikası gereği o cevabı uygulamaya teslim etmiyordu. Web böyle öğretir: Ekrandaki hata, arka taraftaki zincirin herhangi bir halkasından gelebilir. HTML sayfanın anlamını taşır, CSS düzen ve görünüm verir, JavaScript davranışı yönetir, HTTP isteği niyeti sunucuya iletir, backend iş kuralını çalıştırır, veritabanı kalıcı kayıt tutar, cache hız kazandırır, kimlik katmanı kimin işlem yaptığını belirler, log ise sonradan olayın izini bırakır. Bu başlığı öğrenirken hedef, tarayıcıdan backend'e kadar isteğin hikâyesini zihninde oynatabilmektir. Bir kullanıcı 'sayfa çalışmıyor' dediğinde rastgele dosya karıştırmak yerine sırayla bakarsın: Tarayıcı konsolunda hata var mı, network isteği çıkıyor mu, HTTP durum kodu ne, auth header doğru mu, backend logunda istek görünüyor mu, veritabanı işlemi gerçekleşmiş mi, cevap frontend tarafından doğru işlenmiş mi? Bu katmanlı düşünce, web geliştiricisini yalnız ekran yapan kişiden ayırır. Mülakatta web akışı sorulduğunda kullanıcı deneyimiyle başla ve görünmeyen altyapıya doğru in: Kullanıcı adresi açar, DNS çözülür, HTTPS bağlantısı kurulur, tarayıcı kaynakları indirir, JavaScript çalışır, API çağrısı yapılır, backend doğrular, veri işlenir, cevap döner. Böyle anlattığında web'i tek teknoloji değil, birbirine bağlı küçük bir şehir olarak gördüğün anlaşılır."
  ],
  "asama-3-web-api-2": [
    "Frontend dünyası çoğu zaman renkler, butonlar ve animasyonlarla hatırlanır ama iyi frontend bundan çok daha derin bir kullanıcı nezaketidir. HTML sayfanın anlamını kurar; başlık, form, liste, bağlantı, tablo, düğme gibi öğeler yalnız görsel kutular değil, tarayıcıya ve yardımcı teknolojilere söylenmiş semantik cümlelerdir. CSS bu anlamlı iskelete duruş verir; boşluk, hizalama, renk, kontrast, responsive davranış ve okuma ritmi burada belirlenir. JavaScript ise sahneye hareket getirir; kullanıcı yazarken doğrulama yapar, API'ye istek gönderir, gelen cevabı işler, hata durumunu gösterir. Bir başvuru formunda kırmızı uyarı metni vardı ve tasarım ekibi bunun yeterli olduğunu düşünüyordu. Sonra ekran okuyucu kullanan bir kullanıcı formu deneyince hatayı duymadığı ortaya çıktı. Görsel olarak var olan uyarı, erişilebilirlik açısından yoktu. O gün frontend'in yalnız göze değil, deneyimin tamamına karşı sorumlu olduğunu bir kez daha gördük. İyi frontend, kullanıcının ne yapacağını sezdiği, hata olduğunda kaybolmadığı, yavaş ağda bile ne beklediğini anladığı, mobil ekranda parmağıyla rahat hareket ettiği, engelli kullanıcıyı dışarıda bırakmadığı arayüzdür. Büyük kurumlarda frontend kararları çağrı merkezi yükünü, kullanıcı memnuniyetini, işlem başarısını ve güven algısını doğrudan etkiler. Form alanı belirsizse kullanıcı yanlış veri girer; hata mesajı teknikse destek hattı aranır; buton iki kez basılabiliyorsa çift işlem doğar; yükleniyor durumu yoksa kullanıcı işlemin gitmediğini sanır. HTML, CSS ve JavaScript anlatılırken frameworklere hemen atlamak bu yüzden aceleciliktir. React, Vue ya da başka bir araç değerli olabilir ama önce web'in temel sözleşmesini anlamak gerekir. HTML anlam, CSS düzen, JavaScript davranış üretir. Mülakatta bu üçlüyü anlatırken küçük bir form hikâyesi kur: Kullanıcı T.C. kimlik numarası giriyor, HTML doğru input yapısını veriyor, CSS okunabilir ve erişilebilir tasarım sağlıyor, JavaScript alanı doğruluyor, API'ye istek gönderiyor, hata gelirse kullanıcıya anlaşılır mesaj gösteriyor. Böyle anlattığında frontend'i yalnız süs değil, iş sürecinin kullanıcıyla temas eden yüzü olarak gördüğün anlaşılır."
  ],
  "asama-3-web-api-3": [
    "Backend, kullanıcının görmediği ama kurumun gerçek iş kurallarının çalıştığı mutfaktır. Ekranda tek bir 'Kaydet' butonu vardır; arkada kullanıcının yetkisi kontrol edilir, gelen veri doğrulanır, iş kuralı çalıştırılır, veritabanına kayıt yazılır, gerekiyorsa başka servise haber verilir, log bırakılır, hata olursa anlamlı cevap hazırlanır. Kullanıcı masaya gelen tabağı görür; mutfaktaki sipariş alma, hazırlık, stok kontrolü, pişirme, kalite ve servis düzenini görmez. Backend de böyledir. Bir ödeme ekranında frontend kusursuz görünüyordu; kullanıcı butona bastığında istek gidiyor, cevap dönüyordu. Fakat ağ yavaşladığında kullanıcı aynı butona tekrar basıyor ve backend aynı isteği iki ayrı ödeme gibi işliyordu. Sorun frontend'de değil, backend tasarımındaydı; idempotency düşünülmemişti. Aynı işlem anahtarıyla gelen isteklerin tek işlem olarak ele alınması gerekiyordu. Backend yazmak bu yüzden yalnız endpoint açmak değildir; sonuçların güvenilirliğini korumaktır. Controller gelen isteği karşılayan kapı olabilir, servis iş kuralının yaşadığı yer olabilir, repository veya veri erişim katmanı kalıcı kayda giden yolu yönetebilir. Bu ayrım her projede aynı isimlerle kurulmak zorunda değildir ama sorumluluklar karışmamalıdır. Her şeyi controller içine yazarsan ekranın arkasındaki mutfak tek tezgâha yığılır; test zorlaşır, hata yeri belirsizleşir, değişiklik maliyeti artar. Backend tarafında validasyon, authorization, transaction, logging, retry, timeout, rate limit ve hata formatı birlikte düşünülür. Bir kamu başvurusunda eksik belge varsa kullanıcıya ne denecek, ödeme başarısızsa kayıt nasıl işaretlenecek, üçüncü taraf servis cevap vermezse işlem bekleyecek mi, kuyruk kullanılacak mı, veritabanı yazımı yarıda kalırsa nasıl geri dönülecek? Bu sorular backend'in asıl ağırlığını oluşturur. Mülakatta backend sorulduğunda kullandığın dili saymakla yetinme. Bir isteğin backend içinde nasıl yürüdüğünü anlat: endpoint isteği alır, kimlik ve yetki kontrol edilir, veri doğrulanır, iş kuralı servis katmanında çalışır, transaction içinde kayıt yapılır, gerekirse olay kuyruğa bırakılır, sonuç uygun HTTP koduyla döner, log ve metrik bırakılır. Böyle konuştuğunda backend'i yalnız sunucu kodu değil, kurumun güvenilir iş akışı olarak gördüğün anlaşılır."
  ],
  "asama-3-web-api-4": [
    "REST API tasarımı, sistemler arasında açık ve anlaşılır bir anlaşma dili kurmaktır. İyi API karşı tarafı tahmine zorlamaz; hangi kaynağa gidileceğini, hangi metotla ne yapılacağını, hata olursa nasıl anlaşılacağını ve eski sürümün ne kadar yaşayacağını söyler. Kaynaklar isimlendirilir: kullanıcılar, başvurular, ödemeler, siparişler. GET okumak, POST oluşturmak, PUT veya PATCH güncellemek, DELETE silmek ya da pasifleştirmek için kullanılır. Elbette gerçek hayatta ayrıntılar tartışılır, ama niyetin HTTP metoduyla uyumlu olması ekipler arasında ortak dil sağlar. Bir entegrasyonda her hata 200 OK dönüyordu; cevap gövdesinde küçük bir `success:false` alanı vardı. Karşı sistem, durum koduna bakarak işlemi başarılı sandı ve başarısız kayıtlar sessizce birikti. Sonra herkes birbirini suçladı. Oysa API daha baştan yanlış konuşuyordu. Durum kodları süs değildir; operasyonun erken uyarı sistemidir. 400 kullanıcı ya da istek hatasını, 401 kimlik eksikliğini, 403 yetki engelini, 404 kaynağın bulunamadığını, 409 çakışmayı, 500 sunucu hatasını anlatır. Hata gövdesi de insaflı olmalıdır; yalnız 'error' yazmak destek ekibini karanlıkta bırakır, fazla teknik ayrıntı göstermek güvenlik riski doğurabilir. REST tasarımında pagination unutulursa büyük listeler sistemi yorabilir; filtreleme ve sıralama belirsizse kullanıcı aradığı veriye ulaşamaz; versioning düşünülmezse yeni alan eklemek eski istemciyi bozabilir; idempotency yoksa aynı istek iki kez işlenebilir. API sözleşmesi iyi kurulursa frontend, mobil, başka kurum servisi ve backend ekipleri birbirinin niyetini daha az okumaya çalışır. Mülakatta REST sorulduğunda küçük bir başvuru API'si tasarla: `GET /basvurular` liste döner, sayfalama kullanır; `POST /basvurular` yeni kayıt oluşturur, eksik alan varsa 400 döner; `GET /basvurular/{id}` belirli kaydı getirir, yetkisiz kullanıcıya 403 verir; güncelleme gerekiyorsa PATCH ile yalnız değişen alanlar alınır; hata cevabı standarttır; API versiyonu bellidir. Böyle anlattığında REST'i endpoint listesi değil, sistemler arası güvenilir sözleşme olarak gördüğün anlaşılır."
  ],
  "asama-3-web-api-5": [
    "Kimlik ve oturum yönetimi, dijital binanın kapılarını tasarlamaktır. Kullanıcı içeri girmek ister, sistem onun gerçekten kim olduğunu anlamak ister, kurum ise bu kişinin hangi odalara girebileceğini ve ne zaman çıktığını bilmek zorundadır. Cookie, session, JWT, OAuth2 ve SSO gibi kavramlar farklı anahtar türleri gibidir; hepsi kapı açabilir ama açtıkları kapının süresi, kapsamı ve bıraktığı iz farklıdır. Bir uygulamada token süresi çok uzundu. Kullanıcılar memnundu, çünkü sık sık giriş yapmak zorunda kalmıyorlardı. Sonra bir cihaz kayboldu ve ele geçirilen token günlerce geçerli kaldı. O olay güvenlik ile konfor arasındaki pazarlığın ne kadar gerçek olduğunu gösterdi. JWT imzalı bir token içinde kimlik ve bazı yetki bilgilerini taşıyabilir; stateless servislerde pratiklik sağlar, çünkü sunucu her istekte merkezi session kaydına bakmak zorunda kalmayabilir. Fakat JWT'nin süresi, nerede saklandığı, hangi algoritmayla imzalandığı, refresh token akışı, iptal stratejisi ve içine hangi bilginin konduğu dikkat ister. Token içine gereksiz hassas veri koymak, uzun süreli token üretmek, secret anahtarını kötü yönetmek ya da istemci tarafında güvensiz saklama yapmak kapıyı geniş açık bırakabilir. OAuth2 ise özellikle üçüncü taraf yetkilendirme senaryolarında önemlidir; kullanıcı şifresini paylaşmadan sınırlı yetki verebilir. Cookie ve session yaklaşımı hâlâ birçok web uygulamasında güçlüdür; doğru ayarlarla, `HttpOnly`, `Secure`, `SameSite` gibi seçeneklerle güvenlik desteklenir. Kimlik ve oturum tasarımında asıl soru 'hangi teknoloji modern' değildir; kullanıcı kim, hangi işlem için hangi yetki gerekir, oturum ne kadar yaşamalı, cihaz kaybolursa nasıl iptal edilir, yüksek riskli işlemde tekrar doğrulama gerekir mi, erişim logu nerede tutulur? Mülakatta JWT sorulduğunda yalnız 'imzalı token' demek yetmez. İmza, süre, refresh, saklama yeri, iptal zorluğu, yetki kapsamı ve XSS/CSRF gibi web riskleriyle ilişkisini anlat. Yöneticilik düzeyinde ise konu daha da genişler: SSO kullanıcı deneyimini sadeleştirir ama merkezi kimlik sağlayıcısının sürekliliği kritikleşir; MFA güvenliği artırır ama kullanıcı desteği ve eğitim ister; PAM ayrıcalıklı hesapları kontrol eder ama süreç kurulmazsa araç ek yük olur. Kimlik yönetimi iyi tasarlandığında kullanıcı rahat eder, güvenlik ekibi iz bulur, denetçi sorusuna cevap alır. Kötü tasarlandığında kapılar ya herkese açık kalır ya da doğru kullanıcı bile kendi odasına giremez."
  ],
  "asama-3-web-api-6": [
    "Redis, cache ve CDN hızın farklı yüzleridir; fakat hız her zaman masum değildir. Bir e-ticaret kampanyasında ürün kartları çok hızlı açılıyordu, kullanıcı deneyimi ilk bakışta mükemmeldi. Sonra fiyat değişikliği yapıldı ve bazı kullanıcılar eski fiyatı görmeye devam etti. Teknik ekip sistemi hızlandırmıştı, operasyon ekibi ise müşteri güvenini korumaya çalışıyordu. Cache tasarımının gerçek dersi burada başlar: Her veriyi hızlandırmak istemek doğru değildir; bazı verilerin güncel kalması hızdan daha değerlidir. Redis bellekte çalışan hızlı bir veri deposu olarak sepet, oturum, sayaç, rate limit, kısa süreli durum ve sık okunan veri için çok işe yarar. Cache genel bir yaklaşımdır; pahalı hesaplamayı ya da sık okunan cevabı bir süre saklarsın. CDN ise statik dosyaları kullanıcıya coğrafi olarak yakın noktalardan sunarak gecikmeyi azaltır; görseller, CSS, JavaScript dosyaları ve indirilebilir içerikler için çok değerlidir. Fakat resmi kayıt ile hızlandırıcı kopya birbirine karıştırılırsa sistem kendi yalanına inanabilir. Siparişin ana kaydı PostgreSQL'de dururken cache yalnız hızlı gösterim sağlamalıdır. Stok, fiyat, ödeme durumu gibi kritik alanlarda TTL, invalidation ve tutarlılık stratejisi baştan konuşulmalıdır. Bir cache ne zaman temizlenir, hangi olay onu geçersiz kılar, veri güncellenince kullanıcının eski kopyayı görmesi kabul edilebilir mi, cache bozulursa sistem ana kaynağa dönebiliyor mu? Bu sorular teknik olduğu kadar iş sorusudur. Haber sitesinde birkaç dakikalık gecikme kabul edilebilir; banka bakiyesinde edilemez. Redis tarafında memory limit, eviction policy, persistence, cluster ve bağlantı yönetimi de düşünülür. Cache katmanı izlenmezse performans sorununu saklayabilir; hit ratio yüksek mi, bellek doluyor mu, eski veri şikâyeti geliyor mu, ana veritabanına beklenmedik yük biniyor mu? Mülakatta Redis veya cache sorulduğunda 'hızlıdır' demek başlangıçtır. Daha olgun cevap, hangi veriyi cache'e koyacağını ve hangi veriyi koymayacağını anlatır. Bir ürün listesi cache'lenebilir, ama ödeme sonucu ana kayıttan doğrulanmalıdır; kampanya fiyatı cache'lenirse invalidation olayı şarttır; oturum Redis'te tutuluyorsa süre ve güvenlik düşünülmelidir. Büyük sistemlerde hız yalnız milisaniye kazanmak değildir; doğru yerde hızlanıp yanlış yerde gerçeği bozmamaktır."
  ],
  "asama-3-web-api-7": [
    "Mesaj kuyrukları, büyük sistemlerde işleri birbirinin boğazına dizmeden yürütmenin yoludur. Kullanıcı ödeme yapar; ekranda yalnız başarı mesajı görmek ister. Fakat ödeme tamamlandığında fatura kesilecek, bildirim gidecek, kargo süreci başlayacak, raporlama güncellenecek, belki sadakat puanı işlenecektir. Bunların hepsini aynı isteğin içinde sırayla yaparsan kullanıcı gereksiz bekler ve bir yan servisin gecikmesi ana işlemi de zora sokar. Mesaj kuyruğu burada devreye girer: Ana işlem gerekli kaydı güvenceye alır, sonra diğer işleri olay olarak kuyruğa bırakır. Kafka yüksek hacimli olay akışlarında güçlüdür; RabbitMQ işlerin kontrollü sıraya alındığı senaryolarda sık görülür. Fakat kuyruk kullanmak sorunları yok etmez, sorunların akışını yönetilebilir hale getirir. Bir sistemde bildirim kuyruğu görünmez biçimde büyümüştü; uygulama ayaktaydı, ödeme çalışıyordu, ama kullanıcı SMS'i saatler sonra alıyordu. Dışarıdan bakınca hizmet açık görünüyordu, içeride bant dolmuştu. Kuyruklar böyledir: Kapı açıktır ama içeride sıra uzamıştır. Mesaj mimarisinde retry, dead-letter queue, ordering, idempotency ve izleme kritik hale gelir. Bir mesaj işlenemezse sonsuza kadar denenmeli mi, belirli sayıda denedikten sonra hatalı kuyruğa mı atılmalı, mesajların sırası önemli mi, aynı mesaj iki kez gelirse servis aynı işi iki kez yapar mı, tüketiciler yeterli hızda mı çalışıyor? Bu sorular düşünülmeden kurulan kuyruk, sistemi rahatlatmak yerine hatayı geciktiren bir sis perdesine dönüşebilir. Özellikle ödeme ve stok gibi alanlarda idempotency hayatidir; aynı olay iki kez işlendiğinde çift fatura, çift bildirim veya yanlış stok düşümü doğabilir. Mülakatta Kafka veya RabbitMQ sorulduğunda yalnız 'asenkron çalışmayı sağlar' demek yetmez. Bir sipariş örneği kur: Ödeme başarılı olur, sipariş kaydı kalıcı hale gelir, fatura ve bildirim olayları kuyruğa bırakılır, consumer bu olayları işler, hata olursa retry yapılır, başarısız mesaj dead-letter kuyruğuna düşer, kuyruk uzunluğu izlenir, aynı mesaj tekrar gelirse idempotent davranılır. Büyük kurumlarda mesaj kuyruğu teknik araçtan çok operasyon disiplini üretir. Hangi iş hemen yapılmalı, hangisi arkaya alınabilir, gecikirse kim etkilenir, birikme nasıl fark edilir? Bu soruları bilen kişi olay tabanlı mimariyi gerçekten anlamaya başlar."
  ],
  "asama-3-web-api-8": [
    "Test, logging ve observability sistemin kendi hakkında konuşmasını sağlar. Test gelecekteki kırılmayı erken yakalar, log geçmişe ışık tutar, metrik şu anki nabzı gösterir, trace ise bir isteğin servisler arasında nasıl dolaştığını anlatır. Bunlar yoksa sistem yalnız kullanıcı şikâyet ettiğinde fark edilen kapalı bir kutuya dönüşür. Bir hata yalnız canlıda çıkıyordu; test ortamında her şey temizdi. Kullanıcı belirli bir işlemde takılıyor, destek ekibi ekran görüntüsü alıyor, geliştiriciler tahmin yürütüyordu. Loglara bakıldığında kullanıcı id yoktu, correlation id yoktu, hata mesajı genel tutulmuştu. Metrikler ortalamayı gösteriyor ama belirli kullanıcı grubundaki yavaşlığı ayırt etmiyordu. Trace olmadığı için istek hangi serviste bekledi, hangi dış API geç cevap verdi, veritabanı mı kilitlendi anlamak saatler sürdü. O gün herkes şunu gördü: İz bırakmayan sistem, kendi savunmasını yapamayan sistemdir. Test tarafında unit test küçük fonksiyon davranışlarını güvenceye alır, integration test parçaların birlikte çalışmasını sınar, end-to-end test kullanıcı akışını izler. Fakat testlerin de niyeti olmalıdır; yalnız coverage yüzdesi yükseltmek kalite anlamına gelmez. Kritik iş kuralları, sınır durumları, hata cevapları ve geriye dönük uyumluluk özellikle korunmalıdır. Logging tarafında neyin loglanacağı kadar neyin loglanmayacağı da önemlidir; hassas veri, parola, token ve kişisel bilgi kontrolsüz loga düşmemelidir. Observability ise logları, metrikleri ve trace'leri karar aracına dönüştürür. Hata oranı yükseliyor mu, yanıt süresi artıyor mu, kuyruk birikiyor mu, belirli endpoint yavaşlıyor mu, yeni sürümden sonra davranış değişti mi? İyi alarm sistemi gürültü üretmez; anlamlı olayları zamanında duyurur. Mülakatta bu başlık sorulduğunda üçlü ayrımı net kur: Log olayın metinsel izidir, metrik ölçülebilir sayıdır, trace isteğin yolculuğudur. Sonra bir canlı hata hikâyesi anlat: Kullanıcı işlem yapar, correlation id ile istek takip edilir, backend logu okunur, metrikte gecikme görülür, trace dış serviste beklediğini gösterir, testte eksik kalan senaryo eklenir. Büyük kurumlarda observability yalnız teknik konfor değildir; SLA takibi, kriz iletişimi, kök neden analizi ve yönetici raporu için kanıt üretir."
  ],
  "asama-3-web-api-9": [
    "Docker geliştirme ortamını taşınabilir ve daha öngörülebilir hale getirir. Bir projeye yeni başlayan geliştiricinin günlerce veritabanı sürümü, runtime kurulumu, ortam değişkeni ve bağımlılıklarla uğraştığını görmüş herkes Docker'ın değerini daha hızlı anlar. Bir ekipte 'bende çalışıyor' cümlesi o kadar sık duyuluyordu ki toplantılarda küçük bir şakaya dönüşmüştü; sonra servisler container ile paketlendi, veritabanı ve yardımcı servisler compose dosyasıyla ayağa kalktı, yeni geliştirici tek komutla ortama yaklaşabildi. Cümle tamamen ölmedi ama sesi belirgin biçimde azaldı. Docker'ın küçük mucizesi budur: ortam farkını tartışma konusu olmaktan çıkarır. Image bir tarif gibidir; uygulamanın hangi taban imajdan başlayacağını, hangi paketleri kuracağını, hangi dosyaları kopyalayacağını, hangi komutla çalışacağını tarif eder. Container ise bu tariften çalışan örnektir. Volume kalıcı veriyi container'ın geçici yaşamından ayırır; network container'ların birbirleriyle konuşmasını sağlar; registry imajların saklandığı ve paylaşıldığı depodur. Bu kavramlar doğru anlaşılmazsa Docker kolaylığı üretimde risk doğurabilir. Container kalıcı veri yeri değildir; loglar container silinince kaybolmamalı, veritabanı dosyaları rastgele container içinde tutulmamalı, secret bilgileri imajın içine gömülmemelidir. Bir projede loglar yalnız container içinde kaldığı için hata sonrası kanıt kaybolmuştu. Herkes uygulamanın çalıştığını biliyordu ama geçmişi okuyamıyordu. Docker kullanmak, işletme disiplinini iptal etmez; yalnız paketleme ve ortam yönetimini daha düzenli hale getirir. Mülakatta Docker sorulduğunda image-container farkını, Dockerfile mantığını, port mapping'i, volume kullanımını, environment variable yönetimini ve registry akışını küçük bir servis hikâyesiyle anlat. 'FastAPI servisini imaj haline getiririm, bağımlılıkları kurarım, portu dışarı açarım, PostgreSQL'i ayrı container olarak çalıştırırım, kalıcı veri için volume kullanırım, secret'ları imaja yazmam, imajı registry'ye gönderirim' dediğinde cevap somutlaşır. Büyük kurumlarda Docker, geliştirmeden test ortamına ve CI/CD hattına kadar ortak zemin oluşturur; ama güvenlik taraması, imaj boyutu, taban imaj güncellemeleri ve loglama düşünülmeden kurulduğunda yalnız yeni bir ambalaj olur."
  ],
  "asama-3-web-api-10": [
    "Web mülakatları genellikle adayın uçtan uca düşünebilmesini ölçer. Görüşmeci bazen 'REST nedir?' diye sorar, bazen 'JWT nasıl çalışır?' der, bazen 'trafik artarsa ne yaparsın?' diye açar; fakat bütün bu soruların altında aynı beklenti vardır: Aday bir web sistemini başından sonuna kadar gözünde canlandırabiliyor mu? İyi cevap küçük bir sistem hikâyesiyle başlar. Kullanıcı giriş yapar, kimliği doğrulanır, token veya session oluşur, ürün arar, sonuçlar belki Elasticsearch ya da veritabanından gelir, sık okunan veri cache'ten döner, kullanıcı sepete ekler, ödeme isteği backend'e gider, ödeme sonucu kalıcı kayda yazılır, fatura ve bildirim olayları kuyruğa bırakılır, log ve metrikler iz bırakır. Bu hikâyeyi kurduktan sonra her soru yerine oturur. API tasarımını anlatırken kaynak, metot, durum kodu ve hata formatı konuşursun; güvenliği anlatırken JWT süresi, refresh, yetki sınırı ve hassas veri saklamayı eklersin; cache sorulunca hız ile tutarlılık arasındaki pazarlığı söylersin; mesaj kuyruğu sorulunca asenkron işler, retry ve idempotency gelir; Docker sorulunca ortam taşınabilirliği, volume, secret ve log yönetimi devreye girer. İyi aday yalnız bildiği teknolojileri saymaz, teknolojilerin birbirine nasıl bağlandığını gösterir. Bir görüşmede aday Redis'i çok hızlı anlattı ama hangi veriyi cache'lememesi gerektiğini söyleyemedi; başka aday daha sakin konuştu ve ödeme sonucunu cache'e koymayacağını, ana kaydın veritabanında kalacağını, fiyat değişikliklerinde invalidation gerekeceğini anlattı. İkinci cevap daha az gösterişliydi ama daha olgundu. Web mülakatına hazırlanırken her başlık için tanım, akış, risk ve kanıt düzenini kullan. Tanım kavramı açar, akış onu sisteme yerleştirir, risk nerede kırılacağını gösterir, kanıt ise nasıl izleyeceğini anlatır. Trafik artışı sorulursa yalnız sunucu artırma deme; CDN, cache, load balancer, veritabanı darboğazı, kuyruk, rate limit ve observability konuş. Hata yönetimi sorulursa yalnız try-catch deme; kullanıcı mesajı, log, durum kodu, retry ve alarmı bağla. Üst düzey kurumlarda web sistemi yalnız çalışan ekran değildir; güvenilir, izlenebilir, ölçeklenebilir ve açıklanabilir hizmettir. Mülakatta bu perspektifi gösteren aday, ekrana değil sisteme baktığını hissettirir."
  ],
  "asama-4-ai-temelleri-1": [
    "Yapay zekâya sağlıklı giriş, model büyüsünü biraz söndürmekle başlar; çünkü büyülenmiş ekipler çok hızlı demo yapar ama üretim ortamında en basit sorulara takılır. Modelin adı nedir, kaç parametreli, ne kadar hızlı cevap veriyor gibi sorular elbette önemlidir; fakat kurumsal hayatta daha sert sorular vardır: Hangi iş problemini çözüyoruz, veri güncel mi, cevap yanlış olursa kim zarar görür, insan onayı nerede devreye girer, model hangi kaynağa dayanıyor, bu sistemi altı ay sonra kim işletecek? Bir kurumda belge özetleme denemesi yapılmıştı. Toplantıda herkes modelin akıcı özetlerine hayran kaldı; sayfalarca raporu saniyeler içinde birkaç paragrafa indiriyordu. Sonra bir uzman sessizce aynı belgenin eski sürümünü sisteme yükledi ve model onu da aynı özgüvenle özetledi. Cevap akıcıydı ama dayandığı kaynak yanlıştı. O gün odada yapay zekânın en temel dersi duyuldu: Model hızlı konuşabilir, fakat doğru bağlamı, güncel veriyi ve denetimi sen sağlamazsan hız seni yanlış yere de götürebilir. Yapay zekâyı öğrenirken korku ile hayranlık arasında dengede durmak gerekir. Korkarsan deneme yapamazsın, büyülenirsen denetimi bırakırsın. Makine öğrenmesi, derin öğrenme, embedding, RAG, LLM, MLOps gibi kavramlar tek tek parlak görünebilir ama hepsi aynı büyük soruya bağlanır: Veriden güvenilir ve işe yarar karar desteği nasıl üretilecek? Kamu, finans, sağlık, savunma veya büyük özel sektör kurumlarında yapay zekâ asla yalnız laboratuvar başarısı değildir. Mevzuat, veri sınıflandırması, mahremiyet, kaynak gösterme, açıklanabilirlik, maliyet, GPU kapasitesi, kullanıcı eğitimi ve yanlış cevap yönetimi aynı masaya oturur. Bu başlığın amacı yapay zekâyı gizemli bir kutu olmaktan çıkarmaktır. Modeli, veriyle karar arasına giren güçlü ama denetlenmesi gereken bir araç olarak okuyacağız. Böyle okuyunca iyi bir demo karşısında bile sakin kalırsın; sorarsın: Bu cevap nereden geldi, hangi veriyle eğitildi ya da beslendi, hangi durumda bilmiyorum diyecek, nasıl ölçüldü, canlıda nasıl izlenecek? İşte yapay zekâ temeli burada başlar."
  ],
  "asama-4-ai-temelleri-2": [
    "Makine öğrenmesi, bilgisayara her kuralı tek tek yazmak yerine geçmiş örneklerden örüntü buldurma fikridir. Klasik programlamada kuralı sen yazarsın; makine öğrenmesinde örnekleri verirsin, hedefi gösterirsin, modelin yeni durumlarda benzer ilişkiyi yakalamasını beklersin. Bir çağrı merkezinde hangi taleplerin gecikeceğini tahmin etmek isteyen bir ekip düşün. Elinde geçmiş çağrılar, talep türleri, müşteri segmentleri, temsilci yoğunluğu, çözüm süreleri ve kapanış durumları var. Model bu verilerden bazı taleplerin neden geciktiğini öğrenebilir ve yeni gelen talep için risk skoru üretebilir. Kulağa güzel gelir, fakat gerçek hayat hemen sınav yapar. İlk model çok başarılı görünüyordu; doğruluk oranı yüksekti, grafikler etkileyiciydi. Sonra fark edildi ki eğitim verisinde gelecekte bilinmeyecek bir alan kullanılmıştı: talebin kapanıştan sonraki nihai kategorisi. Model aslında tahmin yapmıyor, cevabın kokusunu önceden alıyordu. Buna veri sızıntısı denir; sınavda cevap anahtarını masanın altına koyup öğrencinin çok başarılı olduğunu sanmaya benzer. Makine öğrenmesinde veri, özellik, hedef ve genelleme kavramları bu yüzden önemlidir. Feature dediğimiz özellikler modelin baktığı işaretlerdir; hedef değişken tahmin etmek istediğin sonuçtur; eğitim verisi modelin öğrendiği geçmiş, test verisi ise onu tanımadığı örneklerle sınadığın alandır. Validation, model seçimi ve ayar denemelerinde ara kontrol sağlar. Overfitting ise modelin geçmişi ezberleyip yeni veride başarısız olmasıdır. Bir modelin canlıda işe yaraması için geçmişteki ilişkiyi ezberlemesi değil, yeni duruma makul biçimde genellemesi gerekir. Mülakatta makine öğrenmesi anlatırken algoritma adı saymak yerine küçük bir iş örneği kur: Gecikecek talepleri tahmin etmek istiyorum, geçmiş veriyi temizlerim, gelecekte bilinmeyecek alanları çıkarırım, eğitim-test ayrımı yaparım, uygun metrik seçerim, overfitting'i kontrol ederim, sonuçları iş birimiyle birlikte yorumlarım. Büyük kurumlarda makine öğrenmesi başarısı yalnız skor değildir; yanlış tahminin etkisi, karar sürecinde insanın rolü, modelin güncelliği ve veri kalitesinin sürdürülebilirliği de başarıdır."
  ],
  "asama-4-ai-temelleri-3": [
    "Derin öğrenme, verinin içindeki karmaşık örüntüleri çok katmanlı sinir ağlarıyla öğrenmeye çalışır. İnsan için bir fotoğraftaki nesneyi, bir ses kaydındaki kelimeyi ya da bir metindeki anlamı sezmek doğal görünür; bilgisayar için bunlar sayılara, ağırlıklara ve katmanlar arasındaki hesaplara dönüşür. Sinir ağında her katman gelen bilgiyi başka bir temsile çevirir; eğitim sırasında modelin tahmini ile doğru cevap arasındaki fark loss olarak ölçülür, optimizer bu hatayı azaltacak yönde ağırlıkları günceller, backpropagation ise hatanın katmanlara nasıl paylaştırılacağını hesaplar. Tanım böyle teknik durur ama sahadaki ders daha canlıdır. Bir görüntü sınıflandırma projesinde model laboratuvarda çok başarılıydı; düzgün ışıkta çekilmiş parçaları neredeyse kusursuz ayırıyordu. Sahaya çıkınca başarı düştü. Çünkü gerçek üretim hattındaki görüntüler tozluydu, bazıları eğik açıdan çekilmişti, ışık değişiyordu, arka planda beklenmeyen gölgeler vardı. Model dünyayı değil, ona gösterilen dünyanın alışkanlığını öğrenmişti. Derin öğrenmenin gücü de riski de burada yatar. Çok büyük örüntüleri yakalayabilir ama veri çeşitliliği zayıfsa kendi küçük evreninde çok başarılı olup gerçek hayatta tökezleyebilir. Katman sayısı, model mimarisi, GPU gücü ve eğitim süresi önemlidir; fakat veri kalitesi, etiket doğruluğu, sınıf dengesi, sahadaki dağılım farkı ve açıklanabilirlik en az onlar kadar önemlidir. Büyük kurumlarda derin öğrenme projesi yapılırken yalnız model doğruluğu konuşulmaz; bu model hangi veriye dayanıyor, yanlış sınıflandırma kime zarar verir, model güncelliğini nasıl korur, üretim ortamında kaç milisaniyede cevap verir, GPU maliyeti nedir, sonuç insan tarafından nasıl denetlenir diye sorulur. Mülakatta sinir ağı anlatırken ağırlık, aktivasyon, loss, optimizer ve backpropagation kavramlarını sadeleştir; ardından mutlaka veri hikâyesine dön. Derin model kötü veriyi affetmez, sadece daha pahalı şekilde öğrenir. Gerçek uzmanlık, modeli büyütmeden önce verinin dünyayı yeterince temsil edip etmediğini sormaktır."
  ],
  "asama-4-ai-temelleri-4": [
    "Veri hazırlığı yapay zekânın mutfak temizliğidir; kimse gösterişli sunumlarda uzun uzun anlatmak istemez ama yemeğin tadı büyük ölçüde orada belirlenir. Eksik alanlar, yanlış etiketler, tekrar kayıtlar, dengesiz sınıflar, farklı tarih formatları, bozuk karakterler, ölçüm hataları ve veri sızıntısı modeli sessizce bozar. Bir projede modelin başarısı olağanüstü görünüyordu. Sunumda herkes memnundu, skorlar yüksekti. Sonra daha dikkatli bakıldığında aynı kişiye ait kayıtların hem eğitim hem test tarafına düştüğü anlaşıldı. Model yeni insanları anlamamış, tanıdığı kişinin başka kaydını yeniden görmüştü. Güzel skor bir anda utandırıcı hale geldi. Veri hazırlığı böyle bir alandır; gösterişsizdir ama affetmez. Temizlik yalnız boş hücreleri silmek değildir. Eksik veri neden eksik, bu eksiklik anlamlı mı, doldurulmalı mı, kayıt atılmalı mı, uç değer gerçek olay mı yoksa ölçüm hatası mı, etiket kimin tarafından ve hangi kurala göre verilmiş, veri hangi dönemden geliyor, canlıdaki dağılım geçmişe benziyor mu? Bunları sormadan model eğitmek temeli atılmamış binaya kat çıkmaya benzer. Etiketleme özellikle kritiktir. Çağrı merkezi talebinin 'acil' olup olmadığı, görüntüdeki parçanın 'hatalı' sayılıp sayılmayacağı, metnin hangi kategoriye gireceği insan kararıyla belirleniyorsa etiket kalitesi modelin kaderidir. Train-test ayrımı zaman serilerinde rastgele yapılamayabilir; geleceği tahmin eden model geçmişle eğitilip gelecekle sınanmalıdır. Veri sızıntısı ise en tehlikeli konulardan biridir; modelin canlıda bilmeyeceği bilgiyi eğitimde görmesi başarıyı sahte biçimde yükseltir. Büyük kurumlarda veri hazırlığı ayrıca yönetişim meselesidir. Kişisel veri var mı, maskeleme gerekiyor mu, veri sahibi kim, kullanım amacı belli mi, saklama süresi nedir, denetimde hangi kaynak gösterilecek? Mülakatta veri hazırlığı sorulduğunda temizlik, etiketleme, ayrım, kalite kontrol ve sızıntı riskini bir proje hikâyesiyle anlat. Gerçek uzmanlık, veriye hem şüpheyle hem saygıyla bakmaktır; çünkü modelin öğrendiği dünya, senin ona hazırladığın dünyadır."
  ],
  "asama-4-ai-temelleri-5": [
    "Token ve embedding kavramları, metnin yapay zekâ sistemleri tarafından nasıl işlendiğini anlamanın kapısını açar. İnsan cümleyi bütün olarak okur, bağlamı sezgisel biçimde taşır; model ise metni küçük parçalara ayırır, bu parçalar üzerinden hesap yapar. Token kabaca modelin metni böldüğü parçalardır; bazen kelime, bazen kelime parçası, bazen noktalama işareti gibi düşünebilirsin. Bu yüzden uzun belge daha çok token, daha çok işlem, daha çok gecikme ve daha çok maliyet demektir. Embedding ise metni anlam benzerliği kurulabilecek sayısal bir uzaya taşır. Bir kurum asistanında kullanıcı 'izin dilekçesi' arıyordu, belgede ise 'mazeret başvurusu' ifadesi geçiyordu. Klasik arama yalnız aynı kelimeyi ararsa belgeyi kaçırabilir; embedding tabanlı arama ise bu iki ifadenin anlamca yakın olduğunu fark etmeye çalışır. İşte embedding'in gücü burada başlar: kelime eşleşmesinden anlam yakınlığına geçer. Fakat bu da sihir değildir. Belge yanlış parçalanmışsa, çok uzun chunk'lar halinde bölünmüşse, önemli bilgi bağlamından kopmuşsa veya yetki filtresi uygulanmamışsa embedding doğru rafı bulmakta zorlanır. RAG sistemlerinde token ve embedding maliyet, kalite ve güvenlik üçgeninin ortasında durur. Kullanıcı sorusu embedding'e çevrilir, benzer belge parçaları aranır, bulunan bağlam modele verilir, model cevap üretir. Bu akışta her adımın sınırı vardır. Çok fazla bağlam verirsen token maliyeti artar ve model dağılabilir; az bağlam verirsen cevap eksik kalır; yanlış bağlam verirsen model akıcı biçimde yanlış konuşabilir. Mülakatta token ve embedding sorulduğunda 'metni sayıya çevirir' demek başlangıçtır. Daha olgun cevap, anlam aramasının nasıl çalıştığını, chunking'in neden önemli olduğunu, maliyet ve gecikmenin token sayısıyla ilişkisini, yetki ve kaynak gösterme gerekliliğini anlatır. Büyük kurumlarda bu kavramlar yalnız teknik ayrıntı değildir; kurum bilgisinin doğru kişiye, doğru bağlamla ve denetlenebilir biçimde ulaşmasını sağlar."
  ],
  "asama-4-ai-temelleri-6": [
    "RAG, modele kurumun raflarından belge getirip 'cevabını buna dayanarak ver' deme yaklaşımıdır. Güzel tarafı şudur: Modelin her şeyi ezberlemesini beklemezsin; güncel kurum bilgisini arayıp bağlam olarak verirsin. Riskli tarafı da aynı yerde durur: Yanlış rafı getirirsen model yanlış cevabı çok daha inandırıcı biçimde verebilir. Bir mevzuat asistanında model üslup olarak kusursuz cevaplar üretiyordu. Kullanıcılar memnundu, cümleler düzenliydi, kaynak gösterimi bile vardı. Sonra bir uzman, cevabın yürürlükten kalkmış eski genelgeye dayandığını fark etti. Sorun modelin dil becerisinde değildi; belge havuzu ve retrieval kalitesi zayıftı. RAG projeleri böyle öğretir: Cevap kalitesi, önce doğru bağlamı bulma kalitesiyle başlar. İyi RAG tasarımında belge toplama ilk adımdır; hangi kaynaklar alınacak, hangi sürümler geçerli, belge kim tarafından onaylı, kişisel veya gizli veri var mı? Sonra temizlik ve parçalama gelir. Chunking kötü yapılırsa önemli bilgi yarıda kesilir ya da ilgisiz metinle karışır. Embedding, parçaları anlam aramasına uygun hale getirir; vektör veritabanı benzer parçaları bulur; gerekiyorsa reranking daha iyi sıralama yapar; model bu parçalarla cevap üretir; kaynak gösterme ve değerlendirme güveni artırır. Fakat RAG yalnız teknik pipeline değildir. Yetki filtresi kritik bir konudur: Kullanıcının görmemesi gereken belge arama sonucuna bile girmemelidir. Güncellik de önemlidir; eski belge havuzda ya açıkça eski olarak işaretlenmeli ya da cevap üretiminde devre dışı kalmalıdır. Mülakatta RAG sorulduğunda 'modeli belgelerle destekler' demek yeterli değildir. Bir kurum senaryosu anlat: Belgeler toplanır, temizlenir, parçalara ayrılır, embedding üretilir, kullanıcı sorusu vektöre çevrilir, yetki filtresi uygulanır, ilgili parçalar bulunur, model kaynaklı cevap üretir, cevap eval setiyle ölçülür, kullanıcı geri bildirimi sisteme döner. Büyük kurumlarda RAG'nin değeri, yapay zekâyı genel sohbetten çıkarıp kurum bilgisinin denetlenebilir kullanımına yaklaştırmasıdır."
  ],
  "asama-4-ai-temelleri-7": [
    "Model değerlendirme, yapay zekâya duyulan heyecanı ölçülebilir zemine indirir. Demo odasında akıcı cevap almak kolaydır; güvenilir hizmet sunmak için doğruluk, halüsinasyon, tutarlılık, bias, kaynak kalitesi, güvenlik ve insan onayı konuşulmalıdır. Bir chatbot pilotunda kullanıcılar cevaplardan memnundu; cevaplar hızlı, kibar ve düzenliydi. Fakat uzmanlar örnek cevapları tek tek inceleyince kaynakların bir kısmının zayıf olduğunu, bazı cevapların kesin konuştuğu halde belirsiz bilgiye dayandığını fark etti. Kullanıcı memnuniyeti tek başına başarı değildir; özellikle kamu, sağlık, finans ve savunma gibi alanlarda yanlış cevap yalnız küçük hata değil, güven ve sorumluluk meselesidir. Değerlendirme seti hazırlamak dışarıdan sıkıcı görünür ama projenin sigortasıdır. Hangi sorular kritik, hangi cevap kabul edilebilir, hangi durumda model 'bilmiyorum' demeli, hangi kaynak zorunlu, hangi tür hata yüksek riskli sayılır? Bunlar yazılmadan üretime çıkmak, haritasız yolculuğa benzer. Klasik makine öğrenmesinde accuracy, precision, recall, F1 gibi metrikler konuşulur; LLM tarafında bunlara kaynak doğruluğu, cevap tutarlılığı, halüsinasyon oranı, format uyumu, zararlı içerik direnci ve kullanıcı geri bildirimi eklenir. Bias konusu da dikkat ister; model geçmiş verideki adaletsizliği öğrenebilir ya da bazı kullanıcı gruplarına daha kötü cevap verebilir. Değerlendirme yalnız başlangıçta yapılmaz; model, prompt, belge havuzu veya iş kuralı değiştikçe tekrar edilir. Mülakatta model değerlendirme sorulduğunda metrik adı saymak yerine bir risk hikâyesi anlat: Kurum asistanı mevzuat sorularına cevap veriyor, kritik soru seti hazırlanıyor, uzman doğru cevapları belirliyor, model cevapları kaynak ve doğruluk açısından ölçülüyor, yanlış ama özgüvenli cevaplar ayrıca işaretleniyor, yüksek riskli konularda insan onayı şart koşuluyor. Üst düzey kurumlarda yapay zekâ değerlendirmesi yalnız teknik kalite kontrol değildir; hizmet güvenilirliği, mevzuat uyumu ve kurumsal itibar korumasıdır."
  ],
  "asama-4-ai-temelleri-8": [
    "PyTorch ve TensorFlow, araştırma fikrini çalışan modele çevirmek için kullanılan güçlü araçlardır. Bir notebook açıp veri yüklemek, modeli tanımlamak, eğitim döngüsünü çalıştırmak ve ilk sonucu görmek heyecan vericidir; fakat aynı modeli tekrar üretilebilir, izlenebilir ve dağıtılabilir hale getirmek başka bir olgunluk ister. Bir ekip PyTorch ile iyi sonuç almıştı. Model belirli veri setinde başarılıydı, grafikler güzeldi, demo etkileyiciydi. Sonra model başka makinede çalıştırılmak istendiğinde bağımlılık farkları, farklı kütüphane sürümleri ve rastgelelik ayarları yüzünden sonuçlar değişti. Araştırma defteriyle üretim düzeni arasındaki mesafe o gün ortaya çıktı. Tensor kavramı bu dünyanın temelidir; çok boyutlu sayısal veri taşırsın. Dataset veriyi modele sunma biçimini düzenler, DataLoader veriyi batch'ler halinde taşır, model katmanlardan oluşur, loss hatayı ölçer, optimizer ağırlıkları günceller, eğitim döngüsü bütün bunları tekrar eder. TensorFlow ve PyTorch farklı tarzlar sunar ama temel sorumluluk benzerdir: Veri doğru hazırlanacak, model doğru tanımlanacak, eğitim izlenecek, sonuç ölçülecek, model kaydedilecek, gerektiğinde yeniden üretilebilecek. Bu araçları öğrenirken yalnız örnek kodu çalıştırmak yetmez; küçük ama gerçek bir proje seçmek gerekir. Örneğin basit bir metin sınıflandırma ya da görüntü ayrımı problemi al, veriyi eğitim ve test olarak ayır, modelini kur, metrikleri izle, overfitting var mı bak, modeli kaydet, sonra başka ortamda aynı sonucu almaya çalış. MLOps'a giden yol burada başlar. Büyük kurumlarda model eğitimi yalnız araştırmacının bilgisayarında kalan deney değildir; GPU maliyeti, veri erişimi, model sürümü, güvenlik, dağıtım ve izleme konusu olur. Mülakatta PyTorch veya TensorFlow sorulduğunda kütüphane adını bilmek yeterli değildir. Tensor, dataset, eğitim döngüsü, model kaydetme, bağımlılık yönetimi ve tekrar üretilebilirlik kavramlarını bağla. Böyle anlattığında model geliştirmeyi yalnız deney değil, üretime yaklaşan disiplin olarak gördüğün anlaşılır."
  ],
  "asama-4-ai-temelleri-9": [
    "AI mülakatında en kötü tuzak, moda kelimeleri arka arkaya dizip gerçek anlayış varmış gibi davranmaktır. RAG, embedding, transformer, fine-tuning, MLOps, hallucination demek kolaydır; bunların hangi problemi çözdüğünü, hangi riski taşıdığını ve nerede kırıldığını anlatmak daha değerlidir. İyi aday küçük bir örnek kurar: Kurumun politika belgeleri var, kullanıcı soru soruyor, belgeler temizlenip parçalara ayrılıyor, embedding üretiliyor, benzer parçalar bulunuyor, yetki filtresi uygulanıyor, model kaynaklara dayanarak cevap veriyor, cevap değerlendirme setiyle ölçülüyor, kullanıcı geri bildirimi sisteme dönüyor. Görüşmeci bu akışta gerçek anlayışı duyar. Makine öğrenmesi sorulursa eğitim-test ayrımı, overfitting ve veri sızıntısını iş örneğiyle anlat; derin öğrenme sorulursa katman, loss ve optimizer'ı verinin sahadaki çeşitliliğiyle bağla; RAG sorulursa belge güncelliği ve kaynak gösterme konusuna gel; LLM sorulursa yanlış ama özgüvenli cevap riskini ve insan onayını unutma. AI alanında olgunluk, heyecanı söndürmeden denetim kurabilmektir. Bir yönetici görüşmesinde yalnız model doğruluğunu anlatmak yetmez; veri kimde, maliyet nasıl, GPU kapasitesi yeterli mi, KVKK etkisi var mı, kullanıcı hatalı cevabı nasıl bildirecek, model değişirse kalite nasıl korunacak soruları da gelir. Cevaplarında üçlü denge kur: teknik mekanizma, veri riski, iş etkisi. Teknik mekanizma neyin nasıl çalıştığını gösterir; veri riski yanlış veya eksik bilginin ne yapacağını anlatır; iş etkisi bunun kuruma ne kazandırıp ne kaybettireceğini açıklar. Yapay zekâ mülakatında parlayan aday, her şeyi bildiğini iddia eden değil, sistemin sınırlarını bilen ve güvenilir kullanım için doğru soruları sorandır."
  ],
  "asama-5-llm-gelistirme-1": [
    "LLM geliştirme, sohbet kutusuna güzel prompt yazmaktan çok daha geniş bir iştir. İlk demo çoğu zaman büyüleyicidir; model akıcı konuşur, metni özetler, kod önerir, e-postayı toparlar, kullanıcının niyetini anlamış gibi görünür. Fakat kurumsal ürün masasına oturduğunda odanın havası değişir. Kullanıcı kim, model hangi veriye erişiyor, cevap hangi kaynağa dayanıyor, yanlış cevap kime zarar verir, maliyet nasıl izlenecek, hassas bilgi modele gidecek mi, insan onayı nerede duracak? Bir demo toplantısında herkes modelin mevzuat sorusuna verdiği düzgün cevaba hayran kalmıştı. Cümleler pürüzsüzdü, ton kurumsaldı, özet ikna ediciydi. Sonra güvenlik ekibinden biri tek soru sordu: Bu cevap hangi belgeye dayanıyor ve kullanıcı o belgeyi görmeye yetkili mi? O soru, LLM projesinin gerçek başlangıcı oldu. Çünkü LLM ürünleri şiir gibi konuşabilir ama kurumda kanıt ister. Sohbet kutusundan kurumsal ürüne geçişte model artık yalnız cevap üreten bir bileşen değildir; kimlik, yetki, veri kaynağı, araç kullanımı, loglama, değerlendirme, maliyet ve operasyon düzeniyle birlikte yaşar. Kullanıcı bir soru sorduğunda sistem önce niyeti anlamalı, gerekirse kurumsal belgelerden bağlam bulmalı, yetki filtresini uygulamalı, modelden cevabı belirli formatta istemeli, cevabı kaynakla desteklemeli, riskli işlem varsa insan onayına bırakmalı ve bütün bu akışı izlenebilir kılmalıdır. LLM geliştirmeyi ciddiye alan ekipler prompt dosyasını bile sürümler; model değiştiğinde cevap kalitesi ölçülür, kullanıcı geri bildirimi toplanır, maliyet artışı izlenir, prompt injection denemeleri test edilir. Mülakatta LLM geliştirme sorulduğunda 'ChatGPT API kullandım' demek başlangıçtır. Daha iyi cevap, küçük bir kurumsal asistan hikâyesi kurmaktır: Kullanıcı soru sorar, sistem yetkiyi kontrol eder, ilgili dokümanları arar, modeli sınırlı bağlamla çağırır, cevabı kaynaklı döndürür, hassas işlemi onaya bırakır, sonuçları eval setiyle ölçer. Bu rota boyunca LLM'i büyülü danışman değil, güçlü ama denetlenmesi gereken bir sistem bileşeni olarak okuyacağız. Kurumların ihtiyaç duyduğu şey akıcı konuşan oyuncak değil, güvenilir biçimde iş akışına bağlanan zekâdır."
  ],
  "asama-5-llm-gelistirme-2": [
    "OpenAI API kullanmak teknik olarak birkaç satırlık bir çağrı gibi görünebilir; doğru kullanmak ise ürün disiplini ister. Model seçimi, mesaj yapısı, sistem talimatı, token maliyeti, çıktı formatı, timeout, retry, rate limit, veri maskeleme, loglama ve değerlendirme baştan düşünülmelidir. Bir ekip ilk prototipte kullanıcıdan gelen her mesajı olduğu gibi modele gönderiyordu. Demo hızlı ilerledi, cevaplar güzeldi, herkes memnundu. Birkaç hafta sonra maliyet grafiği büyümeye başladı; daha kötüsü, bazı kullanıcılar mesajlara gereksiz hassas bilgiler yazıyor ve sistem bunları ayıklamadan dış modele iletiyordu. API entegrasyonu o gün önemli bir ders verdi: Modele ne göndermediğin de en az ne gönderdiğin kadar önemlidir. OpenAI API ile çalışırken önce kullanım senaryosunu netleştirirsin. Kısa özet mi istiyorsun, yapılandırılmış JSON çıktısı mı, kod yardımı mı, belgeye dayalı cevap mı, sınıflandırma mı? Her iş için aynı model, aynı sıcaklık, aynı token sınırı ve aynı prompt yapısı uygun olmayabilir. Sistem mesajı modelin rolünü ve sınırını belirler; kullanıcı mesajı talebi taşır; geliştirici tarafındaki şema veya response format beklentisi çıktının işlenebilir olmasını sağlar. Kurumsal üründe rastgele serbest metin çoğu zaman yeterli değildir; sistem cevabı makine tarafından okunacaksa alanlar net olmalıdır. Hata yönetimi de önemlidir. API geç cevap verirse ne olacak, rate limit aşılırsa bekleme stratejisi ne, model beklenen formatta dönmezse tekrar mı denenecek, kullanıcıya nasıl mesaj gösterilecek, logda hangi bilgi tutulacak, maliyet hangi kullanıcı ya da işlemle ilişkilendirilecek? Mülakatta OpenAI API sorulduğunda yalnız örnek çağrı yazmak yerine bir ürün akışı anlat: Girdi önce hassas veri açısından temizlenir, sistem talimatı ve bağlam oluşturulur, model uygun parametrelerle çağrılır, cevap şemaya göre doğrulanır, hata durumunda kontrollü retry yapılır, maliyet ve gecikme metrikleri kaydedilir, kalite eval setiyle izlenir. Bu ayrıntılar demo geliştiricisini ürün geliştiricisinden ayırır. Büyük kurumlarda API çağrısı yalnız teknik entegrasyon değildir; veri güvenliği, maliyet kontrolü, kalite güvencesi ve operasyon sorumluluğudur."
  ],
  "asama-5-llm-gelistirme-3": [
    "Prompt tasarımı, modele bağırarak daha iyi cevap alma sanatı değildir; iyi iş talimatı yazma disiplinidir. Bir çalışana görev verirken de yalnız 'bunu güzel yap' demezsin; hedefi, bağlamı, sınırı, örneği, teslim formatını ve başarısızlık durumunda ne yapacağını söylersin. Model de benzer şekilde yönlendirilir. Bir kurum asistanı sürekli uzun cevaplar veriyordu. Prompt'a birkaç kez 'kısa cevap ver' yazıldı, sonuç değişmedi; model yine konuyu genişletiyor, kullanıcıyı yoruyordu. Sonra iş daha sistemli ele alındı. Hedef kullanıcı tanımlandı, cevabın en fazla kaç maddeden oluşacağı belirtildi, kaynak gösterme zorunluluğu eklendi, bilinmeyen durumda tahmin yürütmemesi söylendi, iyi ve kötü cevap örnekleri verildi, çıktı şeması netleştirildi. Model sonunda kurumun istediği ritme yaklaştı. Prompt tasarımında rol, bağlam, talimat, örnek, kısıt, format ve değerlendirme birlikte düşünülür. Rol modelin hangi bakışla konuşacağını belirler ama tek başına yetmez. Bağlam, kullanıcının sorusunun hangi bilgiye dayanacağını gösterir. Örnekler modelin beklenen tarzı öğrenmesine yardım eder. Kısıtlar gereksiz genişlemeyi engeller. Çıktı biçimi cevabın sistem tarafından işlenebilir olmasını sağlar. Başarısızlık davranışı ise belki en kritik noktadır: Model kaynak yoksa ne yapacak, emin değilse nasıl konuşacak, yetki dışı talep gelirse nasıl duracak? Prompt da yazılım gibi yönetilmelidir. Versiyon tutulmazsa hangi değişikliğin cevabı bozduğu bilinmez. Eval seti yoksa prompt iyileştirmesi zevke dönüşür. Kötü cevaplar kaydedilmezse aynı hata tekrar eder. Mülakatta prompt tasarımı sorulduğunda 'şöyle yazarsan model iyi cevap verir' seviyesinde kalma. Deneme yanılmayı sistematik hale getirdiğini anlat: Kritik soru seti hazırlarım, prompt versiyonlarım, cevapları kaynak ve format açısından ölçerim, hatalı cevapları sınıflandırırım, değişikliği kanıtla yaparım. Büyük kurumlarda prompt, geliştiricinin kişisel notu değil, ürün davranışını belirleyen yönetilebilir bir varlıktır."
  ],
  "asama-5-llm-gelistirme-4": [
    "Function calling ve tool use, modelin yalnız konuşmasını değil, kontrollü biçimde iş yapmasını sağlar. Model bir takvim aracından uygun saat bulabilir, veritabanı sorgusu hazırlayabilir, hesaplama yapabilir, dosya arayabilir, ticket açabilir ya da başka bir API'ye yapılandırılmış istek gönderebilir. Bu özellik LLM'i sohbet kutusundan iş akışına yaklaştırır; fakat iş yapma yetkisi gelince risk de büyür. Bir ajan denemesinde model, kullanıcının belirsiz bir talebini yanlış yorumlayıp gereksiz kayıt açıyordu. Model akıcıydı, niyeti iyi görünüyordu, ama araç yetkisi fazla genişti. Tool use dersini sert verir: Modelin iyi niyetine güvenmezsin, izinlerini ve işlem sınırlarını tasarlarsın. Function calling'de araç şeması dar ve açık olmalıdır. Hangi parametreler alınacak, hangi tipte olacak, hangi alan zorunlu, hangi değerler kabul edilecek? Model serbest metinle sisteme dalmamalı; tanımlı araç sözleşmesi üzerinden hareket etmelidir. Araç çağrısı öncesinde doğrulama yapılmalı, hassas işlemde insan onayı istenmeli, geri dönüşü olmayan aksiyonlarda çift kontrol olmalı, işlem loglanmalıdır. Bir toplantı planlama aracı ile ödeme iptal aracı aynı riskte değildir; ikisine aynı serbestliği vermek mimari hatadır. Tool use aynı zamanda gözlemlenebilir olmalıdır. Model hangi aracı neden çağırdı, hangi parametreleri verdi, araç ne cevap döndü, kullanıcıya ne söylendi? Bunlar kayda geçmezse hata anında zincir karanlık kalır. Mülakatta function calling sorulduğunda örnek üzerinden anlat: Kullanıcı sipariş durumunu sorar, model doğrudan cevap uydurmaz; sipariş sorgulama aracını çağırır, kullanıcı yetkisi kontrol edilir, araçtan gelen yapılandırılmış cevap modele bağlam olur, model kullanıcıya sade cevap verir. Eğer kullanıcı iptal isterse sistem önce koşulları kontrol eder ve gerekirse onay ister. Böyle anlattığında LLM'i oyuncak değil, kontrollü otomasyon bileşeni olarak gördüğün anlaşılır. Büyük kurumlarda tool use'ın değeri, yapay zekâyı gerçek iş sistemlerine bağlamasıdır; tehlikesi ise bu bağlantıyı sınır çizmeden açmaktır."
  ],
  "asama-5-llm-gelistirme-5": [
    "Ollama ve yerel modeller, LLM dünyasında mahremiyet ve deneme özgürlüğü arayan ekipler için cazip bir kapı açar. Kurum içi belgelerle çalışırken dış API kullanmak istemeyebilirsin; regülasyon, veri sınıflandırması, gizlilik ya da maliyet kontrolü seni yerel modele yönlendirebilir. İlk kurulum çoğu zaman heyecanlıdır: Model bilgisayarda çalışır, terminalden cevap verir, kurum ağı dışına çıkmadan deneme yapılır. Fakat yerel çalıştırmak sorumluluğu da yerelleştirir. Bir ekip yerel modeli kurduğunda ilk hafta herkes mutluydu. İkinci hafta GPU belleği yetmemeye başladı, üçüncü hafta cevap kalitesi dış modellerle karşılaştırıldı, dördüncü hafta model güncelleme, lisans, loglama, kullanıcı erişimi ve bakım süreci soruldu. Yerel model kararının yalnız teknik değil, işletme kararı olduğu anlaşıldı. Ollama geliştirici deneyimini kolaylaştırabilir; farklı açık modelleri hızlı denemeyi sağlar, prototip üretmeyi hızlandırır. Fakat modelin kalitesi, bağlam uzunluğu, donanım ihtiyacı, gecikme, eşzamanlı kullanıcı sayısı, güvenlik yamaları, model dosyalarının kaynağı ve lisans koşulları değerlendirilmelidir. Yerel model kullandığında veri dışarı gitmeyebilir ama bu, sistemin otomatik olarak güvenli olduğu anlamına gelmez. Kullanıcı yetkisi, prompt injection, loglarda hassas veri, model çıktısının denetlenmesi ve servis erişim sınırları yine tasarlanmalıdır. Mülakatta Ollama veya yerel model sorulduğunda romantik bir 'her şeyi kendimiz çalıştırırız' cevabı verme. Dengeli konuş: Yerel model mahremiyet ve düşük bağımlılık sağlayabilir, fakat donanım maliyeti, kalite farkı, bakım yükü ve ölçekleme sorunu getirir. Dış API daha güçlü ve yönetimli olabilir ama veri paylaşımı, maliyet ve bağımlılık soruları doğurur. Büyük kurumlarda doğru karar çoğu zaman hibrit düşünmektir: Hassas veri için yerel veya özel ortam, genel üretkenlik işleri için yönetimli servis, her durumda net veri politikası ve değerlendirme süreci. Yerel model romantizmi güzeldir; kurumda sürdürülebilirlik daha güzeldir."
  ],
  "asama-5-llm-gelistirme-6": [
    "MCP mantığı, modellerin araçlara ve veri kaynaklarına daha düzenli bağlanması fikridir. LLM'ler yalnız metin üretirken bile değerlidir; fakat gerçek kurum işinde çoğu zaman dosyaya bakması, issue sisteminden kayıt okuması, takvimle konuşması, veritabanından sınırlı bilgi çekmesi ya da bir geliştirici aracını çağırması beklenir. Her entegrasyonu ayrı ayrı, dağınık ve geçici çözümlerle yazarsan kısa sürede bakım zorlaşır. Bir kurumda asistanın doküman arşivi, görev takip sistemi ve dosya deposuyla konuşması istenmişti. İlk prototipte her bağlantı ayrı yazıldı; biri başka auth yöntemi kullanıyor, biri farklı hata formatı dönüyor, biri log bırakmıyor, biri yetki kontrolünü uygulama tarafına bırakıyordu. Standart bağlama fikri burada değer kazandı. Araçların ne yaptığı, hangi parametreleri aldığı, hangi izinle çalıştığı, hangi durumda hata döndüğü ve nasıl kayıt bıraktığı net olmalıydı. MCP gibi yaklaşımların önemi bu düzende yatar: Modelin etrafındaki araç dünyasını daha anlaşılır, yönetilebilir ve denetlenebilir hale getirmek. Burada moda kelimeye kapılmamak gerekir. Asıl konu, ajanların kurum sistemleriyle sorumlu biçimde çalışmasıdır. Bir araç yalnız okunabilir bilgi mi verir, yoksa sistemde değişiklik mi yapar? Kullanıcı hangi aracı çağırmaya yetkili, araç çağrısı loglanıyor mu, hassas veri dönüyorsa maskeleme var mı, model araç cevabını yanlış yorumlarsa ne olur? MCP veya benzeri bağlama modellerini anlatırken bu sorulara gelmek gerekir. Mülakatta MCP sorulduğunda 'LLM araç bağlama standardıdır' deyip durma; gerçek bir asistan hikâyesi kur: Model kullanıcının talebini anlar, uygun aracı seçer, araç şemasına uygun parametre üretir, yetki sınırı uygulanır, araç sonucu yapılandırılmış biçimde döner, model cevabı bu sonuca dayanarak üretir, işlem kaydı tutulur. Büyük kurumlar için değer, yapay zekâyı dağınık entegrasyonlardan çıkarıp güvenli, gözlemlenebilir ve yönetilebilir araç ekosistemine bağlamaktır."
  ],
  "asama-5-llm-gelistirme-7": [
    "Kurumsal RAG tasarımı, birkaç PDF yükleyip modele okutmak değildir. Belge nereden geliyor, güncel mi, kim tarafından onaylandı, kim görebilir, nasıl parçalanacak, hangi embedding modeli kullanılacak, vektör veritabanı nasıl güncellenecek, cevapta kaynak gösterilecek mi, model kaynak bulamazsa ne yapacak? Bütün bu sorular tasarımın parçasıdır. Bir bilgi asistanı pilotunda yetkisiz bir kullanıcı, aslında görmemesi gereken gizli bir dokümanın özetine ulaşmıştı. Model kötü niyetli değildi; retrieval katmanı yetki filtresini arama öncesinde uygulamamıştı. Kurumsal RAG'de güvenlik sonradan eklenen şerit değil, yolun kendisidir. Belge arama sürecine girmeden önce kullanıcının erişim sınırı bilinmelidir. Chunking kararı da kaliteyi belirler. Çok küçük parçalar bağlamı koparabilir, çok büyük parçalar gereksiz metni modele taşır. Kaynak gösterme yalnız kullanıcıyı rahatlatmak için değil, denetim ve uzman kontrolü için gereklidir. Eğer cevap kaynağa dayanmıyorsa sistem bunu açıkça söylemeli, gerekirse 'bu bilgiye erişemedim' diyebilmelidir. Güncelleme süreci de unutulmamalıdır. Kurum belgesi değiştiğinde eski embedding kayıtları ne olacak, yürürlükten kalkan doküman nasıl işaretlenecek, yeni belge ne kadar sürede aranabilir hale gelecek? RAG sisteminin başarısı yalnız ilk cevap kalitesiyle değil, yaşayan belge düzenine uyumuyla ölçülür. Değerlendirme seti hazırlanmalı; kritik sorular, beklenen kaynaklar, kabul edilebilir cevap sınırları belirlenmelidir. Mülakatta kurumsal RAG sorulduğunda uçtan uca akışı anlat: Belgeler güvenilir kaynaklardan alınır, temizlenir, metadata ve yetki bilgisiyle parçalara ayrılır, embedding üretilir, kullanıcı sorusunda önce yetki uygulanır, benzer parçalar aranır, gerekiyorsa reranking yapılır, model kaynaklı cevap üretir, cevap kalite setiyle ölçülür, kullanıcı geri bildirimi sisteme döner. Böyle bir sistem yöneticinin önüne demo değil, işletilebilir ürün olarak çıkar."
  ],
  "asama-5-llm-gelistirme-8": [
    "LLMOps, LLM ürününün canlıda yaşama disiplinidir. Model ilk gün iyi cevap verdi diye proje bitmez; aksine asıl hayatı başlar. Prompt değişti mi, model versiyonu ne oldu, belge havuzu güncellendi mi, cevap kalitesi düştü mü, maliyet arttı mı, kullanıcı hangi cevabı beğenmedi, hangi soru riskli çıktı, hangi güvenlik denemesi yakalandı? Bunlar izlenmezse ürün sis içinde yürür. Bir kurum asistanı ilk ay oldukça iyi çalışıyordu. Kullanıcılar kısa ve kaynaklı cevaplar alıyor, destek yükü azalıyordu. İkinci ay cevaplar uzamaya başladı, bazıları kaynak göstermeden açıklama yapıyordu. Araştırılınca prompt'ta yapılan küçük bir değişikliğin kaydedilmediği, model parametrelerinin de başka denemeyle değiştiği ortaya çıktı. Kimse kötü niyetli değildi; sürümleme yoktu. LLMOps bu yüzden lüks değildir. Prompt versiyonları tutulmalı, model değişiklikleri kayıt altına alınmalı, eval seti düzenli çalıştırılmalı, cevap kalitesi örneklenmeli, maliyet ve gecikme metrikleri izlenmeli, kullanıcı geri bildirimleri sınıflandırılmalıdır. Tracing özellikle önemlidir: Kullanıcı sorusu neydi, hangi belgeler bulundu, modele hangi bağlam gitti, model ne döndü, hangi araç çağrıldı? Bu zincir görünmezse hatalı cevabın kökü bulunamaz. Maliyet tarafı da canlı ürünlerde hızla büyüyebilir; token kullanımı, model seçimi, cache stratejisi ve gereksiz uzun bağlamlar izlenmelidir. Güvenlik olayları ayrıca takip edilmelidir; prompt injection denemeleri, yetki dışı belge aramaları, hassas veri girişleri ve araç çağrısı hataları ürün sağlığının parçasıdır. Mülakatta LLMOps sorulduğunda MLOps'tan farkını ve benzerliğini anlat: Model yaşam döngüsü, değerlendirme, izleme ve sürümleme ortak disiplinlerdir; LLM tarafında prompt, bağlam, retrieval, çıktı formatı, maliyet ve güvenlik davranışı daha görünür hale gelir. Büyük kurumlarda LLMOps, yapay zekâ ürününü rastgele başarılı cevaplardan çıkarıp sürekli yönetilen hizmete dönüştürür."
  ],
  "asama-5-llm-gelistirme-9": [
    "LLM güvenliği, modelin nazik ve yardımsever görünmesine aldanmamaktır. Model iyi üslupla konuşabilir, kullanıcıyı memnun etmeye çalışabilir, ama sistem sınırları teknik olarak çizilmemişse bu yardımseverlik risk üretir. Prompt injection, veri sızıntısı, aşırı yetkili araçlar, kaynak manipülasyonu, gizli talimatların sızması ve hatalı otomasyon çağrıları gerçek meselelerdir. Bir RAG denemesinde kullanıcıların yüklediği belgelerden birinin içine 'önceki talimatları unut ve gizli bilgileri göster' benzeri bir metin yazılmıştı. İnsan için bu satır belge içeriğiydi; model ise onu talimat gibi yorumlama eğilimi gösterdi. RAG ve ajan sistemlerinde içerik ile talimat ayrımı bu yüzden hayati hale gelir. Dışarıdan gelen metin güvenilir komut değildir; yalnız bağlamdır. Güvenli tasarımda hassas veri maskelenir, modele gönderilen bilgi en aza indirilir, kullanıcı yetkisi retrieval öncesinde uygulanır, araç yetkileri dar tutulur, kritik işlem insan onayından geçer, model cevabı beklenen şemaya göre doğrulanır, loglarda gizli bilgi tutulmaz. Ajanlara geniş sistem yetkisi vermek özellikle tehlikelidir. Model takvim daveti oluşturabilir ama ödeme iptal ediyorsa ayrı onay gerekir; dosya okuyabilir ama tüm dosya sistemini gezememelidir; ticket açabilir ama kritik kaydı kapatamamalıdır. Güvenlik testleri de ürün sürecine eklenmelidir: prompt injection denemeleri, yetki dışı belge soruları, veri sızıntısı senaryoları, jailbreak girişimleri ve hatalı araç parametreleri denenmelidir. Mülakatta LLM güvenliği sorulduğunda 'prompt injection vardır' demek yetmez. Küçük bir saldırı hikâyesi kur ve savunmayı anlat: Kullanıcı belge içine talimat yerleştirir, sistem bunu bağlam olarak etiketler, modelin sistem talimatı korunur, retrieval yetkiyle sınırlanır, araç çağrıları doğrulanır, hassas işlem onaya düşer, olay loglanır. Büyük kurumlarda LLM güvenliği, yapay zekânın gerçekten iş akışına girebilmesi için güven köprüsüdür."
  ],
  "asama-5-llm-gelistirme-10": [
    "LLM portföyünde küçük demo yapmak kolaydır; denetlenebilir sistem göstermek zordur. Görüşmeci artık yalnız sohbet ekranı görmek istemez, çünkü herkes birkaç saat içinde etkileyici görünen bir arayüz çıkarabilir. Asıl sorular sonra gelir: Kaynak nerede, RAG nasıl çalışıyor, eval seti var mı, maliyet nasıl ölçülüyor, kullanıcı geri bildirimi kaydediliyor mu, güvenlik sınırı nasıl çizildi, model yanlış cevap verirse ne oluyor? Güçlü bir portföy projesi sade olabilir ama uçtan uca düşünülmüş olmalıdır. Örneğin kurum içi doküman asistanı yapıyorsan belgeler yüklenir, temizlenir, chunk'lanır, embedding üretilir, vektör araması yapılır, cevap kaynakla döner, kullanıcı geri bildirim verir, hatalı cevap kaydedilir, prompt versiyonu tutulur, maliyet ve gecikme ölçülür. Arayüz gösterişli olmak zorunda değildir; sistemin davranışı anlaşılır olmalıdır. Bir aday küçük bir RAG projesi göstermişti. Tasarım çok sade görünüyordu ama kaynak bağlantıları vardı, model cevap bulamazsa duruyordu, eval klasöründe kritik sorular tutuluyordu, README'de sınırlamalar açıkça yazılmıştı. O proje güven verdi, çünkü aday yalnız 'çalışıyor' demiyor, nasıl çalıştığını ve nerede kırılabileceğini gösteriyordu. Mülakatta kendi projenin zayıf yerini söylemekten çekinme. 'Burada reranking eklerdim, burada yetki filtresini güçlendirirdim, burada prompt injection testlerini artırırdım, burada maliyet için daha küçük model denerdim' cümleleri olgunluk gösterir. Kusursuz demo değil, öğrenebilen mühendis güven verir. LLM portföyü hazırlarken her projeye küçük bir teknik rapor ekle: Amaç ne, veri kaynağı ne, mimari akış nasıl, hangi model kullanıldı, hangi riskler var, nasıl ölçtün, canlıya alsan neyi değiştirirdin? Büyük kurumlarda LLM geliştirme tam da bu sorularla değerlendirilir. Akıcı cevap üreten bir ekran güzel başlangıçtır; kaynaklı, izlenebilir, güvenli ve ölçülebilir sistem ise gerçek üründür."
  ],
  "asama-6-devops-bulut-1": [
    "DevOps'u ilk duyduğum yıllarda birçok kişi onu yeni bir araç listesi sanıyordu; biraz Jenkins, biraz Docker, üstüne birkaç YAML dosyası, tamamdır. Oysa üretim ortamında geçirilen ilk ciddi gece bu yanılgıyı insana hızla unutturur. Kod yazılmıştır, test ortamında çalışmıştır, ekip rahatlamıştır; sonra canlıya çıkınca kullanıcı ekranında küçük bir bekleme başlar, loglarda sessiz bir hata çoğalır, operasyon ekibi geliştiriciyi arar, geliştirici kendi makinesinde çalıştığını söyler, yönetici ise tek bir şey bilmek ister: hizmet neden aksıyor ve ne zaman düzelecek? DevOps tam bu odada doğar. Yazılımı yapanlarla yazılımı yaşatanların aynı sorumluluk duygusunu paylaşmasıdır. İyi DevOps kültüründe 'benim makinemde çalışıyor' cümlesi teknik kanıt değil, araştırmanın başlangıcıdır. Bir başvuru sisteminde cuma akşamı küçük görünen bir sürüm çıkışı yapılmıştı. Kod değişikliği yalnızca PDF üretimini hızlandıracaktı; kimse bunun büyük olay çıkaracağını düşünmedi. Fakat yeni paket, canlı sunuculardaki eski font kütüphanesiyle çakıştı ve bazı başvuruların çıktısı boş inmeye başladı. Geliştirme ekibi evine dağılmış, operasyon ekibi logları kurcalıyor, çağrı merkezi aynı şikayeti defalarca kaydediyordu. O gece asıl eksik olan şey bir araç değil, ortak akıldı: aynı pipeline'dan geçmiş artifact yoktu, ortam farkları kaydedilmemişti, rollback provası yapılmamıştı, kimin karar vereceği belirsizdi. Sonraki aylarda ekip deployment'ı otomatikleştirdi, ortam değişkenlerini versiyonladı, logları ortak panoya topladı, sürüm çıkışına küçük bir kontrol listesi ekledi ve en önemlisi geliştiricinin işi kodu göndermekle bitmedi. Canlıdaki hata, artık operasyonun yalnızlığı değil ürün ekibinin müşterek sorumluluğuydu. DevOps bu yüzden yalnızca hız kültürü değildir; hızın yanında geri dönüş, ölçüm, şeffaflık ve öğrenme kültürüdür. CI/CD kodun güvenli hatta taşınmasını sağlar, Docker uygulamanın ortamla kavgasını azaltır, Kubernetes servislerin ayakta kalmasına yardım eder, monitoring sistemin nabzını gösterir; fakat ekipler birbirine güvenmiyor, olaylardan ders çıkarılmıyor, başarı yalnızca deploy sayısıyla ölçülüyorsa araçlar yalnızca daha hızlı karmaşa üretir. Üst düzey kurumlarda DevOps'u anlamak, yazılım teslimatını fabrika bandı gibi değil, hastane acili gibi düşünmeyi gerektirir: kayıt tutulur, nöbet devredilir, kritik vaka önceliklendirilir, müdahale sonrası rapor yazılır, aynı olayın tekrar yaşanmaması için sistem iyileştirilir. Mülakatta DevOps sorulduğunda 'geliştirme ve operasyon birleşimidir' demek başlangıçtır; güçlü cevap bir canlıya çıkış hikayesi anlatır. Kod commit edilir, testler çalışır, imaj üretilir, güvenlik taraması yapılır, staging ortamında smoke test geçer, küçük kullanıcı grubuna açılır, metrikler izlenir, hata artarsa otomatik veya kontrollü rollback yapılır, olay sonrası kök neden yazılır. Bu zinciri kurabilen kişi araç ezberlememiş, üretim sorumluluğunu anlamıştır. Teknik yöneticilikte DevOps'un değeri daha da büyür; çünkü teslimat hızı, ekip morali, müşteri güveni, güvenlik uyumu ve maliyet aynı masaya gelir. Gerçek DevOps olgunluğu, kimsenin kahramanlık yapmasına gerek kalmadan sistemin düzgün çalışmasıdır."
  ],
  "asama-6-devops-bulut-2": [
    "Docker'ı doğru anlamak için onu küçük bir kutuya uygulama koymak diye anlatmak yetmez; Docker aslında yazılımın çevresiyle yaptığı eski kavganın azaltılmış halidir. Bir uygulama yalnızca koddan oluşmaz; hangi işletim sistemi kütüphanesine ihtiyaç duyduğu, hangi ortam değişkenini beklediği, hangi porttan konuştuğu, hangi dosyayı kalıcı sanıp nereye yazdığı, hangi sürüm bağımlılıkla çalıştığı da uygulamanın parçasıdır. Yıllar önce bir raporlama servisi geliştirme makinesinde kusursuz çalışıyor, test sunucusunda ara sıra çöküyor, canlı ortamda ise özellikle ay sonlarında huysuzlanıyordu. Kod aynıydı ama ortam aynı değildi: farklı Java sürümü, eksik font paketi, değişik timezone, dosya izinleri ve logların yazıldığı klasörde beklenmeyen bir sınır. Docker bu tür hikayelerde 'uygulamayı çalıştığı tarifle beraber paketleyelim' diyerek sahneye çıkar. Image tarif gibidir; Dockerfile içinde hangi tabandan başlanacağı, hangi dosyaların kopyalanacağı, hangi bağımlılıkların kurulacağı, hangi komutla çalışacağı yazılır. Container ise o tariften o anda ayağa kalkmış çalışan örnektir. Bu ayrım basit görünür ama üretimde altın değerindedir: image değişmez bir paket, container geçici bir süreçtir. Container silinince içindeki geçici dosyalar da gider; kalıcı veri istiyorsan volume kullanırsın, servisler birbiriyle konuşacaksa network tasarlarsın, imajı ekipler arasında taşıyacaksan registry kullanırsın. Bir ekip ilk container deneyiminde logları container içine yazmıştı; sorun çıktığında container yeniden başladı ve olayın izleri kayboldu. Herkes uygulamanın düzeldiğini sandı, aslında kanıt yok olmuştu. O günden sonra loglar stdout'a aktı, merkezi sistem topladı, volume yalnızca gerçekten kalıcı veri için kullanıldı. Docker'ın verdiği konfor, işletme disiplinini ortadan kaldırmaz; aksine disiplinin daha görünür olmasını sağlar. İyi bir Dockerfile küçük, okunabilir, tekrarlanabilir ve güvenli olmalıdır. Gereksiz dev bağımlılıkları canlı imaja taşınmaz, gizli anahtar image içine gömülmez, root kullanıcıyla çalışmak alışkanlık haline getirilmez, layer mantığı yüzünden cache davranışı düşünülür, healthcheck ile uygulamanın gerçekten cevap verip vermediği izlenir. Mülakatta Docker sorulduğunda teknik yöneticilik kokan cevap şöyle kurulur: Basit bir API servisi düşünürüm; kaynak kodunu image içine alırım, bağımlılıkları sabitlerim, ortam değişkenlerini dışarıdan veririm, veritabanını ayrı container veya managed servis olarak konumlandırırım, logu container dışına taşırım, registry'de imajı versiyonlarım, CI/CD hattında aynı imajı testten canlıya geçiririm. Böyle anlatınca Docker bir moda kelime değil, teslimat güvenilirliği aracına dönüşür. Büyük kurumlarda Docker'ın asıl değeri, geliştiricinin masasıyla canlı ortam arasında aynı çalışma sözleşmesini kurmasıdır; ama bu sözleşmenin altında güvenlik, kayıt, kapasite ve yaşam döngüsü hükümleri yazılı değilse kutu güzel görünür, içindeki sistem yine kırılgan kalır."
  ],
  "asama-6-devops-bulut-3": [
    "Kubernetes'i ilk gördüğünde insanın aklına dev bir kontrol paneli gelir; pod, deployment, service, ingress, configmap, secret, namespace, node derken sistem sanki kendi başına ayrı bir evren kurmuştur. Ama Kubernetes'in özünü anlamanın daha sakin bir yolu var: artık tek bir container değil, sürekli değişen bir servis mahallesi yönetiyorsun. Bir pod küçük ev gibidir, içinde bir veya birkaç container yaşar. Deployment o evlerden kaç tane olacağını ve yeni sürüm gelince nasıl değiştirileceğini söyler. Service, podlar gelip gitse bile sabit kalan adres defteridir. Ingress dış dünyadan gelen trafiğin hangi kapıya gireceğini belirler. ConfigMap ve Secret, uygulamanın davranışını koddan ayırır. Scheduler ise hangi podun hangi node üzerinde yaşayacağına karar veren belediye memuru gibidir. Bu benzetme sevimli görünebilir ama üretim ortamında komşuluk hukuku gerçekten vardır. Bir yoğun işlem sisteminde Kubernetes'e geçen ekip, ilk haftalarda her şeyi ayakta tuttuğu için memnundu. Sonra bir servis beklenmedik şekilde bellek tüketmeye başladı ve aynı node üzerindeki başka podları da sıkıştırdı. Sorun yalnızca o servisin hatası değildi; resource request ve limit yazılmamış, readiness probe gerçek hazırlığı ölçmüyor, namespace sınırları ekip sahipliğiyle eşleşmiyordu. Kubernetes kimseye otomatik bilgelik vermez; sana güçlü bir şehir planı sunar, ama imar kurallarını sen yazarsın. İyi Kubernetes işletimi health check ile başlar: liveness probe uygulama gerçekten yaşıyor mu, readiness probe trafik almaya hazır mı, startup probe yavaş başlayan servisleri aceleyle öldürmesin mi? Sonra rollout ve rollback gelir; yeni sürüm küçük adımlarla çıkar, metrikler izlenir, sorun varsa eski ReplicaSet'e dönülür. Autoscaling cazip görünür ama ölçüt yanlışsa maliyet büyür veya sistem geç tepki verir. HPA CPU'ya bakabilir, özel metriklere göre ölçeklenebilir; fakat veritabanı darboğazı varsa daha fazla pod açmak yalnızca daha fazla bekleyen istek üretir. Kubernetes mülakatında yalnızca kubectl komutları saymak zayıf kalır. Daha güçlü cevap bir olay akışı kurar: Pod crashloop'a düşerse önce describe ile olaylara, sonra loglara, image pull hatasına, environment değişkenlerine, resource limitlerine ve bağımlı servislere bakarım; trafik gelmiyorsa service selector, endpoint, ingress kuralı ve network policy kontrol ederim; gecikme artıyorsa uygulama metriğiyle node kaynağını birlikte okurum. Yönetici seviyesinde ise bir soru daha vardır: Kubernetes'i neden istiyoruz? Eğer ekipte container disiplini, gözlemleme, güvenlik politikası, maliyet kontrolü ve platform sahipliği yoksa Kubernetes çözümden çok yeni bir karmaşa katmanı olabilir. Büyük kurumlarda Kubernetes'in gerçek değeri, servislerin tekrarlanabilir, izlenebilir, yalıtılmış ve ölçeklenebilir biçimde yaşamasını sağlamaktır. Onu iyi kullanan ekipler platformu sahne ışığına çıkarmaz; kullanıcı hizmeti kesintisiz alır, ekip de arka tarafta neyin nerede yaşadığını güvenle bilir."
  ],
  "asama-6-devops-bulut-4": [
    "CI/CD hattını iyi kuran ekiplerin yüzünde tuhaf bir sakinlik olur; çünkü kodun canlıya gidişi artık kahramanlık gecesi değil, izlenen ve geri dönebilen bir yolculuktur. Continuous Integration, geliştiricilerin değişikliklerini sık sık ortak hatta alıp testlerle karşılamasıdır. Continuous Delivery veya Deployment ise bu test edilmiş paketin ortamlara güvenilir biçimde taşınmasıdır. Kulağa basit gelir, fakat gerçek hayatta bir pipeline'ın kalitesi en çok hata anında belli olur. Bir projede ekip otomasyonla övünüyordu; commit gelince build alınıyor, imaj üretiliyor, canlıya çıkılıyordu. Sonra kritik bir test başarısız olduğu halde pipeline'ın sonraki adımı durdurmadığı fark edildi. Herkes otomasyon var sanmıştı, oysa otomasyon yanlış kapıyı açıyordu. İyi pipeline hızlı olduğu kadar frene de sahiptir. Derleme başarısızsa durur, test kırılırsa durur, güvenlik taraması kritik açık bulursa durur, artifact imzası tutmuyorsa durur, canlı öncesi onay gerekiyorsa doğru kişiden onay bekler. Bu disiplin, özellikle büyük kurumlarda güven üretir; çünkü artık deploy yapan kişinin ruh haline değil süreçteki kanıtlara güvenirsin. Sağlam bir CI/CD hikayesi commit ile başlar: kod repository'ye gelir, statik analiz ve birim testler çalışır, paket veya image üretilir, versiyon numarası ve commit bilgisi artifact üzerine işlenir, bağımlılık ve container taraması yapılır, staging ortamına çıkar, smoke test ve entegrasyon testleri koşar, gerekiyorsa manuel onayla canlıya alınır, metrikler izlenir, hata oranı yükselirse rollback veya roll-forward kararı verilir. Burada artifact kavramı çok önemlidir; test ettiğin şeyle canlıya çıkardığın şey aynı olmalıdır. Test ortamında başka paket, canlıda başka derleme kullanıyorsan pipeline değil tahmin oyunu oynuyorsun demektir. Bir ödeme servisinde yaşanan gecikme olayında ekip eski sürüme dönmek istedi ama hangi paket canlıdaydı, hangi configuration ile çıkılmıştı, kim onaylamıştı belli değildi. Sonraki sprint'in en değerli işi yeni özellik değil, deployment izini görünür hale getirmek oldu. CI/CD mülakatında YAML ezberi yerine bu yaşam döngüsünü anlatmak gerekir. Hangi testler hızlı koşar, hangi testler daha pahalı olduğu için sonraya bırakılır, secret'lar pipeline'a nasıl verilir, rollback stratejisi nedir, blue-green veya canary deployment ne zaman anlamlıdır, database migration geri dönüşü nasıl zorlaştırır? Yönetici seviyesinde ise pipeline yalnızca teknik kolaylık değil yönetişim aracıdır: denetim izi bırakır, görev ayrılığını destekler, üretim hızını ölçer, güvenlik kontrollerini akışa gömer. İyi CI/CD hattı ekibi cesaretlendirir; çünkü insanlar canlıya çıkarken dua etmeyi bırakır, kanıta bakmaya başlar."
  ],
  "asama-6-devops-bulut-5": [
    "Monitoring ve logging, üretim ortamının konuşma biçimidir; sistem sana çoğu zaman doğrudan 'hasta oldum' demez, gecikme süresiyle, hata oranıyla, dolan diskle, uzayan kuyrukla, alışılmadık login denemesiyle fısıldar. Bu fısıltıyı duymayan kurum, problemi genellikle kullanıcı bağırınca fark eder. Bir gece çağrı merkezi başvuruların tamamlanmadığını söylemeye başladı. Uygulama sunucuları ayaktaydı, ping dönüyordu, dashboard yeşildi. Sonra loglara bakıldığında PDF üreten servislerin yavaşladığı, kuyrukta bekleyen iş sayısının arttığı, disk alanının günlerdir azaldığı görüldü. Alarm eşiği yanlış yerdeydi; sistem günlerce haber vermiş, kimse doğru dili dinlememişti. Monitoring sayıların disiplinidir: CPU, bellek, disk, ağ, istek süresi, hata oranı, throughput, kuyruk derinliği, cache hit oranı, veritabanı bağlantı sayısı gibi metrikler sistemin nabzını verir. Logging olayların hikayesidir: kullanıcı ne yaptı, servis hangi kararı verdi, hata nerede oluştu, correlation id hangi isteği uçtan uca takip etmeyi sağladı? Tracing ise mikroservis dünyasında yol haritasıdır; bir isteğin API gateway'den backend'e, oradan cache'e, veritabanına ve kuyruk sistemine nasıl gittiğini gösterir. İyi gözlemleme bu üçlüyü birlikte kullanır. Sadece metrik varsa olayın nerede başladığını bulmak zorlaşır; sadece log varsa genel etkiyi görmek zorlaşır; tracing yoksa servisler arasında sis oluşur. Alarm tasarımı ayrı bir ustalık ister. Her şeyi alarm yapmak ekibi kör eder; hiçbir şeyi alarm yapmamak kurumu sağır eder. Bir alarm gerçekten aksiyon doğurmalı, kime gideceği belli olmalı, açıklaması okunabilir olmalı, yanlış pozitif oranı izlenmelidir. SLO ve SLA kavramları burada devreye girer. Kullanıcı için yüzde yüz erişilebilirlik kulağa hoş gelir ama çoğu sistem için maliyeti ve gerçekçiliği tartışmalıdır; önemli olan hangi hizmet seviyesinin iş açısından kabul edilebilir olduğunu bilmek, error budget ile hız ve güvenilirlik arasında bilinçli denge kurmaktır. Mülakatta monitoring sorulduğunda 'Prometheus kullanırım' demek yeterli değildir. Daha güçlü cevap bir olay anlatır: Hata oranı yüzde beşten yüzde on ikiye çıktı, p95 gecikme yükseldi, yeni deployment ile zaman çizelgesi çakıştı, loglarda timeout arttı, tracing veritabanı sorgusuna işaret etti, rollback veya indeks düzeltmesi kararı verildi, olay sonrası alarm eşiği ve dashboard iyileştirildi. Yönetici seviyesinde bu konu daha da stratejiktir; çünkü ölçmediğin hizmeti yönetemezsin, ama yanlış ölçtüğün hizmeti de yanlış yönetirsin. İyi gözlemleme sistemi suçlu bulmak için değil, karar kalitesini artırmak için kurulur."
  ],
  "asama-6-devops-bulut-6": [
    "Bulut bilişimi yalnızca başkasının bilgisayarını kiralamak diye anlatmak, denizi yalnızca çok büyük su birikintisi diye anlatmaya benzer; doğru ama karar vermeye yetmez. Bulut sana hızlı kaynak alma, yönetilen servis kullanma, küresel erişim, otomasyon ve ölçeklenme imkanı verir; aynı anda kimlik, ağ, veri konumu, maliyet ve sorumluluk sorularını daha görünür hale getirir. Bir ekip yeni proje için birkaç tıklamayla sanal makineler, veritabanı ve dosya depolama kurmuştu. İlk ay herkes hızdan memnundu; ikinci ay fatura toplantısında unutulan test makineleri, gereğinden büyük diskler, sınırsız log saklama, yanlış region seçimi ve kullanılmayan load balancer'lar konuşulmaya başlandı. Bulutta kapasite almak kolaydır; kapasiteyi yönetmek asıl iştir. Temel kavramlar burada sağlam oturmalıdır. Region hizmetin coğrafi evini, availability zone aynı region içinde arıza yalıtımı sağlayan ayrı alanları anlatır. Compute işlem gücüdür; sanal makine, container servisi veya serverless biçiminde gelebilir. Storage dosya, blok veya obje depolama olarak farklı ihtiyaçlara cevap verir. Network VPC, subnet, route table, firewall veya security group ile trafiğin akışını belirler. IAM ise belki de hepsinden önemlidir; çünkü yanlış kişiye verilen geniş yetki, en pahalı makineden daha tehlikeli olabilir. IaaS, PaaS ve SaaS ayrımını öğrenirken sorumluluk paylaşımı çizgisini akılda tutmak gerekir. Sağlayıcı fiziksel veri merkezini, bazı altyapı katmanlarını veya yönetilen servislerin bakımını üstlenebilir; ama erişim politikası, veri sınıflandırması, uygulama güvenliği, yapılandırma hataları ve maliyet disiplini çoğu zaman senin masanda kalır. Bir veritabanı managed diye yedek politikasını sormayı bırakmazsın; bir obje deposu dayanıklı diye yanlışlıkla herkese açık yapmanın riskini unutmazsın. Bulut mimarisinde iyi karar, yalnızca teknik performansla verilmez. Veri hangi ülkede duracak, gecikme kullanıcıyı nasıl etkileyecek, felaket kurtarma nasıl yapılacak, tedarikçi bağımlılığı ne kadar kabul edilebilir, çıkış stratejisi var mı, denetim kayıtları nasıl saklanacak? Üst düzey kurumlarda bulut kararı bir teknoloji tercihi kadar yönetişim kararıdır. Mülakatta bulut temelleri sorulduğunda örnek bir sistem üzerinden anlat: Web uygulamamı iki availability zone üzerinde çalıştırırım, public subnet'te load balancer, private subnet'te uygulama ve veritabanı tutarım, IAM yetkilerini en az ayrıcalıkla veririm, obje depolamada lifecycle policy uygularım, log ve metrikleri merkezi toplarım, bütçe alarmı kurarım, yedek ve restore testini planlarım. Bu cevap, bulutu yalnızca hızlı kurulum değil, yaşayan bir işletme modeli olarak gördüğünü gösterir."
  ],
  "asama-6-devops-bulut-7": [
    "AWS, Google Cloud veya başka bir sağlayıcıyı öğrenirken en büyük hata, servis adlarını ezberlemeyi mimari bilmek sanmaktır. İsimler değişir; sorular büyük ölçüde aynıdır: işlem gücü nerede çalışacak, veri nerede duracak, ağ nasıl bölünecek, kim hangi kaynağa erişecek, sistem nasıl izlenecek, maliyet nasıl kontrol edilecek, felaket anında hangi parça ayakta kalacak? AWS tarafında EC2, S3, RDS, VPC, IAM, CloudWatch gibi isimler duyarsın; Google Cloud tarafında Compute Engine, Cloud Storage, Cloud SQL, VPC, IAM, Cloud Monitoring gibi karşılıklar çıkar. Bunları tablo gibi ezberlemek başlangıç olabilir ama ustalık, hangi servis ailesinin hangi ihtiyaca cevap verdiğini görmektir. Bir kamu projesinde ekip managed database seçerek yedek, minor upgrade ve bakım yükünü azalttı; bu doğru karardı çünkü ekip küçük, hizmet kritik, veritabanı işletme tecrübesi sınırlıydı. Başka bir kurumda aynı tercih maliyet, veri konumu ve özel eklenti ihtiyacı yüzünden tartışmalı hale geldi. Demek ki bulutta tek doğru cevap yoktur; bağlam vardır. Compute seçiminde sanal makine daha fazla kontrol verir, container platformu paketleme ve ölçeklenme düzeni sağlar, serverless küçük ve olay bazlı işlerde operasyon yükünü azaltabilir. Storage tarafında obje depolama büyük dosya ve arşiv için, blok depolama makine diski için, dosya depolama paylaşımlı erişim için anlamlıdır. Managed veritabanı işletme yükünü azaltır ama maliyet, sürüm kontrolü, performans ayarı ve bazı derin yapılandırma özgürlüklerinde sınır getirebilir. Network tasarımı güvenlik ve erişilebilirliğin omurgasıdır; public ve private subnet ayrımı, NAT, load balancer, firewall kuralları, private endpoint ve DNS tasarımı sonradan eklenen süs değil mimarinin temelidir. IAM ise her sağlayıcıda ayrı önem taşır: kişi, servis hesabı, rol, policy, geçici credential, audit log ve key rotasyonu bilinmeden bulut güvenliği konuşulamaz. Mülakatta sağlayıcı adı yarıştırmak yerine aynı uygulamayı iki bulutta nasıl düşüneceğini anlatmak daha güçlüdür. Örneğin bir dosya işleme sistemi kuracaksan kullanıcı dosyayı obje depolamaya yükler, olay tetiklenir, serverless fonksiyon veya container worker dosyayı işler, sonuç veritabanına yazılır, bildirim kuyruğa gider, loglar izlenir, IAM rolü yalnızca gerekli bucket ve tabloya erişir. Bu akış AWS'te başka, Google Cloud'da başka isimlerle kurulabilir; mimari akıl aynıdır. Teknik yöneticilikte sağlayıcı seçimi fiyat listesiyle bitmez. Ekibin yetkinliği, mevcut sözleşmeler, mevzuat, veri yerleşimi, destek kalitesi, çıkış maliyeti ve hizmet kesinti geçmişi de kararın parçasıdır. Servis adlarını bilen mühendis faydalıdır; servis ailelerini iş riskiyle bağlayan lider kurum için daha değerlidir."
  ],
  "asama-6-devops-bulut-8": [
    "Yedekleme, felaket günü hatırlanacak bir sigorta poliçesi değil, düzenli prova isteyen bir kas hafızasıdır. 'Yedek var' cümlesi kulağa güven verir ama tek başına hiçbir şeyi kanıtlamaz; asıl soru şudur: geri dönebiliyor musun, ne kadar sürede dönebiliyorsun, ne kadar veri kaybediyorsun ve bunu gerçekten denedin mi? Bir kurumda yedekleme ekranı yıllarca yeşil görünmüştü. Her gece job başarılı bitiyor, raporlar arşivleniyor, denetimlerde kutucuk işaretleniyordu. Sonra yanlışlıkla silinen kritik bir dosya seti için restore istendi. Yedek dosyaları vardı ama bazı klasörler kapsam dışı kalmış, encryption anahtarı başka ekibin kasasında unutulmuş, restore adımları kimsenin güncel olarak bilmediği eski bir dokümanda kalmıştı. O gün herkes şunu öğrendi: Tatbikat yapılmayan yedek, umut dosyasıdır. İş sürekliliği planı RPO ve RTO ile konuşur. RPO, ne kadar veri kaybını kabul edebileceğini sorar; son yedekten bu yana oluşan veriyi kaybetmek kurum için tolere edilebilir mi? RTO, hizmetin ne kadar sürede geri dönmesi gerektiğini sorar; iki saat mi, iki gün mü, on dakika mı? Bu iki cevap teknik mimariyi doğrudan belirler. Her saat yedek almak yetmeyebilir, transaction log shipping gerekebilir; bir veri merkezinde yedek tutmak yetmeyebilir, offsite veya farklı region gerekebilir; ransomware tehdidi varsa immutable backup ve erişim yalıtımı gerekir. Yedekleme yalnızca veritabanı dump'ı değildir. Uygulama konfigürasyonları, secret yönetimi, container image sürümleri, infrastructure as code dosyaları, DNS kayıtları, sertifikalar, obje depoları, kullanıcı yüklemeleri ve üçüncü parti entegrasyon ayarları da felaket anında gereklidir. Bir sistemin yedeği alınırken asıl yapılması gereken, sistemin yeniden kurulma hikayesini baştan sona yazmaktır. Mülakatta bu başlık geldiğinde küçük bir senaryo kurmak çok güçlüdür: Ana veritabanı bozuldu, önce olay kaydı açarım, etkiyi belirlerim, son sağlam yedeği ve logları kontrol ederim, restore'u izole ortamda denerim, veri tutarlılığını doğrularım, uygulamayı kontrollü açarım, kullanıcı iletişimini yönetirim, olay sonrası RPO/RTO gerçekleşmesini raporlarım. Teknik yöneticilikte felaket kurtarma daha da genişler; tedarikçi sözleşmeleri, iletişim planı, yetki matrisi, manuel iş sürekliliği prosedürü ve denetim kanıtları işin parçasıdır. Büyük kurumda yedekleme altyapısı görünmez kahramanlık değil, yönetim kuruluna karşı verilmiş bir sözün teknik karşılığıdır. O sözün değeri de ancak düzenli restore tatbikatında ölçülür."
  ],
  "asama-6-devops-bulut-9": [
    "Bulut maliyeti genellikle gürültüyle değil sessizlikle büyür. Kimse büyük bir toplantı yapıp 'bugün bütçeyi yavaşça eritelim' demez; küçük bir test makinesi açık kalır, kullanılmayan disk silinmez, debug logları aylarca saklanır, veri çıkış trafiği hesaba katılmaz, autoscaling yanlış metrikle fazla instance açar, geliştirici denemek için pahalı bir veritabanı sınıfı seçer ve ay sonunda fatura toplantısında herkes mimariyi yeniden okumaya başlar. FinOps bu yüzden yalnızca mali işler departmanının konusu değildir; mühendislik kararlarının para dilinde görünür hale gelmesidir. Bir ekip performans sorununu daha büyük makineye geçerek çözmüştü. Kullanıcı şikayeti azaldı, herkes rahatladı, fakat fatura üç katına çıktı. Daha sonra yavaş sorgular incelendi, yanlış indeksler düzeltildi, cache stratejisi kuruldu, gereksiz background job azaltıldı ve kapasite eskiye yakın seviyeye döndü. Bulut sana kaynak verir; akıl hâlâ senden beklenir. Maliyet yönetiminin ilk disiplini etiketlemedir. Hangi kaynak hangi projeye, hangi ortama, hangi ekibe, hangi maliyet merkezine ait bilinmezse fatura tartışması dedektifliğe döner. İkinci disiplin görünürlüktür: bütçe alarmı, anomali tespiti, günlük maliyet eğrisi, servis bazlı kırılım, log ve storage büyümesi izlenmelidir. Üçüncü disiplin rightsizing'dir; makine gerçekten o kadar CPU ve belleğe ihtiyaç duyuyor mu, veritabanı sınıfı fazla mı, disk performans tipi doğru mu, gece çalışan test ortamları otomatik kapanabilir mi? Dördüncü disiplin satın alma stratejisidir; reserved capacity, savings plan, committed use veya spot kullanım gibi seçenekler iş yükünün karakterine göre düşünülür. Ama maliyet azaltma kör bir kısma operasyonu değildir. Kritik bir sağlık sisteminde yalnızca ucuz diye düşük dayanıklılık seçemezsin; çağrı merkezi uygulamasında yoğun saatlerde kaynak kısmak müşteri kaybı üretir. İyi FinOps, ucuzluk değil değer optimizasyonudur. Mülakatta bulut maliyeti sorulduğunda cevap şöyle olgunlaşır: Önce görünürlük kurarım, kaynakları etiketlerim, bütçe ve anomali alarmı eklerim, en pahalı servisleri kullanım metrikleriyle karşılaştırırım, unused ve idle kaynakları temizlerim, rightsizing yaparım, saklama politikalarını düzenlerim, iş yükü stabilse taahhüt seçeneklerine bakarım, mimari düzeyde cache, kuyruk veya serverless ile maliyet davranışını değiştiririm. Teknik yöneticilikte bu konu üst yönetimle ortak dil kurmanın en iyi yerlerinden biridir; çünkü maliyet, performans ve risk aynı cümlede konuşulur. Hızın faturasını yönetemeyen ekip, teknik başarıyı kurumsal başarıya çeviremez."
  ],
  "asama-6-devops-bulut-10": [
    "DevOps mülakatında görüşmeci çoğu zaman araç adından çok üretim kokusu arar. Pipeline gördün mü, log okudun mu, rollback yaptın mı, alarm gürültüsüyle uğraştın mı, container neden düştü baktın mı, Kubernetes'te resource limit yüzünden servis boğuldu mu, bulut faturasında beklenmeyen artışı açıklamak zorunda kaldın mı? Bu soruların arkasında tek bir merak vardır: Aday yalnızca laboratuvar ortamında mı çalıştı, yoksa canlı sistemin sorumluluğunu hissetti mi? Güçlü bir cevap küçük bir olay hikayesiyle başlar. Örneğin yeni sürüm çıktıktan sonra hata oranı yükseldi, dashboard p95 gecikmenin arttığını gösterdi, loglarda belirli endpoint'in timeout verdiği görüldü, tracing çağrının veritabanında beklediğini işaret etti, ekip rollback kararı aldı, kullanıcı etkisi sınırlı tutuldu, olay sonrası migration'ın indeks oluşturmadan çıktığı anlaşıldı ve pipeline'a migration kontrolü eklendi. Böyle bir cevapta Docker, Kubernetes, CI/CD ve monitoring doğal olarak geçer; çünkü aday onları raflarda duran kavramlar olarak değil, olay çözme araçları olarak kullanır. Hazırlık yaparken her teknoloji için üç seviyeli anlatım kurmak faydalıdır. Docker için image-container farkını tanımla, sonra küçük bir API'nin nasıl paketleneceğini anlat, ardından log, secret ve volume riskini ekle. Kubernetes için pod-service-deployment ilişkisini söyle, sonra crashloop senaryosunda neye bakacağını sırala, sonunda platformun maliyet ve sahiplik boyutunu anlat. CI/CD için build-test-artifact-deploy zincirini kur, sonra test başarısızsa neden durması gerektiğini ve rollback planını ekle. Monitoring için metrik-log-trace ayrımını yap, sonra yanlış alarm tasarımının ekibi nasıl kör edebileceğini göster. Bulut için compute-storage-network-IAM ailelerini anlat, sonra region, yedekleme ve maliyet kararlarını iş etkisine bağla. Mülakatta bilmediğin aracı biliyormuş gibi yapmak yerine çalışma mantığını dürüstçe sınırlamak daha güven vericidir: 'Bu sağlayıcıda isimleri birebir kullanmadım ama servis ailesi olarak şöyle düşünürüm' demek, rastgele servis adı saymaktan daha olgundur. Üst düzey hazırlıkta DevOps cevabı teknik ayrıntıdan yönetim diline geçebilmelidir. Deploy sıklığı, lead time, change failure rate, MTTR gibi metrikler ekip verimliliğini ve güvenilirliği ölçer. Bir lider bu metrikleri insanları cezalandırmak için değil, sistemin nerede sürtündüğünü görmek için kullanır. Sonunda görüşmecinin aklında şu izlenim kalmalıdır: Bu kişi canlı sistemi romantize etmiyor, riskini biliyor; araçları büyütmüyor, doğru yere koyuyor; olay olduğunda panik değil kanıt üretiyor. DevOps olgunluğu tam da budur."
  ],
  "siber-guvenlik-1": [
    "Siber güvenliği yıllarca dışarıdan izleyenler onu çoğu zaman kilitler, kameralar ve yasaklarla dolu sıkıcı bir disiplin sanır; içeriden bakan biri içinse güvenlik, kurumun hafızasını ve itibarını koruyan görünmez bir muhakeme sanatıdır. İyi güvenlikçi her şeye hayır diyen kişi değildir. Hangi kapının neden kapalı kalması gerektiğini, hangi kapının hangi kimlikle, hangi amaçla, hangi kayıt altında açılabileceğini anlatan kişidir. Bir kurumda herkes yeni firewall alınınca rahatlamıştı. Satın alma yapılmış, cihaz takılmış, raporlar güzel görünmüştü. İlk ciddi olayda saldırganın karmaşık bir zafiyet kullanmadığı, yıllardır paylaşılan bir yönetici parolasıyla içeri girdiği ortaya çıktı. Dış kapı sağlamdı ama anahtar fotokopi gibi dolaşıyordu. O gün toplantı odasında anlaşılan şey şuydu: Siber güvenlik ürünle başlamaz; kimlik, süreç, kayıt, sorumluluk ve insan davranışıyla başlar. Risk dediğimiz şey de soyut bir korku değildir. Hangi varlık değerli, hangi tehdide açık, hangi zafiyet bu tehdidi mümkün kılıyor, gerçekleşirse iş etkisi ne olur, hangi kontrol bu etkiyi azaltır? Bu zinciri kurmadan yapılan güvenlik konuşması sisli kalır. Bir veritabanında müşteri verisi varsa konu yalnız SQL injection değildir; KVKK, denetim izi, erişim yetkisi, yedeklerin şifrelenmesi, loglarda kişisel veri tutulmaması, olay olursa bildirim süreci ve kurum itibarının nasıl yönetileceği de aynı resme girer. Güvenliğin eğlenceli tarafı da burada başlar: Her olay küçük bir dedektiflik gibi görünür ama iyi uzman rastgele iz kovalamaz, hipotez kurar. Bu oturum normal mi, bu cihaz bu saatte bu kaynağa neden erişti, bu servis hesabı gerçekten bu yetkiye ihtiyaç duyuyor mu, bu log sessiz bir felaketin ilk cümlesi mi? Mülakatta siber güvenlik temelleri sorulduğunda CIA üçlüsünü ezberlemek yetmez; gizlilik, bütünlük ve erişilebilirliği kurum hayatına bağlamak gerekir. Gizlilik, yanlış kişinin veriyi görmemesidir; bütünlük, verinin izinsiz değişmemesidir; erişilebilirlik, hizmetin ihtiyaç anında çalışmasıdır. Bir hastane sisteminde bu üçü de kritiktir: hasta verisi gizli kalmalı, reçete bilgisi bozulmamalı, acil servis sistemi ayakta olmalıdır. Üst düzey teknik liderlik açısından güvenlik, büyümeyi durduran fren değil, büyümenin güvenli yapılmasını sağlayan yol çizgisidir. Bu rotayı okurken her başlıkta aynı soruyu akılda tutmak gerekir: Bu kontrol hangi gerçek riski azaltıyor ve kurum bunu nasıl kanıtlayacak?"
  ],
  "siber-guvenlik-2": [
    "Kimlik güvenliği dijital kurumun anahtar disiplinidir; çünkü modern sistemlerde saldırganın hedefi çoğu zaman duvarı yıkmak değil, geçerli bir anahtarı ele geçirmektir. IAM kimin kim olduğunu ve neye erişebileceğini düzenler, MFA parolanın tek başına yeterli olmadığını kabul eder, SSO kullanıcı deneyimini sadeleştirirken merkezi kontrol sağlar, PAM ise en güçlü hesapların günlük hayatın sıradan parçası gibi kullanılmasını engeller. Bir olay incelemesinde ayrılan bir personelin hesabının aylarca açık kaldığı görülmüştü. Hesapla büyük bir saldırı yapılmamıştı, ama raporlarda hâlâ bazı sistemlere erişim denemeleri görünüyordu. Odadaki en rahatsız edici cümle 'kimse fark etmemiş' cümlesiydi. Güvenlik bazen kötü niyet yakalamaktan çok, kontrol eksikliğinin kötü niyete gerek kalmadan risk ürettiğini kabul etmektir. Kimlik yaşam döngüsü bu yüzden işe girişle başlar, rol tanımıyla devam eder, yetki onayıyla şekillenir, düzenli gözden geçirmeyle temizlenir ve ayrılışta zamanında kapanır. Least privilege, yani en az ayrıcalık ilkesi, kibar bir tavsiye değil işletme kuralıdır. Bir muhasebe personelinin tüm veritabanı tablolarına erişmesi gerekmez; bir uygulama servis hesabının yönetici paneline girmesi gerekmez; bir stajyerin production secret'larını görmesi hiç gerekmez. Yetki fazlası sessiz borçtur ve olay anında faiziyle geri gelir. MFA da bu hikayede önemli ama tek başına sihir değildir. Kullanıcılar yorgun düştüğünde push bildirimini düşünmeden onaylayabilir, phishing sayfası oturum çerezi çalabilir, servis hesapları MFA dışında kalabilir. Bu yüzden kimlik güvenliği katmanlı düşünülür: güçlü parola politikası, MFA, cihaz durumu, koşullu erişim, oturum süresi, riskli login tespiti, privileged access yönetimi ve düzenli erişim sertifikasyonu birlikte çalışır. Mülakatta IAM sorulduğunda güçlü cevap bir çalışan yolculuğu anlatır: İnsan kaynakları kaydı açılır, rol tabanlı yetki atanır, yönetici onayı alınır, hassas sistemlerde ek kontrol uygulanır, tüm erişimler loglanır, belirli aralıklarla yetki gözden geçirilir, görev değişince rol değişir, ayrılışta hesap ve token'lar kapatılır. Yönetici seviyesinde kimlik güvenliği, yalnızca teknik kontrol değil hesap verebilirlik mekanizmasıdır. Denetçi 'bu kişiye bu yetki neden verilmişti' diye sorduğunda cevap belgeyle verilebilmelidir. Güvenlik çoğu zaman kapıyı açmaktan çok kapıyı zamanında, iz bırakarak ve doğru gerekçeyle kapatmaktır."
  ],
  "siber-guvenlik-3": [
    "Ağ güvenliği, kurumun dijital yollarında kimin nereden gelip nereye gidebileceğini belirleme sanatıdır. Dışarıdan bakınca firewall kapı görevlisi gibi görünür, WAF uygulamanın önündeki kontrol masasıdır, IDS ve IPS şüpheli hareketi fark eden gözdür, segmentasyon ise büyük binayı yangın bölmelerine ayıran akıllı plandır. Ama gerçek hayatta ağ güvenliği yalnızca cihaz yerleştirmek değildir; trafiğin niyetini okumaktır. Bir olayda zararlı yazılım tek bir kullanıcı cihazından başladı ve sunucu ağına kadar ilerledi. Çünkü ağ düz bir ova gibiydi; kullanıcı bilgisayarı, dosya paylaşımı, uygulama sunucusu ve bazı yönetim servisleri birbirine fazla rahat ulaşıyordu. Saldırgan olağanüstü zeki olduğu için değil, yol üzerinde dur diyen kapı az olduğu için ilerledi. Segmentasyon olsaydı ilk bulaşma yine olabilir, ama yayılım erken durabilirdi. Güvenlikte amaç saldırı hiç olmayacak sanmak değildir; olduğunda etkisini sınırlamaktır. Ağ tasarımında public ve private alan ayrımı, yönetim ağının ayrılması, veritabanının doğrudan internete açılmaması, servisler arasında ihtiyaç kadar erişim verilmesi ve trafiğin kayıt altına alınması temel reflekslerdir. Zero Trust cümlesi havalıdır ama özü nettir: kimse konumu nedeniyle otomatik güvenilir sayılmaz. Ofis içindesin diye her kaynağa erişemezsin; VPN'desin diye yönetici olmazsın; servis hesabı kullanıyorsun diye sınırsız konuşamazsın. Kimlik doğrulanır, cihaz durumu kontrol edilir, erişim bağlama göre verilir, her kritik hareket izlenir. Bir API sunucusunun veritabanına erişmesi gerekebilir, ama başka bir uygulama sunucusuna SSH atması gerekmeyebilir. Bir çağrı merkezi kullanıcısının müşteri kaydını görmesi gerekebilir, ama toplu veri dışa aktarması onay gerektirmelidir. Mülakatta ağ güvenliği sorulduğunda firewall tanımıyla yetinme; küçük bir mimari çiz: İnternetten trafik CDN veya WAF üzerinden load balancer'a gelir, uygulama private subnet'te çalışır, veritabanı daha kapalı katmanda durur, yönetim erişimi bastion veya ayrı erişim kanalıyla sınırlanır, loglar merkezi toplanır, IDS anomali izler, network policy servisler arası konuşmayı daraltır. Sonra şu soruyu ekle: Eğer bir makine ele geçirilirse saldırgan nereye kadar gidebilir? Bu soru ağ güvenliğinin gerçek olgunluk testidir. Üst düzey kurumlarda ağ güvenliği yalnızca paket filtreleme değil, iş sürekliliği, denetim ve kriz sınırlama planıdır. İyi tasarlanmış ağ, saldırı anında paniği azaltır; çünkü kurum nerede kapı olduğunu, hangi kapının kime ait olduğunu ve hangi kapı kapanırsa hangi hizmetin etkileneceğini bilir."
  ],
  "siber-guvenlik-4": [
    "Uygulama güvenliği, hatayı kullanıcıdan önce bulma çabasıdır; daha doğrusu, kötü niyetli bir kullanıcının uygulamayı senin düşündüğünden farklı kullanacağını baştan kabul etmektir. OWASP listeleri kuru madde değildir. SQL injection, XSS, broken access control, insecure deserialization, SSRF veya yanlış yapılandırılmış authentication gerçek hayatta para kaybına, veri sızıntısına, hizmet kesintisine ve kurum itibarında derin çiziklere dönüşebilir. Bir projede masum görünen bir form alanı yalnızca açıklama metni bekliyordu. Frontend tarafında uzunluk kontrolü vardı, geliştirici de bunun yeterli olduğunu düşünmüştü. Test sırasında tarayıcıdan gelen isteği değiştirince backend'in aynı kontrolü yapmadığı, girilen metnin bazı rapor ekranlarında filtrelenmeden gösterildiği ortaya çıktı. Açık canlıya çıksa basit bir XSS denemesiyle oturum bilgisi veya kullanıcı davranışı manipüle edilebilirdi. O gün ekip güzel bir ders aldı: Tarayıcıda yapılan kontrol kullanıcı deneyimidir, güvenlik kanıtı değildir; güvenlik sunucu tarafında doğrulanır. SQL injection tarafında da benzer hikayeler vardır. Kullanıcı girdisini string birleştirerek sorguya koymak hızlı görünür, ama parametreli sorgu kullanılmazsa veritabanının kapısı metin kutusundan aralanır. Broken access control ise daha sinsidir; kullanıcı kendi kaydını görürken URL'deki id değerini değiştirip başkasının kaydına ulaşabiliyorsa authentication vardır ama authorization yoktur. Güvenli kod yazmak paranoyak olmak değil, varsayımları test edilebilir hale getirmektir. Girdi doğrulanır, çıktı encode edilir, yetki her kritik işlemde sunucu tarafında kontrol edilir, secret kod deposuna girmez, hata mesajları saldırgana iç mimariyi anlatmaz, dosya yükleme tür ve boyutla sınırlanır, dependency'ler taranır, rate limit ve audit log unutulmaz. SAST kodu statik olarak inceler, DAST çalışan uygulamayı dışarıdan dener, dependency scanning kullandığın paketlerin bilinen açıklarını bulur; ama araçların değeri geliştiricinin güvenlik refleksiyle birleşince artar. Mülakatta uygulama güvenliği sorulduğunda güçlü cevap bir sipariş API'si üzerinden kurulabilir: Kullanıcı kimliğini doğrularım, siparişin gerçekten o kullanıcıya ait olduğunu kontrol ederim, miktar ve fiyatı client'tan gelen değere bırakmam, transaction kullanırım, hata mesajını kontrollü dönerim, logda hassas veri tutmam, endpoint'e rate limit uygularım, kritik işlemi audit log'a yazarım. Üst düzey kurumlarda uygulama güvenliği geliştirme sürecinin sonundaki kontrol kapısı değil, tasarımın içindeki alışkanlık olmalıdır. En ucuz güvenlik açığı, daha kod yazılmadan fark edilen açıktır."
  ],
  "siber-guvenlik-5": [
    "Uç nokta güvenliği, kurumun en dağınık sınırını yönetir: kullanıcı bilgisayarları, mobil cihazlar, sunucular, sanal makineler ve bazen kimsenin masasında görünmeyen ama ağda yaşayan eski sistemler. Eskiden güvenlik sınırı veri merkezi duvarı sanılırdı; bugün sınır çalışan çantasında, ev ağında, toplantı odasındaki paylaşımlı bilgisayarda, buluttaki sunucuda ve üretim hattındaki cihazda aynı anda yaşar. Bir laptop güncelleme almadığı için eski bir açıkla ele geçirildiğinde saldırganın veri merkezine kadar ilerlemesi mümkündür. Sunucu odası kilitli olabilir, ama kurumun kapısı yamalanmamış bir cihazdan açılabilir. EDR burada davranış izleyen dikkatli bir göz gibidir; yalnızca bilinen virüs imzasına bakmaz, olağandışı süreç çalıştı mı, PowerShell beklenmeyen bağlantı açtı mı, kullanıcı profili altında şüpheli dosya oluştu mu, aynı anda birçok dosya şifrelenmeye başladı mı diye davranışa bakar. Hardening gereksiz servisleri kapatır, varsayılan ayarları sıkılaştırır, yerel yönetici haklarını sınırlar. Patch yönetimi bilinen açıkları azaltır ama yalnızca güncelle düğmesine basmak değildir; hangi cihazın hangi sürümde olduğunu, hangi yamanın hangi uygulamayı bozabileceğini, kritik sistemlerde bakım penceresinin ne zaman olduğunu bilmek gerekir. Bir üretim tesisinde güvenlik ekibi tüm Windows yamalarını hızla geçmek istiyordu; operasyon ekibi bazı makinelerin eski sürücü yüzünden durabileceğini söyledi. Doğru çözüm güncellemeyi bırakmak değil, envanteri netleştirip risk bazlı plan yapmaktı. Bilmediğin şeyi koruyamazsın; bu cümle uç nokta güvenliğinin demir kuralıdır. Envanterde cihazın sahibi, işletim sistemi, güvenlik ajanı durumu, disk şifreleme, yama seviyesi, son görülme zamanı, kritik uygulamalar ve ağ konumu bulunmalıdır. Mülakatta endpoint security sorulduğunda bir saldırı zinciri anlat: Kullanıcı phishing mailine tıkladı, zararlı süreç çalıştı, EDR davranışı yakaladı, cihaz ağdan izole edildi, olay kaydı açıldı, bellek veya disk izi alındı, benzer göstergeler diğer cihazlarda arandı, kullanıcı parolası resetlendi, yama ve farkındalık aksiyonu çıkarıldı. Yönetici seviyesinde uç nokta güvenliği yalnızca antivirüs lisansı değildir; uzaktan çalışma politikası, cihaz yaşam döngüsü, ayrıcalıklı yetkiler, veri şifreleme, yama SLA'leri ve olay müdahalesinin ilk perdesidir. Güçlü kurumlar uç noktaları sahipsiz bırakmaz; her cihazın bir sahibi, her riskin bir önceliği, her alarmın bir cevabı olur."
  ],
  "siber-guvenlik-6": [
    "Log, SIEM ve SOC güvenliğin hafızası ve dikkatidir. Tek bir başarısız giriş denemesi önemsiz görünebilir; aynı kullanıcının kısa sürede üç ülkeden denenmesi, ardından olağandışı dosya indirmesi ve gece yarısı yeni bir API token üretmesi birleştirildiğinde olay görünür olur. SIEM'in değeri tam burada başlar: dağınık izleri aynı masaya getirir. Firewall trafiği, kimlik sistemi login kayıtları, EDR uyarıları, veritabanı erişimleri, uygulama audit logları, bulut yönetim olayları ve VPN kayıtları tek başlarına kısa cümlelerdir; korelasyonla hikayeye dönüşürler. Bir olayda herkes 'ne zaman başladı' diye sordu. Log saklama süresi kısa olduğu için ilk iz kaybolmuştu. Güvenlik ekibi saldırganın içeri tam ne zaman girdiğini tahmin etmek zorunda kaldı. O gün pahalı panelden çok log politikasının değeri anlaşıldı. Ne kaydedilecek, ne kadar saklanacak, kim erişecek, hangi veri maskelenecek, zaman damgaları hangi saat standardıyla tutulacak, log bütünlüğü nasıl korunacak? Bunlar sıkıcı görünen ama olay gününde hayat kurtaran sorulardır. SOC ise yalnız ekran izleyen ekip değildir. İyi SOC alarmı alır, önceliklendirir, yanlış pozitifleri ayıklar, olay sınıfını belirler, playbook'a göre ilerler, gerekirse ilgili ekibi devreye alır, kanıtları korur, kapanışta rapor üretir. Alarm triage ustalığı önemlidir; her kırmızı ekran kriz değildir ama gerçek krizi gürültünün içinde kaçırmak pahalıdır. Bir SOC analisti bazen dedektif, bazen trafik polisi, bazen de sakin bir iletişim görevlisi gibi çalışır. Kural yazarken iş bağlamı gerekir. Bir yöneticinin gece yarısı yurt dışından giriş yapması seyahat takviminde açıklanabilir; aynı davranış bir servis hesabında görülüyorsa risk büyüktür. Mülakatta SIEM/SOC sorulduğunda ürün adı saymak yerine bir olay akışı kur: Şüpheli login alarmı gelir, kullanıcının geçmiş davranışı incelenir, MFA sonucu ve cihaz bilgisi kontrol edilir, aynı IP'den başka deneme var mı bakılır, hesap geçici kilitlenir veya oturumlar sonlandırılır, etki analizi yapılır, olay kritikse müdahale ekibi açılır, kapanışta kural iyileştirilir. Yönetici seviyesinde SOC yatırımı ölçülebilir olmalıdır: MTTD, MTTR, yanlış pozitif oranı, kapsanan log kaynakları, playbook olgunluğu, olay sonrası aksiyon tamamlama oranı takip edilir. Güvenliğin hatırlaması için log gerekir; hatırladığını anlamlandırması için SIEM; anlamlandırdığında harekete geçmesi için SOC disiplini gerekir."
  ],
  "siber-guvenlik-7": [
    "Veri güvenliği, hangi bilginin ne kadar hassas olduğunu bilmekle başlar. Sınıflandırma yoksa herkes kendi sezgisine göre davranır; kimi müşteri listesini sıradan Excel sanır, kimi log dosyasında kişisel veri tutulduğunu fark etmez, kimi test ortamına canlı veri kopyalamanın ne kadar riskli olduğunu ancak denetim masasında öğrenir. Bir kurumda iyi niyetle hazırlanan bir performans raporu dış paydaşla paylaşılmıştı. Raporda teknik metrikler vardı, ama filtrelenmemiş müşteri kimlikleri de birkaç sekmede kalmıştı. Kimse saldırıya uğramamıştı, parola çalınmamıştı, firewall delinmemişti; yine de olay veri güvenliği ve KVKK meselesine dönüştü. Güvenlik bazen niyeti değil sonucu tartar. Veri sınıflandırması bu yüzden temel adımdır: herkese açık, kurum içi, gizli, çok gizli gibi seviyeler yalnız etiket değildir; saklama, paylaşma, şifreleme, erişim ve imha kurallarını belirler. Veri sahibi kim, veri işleyen kim, kim görebilir, ne kadar saklanır, hangi amaçla kullanılır, anonimleştirme veya maskeleme ne zaman gerekir? Bu sorular teknik ekip kadar yöneticinin de sorusudur. DLP, hassas verinin e-posta, dosya paylaşımı veya uç nokta üzerinden yanlış yere gitmesini yakalamaya çalışır; ama DLP kuralı veri sınıflandırması olmadan körleşir. Maskeleme test ortamında gerçek kişi verisini saklamaya yarar; fakat yalnız ad-soyad değil, dolaylı tanımlayıcılar da düşünülmelidir. Şifreleme veri dururken ve taşınırken koruma sağlar; fakat anahtar yönetimi zayıfsa şifrelenmiş veri, kilidi üstünde unutulmuş sandık gibidir. Erişim kontrolü ise veriye giden yolu daraltır; herkes her raporu görememeli, toplu indirme ayrıca izlenmeli, hassas sorgular audit log bırakmalıdır. Mülakatta veri güvenliği sorulduğunda örnek bir müşteri verisi yolculuğu anlat: Veri formdan gelirken HTTPS ile taşınır, backend'de doğrulanır, veritabanında sınıflandırılır, hassas alanlar şifrelenir veya maskelenir, erişim role göre verilir, rapor dışa aktarılırken maskeleme uygulanır, saklama süresi dolunca imha edilir, tüm kritik erişimler loglanır. Üst düzey kurumlarda veri güvenliği güvenlik ekibinin tek başına taşıyacağı yük değildir; hukuk, iş birimi, veri yönetişimi, altyapı ve yazılım ekipleri aynı masada olmalıdır. Çünkü veri yalnız depolanan bir nesne değil, kurumun itibarı, müşteri güveni ve karar hafızasıdır."
  ],
  "siber-guvenlik-8": [
    "Olay müdahalesi, saldırı anında kahramanlık gösterisi değil, önceden prova edilmiş sakinliktir. İlk alarm geldiğinde odadaki hava hızla değişir: biri kullanıcı etkisini sorar, biri sunucuyu kapatmayı önerir, biri tedarikçiyi arar, biri üst yönetime ne söyleneceğini düşünür. Eğer süreç yoksa herkes aynı anda iyi niyetli ama dağınık hareket eder. İyi olay müdahalesi sırayı korur: tespit, doğrulama, etki analizi, çevreleme, kanıt koruma, temizleme, kurtarma, iletişim ve öğrenme. Bir fidye yazılımı şüphesinde ilk refleks herkesin makinesini kapatması olmuştu. Bu bazı durumlarda yayılımı durdurabilir, ama kanıtı da yok edebilir; bellek izleri kaybolur, saldırganın nasıl geldiği belirsizleşir. Olay müdahalesinde hız önemlidir ama kör hız bazen gerçeğin lambasını söndürür. Bu yüzden playbook gerekir. Phishing şüphesinde hangi hesaplar kontrol edilecek, hangi oturumlar sonlandırılacak, hangi e-posta göstergeleri aranacak? Ransomware şüphesinde hangi ağ izolasyonu uygulanacak, hangi yedekler korunacak, hangi cihazlardan imaj alınacak? Veri sızıntısında hangi loglar incelenecek, hangi hukuk ve iletişim süreçleri devreye girecek? Her olayda aynı ciddiyet seviyesi olmaz; olay sınıflandırması kurumun enerjisini doğru yere toplar. Küçük bir malware temizliği ile müşteri verisi sızıntısı aynı iletişim ve onay düzeyinde yürütülmez. İyi olay raporu suçlu aramaz; zaman çizelgesi, etki, kök neden, alınan aksiyon, kalan risk ve kalıcı düzeltmeyi yazar. 'Sistemsel hata' veya 'kullanıcı hatası' gibi geniş cümleler kurumu eğitmez. Daha iyi rapor şöyle der: Saat 10.14'te şüpheli login oldu, 10.22'de dosya indirme başladı, 10.30'da alarm düştü, 10.41'de hesap kilitlendi, etkilenen kayıt sayısı şu aralıkta, kök neden MFA yorgunluğu ve zayıf koşullu erişim politikası, kalıcı aksiyon riskli login kuralı ve kullanıcı eğitimi. Mülakatta incident response sorulduğunda bu akışı sakin anlatmak büyük fark yaratır. Teknik yöneticilikte ise olay müdahalesi teknik ekip kadar hukuk, iletişim, insan kaynakları, iş birimi ve üst yönetim koordinasyonudur. Krizden öğrenmeyen kurum aynı dersi daha pahalıya tekrar eder; iyi müdahale yalnız olayı kapatmaz, kurumun bir sonraki olayda daha akıllı davranmasını sağlar."
  ],
  "siber-guvenlik-9": [
    "Siber tatbikat, yangın merdivenini yangın çıkmadan denemektir. Gerçek olay gelmeden önce masada küçük bir senaryo açarsın: Bir yöneticinin hesabından gece yarısı toplu veri indirilmiş, aynı anda bazı kullanıcılar şüpheli e-posta almış, çağrı merkezi birkaç müşteriden garip bildirimler duymuş. Sonra ekibe sorarsın: Kim kimi arıyor, hangi loga bakıyoruz, hesabı kim kilitliyor, üst makama ilk bilgi ne zaman gidiyor, kullanıcıya ne söylüyoruz, hukuk ne zaman devreye giriyor? Bir tatbikatta teknik ekip hazırdı ama iletişim planı yoktu. SIEM alarmı incelenmiş, IP adresleri bulunmuş, hesaplar kapatılmıştı; fakat hizmet etkisi sorulduğunda herkes farklı sayı verdi. Üst yönetim üç ayrı ekipten üç ayrı cevap alınca güven sarsıldı. Güvenlik krizi yalnız teknik değil, anlatım krizidir de. Tatbikatın değeri bu çatlakları gerçek olaydan önce göstermesidir. Masa başı tatbikat, teknik simülasyon, phishing testi, kırmızı takım çalışması, mavi takım savunması ve mor takım öğrenme seansı farklı derinlikler sunar. Ama hepsinin ortak amacı insanları utandırmak değil sistemi öğrenmektir. Farkındalık eğitimleri de korkutma seansı olmamalıdır. Kullanıcıya sürekli 'sen zayıf halkasın' dersen kullanıcı olay saklamayı öğrenir; doğru davranışı kolaylaştırırsan erken haber verir. Şüpheli e-postayı bildirmek kolay olmalı, hata yapan kişi cezalandırılmadan yönlendirilmeli, yöneticiler de eğitimden muaf tutulmamalıdır. Çünkü saldırgan unvan seçmez; yetkisi yüksek olan insanı özellikle sever. Tatbikat sonrası ölçüm gerekir: İlk alarm ne kadar sürede fark edildi, doğru ekip ne kadar sürede toplandı, hangi log eksikti, hangi karar sahibine ulaşılamadı, hangi mesaj yanlış anlaşıldı, hangi playbook güncellenmeli? Mülakatta siber tatbikat sorulduğunda 'yaparız' demek yerine senaryo, rol, ölçüm ve iyileştirme döngüsünü anlat. Yönetici seviyesinde bu konu kurum kültürüne temas eder. Güvenlik, yalnız güvenlik ekibinin kahramanlığına bırakılırsa kırılgan kalır; satın alma, hukuk, insan kaynakları, iletişim, yazılım, altyapı ve iş birimleri kendi rollerini bildiğinde dayanıklılık oluşur. Tatbikat, kurumun kriz günündeki hafızasını daha kriz gelmeden yazma işidir."
  ],
  "siber-guvenlik-10": [
    "Siber güvenlik mülakatında iyi aday tehditleri ezberden saymaz; riski iş etkisine bağlar. 'SQL injection veri sızıntısına yol açabilir' der, sonra bunu parametreli sorgu, input validation, WAF, SAST, DAST, loglama ve code review ile nasıl azaltacağını anlatır. 'MFA önemlidir' derken yalnız parolaya ek kod koymayı değil, phishing, oturum çalma, servis hesapları, koşullu erişim ve kullanıcı yorgunluğu riskini de görür. Görüşmeci güvenlik cevabında üç şey arar: kavramı biliyor musun, olay anında nasıl davranacağını biliyor musun, kurumun hangi değerini koruduğunu anlıyor musun? Teknik seviyede hazırlık yaparken her başlığa bir mini senaryo ekle. IAM için ayrılan personelin hesabı açık kalır; ağ güvenliği için kullanıcı cihazından sunucu ağına yayılım riski çıkar; uygulama güvenliği için ID değiştirerek başkasının kaydına erişim denenir; endpoint için EDR şüpheli süreç yakalar; veri güvenliği için maskelenmemiş rapor dışarı gider; SOC için dağınık loglar tek olay haline getirilir; incident response için fidye yazılımı şüphesiyle izolasyon ve kanıt koruma dengelenir. Böyle hazırlanırsan cevapların kuru liste olmaktan çıkar, sahada yaşanmış gibi akar. Yönetsel görüşmede aynı cevap başka dile döner: Hangi risk kabul edilebilir, hangisi bütçe ister, hangi kontrol denetimde kanıt olur, olay olursa kim konuşur, müşteri etkisi nasıl ölçülür, mevzuat bildirimi gerekir mi, tedarikçi sözleşmesinde hangi maddeye bakılır? Güvenlik uzmanı teknik bilir; güvenlik lideri teknik gerçeği kurum diline çevirir. Bir yönetici adayı 'SIEM almalıyız' dediğinde soru bitmez; hangi log kaynakları bağlanacak, kaç alarm gerçekten aksiyon doğuracak, SOC ekibi var mı, playbook var mı, yanlış pozitifler nasıl azalacak, yatırım hangi riski düşürecek? Mülakatta bilmediğin ürünü uydurma. 'Bu aracı kullanmadım, ama bu sınıfta beklediğim kontroller şunlar olur' diyebilmek olgunluk gösterir. Cevaplarını tanım, olay, kontrol, ölçüm ve öğrenme sırasıyla kur. Bu sıra seni yalnız teknik aday gibi değil, güvenlik riskini yöneten biri gibi gösterir. Büyük kurumların ihtiyaç duyduğu güvenlik liderliği korku üretmez; belirsizliği ölçer, öncelik koyar, işin devam etmesini sağlar ve kriz geldiğinde kurumun hem sistemini hem sözünü korur."
  ],
  "buyuk-mimariler-1": [
    "Mimari okuryazarlık, ekrandaki tek bir tıklamanın arkasındaki kalabalığı görebilmektir. Kullanıcı butona basar ve çoğu zaman yalnızca dönen küçük bir yüklenme simgesi görür; arka tarafta DNS, CDN, WAF, load balancer, API Gateway, servisler, cache, kuyruk, veritabanı, log sistemi, kimlik sağlayıcı ve bildirim altyapısı kısa bir orkestraya başlar. İyi mimar bu orkestrada hangi enstrümanın sesi duyulmadığında melodinin bozulacağını bilir. Bir mimari toplantısında çizim çok güzel görünüyordu: kutular hizalı, oklar renkli, servis isimleri etkileyiciydi. Sonra biri basit bir soru sordu: 'Bu işlemde resmi veri kaydı nerede oluşuyor?' Oda sessizleşti. Çünkü çizim akışı gösteriyor ama gerçeğin nerede tutulduğunu söylemiyordu. O anda anlaşıldı ki iyi mimari görsel, sunum süsü değil kriz anında yol tarifidir. Mimari okurken dört yolu ayrı ayrı takip etmek gerekir. Kullanıcı yolu, ekrandan başlayıp cevaba kadar giden deneyimi anlatır. Veri yolu, bilginin nerede doğduğunu, nerede değiştiğini, nerede resmi hale geldiğini gösterir. Hata yolu, sistemin bozulduğunda nasıl davrandığını açıklar; timeout olursa ne olur, kuyruk dolarsa ne olur, veritabanı yavaşlarsa kullanıcı ne görür? Sorumluluk yolu ise hangi ekip hangi parçadan sorumludur, alarm kime gider, denetim kanıtı nerede durur sorularını cevaplar. Mülakatta sistem tasarımı sorusu geldiğinde kutu dizmeye atlama; önce gereksinimi, kullanıcı yükünü, veri tutarlılığı ihtiyacını, güvenlik sınırını, başarısızlık senaryosunu ve işletme modelini sor. Üst düzey kurumlarda mimari, yalnız performans planı değil hesap verebilirlik planıdır. İyi mimarinin güzelliği, herkes sakinken değil, sistem gerildiğinde ortaya çıkar."
  ],
  "buyuk-mimariler-2": [
    "Büyük bir e-ticaret sipariş yolculuğu dışarıdan eğlenceli ve basit görünür: kullanıcı ürünü arar, sepete ekler, kupon dener, ödeme yapar, kargoyu bekler. İçeride ise arama servisi, stok yönetimi, kampanya motoru, sepet, ödeme, sipariş, bildirim, fatura ve lojistik entegrasyonu aynı anda hassas bir denge kurar. Kampanya sabahı bu denge daha da sert sınanır. Bir şirkette arama altyapısı çok hızlıydı, sayfalar yağ gibi akıyordu; fakat stok senkronu birkaç dakika geriden geliyordu. Kullanıcı ürünü satın aldığını sandı, ödeme onayı aldı, sonra iptal mesajı geldi. Teknik açıdan sistemin bazı parçaları başarılıydı ama müşteri açısından güven kırılmıştı. E-ticarette hız kadar tutarlılık da para eder. Sepet Redis gibi hızlı ve geçici bir yapıda tutulabilir, resmi sipariş PostgreSQL gibi kalıcı ve transaction destekleyen sistemde oluşabilir, Kafka sipariş olaylarını fatura ve lojistik tarafına taşıyabilir, Elasticsearch aramayı hızlandırabilir. Ama hangi veri resmi, hangisi geçici, hangisi hesaplanabilir net değilse kriz günü herkes kendi ekranındaki gerçeği savunur. Ödeme başarılıysa sipariş neden yok, stok düştüyse bildirim neden gitmedi, kargo etiketi basıldıysa iptal nasıl yapılacak? İyi mimari bu soruları önceden sorar. Mülakatta e-ticaret sistemi anlatırken yalnız ürün listeleme çizme; stok rezervasyonu, idempotent ödeme, kampanya çakışmaları, kuyrukla asenkron işler, cache invalidation, fraud kontrolü ve kullanıcı iletişimini de ekle. Yönetici seviyesinde bu mimari, gelir, müşteri güveni, tedarikçi ilişkisi ve operasyon yüküyle bağlantılıdır. Bir sipariş yalnız kayıt değildir; kurumun müşteriye verdiği sözdür."
  ],
  "buyuk-mimariler-3": [
    "Ödeme sistemi saniyelerle çalışır ama muhasebe defteri kadar ciddi olmalıdır. Kullanıcı ekranda hızlı bir sonuç görmek ister; kurum ise paranın gerçekten alınıp alınmadığını, tek mi çift mi işlendiğini, itiraz geldiğinde hangi kanıtın sunulacağını ve hata anında kimin neyi düzelteceğini bilmek zorundadır. Bir timeout olayında banka parayı çekmiş, uygulama siparişi oluşturamamıştı. Kullanıcı yeniden denediğinde ikinci ödeme riski doğdu; çağrı merkezi ödeme var mı yok mu sorusuna net cevap veremedi. Sorun yalnız saniyelik bir ağ gecikmesi gibi başlamıştı ama etkisi finansal güven meselesine dönüştü. Ödeme mimarisinde idempotency bu yüzden kalptir: aynı işlem iki kez gelirse sistem onu iki ayrı borç gibi değil aynı niyetin tekrarı gibi ele almalıdır. Mutabakat, uygulamanın kendi kayıtlarıyla banka veya ödeme sağlayıcısının kayıtlarını düzenli karşılaştırır. Callback ve webhook tasarımı, dış sağlayıcının sonucu sonradan bildirmesine izin verir ama imza doğrulama ve tekrar deneme mantığı ister. Fraud kontrolü, 3D Secure, risk skoru, limit, kullanıcı davranışı ve cihaz sinyalleriyle birlikte çalışır. Mülakatta ödeme sistemi anlatırken transaction kaydı, ödeme denemesi, ödeme sonucu, sipariş oluşturma ve bildirim adımlarını ayır. Her adımın logu, korelasyon id'si ve geri dönüş stratejisi olmalıdır. Yönetici seviyesinde ödeme mimarisi, hızdan önce doğruluğu savunur; çünkü kullanıcı yavaş ödeme ekranını affedebilir, iki kez çekilen parayı kolay unutmaz."
  ],
  "buyuk-mimariler-4": [
    "Lojistik takip mimarisi, paketin fiziksel yolunu dijital izlerle görünür yapma işidir. Bir kutu depodan çıkar, araca biner, aktarma merkezinden geçer, dağıtıma çıkar; kullanıcı ise ekranda tek bir cümle görmek ister: Paketim nerede? Bu basit sorunun arkasında depo sistemi, kargo şirketi API'si, barkod okuyucular, olay akışı, bildirim servisi, çağrı merkezi ekranı ve müşteri uygulaması birlikte çalışır. Bir entegrasyon olayında kargo firması saatlerce eski durum dönüyordu. Kullanıcı paketin kaybolduğunu sandı, çağrı merkezi yanlış bilgi verdi, operasyon ancak sosyal medya şikayetleri artınca fark etti. Takip sistemi yalnız konum değil, iletişim düzenidir. Burada en önemli kavram olaydır: paket hazırlandı, teslim alındı, transfer merkezine girdi, dağıtıma çıktı, teslim edildi, teslim edilemedi. Her olay zaman damgası, kaynak sistem, güvenilirlik seviyesi ve gerekirse fotoğraf veya imza gibi kanıtla gelir. Sistemler arasında gecikme olabilir; mimari bunu saklamamalı, 'son güncelleme zamanı' gibi kullanıcıya dürüst sinyal vermelidir. Kuyruklar entegrasyon gecikmelerini yumuşatır, idempotency aynı barkod olayının iki kez gelmesini yönetir, retry politikası geçici bağlantı sorunlarını çözer, dead-letter queue işlenemeyen olayları görünür kılar. Mülakatta lojistik mimarisi anlatırken yalnız harita gösterme; olay modeli, kargo entegrasyonu, kullanıcı bildirimi, çağrı merkezi görünümü, SLA ve gecikme yönetimini anlat. Yönetici seviyesinde lojistik verisi müşteri güvenidir; paket gerçekten yolda olabilir ama sistem bunu anlatamıyorsa kullanıcı açısından paket kayıptır."
  ],
  "buyuk-mimariler-5": [
    "Kamu kapısı başvuru akışı dijital evrak odası gibidir; vatandaş form doldurur, kimlik doğrular, belge yükler, başvurusunun durumunu bekler. Kurum ise çok daha ağır bir sorumluluk taşır: Başvurunun ne zaman yapıldığını, kime ait olduğunu, hangi eklerle geldiğini, hangi memurun hangi aşamada işlem yaptığını ve kararın hangi dayanakla verildiğini kanıtlamak zorundadır. Bir başvuru sisteminde dosya yükleme ekranı başarılı mesajı dönmüş ama dosya resmi başvuru kaydıyla bağlanmamıştı. Vatandaş ekran görüntüsünü gösteriyor, arşiv sistemi sessiz kalıyordu. Kamu sistemlerinde ekrandaki başarı, kayıt başarısıyla birleşmezse güven zedelenir. Bu mimaride kimlik doğrulama, yetki, KVKK, object storage, veritabanı, iş akışı motoru, bildirim, arşiv ve audit log birlikte düşünülür. Form verisi transaction içinde resmi kayda dönüşmeli, dosyalar kalıcı depoda bütünlük kontrolüyle tutulmalı, başvuru numarası tekil ve izlenebilir olmalı, her işlem zaman damgası ve kullanıcı izi bırakmalıdır. Vatandaşın verisi yalnız işlem için gerekli kişilere görünmeli, gereksiz loglarda kişisel veri taşınmamalıdır. Mülakatta kamu başvuru mimarisi anlatırken hızdan önce hesap verebilirliği vurgula: Kimlik doğrulama nasıl yapılır, belge yükleme nasıl doğrulanır, işlem durumu nasıl değişir, itiraz halinde hangi kayıt gösterilir, sistem kesilirse yarım başvuru ne olur? Yönetici seviyesinde kamu yazılımı yalnız çalışan ekran değildir; vatandaşla devlet arasındaki güven sözleşmesidir."
  ],
  "buyuk-mimariler-6": [
    "Hastane randevu sistemi, teknik gecikmenin koridorda insana dönüştüğü yerdir. Bir ekran yavaşladığında yalnız p95 metriği bozulmaz; hasta bekler, doktorun planı kayar, kayıt masası gerilir, çağrı merkezi açıklama yapmak zorunda kalır. Sağlık sistemlerinde mimari konuşurken verinin arkasında insan olduğunu hiç unutmamak gerekir. Yoğun bir günde randevu sorguları cache'siz çalışıyor ve veritabanını yoruyordu. Teknik çözüm ilk bakışta basitti: sık sorulan uygunluk bilgisini cache'e al. Fakat sağlıkta her veri cache'e konmaz; doktor uygunluğu, poliklinik kapasitesi, iptal edilen randevular ve hasta mahremiyeti birlikte düşünülmelidir. Yanlış veya eski randevu bilgisi hastayı yanlış yönlendirir. Bu mimaride hasta kaydı, kimlik doğrulama, rol bazlı yetki, laboratuvar entegrasyonu, randevu slot yönetimi, bildirim, audit log ve veri saklama politikası bir arada yürür. Her veri herkesin değildir; doktor kendi hastasının bilgisine erişebilir, kayıt personeli gerekli alanları görebilir, yönetici istatistiksel rapor alır ama kişisel sağlık verisini gereksiz yere görmemelidir. Mülakatta hastane sistemi anlatırken erişilebilirlik ve gizliliği aynı anda kur: Randevu talebi transaction ile alınır, çakışma kontrol edilir, bildirim asenkron gönderilir, kritik ekranlar izlenir, erişim loglanır, entegrasyon hataları kuyrukta tekrar denenir. Yönetici seviyesinde sağlık mimarisi, teknik doğrulukla etik sorumluluğun aynı masaya oturduğu yerdir. Hız önemlidir, ama mahremiyet ve güven olmadan hız tek başına başarı sayılmaz."
  ],
  "buyuk-mimariler-7": [
    "Banka transferi mimarisi, hız ile kesinliğin en sert pazarlığıdır. Para hareketinde 'yaklaşık doğru' diye bir konfor yoktur; bakiye, yetki, fraud kontrolü, işlem limiti, muhasebe kaydı, mutabakat ve bildirim aynı çizgide ilerlemek zorundadır. Bir transferde bildirim gitmemişti ama para geçmişti. Kullanıcı işlemin olmadığını sandı ve yeniden denedi; arka tarafta idempotency zayıf olsaydı ikinci işlem de gerçekleşebilirdi. Bankacılıkta kullanıcı iletişimi yalnız konfor değil güven kontrolüdür. Transfer akışında önce kimlik ve yetki doğrulanır, sonra limit ve risk sinyali kontrol edilir, bakiye yeterliliği transaction sınırında değerlendirilir, işlem kaydı değiştirilemez audit izine yazılır, karşı sisteme mesaj gönderilir, sonuç mutabakat sürecinde tekrar doğrulanır. ACID özellikleri burada kuru veritabanı teorisi olmaktan çıkar; atomiklik yarım para hareketini, tutarlılık bozuk bakiyeyi, izolasyon yarış koşulunu, dayanıklılık kaybolan işlemi engeller. Mülakatta banka transferi anlatırken iki aşamalı onay, fraud skoru, idempotency key, distributed transaction zorluğu, event sourcing veya ledger yaklaşımı, bildirim ve mutabakat kavramlarını bağla. Yönetici seviyesinde bu mimari regülasyon, denetim, müşteri güveni ve operasyonel riskle doğrudan ilişkilidir. Para sisteminde hız güzeldir, ama doğruluk ve kanıt hızdan önce gelir."
  ],
  "buyuk-mimariler-8": [
    "Savunma üretiminde dijital iz, bir parçanın geçmişini anlatabilme gücüdür. Hangi malzeme geldi, hangi tedarikçiden alındı, kim kalite kontrol yaptı, hangi istasyondan geçti, hangi doküman sürümüyle üretildi, hangi test sonucu kabul edildi? Bu sorular teknik olduğu kadar stratejiktir. Bir parça üzerinde kalite sorunu çıktığında kayıtlar eksikse herkes hafızasına döner. Hafıza iyi niyetlidir ama denetim hafıza kabul etmez. Seri numarası, lot bilgisi, doküman versiyonu, onay imzası, üretim zamanı, erişim izi ve değişiklik kaydı bu yüzden kritiktir. Bu mimaride PLM, ERP, MES, doküman yönetimi, kalite sistemi ve erişim kontrolü birbirinden kopuk olamaz. Üretim hattı yavaşlamamalı ama her kritik işlem iz bırakmalıdır. Yetkisiz kişi teknik resme erişmemeli, ama yetkili teknisyen de işini yaparken gereksiz bürokrasiye boğulmamalıdır. Gizlilik, bütünlük ve izlenebilirlik aynı anda gerekir. Mülakatta savunma üretimi mimarisi anlatırken yalnız veritabanı çizme; tedarik zinciri, parça izlenebilirliği, doküman sürüm kontrolü, kalite onayı, yetki ayrımı, offline çalışma ihtimali ve denetim raporunu ekle. Yönetici seviyesinde burada güvenlik ile üretim verimliliği arasında ince bir denge vardır. Veriyi korurken üretimi felç etmek de, üretim hızlansın diye izleri zayıflatmak da hatadır. Gerçek ustalık, kritik varlığı koruyan ama sahadaki işi yapılabilir kılan mimariyi kurmaktır."
  ],
  "buyuk-mimariler-9": [
    "Komuta kontrol ve simülasyon sistemlerinde gecikme, karar değerini doğrudan etkiler. Ekrandaki küçük noktanın arkasında sensör, mesajlaşma altyapısı, harita katmanı, yetki kontrolü, zaman senkronizasyonu, kayıt sistemi ve bazen fiziksel dünyada hareket eden gerçek araçlar vardır. Bir tatbikatta veri birkaç saniye geç geliyordu. Laboratuvarda bu gecikme önemsiz görünmüştü; fakat karar senaryosunda birkaç saniye eski bilgi, yanlış yerde doğru karar vermek anlamına geldi. Gerçek zamanlı sistemlerde zaman da verinin parçasıdır. Kafka benzeri olay akışları, düşük gecikmeli ağ, WebSocket, backpressure, veri bütünlüğü ve monitoring birlikte düşünülmelidir. Her veri paketi aynı önemde olmayabilir; bazıları kaybolamaz, bazıları en güncel haliyle anlamlıdır, bazıları sırayla işlenmelidir. Mülakatta böyle bir sistemi anlatırken sensörden gelen verinin nasıl doğrulandığını, sıraya alındığını, harita ekranına nasıl aktığını, bağlantı koparsa ne olduğunu, eski veriyle yeni verinin nasıl ayırt edildiğini ve karar kayıtlarının nasıl saklandığını söyle. Yönetici seviyesinde gerçek zamanlı mimari yalnız hız yarışı değildir; güvenilir, izlenebilir ve görev etkisine uygun zamanlılık sağlamaktır. Hızlı ama yanlış veri karar kalitesini düşürür; biraz daha yavaş ama doğrulanabilir veri bazen daha değerlidir."
  ],
  "buyuk-mimariler-10": [
    "Çağrı merkezi ve CRM entegrasyonu, kullanıcının sesini kurum hafızasına bağlar. Temsilci geçmişi görmezse aynı soruyu yeniden sorar; sistemler konuşmazsa müşteri kurumun iç dağınıklığını duyar. Bir çağrıda temsilci ödeme kaydını göremediği için kullanıcıyı yanlış yönlendirmişti. Ödeme sistemi çalışıyordu, CRM güncel değildi; teknik olarak para doğru yerdeydi ama müşteri deneyiminde kurum güven kaybetti. Çağrı merkezi mimarisinde telefon altyapısı, IVR, CRM, ticket sistemi, bilgi bankası, kimlik doğrulama, ekran pop-up'ı, kayıt, kalite izleme ve raporlama birlikte tasarlanır. Temsilcinin ekranda neyi göreceği kadar neyi görmemesi gerektiği de önemlidir; müşteri verisi rol bazlı sınırlarla korunmalıdır. Entegrasyonlarda gecikme dürüst gösterilmeli, resmi kayıtla CRM kopyası karıştırılmamalı, ticket kapanışı müşteri sorunuyla gerçekten ilişkilendirilmelidir. Mülakatta bu sistemi anlatırken çağrının gelişinden başlayıp müşteri doğrulama, geçmiş işlem sorgusu, ticket açma, ilgili birime yönlendirme, SLA takibi ve kapanış memnuniyetine kadar akışı kur. Yönetici seviyesinde çağrı merkezi teknik mimarinin insan sesidir. Arkadaki servisler ne kadar iyi olursa olsun temsilci doğru bilgiye ulaşamıyorsa müşteri kurumun teknolojisini değil çaresizliğini duyar."
  ],
  "buyuk-mimariler-11": [
    "Gerçek zamanlı bildirim sistemi kurumun zilidir. Doğru kişiye, doğru zamanda, doğru kanaldan çalarsa hayat kolaylaşır; gereksiz, geç veya yanlış çalarsa herkes duymamayı öğrenir. Bir sağlık uygulamasında bildirim kuyruğu birikti ve randevu hatırlatmaları randevu saatinden sonra gitti. Sistem teknik olarak çalışıyordu, mesajlar eninde sonunda gönderilmişti; ama iş değeri kaçmıştı. Bildirimde zamanlama içeriğin yarısıdır. Bu mimaride olay üretimi, kuyruk, kanal seçimi, kullanıcı tercihi, retry, idempotency, template yönetimi, gönderim sonucu ve kayıt birlikte tasarlanır. Aynı bildirimi beş kez göndermek de hiç göndermemek kadar kötüdür. Kritik güvenlik uyarısı ile kampanya mesajı aynı öncelikte beklememeli, kullanıcı SMS istemiyorsa tercihine saygı duyulmalı, yasal izin kontrol edilmelidir. Push notification anlık olabilir ama cihaz offline kalabilir; e-posta ulaşır ama geç okunabilir; SMS pahalıdır ama kritik durumda değerlidir. Mülakatta bildirim sistemi anlatırken event'in doğuşunu, queue'ya yazılmasını, worker'ın kanal seçmesini, sağlayıcı hatasında retry yapmasını, dead-letter queue ile başarısız mesajı görünür kılmasını ve kullanıcıya tekil, anlaşılır sonuç iletilmesini anlat. Yönetici seviyesinde bildirim sistemi kurumun ses tonu ve güven ritmidir. Ses zamanında çıkmazsa kurum susmuş gibi görünür."
  ],
  "buyuk-mimariler-12": [
    "Kimlik, yetki ve oturum mimarisi dijital binanın kartlı geçişidir. Kullanıcı bir kez giriş yapmak ister; kurum ise kimin hangi kapıdan geçtiğini, ne kadar süre kaldığını ve hangi işlem için yetkili olduğunu bilmek zorundadır. Bir yetki hatasında kullanıcı kendi biriminin dışındaki raporu görebiliyordu. Kimse sistemi kırmamıştı; rol tasarımı gevşekti. Güvenlik olayları bazen saldırı değil, yanlış kolaylık yüzünden doğar. SSO kullanıcı deneyimini sadeleştirir, MFA parolaya ek güvenlik katmanı getirir, OAuth2 ve OIDC uygulamalar arasında kimlik ve yetkilendirme akışı kurar, JWT kısa ömürlü bir taşıma belgesi gibi çalışır. Fakat token süresi, refresh akışı, rol ve claim tasarımı dikkat istemezse sistem ya kullanıcıyı sürekli yorar ya da saldırgana fazla zaman tanır. Mülakatta oturum mimarisi anlatırken login, token üretimi, yetki kontrolü, token yenileme, logout, hesap kapatma ve audit log akışını birlikte kur. Yönetici seviyesinde bu mimari denetim ve kullanıcı deneyimi arasında köprü kurar. Oturum iyi yönetilirse kullanıcı rahat eder, denetçi iz bulur, güvenlik ekibi de hangi kapının ne zaman açıldığını bilir."
  ],
  "buyuk-mimariler-13": [
    "Raporlama ve veri ambarı akışı, yöneticinin tek ekranda gördüğü sayının arkasındaki uzun yolu anlatır. Kaynak sistemler kendi hızında veri üretir; ETL veya ELT süreçleri bu veriyi taşır, veri ambarı analitik düzene sokar, kalite kontrol hatalı kayıtları yakalar, dashboard sonunda birkaç grafik gösterir. Bir yönetim raporunda iki birim aynı kavramı farklı sayıyordu. Biri başvuru oluşturma tarihini, diğeri onay tarihini esas almıştı; ikisi de kendi açısından haklıydı ama yönetim kararı için tek tanım gerekiyordu. Veri ambarında teknik temizlik kadar kavram birliği de gerekir. Veri sözlüğü iş terimlerini netleştirir, lineage sayının nereden geldiğini gösterir, güncelleme zamanı raporun tazeliğini anlatır, kalite kontrolleri eksik ve aykırı değerleri görünür kılar. Mülakatta veri ambarı anlatırken kaynak sistemden rapora kadar yolculuğu kur: veri alınır, dönüştürülür, kalite kuralından geçer, hassas alanlar maskelenir, iş katmanında tanımlar sabitlenir, dashboard bu güvenilir katmandan beslenir. Yönetici seviyesinde güzel grafik, yanlış tanımı saklıyorsa karar ekranı değil dekordur. İyi veri mimarisi, kurumun sayılarla kavga etmesini değil sayılarla karar vermesini sağlar."
  ],
  "buyuk-mimariler-14": [
    "Mobil uygulama ile backend arasındaki yol kesintili ağ, küçük ekran ve sabırsız kullanıcıyla sınanır. Telefon cebindedir; kurum süreci ise veri merkezi kadar büyüktür. Bir saha uygulaması tünelde bağlantı kaybedince aynı işlemi iki kez göndermişti. Backend bunu ayırt edemedi ve kayıtlar çift oluştu. Mobil dünyada offline durum, retry ve idempotency baştan tasarlanmalıdır. Uygulama kullanıcıya işlemin beklemede mi, gönderildi mi, başarısız mı olduğunu dürüstçe göstermelidir; teknik açıklama istemez, durumunu bilmek ister. JWT oturumu taşır, API Gateway mobil istemciyi servislerden ayırır, cache yavaş bağlantıda deneyimi korur, push notification kullanıcıyı geri çağırır, feature flag yeni sürümü kontrollü açar, hata mesajı paniği azaltır. Mülakatta mobil-backend mimarisi anlatırken offline queue, idempotency key, token yenileme, versiyon uyumluluğu, rate limit, cihaz bildirimi ve güvenli depolama konularını bağla. Yönetici seviyesinde mobil deneyim, kurumun en yakın temas noktasıdır. Backend mükemmel olsa bile kullanıcı asansörde işlem yaparken ne yaşadığını anlamıyorsa deneyim kırılır."
  ],
  "buyuk-mimariler-15": [
    "Yüksek trafikte ölçekleme, yalnız sunucu eklemek değildir. CDN, WAF, load balancer, cache, kuyruk, veritabanı sınırı, rate limit, autoscaling, gözlemleme ve hata yalıtımı birlikte planlanır. Bir sınav başvuru sistemi ilk saat çökmüştü. Uygulama sunucuları artırılmıştı ama veritabanı tek noktada tıkanmış, dosya yükleme servisi kuyruksuz çalışmış, kullanıcılar sayfayı yeniledikçe yük daha da büyümüştü. Kalabalıkta en dar kapı bütün binanın kaderini belirler. Ölçekleme önce bottleneck arama refleksidir: Hangi katman doyuyor, hangi istek pahalı, hangi veri cache'lenebilir, hangi iş asenkron olabilir, hangi hata izole edilir, sistem kısmi hizmet verebilir mi? Degrade mode bazen hayat kurtarır; örneğin yoğunlukta rapor indirmeyi kapatıp başvuru almayı sürdürmek daha doğru olabilir. Burada circuit breaker arızalı servise sonsuz istek göndermeyi keser, backpressure sistemi kendi taşıma kapasitesini söylemeye zorlar, rate limit kötüye kullanım ile gerçek yoğunluğu ayırmaya yardım eder, load shedding daha az kritik işleri geçici olarak bırakıp ana kullanıcı yolunu korur. Mülakatta yüksek trafik anlatırken tahmini yük, okuma-yazma oranı, cache stratejisi, kuyruk, veritabanı sharding veya replica, backpressure, circuit breaker ve monitoring konularını sırayla kur. Yönetici seviyesinde ölçekleme maliyet ve güvenilirlik kararıdır. Her şeyi sonsuz büyütmek mümkün değildir; önemli olan en kritik kullanıcı yolunu korumak ve dar kapıyı önceden görmektir."
  ],
  "proje-kamu-yonetim-1": [
    "Kurumsal proje fikri takvime yazılınca başlamaz; hangi değeri üreteceği netleşince başlar. 'Bir ekran yapalım' cümlesi ihtiyaç değildir, sadece isteğin ilk halidir. Bir projede herkes teslim tarihini biliyordu ama başarı ölçütünü bilmiyordu. Son gün sistem açıldı, sunucu çalıştı, kullanıcı giriş yaptı; buna rağmen talep sahibi memnun değildi, çünkü proje hızlandırması gereken işi yalnız dijitalleştirmiş, karar süresini kısaltmamıştı. Değer tanımı yapılmadan biten proje, teknik olarak kapanıp kurumsal olarak açık kalabilir. İyi proje başlangıcı bu yüzden sahici sorular sorar: Bu iş hangi acıyı azaltacak, hangi ölçü değişecek, kim daha az bekleyecek, hangi risk düşecek, hangi rapor güvenilir hale gelecek? Proje yöneticisi burada çevirmen gibi çalışır; iş dili, teknik dil, bütçe dili ve kabul dili aynı hikayeye bağlanır. Mülakatta kurumsal proje sorulduğunda takvimden önce değer hipotezini, paydaşı, ölçütü ve kabul kanıtını anlat. Büyük kurumlarda proje yönetimi toplantı takibi değil, belirsizliği karar verilebilir hale getirme sanatıdır."
  ],
  "proje-kamu-yonetim-2": [
    "İhtiyaç analizi, kullanıcının söylediğini aynen yazmak değildir. Kullanıcı çoğu zaman çözüm tarif eder; analistin işi alttaki ihtiyacı bulmaktır. Bir birim 'Excel yükleme ekranı' istiyordu. İlk toplantıda herkes sütunları konuşmaya başladı; ikinci toplantıda hatalı veri yüzünden her ay günlerce düzeltme yapıldığı anlaşıldı. Asıl ihtiyaç dosya yüklemek değil, hatalı veri girişini azaltmak ve kaynağında doğrulamaktı. Çözüm ekran değil, doğrulama kuralları, entegrasyon ve kullanıcıya erken geri bildirim oldu. İyi analiz, söylenen isteğin arkasındaki işi izler: kim başlatıyor, kim onaylıyor, hangi bilgi nereden geliyor, hata olursa kim düzeltiyor, bugün kaç dakika sürüyor, yarın ne değişmeli? Kapsam iyi çizilirse ekip rahatlar. Neyin yapılacağı kadar neyin yapılmayacağı da yazılmalıdır; aksi halde proje büyürken kimse büyüdüğünü kabul etmez. Mülakatta ihtiyaç analizi anlatırken kullanıcı görüşmesi, süreç haritası, veri kaynağı, kabul ölçütü ve kapsam dışı maddeleri birlikte kur. İyi analist, kullanıcıyı susturan değil, doğru soruyla kullanıcının asıl derdini görünür yapan kişidir."
  ],
  "proje-kamu-yonetim-3": [
    "Teknik şartname, tedarikçiye dilek değil ölçülebilir sözleşme diliyle konuşmalıdır. 'Hızlı çalışacak' belirsizdir; 'bin eşzamanlı kullanıcı altında p95 cevap süresi iki saniyeyi aşmayacak' ölçüdür. Bir kabul toplantısında taraflar aynı cümleyi farklı anlamıştı. Tedarikçi teslim ettim dedi, kurum beklediğim bu değildi dedi. Sorun kötü niyet değil, kötü yazılmış kabul ölçütüydü. Şartname iyi yazıldığında yalnız özellik saymaz; performans, güvenlik, erişilebilirlik, loglama, yedekleme, entegrasyon, dokümantasyon, eğitim ve kabul kanıtını da tarif eder. Teslim kanıtı baştan düşünülür: test sonucu, ekran kaydı, log, performans raporu, güvenlik tarama çıktısı, kullanıcı kabul tutanağı, eğitim listesi, kurulum dokümanı. Kabul günü hafıza değil kanıt konuşmalıdır. Mülakatta şartname sorulduğunda 'ne istediğimizi yazarız' demek yerine ölçülebilirlik ve doğrulanabilirlik vurgusu yap. Büyük kurumlarda iyi şartname tedarikçiyi köşeye sıkıştırmak için değil, iki tarafın aynı işi aynı şekilde anlaması için yazılır."
  ],
  "proje-kamu-yonetim-4": [
    "Paydaş haritası projedeki görünmez kuvvetleri gösterir. Karar kimde, kim etkilenecek, kim itiraz edebilir, kim onay vermeden iş ilerlemez? Bunları bilmeden plan yapmak sisli yolda hızlanmaktır. Bir projede teknik ekip hazırdı, altyapı kurulmuştu, entegrasyon testleri geçmişti; canlıya geçiş haftası hukuk onayı unutulduğu için veri paylaşım protokolü masaya geldi ve takvim durdu. Paydaş geç fark edilirse takvim bedel öder. RACI matrisi sıkıcı tablo gibi görünür ama kriz anında hayat kurtarır: responsible işi yapanı, accountable hesap vereni, consulted danışılacak kişiyi, informed bilgilendirilecek kişiyi gösterir. Bu ayrım yoksa toplantı sayısı artar, karar gecikir, herkes aynı anda hem sorumlu hem seyirci olur. Mülakatta paydaş yönetimi anlatırken teknik ekip, iş birimi, hukuk, satın alma, güvenlik, operasyon, destek masası ve üst yönetimin projedeki rolünü sahne gibi kur. İyi yönetici paydaşı yalnız imza anında değil, risk ortaya çıkmadan önce masaya çağırır."
  ],
  "proje-kamu-yonetim-5": [
    "Risk kaydı, kötümserlik defteri değildir; gelecekteki tartışmayı bugünden görünür kılma aracıdır. Varsayım doğrulanmazsa risk olur, risk gerçekleşirse sorun kaydına döner. Bir entegrasyon için 'karşı kurum zamanında hazır olur' varsayımı yazılmamıştı. Hazır olmayınca herkes şaşırmış gibi yaptı; oysa sürpriz değildi, sadece kayıtsızdı. İyi risk kaydı olasılık, etki, sahip, tetikleyici işaret ve azaltıcı aksiyon içerir. Kapsam kayması da genellikle küçük iyiliklerle başlar. 'Şunu da ekleyelim' cümlesi masumdur; etkisi takvim, test, bütçe, güvenlik ve kabul üzerinde görünür yapılmalıdır. Yönetici iyi niyeti cezalandırmaz, ama iyi niyetin projeyi sessizce büyütmesine izin vermez. Mülakatta risk ve kapsam anlatırken değişiklik talebinin nasıl değerlendirileceğini açıkla: iş değeri nedir, bağımlılığı ne, ne ertelenir, kim onaylar, kabul ölçütü nasıl değişir? Büyük kurumlarda risk yönetimi korkmak değil, yarının tartışmasını bugünden dürüstleştirmektir."
  ],
  "proje-kamu-yonetim-6": [
    "Test stratejisi son hafta hataları toplama işi değildir. Ne test edilecek, kim test edecek, veri nasıl hazırlanacak, hata hangi öncelikle kapanacak, canlıya geçişte geri dönüş nasıl olacak baştan yazılır. Bir canlıya geçişte rollback planı vardı ama kimse denememişti. Geri dönüş gerektiğinde veritabanı migration'ı eski sürümle uyumsuz çıktı ve plan kâğıtta kaldı. Test edilmeyen geri dönüş yolu, acil çıkış kapısının kilitli olması gibidir. İyi test stratejisi birim, entegrasyon, performans, güvenlik, kullanıcı kabul ve smoke testlerini iş riskine göre sıralar. Canlıya geçiş planı yalnız teknik adım listesi değildir; kullanıcı bilgilendirmesi, destek masası metni, yönetici karar metrikleri, tedarikçi hazır bulunurluğu ve iletişim kanalı da planın parçasıdır. Mülakatta test ve go-live sorulduğunda 'test ederiz' deme; test verisi, kabul ölçütü, hata önceliği, rollback provası, iletişim ve izleme adımlarını birlikte anlat. Canlıya geçiş sessizce yapılan küçük bir teknik hamle değil, kurumun kullanıcıya açtığı yeni sözleşmedir."
  ],
  "proje-kamu-yonetim-7": [
    "Tedarikçi yönetimi, toplantıda parlak sunumu dinlemekten ibaret değildir. SLA, bakım süresi, hata önceliği, sürüm takibi, güvenlik yükümlülüğü, doküman, eğitim ve bilgi transferi ölçülebilir olmalıdır. Bir sistem tedarikçiye öyle bağımlıydı ki kurumda kimse temel ayarı bile bilmiyordu. Tedarikçi değişince bilgi de gitmiş oldu; sistem kurumun malıydı ama hafızası dışarıdaydı. Sözleşme yalnız hizmet almaz, kurumsal hafızayı da korumalıdır. İyi yönetici tedarikçiyle kavga etmez, belirsizliği azaltır: Vaat ne, kanıt ne, teslim ne, kapsam dışı ne, kritik personel değişirse bilgi nasıl aktarılır, kaynak kod veya konfigürasyon kime ait, güvenlik olayı olursa bildirim süresi ne? Mülakatta tedarikçi yönetimi anlatırken aylık hizmet raporu, SLA takibi, problem yönetimi, değişiklik kontrolü, dokümantasyon ve çıkış planı kavramlarını bağla. Büyük kurumda tedarikçi ilişkisinin sağlığı, teknolojinin kendisi kadar önemlidir; çünkü dışarıdan alınan hizmet içeride verilen sözün parçası olur."
  ],
  "proje-kamu-yonetim-8": [
    "Bütçe, lisans ve envanter sıkıcı görünür; ta ki denetim veya yenileme zamanı gelene kadar. Hangi yazılım nerede kurulu, kaç lisans var, hangi sunucu kime ait, hangi cihaz destek dışı, hangi abonelik gerçekten kullanılıyor bilinmiyorsa kurum kendi malını bile sis içinde yönetir. Bir lisans yenilemesinde yıllardır kullanılmayan ürünlere para ödendiği görüldü. Kimse kötü niyetli değildi; envanter dağınıktı. Para bazen teknik eksikten değil, kayıt eksikliğinden akar. Varlık yönetimi iyi yapılırsa güvenlik, bütçe ve kapasite planı birlikte güçlenir. Bilmediğin cihazı yamayamaz, bilmediğin lisansı savunamaz, bilmediğin sunucunun felaket planını yazamazsın. CMDB burada yalnız tablo değildir; varlığın sahibi, iş hizmeti, bağımlılığı, yaşam döngüsü, bakım penceresi, yama durumu ve maliyet merkezi aynı kayıt üzerinde buluşur. Yazılım varlık yönetimi lisans uyumsuzluğu riskini azaltırken, donanım varlık yönetimi kapasite ve yenileme planını görünür yapar; bulutta tag politikası aynı disiplinin yeni yüzüdür. Mülakatta bu başlık geldiğinde CMDB, varlık sahibi, lisans uyumu, kullanım metriği, yenileme takvimi, amortisman, bulut maliyeti ve güvenlik yaması arasında bağ kur. Yönetici seviyesinde bütçe savunması yalnız fiyat listesi değildir; risk azaltma, verimlilik ve sürdürülebilirlik hikayesidir."
  ],
  "proje-kamu-yonetim-9": [
    "Kamu BT işleyişi tek tip değildir. Merkez teşkilat strateji ve standart konuşur, taşra bağlantı ve destek bekler, belediye vatandaş hizmetine odaklanır, üniversite dönemsel yoğunluk yaşar, savunma şirketi güvenilirlik ve gizlilikle çalışır. Bir bakanlık entegrasyonunda teknik bağlantı hazırdı ama resmi protokol tamamlanmamıştı. Özel sektörde küçük bir imza gibi görünen şey, kamuda sorumluluk sınırını çizer. Teknoloji kararı idari karardan ayrı yürümez. Kamu projelerinde bütçe yılı, satın alma usulü, resmi yazışma, veri paylaşım protokolü, arşiv yükümlülüğü, bilgi güvenliği standardı ve denetim izi takvimi etkiler. Bu gerçekliği bilmeyen teknik ekip, çalışan sistemi zamanında canlıya alamayabilir. Mülakatta kamu BT sorulduğunda kurum şemasını ezberlemek yetmez; hangi işin hangi belge, onay, bütçe, ekip ve tedarikçiyle yaşadığını anlat. Yönetici adayına gerçekçilik kazandıran şey, teknik çözümün idari dünyada nasıl nefes aldığını görebilmektir."
  ],
  "proje-kamu-yonetim-10": [
    "KVKK, denetim izi ve resmi yazı teknoloji projelerinin dış süsü değildir. Kişisel veri nerede duruyor, kim erişti, hangi amaçla işlendi, ne kadar saklanacak, karar neye dayanıyor? Bunlar proje tasarımının içindedir. Bir rapor ekranı iyi çalışıyordu ama fazla veri gösteriyordu. Kullanıcı işini daha hızlı yapıyordu, kurum ise gereksiz kişisel veri riski taşıyordu. İyi niyet, mevzuat riskini ortadan kaldırmaz. Denetim izi yalnız güvenlik olayı için değil, kararın nasıl alındığını kanıtlamak için de gerekir. Kim onay verdi, hangi sürüm canlıya çıktı, hangi kullanıcı hangi kayda baktı, hangi veri dışarı aktarıldı? Kurumsal hafıza kayıtla oluşur. Karar yazılır, onay saklanır, log tutulur, arşiv düzenlenir. İnsanlar değişir; kurumun hatırlaması için belge gerekir. Mülakatta KVKK ve denetim sorulduğunda veri minimizasyonu, maskeleme, erişim yetkisi, saklama süresi, aydınlatma, log ve resmi onay zincirini birlikte anlat. Üst düzey BT yöneticisi mevzuatı hukuk ekibine havale edip unutmaz; teknik tasarımın mevzuata uygun kanıt üretmesini sağlar."
  ],
  "proje-kamu-yonetim-11": [
    "Proje ve kamu mülakatlarında adayın sahayı anlayıp anlamadığı hızlı belli olur. Şartname, kabul, bütçe, tedarikçi, KVKK, denetim izi ve kullanıcı desteği kelimelerini aynı hikayede buluşturabiliyorsa yalnız yazılım değil kurum işi de görmüştür. İyi cevap bir toplantı sahnesi kurar: talep sahibi aciliyet anlatır, teknik ekip bağımlılığı gösterir, satın alma usulü sorar, hukuk veri sınırını çizer, güvenlik log ister, destek masası kullanıcı metnini bekler, yönetici karar ister. Aday bu masayı anlatabiliyorsa olgun görünür. Hazırlık için her sürece kanıt sorusu ekle: Bu işin kabul kanıtı ne, risk kaydı nerede, kim onaylıyor, kullanıcı nasıl bilgilendiriliyor, tedarikçi neyi taahhüt ediyor, denetçi geldiğinde hangi belge gösterilecek? Kamu görüşmelerinde muayene kabul, yaklaşık maliyet, bakım sözleşmesi, veri paylaşım protokolü, resmi yazı, SLA ve hizmet sürekliliği gibi kavramları doğru yerde kullanmak güven verir; çünkü bu kelimeler sahada gerçek karar noktalarıdır. Kamu ve kurumsal yönetim dili burada güçlenir. Mülakatta parlak teknoloji isimleri yardımcı olur ama asıl fark, teknolojinin kurum içinde nasıl karar, kayıt ve sorumluluk ürettiğini anlatabilmektir."
  ],
  "liderlik-kriz-gelecek-1": [
    "Teknik liderlik, her ayrıntıyı ezberlemek değil, ayrıntının ne zaman stratejik hale geldiğini sezebilmektir. İyi lider CPU darboğazını yalnız işlemci grafiği olarak görmez; hizmet yavaşlığına, kullanıcı memnuniyetine, kapasite bütçesine ve mimari borca bağlar. Güvenlik açığını yalnız CVE numarasıyla anlatmaz; veri sızıntısı, denetim bulgusu, itibar riski ve kapatma planı olarak çevirir. Bir toplantıda uzmanlar Kubernetes node sorununu anlatıyordu, üst makam hizmet etkisini soruyordu. Kötü lider iki tarafı da yarım bırakır: ya teknik ayrıntıda boğulur ya da teknik kökü saklayıp süslü güven cümleleri kurar. İyi lider iki dili de duyar. Uzmanlara kaynağı sorar, yöneticiye etkiyi ve çözüm penceresini verir: 'Veri kaybı yok, ödeme servisinde gecikme var, on beş dakika içinde kapasiteyi ayırıyoruz, gerekirse son sürümü geri alacağız.' Üst düzey BT yöneticiliği tam da bu çeviri gücüdür. Bu rota teknik bilgiyi insan, bütçe, risk ve gelecek kararlarıyla birleştirir; çünkü büyük kurumda teknoloji, yalnız makinenin değil kurumun çalışma biçiminin parçasıdır."
  ],
  "liderlik-kriz-gelecek-2": [
    "Üst makama teknik meseleyi sade anlatmak, ayrıntıyı yok etmek değildir. Ayrıntıyı doğru sıraya koyup karar aldıracak hale getirmektir: etki, seçenek, risk, maliyet, öneri. Bir kesintide yöneticiye 'veritabanı lock bekliyor' dendiğinde oda sessizleşmişti. Aynı bilgi 'ödeme ekranında kullanıcıların yüzde 20'si bekliyor, veri kaybı yok, iki çözüm seçeneğimiz var; birincisi rapor sorgusunu durdurup sistemi rahatlatmak, ikincisi son değişikliği geri almak' diye verilince karar mümkün oldu. Sadelik dürüstlükle birlikte yürür. Bilinmeyeni saklamak güveni kırar; bilinmeyeni sınırlandırıp ne zaman netleşeceğini söylemek liderliktir. Teknik lider, rapor verirken üç hatadan kaçınır: panik dili, gereksiz jargon ve sahte kesinlik. Mülakatta yönetici iletişimi sorulduğunda bir olay raporu gibi konuş: mevcut etki, kök neden varsayımı, yapılan aksiyon, karar ihtiyacı, bir sonraki bilgilendirme zamanı. Büyük kurumda doğru cümle bazen doğru komut kadar kritiktir."
  ],
  "liderlik-kriz-gelecek-3": [
    "Ekip kurmak CV toplamak değildir. Uzmanlık, güven, yedeklilik ve ölçü gerekir. Tek kahramana bağlı ekip ilk başta hızlı görünür; herkes zor işi kimin çözeceğini bilir, toplantılar kısa sürer, krizlerde o kişi aranır. Sonra bir gün o kişi izne çıkar, hastalanır veya kurumdan ayrılır ve bütün hızın aslında tek noktaya bağlı kırılganlık olduğu anlaşılır. Bir kurumda tek kişi tüm veritabanı bilgisini taşıyordu. İzin gününde performans krizi çıktı ve herkes aynı numarayı aradı. Bilgi paylaşımı yapılmadığında insan kaynağı riski teknik riskten daha keskin hale gelir. İyi lider ekipte derin uzmanlık kadar ortak dil kurar. Runbook yazılır, nöbet devri yapılır, mimari karar kaydedilir, kritik sistemlerin en az iki sahibi olur, genç mühendis yalnız küçük işlerle değil kontrollü sorumlulukla büyütülür. Herkes her şeyi bilmez ama herkes kime, hangi kanıtla, hangi anda gideceğini bilir. Mülakatta ekip yönetimi sorulduğunda insanları motive etmek gibi genel cümlelerle kalma; bilgi yedekliliği, görev dağılımı, mentorluk, ölçülebilir hedef ve olay sonrası öğrenme anlat. Teknik liderlik, insanların birlikte daha az kırılgan sistem kurmasını sağlamaktır."
  ],
  "liderlik-kriz-gelecek-4": [
    "Karar almak, bütün belirsizlik bitene kadar beklemek değildir. Bazen yüzde yetmiş bilgiyle yön seçersin; ama geri dönüş yolunu ve sorumluluğu açık tutarsın. Bir canlıya geçişte risk vardı. Ekip iki seçenek sundu: erteleme veya sınırlı kullanıcıyla kontrollü açılış. Lider ikinciyi seçti çünkü rollback planı denenmiş, monitoring hazırlanmış, destek ekibi bilgilendirilmişti. Cesaret, hazırlıksız atlamak değildir; hazırlık sayesinde sınırlı risk alabilmektir. Karar kalitesi yalnız sonucun iyi çıkmasıyla ölçülmez. O an hangi bilgi vardı, hangi varsayım kabul edildi, hangi risk sahiplenildi, hangi sinyalde durulacaktı? Bunlar yazılırsa yarın hesap vermek savunma değil öğrenme olur. Büyük kurumlarda karar kaydı, mimari karar dokümanı, risk acceptance, change advisory board ve rollback criteria gibi araçlar bu yüzden önemlidir; kararın yalnız kim tarafından değil hangi kanıtla alındığını da gösterir. Mülakatta karar alma sorulduğunda teknik seçenekleri risk, maliyet ve geri dönüş imkanıyla kıyasla. Büyük kurumda hız, risk ve sorumluluk aynı masadadır. Lider her şeyi bilmez; ama kararın nedenini, sınırını ve izleme biçimini netleştirir."
  ],
  "liderlik-kriz-gelecek-5": [
    "Bütçe savunması fiyat listesi okumak değildir. Yedeklilik neden gerekli, SIEM hangi riski azaltır, GPU kapasitesi hangi iş değerini üretir, lisans yenilemesi yapılmazsa ne olur, bulut maliyeti hangi hızın bedelidir? Maliyet hikayeye bağlanmalıdır. Bir yönetici pahalı görünen yedekleme yatırımını reddetmek üzereydi. Teknik ekip yalnız cihaz markası anlatmak yerine RTO, RPO ve hizmet etkisini gösterdi: 'Bu yatırım olmazsa ana sistem kaybında iki gün durabiliriz; olursa dört saat içinde dönebiliriz, veri kaybı şu aralıkta kalır.' Konu cihaz alımından iş sürekliliğine döndü. Bütçe dili böyle değişir. İyi BT lideri para isterken araç adıyla değil risk ve değerle konuşur. Capex, opex, TCO, amortisman, lisans uyumu, bakım sözleşmesi, bulut tüketimi ve insan kaynağı maliyeti aynı resimde okunmalıdır. Ucuz görünen ürün daha fazla operasyon yükü getiriyorsa toplam sahip olma maliyeti artar; pahalı görünen yönetilen servis, kritik ekip zamanını serbest bırakıyorsa gerçek değer üretebilir. Mülakatta bütçe sorulduğunda toplam sahip olma maliyeti, operasyon yükü, lisans uyumu, güvenlik riski, kapasite planı ve alternatif maliyet kavramlarını bağla. Üst yönetim teknik ayrıntıyı bilmek zorunda değildir; ama kararın iş etkisini görmeye hakkı vardır."
  ],
  "liderlik-kriz-gelecek-6": [
    "Krizde ilk dakika sisli geçer. Kullanıcı bağırır, alarm düşer, tedarikçi bekleyin der, üst yönetim etkiyi sorar, ekip aynı anda hem çözmek hem anlamak ister. Liderin görevi sisin içinde ilk sırayı kurmaktır. İlk karar çoğu zaman teknik çözüm değildir; olay kaydı açmak, etkiyi ölçmek, iletişim kanalını belirlemek, rolleri dağıtmak ve varsayımları gerçeklerden ayırmaktır. Kayıt yoksa kriz bittiğinde bile kurum ne yaşadığını bilemez. İyi kriz yönetiminde tek bir olay kanalı olur, kararlar zaman damgasıyla yazılır, müşteri etkisi periyodik güncellenir, teknik ekip gereksiz toplantı gürültüsünden korunur. Sakinlik kişilik özelliği değil, hazırlık sonucudur. Kim aranacak, hangi metrik okunacak, hangi sistem kapatılacak, kim açıklama yapacak önceden bilinmelidir. Mülakatta kriz yönetimi sorulduğunda 'soğukkanlı olurum' deme; triage, etki analizi, iletişim, karar kaydı, müdahale ve postmortem sırasını anlat. Büyük kurumda kriz, teknolojinin yanında kurum koordinasyonunu da sınar."
  ],
  "liderlik-kriz-gelecek-7": [
    "Veritabanı kilidi küçük bir teknik terim gibi görünür ama canlı sistemde kuyruk, ödeme, rapor, çağrı merkezi ve yönetici öfkesine dönüşebilir. Yavaş sorgu bazen bütün kurumun ritmini düşürür. Bir rapor sorgusu gündüz çalıştırılmış ve ana tabloyu uzun süre kilitlemişti. Rapor isteyen birim haklıydı, operasyon haklıydı, kullanıcı da haklıydı; yanlış olan, analitik ihtiyacın canlı transaction sistemi üzerinde düşünülmeden çalıştırılmasıydı. Bu krizde bakılacak yerler bellidir: aktif sorgular, lock bekleyen işlemler, transaction süresi, index durumu, son deploy, connection pool ve veritabanı kaynakları. Veritabanı krizi kanıtla konuşmayı sever. Lider suçlu aramak yerine sistemi rahatlatacak geçici aksiyonu, ardından kalıcı mimari düzeltmeyi ayırır: raporu durdur, kritik işlemi önceliklendir, gerekirse read replica veya veri ambarı tasarla, indeks ve sorgu planını düzelt, bakım penceresini netleştir. Mülakatta bu olayı anlatırken teknik kök ile iş etkisini bağla. Yönetici seviyesinde ders şudur: Veritabanı yalnız veri saklamaz; kurumun zamanını da yönetir."
  ],
  "liderlik-kriz-gelecek-8": [
    "SSL sertifikası ve DNS hatası küçük kayıt işi gibi görünür; bozulduğunda bütün kurum kapısız kalır. Kullanıcı için tek gerçek vardır: site açılmıyor. Bir sertifika süresi hafta sonu dolmuştu. Uygulama ayaktaydı, veritabanı sağlamdı, sunucular sağlıklıydı; ama tarayıcı güvenmiyordu. Güven zinciri kırılınca çalışan sistem çalışmıyor gibi görünür. DNS tarafında da küçük bir TTL veya yanlış kayıt, trafiği eski adrese gönderebilir, e-posta teslimini bozabilir, API entegrasyonunu kesebilir. Bu olaylarda sertifika bitiş tarihi, chain, SAN alanları, private key eşleşmesi, DNS resolver davranışı, TTL, CDN ayarı ve load balancer konfigürasyonu kontrol edilir. Basit görünen altyapı kayıtları takvimle, sahiplikle ve alarmyla yönetilmelidir. Mülakatta SSL/DNS krizi anlatırken önce kullanıcı etkisini, sonra teknik kontrol sırasını, sonra kalıcı önlemi söyle: otomatik yenileme, bitiş alarmı, kayıt sahipliği, değişiklik onayı ve test. Yönetici seviyesinde ders nettir: Küçük kayıtlar büyük hizmetlerin kapısıdır; kapı takvimsiz bırakılmaz."
  ],
  "liderlik-kriz-gelecek-9": [
    "DDoS baskısını ilk kez gerçekten ciddiye aldığım gece, ekranda kırmızı alarmdan çok daha öğretici bir şey vardı: her şey çalışıyor görünüyordu ama kimse hizmete ulaşamıyordu. Sunucular ayaktaydı, uygulama kodu yeni değişmemişti, veritabanı sağlıklıydı, load balancer cevap veriyordu; buna rağmen kullanıcılar giriş ekranına bile erişemiyordu. O an DDoS'un ne olduğunu ders kitabındaki tanımdan çıkarıp sahadaki haliyle gördüm. Distributed Denial of Service, yani dağıtık hizmet engelleme saldırısı, sistemi kırmak için içeri girmeye çalışmaz; kapının önünü o kadar kalabalıklaştırır ki gerçek kullanıcı kapıya yaklaşamaz. Bu yüzden DDoS, klasik anlamda 'bir açık bulundu ve istismar edildi' hikayesi değildir. Bazen açık yoktur, parola çalınmamıştır, veri sızmamıştır; ama hizmet sözü bozulmuştur. Kurumsal dünyada bu fark önemlidir, çünkü yönetim 'saldırı var mı?' diye sorarken kullanıcı yalnızca 'sistem yok' der. Teknik liderin görevi bu iki cümleyi aynı olayın içinde doğru yere koymaktır. DDoS'u anlamanın ilk adımı saldırının tek tür olmadığını bilmektir. Volumetric saldırılar hattı doldurmaya çalışır; UDP flood, DNS amplification veya NTP amplification gibi yöntemlerle bant genişliği boğulur. Protocol saldırıları TCP/IP katmanındaki state tablolarını, SYN flood gibi tekniklerle ağ cihazlarını veya load balancer'ı yorar. Application layer, yani Layer 7 saldırıları ise daha sinsidir; saldırgan pahalı arama endpoint'ine, login sayfasına, rapor üretme URL'ine ya da cache'e girmeyen dinamik sayfalara normal görünen HTTP istekleri yağdırır. Trafik hacmi devasa olmayabilir ama her istek uygulamaya pahalı iş yaptırır. Bu yüzden DDoS savunmasında ilk soru 'kaç istek geliyor?' değildir; 'hangi tür trafik nereye vuruyor, hangi katmanı yoruyor, gerçek kullanıcı bundan nasıl etkileniyor?' sorusudur. Bir ekip yalnız CPU grafiğine bakarsa Layer 7 saldırısını geç fark edebilir; yalnız bant genişliğine bakarsa login endpoint'inin boğulduğunu göremeyebilir. Saldırı gecesi ilk yanlış refleks genellikle daha fazla sunucu açmaktır. Bulutta birkaç tıklamayla kapasite artırmak cazip görünür; ama kötü trafik filtrelenmiyorsa yalnızca faturayı büyütürsün. Her sahte isteği origin sunucuya kadar taşıyorsan saldırganın maliyetini değil kendi maliyetini artırmış olursun. Doğru savunma mümkün olduğunca kenarda başlar. CDN ve scrubbing merkezi hacmi origin'e varmadan emer; anycast trafik dağıtımı saldırıyı tek noktaya yığmaz; WAF uygulama katmanında imza, davranış ve kural bazlı süzme yapar; rate limit belirli IP, token, kullanıcı ajanı, ülke, ASN veya endpoint için istek sınırı koyar; bot yönetimi tarayıcı davranışı, JavaScript challenge, fingerprint ve reputation sinyalleriyle sahte istemciyi ayırmaya çalışır. Cache stratejisi de savunmadır: Herkesin aynı statik içeriği istediği bir anda bunu uygulama sunucusuna taşımazsın; edge cache veya CDN cevabı kenarda verir. Ama login, ödeme, başvuru, kişisel veri ve dinamik rapor gibi alanlarda cache dikkat ister; hız kazanırken güvenlik veya doğruluk bozulmamalıdır. İşte bu nedenle çizimde saldırı kaynakları önce CDN scrubbing katmanına girer, sonra WAF ve rate limit üzerinden origin'e ulaşır. Gerçek kullanıcı da origin'e gizli bir arka kapıdan gitmez; aynı koruma kapılarından geçer ama iyi kurallar sayesinde yolu açık kalır. DDoS sırasında iyi liderlik panikle 'engelleyin' demekten daha fazlasıdır. Önce ortak bir olay odası kurulur: ağ ekibi trafik hacmini, kaynak AS numaralarını, protokol dağılımını ve paket oranını izler; uygulama ekibi hedef endpoint'leri, 4xx ve 5xx oranını, request latency ve thread pool durumunu okur; güvenlik ekibi WAF loglarını, bot sinyallerini, ülke/ASN anomalilerini ve saldırı örüntülerini inceler; operasyon ekibi load balancer, CDN, DNS, upstream sağlayıcı ve cloud maliyetini takip eder; iletişim tarafı kullanıcılara ve yönetime ne söyleneceğini belirler. Metriklerin adı burada hayati hale gelir: RPS yalnız başına yeterli değildir; p95/p99 latency, error rate, bandwidth, connection count, SYN backlog, cache hit ratio, origin offload oranı, WAF blocked request sayısı, CAPTCHA/challenge başarısı, ISP ticket zamanı ve müşteri etkisi birlikte okunur. Eğer WAF milyonlarca isteği engelliyor ama gerçek kullanıcı login olamıyorsa savunma başarılı sayılmaz. Eğer origin korunuyor ama durum sayfası sessizse kurum güven kaybeder. DDoS krizi teknik olduğu kadar iletişim krizidir. Bir kamu hizmetinde veya kritik finans sisteminde kullanıcıya belirsizlik bırakmak, saldırganın yarattığı hasarı büyütür. 'Sorun yaşıyoruz' demek bile çoğu zaman hiç konuşmamaktan iyidir; ama iyi iletişim teknik ayrıntı dökmek değildir. Etkilenen hizmet, kullanıcıya önerilen davranış, tahmini güncelleme zamanı ve veri güvenliğiyle ilgili net cümleler gerekir. Yönetim tarafında da aynı netlik aranır: Bu saldırı veri sızıntısı mı, hizmet kesintisi mi, hangi kritik süreçleri etkiliyor, hangi sağlayıcı devrede, ne zaman tekrar bilgi verilecek? Teknik lider bu soruları cevaplayabilmek için olay sırasında karar kaydı tutar. Hangi kural ne zaman açıldı, hangi ülke/ASN sınırlaması uygulandı, hangi endpoint geçici olarak korunmaya alındı, hangi cache kuralı değişti, hangi sağlayıcıya eskalasyon yapıldı? Kriz bittiğinde bu kayıt olay sonrası raporun omurgası olur. DDoS savunmasının kalıcı tarafı saldırıdan sonra başlar. WAF kuralı aceleyle fazla sıkı yazıldıysa gerçek kullanıcıyı da engellemiş olabilir; rate limit düşükse hizmet kendini boğmuş olabilir; CDN konfigürasyonu origin IP'yi yeterince saklamıyorsa saldırgan bir sonraki sefer doğrudan origin'e vurabilir. Bu yüzden postmortem'de yalnız 'saldırı durdu' denmez. Origin IP sızıntısı var mı, DNS kayıtları doğru mu, CDN bypass edilebiliyor mu, kritik endpoint'ler cache veya queue ile rahatlatılabilir mi, login ve arama akışları bot davranışına karşı nasıl sertleştirilecek, sağlayıcı sözleşmesinde DDoS kapasitesi ve destek SLA'i yeterli mi, runbook'ta kim kimi arıyor, hangi karar için kim onay veriyor? Mülakatta DDoS sorulduğunda güçlü cevap bu akışı taşır: Önce saldırı türünü sınıflandırırım, sonra etkiyi ölçerim, trafiği origin'e varmadan kenarda süzerim, WAF ve rate limit ile uygulama katmanını korurum, gerçek kullanıcı yolunu test ederim, sağlayıcıyı erken devreye alırım, maliyet ve iletişimi yönetirim, olay sonrası kuralları ve mimariyi iyileştiririm. Büyük kurumda dayanıklılık yalnız saldırıyı durdurmak değil, saldırı varken bile hizmet sözünü, güveni ve karar düzenini mümkün olduğunca korumaktır."
  ],
  "liderlik-kriz-gelecek-10": [
    "Yedek dönmüyorsa kurumun güven cümlesi sınanır. Herkes 'yedek var' demiş olabilir; gerçek soru restore çalışıyor mu, ne kadar sürüyor, hangi veri kaybediliyor ve kim hangi adımı biliyor sorusudur. Bir tatbikatta yedek dosyası vardı ama şifre anahtarı başka ekipteydi, o ekip de süreçte yoktu. Teknik yedek tamam, organizasyonel yedek eksikti. Felaket kurtarma ekip işi olarak tasarlanmalıdır. RPO, RTO, restore testi, immutable backup, offsite kopya, anahtar yönetimi ve sorumluluk matrisi birlikte okunur. Burada backup job başarı oranı kadar restore success rate, recovery runbook, dependency map, DNS dönüş planı ve uygulama konfigürasyon yedeği de önemlidir; çünkü veritabanı dönse bile uygulama secret'ı, sertifika veya obje depolama izni eksikse hizmet ayağa kalkmaz. Kriz günü yeni doküman yazılmaz; daha önce prova edilmiş adımlar uygulanır. Mülakatta yedek dönmeme olayını anlatırken panik yerine sıra kur: etkiyi belirle, son sağlam yedeği doğrula, izole ortamda restore dene, veri tutarlılığını kontrol et, uygulamayı kontrollü aç, kullanıcı ve yönetim iletişimini sürdür, olay sonrası eksikleri kapat. Kâğıt üstündeki güven prova edilmezse kriz günü dağılır."
  ],
  "liderlik-kriz-gelecek-11": [
    "Kriz sonrası rapor, yaşananı kapatma evrakı değil öğrenme aracıdır. Zaman çizelgesi, etki, kök neden, müdahale, iletişim ve kalıcı düzeltme açık yazılır. Bir olay raporunda 'sistemsel hata' yazıyordu. Bu cümle hiçbir şeyi öğretmez. Sonra ekip ayrıntıya indi: alarm yoktu, disk dolmuştu, log rotasyonu yanlıştı, sahiplik belirsizdi. Ders ancak isim konunca çıkar. İyi postmortem suçlu aramaz ama sorumluluğu da buharlaştırmaz. Hangi karar gecikti, hangi sinyal kaçtı, hangi doküman eskiydi, hangi test eksikti? Kalıcı düzeltme yapılmazsa olay yalnız ertelenir. Alarm eşiği, test, doküman, eğitim, kapasite değişikliği veya mimari karar raporun sonunda gerçek aksiyona dönüşmelidir. İyi raporda timeline, impact, root cause, contributing factors, detection gap, MTTR, action owner ve due date açıkça görünür; aksi halde rapor güzel yazılmış ama yönetilmeyen bir anıya dönüşür. Mülakatta kriz sonrası rapor sorulduğunda blameless kültür, zaman çizelgesi, etki ölçümü, kök neden analizi ve aksiyon takibini anlat. Büyük kurumda iyi rapor kurumu savunmak için değil, kurumu daha dayanıklı yapmak için yazılır."
  ],
  "liderlik-kriz-gelecek-12": [
    "Yapay zekânın ofise girişi sessiz başladı: özet çıkarma, e-posta taslağı, kod yardımı, doküman arama. Sonra soru değişti: Bu araç hangi veriyi görüyor, cevabı kim kontrol ediyor, yanlış öneri kimin kararına dönüşüyor? Bir ekip toplantı notlarını modelle özetliyordu; içinde hassas proje bilgileri ve tedarikçi fiyatları vardı. Kolaylık güzeldi, veri sınırı belirsizdi. Yapay zekâ ofiste verimlilik kadar yönetişim meselesidir. Lider bu konuda yasakçı veya büyülenmiş olmamalı. Kullanım alanı, veri sınıfı, model seçimi, onay noktası, kayıt, eğitim, telif ve güvenlik sınırı birlikte belirlenirse teknoloji faydaya yaklaşır. Kurum içi asistan yapılacaksa hangi belgeleri göreceği, yetkiyi nasıl uygulayacağı, cevabı kaynakla gösterip göstermeyeceği ve kullanıcı hatalı cevabı nasıl bildireceği tasarlanmalıdır. Mülakatta yapay zekâ yönetişimi sorulduğunda fayda ve riski aynı cümlede taşı: üretkenlik artışı, veri sızıntısı, hallucination, insan onayı, audit log ve politika. Üst düzey liderlik, yeni teknolojiyi ne körce engeller ne de kontrolsüz serbest bırakır; kullanımın güvenli yolunu açar."
  ],
  "liderlik-kriz-gelecek-13": [
    "Veri merkezlerinde enerji ve GPU baskısı, yapay zekâ çağının somut tarafıdır. Model ekranda nazikçe cevap verirken arka tarafta elektrik, soğutma, ağ, depolama, tedarik ve kapasite planı çalışır. Bir yapay zekâ pilotu başarılı olmuştu; birkaç kullanıcıyla demo akıcıydı, yönetim etkilendi. Üretime geçiş konuşulduğunda GPU kapasitesi, inference maliyeti, veri merkezi enerjisi, soğutma sınırı ve tedarik süresi masaya geldi. Demo ucuz, sürekli hizmet pahalı çıktı. Teknik lider, heyecanın faturasını baştan görmelidir. Her iş büyük model istemez; bazen küçük model, iyi RAG, cache, batching veya doğru prompt maliyeti dramatik biçimde düşürür. Enerji verimliliği, donanım tedariği, model boyutu, kullanım yoğunluğu ve hizmet seviyesi aynı planın parçasıdır. Mülakatta GPU/enerji konusu gelirse bunu yalnız donanım değil kapasite stratejisi olarak anlat. Büyük kurumda kapasite yalnız teknik metrik değil stratejik varlıktır; erişemediğin GPU, gerçekleştiremediğin yapay zekâ vaadine dönüşür."
  ],
  "liderlik-kriz-gelecek-14": [
    "Dijital egemenlik, verinin ve kritik hizmetlerin kimin altyapısında, hangi hukuki sınırda ve hangi tedarik zinciriyle yaşadığını sormaktır. Bulut bağımlılığı bu yüzden yalnız teknik tercih değildir. Bir kurum kritik verisini taşıyacağı bulut için performansa ve fiyata bakmış, veri konumu, mevzuat, çıkış stratejisi ve yedek sağlayıcı planını geç konuşmuştu. Sonra karar teknik kıyaslamadan stratejik tartışmaya döndü. Teknoloji seçimi bazen ülke, sektör, tedarik ve hukuk boyutuna çıkar. Yarı iletken yarışı, GPU tedariki, kritik yazılım bağımlılıkları, açık kaynak riskleri ve veri yerleşimi aynı resimdedir. Lider gelecek planı yaparken yalnız bugünkü fiyatı değil, yarın erişilebilirliği, sözleşme kilidini, taşıma maliyetini ve kurumun karar özgürlüğünü düşünür. Mülakatta dijital egemenlik sorulduğunda millî sloganla değil somut kontrollerle konuş: veri sınıflandırması, yerleşim politikası, exit plan, çoklu bölge, açık standart, tedarikçi riski ve kritik sistem envanteri. Üst düzey BT yöneticisi teknolojiyi yalnız satın almaz; kurumun gelecekteki hareket alanını da korur."
  ],
  "liderlik-kriz-gelecek-15": [
    "Üst düzey BT yöneticisi için kişisel rota geniş ama dağınık olmamalıdır. Temel bilgisayar, yazılım, ağ, güvenlik, veri, bulut ve yapay zekâ konularını karar verecek kadar bilmek gerekir; her konunun en derin uzmanı olmak gerekmez, ama uzmanla konuşacak kadar kavram, doğru soruyu soracak kadar sezgi, riski anlayacak kadar tecrübe şarttır. En iyi yöneticiler bilmediklerini saklamaz; doğru kişiyi masaya çağırır, kanıt ister, kararı kayıt altına alır. Bu alçakgönüllü yetkinlik büyük kurumlarda çok değerlidir. Kişisel rota için her ay bir teknik derinlik, bir yönetim pratiği, bir kriz raporu ve bir mimari okuma seç. Örneğin bir ay Kubernetes işletimi, bir ay bütçe savunması, bir ay veri sızıntısı postmortem'i, bir ay ödeme sistemi mimarisi çalış. Her projeden bir teknik ders, bir insan dersi, bir karar dersi çıkar. Zamanla bilgi ansiklopedi değil pusula haline gelir. Mülakatta kariyer vizyonu sorulduğunda unvan değil öğrenme sistemi anlat. Gerçek liderlik, yıllar geçtikçe daha çok şey bildiğini göstermekten çok, karmaşık dünyada daha iyi soru sormayı öğrenmektir."
  ],
  "mulakat-ve-ust-duzey-hazirlik-1": [
    "Mülakat stratejisi ezber listesini daha hızlı okumak değildir. İyi aday cevabı küçük bir düşünce zinciriyle kurar: tanım, örnek, risk, ölçüm ve öğrenilen ders. Bir görüşmede aday Docker'ı güzel tanımladı ama nerede kullanacağını anlatamadı. Başka aday basit bir deployment hikayesi anlattı; imaj, container, environment variable, log, registry ve rollback doğal biçimde geçti. İkinci cevap daha az süslüydü ama daha güven vericiydi, çünkü bilgi olayın içinde yaşıyordu. Hazırlanırken her başlık için üç katmanlı anlatım yap: Bunu yeni başlayan birine nasıl anlatırım, stajyere nasıl örneklerim, genel müdüre hangi iş etkisiyle açıklarım? Üç seviyede anlatabilen kişi gerçekten anlamaya yaklaşır. Mülakatta aceleyle terim yağdırma; önce problemi kur, sonra kavramı yerine koy, ardından sınırını söyle. 'Cache hızlıdır' demek yerine 'okuma yoğun sistemde veritabanı yükünü azaltır, ama eski veri ve invalidation riski getirir' demek olgunluktur. Üst düzey hazırlıkta amaç çok bilmiş görünmek değil, doğru soruyu doğru bağlamda sorabilmektir."
  ],
  "mulakat-ve-ust-duzey-hazirlik-2": [
    "Bilgisayar temelleri soruları adayın zemininin sağlamlığını ölçer. CPU, RAM, disk, işletim sistemi, süreç, ağ ve DNS konularında sade ama ilişkili cevap beklenir. İyi cevap şuna benzer: Kullanıcı yavaşlık görüyor; önce CPU ve bellek metriklerine, sonra disk I/O'ya, sonra ağ gecikmesine, sonra uygulama loguna bakarım. Çünkü yavaşlık tek parçanın suçu olmayabilir; sistem birlikte çalışan parçaların toplamıdır. Temel konularda gösteriş yapma. CPU'yu hesap yapan merkez, RAM'i çalışma masası, diski kalıcı arşiv, işletim sistemini kaynak hakemi, DNS'i adres defteri, TCP/IP'yi taşıma düzeni gibi anlatabilmek güçlüdür. Sonra bu benzetmeyi gerçek olaya bağla: RAM yetmezse swap başlar, disk yavaşsa uygulama bekler, DNS bozulursa sağlam sunucuya ulaşılamaz. Mülakatta temel konu sorulduğunda amaç seni zor terimle köşeye sıkıştırmak değil, karmaşık sistemleri basit ve doğru zemine oturtup oturtamadığını görmektir. Sağlam temel, üst katlardaki tüm mimari konuşmaların taşıyıcı kolonudur."
  ],
  "mulakat-ve-ust-duzey-hazirlik-3": [
    "Python, OOP, SQL ve API soruları adayın üretim yapıp yapamayacağını gösterir. Değişken, döngü ve fonksiyon temelidir; ama okunabilir kod, veri bütünlüğü, hata yönetimi ve test alışkanlığı asıl farkı yaratır. Bir cevapta küçük proje hikayesi kullan: Python ile CSV'den veri okudum, doğruladım, PostgreSQL'e transaction içinde yazdım, REST API ile dış sisteme bildirdim, hata olursa logladım ve tekrar denenebilir hale getirdim. Bu akış dört konuyu tek sahnede toplar. OOP sorulduğunda sınıf yazmayı değil sorumluluk ayırmayı anlat; SQL sorulduğunda JOIN, index, transaction ve veri bütünlüğünü bağla; API sorulduğunda HTTP method, status code, timeout, retry ve idempotency'yi unutma. Derinlik göstermek için sınırları da söyle. OOP her yerde gerekmez, SQL yanlış JOIN ile yanıltır, API timeout ister, Python hızlı geliştirme sağlar ama paket ve ortam yönetimi ister. Mülakatta güçlü aday yalnız kod yazabileceğini değil, kodun veri ve dış sistemlerle nasıl güvenilir ilişki kuracağını gösterir."
  ],
  "mulakat-ve-ust-duzey-hazirlik-4": [
    "Web ve backend sorularında görüşmeci uçtan uca akış duymak ister. Tarayıcı isteği DNS ile adres bulur, HTTPS ile güvenli bağlantı kurar, API Gateway veya load balancer üzerinden backend'e gelir, auth katmanı kullanıcının kim olduğunu anlar, servis iş kuralını uygular, cache hızlı cevap verebilir, kuyruk uzun işi arkaya atabilir, veritabanı resmi kaydı tutar ve cevap uygun HTTP koduyla döner. JWT sorulduğunda güvenliği; cache sorulduğunda eski veri riskini; kuyruk sorulduğunda idempotency ve retry'ı anmak cevabı güçlendirir. İyi aday teknolojiye yanında taşıdığı sorunla birlikte bakar. Hazırlık için bir e-ticaret sipariş akışını tahtada çiz. Sonra REST, JWT, Redis, Docker, queue, PostgreSQL, logging ve monitoring sorularını bu akışta yerine koy. Böylece cevaplar birbirinden kopuk değil, mimari bütünlük içinde gelir. Üst düzey görüşmede aynı akışa maliyet, güvenlik ve işletme boyutunu ekle. Backend yalnız kod değildir; kurumun kullanıcı isteğine verdiği düzenli cevaptır."
  ],
  "mulakat-ve-ust-duzey-hazirlik-5": [
    "Linux, ağ, Docker, Kubernetes ve bulut soruları üretim ortamı sezgisini ölçer. Bu başlıklarda teorik tanım kadar arıza anında neye bakacağını söylemek önemlidir. Bir aday 'pod restart ediyor' sorusunda image pull, environment variable, secret, resource limit, readiness probe, liveness probe ve log kontrolünü sırayla anlattı. Cevap komut ezberi değildi; olay çözme düzeniydi. Linux sorusunda process, permission, systemd, log ve disk alanını; ağ sorusunda DNS, port, firewall, latency ve TLS'i; Docker sorusunda image-container-volume-network farkını; Kubernetes sorusunda pod-service-deployment ilişkisini; bulutta ise region, IAM, network, storage ve maliyet disiplinini bağla. Bulut sorusunda maliyeti unutma. Teknik ekip ölçeklenmeyi sever; yönetici ay sonunda faturayı görür. İyi cevap ikisini aynı cümlede taşır: 'Ölçeklerim ama metrik, bütçe alarmı ve rightsizing ile yönetirim.' Üretim sezgisi, sistem bozulduğunda sakin bir kontrol sırası kurabilmektir."
  ],
  "mulakat-ve-ust-duzey-hazirlik-6": [
    "Siber güvenlik mülakatında olgunluk, riskin iş etkisini görmekle anlaşılır. Firewall, WAF, SIEM, EDR, IAM ve DLP kavramlarını ürün listesi gibi değil kontrol ailesi gibi anlat. Firewall ağ geçişini sınırlar, WAF uygulama katmanı saldırılarını azaltır, SIEM logları ilişkilendirir, EDR uç noktada davranış izler, IAM kimlik ve yetkiyi düzenler, DLP hassas verinin yanlış yere gitmesini engellemeye çalışır. Olay müdahalesi sorulursa sırayı koru: tespit, etki analizi, çevreleme, kanıt koruma, temizleme, kurtarma, raporlama ve kalıcı düzeltme. Bu sıra panik yerine disiplin gösterir. Yönetsel cevapta bütçe ve denetim dilini ekle. Hangi kontrol hangi riski azaltıyor, hangi log kanıt sayılır, hangi olay üst makama çıkar, hangi mevzuat bildirimi gerekebilir? Mülakatta güvenlik cevabını bir olay üzerinden kurarsan daha güçlü olur: phishing geldi, hesap ele geçirildi, SIEM alarm verdi, oturum kapatıldı, EDR cihazı izole etti, kullanıcı eğitimi ve koşullu erişim politikası güncellendi. Bu tür cevap seni uzmanlıktan liderliğe taşır."
  ],
  "mulakat-ve-ust-duzey-hazirlik-7": [
    "Yapay zekâ, RAG, LLM ve MLOps sorularında moda kelimeler kolay tuzaktır. Güçlü cevap model, veri, kaynak, değerlendirme, maliyet ve güvenlik sınırını birlikte kurar. Bir RAG sorusunda belge toplama, temizleme, chunking, embedding, vector search, retrieval, kaynak gösterme ve eval akışını anlat. Sonra prompt injection, yetki filtresi, hassas veri maskeleme ve cevap bulamazsa durma davranışını ekle. İşte o zaman cevap demo seviyesini geçer. LLMOps sorulursa model canlıya çıktıktan sonraki hayatı konuş: prompt versiyonu, model değişikliği, cevap kalitesi, kullanıcı geri bildirimi, maliyet, latency, güvenlik olayı ve eval seti. Aday ayrıca fine-tuning ile RAG farkını bilmelidir: RAG güncel kurumsal kaynağı cevaba taşır, fine-tuning davranış ve üslup kalıbını güçlendirebilir ama her belge güncellemesini modele öğretmek için sihirli yol değildir. Guardrail, structured output, tool calling, human-in-the-loop ve rate limit kavramları da üretim kalitesinin parçasıdır. Yapay zekâ ürünü de yaşayan sistemdir. Mülakatta 'LLM her şeyi çözer' havasına girme; sınırlarını söyle. Halüsinasyon olabilir, kaynak yanlış seçilebilir, maliyet büyüyebilir, yetki uygulanmazsa veri sızabilir. Üst düzey aday yapay zekâyı büyülü ekran değil, izlenebilir ve yönetilebilir ürün olarak anlatır."
  ],
  "mulakat-ve-ust-duzey-hazirlik-8": [
    "Sistem tasarımı mülakatı büyük resmi tahtada kurma sınavıdır. Önce gereksinimi sor, sonra kullanıcı akışını çiz, sonra veri modelini, API'leri, cache'i, kuyruğu, güvenliği, gözlemlemeyi ve ölçeklemeyi ekle. Bir aday URL kısaltma sistemi tasarlarken önce veritabanına atladı. Başka aday okuma-yazma oranını, kısa kod üretimini, çakışma riskini, redirect hızını, cache'i, rate limit'i, kötüye kullanım riskini ve analytics ihtiyacını konuştu. İkinci aday sistemi gerçekten tasarlıyordu. Tahtada mükemmel çizim arama; kararlarını gerekçelendir. Nerede tutarlılık, nerede hız, nerede basitlik, nerede maliyet seçtin? Her bileşen bir soruna cevap vermeli. Kuyruk neden var, cache neyi hızlandırıyor, veritabanı hangi resmi kaydı tutuyor, log hangi olayı kanıtlıyor? CAP theorem, eventual consistency, strong consistency, partitioning, replication, hot key, cold start ve single point of failure gibi terimleri ezber diye değil, tasarım tercihinin bedeli olarak kullan. Mülakatta iyi sistem tasarımı cevabı, belirsizliği parçalara ayırır ve seçtiği bedelleri açıkça söyler."
  ],
  "mulakat-ve-ust-duzey-hazirlik-9": [
    "Yöneticilik mülakatında teknik bilgi karar diline çevrilmelidir. Bütçe, risk, insan, tedarikçi, mevzuat ve iş sürekliliği aynı cevapta yer bulur. Bir aday Kubernetes yatırımını savunurken 'modern teknoloji' dedi ve zayıf kaldı. Başka aday dağıtım hızı, hata yalıtımı, ekip yetkinliği, işletme maliyeti, güvenlik politikası, geçiş riski ve geri dönüş planını anlattı. Yönetim dili ikinci cevaptadır. Bu görüşmelerde bilmediğini saklama, sınırlandır: 'Bu konuda uzman görüşü alırım; karar için şu metriklere bakarım, riski şu belgeyle görünür yaparım' demek olgun lider refleksidir. Yönetici mülakatında kriz deneyimi sorulursa yalnız sonucu değil süreci anlat: etki nasıl ölçüldü, kimler toplandı, hangi karar alındı, iletişim nasıl yapıldı, olaydan ne öğrenildi? Stratejik cevaplarda OKR, KPI, SLA, risk appetite, vendor lock-in, TCO, governance ve compliance gibi kelimeler yerli yerinde kullanılmalıdır; bunlar süslü yönetim dili değil, teknik kararın kurum hedefiyle temas ettiği noktalardır. Üst düzey aday, teknolojiyi kurumun para, zaman, güven ve insan düzenine bağlayabilen adaydır."
  ],
  "mulakat-ve-ust-duzey-hazirlik-10": [
    "Teknisyenlikten stratejik BT liderliğine geçiş, elindeki tornavidayı bırakmak değil, hangi sorunda hangi tornavidanın gerektiğini bilmektir. Derinlik kaybolmaz; perspektif genişler. Kariyerin başında komut öğrenirsin, sonra sistem kurarsın, sonra ekibin nasıl çalıştığını görürsün, en sonunda teknolojinin bütçe, risk ve kurum hedefiyle ilişkisini yönetirsin. Her aşama öncekinin üstüne çıkar. Stratejik liderlik teknikten uzaklaşmak değil, tekniğin etkisini daha geniş okumaktır. Bir veritabanı gecikmesi kullanıcı deneyimidir, bir sertifika takvimi güven yönetimidir, bir bulut faturası mimari karardır, bir yapay zekâ pilotu veri yönetişimi meselesidir. Kişisel rota için her projeden bir teknik ders, bir insan dersi ve bir karar dersi çıkar. Zamanla CV'nin yanında daha değerli bir şey oluşur: sahadan süzülmüş yargı gücü. Mülakatta son söz olarak bunu taşı: Ben araçları öğrenirim, sistemleri okurum, insanları dinlerim, riski görünür yaparım ve kararın kaydını tutarım. Çok üst düzey BT liderliği böyle başlar."
  ],
  "asama-2-programlama-11": [
    "Veri yapıları ve algoritma sezgisi, yazılım dünyasının sessiz iskeletidir. Kodun ekranda çalışması yetmez; veri büyüdüğünde, kullanıcı sayısı arttığında, sorgu sıklaştığında veya bellek daraldığında nasıl davranacağını da bilmek gerekir. Bunu ilk kez bir rapor ekranında çok çıplak görmüştüm. Test ortamında yüz kayıtla göz açıp kapayıncaya kadar çalışan filtre, canlıda yüz binlerce kaydı görünce ağırlaşmıştı. Kod aynı koddu, ama veri artık çocuk parkı değil şehir trafiğiydi. Array hızlı erişim sağlar ama ortadan eleman silmek maliyetlidir; linked list ekleme çıkarma için rahat olabilir ama rastgele erişimde yavaştır; hash map anahtardan değere hızlı gider ama çakışma, bellek ve sıralama davranışı düşünülmelidir; stack son giren ilk çıkar mantığıyla undo, parse ve çağrı yığını gibi yerlerde doğal durur; queue ilk giren ilk çıkar düzeniyle iş kuyruğu, mesaj işleme ve arka plan görevlerinde kullanılır. Tree ve graph ise hiyerarşi ve ilişki dünyasının dilidir; dosya sistemi, organizasyon şeması, rota bulma, dependency ilişkisi ve sosyal ağlar bu gözle okunur. Big O notasyonu burada gösteriş için değil, davranışı kabaca tahmin etmek için vardır. O(1) sabit erişim, O(log n) bölerek arama, O(n) tek tek dolaşma, O(n log n) iyi sıralama sınıfı, O(n²) büyüdükçe can yakan çift döngü demektir. Mülakatta algoritma sorusu geldiğinde yalnız çözümü bulmaya çalışma; veri boyutunu, bellek sınırını, sıralı mı dağınık mı geldiğini, tekrar var mı, arama mı ekleme mi ağır basıyor diye sor. Büyük kurumlarda bu sezgi performans, maliyet ve kullanıcı deneyimine dönüşür. Yanlış veri yapısı bazen pahalı sunucu faturasıdır, bazen kilitlenen ekran, bazen de gece yarısı açılan performans olayıdır."
  ],
  "buyuk-mimariler-16": [
    "Veri mühendisliği, kurumun dağınık hafızasını karar verilebilir hale getirme işidir. Kullanıcı ekranda bir dashboard görür; yönetici grafik üstünden karar verir; ama o grafiğin arkasında çoğu zaman CRM, ERP, çağrı merkezi, ödeme sistemi, log platformu, dosya depoları, üçüncü taraf entegrasyonları ve eski uygulamalardan gelen uzun bir yol vardır. ETL veya ELT bu yolun taşıma düzenidir: veri kaynaktan alınır, dönüştürülür, temizlenir, zenginleştirilir ve data warehouse ya da data lake gibi ortamlara yerleşir. Warehouse daha düzenli, şeması güçlü ve raporlama için hazır bir arşiv gibidir; data lake ise ham ve farklı formatlardaki veriyi daha esnek tutar ama iyi kataloglanmazsa kısa sürede bataklığa dönebilir. Bir kurumda raporlar birbirini tutmuyordu; satış ekibi başka sayı, finans başka sayı, operasyon başka sayı söylüyordu. Sorun dashboard aracı değildi; müşteri, sipariş, iptal, aktif kullanıcı ve gelir tanımları ortak değildi. Veri kalitesi burada teknik kadar yönetişim meselesidir. Data catalog hangi tablonun ne anlama geldiğini, data lineage verinin nereden gelip hangi dönüşümlerden geçtiğini, data quality kuralları boş alan, tekrar, geçersiz değer ve tutarsız tarihleri yakalar. Batch işleme gece büyük veri taşımak için uygundur; stream işleme Kafka benzeri akışlarla olayları neredeyse anlık yakalar. Mülakatta veri mühendisliği anlatırken yalnız 'ETL yaptım' deme; kaynak sistem, dönüşüm, kalite kontrol, katalog, erişim yetkisi, kişisel veri, izleme, yeniden çalıştırma ve hata telafisini birlikte kur. Üst düzey yönetimde veri mimarisi rapor güzelliği değil güvenilir karar altyapısıdır. Yanlış veriyle alınan karar, bazen bozuk sistemden daha pahalıdır."
  ],
  "liderlik-kriz-gelecek-16": [
    "ITSM ve değişiklik yönetimi, teknolojinin gündelik hayatını düzenleyen trafik kurallarıdır. Incident bir hizmet bozulduğunda açılır; amaç kullanıcı etkisini azaltıp hizmeti geri getirmektir. Problem aynı olayın kök nedenini arar; amaç tekrarını engellemektir. Change ise üretim ortamında yapılacak kontrollü değişikliktir; amaç yenilik getirirken sistemi gereksiz riske atmamak. Bu ayrım kağıt üstünde basit görünür ama sahada çok şey değiştirir. Bir ekip her kesintiyi hızlıca kapatıyor, ama aynı kesinti ayda üç kez dönüyordu. Incident çözülüyordu, problem yönetimi yapılmıyordu. Başka bir ekip küçük konfigürasyon değişikliğini kayıt açmadan canlıya aldı; işlem başarılıydı ama sorun çıkınca kim neyi ne zaman değiştirdi bilinmedi. Change management burada yavaşlatıcı bürokrasi değil, kurum hafızasıdır. CAB, yani Change Advisory Board, her küçük işi aylarca bekletmek için değil, yüksek riskli değişikliklerde etkiyi, geri dönüş planını, iletişimi ve bağımlılıkları görünür yapmak için vardır. Release yönetimi ise tek değişikliği değil, kullanıcıya giden sürüm paketini, dokümanı, eğitimi, rollback'i ve monitoring hazırlığını birlikte düşünür. İyi ITSM pratiğinde ticket yalnız iş kuyruğu değil kanıt zinciridir: etki, öncelik, sahip, SLA, aksiyon, karar ve kapanış dersi içerir. Teknik lider bu düzeni kör prosedür haline getirmez; riskli işi kontrol ederken küçük işi boğmayacak esneklik kurar. Mülakatta ITSM sorulduğunda incident, problem, change, CAB, release, SLA, known error, post-implementation review ve configuration management kavramlarını bir olay üzerinden anlat. Büyük kurumda olgunluk, kahramanca müdahale etmekten çok sistemli öğrenmek ve değişikliği iz bırakarak yönetmektir."
  ]
};

const articleSupplements = {
  "liderlik-kriz-gelecek-1": "Bu seviyedeki liderlikte en kritik beceri, teknik ayrıntıyı öldürmeden karar diline çevirmektir. Bir toplantıda ağ ekibi MTU sorunundan, uygulama ekibi timeout'tan, kullanıcı temsilcisi ise ekranda dönen küçük simgeden söz eder; üçü de aynı olayı anlatıyor olabilir. İyi teknik lider bu dilleri birbirine tercüme eder. 'Paket parçalanıyor' cümlesinin kullanıcı karşılığı yavaş işlem, iş karşılığı geciken hizmet, yönetim karşılığı ise SLA riski olabilir. Bu yüzden teknik liderlik, bilmediğini saklama sanatı değil, doğru uzmanı doğru soruyla konuşturma disiplinidir. Büyük kurumlarda bu rol özellikle değerlidir; çünkü sunucu, ağ, yazılım, güvenlik, satın alma ve hukuk aynı masaya geldiğinde herkes kendi gerçeğini getirir. Liderin görevi birini susturmak değil, gerçeği karar alınabilir sıraya koymaktır. Etki nedir, kanıt nerede, seçenekler neler, geçici çözüm ne, kalıcı düzeltme hangi bütçe ve takvimle yapılacak? Böyle sorulduğunda teknik lider yalnız ekip yöneten kişi değil, karmaşık sistemin tercümanı olur.",
  "liderlik-kriz-gelecek-2": "Üst makama teknik anlatım yaparken en büyük hata, ayrıntıyı zekâ gösterisi gibi masaya boşaltmaktır. Genel müdürün Kubernetes pod adını bilmesi gerekmez; ama o pod düşerse hangi vatandaş hizmetinin, hangi ödeme akışının ya da hangi raporun etkileneceğini bilmeye hakkı vardır. Benzer şekilde bir güvenlik açığını anlatırken CVE numarası tek başına karar aldırmaz; açık hangi sistemde, dışarıdan erişilebilir mi, sömürülme ihtimali nedir, yamayı geçmek hizmeti durdurur mu, ertelemenin bedeli nedir? Yönetim dili burada başlar. Teknik lider, alarm cümlesi kurmadan risk cümlesi kurar. 'Acil' demek yerine 'şu hizmet etkileniyor, şu süre içinde müdahale etmezsek şu kayıp büyür, üç seçenek var' der. Böyle konuşunca üst yönetim panikle değil sorumlulukla karar verir. Bu bölümün mülakat dersi de budur: güçlü aday, karmaşık tekniği basitleştirirken gerçeği bozmaz; karar vericinin önüne seçenek, risk ve öneri koyar.",
  "liderlik-kriz-gelecek-3": "Ekip kurmak, CV'de çok parlak isimleri yan yana dizmek değildir. Gerçek ekip, nöbet gecesi kim log okuyacak, kim kullanıcı etkisini ölçecek, kim tedarikçiyi arayacak, kim değişiklik kararını kayda geçirecek sorularına cevap verebilen yapıdır. Tek kahramana bağlı ekipler dışarıdan güçlü görünür; içeride kırılgandır. Herkesin 'onu Ahmet bilir' dediği sistem, Ahmet izinliyken kurumun zayıf noktası olur. Bu yüzden teknik lider bilginin kişide değil süreçte de yaşamasını ister. Runbook, mimari doküman, kod inceleme, eşli çalışma, devir teslim, yedekli yetkinlik ve düzenli tatbikat romantik ayrıntı değil operasyonel sigortadır. Mentorluk da burada önem kazanır. Kıdemli uzman yalnız sorunu çözmekle kalmaz; nasıl düşündüğünü de görünür kılar. Junior kişi komut ezberlemez, teşhis sırasını öğrenir. Yönetici adayı için çıkarılacak ders nettir: ekip kapasitesi kişi sayısı değil, paylaşılan bilgi ve güvenilir çalışma düzenidir.",
  "liderlik-kriz-gelecek-4": "Karar almak bazen eksik haritayla yola çıkmaktır; fakat pusulasız yürümek değildir. Teknik dünyada kesin bilgi beklemek çoğu zaman geç kalmak anlamına gelir. Canlıya geçişte, güvenlik yamasında, bulut taşımasında veya veritabanı bakımında tüm riskler sıfırlanmaz; riskler görünür hale getirilir. İyi karar kaydı bu yüzden altın değerindedir. Hangi varsayımı kabul ettik, hangi metrik bozulursa geri döneceğiz, rollback ne kadar sürer, kim onay verdi, kullanıcı etkisi nasıl izlenecek? Bunlar yazılmadığında başarılı karar bile şansa benzer; yazıldığında kurum öğrenir. Bir ekipte kararların sözlü alındığı dönemlerde herkes geçmişi farklı hatırlıyordu. Mimari karar kaydı tutulmaya başlandığında tartışmalar kişisel hafızadan çıktı, kurumsal hafızaya dönüştü. Mülakatta karar alma sorusuna verilecek olgun cevap budur: belirsizlik bitmez, ama kararın gerekçesi, sınırı, sahibi ve geri dönüş yolu açık olmalıdır.",
  "liderlik-kriz-gelecek-5": "Bütçe savunmasında teknik liderin sesi iki tarafa da ulaşmalıdır. Teknik ekip 'bu ürün gerekli' der, finans 'neden bu kadar pahalı' diye sorar, üst yönetim ise 'almayınca ne olur' cümlesini bekler. İyi savunma marka ve modelle başlamaz; risk, değer ve toplam sahip olma maliyetiyle başlar. SIEM lisansı yalnız güvenlik ürün bedeli değildir; olayın erken görülmesi, denetimde kanıt üretimi ve SOC ekibinin zamanı demektir. Yedekleme yatırımı disk kapasitesi değil RPO ve RTO vaadidir. Bulut maliyeti yalnız sanal makine faturası değil hız, esneklik, izleme, egress, yönetilen servis ve insan emeği toplamıdır. Bazen ucuz görünen çözüm yıllarca bakım borcu üretir; bazen pahalı görünen yönetilen servis küçük ekibi büyük yükten kurtarır. Teknik lider bütçe isterken 'bunu almalıyız' demez; 'bu riski şu kadar azaltır, bu hizmeti şu kadar korur, alternatifi şudur, almamanın bedeli budur' der.",
  "liderlik-kriz-gelecek-6": "Kriz odasında ilk düşman teknik hata değil, dağınıklıktır. Herkes aynı anda konuşursa gerçek bilgi ile varsayım birbirine karışır. Bu yüzden iyi kriz yönetimi, ilk dakikada düzen kurar: tek olay kaydı, tek iletişim kanalı, net roller, periyodik durum güncellemesi ve karar zaman çizelgesi. Bir kesintide üç ayrı ekip kendi sohbet grubunda çözüm arıyordu; biri veritabanına bakıyor, biri firewall kuralını tartışıyor, biri kullanıcı mesajı hazırlıyordu. Sorun çözüldüğünde bile kim neyi ne zaman yaptığı net değildi. Sonraki olayda incident commander rolü tanımlandı, teknik kanal ile yönetim kanalı ayrıldı, her karar dakika dakika yazıldı. Kriz kısalmadı belki ama sis azaldı. Teknik liderin değeri burada görünür: çözümü tek başına bulmasa bile çözümün bulunabileceği sakin alanı kurar. Mülakatta kriz anlatırken kahramanlık değil ritim anlat; triage, etki ölçümü, sorumluluk, iletişim ve postmortem sırasını göster.",
  "liderlik-kriz-gelecek-7": "Veritabanı kilidi olayı teknik olarak küçük görünür ama kurumun sinir sistemine dokunur. Lock bekleyen transaction, kullanıcının dönmeyen ekranı; dolan connection pool, çağrı merkezinin artan telefonu; yanlış index, yöneticinin geciken raporu haline gelir. Bu yüzden lider veritabanı krizinde yalnız DBA'ya 'bakın' demekle yetinmez. Önce iş etkisini ayırır: ödeme mi durdu, başvuru mu bekliyor, rapor mu gecikti, veri kaybı ihtimali var mı? Sonra teknik kanıt istenir: aktif sorgular, lock tree, deadlock kayıtları, query plan, index kullanımı, transaction süresi, replication lag, CPU, I/O wait ve connection sayısı. Geçici çözüm ile kalıcı çözüm de ayrılmalıdır. Bugün uzun sorguyu kesmek gerekebilir; yarın read replica, veri ambarı, indeks tasarımı, rapor zamanlaması veya domain ayrımı gerekebilir. İyi lider veritabanını yalnız depolama kutusu değil, kurumun zamanını yöneten hassas bir sözleşme olarak görür.",
  "liderlik-kriz-gelecek-8": "SSL ve DNS krizleri, küçük görünen kayıtların büyük kapılar olduğunu öğretir. Sertifika zinciri bozulduğunda tarayıcı kullanıcıyı korumak için kapıyı kapatır; uygulama içeride sapasağlam çalışsa bile dışarıdan güvenilmez görünür. DNS yanlışsa trafik sağlıklı sunucu yerine eski adrese gider; TTL yüksekse hatayı düzeltmek bile zaman alır; CDN veya load balancer kaydı hatalıysa problem yalnız tek domainde değil bütün entegrasyonlarda hissedilir. Bu yüzden bu başlıkta teknik terimler takvimle birlikte öğrenilmelidir: certificate authority, SAN, private key, chain, OCSP, A kaydı, CNAME, MX, TXT, TTL, resolver cache, authoritative DNS, CDN origin, load balancer listener. Bir kurumda sertifika yenileme işi tek kişinin takvimindeydi; kişi görev değiştirince takvim de onunla gitti. Kalıcı çözüm otomatik yenileme, sahiplik kaydı, bitiş alarmı ve değişiklik testiydi. Liderlik dersi basittir: kapı kayıtları sahipsiz bırakılmaz.",
  "liderlik-kriz-gelecek-10": "Yedekleme konusu çoğu kurumda fazla güvenli cümlelerle anlatılır: 'Yedek var.' Oysa gerçek soru daha serttir: Geri dönebiliyor musun? Hangi zamana dönebiliyorsun, ne kadar veri kaybediyorsun, dönüş ne kadar sürüyor, anahtarlar kimde, uygulama ayarları da yedekli mi, DNS nasıl dönecek, kullanıcıya ne söylenecek? Restore denenmemişse yedek inançtır, güvence değildir. Bir tatbikatta veritabanı yedeği başarıyla dönmüştü ama uygulamanın object storage izinleri ve secret değerleri eksikti; veri vardı, hizmet yoktu. Bu olay bize felaket kurtarmanın yalnız dosya değil bağımlılık haritası olduğunu gösterdi. RPO, RTO, immutable backup, offsite kopya, air-gap, restore testi, runbook, anahtar yönetimi, tatbikat ve iş birimi onayı aynı hikayenin parçalarıdır. Mülakatta bu konuyu anlatırken 'yedek alırım' deme; restore provasını, veri tutarlılığını, hizmet doğrulamasını ve iletişim planını birlikte anlat.",
  "liderlik-kriz-gelecek-11": "Postmortem iyi yazılmazsa kriz kurumu eğitmeden geçip gider. Kötü rapor olayın üzerini örter: 'sistemsel hata', 'yoğunluk', 'beklenmeyen durum'. İyi rapor ise olayın saatini, belirtisini, etki alanını, kök nedenini, katkı yapan faktörleri ve kalıcı aksiyonu açık yazar. Suçlu aramayan kültür sorumluluk dağıtmaz; aksine gerçek sorumluluğu görünür kılar. Bir olayda diskin dolması yüzünden servis durmuştu. İlk bakışta basit kapasite hatasıydı; rapor derinleşince log rotasyonu eksik, alarm eşiği yanlış, sahiplik belirsiz, dashboard kimse tarafından izlenmiyor ve bakım penceresi tanımsız çıktı. Tek kök neden yerine bir neden zinciri vardı. Bu yüzden timeline, impact, root cause, contributing factors, detection gap, MTTR, action owner ve due date alanları raporda görünmelidir. Yönetici için postmortem savunma metni değil yatırım rehberidir; hangi borç ödenmezse aynı olayın daha pahalı döneceğini gösterir.",
  "liderlik-kriz-gelecek-12": "Yapay zekânın ofise girişi, çoğu kurumda küçük kolaylıklarla başlar ve hızla yönetişim sorusuna dönüşür. Çalışan toplantı notunu özetletir, geliştirici kod önerisi alır, hukukçu sözleşme taslağına baktırır, çağrı merkezi temsilcisi yanıt önerisi üretir. İlk gün verimlilik konuşulur; ikinci gün veri sınırı, üçüncü gün hatalı cevap, dördüncü gün denetim izi. Teknik lider burada iki uçtan da kaçınmalıdır: kör yasak kurumu gölge kullanıma iter, kontrolsüz serbestlik ise veri sızıntısı ve yanlış karar riski doğurur. Kurumsal yapay zekâ kullanımında veri sınıflandırması, model sağlayıcısı, log politikası, prompt güvenliği, insan onayı, telif, kaynak gösterme, eval seti ve kullanıcı eğitimi birlikte tasarlanır. Bir iç asistan yapılacaksa kullanıcı hangi belgeye yetkiliyse model de ancak o belgeyi görebilmelidir. Liderlik dersi nettir: yapay zekâ araç değil, yeni bir çalışma biçimidir; çalışma biçimi de politika, ölçüm ve sorumluluk ister.",
  "liderlik-kriz-gelecek-13": "GPU ve enerji konusu yapay zekânın en fiziksel yüzüdür. Model ekranda saniyeler içinde cevap verirken arkada güç kabini, soğutma, raf yoğunluğu, ağ bant genişliği, veri yolu, depolama ve tedarik süresi konuşur. Demo ortamında beş kullanıcıyla çalışan bir model, bin kullanıcıya açıldığında inference maliyeti, latency ve kapasite kuyruğu üretir. Burada teknik liderin görevi heyecanı öldürmek değil, sürdürülebilir hale getirmektir. Her problem en büyük modeli istemez; bazen daha küçük model, doğru RAG, cache, batching, quantization, distillation veya görev ayrımı maliyeti ciddi azaltır. GPU utilization düşükse pahalı donanım boş bekler; batching yanlışsa latency artar; veri merkezi soğutması yetersizse kapasite kağıt üzerinde kalır; elektrik ve tedarik planı yoksa strateji slaytta güzel durur ama üretimde aksar. Mülakatta bu başlık gelirse GPU'yu yalnız ekran kartı değil kapasite, enerji, maliyet ve hizmet seviyesi meselesi olarak anlat.",
  "liderlik-kriz-gelecek-14": "Dijital egemenlik bazen büyük politik cümlelerle anlatılır ama kurum masasındaki karşılığı çok somuttur. Veri nerede duruyor, hangi hukuka tabi, hangi sağlayıcının sözleşmesine bağlı, çıkmak istersek nasıl çıkacağız, açık standart kullanıyor muyuz, kritik sistemin yedeği başka bölgede mi, tedarik zinciri kırılırsa ne olur? Bulut, lisans, açık kaynak, GPU tedariği, kimlik sağlayıcısı ve veri yerleşimi aynı stratejik resmin parçalarıdır. Bir kurum düşük maliyetli görünen bir servise kritik iş akışını bağladı; sonra veri taşıma maliyeti, API bağımlılığı ve sözleşme çıkış koşulları konuşulunca ucuz kararın hareket alanını daralttığı görüldü. Teknik lider vendor lock-in, exit plan, portability, data residency, encryption key ownership, açık standart, çoklu bölge ve kritik envanter kavramlarını bu yüzden bilmelidir. Egemenlik her şeyi içeride yapmak değildir; neyi dışarı aldığını, hangi şartla aldığını ve yarın nasıl geri dönebileceğini bilmektir.",
  "liderlik-kriz-gelecek-15": "Üst düzey BT yöneticiliğine giden rota, her teknolojinin en derin uzmanı olmakla değil, her uzmanlıkla düzgün konuşacak temel ve yargı gücü kazanmakla ilerler. Bir gün Kubernetes rollout sorarsın, ertesi gün KVKK riskini tartışırsın, başka gün bütçe komitesinde bulut maliyetini savunursun, sonra yapay zekâ pilotunun veri sınırını çizersin. Bu genişlik dağınıklık olmamalıdır; düzenli öğrenme sistemi ister. Her ay bir teknik konu, bir mimari vaka, bir kriz raporu, bir yönetim pratiği seçmek bu yüzden işe yarar. Örneğin bir ay load balancer ve TLS, yanında bir sertifika krizi postmortem'i; bir ay PostgreSQL transaction, yanında veri ambarı mimarisi; bir ay RAG, yanında LLM güvenliği; bir ay bütçe savunması, yanında tedarikçi sözleşmesi oku. Zamanla bilgi ezber olmaktan çıkar, sezgiye dönüşür. İyi lider her şeyi bilmez; ama hangi sorunun hangi masada, hangi kanıtla ve hangi risk diliyle konuşulacağını bilir."
};

function articleWordCount(text) {
  return text.replace(/<[^>]*>/g, " ").trim().split(/\s+/).filter(Boolean).length;
}

function editorialDepthForShortArticle(category, chapter, text) {
  if (articleWordCount(text) >= 700) return "";
  const title = cleanTitle(chapter);
  const topic = firstPhrase(chapter.title);
  const terms = detectTerms(`${chapter.title} ${text}`).slice(0, 6);
  const termLine = terms.length
    ? `${terms.map((term) => `${repairMojibake(term)}, ${repairMojibake(glossary[term])}`).join("; ")}.`
    : `Bu başlıkta önce kavramın görevi, sonra bağlı olduğu sistem, sonra bozulduğunda bıraktığı iz okunur.`;
  const sceneByMode = {
    systems: `Bu konuyu sahada düşünürken gözümün önüne çoğu zaman gece yarısı açılmış bir operasyon ekranı gelir. Bir tarafta CPU, RAM, disk, port, DNS, servis veya log gibi teknik işaretler vardır; diğer tarafta bekleyen kullanıcı, duran rapor ve cevap isteyen yönetici. ${topic} ancak bu iki taraf aynı olayın parçaları olarak görülünce gerçek anlamını kazanır.`,
    software: `Bu başlığı bir kod editörünün başında değil, canlı sisteme giden küçük bir değişikliğin etrafında düşünmek daha öğreticidir. Değişken, fonksiyon, sınıf, JSON, API, SQL veya test dediğimiz şeyler yalnız sözdizimi değildir; yanlış kurulduğunda kullanıcının gördüğü hata, loglarda beliren iz ve veritabanında kalan kayıt haline gelir.`,
    ai: `Yapay zekâ tarafında ${topic} parlak bir demo cümlesiyle değil, veriyle başlayan ve canlı kullanımda ölçülen bir ürün hikayesiyle anlaşılır. Model, token, embedding, RAG, eval, guardrail veya tool call dediğimiz kavramlar ancak kaynak, maliyet, güvenlik ve kullanıcı beklentisiyle birlikte okunursa değer üretir.`,
    security: `Güvenlikte ${topic} bir ürün kutusu gibi değil, olay anında sorulan soğukkanlı sorular gibi düşünülmelidir. Kim erişti, hangi yetkiyle erişti, hangi veri etkilendi, hangi log bunu kanıtlıyor, hangi kontrol yayılımı durdurdu? Bu sorular yoksa en pahalı güvenlik aracı bile yalnız ışıklı bir pano olur.`,
    architecture: `Büyük mimarilerde ${topic} ekrandaki tek işlemin arkasına saklanan kalabalığı görünür yapar. Kullanıcı tek düğmeye basar; arkada kimlik, API, cache, kuyruk, veritabanı, entegrasyon, log, monitoring ve hata telafisi birlikte çalışır. Mimari okuryazarlık bu kalabalığın hangi sırayla konuştuğunu duymaktır.`,
    project: `Kurumsal projelerde ${topic} çoğu zaman teknik cümleden önce insan ve belge cümlesiyle başlar. Talep sahibi faydayı, teknik ekip sınırı, satın alma sözleşmeyi, hukuk veri riskini, yönetim takvimi sorar. İyi proje yöneticisi bu dilleri aynı masada kaybolmadan buluşturur.`,
    leadership: `Liderlik tarafında ${topic} teknik bir ayrıntı gibi başlayıp karar, bütçe, sorumluluk ve iletişim meselesine dönüşür. Liderin işi her komutu bilmek değil, hangi sinyalin kritik olduğunu, hangi uzmanın konuşması gerektiğini ve kararın hangi kanıtla alınacağını bilmektir.`,
    interview: `Mülakat hazırlığında ${topic} ezberlenmiş cevapla değil, küçük bir olay hikayesiyle kalıcı olur. Görüşmeci çoğu zaman yalnız doğru tanımı değil, adayın problemi nasıl parçaladığını, riski nasıl gördüğünü ve bilmediği yeri nasıl dürüstçe sınırladığını dinler.`
  };
  const scene = sceneByMode[category.mode] || sceneByMode.systems;
  const practical = `Bu yüzden okurken kendine üç soru sor: Bu kavram hangi işi yapıyor, hangi parçaya bağımlı çalışıyor, bozulduğunda kullanıcı bunu nasıl hissediyor? ${termLine} Bu terimler sözlük maddesi gibi ezberlenirse çabuk unutulur; bir olayın içine yerleştirilirse zihinde yer eder. Bir port yalnız sayı değildir, uygulamanın kapısıdır; bir transaction yalnız veritabanı komutu değildir, kurumun resmi kaydına verdiği tutarlılık sözüdür; bir SLA yalnız sözleşme satırı değildir, kullanıcının bekleyebileceği hizmet seviyesidir.`;
  const fieldStory = `Sahada en öğretici anlar genellikle her şeyin yarım çalıştığı anlardır. Sistem tamamen çökmez, ama yavaşlar; hata sürekli değil, aralıklı gelir; tedarikçi kendi tarafının sağlıklı olduğunu söyler; kullanıcı aynı işlemi tekrar deneyince bazen başarılı olur. İşte ${title} böyle anlarda kuru tanımdan çıkar. İyi uzman belirtileri sıraya dizer, varsayımı kanıttan ayırır, log ve metrikle konuşur, geçici rahatlatma ile kalıcı çözümü birbirine karıştırmaz.`;
  const managerView = `Yönetici seviyesinde bu başlık ayrıca maliyet, sahiplik ve risk dili ister. Hangi ekip işletecek, alarmı kim görecek, bakım penceresi ne zaman, değişiklik geri alınabiliyor mu, denetçi kanıt istediğinde hangi kayıt gösterilecek? Büyük kurumlarda iyi teknik karar, yalnız çalıştığı için değil, sahiplenildiği, ölçüldüğü ve gerektiğinde açıklanabildiği için değerlidir.`;
  const diagnosticView = `Teşhis pratiği için küçük bir sıra kurmak faydalıdır. Önce belirtinin nerede görüldüğünü yaz: kullanıcı ekranı mı, API cevabı mı, log mu, metrik mi, maliyet raporu mu? Sonra kapsamı daralt: tek kullanıcı mı, tek bölge mi, tek servis mi, tüm kurum mu? Ardından son değişikliği sor: deploy, konfigürasyon, sertifika, yetki, ağ kuralı, veri şeması veya tedarikçi tarafında bir hareket var mı? Bu sıra, karmaşık başlığı panik anında bile okunabilir hale getirir.`;
  const failureView = `Sık yapılan hata, kavramı yalnız iyi çalıştığı haliyle öğrenmektir. Oysa gerçek uzmanlık, kavramın kötü kurulduğunda nasıl zarar verdiğini de bilmektir. Cache hız kazandırır ama invalidation unutulursa eski veri üretir; yetki kontrolü güvenlik sağlar ama rol tasarımı kötü ise iş akışını kilitler; otomasyon hız getirir ama geri dönüş yolu yoksa küçük hata büyük kesintiye döner. ${title} başlığını okurken her teknik terimin yanına bir de 'yanlış kurulursa ne olur?' sorusunu koymak gerekir.`;
  const practiceView = `Bu sayfayı çalışırken kendine küçük bir vaka yaz: kurumda bu konu yüzünden bir sorun çıkmış gibi düşün, ilk alarmı, kullanıcı etkisini, bakacağın üç kanıtı, geçici aksiyonu ve kalıcı düzeltmeyi sırala. Sonra aynı vakayı iki dille anlat: teknik ekibe ayrıntılı, üst yönetime sade. Böyle çalışıldığında bilgi yalnız okunmuş olmaz; mülakatta, kriz odasında ve proje toplantısında kullanılabilir bir refleks haline gelir.`;
  const closingView = `Sonunda ölçü basittir: Bu başlık bittikten sonra okur yalnız terimin adını değil, o terimin gerçek bir kurumda hangi kararı etkilediğini söyleyebilmelidir. Eğer bir kavram bütçe, güvenlik, performans, kullanıcı deneyimi, denetim veya ekip sorumluluğuyla bağ kurmuyorsa anlatım henüz tamamlanmamıştır.`;
  const interviewView = `Mülakatta bu sayfayı cevaba çevirmek istersen önce sade tanım kur, sonra küçük bir gerçek hayat senaryosu anlat, ardından risk ve ölçüm ekle. 'Bunu kullanırım' demek yerine 'şu durumda kullanırım, şu metriğe bakarım, şu hatada geri dönerim, şu güvenlik sınırını koyarım' dediğinde cevap olgunlaşır. Okurun kazanması gereken refleks budur: terimi değil, terimin sistem içindeki davranışını anlatmak.`;
  return `${scene} ${practical} ${fieldStory} ${managerView} ${diagnosticView} ${failureView} ${practiceView} ${closingView} ${interviewView}`;
}

function manualArticle(category, chapter) {
  const article = manualArticles[chapter.id];
  if (!article) {
    return [
      paragraph(`Bu bölüm için bağımsız metin henüz yazılmadı: ${cleanTitle(chapter)}.`),
      paragraph("Eski şablon anlatımı özellikle devre dışı bırakıldı; böylece eksik sayfalar gözden kaçmaz.")
    ].join("");
  }
  if (article.every((block) => typeof block === "string")) {
    const baseText = article.join(" ");
    const supplement = articleSupplements[chapter.id] ? ` ${articleSupplements[chapter.id]}` : "";
    const enrichedText = `${baseText}${supplement}`;
    const depth = editorialDepthForShortArticle(category, chapter, enrichedText);
    return `<p class="long-read">${enrichedText}</p>${depth ? `<p class="long-read long-read-continuation">${depth}</p>` : ""}`;
  }
  return article.map((block) => {
    if (typeof block === "string") return paragraph(block);
    if (block.type === "heading") return `<h2>${escapeHtml(block.text)}</h2>`;
    if (block.type === "list") return `<ul>${block.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
    return paragraph(block.text);
  }).join("");
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

function conceptFocus(category) {
  return {
    systems: {
      lens: "bilgisayarın görünmeyen zemini",
      actor: "sistem ekibi",
      evidence: ["log", "metrik", "servis durumu", "kullanıcı belirtisi"],
      warning: "Sorunu tek parçaya yıkmak kolaydır; sağlam okuma, donanım, işletim sistemi, ağ ve izin katmanlarını birlikte düşünür."
    },
    software: {
      lens: "problemi bilgisayarın takip edeceği açık adıma çevirme becerisi",
      actor: "yazılım ekibi",
      evidence: ["test sonucu", "API cevabı", "hata logu", "veri kaydı"],
      warning: "Dil adı tek başına değer üretmez; değer, doğru akış, okunur kod, güvenilir veri ve bakım kolaylığından gelir."
    },
    ai: {
      lens: "veriden faydalı ve denetlenebilir cevap üretme düzeni",
      actor: "veri ve ürün ekibi",
      evidence: ["kaynak belge", "değerlendirme sonucu", "kullanıcı geri bildirimi", "maliyet kaydı"],
      warning: "Modelin akıcı konuşması doğru bildiği anlamına gelmez; kaynak, sınır, ölçüm ve insan onayı birlikte kurulmalıdır."
    },
    security: {
      lens: "görünür riskleri kanıtla yönetme disiplini",
      actor: "güvenlik ekibi",
      evidence: ["erişim izi", "alarm korelasyonu", "varlık envanteri", "olay zaman çizelgesi"],
      warning: "Güvenlik ürün adıyla değil; doğru yetki, doğru sınır, doğru kayıt ve prova edilmiş müdahale ile çalışır."
    },
    architecture: {
      lens: "ekrandaki tek işlemin arkasındaki hizmet zincirini okuma becerisi",
      actor: "mimari karar masası",
      evidence: ["ana kayıt", "trace", "mutabakat", "SLA etkisi"],
      warning: "Büyük sistemlerde cache, kuyruk, veritabanı ve entegrasyon sınırı karışırsa küçük hata büyük etkiye dönüşür."
    },
    project: {
      lens: "teknik işi ölçülebilir değer, sorumluluk ve kabul kanıtına bağlama düzeni",
      actor: "proje ekibi",
      evidence: ["kabul kriteri", "karar kaydı", "risk listesi", "teslim tutanağı"],
      warning: "Kapsam ve kabul baştan netleşmezse teknik tartışma son gün idari krize dönüşür."
    },
    leadership: {
      lens: "teknik ayrıntıyı karar, insan, bütçe ve risk diline çevirebilme yeteneği",
      actor: "teknik lider",
      evidence: ["etki özeti", "seçenek analizi", "aksiyon sahibi", "zaman çizelgesi"],
      warning: "Liderlik her ayrıntıyı ezberlemek değil, doğru soruyu doğru kanıtla sordurabilmektir."
    },
    interview: {
      lens: "ezber yerine düşünme düzenini gösterme pratiği",
      actor: "aday",
      evidence: ["tanım", "küçük vaka", "risk", "ölçüm"],
      warning: "İyi cevap teknoloji adı saymaz; kavramı akış, risk ve kanıtla birlikte anlatır."
    }
  }[category.mode] || {
    lens: "teknolojiyi gerçek iş akışı içinde okuma becerisi",
    actor: "teknik ekip",
    evidence: ["kanıt", "ölçüm", "karar kaydı", "kullanıcı etkisi"],
    warning: "Kavram bağlamından koparsa yanlış teknoloji doğru sorun sanılır."
  };
}

function conceptArticle(category, chapter) {
  const title = chapter.title;
  const topic = firstPhrase(title);
  const profile = conceptFocus(category);
  const detected = detectTerms(`${title} ${category.summary}`).slice(0, 6);
  const terms = detected.length ? detected : ["API", "Log", "Test", "Risk"].filter((term) => glossary[term]);
  const termCards = terms
    .map((term) => `<li><strong>${escapeHtml(term)}</strong><span>${escapeHtml(glossary[term] || "Bu kavram, sistemin görevini ve sınırını anlamaya yardım eder.")}</span></li>`)
    .join("");
  const evidence = profile.evidence.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
  return `
    <h2>Bu Başlıkta Asıl Mesele</h2>
    <p>${escapeHtml(title)} tek başına bir ürün, komut ya da kütüphane dersi değildir. Bu sayfada amaç, ${escapeHtml(topic)} fikrini ${escapeHtml(profile.lens)} olarak okumaktır. Okur bu başlığı bitirdiğinde ayrıntılı uzmanlık kazanmış gibi davranmayacak; ama kavramın nerede işe yaradığını, hangi soruyu doğurduğunu ve hangi durumda risk oluşturduğunu ayırt edecektir.</p>
    <p>Örneğin Python, Docker, Kubernetes, RAG, IAM ya da SQL gibi adlar geçtiğinde bunlar uzun bir kursun konusu yapılmaz. Her biri kısa bir işaret olarak ele alınır: hangi problemi kolaylaştırır, hangi yeni sorumluluğu getirir, yanlış yerde kullanılırsa neyi bozar? Temel bilgisayar okuryazarlığı tam burada başlar.</p>

    <h2>Kavram Haritası</h2>
    <p>${escapeHtml(profile.actor)} bu konuyu masaya aldığında önce tanımı değil, bağlamı netleştirir. Kullanıcı ne yapmaya çalışıyor, veri nerede duruyor, sistem hangi parçaya bağlı, hata olduğunda kimin işi aksıyor? Bu sorular kavramı ezber olmaktan çıkarır.</p>
    <ul class="concept-list">${termCards}</ul>

    <h2>Sahada Nasıl Okunur?</h2>
    <p>Sağlam okuma küçük bir olayla yapılır. Bir işlem yavaşlar, bir ekran hata verir, bir rapor yanlış sayı gösterir, bir kullanıcı yetkisiz alana erişemez ya da bir model kaynaksız cevap üretir. Bu anda ilk refleks araç adı söylemek değil; belirtiyi, kapsamı, son değişikliği ve kanıtı sıraya koymaktır.</p>
    <p>${escapeHtml(profile.warning)} Bu yüzden bu bölümde derin ürün ayrıntısına gömülmeden temel mantık korunur: görev nedir, sınır nedir, risk nedir, kanıt nedir?</p>

    <h2>Bakılacak Kanıtlar</h2>
    <ul class="evidence-list">${evidence}</ul>

    <h2>Akılda Kalacak Cevap</h2>
    <p>${escapeHtml(topic)} anlatılırken iyi cevap şu cümle düzenini izler: önce sade tanım, sonra küçük örnek, sonra risk, sonra nasıl doğrulanacağı. Böyle anlatıldığında kişi teknolojiyi ezberlemiş gibi değil, sistemi okuyabiliyormuş gibi konuşur.</p>
  `;
}

function contentFor(category, chapter) {
  return conceptArticle(category, chapter);
}

function svgFigure(kind, caption, svg) {
  return `
    <figure class="visual-canvas ${kind}">
      ${svg}
      <figcaption>${caption}</figcaption>
    </figure>
  `;
}

function svgLabel(text) {
  return repairMojibake(String(text))
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function repairMojibake(text) {
  return String(text)
    .replace(/Ã‡/g, "Ç")
    .replace(/Ã§/g, "ç")
    .replace(/ÄŸ/g, "ğ")
    .replace(/Äž/g, "Ğ")
    .replace(/Ä±/g, "ı")
    .replace(/Ä°/g, "İ")
    .replace(/Ã¶/g, "ö")
    .replace(/Ã–/g, "Ö")
    .replace(/ÅŸ/g, "ş")
    .replace(/Åž/g, "Ş")
    .replace(/Å\u009F/g, "ş")
    .replace(/Å\u009E/g, "Ş")
    .replace(/Ã¼/g, "ü")
    .replace(/Ãœ/g, "Ü")
    .replace(/Ã¢/g, "â")
    .replace(/â€™/g, "'")
    .replace(/â€œ/g, "\"")
    .replace(/â€/g, "\"")
    .replace(/â€“/g, "-")
    .replace(/â€”/g, "-");
}

function customVisual(kind, caption, svg) {
  return svgFigure(`visual-custom ${kind}`, caption, svg);
}

function networkTopologyVisual() {
  return customVisual("network-topology", "Bir web isteği, istemcinin yerel ağından çıkar; gateway, NAT ve firewall kararlarından geçer; internette doğru sunucunun doğru portuna ulaşır.", `
    <svg viewBox="0 0 900 420" role="img" aria-label="Subnet, gateway, firewall, routing ve port ilişkisini gösteren ağ topolojisi">
      <defs>
        <marker id="arrow-net" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
          <path d="M0 0 L10 5 L0 10 Z" fill="currentColor"></path>
        </marker>
      </defs>
      <rect class="v-zone" x="34" y="46" width="342" height="232" rx="18"/>
      <text x="58" y="78">Yerel ağ: 192.168.1.0/24</text>
      <text class="v-small" x="58" y="102">Aynı subnet içindeki cihazlar önce birbirini yerelde arar.</text>

      <g class="v-box">
        <rect x="64" y="140" width="118" height="76" rx="10"/>
        <text text-anchor="middle" x="123" y="169">İstemci</text>
        <text class="v-small" text-anchor="middle" x="123" y="194">192.168.1.24</text>
      </g>
      <g class="v-box">
        <rect x="228" y="140" width="112" height="76" rx="10"/>
        <text text-anchor="middle" x="284" y="169">Switch</text>
        <text class="v-small" text-anchor="middle" x="284" y="194">yerel dağıtım</text>
      </g>
      <g class="v-box">
        <rect x="418" y="118" width="132" height="100" rx="12"/>
        <text text-anchor="middle" x="484" y="150">Gateway</text>
        <text class="v-small" text-anchor="middle" x="484" y="176">Router</text>
        <text class="v-small" text-anchor="middle" x="484" y="198">192.168.1.1</text>
      </g>
      <g class="v-box">
        <rect x="596" y="118" width="128" height="100" rx="12"/>
        <text text-anchor="middle" x="660" y="150">Firewall</text>
        <text class="v-small" text-anchor="middle" x="660" y="176">NAT + kural</text>
        <text class="v-small" text-anchor="middle" x="660" y="198">443 izinli mi?</text>
      </g>
      <path class="v-cloud" d="M757 162 C755 126 790 106 818 124 C830 92 882 102 879 145 C910 152 905 205 868 208 L786 208 C742 207 729 174 757 162 Z"/>
      <text text-anchor="middle" x="821" y="163">İnternet</text>
      <text class="v-small" text-anchor="middle" x="821" y="187">route seçimi</text>

      <g class="v-box">
        <rect x="704" y="270" width="152" height="82" rx="12"/>
        <text text-anchor="middle" x="780" y="300">Web sunucusu</text>
        <text class="v-small" text-anchor="middle" x="780" y="324">203.0.113.10</text>
        <text class="v-small" text-anchor="middle" x="780" y="344">TCP 443</text>
      </g>

      <path class="v-line solid" marker-end="url(#arrow-net)" d="M182 178 H228"/>
      <path class="v-line solid" marker-end="url(#arrow-net)" d="M340 178 C370 178 386 168 418 168"/>
      <path class="v-line solid" marker-end="url(#arrow-net)" d="M550 168 H596"/>
      <path class="v-line solid" marker-end="url(#arrow-net)" d="M724 168 C742 168 746 166 758 164"/>
      <path class="v-line solid" marker-end="url(#arrow-net)" d="M825 208 C827 245 810 260 780 270"/>
      <path class="v-line return" marker-end="url(#arrow-net)" d="M704 330 C520 384 220 350 122 216"/>

      <g class="v-callout">
        <rect x="58" y="304" width="176" height="64" rx="10"/>
        <text x="76" y="330">Subnet</text>
        <text class="v-small" x="76" y="352">Aynı mahalle mi?</text>
      </g>
      <g class="v-callout">
        <rect x="258" y="304" width="176" height="64" rx="10"/>
        <text x="276" y="330">Gateway</text>
        <text class="v-small" x="276" y="352">Mahalleden çıkış kapısı.</text>
      </g>
      <g class="v-callout">
        <rect x="458" y="304" width="176" height="64" rx="10"/>
        <text x="476" y="330">Firewall</text>
        <text class="v-small" x="476" y="352">Kim, nereye, hangi port?</text>
      </g>
      <text class="v-small" text-anchor="middle" x="450" y="394">Sorun ararken “internet yok” deme; IP, gateway, DNS, firewall, route ve port sırasını takip et.</text>
    </svg>`);
}

function hardwareMotherboardVisual() {
  return customVisual("hardware-board", "Donanımda performans tek bir parçanın hızı değil; CPU, RAM, disk, ekran kartı, ağ kartı ve güç hattının aynı anakart üzerinde uyumlu çalışmasıdır.", `
    <svg viewBox="0 0 900 420" role="img" aria-label="Anakart üzerinde CPU, RAM, NVMe, GPU, ağ kartı ve veri yolları">
      <defs>
        <marker id="arrow-hw" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
          <path d="M0 0 L10 5 L0 10 Z" fill="currentColor"></path>
        </marker>
      </defs>
      <rect class="v-board" x="72" y="38" width="756" height="308" rx="24"/>
      <text x="98" y="74">Anakart: şehir planı ve veri yolları</text>
      <g class="v-chip">
        <rect x="392" y="118" width="128" height="104" rx="14"/>
        <text text-anchor="middle" x="456" y="158">CPU</text>
        <text class="v-small" text-anchor="middle" x="456" y="184">komut yürütür</text>
      </g>
      <g class="v-slot">
        <rect x="590" y="86" width="32" height="172" rx="8"/>
        <rect x="636" y="86" width="32" height="172" rx="8"/>
        <rect x="682" y="86" width="32" height="172" rx="8"/>
        <text x="586" y="286">RAM slotları</text>
        <text class="v-small" x="586" y="308">çalışma masası</text>
      </g>
      <g class="v-chip">
        <rect x="180" y="126" width="120" height="78" rx="12"/>
        <text text-anchor="middle" x="240" y="158">NVMe / SSD</text>
        <text class="v-small" text-anchor="middle" x="240" y="184">kalıcı kayıt</text>
      </g>
      <g class="v-slot">
        <rect x="180" y="254" width="344" height="34" rx="8"/>
        <text text-anchor="middle" x="352" y="278">PCIe veri yolu: GPU, hızlı kartlar, genişleme</text>
      </g>
      <g class="v-chip">
        <rect x="594" y="304" width="128" height="56" rx="10"/>
        <text text-anchor="middle" x="658" y="327">NIC</text>
        <text class="v-small" text-anchor="middle" x="658" y="348">ağ çıkışı</text>
      </g>
      <g class="v-chip">
        <rect x="92" y="260" width="62" height="74" rx="10"/>
        <text text-anchor="middle" x="123" y="292">PSU</text>
        <text class="v-small" text-anchor="middle" x="123" y="316">güç</text>
      </g>
      <path class="v-line solid" marker-end="url(#arrow-hw)" d="M520 164 H590"/>
      <path class="v-line solid" marker-end="url(#arrow-hw)" d="M392 170 H300"/>
      <path class="v-line solid" marker-end="url(#arrow-hw)" d="M456 222 V254"/>
      <path class="v-line solid" marker-end="url(#arrow-hw)" d="M520 196 C610 228 660 252 658 304"/>
      <path class="v-line power" d="M154 296 C250 342 568 380 658 360"/>
      <text class="v-small" x="316" y="112">Darboğaz çoğu zaman parçanın kendisinde değil, parçaya giden yoldadır.</text>
      <text class="v-small" text-anchor="middle" x="450" y="392">CPU hesaplar; RAM eldeki işi tutar; disk saklar; anakart ve veri yolları hepsinin birbirine ne kadar hızlı konuşacağını belirler.</text>
    </svg>`);
}

function dnsHttpsVisual() {
  return customVisual("dns-https", "Tarayıcıda adres yazınca tek olay yaşanmaz; DNS adı IP’ye çevirir, TCP yolu açar, TLS güveni kurar, HTTP asıl isteği taşır.", `
    <svg viewBox="0 0 900 420" role="img" aria-label="DNS, TCP, TLS ve HTTP web isteği sırası">
      <defs>
        <marker id="arrow-web" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="currentColor"></path></marker>
      </defs>
      <g class="v-lane"><line x1="112" y1="82" x2="112" y2="332"/><text text-anchor="middle" x="112" y="58">Tarayıcı</text></g>
      <g class="v-lane"><line x1="310" y1="82" x2="310" y2="332"/><text text-anchor="middle" x="310" y="58">DNS Resolver</text></g>
      <g class="v-lane"><line x1="548" y1="82" x2="548" y2="332"/><text text-anchor="middle" x="548" y="58">Sunucu</text></g>
      <g class="v-lane"><line x1="748" y1="82" x2="748" y2="332"/><text text-anchor="middle" x="748" y="58">Sertifika Zinciri</text></g>
      <path class="v-line solid" marker-end="url(#arrow-web)" d="M112 104 H310"/>
      <text class="v-small" x="132" y="94">1. example.com kim?</text>
      <path class="v-line return" marker-end="url(#arrow-web)" d="M310 146 H112"/>
      <text class="v-small" x="156" y="138">2. 203.0.113.10</text>
      <path class="v-line solid" marker-end="url(#arrow-web)" d="M112 188 H548"/>
      <text class="v-small" x="248" y="178">3. TCP handshake: SYN, SYN/ACK, ACK</text>
      <path class="v-line solid" marker-end="url(#arrow-web)" d="M112 232 H548"/>
      <path class="v-line thin" marker-end="url(#arrow-web)" d="M548 224 H748"/>
      <text class="v-small" x="244" y="222">4. TLS: sertifika, anahtar değişimi, şifreli kanal</text>
      <path class="v-line solid" marker-end="url(#arrow-web)" d="M112 276 H548"/>
      <text class="v-small" x="248" y="266">5. HTTP GET /api/orders</text>
      <path class="v-line return" marker-end="url(#arrow-web)" d="M548 318 H112"/>
      <text class="v-small" x="264" y="310">6. 200 OK veya hatanın gerçek ipucu</text>
      <g class="v-callout"><rect x="626" y="114" width="196" height="70" rx="10"/><text x="646" y="142">HTTPS kilidi</text><text class="v-small" x="646" y="164">Sadece şifre değil, kimlik kanıtı.</text></g>
      <text class="v-small" text-anchor="middle" x="450" y="382">Sayfa açılmadığında uygulamadan önce DNS, TCP, TLS ve HTTP sırasını ayırmak teşhisi hızlandırır.</text>
    </svg>`);
}

function kubernetesVisual() {
  return customVisual("kubernetes-cluster", "Kubernetes, tek tek container başlatmaktan çok; trafiği, sağlığı, ölçeği, konfigürasyonu ve sürüm değişimini aynı cluster düzeninde yönetir.", `
    <svg viewBox="0 0 900 430" role="img" aria-label="Kubernetes cluster, ingress, service, deployment, pod ve node ilişkisi">
      <defs><marker id="arrow-k8s" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="currentColor"></path></marker></defs>
      <rect class="v-zone" x="248" y="46" width="604" height="308" rx="20"/>
      <text x="274" y="78">Kubernetes Cluster</text>
      <g class="v-box"><rect x="58" y="154" width="130" height="72" rx="12"/><text text-anchor="middle" x="123" y="184">Kullanıcı</text><text class="v-small" text-anchor="middle" x="123" y="206">HTTPS</text></g>
      <g class="v-box"><rect x="282" y="126" width="122" height="68" rx="10"/><text text-anchor="middle" x="343" y="154">Ingress</text><text class="v-small" text-anchor="middle" x="343" y="176">dış kapı</text></g>
      <g class="v-box"><rect x="444" y="126" width="122" height="68" rx="10"/><text text-anchor="middle" x="505" y="154">Service</text><text class="v-small" text-anchor="middle" x="505" y="176">sabit adres</text></g>
      <g class="v-box"><rect x="622" y="82" width="168" height="54" rx="10"/><text text-anchor="middle" x="706" y="115">Deployment</text></g>
      <rect class="v-zone inner" x="610" y="166" width="206" height="144" rx="14"/>
      <text x="632" y="194">Node A</text>
      <g class="v-pod"><rect x="634" y="216" width="70" height="48" rx="10"/><text text-anchor="middle" x="669" y="246">Pod</text></g>
      <g class="v-pod"><rect x="724" y="216" width="70" height="48" rx="10"/><text text-anchor="middle" x="759" y="246">Pod</text></g>
      <rect class="v-zone inner" x="366" y="232" width="188" height="88" rx="14"/>
      <text x="388" y="260">Node B</text>
      <g class="v-pod"><rect x="456" y="268" width="70" height="36" rx="9"/><text text-anchor="middle" x="491" y="292">Pod</text></g>
      <g class="v-callout"><rect x="278" y="240" width="126" height="66" rx="10"/><text x="296" y="266">ConfigMap</text><text class="v-small" x="296" y="288">ayar</text></g>
      <g class="v-callout"><rect x="278" y="316" width="126" height="54" rx="10"/><text x="296" y="348">Secret</text></g>
      <g class="v-callout"><rect x="610" y="326" width="206" height="54" rx="10"/><text x="632" y="358">HPA: yük artarsa pod çoğaltır</text></g>
      <path class="v-line solid" marker-end="url(#arrow-k8s)" d="M188 190 H282"/>
      <path class="v-line solid" marker-end="url(#arrow-k8s)" d="M404 160 H444"/>
      <path class="v-line solid" marker-end="url(#arrow-k8s)" d="M566 160 C604 170 622 196 650 216"/>
      <path class="v-line solid" marker-end="url(#arrow-k8s)" d="M566 170 C624 198 708 206 742 216"/>
      <path class="v-line thin" marker-end="url(#arrow-k8s)" d="M706 136 V216"/>
      <path class="v-line thin" marker-end="url(#arrow-k8s)" d="M404 272 H456"/>
      <text class="v-small" text-anchor="middle" x="450" y="402">Mülakatta “pod nedir?” sorusu aslında adresleme, sağlık kontrolü, rollout ve ölçek davranışını birlikte anlatmanı bekler.</text>
    </svg>`);
}

function securityZonesVisual() {
  return customVisual("security-zones", "Ağ güvenliği, tek büyük duvar değil; internetten veritabanına kadar her bölgede farklı güven, farklı kayıt ve farklı izin seviyesidir.", `
    <svg viewBox="0 0 900 420" role="img" aria-label="WAF, firewall, DMZ, uygulama subneti, veritabanı subneti ve SIEM ilişkisi">
      <defs><marker id="arrow-sec" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="currentColor"></path></marker></defs>
      <rect class="v-zone" x="42" y="70" width="150" height="212" rx="16"/><text text-anchor="middle" x="117" y="106">İnternet</text>
      <rect class="v-zone" x="226" y="70" width="156" height="212" rx="16"/><text text-anchor="middle" x="304" y="106">Edge</text>
      <rect class="v-zone" x="416" y="70" width="156" height="212" rx="16"/><text text-anchor="middle" x="494" y="106">DMZ</text>
      <rect class="v-zone" x="606" y="70" width="112" height="212" rx="16"/><text text-anchor="middle" x="662" y="106">App</text>
      <rect class="v-zone" x="748" y="70" width="112" height="212" rx="16"/><text text-anchor="middle" x="804" y="106">DB</text>
      <g class="v-box"><rect x="70" y="148" width="94" height="58" rx="10"/><text text-anchor="middle" x="117" y="182">Trafik</text></g>
      <g class="v-box"><rect x="252" y="126" width="104" height="50" rx="10"/><text text-anchor="middle" x="304" y="157">CDN/WAF</text></g>
      <g class="v-box"><rect x="252" y="204" width="104" height="50" rx="10"/><text text-anchor="middle" x="304" y="235">Firewall</text></g>
      <g class="v-box"><rect x="444" y="148" width="100" height="58" rx="10"/><text text-anchor="middle" x="494" y="181">Reverse Proxy</text></g>
      <g class="v-box"><rect x="622" y="148" width="80" height="58" rx="10"/><text text-anchor="middle" x="662" y="181">API</text></g>
      <g class="v-box"><rect x="764" y="148" width="80" height="58" rx="10"/><text text-anchor="middle" x="804" y="181">DB</text></g>
      <path class="v-line solid" marker-end="url(#arrow-sec)" d="M164 176 H252"/>
      <path class="v-line solid" marker-end="url(#arrow-sec)" d="M356 176 H444"/>
      <path class="v-line solid" marker-end="url(#arrow-sec)" d="M544 176 H622"/>
      <path class="v-line solid" marker-end="url(#arrow-sec)" d="M702 176 H764"/>
      <path class="v-line danger" d="M117 206 C168 258 234 270 304 254"/>
      <text class="v-small" x="232" y="300">WAF saldırı desenini, firewall bağlantı kuralını, segmentasyon ise hasarın yayılmasını sınırlar.</text>
      <g class="v-callout"><rect x="226" y="318" width="188" height="58" rx="10"/><text x="246" y="344">IDS/IPS sensörü</text><text class="v-small" x="246" y="364">Şüpheli davranışı dinler.</text></g>
      <g class="v-callout"><rect x="452" y="318" width="188" height="58" rx="10"/><text x="472" y="344">SIEM</text><text class="v-small" x="472" y="364">Logları olay hikayesine çevirir.</text></g>
      <path class="v-line thin" marker-end="url(#arrow-sec)" d="M494 206 C500 278 514 300 546 318"/>
      <path class="v-line thin" marker-end="url(#arrow-sec)" d="M304 254 C316 286 330 304 320 318"/>
      <text class="v-small" text-anchor="middle" x="450" y="402">İyi güvenlik cevabı “firewall var” demez; hangi bölgede hangi izin, hangi log ve hangi kaçış planı var diye anlatır.</text>
    </svg>`);
}

function ddosVisual() {
  return customVisual("ddos-defense", "DDoS savunmasında amaç saldırgan trafiği origin sunucuya varmadan seyreltmek, gerçek kullanıcı yolunu açık tutmak ve iletişimi teknik aksiyonla birlikte yürütmektir.", `
    <svg viewBox="0 0 900 410" role="img" aria-label="DDoS saldırısı, CDN temizleme, rate limit, WAF ve origin koruması">
      <defs><marker id="arrow-ddos" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="currentColor"></path></marker></defs>
      <g class="v-node"><circle cx="82" cy="92" r="18"/><text x="118" y="98">Bot ağı</text></g>
      <g class="v-node"><circle cx="76" cy="158" r="15"/><text x="112" y="164">Sahte istek</text></g>
      <g class="v-node"><circle cx="100" cy="224" r="17"/><text x="136" y="230">Reflection</text></g>
      <g class="v-node legit"><circle cx="96" cy="318" r="16"/><text x="132" y="324">Gerçek kullanıcı</text></g>
      <g class="v-box"><rect x="300" y="112" width="156" height="116" rx="16"/><text text-anchor="middle" x="378" y="148">CDN Scrubbing</text><text class="v-small" text-anchor="middle" x="378" y="174">trafik temizleme</text><text class="v-small" text-anchor="middle" x="378" y="198">coğrafi yayılım</text></g>
      <g class="v-box"><rect x="514" y="112" width="138" height="116" rx="16"/><text text-anchor="middle" x="583" y="148">WAF</text><text class="v-small" text-anchor="middle" x="583" y="174">rate limit</text><text class="v-small" text-anchor="middle" x="583" y="198">bot kuralı</text></g>
      <g class="v-box"><rect x="718" y="112" width="120" height="116" rx="16"/><text text-anchor="middle" x="778" y="148">Origin</text><text class="v-small" text-anchor="middle" x="778" y="174">API / Web</text><text class="v-small" text-anchor="middle" x="778" y="198">korunur</text></g>
      <path class="v-line danger" marker-end="url(#arrow-ddos)" d="M118 92 C186 92 230 126 300 142"/>
      <path class="v-line danger" marker-end="url(#arrow-ddos)" d="M112 158 C196 156 238 164 300 170"/>
      <path class="v-line danger" marker-end="url(#arrow-ddos)" d="M136 224 C210 228 242 208 300 196"/>
      <path class="v-line solid" marker-end="url(#arrow-ddos)" d="M456 170 H514"/>
      <path class="v-line solid" marker-end="url(#arrow-ddos)" d="M652 170 H718"/>
      <path class="v-line legit" marker-end="url(#arrow-ddos)" d="M112 318 C250 318 410 284 584 228"/>
      <g class="v-callout"><rect x="292" y="276" width="184" height="60" rx="10"/><text x="312" y="302">Ölçüm</text><text class="v-small" x="312" y="322">RPS, hata oranı, latency</text></g>
      <g class="v-callout"><rect x="520" y="276" width="220" height="60" rx="10"/><text x="540" y="302">Kriz iletişimi</text><text class="v-small" x="540" y="322">durum sayfası, paydaş, ISP</text></g>
      <text class="v-small" text-anchor="middle" x="450" y="382">Liderlik sorusu kapasiteden ibaret değildir: filtre nerede, origin nasıl saklanıyor, kim ne zaman bilgilendiriliyor?</text>
    </svg>`);
}

function publicProjectTableVisual() {
  return customVisual("project-table", "Kamu ve büyük kurum projelerinde aynı masada farklı diller konuşulur; güçlü yönetici bu dilleri kabul kriteri, risk, bütçe ve kanıt üzerinden tek hikayede buluşturur.", `
    <svg viewBox="0 0 900 410" role="img" aria-label="Kamu BT proje toplantısı masası, paydaşlar ve kanıt dosyası">
      <ellipse class="v-table" cx="450" cy="200" rx="250" ry="112"/>
      <g class="v-chair"><rect x="390" y="146" width="120" height="70" rx="12"/><text text-anchor="middle" x="450" y="176">Kanıt dosyası</text><text class="v-small" text-anchor="middle" x="450" y="198">kabul, log, risk</text></g>
      <g class="v-callout"><rect x="86" y="70" width="154" height="62" rx="10"/><text x="106" y="96">Talep sahibi</text><text class="v-small" x="106" y="116">iş değeri</text></g>
      <g class="v-callout"><rect x="360" y="38" width="154" height="62" rx="10"/><text x="380" y="64">Teknik ekip</text><text class="v-small" x="380" y="84">mimari ve işletim</text></g>
      <g class="v-callout"><rect x="656" y="70" width="154" height="62" rx="10"/><text x="676" y="96">Satın alma</text><text class="v-small" x="676" y="116">sözleşme ve bütçe</text></g>
      <g class="v-callout"><rect x="84" y="282" width="154" height="62" rx="10"/><text x="104" y="308">Hukuk / KVKK</text><text class="v-small" x="104" y="328">veri sınırı</text></g>
      <g class="v-callout"><rect x="360" y="316" width="154" height="62" rx="10"/><text x="380" y="342">Güvenlik</text><text class="v-small" x="380" y="362">kontrol ve denetim</text></g>
      <g class="v-callout"><rect x="656" y="282" width="154" height="62" rx="10"/><text x="676" y="308">Yönetici</text><text class="v-small" x="676" y="328">karar ve öncelik</text></g>
      <path class="v-line thin" d="M240 102 C310 132 352 148 390 164"/>
      <path class="v-line thin" d="M437 100 V146"/>
      <path class="v-line thin" d="M656 102 C600 132 548 148 510 164"/>
      <path class="v-line thin" d="M238 312 C318 276 360 236 390 206"/>
      <path class="v-line thin" d="M437 316 V216"/>
      <path class="v-line thin" d="M656 312 C590 274 546 236 510 206"/>
      <text class="v-small" text-anchor="middle" x="450" y="392">Proje mülakatında en iyi cevap “şunu yaparız” değil; kim etkilenecek, nasıl kabul edeceğiz, hangi kanıtla yöneteceğiz cevabıdır.</text>
    </svg>`);
}

function dataStructuresVisual() {
  return customVisual("data-structures-map", "Veri yapısı seçimi, verinin nasıl büyüdüğünü ve hangi işlemde hız beklendiğini okumaktır.", `
    <svg viewBox="0 0 900 470" role="img" aria-label="Array, hash map, stack, queue, tree ve graph kullanım haritası">
      <defs><marker id="arrow-ds" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 Z" fill="currentColor"/></marker></defs>
      <text x="54" y="48">Soru</text><text x="318" y="48">Uygun yapı</text><text x="664" y="48">Tipik bedel</text>
      <g class="v-callout"><rect x="50" y="82" width="190" height="60" rx="10"/><text x="70" y="108">Sırayla geziyorum</text><text class="v-small" x="70" y="130">liste, indeks, tarama</text></g>
      <g class="v-box"><rect x="310" y="82" width="160" height="60" rx="10"/><text text-anchor="middle" x="390" y="118">Array / List</text></g>
      <g class="v-callout"><rect x="646" y="82" width="190" height="60" rx="10"/><text x="666" y="108">O(1) erişim</text><text class="v-small" x="666" y="130">ortadan silme pahalı</text></g>
      <path class="v-line solid" marker-end="url(#arrow-ds)" d="M240 112 H310"/><path class="v-line solid" marker-end="url(#arrow-ds)" d="M470 112 H646"/>
      <g class="v-callout"><rect x="50" y="166" width="190" height="60" rx="10"/><text x="70" y="192">Anahtarla buluyorum</text><text class="v-small" x="70" y="214">kullanıcı id, cache key</text></g>
      <g class="v-box"><rect x="310" y="166" width="160" height="60" rx="10"/><text text-anchor="middle" x="390" y="202">Hash Map</text></g>
      <g class="v-callout"><rect x="646" y="166" width="190" height="60" rx="10"/><text x="666" y="192">Ortalama O(1)</text><text class="v-small" x="666" y="214">bellek ve çakışma</text></g>
      <path class="v-line solid" marker-end="url(#arrow-ds)" d="M240 196 H310"/><path class="v-line solid" marker-end="url(#arrow-ds)" d="M470 196 H646"/>
      <g class="v-callout"><rect x="50" y="250" width="190" height="60" rx="10"/><text x="70" y="276">Sıra veya geri alma</text><text class="v-small" x="70" y="298">job, undo, parser</text></g>
      <g class="v-box"><rect x="310" y="250" width="160" height="60" rx="10"/><text text-anchor="middle" x="390" y="286">Stack / Queue</text></g>
      <g class="v-callout"><rect x="646" y="250" width="190" height="60" rx="10"/><text x="666" y="276">Düzen garantisi</text><text class="v-small" x="666" y="298">yanlış sıra iş bozar</text></g>
      <path class="v-line solid" marker-end="url(#arrow-ds)" d="M240 280 H310"/><path class="v-line solid" marker-end="url(#arrow-ds)" d="M470 280 H646"/>
      <g class="v-callout"><rect x="50" y="334" width="190" height="60" rx="10"/><text x="70" y="360">İlişki ve hiyerarşi</text><text class="v-small" x="70" y="382">dosya, rota, bağımlılık</text></g>
      <g class="v-box"><rect x="310" y="334" width="160" height="60" rx="10"/><text text-anchor="middle" x="390" y="370">Tree / Graph</text></g>
      <g class="v-callout"><rect x="646" y="334" width="190" height="60" rx="10"/><text x="666" y="360">Arama stratejisi</text><text class="v-small" x="666" y="382">cycle ve maliyet riski</text></g>
      <path class="v-line solid" marker-end="url(#arrow-ds)" d="M240 364 H310"/><path class="v-line solid" marker-end="url(#arrow-ds)" d="M470 364 H646"/>
      <text class="v-small" text-anchor="middle" x="450" y="438">Mülakatta önce verinin davranışını sor: arama mı, ekleme mi, sıralama mı, ilişki mi, ölçek mi?</text>
    </svg>`);
}

function dataEngineeringVisual() {
  return customVisual("data-engineering-flow", "Güvenilir rapor, kaynaktan başlayan ve kalite, katalog, yetki ve gözlemleme ile olgunlaşan veri hattının sonucudur.", `
    <svg viewBox="0 0 940 480" role="img" aria-label="Veri mühendisliği hattı">
      <defs><marker id="arrow-de" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 Z" fill="currentColor"/></marker></defs>
      <g class="v-callout"><rect x="34" y="72" width="138" height="62" rx="10"/><text x="54" y="98">Kaynaklar</text><text class="v-small" x="54" y="120">CRM, ERP, log</text></g>
      <g class="v-box"><rect x="220" y="62" width="132" height="82" rx="12"/><text text-anchor="middle" x="286" y="94">Ingestion</text><text class="v-small" text-anchor="middle" x="286" y="118">batch / stream</text></g>
      <g class="v-box"><rect x="400" y="62" width="132" height="82" rx="12"/><text text-anchor="middle" x="466" y="94">Transform</text><text class="v-small" text-anchor="middle" x="466" y="118">ETL / ELT</text></g>
      <g class="v-box"><rect x="580" y="62" width="132" height="82" rx="12"/><text text-anchor="middle" x="646" y="94">Storage</text><text class="v-small" text-anchor="middle" x="646" y="118">lake / warehouse</text></g>
      <g class="v-callout"><rect x="760" y="72" width="138" height="62" rx="10"/><text x="780" y="98">Tüketim</text><text class="v-small" x="780" y="120">BI, ML, API</text></g>
      <path class="v-line solid" marker-end="url(#arrow-de)" d="M172 103 H220"/><path class="v-line solid" marker-end="url(#arrow-de)" d="M352 103 H400"/><path class="v-line solid" marker-end="url(#arrow-de)" d="M532 103 H580"/><path class="v-line solid" marker-end="url(#arrow-de)" d="M712 103 H760"/>
      <rect class="v-zone inner" x="220" y="214" width="492" height="122" rx="16"/>
      <text x="246" y="248">Güven katmanı</text>
      <g class="v-callout"><rect x="246" y="270" width="124" height="44" rx="9"/><text text-anchor="middle" x="308" y="298">Quality</text></g>
      <g class="v-callout"><rect x="392" y="270" width="124" height="44" rx="9"/><text text-anchor="middle" x="454" y="298">Catalog</text></g>
      <g class="v-callout"><rect x="538" y="270" width="124" height="44" rx="9"/><text text-anchor="middle" x="600" y="298">Lineage</text></g>
      <path class="v-line thin" d="M466 144 V214"/><path class="v-line thin" d="M646 144 V214"/>
      <text class="v-small" text-anchor="middle" x="470" y="404">Raporlar tutmuyorsa önce araç değil tanım, kaynak, dönüşüm ve veri kalitesi kontrol edilir.</text>
    </svg>`);
}

function itsmVisual() {
  return customVisual("itsm-change-flow", "ITSM olgunluğu, olayı kapatmakla kalmayıp tekrarını azaltan ve değişikliği iz bırakarak yöneten çalışma düzenidir.", `
    <svg viewBox="0 0 900 460" role="img" aria-label="Incident, problem, change, CAB ve release ilişkisi">
      <defs><marker id="arrow-itsm" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 Z" fill="currentColor"/></marker></defs>
      <g class="v-box"><rect x="56" y="86" width="142" height="72" rx="12"/><text text-anchor="middle" x="127" y="116">Incident</text><text class="v-small" text-anchor="middle" x="127" y="138">hizmeti geri getir</text></g>
      <g class="v-box"><rect x="266" y="86" width="142" height="72" rx="12"/><text text-anchor="middle" x="337" y="116">Problem</text><text class="v-small" text-anchor="middle" x="337" y="138">kök nedeni bul</text></g>
      <g class="v-box"><rect x="476" y="86" width="142" height="72" rx="12"/><text text-anchor="middle" x="547" y="116">Change</text><text class="v-small" text-anchor="middle" x="547" y="138">kontrollü değiştir</text></g>
      <g class="v-box"><rect x="686" y="86" width="142" height="72" rx="12"/><text text-anchor="middle" x="757" y="116">Release</text><text class="v-small" text-anchor="middle" x="757" y="138">kullanıcıya taşı</text></g>
      <path class="v-line solid" marker-end="url(#arrow-itsm)" d="M198 122 H266"/><path class="v-line solid" marker-end="url(#arrow-itsm)" d="M408 122 H476"/><path class="v-line solid" marker-end="url(#arrow-itsm)" d="M618 122 H686"/>
      <g class="v-callout"><rect x="174" y="236" width="150" height="70" rx="10"/><text x="196" y="264">SLA</text><text class="v-small" x="196" y="286">etki ve öncelik</text></g>
      <g class="v-callout"><rect x="374" y="236" width="150" height="70" rx="10"/><text x="396" y="264">CAB</text><text class="v-small" x="396" y="286">riskli değişiklik</text></g>
      <g class="v-callout"><rect x="574" y="236" width="170" height="70" rx="10"/><text x="596" y="264">PIR / Ders</text><text class="v-small" x="596" y="286">tekrarını azalt</text></g>
      <path class="v-line thin" d="M127 158 C144 218 190 230 249 236"/><path class="v-line thin" d="M547 158 V236"/><path class="v-line thin" d="M757 158 C744 210 700 226 659 236"/>
      <text class="v-small" text-anchor="middle" x="450" y="392">Incident yangını söndürür; problem dumanın neden çıktığını bulur; change aynı riski iz bırakarak düzeltir.</text>
    </svg>`);
}

function ddosVisualReadable() {
  return customVisual("ddos-defense-readable", "DDoS savunmasında amaç saldırgan trafiği origin sunucuya varmadan seyreltmek, gerçek kullanıcı yolunu açık tutmak ve iletişimi teknik aksiyonla birlikte yürütmektir.", `
    <svg viewBox="0 0 980 460" role="img" aria-label="DDoS saldırısı, CDN temizleme, WAF, rate limit, origin koruması ve kriz iletişimi">
      <defs>
        <marker id="arrow-ddos-readable" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
          <path d="M0 0 L8 4 L0 8 Z" fill="currentColor"></path>
        </marker>
      </defs>
      <text x="58" y="54">Saldırı kaynakları</text>
      <text x="350" y="54">Temizleme ve sınırlama</text>
      <text x="760" y="54">Korunan servis</text>

      <g class="v-callout danger-box">
        <rect x="54" y="82" width="188" height="56" rx="10"/>
        <text x="76" y="108">Bot ağı</text>
        <text class="v-small" x="76" y="128">çok sayıda sahte istemci</text>
      </g>
      <g class="v-callout danger-box">
        <rect x="54" y="162" width="188" height="56" rx="10"/>
        <text x="76" y="188">Reflection</text>
        <text class="v-small" x="76" y="208">başkasının kaynağıyla büyütme</text>
      </g>
      <g class="v-callout danger-box">
        <rect x="54" y="242" width="188" height="56" rx="10"/>
        <text x="76" y="268">Layer 7 flood</text>
        <text class="v-small" x="76" y="288">pahalı URL ve login denemesi</text>
      </g>

      <g class="v-box">
        <rect x="342" y="118" width="170" height="116" rx="16"/>
        <text text-anchor="middle" x="427" y="152">CDN Scrubbing</text>
        <text class="v-small" text-anchor="middle" x="427" y="178">hacmi kenarda emer</text>
        <text class="v-small" text-anchor="middle" x="427" y="200">kötü trafiği ayıklar</text>
      </g>
      <g class="v-box">
        <rect x="572" y="118" width="154" height="116" rx="16"/>
        <text text-anchor="middle" x="649" y="152">WAF</text>
        <text class="v-small" text-anchor="middle" x="649" y="178">rate limit</text>
        <text class="v-small" text-anchor="middle" x="649" y="200">bot ve imza kuralı</text>
      </g>
      <g class="v-box">
        <rect x="800" y="118" width="128" height="116" rx="16"/>
        <text text-anchor="middle" x="864" y="152">Origin</text>
        <text class="v-small" text-anchor="middle" x="864" y="178">API / Web</text>
        <text class="v-small" text-anchor="middle" x="864" y="200">gizli ve korumalı</text>
      </g>

      <path class="v-line danger" marker-end="url(#arrow-ddos-readable)" d="M242 110 H320 C330 110 334 128 342 142"/>
      <path class="v-line danger" marker-end="url(#arrow-ddos-readable)" d="M242 190 H342"/>
      <path class="v-line danger" marker-end="url(#arrow-ddos-readable)" d="M242 270 H320 C330 270 334 222 342 212"/>
      <path class="v-line solid" marker-end="url(#arrow-ddos-readable)" d="M512 176 H572"/>
      <path class="v-line solid" marker-end="url(#arrow-ddos-readable)" d="M726 176 H800"/>

      <g class="v-callout legit-box">
        <rect x="54" y="342" width="188" height="56" rx="10"/>
        <text x="76" y="368">Gerçek kullanıcı</text>
        <text class="v-small" x="76" y="388">az ama değerli trafik</text>
      </g>
      <path class="v-line legit" marker-end="url(#arrow-ddos-readable)" d="M242 370 C388 370 470 286 572 224"/>
      <text class="v-small" x="304" y="350">Temiz trafik aynı koruma kapılarından geçer, origin'e doğrudan açılmaz.</text>

      <g class="v-callout">
        <rect x="342" y="300" width="184" height="72" rx="10"/>
        <text x="364" y="328">Ölçüm paneli</text>
        <text class="v-small" x="364" y="350">RPS, 5xx, latency, bant</text>
      </g>
      <g class="v-callout">
        <rect x="572" y="300" width="226" height="72" rx="10"/>
        <text x="594" y="328">Kriz iletişimi</text>
        <text class="v-small" x="594" y="350">durum sayfası, ISP, paydaş</text>
      </g>
      <path class="v-line thin" d="M427 234 V300"/>
      <path class="v-line thin" d="M649 234 V300"/>
      <text class="v-small" text-anchor="middle" x="490" y="424">Doğru savunma sorusu: saldırı nerede emiliyor, origin nasıl saklanıyor, gerçek kullanıcı yolu nasıl açık kalıyor?</text>
    </svg>`);
}

function ddosVisualReadableV2() {
  return customVisual("ddos-defense-readable", "DDoS savunmasında amaç saldırgan trafiği origin sunucuya varmadan seyreltmek, gerçek kullanıcı yolunu açık tutmak ve iletişimi teknik aksiyonla birlikte yürütmektir.", `
    <svg viewBox="0 0 760 520" role="img" aria-label="Okunabilir DDoS savunma akışı">
      <defs>
        <marker id="arrow-ddos-v2" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
          <path d="M0 0 L7 3.5 L0 7 Z" fill="currentColor"></path>
        </marker>
      </defs>
      <text x="38" y="44">Saldırı kaynakları</text>
      <text x="274" y="44">Kenar savunması</text>
      <text x="486" y="44">Uygulama filtresi</text>
      <text x="650" y="44">Origin</text>

      <g class="v-callout danger-box">
        <rect x="38" y="78" width="166" height="58" rx="10"/>
        <text x="56" y="104">Bot ağı</text>
        <text class="v-small" x="56" y="124">binlerce sahte istemci</text>
      </g>
      <g class="v-callout danger-box">
        <rect x="38" y="164" width="166" height="58" rx="10"/>
        <text x="56" y="190">Reflection</text>
        <text class="v-small" x="56" y="210">trafik hacmi büyütülür</text>
      </g>
      <g class="v-callout danger-box">
        <rect x="38" y="250" width="166" height="58" rx="10"/>
        <text x="56" y="276">Layer 7 flood</text>
        <text class="v-small" x="56" y="296">pahalı istekler çoğalır</text>
      </g>

      <g class="v-box">
        <rect x="268" y="132" width="150" height="112" rx="14"/>
        <text text-anchor="middle" x="343" y="164">CDN Scrubbing</text>
        <text class="v-small" text-anchor="middle" x="343" y="190">hacmi kenarda emer</text>
        <text class="v-small" text-anchor="middle" x="343" y="212">kötü trafiği ayıklar</text>
      </g>
      <g class="v-box">
        <rect x="480" y="132" width="124" height="112" rx="14"/>
        <text text-anchor="middle" x="542" y="164">WAF</text>
        <text class="v-small" text-anchor="middle" x="542" y="190">rate limit</text>
        <text class="v-small" text-anchor="middle" x="542" y="212">bot kuralı</text>
      </g>
      <g class="v-box">
        <rect x="652" y="132" width="82" height="112" rx="14"/>
        <text text-anchor="middle" x="693" y="164">Origin</text>
        <text class="v-small" text-anchor="middle" x="693" y="190">API</text>
        <text class="v-small" text-anchor="middle" x="693" y="212">gizli</text>
      </g>

      <path class="v-line danger" marker-end="url(#arrow-ddos-v2)" d="M204 107 H238 C252 107 254 146 268 154"/>
      <path class="v-line danger" marker-end="url(#arrow-ddos-v2)" d="M204 193 H268"/>
      <path class="v-line danger" marker-end="url(#arrow-ddos-v2)" d="M204 279 H238 C252 279 254 230 268 222"/>
      <path class="v-line solid" marker-end="url(#arrow-ddos-v2)" d="M418 188 H480"/>
      <path class="v-line solid" marker-end="url(#arrow-ddos-v2)" d="M604 188 H652"/>

      <g class="v-callout legit-box">
        <rect x="38" y="362" width="166" height="58" rx="10"/>
        <text x="56" y="388">Gerçek kullanıcı</text>
        <text class="v-small" x="56" y="408">korunan temiz yol</text>
      </g>
      <path class="v-line legit" marker-end="url(#arrow-ddos-v2)" d="M204 391 C250 360 252 278 268 232"/>

      <g class="v-callout">
        <rect x="268" y="318" width="150" height="72" rx="10"/>
        <text x="288" y="346">Ölçüm</text>
        <text class="v-small" x="288" y="368">RPS, 5xx, latency</text>
      </g>
      <g class="v-callout">
        <rect x="480" y="318" width="166" height="72" rx="10"/>
        <text x="500" y="346">Kriz iletişimi</text>
        <text class="v-small" x="500" y="368">ISP, durum sayfası</text>
      </g>
      <path class="v-line thin" d="M343 244 V318"/>
      <path class="v-line thin" d="M542 244 V318"/>
      <text class="v-small" text-anchor="middle" x="380" y="470">Ana fikir: saldırıyı kenarda em, WAF ile uygulama katmanını süz, origin'i sakla, gerçek kullanıcı yolunu açık tut.</text>
    </svg>`);
}

const chapterVisuals = {
  "asama-2-programlama-11": dataStructuresVisual,
  "buyuk-mimariler-16": dataEngineeringVisual,
  "liderlik-kriz-gelecek-16": itsmVisual,
  "asama-1-bilgisayar-temelleri-2": hardwareMotherboardVisual,
  "asama-1-bilgisayar-temelleri-6": networkTopologyVisual,
  "asama-1-bilgisayar-temelleri-7": dnsHttpsVisual,
  "asama-6-devops-bulut-3": kubernetesVisual,
  "siber-guvenlik-3": securityZonesVisual,
  "liderlik-kriz-gelecek-9": ddosVisualReadableV2,
  "proje-kamu-yonetim-11": publicProjectTableVisual
};

const chapterVisualSpecs = {
  "asama-1-bilgisayar-temelleri-2": {
    type: "system",
    center: "Anakart",
    labels: ["CPU", "RAM", "NVMe / SSD", "GPU", "NIC", "PSU", "PCIe", "Chipset"],
    caption: "Donanım performansı tek bir parçanın hızı değil; işlemci, bellek, disk, ağ kartı, ekran kartı, güç ve veri yollarının aynı anakart üzerinde dengeli çalışmasıdır.",
    note: "Darboğaz çoğu zaman parçanın kendisinde değil, parçaya giden yolun genişliğinde ve gecikmesinde ortaya çıkar."
  },
  "asama-1-bilgisayar-temelleri-6": {
    type: "network",
    center: "Paketin Yolu",
    labels: ["Client", "Subnet", "Switch", "Gateway", "DNS", "Firewall", "NAT", "Server:443"],
    caption: "Ağ temeli, kullanıcının isteğinin yerel ağdan çıkıp doğru IP, doğru rota, doğru firewall kuralı ve doğru porta ulaşma hikayesidir.",
    note: "İnternet yok cümlesi teşhis değildir; IP, gateway, DNS, route, firewall ve port sırası tek tek okunur."
  },
  "asama-1-bilgisayar-temelleri-7": {
    type: "sequence",
    center: "Web İsteği",
    labels: ["DNS", "TCP Handshake", "TLS", "HTTP Request", "Application", "Response"],
    caption: "Tarayıcıda adres yazınca önce isim çözülür, sonra bağlantı kurulur, güven doğrulanır ve en son HTTP isteği uygulamaya ulaşır.",
    note: "Sayfa açılmadığında DNS, sertifika, port, uygulama logu ve durum kodu ayrı ayrı sorgulanır."
  },
  "asama-6-devops-bulut-3": {
    type: "system",
    center: "Kubernetes",
    labels: ["Ingress", "Service", "Deployment", "Pod", "Node", "ConfigMap", "Secret", "HPA"],
    caption: "Kubernetes, container kalabalığını adresleme, sağlık kontrolü, ölçekleme, konfigürasyon ve sürüm yönetimi olan bir üretim düzenine çevirir.",
    note: "Pod tek başına ezberlenmez; service, rollout, readiness probe ve node kapasitesiyle birlikte anlam kazanır."
  },
  "siber-guvenlik-3": {
    type: "security",
    center: "Güvenlik Bölgeleri",
    labels: ["Internet", "CDN / WAF", "Firewall", "DMZ", "App Subnet", "DB Subnet", "IDS / IPS", "SIEM"],
    caption: "Ağ güvenliği tek büyük duvar değil; internetten veritabanına kadar güven seviyesi, izin, kayıt ve müdahale noktalarının katman katman kurulmasıdır.",
    note: "İyi güvenlik cevabı firewall var demez; hangi bölgede hangi izin, hangi log ve hangi kaçış planı var diye anlatır."
  },
  "liderlik-kriz-gelecek-9": {
    type: "incident",
    center: "DDoS Savunması",
    labels: ["Bot Trafiği", "Gerçek Kullanıcı", "CDN Scrubbing", "WAF", "Rate Limit", "Origin", "Metrik", "Kriz İletişimi"],
    caption: "DDoS savunmasında saldırgan trafik origin sunucuya varmadan seyreltilir, gerçek kullanıcı yolu açık tutulur ve teknik aksiyon iletişimle birlikte yönetilir.",
    note: "Sadece kapasite konuşulmaz; filtre nerede, origin nasıl saklanıyor, kim ne zaman bilgilendiriliyor soruları cevaplanır."
  },
  "proje-kamu-yonetim-11": {
    type: "governance",
    center: "Karar Masası",
    labels: ["Talep Sahibi", "Teknik Ekip", "Satın Alma", "Hukuk / KVKK", "Güvenlik", "Yönetici", "Kanıt Dosyası", "Kabul Kriteri"],
    caption: "Büyük kurum projesinde teknik doğruluk kadar paydaş dili, kabul kanıtı, risk, bütçe ve denetim izi aynı masada yönetilir.",
    note: "Güçlü yönetici farklı dilleri tek hikayeye bağlar: iş değeri, teknik gerçek, mevzuat ve işletme sorumluluğu."
  },
  "asama-2-programlama-11": {
    type: "decision",
    center: "Veri Yapısı Seçimi",
    labels: ["Array", "Hash Map", "Stack", "Queue", "Tree", "Graph", "Big O", "Trade-off"],
    caption: "Veri yapısı seçimi, verinin nasıl büyüdüğünü, hangi işlemin sık yapıldığını ve hangi maliyetin kabul edildiğini okumaktır.",
    note: "Mülakatta doğru cevap yalnız isim saymaz; arama, ekleme, silme ve bellek maliyetini örnekle açıklar."
  },
  "buyuk-mimariler-16": {
    type: "pipeline",
    center: "Veri Hattı",
    labels: ["Source", "ETL / ELT", "Data Lake", "Warehouse", "Quality", "Catalog", "Dashboard", "Governance"],
    caption: "Güvenilir rapor, kaynaktan başlayan ve kalite, katalog, yetki, gözlemleme ve veri sahipliğiyle olgunlaşan hattın sonucudur.",
    note: "Veri mühendisliği sadece taşıma işi değildir; tanım birliği, kalite alarmı ve sahiplik olmadan rapor güven vermez."
  },
  "liderlik-kriz-gelecek-16": {
    type: "process",
    center: "ITSM",
    labels: ["Incident", "Problem", "Change", "CAB", "Release", "CMDB", "SLA", "Postmortem"],
    caption: "ITSM olgunluğu olayı kapatmakla kalmaz; tekrarını azaltır, değişikliği iz bırakarak yönetir ve hizmet sözünü ölçülebilir hale getirir.",
    note: "Incident yangını söndürür, problem kökü arar, change kontrollü değiştirir, CAB riski görünür kılar."
  }
};

function flowDiagram(kind, caption, labels, subline = "") {
  const count = labels.length;
  const boxWidth = count > 5 ? 116 : 132;
  const gap = (820 - count * boxWidth) / Math.max(1, count - 1);
  const start = 40;
  const centerY = 125;
  const boxes = labels.map((label, index) => {
    const x = start + index * (boxWidth + gap);
    const y = index % 2 ? 105 : 70;
    const textX = x + boxWidth / 2;
    const textY = y + 42;
    return `<g class="v-box" style="--i:${index}"><rect x="${x}" y="${y}" width="${boxWidth}" height="76" rx="10"/><text text-anchor="middle" x="${textX}" y="${textY}">${svgLabel(label)}</text></g>`;
  }).join("");
  const path = labels.slice(0, -1).map((_, index) => {
    const x1 = start + index * (boxWidth + gap) + boxWidth;
    const y1 = (index % 2 ? 105 : 70) + 38;
    const x2 = start + (index + 1) * (boxWidth + gap);
    const y2 = ((index + 1) % 2 ? 105 : 70) + 38;
    return `M${x1} ${y1} C${x1 + 28} ${y1} ${x2 - 28} ${y2} ${x2} ${y2}`;
  }).join(" ");
  return svgFigure(kind, caption, `
    <svg viewBox="0 0 900 260" role="img" aria-label="${svgLabel(caption)}">
      <path class="v-line" d="${path}" fill="none"/>
      ${boxes}
      ${subline ? `<text class="v-small" text-anchor="middle" x="450" y="228">${svgLabel(subline)}</text>` : ""}
    </svg>`);
}

function hubDiagram(kind, caption, center, nodes, subline = "") {
  const positions = [
    [450, 55],
    [705, 100],
    [650, 205],
    [250, 205],
    [195, 100],
    [450, 210]
  ];
  const nodeSvg = nodes.slice(0, 6).map((label, index) => {
    const [x, y] = positions[index];
    return `<path class="v-line thin" d="M450 132 L${x} ${y}" fill="none"/><g class="v-node" style="--i:${index}"><circle cx="${x}" cy="${y}" r="16"/><text text-anchor="middle" x="${x}" y="${y + 42}">${svgLabel(label)}</text></g>`;
  }).join("");
  return svgFigure(kind, caption, `
    <svg viewBox="0 0 900 280" role="img" aria-label="${svgLabel(caption)}">
      ${nodeSvg}
      <circle class="v-hub" cx="450" cy="132" r="44"/>
      <text text-anchor="middle" x="450" y="139">${svgLabel(center)}</text>
      ${subline ? `<text class="v-small" text-anchor="middle" x="450" y="262">${svgLabel(subline)}</text>` : ""}
    </svg>`);
}

function layeredDiagram(kind, caption, center, rings, labels) {
  return svgFigure(kind, caption, `
    <svg viewBox="0 0 900 280" role="img" aria-label="${svgLabel(caption)}">
      ${rings.map((radius) => `<circle class="v-ring" cx="450" cy="135" r="${radius}"/>`).join("")}
      <circle class="v-hub" cx="450" cy="135" r="40"/>
      <text text-anchor="middle" x="450" y="142">${svgLabel(center)}</text>
      ${labels.map(([label, x, y], index) => `<g class="v-node" style="--i:${index}"><circle cx="${x}" cy="${y}" r="12"/><text text-anchor="middle" x="${x}" y="${y + 36}">${svgLabel(label)}</text></g>`).join("")}
    </svg>`);
}

function timelineDiagram(kind, caption, labels, subline = "") {
  const points = labels.map((label, index) => {
    const x = 95 + index * (710 / Math.max(1, labels.length - 1));
    const y = index % 2 ? 150 : 95;
    return `<path class="v-line thin" d="M${x} 132 V${y}" fill="none"/><g class="v-node" style="--i:${index}"><circle cx="${x}" cy="${y}" r="13"/><text text-anchor="middle" x="${x}" y="${y + (index % 2 ? 42 : -26)}">${svgLabel(label)}</text></g>`;
  }).join("");
  return svgFigure(kind, caption, `
    <svg viewBox="0 0 900 260" role="img" aria-label="${svgLabel(caption)}">
      <path class="v-line" d="M85 132 H815" fill="none"/>
      ${points}
      ${subline ? `<text class="v-small" text-anchor="middle" x="450" y="232">${svgLabel(subline)}</text>` : ""}
    </svg>`);
}

function stackDiagram(kind, caption, labels, subline = "") {
  const layers = labels.map((label, index) => {
    const width = 690 - index * 42;
    const x = 450 - width / 2;
    const y = 42 + index * 38;
    return `<g class="v-box" style="--i:${index}"><rect x="${x}" y="${y}" width="${width}" height="32" rx="8"/><text text-anchor="middle" x="450" y="${y + 22}">${svgLabel(label)}</text></g>`;
  }).join("");
  return svgFigure(kind, caption, `
    <svg viewBox="0 0 900 280" role="img" aria-label="${svgLabel(caption)}">
      ${layers}
      ${subline ? `<text class="v-small" text-anchor="middle" x="450" y="252">${svgLabel(subline)}</text>` : ""}
    </svg>`);
}

function matrixDiagram(kind, caption, cells, subline = "") {
  const boxes = cells.slice(0, 6).map((label, index) => {
    const col = index % 3;
    const row = Math.floor(index / 3);
    const x = 92 + col * 245;
    const y = 58 + row * 92;
    return `<g class="v-box" style="--i:${index}"><rect x="${x}" y="${y}" width="185" height="62" rx="10"/><text text-anchor="middle" x="${x + 92}" y="${y + 38}">${svgLabel(label)}</text></g>`;
  }).join("");
  return svgFigure(kind, caption, `
    <svg viewBox="0 0 900 270" role="img" aria-label="${svgLabel(caption)}">
      ${boxes}
      ${subline ? `<text class="v-small" text-anchor="middle" x="450" y="246">${svgLabel(subline)}</text>` : ""}
    </svg>`);
}

function splitDiagram(kind, caption, left, right, subline = "") {
  return svgFigure(kind, caption, `
    <svg viewBox="0 0 900 280" role="img" aria-label="${svgLabel(caption)}">
      <g class="v-box" style="--i:0"><rect x="80" y="70" width="250" height="120" rx="12"/><text text-anchor="middle" x="205" y="114">${svgLabel(left[0])}</text><text class="v-small" text-anchor="middle" x="205" y="148">${svgLabel(left[1] || "")}</text></g>
      <g class="v-box" style="--i:1"><rect x="570" y="70" width="250" height="120" rx="12"/><text text-anchor="middle" x="695" y="114">${svgLabel(right[0])}</text><text class="v-small" text-anchor="middle" x="695" y="148">${svgLabel(right[1] || "")}</text></g>
      <path class="v-line" d="M330 130 C420 70 480 190 570 130" fill="none"/>
      ${subline ? `<text class="v-small" text-anchor="middle" x="450" y="236">${svgLabel(subline)}</text>` : ""}
    </svg>`);
}

function sceneDiagram(kind, caption, center, labels, subline = "") {
  const positions = [[150, 75], [375, 45], [620, 75], [185, 178], [450, 185], [690, 178]];
  const items = labels.slice(0, 6).map((label, index) => {
    const [x, y] = positions[index];
    return `<g class="v-box" style="--i:${index}"><rect x="${x}" y="${y}" width="130" height="54" rx="9"/><text text-anchor="middle" x="${x + 65}" y="${y + 33}">${svgLabel(label)}</text></g>`;
  }).join("");
  return svgFigure(kind, caption, `
    <svg viewBox="0 0 900 280" role="img" aria-label="${svgLabel(caption)}">
      <rect class="v-soft" x="70" y="34" width="760" height="190" rx="18"/>
      <circle class="v-hub" cx="450" cy="130" r="42"/>
      <text text-anchor="middle" x="450" y="137">${svgLabel(center)}</text>
      ${items}
      ${subline ? `<text class="v-small" text-anchor="middle" x="450" y="258">${svgLabel(subline)}</text>` : ""}
    </svg>`);
}

const visualDetails = {
  Kavram: "Terim sözlükte değil, gerçek bir hizmet akışında hangi sorumluluğu taşıdığıyla öğrenilir.",
  Görev: "Bu parçanın sistemde hangi işi üstlendiği netleşmeden doğru teknoloji seçimi yapılamaz.",
  Bağımlılık: "Her karar başka bir ekip, servis, veri kaynağı veya işletme alışkanlığına bağlanır.",
  Risk: "Bozulduğunda kimin işinin aksayacağı ve hangi güvenlik ya da maliyet etkisini doğuracağı önceden okunur.",
  Kanıt: "Log, metrik, test sonucu, kabul kaydı veya denetim izi olmadan teknik iddia eksik kalır.",
  Karar: "İyi karar, teknik doğruluğu sahiplik, bütçe, mevzuat ve sürdürülebilirlikle birlikte tartar.",
  Compute: "İş yükünün nerede ve nasıl çalışacağını belirler; VM, container ve serverless farklı kontrol-maliyet dengesi kurar.",
  Storage: "Verinin dosya, blok veya obje olarak nasıl saklanacağını seçer; dayanıklılık kadar erişim ve yaşam döngüsü önemlidir.",
  Network: "VPC, subnet, route, firewall ve DNS ile trafiğin hangi yoldan geçeceğini ve nerede duracağını belirler.",
  DB: "Kalıcı ve tutarlı kayıt alanıdır; yedek, indeks, transaction ve restore provasıyla birlikte düşünülür.",
  Monitor: "Metrik, log, trace ve alarmı birleştirir; canlı sistemin sessiz kalmasını değil anlaşılır konuşmasını sağlar.",
  Region: "Hizmetin coğrafi evidir; gecikme, mevzuat, veri konumu ve felaket kurtarma kararını etkiler.",
  AZ: "Aynı region içinde arıza yalıtımı sağlar; tek veri merkezi hatasına karşı hizmeti ayakta tutar.",
  VPC: "Buluttaki özel ağ sınırıdır; public-private subnet ayrımı ve route tasarımı burada başlar.",
  Cloud: "Kaynak kiralamanın ötesinde kimlik, ağ, veri, maliyet ve sorumluluk paylaşımı disiplinidir.",
  Container: "Uygulamayı bağımlılıklarıyla paketler; kalıcı veri, secret, log ve imaj güvenliği ayrıca tasarlanır.",
  Registry: "İmajların paylaşıldığı depodur; sürüm, imza, tarama ve erişim kontrolü üretim güvenliği için gerekir.",
  Volume: "Container yaşamından bağımsız kalıcı veri alanıdır; yanlış kullanılırsa veri kaybı veya taşınabilirlik sorunu doğar.",
  Env: "Ortam davranışını koddan ayırır; gizli bilgiyi düz değişkene yazmak güvenlik borcu üretir.",
  Log: "Olayın metinsel izidir; zaman, correlation id ve bağlam yoksa kriz anında kanıt zayıflar.",
  Metric: "Sistemin sayısal nabzıdır; latency, hata oranı, trafik ve saturation birlikte okunur.",
  Trace: "Bir isteğin servisler arasındaki yolculuğunu gösterir; mikroservislerde kök sebebi daraltır.",
  Alert: "Dikkat gerektiren durumu haber verir; iyi alarm gürültü değil karar üretir.",
  SLO: "Kullanıcıya verilen güvenilirlik hedefini sayıya çevirir; alarm ve önceliklendirmeye yön verir.",
  Backup: "Kopya almakla bitmez; geri dönüş süresi, bütünlük ve düzenli restore provasıyla anlam kazanır.",
  Offsite: "Yedeği aynı arıza alanının dışına taşır; felaket anında tek noktaya bağımlılığı azaltır.",
  Immutable: "Yedeğin sonradan değiştirilememesini sağlar; fidye yazılımı riskine karşı kritik korumadır.",
  Restore: "Yedeğin gerçekten dönüp dönmediğini gösteren andır; test edilmemiş yedek güven değil varsayımdır.",
  RTO: "Hizmetin ne kadar sürede geri dönmesi gerektiğini tanımlar; bütçe ve mimariyi doğrudan etkiler.",
  RPO: "Ne kadar veri kaybının kabul edilebilir olduğunu belirler; replikasyon ve yedek sıklığını şekillendirir.",
  Tag: "Bulut kaynağına sahiplik ve amaç bilgisi verir; etiketsiz kaynak fatura ve denetimde sahipsiz kalır.",
  Budget: "Harcamayı görünür sınırlarla izler; alarm yoksa maliyet çoğu zaman ay sonunda fark edilir.",
  Rightsize: "Kaynağı gerçek kullanıma göre ayarlar; fazla kapasite fatura, az kapasite performans riski doğurur.",
  Reserve: "Öngörülebilir iş yüklerinde indirim sağlar; yanlış tahmin esnekliği azaltabilir.",
  Idle: "Çalışmadığı halde para yazan kaynaktır; düzenli temizlik yapılmazsa bulutun sessiz maliyeti olur.",
  Report: "Teknik veriyi karar verilebilir özet haline getirir; sahiplik, trend ve aksiyon göstermelidir.",
  CPU: "Komutları yürütür; hız kadar cache, çekirdek ve veri yoluna erişim de belirleyicidir.",
  RAM: "Çalışan veriyi tutar; yetmediğinde sistem diske taşar ve kullanıcı bunu yavaşlama olarak hisseder.",
  "NVMe / SSD": "Kalıcı kayıttır; I/O beklemesi arttığında en güçlü işlemci bile sırada kalır.",
  GPU: "Paralel hesap ve görüntü işlerinde hız kazandırır; AI eğitiminde bellek kapasitesi kritikleşir.",
  NIC: "Ağ çıkışıdır; paket kaybı, duplex, sürücü ve MTU hataları uygulama hatası gibi görünebilir.",
  PSU: "Güç hattıdır; kararsızlık bazen yazılım değil voltaj, ısı ve yük davranışından doğar.",
  PCIe: "Hızlı kartların veri yoludur; GPU, NVMe ve NIC burada aynı otobanı paylaşabilir.",
  Chipset: "CPU ile çevre birimleri arasındaki trafik düzenidir; anakartın sessiz trafik polisi gibidir.",
  Client: "İsteği başlatan uçtur; IP, DNS, proxy ve tarayıcı durumu ilk kanıtları verir.",
  Subnet: "Aynı yerel ağ sınırıdır; hedef yerelde mi yoksa gateway arkasında mı sorusunu cevaplar.",
  Switch: "Yerel ağdaki cihazları taşır; VLAN ve port durumu yanlışsa paket daha kapıdan çıkamaz.",
  Gateway: "Yerel ağın çıkış kapısıdır; route, NAT ve dış dünya burada başlar.",
  DNS: "İsmi IP adresine çevirir; bozulduğunda hizmet ayakta olsa bile bulunamaz.",
  Firewall: "Kim, nereden, nereye, hangi portla geçebilir sorusunu uygular.",
  NAT: "Özel adresi dış dünyaya taşır; oturum tablosu dolarsa bağlantı hataları başlar.",
  "Server:443": "Hedef servistir; port, sertifika ve uygulama logu burada birlikte okunur.",
  "TCP Handshake": "Bağlantının el sıkışmasıdır; SYN/SYN-ACK/ACK yoksa HTTP konuşması hiç başlamaz.",
  TLS: "Kimlik ve şifreli kanal kurar; sertifika zinciri hatası uygulama kodundan önce gelir.",
  "HTTP Request": "Asıl istektir; method, path, header, body ve status kodu sözleşmenin dilidir.",
  Application: "İş kuralının çalıştığı yerdir; log, trace ve hata kodu gerçek niyeti gösterir.",
  Response: "Kullanıcının gördüğü sonuçtur; gecikme, durum kodu ve içerik birlikte değerlendirilir.",
  Ingress: "Cluster'ın dış kapısıdır; host, path ve TLS kararını taşır.",
  Service: "Pod değişse bile sabit adres sağlar; trafiği doğru pod grubuna yönlendirir.",
  Deployment: "İstenen pod sayısını ve sürüm davranışını yönetir.",
  Pod: "Container'ın çalışma birimidir; readiness ve liveness olmadan üretimde güven vermez.",
  Node: "Pod'ların koştuğu makinedir; CPU, RAM, disk ve network basıncı burada görünür.",
  ConfigMap: "Ayarı imajdan ayırır; aynı imaj farklı ortamda farklı davranabilir.",
  Secret: "Parola ve token gibi hassas bilgileri taşır; erişim ve rotasyon disiplini ister.",
  HPA: "Yük artınca pod sayısını artırır; metrik yanlışsa yanlış anda ölçekler.",
  Internet: "Güvenilmeyen bölgedir; trafik önce kenarda süzülmelidir.",
  "CDN / WAF": "Trafiği kenarda karşılar; cache, bot kuralı ve uygulama katmanı koruması sağlar.",
  DMZ: "Dışa yakın ama iç ağa doğrudan bağlı olmayan tampon bölgedir.",
  "App Subnet": "Uygulama servislerinin yaşadığı alandır; sadece gerekli kapılar açık kalmalıdır.",
  "DB Subnet": "En kritik kayıt bölgesidir; doğrudan internet görmemeli, erişim kanıt bırakmalıdır.",
  "IDS / IPS": "Şüpheli davranışı dinler veya engeller; alarmı bağlamla okumak gerekir.",
  SIEM: "Logları tek olay hikayesine çevirir; korelasyon ve zaman çizgisi üretir.",
  "Bot Trafiği": "Hizmeti boğmaya çalışan gereksiz yük oluşturur.",
  "Gerçek Kullanıcı": "Korunması gereken yoldur; savunma onu da engellerse kriz büyür.",
  "CDN Scrubbing": "Saldırgan trafiği origin'e ulaşmadan seyreltir.",
  WAF: "Uygulama katmanındaki kötü istekleri ve bot davranışını süzer.",
  "Rate Limit": "Bir kaynağın aşırı tüketilmesini sınırlar; fazla sıkıysa gerçek kullanıcıyı da yakar.",
  Origin: "Asıl sunucudur; IP sızıntısı varsa saldırgan filtreyi atlayabilir.",
  Metrik: "RPS, hata oranı, latency ve saturation kararın pusulasıdır.",
  "Kriz İletişimi": "Durum sayfası, paydaş bilgisi ve sağlayıcı eskalasyonu teknik aksiyonla birlikte yürür.",
  Array: "Sıralı ve indeksli veri tutar; erişim hızlı, araya ekleme maliyetli olabilir.",
  "Hash Map": "Anahtardan değere hızlı erişir; çakışma ve bellek maliyeti unutulmamalıdır.",
  Stack: "Son giren ilk çıkar; undo, call stack ve parser işlerinde doğal modeldir.",
  Queue: "İlk giren ilk çıkar; iş kuyruğu ve mesajlaşmada düzen sağlar.",
  Tree: "Hiyerarşik arama ve sıralama sağlar; indeks mantığını anlamayı kolaylaştırır.",
  Graph: "İlişkileri ve yolları anlatır; ağ, yetki, rota ve öneri sistemlerinde karşımıza çıkar.",
  "Big O": "Veri büyüdükçe maliyetin nasıl arttığını anlatır.",
  "Trade-off": "Hız, bellek, karmaşıklık ve bakım arasında yapılan bilinçli seçimdir.",
  Source: "Verinin doğduğu sistemdir; sahiplik ve anlam burada başlar.",
  "ETL / ELT": "Veriyi taşır ve dönüştürür; hata yönetimi ve tekrar çalışabilirlik ister.",
  "Data Lake": "Ham ve geniş veri alanıdır; katalog yoksa bataklığa döner.",
  Warehouse: "Raporlama için düzenlenmiş güvenilir veri katmanıdır.",
  Quality: "Eksik, çelişkili ve gecikmiş veriyi erken yakalar.",
  Catalog: "Verinin ne anlama geldiğini ve kimin sahiplendiğini görünür kılar.",
  Dashboard: "Karar ekranıdır; metrik tanımı yanlışsa güzel grafik yanlış karar üretir.",
  Governance: "Yetki, kalite, sahiplik ve denetim disiplinini kurar.",
  Incident: "Hizmet bozulduğunda hızlı toparlanma sürecidir.",
  Problem: "Tekrar eden olayların kök nedenini arar.",
  Change: "Canlı sistemi kontrollü değiştirme disiplinidir.",
  CAB: "Riskli değişiklikleri teknik, iş ve operasyon etkisiyle değerlendirir.",
  Release: "Değişikliği kullanıcıya çıkarır; rollback ve iletişim planı ister.",
  CMDB: "Varlık, sahiplik ve bağımlılık hafızasıdır.",
  SLA: "Hizmet sözünü ölçülebilir hale getirir.",
  Postmortem: "Olaydan sonra suçlu değil, tekrarını azaltacak ders arar."
};

function visualDetail(label, index, spec) {
  const clean = Array.isArray(label) ? label[0] : label;
  if (visualDetails[clean]) return visualDetails[clean];
  if (spec.type === "flow") return "Bu adım kendinden önceki çıktıyı alır, sonraki adıma temiz bir sorumluluk devreder.";
  if (spec.type === "timeline") return "Zaman sırasındaki bu durak, olayın izini ve karar anını görünür kılar.";
  if (spec.type === "matrix") return "Bu başlık tek başına değil; görev, risk, kanıt ve karar etkisiyle okunur.";
  if (spec.type === "split") return index === 0 ? "Sol taraf teknik kökü ve ilk nedeni anlatır." : "Sağ taraf iş etkisini ve yönetim kararını görünür kılar.";
  return "Sistemdeki rolü, hangi parçaya bağlı olduğu ve bozulunca nasıl belirti verdiğiyle anlaşılır.";
}

function normalizeVisualSpec(spec) {
  if (spec.type === "hub") return { ...spec, labels: spec.nodes || [] };
  if (spec.type === "layers") return { ...spec, labels: (spec.labels || []).map((item) => Array.isArray(item) ? item[0] : item) };
  if (spec.type === "split") return { ...spec, labels: [spec.left?.[0], spec.right?.[0]].filter(Boolean) };
  return { ...spec, labels: spec.labels || [] };
}

function visualTitle(label) {
  return Array.isArray(label) ? label[0] : label;
}

function visualSub(label, index, spec) {
  return Array.isArray(label) && label[1] ? label[1] : visualDetail(visualTitle(label), index, spec);
}

function conceptCards(spec) {
  return spec.labels.map((label, index) => {
    const title = visualTitle(label);
    const sub = visualSub(label, index, spec);
    return `
      <div class="visual-card" style="--i:${index}">
        <strong>${svgLabel(title)}</strong>
        <span>${svgLabel(sub)}</span>
      </div>
    `;
  }).join("");
}

function visualHeader(spec, center) {
  return `
    <div class="visual-story-head">
      <span>${svgLabel((spec.type || "scene").toUpperCase())}</span>
      <strong>${svgLabel(center)}</strong>
      <p>${svgLabel(spec.caption)}</p>
    </div>
  `;
}

function visualNote(note) {
  return note ? `<div class="visual-story-note">${svgLabel(note)}</div>` : "";
}

function renderFlowVisual(spec, center) {
  const labels = spec.labels.slice(0, 8);
  return `
    <div class="visual-story visual-flowline">
      ${visualHeader(spec, center)}
      <div class="flowline-track">
        ${labels.map((label, index) => `
          <div class="flowline-step" style="--i:${index}">
            <b>${index + 1}</b>
            <strong>${svgLabel(visualTitle(label))}</strong>
            <span>${svgLabel(visualSub(label, index, spec))}</span>
          </div>
        `).join("")}
      </div>
      ${visualNote(spec.note)}
    </div>
  `;
}

function renderTimelineVisual(spec, center) {
  return `
    <div class="visual-story visual-roadmap">
      ${visualHeader(spec, center)}
      <ol class="roadmap-list">
        ${spec.labels.slice(0, 8).map((label, index) => `
          <li style="--i:${index}">
            <b>${String(index + 1).padStart(2, "0")}</b>
            <strong>${svgLabel(visualTitle(label))}</strong>
            <span>${svgLabel(visualSub(label, index, spec))}</span>
          </li>
        `).join("")}
      </ol>
      ${visualNote(spec.note)}
    </div>
  `;
}

function renderStackVisual(spec, center) {
  return `
    <div class="visual-story visual-layercake">
      ${visualHeader(spec, center)}
      <div class="layercake-stack">
        ${spec.labels.slice(0, 8).map((label, index) => `
          <div class="layercake-row" style="--i:${index}">
            <strong>${svgLabel(visualTitle(label))}</strong>
            <span>${svgLabel(visualSub(label, index, spec))}</span>
          </div>
        `).join("")}
      </div>
      ${visualNote(spec.note)}
    </div>
  `;
}

function renderSplitVisual(spec, center) {
  const left = spec.left || [spec.labels[0] || "Sol taraf", visualSub(spec.labels[0] || "Sol taraf", 0, spec)];
  const right = spec.right || [spec.labels[1] || "Sağ taraf", visualSub(spec.labels[1] || "Sağ taraf", 1, spec)];
  return `
    <div class="visual-story visual-contrast">
      ${visualHeader(spec, center)}
      <div class="contrast-panels">
        <section>
          <small>Teknik kök</small>
          <strong>${svgLabel(left[0])}</strong>
          <p>${svgLabel(left[1] || visualDetail(left[0], 0, spec))}</p>
        </section>
        <section>
          <small>Karar etkisi</small>
          <strong>${svgLabel(right[0])}</strong>
          <p>${svgLabel(right[1] || visualDetail(right[0], 1, spec))}</p>
        </section>
      </div>
      ${visualNote(spec.note)}
    </div>
  `;
}

function renderPieVisual(spec, center) {
  const labels = spec.labels.slice(0, 6);
  return `
    <div class="visual-story visual-pieboard">
      ${visualHeader(spec, center)}
      <div class="pie-layout">
        <div class="pie-chart" aria-hidden="true"></div>
        <div class="pie-legend">
          ${labels.map((label, index) => `
            <div style="--i:${index}">
              <i></i>
              <strong>${svgLabel(visualTitle(label))}</strong>
              <span>${svgLabel(visualSub(label, index, spec))}</span>
            </div>
          `).join("")}
        </div>
      </div>
      ${visualNote(spec.note)}
    </div>
  `;
}

function renderMatrixVisual(spec, center) {
  const labels = spec.labels.slice(0, 8);
  const anchors = ["Görev", "Sınır", "Risk", "Kanıt", "Maliyet", "Karar", "Sahiplik", "İşletme"];
  return `
    <div class="visual-story visual-decision-map">
      ${visualHeader(spec, center)}
      <div class="decision-map">
        <div class="decision-core">
          <small>Özet Akıl</small>
          <strong>${svgLabel(center)}</strong>
          <span>${svgLabel(spec.note || "Bu kavramlar tek tek ezberlenmez; hizmete etkisi, riski ve kanıtı birlikte okunur.")}</span>
        </div>
        ${labels.map((label, index) => `
          <section class="decision-cell" style="--i:${index}">
            <em>${anchors[index % anchors.length]}</em>
            <strong>${svgLabel(visualTitle(label))}</strong>
            <span>${svgLabel(visualSub(label, index, spec))}</span>
          </section>
        `).join("")}
      </div>
    </div>
  `;
}

function renderHubVisual(spec, center) {
  const labels = spec.labels.slice(0, 8);
  return `
    <div class="visual-story visual-orbit-map">
      ${visualHeader(spec, center)}
      <div class="orbit-map">
        <div class="orbit-core">
          <strong>${svgLabel(center)}</strong>
          <span>${svgLabel(spec.note || "Merkezdeki kavram, çevresindeki rollerle birlikte anlam kazanır.")}</span>
        </div>
        ${labels.map((label, index) => `
          <section class="orbit-node" style="--i:${index}">
            <strong>${svgLabel(visualTitle(label))}</strong>
            <span>${svgLabel(visualSub(label, index, spec))}</span>
          </section>
        `).join("")}
      </div>
    </div>
  `;
}

function renderSystemVisual(spec, center) {
  const labels = spec.labels.slice(0, 8);
  const lanes = ["Giriş", "İşlem", "Durum", "Çıkış", "Kontrol", "İz", "Kapasite", "Geri Dönüş"];
  return `
    <div class="visual-story visual-system-map">
      ${visualHeader(spec, center)}
      <div class="system-map">
        <div class="system-spine">
          <strong>${svgLabel(center)}</strong>
          <span>${svgLabel(spec.note || "Sistem, parçaların sırayla değil birlikte çalışmasıyla güvenilir olur.")}</span>
        </div>
        <div class="system-lanes">
          ${labels.map((label, index) => `
            <section class="system-lane" style="--i:${index}">
              <small>${lanes[index % lanes.length]}</small>
              <strong>${svgLabel(visualTitle(label))}</strong>
              <span>${svgLabel(visualSub(label, index, spec))}</span>
            </section>
          `).join("")}
        </div>
      </div>
    </div>
  `;
}

function renderSceneVisual(spec, center) {
  const labels = spec.labels.slice(0, 8);
  return `
    <div class="visual-story visual-scene-board">
      ${visualHeader(spec, center)}
      <div class="scene-stage">
        <div class="scene-core">
          <strong>${svgLabel(center)}</strong>
          <span>${svgLabel(spec.note || "Bu sahnede kavramlar aynı olayın farklı rolleri olarak okunur.")}</span>
        </div>
        <div class="scene-items">
          ${labels.map((label, index) => `
            <div class="scene-item" style="--i:${index}">
              <strong>${svgLabel(visualTitle(label))}</strong>
              <span>${svgLabel(visualSub(label, index, spec))}</span>
            </div>
          `).join("")}
        </div>
      </div>
    </div>
  `;
}

function renderNetworkVisual(spec, center) {
  return `
    <div class="visual-story visual-network-map">
      ${visualHeader(spec, center)}
      <div class="network-map">
        ${spec.labels.slice(0, 8).map((label, index) => `
          <div class="network-hop" style="--i:${index}">
            <strong>${svgLabel(visualTitle(label))}</strong>
            <span>${svgLabel(visualSub(label, index, spec))}</span>
          </div>
        `).join("")}
      </div>
      ${visualNote(spec.note)}
    </div>
  `;
}

function renderSecurityVisual(spec, center) {
  return `
    <div class="visual-story visual-security-map">
      ${visualHeader(spec, center)}
      <div class="security-zones">
        ${spec.labels.slice(0, 8).map((label, index) => `
          <section style="--i:${index}">
            <strong>${svgLabel(visualTitle(label))}</strong>
            <span>${svgLabel(visualSub(label, index, spec))}</span>
          </section>
        `).join("")}
      </div>
      ${visualNote(spec.note)}
    </div>
  `;
}

function renderGovernanceVisual(spec, center) {
  return `
    <div class="visual-story visual-tabletop">
      ${visualHeader(spec, center)}
      <div class="tabletop">
        <div class="tabletop-center">${svgLabel(center)}</div>
        ${spec.labels.slice(0, 8).map((label, index) => `
          <div class="tabletop-seat" style="--i:${index}">
            <strong>${svgLabel(visualTitle(label))}</strong>
            <span>${svgLabel(visualSub(label, index, spec))}</span>
          </div>
        `).join("")}
      </div>
      ${visualNote(spec.note)}
    </div>
  `;
}

function renderVisualSpec(spec) {
  const normalized = normalizeVisualSpec(spec);
  const type = normalized.type || "scene";
  const kind = `visual-varied visual-varied-${type}`;
  const center = normalized.center || normalized.labels[0] || "Zihinsel Harita";
  let body = "";
  if (["flow", "sequence", "pipeline", "process"].includes(type)) body = renderFlowVisual(normalized, center);
  else if (type === "timeline") body = renderTimelineVisual(normalized, center);
  else if (type === "stack" || type === "layers") body = renderStackVisual(normalized, center);
  else if (type === "split") body = renderSplitVisual(normalized, center);
  else if (type === "matrix" || type === "decision") body = renderMatrixVisual(normalized, center);
  else if (type === "hub") body = renderHubVisual(normalized, center);
  else if (type === "system") body = renderSystemVisual(normalized, center);
  else if (type === "network") body = renderNetworkVisual(normalized, center);
  else if (type === "security" || type === "incident") body = renderSecurityVisual(normalized, center);
  else if (type === "governance") body = renderGovernanceVisual(normalized, center);
  else body = renderSceneVisual(normalized, center);
  return `
    <figure class="visual-canvas ${kind}">
      ${body}
      <figcaption>${svgLabel(normalized.caption)}</figcaption>
    </figure>
  `;
}

const visualBlueprints = {
  "asama-1-bilgisayar-temelleri": [
    { type: "scene", center: "Çalışan Düzen", labels: ["Elektrik", "Donanım", "OS", "Ağ", "Log", "Kullanıcı"], caption: "Bilgisayar temeli, parçaları tek tek saymak değil çalışan düzeni ve bozulunca bıraktığı izi görmektir.", note: "her parça görev, bağımlılık ve belirtiyle anlaşılır" },
    { type: "hub", center: "Anakart", nodes: ["CPU", "RAM", "NVMe/SSD", "GPU", "NIC", "PSU"], caption: "Kasa içi şehir: anakart yolları açar, CPU hesaplar, RAM çalışma alanı olur, disk kalıcı kayıt tutar.", note: "dar boğaz tek parçada değil veri yolunda da doğar" },
    { type: "layers", center: "Kernel", labels: [["Process", 220, 78], ["Memory", 680, 78], ["File System", 720, 185], ["Driver", 180, 185], ["Permission", 450, 238]], caption: "İşletim sistemi uygulamayla donanım arasındaki hakemdir; süreç, bellek, dosya ve sürücüyü aynı masada yönetir." },
    { type: "timeline", labels: ["pwd", "ls", "grep", "tail", "ssh", "journalctl"], caption: "Terminalde düşünmek, sorunu komutlarla adım adım daraltma alışkanlığıdır.", note: "komut satırı süslü ekranı değil kanıtı öne çıkarır" },
    { type: "stack", labels: ["Uygulama", "systemd servisleri", "Kullanıcı ve grup", "Dosya izinleri", "Paket yöneticisi", "Kernel"], caption: "Linux, kullanıcıdan servise kadar katmanlı bir işletme düzenidir; izin, servis ve log aynı hikayenin parçalarıdır." },
    { type: "scene", center: "Router", labels: ["Client", "Subnet", "Gateway", "Firewall", "Port", "Server"], caption: "Ağ temeli, paketin yerel ağdan gateway ve firewall üzerinden doğru porta ulaşma hikayesidir.", note: "IP adresi kimlik değil konum bilgisidir" },
    { type: "flow", labels: ["DNS", "TCP", "TLS", "HTTP", "Server", "Response"], caption: "Web isteği önce adresi bulur, sonra güvenli bağlantı kurar ve HTTP diliyle sunucudan cevap ister.", note: "sertifika, DNS ve routing bozulursa site sağlam olsa da görünmez olur" },
    { type: "timeline", labels: ["Branch", "Commit", "Push", "Pull Request", "Review", "Merge"], caption: "Git ve GitHub, kodun zaman içindeki hikayesini ekip hafızasına çevirir.", note: "commit geçmişi teknik kararın izidir" },
    { type: "matrix", labels: ["Tanım", "Benzetme", "Belirti", "Komut", "Log", "Karar"], caption: "Temel mülakat cevabı, kavramı tanım, belirti ve kanıtla aynı küçük tabloda toplar.", note: "ezber yerine olay içinde açıklama güven verir" }
  ],
  "asama-2-programlama": [
    { type: "flow", labels: ["Problem", "Algoritma", "Kod", "Test", "Hata", "Çözüm"], caption: "Programlama, dağınık problemi bilgisayarın izleyebileceği açık adımlara çevirmektir.", note: "iyi kod önce düşünce düzenidir" },
    { type: "scene", center: "Python", labels: ["Değişken", "Tip", "if", "for", "list/dict", "print/log"], caption: "Python temelleri, veriyi tutup koşul ve döngülerle küçük kararlar aldırma pratiğidir." },
    { type: "hub", center: "Fonksiyon", nodes: ["Parametre", "Return", "Modül", "Import", "Test"], caption: "Fonksiyon ve modül, kodu okunur küçük sorumluluklara böler.", note: "aynı işi tekrar yazmak yerine isim verip çağırırsın" },
    { type: "split", left: ["Veri", "state"], right: ["Davranış", "method"], caption: "OOP, veriyle davranışı aynı sorumluluk sınırında tutma disiplinidir.", note: "sınıf her şey değil, doğru sınırdır" },
    { type: "flow", labels: ["Input", "Validate", "JSON", "Try/Except", "Log", "Output"], caption: "Hata yönetimi ve JSON, sistemin dış dünyadan gelen veriyi güvenle okuyup cevap vermesini sağlar." },
    { type: "flow", labels: ["Request", "Header", "Body", "Status", "JSON", "Retry"], caption: "API kullanımı, HTTP isteğini sözleşme gibi okuyup hatayı ve cevabı ayrıştırmaktır." },
    { type: "hub", center: "SQL", nodes: ["Table", "JOIN", "WHERE", "Index", "GROUP BY"], caption: "SQL, kurum hafızasına doğru soruyu sorma dilidir.", note: "yanlış JOIN yanlış karar üretir" },
    { type: "layers", center: "Transaction", labels: [["ACID", 220, 78], ["Index", 680, 78], ["Constraint", 720, 185], ["Backup", 180, 185], ["Replication", 450, 238]], caption: "PostgreSQL kalıcı kaydın güven zinciridir; transaction, constraint ve yedek aynı güven duvarında durur." },
    { type: "matrix", labels: ["FastAPI", "Pandas", "NumPy", "PyTorch", "TensorFlow", "venv"], caption: "Python ekosistemi, web servisinden veri analizine ve model eğitimine uzanan araç ailesidir." },
    { type: "timeline", labels: ["Mini proje", "README", "Test", "Demo", "Log", "Sınırlar"], caption: "Kod portföyü, ne bildiğini çalışan örnek, ölçüm ve dürüst sınırlamalarla gösterir." }
  ],
  "asama-3-web-api": [
    { type: "flow", labels: ["Browser", "DNS", "TLS", "API", "DB", "HTML/JSON"], caption: "Web yolculuğu, tarayıcıdaki küçük isteğin backend ve veritabanı dünyasına uzanmasıdır." },
    { type: "stack", labels: ["JavaScript davranış", "CSS görünüm", "HTML iskelet", "DOM", "Tarayıcı motoru"], caption: "Frontend üç katmanlıdır: HTML iskeleti kurar, CSS görünüm verir, JavaScript davranış ekler." },
    { type: "scene", center: "Backend", labels: ["Route", "Controller", "Service", "Repository", "DB", "Log"], caption: "Backend, endpoint'i iş kuralına, iş kuralını kalıcı kayda bağlayan arka ofistir." },
    { type: "matrix", labels: ["GET", "POST", "PUT", "PATCH", "DELETE", "Status"], caption: "REST tasarımı, kaynaklara doğru HTTP metodu ve okunur durum koduyla sözleşme kazandırır." },
    { type: "layers", center: "Oturum", labels: [["Cookie", 220, 78], ["JWT", 680, 78], ["OAuth2", 720, 185], ["Role", 180, 185], ["Refresh", 450, 238]], caption: "Kimlik ve oturum mimarisi, kullanıcının kim olduğunu ve hangi kapıdan geçebileceğini belirler." },
    { type: "split", left: ["Cache", "hız"], right: ["Source of Truth", "doğruluk"], caption: "Redis, cache ve CDN hız kazandırır; ama eski veri riskini ana kayıtla dengede tutmak gerekir." },
    { type: "flow", labels: ["Event", "Producer", "Kafka", "Consumer", "Retry", "DLQ"], caption: "Mesaj kuyruğu, uzun işleri arkaya alır ve servisleri gevşek bağlı hale getirir." },
    { type: "hub", center: "Observability", nodes: ["Unit test", "Integration", "Metric", "Log", "Trace"], caption: "Test ve observability, sistemin hem çıkmadan önce hem canlıdayken konuşmasını sağlar." },
    { type: "flow", labels: ["Dockerfile", "Image", "Compose", "Port", "Volume", "Log"], caption: "Docker geliştirme ortamı, servisi bağımlılıklarıyla paketleyip tekrarlanabilir hale getirir." },
    { type: "matrix", labels: ["API", "Auth", "Cache", "Queue", "DB", "Scale"], caption: "Web mülakatı, tek endpoint'ten güvenlik, veri, hata ve ölçekleme konuşmasına açılır." }
  ],
  "asama-4-ai-temelleri": [
    { type: "split", left: ["İş problemi", "ölçülebilir hedef"], right: ["Model", "tahmin aracı"], caption: "Yapay zekâ, model büyüsünden önce doğru iş problemi ve doğru veriyle başlar." },
    { type: "flow", labels: ["Veri", "Özellik", "Model", "Tahmin", "Hata", "Genelleme"], caption: "Makine öğrenmesi, geçmiş veriden örüntü öğrenip yeni durumda makul tahmin üretir." },
    { type: "stack", labels: ["Çıktı", "Gizli katman", "Aktivasyon", "Ağırlık", "Girdi"], caption: "Sinir ağı, girdiyi katman katman dönüştürerek tahmine yaklaşan hesap makinesidir." },
    { type: "timeline", labels: ["Topla", "Temizle", "Etiketle", "Train", "Validation", "Test"], caption: "Veri hazırlığı, model eğitiminden önce hatayı ve veri sızıntısını engelleyen mutfaktır." },
    { type: "flow", labels: ["Metin", "Token", "Embedding", "Vektör", "Benzerlik", "Arama"], caption: "Token ve embedding, metni sayısal uzayda karşılaştırılabilir hale getirir." },
    { type: "flow", labels: ["Soru", "Chunk", "Vector DB", "Kaynak", "LLM", "Cevap"], caption: "RAG, modeli kurum kaynağına bağlayarak cevabı ezberden değil belgeden kurdurur." },
    { type: "matrix", labels: ["Accuracy", "Recall", "Bias", "Hallucination", "Latency", "Cost"], caption: "Model değerlendirme yalnız doğruluk değil güven, hız, maliyet ve yanlılık ölçümüdür." },
    { type: "split", left: ["PyTorch", "araştırma esnekliği"], right: ["TensorFlow", "üretim ekosistemi"], caption: "PyTorch ve TensorFlow, modeli kurma, eğitme ve üretime taşıma için farklı güçlü yollar sunar." },
    { type: "matrix", labels: ["Tanım", "Veri", "Metrik", "Risk", "Örnek", "Sınır"], caption: "AI mülakatında güçlü cevap, algoritmayı veri ve ölçüm hikayesine bağlar." }
  ],
  "asama-5-llm-gelistirme": [
    { type: "scene", center: "LLM Ürünü", labels: ["Prompt", "Context", "Model", "Tool", "Eval", "Log"], caption: "LLM geliştirme, sohbet kutusunu bağlam, araç, ölçüm ve güvenlikle ürüne çevirmektir." },
    { type: "flow", labels: ["Messages", "Model", "Tokens", "Response", "Cost", "Log"], caption: "OpenAI API kullanımında mesaj yapısı, model seçimi, token maliyeti ve log birlikte düşünülür." },
    { type: "matrix", labels: ["Rol", "Bağlam", "Örnek", "Sınır", "Şema", "Test"], caption: "Prompt tasarımı, modele ne yapacağını, neyi yapmayacağını ve çıktıyı nasıl vereceğini anlatır." },
    { type: "flow", labels: ["Intent", "Schema", "Tool Call", "API", "Result", "Answer"], caption: "Function calling, modelin dış sistemlerle kontrollü ve şemalı konuşmasını sağlar." },
    { type: "split", left: ["Ollama", "yerel kontrol"], right: ["Bulut model", "yüksek kalite"], caption: "Yerel model seçimi mahremiyet, kapasite, kalite ve işletme maliyeti dengesidir." },
    { type: "hub", center: "MCP", nodes: ["Client", "Server", "Tool", "Resource", "Auth"], caption: "MCP, modelin araç ve veri kaynaklarına standart bir protokolle bağlanmasını sağlar." },
    { type: "flow", labels: ["Belge", "Chunk", "Embedding", "Retriever", "Rerank", "Citation"], caption: "Kurumsal RAG, belgeyi parçalar, arar, yeniden sıralar ve cevabı kaynakla bağlar." },
    { type: "timeline", labels: ["Prompt v1", "Eval", "Deploy", "Trace", "Feedback", "Prompt v2"], caption: "LLMOps, modelin canlıdaki kalitesini sürüm, izleme, eval ve geri bildirimle yönetir." },
    { type: "layers", center: "LLM", labels: [["System", 220, 78], ["User", 680, 78], ["Context", 720, 185], ["Guardrail", 180, 185], ["Approval", 450, 238]], caption: "LLM güvenliği, talimat, bağlam, araç ve insan onayını ayrı katmanlarda korur." },
    { type: "matrix", labels: ["Demo", "RAG", "Eval", "Cost", "Security", "README"], caption: "LLM portföyünde güçlü proje, çalışan ekran kadar ölçüm, kaynak, maliyet ve güvenlik sınırı gösterir." }
  ],
  "asama-6-devops-bulut": [
    { type: "split", left: ["Geliştirme", "kod ve test"], right: ["Operasyon", "canlı ve nöbet"], caption: "DevOps, yazan ekiple işleten ekibin aynı hizmet sorumluluğunda buluşmasıdır." },
    { type: "scene", center: "Container", labels: ["Image", "Registry", "Volume", "Network", "Env", "Log"], caption: "Docker görseli, container'ın etrafındaki kalıcı veri, ağ, ortam ve log kararlarını gösterir." },
    { type: "hub", center: "Cluster", nodes: ["Pod", "Deployment", "Service", "Ingress", "ConfigMap", "HPA"], caption: "Kubernetes bir container kalabalığını adres, sağlık, ölçek ve sürüm düzenine sokar." },
    { type: "timeline", labels: ["Commit", "Build", "Test", "Scan", "Deploy", "Rollback"], caption: "CI/CD hattı kodu canlıya taşırken durma ve geri dönüş noktalarını görünür kılar." },
    { type: "hub", center: "Dashboard", nodes: ["Metric", "Log", "Trace", "Alert", "SLO"], caption: "Monitoring ve logging, üretim ortamının nabzını ve olay hikayesini aynı ekrana taşır." },
    { type: "layers", center: "Cloud", labels: [["Region", 220, 78], ["AZ", 680, 78], ["VPC", 720, 185], ["IAM", 180, 185], ["Storage", 450, 238]], caption: "Bulut temeli, kaynak kiralamaktan çok region, ağ, IAM ve sorumluluk paylaşımı okumaktır." },
    { type: "matrix", labels: ["Compute", "Storage", "Network", "IAM", "DB", "Monitor"], caption: "AWS ve Google Cloud farklı adlar kullanır; karar aileleri compute, storage, network ve IAM etrafında döner." },
    { type: "timeline", labels: ["Backup", "Offsite", "Immutable", "Restore", "RTO", "RPO"], caption: "Felaket kurtarma, yedeğin alınması kadar geri döndürülmesinin prova edilmesidir." },
    { type: "matrix", labels: ["Tag", "Budget", "Rightsize", "Reserve", "Idle", "Report"], caption: "Bulut maliyeti, kaynak etiketleme, bütçe alarmı ve kullanım optimizasyonu ile yönetilir." },
    { type: "scene", center: "Production", labels: ["Pipeline", "Pod", "Log", "Alarm", "Rollback", "Postmortem"], caption: "DevOps mülakatı, üretim kokusu taşıyan olay çözme haritasıyla güçlenir." }
  ],
  "siber-guvenlik": [
    { type: "layers", center: "Risk", labels: [["Varlık", 220, 78], ["Tehdit", 680, 78], ["Zafiyet", 720, 185], ["Kontrol", 180, 185], ["Kanıt", 450, 238]], caption: "Siber güvenlik, korku değil varlık, tehdit, zafiyet ve kontrol ilişkisini görünür kılmaktır." },
    { type: "hub", center: "IAM", nodes: ["MFA", "SSO", "PAM", "Role", "Review"], caption: "Kimlik güvenliği, doğru kişiye doğru zamanda doğru yetkiyi verme disiplinidir." },
    { type: "scene", center: "DMZ", labels: ["Internet", "Firewall", "WAF", "IDS/IPS", "Segment", "Server"], caption: "Ağ güvenliği, dış trafik ile kritik sunucu arasındaki kapıları ve yangın bölmelerini düzenler." },
    { type: "matrix", labels: ["Input", "AuthZ", "SQLi", "XSS", "SAST", "DAST"], caption: "Uygulama güvenliği, kötü niyetli girdiyi ve yetki atlamayı kod daha canlıya çıkmadan yakalamaya çalışır." },
    { type: "hub", center: "Endpoint", nodes: ["EDR", "Patch", "Hardening", "Disk şifre", "Inventory"], caption: "Uç nokta güvenliği, çantadaki laptop ile sunucudaki ajanı aynı envanter aklında toplar." },
    { type: "flow", labels: ["Log Source", "Collector", "SIEM", "Correlation", "SOC", "Playbook"], caption: "SIEM ve SOC, dağınık logları anlamlı alarma, alarmı olay müdahalesine dönüştürür." },
    { type: "stack", labels: ["Kişisel veri", "Sınıflandırma", "Maskeleme", "DLP", "Erişim", "Saklama"], caption: "Veri güvenliği, bilginin hassasiyetini belirleyip erişim, maskeleme ve saklama kararına bağlar." },
    { type: "timeline", labels: ["Detect", "Triage", "Contain", "Eradicate", "Recover", "Lessons"], caption: "Olay müdahalesi, saldırı anında prova edilmiş sakin bir sırayı izler." },
    { type: "scene", center: "Tatbikat", labels: ["Senaryo", "Rol", "Log", "İletişim", "Rapor", "Aksiyon"], caption: "Siber tatbikat, krizin teknik ve iletişim boşluklarını olay gelmeden gösterir." },
    { type: "matrix", labels: ["Risk", "Kontrol", "Kanıt", "Etki", "Bütçe", "Mevzuat"], caption: "Siber güvenlik mülakatı, tehdidi iş etkisi ve denetim kanıtıyla anlatınca olgunlaşır." }
  ],
  "buyuk-mimariler": [
    { type: "scene", center: "Tek İşlem", labels: ["CDN", "WAF", "Gateway", "Service", "DB", "Log"], caption: "Büyük mimari, ekrandaki tek işlemin arkasındaki kalabalık hizmet zincirini görmektir." },
    { type: "flow", labels: ["Arama", "Sepet", "Stok", "Ödeme", "Sipariş", "Kargo"], caption: "E-ticaret siparişi, hız ve tutarlılığın aynı müşteri sözünde birleştiği yolculuktur." },
    { type: "timeline", labels: ["Intent", "3DS", "Auth", "Capture", "Callback", "Reconcile"], caption: "Ödeme sistemi saniyelik cevap verir ama idempotency ve mutabakatla muhasebe ciddiyetinde çalışır." },
    { type: "flow", labels: ["Depo", "Barkod", "Aktarma", "Dağıtım", "Teslim", "Bildirim"], caption: "Lojistik takip, paketin fiziksel yolunu dijital olay izlerine çevirir." },
    { type: "stack", labels: ["Vatandaş ekranı", "Kimlik doğrulama", "Başvuru kaydı", "Object storage", "İş akışı", "Audit log"], caption: "Kamu başvurusu, ekrandaki başarıyı resmi kayıt ve denetim iziyle birleştirir." },
    { type: "scene", center: "Hasta", labels: ["Randevu", "Doktor", "Kayıt", "Lab", "Yetki", "Audit"], caption: "Hastane sistemi, hız ile mahremiyeti aynı hasta yolculuğunda korur." },
    { type: "flow", labels: ["Kimlik", "Limit", "Fraud", "Ledger", "Transfer", "Mutabakat"], caption: "Banka transferi, para hareketinde kesinlik, yetki ve kanıt zinciri ister." },
    { type: "timeline", labels: ["Malzeme", "Seri No", "İstasyon", "Test", "Onay", "İz"], caption: "Savunma üretiminde dijital iz, parçanın geçmişini denetimde anlatabilme gücüdür." },
    { type: "flow", labels: ["Sensor", "Stream", "Map", "Decision", "Command", "Audit"], caption: "Komuta kontrol sisteminde zaman, verinin kendisi kadar kritik bir karar girdisidir." },
    { type: "scene", center: "Temsilci", labels: ["IVR", "CRM", "Ticket", "Bilgi bankası", "Kimlik", "SLA"], caption: "Çağrı merkezi mimarisi, müşterinin sesini kurum hafızasına bağlar." },
    { type: "flow", labels: ["Event", "Preference", "Template", "Queue", "Provider", "Delivery"], caption: "Bildirim sistemi doğru mesajı, doğru kanaldan ve doğru zamanda ulaştırma sanatıdır." },
    { type: "hub", center: "Oturum", nodes: ["SSO", "OAuth2", "JWT", "Role", "Audit"], caption: "Kimlik ve oturum mimarisi, rahat giriş ile denetlenebilir erişimi dengeler." },
    { type: "flow", labels: ["Source", "ETL", "Warehouse", "Quality", "Metric", "Dashboard"], caption: "Veri ambarı, dağınık sistem kayıtlarını ortak tanım ve güvenilir rapora dönüştürür." },
    { type: "split", left: ["Mobil", "offline/retry"], right: ["Backend", "idempotency/API"], caption: "Mobil-backend yolu, kesintili ağda bile işlemin ne durumda olduğunu kullanıcıya dürüstçe göstermelidir." },
    { type: "layers", center: "Scale", labels: [["CDN", 220, 78], ["WAF", 680, 78], ["Queue", 720, 185], ["Cache", 180, 185], ["DB", 450, 238]], caption: "Yüksek trafik mimarisi, en dar kapıyı bulup kritik kullanıcı yolunu korumaya çalışır." }
  ],
  "proje-kamu-yonetim": [
    { type: "flow", labels: ["İhtiyaç", "Değer", "Kapsam", "Plan", "Kabul", "Fayda"], caption: "Kurumsal proje, fikirden önce hangi değeri üreteceğini netleştirir." },
    { type: "split", left: ["İstek", "Excel ekranı"], right: ["Gereksinim", "hatalı veriyi azalt"], caption: "İhtiyaç analizi, kullanıcının söylediği çözümün altındaki gerçek derdi bulur." },
    { type: "matrix", labels: ["Performans", "Güvenlik", "Log", "Yedek", "Eğitim", "Kabul"], caption: "Teknik şartname, dileği ölçülebilir kabul kanıtına dönüştürür." },
    { type: "hub", center: "RACI", nodes: ["Sorumlu", "Hesap veren", "Danışılan", "Bilgilenen", "Karar"], caption: "Paydaş haritası ve RACI, kimin hangi anda masaya geleceğini netleştirir." },
    { type: "timeline", labels: ["Varsayım", "Risk", "Tetik", "Aksiyon", "Sorun", "Ders"], caption: "Risk kaydı, gelecekteki tartışmayı bugünden görünür kılar." },
    { type: "flow", labels: ["Test planı", "UAT", "Smoke", "Go-live", "Rollback", "İletişim"], caption: "Canlıya geçiş, teknik plan kadar kullanıcı ve destek iletişimi de ister." },
    { type: "matrix", labels: ["SLA", "Bakım", "Sürüm", "Doküman", "Eğitim", "Exit plan"], caption: "Tedarikçi yönetimi, parlak sunumu ölçülebilir hizmet taahhüdüne çevirir." },
    { type: "hub", center: "CMDB", nodes: ["Lisans", "Sunucu", "Sahip", "Maliyet", "Yama"], caption: "Bütçe ve envanter, kurumun neye sahip olduğunu ve neyi riske attığını gösterir." },
    { type: "scene", center: "Kamu BT", labels: ["Merkez", "Taşra", "Belediye", "Üniversite", "Protokol", "Bütçe"], caption: "Kamu BT işleyişi teknik çözümü idari belge, bütçe ve sorumluluk sınırıyla yaşatır." },
    { type: "stack", labels: ["Resmi yazı", "Onay", "KVKK", "Audit log", "Arşiv", "Denetim"], caption: "KVKK ve denetim izi, projenin son süsü değil tasarımın iskeletidir." },
    { type: "scene", center: "Mülakat Masası", labels: ["Talep sahibi", "Teknik ekip", "Satın alma", "Hukuk", "Güvenlik", "Yönetici"], caption: "Proje ve kamu mülakatında güçlü aday, aynı masadaki farklı dilleri tek akışta anlatır." }
  ],
  "liderlik-kriz-gelecek": [
    { type: "split", left: ["Teknik kök", "node/pod/log"], right: ["Yönetim etkisi", "hizmet/risk/bütçe"], caption: "Teknik lider, ayrıntıyı saklamadan yönetim kararına çevirebilir." },
    { type: "matrix", labels: ["Etki", "Seçenek", "Risk", "Maliyet", "Öneri", "Sonraki bilgi"], caption: "Üst makama anlatım, teknik ayrıntıyı karar aldıracak sıraya koyar." },
    { type: "hub", center: "Ekip", nodes: ["Uzmanlık", "Yedeklilik", "Runbook", "Mentorluk", "Nöbet"], caption: "Ekip kurmak, tek kahramanı değil paylaşılmış bilgi ve sorumluluğu büyütmektir." },
    { type: "timeline", labels: ["Bilgi", "Varsayım", "Risk", "Karar", "Sinyal", "Geri dönüş"], caption: "Karar almak, belirsizliği bitirmek değil geri dönüş yolu açıkken yön seçmektir." },
    { type: "matrix", labels: ["Capex", "Opex", "TCO", "Risk", "SLA", "Değer"], caption: "Bütçe savunması, fiyatı risk ve iş değeri diline çevirdiğinde güçlenir." },
    { type: "scene", center: "Kriz Odası", labels: ["Olay kaydı", "Etki", "Roller", "Kanal", "Aksiyon", "Bilgi"], caption: "Kriz yönetimi, ilk dakikada sisin içinde kayıt ve rol düzeni kurmaktır." },
    { type: "flow", labels: ["Rapor", "Lock", "Queue", "Kullanıcı", "Analiz", "Fix"], caption: "Veritabanı kilidi, teknik beklemeyi kullanıcı ve iş etkisine dönüştürebilir." },
    { type: "flow", labels: ["DNS", "TTL", "Cert", "Chain", "CDN", "Browser"], caption: "SSL ve DNS krizi, küçük kayıtların bütün hizmet kapısını kapatabileceğini gösterir." },
    { type: "scene", center: "DDoS", labels: ["Bot", "CDN", "WAF", "Rate limit", "Origin", "İletişim"], caption: "DDoS savunması, kaba kapasiteden çok doğru yerde filtreleme ve iletişim işidir." },
    { type: "timeline", labels: ["Backup", "Key", "Restore", "Verify", "Open", "Report"], caption: "Yedek dönmüyorsa teknik dosyadan çok prova edilmemiş organizasyon sınanır." },
    { type: "matrix", labels: ["Timeline", "Impact", "Root cause", "MTTR", "Owner", "Due date"], caption: "Kriz sonrası rapor, olayı kapatmak için değil aynı dersi tekrar ödememek için yazılır." },
    { type: "layers", center: "AI Ofis", labels: [["Veri", 220, 78], ["Model", 680, 78], ["Onay", 720, 185], ["Policy", 180, 185], ["Audit", 450, 238]], caption: "Yapay zekânın ofise girişi, verimlilik kadar veri sınırı ve insan onayı meselesidir." },
    { type: "hub", center: "GPU", nodes: ["Enerji", "Soğutma", "Model", "Batching", "Maliyet"], caption: "GPU ve enerji baskısı, yapay zekâ vaadini veri merkezi kapasitesiyle yüzleştirir." },
    { type: "scene", center: "Egemenlik", labels: ["Veri konumu", "Bulut", "Exit plan", "Tedarik", "Açık standart", "Hukuk"], caption: "Dijital egemenlik, kritik hizmetin hangi altyapı ve bağımlılıkla yaşadığını sormaktır." },
    { type: "timeline", labels: ["Temel", "Sistem", "Güvenlik", "Veri", "AI", "Liderlik"], caption: "Üst düzey BT rotası, derin teknik bilgiyi doğru soru ve karar sezgisine çevirir." }
  ],
  "mulakat-ve-ust-duzey-hazirlik": [
    { type: "flow", labels: ["Tanım", "Örnek", "Risk", "Metrik", "Ders", "Karar"], caption: "Mülakat cevabı ezber değil, düşünce zinciriyle kurulduğunda güven verir." },
    { type: "matrix", labels: ["CPU", "RAM", "Disk", "OS", "DNS", "Log"], caption: "Bilgisayar temelleri cevabı, parçaları belirti ve kanıtla aynı tabloda anlatır." },
    { type: "flow", labels: ["Python", "OOP", "SQL", "API", "Log", "Test"], caption: "Kod mülakatında güçlü aday, yazdığı kodun veri ve dış sistemle ilişkisini gösterir." },
    { type: "scene", center: "Backend", labels: ["JWT", "REST", "Cache", "Queue", "DB", "Status"], caption: "Web mülakatı, tek isteği auth, cache, kuyruk ve veritabanı konuşmasına açar." },
    { type: "hub", center: "Production", nodes: ["Linux", "Network", "Docker", "K8s", "Cloud"], caption: "Linux, ağ, Docker, Kubernetes ve bulut soruları üretim sezgisini ölçer." },
    { type: "timeline", labels: ["Detect", "Contain", "Recover", "Report", "Fix", "Evidence"], caption: "Siber güvenlik mülakatında olay müdahalesi sırası panik yerine disiplin gösterir." },
    { type: "flow", labels: ["Data", "Embedding", "RAG", "LLM", "Guardrail", "Eval"], caption: "AI mülakatında model, veri, güvenlik, maliyet ve eval aynı cevabın parçalarıdır." },
    { type: "matrix", labels: ["Requirement", "API", "DB", "Cache", "Queue", "Failure"], caption: "Sistem tasarımı cevabı, teknoloji seçimini gereksinim ve hata davranışıyla gerekçelendirir." },
    { type: "split", left: ["Teknik karar", "mimari ve risk"], right: ["Yönetim dili", "bütçe ve insan"], caption: "Yöneticilik mülakatında teknik bilgi bütçe, risk, mevzuat ve insan diline çevrilir." },
    { type: "timeline", labels: ["Komut", "Sistem", "Ekip", "Risk", "Strateji", "Liderlik"], caption: "Kişisel gelişim rotası, teknisyenlik bilgisini stratejik BT liderliği sezgisine taşır." }
  ]
};

function illustrationMotifs(category, chapter, spec) {
  const titleWords = cleanTitle(chapter)
    .split(/[\s,:]+/)
    .filter((word) => word.length > 3)
    .slice(0, 4);
  const labels = normalizeVisualSpec(spec).labels.slice(0, 4).map(visualTitle);
  const fallback = {
    systems: ["Sunucu", "Ağ", "Kayıt", "Süreklilik"],
    software: ["Kod", "API", "Veri", "Test"],
    ai: ["Veri", "Model", "Kaynak", "Onay"],
    security: ["Kimlik", "Sınır", "Log", "Müdahale"],
    architecture: ["Kullanıcı", "Servis", "Kayıt", "Akış"],
    project: ["Paydaş", "Kabul", "Risk", "Kanıt"],
    leadership: ["Karar", "Ekip", "Bütçe", "Kriz"],
    interview: ["Tanım", "Örnek", "Risk", "Kanıt"]
  }[category.mode] || ["Kavram", "Saha", "Kanıt", "Karar"];
  return [...new Set([...labels, ...titleWords, ...fallback])].slice(0, 4);
}

function visualSceneFor(category, chapter, spec) {
  const text = normalizeText(`${category.id} ${chapter.title} ${spec.caption || ""}`);
  if (text.includes("docker") || text.includes("container") || text.includes("kubernetes") || text.includes("devops")) return "ops";
  if (text.includes("siber") || text.includes("guvenlik") || text.includes("iam") || text.includes("firewall") || text.includes("ddos") || text.includes("soc")) return "security";
  if (text.includes("yapay") || text.includes("llm") || text.includes("rag") || text.includes("model") || text.includes("embedding")) return "ai";
  if (text.includes("kamu") || text.includes("proje") || text.includes("sartname") || text.includes("raci") || text.includes("kvkk")) return "governance";
  if (text.includes("banka") || text.includes("odeme") || text.includes("lojistik") || text.includes("hastane") || text.includes("savunma") || text.includes("mimari")) return "institution";
  if (text.includes("kriz") || text.includes("yedek") || text.includes("dns") || text.includes("ssl") || text.includes("kilit") || text.includes("postmortem")) return "incident";
  if (text.includes("python") || text.includes("sql") || text.includes("api") || text.includes("backend") || text.includes("frontend") || text.includes("javascript")) return "software";
  if (text.includes("cpu") || text.includes("ram") || text.includes("linux") || text.includes("ag") || text.includes("terminal") || text.includes("donanim")) return "machine";
  if (category.mode === "interview") return "interview";
  const scenes = ["machine", "software", "ai", "ops", "security", "institution", "governance", "incident", "interview"];
  return scenes[(chapter.number + category.order) % scenes.length];
}

function visualSeed(value) {
  return [...value].reduce((sum, char) => (sum * 31 + char.charCodeAt(0)) % 9973, 17);
}

function illustrationStyle(category, chapter, scene) {
  const seed = visualSeed(`${category.id}-${chapter.id}-${scene}`);
  const hueA = (seed * 17 + category.order * 29) % 360;
  const hueB = (hueA + 74 + chapter.number * 9) % 360;
  return [
    `--scene-hue-a:${hueA}`,
    `--scene-hue-b:${hueB}`,
    `--lesson-seed:${seed}`
  ].join(";");
}

function lessonScenario(category, chapter, labels) {
  const title = cleanTitle(chapter);
  const actor = {
    systems: "operasyon ekibi",
    software: "geliştirme ekibi",
    ai: "ürün ve veri ekibi",
    security: "SOC ve güvenlik ekibi",
    architecture: "mimari karar masası",
    project: "proje ve kabul komisyonu",
    leadership: "teknik lider",
    interview: "mülakat masası"
  }[category.mode] || "teknik ekip";
  const first = labels[0] || firstPhrase(title);
  const second = labels[1] || "kanıt";
  return `${actor}, ${title.toLocaleLowerCase("tr")} konusunu ${first} üzerinden başlatır; karar ${second} ve kullanıcı etkisiyle olgunlaşır.`;
}

function lessonRisk(category, chapter, labels) {
  const title = cleanTitle(chapter);
  const riskByMode = {
    systems: "Belirti yalnız makinede aranırsa asıl darboğaz ağ, disk, yetki veya işletim düzeninde saklı kalır.",
    software: "Sözleşme, test ve log düşünülmezse çalışan kod canlıda kırılgan bir hizmete dönüşür.",
    ai: "Kaynak, yetki ve değerlendirme net değilse akıcı cevap güvenilir bilgi sanılır.",
    security: "Yetki, segment ve log bağı koparsa saldırıdan sonra neyin yaşandığı kanıtlanamaz.",
    architecture: "Ana kayıt, kuyruk, cache ve entegrasyon sınırı karışırsa küçük işlem kurum krizine döner.",
    project: "Kabul ölçütü ve sorumluluk yazılmazsa son gün teknik tartışma idari krize dönüşür.",
    leadership: "Karar yalnız teknik ayrıntıda kalırsa maliyet, insan, mevzuat ve güven etkisi görünmez olur.",
    interview: "Cevap ezbere kalırsa aday kavramı bilir ama sistemi okuyamadığını hissettirir."
  };
  return `${riskByMode[category.mode] || "Kavram bağlamından koparsa yanlış teknoloji doğru sorun sanılır."} ${labels[2] ? `${labels[2]} özellikle erken kontrol edilmelidir.` : title}`;
}

function lessonEvidence(category, labels) {
  const evidenceByMode = {
    systems: ["log", "metrik", "servis durumu"],
    software: ["test sonucu", "API cevabı", "hata logu"],
    ai: ["kaynak belge", "eval sonucu", "kullanıcı geri bildirimi"],
    security: ["erişim izi", "SIEM korelasyonu", "olay zaman çizelgesi"],
    architecture: ["ana kayıt", "trace", "mutabakat"],
    project: ["kabul kriteri", "karar kaydı", "risk listesi"],
    leadership: ["etki özeti", "seçenek analizi", "aksiyon sahibi"],
    interview: ["tanım", "örnek vaka", "ölçüm"]
  }[category.mode] || ["kanıt", "ölçüm", "karar kaydı"];
  return [...new Set([...labels.slice(0, 2), ...evidenceByMode])].slice(0, 4);
}

function lessonTakeaway(category, chapter, labels) {
  const title = firstPhrase(cleanTitle(chapter));
  const last = labels.at(-1) || "karar";
  return `${title} başlığı, ${last} noktasında somutlaşır: iyi okur tanımı değil, akışı ve bozulma davranışını anlatır.`;
}

function renderLessonVisual(category, chapter, spec) {
  const normalized = normalizeVisualSpec(spec);
  const title = chapter.title;
  const labels = normalized.labels.map(visualTitle).filter(Boolean).slice(0, 6);
  const safeLabels = labels.length ? labels : illustrationMotifs(category, chapter, normalized);
  const scene = visualSceneFor(category, chapter, normalized);
  const style = illustrationStyle(category, chapter, scene);
  const caption = normalized.caption || "Bu bölümün özeti, kavramı olay akışı, risk ve kanıt üzerinden okumaktır.";
  const scenario = lessonScenario(category, chapter, safeLabels);
  const risk = lessonRisk(category, chapter, safeLabels);
  const evidence = lessonEvidence(category, safeLabels);
  const takeaway = lessonTakeaway(category, chapter, safeLabels);
  return `
    <figure class="visual-canvas visual-lesson lesson-${scene}" style="${style}">
      <div class="lesson-shell">
        <header class="lesson-head">
          <small>${escapeHtml(displayCategoryTitle(category))} / Bölüm ${chapter.number}</small>
          <strong>${escapeHtml(title)}</strong>
          <p>${escapeHtml(caption)}</p>
        </header>
        <div class="lesson-board">
          <section class="lesson-case">
            <span>Sahne</span>
            <p>${escapeHtml(scenario)}</p>
          </section>
          <ol class="lesson-flow">
            ${safeLabels.map((label, index) => `
              <li style="--i:${index}">
                <b>${String(index + 1).padStart(2, "0")}</b>
                <strong>${escapeHtml(label)}</strong>
                <span>${escapeHtml(visualSub(label, index, normalized))}</span>
              </li>
            `).join("")}
          </ol>
          <section class="lesson-risk">
            <span>Kırılma Noktası</span>
            <p>${escapeHtml(risk)}</p>
          </section>
          <section class="lesson-evidence">
            <span>Kanıt</span>
            <ul>${evidence.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
          </section>
          <section class="lesson-takeaway">
            <span>Akılda Kalacak Ders</span>
            <p>${escapeHtml(takeaway)}</p>
          </section>
        </div>
      </div>
      <figcaption>${escapeHtml(caption)}</figcaption>
    </figure>
  `;
}

function renderIllustration(category, chapter, spec) {
  return renderLessonVisual(category, chapter, spec);
}

function visualFor(category, chapter) {
  const spec = chapterVisualSpecs[chapter.id] || visualBlueprints[category.id]?.[chapter.number - 1] || {
    type: "matrix",
    labels: ["Kavram", "Görev", "Bağımlılık", "Risk", "Kanıt", "Karar"],
    caption: "Bu sayfanın zihinsel özeti, kavramı görev, bağımlılık, risk ve kanıtla birlikte düşünmektir.",
    note: "her teknik terim bir sistem davranışına bağlanır"
  };
  return renderIllustration(category, chapter, spec);
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
            <span>${escapeHtml(displayCategoryTitle(category))}</span>
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
            <h3>${escapeHtml(displayCategoryTitle(category))}</h3>
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
      <p class="kicker">${escapeHtml(displayCategoryTitle(category))} / Bölüm ${chapter.number}</p>
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
