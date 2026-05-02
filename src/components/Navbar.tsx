import { useEffect, useState } from "react";
import { useI18n } from "@/i18n/I18nContext";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { LocalClock } from "./LocalClock";
import { Button } from "@/components/ui/button";
import { MessageCircle, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";
// استيراد المكون الجديد هنا
import { NavHashLink } from 'react-router-hash-link';

const NAV = [
  { href: "/#about", key: "nav.about" },
  { href: "/#services", key: "nav.services" },
  { href: "/#gallery", key: "nav.gallery" },
  { href: "/#why", key: "nav.why" },
  { href: "/#contact", key: "nav.weather" },
  { href: "/#music", key: "nav.music" },
  { href: "/#quran", key: "nav.quran" },
];

export function Navbar() {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/85 backdrop-blur-xl shadow-soft border-b border-border/60"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 lg:px-8 h-16 lg:h-20 flex items-center justify-between gap-4">
        {/* تغيير الرابط العلوي للعودة للأعلى بسلاسة */}
        <NavHashLink smooth to="/#top" className="flex items-center gap-2 group">
          <span className="size-12 lg:size-14 rounded-full bg-cream grid place-items-center shadow-card overflow-hidden ring-1 ring-border">
            <img src={logo} alt="Gîte Zahi Bouiblane" className="w-full h-full object-contain" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-bold text-foreground text-base lg:text-lg font-serif">مأوى زاهي بويبلان</span>
            <span className="text-[10px] tracking-widest uppercase text-muted-foreground">Gîte Zahi Bouiblane</span>
          </span>
        </NavHashLink>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((n) => (
            <NavHashLink
              smooth
              key={n.href}
              to={n.href}
              className="px-3 py-2 text-sm font-medium text-foreground/75 hover:text-olive transition-colors rounded-md"
            >
              {t(n.key)}
            </NavHashLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden xl:block">
            <LocalClock />
          </div>
          <LanguageSwitcher />
          <Button
            asChild
            size="sm"
            className="hidden sm:inline-flex bg-[#25D366] hover:bg-[#1ebe5b] text-white shadow-soft"
          >
            <a
              href="https://wa.me/212673552963"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="size-4" />
              {t("nav.book")}
            </a>
          </Button>
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="menu"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* قائمة الموبايل المعدلة */}
      {open && (
        <div className="lg:hidden bg-background/98 backdrop-blur-xl border-t border-border">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {NAV.map((n) => (
              <NavHashLink
                smooth
                key={n.href}
                to={n.href}
                onClick={() => setOpen(false)}
                className="px-3 py-3 rounded-md text-foreground/85 hover:bg-secondary/60"
              >
                {t(n.key)}
              </NavHashLink>
            ))}
            <div className="pt-2">
               <LocalClock />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
