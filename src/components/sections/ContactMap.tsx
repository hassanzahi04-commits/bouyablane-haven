import { MapPin, Phone, Mail, CloudSun, Navigation } from "lucide-react";
import { useI18n } from "@/i18n/I18nContext";

export function ContactMap() {
  const { t } = useI18n();
  // رابط المشاركة المباشر للمأوى على خرائط جوجل
  const googleMapsUrl = "https://maps.app.goo.gl/3wG2UuD9S3EwG8zY9"; 

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="size-16 bg-olive/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <MapPin className="size-8 text-olive" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground font-serif">
            {t("contact.title") || "موقعنا في قلب بويبلان"}
          </h2>
          <p className="mt-4 text-muted-foreground italic">
             {t("contact.address_full") || "دوار تامطروشت، جبل بويبلان - وجهتكم للهدوء والطبيعة الخام"}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start max-w-6xl mx-auto">
          {/* خريطة جوجل المباشرة للمأوى */}
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="flex items-center gap-2 font-bold text-lg text-olive">
                <MapPin className="size-5" /> {t("contact.map_label") || "موقع المأوى على الخريطة"}
              </h3>
              <a 
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs bg-olive text-white px-3 py-1 rounded-full flex items-center gap-1 hover:bg-olive/90 transition-all"
              >
                <Navigation className="size-3" /> {t("contact.directions") || "توجيهات الطريق"}
              </a>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-xl h-[400px] border border-border bg-muted">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.1841871044276!2d-4.0763428!3d33.781741499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd9e5fd7862cffe9%3A0x29c0cfe32fd53d03!2z2K_Yp9ixINin2YTYttmK2KfZgdipINiy2KfZh9mKIEfDrnRlIEF1YmVyZ2UgemFoaQ!5e0!3m2!1sar!2sma!4v1777470853398!5m2!1sar!2sma"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* خريطة الطقس الحية - Windy */}
          <div className="space-y-4">
            <h3 className="flex items-center gap-2 font-bold text-lg text-olive mb-2">
              <CloudSun className="size-5" /> {t("contact.weather_label") || "حالة الطقس في بويبلان"}
            </h3>
            <div className="rounded-3xl overflow-hidden shadow-xl h-[400px] border border-border bg-muted">
              <iframe 
                src="https://embed.windy.com/embed2.html?lat=33.782&lon=-4.076&detailLat=33.782&detailLon=-4.076&width=650&height=450&zoom=8&level=surface&overlay=temp&product=ecmwf&menu=&message=&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=km%2Fh&metricTemp=%C2%B0C&radarRange=-1"
                width="100%" 
                height="100%" 
                frameBorder="0"
                title="Weather in Bouiblane"
              ></iframe>
            </div>
          </div>
        </div>

        {/* بطاقات التواصل السريع */}
        <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-6xl mx-auto">
          <div className="bg-gradient-cream p-6 rounded-2xl border border-olive/10 flex items-center gap-4">
            <div className="size-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
              <Phone className="size-5 text-olive" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">{t("contact.call_us") || "اتصل بنا"}</p>
              <a href="tel:0673552963" className="font-bold text-foreground hover:text-olive transition-colors" dir="ltr">
                0673552963
              </a>
            </div>
          </div>
          
          <div className="bg-gradient-cream p-6 rounded-2xl border border-olive/10 flex items-center gap-4">
            <div className="size-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
              <Mail className="size-5 text-olive" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">{t("contact.email_label") || "البريد الإلكتروني"}</p>
              <a 
                href="mailto:aubergezahi@gmail.com" 
                className="font-bold text-sm text-foreground hover:text-olive transition-colors break-all"
              >
                aubergezahi@gmail.com
              </a>
            </div>
          </div>

          <a 
            href={googleMapsUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-gradient-cream p-6 rounded-2xl border border-olive/10 flex items-center gap-4 hover:shadow-md transition-shadow cursor-pointer"
          >
            <div className="size-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
              <MapPin className="size-5 text-olive" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">{t("contact.address_label") || "العنوان (انقر للخرائط)"}</p>
              <p className="font-bold text-foreground text-sm">{t("contact.location") || "دوار تامطروشت، جبل بويبلان"}</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}