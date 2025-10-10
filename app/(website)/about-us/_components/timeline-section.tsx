import React from "react";
import Image from "next/image";
import SectionPill from "./section-pill";

const TimelineSection = () => {
  return (
    <section data-aos="fade-up" className="bg-white py-8 sm:py-4 lg:py-16">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="mx-auto max-w-5xl text-center">
          <SectionPill>Timeline</SectionPill>
          <h2 className="mt-2 sm:mt-2 lg:mt-4 text-base sm:text-lg lg:text-[28px] font-bold text-center lg:text-start leading-relaxed">
            Explore key milestones that shaped Covenant MFB&apos;s journey,
            highlighting growth, innovation, and community impact over the
            years.
          </h2>
        </div>

        <div className="mt-8 sm:mt-4 lg:mt-16">
          <div className="hidden lg:block">
            <Image
              src="/timeline.svg"
              alt="A horizontal timeline of Covenant MFB's history from 2003 to 2025."
              width={1300}
              height={600}
              className="mx-auto w-full h-auto"
            />
          </div>

          <div className="block lg:hidden">
            <Image
              src="/history4.svg"
              alt="A vertical timeline of Covenant MFB's history."
              width={400}
              height={1200}
              className="mx-auto w-full max-w-sm sm:max-w-md h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
