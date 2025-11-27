import React from "react";
import MeetTheTeamSection from "./_components/meet-the-team";
import Carousel from "../_components/carousel";
import { getTestimonials } from "@/sanity/lib/queries";
import Testimonials from "../_components/testimonials";

const page = async () => {
  const testimonials = await getTestimonials();

  return (
    <div>
      <MeetTheTeamSection />
      <Testimonials testimonials={testimonials} />
      <Carousel />
    </div>
  );
};

export default page;
