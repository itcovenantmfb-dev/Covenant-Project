import React from "react";
import Navbar from "../_components/navbar";
import Carousel from "../_components/carousel";
import CTA from "../_components/cta-section";
import Footer from "../_components/footer-section";
import HelpCenterHeroSection from "./_components/help-center-hero";
import AccountServices from "./_components/account-service";
import MagicCodeUssd from "./_components/magic-code-ussd";
import MobileApp from "./_components/mobile-app";
import InternetBanking from "./_components/internet-banking";
import OtherServices from "./_components/other-service";
import PictorialSection from "./_components/pictorial";

function page() {
  return (
    <div>
      <HelpCenterHeroSection />
      <AccountServices />
      <MagicCodeUssd />
      <PictorialSection />
      <MobileApp />
      <InternetBanking />
      <OtherServices />
      <Carousel />
    </div>
  );
}

export default page;
