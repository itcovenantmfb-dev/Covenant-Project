import React from "react";
import Image from "next/image";
import Title from "./title";
interface PageBannerProps {
  pillText: string;
  title: React.ReactNode;
  backgroundSvg?: string;
}

const PageBanner: React.FC<PageBannerProps> = ({
  pillText,
  title,
  backgroundSvg = "/Vector.svg",
}) => {
  return (
    <section className="relative bg-[#031407] overflow-hidden  z-10  px-6 ">
      <Image
        src={backgroundSvg}
        alt="Background pattern"
        fill
        className="absolute inset-0 z-0 object-cover"
      />

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 sm:py-32 lg:px-8">
        <div className="flex justify-center items-center">
          <Title text={pillText} borderColor="#001102" textColor="#1D9C4A" />
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl mt-8">
          {title}
        </h1>
      </div>
    </section>
  );
};

export default PageBanner;
