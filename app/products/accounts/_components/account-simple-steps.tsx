import Title from "@/app/_components/title";
import React from "react";
import { StepCard } from "../../_components/steps-card";
const steps = [
  {
    number: 1,
    title: "Choose Your Account",
    description: "Select the account type that best suits your financial goals",
  },
  {
    number: 2,
    title: "Provide Documents",
    description: "Submit valid ID, passport photo, and proof of address",
  },
  {
    number: 3,
    title: "Start Banking",
    description: "Make your first deposit and begin your wealth journey",
  },
];
const AccountSimpleSteps = () => {
  return (
    <section className="bg-slate-50/70 py-20 sm:py-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center flex flex-col justify-center items-center gap-5">
          <Title
            text="How to Open an Account"
            borderColor="[#1D9B5E]/40"
            textColor="#1D9B5E"
          />
          <h2 className="text-xl lg:text-3xl font-bold tracking-tight text-[#FEFEFE]-900 sm:text-4xl">
            Get started in just 3 simple steps
          </h2>
        </div>
        <div className="relative">
          {/* Connecting Lines */}
          <div className="absolute top-10 left-35 right-35 flex justify-between items-center px-24 pointer-events-none">
            <div className="flex-1 border-t-2 border-dashed border-gray-300 mx-6 max-w-56 "></div>
            <div className="flex-1 border-t-2 border-dashed border-gray-300 mx-6 max-w-56 "></div>
          </div>

          <div className="mx-auto mt-10 grid max-w-lg grid-cols-1 gap-8 md:max-w-none relative md:grid-cols-3">
            {steps.map((step) => (
              <StepCard
                key={step.number}
                number={step.number}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccountSimpleSteps;
