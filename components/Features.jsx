"use client";

import { Wrench, ShieldCheck } from "lucide-react";
import { FaScrewdriverWrench } from "react-icons/fa6";
import { motion } from "framer-motion";

const features = [
  {
    title: "Yetkili Servis Tecrübesi",
    description: "Sıradan bir tamirhane değiliz; yetkili servis disipliniyle çalışıyoruz. Yılların formenlik tecrübesini ve orijinal parça kalitesini, özel servisin uygun fiyatlarıyla birleştirerek aracınıza en iyi hizmeti sunuyoruz.",
    icon: FaScrewdriverWrench,
  },
  {
    title: "Mitsubishi & 4x4 Uzmanlığı",
    description: "Başta Mitsubishi olmak üzere tüm pick-up ve 4x4 araçlarda İzmir'in uzman adresiyiz. Arızalarda doğrudan nokta atışı teşhis ve kesin çözümler sunuyoruz.",
    icon: Wrench,
  },
  {
    title: "Şeffaf ve Garantili İşçilik",
    description: "Bizde sürpriz masraflara yer yoktur. Yapılacak işlemleri ve değişecek parçaları önceden size bildirir, onayınızı almadan işe başlamayız. Şeffaf ve garantili işçiliğimizle aracınızı bize güvenle emanet edebilirsiniz.",
    icon: ShieldCheck,
  },
];

export default function Features() {
  return (
    // overflow-hidden kaldırıldı (Büyük kartın kesilmemesi için)
    <section id="hakkimizda" className="bg-white py-24 sm:py-32 relative z-10">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">

        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Neden <span className="text-[#e7000b]">Mutlu Otomotiv</span>?
          </h2>
          <div className="mx-auto mt-5 mb-5 h-1 w-16 rounded bg-[#e7000b]" />
        </div>

        <div className="mx-auto mt-8 max-w-2xl lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-12 lg:max-w-none lg:grid-cols-3">
            {features.map((feature, index) => (
              // 1. DIŞ KATMAN: Sadece sahneye giriş animasyonunu ve z-index katmanını yönetir
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.5, y: 50 }}
                whileInView={{
                  opacity: [0, 1, 1],
                  scale: [0.8, 1.05, 1],
                  y: [50, -15, 0]
                }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.7,
                  times: [0, 0.6, 1],
                  delay: index * 0.2
                }}
                className="relative z-20 hover:z-50 group"
              >
                {/* 2. İÇ KATMAN: Sadece hover büyümesini ve pürüzsüz geri dönüşü (0.3 saniye) yönetir */}
                <motion.div
                  whileHover={{ scale: 1.3 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="flex h-full flex-col items-center text-center p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:shadow-2xl hover:border-red-200 cursor-default bg-white"
                >
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
                    <feature.icon className="h-8 w-8 text-red-600" aria-hidden="true" />
                  </div>

                  <dt className="text-xl font-semibold leading-7 text-slate-900">
                    {feature.title}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </motion.div>
              </motion.div>
            ))}
          </dl>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative z-10 mx-auto mt-20 max-w-4xl text-center rounded-2xl bg-slate-50 p-8 md:p-12 border border-slate-100 shadow-sm"
        >
          <p className="text-lg md:text-xl leading-relaxed text-slate-700 italic">
            1999 yılına dayanan sektör tecrübemiz ve yetkili servis formenliği uzmanlığımızla,
            2011 yılından bu yana Bornova 3. Sanayi Sitesi'nde tüm marka araçlar için profesyonel bakım ve onarım hizmeti sunuyoruz.
            Şeffaf süreç yönetimi, dürüst işçilik ilkemiz ve rekabetçi fiyat politikamızla müşterilerimize en doğru çözümleri üretiyoruz.
          </p>
          <p className="mt-6 text-xl font-bold text-slate-900">
            "Mutlu Oto ile aracınız daima güvenli ellerde."
          </p>
        </motion.div>

      </div>
    </section>
  );
}