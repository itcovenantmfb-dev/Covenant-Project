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
  return (
    <div data-aos="fade-up">
      <PageBanner pillText={"Privacy Policy"} title={pageTitle} />
    </div>
  );
};

export default PrivacyPolicyHeroSection;
