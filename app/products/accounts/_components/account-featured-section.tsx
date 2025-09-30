import React from "react";
import ServiceCard from "../../_components/services-card";
import Title from "@/app/_components/title";

export const ACCOUNT_FEATURES = [
  "CBN Licensed & NDIC Insured",
  "24/7 Mobile Banking",
  "Free SMS Alerts",
  "Nationwide ATM Access",
  "Professional Customer Service",
  "Quick Account Opening",
];

const AccountFeaturedSection = () => {
  return (
    <section className="bg-slate-50/70 py-12 sm:py-16 lg:py-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center flex flex-col justify-center items-center gap-4 sm:gap-5">
          <Title
            text="Why Choose Our Accounts"
            borderColor="[#1D9B5E]/40"
            textColor="#1D9B5E"
          />
          <h2 className="text-lg sm:text-xl lg:text-3xl font-bold tracking-tight text-[#FEFEFE]-900">
            Banking made simple, secure, and rewarding
          </h2>
        </div>

        <div className="mx-auto mt-8 sm:mt-10 grid max-w-lg grid-cols-1 gap-4 sm:gap-6 md:gap-8 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3">
          {ACCOUNT_FEATURES.map((service, index) => (
            <ServiceCard key={index} title={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccountFeaturedSection;
