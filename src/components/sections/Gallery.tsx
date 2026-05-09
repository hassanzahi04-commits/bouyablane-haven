import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Play, Image as ImageIcon } from "lucide-react";
import { useTranslation } from "react-i18next";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const Gallery = () => {
  const { t } = useTranslation();
  
  // جلب مصفوفة العناصر من ملف الترجمة (gallery.items)
  // t('gallery.items', { returnObjects: true }) تضمن جلب المصفوفة كبيانات وليس كنص
  const galleryItems = t('gallery.items', { returnObjects: true }) as Array<{
    type: string;
    url: string;
    thumb: string;
  }>;

  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });

  const openLightboxOnSlide = (number: number) => {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number,
    });
  };

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          {/* الكيكر (العنوان الصغير العلوي) */}
          <span className="text-secondary font-semibold tracking-wider uppercase text-sm mb-2 block">
            {t('gallery.kicker')}
          </span>
          {/* العنوان الرئيسي: دار الضيافة زاهي بويبلان */}
          <h2 className="text-4xl font-bold text-primary font-amiri mb-4">
            {t('gallery.title')}
          </h2>
          {/* الوصف المترجم الذي قمنا بتعديله */}
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {t('gallery.desc')}
          </p>
        </div>
        
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="pb-12"
        >
          {/* نستخدم هنا galleryItems القادمة من الترجمة */}
          {Array.isArray(galleryItems) && galleryItems.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className="relative group cursor-pointer overflow-hidden rounded-xl aspect-video shadow-md border-4 border-white transition-all hover:border-secondary"
                onClick={() => openLightboxOnSlide(index + 1)}
              >
                <img
                  src={item.thumb}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  {item.type === "video" ? (
                    <div className="bg-secondary p-3 rounded-full shadow-lg">
                      <Play className="text-white w-8 h-8 fill-white" />
                    </div>
                  ) : (
                    <div className="bg-white/20 p-3 rounded-full backdrop-blur-sm shadow-lg">
                      <ImageIcon className="text-white w-8 h-8" />
                    </div>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <FsLightbox
        toggler={lightboxController.toggler}
        sources={Array.isArray(galleryItems) ? galleryItems.map((item) => item.url) : []}
        slide={lightboxController.slide}
      />
    </section>
  );
};