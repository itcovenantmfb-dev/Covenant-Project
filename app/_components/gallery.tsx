"use client";
import React from "react";
import Title from "./title";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import GalleryGrid from "./gallery-grid";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const galleryImgs = [
  [
    "/Column.svg",
    "/& AspectRatioBlock.svg",
    "/& AspectRatioBlock (1).svg",
    "/& AspectRatioBlock (2).svg",
    "/& AspectRatioBlock (3).svg",
  ],
  [
    "/Column.svg",
    "/& AspectRatioBlock.svg",
    "/& AspectRatioBlock (1).svg",
    "/& AspectRatioBlock (2).svg",
    "/& AspectRatioBlock (3).svg",
  ],
];

const Gallery = () => {
  return (
    <section data-aos="fade-up" className="py-6 lg:py-16 flex flex-col items-center justify-center gap-6 px-4">
      <Title text="Gallery" borderColor="[#1D9B5E]/40" textColor="#1D9B5E" />
      <div className="max-w-[945px] mx-auto mb-8">
        <h2 className="font-semibold text-xl lg:text-[28px] text-[#020617]">
          Explore Covenant MFB’s journey through captivating photos of
          milestones, events, and community impact moments.
        </h2>
      </div>
      <div className="relative w-full max-w-[1100px] mx-auto">
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".gallery-next",
            prevEl: ".gallery-prev",
          }}
          spaceBetween={30}
          slidesPerView={1}
          className="pb-16"
        >
          {galleryImgs.map((images, index) => (
            <SwiperSlide key={index}>
              <GalleryGrid images={images} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex gap-8 justify-center items-center mt-8">
          <Button className="gallery-prev rounded-full bg-[#043B20] w-10 h-10 flex items-center justify-center">
            <ArrowLeft className="text-[#F1F5EB] w-6 h-6" />
          </Button>
          <p className="text-[#043B20] text-base font-medium">1 / 25</p>
          <Button className="gallery-next rounded-full bg-[#043B20] w-10 h-10 flex items-center justify-center">
            <ArrowRight className="text-[#F1F5EB] w-6 h-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
