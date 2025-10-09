
import Title from "@/app/(website)/_components/title";
import ServiceCard from "../../../_components/services-card";

const servicesData = [
  {
    description:
      "Pay for goods and services conveniently via ATMs, PoS, web, mobile, and kiosks connected to the Interswitch network.",
  },
  {
    description: "Eliminate the risks and inconvenience of carrying cash.",
  },
  {
    description: "Enjoy Verve rewards and exclusive discounts for cardholders.",
  },
  {
    description:
      "Access value-added services like airtime recharge, bill payments, and more.",
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
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
