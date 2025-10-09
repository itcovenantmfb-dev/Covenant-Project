import React from "react";
import { Metadata } from "next";
import ContactHeroSection from "./_components/contact-hero";
import Carousel from "../_components/carousel";
import ContactPageContent from "./_components/contact-page-content";
import BranchLocator from "./_components/branch-locator";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Covenant Microfinance Bank. Find our branch locations, contact information, customer service details, and reach out for banking inquiries and support.",
  keywords: [
    "contact covenant microfinance bank",
    "bank branches",
    "customer service",
    "banking support",
    "branch locations",
    "contact information",
    "phone numbers",
    "email addresses",
    "bank address",
    "customer care"
  ],
  openGraph: {
    title: "Contact Us - Covenant Microfinance Bank",
    description: "Get in touch with Covenant Microfinance Bank. Find our branch locations, contact information, and customer service details.",
    url: "/contact",
    images: [
      {
        url: "/og-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Covenant Microfinance Bank",
      },
    ],
  },
  twitter: {
    title: "Contact Us - Covenant Microfinance Bank",
    description: "Get in touch with Covenant Microfinance Bank. Find our branch locations and contact information.",
  },
};

function page() {
  return (
    <div>
      <ContactHeroSection />
      <ContactPageContent />
      <BranchLocator />
      <Carousel />
    </div>
  );
}

export default page;
