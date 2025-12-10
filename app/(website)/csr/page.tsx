import Link from "next/link";
import React from "react";
import { Metadata } from "next";
import CSRHeroSection from "./_components/csr-hero";
import Carousel from "../_components/carousel";
import { getAllCSR } from "@/sanity/lib/queries";
import CSRSection from "../_components/csr-section";

export const dynamic = "force-static";
export const revalidate = 60;

export const metadata: Metadata = {
  title: "CSR Initiatives",
  description:
    "Discover Covenant Microfinance Bank's Corporate Social Responsibility initiatives and community impact programs. Learn about our commitment to social development and community empowerment.",
  keywords: [
    "covenant microfinance bank csr",
    "corporate social responsibility",
    "community development",
    "social initiatives",
    "community empowerment",
    "financial literacy programs",
    "social impact",
    "sustainability",
    "community programs",
    "csr activities",
  ],
  openGraph: {
    title: "CSR Initiatives - Covenant Microfinance Bank",
    description:
      "Discover Covenant Microfinance Bank's Corporate Social Responsibility initiatives and community impact programs.",
    url: "/csr",
    images: [
      {
        url: "/og-csr.jpg",
        width: 1200,
        height: 630,
        alt: "CSR Initiatives - Covenant Microfinance Bank",
      },
    ],
  },
  twitter: {
    title: "CSR Initiatives - Covenant Microfinance Bank",
    description:
      "Discover Covenant Microfinance Bank's Corporate Social Responsibility initiatives and community impact programs.",
  },
};

const page = async () => {
  try {
    const csrArticles = await getAllCSR();

    return (
      <div>
        <CSRHeroSection />
        <CSRSection csrArticles={csrArticles} showTitle={false} />
        <Carousel />
      </div>
    );
  } catch (error) {
    console.error("Error fetching CSR initiatives:", error);
    return (
      <div>
        <CSRHeroSection />
        <CSRSection csrArticles={[]} showTitle={false} />
        <Carousel />
      </div>
    );
  }
};

export default page;
