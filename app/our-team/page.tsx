import React from "react";
import MeetTheTeamSection from "./_components/meet-the-team";
import Testimonials from "../(website)/_components/testimonials";
import Navbar from "../(website)/_components/navbar";
import Carousel from "../(website)/_components/carousel";
import Footer from "../(website)/_components/footer-section";
import CTA from "../(website)/_components/cta-section";
function page() {
  return (
    <div>
      <Navbar />
      <MeetTheTeamSection />
      <Testimonials />
      <Carousel />
      <CTA />
      <Footer />
    </div>
  );
}

export default page;
