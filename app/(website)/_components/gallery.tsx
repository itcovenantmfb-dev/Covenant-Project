"use client";
import React, { useState } from "react";
import Title from "./title";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import GalleryGrid from "./gallery-grid";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface GalleryItem {
  _id: string;
  title: string;
  slug: { current: string };
  description?: string;
  featuredImage: any;
  images: any[];
  category: string;
  eventDate?: string;
  location?: string;
  tags?: string[];
  order: number;
}

interface GalleryProps {
  galleries: GalleryItem[];
}

const Gallery = ({ galleries }: GalleryProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Fallback data when no galleries are available
  const fallbackGalleries: GalleryItem[] = [
    {
      _id: "fallback-1",
      title: "Bank Events",
      slug: { current: "bank-events" },
      description: "Celebrating our community milestones",
      featuredImage: { asset: { url: "/Column.svg" } },
      images: [
        { asset: { url: "/& AspectRatioBlock.svg" } },
        { asset: { url: "/& AspectRatioBlock (1).svg" } },
        { asset: { url: "/& AspectRatioBlock (2).svg" } },
        { asset: { url: "/& AspectRatioBlock (3).svg" } },
      ],
      category: "events",
      order: 0,
    },
  ];

  const displayGalleries = galleries && galleries.length > 0 ? galleries : fallbackGalleries;

  // Empty state when no galleries available
  if (!galleries || galleries.length === 0) {
    return (
      <section data-aos="fade-up" className="py-6 lg:py-16 flex flex-col items-center justify-center gap-6 px-4">
        <Title text="Gallery" borderColor="[#1D9B5E]/40" textColor="#1D9B5E" />
        <div className="max-w-[945px] mx-auto mb-8 text-center">
          <h2 className="font-semibold text-xl lg:text-[28px] text-[#020617] mb-4">
            Gallery Coming Soon
          </h2>
          <p className="text-gray-600">
            We're preparing an amazing visual journey of our milestones, events, and community impact moments. Check back soon!
          </p>
        </div>
      </section>
    );
  }
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
          onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
        >
          {displayGalleries.map((gallery, index) => (
            <SwiperSlide key={gallery._id}>
              <GalleryGrid gallery={gallery} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex gap-8 justify-center items-center mt-8">
          <Button className="gallery-prev rounded-full bg-[#043B20] w-10 h-10 flex items-center justify-center">
            <ArrowLeft className="text-[#F1F5EB] w-6 h-6" />
          </Button>
          <p className="text-[#043B20] text-base font-medium">
            {currentSlide + 1} / {displayGalleries.length}
          </p>
          <Button className="gallery-next rounded-full bg-[#043B20] w-10 h-10 flex items-center justify-center">
            <ArrowRight className="text-[#F1F5EB] w-6 h-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
