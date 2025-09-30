import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./_components/navbar";
import CTA from "./_components/cta-section";
import Footer from "./_components/footer-section";
import localFont from "next/font/local";
import ZohoDeskWidget from "./_components/ZohoDeskWidget";
import ZohoIMWidget from "./_components/ZohoIMWidget";
import AosClient from "./_components/aos-client";
const myFont = localFont({
  src: [
    {
      path: "../public/fonts/BrittiSansTrial-Regular-BF6757bfd47ffbf.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/BrittiSansTrial-Bold-BF6757bfd4a96ed.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-britti",
});

export const metadata: Metadata = {
  title: {
    default: "Covenant Microfinance Bank - Your Trusted Financial Partner",
    template: "%s | Covenant Microfinance Bank"
  },
  description: "Covenant Microfinance Bank provides comprehensive financial services including savings accounts, loans, digital banking, and mobile banking solutions to empower individuals and businesses.",
  keywords: [
    "microfinance bank",
    "savings account",
    "loans",
    "digital banking",
    "mobile banking",
    "financial services",
    "covenant microfinance",
    "banking solutions",
    "micro loans",
    "business banking"
  ],
  authors: [{ name: "Covenant Microfinance Bank" }],
  creator: "Covenant Microfinance Bank",
  publisher: "Covenant Microfinance Bank",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://covenantmfb.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://covenantmfb.com",
    siteName: "Covenant Microfinance Bank",
    title: "Covenant Microfinance Bank - Your Trusted Financial Partner",
    description: "Covenant Microfinance Bank provides comprehensive financial services including savings accounts, loans, digital banking, and mobile banking solutions.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Covenant Microfinance Bank",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Covenant Microfinance Bank - Your Trusted Financial Partner",
    description: "Covenant Microfinance Bank provides comprehensive financial services including savings accounts, loans, digital banking, and mobile banking solutions.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${myFont.className} antialiased`}>
        <AosClient>
          <Navbar />

          {children}

          <ZohoDeskWidget />

          <ZohoIMWidget />

          <CTA />
          <Footer />
        </AosClient>
      </body>
    </html>
  );
}
