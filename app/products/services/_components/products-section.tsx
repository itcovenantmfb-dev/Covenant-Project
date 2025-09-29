import { PRODUCT_DATA } from "@/app/_data/products";

import React from "react";
import ProductCard from "../../_components/products-card";
import Title from "@/app/_components/title";

const ProductsSection = () => {
  return (
    <section className="bg-[#F1F5EB] py-6 lg:py-16">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center justify-center gap-6 px-4">
        <Title text="Products" borderColor="[#1D9B5E]/40" textColor="#1D9B5E" />
        <div className="max-w-[950px]">
          <h2 className="font-semibold text-lg lg:text-[28px] text-[#020617]">
            Discover financial products designed to help you save, grow, and
            achieve more — with convenience, security, and trusted support every
            step.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full">
          {PRODUCT_DATA.map((product) => (
            <ProductCard
              title={product.title}
              imageSrc={product.imageSrc}
              description={product.description}
              link={product.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
