import React from "react";
import HeroSection from "./_components/hero-section";
import WhyChooseUs from "./_components/why-choose-us";
import NumbersSection from "./_components/numbers-section";

import Testimonials from "./_components/testimonials";
import NewsSection from "./_components/news-section";
import Gallery from "./_components/gallery";
import FAQSection from "./_components/faq-section";
import Carousel from "./_components/carousel";
import ProductsSection from "./products/services/_components/products-section";

const page = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <div className="lg:mt-[-0px] 3xl:mt-[-100px]  bg-white">
        <WhyChooseUs />
      </div>

      <NumbersSection />
      <ProductsSection />
      <Testimonials />
      <NewsSection />
      <Gallery />
      <FAQSection />
      <Carousel />
    </main>
  );
};

export default page;
