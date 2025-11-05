import React from "react";
import { Metadata } from "next";
import FaqHeroSection from "./_components/faq-hero";
import FaqPageContent from "./_components/faq-page-content";
import Carousel from "../_components/carousel";
import { getAllFAQs } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Find answers to common questions about Covenant Microfinance Bank's services, accounts, loans, digital banking, fees, and more. Get quick solutions to your banking queries.",
  keywords: [
    "covenant microfinance bank faq",
    "banking questions",
    "account information",
    "loan requirements",
    "digital banking help",
    "mobile banking support",
    "banking fees",
    "customer support",
    "bank services explained",
    "frequently asked questions",
  ],
  openGraph: {
    title: "FAQ - Covenant Microfinance Bank",
    description:
      "Find answers to common questions about Covenant Microfinance Bank's services, accounts, loans, and digital banking.",
    url: "/faq",
    images: [
      {
        url: "/og-faq.jpg",
        width: 1200,
        height: 630,
        alt: "FAQ - Covenant Microfinance Bank",
      },
    ],
  },
  twitter: {
    title: "FAQ - Covenant Microfinance Bank",
    description:
      "Find answers to common questions about our banking services, accounts, loans, and digital banking.",
  },
};

async function page() {
  const faqs = await getAllFAQs();
  console.log(faqs);
  return (
    <div>
      <FaqHeroSection />
      <FaqPageContent faqs={faqs} />
      <Carousel />
    </div>
  );
}

export default page;
