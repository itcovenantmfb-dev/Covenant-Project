import { Metadata } from "next";

import IntroSection from "./_components/intro-section";
import FeaturesSection from "./_components/features-section";
import CTASection from "./_components/cta-section";
import CarouselSection from "./_components/carousel-section";
import BenefitsSection from "./_components/benefits-section";
import UssdBankingSection from "../_components/ussd-banking-section";
import ReusableBanner from "@/app/(website)/_components/reusable-banner";

export const metadata: Metadata = {
  title: "Debit Cards & ATM Services",
  description:
    "Get your Covenant Microfinance Bank debit card for secure payments and ATM access. Enjoy worldwide acceptance, contactless payments, and 24/7 ATM services.",
  keywords: [
    "covenant microfinance bank debit card",
    "atm card",
    "mastercard visa",
    "contactless payment",
    "atm services",
    "debit card features",
    "secure payments",
    "worldwide acceptance",
    "24/7 atm access",
    "card security",
  ],
  openGraph: {
    title: "Debit Cards & ATM Services - Covenant Microfinance Bank",
    description:
      "Get your debit card for secure payments and ATM access with worldwide acceptance and contactless payments.",
    url: "/products/digital-banking/atm",
    images: [
      {
        url: "/og-debit-card.jpg",
        width: 1200,
        height: 630,
        alt: "Debit Cards & ATM Services - Covenant Microfinance Bank",
      },
    ],
  },
  twitter: {
    title: "Debit Cards & ATM Services - Covenant Microfinance Bank",
    description:
      "Get your debit card for secure payments and worldwide ATM access.",
  },
};

export default function DebitCardPage() {
  return (
    <div>
      <ReusableBanner
        pillText={"Debit Card"}
        title="Secure, convenient card services for seamless payments and transactions."
        bgPattern="/Core Menu (9) 1.svg"
      />
      <IntroSection />
      <FeaturesSection />
      <BenefitsSection />
      <CTASection />
      <UssdBankingSection />
      <CarouselSection />
    </div>
  );
}
