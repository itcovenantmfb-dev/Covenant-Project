import Title from "@/app/(website)/_components/title";


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
            Debit Cards
          </h2>
          <p className="text-left">
            Enjoy round-the-clock access to your account with the Covenant MFB
            Verve Debit Card. Linked directly to your account(s), this card
            allows you to withdraw cash from any ATM in Nigeria, make payments
            at PoS terminals, shop online, and perform various transactions
            wherever the Interswitch or Verve logo is displayed.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
