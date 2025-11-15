import React from "react";
import Carousel from "../_components/carousel";
import HelpCenterHeroSection from "./_components/help-center-hero";
import AccountServices from "./_components/account-service";
import MagicCodeUssd from "./_components/magic-code-ussd";
import MobileApp from "./_components/mobile-app";
import InternetBanking from "./_components/internet-banking";
import OtherServices from "./_components/other-service";
import PictorialSection from "./_components/pictorial";
import CustomerSupport from "./_components/customer-support";

function page() {
  return (
    <div>
      <HelpCenterHeroSection />
      <CustomerSupport />
      <Carousel />
    </div>
  );
}

export default page;
