import React from "react";
import Carousel from "../_components/carousel";
import WhistleBlowingHeroSection from "./_components/whistle-blowing-hero";
import WhistleblowingPolicyContent from "./_components/whistle-blowing-content";

function page() {
  return (
    <div>
      <WhistleBlowingHeroSection />
      <WhistleblowingPolicyContent />
      <Carousel />
    </div>
  );
}

export default page;
