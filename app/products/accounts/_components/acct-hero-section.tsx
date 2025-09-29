import ReusableBanner from "@/app/_components/reusable-banner";
import React from "react";

const AccountHeroSection = () => {
  return (
    <div>
      {" "}
      <ReusableBanner
        pillText={"Products / Accounts"}
        title="  Secure, reliable services for individuals, families, and
              businesses."
        firstImage={"/Illustaration (1).svg"}
        secondImage={"/ilust 1.svg"}
      />
    </div>
  );
};

export default AccountHeroSection;
