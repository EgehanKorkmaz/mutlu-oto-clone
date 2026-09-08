import Link from "next/link";
import { Phone, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full bg-slate-900">
      {/* Arka plan görseli ve karartma (Overlay) */}
      <div 
        className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center bg-no-repeat opacity-40"
        aria-hidden="true"
      />
      
      <div className="container relative mx-auto flex min-h-[600px] flex-col items-center justify-center px-4 py-20 text-center md:px-8">
        <h1 className="mb-6 max-w-4xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Aracınız <span className="text-red-500">Usta Ellere</span> Emanet
        </h1>
        
        <p className="mb-10 max-w-2xl text-lg text-slate-300 md:text-xl leading-relaxed">
          Mitsubishi uzmanlığı ve tüm markalarda nokta atışı onarım. Şeffaf süreç, garantili parça ve sıfır sürpriz masraf.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a 
            href="tel:+902324350135" 
            className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-md bg-red-600 px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-red-700 shadow-lg hover:shadow-red-600/25"
          >
            <Phone className="h-5 w-5" />
            Hemen Ara
          </a>
          
          <Link 
            href="#iletisim" 
            className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-md border-2 border-slate-300 bg-transparent px-8 py-3.5 text-base font-semibold text-white transition-all hover:border-white hover:bg-white hover:text-slate-900"
          >
            <MapPin className="h-5 w-5" />
            Yol Tarifi Al
          </Link>
        </div>
      </div>
    </section>
  );
}
