import { BookOpen, Star } from "lucide-react";
import { useI18n } from "../../i18n/I18nContext"; // استيراد نظام الترجمة

export function QuranSection() {
  const { t } =useI18n (); // تفعيل دالة الترجمة

  return (
    <section id="quran" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="size-16 bg-olive/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <BookOpen className="size-8 text-olive" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground font-serif text-olive">
            {t('quran.title')}
          </h2>
          <p className="mt-4 text-muted-foreground">
            {t('quran.subtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-cream p-6 md:p-10 rounded-[3rem] border border-olive/20 shadow-sm">
            <div className="flex items-center gap-4 mb-8">
              <div className="size-12 bg-white rounded-full flex items-center justify-center shadow-inner">
                <Star className="size-6 text-olive" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">
                  {t('quran.playlistTitle')}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t('quran.reciterName')}
                </p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-lg bg-black">
              <iframe
                width="100%"
                height="300"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1570576942&color=%237c8a71&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=true"
              ></iframe>
            </div>
            
            <p className="text-center mt-6 text-xs text-muted-foreground italic">
              {t('quran.verse')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}