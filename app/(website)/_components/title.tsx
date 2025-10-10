import React from "react";

const Title = ({
  text,
  borderColor = "#1D9B5E",
  textColor = "[#1D9B5E]/40",
}: {
  text: string;
  borderColor: string;
  textColor: string;
}) => {
  return (
    <div
      style={{ color: textColor }}
      className={`text-${textColor} py-0  px-4 border border-${borderColor} w-fit rounded-full font-semibold text-xs lg:text-sm flex items-center justify-center text-center gap-2`}
    >
      <span className="text-sm lg:text-xl">•</span> {text}
    </div>
  );
};

export default Title;
