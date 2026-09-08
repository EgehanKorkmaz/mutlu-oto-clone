import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Services from "@/components/Services";
// İleride eklenecek bileşenler:
// import Brands from "@/components/Brands";
// import Gallery from "@/components/Gallery";
// import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <Services />
        {/* <Brands /> */}
        {/* <Gallery /> */}
      </main>
      {/* <Footer /> */}
    </div>
  );
}
