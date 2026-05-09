import react, { useState } from "react";
import FsLightbox from "fslightbox-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Play, Image as ImageIcon } from "lucide-react";
import { useTranslation } from "react-i18next";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination"

// مصفوفة العناصر (فيديوهات وصور)
const galleryItems = [
  // --- الفيديوهات ---
  { type: "video", url: "https://www.youtube.com/watch?v=O9JwT1D3nEw", thumb: "https://img.youtube.com/vi/O9JwT1D3nEw/0.jpg" },
  { type: "video", url: "https://www.youtube.com/watch?v=z30f0SxjbAY", thumb: "https://img.youtube.com/vi/z30f0SxjbAY/0.jpg" },
  { type: "video", url: "https://www.youtube.com/watch?v=nfDGEt5oYL4", thumb: "https://img.youtube.com/vi/nfDGEt5oYL4/0.jpg" },
  { type: "video", url: "https://www.youtube.com/watch?v=ymutPtM-XsM", thumb: "https://img.youtube.com/vi/ymutPtM-XsM/0.jpg" },
  { type: "video", url: "https://www.youtube.com/watch?v=AB8pEFDPGQw", thumb: "https://img.youtube.com/vi/AB8pEFDPGQw/0.jpg" },
  { type: "video", url: "https://www.youtube.com/watch?v=9HEOJyV-T8Y", thumb: "https://img.youtube.com/vi/9HEOJyV-T8Y/0.jpg" },
  { type: "video", url: "https://www.youtube.com/watch?v=dx3V_A919Ck", thumb: "https://img.youtube.com/vi/dx3V_A919Ck/0.jpg" },
  { type: "video", url: "https://www.youtube.com/watch?v=OtWRlvwQ17Y", thumb: "https://img.youtube.com/vi/OtWRlvwQ17Y/0.jpg" },
  { type: "video", url: "https://www.youtube.com/watch?v=fiC56y5Iu8o", thumb: "https://img.youtube.com/vi/fiC56y5Iu8o/0.jpg" },
  { type: "video", url: "https://www.youtube.com/watch?v=T-rjdMPsXN8", thumb: "https://img.youtube.com/vi/T-rjdMPsXN8/0.jpg" },
  { type: "video", url: "https://www.youtube.com/watch?v=pY8rcZUkVzk", thumb: "https://img.youtube.com/vi/pY8rcZUkVzk/0.jpg" },
  { type: "video", url: "https://www.youtube.com/watch?v=7txF4u8WdI0", thumb: "https://img.youtube.com/vi/7txF4u8WdI0/0.jpg" },
  { type: "video", url: "https://www.youtube.com/watch?v=0KitPyS7WpI", thumb: "https://img.youtube.com/vi/0KitPyS7WpI/0.jpg" },
  { type: "video", url: "https://www.youtube.com/watch?v=Yg7HgVf9nEQ", thumb: "https://img.youtube.com/vi/Yg7HgVf9nEQ/0.jpg" },
  { type: "video", url: "https://www.youtube.com/watch?v=kIe1o0EOdDE", thumb: "https://img.youtube.com/vi/kIe1o0EOdDE/0.jpg" },
  { type: "video", url: "https://www.youtube.com/watch?v=z-fl0RNGP80", thumb: "https://img.youtube.com/vi/z-fl0RNGP80/0.jpg" },
  { type: "video", url: "https://www.youtube.com/watch?v=99QvQqicFI4", thumb: "https://img.youtube.com/vi/99QvQqicFI4/0.jpg" },
  { type: "video", url: "https://www.youtube.com/watch?v=ZTt1B-KmBm0", thumb: "https://img.youtube.com/vi/ZTt1B-KmBm0/0.jpg" },
  { type: "video", url: "https://www.youtube.com/watch?v=V9jte7veWJQ", thumb: "https://img.youtube.com/vi/V9jte7veWJQ/0.jpg" },
  { type: "video", url: "https://www.youtube.com/watch?v=Lmn_l1AjBDY", thumb: "https://img.youtube.com/vi/Lmn_l1AjBDY/0.jpg" },
  { type: "video", url: "https://www.youtube.com/watch?v=9lRHYG_6CTQ", thumb: "https://img.youtube.com/vi/9lRHYG_6CTQ/0.jpg" },
  { type: "video", url: "https://www.youtube.com/watch?v=pONcfndAafg", thumb: "https://img.youtube.com/vi/pONcfndAafg/0.jpg" },
  { type: "video", url: "https://www.youtube.com/watch?v=UUKxeWhkvJA", thumb: "https://img.youtube.com/vi/UUKxeWhkvJA/0.jpg" },
  { type: "video", url: "https://www.youtube.com/watch?v=u3cAJqwQjoQ", thumb: "https://img.youtube.com/vi/u3cAJqwQjoQ/0.jpg" },
  { type: "video", url: "https://www.youtube.com/watch?v=9hvY_tg9zj4", thumb: "https://img.youtube.com/vi/9hvY_tg9zj4/0.jpg" },
  { type: "video", url: "https://www.youtube.com/watch?v=wQHOMqyhnHc", thumb: "https://img.youtube.com/vi/wQHOMqyhnHc/0.jpg" },

  // --- الصور ---
  { type: "image", url: "https://i.ibb.co/jPsPHmgd/1.jpg", thumb: "https://i.ibb.co/jPsPHmgd/1.jpg" },
  { type: "image", url: "https://i.ibb.co/WW3Q0kFs/2.jpg", thumb: "https://i.ibb.co/WW3Q0kFs/2.jpg" },
  { type: "image", url: "https://i.ibb.co/wZ3LsC2G/3.jpg", thumb: "https://i.ibb.co/wZ3LsC2G/3.jpg" },
  { type: "image", url: "https://i.ibb.co/nNt5HnZc/4.jpg", thumb: "https://i.ibb.co/nNt5HnZc/4.jpg" },
  { type: "image", url: "https://i.ibb.co/NgXLwbmt/5.jpg", thumb: "https://i.ibb.co/NgXLwbmt/5.jpg" },
  { type: "image", url: "https://i.ibb.co/s9yXFQYX/6.jpg", thumb: "https://i.ibb.co/s9yXFQYX/6.jpg" },
  { type: "image", url: "https://i.ibb.co/nsDHXPgS/7.jpg", thumb: "https://i.ibb.co/nsDHXPgS/7.jpg" },
  { type: "image", url: "https://i.ibb.co/xSD2dbDG/8.jpg", thumb: "https://i.ibb.co/xSD2dbDG/8.jpg" },
  { type: "image", url: "https://i.ibb.co/snz66yy/9.jpg", thumb: "https://i.ibb.co/snz66yy/9.jpg" },
  { type: "image", url: "https://i.ibb.co/rGWFK5m7/10.jpg", thumb: "https://i.ibb.co/rGWFK5m7/10.jpg" },
  { type: "image", url: "https://i.ibb.co/9HxYn0Np/11.jpg", thumb: "https://i.ibb.co/9HxYn0Np/11.jpg" },
  { type: "image", url: "https://i.ibb.co/1GJ49C05/12.jpg", thumb: "https://i.ibb.co/1GJ49C05/12.jpg" },
  { type: "image", url: "https://i.ibb.co/VpBbQVh1/13.jpg", thumb: "https://i.ibb.co/VpBbQVh1/13.jpg" },
  { type: "image", url: "https://i.ibb.co/sJMGNQYP/14.jpg", thumb: "https://i.ibb.co/sJMGNQYP/14.jpg" },
  { type: "image", url: "https://i.ibb.co/B2RvjXhY/15.jpg", thumb: "https://i.ibb.co/B2RvjXhY/15.jpg" },
  { type: "image", url: "https://i.ibb.co/GftsVhQt/16.jpg", thumb: "https://i.ibb.co/GftsVhQt/16.jpg" },
  { type: "image", url: "https://i.ibb.co/NngzTNJ0/17.jpg", thumb: "https://i.ibb.co/NngzTNJ0/17.jpg" },
  { type: "image", url: "https://i.ibb.co/3545drCK/18.jpg", thumb: "https://i.ibb.co/3545drCK/18.jpg" },
  { type: "image", url: "https://i.ibb.co/gZGp6wcR/20.jpg", thumb: "https://i.ibb.co/gZGp6wcR/20.jpg" },
  { type: "image", url: "https://i.ibb.co/3yJLT2bX/21.jpg", thumb: "https://i.ibb.co/3yJLT2bX/21.jpg" },
  { type: "image", url: "https://i.ibb.co/7tbVFDX4/22.jpg", thumb: "https://i.ibb.co/7tbVFDX4/22.jpg" },
  { type: "image", url: "https://i.ibb.co/5xsr4rGf/24.jpg", thumb: "https://i.ibb.co/5xsr4rGf/24.jpg" },
  { type: "image", url: "https://i.ibb.co/CK80bs5G/26.jpg", thumb: "https://i.ibb.co/CK80bs5G/26.jpg" },
  { type: "image", url: "https://i.ibb.co/DDxVT3sz/27.jpg", thumb: "https://i.ibb.co/DDxVT3sz/27.jpg" },
  { type: "image", url: "https://i.ibb.co/PGvbP65y/28.jpg", thumb: "https://i.ibb.co/PGvbP65y/28.jpg" },
  { type: "image", url: "https://i.ibb.co/MkfBfJSR/29.jpg", thumb: "https://i.ibb.co/MkfBfJSR/29.jpg" },
  { type: "image", url: "https://i.ibb.co/Rkjs9JNq/30.jpg", thumb: "https://i.ibb.co/Rkjs9JNq/30.jpg" },
  { type: "image", url: "https://i.ibb.co/BKQTJG6f/31.jpg", thumb: "https://i.ibb.co/BKQTJG6f/31.jpg" },
  { type: "image", url: "https://i.ibb.co/0ysLcQBX/32.jpg", thumb: "https://i.ibb.co/0ysLcQBX/32.jpg" },
  { type: "image", url: "https://i.ibb.co/Zz2xKHG3/33.jpg", thumb: "https://i.ibb.co/Zz2xKHG3/33.jpg" },
  { type: "image", url: "https://i.ibb.co/ymrwj50p/34.jpg", thumb: "https://i.ibb.co/ymrwj50p/34.jpg" },
  { type: "image", url: "https://i.ibb.co/ZppDwwLF/35.jpg", thumb: "https://i.ibb.co/ZppDwwLF/35.jpg" },
  { type: "image", url: "https://i.ibb.co/Z6zXCfmS/36.jpg", thumb: "https://i.ibb.co/Z6zXCfmS/36.jpg" },
  { type: "image", url: "https://i.ibb.co/bgcbXcRj/37.jpg", thumb: "https://i.ibb.co/bgcbXcRj/37.jpg" },
  { type: "image", url: "https://i.ibb.co/5xhcqkyp/38.jpg", thumb: "https://i.ibb.co/5xhcqkyp/38.jpg" },
  { type: "image", url: "https://i.ibb.co/Nds0W4Hg/39.jpg", thumb: "https://i.ibb.co/Nds0W4Hg/39.jpg" },
  { type: "image", url: "https://i.ibb.co/V0QhL1BD/40.jpg", thumb: "https://i.ibb.co/V0QhL1BD/40.jpg" },
  { type: "image", url: "https://i.ibb.co/RkJDtr4X/41.jpg", thumb: "https://i.ibb.co/RkJDtr4X/41.jpg" },
  { type: "image", url: "https://i.ibb.co/Lz6Wtgpq/42.jpg", thumb: "https://i.ibb.co/Lz6Wtgpq/42.jpg" },
  { type: "image", url: "https://i.ibb.co/XfnjYmN3/43.jpg", thumb: "https://i.ibb.co/XfnjYmN3/43.jpg" },
  { type: "image", url: "https://i.ibb.co/Swmh93Kq/44.jpg", thumb: "https://i.ibb.co/Swmh93Kq/44.jpg" },
  { type: "image", url: "https://i.ibb.co/WW5Fg6Kp/45.jpg", thumb: "https://i.ibb.co/WW5Fg6Kp/45.jpg" },
  { type: "image", url: "https://i.ibb.co/HL2ypX6p/46.jpg", thumb: "https://i.ibb.co/HL2ypX6p/46.jpg" },
  { type: "image", url: "https://i.ibb.co/4nLMjg5x/47.jpg", thumb: "https://i.ibb.co/4nLMjg5x/47.jpg" },
  { type: "image", url: "https://i.ibb.co/CKZvS5YP/48.jpg", thumb: "https://i.ibb.co/CKZvS5YP/48.jpg" },
  { type: "image", url: "https://i.ibb.co/RGzy9Y0M/49.jpg", thumb: "https://i.ibb.co/RGzy9Y0M/49.jpg" },
  { type: "image", url: "https://i.ibb.co/LdW4tyfR/50.jpg", thumb: "https://i.ibb.co/LdW4tyfR/50.jpg" },
  { type: "image", url: "https://i.ibb.co/FbzTsgc6/446.jpg", thumb: "https://i.ibb.co/FbzTsgc6/446.jpg" },
  { type: "image", url: "https://i.ibb.co/wFXgHr4C/FB-IMG-1776092006170.jpg", thumb: "https://i.ibb.co/wFXgHr4C/FB-IMG-1776092006170.jpg" },
  { type: "image", url: "https://i.ibb.co/35zgN1ZV/FB-IMG-1776092170683.jpg", thumb: "https://i.ibb.co/35zgN1ZV/FB-IMG-1776092170683.jpg" },
  { type: "image", url: "https://i.ibb.co/Wvrz0YtZ/FB-IMG-1776092208356.jpg", thumb: "https://i.ibb.co/Wvrz0YtZ/FB-IMG-1776092208356.jpg" },
  { type: "image", url: "https://i.ibb.co/LDy0jqfd/FB-IMG-1776092341899.jpg", thumb: "https://i.ibb.co/LDy0jqfd/FB-IMG-1776092341899.jpg" },
  { type: "image", url: "https://i.ibb.co/23D0Tggc/FB-IMG-1776092353595.jpg", thumb: "https://i.ibb.co/23D0Tggc/FB-IMG-1776092353595.jpg" },
  { type: "image", url: "https://i.ibb.co/kVtBghjd/FB-IMG-1776093814427.jpg", thumb: "https://i.ibb.co/kVtBghjd/FB-IMG-1776093814427.jpg" },
  { type: "image", url: "https://i.ibb.co/Z6tGzFNH/4.jpg", thumb: "https://i.ibb.co/Z6tGzFNH/4.jpg" },
  { type: "image", url: "https://i.ibb.co/bjCsJs6b/1.jpg", thumb: "https://i.ibb.co/bjCsJs6b/1.jpg" },
  { type: "image", url: "https://i.ibb.co/zV53Cxkd/jp2.jpg", thumb: "https://i.ibb.co/zV53Cxkd/jp2.jpg" },
  { type: "image", url: "https://i.ibb.co/RTyL94c4/image.jpg", thumb: "https://i.ibb.co/RTyL94c4/image.jpg" },
  { type: "image", url: "https://i.ibb.co/YBKHmnKH/3.jpg", thumb: "https://i.ibb.co/YBKHmnKH/3.jpg" },
  { type: "image", url: "https://i.ibb.co/7tw0K78N/5.jpg", thumb: "https://i.ibb.co/7tw0K78N/5.jpg" },
  { type: "image", url: "https://i.ibb.co/prKwLfbs/6.jpg", thumb: "https://i.ibb.co/prKwLfbs/6.jpg" },
  { type: "image", url: "https://i.ibb.co/8DbN6h78/7.jpg", thumb: "https://i.ibb.co/8DbN6h78/7.jpg" },
  { type: "image", url: "https://i.ibb.co/zW86jkDM/8.jpg", thumb: "https://i.ibb.co/zW86jkDM/8.jpg" },
  { type: "image", url: "https://i.ibb.co/JRYW1Prx/9.jpg", thumb: "https://i.ibb.co/JRYW1Prx/9.jpg" }
];

export const Gallery = () => {
  const { t } = useTranslation();
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
          {/* العنوان الرئيسي */}
          <h2 className="text-4xl font-bold text-primary font-amiri mb-4">
            {t('gallery.title')}
          </h2>
          {/* الوصف المترجم */}
          <p className="text-gray-600 max-w-2xl mx-auto">
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
          {galleryItems.map((item, index) => (
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
        sources={galleryItems.map((item) => item.url)}
        slide={lightboxController.slide}
      />
    </section>
  );
};