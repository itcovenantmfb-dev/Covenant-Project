import React from "react";
import { Metadata } from "next";
import HeroSection from "./_components/hero-section";
import WhyChooseUs from "./_components/why-choose-us";
import NumbersSection from "./_components/numbers-section";
import Testimonials from "./_components/testimonials";
import NewsSection from "./_components/news-section";
import Gallery from "./_components/gallery";
import FAQSection from "./_components/faq-section";
import Carousel from "./_components/carousel";
import ProductsSection from "./products/services/_components/products-section";
import { getTestimonials } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Welcome to Covenant Microfinance Bank - Your trusted partner for savings, loans, digital banking, and comprehensive financial solutions. Join thousands of satisfied customers today.",
  keywords: [
    "covenant microfinance bank",
    "microfinance services",
    "savings accounts",
    "micro loans",
    "digital banking",
    "mobile banking",
    "financial services",
    "banking solutions",
    "credit facilities",
    "business loans",
  ],
  openGraph: {
    title: "Covenant Microfinance Bank - Your Trusted Financial Partner",
    description:
      "Welcome to Covenant Microfinance Bank - Your trusted partner for savings, loans, digital banking, and comprehensive financial solutions.",
    url: "/",
    images: [
      {
        url: "/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Covenant Microfinance Bank Homepage",
      },
    ],
  },
  twitter: {
    title: "Covenant Microfinance Bank - Your Trusted Financial Partner",
    description:
      "Welcome to Covenant Microfinance Bank - Your trusted partner for savings, loans, digital banking, and comprehensive financial solutions.",
  },
};
const page = async () => {
  const testimonials = await getTestimonials();

  return (
    <main className="min-h-screen">
      <HeroSection />
      <div className="lg:mt-[-0px] 3xl:mt-[-100px]  bg-white">
        <WhyChooseUs />
      </div>
      <NumbersSection />
      <ProductsSection />
      <Testimonials testimonials={testimonials} />
      <NewsSection />
      <Gallery />
      <FAQSection />
      <Carousel />
    </main>
  );
};

export default page;
