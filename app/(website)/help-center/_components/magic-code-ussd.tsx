import {
  ussdData,
  UssdCardData,
} from "@/app/(website)/_data/magic-code-ussd-data";
import React from "react";

const ContentRenderer: React.FC<{ parts: any[] }> = ({ parts }) => {
  const linkClasses = "text-[#1D9B5E] hover:text-green-700 font-medium";

  return (
    <>
      {parts.map((part, index) => {
        switch (part.type) {
          case "link":
            return (
              <a key={index} href={part.href || "#"} className={linkClasses}>
                {part.content}
              </a>
            );
          case "email":
            return (
              <a
                key={index}
                href={`mailto:${part.content}`}
                className={linkClasses}
              >
                {part.content}
              </a>
            );
          case "phone":
            return (
              <a
                key={index}
                href={`tel:${part.content}`}
                className={linkClasses}
              >
                {part.content}
              </a>
            );
          default:
            return <span key={index}>{part.content}</span>;
        }
      })}
    </>
  );
};

const MagicCodeUssd: React.FC = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl md:text-4xl font-bold  mb-14">
          Magic Code USSD
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {ussdData.map((card: UssdCardData, index: number) => (
            <div key={index} className="bg-slate-50 p-8 rounded-2xl">
              <div className="flex items-start">
                <span className="mr-3 text-slate-600 mt-1">•</span>
                <div className="text-slate-700">
                  {card.lineContent && (
                    <p>
                      <ContentRenderer parts={card.lineContent} />
                    </p>
                  )}

                  {card.title && <p>{card.title}</p>}
                  {card.contactInfo && (
                    <div className="mt-3 space-y-1">
                      {card.contactInfo.phone && (
                        <a
                          href={`tel:${card.contactInfo.phone}`}
                          className="block text-[#1D9B5E] hover:text-green-700 font-medium"
                        >
                          {card.contactInfo.phone}
                        </a>
                      )}
                      {card.contactInfo.email && (
                        <a
                          href={`mailto:${card.contactInfo.email}`}
                          className="block text-[#1D9B5E] hover:text-green-700 font-medium"
                        >
                          {card.contactInfo.email}
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MagicCodeUssd;
