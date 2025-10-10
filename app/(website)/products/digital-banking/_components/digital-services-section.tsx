import React from "react";

import { DigitalBankingCard } from "./digital-banking-card";
import { DIGITAL_BANKING_SERVICES } from "@/app/(website)/_data/digital-banking-data";

const DigitalServicesSection = () => {
  return (
    <section className="py-8 sm:py-12 lg:py-20">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 sm:gap-12 lg:gap-30">
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
