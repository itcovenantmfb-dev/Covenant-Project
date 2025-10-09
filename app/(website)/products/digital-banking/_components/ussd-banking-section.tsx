import Title from "@/app/(website)/_components/title";
import { USSD_CODE } from "@/app/(website)/_data/digital-banking-data";
import React from "react";


const UssdBankingSection = () => {
  return (
    <section className=" py-12 lg:py-20">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center justify-center gap-10 px-4">
        <Title
          text="USSD Banking Codes"
          borderColor="[#1D9B5E]/40"
          textColor="#1D9B5E"
        />
        <div className="max-w-[850px]">
          <h2 className="font-semibold text-lg lg:text-[28px] text-[#020617]">
            Bank anytime, anywhere with our simple USSD codes — check balances,
            transfer funds, and pay bills without internet access.
          </h2>
        </div>
        <div className="p-2 shadow-xl rounded-2xl">
          <div className="flex  bg-[#F8F8F8] flex-col px-8 py-2 rounded-2xl items-center gap-2">
            <div className="text-center">
              <p className="text-md font-semibold text-[#000]/60 mb-4">
                Covenant MFB's Magic Code
              </p>
              <div className="">
                <div className="text-6xl lg:text-8xl font-bold text-[#04391F] tracking-wider">
                  {USSD_CODE}
                </div>
              </div>
            </div>

            <div className="text-left max-w-2xl">
              <p className="text-[#000]/60 text-base font-light lg:text-lg leading-relaxed">
                With Covenant MFB’s Magic Code ({USSD_CODE}), you can enjoy
                quick, secure, and convenient banking straight from your mobile
                phone. This USSD service works on all mobile networks in
                Nigeria, giving you instant access to your account wherever you
                are. Whether you’re transferring funds, buying airtime, or
                checking your balance, it’s as easy as dialing a code.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UssdBankingSection;
