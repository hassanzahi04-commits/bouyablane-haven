import { useI18n } from "@/i18n/I18nContext";
import room from "@/assets/room.jpg";
import table from "@/assets/table.jpg";
import adventure from "@/assets/adventure.jpg";
import { Home, UtensilsCrossed, Compass } from "lucide-react";

export function Services() {
  const { t } = useI18n();
  const items = [
    { img: room, icon: Home, t: "services.rooms" },
    { img: table, icon: UtensilsCrossed, t: "services.table" },
    { img: adventure, icon: Compass, t: "services.adventure" },
  ];
  return (
    <section id="services" className="py-24 lg:py-32 bg-gradient-cream pattern-zellige">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-semibold tracking-[0.3em] uppercase text-terracotta">
            {t("services.kicker")}
          </span>
          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-foreground text-balance">
            {t("services.title")}
          </h2>
          <p className="mt-4 text-foreground/70">{t("services.note")}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {items.map(({ img, icon: Icon, t: key }) => (
            <article
              key={key}
              className="group relative overflow-hidden rounded-3xl bg-card shadow-card hover:shadow-warm transition-all duration-500 hover:-translate-y-1"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={img}
                  alt=""
                  width={1280}
                  height={960}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-earth/95 via-earth/40 to-transparent" />
              <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-end text-earth-foreground">
                <div className="size-12 rounded-2xl bg-cream/20 backdrop-blur grid place-items-center mb-4 border border-cream/30">
                  <Icon className="size-5" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-2">{t(`${key}.title`)}</h3>
                <p className="text-cream/90 leading-relaxed text-sm lg:text-base">
                  {t(`${key}.desc`)}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
