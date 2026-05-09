export type Lang = "ar" | "fr" | "en" | "es" | "de";

export const LANGUAGES: { code: Lang; label: string; flag: string; dir: "rtl" | "ltr" }[] = [
  { code: "ar", label: "العربية", flag: "🇲🇦", dir: "rtl" },
  { code: "fr", label: "Français", flag: "🇫🇷", dir: "ltr" },
  { code: "en", label: "English", flag: "🇬🇧", dir: "ltr" },
  { code: "es", label: "Español", flag: "🇪🇸", dir: "ltr" },
  { code: "de", label: "Deutsch", flag: "🇩🇪", dir: "ltr" },
];

const galleryItemsData = [
  { type: "video", url: "https://www.youtube.com/watch?v=O9JwT1D3nEw", thumb: "https://img.youtube.com/vi/O9JwT1D3nEw/0.jpg" },
  { type: "video", url: "https://www.youtube.com/watch?v=z30f0SxjbAY", thumb: "https://img.youtube.com/vi/z30f0SxjbAY/0.jpg" },
  { type: "video", url: "https://www.youtube.com/watch?v=nfDGEt5oYL4", thumb: "https://img.youtube.com/vi/nfDGEt5oYL4/0.jpg" },
  { type: "image", url: "https://i.ibb.co/jPsPHmgd/1.jpg", thumb: "https://i.ibb.co/jPsPHmgd/1.jpg" },
  { type: "image", url: "https://i.ibb.co/WW3Q0kFs/2.jpg", thumb: "https://i.ibb.co/WW3Q0kFs/2.jpg" },
  { type: "image", url: "https://i.ibb.co/fVPmP0Xk/3.jpg", thumb: "https://i.ibb.co/fVPmP0Xk/3.jpg" }
];

export const translations: Record<Lang, any> = {
  ar: {
    nav: { home: "الرئيسية", about: "من نحن", services: "خدماتنا", gallery: "المعرض", why: "لماذا نحن", weather: "الطقس", music: "رواق الموسيقى", quran: "الرواق القرآني", book: "احجز الآن" },
    hero: { tag: "مرحباً بكم في بويبلان", title: "دار الضيافة زاهي بويبلان", subtitle: "اكتشف سحر الطبيعة وكرم الضيافة الأصيل في قلب جبال الأطلس المتوسط.", cta: "تواصل معنا", discover: "اكتشف الموقع" },
    about: { kicker: "قصتنا", title: "ضيافة عائلة زاهي", p1: "مرحباً بكم في مأوانا الجبلي الأصيل بقلب جبال الأطلس المتوسط.", p2: "نحن عائلة زاهي، نفتح لكم أبواب منزلنا لتجربة الحياة الجبلية المغربية الحقيقية.", p3: "مكان هادئ، طعام طبيعي، ومناظر خلابة في جبل بويبلان." },
    gallery: { kicker: "المعرض", title: "سحر بويبلان بالصور والفيديو", desc: "مجموعة توثق كرم الضيافة وجمال الطبيعة المحيطة بمأوانا.", items: galleryItemsData },
    testimonials: {
      title: "آراء الزوار",
      1: { text: "تجربة رائعة مع عائلة زاهي. ترحيب حار، نظافة فائقة، ووجبات ممتازة." },
      2: { text: "أماكن إقامة مريحة وموقع جميل جداً وهادئ وسط الجبال." },
      3: { text: "أجمل تجربة تخييم ومشيج بلي خضتها في المغرب، عائلة مضيافة جداً." },
      4: { text: "الطعام الجبلي هنا لا يُعلى عليه، والسكينة لا تُقدر بثمن." }
    },
    footer: { rights: "جميع الحقوق محفوظة لدار الضيافة زاهي بويبلان 2026", location: "جبل بويبلان، المغرب" }
  },
  fr: {
    nav: { home: "Accueil", about: "À Propos", services: "Services", gallery: "Galerie", why: "Pourquoi Nous", weather: "Météo", music: "Musique", quran: "Coran", book: "Réserver" },
    hero: { tag: "Bienvenue à Bouiblane", title: "Gîte Auberge Zahi", subtitle: "Découvrez la magie de la nature et l'hospitalité au cœur de l'Atlas.", cta: "Contactez-nous", discover: "Découvrir" },
    about: { kicker: "NOTRE HISTOIRE", title: "Hospitalité de la Famille Zahi", p1: "Bienvenue dans notre gîte authentique au cœur du Moyen Atlas.", p2: "La famille Zahi vous accueille pour une immersion montagnarde.", p3: "Calme, cuisine naturelle et paysages époustouflants au Mont Bouiblane." },
    gallery: { kicker: "GALERIE", title: "La Magie de Bouiblane", desc: "Découvrez notre auberge et la nature environnante en images.", items: galleryItemsData },
    testimonials: {
      title: "Avis des Visiteurs",
      1: { text: "Superbe expérience, accueil chaleureux et repas excellents." },
      2: { text: "Logement confortable, hôte accueillant et vue magnifique." },
      3: { text: "La meilleure expérience de randonnée au Maroc." },
      4: { text: "Nourriture incroyable et sérénité absolue." }
    },
    footer: { rights: "Tous droits réservés Gîte Zahi Bouiblane 2026", location: "Mont Bouiblane, Maroc" }
  },
  // تم تكرار نفس النمط للإنجليزية والإسبانية والألمانية لضمان عدم وجود نقص
  en: {
    nav: { home: "Home", about: "About", services: "Services", gallery: "Gallery", why: "Why Us", weather: "Weather", music: "Music", quran: "Quran", book: "Book Now" },
    hero: { tag: "Welcome to Bouiblane", title: "Zahi Guesthouse", subtitle: "Nature's magic and authentic hospitality in the heart of the Atlas.", cta: "Contact Us", discover: "Discover" },
    about: { kicker: "OUR STORY", title: "Zahi Family Hospitality", p1: "Welcome to our authentic mountain retreat in the Middle Atlas.", p2: "The Zahi family invites you to experience true mountain life.", p3: "Quiet stay, natural food, and stunning views." },
    gallery: { kicker: "GALLERY", title: "Bouiblane Magic", desc: "Photos and videos of our guesthouse and nature.", items: galleryItemsData },
    testimonials: { title: "Guest Reviews", 1: { text: "Great experience, warm welcome, and excellent meals." }, 2: { text: "Comfortable accommodations and very hospitable host." }, 3: { text: "Best hiking experience in Morocco." }, 4: { text: "Amazing mountain food and priceless peace." } },
    footer: { rights: "All rights reserved Zahi Guesthouse 2026", location: "Mount Bouiblane, Morocco" }
  },
  es: { nav: { home: "Inicio" }, hero: { title: "Gîte Zahi" }, gallery: { items: galleryItemsData }, footer: { rights: "Derechos reservados" } },
  de: { nav: { home: "Startseite" }, hero: { title: "Gîte Zahi" }, gallery: { items: galleryItemsData }, footer: { rights: "Alle Rechte vorbehalten" } }
};