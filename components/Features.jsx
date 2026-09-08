import { ShieldCheck, Wrench, Cpu, Clock } from "lucide-react";

const features = [
  {
    icon: Wrench,
    title: "Mitsubishi Uzmanlığı",
    description: "Özel servis tecrübemiz ve teknik donanımımızla aracınız için en doğru teşhis ve onarım.",
  },
  {
    icon: Cpu,
    title: "Bilgisayarlı Arıza Tespiti",
    description: "Son teknoloji arıza tespit cihazlarıyla elektronik ve mekanik sorunlara nokta atışı çözüm.",
  },
  {
    icon: ShieldCheck,
    title: "Garantili Yedek Parça",
    description: "Yalnızca orijinal ve güvenilir muadil parçalar kullanarak uzun ömürlü ve garantili bakım sunuyoruz.",
  },
  {
    icon: Clock,
    title: "Hızlı & Şeffaf Süreç",
    description: "Sürpriz masraflar olmadan, işlem öncesi bilgilendirme ve zamanında teslimat garantisi.",
  },
];

export default function Features() {
  return (
    <section id="hakkimizda" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Neden <span className="text-red-600">Mutlu Otomotiv</span>?
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Müşteri memnuniyeti odaklı, şeffaf ve kaliteli servis anlayışı.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-lg hover:border-slate-200 transition-all duration-300 flex flex-col items-start"
              >
                <div className="p-3 rounded-lg bg-red-50 text-red-600 mb-5">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
