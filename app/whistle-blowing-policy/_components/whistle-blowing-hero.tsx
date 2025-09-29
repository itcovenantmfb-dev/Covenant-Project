"use client";
import Image from "next/image";
import PageBanner from "../../_components/reusable-hero-banner";

const pageTitle = (
  <>
    Speak Up Safely: Protecting
    <br />
    Integrity, Transparency and
    <br />
    Accountability at Covenant
  </>
);
const WhistleBlowingHeroSection = () => {
  return <PageBanner pillText={"Whistle Blowing Policy"} title={pageTitle} />;
};

export default WhistleBlowingHeroSection;
