const scenarios = [
  {
    id: "vaka-1",
    role: "Genel Müdür Yardımcısı",
    level: "7/10",
    time: "09:12",
    category: "Teknik Krizler ve Teknik Derinleşme",
    title: "Pazartesi Sabahı Taşra Yavaşladı",
    roleText:
      "Bu senaryoda sen Genel Müdür Yardımcısısın. Bakanlığın merkez ve taşra birimlerinde kullanılan kritik bir uygulamada performans düşüşü başlıyor. Senin görevin teknik ekiplerin ayrıntılarını yönetilebilir karara, üst yönetim için de doğru bilgilendirme notuna çevirmek.",
    sections: [
      {
        type: "paragraphs",
        paragraphs: [
          "Saat 09.12. Bakanlığın merkez ve taşra birimlerinde kullanılan kritik bir iş uygulamasında ekran geçişleri belirgin biçimde yavaşlamaya başlar. İlk bildirimler üç ilden gelir; ardından çağrı merkezi kayıtlarında aynı şikayetin farklı coğrafi bölgelerden tekrarlandığı görülür.",
          "Şikayet cümlesi teknik değildir: sistem açılıyor ama işlem bitmiyor.",
          "Bu cümle, üst yönetici için önemlidir. Çünkü vatandaşın veya taşra personelinin gördüğü şey teknik alarm değil, hizmetin aksamasıdır.",
          "Nöbetçi ekip ilk bakışta uygulama sunucularının ayakta olduğunu, veri tabanında kesinti olmadığını, internet çıkışında genel bir problem görünmediğini bildirir.",
          "Bu rahatlatıcı ama tehlikeli bir bilgidir.",
          "Çünkü kritik sistemlerde en yanıltıcı cümlelerden biri şudur: sistem çalışıyor.",
          "Üst yönetici bu cümlenin arkasından hemen şunu sormalıdır: çalışıyor ama kabul edilebilir hizmet seviyesinde mi çalışıyor?"
        ]
      },
      {
        heading: "Kriz Masası",
        type: "paragraphs",
        paragraphs: [
          "Genel Müdür Yardımcısı, Sistem ve Ağ Daire Başkanı ile Uygulama Geliştirme Daire Başkanını aynı kısa toplantıya alır. Siber Güvenlik Daire Başkanı da dinleyici olarak çağrılır.",
          "Çünkü performans düşüşü bazen kapasite sorunudur, bazen hatalı sürüm etkisidir, bazen de düşük yoğunluklu ama hedefli bir saldırının ilk belirtisidir.",
          "Bu aşamada amaç suçlu bulmak değil, olayın türünü daraltmaktır."
        ]
      },
      {
        heading: "Sistem ve Ağ Daire Başkanı",
        type: "lines",
        paragraphs: [
          "Şunu sorar:",
          "Neden host bu kadar doldu?",
          "CPU Ready neden yükseldi?",
          "DRS neden yükü dağıtmadı?",
          "Son gece bakımında hangi sanal makineler taşındı?",
          "Storage latency normal mi?"
        ]
      },
      {
        heading: "Teknik Terim",
        type: "paragraphs",
        paragraphs: [
          "CPU Ready, sanal sunucunun işlemci kullanmak istediği halde fiziksel işlemci kaynağı beklediği süreyi gösterir.",
          "Daire Başkanı seviyesinde bunun anlamı şudur: ekranda CPU kullanımı düşük görünebilir ama sanal makine aslında işlemciye sıra bekliyor olabilir.",
          "DRS, yani Distributed Resource Scheduler, sanal sunucuları fiziksel hostlar arasında yük dengesine göre dağıtmaya çalışan mekanizmadır.",
          "DRS varsa sistem kendini otomatik toparlar diye düşünmek üst yönetici hatasıdır. Yönetici sorusu şudur: DRS var mı değil, olay anında fiilen karar alabilecek durumda mı?"
        ]
      },
      {
        heading: "İlk 20 Dakika",
        type: "paragraphs",
        paragraphs: [
          "İlk 20 dakikada üç bilgi netleşir.",
          "Birincisi, problem tek il veya tek hat kaynaklı değildir.",
          "İkincisi, önceki gece planlı bir yama geçişi yapılmıştır ancak uygulama kodunda geri dönüş gerektiren açık bir hata görünmemektedir.",
          "Üçüncüsü, sanallaştırma kümesinde iki fiziksel host bakım sonrası beklenenden fazla yük taşımaktadır ve bazı kritik uygulama sunucularında CPU Ready değerleri normal eşiklerin üzerine çıkmıştır.",
          "Burada Genel Müdür Yardımcısının refleksi belirleyicidir. Teknik ekibe hemen düzeltin demek yetmez.",
          "Doğru talimat dört parçalıdır: mevcut değişiklikleri dondurun, etki alanını ölçün, geri dönüş seçeneğini hazır tutun, 30 dakika içinde Bakan Yardımcısına verilecek sade notu oluşturun."
        ]
      },
      {
        heading: "İlk Yönetici Notu",
        type: "quote",
        paragraphs: [
          "Bakanlık merkez ve taşra uygulamalarından birinde performans düşüşü gözlenmiştir. Sistem kesintisi bulunmamaktadır; işlem sürelerinde uzama vardır. İlk değerlendirme, gece bakımından sonra sanallaştırma kaynak dengesinde oluşan yoğunlaşmaya işaret etmektedir. Değişiklikler dondurulmuş, kritik sanal makinelerin kaynak dağılımı yeniden dengelenmektedir. Siber güvenlik açısından şu an olağandışı saldırı göstergesi tespit edilmemiştir; izleme devam etmektedir. Bir sonraki bilgilendirme 30 dakika içinde yapılacaktır."
        ]
      },
      {
        heading: "Teknik Derinleşme",
        type: "paragraphs",
        paragraphs: [
          "Bu vakada teknik kök neden, sanallaştırma kümesinde bakım sonrası yükün dengesiz kalması ve bazı kritik uygulama sunucularında CPU Ready değerlerinin yükselmesidir.",
          "Yönetici için bakılacak ilk metrikler şunlardır: uygulama yanıt süresi, hata oranı, CPU Ready, host CPU co-stop değerleri, bellek balonlama veya swapping olup olmadığı, storage latency, ağ paket kaybı, veri tabanı bekleme olayları ve son 24 saatte yapılan değişiklik listesi.",
          "Performans krizlerinde ekipler kendi alanlarını aklama eğilimine girebilir. Uygulama ekibi kod değişmedi der, sistem ekibi sunucular ayakta der, ağ ekibi hatlarda sorun yok der, güvenlik ekibi saldırı görünmüyor der.",
          "Bu cümlelerin hepsi doğru olabilir ve hizmet yine de kötü çalışıyor olabilir."
        ]
      },
      {
        heading: "Karar Masası",
        type: "question",
        paragraphs: [
          "Seçenek 1: Kod geri alınır. Avantajı hızlı ve görünür bir aksiyondur; riski, sorun koddan kaynaklanmıyorsa zaman kaybettirmesidir.",
          "Seçenek 2: Sanal makineler vMotion ile dengelenir ve host üzerindeki kaynak baskısı azaltılır. Avantajı kesintisiz müdahaledir; riski, storage veya ağ tarafında gizli darboğaz varsa etkiyi sınırlı bırakmasıdır.",
          "Seçenek 3: Etkilenen işlemler için geçici kapasite artırımı ve taşra bilgilendirmesi yapılır. Avantajı hizmet algısını yönetir; riski, kök neden çözülmeden sadece semptomu bastırmasıdır.",
          "Bu vakada doğru yönetim kararı, seçenek 2 ile başlamak, seçenek 1 için geri dönüş paketini hazır tutmak ve seçenek 3 kapsamında taşra birimlerine kısa, paniği artırmayan bir bilgilendirme göndermektir."
        ]
      },
      {
        heading: "Danışman Notu",
        type: "paragraphs",
        paragraphs: [
          "Üst yönetici kriz anında en zeki teknik kişi olmak zorunda değildir. Fakat odadaki en iyi soru soran kişi olmak zorundadır.",
          "Kötü yönetici, ilk duyduğu teknik açıklamaya tutunur ve ekibi o yöne koşturur. İyi yönetici, hipotezleri yan yana koyar, kanıt ağırlığını ölçer, gereksiz aksiyonu durdurur ve kararın iletişimini yönetir.",
          "Daire Başkanı seviyesine çıkmak, daha çok teknik terim bilmek değil, teknik terimleri hizmet etkisine çevirebilmektir.",
          "Kapalı kapılar ardında yöneticiler şuna bakar: krizde kim panikledi, kim suçu başkasına attı, kim ölçülebilir bilgi getirdi, kim gereksiz teknik ayrıntıyla zamanı tüketti, kim üst yönetimin diline çevrilebilecek netlik üretti."
        ]
      }
    ]
  },
  {
    id: "vaka-2",
    role: "İçişleri Uzmanı",
    level: "6/10",
    time: "14:20",
    category: "Kamu Yönetimi ve Strateji",
    title: "Canlıya Alalım, Protokol Sonra Gelir",
    roleText:
      "Bu senaryoda sen aslen bilgisayar mühendisi olan bir İçişleri Uzmanısın. Geçici olarak Proje ve Strateji Yönetimi Daire Başkanlığına görevlendirildin. Görevin, dış kaynaklı bir projenin Bakanlık sistemleriyle entegrasyon sürecini takip etmek.",
    sections: [
      {
        type: "paragraphs",
        paragraphs: [
          "Perşembe öğleden sonra.",
          "Toplantı odasında Genel Müdür Yardımcısı, Proje ve Strateji Yönetimi Daire Başkanı, Uygulama Geliştirme Daire Başkanı, Veri Koordinasyonu Daire Başkanı, yüklenici firma temsilcileri ve sen varsın.",
          "Konu basit gibi görünüyor.",
          "Dış proje ekibi, Bakanlık sisteminden bazı verileri çekerek kendi uygulamasında kullanmak istiyor. Teknik ekipler test ortamında bağlantıyı kurmuş. Servis cevap dönüyor. Ekranda yeşil işaretler var.",
          "Firma temsilcisi rahat bir sesle konuşuyor.",
          "Teknik olarak hazırız. Uygun görürseniz yarın canlıya alabiliriz.",
          "Oda bir an gevşiyor.",
          "Çünkü kamu kurumlarında teknik olarak hazırız cümlesi çoğu zaman toplantının bitiş cümlesi sanılır.",
          "Ama Genel Müdür Yardımcısı sana bakıyor.",
          "Uzmanım, sen ne diyorsun?"
        ]
      },
      {
        heading: "İlk Refleks",
        type: "paragraphs",
        paragraphs: [
          "İlk refleksin mühendis refleksi olabilir.",
          "API cevap dönüyor mu? Kimlik doğrulama var mı? Log tutuluyor mu? Trafik sınırı koyduk mu?",
          "Bunlar doğru sorular.",
          "Ama bu toplantıda yeterli sorular değil.",
          "Çünkü sen artık sadece bilgisayar mühendisi gibi değil, kamu yöneticisi adayı gibi düşünmek zorundasın."
        ]
      },
      {
        heading: "Teknik Terim",
        type: "paragraphs",
        paragraphs: [
          "API Gateway, farklı uygulama ve servislerin dış sistemlerle kontrollü biçimde konuşmasını sağlayan geçit katmanıdır. Kimlik doğrulama, yetkilendirme, hız sınırlama, kayıt tutma ve trafik yönetimi gibi işlevler için kullanılır.",
          "Daire Başkanı ve Genel Müdür seviyesi için anlamı şudur: API Gateway varsa dış bağlantı daha kontrollü yönetilebilir; ama API Gateway tek başına hukuki dayanak, veri paylaşım izni ve kurumsal sorumluluk üretmez."
        ]
      },
      {
        heading: "Soru 1",
        type: "question",
        paragraphs: [
          "Bu durumda ilk soracağın soru ne olmalı?",
          "Yanlış cevap: Servis kaç milisaniyede cevap dönüyor?",
          "Bu soru yanlış değil. Ama ilk soru değil.",
          "Doğru cevap: Bu veri paylaşımının yazılı protokolü, hukuki dayanağı ve veri sahibi birim onayı tamamlandı mı?",
          "Oda bir anda sessizleşir.",
          "Çünkü bu soru sistemi yavaşlatmaz. Bu soru kurumu korur."
        ]
      },
      {
        heading: "Veri Paylaşım Protokolü",
        type: "paragraphs",
        paragraphs: [
          "Veri paylaşım protokolü, kurumlar arasında hangi verinin, hangi amaçla, hangi hukuki ve teknik çerçevede, hangi güvenlik tedbirleriyle paylaşılacağını belirleyen resmi mutabakat metnidir.",
          "BTGM açısından bu protokol şunu söyler: Hangi veri paylaşılacak? Hangi amaçla kullanılacak? Ne kadar süreyle erişilecek? Kim sorumlu olacak? Erişim nasıl denetlenecek? Veri yanlış kullanılırsa kim cevap verecek? Paylaşım sona erdiğinde erişim nasıl kapatılacak?",
          "Dikkat et.",
          "Bunların hiçbiri sadece yazılımcının cevaplayacağı sorular değildir.",
          "Bunlar Genel Müdürlük seviyesinde sorumluluk doğuran sorulardır."
        ]
      },
      {
        heading: "Sen Konuşuyorsun",
        type: "quote",
        paragraphs: [
          "Sayın Genel Müdür Yardımcım, teknik testin başarılı olması canlıya geçiş için gerekli şarttır; fakat yeterli şart değildir. Bu entegrasyonda veri paylaşım protokolünün, veri sahibi birim onayının, erişim kapsamının, loglama sorumluluğunun ve kullanım amacının yazılı olarak netleşmesi gerekir. Aksi halde yarın teknik olarak çalışan bir sistem, altı ay sonra idari risk üretebilir."
        ]
      },
      {
        type: "paragraphs",
        paragraphs: [
          "Bu cümle önemlidir.",
          "Çünkü sen hayır demedin.",
          "Sen evet ama şartları tamamlayalım dedin.",
          "Kamu yönetiminde olgun refleks budur.",
          "İşi durdurmak kolaydır.",
          "Her şeye onay vermek daha da kolaydır.",
          "Zor olan, işi öldürmeden kurumu riske sokmamaktır."
        ]
      },
      {
        heading: "Karar Masası",
        type: "question",
        paragraphs: [
          "Seçenek 1: Yarın canlıya geçilir. Takvim korunur; ama hukuki ve idari zemin eksikse kurum sonradan savunmasız kalır.",
          "Seçenek 2: Proje tamamen durdurulur. Risk alınmaz; ama gereksiz bürokratik sertlik algısı oluşur.",
          "Seçenek 3: Teknik hazırlık tamamlanmış kabul edilir; ancak canlı erişim veri paylaşım protokolü, veri sahibi birim onayı ve işletme sorumluluk matrisi tamamlanana kadar açılmaz.",
          "Doğru karar üçüncü seçenektir.",
          "Çünkü üst yönetici refleksi sadece riskten kaçmak değildir. Riski yönetilebilir koşullara bağlamaktır."
        ]
      },
      {
        heading: "Kapalı Kapılar Ardında",
        type: "paragraphs",
        paragraphs: [
          "Toplantı bittikten sonra Genel Müdür Yardımcısı, Proje ve Strateji Yönetimi Daire Başkanı ile seni odada tutar.",
          "Kapı kapanır.",
          "Genel Müdür Yardımcısı şöyle der:",
          "Bugün iyi bir şey yaptın. Teknik olarak çalışan bir sistemi durdurmadın. Ama eksik zeminde canlıya alınmasına da izin vermedin.",
          "Sonra ekler:",
          "BTGM'de büyümek isteyen biri şunu öğrenmeli: Entegrasyon dediğin şey kablo, servis ve token değildir. Entegrasyon, kurumun başka bir kuruma güven vermesidir.",
          "Bu cümleyi unutma.",
          "Çünkü ileride Daire Başkanı olduğunda sana en çok bu baskı gelecek."
        ]
      },
      {
        heading: "Danışman Notu",
        type: "paragraphs",
        paragraphs: [
          "Bugünün dersi şudur:",
          "Kamu BT yöneticiliğinde teknik başarı, idari olgunlukla tamamlanmadığında risk üretir.",
          "Bir sistemin çalışması, o sistemin doğru yönetildiği anlamına gelmez.",
          "Bir entegrasyonun testte başarılı olması, canlıya alınmasının doğru olduğu anlamına gelmez.",
          "Bir firmanın hazır olması, kurumun hazır olduğu anlamına gelmez.",
          "Sen bugün İçişleri Uzmanı rolündeydin. Karar veren makam sen değildin. Ama doğru soruyu sordun. Kamu kurumlarında bazen kariyer böyle başlar. İnsanlar senin ne kadar çok konuştuğunu değil, doğru anda hangi riski gördüğünü hatırlar.",
          "Daire Başkanı olduğunda bu refleksi büyüteceksin.",
          "Genel Müdür Yardımcısı olduğunda bu refleksi kurum politikasına çevireceksin.",
          "Genel Müdür olduğunda ise bu refleksi kültür haline getireceksin."
        ]
      }
    ]
  },
  {
    id: "vaka-3",
    role: "Genel Müdür",
    level: "9/10",
    time: "18:10",
    category: "Yönetim ve Liderlik",
    title: "Başarılı Projenin Sahibi Çok, Sorunlu Projenin Sahibi Yok",
    roleText:
      "Bu senaryoda sen Bilgi Teknolojileri Genel Müdürüsün. Teknik ayrıntının içinde boğulmadan, daire başkanları arasındaki sorumluluk boşluğunu kapatman ve Bakan Yardımcısına kurumu zayıf göstermeyen ama gerçeği saklamayan bir cevap vermen gerekiyor.",
    sections: [
      {
        type: "paragraphs",
        paragraphs: [
          "Salı akşamı.",
          "Saat 18.10.",
          "Makam odasındasın.",
          "Gün bitmiş gibi görünürken Bakan Yardımcısının özel kaleminden telefon geliyor.",
          "Bir dış projenin canlıya alınmasından sonra taşradaki bazı birimlerden şikayetler gelmiş. Proje teknik olarak çalışıyor; fakat kullanıcılar yeni ekranın iş akışını yavaşlattığını söylüyor.",
          "Bu klasik bir BTGM anıdır.",
          "Sistem çalışır.",
          "Firma çalıştığını söyler.",
          "Uygulama ekibi hatanın kullanıcı alışkanlığı olduğunu düşünür.",
          "Proje ekibi takvimin tuttuğunu savunur.",
          "Taşra ise tek cümle kurar:",
          "Başkanım, bu iş sahada böyle yürümüyor."
        ]
      },
      {
        heading: "Bu Senaryoda Asıl Problem",
        type: "paragraphs",
        paragraphs: [
          "Bu senaryoda asıl problem yazılım hatası değildir.",
          "Asıl problem sahiplik boşluğudur.",
          "Başarılı projelerde herkes fotoğrafta görünmek ister.",
          "Sorunlu projelerde ise herkes kendi sınırını çizer.",
          "Uygulama Geliştirme Daire Başkanlığı şunu söyler:",
          "Biz talep edilen ekranı yaptık.",
          "Proje ve Strateji Yönetimi Daire Başkanlığı şunu söyler:",
          "İş planı zamanında yürüdü.",
          "Veri Koordinasyonu Daire Başkanlığı şunu söyler:",
          "Veri paylaşımı tarafında sorun yok.",
          "Kullanıcı birimi ise şunu söyler:",
          "Bize sorulmadı."
        ]
      },
      {
        heading: "Bakan Yardımcısının Sorusu",
        type: "quote",
        paragraphs: [
          "Genel Müdürüm, bu proje kimin sorumluluğunda?"
        ]
      },
      {
        type: "paragraphs",
        paragraphs: [
          "Bu soru basit görünür.",
          "Ama Genel Müdür seviyesinde en tehlikeli sorulardan biridir.",
          "Çünkü yanlış cevap verirsen ya ekibini koruyor gibi görünürken gerçeği örtersin ya da ekibini Bakanlık katında zayıflatırsın.",
          "İkisi de kötü yöneticilik refleksidir."
        ]
      },
      {
        heading: "Yanlış Cevap",
        type: "question",
        paragraphs: [
          "Uygulama Geliştirme Daire Başkanlığının sorumluluğunda.",
          "Bu cevap kolaydır.",
          "Ama eksiktir.",
          "Çünkü proje sadece koddan ibaret değildir.",
          "Kod doğru olabilir, iş süreci yanlış tasarlanmış olabilir.",
          "Ekran çalışıyor olabilir, sahadaki işlem sırası yanlış anlaşılmış olabilir.",
          "Teknik kabul yapılmış olabilir, kullanıcı kabulü yüzeysel kalmış olabilir."
        ]
      },
      {
        heading: "Daha Kötü Cevap",
        type: "question",
        paragraphs: [
          "Firma böyle teslim etti.",
          "Bu cümle Genel Müdür seviyesinde kullanılacak cümle değildir.",
          "Yüklenici hata yapmış olabilir.",
          "Ama Bakanlık adına canlıya alma kararını firma vermez.",
          "Kamu yönetiminde dış kaynak kullanmak sorumluluğu devretmek değildir.",
          "Sadece işi yaptırma yöntemidir."
        ]
      },
      {
        heading: "Doğru Cevap",
        type: "quote",
        paragraphs: [
          "Sayın Bakan Yardımcım, proje BTGM koordinasyonunda yürütülmüştür. Teknik geliştirme, proje yönetimi ve kullanıcı kabul süreçlerinde farklı birimler görev almıştır. Şu anda sorun tek bir teknik arızadan çok, sahadaki iş akışıyla uygulama tasarımı arasındaki uyum problemine benzemektedir. Sorumluluğu dağıtmayacağız; BTGM olarak sahipleniyoruz. Yarın sabah ilk iş, ilgili daire başkanları ve kullanıcı birimiyle kısa bir düzeltme planı çıkarıp size arz edeceğim."
        ]
      },
      {
        heading: "Buradaki Yönetici Refleksi",
        type: "paragraphs",
        paragraphs: [
          "Dikkat et.",
          "Bu cevapta kimse suçlanmadı.",
          "Ama sorun da küçültülmedi.",
          "Firma arkasına saklanılmadı.",
          "Daire başkanları Bakan Yardımcısı önünde hedef gösterilmedi.",
          "BTGM kurumsal olarak sorumluluğu aldı.",
          "Ve en önemlisi, çözüm için zaman ve yöntem söylendi.",
          "Genel Müdürlük refleksi budur.",
          "Sorumluluğu sahiplenmek, suçu üstlenmek değildir.",
          "Sorumluluğu sahiplenmek, dağınık problemi yönetilebilir hale getirmektir."
        ]
      },
      {
        heading: "Teknik Terim",
        type: "paragraphs",
        paragraphs: [
          "Kullanıcı Kabul Testi, geliştirilen sistemin gerçek kullanıcı ihtiyaçlarına uygun çalışıp çalışmadığını görmek için yapılan kabul sürecidir.",
          "Daire Başkanı ve Genel Müdür seviyesi için anlamı şudur:",
          "Kullanıcı kabul testi sadece ekrandaki buton çalışıyor mu kontrolü değildir.",
          "Saha personeli bu sistemi kendi iş yoğunluğu içinde kullanabiliyor mu?",
          "İşlem süresi uzuyor mu?",
          "Eski süreçte tek adım olan iş yeni sistemde üç adıma mı çıkıyor?",
          "Kullanıcı hata yaptığında sistem onu doğru yönlendiriyor mu?",
          "Bunlar görülmeden yapılan kabul, sadece kağıt üzerinde kabul olabilir."
        ]
      },
      {
        heading: "Akşam Toplantısı",
        type: "paragraphs",
        paragraphs: [
          "Saat 19.00.",
          "Genel Müdür Yardımcısı, Uygulama Geliştirme Daire Başkanı, Proje ve Strateji Yönetimi Daire Başkanı ve ilgili kullanıcı birimin temsilcisi odandasınız.",
          "Kimse yüksek sesle konuşmuyor.",
          "Ama herkes kendi alanını korumaya hazır.",
          "Sen toplantıyı şu cümleyle açıyorsun:",
          "Arkadaşlar, bugün kimin haklı olduğunu bulmaya çalışmayacağız. Yarın sabah sahada neyi düzelteceğimizi bulacağız.",
          "Bu cümle toplantının tansiyonunu düşürür.",
          "Çünkü iyi Genel Müdür, kriz toplantısında savunma duvarlarını yükseltmez.",
          "İnsanları çözüm masasına çeker."
        ]
      },
      {
        heading: "Soru 1",
        type: "question",
        paragraphs: [
          "İlk ne sorarsın?",
          "Yanlış soru:",
          "Kim onayladı?",
          "Bu soru bazen sorulur; ama ilk soru olursa toplantıyı savunmaya çevirir.",
          "Doğru ilk soru şudur:",
          "Sahadaki işlem adımı eski süreçte kaç dakikaydı, yeni sistemde kaç dakika oldu?",
          "Çünkü yönetici önce etkiyi ölçer.",
          "Etki ölçülmeden suçlu aranmaz."
        ]
      },
      {
        heading: "Soru 2",
        type: "question",
        paragraphs: [
          "İkinci ne sorarsın?",
          "Pilot uygulama hangi illerde yapıldı?",
          "Pilot kullanıcılar gerçek iş yükü altında mı denedi?",
          "Pilot sonrasında gelen itirazlar nasıl kapatıldı?",
          "Canlıya geçiş kararında kullanıcı birimin yazılı uygun görüşü var mı?",
          "Bu sorular teknik gibi görünmez.",
          "Ama BTGM üst yönetiminde en kritik sorular bazen teknik olmayan sorulardır."
        ]
      },
      {
        heading: "Karar Masası",
        type: "question",
        paragraphs: [
          "Seçenek 1: Proje geri alınır. Avantajı hızlı rahatlama sağlar. Riski, gerçekten küçük düzeltmeyle çözülecek bir sorunu büyük başarısızlık algısına çevirmesidir.",
          "Seçenek 2: Şikayetler kullanıcı direnci olarak değerlendirilir ve sistem aynen devam eder. Avantajı takvimi korur. Riski, sahadaki gerçek problemi görmezden gelerek kurumsal güveni zedeler.",
          "Seçenek 3: Sistem açık kalır; ancak en çok şikayet gelen işlem adımları için 48 saatlik hızlı iyileştirme planı yapılır, kullanıcı biriminden iki temsilci sürece dahil edilir, bir hafta boyunca günlük etki raporu alınır.",
          "Doğru karar çoğu zaman üçüncü seçenektir.",
          "Çünkü her sorun geri dönüş gerektirmez.",
          "Ama her şikayet de direnç diye küçümsenemez."
        ]
      },
      {
        heading: "Kapalı Kapılar Ardında",
        type: "paragraphs",
        paragraphs: [
          "Toplantıdan sonra Genel Müdür Yardımcısı odada kalır.",
          "Sen ona şöyle dersin:",
          "Başkanları yarın Bakan Yardımcısının önünde tartıştırmayacağız.",
          "Genel Müdür Yardımcısı başını sallar.",
          "Çünkü üst yönetimde bazı sorunlar teknik toplantıda çözülür, bazıları ise makamın ağırlığıyla hizalanır.",
          "Daire başkanlarının her biri kendi açısından haklı olabilir.",
          "Ama Genel Müdürlük makamı parçalı haklılıklarla yönetilmez.",
          "Genel Müdürlük makamı kurumsal sonuçla yönetilir."
        ]
      },
      {
        heading: "Danışman Notu",
        type: "paragraphs",
        paragraphs: [
          "Bugünün dersi şudur:",
          "Genel Müdür olduğunda en zor işlerden biri, ekibini korurken gerçeği kaybetmemektir.",
          "Zayıf yönetici ekibini hemen suçlar.",
          "Daha zayıf yönetici her şeyi saklar.",
          "Olgun yönetici ise sorunu sahiplenir, kişileri yıpratmadan sistemi düzeltir.",
          "Kamu BT yöneticiliğinde projeler sadece teknik teslimat değildir.",
          "Her proje bir sahiplik sınavıdır.",
          "Başarılı projede herkes görünür.",
          "Sorunlu projede gerçek lider görünür.",
          "Bir gün Genel Müdür koltuğunda oturduğunda senden beklenen şey, her teknik ayrıntıyı bilmen değildir.",
          "Senden beklenen şey, dağınık sorumlulukları tek bir kurumsal iradeye dönüştürmendir."
        ]
      }
    ]
  },
  {
    id: "vaka-4",
    role: "Siber Güvenlik Daire Başkanı",
    level: "8/10",
    time: "02:17",
    category: "Teknik Krizler ve Teknik Derinleşme",
    title: "Gece Yarısı Kimlik Doğrulama Patlaması",
    roleText:
      "Bu senaryoda sen Siber Güvenlik Daire Başkanısın. Gece yarısı Bakanlık kullanıcılarının bir kısmı sistemlere girememeye başlıyor. Senin görevin, bunun sıradan bir kimlik doğrulama arızası mı yoksa siber olayın ilk işareti mi olduğunu ayırmak ve Genel Müdür Yardımcısına panik üretmeyen ama riski küçültmeyen bir tablo sunmak.",
    sections: [
      {
        type: "paragraphs",
        paragraphs: [
          "Saat 02.17. Nöbetçi güvenlik izleme ekibi seni arıyor. İlk cümle kısa: bazı kullanıcılar merkezi uygulamalara giriş yapamıyor, aynı dakikalarda başarısız oturum açma denemeleri normalin birkaç katına çıkmış durumda. Bu cümleyi duyduğunda sadece teknik alarm görmezsin; kimlik altyapısının etkilenmesi, kurumun birçok uygulamasının aynı anda etkilenmesi demektir.",
          "İlk 10 dakikada gelen bilgiler karışıktır. Bazı kullanıcılar hiç giriş yapamazken, bazıları mevcut oturumlarıyla çalışmaya devam etmektedir. Uygulama sunucuları ayaktadır, veri tabanı tarafında kesinti görünmemektedir. SIEM ekranında başarısız oturum açma kayıtları artmıştır; fakat artışın tek bir kaynaktan mı, dağınık kullanıcı davranışından mı, yoksa yanlış yapılandırılmış bir servis hesabından mı geldiği henüz net değildir."
        ]
      },
      {
        heading: "Teknik Terim",
        type: "paragraphs",
        paragraphs: [
          "Active Directory, kurum içindeki kullanıcı hesaplarını, bilgisayarları, grupları ve yetkileri merkezi olarak yöneten dizin servisidir. Daire Başkanı seviyesinde bunun anlamı şudur: Active Directory sadece kullanıcı adı ve şifre sistemi değildir; birçok uygulamanın kime güveneceğini belirleyen omurga katmanıdır.",
          "Kerberos, kullanıcıların şifrelerini her uygulamaya tekrar tekrar göndermeden güvenli biçimde kimlik doğrulamasını sağlayan yaygın bir protokoldür. Üst yönetici için önemli olan ayrıntı şudur: Kerberos bozulduğunda sorun tek bir uygulamada değil, kimlik doğrulama zincirinin birçok halkasında hissedilebilir."
        ]
      },
      {
        heading: "İlk Refleks",
        type: "paragraphs",
        paragraphs: [
          "Kriz anında en yanlış refleks, başarısız giriş sayısını görünce hemen saldırı ilan etmektir. İkinci yanlış refleks ise saldırı dememek için her şeyi teknik arıza saymaktır. Siber Güvenlik Daire Başkanı olarak senin ilk işin etiket koymak değil, olayı sınıflandırmaktır: etki var mı, yayılım var mı, ayrıcalıklı hesaplar etkilenmiş mi, aynı dakikalarda yapılan değişiklik var mı, başarısız girişler belirli IP aralıklarından mı geliyor, servis hesaplarında kilitlenme var mı?",
          "Nöbetçi ekibe ilk talimatın kısa olur: başarısız girişlerin ilk 20 kaynağını çıkarın, etkilenen kullanıcı gruplarını ayırın, son iki saatte yapılan kimlik altyapısı değişikliklerini listeleyin, domain controller sağlık durumunu kontrol edin ve ayrıcalıklı hesaplarda olağandışı deneme var mı hemen teyit edin."
        ]
      },
      {
        heading: "Soru 1",
        type: "question",
        paragraphs: [
          "İlk soracağın soru şu değildir: saldırı mı?",
          "Doğru ilk soru şudur: etki alanı nedir?",
          "Çünkü etki alanını bilmeden olayın adını koyamazsın. On kullanıcı mı etkileniyor, bir il mi etkileniyor, belirli bir uygulama mı etkileniyor, yoksa kimlik doğrulama altyapısının geneli mi etkileniyor? Üst yönetim için ilk gerçek bilgi budur."
        ]
      },
      {
        heading: "Soru 2",
        type: "question",
        paragraphs: [
          "İkinci soru şudur: son değişiklik neydi?",
          "Gece yapılan parola politikası güncellemesi, servis hesabı şifresinin değişmesi, saat senkronizasyonu problemi, sertifika süresinin dolması veya hatalı grup ilkesi kimlik doğrulama krizine yol açabilir. Siber olay ihtimali masada kalır; ama değişiklik geçmişi görülmeden saldırı anlatısı kurmak yöneticiyi yanlış yere götürür."
        ]
      },
      {
        heading: "Teknik Derinleşme",
        type: "paragraphs",
        paragraphs: [
          "Bu vakada ilk bakılacak alanlar şunlardır: domain controller olay günlükleri, başarısız oturum açma kodları, kilitlenen hesaplar, servis hesabı kullanım desenleri, Kerberos bilet hataları, NTP saat farkı, son grup ilkesi değişiklikleri, EDR uyarıları ve SIEM korelasyonları. EDR, uç noktalardaki şüpheli davranışları izleyen ve gerektiğinde müdahale etmeye yarayan güvenlik çözümüdür.",
          "Yönetici ayrıntıyı mühendis kadar uygulamak zorunda değildir; fakat hangi logun hangi soruya cevap verdiğini bilmelidir. Domain controller logu kimlik doğrulama davranışını anlatır. SIEM farklı sistemlerden gelen kayıtları ilişkilendirir. EDR uç noktalardaki davranışı gösterir. Değişiklik kayıtları ise olayın saldırı mı, insan hatası mı, süreç eksikliği mi olduğunu ayırmaya yardım eder."
        ]
      },
      {
        heading: "Genel Müdür Yardımcısına İlk Bilgi",
        type: "quote",
        paragraphs: [
          "Sayın Genel Müdür Yardımcım, merkezi kimlik doğrulama tarafında başarısız girişlerde olağan dışı artış var. Şu an uygulama kesintisi değil, belirli kullanıcı gruplarında giriş problemi görüyoruz. Siber olay ihtimali dışlanmadı; ancak aynı zaman aralığındaki teknik değişiklikler ve servis hesabı davranışları da inceleniyor. Ayrıcalıklı hesaplarda kritik bir ihlal göstergesi şu an tespit edilmedi. İlk etki haritasını 20 dakika içinde, kök neden değerlendirmesini ise 60 dakika içinde arz edeceğim."
        ]
      },
      {
        heading: "Karar Masası",
        type: "question",
        paragraphs: [
          "Seçenek 1: Tüm dış erişimler kapatılır. Avantajı hızlı kontrol hissi verir; riski, etki alanı netleşmeden hizmet sürekliliğini gereksiz biçimde bozmasıdır.",
          "Seçenek 2: Olay teknik arıza kabul edilip güvenlik seviyesi yükseltilmez. Avantajı panik oluşturmaz; riski, gerçek bir saldırının erken saatlerini kaçırmaktır.",
          "Seçenek 3: Etkilenen kullanıcı grupları ve kaynaklar izole biçimde analiz edilir, ayrıcalıklı hesaplar için ek izleme açılır, son değişiklikler durdurulur, servis hesapları kontrol edilir ve olay güvenlik şüphesi statüsünde takip edilir.",
          "Doğru karar üçüncü seçenektir. Çünkü bu karar hem paniği önler hem de saldırı ihtimalini ciddiye alır."
        ]
      },
      {
        heading: "Kapalı Kapılar Ardında",
        type: "paragraphs",
        paragraphs: [
          "Saat 03.05. Genel Müdür Yardımcısı seni tekrar arar ve tek cümle kurar: Bakan Yardımcısı uyanırsa ne diyeceğiz? Burada teknik ayrıntıyla makamı boğamazsın. Şunu söylersin: kimlik doğrulama katmanında sınırlı etki var, kritik ayrıcalıklı hesaplarda ihlal göstergesi yok, olay güvenlik şüphesiyle izleniyor, hizmet etkisi ölçülüyor, 20 dakikalık aralıklarla durum netleştiriliyor.",
          "Bu dil önemlidir. Çünkü üst düzey yöneticiye ya her şeyi normal gösterirsen güven kaybedersin ya da her şeyi saldırı diye anlatırsan kurumun kriz eşiğini gereksiz yükseltirsin. Siber güvenlik yöneticisinin olgunluğu, alarmı ciddiye alırken kelimelerini ölçmesinden anlaşılır."
        ]
      },
      {
        heading: "Danışman Notu",
        type: "paragraphs",
        paragraphs: [
          "Bugünün dersi şudur: Siber güvenlikte en değerli refleks hızlı bağırmak değil, hızlı sınıflandırmaktır. Olayın adı ilk dakikada konulmayabilir; ama etki alanı, kritik hesap durumu, son değişiklikler ve izleme planı ilk dakikalarda ortaya konulmalıdır.",
          "Daire Başkanı olduğunda ekibin senden sadece teknik cevap beklemez. Genel Müdür Yardımcısı senden ölçülü belirsizlik yönetimi bekler. Genel Müdür senden kurumu paniğe sokmadan riski sahiplenmeni bekler. Bakanlık katı ise tek şeyi görmek ister: konu kontrol altında mı, kim neyi izliyor, bir sonraki bilgi ne zaman gelecek?",
          "Bir gün bu koltukta gerçekten oturduğunda şunu unutma: iyi siber güvenlik yöneticisi, saldırı ihtimalini küçümsemez; ama saldırı kelimesini de ucuz kullanmaz."
        ]
      }
    ]
  },
  {
    id: "vaka-5",
    role: "Veri Koordinasyonu Daire Başkanı",
    level: "8/10",
    time: "10:40",
    category: "Strateji, Dijital Dönüşüm ve Yapay Zekâ",
    title: "Yapay Zekâ Pilotu Başarılı, Peki Verinin Sahibi Kim?",
    roleText:
      "Bu senaryoda sen Veri Koordinasyonu Daire Başkanısın. Bakanlık içinde bir yapay zekâ destekli karar destek pilotu başarılı görünüyor; fakat canlıya geçmeden önce verinin kaynağı, kullanım amacı, modelin sınırları ve kurumsal sorumluluk netleşmek zorunda.",
    sections: [
      {
        type: "paragraphs",
        paragraphs: [
          "Çarşamba sabahı saat 10.40. Genel Müdür Yardımcısı seni toplantıya çağırıyor. Odada Proje ve Strateji Yönetimi Daire Başkanı, Uygulama Geliştirme Daire Başkanı, Siber Güvenlik Daire Başkanı ve pilot projeyi geliştiren ekip var. Masadaki konu heyecan verici: Bakanlık içi metinlerden yararlanarak personele mevzuat, süreç ve başvuru yönlendirmesi yapan yapay zekâ destekli bir asistan.",
          "Demo etkileyici görünür. Kullanıcı soru soruyor, sistem düzgün cevap veriyor, ilgili belgeye atıf yapıyor, hatta bazı cevaplarda doğru bir uyarı da ekliyor: nihai değerlendirme yetkili personel tarafından yapılmalıdır. Oda olumlu havaya girer. Birisi şu cümleyi kurar: Bu pilotu hızlıca yaygınlaştıralım."
        ]
      },
      {
        heading: "İlk Yönetici Refleksi",
        type: "paragraphs",
        paragraphs: [
          "Bu noktada teknolojiye hayran olmak kolaydır. Fakat Veri Koordinasyonu Daire Başkanı olarak senin ilk görevin modelin ne kadar akıllı olduğunu tartışmak değildir. İlk görevin, bu sistemin hangi veriye dayanarak konuştuğunu, bu veriyi hangi amaçla kullandığını ve yanlış cevap verdiğinde kurumsal sorumluluğun nerede duracağını netleştirmektir.",
          "Yapay zekâ projelerinde en tehlikeli cümlelerden biri şudur: Zaten sadece kurum içi veri kullanıyoruz. Bu cümle rahatlatıcı görünür ama eksiktir. Kurum içi veri de kişisel veri içerebilir, gizli bilgi içerebilir, güncelliğini yitirmiş talimat içerebilir veya bağlamından koparıldığında yanlış yönlendirme üretebilir."
        ]
      },
      {
        heading: "Teknik Terim",
        type: "paragraphs",
        paragraphs: [
          "LLM, yani Large Language Model, büyük metin kümeleri üzerinden dil örüntülerini öğrenen ve verilen komutlara metin üreterek cevap veren yapay zekâ modelidir. Daire Başkanı seviyesinde bunun anlamı şudur: LLM güçlü bir metin üreticisidir; fakat tek başına kurumsal gerçeklik kaynağı değildir.",
          "RAG, yani Retrieval-Augmented Generation, modelin cevap üretmeden önce kurumun belirlediği belge veya veri kaynaklarından ilgili bilgileri çekerek cevap oluşturması yaklaşımıdır. Üst yönetici için kritik nokta şudur: RAG kullanmak cevabı daha izlenebilir hale getirebilir; ama kaynak verinin güncelliği, yetkisi ve kapsamı yanlışsa sistem yine yanlış cevap üretebilir."
        ]
      },
      {
        heading: "Soru 1",
        type: "question",
        paragraphs: [
          "İlk soracağın soru şu değildir: Model yüzde kaç doğru cevap veriyor?",
          "Doğru ilk soru şudur: Model hangi onaylı veri kaynaklarına dayanarak cevap veriyor?",
          "Çünkü kamu yönetiminde doğru cevap sadece teknik doğruluk değildir. Cevabın dayandığı belge yürürlükte mi, o belge bu konuda yetkili kaynak mı, eski bir genelgeyle yeni bir talimat çelişirse sistem hangisini esas alacak? Bunlar netleşmeden modelin güzel cevap vermesi yeterli değildir."
        ]
      },
      {
        heading: "Soru 2",
        type: "question",
        paragraphs: [
          "İkinci soru şudur: Bu sistem karar mı veriyor, yoksa personeli yönlendiriyor mu?",
          "Bu ayrım hayati önemdedir. Eğer sistem sadece belge bulup özetliyorsa başka bir risk seviyesindesindir. Eğer başvuru sonucu, uygunluk değerlendirmesi veya önceliklendirme önerisi üretiyorsa artık karar destek alanına girersin. Karar destek sistemi, yanlış yönlendirme yaptığında sadece teknik hata üretmez; idari sonuç üretir."
        ]
      },
      {
        heading: "Siber Güvenlik Daire Başkanının İtirazı",
        type: "paragraphs",
        paragraphs: [
          "Siber Güvenlik Daire Başkanı araya girer ve prompt injection riskini sorar. Prompt injection, kullanıcının modele gizli talimatları atlatacak veya sistemi amaç dışı cevap vermeye zorlayacak komutlar yazmasıdır. Basit görünür ama kurumsal yapay zekâ sistemlerinde ciddi risktir; çünkü model yanlış yönlendirilirse hassas bilgi ifşa edebilir, yetkisiz öneri üretebilir veya güvenilmemesi gereken metni kaynak gibi kullanabilir.",
          "Sen bu itirazı projeyi yavaşlatan bir refleks olarak görmezsin. Çünkü iyi Veri Koordinasyonu Daire Başkanı, siber güvenliği son dakika onay kapısı değil, tasarımın parçası olarak görür."
        ]
      },
      {
        heading: "Karar Masası",
        type: "question",
        paragraphs: [
          "Seçenek 1: Pilot başarılı olduğu için sistemi tüm birimlere açmak. Avantajı hızlı görünür başarıdır; riski, veri kaynağı ve sorumluluk sınırı netleşmeden hatalı kurumsal cevap üretmektir.",
          "Seçenek 2: Riskler nedeniyle projeyi tamamen durdurmak. Avantajı kurumu kısa vadede korur; riski, faydalı bir dijital dönüşüm kapasitesini gereksiz biçimde kilitlemektir.",
          "Seçenek 3: Sistemi sınırlı kullanıcı grubu, onaylı veri seti, cevap sorumluluk uyarısı, kullanım kayıtları, periyodik doğruluk ölçümü ve insan onayı şartıyla kontrollü pilot olarak genişletmek.",
          "Doğru karar üçüncü seçenektir. Çünkü yapay zekâ projelerinde hedef ne kör hız ne de kör frendir. Hedef, öğrenen ama sınırları belli olan kontrollü yaygınlaşmadır."
        ]
      },
      {
        heading: "Genel Müdür Yardımcısına Not",
        type: "quote",
        paragraphs: [
          "Sayın Genel Müdür Yardımcım, yapay zekâ asistanı pilotu işlevsel olarak umut verici sonuçlar üretmiştir. Ancak canlı yaygınlaştırma öncesinde veri kaynaklarının yetkili ve güncel olup olmadığı, cevapların karar yerine yönlendirme niteliğinde kalacağı, kişisel veya hassas verinin modele kontrolsüz taşınmayacağı ve kullanım kayıtlarının denetlenebilir olacağı netleştirilmelidir. Önerim, sistemi sınırlı kullanıcı grubuyla kontrollü pilot olarak genişletmek ve bir ay sonunda doğruluk, kullanım ve risk raporuyla yeniden değerlendirmektir."
        ]
      },
      {
        heading: "Danışman Notu",
        type: "paragraphs",
        paragraphs: [
          "Bugünün dersi şudur: Yapay zekâ yöneticiliği, teknolojiyi alkışlamakla teknolojiden korkmak arasında bir yerde durmaz. Asıl olgunluk, faydayı görürken kurumun sorumluluk sınırlarını kurabilmektir.",
          "Bir gün Genel Müdür Yardımcısı veya Genel Müdür olduğunda yapay zekâ projeleri sana parlak demolarla gelecek. Demo düzgün çalışabilir. Cevaplar etkileyici olabilir. Ekip heyecanlı olabilir. Ama sen şu soruları sormadan canlıya geçişe izin vermeyeceksin: veri kaynağı kim, veri güncel mi, cevap karar mı yönlendirme mi, hata olursa kim düzeltecek, kullanım nasıl denetlenecek?",
          "BTGM seviyesinde yapay zekâ projesi yapmak, sadece model seçmek değildir. Kurum adına konuşabilecek bir teknolojinin sınırlarını çizmek ve o sınırları yönetilebilir hale getirmektir."
        ]
      }
    ]
  },
  {
    id: "vaka-6",
    role: "Genel Müdür Yardımcısı",
    level: "8/10",
    time: "20:25",
    category: "Kapalı Kapılar Ardında",
    title: "Terfi Listesinde Adın Neden Yok?",
    roleText:
      "Bu senaryoda sen Genel Müdür Yardımcısısın. Gün bitmiş, kapılar kapanmış, Genel Müdürlük makamında daire başkanlığına vekalet edecek isimler konuşuluyor. Görevin kişileri değil, yönetici olgunluğunu değerlendirmek.",
    sections: [
      {
        type: "paragraphs",
        paragraphs: [
          "Saat 20.25. Genel Müdürlük katında koridor sessizleşmiş durumda. Gün içinde herkes teknik toplantılarda, proje sunumlarında ve yazışma trafiğinde kendi performansını göstermeye çalıştı. Fakat asıl değerlendirme çoğu zaman bu saatlerde yapılır. Kapı kapanır, çay gelir, dosyalar açılır ve yöneticiler artık ekrandaki başarı yüzdelerine değil, insanların kriz anındaki karakterine bakmaya başlar.",
          "Odada Genel Müdür, sen ve iki Genel Müdür Yardımcısı daha varsınız. Masada üç isim var. Birinin teknik bilgisi çok güçlü. Birinin yazışma ve mevzuat tarafı temiz. Birinin ise ekip üzerinde güven etkisi yüksek. Konu açıkça söylenmese de herkes bilir: yakında boşalacak bir daire başkanlığı için kimin öne çıkacağı konuşuluyor."
        ]
      },
      {
        heading: "Genel Müdürün İlk Sorusu",
        type: "quote",
        paragraphs: [
          "Teknik olarak en iyi olanı biliyoruz. Peki hangisi daire başkanı olduğunda kurum daha az sürpriz yaşar?"
        ]
      },
      {
        type: "paragraphs",
        paragraphs: [
          "Bu soru basit değildir. Çünkü kurumlar çoğu zaman en parlak teknik personeli yönetici yapmak ister. Ama teknik parlaklık tek başına yönetici güvenilirliği üretmez. Daire Başkanı olduğunda artık sadece kendi uzmanlığından değil, ekibin ritminden, yazışmanın doğruluğundan, Bakanlık katına giden cümlenin ağırlığından ve kriz anında kurumsal soğukkanlılıktan sorumlusun.",
          "Sen dosyaya bakarsın. İlk aday çok hızlı çözüm üretir ama toplantılarda başkalarının sözünü keser. İkinci aday mevzuatı iyi bilir ama kriz anında karar almakta gecikir. Üçüncü aday en derin teknik kişi değildir; fakat ekipler arasında güven kurar, sorunları saklamaz, üst yönetime ölçülü bilgi verir."
        ]
      },
      {
        heading: "Yanlış Terfi Refleksi",
        type: "question",
        paragraphs: [
          "Yanlış refleks şudur: En teknik kişiyi başkan yapalım.",
          "Bu bazen doğru olabilir; ama tek başına ölçüt olamaz. Çünkü daire başkanlığı, derin uzmanlık makamı değil, karar ve koordinasyon makamıdır. Çok iyi mühendis olan biri, insan yönetemiyorsa, yazılı sorumluluk kuramıyorsa, riskleri zamanında yukarı taşıyamıyorsa veya başka dairelerle çalışırken sürekli gerilim üretiyorsa kurumu zorlar.",
          "Bir diğer yanlış refleks de şudur: En sessiz ve sorunsuz kişiyi başkan yapalım. Sessiz olmak olgunluk değildir. Bazı insanlar sorun çıkarmıyor gibi görünür; çünkü zor kararlardan uzak dururlar."
        ]
      },
      {
        heading: "Doğru Değerlendirme",
        type: "paragraphs",
        paragraphs: [
          "Sen Genel Müdüre şöyle söylersin: Teknik kapasite önemli; ama bu görev için asıl bakmamız gereken şey kriz olgunluğu, yazılı sorumluluk disiplini, ekip üzerindeki güven etkisi ve üst yönetim dilidir. Başkan olacak kişi sadece sorun çözen kişi olmamalı; sorun çıkmadan önce zayıf sinyali gören, çıktıktan sonra da kurumu savrulmadan toparlayan kişi olmalı.",
          "Bu cümle odanın yönünü değiştirir. Çünkü terfi konuşmalarında çoğu insan kişinin ne bildiğini anlatır. Üst yönetim ise kişinin hangi yükü taşıyabileceğini anlamaya çalışır."
        ]
      },
      {
        heading: "Soru 1",
        type: "question",
        paragraphs: [
          "Bir daire başkanı adayında ilk bakılacak şey nedir?",
          "Yanlış cevap: En çok teknik bilen kişi olması.",
          "Eksik cevap: En uzun süredir kurumda çalışıyor olması.",
          "Doğru cevap: Kurumsal yük taşıyabilmesi.",
          "Kurumsal yük taşımak; karar alabilmek, ekibi yönetebilmek, hatayı saklamamak, doğru zamanda yukarı bilgi vermek, başka dairelerle çalışabilmek ve yaptığı işin denetime dayanacak belgesini üretebilmek demektir."
        ]
      },
      {
        heading: "Soru 2",
        type: "question",
        paragraphs: [
          "Bir aday neden terfi listesinden düşer?",
          "Sadece hata yaptığı için değil. Herkes hata yapar. Asıl mesele hatadan sonra ne yaptığıdır. Hatayı saklıyorsa, suçu başka daireye atıyorsa, yazılı iz bırakmaktan kaçıyorsa, üst yönetimi son dakikada bilgilendiriyorsa veya ekibinin arkasında dururken gerçeği kaybediyorsa terfi listesinde kalması zorlaşır.",
          "Kapalı kapılar ardında yöneticiler şunu konuşur: Bu kişiye daha büyük yetki verirsek kurum rahatlar mı, yoksa biz sürekli arkasını mı toplarız?"
        ]
      },
      {
        heading: "Karar Masası",
        type: "question",
        paragraphs: [
          "Seçenek 1: En teknik adayı vekaleten görevlendirmek. Avantajı teknik ekipte saygı görmesidir; riski, yönetim olgunluğu eksikse daireler arası gerilimi büyütmesidir.",
          "Seçenek 2: En uyumlu adayı görevlendirmek. Avantajı kısa vadede sakinlik sağlar; riski, zor kararlarda pasif kalmasıdır.",
          "Seçenek 3: Teknik yeterliliği kabul edilebilir seviyede olan, kriz iletişimi güçlü, yazılı sorumluluk disiplini olan ve ekipler arası güven üreten adayı görevlendirmek.",
          "Doğru tercih çoğu zaman üçüncü seçenektir. Çünkü üst düzey kamu BT yöneticiliğinde sürdürülebilir başarı, sadece zekâdan değil, güvenilir davranış tekrarından doğar."
        ]
      },
      {
        heading: "Danışman Notu",
        type: "paragraphs",
        paragraphs: [
          "Bugünün dersi şudur: Kariyer sadece iyi iş yapmakla ilerlemez; iyi iş yaptığının kurum tarafından güvenilir biçimde görülmesiyle ilerler. İnsanlar senin ne kadar bildiğini fark eder. Ama terfi konuşmalarında daha çok şunu sorarlar: Bu kişi daha büyük sorumluluk aldığında bizi rahatlatır mı?",
          "Bir gün gerçekten Genel Müdür Yardımcısı olduğunda terfi konuşmalarında şunu göreceksin: herkesin güçlü tarafı vardır, herkesin eksik tarafı vardır. Üst yönetim, kusursuz insan aramaz. Kurumsal yükü taşıyabilecek insan arar.",
          "Sen bugün o masada kişileri değil, yönetici olgunluğunu değerlendirdin. Bu refleks çok değerlidir. Çünkü BTGMde makam yükseldikçe teknik konulardan çok insanın taşıma kapasitesini okumaya başlarsın."
        ]
      }
    ]
  },
  {
    id: "vaka-7",
    role: "Sistem ve Ağ Daire Başkanı",
    level: "8/10",
    time: "11:15",
    category: "Kamu Yönetimi: İhale, Bütçe, Mevzuat ve Denetim",
    title: "Yedekleme İhalesinde En Ucuz Teklif Gerçekten En Ucuz mu?",
    roleText:
      "Bu senaryoda sen Sistem ve Ağ Daire Başkanısın. Bakanlığın kritik sistemleri için yeni yedekleme altyapısı alımı gündemde. Teknik ihtiyacı savunmak zorundasın; ama bunu sadece mühendis diliyle değil, ihale, bütçe ve denetim karşısında ayakta kalacak yönetici diliyle yapman gerekiyor.",
    sections: [
      {
        type: "paragraphs",
        paragraphs: [
          "Perşembe günü saat 11.15. Genel Müdür Yardımcısının toplantı odasındasın. Masada yeni yedekleme altyapısı alımına ilişkin teknik şartname taslağı var. Genel Müdür Yardımcısı, Proje ve Strateji Yönetimi Daire Başkanı, idari-mali işler/satın alma tarafını temsilen bir görevli, hukuk biriminden bir temsilci ve sen toplantıdasınız.",
          "İlk bakışta konu teknik gibi görünür: kapasite, lisans, disk türü, yedekleme penceresi, felaket kurtarma merkezi, veri büyüme hızı. Fakat bu toplantının gerçek ağırlığı başka yerdedir. Çünkü yedekleme sistemi çalışmadığında teknik ekip uykusuz kalır; yanlış ihale dosyası hazırlandığında ise kurum yıllarca savunma yapmak zorunda kalabilir.",
          "Genel Müdür Yardımcısı dosyayı açar ve kısa bir cümle kurar: Bu alımı sadece teknik olarak değil, üç yıl sonra denetimde de savunabilir durumda olmalıyız."
        ]
      },
      {
        heading: "Toplantının İlk Gerilimi",
        type: "paragraphs",
        paragraphs: [
          "İdari-mali işler/satın alma tarafını temsilen gelen görevli yaklaşık maliyet çalışmasına esas alınan piyasa verilerini ve gelen ilk fiyat aralıklarını gösterir. Proje ve Strateji Yönetimi Daire Başkanı ise bu alımın proje takvimi, bütçe planı ve stratejik önceliklerle ilişkisini açıklar. Piyasadan gelen ilk bilgiler arasında ciddi fiyat farkı vardır. Bir çözüm çok ucuz görünmektedir; diğer çözüm daha pahalıdır ama kritik sistemler için daha gelişmiş koruma özellikleri sunmaktadır. Odada hemen bilinen cümle dolaşmaya başlar: kamu kaynağını verimli kullanmalıyız.",
          "Bu cümle doğrudur. Ama tek başına karar verdirirse eksik kalır. Kamu kaynağını verimli kullanmak, en düşük fiyatı seçmek demek değildir. Kamu kaynağını verimli kullanmak, gerçek ihtiyacı doğru tanımlamak, gereksiz lüksü ayıklamak ve kritik riski ucuz diye satın almamak demektir."
        ]
      },
      {
        heading: "Teknik Terim",
        type: "paragraphs",
        paragraphs: [
          "RTO, yani Recovery Time Objective, bir sistem çöktüğünde en fazla ne kadar sürede yeniden hizmet verebilir hale gelmesi gerektiğini ifade eder. Üst yönetici için anlamı şudur: sistemin geri dönmesi üç gün sürerse, yedek var demek kurumu kurtarmaz.",
          "RPO, yani Recovery Point Objective, bir felaket anında en fazla ne kadar veri kaybının kabul edilebilir olduğunu ifade eder. Örneğin RPO bir saatse, sistem geri geldiğinde en fazla son bir saatlik veriyi kaybetmeyi kabul ediyorsun demektir.",
          "Immutable Backup, yedeklerin belirli süre boyunca değiştirilemez veya silinemez şekilde korunmasıdır. Özellikle fidye yazılımı saldırılarında önemlidir; çünkü saldırgan üretim verisini şifreledikten sonra yedekleri de silmeye çalışabilir.",
          "Air Gap, kritik yedeklerin üretim ortamından fiziksel veya mantıksal olarak ayrıştırılmasıdır. Amaç, üretim ortamı ele geçirilse bile yedeklerin aynı saldırı zinciriyle yok edilmesini zorlaştırmaktır."
        ]
      },
      {
        heading: "Soru 1",
        type: "question",
        paragraphs: [
          "İlk soracağın soru şu değildir: Hangi ürün daha ucuz?",
          "Doğru ilk soru şudur: Bakanlığın kritik sistemleri için kabul edilebilir RTO ve RPO değerleri nedir?",
          "Çünkü RTO ve RPO tanımlanmadan yedekleme ihalesi yapmak, hız sınırı olmayan yola araç seçmeye benzer. Hangi sistemi kaç saatte ayağa kaldırman gerektiğini bilmiyorsan, aldığın ürünün yeterli olup olmadığını da bilemezsin."
        ]
      },
      {
        heading: "Yanlış Savunma",
        type: "question",
        paragraphs: [
          "Yanlış cümle şudur: En pahalı çözüm daha güvenli, onu alalım.",
          "Bu cümle denetimde ayakta kalmaz. Çünkü kamu yönetiminde pahalı olanı seçmek için teknik gerekçenin yazılı, ölçülebilir ve ihtiyaca bağlı olması gerekir. Daha güvenli demek yetmez; hangi riski hangi ölçüde azalttığını anlatman gerekir.",
          "Bir diğer yanlış cümle de şudur: En ucuz teklif geldi, onu seçelim. Bu da tek başına doğru değildir. Eğer en ucuz teklif kritik sistemlerin RTO ve RPO hedeflerini karşılamıyorsa, o teklif ilk gün ucuz görünür; kriz günü çok pahalıya mal olur."
        ]
      },
      {
        heading: "Doğru Yönetici Cümlesi",
        type: "quote",
        paragraphs: [
          "Sayın Genel Müdür Yardımcım, teknik şartnameyi marka veya ürün etrafında değil, hizmet sürekliliği hedefleri etrafında kurmalıyız. Kritik sistemler için RTO ve RPO değerleri yazılı hale getirilmeli, immutable backup ve air gap ihtiyacı fidye yazılımı risk senaryosu üzerinden gerekçelendirilmelidir. Böylece pahalı veya ucuz tartışmasından önce, hangi risk seviyesini satın aldığımızı netleştirmiş oluruz."
        ]
      },
      {
        heading: "Karar Masası",
        type: "question",
        paragraphs: [
          "Seçenek 1: En düşük maliyetli çözümü tercih etmek. Avantajı bütçe baskısını azaltır; riski, kritik sistemlerin geri dönüş hedeflerini karşılamıyorsa kurumun hizmet sürekliliğini zayıflatmasıdır.",
          "Seçenek 2: En gelişmiş çözümü tercih etmek. Avantajı güvenlik ve süreklilik kapasitesini artırır; riski, ihtiyaçla ilişkilendirilmemiş özellikler nedeniyle denetimde gereksiz harcama eleştirisine açık hale gelmesidir.",
          "Seçenek 3: Önce kritik sistem sınıflandırması, RTO/RPO hedefleri, veri büyüme projeksiyonu ve fidye yazılımı risk senaryosu yazılı hale getirilir; teknik şartname bu hedeflerin asgari karşılanması üzerine kurulur.",
          "Doğru karar üçüncü seçenektir. Çünkü iyi ihale dosyası ürün seçerek başlamaz. İhtiyacı ölçülebilir hale getirerek başlar."
        ]
      },
      {
        heading: "Kapalı Kapılar Ardında",
        type: "paragraphs",
        paragraphs: [
          "Toplantıdan sonra Genel Müdür Yardımcısı seni odada tutar. Dosyayı kapatır ve şunu söyler: Başkanım, teknik olarak haklı olmanız yetmez. Bunu denetçinin okuyacağı dille de yazmanız gerekiyor.",
          "Bu cümle önemlidir. Çünkü teknik ekipler bazen kendi aralarında çok iyi anlaşır ama dosyaya baktığında dışarıdan biri aynı zorunluluğu göremez. Denetçi senin niyetini değil, dosyanın gerekçesini okur. Genel Müdür ise o dosyayı Bakanlık katında savunmak zorunda kalır."
        ]
      },
      {
        heading: "Danışman Notu",
        type: "paragraphs",
        paragraphs: [
          "Bugünün dersi şudur: Sistem ve Ağ Daire Başkanı olduğunda teknik ihtiyaçları sadece doğru bilmek yetmez. O ihtiyacı bütçe, ihale ve denetim diline çevirebilmek gerekir. RTO, RPO, immutable backup ve air gap gibi kavramlar mühendislik ayrıntısı gibi görünebilir; ama doğru yazıldığında kurumun hizmet sürekliliği gerekçesine dönüşür.",
          "Bir gün bu masada gerçekten oturduğunda şunu unutma: iyi teknik şartname, belli bir ürünü tarif eden metin değildir. İyi teknik şartname, kurumun gerçek riskini, hizmet hedefini ve asgari teknik ihtiyacını savunulabilir biçimde anlatan metindir.",
          "En ucuz teklif her zaman en ekonomik teklif değildir. En pahalı teklif de her zaman en güvenli tercih değildir. Üst yönetici refleksi, fiyatın arkasındaki riski ve teknik kapasitenin arkasındaki kamu gerekçesini birlikte okuyabilmektir."
        ]
      }
    ]
  },
  {
    id: "vaka-8",
    role: "Uygulama Geliştirme Daire Başkanı",
    level: "8/10",
    time: "16:45",
    category: "Teknik Krizler ve Teknik Derinleşme",
    title: "Küçük Sürüm Değişikliği, Büyük Taşra Etkisi",
    roleText:
      "Bu senaryoda sen Uygulama Geliştirme Daire Başkanısın. Öğleden sonra yapılan küçük bir servis güncellemesi, taşradaki bazı işlemlerde beklenmedik hatalar üretmeye başlıyor. Senin görevin kodu savunmak değil, hizmet etkisini görmek, doğru geri dönüş kararını vermek ve diğer dairelerle gerilimi yönetmek.",
    sections: [
      {
        type: "paragraphs",
        paragraphs: [
          "Salı günü saat 16.45. Gün bitmeye yaklaşırken çağrı kayıtlarında aynı başlık artmaya başlıyor: bazı il müdürlüklerinde işlem kaydı tamamlanamıyor. Uygulama ayakta, veri tabanı ayakta, kullanıcılar sisteme girebiliyor; fakat belirli bir işlem ekranında kayıt son adımda hata veriyor. İlk bakışta sınırlı bir problem gibi görünür. Ama taşrada mesai sonuna doğru biriken işler varsa, sınırlı teknik hata kısa sürede operasyonel baskıya dönüşebilir.",
          "Nöbetçi yazılım ekibi, öğleden sonra küçük bir servis güncellemesi yapıldığını söyler. Değişiklik basit görünmektedir: bir API cevabındaki alan adlarından biri standartlaştırılmıştır. Geliştirici açısından bu temizliktir. Fakat dış sistemlerden veya eski ekranlardan biri hâlâ eski alan adını bekliyorsa, bu küçük temizlik sahada işlem kesintisi gibi görünür."
        ]
      },
      {
        heading: "Teknik Terim",
        type: "paragraphs",
        paragraphs: [
          "API Contract, iki sistemin birbirinden hangi veri alanlarını, hangi formatta ve hangi davranışla beklediğini belirleyen teknik anlaşmadır. Bunu gündelik hayatta bir form gibi düşünebilirsin: formdaki “T.C. Kimlik No” alanının adı bir anda “Kimlik Numarası” yapılırsa insan okuyabilir ama eski otomatik sistem o alanı bulamayabilir.",
          "Backward Compatibility, yeni sürümün eski istemcilerle veya eski kullanım biçimleriyle uyumlu çalışmaya devam etmesidir. Evdeki yeni telefon şarj cihazının eski prizle de çalışması gibi düşün. Yeni teknoloji gelmiştir ama eski bağlantıyı bir anda çöpe atmaz.",
          "Rollback, hatalı veya riskli bir değişiklikten önceki çalışan sürüme geri dönme işlemidir. Yönetici açısından rollback, yenilgiyi kabul etmek değildir; hizmeti korumak için kontrollü geri adımdır."
        ]
      },
      {
        heading: "İlk Toplantı",
        type: "paragraphs",
        paragraphs: [
          "Genel Müdür Yardımcısı seni, Sistem ve Ağ Daire Başkanını ve Proje ve Strateji Yönetimi Daire Başkanını kısa toplantıya çağırır. Sistem ve Ağ tarafı kaynaklarda olağan dışı yük görmediğini söyler. Siber Güvenlik tarafı belirgin saldırı göstergesi olmadığını bildirir. Bu iki bilgi önemlidir; çünkü problemin yönünü uygulama değişikliğine doğru daraltır.",
          "Bu noktada kötü Uygulama Geliştirme Daire Başkanı savunmaya geçer: Biz sadece küçük bir alan adı değiştirdik. İyi Uygulama Geliştirme Daire Başkanı ise şunu söyler: Değişiklik küçük olabilir ama etki büyükse önce hizmeti toparlayalım, sonra teknik doğruluğu tartışalım."
        ]
      },
      {
        heading: "Soru 1",
        type: "question",
        paragraphs: [
          "İlk soracağın soru şu değildir: Hangi geliştirici yaptı?",
          "Doğru ilk soru şudur: Hangi kullanıcı grubu, hangi işlem adımında, hangi API cevabından sonra hata alıyor?",
          "Çünkü kriz anında kişi aramak olayı daraltmaz. Etki haritası çıkarmak daraltır. Hangi ekran, hangi servis, hangi saat, hangi sürüm ve hangi kullanıcı grubu sorularını yan yana koyduğunda olay yönetilebilir hale gelir."
        ]
      },
      {
        heading: "Teknik Derinleşme",
        type: "paragraphs",
        paragraphs: [
          "Bu vakada asıl kırılma API contract değişikliğidir. Servis yeni alan adını döndürmeye başlamış, fakat eski istemcilerden biri hâlâ eski alan adını beklemiştir. Test ortamında hata görünmemiş olabilir; çünkü test verisi yeni istemciyle denenmiştir. Gerçek hayatta ise bazı taşra birimleri hâlâ eski ekranı veya eski entegrasyon yolunu kullanıyor olabilir.",
          "Bu nedenle sürüm geçişlerinde sadece yeni kodun çalışması yetmez. Eski istemcilerin, dış sistemlerin, raporların ve otomasyonların bu değişiklikten etkilenip etkilenmediği kontrol edilmelidir. Uygulama geliştirme yöneticisinin sorusu şudur: Bu değişiklik sadece bizim kodumuzu mu etkiliyor, yoksa bizimle konuşan herkesi mi etkiliyor?"
        ]
      },
      {
        heading: "Karar Masası",
        type: "question",
        paragraphs: [
          "Seçenek 1: Değişiklik teknik olarak doğru olduğu için sistemin yeni davranışta kalması. Avantajı standartlaşmayı korur; riski, sahada devam eden işlemleri aksatmasıdır.",
          "Seçenek 2: Tam rollback yapmak. Avantajı hizmeti hızlı toparlar; riski, yeni sürümdeki başka düzeltmeleri de geri alması ve gece yeni geçiş baskısı yaratmasıdır.",
          "Seçenek 3: Eski ve yeni alan adını geçici süre birlikte döndürmek, etkilenen istemcileri tespit etmek ve planlı geçiş takvimiyle eski alanı kaldırmak.",
          "Doğru karar çoğu zaman üçüncü seçenektir. Çünkü bu karar hem hizmeti toparlar hem de teknik standardı tamamen terk etmez. Üst yönetici refleksi, doğru teknik hedefi sahadaki gerçek geçiş hızıyla uyumlu hale getirmektir."
        ]
      },
      {
        heading: "Genel Müdür Yardımcısına Bilgi",
        type: "quote",
        paragraphs: [
          "Sayın Genel Müdür Yardımcım, problem altyapı veya güvenlik kaynaklı görünmüyor. Öğleden sonra yapılan servis değişikliğinde API cevabındaki alan adı standardizasyonu, bazı eski istemcilerde uyumsuzluk üretmiş. Hizmet etkisini azaltmak için eski ve yeni alan adını geçici süre birlikte destekleyen düzeltmeyi çıkarıyoruz. Etkilenen istemcileri listeleyip kalıcı geçiş takvimini ayrıca sunacağız."
        ]
      },
      {
        heading: "Danışman Notu",
        type: "paragraphs",
        paragraphs: [
          "Bugünün dersi şudur: Uygulama Geliştirme Daire Başkanı olduğunda kodun niyetine değil, hizmetin sonucuna bakacaksın. Teknik olarak temiz bir değişiklik, kurumsal olarak kötü zamanlanmış olabilir. Standartlaştırma doğru olabilir; ama eski istemciler hazır değilse doğru şey yanlış anda yapılmış olur.",
          "Bir gün bu koltukta oturduğunda geliştiriciyi korumak ile hatayı sahiplenmek arasındaki dengeyi iyi kurman gerekecek. Ekibini Bakanlık katında hedef göstermeyeceksin; ama ekibin yaptığı değişikliğin sahadaki etkisini de küçümsemeyeceksin. İyi başkan, kodu savunmaz. Hizmeti savunur.",
          "Küçük değişikliklerin büyük etki üretmesinin nedeni çoğu zaman teknik karmaşıklık değil, bağımlılıkların görünmez hale gelmesidir. BTGM seviyesinde olgunluk, sadece sistemi yapmak değil; o sistemle konuşan herkesi hesaba katmaktır."
        ]
      }
    ]
  },
  {
    id: "vaka-9",
    role: "İçişleri Uzmanı",
    level: "7/10",
    time: "09:30",
    category: "Kamu Yönetimi: İhale, Bütçe, Mevzuat ve Denetim",
    title: "Bakım Sözleşmesi Bitiyor, Herkes Acele Ediyor",
    roleText:
      "Bu senaryoda sen aslen bilgisayar mühendisi olan bir İçişleri Uzmanısın. Geçici olarak Proje ve Strateji Yönetimi Daire Başkanlığında dış proje ve bakım sözleşmeleri dosyalarını takip ediyorsun. Karar verici makam sen değilsin; fakat teknik risk ile mevzuata uygun süreç arasındaki boşluğu fark etmen bekleniyor.",
    sections: [
      {
        type: "paragraphs",
        paragraphs: [
          "Pazartesi sabahı saat 09.30. Genel Müdür Yardımcısının odasında kısa ama gergin bir toplantı var. Kritik bir uygulamanın bakım ve destek sözleşmesi üç hafta sonra bitiyor. Uygulama Geliştirme Daire Başkanlığı kesinti riskinden endişeli, Sistem ve Ağ tarafı altyapı bağımlılıklarının devam ettiğini söylüyor, idari-mali işler/satın alma tarafı ise sürecin takvime sıkıştığını belirtiyor.",
          "Masadaki ilk cümle tanıdık: Başkanım, mevcut firmayla hızlıca devam edelim, sistem kritik. Bu cümle teknik olarak anlaşılabilir; ama kamu yönetiminde tek başına yeterli değildir. Kritik sistem olması, sürecin mevzuat dışına çıkabileceği anlamına gelmez. Aynı şekilde mevzuata uyacağız diye hizmet sürekliliği riski de görmezden gelinemez."
        ]
      },
      {
        heading: "Resmi Rol Çerçevesi",
        type: "paragraphs",
        paragraphs: [
          "Bu toplantıda alımı yapan kişi sen değilsin. Proje ve Strateji Yönetimi Daire Başkanlığı da tek başına satın alma makamı değildir. Teknik birimler ihtiyacı, kapsamı ve hizmet sürekliliği riskini ortaya koyar. Proje ve Strateji tarafı bu ihtiyacın proje takvimi, yatırım planı ve stratejik önceliklerle ilişkisini koordine eder. İdari-mali işler/satın alma tarafı yaklaşık maliyet, piyasa araştırması, ihale veya alım usulü ve dosya sürecini mevzuata uygun yürütür. Harcama yetkilisi, gerçekleştirme görevlileri ve varsa ihale komisyonu ise 5018 ve 4734 çerçevesindeki resmi sorumlulukları taşır.",
          "Bu ayrımı doğru kurmak önemlidir. Çünkü teknik ekip bazen aciliyeti görür ama satın alma sürecinin hukuki yükünü küçümser. İdari-mali taraf bazen mevzuat güvenliğini görür ama teknik hizmet sürekliliği riskini yeterince hissetmeyebilir. İyi yönetici, bu iki dünyanın birbirini ezmesine izin vermez."
        ]
      },
      {
        heading: "Teknik Terim",
        type: "paragraphs",
        paragraphs: [
          "SLA, yani Service Level Agreement, hizmetin hangi sürelerde, hangi kalite seviyesinde ve hangi müdahale şartlarıyla sunulacağını belirleyen hizmet seviyesi anlaşmasıdır. Bunu bir servis bakım taahhüdü gibi düşünebilirsin: arıza olduğunda ne kadar sürede telefona bakılacak, ne kadar sürede müdahale edilecek, kritik sorun ne kadar sürede çözülecek?",
          "Bakım penceresi, planlı teknik çalışmaların yapılacağı önceden belirlenmiş zaman aralığıdır. Hastanede ameliyathane bakımının hasta yoğunluğunun en düşük olduğu saate planlanması gibi düşünebilirsin. Kritik sistemlerde bakım penceresi yoksa, iyi niyetli bir güncelleme bile hizmet saatinde krize dönüşebilir.",
          "Eskalasyon, bir problemin belirli sürede çözülememesi halinde daha üst teknik veya yönetsel seviyeye taşınmasıdır. Çağrı merkezinde müşteri temsilcisinin çözemediği konuyu uzman ekibe aktarması gibi düşün. Eskalasyon yolu sözleşmede net değilse kriz anında kimin devreye gireceği belirsizleşir."
        ]
      },
      {
        heading: "Soru 1",
        type: "question",
        paragraphs: [
          "İlk soracağın soru şu değildir: Mevcut firmayla devam edebilir miyiz?",
          "Doğru ilk soru şudur: Hizmetin kesintiye uğramaması için teknik asgari ihtiyaç nedir ve bu ihtiyaç mevzuata uygun hangi yöntemle karşılanabilir?",
          "Çünkü kamu yöneticisi önce sonucu değil, gerekçeli yolu kurar. Mevcut firma teknik olarak avantajlı olabilir; ama bu avantaj dosyada gerekçelendirilmemişse, karar savunulabilir olmaktan çıkar."
        ]
      },
      {
        heading: "Yanlış Refleks",
        type: "question",
        paragraphs: [
          "Yanlış refleks şudur: Sistem kritik, o yüzden hızlıca aynı firmadan alalım.",
          "Bu cümle teknik aciliyeti anlatır ama hukuki süreci taşımaz. Kamu alımlarında alım usulü, yaklaşık maliyet, rekabet, ihtiyaç gerekçesi, teknik şartname, harcama yetkisi ve dosya bütünlüğü birlikte düşünülür. Teknik aciliyet varsa bile bunun nasıl belgeleneceği ve hangi mevzuat yoluyla karşılanacağı ayrıca değerlendirilmelidir.",
          "Bir diğer yanlış refleks de şudur: Süreç yetişmiyor, o zaman risk teknik birimin sorunu. Bu da doğru değildir. Hizmet kesintisi yaşanırsa vatandaş, taşra ve üst yönetim sürecin hangi birimde takıldığını değil, Bakanlık hizmetinin aksadığını görür."
        ]
      },
      {
        heading: "Doğru Yönetici Cümlesi",
        type: "quote",
        paragraphs: [
          "Sayın Genel Müdür Yardımcım, teknik açıdan bakım desteğinin kesintiye uğramaması gerekiyor; ancak alım yöntemi idari-mali işler ve harcama süreciyle birlikte mevzuata uygun netleştirilmeli. Teknik birimler olarak asgari hizmet kapsamını, SLA hedeflerini, bakım pencerelerini ve eskalasyon şartlarını yazılı hale getirelim. Satın alma tarafı da yaklaşık maliyet, piyasa araştırması ve uygun alım usulü açısından dosyayı değerlendirsin. Böylece hem hizmet sürekliliğini hem de denetlenebilirliği birlikte koruruz."
        ]
      },
      {
        heading: "Karar Masası",
        type: "question",
        paragraphs: [
          "Seçenek 1: Mevcut firmayla hızlıca devam etmek. Avantajı teknik süreklilik hissi verir; riski, dosya gerekçesi ve alım yöntemi doğru kurulmamışsa denetimde zayıf kalmasıdır.",
          "Seçenek 2: Sadece mevzuat güvenliği düşünülerek teknik geçiş riskini görmezden gelmek. Avantajı şekli süreç disiplinidir; riski, bakım boşluğu nedeniyle kritik hizmetin aksamasıdır.",
          "Seçenek 3: Teknik birimler asgari bakım ihtiyacını ve hizmet sürekliliği riskini yazılı hale getirir; idari-mali işler/satın alma tarafı mevzuata uygun alım yöntemini, yaklaşık maliyet çalışmasını ve dosya bütünlüğünü yürütür; Genel Müdür Yardımcısı bu iki hattı tek karar masasında hizalar.",
          "Doğru yaklaşım üçüncü seçenektir. Çünkü kamu BT yöneticiliğinde iyi karar, teknik aciliyeti mevzuata karşı kullanmaz; mevzuata uygun çözüm yolunu teknik gerçekliği kaybetmeden kurar."
        ]
      },
      {
        heading: "Danışman Notu",
        type: "paragraphs",
        paragraphs: [
          "Bugünün dersi şudur: İçişleri Uzmanı olarak masadaki en değerli katkın bazen karar vermek değil, yanlış kurulmuş soruyu düzeltmektir. Soru “aynı firmayla devam edelim mi” diye kurulursa herkes pozisyon almaya başlar. Soru “hizmet sürekliliğini mevzuata uygun nasıl koruruz” diye kurulursa çözüm alanı açılır.",
          "Kamu BT yönetiminde teknik ihtiyaç ile satın alma süreci iki ayrı dünya değildir. Biri diğerinin yerine geçmez. Teknik birim ihtiyacı dürüst ve ölçülebilir anlatır; satın alma/idari-mali süreç bu ihtiyacın mevzuata uygun karşılanmasını sağlar; üst yönetim ise bu iki hattı aynı kurumsal hedefte birleştirir.",
          "Bir gün Genel Müdür Yardımcısı olduğunda bu tür toplantılarda şunu arayacaksın: kim kendi alanını savunuyor, kim kurumun tamamını düşünüyor? Büyük yöneticilik, sadece kendi biriminin haklılığını değil, kararın bütün kurum üzerindeki sonucunu görebilmektir."
        ]
      }
    ]
  },
  {
    id: "vaka-10",
    role: "Sistem ve Ağ Daire Başkanı",
    level: "9/10",
    time: "08:18",
    category: "Teknik Krizler ve Teknik Derinleşme",
    title: "Bazı İller Sisteme Giremiyor, Merkez Her Şey Normal Diyor",
    roleText:
      "Bu senaryoda sen Sistem ve Ağ Daire Başkanısın. Sabah saatlerinde bazı iller Bakanlık uygulamalarına erişemediğini bildiriyor; merkez veri merkezi ve uygulama ekipleri sistemlerin ayakta olduğunu söylüyor. Senin görevin, 'bizde sorun yok' konforuna kapılmadan ağ yönlendirme katmanında gerçeği bulmak.",
    sections: [
      {
        type: "paragraphs",
        paragraphs: [
          "Pazartesi sabahı saat 08.18. İlk çağrı Doğu Anadolu'daki bir ilden geliyor: Bakanlık uygulamasına giriş ekranı açılıyor ama işlem ilerlemiyor. Beş dakika sonra başka bir bölgeden benzer kayıt düşüyor. Merkezdeki izleme ekranlarında uygulama sunucuları ayakta, veri tabanı normal, CPU ve bellek değerleri sakin görünüyor.",
          "Bu tür anlarda en tehlikeli cümle şudur: merkezde her şey normal. Çünkü merkezde normal görünen sistem, bazı iller için fiilen erişilemez durumda olabilir. Kullanıcı için hizmet, veri merkezindeki yeşil ışık değildir; kendi ekranında işlem yapabilmesidir."
        ]
      },
      {
        heading: "İlk Refleks",
        type: "paragraphs",
        paragraphs: [
          "Sistem ve Ağ Daire Başkanı olarak ilk refleksin uygulama ekibini suçlamak ya da telekom operatörünü arayıp baskı kurmak olmamalı. Önce etki haritası çıkarmalısın: hangi iller etkileniyor, aynı operatörü mü kullanıyorlar, aynı güzergâhtan mı geliyorlar, iç ağda mı sorun var, internet yönlendirmesinde mi, yoksa belirli bir IP bloğuna erişimde mi kopma yaşanıyor?",
          "Nöbetçi ekibe talimatın net olur: etkilenen illerden traceroute alın, sağlıklı illerle karşılaştırın, veri merkezi dış erişimlerinde BGP duyurularını kontrol edin, operatör peering durumunu teyit edin, son 24 saatte ağ tarafında yapılan değişiklikleri listeleyin."
        ]
      },
      {
        heading: "Teknik Terim",
        type: "paragraphs",
        paragraphs: [
          "BGP, yani Border Gateway Protocol, internet üzerindeki büyük ağların birbirine hangi IP bloklarına hangi yoldan ulaşacağını söylediği yönlendirme protokolüdür. Bunu şehirler arası yol tabelaları gibi düşünebilirsin: tabela yanlış yönü gösterirse yol açık olsa bile araçlar yanlış güzergâha sapar.",
          "ASN, yani Autonomous System Number, internette kendi yönlendirme politikasına sahip büyük ağların kimlik numarasıdır. Bir kargo şirketinin ülke çapındaki dağıtım kodu gibi düşünebilirsin; hangi ağın hangi rotayı duyurduğunu anlamaya yarar.",
          "Prefix, ağ dünyasında belirli bir IP adres aralığını ifade eder. Mahalle veya posta kodu gibi düşünebilirsin. BGP'de bir prefix yanlış duyurulursa, o adrese gitmesi gereken trafik yanlış yere yönlenebilir.",
          "Route Leak, bir ağın aslında duyurmaması gereken rotayı başka ağlara duyurmasıdır. Bir kurum içi servis yol tarifinin yanlışlıkla şehirler arası yol tabelasına yazılması gibi düşünebilirsin. Sonuçta trafik yanlış bir noktaya akar veya bazı kullanıcılar hizmete ulaşamaz."
        ]
      },
      {
        heading: "Soru 1",
        type: "question",
        paragraphs: [
          "İlk soracağın soru şu değildir: uygulama çalışıyor mu?",
          "Doğru ilk soru şudur: etkilenen illerin ağ yolu sağlıklı illerden nerede ayrılıyor?",
          "Çünkü uygulama ayakta olabilir, veri merkezi ayakta olabilir, ama belirli illerden gelen trafik yanlış rotaya gidiyor olabilir. Üst yönetici için bu ayrım önemlidir: sorun uygulama kesintisi değil, erişim yolunda yönlendirme problemi olabilir."
        ]
      },
      {
        heading: "Teknik Derinleşme",
        type: "paragraphs",
        paragraphs: [
          "Etkilenen illerden alınan traceroute çıktıları, trafiğin belirli bir operatör geçişinden sonra beklenmedik bir yöne saptığını gösterir. Traceroute, bir paketin hedefe giderken geçtiği ara noktaları gösteren tanı aracıdır. Haritada yolculuğun hangi şehirlerden geçtiğini görmek gibi düşünebilirsin.",
          "Aynı dakikalarda dış BGP izleme kaynaklarında Bakanlığa ait bir prefix için olağan dışı rota görülür. Bu, kesin olarak saldırı demek değildir; operatör kaynaklı yanlış duyuru, route leak, yanlış filtreleme veya geçici peering problemi olabilir. Ama artık olayın rengi değişmiştir. Merkezde sunucular ayakta olsa bile hizmet bazı iller için fiilen bozulmuştur."
        ]
      },
      {
        heading: "Genel Müdür Yardımcısına İlk Bilgi",
        type: "quote",
        paragraphs: [
          "Sayın Genel Müdür Yardımcım, uygulama ve veri merkezi katmanında genel kesinti görünmüyor; ancak bazı illerden Bakanlık sistemlerine erişimde ağ yönlendirme kaynaklı problem tespit ediyoruz. Etkilenen illerin trafik güzergâhları sağlıklı illerden farklılaşıyor. Operatör tarafıyla BGP duyuruları, prefix yönlendirmeleri ve peering durumu kontrol ediliyor. İlk değerlendirme 30 dakika içinde netleştirilecek; şu an olay uygulama arızası değil, erişim yolu problemi olarak değerlendiriliyor."
        ]
      },
      {
        heading: "Karar Masası",
        type: "question",
        paragraphs: [
          "Seçenek 1: Uygulama ekibinden servisleri yeniden başlatmasını istemek. Avantajı hızlı aksiyon gibi görünür; riski, sorun ağ yönlendirmesindeyse gereksiz müdahale yaparak yeni belirsizlik üretmesidir.",
          "Seçenek 2: Operatöre genel arıza kaydı açıp beklemek. Avantajı sorumluluğu dış tarafa iletir; riski, Bakanlık tarafında ölçülebilir etki haritası ve teknik kanıt olmadan süreci pasif hale getirmesidir.",
          "Seçenek 3: Etkilenen iller, rotalar, prefix duyuruları ve operatör geçiş noktaları teknik kanıtla ortaya konur; operatörle üst seviye arıza koordinasyonu açılır; taşra birimlerine kısa ve sakin bilgilendirme yapılır.",
          "Doğru karar üçüncü seçenektir. Çünkü ağ krizlerinde en değerli şey bağırmak değil, doğru kanıtla doğru kapıyı çalmaktır."
        ]
      },
      {
        heading: "Kapalı Kapılar Ardında",
        type: "paragraphs",
        paragraphs: [
          "Olay toparlandıktan sonra Genel Müdür Yardımcısı sana şunu sorar: Bu kadar teknik bir konuyu Bakan Yardımcısına nasıl anlatacağız? Senin cevabın sade olmalıdır: Sistemlerimiz merkezde çalışıyor; ancak bazı illerden gelen trafik yanlış veya sağlıksız güzergâha yönlendiği için kullanıcılar hizmete ulaşamadı. Operatörle rota düzeltmesi yapıldı, etki azaldı, kalıcı önlem için BGP izleme ve operatör eskalasyon prosedürü güncellenecek.",
          "Bu açıklama teknik gerçeği saklamaz ama gereksiz ayrıntıyla makamı boğmaz. Üst yönetim BGP komutlarını bilmek zorunda değildir; ama olayın veri merkezi mi, uygulama mı, operatör yönlendirmesi mi olduğunu bilmek zorundadır."
        ]
      },
      {
        heading: "Danışman Notu",
        type: "paragraphs",
        paragraphs: [
          "Bugünün dersi şudur: Sistem ve Ağ Daire Başkanı olduğunda 'bizde sorun yok' cümlesine çok dikkat edeceksin. Kurumsal hizmette sorun, sadece senin ekranında alarm yanınca var olmaz. Kullanıcı hizmete ulaşamıyorsa sorun vardır ve senin görevin o sorunun hangi katmanda olduğunu kanıtla ayırmaktır.",
          "Ağ yöneticiliğinde olgunluk, kabloyu, router'ı veya operatörü suçlamak değildir. Olgunluk; etki alanını ölçmek, sağlıklı ve sağlıksız yolları karşılaştırmak, teknik kanıt üretmek ve üst yönetime anlaşılır bir hikâye sunmaktır.",
          "Bir gün Genel Müdür olduğunda bu tür olaylarda şunu arayacaksın: ekip bana mazeret mi getiriyor, kanıt mı getiriyor? Çünkü kamu BT yönetiminde güven, en çok belirsizliği ölçülebilir hale getiren ekiplerle kurulur."
        ]
      }
    ]
  },
  {
    id: "vaka-11",
    role: "Genel Müdür Yardımcısı",
    level: "8/10",
    time: "14:40",
    category: "Kamu Yönetimi ve Risk Yönetimi",
    title: "Log Deposu Doluyor, Herkes Topu Birbirine Atıyor",
    roleText:
      "Bu senaryoda sen Genel Müdür Yardımcısısın. Sistem ve Ağ birimi log depolama kapasitesinin kritik seviyeye geldiğini bildiriyor; Proje ve Strateji konunun sadece kurul gündemine alındığını söylüyor; İdari ve Mali İşler ise resmi ihtiyaç yazısı olmadan satın alma süreci başlatamayacağını hatırlatıyor. Senin görevin teknik riski, mevzuat farkını ve idari süreci tek karar hattına sokmak.",
    sections: [
      {
        type: "paragraphs",
        paragraphs: [
          "Saat 14.40. Genel Müdürün odasına çağrılırsın. Masada üç ayrı not vardır. Birincisi Sistem ve Ağ Yönetimi Daire Başkanlığından gelir: log depolama alanı yüzde 91 doluluğa ulaşmıştır, mevcut büyüme hızıyla üç-dört ay içinde kapasite tükenecektir. İkincisi Proje ve Strateji Yönetimi tarafından yazılmıştır: konu Bilişim Koordinasyon Kurulu gündemine alınmıştır, ancak resmi kaynak ihtiyacı talebi gelmemiştir. Üçüncüsü İdari ve Mali İşler tarafındandır: satın alma süreci için teknik ihtiyaç, yaklaşık miktar, bütçe tertibi ve onay zinciri netleşmelidir.",
          "Odaya girdiğinde herkes kendi cümlesinde haklıdır. Sistem ve Ağ risk görüyor. Proje ve Strateji gündem yönetimini anlatıyor. İdari ve Mali İşler mevzuata uygun dosya oluşmadan hareket edemeyeceğini söylüyor. Kamu kurumlarında kriz bazen birinin yanlış yapmasıyla değil, herkesin sadece kendi doğru cümlesini kurmasıyla büyür."
        ]
      },
      {
        heading: "İlk Ayrım",
        type: "paragraphs",
        paragraphs: [
          "Toplantıya şu cümleyle başlarsın: Önce aynı şeyi mi konuşuyoruz, onu ayıralım. Log saklama yönergesi başka bir konudur, mevcut log depolama kapasitesinin tükenmesi başka bir konudur.",
          "Bu ayrım odayı sakinleştirir. Çünkü yönerge çalışması kurumun hangi logları, hangi sınıflandırmayla, hangi süreyle, hangi erişim yetkileriyle saklayacağını belirleyen politika işidir. Kapasite riski ise bugün çalışan altyapının birkaç ay içinde log alamaz hale gelme ihtimalidir. Birincisi kurul ve politika takvimi ister; ikincisi ölçülebilir teknik ihtiyaç ve idari aksiyon ister."
        ]
      },
      {
        heading: "Kısa Mevzuat Kontrolü",
        type: "paragraphs",
        paragraphs: [
          "Burada yönetici refleksi açısından kritik nokta şudur: 5651 sayılı düzenleme tarafında trafik bilgisi, erişim sağlayıcı ve ilgili yükümlülükler gibi kavramlar vardır; fakat kurum içindeki her uygulama logunu aynı hukuki kategoriye koymak doğru değildir. İnternet erişim logları, güvenlik logları, uygulama işlem logları ve denetim izleri aynı teknik sepete atılsa bile aynı hukuki gerekçeye dayanmayabilir.",
          "4734 sayılı Kamu İhale Kanunu tarafında ise teknik şartnamede işin teknik özelliklerinin idare tarafından belirlenmesi esastır; yaklaşık maliyet de ihale öncesinde idarece, dayanaklarıyla birlikte hazırlanır ve ilgili olmayan kişilerle paylaşılmaz. Bu şu anlama gelir: teknik birim ihtiyacı ve teknik kriterleri yazmadan sağlıklı satın alma dosyası oluşmaz; fakat satın alma sürecinin idari sorumluluğu teknik birimin omzuna bırakılmaz."
        ]
      },
      {
        heading: "Masadaki Yanlış Soru",
        type: "paragraphs",
        paragraphs: [
          "Toplantıda biri şunu söyler: Bu iş Proje ve Strateji'de mi, İdari ve Mali İşler'de mi?",
          "Bu soru eksiktir. Doğru soru şudur: Bu ihtiyacın teknik sahibi kim, idari süreç sahibi kim, stratejik planlama gerektiriyor mu?",
          "Cevap netleşir. Teknik sahip Sistem ve Ağ Yönetimi Daire Başkanlığıdır; çünkü logların tutulduğu storage, sunucu, yedekleme ve kapasite izleme altyapısını onlar işletir. Siber Güvenlik Daire Başkanlığı da masadadır; çünkü hangi güvenlik loglarının SIEM üzerinde ne kadar süre aranabilir kalacağı güvenlik operasyonunu doğrudan etkiler. İdari ve Mali İşler satın alma ve dosya sürecini yürütür. Proje ve Strateji ise konu sadece acil ek disk alımı olmaktan çıkıp kurumun log mimarisi, yıllara sari kapasite planı veya kurul kararı gerektiren politika değişikliğine dönüştüğünde devreye girer."
        ]
      },
      {
        heading: "Teknik Terim",
        type: "paragraphs",
        paragraphs: [
          "EPS, yani Events Per Second, bir log sistemine saniyede kaç olay kaydı geldiğini gösteren metriktir. Bunu bir binanın giriş turnikelerinden saniyede kaç kişinin geçtiğini ölçmek gibi düşünebilirsin. Günlük toplam log hacmi önemli olsa da EPS yükseldiğinde SIEM ya da log toplama altyapısı anlık baskı altında kalabilir.",
          "Hot Storage, sık aranan ve hızlı erişilmesi gereken güncel logların tutulduğu hızlı depolama katmanıdır. Masanın üzerindeki aktif dosyalar gibidir; elini uzatınca hemen bulursun ama masa alanı sınırlıdır ve pahalıdır.",
          "Cold Storage, daha seyrek erişilen eski logların daha ekonomik ama daha yavaş erişilen depolama katmanında saklanmasıdır. Arşiv deposuna kaldırılmış klasörler gibi düşünebilirsin; her dakika bakmazsın ama gerektiğinde düzenli biçimde çıkarabilmen gerekir.",
          "WORM, Write Once Read Many ifadesinin kısaltmasıdır. Bir verinin bir kez yazıldıktan sonra belirli süre boyunca değiştirilememesi veya silinememesi yaklaşımıdır. Noterde mühürlenmiş evrak gibi düşünebilirsin; amaç, logların sonradan oynanmadığını gösterebilmektir."
        ]
      },
      {
        heading: "GMY Olarak Toplantıyı Çevirmen",
        type: "paragraphs",
        paragraphs: [
          "Sistem ve Ağ Daire Başkanına dönersin: Bugün satın alma talebi yazabilmemiz için bana üç sayfalık teknik ihtiyaç analizi lazım. Mevcut kapasite, doluluk oranı, günlük büyüme, EPS artışı, hangi log kaynaklarının ne kadar veri ürettiği, kapasitenin ne zaman tükeneceği, geçici önlem seçenekleri ve önerilen kalıcı mimari yazılacak.",
          "Siber Güvenlik Daire Başkanına dönersin: Hangi loglar güvenlik operasyonu açısından sıcak tutulmalı, hangileri arşiv katmanına alınabilir, SIEM üzerinde aranabilirlik süresi ne olmalı, olay müdahalesi açısından minimum gereksinim nedir, bunu yazacaksınız.",
          "İdari ve Mali İşler tarafına dönersin: Teknik ihtiyaç raporu geldikten sonra yaklaşık maliyet çalışması, alım yöntemi ve takvim seçenekleri sizde. Teknik ihtiyacın içeriğini siz belirlemeyeceksiniz; ama dosyanın mevzuata uygun, rekabeti daraltmayan ve denetime dayanabilir olmasını siz güvenceye alacaksınız.",
          "Proje ve Strateji tarafına dönersin: Eğer ihtiyaç sadece mevcut kapasitenin sürdürülebilir şekilde artırılmasıysa bunu acil işletme ihtiyacı olarak yürüteceğiz. Fakat rapor, Bakanlık genelinde log mimarisinin değişmesi, yeni merkezi arşiv katmanı kurulması veya çok yıllı yatırım gerektirdiğini gösterirse bunu proje portföyüne ve kurul gündemine ayrıca taşıyacaksınız."
        ]
      },
      {
        heading: "Karar",
        type: "paragraphs",
        paragraphs: [
          "Toplantının sonunda dört maddelik karar yazdırırsın. Bir: Sistem ve Ağ Yönetimi Daire Başkanlığı üç iş günü içinde teknik ihtiyaç analiz raporunu hazırlayacaktır. İki: Siber Güvenlik Daire Başkanlığı log türlerini güvenlik operasyonu ve denetim ihtiyacı açısından sınıflandıracaktır. Üç: İdari ve Mali İşler, teknik rapor geldikten sonra satın alma takvimi ve yaklaşık maliyet sürecini başlatacaktır. Dört: Proje ve Strateji, raporun sonucuna göre konunun işletme ihtiyacı mı yoksa stratejik yatırım mı olduğunu değerlendirecektir.",
          "Bu karar basit görünür ama kurum içi top çevirme halini bitirir. Çünkü artık herkesin cümlesi görev cümlesine dönüşmüştür."
        ]
      },
      {
        heading: "Bakan Yardımcısına Verilecek Not",
        type: "quote",
        paragraphs: [
          "Bakanlık log depolama altyapısında kapasite artış ihtiyacı oluşmuştur. Mevcut doluluk ve büyüme hızı teknik raporla netleştirilmektedir. Konu iki başlıkta yönetilmektedir: kısa vadede hizmet ve kayıt sürekliliği için kapasite ihtiyacı, orta vadede ise log saklama politikası ve mimarisinin kurumsal düzeyde güncellenmesi. Teknik ihtiyaç raporu tamamlandıktan sonra mevzuata uygun satın alma takvimi ve gerekiyorsa yatırım/proje planı ayrıca sunulacaktır."
        ]
      },
      {
        heading: "Danışman Notu",
        type: "paragraphs",
        paragraphs: [
          "Bugünün dersi şudur: Üst düzey kamu BT yöneticisi, bir dosyanın kime ait olduğunu kavga konusu yapmaz; dosyanın hangi parçasının kime ait olduğunu netleştirir. Teknik ihtiyaç, idari satın alma, bütçe planlama, kurul gündemi ve mevzuat değerlendirmesi aynı şey değildir. Bunları birbirine karıştıran yönetici ya süreci yavaşlatır ya da yanlış kişiye yanlış sorumluluk yükler.",
          "Bir daire başkanı risk bildirirken sadece 'kaynak lazım' demez. Ne kadar kaynak, ne zaman, hangi risk için, hangi alternatiflerle, hangi geçici önlemle sorularına cevap verir. Bir Genel Müdür Yardımcısı ise bu teknik cevabı idari sürece bağlar. İyi yönetim burada başlar: risk yazıya dönüşür, yazı karara dönüşür, karar takvime dönüşür.",
          "Kamu kurumlarında çoğu iş kimsenin kötü niyeti yüzünden değil, görev cümleleri net kurulmadığı için gecikir. Sen ileride Genel Müdür olduğunda toplantılarda şu cümleyi arayacaksın: 'Bu işin şu parçası bende, şu tarihe kadar şu çıktıyı vereceğim.' Bu cümle yoksa toplantı bitmemiştir; sadece konuşma yapılmıştır."
        ]
      }
    ]
  },
  {
    id: "vaka-12",
    role: "İçişleri Uzmanı",
    level: "8/10",
    time: "18:25",
    category: "Yönetim ve Liderlik",
    title: "Sen Odadan Çıktıktan Sonra",
    roleText:
      "Bu senaryoda sen aslen bilgisayar mühendisi olan bir İçişleri Uzmanısın. Proje ve Strateji Yönetimi Daire Başkanlığına geçici olarak görevlendirilmişsin ve teknik bir koordinasyon toplantısında beklenenden güçlü bir performans göstermişsin. Fakat asıl değerlendirme sen odadayken değil, sen odadan çıktıktan sonra yapılacak.",
    sections: [
      {
        type: "paragraphs",
        paragraphs: [
          "Saat 18.25. Genel Müdürlük katındaki toplantı odasında uzun bir günün son toplantısı biter. Gündem, taşradan gelen yeni taleplerin sınıflandırılması, hangi işlerin bakım faaliyeti, hangi işlerin proje, hangilerinin yatırım planlaması gerektirdiği üzerinedir. Sen toplantıya İçişleri Uzmanı olarak katılmışsındır; masada Genel Müdür Yardımcısı, birkaç Daire Başkanı ve ilgili şube müdürleri vardır.",
          "Toplantı boyunca dört kez söz alırsın. İlkinde dağınık gelen talepleri üç kategoriye ayırırsın: acil işletme ihtiyacı, planlı geliştirme ve stratejik yatırım. İkincisinde bir daire başkanının 'bunu hemen alalım' cümlesini yumuşatarak 'önce ihtiyacın teknik sahibi ve idari süreç sahibi ayrışsın' dersin. Üçüncüsünde taşradan gelen şikayetin aslında tek bir ürün talebi değil, iş akışı problemi olduğunu söylersin. Dördüncüsünde ise toplantı notunun karar cümlelerini toparlarsın.",
          "Sen odadayken kimse büyük bir övgü cümlesi kurmaz. Genel Müdür Yardımcısı sadece 'tamam, notu bu çerçevede hazırlayalım' der. Daire başkanlarından biri başını sallar, biri sessiz kalır, biri de telefonuna bakar. Sen bunun sıradan bir toplantı olduğunu düşünerek odadan çıkarsın.",
          "Kapı kapandıktan sonra asıl toplantı başlar."
        ]
      },
      {
        heading: "Kapalı Kapılar Ardında",
        type: "paragraphs",
        paragraphs: [
          "Genel Müdür Yardımcısı dosyaları toplarken bir Daire Başkanına döner: Uzman arkadaşın dikkatinizi çekti mi?",
          "İlk cevap olumludur ama temkinlidir: Teknik arka planı var, konuyu hızlı kavrıyor. Özellikle işletme ihtiyacı ile yatırım projesini ayırması doğruydu. Her talebi proje diye büyütmedi, her ihtiyacı da basit alım gibi küçültmedi.",
          "Başka bir Daire Başkanı daha ihtiyatlı konuşur: Doğru söylüyor ama bazen doğruyu söylerken karşı tarafın alanını daraltıyor. Bugün Uygulama tarafı bir yerde savunmaya geçti. Bilgisi var, fakat yönetici olacaksa insanları ikna etmeyi de öğrenmesi lazım.",
          "Bu cümle odadaki havayı değiştirir. Çünkü üst yönetim sadece kimin ne bildiğine bakmaz; bildiğini hangi tonda kullandığına da bakar. Bir uzman toplantıda doğru teşhis koyabilir ama o teşhis insanları küçük düşürüyorsa ileride ekip yönetirken direnç üretir.",
          "Genel Müdür Yardımcısı bu kez daha net konuşur: Ben onda potansiyel görüyorum. Ama potansiyel tek başına yetmez. Bir kişiyi ileride daire başkanı olarak düşünmem için üç şeye bakarım: güvenilir mi, insanları arkasından sürükleyebilir mi, zor zamanda kurum refleksiyle mi hareket eder yoksa kendi haklılığını mı ispatlamaya çalışır?"
        ]
      },
      {
        heading: "Senin Görmediğin Değerlendirme",
        type: "paragraphs",
        paragraphs: [
          "Sen odada teknik doğruluğa odaklandığını sanırsın; üst yönetim ise daha geniş bir resim okur. Toplantıya hazırlıklı mı geldin? Konuşurken başkasının itibarını korudun mu? Biriminin değil, kurumun faydasını mı savundun? Not aldın mı? Karar cümlesi üretebildin mi? Gerilimi artırdın mı, azalttın mı?",
          "Daire Başkanlarından biri şunu söyler: Benim hoşuma giden tarafı, sadece eleştirmedi. Sonunda karar cümlesi önerdi. Bazı arkadaşlar çok iyi analiz yapıyor ama masadan iş çıkarmıyor. Bu arkadaşın o tarafı iyi.",
          "Bir başkası itiraz eder: Evet ama biraz daha sabır lazım. Karşı taraf yanlış cümle kurduğunda hemen düzeltmek istiyor. Bazen toplantıda en doğru bilgi, iki dakika geç söylendiğinde daha iyi kabul edilir.",
          "Bu cümle çok değerlidir. Çünkü kamu yönetiminde zamanlama da bilgidir. Doğru şeyi yanlış anda söylemek, yanlış anlaşılmaya yol açabilir. Üst düzey yöneticiler sadece cevabın doğruluğunu değil, cevabın odaya giriş biçimini de izler."
        ]
      },
      {
        heading: "Üst Yönetimin Asıl Sorusu",
        type: "paragraphs",
        paragraphs: [
          "Genel Müdür Yardımcısı toplantının sonunda şu soruyu sorar: Bu arkadaşa daha büyük bir koordinasyon dosyası versek taşır mı?",
          "Bu soru senin kariyerinde kritik bir eşiği temsil eder. Çünkü üst yönetim bir kişiye büyük dosya vermeden önce onun sadece zeki olup olmadığını ölçmez. Dosyayı büyütür mü, sakinleştirir mi? İnsanları küstürür mü, hizalar mı? Krizde üstünü bilgilendirir mi, kendi başına kahramanlık mı yapar? Hata görünce bağırır mı, sistemi düzeltir mi?",
          "Bir Daire Başkanı şöyle der: Bence taşır, ama doğrudan en gergin dosyaya vermeyelim. Önce iki daireyi ilgilendiren orta ölçekli bir koordinasyon işi verelim. Hem yazı dilini görelim hem insan ilişkilerini.",
          "Genel Müdür Yardımcısı kararını verir: Tamam. Bir sonraki toplantının ön hazırlığını o yapsın. Ama yalnız bırakmayın. Daire Başkanı üzerinden gitsin. Potansiyeli yakalım istemem."
        ]
      },
      {
        heading: "Senin Açından Görünmeyen Ders",
        type: "paragraphs",
        paragraphs: [
          "Ertesi sabah sana kısa bir görev gelir: iki daire başkanlığını ilgilendiren bir koordinasyon notu hazırlaman istenir. Sen bunu sadece yeni bir iş sanırsın. Oysa bu küçük görevin arkasında bir değerlendirme vardır. Üst yönetim seni izlemeye başlamıştır.",
          "Burada hata yapma ihtimalin şudur: Bu görevi 'kendimi gösterme fırsatı' diye görürsen fazla parlayabilirsin. Fazla parlamak bazen odayı aydınlatmaz, başkalarının gözünü alır. Doğru refleks şudur: işi sahiplen, ama sahipliği kişiselleştirme. Notu güçlü hazırla, ama ilgili dairelerin katkısını görünür kıl. Cümleleri 'ben tespit ettim' diye değil, 'yapılan değerlendirmede' diye kur.",
          "İçişleri Uzmanı olarak kariyerinin erken döneminde üst yönetimin sana bakarken aradığı şey sadece kapasite değildir. Olgunluk ararlar. Çünkü kapasite işi hızlandırır; olgunluk işi güvenli hale getirir."
        ]
      },
      {
        heading: "Danışman Notu",
        type: "paragraphs",
        paragraphs: [
          "Bugünün dersi şudur: Kurumlarda itibar sadece toplantıda söylediğin parlak cümlelerle oluşmaz. İnsanlar sen odadan çıktıktan sonra da senin hakkında konuşur. O konuşmalarda teknik bilgin kadar tavrın, sakinliğin, başkalarının alanına duyduğun saygı ve iş bitirme disiplinin değerlendirilir.",
          "Üst yönetim potansiyelli insanı hemen yukarı çekmez; önce küçük ama anlamlı dosyalarla dener. Çünkü yönetici olmak, haklı olmakla aynı şey değildir. Yönetici, haklı bilgiyi kurumu hareket ettirecek dile çevirebilen kişidir.",
          "Bir gün daire başkanı olmak istiyorsan kendine şu soruyu sık sor: Ben toplantıdan çıktığımda arkamdan 'çok biliyor' mu derler, yoksa 'bu dosyayı güvenle emanet edebiliriz' mi derler? Aradaki fark kariyer farkıdır."
        ]
      }
    ]
  },
  {
    id: "vaka-13",
    role: "Uygulama Geliştirme Daire Başkanı",
    level: "8/10",
    time: "11:10",
    category: "Teknik Krizler ve Teknik Derinleşme",
    title: "Kaydet Butonu Dönüyor, Kimse Hata Görmüyor",
    roleText:
      "Bu senaryoda sen Uygulama Geliştirme Daire Başkanısın. Taşra birimlerinde kullanılan kritik bir uygulamada kayıt işlemleri beklemeye başlıyor. Ekranda açık hata yok, veri tabanı tamamen çökmüş görünmüyor, sistem ve ağ ekipleri de altyapının ayakta olduğunu söylüyor. Senin görevin, görünmeyen beklemeyi yönetilebilir teknik ve idari karara çevirmek.",
    sections: [
      {
        type: "paragraphs",
        paragraphs: [
          "Saat 11.10. Cuma günü öğle öncesi. Taşradan ilk bildirim gelir: kullanıcı başvuru kaydını giriyor, 'Kaydet' butonuna basıyor, ekran dönüyor ama işlem bitmiyor. Beş dakika içinde benzer kayıtlar farklı illerden açılır. Çağrı merkezi notlarında aynı ifade tekrar eder: hata vermiyor, sadece bekliyor.",
          "Bu ifade uygulama yöneticisi için çok önemlidir. Çünkü hata veren sistem bağırır; bekleyen sistem susar. Hata kodu yoksa ekipler kolayca 'bizde alarm yok' rahatlığına kapılabilir. Oysa kullanıcı açısından dönüp duran bir buton ile hata ekranı arasında büyük fark yoktur; ikisi de hizmetin tamamlanmadığı anlamına gelir.",
          "İlk teknik bilgi dağınıktır. Uygulama sunucuları ayaktadır. Veri tabanı erişilebilir durumdadır. Sistem ve Ağ tarafı genel CPU, bellek ve disk değerlerinin normal aralıkta olduğunu söyler. Siber Güvenlik tarafında olağandışı trafik görünmemektedir. Buna rağmen kayıt işlemleri belirli ekranlarda yığılmaktadır."
        ]
      },
      {
        heading: "İlk Refleks",
        type: "paragraphs",
        paragraphs: [
          "Uygulama Geliştirme Daire Başkanı olarak ilk refleksin 'veri tabanı yavaş' demek olmamalıdır. Bu cümle teknik gibi görünür ama çoğu zaman sorumluluğu başka yere iten tembel bir cümledir. Doğru soru şudur: kullanıcı hangi işlemde bekliyor, uygulama bu sırada hangi servisi çağırıyor, veri tabanında hangi sorgu çalışıyor, işlem açık bir transaction içinde mi bekliyor?",
          "Ekibe kısa talimat verirsin: etkilenen ekranları listeleyin, son 24 saatte canlıya alınan değişiklikleri çıkarın, APM üzerinden yavaşlayan endpointleri bulun, veri tabanı tarafında lock wait ve deadlock kayıtlarını kontrol edin, connection pool doluluk oranını izleyin, aynı işlemi test ortamında gerçekçi veriyle tekrar deneyin.",
          "Bu talimatta dikkat çeken şey, tek bir ekibi suçlamaman ve tek bir metriğe saplanmaman olur. Çünkü uygulama performans krizlerinde sorun çoğu zaman katmanlar arasında saklanır: kod küçük bir şeyi yanlış yapar, veri tabanı bunu büyütür, kullanıcı sayısı bunu görünür hale getirir."
        ]
      },
      {
        heading: "Teknik Terim",
        type: "paragraphs",
        paragraphs: [
          "APM, yani Application Performance Monitoring, uygulamanın hangi ekran, servis veya endpointte ne kadar süre harcadığını izlemeye yarayan araç ve yaklaşımdır. Hastanede hastanın sadece ateşine değil, nabzına, tansiyonuna ve kan değerlerine birlikte bakmak gibi düşünebilirsin.",
          "Connection Pool, uygulamanın veri tabanına bağlanmak için hazır tuttuğu bağlantı havuzudur. Taksi durağında bekleyen hazır araçlar gibi düşünebilirsin. Araçların hepsi uzun yolculuğa çıkarsa durakta araç kalmaz; yeni müşteri beklemeye başlar.",
          "Transaction, birden fazla işlemin birlikte başarılı olması veya birlikte geri alınması gereken işlem bütünüdür. Banka havalesi gibi düşünebilirsin: para bir hesaptan düşüp diğerine geçmelidir; biri olup diğeri olmazsa sistem tutarsızlaşır.",
          "Lock Wait, bir işlemin veri tabanında başka bir işlemin tuttuğu kilidin açılmasını beklemesidir. Tek kişinin kullanabildiği arşiv dolabının önünde sıraya girmek gibidir. Dolabı kullanan kişi işini uzatırsa arkadaki herkes bekler.",
          "Deadlock, iki veya daha fazla işlemin birbirinin tuttuğu kaynağı bekleyerek kilitlenmesidir. Dar bir koridorda iki kişinin karşılıklı gelip ikisinin de geri adım atmaması gibi düşünebilirsin. Sistem genellikle birini iptal ederek düğümü çözer ama kullanıcı tarafında hata veya bekleme oluşabilir."
        ]
      },
      {
        heading: "İlk 30 Dakika",
        type: "paragraphs",
        paragraphs: [
          "APM ekranında tablo netleşir. Sorun uygulamanın tamamında değildir; belirli bir kayıt ekranında yoğunlaşmaktadır. Bu ekranın arka planda çağırdığı servislerden biri normalde 300 milisaniyede dönerken son iki saatte 18-25 saniye aralığına çıkmıştır. Bu tek başına felaket gibi görünmeyebilir, fakat aynı servis transaction içinde çalıştığı için veri tabanında kilitleri uzun süre tutmaktadır.",
          "Veri tabanı ekibi lock wait değerlerinin arttığını söyler. Deadlock sayısı çok yüksek değildir ama bekleyen işlem sayısı artmaktadır. Connection pool dolmaya başlamıştır. Yani sistem çökmediği halde yavaş yavaş nefessiz kalmaktadır.",
          "Son canlı geçiş listesi incelendiğinde küçük görünen bir değişiklik bulunur. Ekrana yeni bir kontrol eklenmiştir: kayıt yapılmadan önce geçmiş başvuru kayıtları taranmakta ve kullanıcıya uyarı gösterilmektedir. Ama bu kontrol, büyük veri üzerinde uygun index olmadan çalışan bir slow query üretmektedir. Slow query, normalden uzun süren veri tabanı sorgusudur. Market kasasında tek ürün için açılan sıranın, kasiyerin depoya gidip ürün geçmişini araması yüzünden uzaması gibi düşünebilirsin."
        ]
      },
      {
        heading: "Yönetici Kararı",
        type: "question",
        paragraphs: [
          "Seçenek 1: Tüm sürümü geri almak. Avantajı hızlı ve anlaşılır bir geri dönüş sağlar; riski, aynı sürümdeki diğer kritik düzeltmeleri de geri alması ve yeni yan etkiler doğurmasıdır.",
          "Seçenek 2: Veri tabanı ekibinden hemen index eklemesini istemek. Avantajı kök nedene yakın görünür; riski, canlı sistemde acele eklenen indexin yazma performansını veya bakım sürecini etkilemesidir.",
          "Seçenek 3: Yeni kontrol geçici olarak kapatılır, kayıt işlemi rahatlatılır, veri tabanı tarafında güvenli index ve sorgu düzenlemesi kontrollü bakım penceresine alınır, taşra birimlerine kısa bilgilendirme yapılır.",
          "Doğru yaklaşım üçüncü seçenektir. Çünkü burada amaç kahramanca tek hamle yapmak değil, hizmeti rahatlatırken kök nedeni kontrollü biçimde düzeltmektir. Uygulama yöneticisi olarak senin değerin, kod yazmaktan çok hangi müdahalenin hangi riski doğuracağını bilmenle ölçülür."
        ]
      },
      {
        heading: "Genel Müdür Yardımcısına İlk Bilgi",
        type: "quote",
        paragraphs: [
          "Sayın Genel Müdür Yardımcım, taşra kullanıcılarının belirli kayıt işlemlerinde bekleme yaşadığı doğrulanmıştır. Genel sistem kesintisi bulunmamaktadır; sorun belirli bir ekrandaki yeni kontrolün veri tabanında bekleme üretmesinden kaynaklanmaktadır. Kayıt işlemini rahatlatmak için ilgili kontrol geçici olarak devre dışı bırakılacak, kalıcı düzeltme için sorgu ve index düzenlemesi kontrollü bakım penceresinde uygulanacaktır. Kullanıcı tarafında veri kaybı tespit edilmemiştir; izleme devam etmektedir."
        ]
      },
      {
        heading: "Teknik Derinleşme",
        type: "paragraphs",
        paragraphs: [
          "Bu olayda öğretici nokta şudur: veri tabanı CPU değeri normal olabilir ama kullanıcı yine de bekleyebilir. Çünkü performans sorunları her zaman kaynak tüketimiyle görünmez; bazen bekleme davranışıyla görünür. Lock wait, connection pool doluluğu, yavaş endpoint süresi ve transaction süresi bu yüzden birlikte okunmalıdır.",
          "Database Index, veri tabanında aramayı hızlandırmak için kullanılan düzenli erişim yapısıdır. Kitabın sonundaki indeks gibi düşünebilirsin. İndeks yoksa aradığın kelime için tüm kitabı sayfa sayfa tararsın; doğru indeks varsa doğrudan ilgili sayfalara gidersin. Fakat her kelimeye indeks yapmak da kitabı ağırlaştırır; veri tabanında da gereksiz index yazma maliyeti üretir.",
          "Uygulama ekibinin burada sorması gereken yönetici seviyesi sorular şunlardır: Bu sorgu hangi veri hacmiyle test edildi? Transaction ne kadar süre açık kalıyor? Kullanıcı ekranda beklerken veri tabanı kilidi tutuluyor mu? Connection pool sınırına yaklaşıyor muyuz? Bu kontrol kapatılırsa iş kuralı açısından hangi risk doğar? Kalıcı düzeltme için test ve bakım planı nedir?",
          "Bu soruların amacı geliştiriciyi köşeye sıkıştırmak değildir. Amaç, teknik ayrıntıyı karar verilebilir hale getirmektir. Çünkü daire başkanı seviyesinde en kötü cümlelerden biri 'bir bakıyoruz' cümlesidir. Bakmak yetmez; neye, hangi sırayla, hangi karar için baktığını bilmek gerekir."
        ]
      },
      {
        heading: "Taşra Bilgilendirmesi",
        type: "paragraphs",
        paragraphs: [
          "Taşra tarafına gönderilecek mesaj kısa olmalıdır: Belirli kayıt işlemlerinde yavaşlık yaşandığı tespit edilmiştir. Genel sistem kesintisi bulunmamaktadır. İlgili kontrol geçici olarak kapatılarak kayıt işlemleri rahatlatılmaktadır. Kullanıcıların aynı kaydı tekrar tekrar göndermemesi, sonuç ekranını beklemesi ve devam eden sorunları çağrı merkezi kaydıyla iletmesi rica olunur.",
          "Bu bilgilendirme önemlidir. Çünkü kullanıcı belirsizlikte kalırsa aynı işlemi defalarca dener, bu da zaten zorlanan sistemi daha fazla yorar. İyi kriz yönetimi sadece teknik düzeltme değildir; kullanıcı davranışını da yönetmektir."
        ]
      },
      {
        heading: "Danışman Notu",
        type: "paragraphs",
        paragraphs: [
          "Bugünün dersi şudur: Uygulama Geliştirme Daire Başkanı olduğunda en tehlikeli konfor alanı, 'hata yoksa sorun yoktur' düşüncesidir. Kamu hizmetlerinde bekleme de sorundur. İşlem tamamlanmıyorsa vatandaş veya personel için sistem çalışmıyor demektir.",
          "İyi yönetici teknik ayrıntıyı ezbere bilmek zorunda değildir; ama doğru soruyu soracak kadar bilmelidir. Endpoint nerede yavaşlıyor, transaction nerede uzuyor, connection pool neden doluyor, veri tabanı kilidi kimde bekliyor, canlıya alınan değişiklik hangi davranışı değiştirdi? Bu sorular seni teknik ekibin yerine geçirmez; teknik ekibi doğru karar zeminine çağırır.",
          "Bir gün Genel Müdür olduğunda bu tür olaylarda sadece 'ne zaman düzelir' diye sormayacaksın. Şunu da soracaksın: Bu hata neden testte yakalanmadı? Gerçek veri hacmiyle performans testi yapıldı mı? Canlıya geçiş sonrası izleme planı var mıydı? Kullanıcı bilgilendirmesi kimdeydi? Çünkü olgun kurumlar sadece arızayı çözmez; arızanın kuruma öğrettiği dersi de sisteme yazar."
        ]
      }
    ]
  },
  {
    id: "vaka-14",
    role: "Veri Koordinasyonu Daire Başkanı",
    level: "8/10",
    time: "16:05",
    category: "Strateji, Dijital Dönüşüm ve Veri Yönetişimi",
    title: "Bakan Aynı İl İçin Üç Farklı Rakam Görüyor",
    roleText:
      "Bu senaryoda sen Veri Koordinasyonu Daire Başkanısın. Bakan Yardımcısı, valilik performans toplantısı öncesinde aynı il için üç farklı ekranda üç farklı sayı gördüğünü bildiriyor. e-İçişleri, Açık Kapı ve İş Zekası ekranlarındaki rakamlar birbirini tutmuyor. Senin görevin teknik veri farkını, kurum güvenini sarsmadan yönetişim kararına dönüştürmek.",
    sections: [
      {
        type: "paragraphs",
        paragraphs: [
          "Saat 16.05. Bakan Yardımcılığı makamından kısa ama ağır bir not gelir: Yarın valilerle yapılacak toplantıda kullanılacak tabloda aynı il için üç farklı başvuru sayısı görünüyor. Açık Kapı ekranında bir sayı, İş Zekası raporunda başka bir sayı, e-İçişleri üzerinden gelen yazışma özetinde ise üçüncü bir sayı vardır. Notun sonunda tek cümle yazılıdır: Hangisi doğru?",
          "Bu soru basit görünür ama Veri Koordinasyonu Daire Başkanı için çok kritik bir uyarıdır. Çünkü üst yönetim bir veriye güvenini kaybederse sadece o raporu sorgulamaz; kurumdaki bütün dijital dönüşüm anlatısını sorgulamaya başlar. Bir Bakan Yardımcısı aynı il için üç farklı rakam görüyorsa mesele sadece tablo hatası değildir, veri sahipliği ve tanım birliği problemidir.",
          "Toplantı odasına girdiğinde masada Uygulama Geliştirme, Proje ve Strateji, ilgili iş birimi temsilcileri ve İş Zekası raporunu hazırlayan ekip vardır. Herkes kendi ekranındaki rakamın doğru olduğunu düşünür. Bu en tehlikeli andır: herkes doğru olabilir ve kurum yine de yanlış karar verebilir."
        ]
      },
      {
        heading: "İlk Refleks",
        type: "paragraphs",
        paragraphs: [
          "İlk refleksin raporu hazırlayan kişiyi suçlamak olmamalıdır. Veri krizlerinde görünür hata çoğu zaman rapordadır ama kök neden daha geridedir: tanım farklılığı, zaman aralığı farkı, veri yenileme gecikmesi, mükerrer kayıt temizliği, yetki filtresi veya iş sürecinin farklı aşamalarını sayma biçimi.",
          "Toplantıya şu cümleyle başlarsın: Önce rakamları değil, rakamların neyi saydığını karşılaştıralım. Açık Kapı başvuru sayısı ne demek? e-İçişleri yazışma sayısı ne demek? İş Zekası raporu hangi veri setinden, hangi saat itibarıyla, hangi filtrelerle üretiliyor?",
          "Bu cümle odayı yavaşlatır ama doğru yere yavaşlatır. Çünkü veri yönetişiminde hız, yanlış tanımlanmış bir kavramı daha hızlı yaymaktan ibaretse kuruma zarar verir."
        ]
      },
      {
        heading: "BTGM Bağlamı",
        type: "paragraphs",
        paragraphs: [
          "Bilgi Teknolojileri Genel Müdürlüğünün görevi sadece uygulama yazmak değildir. Bakanlık projelerinin bilişim altyapısına uygun tasarlanması, siber güvenlik önlemleri, bağlı kuruluşlar ve mahalli idarelerle entegrasyon-standardizasyon, Bakanlık hizmetleriyle ilgili verilerin toplanması, veri tabanlarının oluşturulması, dijital dönüşüm, dijital arşiv, büyük veri ve yapay zeka çalışmaları aynı büyük resmin parçalarıdır.",
          "Bu yüzden sen bu olaya sadece 'raporda sayı hatası var' diye bakamazsın. Burada Bakanlık merkez ve taşra teşkilatının veriye güvenerek karar alabilmesi meselesi vardır. İş Zekası ekranı güzel görünse bile veri tanımı doğru değilse üst yönetim yanlış önceliklendirme yapabilir."
        ]
      },
      {
        heading: "Teknik Terim",
        type: "paragraphs",
        paragraphs: [
          "Tekil Doğruluk Kaynağı, bir konuda kurumun esas alacağı yetkili veri kaynağıdır. Bir ailede herkesin farklı takvim tuttuğunu düşün; düğün tarihi için en sonunda resmi davetiyeye bakılır. Kurumda da bazı rakamlar için hangi sistemin esas alınacağı önceden belirlenmelidir.",
          "Master Data, kurum genelinde ortak kullanılan temel referans veridir. İl, ilçe, kurum kodu, birim adı veya hizmet türü gibi bilgiler buna örnektir. Adres defterindeki kişi isimleri gibi düşünebilirsin; aynı kişi üç farklı yazımla geçerse herkes başka kişiden bahsediyor sanabilir.",
          "ETL, Extract Transform Load ifadesinin kısaltmasıdır. Verinin bir sistemden alınması, dönüştürülmesi ve başka bir raporlama ya da analiz ortamına yüklenmesi sürecidir. Mutfakta farklı pazarlardan gelen malzemeleri ayıklayıp aynı tarife uygun hale getirerek pişirmeye benzer.",
          "Data Lineage, bir verinin hangi kaynaktan geldiğini, hangi dönüşümlerden geçtiğini ve raporda hangi hale dönüştüğünü gösteren izdir. Bir evrakın hangi masalardan geçtiğini gösteren paraf zinciri gibi düşünebilirsin. Rakam tartışıldığında geriye dönüp 'bu sayı buraya nereden geldi' sorusunu cevaplar.",
          "Veri Kalitesi, verinin doğru, tam, güncel, tutarlı ve amaca uygun olup olmadığını anlatır. Temiz su şebekesi gibi düşünebilirsin; borular döşenmiş olabilir ama su kirliyse hizmet güvenilir değildir."
        ]
      },
      {
        heading: "Sorunun Açılması",
        type: "paragraphs",
        paragraphs: [
          "İlk incelemede üç fark bulunur. Birincisi, Açık Kapı ekranı başvurunun oluşturulduğu tarihi esas almaktadır. İş Zekası raporu ise başvurunun ilgili birime yönlendirildiği tarihi kullanmaktadır. İkincisi, e-İçişleri yazışma özeti sadece belirli havale türlerini saymaktadır. Üçüncüsü, İş Zekası raporu gece 02.00'de yenilenmiş; Açık Kapı ekranı ise canlı veriye daha yakındır.",
          "Yani üç ekran da teknik olarak yalan söylememektedir. Fakat üçü aynı şeyi de söylememektedir. Üst yönetim açısından problem tam da budur. Karar verici rakamın teknik açıklamasını değil, yönetimsel anlamını ister. 'Bu ilde kaç başvuru var?' sorusu tek bir cümle gibi görünür; ama veri dünyasında önce 'başvuru hangi aşamada, hangi tarih ölçütüyle, hangi mükerrerlik kuralıyla sayılıyor?' soruları cevaplanmalıdır.",
          "Uygulama ekibi kendi ekranını savunur: Biz canlı başvuru kaydını gösteriyoruz. İş Zekası ekibi kendi raporunu savunur: Biz yönlendirilmiş ve raporlanabilir kayıtları alıyoruz. İş birimi ise başka bir noktaya dikkat çeker: Toplantıda Bakan Yardımcısının görmek istediği şey teknik başvuru adedi değil, valiliğin üzerinde işlem yapması gereken açık iş yüküdür.",
          "Bu cümle kilidi açar. Demek ki ihtiyaç 'kaç kayıt oluştu' değil, 'valiliğin önünde yönetilmesi gereken kaç iş var' sorusudur."
        ]
      },
      {
        heading: "Yönetici Kararı",
        type: "question",
        paragraphs: [
          "Seçenek 1: En yüksek rakamı alıp ihtiyatlı davranmak. Avantajı riskten kaçıyor gibi görünür; riski, valilik performansını olduğundan kötü gösterip yanlış baskı üretmesidir.",
          "Seçenek 2: Canlı ekrandaki rakamı esas almak. Avantajı güncel görünmesidir; riski, toplantıdaki yönetim sorusuna uygun olmayan ham veriyi karar vericiye taşımaktır.",
          "Seçenek 3: Toplantı için geçici olarak tanımı net bir yönetim göstergesi oluşturmak; uzun vadede ise veri sözlüğü, tekil doğruluk kaynağı ve rapor sahipliği kararını kurumsallaştırmak.",
          "Doğru yaklaşım üçüncü seçenektir. Çünkü bu olay bir rapor düzeltme işi değil, veri yönetişimi işidir. Veri Koordinasyonu Daire Başkanı olarak görevin rakam seçmek değil, hangi rakamın hangi karar için kullanılacağını kuruma öğretmektir."
        ]
      },
      {
        heading: "Bakan Yardımcısına Verilecek Not",
        type: "quote",
        paragraphs: [
          "Sayın Bakan Yardımcım, aynı il için görülen rakam farkının nedeni sistem hatası değil, farklı ekranların farklı iş aşamalarını ve zaman ölçütlerini esas almasıdır. Yarınki toplantıda kullanılmak üzere 'valiliğin işlem bekleyen açık iş yükü' tanımı esas alınarak tek gösterge hazırlanacaktır. Kalıcı çözüm için Açık Kapı, e-İçişleri ve İş Zekası raporlarında veri tanımı, yenileme zamanı ve yetkili veri kaynağı standardı oluşturulacaktır."
        ]
      },
      {
        heading: "Uygulama Planı",
        type: "paragraphs",
        paragraphs: [
          "Toplantı sonunda üç günlük kısa plan çıkarırsın. Birinci gün, iş birimiyle birlikte göstergenin yönetimsel tanımı yazılır: hangi kayıtlar sayılacak, hangi tarih esas alınacak, kapatılmış ve mükerrer kayıtlar nasıl ele alınacak. İkinci gün, Uygulama Geliştirme ve İş Zekası ekipleri ETL akışını ve data lineage çizelgesini çıkarır. Üçüncü gün, rapor ekranına küçük ama kritik bir açıklama eklenir: veri kaynağı, yenileme saati ve tanım bilgisi.",
          "Ayrıca daha kalıcı bir karar önerirsin: kritik yönetim göstergeleri için bir Veri Sözlüğü hazırlanmalı, her göstergenin sahibi belirlenmeli, rapor ekranlarında 'son yenilenme zamanı' görünür olmalı, canlı operasyon ekranı ile yönetim raporu aynı şeymiş gibi sunulmamalıdır.",
          "Bu öneri basit bir arayüz iyileştirmesi değildir. Kurumun veriye güvenini koruyan yönetim sigortasıdır."
        ]
      },
      {
        heading: "Danışman Notu",
        type: "paragraphs",
        paragraphs: [
          "Bugünün dersi şudur: Üst yönetim veride tutarsızlık gördüğünde teknik açıklama değil, güvenilir karar zemini ister. 'Rakamlar farklı çünkü kaynaklar farklı' cümlesi doğru olabilir ama yönetici için yeterli değildir. Senin kurman gereken cümle şudur: 'Bu karar için şu tanımlı gösterge esas alınacak; diğer ekranlar farklı amaçlara hizmet ediyor.'",
          "Veri Koordinasyonu Daire Başkanı olmak, veri tabanı bilmekten ibaret değildir. İş biriminin neyi yönetmek istediğini anlamak, teknik ekiplerin hangi veriyi nasıl ürettiğini bilmek, raporların karar psikolojisini nasıl etkilediğini görmek gerekir. Yanlış tanımlanmış bir gösterge, iyi niyetli bir yöneticiyi yanlış baskı kurmaya götürebilir.",
          "Bir gün Genel Müdür olduğunda dashboardların güzelliğine değil, tanımların sağlamlığına bakacaksın. Çünkü üst yönetim ekranında görünen her sayı kurum içinde davranış üretir. Yanlış sayı yanlış davranış üretir; belirsiz sayı ise güven kaybı üretir."
        ]
      }
    ]
  },
  {
    id: "vaka-15",
    role: "Siber Güvenlik Daire Başkanı",
    level: "8/10",
    time: "09:35",
    category: "Teknik Krizler ve Yönetim",
    title: "Sertifika Alındı, Oltalama Maili Geldi",
    roleText:
      "Bu senaryoda sen Siber Güvenlik Daire Başkanısın. Bakanlık merkez teşkilatının ISO/IEC 27001:2022 Bilgi Güvenliği Yönetim Sistemi belgelendirme süreci başarıyla tamamlanmıştır. Daha tebrikler bitmeden, bazı personele sahte parola güncelleme bağlantısı içeren bir e-posta düştüğü anlaşılır. Senin görevin, sertifika başarısını savunmaya çalışmadan gerçek olayı BGYS mantığıyla yönetmek.",
    sections: [
      {
        type: "paragraphs",
        paragraphs: [
          "Saat 09.35. Bir gün önce merkez teşkilatının bilgi güvenliği yönetim sistemi belgelendirme başarısı kurum içinde paylaşılmıştır. Üst yönetim memnundur, ekip yorgun ama gururludur. Tam bu hava sürerken SOC ekranında orta seviyeli bir alarm görünür: aynı başlıkla gelen bir e-posta, kısa sürede farklı birimlerdeki personele ulaşmıştır. Konu satırı masum görünür: Bakanlık parola güncelleme doğrulaması.",
          "İlk incelemede e-postanın gerçek Bakanlık alan adından gelmediği, ama gönderen adının kurumsal bir birimi taklit ettiği görülür. Bağlantı, kullanıcıyı Bakanlık giriş ekranına benzeyen sahte bir sayfaya yönlendirmektedir. On yedi personel e-postayı açmış, altı personel bağlantıya tıklamış, üç personelin kullanıcı adı ve parolasını girdiği değerlendirilmektedir.",
          "Bu olay teknik olarak büyük bir felaket değildir. Ama zamanlaması hassastır. Çünkü sertifika sonrası gelen ilk güvenlik olayı, kurum içinde yanlış bir psikoloji doğurabilir: Daha dün ISO belgesi aldık, bugün nasıl oltalama oluyor? İşte Siber Güvenlik Daire Başkanı olarak ilk düzeltmen gereken algı budur. ISO belgesi olay olmayacağı anlamına gelmez; olayın fark edilmesi, yönetilmesi, kayıt altına alınması ve sürekli iyileştirmeye dönüştürülmesi anlamına gelir."
        ]
      },
      {
        heading: "İlk Refleks",
        type: "paragraphs",
        paragraphs: [
          "İlk refleksin 'bunu kim açmış' diye insan avına çıkmak olmamalıdır. Oltalama olaylarında kişiyi utandırmak, sonraki olayların gizlenmesine yol açar. Doğru ilk refleks şudur: etki alanını daralt, kimlik bilgisi giren hesapları koru, aynı e-postanın yayılımını durdur, kanıtı bozmadan olay kaydını aç.",
          "SOC ekibine talimatın net olur: IOC listesini çıkarın, sahte alan adını ve IP adreslerini engelleyin, e-posta güvenlik geçidinde aynı başlık ve bağlantı örüntüsünü arayın, tıklayan kullanıcıların hesap hareketlerini kontrol edin, MFA denemelerini inceleyin, parola giren kullanıcıların oturumlarını sonlandırıp parola değişimini zorunlu kılın.",
          "Sistem ve Ağ tarafına dönersin: DNS ve proxy loglarında sahte adrese erişim var mı bakılacak. Uygulama ekibine dönersin: kurumsal giriş ekranını taklit eden sayfa nedeniyle kullanıcıların ayırt edemediği görsel unsurlar not edilecek. İnsan Kaynakları veya eğitim tarafına dönersin: olay sonrası duyuru suçlayıcı değil, öğretici dille hazırlanacak."
        ]
      },
      {
        heading: "BTGM Bağlamı",
        type: "paragraphs",
        paragraphs: [
          "Bilgi güvenliği politikası sadece firewall, antivirüs veya SIEM ekranı değildir. İçişleri gibi geniş merkez, taşra ve bağlı kuruluş etkisi olan bir yapıda bilgi güvenliği; iş sürekliliği, kritik verilerin korunması, personel farkındalığı, yasal mevzuata uyum ve sürekli iyileştirme ile birlikte düşünülür.",
          "Bu yüzden bu olayda kendini savunmaya geçmezsin. 'Sertifikamız var, bu nasıl olur' sorusu yerine 'Sistem olayı gördü mü, müdahale etti mi, kayda aldı mı, tekrarını azaltacak ders çıkardı mı' sorusunu kurarsın. Üst yönetim için güven veren cevap budur."
        ]
      },
      {
        heading: "Teknik Terim",
        type: "paragraphs",
        paragraphs: [
          "BGYS, Bilgi Güvenliği Yönetim Sistemi demektir. Kurumun bilgi güvenliğini tek tek kahramanların dikkatiyle değil, risk, politika, süreç, sorumluluk, kayıt ve sürekli iyileştirme düzeniyle yönetmesidir. Bir hastanenin sadece iyi doktorlara değil, triyaj, kayıt, sterilizasyon ve acil müdahale prosedürlerine de ihtiyaç duyması gibi düşünebilirsin.",
          "ISO/IEC 27001, bilgi güvenliği yönetim sisteminin kurulması, işletilmesi, izlenmesi ve iyileştirilmesi için uluslararası bir standarttır. Bu belge 'hiç olay yaşamayacağız' belgesi değildir; 'olayları sistematik olarak yönetebilecek olgunluğa sahibiz' iddiasıdır.",
          "Oltalama, yani phishing, kullanıcıyı sahte e-posta, mesaj veya web sayfasıyla kandırarak parola, kod, belge veya işlem yaptırmaya çalışan saldırı yöntemidir. Bankadan gelmiş gibi görünen sahte SMS'e benzer; amaç kapıyı teknik olarak kırmak değil, anahtarı kullanıcıdan almaktır.",
          "MFA, Multi-Factor Authentication, girişte parolaya ek olarak ikinci bir doğrulama faktörü istemektir. Eve girmek için sadece anahtar değil, apartman görevlisinin seni tanıması veya ikinci bir kapı kodu istemesi gibi düşünebilirsin. Parola sızsa bile saldırganın hemen içeri girmesini zorlaştırır.",
          "IOC, Indicator of Compromise, bir güvenlik olayına işaret eden teknik izdir. Şüpheli IP adresi, sahte alan adı, dosya hash'i veya e-posta başlığı buna örnek olabilir. Olay yerinde bulunan parmak izi gibi düşünebilirsin; tek başına her şeyi anlatmaz ama araştırmayı doğru yere yönlendirir."
        ]
      },
      {
        heading: "İlk 45 Dakika",
        type: "paragraphs",
        paragraphs: [
          "İlk 45 dakikada tablo netleşir. E-posta dış kaynaklıdır, kurumsal alan adı birebir ele geçirilmemiştir. Sahte sayfa gerçek giriş ekranına görsel olarak benzemektedir ama alan adı farklıdır. MFA kullanan hesaplarda başarılı giriş görülmemiştir; ancak üç kullanıcının parola bilgisini girdiği kuvvetle muhtemeldir.",
          "Bu noktada iki işi aynı anda yürütürsün. Birinci iş teknik sınırlamadır: oturumları sonlandırmak, parola değişimi yaptırmak, sahte alan adını engellemek, benzer e-postaları karantinaya almak, tıklama ve giriş denemesi yapan hesapları izlemek. İkinci iş yönetimsel güvendir: olayı büyütmeden saklamamak, küçültmeden panik üretmemek.",
          "Siber güvenlik olaylarında en kötü iki refleks birbirine benzer şekilde zararlıdır. Birincisi 'önemli bir şey yok' diyerek olayı küçümsemek. İkincisi 'her şey tehlikede' diyerek kurumu paniğe sürüklemek. Daire Başkanı olarak senin görevin olayın gerçek boyutunu ölçmek ve o boyuta uygun müdahale kurmaktır."
        ]
      },
      {
        heading: "Yönetici Kararı",
        type: "question",
        paragraphs: [
          "Seçenek 1: Tıklayan personelin isimlerini üst yönetime listelemek. Avantajı hızlı hesap verme hissi üretir; riski, güvenlik bildirim kültürünü zedelemesi ve personeli sonraki olaylarda susmaya itmesidir.",
          "Seçenek 2: Olayı sadece teknik ekip içinde tutmak. Avantajı paniği azaltır; riski, bilgi güvenliği yönetim sistemi açısından olay kaydı, farkındalık ve yönetim gözden geçirme fırsatını kaçırmasıdır.",
          "Seçenek 3: Teknik müdahale tamamlanır, etki alanı ölçülür, kişileri hedef göstermeyen olay raporu hazırlanır, ilgili personele zorunlu parola/MFA kontrolü uygulanır, tüm kuruma kısa farkındalık duyurusu yapılır ve BGYS sürekli iyileştirme kaydına ders olarak işlenir.",
          "Doğru yaklaşım üçüncü seçenektir. Çünkü siber güvenlikte olgunluk, olayın hiç olmaması değil; olay olduğunda kurumun ölçülü, kanıtlı ve öğrenen bir refleks göstermesidir."
        ]
      },
      {
        heading: "Genel Müdür Yardımcısına İlk Bilgi",
        type: "quote",
        paragraphs: [
          "Sayın Genel Müdür Yardımcım, Bakanlık personeline yönelik sınırlı kapsamlı bir oltalama e-postası tespit edilmiştir. Kurumsal e-posta alan adımızın ele geçirildiğine dair bulgu yoktur. Sahte bağlantıya tıklayan kullanıcılar ve kimlik bilgisi girdiği değerlendirilen hesaplar belirlenmiş, oturumlar sonlandırılmış, parola değişimi ve ek kontroller başlatılmıştır. Şu aşamada ayrıcalıklı hesap etkilenmesi veya veri sızıntısı bulgusu yoktur. Olay BGYS kapsamında kayıt altına alınmakta, teknik ve farkındalık önlemleri güncellenmektedir."
        ]
      },
      {
        heading: "Teknik Derinleşme",
        type: "paragraphs",
        paragraphs: [
          "Bu olayda bakılacak teknik katmanlar sırayla bellidir. E-posta başlıklarında SPF, DKIM ve DMARC sonuçları incelenir. SPF, gönderen sunucunun o alan adı adına e-posta göndermeye yetkili olup olmadığını kontrol etmeye yardım eder. DKIM, e-postanın alan adı tarafından kriptografik olarak imzalanıp imzalanmadığını gösterir. DMARC ise SPF ve DKIM sonuçlarına göre alıcı sistemin ne yapması gerektiğine dair politika sağlar.",
          "Bunu gerçek hayatta şöyle düşünebilirsin: SPF, kuryenin o şirketten gelip gelmediğini kontrol eder; DKIM, zarfın üzerindeki mühür bozulmuş mu ona bakar; DMARC ise mühür ve kurye şüpheliyse güvenliğin paketi içeri alıp almayacağına dair kural koyar.",
          "Ama e-posta güvenliği kontrolleri tek başına yeterli değildir. Kullanıcı sahte sayfaya giderse proxy ve DNS kayıtları önem kazanır. Parola girildiyse kimlik doğrulama logları, MFA denemeleri ve oturum kayıtları incelenir. Eğer başarılı giriş varsa hangi IP'den, hangi cihazla, hangi uygulamaya erişildiği kontrol edilir. Bu yüzden olay müdahalesi sadece e-posta ekibinin işi değildir; kimlik, ağ, uç nokta ve uygulama logları birlikte okunur."
        ]
      },
      {
        heading: "Farkındalık Duyurusu",
        type: "paragraphs",
        paragraphs: [
          "Tüm personele gönderilecek duyuru kısa ve sakin olmalıdır: Kurumsal parola güncellemesi gibi görünen sahte bir e-posta tespit edilmiştir. Bakanlık sistemlerine girişte alan adını kontrol ediniz, şüpheli bağlantılardan parola girmeyiniz, tereddüt halinde e-postayı bilgi güvenliği ekibine iletiniz. Bu olay kapsamında gerekli teknik önlemler alınmıştır; benzer e-postaları açmadan bildirmeniz önemlidir.",
          "Duyuruda 'bazı personelimiz dikkatsizlik yapmıştır' gibi bir cümle kurmazsın. Çünkü güvenlik kültürü utandırma üzerine kurulmaz. Personelin hızlı bildirim yapmasını istiyorsan, bildiren kişiyi cezalandırılacak kişi gibi hissettirmeyeceksin."
        ]
      },
      {
        heading: "Danışman Notu",
        type: "paragraphs",
        paragraphs: [
          "Bugünün dersi şudur: Siber Güvenlik Daire Başkanı olduğunda sertifika, politika ve denetim dilini gerçek olay yönetimiyle karıştırmayacaksın. Sertifika duvarda asılı duran başarıdır; olay anındaki refleks ise kurumun gerçek güvenlik kasıdır.",
          "Üst yöneticiler bazen güvenlik belgesini 'artık güvendeyiz' diye okuyabilir. Senin görevin bunu kırmadan düzeltmektir: Güvendeyiz demek, olay yaşamayacağız demek değildir; olay olduğunda görecek, sınırlandıracak, öğrenecek ve iyileştirecek sisteme sahibiz demektir.",
          "Bir gün Genel Müdür olduğunda güvenlik ekibine sadece 'kaç saldırı engellendi' diye sormayacaksın. Şunu da soracaksın: Kaç olaydan ders çıkarıldı? Hangi prosedür güncellendi? Hangi eğitim hedeflendi? Hangi kontrol eksikliği kapatıldı? Çünkü siber güvenlikte gerçek olgunluk, alarm sayısında değil, öğrenme hızında görünür."
        ]
      }
    ]
  }
];

const glossaryTerms = [
  {
    term: "APM",
    definition:
      "Application Performance Monitoring. Uygulamanın hangi ekran, servis veya endpointte ne kadar süre harcadığını izlemeye yarayan araç ve yaklaşımdır. Hastanede hastanın sadece ateşine değil, nabzına, tansiyonuna ve kan değerlerine birlikte bakmak gibi düşünebilirsin. Yönetici için APM, 'uygulama yavaş' şikayetini ölçülebilir hale getirir: hangi işlem, hangi saatte, hangi kullanıcı grubunda, hangi servis yüzünden yavaşlıyor sorularına cevap arar."
  },
  {
    term: "BGYS",
    definition:
      "Bilgi Güvenliği Yönetim Sistemi. Kurumun bilgi güvenliğini tek tek kişilerin dikkatine bırakmadan; risk, politika, süreç, kayıt, sorumluluk, denetim ve sürekli iyileştirme düzeniyle yönetmesidir. Hastanede sadece iyi doktorların olması yetmez; triyaj, sterilizasyon, kayıt ve acil müdahale prosedürleri de gerekir. BGYS de güvenliği böyle kurumsal bir düzene bağlar."
  },
  {
    term: "DKIM",
    definition:
      "DomainKeys Identified Mail. Bir e-postanın gönderildiği alan adı tarafından kriptografik olarak imzalanıp imzalanmadığını kontrol etmeye yarayan e-posta güvenliği mekanizmasıdır. Zarfın üzerindeki mühür gibi düşünebilirsin: mühür doğruysa mesajın gerçekten o alan adı tarafından imzalandığına dair güçlü bir işaret oluşur. Tek başına her saldırıyı durdurmaz ama sahte e-postaları ayırt etmede önemli kanıt sağlar."
  },
  {
    term: "DMARC",
    definition:
      "Domain-based Message Authentication, Reporting and Conformance. SPF ve DKIM sonuçlarına göre alıcı e-posta sisteminin ne yapacağını belirleyen politikadır. Güvenlik görevlisine verilen talimat gibi düşünebilirsin: kurye veya mühür şüpheliyse paketi kabul etme, karantinaya al ya da raporla. DMARC doğru kurulursa kurum alan adının taklit edilmesi zorlaşır."
  },
  {
    term: "DNS",
    definition:
      "Domain Name System. İnsanların yazdığı alan adlarını sistemlerin kullandığı IP adreslerine çeviren isimlendirme sistemidir. Telefon rehberi gibi düşünebilirsin: ismi yazarsın, arka planda numara bulunur. Oltalama olaylarında DNS kayıtları, kullanıcının hangi sahte adrese gittiğini anlamak için önemli iz sağlar."
  },
  {
    term: "IOC",
    definition:
      "Indicator of Compromise. Bir güvenlik olayına işaret eden teknik izdir. Şüpheli IP adresi, sahte alan adı, dosya hash'i, e-posta başlığı veya zararlı bağlantı buna örnek olabilir. Olay yerindeki parmak izi gibi düşünebilirsin; tek başına tüm hikayeyi anlatmaz ama araştırmanın nereye odaklanacağını gösterir."
  },
  {
    term: "ISO/IEC 27001",
    definition:
      "Bilgi güvenliği yönetim sisteminin kurulması, işletilmesi, izlenmesi ve sürekli iyileştirilmesi için kullanılan uluslararası standarttır. Bunu 'kurum güvenliği nasıl yönetilecek' sorusuna verilen sistemli cevap gibi düşünebilirsin. ISO/IEC 27001 belgesi, hiç olay yaşanmayacağı anlamına gelmez; olayları risk ve süreç disipliniyle yönetebilecek bir düzen kurulduğunu gösterir."
  },
  {
    term: "MFA",
    definition:
      "Multi-Factor Authentication. Sisteme girişte parolaya ek olarak ikinci bir doğrulama faktörü istenmesidir. Eve girmek için sadece anahtar değil, ayrıca apartman kapı kodu veya güvenlik görevlisinin onayı gerekmesi gibi düşünebilirsin. Parola ele geçirilse bile saldırganın hesaba doğrudan girmesini zorlaştırır."
  },
  {
    term: "Oltalama",
    definition:
      "Phishing olarak da bilinir. Kullanıcıyı sahte e-posta, mesaj veya web sayfasıyla kandırarak parola, kod, belge ya da işlem yaptırmaya çalışan saldırı yöntemidir. Bankadan gelmiş gibi görünen sahte SMS'e benzer; saldırgan kapıyı teknik olarak kırmak yerine anahtarı kullanıcıdan almaya çalışır."
  },
  {
    term: "Proxy",
    definition:
      "Kullanıcı ile internet veya başka bir sistem arasında aracı olarak duran geçiş katmanıdır. Kurum kapısındaki danışma gibi düşünebilirsin: kim nereye gitmek istiyor, bu adrese izin var mı, kayıt tutulmalı mı sorularını yönetir. Oltalama olaylarında proxy logları, kullanıcıların sahte bağlantıya gidip gitmediğini anlamaya yardım eder."
  },
  {
    term: "SOC",
    definition:
      "Security Operations Center. Kurumun güvenlik olaylarını izleyen, analiz eden ve müdahale sürecini başlatan güvenlik operasyon merkezidir. Hastanenin acil servisi gibi düşünebilirsin: her gelen belirti felaket değildir ama doğru triyaj yapılmazsa ciddi olaylar geç fark edilir. SOC; SIEM, EDR, ağ ve kimlik loglarını birlikte okuyarak olayı anlamlandırır."
  },
  {
    term: "SPF",
    definition:
      "Sender Policy Framework. Bir alan adı adına hangi sunucuların e-posta göndermeye yetkili olduğunu kontrol etmeye yarayan mekanizmadır. Şirket adına paket getiren kuryenin gerçekten yetkili listesinde olup olmadığına bakmak gibi düşünebilirsin. SPF, sahte gönderenli e-postaları azaltır ama tek başına tam koruma sağlamaz; DKIM ve DMARC ile birlikte düşünülmelidir."
  },
  {
    term: "ASN",
    definition:
      "Autonomous System Number. İnternette kendi yönlendirme politikasına sahip büyük ağların kimlik numarasıdır. Bir kargo şirketinin ülke çapındaki dağıtım kodu gibi düşünebilirsin: paketin hangi şirket ağına girdiğini ve hangi şirketin hangi yolu duyurduğunu anlamaya yarar. BGP sorunlarında ASN bilgisi, trafiğin hangi operatör veya kurum ağı üzerinden geçtiğini görmeni sağlar."
  },
  {
    term: "BGP",
    definition:
      "Border Gateway Protocol. İnternet üzerindeki büyük ağların birbirine hangi IP bloklarına hangi yoldan ulaşacağını söylediği yönlendirme protokolüdür. Bunu şehirler arası yol tabelaları gibi düşünebilirsin: yol aslında açık olabilir ama tabela yanlış yönü gösterirse araçlar yanlış güzergaha sapar. Yönetici seviyesinde BGP'nin önemi şudur: veri merkezi ve uygulama sağlıklı görünürken bazı illerin hizmete erişememesinin sebebi rota duyurusu olabilir."
  },
  {
    term: "Cold Storage",
    definition:
      "Daha seyrek erişilen eski verilerin veya logların daha ekonomik, fakat genellikle daha yavaş erişilen depolama katmanında saklanmasıdır. Kurumdaki eski klasörlerin aktif masadan arşiv odasına kaldırılması gibi düşünebilirsin. Her an elinin altında değildir ama gerektiğinde düzenli, bütünlüğü korunmuş ve bulunabilir şekilde geri getirilebilmelidir."
  },
  {
    term: "Connection Pool",
    definition:
      "Uygulamanın veri tabanına bağlanmak için hazır tuttuğu bağlantı havuzudur. Taksi durağındaki hazır araçlar gibi düşünebilirsin: müşteri gelince yeni araç üretmezsin, sıradaki hazır taksiye bindirirsin. Ama araçların hepsi uzun yolculuğa çıktıysa durakta taksi kalmaz; yeni gelen herkes bekler. Connection pool dolduğunda uygulama ayakta görünür ama yeni işlemler veri tabanına erişmek için sıraya girer."
  },
  {
    term: "Database Index",
    definition:
      "Veri tabanında aramayı hızlandırmak için kullanılan düzenli erişim yapısıdır. Kitabın sonundaki indeks gibi düşünebilirsin: aradığın kavramın geçtiği sayfaları doğrudan bulursun. İndeks yoksa sistem tüm kitabı sayfa sayfa tarar. Fakat her şeye indeks eklemek de doğru değildir; çünkü veri yazılırken bu indekslerin de güncellenmesi gerekir ve bu ek maliyet doğurur."
  },
  {
    term: "Data Lineage",
    definition:
      "Bir verinin hangi kaynaktan geldiğini, hangi dönüşümlerden geçtiğini ve raporda hangi hale dönüştüğünü gösteren izdir. Bir evrakın hangi masadan geçtiğini ve kimlerin paraf attığını gösteren zincir gibi düşünebilirsin. Üst yönetim bir rakamı sorguladığında data lineage, 'bu sayı buraya nereden geldi' sorusuna cevap verir."
  },
  {
    term: "Dashboard",
    definition:
      "Birden fazla göstergenin tek ekranda izlenmesini sağlayan yönetim panelidir. Arabanın gösterge paneli gibi düşünebilirsin: hız, yakıt, hararet ve uyarılar aynı yerde görünür. Ancak dashboard güzel görünse bile göstergelerin tanımı yanlışsa yönetici yanlış karar alabilir."
  },
  {
    term: "Deadlock",
    definition:
      "İki veya daha fazla işlemin birbirinin tuttuğu kaynağı bekleyerek kilitlenmesidir. Dar bir koridorda iki kişinin karşılıklı gelip ikisinin de geri adım atmaması gibi düşünebilirsin. Veri tabanı genellikle bu düğümü çözmek için işlemlerden birini iptal eder; kullanıcı tarafında hata, bekleme veya tekrar deneme ihtiyacı görülebilir."
  },
  {
    term: "EPS",
    definition:
      "Events Per Second. Log toplama veya SIEM sistemine saniyede kaç olay kaydı geldiğini gösterir. Bir binanın giriş turnikelerinden saniyede kaç kişinin geçtiğini ölçmek gibidir. Günlük toplam log miktarı düşük görünse bile EPS aniden yükselirse sistem anlık yük altında kalabilir; bazı logları geç işleyebilir veya kayıp riski doğabilir."
  },
  {
    term: "ETL",
    definition:
      "Extract Transform Load. Verinin bir sistemden alınması, dönüştürülmesi ve başka bir raporlama ya da analiz ortamına yüklenmesi sürecidir. Farklı pazarlardan gelen malzemeleri ayıklayıp aynı tarife uygun hale getirerek mutfağa sokmak gibi düşünebilirsin. ETL doğru tasarlanmazsa kaynak sistem doğru olsa bile raporda eski, eksik veya farklı anlam taşıyan veri görünebilir."
  },
  {
    term: "Hot Storage",
    definition:
      "Sık aranan, hızlı erişilmesi gereken güncel verilerin veya logların tutulduğu hızlı depolama katmanıdır. Masanın üzerindeki aktif dosyalar gibi düşünebilirsin: hızlıca ulaşırsın ama alan sınırlıdır ve maliyeti yüksektir. Güvenlik olaylarında son günlere veya haftalara ait logların hızlı aranabilmesi için hot storage kritik olabilir."
  },
  {
    term: "Lock Wait",
    definition:
      "Bir işlemin veri tabanında başka bir işlemin tuttuğu kilidin açılmasını beklemesidir. Tek kişinin kullanabildiği arşiv dolabının önünde sıraya girmek gibidir. Dolabı kullanan kişi işini uzatırsa arkadaki herkes bekler. Lock wait arttığında CPU düşük görünebilir ama kullanıcı ekranında işlem dönüp durur."
  },
  {
    term: "Master Data",
    definition:
      "Kurum genelinde ortak kullanılan temel referans veridir. İl, ilçe, kurum kodu, birim adı, hizmet türü gibi bilgiler buna örnek olabilir. Telefon rehberindeki kişi isimleri gibi düşünebilirsin; aynı kişi üç farklı yazımla kayıtlıysa herkes başka kişiden söz ediyor sanabilir. Master data düzgün yönetilmezse raporlar ve entegrasyonlar küçük isim farklarından büyük anlam farkları üretir."
  },
  {
    term: "Peering",
    definition:
      "İki ağın veya operatörün birbirleriyle trafik alışverişi yaptığı bağlantı ve anlaşma noktasıdır. İki otobüs firmasının yolcularını ortak bir terminalde aktarması gibi düşünebilirsin. Peering tarafında sorun olursa bir kurumun sistemi ayakta olsa bile bazı kullanıcıların trafiği sağlıksız yoldan dolaşabilir veya hiç ulaşamayabilir."
  },
  {
    term: "Prefix",
    definition:
      "Ağ dünyasında belirli bir IP adres aralığını ifade eder. Mahalle veya posta kodu gibi düşünebilirsin: hangi adreslerin aynı bölgeye ait olduğunu gösterir. BGP'de bir prefix yanlış duyurulursa, o IP aralığına gitmesi gereken trafik yanlış operatöre, yanlış güzergaha veya sağlıksız bir geçiş noktasına yönlenebilir."
  },
  {
    term: "Route Leak",
    definition:
      "Bir ağın aslında duyurmaması gereken rotayı başka ağlara duyurmasıdır. Kurum içi servis yol tarifinin yanlışlıkla şehirler arası yol tabelasına yazılması gibi düşünebilirsin. Sonuçta trafik en doğru yoldan gitmek yerine yanlış bir ağa akabilir; bu da bazı kullanıcılar için yavaşlık, kopma veya tamamen erişememe şeklinde görünür."
  },
  {
    term: "Slow Query",
    definition:
      "Normalden uzun süren veri tabanı sorgusudur. Market kasasında tek bir ürün için fiyat kontrolü yapılırken sıranın uzaması gibi düşünebilirsin. Sorgu tek başına çalışırken kabul edilebilir görünebilir; fakat yoğun kullanımda aynı sorgu yüzlerce kez çalışırsa tüm ekranı yavaşlatabilir. Uygulama yöneticisi slow query gördüğünde veri hacmi, indeks, sorgu tasarımı ve transaction süresini birlikte sorgulamalıdır."
  },
  {
    term: "Tekil Doğruluk Kaynağı",
    definition:
      "Bir konuda kurumun esas alacağı yetkili veri kaynağıdır. Herkesin farklı takvim tuttuğu bir ailede resmi davetiyedeki tarihin esas alınması gibi düşünebilirsin. Kurumda aynı gösterge üç ekranda farklı çıkıyorsa, hangi karar için hangi kaynağın bağlayıcı olduğu önceden belirlenmelidir."
  },
  {
    term: "Traceroute",
    definition:
      "Bir paketin hedefe giderken geçtiği ara noktaları gösteren tanı aracıdır. Kargo takip ekranında paketin hangi aktarma merkezlerinden geçtiğini görmek gibi düşünebilirsin. Merkez sistemleri ayakta ama bazı iller erişemiyorsa traceroute, sağlıklı il ile sorun yaşayan ilin yolunun nerede ayrıştığını görmeye yarar."
  },
  {
    term: "Transaction",
    definition:
      "Birden fazla işlemin birlikte başarılı olması veya birlikte geri alınması gereken işlem bütünüdür. Banka havalesi gibi düşünebilirsin: para gönderici hesaptan düşmeli ve alıcı hesaba geçmelidir; biri olup diğeri olmazsa kayıtlar tutarsızlaşır. Transaction gereklidir ama gereğinden uzun açık kalırsa veri tabanında kilitleri tutar ve başka kullanıcıları bekletebilir."
  },
  {
    term: "WORM",
    definition:
      "Write Once Read Many. Verinin bir kez yazıldıktan sonra belirli süre boyunca değiştirilememesi veya silinememesi yaklaşımıdır. Noterde mühürlenen evrak gibi düşünebilirsin: evrakı okuyabilirsin ama sonradan içeriğini değiştiremezsin. Log saklama mimarisinde WORM yaklaşımı, kayıtların sonradan oynanmadığını göstermek ve denetim güvenini artırmak için kullanılır."
  },
  {
    term: "Active Directory",
    definition:
      "Kurum içindeki kullanıcı hesaplarını, bilgisayarları, grupları ve yetkileri merkezi olarak yöneten dizin servisidir. Bunu büyük bir kurumun personel kartı ve yetki defteri gibi düşünebilirsin: kim binaya girebilir, hangi kata çıkabilir, hangi odaya erişebilir, hepsi burada tanımlıdır. BTGM açısından Active Directory bozulduğunda mesele sadece şifre problemi olmaz; birçok uygulamanın kime güveneceği belirsizleşir."
  },
  {
    term: "Air Gap",
    definition:
      "Kritik yedeklerin üretim ortamından fiziksel veya mantıksal olarak ayrıştırılmasıdır. Evde önemli belgelerin bir kopyasını bilgisayarda, bir kopyasını da internete bağlı olmayan kasada tutmak gibi düşünebilirsin. Üretim ortamı ele geçirilse bile saldırganın aynı yoldan yedekleri de silmesini veya şifrelemesini zorlaştırır."
  },
  {
    term: "Ağ Paket Kaybı",
    definition:
      "Ağ üzerinden gönderilen veri parçalarının hedefe hiç ulaşmaması veya eksik ulaşmasıdır. Telefonla konuşurken bazı kelimelerin kesilmesi gibi düşünebilirsin. Bağlantı tamamen kopmamış olabilir; ama paket kaybı varsa uygulama yavaşlar, tekrar denemeler artar ve kullanıcı deneyimi bozulur."
  },
  {
    term: "API Contract",
    definition:
      "İki sistemin birbirinden hangi veri alanlarını, hangi isimle, hangi formatta ve hangi davranışla beklediğini belirleyen teknik anlaşmadır. Gündelik örnekle, iki kurumun aynı formu kullanması gibidir: bir taraf formdaki alan adını değiştirirse, diğer taraf hâlâ eski alanı aradığı için işlem bozulabilir. Bu yüzden küçük görünen API değişiklikleri geniş etki üretebilir."
  },
  {
    term: "API Gateway",
    definition:
      "Farklı uygulama ve servislerin dış sistemlerle kontrollü biçimde konuşmasını sağlayan geçit katmanıdır. Bir binanın ana güvenlik kapısı gibi düşünülebilir: kimlik kontrolü yapar, kimin nereye gireceğini belirler, yoğunluk olursa akışı sınırlar ve giriş çıkış kaydı tutar. Ancak kapıda güvenlik olması, içerideki her işlemin hukuken doğru olduğu anlamına gelmez; veri paylaşım izni ve kurumsal sorumluluk ayrıca yönetilmelidir."
  },
  {
    term: "Ayrıcalıklı Hesap",
    definition:
      "Normal kullanıcıdan daha geniş yetkilere sahip yönetici hesabıdır. Bir binadaki ana anahtar gibi düşünebilirsin: sadece bir odayı değil, birçok kritik alanı açabilir. Bu yüzden siber olaylarda ilk sorulardan biri ayrıcalıklı hesaplarda olağandışı deneme veya kullanım olup olmadığıdır."
  },
  {
    term: "Backward Compatibility",
    definition:
      "Yeni sürümün eski istemcilerle veya eski kullanım biçimleriyle uyumlu çalışmaya devam etmesidir. Yeni telefonun eski priz adaptörüyle de şarj olabilmesi gibi düşünebilirsin. Kurumsal sistemlerde bu uyumluluk yoksa, yeni sürüm teknik olarak doğru olsa bile eski ekranlar, entegrasyonlar veya raporlar bozulabilir."
  },
  {
    term: "Bakım Penceresi",
    definition:
      "Planlı teknik çalışmaların yapılacağı önceden belirlenmiş zaman aralığıdır. Yoğun saatlerde yolu kapatmak yerine gece bakım çalışması yapmak gibi düşünebilirsin. Kritik sistemlerde bakım penceresi net değilse, iyi niyetli bir güncelleme hizmet saatinde krize dönüşebilir."
  },
  {
    term: "Co-stop",
    definition:
      "Sanallaştırma ortamlarında çok işlemcili sanal makinelerin işlemci çekirdeklerini aynı anda çalıştırabilmek için beklediği süreyi anlatan performans göstergesidir. Bunu bir toplantıya girmek için tüm katılımcıların aynı anda müsait olmasını beklemeye benzetebilirsin. Herkes tek tek müsait görünür ama aynı anda hazır olamazlarsa toplantı başlayamaz."
  },
  {
    term: "CPU Ready",
    definition:
      "Sanal sunucunun işlemci kullanmak istediği halde fiziksel işlemci kaynağı beklediği süreyi gösterir. Restoranda boş masa var gibi görünmesine rağmen garson sipariş alamadığı için beklemek gibi düşünebilirsin. Ekranda CPU kullanımı düşük görünebilir; ama CPU Ready yüksekse uygulama aslında işlemci sırası bekliyordur."
  },
  {
    term: "Değişiklik Dondurma",
    definition:
      "Kritik olay sırasında yeni değişikliklerin geçici olarak durdurulmasıdır. Yangın alarmı çalarken binada tadilat yapmayı bırakmak gibidir. Amaç, krizin üzerine yeni belirsizlik eklememek ve kök neden analizini temiz tutmaktır."
  },
  {
    term: "Domain Controller",
    definition:
      "Active Directory ortamında kullanıcı ve bilgisayarların kimlik doğrulamasını yapan sunucudur. Bir kurum kampüsünün güvenlik danışması gibi çalışır: gelen kişinin kim olduğunu, hangi yetkilere sahip olduğunu ve hangi kaynaklara erişebileceğini doğrular. Bu katmandaki sorunlar tek bir uygulamayı değil, birçok kurumsal sistemi aynı anda etkileyebilir."
  },
  {
    term: "DRS",
    definition:
      "Distributed Resource Scheduler. Sanallaştırma ortamında sanal sunucuları fiziksel sunucular arasında yük dengesine göre dağıtmaya çalışan mekanizmadır. Bunu yoğun bir otoparkta araçları boş yerlere yönlendiren görevli gibi düşünebilirsin. Ancak kurallar yanlışsa veya bazı araçlar belirli yerlere sabitlenmişse, görevli her zaman trafiği düzeltemez."
  },
  {
    term: "EDR",
    definition:
      "Endpoint Detection and Response. Bilgisayar ve sunucu gibi uç noktalardaki şüpheli davranışları izleyen, analiz eden ve gerektiğinde müdahale etmeye yarayan güvenlik çözümüdür. Binanın içindeki güvenlik kameraları ve hızlı müdahale ekibi gibi düşünülebilir: sadece kapıdan gireni değil, içeride olağan dışı davrananı da izler."
  },
  {
    term: "ESXi Host",
    definition:
      "VMware sanallaştırma ortamında sanal sunucuları çalıştıran fiziksel sunucudur. Bir apartman binası gibi düşünebilirsin: içinde birçok daire yani sanal sunucu vardır. Binanın elektriği, asansörü veya suyu zorlanırsa, tek tek daireler sağlam görünse bile yaşam kalitesi düşer."
  },
  {
    term: "Eskalasyon",
    definition:
      "Bir problemin belirli sürede çözülememesi halinde daha üst teknik veya yönetsel seviyeye taşınmasıdır. Çağrı merkezinde müşteri temsilcisinin çözemediği konuyu uzman ekibe aktarması gibi düşünebilirsin. Eskalasyon yolu net değilse kriz anında herkes bekler ama kimse doğru kapıyı çalmaz."
  },
  {
    term: "Entegrasyon",
    definition:
      "İki veya daha fazla sistemin veri ya da iş süreci seviyesinde birlikte çalışacak şekilde bağlanmasıdır. İki kurumun evrak sistemlerinin birbirine zimmetli dosya göndermesi gibi düşünebilirsin. Teknik bağlantı kurulması entegrasyonun sadece bir parçasıdır; veri sahipliği, hukuki dayanak, işletme sorumluluğu ve hata yönetimi de gerekir."
  },
  {
    term: "Felaket Kurtarma Merkezi",
    definition:
      "Ana veri merkezi kullanılamaz hale geldiğinde kritik sistemlerin başka bir merkezden çalıştırılmasını sağlayan yedek işletim ortamıdır. Yangın çıkarsa kurumun geçici olarak çalışabileceği ikinci hizmet binası gibi düşünebilirsin. Sadece bina veya sunucu olması yetmez; düzenli test, veri güncelliği ve geri dönüş planı da gerekir."
  },
  {
    term: "Fidye Yazılımı",
    definition:
      "Sistemleri veya dosyaları şifreleyerek kurumu çalışamaz hale getiren ve çözüm için para isteyen zararlı yazılım türüdür. Arşiv odasının kilitlenip anahtarın para karşılığı istenmesi gibi düşünebilirsin. Modern saldırılarda üretim verisi kadar yedekler de hedef alınır."
  },
  {
    term: "Fiziksel Host",
    definition:
      "Sanal sunucuların üzerinde çalıştığı gerçek fiziksel makinedir. Sanal sunucular yolcuysa, fiziksel host otobüstür. Yolcuların her biri ayrı yere gidiyor gibi görünse de otobüs dolduğunda hepsi etkilenir."
  },
  {
    term: "Grup İlkesi",
    definition:
      "Active Directory ortamında kullanıcılara ve bilgisayarlara merkezi ayar dağıtmak için kullanılan yönetim mekanizmasıdır. Kurum geneline gönderilen standart çalışma talimatı gibi düşünebilirsin. Yanlış bir grup ilkesi, tek tek kullanıcı hatası gibi görünen yaygın bir probleme dönüşebilir."
  },
  {
    term: "Immutable Backup",
    definition:
      "Yedeklerin belirli süre boyunca değiştirilemez veya silinemez şekilde korunmasıdır. Önemli bir evrakı noterde mühürletmek gibi düşünebilirsin: biri sonradan değiştirmek veya yok etmek istese bile belli süre boyunca dokunamaz. Fidye yazılımı saldırılarında saldırganın yedekleri de silmesini zorlaştırdığı için kritik önemdedir."
  },
  {
    term: "Hız Sınırlama",
    definition:
      "Bir servise belirli süre içinde yapılabilecek istek sayısını sınırlama yöntemidir. Bir vezneye aynı kişinin dakikada yüz kez sıra almasını engellemek gibi düşünebilirsin. API Gateway üzerinde kullanıldığında hem kötüye kullanımı azaltır hem de yoğunluk anında sistemin tamamen çökmesini zorlaştırır."
  },
  {
    term: "IP Kısıtı",
    definition:
      "Bir sisteme sadece belirli IP adreslerinden erişime izin verilmesidir. Bir binaya sadece önceden tanımlı araç plakalarının girebildiği otopark bariyeri gibi düşünebilirsin. Faydalıdır ama tek başına yeterli güvenlik değildir; çünkü içeride kimin ne yapabileceği ayrıca yönetilmelidir."
  },
  {
    term: "İş Zekası",
    definition:
      "Kurumdaki verilerin rapor, gösterge, analiz ve karar destek ekranlarına dönüştürülmesi yaklaşımıdır. Dağınık fişleri, faturaları ve kasa hareketlerini anlamlı bir işletme raporuna çevirmek gibi düşünebilirsin. İş zekası ekranları üst yönetim için çok değerlidir; fakat veri tanımları, yenileme zamanı ve kaynak sahipliği net değilse güven kaybı üretir."
  },
  {
    term: "Kerberos",
    definition:
      "Kullanıcıların şifrelerini her uygulamaya tekrar göndermeden güvenli biçimde kimlik doğrulamasını sağlayan protokoldür. Bir etkinlikte girişte kimliğini gösterip bileklik aldıktan sonra içeride her stantta tekrar kimlik göstermek zorunda kalmamak gibi düşünebilirsin. Kerberos bozulduğunda birçok uygulama aynı anda kullanıcıyı tanıyamaz hale gelebilir."
  },
  {
    term: "Kerberos Bileti",
    definition:
      "Kerberos sisteminde kullanıcının belirli kaynaklara erişebilmesi için aldığı geçici kimlik kanıtıdır. Konserde içeri girdikten sonra verilen bileklik gibi düşünülebilir: her seferinde nüfus cüzdanı göstermek yerine bileklikle geçersin. Süresi, saati veya geçerliliği bozulursa erişim sorunları ortaya çıkar."
  },
  {
    term: "Kimlik Doğrulama",
    definition:
      "Bir kullanıcının veya sistemin gerçekten iddia ettiği kişi ya da servis olup olmadığını kontrol etme sürecidir. Kapıdaki görevlinin kimliğine bakması gibi düşünülebilir. Kimlik doğrulama çalışmıyorsa kullanıcı doğru kişi olsa bile sisteme giremeyebilir."
  },
  {
    term: "Kullanıcı Kabul Testi",
    definition:
      "Geliştirilen sistemin gerçek kullanıcı ihtiyacına ve iş akışına uygun çalışıp çalışmadığını görmek için yapılan kabul sürecidir. Yeni yapılan bir yolun haritada güzel görünmesi yetmez; servis aracı gerçekten dönebiliyor mu, yoğun saatte trafik akıyor mu, buna bakmak gerekir. Bu test sadece butonların çalışmasını değil, sahadaki işin yürüyüp yürümediğini ölçer."
  },
  {
    term: "LLM",
    definition:
      "Large Language Model. Büyük metin kümeleri üzerinden dil örüntülerini öğrenen ve verilen komutlara metin üreterek cevap veren yapay zekâ modelidir. Çok okumuş ve iyi cümle kuran bir asistan gibi düşünebilirsin; fakat her söylediği kurumsal gerçek veya yürürlükteki mevzuat anlamına gelmez. Bu yüzden kurum içinde kaynak ve sorumluluk sınırıyla kullanılmalıdır."
  },
  {
    term: "Loglama",
    definition:
      "Sistemlerde kimin, ne zaman, hangi işlemi yaptığını veya hangi hatanın oluştuğunu kayıt altına alma sürecidir. Güvenlik kamerası kaydı veya apartman giriş defteri gibi düşünülebilir. Olay anında log yoksa geriye dönüp ne olduğunu anlamak zorlaşır."
  },
  {
    term: "Memory Ballooning",
    definition:
      "Sanallaştırma ortamında fiziksel bellek baskısı oluştuğunda sanal makinelerden bellek geri kazanmak için kullanılan mekanizmadır. Otobüs dolunca yolculardan çantalarını kucaklarına almalarını istemeye benzer: geçici rahatlama sağlar ama ortamın sıkıştığını gösterir."
  },
  {
    term: "NTP",
    definition:
      "Network Time Protocol. Sistemlerin saatlerini senkron tutmak için kullanılan protokoldür. Kurumdaki bütün saatlerin aynı zamanı göstermesi gibi düşünebilirsin. Saatler farklıysa kimlik doğrulama, olay kayıtları ve güvenlik analizleri şaşabilir; hangi olayın önce olduğu bile tartışmalı hale gelir."
  },
  {
    term: "Olay Günlüğü",
    definition:
      "Bir sistemde gerçekleşen işlem, hata, uyarı veya güvenlik olaylarının kaydedildiği günlüklerdir. Uçağın kara kutusu gibi düşünebilirsin. Her şeyi engellemez ama olaydan sonra ne olduğunu anlamak için en değerli kaynaklardan biridir."
  },
  {
    term: "Prompt Injection",
    definition:
      "Kullanıcının modele gizli talimatları atlatacak, sistemi amaç dışına çıkaracak veya güvenilmemesi gereken metni kaynak gibi kullandıracak komutlar yazmasıdır. Bir görevliye resmi prosedürü unutturup “bana özel davran” diye ikna etmeye çalışmak gibi düşünebilirsin. Kurumsal yapay zekâ sistemlerinde hassas bilgi ifşası ve yanlış yönlendirme riski doğurur."
  },
  {
    term: "RAG",
    definition:
      "Retrieval-Augmented Generation. Modelin cevap üretmeden önce kurumun belirlediği belge veya veri kaynaklarından ilgili bilgileri çekerek cevap oluşturması yaklaşımıdır. Açık kitap sınavı gibi düşünülebilir: öğrenci ezberden değil kitaba bakarak cevap verir. Ama kitap eskiyse, yanlış raftansa veya yetkili kaynak değilse cevap yine sorunlu olabilir."
  },
  {
    term: "Rollback",
    definition:
      "Hatalı veya riskli bir değişiklikten önceki çalışan sürüme geri dönme işlemidir. Yeni taktığın parçanın arabayı bozduğunu görünce eski sağlam parçayı geri takmaya benzer. Yönetici açısından rollback başarısızlık değil, hizmeti korumak için kontrollü geri adımdır."
  },
  {
    term: "RPO",
    definition:
      "Recovery Point Objective. Bir felaket anında en fazla ne kadar veri kaybının kabul edilebilir olduğunu ifade eder. Defterini her saat fotoğraflıyorsan yangın çıktığında en fazla son bir saatlik notu kaybedersin. RPO bu kaybın kurum için kabul edilebilir sınırını belirler."
  },
  {
    term: "RTO",
    definition:
      "Recovery Time Objective. Bir sistem çöktüğünde en fazla ne kadar sürede yeniden hizmet verebilir hale gelmesi gerektiğini ifade eder. Elektrik kesilince jeneratörün kaç dakikada devreye girmesi gerektiği gibi düşünebilirsin. Yedek var demek yetmez; o yedeğin ne kadar sürede hizmete döneceği asıl yönetim sorusudur."
  },
  {
    term: "Sanallaştırma",
    definition:
      "Bir fiziksel sunucunun kaynaklarını birden fazla sanal sunucuya bölerek kullanma yaklaşımıdır. Büyük bir binayı farklı dairelere ayırmak gibi düşünebilirsin. Her daire bağımsız görünür; ama binanın elektriği, suyu veya asansörü zorlanırsa hepsi etkilenir."
  },
  {
    term: "Servis Hesabı",
    definition:
      "İnsan kullanıcı yerine uygulama veya servislerin başka sistemlere erişmek için kullandığı hesaptır. Gece çalışan otomatik temizlik ekibine verilen özel anahtar gibi düşünülebilir. Şifresi değişir, kilitlenir veya fazla yetki verilirse birçok otomasyon aynı anda etkilenebilir."
  },
  {
    term: "SIEM",
    definition:
      "Security Information and Event Management. Farklı sistemlerden güvenlik kayıtlarını toplayan, ilişkilendiren ve olayları görünür hale getiren izleme platformudur. Şehrin farklı kameralarından görüntüleri tek merkezde toplayan güvenlik merkezi gibi düşünülebilir. Tek tek kayıtlarda görünmeyen desenler SIEM üzerinde anlamlı hale gelir."
  },
  {
    term: "SLA",
    definition:
      "Service Level Agreement. Hizmetin hangi sürelerde, hangi kalite seviyesinde ve hangi müdahale şartlarıyla sunulacağını belirleyen hizmet seviyesi anlaşmasıdır. Kargo firmasının “ertesi gün teslim” taahhüdü gibi düşünebilirsin; söz güzel olabilir ama asıl mesele bu taahhüdün ölçülmesi, raporlanması ve ihlal edilirse ne olacağının bilinmesidir."
  },
  {
    term: "Storage Latency",
    definition:
      "Sunucunun disk veya depolama sisteminden veri okuma-yazma işlemi için beklediği gecikmedir. Rafından dosya almak isteyen memurun arşiv görevlisini beklemesi gibi düşünebilirsin. CPU ve bellek iyi görünse bile storage latency yüksekse uygulama yavaşlar."
  },
  {
    term: "Swapping",
    definition:
      "Bellek yetersiz kaldığında sistemin bellekte tutması gereken verinin bir kısmını diske taşımasıdır. Masanda yer kalmayınca sürekli evrakları dolaba kaldırıp geri getirmek gibi düşün. İş yapılır ama her işlem yavaşlar."
  },
  {
    term: "Token",
    definition:
      "Bir kullanıcının veya sistemin belirli süre ve kapsamda erişim hakkı olduğunu gösteren dijital anahtar gibidir. Otel oda kartı gibi düşünebilirsin: kartın varsa belirli kapıları açarsın, süresi dolduğunda veya yetkin yoksa açamazsın. Token kullanmak güvenliği artırabilir; ama kapsamı, süresi ve saklanma biçimi doğru yönetilmelidir."
  },
  {
    term: "Veri Paylaşım Protokolü",
    definition:
      "Kurumlar arasında hangi verinin, hangi amaçla, hangi hukuki ve teknik çerçevede, hangi güvenlik tedbirleriyle paylaşılacağını belirleyen resmi mutabakat metnidir. İki kurum arasında yapılan “hangi dosyayı, kime, ne kadar süreyle ve hangi şartla vereceğiz” anlaşması gibi düşünebilirsin. Teknik bağlantı kurulmuş olsa bile bu protokol yoksa kurumsal sorumluluk eksik kalır."
  },
  {
    term: "Veri Sözlüğü",
    definition:
      "Kurumda kullanılan veri alanlarının, göstergelerin ve kavramların ne anlama geldiğini açıklayan ortak başvuru kaynağıdır. Aynı kelimeleri aynı anlamda kullanmak için hazırlanmış kurum içi sözlük gibi düşünebilirsin. 'Başvuru sayısı' gibi basit görünen bir ifade bile farklı sistemlerde farklı anlama geliyorsa veri sözlüğü yokluğu karar hatasına dönüşebilir."
  },
  {
    term: "Veri Kalitesi",
    definition:
      "Verinin doğru, tam, güncel, tutarlı ve amaca uygun olup olmadığını anlatır. Temiz su şebekesi gibi düşünebilirsin; borular döşenmiş olabilir ama su kirliyse hizmet güvenilir değildir. Üst yönetim raporlarında veri kalitesi düşükse en güzel grafik bile yanlış karar üretebilir."
  },
  {
    term: "Veritabanı Bekleme Olayı",
    definition:
      "Veritabanında bir işlemin başka bir işlem, kilit, disk, ağ veya kaynak nedeniyle beklemesini gösteren olaydır. Bankada sıraya giren müşteriler gibi düşünebilirsin: vezne açık olabilir ama önündeki işlem bitmeden senin işin ilerlemez. Performans sorunlarında uygulama değil, veritabanı bekleme nedeni belirleyici olabilir."
  },
  {
    term: "vMotion",
    definition:
      "Çalışan bir sanal sunucunun hizmet kesintisi yaratmadan bir fiziksel sunucudan başka bir fiziksel sunucuya taşınmasıdır. Yolcuları indirmeden otobüsü daha rahat bir yola almak gibi düşünebilirsin. Kriz anında kapasite dengeleme için çok faydalıdır; ama ağ, depolama ve lisans bağımlılıkları doğru kurulmuş olmalıdır."
  }
];

const nav = document.querySelector("#scenarioNav");
const content = document.querySelector("#scenarioContent");
const search = document.querySelector("#scenarioSearch");
const currentRole = document.querySelector("#currentRole");
const currentScenario = document.querySelector("#currentScenario");
const menuButton = document.querySelector("#menuButton");
const modeButtons = document.querySelectorAll(".mode-button");
const fontSizeRange = document.querySelector("#fontSizeRange");
const fontSizeValue = document.querySelector("#fontSizeValue");
const glossaryButton = document.querySelector("#glossaryButton");

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function groupByRole(items) {
  return items.reduce((groups, item) => {
    groups[item.role] = groups[item.role] || [];
    groups[item.role].push(item);
    return groups;
  }, {});
}

function roleSortRank(role) {
  if (role === "İçişleri Uzmanı") return 0;
  if (role.includes("Daire Başkanı")) return 1;
  if (role === "Genel Müdür Yardımcısı") return 2;
  if (role === "Genel Müdür") return 3;
  return 4;
}

function sortRoleEntries(entries) {
  return entries.sort(([roleA], [roleB]) => {
    const rankDiff = roleSortRank(roleA) - roleSortRank(roleB);
    if (rankDiff !== 0) return rankDiff;
    return roleA.localeCompare(roleB, "tr");
  });
}

function scenarioNumber(item) {
  return String(scenarios.findIndex((scenario) => scenario.id === item.id) + 1).padStart(2, "0");
}

function rolePeers(scenario) {
  return scenarios.filter((item) => item.role === scenario.role);
}

function roleScenarioNumber(item) {
  const index = rolePeers(item).findIndex((scenario) => scenario.id === item.id);
  return String(index + 1);
}

function scenarioPager(scenario) {
  const peers = rolePeers(scenario);
  const index = peers.findIndex((item) => item.id === scenario.id);
  const previous = peers[index - 1];
  const next = peers[index + 1];
  const previousLabel = previous ? `${roleScenarioNumber(previous)} · ${previous.title}` : "Bu ünvan altında önceki senaryo yok";
  const nextLabel = next ? `${roleScenarioNumber(next)} · ${next.title}` : "Bu ünvan altında sonraki senaryo yok";

  return `
    <nav class="scenario-pager" aria-label="Aynı ünvan içindeki senaryolar">
      <button class="pager-button" type="button" data-target="${previous ? previous.id : ""}" ${previous ? "" : "disabled"}>
        <span>Önceki</span>
        <strong>${escapeHtml(previousLabel)}</strong>
      </button>
      <button class="pager-button next" type="button" data-target="${next ? next.id : ""}" ${next ? "" : "disabled"}>
        <span>Sonraki</span>
        <strong>${escapeHtml(nextLabel)}</strong>
      </button>
    </nav>
  `;
}

function shouldKeepSeparate(text) {
  return /^(Seçenek|Yanlış|Doğru|Eksik|Soru|Birinci|İkinci|Üçüncü|Teknik Terim|Kısa Açıklama)/.test(text);
}

function flowParagraphs(paragraphs, preserveBreaks = false) {
  if (preserveBreaks) {
    return paragraphs.map((text) => `<p>${escapeHtml(text)}</p>`).join("");
  }

  const blocks = [];
  let current = "";

  paragraphs.forEach((text) => {
    const clean = text.trim();
    const keepSeparate = shouldKeepSeparate(clean);

    if (keepSeparate) {
      if (current) {
        blocks.push(current);
        current = "";
      }
      blocks.push(clean);
      return;
    }

    if (!current) {
      current = clean;
      return;
    }

    if (current.length + clean.length > 520) {
      blocks.push(current);
      current = clean;
      return;
    }

    current = `${current} ${clean}`;
  });

  if (current) {
    blocks.push(current);
  }

  return blocks.map((text) => `<p>${escapeHtml(text)}</p>`).join("");
}

function renderNav(items, activeId, openAll = false) {
  const groups = groupByRole(items);
  const html = sortRoleEntries(Object.entries(groups))
    .map(([role, roleItems]) => {
      const isOpen = openAll || roleItems.some((item) => item.id === activeId);
      const links = roleItems
        .map(
          (item) => `
            <button class="scenario-link ${item.id === activeId ? "active" : ""}" type="button" data-id="${item.id}">
              <span class="scenario-number">${roleScenarioNumber(item)}</span>
              <strong>${escapeHtml(item.title)}</strong>
              <span>Seviye ${escapeHtml(item.level)} · ${escapeHtml(item.category)}</span>
            </button>
          `
        )
        .join("");

      return `
        <details class="role-group" ${isOpen ? "open" : ""}>
          <summary class="role-heading">
            <span>${escapeHtml(role)}</span>
            <span class="role-count">${roleItems.length}</span>
          </summary>
          <div class="scenario-list">${links}</div>
        </details>
      `;
    })
    .join("");

  nav.innerHTML = html || `<div class="empty-state">Bu aramada senaryo bulunamadı.</div>`;
}

function renderSection(section) {
  const heading = section.heading ? `<h3>${escapeHtml(section.heading)}</h3>` : "";
  const preserveBreaks = section.type === "lines";
  const paragraphs = flowParagraphs(section.paragraphs, preserveBreaks);

  if (section.type === "quote") {
    return `${heading}<div class="quote">${paragraphs}</div>`;
  }

  if (section.type === "question") {
    return `<div class="question">${heading}${paragraphs}</div>`;
  }

  if (section.type === "lines") {
    return `${heading}<div class="line-list">${paragraphs}</div>`;
  }

  return `${heading}${paragraphs}`;
}

function renderGlossary() {
  const sortedTerms = [...glossaryTerms].sort((a, b) => a.term.localeCompare(b.term, "tr"));
  currentRole.textContent = "Teknoloji Sözlüğü";
  currentScenario.textContent = "Alfabetik teknik terimler";

  content.innerHTML = `
    <p class="eyebrow">BAŞVURU BÖLÜMÜ</p>
    <h2>Teknoloji Sözlüğü</h2>
    <div class="meta-row">
      <span class="meta-pill">${sortedTerms.length} terim</span>
      <span class="meta-pill">Alfabetik</span>
      <span class="meta-pill">Tıkla aç / tekrar tıkla kapat</span>
    </div>
    <div class="glossary-list">
      ${sortedTerms
        .map(
          (item) => `
            <details class="glossary-item">
              <summary>${escapeHtml(item.term)}</summary>
              <p>${escapeHtml(item.definition)}</p>
            </details>
          `
        )
        .join("")}
    </div>
  `;

  document.querySelectorAll(".scenario-link").forEach((button) => {
    button.classList.remove("active");
  });
  glossaryButton.classList.add("active");
  content.focus({ preventScroll: true });
}

function renderScenario(id) {
  const scenario = scenarios.find((item) => item.id === id) || scenarios[0];
  const number = scenarioNumber(scenario);
  currentRole.textContent = scenario.role;
  currentScenario.textContent = `${number} · ${scenario.title}`;

  content.innerHTML = `
    <p class="eyebrow">SENARYO ${number}</p>
    <h2>${escapeHtml(scenario.title)}</h2>
    <div class="meta-row">
      <span class="meta-pill">Seviye: ${escapeHtml(scenario.level)}</span>
      <span class="meta-pill">Saat: ${escapeHtml(scenario.time)}</span>
      <span class="meta-pill">${escapeHtml(scenario.category)}</span>
    </div>
    <div class="role-box">
      <strong>Bu senaryoda sen:</strong>
      <p>${escapeHtml(scenario.roleText)}</p>
    </div>
    ${scenario.sections.map(renderSection).join("")}
    ${scenarioPager(scenario)}
  `;

  document.querySelectorAll(".scenario-link").forEach((button) => {
    button.classList.toggle("active", button.dataset.id === scenario.id);
  });
  glossaryButton.classList.remove("active");

  content.focus({ preventScroll: true });
}

function filterScenarios(query) {
  const normalized = query.trim().toLocaleLowerCase("tr-TR");
  if (!normalized) return scenarios;

  return scenarios.filter((item) => {
    const haystack = `${item.title} ${item.role} ${item.level} ${item.category} ${item.roleText}`.toLocaleLowerCase("tr-TR");
    return haystack.includes(normalized);
  });
}

nav.addEventListener("click", (event) => {
  const button = event.target.closest(".scenario-link");
  if (!button) return;
  renderScenario(button.dataset.id);
  document.body.classList.remove("nav-open");
});

search.addEventListener("input", () => {
  const filtered = filterScenarios(search.value);
  const active = document.querySelector(".scenario-link.active")?.dataset.id || scenarios[0].id;
  renderNav(filtered, active, Boolean(search.value.trim()));
});

content.addEventListener("click", (event) => {
  const button = event.target.closest(".pager-button");
  if (!button || button.disabled || !button.dataset.target) return;
  renderScenario(button.dataset.target);
  window.scrollTo({ top: 0, behavior: "smooth" });
});

menuButton.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

glossaryButton.addEventListener("click", () => {
  renderGlossary();
  document.body.classList.remove("nav-open");
});

modeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    modeButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    content.classList.toggle("dense", button.dataset.size === "dense");
  });
});

fontSizeRange.addEventListener("input", () => {
  const size = fontSizeRange.value;
  content.style.setProperty("--reader-size", `${size}px`);
  fontSizeValue.textContent = size;
});

renderNav(scenarios, scenarios[0].id);
renderScenario(scenarios[0].id);
