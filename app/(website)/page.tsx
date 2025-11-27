import { Metadata } from "next";
import {
  getTestimonials,
  getRecentNews,
  getRecentFAQs,
} from "@/sanity/lib/queries";
import HomePageClient from "./_components/home-page-client";

export const dynamic = "force-static";
export const revalidate = 60;

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

const Page = async () => {
  const testimonials = await getTestimonials();
  const recentNews = await getRecentNews(4);
  const recentFAQs = await getRecentFAQs(4);

  return (
    <HomePageClient
      testimonials={testimonials}
      recentNews={recentNews}
      recentFAQs={recentFAQs}
    />
  );
};

export default Page;
