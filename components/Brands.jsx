import Marquee from "react-fast-marquee";
import Image from "next/image";

const brands = [
  { name: "Mitsubishi", src: "/mitsubishi.png" },
  { name: "Hyundai", src: "/hyundai.png" },
  { name: "Honda", src: "/honda.png" },
  { name: "Nissan", src: "/nissan.png" },
  { name: "Mazda", src: "/mazda.png" },
  { name: "Toyota", src: "/toyota.png" },
  { name: "Kia", src: "/kia.png" },
];

export default function Brands() {
  return (
    <section className="bg-white py-6 overflow-hidden w-full">
      <Marquee
        speed={40}
        autoFill={true}
        gradient={true}
        gradientColor="white"
        gradientWidth={100}
      >
        {brands.map((brand, index) => (
          <div
            key={index}
            className="mx-6 md:mx-12 flex items-center justify-center"
          >
            <Image
              src={brand.src}
              alt={`${brand.name} Logosu`}
              width={90}
              height={45}
              className="object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
}