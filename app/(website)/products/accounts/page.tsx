import { Metadata } from "next";

import AccountFeaturedSection from "./_components/account-featured-section";
import AccountsSection from "./_components/accounts-section";
import AccountHeroSection from "./_components/acct-hero-section";
import AccountSimpleSteps from "./_components/account-simple-steps";
import Carousel from "../../_components/carousel";

export const metadata: Metadata = {
  title: "Savings Accounts",
  description: "Open a savings account with Covenant Microfinance Bank. Choose from various account types with competitive interest rates, low fees, and excellent customer service.",
  keywords: [
    "covenant microfinance bank savings accounts",
    "savings account",
    "bank account",
    "current account",
    "fixed deposit",
    "target savings",
    "domiciliary account",
    "account opening",
    "competitive interest rates",
    "low banking fees"
  ],
  openGraph: {
    title: "Savings Accounts - Covenant Microfinance Bank",
    description: "Open a savings account with competitive interest rates, low fees, and excellent customer service.",
    url: "/products/accounts",
    images: [
      {
        url: "/og-accounts.jpg",
        width: 1200,
        height: 630,
        alt: "Savings Accounts - Covenant Microfinance Bank",
      },
    ],
  },
  twitter: {
    title: "Savings Accounts - Covenant Microfinance Bank",
    description: "Open a savings account with competitive interest rates and excellent service.",
  },
};

export default function AccountsPage() {
  return (
    <div>
      <AccountHeroSection/>
      <AccountFeaturedSection />
      <AccountSimpleSteps/>
      <AccountsSection />
      <Carousel />
    </div>
  );
}
