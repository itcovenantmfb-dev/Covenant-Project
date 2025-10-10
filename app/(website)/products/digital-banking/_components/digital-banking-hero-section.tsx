
import ReusableBanner from "@/app/(website)/_components/reusable-banner";
import React from "react";

const DigitalBankingHeroSection = () => {
  return (
    <div>
      <ReusableBanner
        pillText={"Products / Digital Banking"}
        title="Secure, reliable services for individuals, families, and businesses."
        firstImage={"/Illustaration (1).svg"}
        secondImage={"/ilust 1.svg"}
      />
    </div>
  );
};

export default DigitalBankingHeroSection;