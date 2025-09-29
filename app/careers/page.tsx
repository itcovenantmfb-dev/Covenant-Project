import React from "react";
import CareersHeroSection from "./_components/careers-hero";
import Carousel from "../_components/carousel";
import JobListings from "./_components/job-listing";

function page() {
  return (
    <div>
      <CareersHeroSection />
      <Carousel />
    </div>
  );
}

export default page;
