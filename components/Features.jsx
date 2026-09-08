import { Wrench, ShieldCheck } from "lucide-react";
import { FaScrewdriverWrench } from "react-icons/fa6"; // Font Awesome ikonunu ekledik

const features = [
  {
    title: "Yetkili Servis Tecrübesi",
    description: "Sıradan bir tamirhane değiliz; yetkili servis disipliniyle çalışıyoruz. Yılların formenlik tecrübesini ve orijinal parça kalitesini, özel servisin uygun fiyatlarıyla birleştirerek aracınıza en iyi hizmeti sunuyoruz.",
    icon: FaScrewdriverWrench, // İkonu burada güncelledik
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
    <section id="hakkimizda" className="bg-white pt-5 pb-24 sm:pb-32">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        
        {/* Bölüm Başlığı */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-[rgb(30,34,41)] sm:text-4xl">
            Neden <span className="text-[rgb(190,55,45)]">Mutlu Otomotiv</span>?
          </h2>
        </div>
        
        {/* 1. Kısım: 3'lü Özellik Kartları */}
        <div className="mx-auto mt-8 max-w-2xl lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-12 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="flex flex-col items-center text-center p-6 rounded-2xl border border-slate-100 bg-slate-50 shadow-sm transition-shadow hover:shadow-md">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
                  <feature.icon className="h-8 w-8 text-red-600" aria-hidden="true" />
                </div>
                <dt className="text-xl font-semibold leading-7 text-slate-900">
                  {feature.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* 2. Kısım: Kapanış Sözü / Hakkımızda Metni */}
        <div className="mx-auto mt-20 max-w-4xl text-center rounded-2xl bg-slate-50 p-8 md:p-12 border border-slate-100 shadow-sm">
          <p className="text-lg md:text-xl leading-relaxed text-slate-700 italic">
            1999 yılına dayanan sektör tecrübemiz ve yetkili servis formenliği uzmanlığımızla, 
            2011 yılından bu yana Bornova 3. Sanayi Sitesi&apos;nde tüm marka araçlar için profesyonel bakım ve onarım hizmeti sunuyoruz. 
            Şeffaf süreç yönetimi, dürüst işçilik ilkemiz ve rekabetçi fiyat politikamızla müşterilerimize en doğru çözümleri üretiyoruz.
          </p>
          <p className="mt-6 text-xl font-bold text-[rgb(190,55,45)]">
            &ldquo;Mutlu Oto ile aracınız daima güvenli ellerde.&rdquo;
          </p>
        </div>

      </div>
    </section>
  );
}
