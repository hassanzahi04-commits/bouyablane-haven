import { useState } from "react";
import { useI18n } from "@/i18n/I18nContext";
import FsLightbox from "fslightbox-react";

// استيراد Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// استيراد تنسيقات Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [
  "https://i.ibb.co/jPsPHmgd/1.jpg", "https://i.ibb.co/WW3Q0kFs/2.jpg",
  "https://i.ibb.co/wZ3LsC2G/3.jpg", "https://i.ibb.co/nNt5HnZc/4.jpg",
  "https://i.ibb.co/NgXLwbmt/5.jpg", "https://i.ibb.co/s9yXFQYX/6.jpg",
  "https://i.ibb.co/nsDHXPgS/7.jpg", "https://i.ibb.co/xSD2dbDG/8.jpg",
  "https://i.ibb.co/snz66yy/9.jpg", "https://i.ibb.co/rGWFK5m7/10.jpg",
  "https://i.ibb.co/9HxYn0Np/11.jpg", "https://i.ibb.co/1GJ49C05/12.jpg",
  "https://i.ibb.co/VpBbQVh1/13.jpg", "https://i.ibb.co/sJMGNQYP/14.jpg",
  "https://i.ibb.co/B2RvjXhY/15.jpg", "https://i.ibb.co/GftsVhQt/16.jpg",
  "https://i.ibb.co/NngzTNJ0/17.jpg", "https://i.ibb.co/3545drCK/18.jpg",
  "https://i.ibb.co/gZGp6wcR/20.jpg", "https://i.ibb.co/3yJLT2bX/21.jpg",
  "https://i.ibb.co/7tbVFDX4/22.jpg", "https://i.ibb.co/5xsr4rGf/24.jpg",
  "https://i.ibb.co/CK80bs5G/26.jpg", "https://i.ibb.co/DDxVT3sz/27.jpg",
  "https://i.ibb.co/PGvbP65y/28.jpg", "https://i.ibb.co/MkfBfJSR/29.jpg",
  "https://i.ibb.co/Rkjs9JNq/30.jpg", "https://i.ibb.co/BKQTJG6f/31.jpg",
  "https://i.ibb.co/0ysLcQBX/32.jpg", "https://i.ibb.co/Zz2xKHG3/33.jpg",
  "https://i.ibb.co/ymrwj50p/34.jpg", "https://i.ibb.co/ZppDwwLF/35.jpg",
  "https://i.ibb.co/Z6zXCfmS/36.jpg", "https://i.ibb.co/bgcbXcRj/37.jpg",
  "https://i.ibb.co/5xhcqkyp/38.jpg", "https://i.ibb.co/Nds0W4Hg/39.jpg",
  "https://i.ibb.co/V0QhL1BD/40.jpg", "https://i.ibb.co/RkJDtr4X/41.jpg",
  "https://i.ibb.co/Lz6Wtgpq/42.jpg", "https://i.ibb.co/XfnjYmN3/43.jpg",
  "https://i.ibb.co/Swmh93Kq/44.jpg", "https://i.ibb.co/WW5Fg6Kp/45.jpg",
  "https://i.ibb.co/HL2ypX6p/46.jpg", "https://i.ibb.co/4nLMjg5x/47.jpg",
  "https://i.ibb.co/CKZvS5YP/48.jpg", "https://i.ibb.co/RGzy9Y0M/49.jpg",
  "https://i.ibb.co/LdW4tyfR/50.jpg", "https://i.ibb.co/FbzTsgc6/446.jpg",
  "https://i.ibb.co/wFXgHr4C/FB-IMG-1776092006170.jpg",
  "https://i.ibb.co/35zgN1ZV/FB-IMG-1776092170683.jpg",
  "https://i.ibb.co/Wvrz0YtZ/FB-IMG-1776092208356.jpg",
  "https://i.ibb.co/LDy0jqfd/FB-IMG-1776092341899.jpg",
  "https://i.ibb.co/23D0Tggc/FB-IMG-1776092353595.jpg",
  "https://i.ibb.co/kVtBghjd/FB-IMG-1776093814427.jpg",
  "https://i.ibb.co/Z6tGzFNH/4.jpg", "https://i.ibb.co/bjCsJs6b/1.jpg",
  "https://i.ibb.co/zV53Cxkd/jp2.jpg", "https://i.ibb.co/RTyL94c4/image.jpg",
  "https://i.ibb.co/YBKHmnKH/3.jpg", "https://i.ibb.co/7tw0K78N/5.jpg",
  "https://i.ibb.co/prKwLfbs/6.jpg", "https://i.ibb.co/8DbN6h78/7.jpg",
  "https://i.ibb.co/zW86jkDM/8.jpg", "https://i.ibb.co/JRYW1Prx/9.jpg"
];

export function Gallery() {
  const { t } = useI18n();
  const [toggler, setToggler] = useState(false);
  const [sourceIndex, setSourceIndex] = useState(0);

  function openLightboxOnSource(index: number) {
    setSourceIndex(index);
    setToggler(!toggler);
  }

  return (
    <section id="gallery" className="py-16 bg-stone-50 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* العناوين */}
        <div className="max-w-3xl mb-10 mx-auto text-center">
          <span className="text-xs font-semibold tracking-widest uppercase text-terracotta">
            {t("gallery.kicker")}
          </span>
          <h2 className="mt-3 text-3xl font-bold text-foreground font-serif">
            {t("gallery.title")}
          </h2>
          <p className="mt-3 text-sm text-foreground/70 leading-relaxed">
            {t("gallery.desc")}
          </p>
        </div>

        {/* معرض الصور المتنقل (Swiper) */}
        <div className="relative group max-w-5xl mx-auto">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={15}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="rounded-2xl shadow-xl overflow-hidden pb-12"
          >
            {images.map((url, i) => (
              <SwiperSlide key={i}>
                <div 
                  className="relative overflow-hidden rounded-xl aspect-[4/5] cursor-pointer bg-stone-200 group/item"
                  onClick={() => openLightboxOnSource(i)}
                >
                  <img
                    src={url}
                    alt={`Gîte Zahi Bouiblane ${i + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/item:scale-110"
                  />
                  {/* طبقة التظليل عند التمرير */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/item:opacity-100 transition-opacity flex items-center justify-center">
                     <span className="text-white text-xs bg-black/50 px-3 py-2 rounded-full backdrop-blur-md border border-white/20">
                       {t("common.view") || "مشاهدة بملء الشاشة"}
                     </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* نافذة التكبير عند الضغط */}
      <FsLightbox
        toggler={toggler}
        sources={images}
        sourceIndex={sourceIndex}
      />

      {/* تنسيقات مخصصة لأسهم Swiper لتناسب ألوان مأوى زاهي */}
      <style>{`
        .swiper-button-next, .swiper-button-prev {
          color: #7c8a71 !important;
          background: rgba(255, 255, 255, 0.8);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          backdrop-filter: blur(4px);
        }
        .swiper-button-next:after, .swiper-button-prev:after {
          font-size: 18px !important;
          font-weight: bold;
        }
        .swiper-pagination-bullet-active {
          background: #7c8a71 !important;
        }
      `}</style>
    </section>
  );
}