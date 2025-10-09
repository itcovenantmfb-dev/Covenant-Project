import Image from "next/image";
import React from "react";

interface TestimonialsCardProps {
  testimonial: string;
  name: string;
  business: string;
  avatar: string;
}

const TestimonialsCard = ({
  testimonial,
  name,
  business,
  avatar,
}: TestimonialsCardProps) => {
  return (
    <div className="testimonial-card">
      <div data-aos="fade-up" className="bg-[#F8FAFC] rounded-[16px] p-4 lg:p-8 flex flex-col items-center justify-between min-h-[260px] h-full mx-2 ">
        <p className="text-[#020617] text-base font-normal text-center mb-6">
          "{testimonial}"
        </p>
        <div className="flex items-center gap-3 mt-auto">
          <Image src={avatar} alt={name} height={44} width={44} />
          <div>
            <span className="font-bold text-[#020617]">{name},</span>
            <span className="text-[#64748B] font-normal"> {business}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;
