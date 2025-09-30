import React from "react";
import { Metadata } from "next";
import CareersHeroSection from "./_components/careers-hero";
import Carousel from "../_components/carousel";
import JobListings from "./_components/job-listing";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join our team at Covenant Microfinance Bank! Explore exciting career opportunities, job openings, and build your future in the financial services industry with us.",
  keywords: [
    "covenant microfinance bank careers",
    "banking jobs",
    "job opportunities",
    "financial services careers",
    "microfinance jobs",
    "bank employment",
    "career development",
    "job vacancies",
    "work at covenant bank",
    "banking professionals"
  ],
  openGraph: {
    title: "Careers - Covenant Microfinance Bank",
    description: "Join our team at Covenant Microfinance Bank! Explore exciting career opportunities and job openings in financial services.",
    url: "/careers",
    images: [
      {
        url: "/og-careers.jpg",
        width: 1200,
        height: 630,
        alt: "Careers at Covenant Microfinance Bank",
      },
    ],
  },
  twitter: {
    title: "Careers - Covenant Microfinance Bank",
    description: "Join our team at Covenant Microfinance Bank! Explore exciting career opportunities and job openings.",
  },
};

function page() {
  return (
    <div>
      <CareersHeroSection />
      <Carousel />
    </div>
  );
}

export default page;
