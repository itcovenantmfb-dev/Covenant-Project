"use client";
import ReusableBanner from "@/app/_components/reusable-banner";

const ProductHeroSection = () => {
  return (
    <>
      <ReusableBanner
        pillText={"Products"}
        title="  Secure, reliable services for individuals, families, and
              businesses."
        firstImage={"/Illustaration (1).svg"}
        secondImage={"/ilust 1.svg"}
      />
    </>
  );
};
export default ProductHeroSection;
