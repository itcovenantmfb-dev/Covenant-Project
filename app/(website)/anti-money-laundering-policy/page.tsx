
import React from "react";
import { Metadata } from "next";
import AntiMoneyHeroSection from "./_components/anti-money-hero";
import AmlPolicyContent from "./_components/anti-money-content";
import Carousel from "../_components/carousel";

export const metadata: Metadata = {
  title: "Anti-Money Laundering Policy",
  description: "Learn about Covenant Microfinance Bank's Anti-Money Laundering (AML) Policy, our commitment to preventing financial crimes, and compliance measures.",
  keywords: [
    "covenant microfinance bank aml policy",
    "anti-money laundering",
    "financial crime prevention",
    "aml compliance",
    "money laundering prevention",
    "financial security",
    "regulatory compliance",
    "banking compliance",
    "financial crime detection",
    "aml procedures"
  ],
  openGraph: {
    title: "Anti-Money Laundering Policy - Covenant Microfinance Bank",
    description: "Learn about our Anti-Money Laundering Policy and commitment to preventing financial crimes.",
    url: "/anti-money-laundering-policy",
    images: [
      {
        url: "/og-aml.jpg",
        width: 1200,
        height: 630,
        alt: "Anti-Money Laundering Policy - Covenant Microfinance Bank",
      },
    ],
  },
  twitter: {
    title: "Anti-Money Laundering Policy - Covenant Microfinance Bank",
    description: "Learn about our Anti-Money Laundering Policy and commitment to preventing financial crimes.",
  },
};

function page() {
  return (
    <div>
      <AntiMoneyHeroSection />
      <AmlPolicyContent />
      <Carousel />
    </div>
  );
}

export default page;
