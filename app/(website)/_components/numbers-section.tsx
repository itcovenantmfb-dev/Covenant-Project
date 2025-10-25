import React from "react";
import Title from "./title";
import Image from "next/image";

const NumbersSection = () => {
  return (
    <section data-aos="fade-up" className="py-8 sm:py-12 lg:py-16 bg-[#033224]">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center justify-center gap-6 sm:gap-8 px-4 sm:px-6">
        <Title
          text="Covenant MFB In Numbers"
          borderColor="[#A2DE49]"
          textColor="#A2DE49"
        />
        <div className="max-w-[950px] text-center">
          <h2 className="font-semibold text-lg sm:text-xl lg:text-[28px] text-[#F1F5EB] leading-relaxed">
            Our numbers tell the story. From lives impacted to transactions
            processed, these figures reflect our commitment to trust, growth and
            every service
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 items-center justify-center w-full max-w-[1000px]">
          <div className="flex justify-center">
            <Image
              src={"/clients.svg"}
              alt="Clients"
              width={140}
              height={140}
              className="w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] lg:w-[210px] lg:h-[210px]"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src={"/Group 256.svg"}
              alt="Clients"
              width={140}
              height={140}
              className="w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] lg:w-[210px] lg:h-[210px]"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src={"/clients (1).svg"}
              alt="Clients"
              width={140}
              height={140}
              className="w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] lg:w-[210px] lg:h-[210px]"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src={"/clients (2).svg"}
              alt="Clients"
              width={140}
              height={140}
              className="w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] lg:w-[210px] lg:h-[210px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NumbersSection;
