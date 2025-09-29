import Title from "@/app/_components/title";
import ServiceCard from "../../../_components/services-card";

const servicesData = [
  {
    title: "Convenience at your Fingertips",
    description: "Bank anytime, anywhere without visiting a branch",
  },
  {
    title: "Time-Saving",
    description:
      "Carry out transactions in seconds, avoiding queues and paperwork",
  },
  {
    title: "Financial Control",
    description: "Track your spending, savings and transactions in real time.",
  },
  {
    title: "Cost-Effective",
    description:
      "Save on transport and other costs associated with branch visits",
  },
  {
    title: "24/7 Availability",
    description:
      "Access banking services round the clock, including weekends and holidays.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-20 sm:py-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center flex flex-col justify-center items-center gap-5">
          <Title
            text="Benefits"
            borderColor="[#1D9B5E]/40"
            textColor="#1D9B5E"
          />
          <h2 className="text-xl lg:text-3xl font-bold tracking-tight text-[#FEFEFE]-900 sm:text-4xl">
            Your safety is our top priority
          </h2>
        </div>

        <div className="mx-auto mt-10 grid max-w-lg grid-cols-1 gap-8 md:max-w-none md:grid-cols-3">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              position="flex-col items-left"
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;