"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Sayfa aşağı kaydırıldığında gizle
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }
      // Sayfa yukarı kaydırıldığında tekrar göster
      else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed left-1/2 z-50 w-full max-w-5xl -translate-x-1/2 transition-all duration-300 ${isVisible ? "top-4 opacity-100" : "-top-24 opacity-0 pointer-events-none"
        }`}
    >
      <header className="mx-4 rounded-full border border-slate-200/50 bg-white/90 shadow-lg backdrop-blur-md">
        <div className="flex h-16 items-center justify-between px-6 md:px-8">

          {/* Logo Alanı */}
          <Link href="/" className="flex items-center">
            <Image
              src="/mutlu-oto-logo.png"
              alt="Mutlu Oto"
              width={160}
              height={40}
              className="h-8 md:h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* Masaüstü Menü */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-700">
            <Link href="#hakkimizda" className="hover:text-[#f25c38] transition-colors">Neden Biz</Link>
            <Link href="#hizmetler" className="hover:text-[#f25c38] transition-colors">Hizmetler</Link>
            <Link href="#galeri" className="hover:text-[#f25c38] transition-colors">Galeri</Link>
            <Link href="#iletisim" className="hover:text-[#f25c38] transition-colors">İletişim</Link>
          </nav>

          {/* Aksiyon Butonu */}
          <div className="hidden md:flex">
            <a
              href="tel:+902324350135"
              className="flex items-center gap-2 rounded-full bg-[#e7000b] px-5 py-2 text-sm font-bold text-white transition-all hover:bg-[#c50009] shadow-md"
            >
              <Phone className="h-4 w-4" />
              Hemen Ara
            </a>
          </div>

          {/* Mobil Menü Butonu */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-slate-700 hover:text-slate-900 transition-colors"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

        </div>
      </header>

      {/* Mobil Açılır Menü */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="mx-4 mt-2 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl md:hidden flex flex-col origin-top"
          >
            {/* Menü Linkleri */}
            <div className="flex flex-col p-2">
              <Link href="#hakkimizda" onClick={() => setIsMobileMenuOpen(false)} className="rounded-xl px-4 py-3 text-base font-semibold text-slate-700 transition-colors hover:bg-slate-50 hover:text-[#e7000b]">Neden Biz</Link>
              <Link href="#hizmetler" onClick={() => setIsMobileMenuOpen(false)} className="rounded-xl px-4 py-3 text-base font-semibold text-slate-700 transition-colors hover:bg-slate-50 hover:text-[#e7000b]">Hizmetler</Link>
              <Link href="#galeri" onClick={() => setIsMobileMenuOpen(false)} className="rounded-xl px-4 py-3 text-base font-semibold text-slate-700 transition-colors hover:bg-slate-50 hover:text-[#e7000b]">Galeri</Link>
              <Link href="#iletisim" onClick={() => setIsMobileMenuOpen(false)} className="rounded-xl px-4 py-3 text-base font-semibold text-slate-700 transition-colors hover:bg-slate-50 hover:text-[#e7000b]">İletişim</Link>
            </div>

            {/* Alt Kısım - Aksiyon Butonu */}
            <div className="bg-slate-50 p-4 border-t border-slate-100">
              <a
                href="tel:+902324350135"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#e7000b] px-5 py-3.5 text-base font-bold text-white shadow-sm transition-all hover:bg-[#c50009]"
              >
                <Phone className="h-5 w-5" />
                Hemen Ara
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}