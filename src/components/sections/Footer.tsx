import { useI18n } from "@/i18n/I18nContext";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Facebook, Instagram, Mountain } from "lucide-react";
import logo from "@/assets/logo.png";

export function BookCTA() {
  const { t } = useI18n();
  return (
    <section className="py-24 lg:py-32 bg-gradient-warm text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 pattern-zellige opacity-20" />
      <div className="container mx-auto px-4 lg:px-8 relative text-center max-w-3xl">
        <Mountain className="size-12 mx-auto mb-6 opacity-90" />
        <h2 className="text-4xl lg:text-6xl font-bold text-balance">
          {t("book.title")}
        </h2>
        <p className="mt-6 text-cream/90 text-lg lg:text-xl">
          {t("book.desc")}
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-[#25D366] hover:bg-[#1ebe5b] text-white shadow-warm h-14 px-8 text-base"
          >
            <a href="https://wa.me/212673552963" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="size-5" />
              {t("book.cta")}
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="h-14 px-8 text-base bg-transparent border-cream/40 text-cream hover:bg-cream hover:text-earth"
          >
            <a href="tel:+212673552963">
              <Phone className="size-5" />
              0673 55 29 63
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const { t } = useI18n();
  
  const socials = [
    { icon: Facebook, href: "https://www.facebook.com/share/18X96gZgQ9/", label: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com/gite.zahi.bouyablane?igsh=MTQ4dzczZDhhd2JsMQ==", label: "Instagram" },
    { icon: Instagram, href: "https://www.instagram.com/zahi_bouyblane?igsh=czRwN2t1ODQ1ZHgw", label: "Instagram" },
  ];

  return (
    <footer className="bg-olive-deep text-cream/90 py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          {/* قسم الشعار والهوية */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="size-14 rounded-full bg-white/90 p-1 grid place-items-center overflow-hidden shadow-sm">
                <img src={logo} alt="Dar Al Diyafa Zahi" className="w-full h-full object-contain" />
              </span>
              <span className="font-bold text-xl font-amiri tracking-wide">
                {t("footer.brandName") || "دار الضيافة زاهي"}
              </span>
            </div>
            <p className="text-cream/70 text-sm leading-relaxed max-w-xs italic">
              {t("footer.tagline") || "أصالة الضيافة في قلب جبال بويبلان"}
            </p>
          </div>

          {/* روابط التواصل الاجتماعي */}
          <div>
            <h4 className="font-semibold mb-6 text-cream text-lg">{t("footer.follow")}</h4>
            <div className="flex gap-4">
              {socials.map((s, idx) => (
                <a
                  key={idx}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="size-12 rounded-2xl bg-cream/5 border border-cream/10 hover:bg-terracotta hover:text-earth grid place-items-center transition-all duration-300 hover:-translate-y-1"
                >
                  <s.icon className="size-5" />
                </a>
              ))}
            </div>
          </div>

          {/* معلومات التواصل السريع */}
          <div>
            <h4 className="font-semibold mb-6 text-cream text-lg">{t("nav.book")}</h4>
            <div className="space-y-4">
              <a
                href="https://wa.me/212673552963"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-cream/80 hover:text-secondary transition-colors"
              >
                <MessageCircle className="size-5 text-secondary" /> 
                <span dir="ltr">0673 55 29 63</span>
              </a>
              <p className="text-cream/60 text-sm">
                {t("footer.location") || "تازة، جبل بويبلان، المغرب"}
              </p>
            </div>
          </div>
        </div>

        {/* حقوق النشر */}
        <div className="mt-16 pt-8 border-t border-cream/10 text-center text-sm text-cream/50">
          <p>
            © {new Date().getFullYear()} {t("footer.brandName")} · {t("footer.rights")}
          </p>
          <p className="mt-2 text-xs opacity-60">
            Bouiblane, Taza, Morocco
          </p>
        </div>
      </div>
    </footer>
  );
}

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/212673552963"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-6 right-6 z-50 size-14 lg:size-16 rounded-full bg-[#25D366] hover:bg-[#1ebe5b] shadow-2xl grid place-items-center text-white transition-all duration-300 hover:scale-110 active:scale-95 animate-in fade-in zoom-in duration-500"
    >
      <MessageCircle className="size-7 lg:size-8" />
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
    </a>
  );
}