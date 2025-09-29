import Carousel from "@/app/_components/carousel";
import DigitalBankingHeroSection from "./_components/digital-banking-hero-section";
import SecurityFeaturesSection from "./_components/security-features-section";
import DigitalServicesSection from "./_components/digital-services-section";
import UssdBankingSection from "./_components/ussd-banking-section";

export default function DigitalBankingPage() {
  return (
    <div>
      <DigitalBankingHeroSection />
      <SecurityFeaturesSection />
      <DigitalServicesSection />
      <UssdBankingSection />
      <Carousel />
    </div>
  );
}