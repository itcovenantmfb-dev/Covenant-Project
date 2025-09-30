import React from "react";
import { Metadata } from "next";
import Carousel from "../_components/carousel";
import WhistleBlowingHeroSection from "./_components/whistle-blowing-hero";
import WhistleblowingPolicyContent from "./_components/whistle-blowing-content";

export const metadata: Metadata = {
  title: "Whistle-Blowing Policy",
  description: "Learn about Covenant Microfinance Bank's Whistle-Blowing Policy, our commitment to ethical practices, and how to report misconduct or unethical behavior.",
  keywords: [
    "covenant microfinance bank whistle-blowing policy",
    "whistle-blowing",
    "ethical practices",
    "report misconduct",
    "corporate governance",
    "ethics reporting",
    "fraud reporting",
    "unethical behavior",
    "whistleblower protection",
    "compliance reporting"
  ],
  openGraph: {
    title: "Whistle-Blowing Policy - Covenant Microfinance Bank",
    description: "Learn about our Whistle-Blowing Policy and commitment to ethical practices and misconduct reporting.",
    url: "/whistle-blowing-policy",
    images: [
      {
        url: "/og-whistle.jpg",
        width: 1200,
        height: 630,
        alt: "Whistle-Blowing Policy - Covenant Microfinance Bank",
      },
    ],
  },
  twitter: {
    title: "Whistle-Blowing Policy - Covenant Microfinance Bank",
    description: "Learn about our Whistle-Blowing Policy and commitment to ethical practices.",
  },
};

function page() {
  return (
    <div>
      <WhistleBlowingHeroSection />
      <WhistleblowingPolicyContent />
      <Carousel />
    </div>
  );
}

export default page;
