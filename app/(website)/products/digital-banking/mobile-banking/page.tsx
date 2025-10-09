import { Metadata } from "next";
import HeroBanner from "./_components/hero-banner";
import IntroSection from "./_components/intro-section";
import FeaturesSection from "./_components/features-section";
import BenefitsSection from "./_components/benefits-section";
import GetStartedSection from "./_components/get-started-section";
import CarouselSection from "./_components/carousel-section";
import ReusableBanner from "@/app/(website)/_components/reusable-banner";
import UssdBankingSection from "../_components/ussd-banking-section";

export const metadata: Metadata = {
  title: "Mobile Banking App",
  description: "Download Covenant Microfinance Bank's mobile banking app for secure, convenient banking on the go. Transfer funds, pay bills, check balances, and more from your phone.",
  keywords: [
    "covenant microfinance bank mobile app",
    "mobile banking app",
    "banking app download",
    "mobile money transfer",
    "bill payment app",
    "balance inquiry",
    "mobile banking services",
    "secure mobile banking",
    "ios android banking app",
    "digital wallet"
  ],
  openGraph: {
    title: "Mobile Banking App - Covenant Microfinance Bank",
    description: "Download our mobile banking app for secure, convenient banking on the go. Transfer funds, pay bills, and check balances.",
    url: "/products/digital-banking/mobile-banking",
    images: [
      {
        url: "/og-mobile-banking.jpg",
        width: 1200,
        height: 630,
        alt: "Mobile Banking App - Covenant Microfinance Bank",
      },
    ],
  },
  twitter: {
    title: "Mobile Banking App - Covenant Microfinance Bank",
    description: "Download our mobile banking app for secure, convenient banking on the go.",
  },
};
export default function MobileBankingPage() {
  return (
    <div>
      <ReusableBanner
        pillText={"Products/Digital Banking/Mobile Banking"}
        title="  Secure, reliable services for individuals, families, and
              businesses."
        firstImage={"/Illustaration (1).svg"}
        secondImage={"/ilust 1.svg"}
      />
      <IntroSection />
      <FeaturesSection />
      <BenefitsSection />
      <HeroBanner />
      <GetStartedSection />
      <UssdBankingSection />
      <CarouselSection />
    </div>
  );
}
