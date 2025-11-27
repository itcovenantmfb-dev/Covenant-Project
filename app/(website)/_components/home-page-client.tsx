"use client";

import { useRef } from "react";
import HeroSection from "./hero-section";
import WhyChooseUs from "./why-choose-us";
import NumbersSection from "./numbers-section";
import Testimonials from "./testimonials";
import NewsSection from "./news-section";
import FAQSection from "./faq-section";
import Carousel from "./carousel";
import ProductsSection from "../products/services/_components/products-section";

export default function HomePageClient({
  testimonials,
  recentNews,
  recentFAQs,
}: any) {
  const productsSectionRef = useRef<HTMLElement>(null);

  const handleScrollToProducts = () => {
    productsSectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main className="min-h-screen">
      <HeroSection onLearnMoreClick={handleScrollToProducts} />

      <div className="lg:mt-[-0px] 3xl:mt-[-100px]  bg-white">
        <WhyChooseUs />
      </div>
      <NumbersSection />

      <section ref={productsSectionRef}>
        <ProductsSection />
      </section>

      {testimonials && <Testimonials testimonials={testimonials} />}
      {recentNews && <NewsSection newsArticles={recentNews} />}
      {recentFAQs && <FAQSection faqs={recentFAQs} />}
      <Carousel />
    </main>
  );
}
