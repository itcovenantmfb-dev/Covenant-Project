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

          <p className="text-left max-w-[1200px]">
            With Covenant MFB’s Point of Sale (POS) Terminal, customers can
            conveniently use their ATM debit cards to pay for goods and services
            at any merchant location where PoS terminals are deployed in
            Nigeria. Our PoS terminals offer a secure, fast, and efficient way
            to process transactions online in real time, ensuring that funds are
            credited directly into your account. It’s a reliable alternative to
            cash payments, helping your business serve customers better and
            accept payments with ease.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
