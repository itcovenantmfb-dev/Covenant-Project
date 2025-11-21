import React from "react";
import Image from "next/image";
import Link from "next/link";
const ProductCard = ({
  title,
  imageSrc,
  description,
  link,
}: {
  title: string;
  imageSrc: string;
  description: string;
  link: string;
}) => {
  return (
    <div
      data-aos="fade-up"
      className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg shadow-gray-900/5 h-full"
    >
      <div className="relative aspect-[4/4] w-full h-85">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-contain px-1.5"
        />
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-6">
        <h3 className="text-base sm:text-lg font-bold text-gray-900">
          {title}
        </h3>
        <p className="mt-2 flex-1 text-sm text-gray-800 leading-relaxed">
          {description}
        </p>
        <Link
          href={link}
          className="mt-4 sm:mt-6 inline-block w-full rounded-lg bg-green-600 px-4 sm:px-6 py-2.5 text-center text-sm font-semibold text-white shadow-sm transition-colors hover:bg-green-700  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
