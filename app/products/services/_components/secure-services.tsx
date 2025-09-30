"use client";

import Title from "@/app/_components/title";
import ServiceCard from "../../_components/services-card";

const servicesData = [
  {
    title: "Banking Made Simple",
    description: "From accounts to loans, we make everyday banking easy.",
  },
  {
    title: "Solutions That Work",
    description:
      "Smart accounts, loans, cards, and digital tools built for you.",
  },
  {
    title: "All Your Banking Needs",
    description: "Secure services that grow with you, anytime, anywhere.",
  },
];

const SecureServices = () => {
  return (
    <section className="bg-slate-50/70 py-12 sm:py-16 lg:py-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center flex flex-col justify-center items-center gap-4 sm:gap-5">
          <Title
            text="Banking Made Easy."
            borderColor="[#1D9B5E]/40"
            textColor="#1D9B5E"
          />
          <h2 className="text-lg sm:text-xl lg:text-3xl font-bold tracking-tight text-[#FEFEFE]-900">
            Secure Services for Everyday Banking
          </h2>
        </div>

        <div className="mx-auto mt-8 sm:mt-10 grid max-w-lg grid-cols-1 gap-4 sm:gap-6 md:gap-8 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecureServices;
