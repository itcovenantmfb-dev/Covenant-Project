import React from "react";
import { Metadata } from "next";
import Carousel from "../_components/carousel";
import RiskMgtHeroSection from "./_components/risk-mgt-hero";
import RiskManagementPolicyContent from "./_components/risk-mgt-content";

export const metadata: Metadata = {
  title: "Risk Management Policy",
  description: "Understand Covenant Microfinance Bank's Risk Management Policy, our approach to identifying, assessing, and mitigating various banking and operational risks.",
  keywords: [
    "covenant microfinance bank risk management",
    "risk management policy",
    "banking risks",
    "risk assessment",
    "risk mitigation",
    "operational risk",
    "credit risk",
    "financial risk management",
    "risk controls",
    "banking compliance"
  ],
  openGraph: {
    title: "Risk Management Policy - Covenant Microfinance Bank",
    description: "Understand our Risk Management Policy and approach to identifying, assessing, and mitigating banking risks.",
    url: "/risk-management-policy",
    images: [
      {
        url: "/og-risk.jpg",
        width: 1200,
        height: 630,
        alt: "Risk Management Policy - Covenant Microfinance Bank",
      },
    ],
  },
  twitter: {
    title: "Risk Management Policy - Covenant Microfinance Bank",
    description: "Understand our Risk Management Policy and approach to managing banking risks.",
  },
};

function page() {
  return (
    <div>
      <RiskMgtHeroSection />
      <RiskManagementPolicyContent />
      <Carousel />
    </div>
  );
}

export default page;
