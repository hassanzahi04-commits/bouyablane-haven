import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Gallery } from "@/components/sections/Gallery";
import { WhyUs } from "@/components/sections/WhyUs";
import { ContactMap } from "@/components/sections/ContactMap";
import { MusicSection } from "@/components/sections/MusicSection";
import { QuranSection } from "@/components/sections/QuranSection";
import { BookCTA, Footer, WhatsAppFloat } from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <WhyUs />
        <ContactMap />
        <MusicSection />
        <QuranSection />
        <BookCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
