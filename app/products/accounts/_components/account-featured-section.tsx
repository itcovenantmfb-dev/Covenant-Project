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
    <section className="bg-slate-50/70 py-20 sm:py-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center flex flex-col justify-center items-center gap-5">
          <Title
            text="Why Choose Our Accounts"
            borderColor="[#1D9B5E]/40"
            textColor="#1D9B5E"
          />
          <h2 className="text-xl lg:text-3xl font-bold tracking-tight text-[#FEFEFE]-900 sm:text-4xl">
            Banking made simple, secure, and rewarding
          </h2>
        </div>

        <div className="mx-auto mt-10 grid max-w-lg grid-cols-1 gap-8 md:max-w-none md:grid-cols-3">
          {ACCOUNT_FEATURES.map((service) => (
            <ServiceCard title={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccountFeaturedSection;
