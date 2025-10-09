import { Metadata } from "next";

import DigitalBankingHeroSection from "./_components/digital-banking-hero-section";
import SecurityFeaturesSection from "./_components/security-features-section";
import DigitalServicesSection from "./_components/digital-services-section";
import UssdBankingSection from "./_components/ussd-banking-section";
import Carousel from "../../_components/carousel";

export const metadata: Metadata = {
  title: "Digital Banking Solutions",
  description: "Experience secure and convenient digital banking with Covenant Microfinance Bank. Access mobile banking, internet banking, USSD services, and ATM facilities.",
  keywords: [
    "covenant microfinance bank digital banking",
    "mobile banking",
    "internet banking",
    "online banking",
    "ussd banking",
    "atm services",
    "digital banking solutions",
    "secure banking",
    "convenient banking",
    "24/7 banking"
  ],
  openGraph: {
    title: "Digital Banking Solutions - Covenant Microfinance Bank",
    description: "Experience secure and convenient digital banking with mobile banking, internet banking, and USSD services.",
    url: "/products/digital-banking",
    images: [
      {
        url: "/og-digital-banking.jpg",
        width: 1200,
        height: 630,
        alt: "Digital Banking Solutions - Covenant Microfinance Bank",
      },
    ],
  },
  twitter: {
    title: "Digital Banking Solutions - Covenant Microfinance Bank",
    description: "Experience secure and convenient digital banking with mobile and internet banking services.",
  },
};

export default function DigitalBankingPage() {
  return (
    <div>
      <DigitalBankingHeroSection />
      <SecurityFeaturesSection />
      <DigitalServicesSection />
      <UssdBankingSection />
      <Carousel />
    </div>
  );
}