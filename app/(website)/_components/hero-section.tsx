import { Button } from "@/components/ui/button";
import HeroImage from "@/public/hero-image";
import { ArrowRight, MenuIcon, Play } from "lucide-react";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section
      style={{
        backgroundImage: "url('/hero-banner.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center ",
      }}
      className="min-h-[500px] sm:min-h-[600px] lg:min-h-[550px] px-4 sm:px-6 lg:px-4 flex flex-col items-center justify-center gap-6 sm:gap-8 md:gap-12"
    >
      <div
        data-aos="fade-up"
        className="flex items-center justify-center w-full mt-[6rem] sm:mt-[1rem] lg:mt-[1rem]"
      >
        <p className="text-[#FFFFFF] font-medium text-xs sm:text-sm bg-[#FFFFFF]/10 py-[6px] pr-3 sm:pr-4 pl-1 w-fit rounded-full h-fit">
          <span className="bg-[#D2F801] text-[#0F2028] rounded-full py-1 px-2 sm:px-3 mr-2 text-xs sm:text-sm">
            New
          </span>
          Payment cards upgraded
        </p>
      </div>
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-8 sm:gap-12 lg:gap-0 justify-between w-full mt-0 lg:mt-6">
        {/* <div> */}
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="flex flex-col items-start justify-center text-left"
        >
          <div className="text-[#FFFFFF] max-w-[560px] mt-2 lg:mt-6 space-y-[11px] lg:mx-0">
            <h2 className="text-[28px] sm:text-[36px] lg:text-[60px] leading-tight font-bold">
              Empowering Dreams,
              <br className="hidden sm:block" />{" "}
              <span className="text-[#A2DD49]">Financing Growth</span>
            </h2>
            <p className="text-[#FFFFFF]/70 font-medium text-sm sm:text-base lg:text-lg leading-relaxed">
              For over 2 decades, Covenant Microfinance Bank Ltd. has empowered
              individuals and businesses to achieve their financial goals
              through tailored banking solutions, accessible loans, and smart
              financial tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-4 w-full sm:w-auto">
              <Button className="bg-[#1D9B5E] text-[#ffffff] rounded-full text-sm sm:text-base w-full sm:w-48 h-12 sm:h-13 lg:h-14 flex items-center justify-center">
                Learn More
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 ml-2" />
              </Button>
              <Button className="bg-[#ffffff] text-[#0A1519]/70 rounded-full text-sm sm:text-base w-full sm:w-48 h-12 sm:h-13 lg:h-14 flex items-center justify-center">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
        {/* </div> */}
        <div className="flex justify-center items-center w-full lg:w-auto">
          <HeroImage />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
