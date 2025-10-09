import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const CTA = () => (
  <section
    data-aos="fade-up"
    className="relative w-full flex justify-center items-center z-30 mt-12"
    style={{ marginBottom: "-120px" }}
  >
    <div className="w-full max-w-6xl bg-gradient-to-b p-4 mx-5  lg:mx-0 from-[#1D9B5E] to-[#074426] rounded-[12px] lg:rounded-[32px] flex flex-col lg:flex-row items-center justify-between gap-6 py-12 lg:py-20 px-4 lg:px-16 shadow-xl">
      <div className="flex-1 text-left max-w-[471px]">
        <h2 className="text-white font-semibold text-3xl lg:text-[40px] mb-4">
          Bank News in Your Inbox
        </h2>
        <p className="text-[#EBF1FF] text-justify tracking-widest text-base mb-6 max-w-lg">
          Be the first to hear about new services, updates, and opportunities
          from Covenant MFB. Subscribe and stay in the loop.
        </p>
      </div>
      <div className="flex-1 flex flex-col items-center justify-end gap-4 w-full max-w-xl">
        <div className="flex items-center bg-white rounded-[20px] pl-6 pr-2 py-3 md:py-2 w-full">
          <Image
            src="/icons/email 1.svg"
            alt="email"
            width={24}
            height={24}
            className="mr-2"
          />
          <input
            type="email"
            placeholder="Your email"
            className="bg-transparent outline-none text-[#8A8A8A] text-base w-full"
          />
          <Button className="bg-[#A2DE49] text-[#001102] px-8 py-3 h-fit rounded-[20px] font-normal text-lg lg:text-xl hidden md:flex items-center gap-2">
            <Image
              src="/icons/send 1.svg"
              alt="Subscribe"
              width={20}
              height={20}
            />
            Subscribe
          </Button>
        </div>
        <Button className="bg-[#A2DE49] text-[#001102] px-8 py-3 h-fit rounded-[20px] font-normal text-lg lg:text-xl flex items-center gap-2 w-full md:hidden">
          <Image
            src="/icons/send 1.svg"
            alt="Subscribe"
            width={20}
            height={20}
          />
          Subscribe
        </Button>
      </div>
    </div>
  </section>
);

export default CTA;
