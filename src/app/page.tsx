import Navbar from "@/components/landing/gooddeal/Navbar";
import Hero from "@/components/landing/gooddeal/Hero";
import Listings from "@/components/landing/gooddeal/Listings";
import HowItWorks from "@/components/landing/gooddeal/HowItWorks";
import WhyUs from "@/components/landing/gooddeal/WhyUs";
import Testimonials from "@/components/landing/gooddeal/Testimonials";
import CTA from "@/components/landing/gooddeal/CTA";
import Footer from "@/components/landing/gooddeal/Footer";

export default function Home() {
  return (
    <div className="overflow-x-hidden bg-white text-[#111827]">
      <Navbar />
      <main className="flex flex-col">
        <Hero
          title="Compre e Venda Produtos Usados com Facilidade"
          subtitle="Milhares de anúncios de bikes, eletrônicos, esportes e muito mais. Direto de pessoa para pessoa, com total segurança."
        />
        <Listings cardRadius={14} />
        <HowItWorks />
        <WhyUs />
        <Testimonials />
        <CTA ctaLabel="Publicar Anúncio Grátis" />
      </main>
      <Footer />
    </div>
  );
}
