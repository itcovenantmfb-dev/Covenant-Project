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
        
        {/* YouTube Video Embed */}
        <div className="max-w-4xl mx-auto mb-10">
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-xl"
              src="https://www.youtube.com/embed/-QM1xJqEvVM?si=gFmx4Dc0hE59BmPq&autoplay=1&mute=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>

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
