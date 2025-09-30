import Link from "next/link";
import React from "react";
import Image from "next/image";

const BrandLogo = ({ small }: { small?: boolean }) => {
  return (
    <Link href={"/"}>
      <Image
        src={"/Brand-logo.svg"}
        alt="company logo"
        width={small ? 100 : 130}
        height={small ? 100 : 130}
      />
    </Link>
  );
};

export default BrandLogo;
