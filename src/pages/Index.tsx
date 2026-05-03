import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Gallery } from "@/components/sections/Gallery";
import { WhyUs } from "@/components/sections/WhyUs";
import { Testimonials } from "@/components/sections/Testimonials"; // الاستيراد الجديد
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
        {/* إضافة قسم آراء الزوار هنا لبناء الثقة قبل معلومات الاتصال */}
        <Testimonials /> 
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