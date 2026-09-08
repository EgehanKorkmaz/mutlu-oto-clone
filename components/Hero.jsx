"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const BGS = [
  "/hero-1.jpg",
  "/hero-2.jpg",
  "/hero-3.jpg",
  "/hero-4.jpg",
];

export default function Hero() {
  const [emblaRef] = useEmblaCarousel({ loop: true, duration: 30 }, [
    Autoplay({ delay: 4000, stopOnInteraction: false })
  ]);

  return (
    <section className="relative w-full min-h-[600px] h-[85vh] bg-slate-900 overflow-hidden">
      
      {/* Embla Arka Plan Slider */}
      <div className="absolute inset-0 w-full h-full" ref={emblaRef}>
        <div className="flex h-full w-full">
          {BGS.map((src, index) => (
            <div className="relative flex-[0_0_100%] h-full w-full min-w-0" key={index}>
              <Image 
                src={src} 
                alt={`Mutlu Oto Servis Görsel ${index + 1}`} 
                fill 
                className="object-cover" 
                priority={index === 0} 
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Alttan Üste Karartma (Gradient Overlay) */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent pointer-events-none z-10" />

      {/* Hero İçeriği (Sola ve Aşağı Yaslı) */}
      <div className="container relative z-20 mx-auto flex h-full flex-col justify-end px-4 pb-20 md:px-8">
        <div className="max-w-3xl">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Aracınız Usta Ellere Emanet
          </h1>
          
          <p className="mb-8 text-lg text-slate-200 md:text-xl leading-relaxed">
            Mitsubishi uzmanlığı ve tüm markalarda nokta atışı onarım. Şeffaf süreç, garantili parça ve sıfır sürpriz masraf.
          </p>
          
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <a 
              href="tel:+902324350135" 
              className="flex w-full sm:w-auto items-center justify-center gap-2 rounded bg-[rgb(212,68,57)] px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[rgb(190,55,45)]"
            >
              <Phone className="h-5 w-5" />
              Hemen Ara
            </a>
            
            <Link 
              href="#iletisim" 
              className="flex w-full sm:w-auto items-center justify-center gap-2 rounded border border-white/40 bg-black/20 px-8 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              <MapPin className="h-5 w-5 text-[rgb(252,241,238)]" />
              Yol Tarifi Al
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
