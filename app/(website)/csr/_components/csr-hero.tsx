"use client";
import Image from "next/image";
import PageBanner from "../../_components/reusable-hero-banner";

const pageTitle = (
  <>
    Corporate Social Responsibility
    <br />
    Making a Difference Together
  </>
);
const CSRHeroSection = () => {
  return <PageBanner pillText={"CSR Initiatives"} title={pageTitle} />;
};

export default CSRHeroSection;
