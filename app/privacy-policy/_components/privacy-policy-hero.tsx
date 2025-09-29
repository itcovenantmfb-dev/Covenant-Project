"use client";
import PageBanner from "../../_components/reusable-hero-banner";

const pageTitle = (
  <>
    Your Data, Our Priority: Secure,
    <br />
    Transparent and Confidential Banking
  </>
);
const PrivacyPolicyHeroSection = () => {
  return <PageBanner pillText={"Privacy Policy"} title={pageTitle} />;
};

export default PrivacyPolicyHeroSection;
