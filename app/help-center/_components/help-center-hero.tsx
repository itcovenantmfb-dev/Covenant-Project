"use client";
import PageBanner from "@/app/(website)/_components/reusable-hero-banner";

const pageTitle = (
  <>
    We’re here to help with your
    <br /> banking needs anytime.
  </>
);
const HelpCenterHeroSection = () => {
  return (
    <div>
      <PageBanner pillText={"Help Center"} title={pageTitle} />
    </div>
  );
};

export default HelpCenterHeroSection;
