import React from "react";
import Title from "@/app/_components/title";
import { SECURITY_FEATURES } from "@/app/_data/digital-banking-data";
import ServiceCard from "../../_components/services-card";

const SecurityFeaturesSection = () => {
  return (
    <section className="bg-white py-12 lg:py-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center flex flex-col justify-center items-center gap-5">
          <Title
            text="Loan Requirements"
            borderColor="[#1D9B5E]/40"
            textColor="#1D9B5E"
          />
          <h2 className="text-xl lg:text-3xl font-bold tracking-tight text-[#020617] sm:text-4xl">
            Your safety is our top priority
          </h2>
        </div>

        <div className="mx-auto mt-10 grid max-w-lg grid-cols-1 gap-8 md:max-w-none md:grid-cols-3">
          {SECURITY_FEATURES.map((feature, index) => (
            <ServiceCard
              key={index}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecurityFeaturesSection;
