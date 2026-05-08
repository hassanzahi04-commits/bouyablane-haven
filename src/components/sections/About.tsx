import { useI18n } from "../../i18n/I18nContext";
import { Mountain } from "lucide-react"; // استيراد الأيقونة

export const About = () => {
  const { t } = useI18n();

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            {/* إعادة عبارة من نحن */}
            <span className="text-primary font-bold tracking-wider uppercase mb-2 block">
              {t('about.kicker')}
            </span>
            
            <h2 className="text-4xl font-bold mb-6">{t('about.title')}</h2>
            
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>{t('about.p1')}</p>
              <p>{t('about.p2')}</p>
              <p>{t('about.p3')}</p>
            </div>

            {/* إعادة أيقونة الجبل والارتفاع */}
            <div className="mt-8 flex items-center gap-4 text-primary">
              <Mountain className="w-8 h-8" />
              <span className="text-2xl font-bold">3192m</span>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-xl">
             <img src="/bouiblane-summit.jpg" alt={t('hero.imageAlt')} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};