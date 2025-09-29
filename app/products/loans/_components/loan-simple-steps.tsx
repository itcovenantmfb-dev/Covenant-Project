import Title from "@/app/_components/title";
import React from "react";
import { StepCard } from "../../_components/steps-card";

const steps = [
  {
    number: 1,
    title: "Application",
    description: "Fill out our simple loan application form online or at any branch",
  },
  {
    number: 2,
    title: "Documentation",
    description: "Submit required documents and complete verification process",
  },
  {
    number: 3,
    title: "Assessment",
    description: "Our team reviews your application within 24 hours",
  },
  {
    number: 4,
    title: "Approval & Disbursement",
    description: "Once approved, funds are disbursed to your account immediately",
  },
];

const LoanSimpleSteps = () => {
  return (
    <section className="bg-slate-50/70 py-20 sm:py-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center flex flex-col justify-center items-center gap-5">
          <Title
            text="How to Apply"
            borderColor="[#1D9B5E]/40"
            textColor="#1D9B5E"
          />
          <h2 className="text-xl lg:text-3xl font-bold tracking-tight text-[#020617] sm:text-4xl">
            Simple 4-step process to get your loan approved
          </h2>
        </div>
        <div className="relative">
          {/* Connecting Lines */}
          <div className="absolute top-10 left-35 right-35 flex justify-between items-center px-24 pointer-events-none">
            <div className="flex-1 border-t-2 border-dashed border-gray-300 mx-6 max-w-56"></div>
            <div className="flex-1 border-t-2 border-dashed border-gray-300 mx-6 max-w-56"></div>
            <div className="flex-1 border-t-2 border-dashed border-gray-300 mx-6 max-w-56"></div>
          </div>

          <div className="mx-auto mt-10 grid max-w-lg grid-cols-1 gap-8 md:max-w-none relative md:grid-cols-4">
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

export default LoanSimpleSteps;