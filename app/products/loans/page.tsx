import { Metadata } from "next";
import Carousel from "@/app/_components/carousel";
import LoanFeaturedSection from "./_components/loan-featured-section";
import LoansSection from "./_components/loans-section";
import LoanHeroSection from "./_components/loan-hero-section";
import LoanSimpleSteps from "./_components/loan-simple-steps";
import LoanCalculatorSection from "./_components/loan-calculator-section";

export const metadata: Metadata = {
  title: "Loans & Credit Facilities",
  description: "Access various loan products from Covenant Microfinance Bank including personal loans, business loans, SME financing, and micro-credit facilities with competitive rates.",
  keywords: [
    "covenant microfinance bank loans",
    "personal loans",
    "business loans",
    "sme loans",
    "micro loans",
    "credit facilities",
    "loan application",
    "competitive interest rates",
    "quick loan approval",
    "microfinance loans"
  ],
  openGraph: {
    title: "Loans & Credit Facilities - Covenant Microfinance Bank",
    description: "Access various loan products including personal loans, business loans, and SME financing with competitive rates.",
    url: "/products/loans",
    images: [
      {
        url: "/og-loans.jpg",
        width: 1200,
        height: 630,
        alt: "Loans & Credit Facilities - Covenant Microfinance Bank",
      },
    ],
  },
  twitter: {
    title: "Loans & Credit Facilities - Covenant Microfinance Bank",
    description: "Access various loan products with competitive rates and quick approval.",
  },
};

export default function LoansPage() {
  return (
    <div>
      <LoanHeroSection />
      <LoanFeaturedSection />
      <LoanSimpleSteps />
      <LoansSection />
      {/* <LoanCalculatorSection /> */}
      <Carousel />
    </div>
  );
}