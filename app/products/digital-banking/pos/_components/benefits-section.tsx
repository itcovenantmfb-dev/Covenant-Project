import Title from "@/app/_components/title";
import ServiceCard from "../../../_components/services-card";

const servicesData = [
  {
    description: "Business owners can effectively manage cash transactions",
  },
  {
    description:
      "Increases sales as merchants have access to both cash and card payment methods",
  },
  {
    description: "Minimizes cost of handling cash and eases reconciliation.",
  },
  {
    description: "Transaction history can be requested for each PoS terminal.",
  },
  {
    description: "PoS is directly linked to the merchant’s account..",
  },
  {
    description: "Ability to view transactions from first usage of PoS",
  },
  {
    description: "Eliminates the inconvenience of the cheque clearing system",
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

        <div className="mx-auto mt-10 grid max-w-lg grid-cols-1 gap-8 md:max-w-none md:grid-cols-4">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              position="flex-col items-left"
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
