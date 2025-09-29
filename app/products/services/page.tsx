import React from "react";
import ProductHeroSection from "./_components/product-hero-section";
import SecureServices from "./_components/secure-services";

import Carousel from "@/app/_components/carousel";
import ProductsSection from "./_components/products-section";

const page = () => {
  return (
    <div>
      <ProductHeroSection />
      <SecureServices />
      <ProductsSection />
      <Carousel />
    </div>
  );
};

export default page;
