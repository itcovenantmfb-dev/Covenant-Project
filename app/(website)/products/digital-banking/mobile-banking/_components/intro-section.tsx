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
          <h2 className=" lg:text-4xl font-bold tracking-tight text-[#020617] text-2xl">
            Mobile Banking
          </h2>
          <p className="text-left">
            Banking is now as close as your phone. With the Covenant MFB Mobile
            App, you can enjoy seamless, secure, and convenient access to your
            account, anytime, anywhere. Whether you’re checking your balance,
            transferring funds, paying bills, or buying airtime, our
            user-friendly app puts the power of banking in your hands
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
