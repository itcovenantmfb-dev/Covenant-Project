import React from "react";
import Carousel from "../_components/carousel";
import FormHeroSection from "./_components/forms-hero";
import DownloadableForms from "./_components/form-page-content";

function page() {
  return (
    <div>
      <FormHeroSection />
      <DownloadableForms />
      <Carousel />
    </div>
  );
}

export default page;
