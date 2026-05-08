import { useI18n } from "../../i18n/I18nContext";
import { Mountain } from "lucide-react"; 

export const About = () => {
  const { t } = useI18n();

  return (
    <section id="about" className="py-20 bg-white/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* محتوى النص */}
          <div className="order-2 md:order-1">
            <span className="text-primary font-bold tracking-wider uppercase mb-2 block">
              {t('about.kicker')}
            </span>
            
            <h2 className="text-4xl font-bold mb-6 text-slate-800">
              {t('about.title')}
            </h2>
            
            <div className="space-y-4 text-lg text-muted-foreground text-justify leading-relaxed">
              <p>{t('about.p1')}</p>
              <p>{t('about.p2')}</p>
              <p>{t('about.p3')}</p>
            </div>

            {/* بطاقة الارتفاع المنسقة */}
            <div className="mt-8 inline-flex items-center gap-4 bg-slate-50 border border-slate-100 p-4 rounded-2xl shadow-sm">
              <div className="bg-primary/10 p-3 rounded-xl">
                <Mountain className="w-8 h-8 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Altitude</p>
                <p className="text-2xl font-bold text-slate-800">3192m</p>
              </div>
            </div>
          </div>

          {/* الصورة الجانبية - تم إصلاح المسار هنا */}
          <div className="order-1 md:order-2 rounded-2xl overflow-hidden shadow-2xl border-8 border-white group">
             <img 
              src="/GiteAubergeZahiBouiblane/images/bouiblane-summit.jpg"
               alt="Bouiblane Mountain Summit" 
               className="w-full h-[300px] md:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700" 
             />
          </div>

        </div>
      </div>
    </section>
  );
};