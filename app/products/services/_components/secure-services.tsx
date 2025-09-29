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
    <section className="bg-slate-50/70 py-20 sm:py-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center flex flex-col justify-center items-center gap-5">
          <Title
            text="Banking Made Easy."
            borderColor="[#1D9B5E]/40"
            textColor="#1D9B5E"
          />
          <h2 className="text-xl lg:text-3xl font-bold tracking-tight text-[#FEFEFE]-900 sm:text-4xl">
            Secure Services for Everyday Banking
          </h2>
        </div>

        <div className="mx-auto mt-10 grid max-w-lg grid-cols-1 gap-8 md:max-w-none md:grid-cols-3">
          {servicesData.map((service) => (
            <ServiceCard
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
