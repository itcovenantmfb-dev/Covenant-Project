import React from "react";
import Carousel from "../_components/carousel";
import RiskMgtHeroSection from "./_components/risk-mgt-hero";
import RiskManagementPolicyContent from "./_components/risk-mgt-content";

function page() {
  return (
    <div>
      <RiskMgtHeroSection />
      <RiskManagementPolicyContent />
      <Carousel />
    </div>
  );
}

export default page;
