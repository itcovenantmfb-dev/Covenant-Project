import React from "react";
import { DIGITAL_BANKING_SERVICES } from "@/app/_data/digital-banking-data";
import { DigitalBankingCard } from "./digital-banking-card";

const DigitalServicesSection = () => {
  return (
    <section className=" py-12 lg:py-20">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-30">
          {DIGITAL_BANKING_SERVICES.map((service) => (
            <DigitalBankingCard
              key={service.id}
              id={service.id}
              title={service.title}
              description={service.description}
              features={service.features}
              image={service.image}
              imageWidth={service.imageWidth}
              linkUrl={service.linkUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigitalServicesSection;
