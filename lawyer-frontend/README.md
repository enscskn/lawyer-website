# Kasım Aksoy Hukuk & Danışmanlık Web Sitesi

Modern, profesyonel ve etkileyici bir hukuk bürosu web sitesi. Dark tema odaklı, altın renk aksanları olan premium tasarım.

## 🚀 Özellikler

- **Modern Tasarım**: Dark tema ile premium görünüm
- **Responsive**: Tüm cihazlarda mükemmel görünüm
- **Animasyonlar**: Smooth scroll ve Framer Motion animasyonları
- **SEO Optimized**: Meta tags ve structured data
- **WhatsApp Entegrasyonu**: Floating WhatsApp butonu
- **Form Validasyonu**: Gelişmiş form kontrolü
- **Avukat Slider**: Interactive avukat profilleri

## 🛠️ Teknolojiler

- **Frontend**: Astro
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **React**: Interactive components
- **TypeScript**: Type safety

## 📦 Kurulum

1. **Bağımlılıkları yükleyin:**
   ```bash
   npm install
   ```

2. **Geliştirme sunucusunu başlatın:**
   ```bash
   npm run dev
   ```

3. **Tarayıcıda açın:**
   ```
   http://localhost:4321
   ```

## 🏗️ Proje Yapısı

```
lawyer-frontend/
├── src/
│   ├── components/
│   │   ├── Header.astro          # Navigation header
│   │   ├── Hero.astro            # Hero section
│   │   ├── About.astro           # About section
│   │   ├── Services.astro        # Services section
│   │   ├── LawyersSlider.jsx     # Lawyers carousel
│   │   ├── Contact.astro         # Contact form
│   │   └── Footer.astro          # Footer
│   ├── layouts/
│   │   └── Layout.astro          # Main layout
│   └── pages/
│       └── index.astro           # Home page
├── public/
│   ├── logo.jpeg                 # Company logo
│   └── favicon.svg               # Favicon
├── tailwind.config.mjs           # Tailwind configuration
└── astro.config.mjs              # Astro configuration
```

## 🎨 Tasarım Sistemi

### Renkler
- **Primary**: #D4AF37 (Altın)
- **Secondary**: #F5F5DC (Krem)
- **Dark**: #1a1a1a (Ana arka plan)
- **Dark Light**: #2a2a2a (İkincil arka plan)

### Typography
- **Serif**: Playfair Display (Başlıklar)
- **Sans**: Inter (Gövde metni)

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px
- **Large**: > 1440px

## 📱 Sayfa Bölümleri

### 1. Hero Section
- Ana başlık ve alt başlık
- CTA butonları
- Hızlı iletişim bilgileri
- Animasyonlu arka plan

### 2. Hakkımızda
- Firma tanıtımı
- İstatistikler (500+ dava, 98% memnuniyet)
- Değerler (Güven, Deneyim, Başarı)

### 3. Hizmetler
- 6 ana hizmet alanı
- Card tabanlı tasarım
- Hover efektleri

### 4. Avukatlar
- Interactive slider
- Avukat profilleri
- Deneyim ve dava sayıları

### 5. İletişim
- Contact form
- İletişim bilgileri
- Çalışma saatleri

## 🔧 Özelleştirme

### Renkleri Değiştirme
`tailwind.config.mjs` dosyasında renk paletini güncelleyin:

```javascript
colors: {
  primary: {
    DEFAULT: '#D4AF37',
    light: '#FFD700',
    dark: '#B8860B',
  },
  // ...
}
```

### İçerik Güncelleme
- Avukat bilgileri: `LawyersSlider.jsx`
- İletişim bilgileri: `Contact.astro` ve `Footer.astro`
- Hizmet alanları: `Services.astro`

## 📞 İletişim Bilgileri

- **Telefon**: 0 (312) 955 05 50
- **E-posta**: av.kasimaksoy@gmail.com
- **Adres**: Kızılırmak Mah. 1445. Sok. No: 2/1, İç Kapı No: 83-84, Paragon Tower, Çankaya/ANKARA
- **T.C. NO**: 284 114 47 832

## 🚀 Deployment

### Build
```bash
npm run build
```

### Preview
```bash
npm run preview
```

## 📄 Lisans

Bu proje Kasım Aksoy Hukuk & Danışmanlık için özel olarak geliştirilmiştir.

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit yapın (`git commit -m 'Add amazing feature'`)
4. Push yapın (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📞 Destek

Herhangi bir sorun veya öneri için lütfen iletişime geçin:
- **E-posta**: av.kasimaksoy@gmail.com
- **Telefon**: 0 (312) 955 05 50
