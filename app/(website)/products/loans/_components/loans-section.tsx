
import React from "react";
import { LoanCard } from "./loan-card";
import Title from "@/app/(website)/_components/title";
import { LOAN_DATA } from "@/app/(website)/_data/loans-data";

const LoansSection = () => {
  return (
    <section data-aos="fade-up" className="bg-[#F1F5EB] py-8 sm:py-12 lg:py-16">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center justify-center gap-6 sm:gap-8 px-4 sm:px-6">
        <Title
          text="Loans & Credit Facilities"
          borderColor="[#1D9B5E]/40"
          textColor="#1D9B5E"
        />
        <div className="max-w-[950px] text-center">
          <h2 className="font-semibold text-lg sm:text-xl lg:text-[28px] text-[#020617] leading-relaxed">
            Access flexible loan options designed to support your personal needs,
            business growth, and financial goals – quickly, securely, and stress-free.
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-6 sm:gap-8">
          {LOAN_DATA.map((loan) => (
            <LoanCard key={loan.id} loan={loan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoansSection;