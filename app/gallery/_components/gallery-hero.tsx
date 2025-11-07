"use client";
import PageBanner from "@/app/(website)/_components/reusable-hero-banner";

const pageTitle = (
  <>
    Capturing Our Journey of
    <br />
    Growth, Impact, and Community
    <br /> Engagement
  </>
);
const GalleryHeroSection = () => {
  return (
    <div>
      <PageBanner pillText={"Gallery"} title={pageTitle} />
    </div>
  );
};

export default GalleryHeroSection;
