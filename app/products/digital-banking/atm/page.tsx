import ReusableBanner from "@/app/_components/reusable-banner";
import IntroSection from "./_components/intro-section";
import FeaturesSection from "./_components/features-section";
import CTASection from "./_components/cta-section";
import CarouselSection from "./_components/carousel-section";
import BenefitsSection from "./_components/benefits-section";
import UssdBankingSection from "../_components/ussd-banking-section";

export default function DebitCardPage() {
  return (
    <div>
      <ReusableBanner
        pillText={"Products / Digital Banking / Debit Card"}
        title="Secure, convenient card services for seamless payments and transactions."
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
