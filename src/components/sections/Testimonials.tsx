import { Star, Quote } from "lucide-react";
import { useI18n } from "@/i18n/I18nContext";

const reviews = [
  {
    name: "ELASBIHANI Zakarya",
    image: "https://lh3.googleusercontent.com/a-/ALV-w17_rN8B3W_rN8B3W_rN8B3W", // استبدل بروابط الصور الحقيقية إذا توفرت
    text: "تجربة رائعة في منزل زاهي مع عائلته. ترحيب حار، ونظافة فائقة، ووجبات تقليدية وعضوية ممتازة. كما يوفر خدمات الإرشاد السياحي وتأجير المعدات للمشي لمسافات طويلة، وكل ذلك بأسعار معقولة.",
    rating: 5
  },
  {
    name: "David Whelchel",
    image: "https://ui-avatars.com/api/?name=David+Whelchel&background=0d9488&color=fff",
    text: "Basic comfortable accommodations, very hospitable host, beautiful location. Located a few hundred meters off the road. (إقامة مريحة وبسيطة، مضيف مضياف للغاية، موقع جميل).",
    rating: 5
  },
  {
    name: "Meziane Ayyoub",
    image: "https://ui-avatars.com/api/?name=Meziane+Ayyoub&background=be123c&color=fff",
    text: "استقبال رائع وحسن الضيافة في قلب جبال بويبلان.",
    rating: 5
  },
  {
    name: "Mohamed Guerboub",
    image: "https://ui-avatars.com/api/?name=Mohamed+Guerboub&background=fbbf24&color=fff",
    text: "مكان جميل جدًا، خدمة جيدة، أشخاص كرماء، مناظر طبيعية رائعة.",
    rating: 5
  }
];

export function Testimonials() {
  const { t } = useI18n();

  return (
    <section id="reviews" className="py-20 bg-stone-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-serif mb-4">
            ماذا يقول زوارنا
          </h2>
          <div className="h-1 w-20 bg-terracotta mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow relative group"
            >
              <Quote className="absolute top-4 right-4 size-8 text-stone-100 group-hover:text-terracotta/10 transition-colors" />
              
              <div className="flex items-center gap-3 mb-4">
                <div className="size-12 rounded-full overflow-hidden border-2 border-stone-50">
                  <img 
                    src={review.image} 
                    alt={review.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-foreground">{review.name}</h4>
                  <div className="flex gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="size-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-stone-600 text-sm leading-relaxed italic">
                "{review.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}