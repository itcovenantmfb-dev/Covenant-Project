import {
  CardData,
  topRowData,
  bottomRowCard,
} from "@/app/(website)/_data/mobile-app-data";
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
          case "title":
            return (
              <p key={index} className="font-bold text-lg mb-1">
                {part.content}
              </p>
            );
          default:
            return <span key={index}>{part.content}</span>;
        }
      })}
    </>
  );
};

const ServiceCard: React.FC<{ cardData: CardData }> = ({ cardData }) => (
  <div className="flex items-start">
    <span className="mr-3 text-slate-600 mt-1">•</span>
    <div className="text-slate-700">
      <p>
        <ContentRenderer parts={cardData.content} />
      </p>
      {cardData.contactInfo && (
        <div className="mt-3 space-y-1">
          {cardData.contactInfo.phone && (
            <a
              href={`tel:${cardData.contactInfo.phone}`}
              className="block text-[#1D9B5E] hover:text-green-700 font-medium"
            >
              {cardData.contactInfo.phone}
            </a>
          )}
          {cardData.contactInfo.email && (
            <a
              href={`mailto:${cardData.contactInfo.email}`}
              className="block text-[#1D9B5E] hover:text-green-700 font-medium"
            >
              {cardData.contactInfo.email}
            </a>
          )}
        </div>
      )}
    </div>
  </div>
);

const InternetBanking: React.FC = () => {
  return (
    <section className="bg-white mt-8">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-slate-800 mb-14">
          Internet Banking
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topRowData.map((card, index) => (
            <div key={index} className="bg-slate-50 p-8 rounded-2xl">
              <ServiceCard cardData={card} />
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <div className="bg-slate-50 p-8 rounded-2xl lg:w-fit lg:whitespace-pre-line md:max-w-2xl">
            <ServiceCard cardData={bottomRowCard} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternetBanking;
