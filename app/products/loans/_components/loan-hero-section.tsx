import ReusableBanner from "@/app/_components/reusable-banner";
import React from "react";

const LoanHeroSection = () => {
  return (
    <div>
      <ReusableBanner
        pillText={"Products / Loans"}
        title="Secure, reliable services for individuals, families, and businesses."
        firstImage={"/Illustaration (1).svg"}
        secondImage={"/ilust 1.svg"}
      />
    </div>
  );
};

export default LoanHeroSection;