"use client";
import Image from "next/image";
import { ReactNode } from "react";
import Title from "./title";

interface ReusableBannerProps {
  pillText: string;
  title: string | ReactNode;
  bgPattern?: string;
}

const ReusableBanner = ({
  pillText,
  title,
  bgPattern = "/path2830.png",
}: ReusableBannerProps) => {
  return (
    <section className="relative min-h-[400px] md:min-h-[500px] lg:min-h-[550px] w-full overflow-hidden flex items-center">
      {/* Decorative Background Pattern */}
      <div className="">
        <div
          className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-cover bg-left lg:bg-center md:bg-left"
          style={{ backgroundImage: `url('${bgPattern}')` }}
        ></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20 flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 max-w-7xl w-full">
        {/* Content Card */}
        <div
          data-aos="fade-right"
          className="bg-white/80 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-16 w-full max-w-xl lg:max-w-3xl shadow-xl mx-auto lg:mx-0"
        >
          <Title
            text={pillText}
            borderColor="[#1D9B5E]/40"
            textColor="#1D9B5E"
          />

          <h1 className="mt-4 sm:mt-6 font-britti tracking-tight text-[#0D1A26] leading-tight text-2xl sm:text-3xl lg:text-5xl font-bold">
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default ReusableBanner;
