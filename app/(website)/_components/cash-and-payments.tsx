import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const CashAndPayments = () => (
  <section data-aos="fade-up" className=" relative mt-8 lg:mt-14 px-4 lg:px-0">
    <div
      style={{
        backgroundImage: 'url("/banner2.svg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="relative flex flex-col lg:flex-row items-center justify-between w-full rounded-[12px] lg:rounded-[48px] min-h-[480px] h-full shadow-lg"
    >
      <div className="flex flex-col justify-center items-start w-full lg:w-1/2 h-full px-8 py-12"></div>

      <div className="absolute z-20 lg:bottom-0 lg:right-0 flex flex-col justify-center items-center lg:justify-end lg:items-end lg:max-w-[380px] w-full h-full bg-[#F1F5EB]/40 backdrop-blur-md py-8 px-4 lg:px-6 rounded-[12px] lg:rounded-[39px] lg:text-right">
        <h2 className="text-[#04400D] font-bold text-3xl lg:text-[45px] mb-4">
          Cash and payments, anywhere.
        </h2>
        <p className="text-[#3D3D3D] text-base lg:text-base mb-8 md:max-w-[312px] lg:ml-auto ">
          Offer quick payments with POS and ATM services from Covenant MFB —
          built to support your business and community.
        </p>

        <Link href="/products/digital-banking/pos">
          <Button className="bg-[#1D9B5E] text-white py-4 px-7.5 rounded-[14px] h-fit text-sm font-semibold">
            Find Out More
          </Button>
        </Link>
      </div>
    </div>
  </section>
);

export default CashAndPayments;
