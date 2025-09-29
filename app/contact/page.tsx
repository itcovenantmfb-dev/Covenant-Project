import React from "react";
import ContactHeroSection from "./_components/contact-hero";
import Carousel from "../_components/carousel";
import ContactPageContent from "./_components/contact-page-content";
import BranchLocator from "./_components/branch-locator";

function page() {
  return (
    <div>
      <ContactHeroSection />
      <ContactPageContent />
      <BranchLocator />
      <Carousel />
    </div>
  );
}

export default page;
