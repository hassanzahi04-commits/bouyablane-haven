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
        <h2 className="text-4xl lg:text-6xl font-bold text-balance">{t("book.title")}</h2>
        <p className="mt-6 text-cream/90 text-lg lg:text-xl">{t("book.desc")}</p>
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
    { icon: Instagram, href: "https://www.instagram.com/gite.zahi.bouyablane?igsh=MTQ4dzczZDhhd2JsMQ==", label: "Instagram 1" },
    { icon: Instagram, href: "https://www.instagram.com/zahi_bouyblane?igsh=czRwN2t1ODQ1ZHgw", label: "Instagram 2" },
  ];
  return (
    <footer className="bg-olive-deep text-cream/90 py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="size-12 rounded-full bg-cream grid place-items-center overflow-hidden">
                <img src={logo} alt="Gîte Zahi Bouiblane" className="w-full h-full object-contain" />
              </span>
              <span className="font-bold text-lg">مأوى زاهي بويبلان</span>
            </div>
            <p className="text-cream/70 text-sm leading-relaxed">{t("footer.tag")}</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-cream">{t("footer.follow")}</h4>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="size-11 rounded-xl bg-cream/10 hover:bg-terracotta hover:text-earth grid place-items-center transition-colors"
                >
                  <s.icon className="size-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-cream">{t("nav.book")}</h4>
            <a
              href="https://wa.me/212673552963"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-cream/80 hover:text-cream"
            >
              <MessageCircle className="size-4" /> 0673 55 29 63
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-cream/10 text-center text-xs text-cream/60">
          © {new Date().getFullYear()} Gîte Zahi Bouyablane · {t("footer.rights")}
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
      className="fixed bottom-6 end-6 z-40 size-14 lg:size-16 rounded-full bg-[#25D366] hover:bg-[#1ebe5b] shadow-warm grid place-items-center text-white transition-transform hover:scale-110 animate-float-slow"
    >
      <MessageCircle className="size-6 lg:size-7" />
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
    </a>
  );
}
