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