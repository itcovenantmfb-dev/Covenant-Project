import React from "react";
import { Metadata } from "next";
import ProductHeroSection from "./_components/product-hero-section";
import SecureServices from "./_components/secure-services";
import Carousel from "@/app/_components/carousel";
import ProductsSection from "./_components/products-section";

export const metadata: Metadata = {
  title: "Banking Services",
  description: "Explore comprehensive banking services from Covenant Microfinance Bank including money transfers, bill payments, foreign exchange, and other financial services.",
  keywords: [
    "covenant microfinance bank services",
    "banking services",
    "money transfer",
    "bill payment",
    "foreign exchange",
    "remittances",
    "financial services",
    "western union",
    "moneygram",
    "utility payments"
  ],
  openGraph: {
    title: "Banking Services - Covenant Microfinance Bank",
    description: "Explore comprehensive banking services including money transfers, bill payments, and foreign exchange.",
    url: "/products/services",
    images: [
      {
        url: "/og-services.jpg",
        width: 1200,
        height: 630,
        alt: "Banking Services - Covenant Microfinance Bank",
      },
    ],
  },
  twitter: {
    title: "Banking Services - Covenant Microfinance Bank",
    description: "Explore comprehensive banking services including money transfers and bill payments.",
  },
};

const page = () => {
  return (
    <div>
      <ProductHeroSection />
      <SecureServices />
      <ProductsSection />
      <Carousel />
    </div>
  );
};

export default page;
