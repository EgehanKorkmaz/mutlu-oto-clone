"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-8">
        
        {/* Logo Alanı */}
        <Link href="/" className="flex items-center">
          <Image
            src="/mutlu-oto-logo.png"
            alt="Mutlu Oto"
            width={240}
            height={72}
            className="h-10 md:h-12 w-auto object-contain"
            priority
          />
        </Link>

        {/* Masaüstü Menü */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <Link href="#hakkimizda" className="hover:text-red-600 transition-colors">Neden Biz</Link>
          <Link href="#hizmetler" className="hover:text-red-600 transition-colors">Hizmetler</Link>
          <Link href="#galeri" className="hover:text-red-600 transition-colors">Galeri</Link>
          <Link href="#iletisim" className="hover:text-red-600 transition-colors">İletişim</Link>
        </nav>

        {/* Aksiyon Butonu */}
        <div className="hidden md:flex">
          <a 
            href="tel:+902324350135" 
            className="flex items-center gap-2 rounded-md bg-red-600 px-6 py-2.5 text-sm font-medium text-white transition-all hover:bg-red-700 shadow-sm hover:shadow"
          >
            <Phone className="h-4 w-4" />
            Hemen Ara
          </a>
        </div>

        {/* Mobil Menü Butonu */}
        <button className="md:hidden p-2 text-slate-600 hover:text-slate-900 transition-colors">
          <Menu className="h-6 w-6" />
        </button>
        
      </div>
    </header>
  );
}
