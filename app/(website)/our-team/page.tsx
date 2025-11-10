import React from "react";
import MeetTheTeamSection from "./_components/meet-the-team";
import Testimonials from "../_components/testimonials";

import Carousel from "../_components/carousel";

import CTA from "../_components/cta-section";
function page() {
  return (
    <div>
      <MeetTheTeamSection />
      <Testimonials />
      <Carousel />
    
    </div>
  );
}

export default page;
