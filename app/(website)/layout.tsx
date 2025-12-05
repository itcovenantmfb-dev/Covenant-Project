import { Suspense } from "react";
import Navbar from "./_components/navbar";
import CTA from "./_components/cta-section";
import Footer from "./_components/footer-section";
import ZohoDeskWidget from "./_components/ZohoDeskWidget";
import ZohoIMWidget from "./_components/ZohoIMWidget";
import AosClient from "./_components/aos-client";
import ScrollToTop from "./_components/scroll-to-top";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <AosClient>
        <Suspense fallback={<div className="h-20" />}>
          <Navbar />
        </Suspense>
        {children}
        <ZohoDeskWidget />
        <ZohoIMWidget />
        <CTA />
        <Footer />
        <ScrollToTop />
      </AosClient>
    </main>
  );
}
