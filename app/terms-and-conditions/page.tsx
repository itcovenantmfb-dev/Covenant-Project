import React from "react";
import Carousel from "../_components/carousel";
import TermsAndConditionsContent from "./_components/terms-and-conditions-content";
import TermsandConditionsHeroSection from "./_components/terms-and-condition-hero";

function page() {
  return (
    <div>
      <TermsandConditionsHeroSection />
      <TermsAndConditionsContent />
      <Carousel />
    </div>
  );
}

export default page;
