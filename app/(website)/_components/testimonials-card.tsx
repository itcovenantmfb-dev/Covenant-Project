import Image from "next/image";
import React from "react";

interface TestimonialsCardProps {
  testimonial: string;
  name: string;
  business: string;
}

const TestimonialsCard = ({
  testimonial,
  name,
  business,
}: TestimonialsCardProps) => {
  return (
    <div className="testimonial-card w-full mx-auto">
      <div
        data-aos="fade-up"
        className="bg-[#F8FAFC] rounded-[16px] p-6 lg:p-10 flex flex-col justify-between h-[320px]"
      >
        <p className="text-[#020617] text-base font-normal text-center mb-6">
          {testimonial}
        </p>
        <div className="flex items-center justify-center text-center gap-3 mt-auto">
          <div>
            <span className="font-bold text-[#020617]">{name}</span>
            <span className="text-[#64748B] font-normal"> {business}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;
