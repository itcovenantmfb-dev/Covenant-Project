import HeroBanner from "./_components/hero-banner";
import IntroSection from "./_components/intro-section";
import FeaturesSection from "./_components/features-section";
import BenefitsSection from "./_components/benefits-section";
import GetStartedSection from "./_components/get-started-section";
import CarouselSection from "./_components/carousel-section";
import ReusableBanner from "@/app/_components/reusable-banner";
import UssdBankingSection from "../_components/ussd-banking-section";
export default function MobileBankingPage() {
  return (
    <div>
      <ReusableBanner
        pillText={"Products/Digital Banking/Mobile Banking"}
        title="  Secure, reliable services for individuals, families, and
              businesses."
        firstImage={"/Illustaration (1).svg"}
        secondImage={"/ilust 1.svg"}
      />
      <IntroSection />
      <FeaturesSection />
      <BenefitsSection />
      <HeroBanner />
      <GetStartedSection />
      <UssdBankingSection />
      <CarouselSection />
    </div>
  );
}
