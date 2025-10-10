"use client";
import PageBanner from "../../_components/reusable-hero-banner";

const pageTitle = (
  <>
    Your Most Important Questions,
    <br />
    Answered Quickly and Clearly
  </>
);
const FaqHeroSection = () => {
  return (
    <div>
      <PageBanner pillText={"FAQs"} title={pageTitle} />
    </div>
  );
};

export default FaqHeroSection;
