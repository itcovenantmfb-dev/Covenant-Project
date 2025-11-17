import ReusableBanner from "@/app/(website)/_components/reusable-banner";
import React from "react";

const LoanHeroSection = () => {
  return (
    <div>
      <ReusableBanner
        pillText={"Loans"}
        title="Secure, reliable services for individuals, families, and businesses."
        bgPattern="/Core Menu (8) 1.svg"
      />
    </div>
  );
};

export default LoanHeroSection;
