import Title from "@/app/_components/title";
import { LOAN_DATA } from "@/app/_data/loans-data";
import React from "react";
import { LoanCard } from "./loan-card";

const LoansSection = () => {
  return (
    <section className="bg-[#F1F5EB] py-6 lg:py-16">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center justify-center gap-6 px-4">
        <Title
          text="Loans & Credit Facilities"
          borderColor="[#1D9B5E]/40"
          textColor="#1D9B5E"
        />
        <div className="max-w-[950px]">
          <h2 className="font-semibold text-lg lg:text-[28px] text-[#020617]">
            Access flexible loan options designed to support your personal needs,
            business growth, and financial goals – quickly, securely, and stress-free.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 w-full gap-8">
          {LOAN_DATA.map((loan) => (
            <LoanCard key={loan.id} loan={loan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoansSection;