import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaQuoteRight } from "react-icons/fa";
import { testimonials } from "../../api/data";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Testimonials = () => {
  return (
    <section className="py-20 px-4 bg-green-50">
      <div className="text-center mb-10">
        <p className="text-sm uppercase tracking-wide font-medium text-green-600">
          Their Happy Words 🧡
        </p>
        <h2 className="text-4xl font-extrabold text-green-800">
          Our Testimonials
        </h2>
        <p className="text-green-700 max-w-2xl mx-auto mt-2">
          Our testimonials are heartfelt reflections of the nurturing
          environment we provide, where children flourish both academically and
          emotionally.
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-4">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
          }}
          navigation
          autoplay={{ delay: 5000 }}
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="relative bg-white rounded-lg px-6 py-8 h-full border border-green-200">
                <div className="absolute top-2 right-4 bg-green-100 p-2 rounded-full shadow-md text-green-700 z-20">
                  <FaQuoteRight className="text-lg" />
                </div>
                <div className="flex flex-col items-center text-center">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-16 h-16 rounded-full border-2 border-green-200 object-cover mb-3"
                  />
                  <h4 className="font-bold text-green-800">{t.name}</h4>
                  <p className="text-xs text-green-500">{t.profession}</p>
                  <h5 className="mt-2 font-semibold text-base">{t.title}</h5>
                  <p className="mt-2 text-green-700 text-sm">{t.content}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
