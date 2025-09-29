import Carousel from "@/app/_components/carousel";

import AccountFeaturedSection from "./_components/account-featured-section";

import AccountsSection from "./_components/accounts-section";
import AccountHeroSection from "./_components/acct-hero-section";
import AccountSimpleSteps from "./_components/account-simple-steps";

export default function AccountsPage() {
  return (
    <div>
      <AccountHeroSection/>
      <AccountFeaturedSection />
      <AccountSimpleSteps/>
      <AccountsSection />
      <Carousel />
    </div>
  );
}
