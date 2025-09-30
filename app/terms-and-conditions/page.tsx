import React from "react";
import { Metadata } from "next";
import Carousel from "../_components/carousel";
import TermsAndConditionsContent from "./_components/terms-and-conditions-content";
import TermsandConditionsHeroSection from "./_components/terms-and-condition-hero";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Review Covenant Microfinance Bank's Terms and Conditions for using our banking services, website, and digital platforms. Understand your rights and responsibilities.",
  keywords: [
    "covenant microfinance bank terms and conditions",
    "banking terms",
    "service agreement",
    "user agreement",
    "banking conditions",
    "legal terms",
    "service terms",
    "customer agreement",
    "banking contract",
    "terms of use"
  ],
  openGraph: {
    title: "Terms and Conditions - Covenant Microfinance Bank",
    description: "Review our Terms and Conditions for using our banking services, website, and digital platforms.",
    url: "/terms-and-conditions",
    images: [
      {
        url: "/og-terms.jpg",
        width: 1200,
        height: 630,
        alt: "Terms and Conditions - Covenant Microfinance Bank",
      },
    ],
  },
  twitter: {
    title: "Terms and Conditions - Covenant Microfinance Bank",
    description: "Review our Terms and Conditions for using our banking services and digital platforms.",
  },
};

function page() {
  return (
    <div>
      <TermsandConditionsHeroSection />
      <TermsAndConditionsContent />
      <Carousel />
    </div>
  );
}

export default page;
