import React from "react";
import Image from "next/image";
import Title from "@/app/(website)/_components/title";

function PosHero() {
  return (
    <div>
      <section
        data-aos="fade-up"
        className="relative py-12 sm:py-16 lg:py-24 px-4 sm:px-6"
      >
        <div className="mx-auto max-w-2xl text-center flex flex-col justify-center items-center gap-5 mb-4">
          <Title
            text="Product"
            borderColor="[#1D9B5E]/40"
            textColor="#1D9B5E"
          />
        </div>
        <h1 className="text-6xl font-bold text-[#1B1C31] text-center mb-10">
          Point of Sales Terminal
        </h1>
        {/* Background Image */}
        <Image
          src="/worldmap (7).svg"
          alt="Background"
          fill
          className="object-cover object-center -z-10"
        />
      </section>
    </div>
  );
}

export default PosHero;
