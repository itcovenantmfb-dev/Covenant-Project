import ReusableBanner from "@/app/_components/reusable-banner";
import IntroSection from "./_components/intro-section";
import FeaturesSection from "./_components/features-section";
import CTASection from "./_components/cta-section";
import CarouselSection from "./_components/carousel-section";
import UssdBankingSection from "../_components/ussd-banking-section";
import BenefitsSection from "./_components/benefits-section";

export default function POSPage() {
  return (
    <div>
      <ReusableBanner
        pillText={"Products / Digital Banking / POS Terminal"}
        title="Reliable POS solutions for your business payment needs."
        firstImage={"/Illustaration (1).svg"}
        secondImage={"/ilust 1.svg"}
      />
      <IntroSection />
      <FeaturesSection />
      <BenefitsSection />
      <CTASection />
      <UssdBankingSection />

      <CarouselSection />
    </div>
  );
}
