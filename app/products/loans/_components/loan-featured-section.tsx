import React from "react";
import ServiceCard from "../../_components/services-card";
import Title from "@/app/_components/title";

export const LOAN_FEATURES = [
  "Valid means of identification",
  "Passport photograph",
  "Proof of income/business",
  "Bank statement (3 months)",
  "Utility bill (proof of address)",
  "Guarantor (where applicable)",
 
];

const LoanFeaturedSection = () => {
  return (
    <section className="bg-slate-50/70 py-20 sm:py-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center flex flex-col justify-center items-center gap-5">
          <Title
            text="Loan Requirements"
            borderColor="[#1D9B5E]/40"
            textColor="#1D9B5E"
          />
          <h2 className="text-xl lg:text-3xl font-bold tracking-tight text-[#020617] sm:text-4xl">
            Documents you need to apply for a loan
          </h2>
        </div>

        <div className="mx-auto mt-10 grid max-w-lg grid-cols-1 gap-8 md:max-w-none md:grid-cols-3">
          {LOAN_FEATURES.map((document, index) => (
            <ServiceCard key={index} title={document} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoanFeaturedSection;