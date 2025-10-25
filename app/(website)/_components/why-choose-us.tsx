import React from "react";
import Title from "./title";
import WhyUsCard from "./why-us-card";

const mainCard = [
  {
    image: "/payment_image.svg",
    title: "Payment Convenience",
    text: "Make and manage all your payments with ease — anytime, anywhere in Nigeria. Whether for business or personal use, Covenant MFB gives you a simple, stress-free way to stay in control of your finances using one secure platform.",
  },
];

const subCard = [
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

const mainCardTwo = [
  {
    image: "/access_image.svg",
    title: "Seamless Access",
    text: "Bank how and where you want. With tools that connect easily to your lifestyle or business flow, Covenant MFB gives you smooth access to your account and services—anytime, any day.",
  },
];

const subCardTwo = [
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

const WhyChooseUs = () => {
  return (
    <section
      data-aos="fade-up"
      className="max-w-[1200px] mx-auto py-8 sm:py-12 lg:py-16 z-10"
    >
      <div className="flex flex-col items-center justify-center gap-6 sm:gap-8 px-4 sm:px-6">
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
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 w-full h-full">
          <WhyUsCard mainCard={mainCard} subCard={subCard} />
        </div>
        <div className="flex flex-col lg:flex-row-reverse items-center justify-center gap-6 sm:gap-8 w-full h-full">
          <WhyUsCard mainCard={mainCardTwo} subCard={subCardTwo} />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
