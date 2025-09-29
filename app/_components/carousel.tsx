"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination,Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import BankOnGo from "./bank-on-go";
import OneCodeAway from "./one-code-away";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import CashAndPayments from "./cash-and-payments";

const Carousel = () => {
  return (
    <div className="relative w-full max-w-[1200px] mx-auto">
      <Swiper
        modules={[Navigation, Pagination,Autoplay]}
         autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation={{
          nextEl: ".carousel-next",
          prevEl: ".carousel-prev",
        }}
        pagination={{ clickable: true, el: ".carousel-swiper-pagination" }}
        spaceBetween={30}
        slidesPerView={1}
        className="py-16"
      >
        <SwiperSlide>
          <BankOnGo />
        </SwiperSlide>
        <SwiperSlide>
          <CashAndPayments />
        </SwiperSlide>
        <SwiperSlide>
          <OneCodeAway />
        </SwiperSlide>
      </Swiper>

      <div className="flex justify-between items-center w-full py-6">
        <div className="carousel-swiper-pagination flex justify-center" />
        <div className="gap-4 justify-center items-center mr-20 hidden lg:flex">
          <Button className="carousel-prev rounded-full bg-transparent border-2  border-[#043B20] w-10 h-10 flex items-center justify-center">
            <ArrowLeft className="text-[#043B20] w-6 h-6" />
          </Button>
          <Button className="carousel-next rounded-full bg-[#043B20] w-10 h-10 flex items-center justify-center">
            <ArrowRight className="text-[#F1F5EB] w-6 h-6" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
