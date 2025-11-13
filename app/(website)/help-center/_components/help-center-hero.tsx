"use client";
import PageBanner from "@/app/(website)/_components/reusable-hero-banner";
import ReusableBanner from "../../_components/reusable-banner";

const pageTitle = (
  <>
    We’re here to help with your
    <br /> banking needs anytime.
  </>
);
const HelpCenterHeroSection = () => {
  return (
    <div>
      <ReusableBanner pillText={"Help Center"} title={pageTitle} bgPattern="/Core Menu (3) 1.svg" />
    </div>
  );
};

export default HelpCenterHeroSection;
