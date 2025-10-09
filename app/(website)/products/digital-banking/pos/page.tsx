import { Metadata } from "next";

import IntroSection from "./_components/intro-section";
import FeaturesSection from "./_components/features-section";
import CTASection from "./_components/cta-section";
import CarouselSection from "./_components/carousel-section";
import UssdBankingSection from "../_components/ussd-banking-section";
import BenefitsSection from "./_components/benefits-section";
import ReusableBanner from "@/app/(website)/_components/reusable-banner";

export const metadata: Metadata = {
  title: "POS Terminal Services",
  description: "Get POS terminal solutions from Covenant Microfinance Bank for your business. Accept card payments, increase sales, and provide convenient payment options to customers.",
  keywords: [
    "covenant microfinance bank pos terminal",
    "pos machine",
    "card payment terminal",
    "business payment solutions",
    "accept card payments",
    "merchant services",
    "payment processing",
    "pos rental",
    "card reader",
    "business banking"
  ],
  openGraph: {
    title: "POS Terminal Services - Covenant Microfinance Bank",
    description: "Get POS terminal solutions for your business to accept card payments and increase sales.",
    url: "/products/digital-banking/pos",
    images: [
      {
        url: "/og-pos.jpg",
        width: 1200,
        height: 630,
        alt: "POS Terminal Services - Covenant Microfinance Bank",
      },
    ],
  },
  twitter: {
    title: "POS Terminal Services - Covenant Microfinance Bank",
    description: "Get POS terminal solutions for your business to accept card payments.",
  },
};

export default function POSPage() {
  return (
    <div>
      <ReusableBanner
        pillText={"Products / Digital Banking / POS Terminal"}
        title="Reliable POS solutions for your business payment needs."
        firstImage={"/Illustaration (1).svg"}
        secondImage={"/ilust 1.svg"}
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
