# Mutlu Oto Servis - Modern Web Arayüzü

Bu proje, bir oto servis firması için geliştirilmiş yüksek performanslı, modern ve tamamen duyarlı (responsive) bir kurumsal web sitesidir. Standart bir tasarımı alıp, modern web teknolojileri ve pürüzsüz animasyonlarla baştan aşağı yenileyerek birinci sınıf bir kullanıcı deneyimi (UX) sunmayı hedefledim.

## 🚀 Kullanılan Teknolojiler ve Kütüphaneler

Bu proje, performans ve modern geliştirici deneyimi göz önünde bulundurularak aşağıdaki teknolojilerle inşa edilmiştir:

*   **Framework:** [Next.js (App Router)](https://nextjs.org/) - Sunucu taraflı derleme (SSR) ve optimize edilmiş yönlendirme.
*   **Stil ve Tasarım:** [Tailwind CSS](https://tailwindcss.com/) - Hızlı ve utility-first CSS mimarisi.
*   **Animasyon Motoru:** [Framer Motion](https://www.framer.com/motion/) - Kaydırma (scroll-reveal), hover efektleri ve DOM'dan silinme (AnimatePresence) animasyonları.
*   **Slider / Carousel:** [Embla Carousel](https://www.embla-carousel.com/) - Hem Hero bölümündeki fade geçişleri hem de Galeri bölümündeki küçük resim (thumbnail) senkronizasyonu için hafif ve performanslı çözüm.
*   **Kayan Yazı Efekti:** [React Fast Marquee](https://www.react-fast-marquee.com/) - Marka logolarının filigran olarak kesintisiz akışı için.
*   **İkonlar:** [Lucide React](https://lucide.dev/) ve [React Icons](https://react-icons.github.io/react-icons/) - Vektörel ve özelleştirilebilir modern ikon setleri.

## ✨ Orijinal Tasarıma Kıyasla Yapılan Geliştirmeler

Bu projeyi sadece kodlamakla kalmadım, aynı zamanda kullanıcı deneyimini (UX) artıracak mimari kararlar alarak orijinal tasarımı geliştirdim:

*   **Akıllı ve Yüzen Navbar:** Sayfanın en üstünde yer kaplayan statik bir menü yerine, kaydırma yönüne duyarlı (scroll-aware) yüzen bir baloncuk menü tasarlandı. Sayfa aşağı kaydırıldığında gizlenir, yukarı çıkıldığında belirir.
*   **Dinamik Marka Filigranı:** Hero görselinin hemen altına statik logolar dizmek yerine, arka planda sürekli akan bir filigran (watermark) yapısı kuruldu. Logolar varsayılan olarak gri tonlamalıdır (grayscale), üzerine gelindiğinde orijinal renklerine kavuşur.
*   **İç İçe Katmanlı (Nested) Animasyonlar:** "Neden Biz?" bölümündeki kartlarda animasyon çakışmalarını önlemek için dış katman sahneye giriş (scroll-reveal) efektini, iç katman ise kartın 1.5 katına büyüme (hover) ve z-index öne çıkma işlevini üstlenecek şekilde izole edildi.
*   **Optimize Edilmiş Viewport Ölçüleri:** Mobil tarayıcılardaki adres çubuğu kaymalarını önlemek için standart `vh` yerine dinamik `dvh` (Dynamic Viewport Height) birimleri kullanılarak Hero ve Filigran hizalaması milimetrik olarak oturtuldu.
*   **Senkronize Galeri Yapısı:** Sabit 12'li resim ızgarası yerine, Embla Carousel kullanılarak ana görsel ile altındaki küçük resimlerin (thumbnails) state üzerinden birbiriyle konuştuğu gelişmiş bir galeri mekanizması kuruldu.
*   **Animasyonlu Mobil Menü:** Framer Motion'ın `AnimatePresence` bileşeni kullanılarak, mobil hamburger menünün açılıp kapanırken aniden belirmesi/kaybolması yerine pürüzsüzce kayarak (smooth) sahneye girmesi sağlandı.

## 🛠️ Kurulum ve Çalıştırma

Projeyi yerel ortamınızda çalıştırmak için aşağıdaki adımları izleyebilirsiniz:

1. Depoyu bilgisayarınıza klonlayın:
   ```bash
   git clone [https://github.com/KULLANICI_ADIN/mutlu-oto-clone.git](https://github.com/KULLANICI_ADIN/mutlu-oto-clone.git)

    Proje dizinine gidin ve bağımlılıkları yükleyin:
    Bash

    cd mutlu-oto-clone
    npm install

    Geliştirme sunucusunu başlatın:
    Bash

    npm run dev

    Tarayıcınızda http://localhost:3000 adresine giderek projeyi görüntüleyin.