"use client";

import Image from "next/image";
import { Phone, MapPin } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";

const BGS = [
  "/hero-1.jpg",
  "/hero-2.jpg",
  "/hero-3.jpg",
  "/hero-4.jpg",
];

export default function Hero() {
  const [emblaRef] = useEmblaCarousel({ loop: true, duration: 40 }, [
    Autoplay({ delay: 4000, stopOnInteraction: false }),
    Fade()
  ]);

  return (
    // Yükseklik h-[calc(100dvh-96px)] olarak güncellendi
    <section className="relative w-full h-[calc(100dvh-150px)] min-h-[500px] bg-slate-900 overflow-hidden">

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

      {/* Hero İçeriği */}
      <div className="container relative z-20 mx-auto flex h-full flex-col justify-end px-4 pb-16 md:px-8">
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
              className="flex w-full sm:w-auto items-center justify-center gap-2 rounded bg-[#e7000b] px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#c50009]"
            >
              <Phone className="h-5 w-5" />
              Hemen Ara
            </a>

            {/* Google Maps Linki Güncellendi */}
            <a
              href="https://www.google.com/maps/place/Mutlu+Otomotiv/@38.4474002,27.1836474,19.92z/data=!4m6!3m5!1s0x14b962a540165a4d:0x326a0d3b65bd9cf5!8m2!3d38.4473057!4d27.1838806!16s%2Fg%2F11g6pgz3l2?entry=ttu&g_ep=EgoyMDI2MDkwMi4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full sm:w-auto items-center justify-center gap-2 rounded border border-white/40 bg-black/20 px-8 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              <MapPin className="h-5 w-5 text-[#e7000b]" />
              Yol Tarifi Al
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
