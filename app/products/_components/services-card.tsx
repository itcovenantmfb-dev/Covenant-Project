import { ShieldCheck } from "lucide-react";
import React from "react";

const ServiceCard = ({
  title,
  description,
  position = "flex-row items-center",
}: {
  title?: string;
  description?: string;
  position?: string;
}) => {
  return (
    <div
      key={title}
      className="flex flex-col rounded-2xl bg-[#F8F8F8] p-6 shadow-sm ring-0"
    >
      <div className={`flex ${position}  gap-5`}>
        <div className="flex-shrink-0">
          <ShieldCheck className="h-7 w-7 text-green-600" aria-hidden="true" />
        </div>
        <div className="flex flex-col">
          {title && (
            <h3 className="text-base font-bold leading-7 text-black-900">
              {title}
            </h3>
          )}

          {description && (
            <p className="mt-1 text-sm lg:text-md leading-6 text-black-600">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
