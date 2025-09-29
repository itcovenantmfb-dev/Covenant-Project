"use client";
import ReusableBanner from "@/app/_components/reusable-banner";

const pageTitle = (
  <>
    Behind the Bank:
    <br />
    Our People, Our Purpose, Our Promise
  </>
);

const AboutHeroSection = () => {
  return (
    <ReusableBanner
      pillText={"About Us"}
      title={pageTitle}
      firstImage={"/flot-one.svg"}
      secondImage={"/flot-2.svg"}
    />
  );
};

export default AboutHeroSection;
