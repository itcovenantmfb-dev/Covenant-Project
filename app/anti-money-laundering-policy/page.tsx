import Carousel from "@/app/_components/carousel";
import React from "react";
import AntiMoneyHeroSection from "./_components/anti-money-hero";
import AmlPolicyContent from "./_components/anti-money-content";

function page() {
  return (
    <div>
      <AntiMoneyHeroSection />
      <AmlPolicyContent />
      <Carousel />
    </div>
  );
}

export default page;
