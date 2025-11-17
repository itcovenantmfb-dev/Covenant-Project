import ReusableBanner from "@/app/(website)/_components/reusable-banner";
import React from "react";

const AccountHeroSection = () => {
  return (
    <div>
      <ReusableBanner
        pillText={"Accounts"}
        title="Secure, reliable accounts for individuals, families, and businesses."
        bgPattern="/Core Menu (6) 1.svg"
      />
    </div>
  );
};

export default AccountHeroSection;
