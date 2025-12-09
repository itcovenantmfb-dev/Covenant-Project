import Image from "next/image";
import Link from "next/link";
const CTASection = () => {
  return (
    <section className="py-16 bg-[#043B20] text-white relative z-10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-flex items-center px-6 py-2 rounded-full border-2 border-white/30 text-white text-sm font-medium">
            <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
            How to Get Your Card
          </span>
        </div>

        {/* Steps Grid */}
        <div className="grid lg:grid-cols-3 gap-8  mb-12">
          {[
            {
              id: 1,
              imageSrc: "/flash.svg",
              title: "Download & Complete the ATM Card Application Form",
              link: "/forms",
            },
            {
              id: 2,
              imageSrc: "/flash.svg",
              title: "Submit the completed form to",
              email: "hiebusiness@covenantmfb.com.ng",
            },
            {
              id: 3,
              imageSrc: "/flash.svg",
              title: "Receive your Verve Debit Card and PIN instantly.",
            },
          ].map((step) => (
            <div
              key={step.id}
              className="bg-[#F1F5EB] backdrop-blur-sm space-y-1.5 rounded-2xl p-8 text-left"
            >
              <Image src={step.imageSrc} width={40} height={40} alt="" />
              <h3 className="text-lg font-semibold mb-4 text-[#020617]">
                {step.title}
                {step.email && (
                  <p className="text-[#1D9B5E] font-medium ">
                    <a href={`mailto:${step.email}`}>{step.email}</a>
                  </p>
                )}
              </h3>

              {step.id === 1 && (
                <Link
                  href={step.link || "#"}
                  className="inline-block bg-[#1D9B5E] hover:bg-[#06512B] text-white text-sm font-medium px-8 py-3 rounded-xl"
                >
                  Download Now
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="text-center">
          <p className="text-xl lg:text-2xl text-white font-medium max-w-4xl mx-auto leading-relaxed">
            Get your debit card today and enjoy seamless transactions anytime,
            anywhere!
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
