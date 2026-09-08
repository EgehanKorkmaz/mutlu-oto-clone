import Image from "next/image";
import { Settings, Zap, Wrench, Flame } from "lucide-react";

const services = [
  {
    title: "Periyodik Bakım",
    description: "Motor yağı, filtre değişimleri ve kapsamlı araç check-up hizmetleri.",
    icon: Settings,
    image: "/periyodik-bakim.jpg",
  },
  {
    title: "Arıza Tespit & Elektrik",
    description: "Bilgisayarlı arıza tespiti (OBD) ve elektronik sistem onarımları.",
    icon: Zap,
    image: "/ariza-tespit.jpg",
  },
  {
    title: "Motor & Mekanik",
    description: "Motor revizyonu, fren sistemleri, alt takım ve mekanik onarımlar.",
    icon: Wrench,
    image: "/motor-mekanik.jpg",
  },
  {
    title: "LPG Bakım & Onarım",
    description: "LPG sistemleri ayarı, filtre değişimi ve sübap sorunları çözümleri.",
    icon: Flame,
    image: "/lpg-bakim.jpg",
  },
];

export default function Services() {
  return (
    <section id="hizmetler" className="bg-slate-50 py-24 sm:py-32 border-t border-slate-200">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        
        {/* Başlık Alanı */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Hizmetlerimiz
          </h2>
          
          {/* Turuncu Ayırıcı Çizgi */}
          <div className="mx-auto mt-5 mb-5 h-1 w-16 rounded bg-[#f25c38]" />
          
          <p className="text-lg leading-relaxed text-slate-500">
            Aracınızın ihtiyacı olan tüm bakım ve onarım çözümleri tek çatı altında.
          </p>
        </div>
        
        {/* Hizmet Kartları Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200/80 hover:shadow-xl hover:border-red-100 transition-all duration-300 group flex flex-col hover:-translate-y-1"
            >
              {/* Resim Alanı */}
              <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity" />
                
                {/* İkon Rozeti */}
                <div className="absolute bottom-4 left-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/95 backdrop-blur-sm shadow-md text-slate-900 group-hover:bg-[rgb(212,68,57)] group-hover:text-white transition-colors duration-300">
                  <service.icon className="h-5 w-5" aria-hidden="true" />
                </div>
              </div>

              {/* İçerik Alanı */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[rgb(212,68,57)] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
