"use client";
import Image from "next/image";
import PageBanner from "../../_components/reusable-hero-banner";

const pageTitle = (
  <>
    Summary Of Enterprise <br />
    Management Policy
  </>
);
const RiskMgtHeroSection = () => {
  return <PageBanner pillText={"Risk Management"} title={pageTitle} />;
};

export default RiskMgtHeroSection;
