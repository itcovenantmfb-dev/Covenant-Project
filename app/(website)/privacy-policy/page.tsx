import React from "react";
import { Metadata } from "next";
import Carousel from "../_components/carousel";
import PrivacyPolicyHeroSection from "./_components/privacy-policy-hero";
import PrivacyPolicyContent from "./_components/privacy-policy-content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read Covenant Microfinance Bank's Privacy Policy to understand how we collect, use, protect, and manage your personal information and banking data.",
  keywords: [
    "covenant microfinance bank privacy policy",
    "data protection",
    "personal information",
    "privacy rights",
    "data security",
    "customer privacy",
    "information management",
    "data collection",
    "privacy practices",
    "banking privacy"
  ],
  openGraph: {
    title: "Privacy Policy - Covenant Microfinance Bank",
    description: "Read our Privacy Policy to understand how we protect and manage your personal information and banking data.",
    url: "/privacy-policy",
    images: [
      {
        url: "/og-privacy.jpg",
        width: 1200,
        height: 630,
        alt: "Privacy Policy - Covenant Microfinance Bank",
      },
    ],
  },
  twitter: {
    title: "Privacy Policy - Covenant Microfinance Bank",
    description: "Read our Privacy Policy to understand how we protect and manage your personal information.",
  },
};

function page() {
  return (
    <div>
      <PrivacyPolicyHeroSection />
      <PrivacyPolicyContent />
      <Carousel />
    </div>
  );
}

export default page;
