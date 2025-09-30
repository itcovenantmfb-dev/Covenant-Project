"use client";
import Image from "next/image";
import PageBanner from "../../_components/reusable-hero-banner";

const pageTitle = (
  <>
    We're listening. Contact us for
    <br />
    any banking assistance
  </>
);
const ContactHeroSection = () => {
  return (
    <div data-aos="fade-up">
      <PageBanner pillText={"Contact"} title={pageTitle} />
    </div>
  );
};

export default ContactHeroSection;
