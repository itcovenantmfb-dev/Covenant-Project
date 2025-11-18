import Link from "next/link";
import React from "react";
import { Metadata } from "next";
import NewsHeroSection from "./_components/news-hero";
import BlogList from "./_components/blog-list";
import Carousel from "../_components/carousel";
import { getAllNews } from "@/sanity/lib/queries";

export const dynamic = "force-static";
export const revalidate = 60;

export const metadata: Metadata = {
  title: "News & Updates",
  description: "Stay updated with the latest news, announcements, and insights from Covenant Microfinance Bank. Read about our services, financial tips, and industry updates.",
  keywords: [
    "covenant microfinance bank news",
    "banking news",
    "financial updates",
    "bank announcements",
    "microfinance industry",
    "financial tips",
    "banking insights",
    "press releases",
    "company news",
    "financial services updates"
  ],
  openGraph: {
    title: "News & Updates - Covenant Microfinance Bank",
    description: "Stay updated with the latest news, announcements, and insights from Covenant Microfinance Bank.",
    url: "/news",
    images: [
      {
        url: "/og-news.jpg",
        width: 1200,
        height: 630,
        alt: "News & Updates - Covenant Microfinance Bank",
      },
    ],
  },
  twitter: {
    title: "News & Updates - Covenant Microfinance Bank",
    description: "Stay updated with the latest news, announcements, and insights from Covenant Microfinance Bank.",
  },
};

const page = async () => {
  try {
    const newsArticles = await getAllNews();

    return (
      <div>
        <NewsHeroSection />
        <BlogList newsArticles={newsArticles} />
        <Carousel />
      </div>
    );
  } catch (error) {
    console.error('Error fetching news:', error);
    return (
      <div>
        <NewsHeroSection />
        <BlogList newsArticles={[]} error="Failed to load news articles. Please try again later." />
        <Carousel />
      </div>
    );
  }
};

export default page;
