"use client";

import { Settings, Zap, Wrench, Flame } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Periyodik Bakım",
    description: "Motor yağı, filtre değişimleri ve kapsamlı araç check-up hizmetleri.",
    icon: Settings,
  },
  {
    title: "Arıza Tespit & Elektrik",
    description: "Bilgisayarlı arıza tespiti (OBD) ve elektronik sistem onarımları.",
    icon: Zap,
  },
  {
    title: "Motor & Mekanik",
    description: "Motor revizyonu, fren sistemleri, alt takım ve mekanik onarımlar.",
    icon: Wrench,
  },
  {
    title: "LPG Bakım & Onarım",
    description: "LPG sistemleri ayarı, filtre değişimi ve sübap sorunları çözümleri.",
    icon: Flame,
  }
];

export default function Services() {
  return (
    <section id="hizmetler" className="bg-slate-50 py-24 sm:py-32 border-t border-slate-200 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Hizmetlerimiz
          </h2>
          <div className="mx-auto mt-5 mb-5 h-1 w-16 rounded bg-[#e7000b]" />
          <p className="text-lg leading-relaxed text-slate-500">
            Aracınızın ihtiyacı olan tüm bakım ve onarım çözümleri tek çatı altında.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const isLeftColumn = index % 2 === 0;
            
            return (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, x: isLeftColumn ? -80 : 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-red-100 transition-colors transition-shadow group ${
                  isLeftColumn ? "lg:col-span-2" : "lg:col-span-2"
                }`}
              >
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-slate-900 group-hover:bg-red-600 transition-colors">
                  <service.icon className="h-7 w-7 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
