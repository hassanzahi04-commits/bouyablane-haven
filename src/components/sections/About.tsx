import { useI18n } from "@/i18n/I18nContext";

export function About() {
  const { t } = useI18n();
  return (
    <section id="about" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-2 relative">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-warm">
            <img
              src="images/bouiblane-summit.jpg"
              alt="قمة جبل بويبلان - دار الضيافة زاهي"
              width={1280}
              height={960}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -end-6 lg:-end-10 w-32 lg:w-44 aspect-square rounded-2xl bg-gradient-warm shadow-warm grid place-items-center text-primary-foreground p-6">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold">3192m</div>
              <div className="text-xs uppercase tracking-widest opacity-90 mt-1">altitude</div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3 space-y-6">
          <span className="text-sm font-semibold tracking-[0.3em] uppercase text-terracotta">
            {t("about.kicker")}
          </span>
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground text-balance leading-tight">
            {t("about.title")}
          </h2>
          <div className="h-px w-24 bg-gradient-to-r from-olive to-transparent" />
          <p className="text-foreground/80 leading-loose text-base lg:text-lg">{t("about.p1")}</p>
          <p className="text-foreground/75 leading-loose">{t("about.p2")}</p>
          <p className="text-foreground/75 leading-loose">{t("about.p3")}</p>
        </div>
      </div>
    </section>
  );
}