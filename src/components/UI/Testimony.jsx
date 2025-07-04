import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaQuoteRight } from "react-icons/fa";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";
import { testimonials } from "../../api/data";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Custom navigation buttons for testimonials
export const CustomNavButtons = () => {
  return {
    prevEl: ".custom-swiper-button-prev",
    nextEl: ".custom-swiper-button-next",
  };
};

const Testimonials = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="py-20 px-4 bg-green-50 relative">
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
      <div className="max-w-7xl mx-auto px-4 relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          autoplay={{ delay: 5000 }}
          className="testimonial-swiper py-8"
          onInit={(swiper) => {
            // Override swiper's navigation elements with our refs
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            // Re-initialize navigation
            swiper.navigation.init();
            swiper.navigation.update();
          }}
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="relative bg-white rounded-lg px-6 py-8 h-full border border-green-200 shadow-md hover:shadow-lg transition-shadow duration-300">
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

        {/* Custom navigation buttons */}
        <button
          ref={prevRef}
          className="absolute left-2 lg:left-6 top-1/2 -translate-y-1/2 z-10 bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-md transition-all duration-300 transform hover:scale-105 focus:outline-none"
        >
          <LuArrowLeft className="text-xl" />
        </button>
        <button
          ref={nextRef}
          className="absolute right-2 lg:right-6 top-1/2 -translate-y-1/2 z-10 bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-md transition-all duration-300 transform hover:scale-105 focus:outline-none"
        >
          <LuArrowRight className="text-xl" />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
