import React from "react";
import Navbar from "../(website)/_components/navbar";
import Carousel from "../(website)/_components/carousel";
import CTA from "../(website)/_components/cta-section";
import Footer from "../(website)/_components/footer-section";
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
      <Navbar />
      <HelpCenterHeroSection />
      <AccountServices />
      <MagicCodeUssd />
      <PictorialSection />
      <MobileApp />
      <InternetBanking />
      <OtherServices />
      <Carousel />
      <CTA />
      <Footer />
    </div>
  );
}

export default page;
