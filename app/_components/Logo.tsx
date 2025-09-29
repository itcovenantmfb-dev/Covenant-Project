import Link from "next/link";
import React from "react";
import Image from "next/image";

const BrandLogo = ({ small }: { small?: boolean }) => {
  return (
    <Link href={"/"}>
      <Image
        src={"/icons/logo.svg"}
        alt="company logo"
        width={small ? 40 : 56}
        height={small ? 40 : 53}
      />
    </Link>
  );
};

export default BrandLogo;
