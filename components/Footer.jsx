import { Phone, MapPin, Clock } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="iletisim" className="bg-slate-950 text-slate-300 py-16">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        
        {/* Üst Kısım: 3 Kolonlu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-slate-800 pb-12">
          
          {/* 1. Kolon: Marka ve Slogan */}
          <div className="flex flex-col">
            <Link href="/" className="text-2xl font-bold text-white tracking-tight mb-4">
              Mutlu <span className="text-[#f25c38]">Oto</span>
            </Link>
            <p className="text-slate-400 leading-relaxed mb-6">
              Aracınızın güvenilir çözüm ortağı. İzmir Bornova&apos;da yetkili servis tecrübesiyle tüm marka araçlarınıza profesyonel bakım ve onarım hizmeti.
            </p>
          </div>

          {/* 2. Kolon: İletişim Bilgileri */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">İletişim</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#f25c38] shrink-0 mt-0.5" />
                <span className="text-slate-400">
                  Kazımdirik, 419. Sk. No:21,<br />
                  35100 Bornova/İzmir
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#f25c38] shrink-0" />
                <a href="tel:+902324350135" className="text-slate-400 hover:text-white transition-colors">
                  0 (232) 435 01 35
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#f25c38] shrink-0" />
                <a href="tel:+905357919301" className="text-slate-400 hover:text-white transition-colors">
                  0 (535) 791 93 01
                </a>
              </li>
            </ul>
          </div>

          {/* 3. Kolon: Çalışma Saatleri */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Çalışma Saatleri</h3>
            <ul className="space-y-4">
              <li className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-slate-500" />
                  <span className="text-slate-400">Pazartesi - Cuma</span>
                </div>
                <span className="text-white font-medium">08:30 – 17:30</span>
              </li>
              <li className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-slate-500" />
                  <span className="text-slate-400">Cumartesi</span>
                </div>
                <span className="text-white font-medium">09:30 – 14:30</span>
              </li>
              <li className="flex items-center justify-between pb-2">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-slate-500" />
                  <span className="text-slate-400">Pazar</span>
                </div>
                <span className="text-red-400 font-medium">Kapalı</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Alt Kısım: Telif Hakkı (Copyright) */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© 2026 Mutlu Oto. Tüm Hakları Saklıdır.</p>
          <a 
            href="https://www.egehankorkmaz.me/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center text-[rgb(154,132,194)] hover:text-white transition-colors"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="14" 
              height="14" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              aria-hidden="true" 
              className="mr-1.5"
            >
              <path d="M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z"></path>
              <path d="M20.054 15.987H3.946"></path>
            </svg>
            Egehan Korkmaz tarafından tasarlanmıştır.
          </a>
        </div>
      </div>
    </footer>
  );
}
