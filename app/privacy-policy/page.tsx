import React from "react";
import Carousel from "../_components/carousel";
import PrivacyPolicyHeroSection from "./_components/privacy-policy-hero";
import PrivacyPolicyContent from "./_components/privacy-policy-content";

function page() {
  return (
    <div>
      <PrivacyPolicyHeroSection />
      <PrivacyPolicyContent />
      <Carousel />
    </div>
  );
}

export default page;
