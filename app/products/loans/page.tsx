import Carousel from "@/app/_components/carousel";
import LoanFeaturedSection from "./_components/loan-featured-section";
import LoansSection from "./_components/loans-section";
import LoanHeroSection from "./_components/loan-hero-section";
import LoanSimpleSteps from "./_components/loan-simple-steps";
import LoanCalculatorSection from "./_components/loan-calculator-section";

export default function LoansPage() {
  return (
    <div>
      <LoanHeroSection />
      <LoanFeaturedSection />
      <LoanSimpleSteps />
      <LoansSection />
      <LoanCalculatorSection />
      <Carousel />
    </div>
  );
}