import Title from "@/app/_components/title";

const IntroSection = () => {
  return (
    <section className="bg-white py-12 lg:py-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center flex flex-col justify-center items-center gap-5">
          <Title
            text="Overview"
            borderColor="[#1D9B5E]/40"
            textColor="#1D9B5E"
          />
          <h2 className="lg:text-4xl font-bold tracking-tight text-[#020617] text-2xl">
            POS Terminal
          </h2>
          <p className="text-left">
            Transform your business with our reliable POS terminal solutions. Accept all major 
            cards, process payments securely, and provide your customers with convenient payment 
            options. Our POS terminals are designed to help businesses of all sizes streamline 
            their payment processes while maintaining the highest security standards.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;