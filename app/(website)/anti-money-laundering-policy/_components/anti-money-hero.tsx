"use client";
import Image from "next/image";
import PageBanner from "../../_components/reusable-hero-banner";

const pageTitle = (
  <>
    Anti-Money Laundering and
    <br />
    Countering Financing of <br />
    Terrotism Policy Statement
  </>
);
const AntiMoneyHeroSection = () => {
  return <PageBanner pillText={"Anti-Money Laundering"} title={pageTitle} />;
};

export default AntiMoneyHeroSection;
