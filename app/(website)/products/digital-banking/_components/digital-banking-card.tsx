"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

interface DigitalBankingCardProps {
  id: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  linkUrl?: string;
  imageWidth?: number;
  className?: string;
}

export function DigitalBankingCard({
  id,
  title,
  description,
  features,
  imageWidth,
  image,
  linkUrl,
  className = "",
}: DigitalBankingCardProps) {
  return (
    <Card
      className={`bg-[#F1F5EB] border-none hover:shadow-lg pb-0 transition-shadow duration-200 ${className}`}
    >
      <CardContent className="flex flex-col lg:flex-row justify-center items-center gap-6 sm:gap-8 lg:gap-10 p-4 sm:p-6">
        <div className="flex flex-col gap-4 sm:gap-5 w-full lg:w-auto">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#020617] text-center lg:text-left">
            {title}
          </h3>
          <div className="space-y-3 sm:space-y-2 mb-4">
             {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <Image
                src="/icons/mark.svg"
                alt="check-icon"
                width={20}
                height={20}
                className="mt-1 flex-shrink-0"
              />
              <p className="text-[#000]/70 text-sm lg:text-base leading-relaxed">{feature}</p>
            </div>
          ))}
          </div>
         
          <div className="flex-1 w-full lg:w-auto">
            {linkUrl ? (
              <Link href={linkUrl} className="block w-full lg:w-auto">
                <Button size={"lg"} className="bg-green-600 hover:bg-green-700 text-white w-full lg:w-auto">
                  View Details
                </Button>
              </Link>
            ) : (
              <Button className="bg-green-600 hover:bg-green-700 text-white w-full lg:w-auto">
                View Details
              </Button>
            )}
          </div>
        </div>

        <div className="flex justify-center w-full lg:w-auto">
          <div className="mt-0  max-w-[280px] sm:max-w-[350px] lg:max-w-none">
            <Image
              src={image}
              alt={title}
              width={imageWidth || 400}
              height={400}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
