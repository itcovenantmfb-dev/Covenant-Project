import React from "react";
import Title from "./title";
import Image from "next/image";

const mainCardData = {
  visual: (
    <Image
      src="/payment_image.svg"
      alt="Payment Convenience"
      width={380}
      height={350}
    />
  ),
  title: "Payment Convenience",
  text: "Make and manage all your payments with ease — anytime, anywhere in Nigeria. Whether for business or personal use, Covenant MFB gives you a simple, stress-free way to stay in control of your finances using one secure platform.",
};

const subCardSet1 = [
  // Safe & Secure, Transparency
  {
    icon: "/icons/shield_icon.svg",
    title: "Safe & Secure",
    text: "We use advanced security protocols to protect your transactions and account information. With Covenant MFB, your trust is our highest priority.",
  },
  {
    icon: "/icons/circle-check-big.svg",
    title: "Transparency",
    text: "No hidden fees. No surprises. We operate with clarity and accountability, ensuring you understand every charge, every time. What you see is what you get.",
  },
];

const mainCardTwoData = {
  visual: (
    <Image
      src="/access_image.svg"
      alt="Seamless Access"
      width={380}
      height={350}
    />
  ),
  title: "Seamless Access",
  text: "Bank how and where you want. With tools that connect easily to your lifestyle or business flow, Covenant MFB gives you smooth access to your account and services—anytime, any day.",
};

const subCardSet2 = [
  // Speed, Experience
  {
    icon: "/icons/speed_icon.svg",
    title: "Speed",
    text: "Bank faster, live freer. From transfers to loan processing, we deliver responsive service so you can handle your finances without delay.",
  },
  {
    icon: "/icons/star_icon.svg",
    title: "Experience",
    text: "With over 2 decades of trusted service, our team blends deep industry expertise with a customer-first mindset, ensuring that you always receive dependable, immediate, and responsive support.",
  },
];

const MainCard = ({
  visual,
  title,
  text,
}: {
  visual: React.ReactNode;
  title: string;
  text: string;
}) => (
  <div
    data-aos="fade-up"
    className="bg-[#F1F5EB] rounded-[30px] flex flex-col items-center justify-center gap-4 px-8 py-10 h-full"
  >
    {visual}
    <div className="text-center mt-4">
      <h3 className="text-lg lg:text-2xl font-semibold text-[#020617]">
        {title}
      </h3>
      <p className="text-base text-[#64748B] mt-2">{text}</p>
    </div>
  </div>
);

const SubCard = ({
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: string;
}) => (
  <div className="bg-[#F8F8F8] rounded-3xl p-8 space-y-3.5 h-full">
    <Image src={icon} alt={title} width={40} height={40} />
    <h4 className="text-lg lg:text-xl font-semibold text-[#020617]">{title}</h4>
    <p className="text-base text-[#5B5B5B]">{text}</p>
  </div>
);

const WhyChooseUs = () => {
  return (
    <section data-aos="fade-up" className="max-w-[1200px] mx-auto py-16 z-10">
      <div className="flex flex-col items-center justify-center gap-12 px-4 sm:px-6">
        <Title
          text="Why Choose Us"
          borderColor="[#1D9B5E]/40"
          textColor="#1D9B5E"
        />
        <div className="max-w-[1038px] text-center">
          <h3 className="font-semibold text-lg sm:text-xl lg:text-[28px] text-[#020617] leading-relaxed">
            We're more than a bank; we're the leading Microfinance bank in Ogun
            State, built on trust, driven by impact, and committed to delivering
            a seamless, personalized experience. Our mission is to transform
            individuals into creators of wealth.
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
          {/* CELL 1: TOP-LEFT */}
          <MainCard {...mainCardData} />

          {/* CELL 2: TOP-RIGHT */}
          <div className="flex flex-col gap-8 h-full">
            {subCardSet1.map((item) => (
              <SubCard key={item.title} {...item} />
            ))}
          </div>

          {/* CELL 3: BOTTOM-LEFT */}
          <div className="flex flex-col gap-8 h-full">
            {subCardSet2.map((item) => (
              <SubCard key={item.title} {...item} />
            ))}
          </div>

          {/* CELL 4: BOTTOM-RIGHT */}
          <MainCard {...mainCardTwoData} />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
