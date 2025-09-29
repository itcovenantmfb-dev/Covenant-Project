"use client";
import Image from "next/image";

import { ReactNode } from "react";
import Title from "./title";

interface ReusableBannerProps {
  pillText: string;
  title: string | ReactNode;
  firstImage: string;
  secondImage: string;
}

const ReusableBanner = ({
  pillText,
  title,
  firstImage,
  secondImage,
}: ReusableBannerProps) => {
  return (
    <section className="flex min-h-[550px]  w-full bg-[url('/path2830.png')] items-center justify-center bg-[#F1FEF4]  ">
      <div className="relative z-10  px-6 w-full max-w-6xl items-center justify-center text-center ">
        <Image
          src={secondImage}
          alt="A vertical timeline of Covenant MFB's history."
          width={280}
          height={280}
          className=" z-0  absolute  md:left-[620px] lg:left-[850px] bottom-[-170px]  hidden lg:block "
          priority
        />
        {/* Mobile */}
        <Image
          src={firstImage}
          alt="A vertical timeline of Covenant MFB's history."
          width={150}
          height={150}
          className=" z-0  object-bottom absolute right-[290px] md:right-[500px] bottom-[-100px] block lg:hidden "
          priority
        />
        <div className=" relative flex flex-col gap-4 justify-center items-center">
          <Title
            text={pillText}
            borderColor="[#1D9B5E]/40"
            textColor="#1D9B5E"
          />

          <h1 className="font-britti tracking-tight text-[#0D1A26] leading-tight text-2xl lg:text-5xl max-w-[230px] lg:max-w-2xl mx-auto font-bold">
            {title}
          </h1>
        </div>
        <Image
          src={firstImage}
          alt="A vertical timeline of Covenant MFB's history."
          width={280}
          height={280}
          className=" z-0 left-[60px] absolute bottom-[-190px]    hidden lg:block "
          priority
        />
        {/* Mobile */}
        <Image
          src={secondImage}
          alt="A vertical timeline of Covenant MFB's history."
          width={120}
          height={120}
          className=" z-0 absolute left-[290px] bottom-[-100px] md:left-[500px]  md:bottom-[-80px] object-contain object-bottom block lg:hidden "
          priority
        />
      </div>
    </section>
  );
};

export default ReusableBanner;
