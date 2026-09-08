"use client";

import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

// 1'den 11'e kadar olan resim yollarını dinamik olarak oluşturuyoruz
const images = Array.from({ length: 11 }, (_, i) => `/foto${i + 1}.jpg`);

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaMainRef, emblaMainApi] = useEmblaCarousel({ loop: true });

  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });

  // Sol/Sağ ok butonları
  const scrollPrev = useCallback(() => {
    if (emblaMainApi) emblaMainApi.scrollPrev();
  }, [emblaMainApi]);

  const scrollNext = useCallback(() => {
    if (emblaMainApi) emblaMainApi.scrollNext();
  }, [emblaMainApi]);

  const onThumbClick = useCallback(
    (index) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi]);

  useEffect(() => {
    if (!emblaMainApi) return;
    emblaMainApi.on("select", onSelect);
    emblaMainApi.on("reInit", onSelect);

    return () => {
      emblaMainApi.off("select", onSelect);
      emblaMainApi.off("reInit", onSelect);
    };
  }, [emblaMainApi, onSelect]);

  return (
    <section id="galeri" className="bg-slate-50 py-24 sm:py-32">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">

        {/* Başlık */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Galeri
          </h2>
          <div className="mx-auto mt-5 mb-5 h-1 w-16 rounded bg-[#e7000b]" />
          <p className="text-lg leading-relaxed text-slate-500">
            Temiz atölye, titiz işçilik ve kusursuz teslimat. Servisimizden kareler.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {/* Ana Görsel Alanı */}
          <div className="relative group">
            <div className="overflow-hidden rounded-2xl shadow-sm border border-slate-200 bg-slate-200" ref={emblaMainRef}>
              <div className="flex touch-pan-y">
                {images.map((src, index) => (
                  <div className="relative flex-[0_0_100%] aspect-video min-w-0" key={index}>
                    <Image
                      src={src}
                      alt={`Atölye Görseli ${index + 1}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 1024px"
                      className="object-cover"
                      priority={index === 0}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Sol Ok Butonu */}
            <button
              type="button"
              onClick={scrollPrev}
              className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/90 text-slate-800 shadow-md border border-slate-200/60 backdrop-blur-md transition-all duration-200 hover:bg-white hover:text-[#e7000b] hover:scale-110 active:scale-95 cursor-pointer focus:outline-none"
              aria-label="Önceki Görsel"
            >
              <ChevronLeft className="h-6 w-6 sm:h-7 sm:w-7 -ml-0.5" />
            </button>

            {/* Sağ Ok Butonu */}
            <button
              type="button"
              onClick={scrollNext}
              className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/90 text-slate-800 shadow-md border border-slate-200/60 backdrop-blur-md transition-all duration-200 hover:bg-white hover:text-[#e7000b] hover:scale-110 active:scale-95 cursor-pointer focus:outline-none"
              aria-label="Sonraki Görsel"
            >
              <ChevronRight className="h-6 w-6 sm:h-7 sm:w-7 -mr-0.5" />
            </button>
          </div>

          {/* Thumbnails */}
          <div className="overflow-hidden mt-2" ref={emblaThumbsRef}>
            <div className="flex gap-3 touch-pan-y">
              {images.map((src, index) => (
                <button
                  key={index}
                  onClick={() => onThumbClick(index)}
                  className={`relative flex-[0_0_25%] sm:flex-[0_0_20%] md:flex-[0_0_15%] aspect-video min-w-0 overflow-hidden rounded-lg border-2 transition-all duration-300 cursor-pointer ${index === selectedIndex
                      ? "border-[#e7000b] opacity-100"
                      : "border-transparent opacity-50 hover:opacity-100"
                    }`}
                  type="button"
                  aria-label={`Görsel ${index + 1}`}
                >
                  <Image
                    src={src}
                    alt={`Küçük Görsel ${index + 1}`}
                    fill
                    sizes="(max-width: 640px) 25vw, (max-width: 768px) 20vw, 15vw"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}