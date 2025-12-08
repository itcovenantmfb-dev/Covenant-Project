import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const BankOnGo = () => (
  <section data-aos="fade-up"   style={{
        backgroundImage: 'url("/outline-bg.svg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }} className=" relative mt-8 lg:mt-34 px-4 lg:px-0  rounded-xl lg:rounded-[48px] ">
    <div
    
      className="relative overflow-visible pt-5 flex flex-col  lg:flex-row items-center justify-between w-full h-[400px] px-4 lg:px-16 shadow-lg"
    >
      <div className="flex flex-col justify-center  items-start w-full  h-full lg:px-8 py-12">
        <h1 className="text-white font-semibold text-3xl lg:text-5xl mb-4">
          Your bank  in <br/> your pocket
        </h1>
        <p className="text-white text-sm lg:text-base text-justify tracking-wide mb-8 max-w-md">
          Manage your money on the go with the Covenant MFB mobile app. Transfer
          funds, pay bills, check balances, and request loans — all from your
          phone, anytime, anywhere. Fast. Secure. Easy.
        </p>
        <div className="flex flex-col w-full  md:flex-row gap-4 mt-4">
          <Link
            href="https://play.google.com/store/apps/details?id=com.covenantmfb.mobileapp&hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-gradient-to-b from-[#1D9B5E] to-[#074426]  text-white/70 rounded-[12px] px-10 py-3 font-semibold text-sm flex items-center gap-2 w-full md:w-fit shadow-md h-14">
              <Image
                src="/google-play 1.svg"
                alt="Google Play"
                width={24}
                height={24}
              />
              <p className="text-left leading-3 text-xs font-normal">
                Get It On <br />
                <span className="font-semibold text-white text-base">
                  Google Play
                </span>
              </p>
            </Button>
          </Link>
          <Link
            href="https://apps.apple.com/ng/app/covenantmfb-edge-banking/id6504527106"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-gradient-to-b from-[#1D9B5E] to-[#074426] text-white/70 rounded-[12px] px-10 py-3 font-semibold text-sm flex items-center gap-2 shadow-md h-14 w-full md:w-fit">
              <Image
                src="/apple 1.svg"
                alt="App Store"
                width={24}
                height={24}
              />
              <p className="text-left leading-3 text-xs font-normal">
                Download on the <br />
                <span className="font-semibold text-white text-base">
                  App Store
                </span>
              </p>
            </Button>
          </Link>
        </div>
      </div>
      <div className="hidden lg:block  z-20  h-full">
        <Image
          src="/247 Account Access 1.svg"
          alt="App phone"
          height={300}
          quality={100}
          width={400}
          className="object-contain"
          priority
        />
      </div>
    </div>
  </section>
);

export default BankOnGo;
