"use client";
import Image from "next/image";
import PageBanner from "../../_components/reusable-hero-banner";

const pageTitle = (
  <>
    Covenant Microfinance Bank <br />
    Limited - Terms and Conditions
  </>
);
const TermsandConditionsHeroSection = () => {
  return <PageBanner pillText={"Terms and Conditions"} title={pageTitle} />;
};

export default TermsandConditionsHeroSection;
