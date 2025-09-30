"use client";
import React from "react";
import Title from "./title";
import TestimonialsCard from "./testimonials-card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonialsData = [
  {
    testimonial:
      "Zeepay makes online payments a breeze! It’s fast, reliable, and so easy to use. I handle all my transactions with just a few taps, whether I’m paying for groceries, services, or sending money to friends. Zeepay truly simplifies my day-to-day payments.",
    name: "Priya K.",
    business: "Small Business Owner",
    avatar: "/icons/priya-img.svg",
  },
  {
    testimonial:
      "Zeepay makes online payments a breeze! It’s fast, reliable, and so easy to use. I handle all my transactions with just a few taps, whether I’m paying for groceries, services, or sending money to friends. Zeepay truly simplifies my day-to-day payments.",
    name: "Priya K.",
    business: "Small Business Owner",
    avatar: "/icons/priya-img.svg",
  },
  {
    testimonial:
      "Zeepay makes online payments a breeze! It’s fast, reliable, and so easy to use. I handle all my transactions with just a few taps, whether I’m paying for groceries, services, or sending money to friends. Zeepay truly simplifies my day-to-day payments.",
    name: "Priya K.",
    business: "Small Business Owner",
    avatar: "/icons/priya-img.svg",
  },
  {
    testimonial:
      "Zeepay makes online payments a breeze! It’s fast, reliable, and so easy to use. I handle all my transactions with just a few taps, whether I’m paying for groceries, services, or sending money to friends. Zeepay truly simplifies my day-to-day payments.",
    name: "Priya K.",
    business: "Small Business Owner",
    avatar: "/icons/priya-img.svg",
  },
  {
    testimonial:
      "Zeepay makes online payments a breeze! It’s fast, reliable, and so easy to use. I handle all my transactions with just a few taps, whether I’m paying for groceries, services, or sending money to friends. Zeepay truly simplifies my day-to-day payments.",
    name: "Priya K.",
    business: "Small Business Owner",
    avatar: "/icons/priya-img.svg",
  },
];

const Testimonials = () => {
  return (
    <section data-aos="fade-up" className="py-8 sm:py-12 max-w-[1400px] mx-auto lg:py-16 flex flex-col items-center justify-center gap-6 sm:gap-8 px-4 sm:px-6">
      <Title
        text="Testimonials"
        borderColor="[#1D9B5E]/40"
        textColor="#1D9B5E"
      />
      <div className="max-w-[945px] mx-auto mb-6 sm:mb-8 text-center">
        <h2 className="font-semibold text-lg sm:text-xl lg:text-[28px] text-[#020617] leading-relaxed">
          Hear what our customers are saying about their experience — real
          stories of trust, growth, and satisfaction with Covenant MFB.
        </h2>
      </div>
      <div className="relative w-full">
        <div className="absolute hidden lg:block left-0 top-0 bottom-0 w-76 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute hidden lg:block right-0 top-0 bottom-0 w-76 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none" />

        <Swiper
          modules={[Pagination, Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          speed={800}
          slidesPerView={1}
          spaceBetween={10}
          pagination={{ clickable: true, el: ".custom-swiper-pagination" }}
          breakpoints={{
            640: {
              slidesPerView: 1.2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1.5,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 2.5,
              centeredSlides: true,
              spaceBetween: 30,
            },
          }}
          className="py-6 sm:py-8"
        >
          {testimonialsData.map((item, index) => (
            <SwiperSlide key={index}>
              <TestimonialsCard {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="custom-swiper-pagination flex justify-center mt-4 sm:mt-6" />
      </div>
    </section>
  );
};

export default Testimonials;
