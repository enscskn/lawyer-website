export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  category: string;
  readTime: string;
  author: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Ticaret Hukukunda Yeni Düzenlemeler",
    excerpt: "2024 yılında ticaret hukukunda yapılan değişiklikler ve işletmelere etkileri hakkında detaylı analiz.",
    content: `
      <h2>Ticaret Hukukunda 2024 Yılı Değişiklikleri</h2>
      
      <p>2024 yılında ticaret hukukunda önemli değişiklikler yapılmıştır. Bu değişiklikler özellikle şirket kuruluşu, ticari sözleşmeler ve marka koruması alanlarında işletmeleri etkilemektedir.</p>
      
      <h3>1. Şirket Kuruluşu Süreçleri</h3>
      <p>Yeni düzenlemelerle birlikte şirket kuruluşu süreçleri daha da kolaylaştırılmıştır. Artık online başvuru ile şirket kurulumu yapılabilmektedir. Bu süreçte dikkat edilmesi gereken noktalar:</p>
      <ul>
        <li>Gerekli belgelerin eksiksiz hazırlanması</li>
        <li>Şirket türüne göre minimum sermaye şartları</li>
        <li>Ortakların yasal yeterlilik şartları</li>
      </ul>
      
      <h3>2. Ticari Sözleşmeler</h3>
      <p>Ticari sözleşmelerde yapılan değişiklikler, sözleşme taraflarının haklarını daha iyi korumaktadır. Özellikle:</p>
      <ul>
        <li>Haksız şartların belirlenmesi ve yasaklanması</li>
        <li>Şeffaflık yükümlülüklerinin artırılması</li>
        <li>Uyuşmazlık çözüm mekanizmalarının güçlendirilmesi</li>
      </ul>
      
      <h3>3. Marka ve Patent Koruması</h3>
      <p>Marka ve patent koruması alanında yapılan değişiklikler, fikri mülkiyet haklarının daha etkili korunmasını sağlamaktadır. Bu kapsamda:</p>
      <ul>
        <li>Marka başvuru süreçlerinin hızlandırılması</li>
        <li>Patent koruma sürelerinin uzatılması</li>
        <li>İhlal durumlarında yaptırımların artırılması</li>
      </ul>
      
      <h3>Sonuç</h3>
      <p>2024 yılında yapılan bu değişiklikler, ticaret hukukunun daha modern ve işletme dostu hale gelmesini sağlamıştır. İşletmelerin bu değişiklikleri takip etmesi ve gerekli uyum süreçlerini tamamlaması önemlidir.</p>
      
      <p>Bu konuda detaylı bilgi almak ve hukuki danışmanlık hizmeti için bizimle iletişime geçebilirsiniz.</p>
    `,
    image: "/logo.jpeg",
    date: "15 Mart 2024",
    category: "Ticaret Hukuku",
    readTime: "5 dk",
    author: "Kasım Aksoy",
    tags: ["Ticaret Hukuku", "Şirket Kuruluşu", "Ticari Sözleşmeler", "Marka Koruması"]
  },
  {
    id: 2,
    title: "İş Hukukunda İşçi Hakları",
    excerpt: "İşçilerin temel hakları ve işverenlerin yükümlülükleri konusunda kapsamlı rehber.",
    content: `
      <h2>İş Hukukunda İşçi Hakları ve İşveren Yükümlülükleri</h2>
      
      <p>İş hukuku, işçi ve işveren arasındaki ilişkiyi düzenleyen önemli bir hukuk dalıdır. Bu yazımızda işçilerin temel haklarını ve işverenlerin yükümlülüklerini detaylı olarak inceleyeceğiz.</p>
      
      <h3>1. İşçinin Temel Hakları</h3>
      <p>İşçilerin sahip olduğu temel haklar şunlardır:</p>
      <ul>
        <li><strong>Ücret Hakkı:</strong> İşçinin yaptığı iş karşılığında ücret alma hakkı</li>
        <li><strong>İzin Hakkı:</strong> Yıllık izin, hastalık izni ve diğer izin türleri</li>
        <li><strong>Çalışma Süresi:</strong> Haftalık çalışma süresinin sınırlandırılması</li>
        <li><strong>İş Güvenliği:</strong> Güvenli çalışma ortamı sağlanması</li>
        <li><strong>Sendika Hakkı:</strong> Sendikaya üye olma ve toplu iş sözleşmesi hakkı</li>
      </ul>
      
      <h3>2. İşverenin Yükümlülükleri</h3>
      <p>İşverenlerin yerine getirmesi gereken temel yükümlülükler:</p>
      <ul>
        <li>İşçiye zamanında ve tam ücret ödeme</li>
        <li>İş güvenliği önlemlerini alma</li>
        <li>İşçi sağlığını koruma</li>
        <li>Eşit davranma yükümlülüğü</li>
        <li>İşçi gizliliğini koruma</li>
      </ul>
      
      <h3>3. İş Sözleşmesi Türleri</h3>
      <p>İş hukukunda farklı iş sözleşmesi türleri bulunmaktadır:</p>
      <ul>
        <li><strong>Belirsiz Süreli İş Sözleşmesi:</strong> Süre belirtilmeden yapılan sözleşme</li>
        <li><strong>Belirli Süreli İş Sözleşmesi:</strong> Belirli bir süre için yapılan sözleşme</li>
        <li><strong>Kısmi Süreli İş Sözleşmesi:</strong> Tam süreli işin bir kısmını kapsayan sözleşme</li>
        <li><strong>Çağrı Üzerine Çalışma:</strong> İhtiyaç halinde çağrı üzerine çalışma</li>
      </ul>
      
      <h3>4. İşçi-İşveren Uyuşmazlıkları</h3>
      <p>İşçi ve işveren arasında çıkabilecek uyuşmazlıklar ve çözüm yolları:</p>
      <ul>
        <li>İş mahkemelerine başvuru</li>
        <li>Arabuluculuk süreci</li>
        <li>Sendika aracılığıyla çözüm</li>
        <li>İş müfettişliği şikayeti</li>
      </ul>
      
      <h3>Sonuç</h3>
      <p>İş hukuku, hem işçi hem de işveren haklarını dengeli bir şekilde korumaktadır. Bu hakların bilinmesi ve uygulanması, sağlıklı bir iş ortamının oluşturulması için önemlidir.</p>
      
      <p>İş hukuku konularında detaylı bilgi almak için uzman avukatlarımızla görüşebilirsiniz.</p>
    `,
    image: "/logo.jpeg",
    date: "10 Mart 2024",
    category: "İş Hukuku",
    readTime: "7 dk",
    author: "Ahmet Yılmaz",
    tags: ["İş Hukuku", "İşçi Hakları", "İş Sözleşmesi", "İş Güvenliği"]
  },
  {
    id: 3,
    title: "Gayrimenkul Hukukunda Tapu İşlemleri",
    excerpt: "Tapu işlemlerinde dikkat edilmesi gereken önemli noktalar ve yasal süreçler.",
    content: `
      <h2>Gayrimenkul Hukukunda Tapu İşlemleri ve Önemli Noktalar</h2>
      
      <p>Gayrimenkul hukuku, en karmaşık hukuk alanlarından biridir. Tapu işlemleri, gayrimenkul alım-satım süreçlerinin en kritik aşamasıdır. Bu yazımızda tapu işlemlerinde dikkat edilmesi gereken önemli noktaları ele alacağız.</p>
      
      <h3>1. Tapu İşlemlerinde Gerekli Belgeler</h3>
      <p>Tapu işlemleri için gerekli temel belgeler:</p>
      <ul>
        <li>Kimlik belgesi (TC kimlik kartı veya pasaport)</li>
        <li>Eski tapu senedi</li>
        <li>Emlak vergisi beyannamesi</li>
        <li>Tapu harcı makbuzu</li>
        <li>Gerekli durumlarda noter onaylı belgeler</li>
      </ul>
      
      <h3>2. Tapu İşlem Türleri</h3>
      <p>Tapu müdürlüklerinde yapılabilecek işlem türleri:</p>
      <ul>
        <li><strong>Satış İşlemi:</strong> Gayrimenkulün mülkiyetinin devri</li>
        <li><strong>İpotek İşlemi:</strong> Gayrimenkul üzerinde ipotek tesis edilmesi</li>
        <li><strong>Kat Mülkiyeti:</strong> Kat karşılığı inşaat sözleşmeleri</li>
        <li><strong>İrtifak Hakkı:</strong> Geçit, geçiş gibi hakların tesis edilmesi</li>
        <li><strong>Şerh İşlemleri:</strong> Tapuya şerh verilmesi</li>
      </ul>
      
      <h3>3. Tapu İşlemlerinde Dikkat Edilecek Noktalar</h3>
      <p>Tapu işlemlerinde karşılaşılabilecek sorunlar ve önlemler:</p>
      <ul>
        <li>Gayrimenkulün üzerindeki ipoteklerin kontrol edilmesi</li>
        <li>Emlak vergisi borçlarının ödenmiş olması</li>
        <li>Yapı kullanma izni ve ruhsat durumunun kontrol edilmesi</li>
        <li>Kat mülkiyeti işlemlerinde kat karşılığı sözleşmesinin varlığı</li>
        <li>Ortak mülkiyet durumunda diğer ortakların onayının alınması</li>
      </ul>
      
      <h3>4. Kat Karşılığı İnşaat Sözleşmeleri</h3>
      <p>Kat karşılığı inşaat sözleşmelerinde dikkat edilmesi gerekenler:</p>
      <ul>
        <li>Sözleşmenin noter onaylı olması</li>
        <li>Yapı ruhsatının varlığı</li>
        <li>İnşaatın tamamlanma süresi</li>
        <li>Kalite standartları ve garanti şartları</li>
        <li>Ödeme planı ve taksitlendirme</li>
      </ul>
      
      <h3>5. Tapu İşlemlerinde Hukuki Danışmanlık</h3>
      <p>Tapu işlemlerinde hukuki danışmanlık almanın önemi:</p>
      <ul>
        <li>Yasal süreçlerin doğru takip edilmesi</li>
        <li>Hakların korunması</li>
        <li>Olası sorunların önceden tespit edilmesi</li>
        <li>Zaman ve maliyet tasarrufu</li>
      </ul>
      
      <h3>Sonuç</h3>
      <p>Tapu işlemleri, gayrimenkul hukukunun en kritik aşamasıdır. Bu işlemlerin doğru yapılması, gelecekte yaşanabilecek sorunları önler. Bu nedenle tapu işlemlerinde mutlaka uzman hukuki danışmanlık alınmalıdır.</p>
      
      <p>Gayrimenkul hukuku konularında detaylı bilgi almak için uzman avukatlarımızla iletişime geçebilirsiniz.</p>
    `,
    image: "/logo.jpeg",
    date: "5 Mart 2024",
    category: "Gayrimenkul Hukuku",
    readTime: "6 dk",
    author: "Fatma Demir",
    tags: ["Gayrimenkul Hukuku", "Tapu İşlemleri", "Kat Karşılığı", "İpotek"]
  },
  {
    id: 4,
    title: "Şirket Kuruluşu ve Yasal Süreçler",
    excerpt: "Şirket kuruluşu süreçlerinde dikkat edilmesi gereken yasal adımlar ve belgeler.",
    content: `
      <h2>Şirket Kuruluşu Süreçleri ve Yasal Gereklilikler</h2>
      
      <p>Şirket kuruluşu, işletme hayatının en önemli aşamalarından biridir. Bu süreçte yapılacak hatalar, gelecekte ciddi sorunlara yol açabilir. Bu yazımızda şirket kuruluşu süreçlerini detaylı olarak inceleyeceğiz.</p>
      
      <h3>1. Şirket Türlerinin Belirlenmesi</h3>
      <p>Türk hukukunda farklı şirket türleri bulunmaktadır:</p>
      <ul>
        <li><strong>Limited Şirket:</strong> En yaygın şirket türü, 1-50 ortak</li>
        <li><strong>Anonim Şirket:</strong> Büyük yatırımlar için uygun</li>
        <li><strong>Şahıs İşletmesi:</strong> Tek kişilik işletmeler</li>
        <li><strong>Adi Ortaklık:</strong> Basit ortaklık yapısı</li>
      </ul>
      
      <h3>2. Gerekli Belgeler ve Süreçler</h3>
      <p>Şirket kuruluşu için gerekli belgeler:</p>
      <ul>
        <li>Ortakların kimlik belgeleri</li>
        <li>Şirket ana sözleşmesi</li>
        <li>Sermaye taahhüt belgeleri</li>
        <li>Vergi levhası başvurusu</li>
        <li>Ticaret sicil gazetesi ilanı</li>
      </ul>
      
      <h3>3. Yasal Yükümlülükler</h3>
      <p>Şirket kuruluşu sonrası yasal yükümlülükler:</p>
      <ul>
        <li>Vergi dairesine kayıt</li>
        <li>SGK işveren kaydı</li>
        <li>Muhasebe defteri tutma</li>
        <li>Yıllık beyanname verme</li>
        <li>Genel kurul toplantıları</li>
      </ul>
      
      <h3>Sonuç</h3>
      <p>Şirket kuruluşu süreçleri karmaşık görünse de, doğru rehberlik ile sorunsuz tamamlanabilir. Bu konuda uzman hukuki danışmanlık almak önemlidir.</p>
    `,
    image: "/logo.jpeg",
    date: "1 Mart 2024",
    category: "Ticaret Hukuku",
    readTime: "4 dk",
    author: "Kasım Aksoy",
    tags: ["Ticaret Hukuku", "Şirket Kuruluşu", "Limited Şirket", "Yasal Süreçler"]
  },
  {
    id: 5,
    title: "İş Sözleşmesi Türleri ve Özellikleri",
    excerpt: "Farklı iş sözleşmesi türleri ve bunların özellikleri hakkında detaylı bilgi.",
    content: `
      <h2>İş Sözleşmesi Türleri ve Özellikleri</h2>
      
      <p>İş sözleşmeleri, işçi ve işveren arasındaki ilişkiyi düzenleyen yasal belgelerdir. Bu yazımızda farklı iş sözleşmesi türlerini ve özelliklerini inceleyeceğiz.</p>
      
      <h3>1. Belirsiz Süreli İş Sözleşmesi</h3>
      <p>En yaygın iş sözleşmesi türüdür:</p>
      <ul>
        <li>Süre belirtilmeden yapılır</li>
        <li>İşveren tarafından feshedilmesi zordur</li>
        <li>Kıdem tazminatı hakkı vardır</li>
        <li>İhbar süresi uygulanır</li>
      </ul>
      
      <h3>2. Belirli Süreli İş Sözleşmesi</h3>
      <p>Belirli bir süre için yapılan sözleşme:</p>
      <ul>
        <li>Maksimum 1 yıl sürebilir</li>
        <li>Geçici işler için uygundur</li>
        <li>Süre sonunda otomatik sona erer</li>
        <li>Yenileme şartları belirtilmelidir</li>
      </ul>
      
      <h3>3. Kısmi Süreli İş Sözleşmesi</h3>
      <p>Tam süreli işin bir kısmını kapsar:</p>
      <ul>
        <li>Haftalık 30 saatten az çalışma</li>
        <li>Ücret orantılı olarak hesaplanır</li>
        <li>İzin hakları korunur</li>
        <li>Esnek çalışma imkanı sağlar</li>
      </ul>
      
      <h3>Sonuç</h3>
      <p>İş sözleşmesi türünün seçimi, hem işçi hem de işveren için önemlidir. Bu konuda hukuki danışmanlık almak haklarınızı korur.</p>
    `,
    image: "/logo.jpeg",
    date: "28 Şubat 2024",
    category: "İş Hukuku",
    readTime: "3 dk",
    author: "Ahmet Yılmaz",
    tags: ["İş Hukuku", "İş Sözleşmesi", "Belirsiz Süreli", "Kısmi Süreli"]
  },
  {
    id: 6,
    title: "Kat Karşılığı İnşaat Sözleşmeleri",
    excerpt: "Kat karşılığı inşaat sözleşmelerinde dikkat edilmesi gereken yasal noktalar.",
    content: `
      <h2>Kat Karşılığı İnşaat Sözleşmeleri ve Yasal Gereklilikler</h2>
      
      <p>Kat karşılığı inşaat sözleşmeleri, gayrimenkul sektöründe yaygın olarak kullanılan bir yöntemdir. Bu yazımızda bu sözleşmelerin yasal boyutunu inceleyeceğiz.</p>
      
      <h3>1. Sözleşmenin Geçerlilik Şartları</h3>
      <p>Kat karşılığı sözleşmelerinin geçerli olması için:</p>
      <ul>
        <li>Noter onaylı olması gerekir</li>
        <li>Yapı ruhsatının bulunması şarttır</li>
        <li>Arsa sahibinin mülkiyet hakkı olmalıdır</li>
        <li>Müteahhitin yeterlilik belgesi bulunmalıdır</li>
      </ul>
      
      <h3>2. Tarafların Hak ve Yükümlülükleri</h3>
      <p>Sözleşmede belirtilmesi gereken hususlar:</p>
      <ul>
        <li>İnşaatın tamamlanma süresi</li>
        <li>Kalite standartları</li>
        <li>Ödeme planı ve taksitlendirme</li>
        <li>Cezai şartlar</li>
        <li>Garanti süreleri</li>
      </ul>
      
      <h3>3. Olası Sorunlar ve Çözümler</h3>
      <p>Kat karşılığı sözleşmelerinde karşılaşılabilecek sorunlar:</p>
      <ul>
        <li>İnşaatın gecikmesi</li>
        <li>Kalite sorunları</li>
        <li>Ödeme anlaşmazlıkları</li>
        <li>Ruhsat sorunları</li>
      </ul>
      
      <h3>Sonuç</h3>
      <p>Kat karşılığı sözleşmeleri karmaşık hukuki süreçler içerir. Bu konuda uzman danışmanlık almak önemlidir.</p>
    `,
    image: "/logo.jpeg",
    date: "25 Şubat 2024",
    category: "Gayrimenkul Hukuku",
    readTime: "5 dk",
    author: "Fatma Demir",
    tags: ["Gayrimenkul Hukuku", "Kat Karşılığı", "İnşaat Sözleşmesi", "Müteahhit"]
  },
  {
    id: 7,
    title: "Marka ve Patent Koruması",
    excerpt: "Fikri mülkiyet haklarının korunması ve marka patent başvuru süreçleri.",
    content: `
      <h2>Marka ve Patent Koruması: Fikri Mülkiyet Hakları</h2>
      
      <p>Fikri mülkiyet hakları, işletmelerin en değerli varlıklarından biridir. Bu yazımızda marka ve patent koruması konularını ele alacağız.</p>
      
      <h3>1. Marka Tescili Süreci</h3>
      <p>Marka tescili için gerekli adımlar:</p>
      <ul>
        <li>Marka araştırması yapılması</li>
        <li>Başvuru belgelerinin hazırlanması</li>
        <li>Türk Patent ve Marka Kurumu'na başvuru</li>
        <li>Yayın ve itiraz süreçleri</li>
        <li>Tescil belgesinin alınması</li>
      </ul>
      
      <h3>2. Patent Koruması</h3>
      <p>Patent başvuru süreçleri:</p>
      <ul>
        <li>Yenilik araştırması</li>
        <li>Patent başvuru dosyasının hazırlanması</li>
        <li>Ulusal veya uluslararası başvuru</li>
        <li>İnceleme süreçleri</li>
        <li>Patent verilmesi</li>
      </ul>
      
      <h3>3. İhlal Durumlarında Yapılacaklar</h3>
      <p>Fikri mülkiyet haklarının ihlali durumunda:</p>
      <ul>
        <li>Uyarı mektubu gönderilmesi</li>
        <li>Hukuki yollara başvurulması</li>
        <li>Ceza davası açılması</li>
        <li>Tazminat talep edilmesi</li>
      </ul>
      
      <h3>Sonuç</h3>
      <p>Fikri mülkiyet haklarının korunması, işletmelerin rekabet gücü için kritiktir. Bu konuda uzman danışmanlık almak önemlidir.</p>
    `,
    image: "/logo.jpeg",
    date: "20 Şubat 2024",
    category: "Ticaret Hukuku",
    readTime: "4 dk",
    author: "Kasım Aksoy",
    tags: ["Ticaret Hukuku", "Marka Koruması", "Patent", "Fikri Mülkiyet"]
  },
  {
    id: 8,
    title: "İş Güvenliği ve İşçi Sağlığı",
    excerpt: "İş güvenliği önlemleri ve işçi sağlığının korunması konusunda yasal düzenlemeler.",
    content: `
      <h2>İş Güvenliği ve İşçi Sağlığı: Yasal Düzenlemeler</h2>
      
      <p>İş güvenliği ve işçi sağlığı, modern iş hukukunun en önemli konularından biridir. Bu yazımızda bu konudaki yasal düzenlemeleri inceleyeceğiz.</p>
      
      <h3>1. İşverenin Yükümlülükleri</h3>
      <p>İşverenlerin iş güvenliği konusundaki yükümlülükleri:</p>
      <ul>
        <li>Risk değerlendirmesi yapma</li>
        <li>Güvenlik önlemlerini alma</li>
        <li>İşçilere eğitim verme</li>
        <li>Sağlık kontrollerini yaptırma</li>
        <li>Acil durum planları hazırlama</li>
      </ul>
      
      <h3>2. İşçinin Hakları</h3>
      <p>İşçilerin iş güvenliği konusundaki hakları:</p>
      <ul>
        <li>Güvenli çalışma ortamı talep etme</li>
        <li>Koruyucu ekipman kullanma</li>
        <li>Tehlikeli işleri reddetme hakkı</li>
        <li>Sağlık kontrolü talep etme</li>
        <li>Şikayet hakkı</li>
      </ul>
      
      <h3>3. Yasal Yaptırımlar</h3>
      <p>İş güvenliği ihlallerinde uygulanan yaptırımlar:</p>
      <ul>
        <li>İdari para cezaları</li>
        <li>İş durdurma cezaları</li>
        <li>Hapis cezaları</li>
        <li>Tazminat ödemeleri</li>
      </ul>
      
      <h3>Sonuç</h3>
      <p>İş güvenliği, hem işveren hem de işçi için kritik öneme sahiptir. Bu konuda yasal düzenlemelere uyum sağlamak zorunludur.</p>
    `,
    image: "/logo.jpeg",
    date: "18 Şubat 2024",
    category: "İş Hukuku",
    readTime: "6 dk",
    author: "Ahmet Yılmaz",
    tags: ["İş Hukuku", "İş Güvenliği", "İşçi Sağlığı", "Risk Değerlendirmesi"]
  },
  {
    id: 9,
    title: "Gayrimenkul Alım-Satım Sözleşmeleri",
    excerpt: "Gayrimenkul alım-satım sözleşmelerinde dikkat edilmesi gereken yasal noktalar.",
    content: `
      <h2>Gayrimenkul Alım-Satım Sözleşmeleri ve Yasal Gereklilikler</h2>
      
      <p>Gayrimenkul alım-satım işlemleri, en büyük yatırımlardan biridir. Bu süreçte yapılacak hatalar ciddi maddi kayıplara yol açabilir. Bu yazımızda gayrimenkul alım-satım sözleşmelerini inceleyeceğiz.</p>
      
      <h3>1. Sözleşme Öncesi Kontroller</h3>
      <p>Gayrimenkul alımı öncesi yapılması gereken kontroller:</p>
      <ul>
        <li>Tapu kayıtlarının incelenmesi</li>
        <li>İpotek durumunun kontrol edilmesi</li>
        <li>Emlak vergisi borçlarının kontrolü</li>
        <li>Yapı ruhsatı ve kullanma izni kontrolü</li>
        <li>Kat mülkiyeti durumunun incelenmesi</li>
      </ul>
      
      <h3>2. Sözleşme Şartları</h3>
      <p>Gayrimenkul alım-satım sözleşmesinde bulunması gereken şartlar:</p>
      <ul>
        <li>Gayrimenkulün tam tanımı</li>
        <li>Satış bedeli ve ödeme şekli</li>
        <li>Teslim tarihi ve şekli</li>
        <li>Cezai şartlar</li>
        <li>Garanti şartları</li>
      </ul>
      
      <h3>3. Tapu İşlemleri</h3>
      <p>Tapu işlemlerinde dikkat edilecek noktalar:</p>
      <ul>
        <li>Gerekli belgelerin hazırlanması</li>
        <li>Tapu harcının ödenmesi</li>
        <li>Noter onayının alınması</li>
        <li>Tapu müdürlüğünde işlem yapılması</li>
      </ul>
      
      <h3>Sonuç</h3>
      <p>Gayrimenkul alım-satım işlemleri karmaşık süreçlerdir. Bu konuda uzman hukuki danışmanlık almak önemlidir.</p>
    `,
    image: "/logo.jpeg",
    date: "15 Şubat 2024",
    category: "Gayrimenkul Hukuku",
    readTime: "5 dk",
    author: "Fatma Demir",
    tags: ["Gayrimenkul Hukuku", "Alım-Satım", "Tapu İşlemleri", "Sözleşme"]
  },
  {
    id: 10,
    title: "Ticari Sözleşmelerde Haksız Şartlar",
    excerpt: "Ticari sözleşmelerde haksız şartların belirlenmesi ve yasal koruma yolları.",
    content: `
      <h2>Ticari Sözleşmelerde Haksız Şartlar ve Yasal Koruma</h2>
      
      <p>Ticari sözleşmelerde haksız şartlar, özellikle güçsüz tarafın aleyhine olan düzenlemelerdir. Bu yazımızda haksız şartları ve koruma yollarını inceleyeceğiz.</p>
      
      <h3>1. Haksız Şartların Tanımı</h3>
      <p>Haksız şartlar şu durumlarda ortaya çıkar:</p>
      <ul>
        <li>Güçsüz tarafın aleyhine olan düzenlemeler</li>
        <li>Yasal düzenlemelere aykırı şartlar</li>
        <li>Dengeli olmayan yükümlülük dağılımı</li>
        <li>Şeffaflık ilkesine aykırılık</li>
      </ul>
      
      <h3>2. Haksız Şartların Türleri</h3>
      <p>Yaygın haksız şart türleri:</p>
      <ul>
        <li>Aşırı cezai şartlar</li>
        <li>Tek taraflı fesih hakları</li>
        <li>Haksız sorumluluk sınırlamaları</li>
        <li>Gizli maliyetler</li>
        <li>Haksız garanti şartları</li>
      </ul>
      
      <h3>3. Yasal Koruma Yolları</h3>
      <p>Haksız şartlara karşı koruma yolları:</p>
      <ul>
        <li>Mahkemeye başvuru</li>
        <li>Haksız şartın geçersizliğinin tespiti</li>
        <li>Tazminat talep edilmesi</li>
        <li>Sözleşmenin feshi</li>
      </ul>
      
      <h3>Sonuç</h3>
      <p>Haksız şartlara karşı yasal koruma yollarını bilmek önemlidir. Bu konuda uzman danışmanlık almak haklarınızı korur.</p>
    `,
    image: "/logo.jpeg",
    date: "12 Şubat 2024",
    category: "Ticaret Hukuku",
    readTime: "4 dk",
    author: "Kasım Aksoy",
    tags: ["Ticaret Hukuku", "Ticari Sözleşmeler", "Haksız Şartlar", "Yasal Koruma"]
  }
];

export function getBlogPostById(id: number): BlogPost | undefined {
  return blogPosts.find(post => post.id === id);
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter(post => post.category === category);
}

export function getBlogPostsByTag(tag: string): BlogPost[] {
  return blogPosts.filter(post => post.tags.includes(tag));
} 