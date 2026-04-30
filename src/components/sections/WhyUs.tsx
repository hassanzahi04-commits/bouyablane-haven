import { useI18n } from "@/i18n/I18nContext";
import { MapPin, Users, ChefHat, Snowflake, Leaf } from "lucide-react";

const ICONS = [MapPin, Users, ChefHat, Snowflake, Leaf];

export function WhyUs() {
  const { t } = useI18n();
  return (
    <section id="why" className="py-24 lg:py-32 bg-earth text-earth-foreground relative overflow-hidden">
      <div className="absolute inset-0 pattern-zellige opacity-30" />
      <div className="absolute -top-40 -end-40 w-96 h-96 rounded-full bg-terracotta/20 blur-3xl" />
      <div className="absolute -bottom-40 -start-40 w-96 h-96 rounded-full bg-olive/30 blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="max-w-3xl mb-16">
          <span className="text-sm font-semibold tracking-[0.3em] uppercase text-cream/80">
            {t("why.kicker")}
          </span>
          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-balance">{t("why.title")}</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5].map((i) => {
            const Icon = ICONS[i - 1];
            return (
              <div
                key={i}
                className="group p-6 lg:p-8 rounded-3xl bg-cream/5 backdrop-blur border border-cream/10 hover:bg-cream/10 transition-all hover:-translate-y-1"
              >
                <div className="size-14 rounded-2xl bg-gradient-sunset grid place-items-center mb-5 shadow-soft group-hover:scale-110 transition-transform">
                  <Icon className="size-6 text-earth" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold mb-2">{t(`why.${i}.title`)}</h3>
                <p className="text-cream/75 leading-relaxed text-sm lg:text-base">
                  {t(`why.${i}.desc`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
