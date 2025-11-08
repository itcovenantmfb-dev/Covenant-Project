import React from "react";
import GalleryHeroSection from "./_components/gallery-hero";
import Carousel from "../(website)/_components/carousel";
import Navbar from "../(website)/_components/navbar";
import CTA from "../(website)/_components/cta-section";
import Footer from "../(website)/_components/footer-section";
import GallerySection from "./_components/gallery-content";

function page() {
  return (
    <div>
      <Navbar />
      <GalleryHeroSection />
      <GallerySection />
      <Carousel />
      <CTA />
      <Footer />
    </div>
  );
}

export default page;
