"use client";
import Image from "next/image";
import PageBanner from "../../_components/reusable-hero-banner";

const pageTitle = (
  <>
    Explore stories, news, and
    <br />
    advice from Covenant MFB.
  </>
);
const NewsHeroSection = () => {
  return <PageBanner pillText={"News & Announcement"} title={pageTitle} />;
};

export default NewsHeroSection;
