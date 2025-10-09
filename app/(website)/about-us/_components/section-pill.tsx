import React from 'react';

interface SectionPillProps {
  children: React.ReactNode;
  className?: string;
}

const SectionPill: React.FC<SectionPillProps> = ({ children, className }) => {
  return (
    <span 
      className={`mb-2 inline-flex items-center rounded-full border border-green-300  px-3 py-1 text-sm font-medium text-green-600  bg-white ${className}`}
    >
      <span className="mr-2 block h-2 w-2 rounded-full bg-green-500"></span>
      {children}
    </span>
  );
};

export default SectionPill;



