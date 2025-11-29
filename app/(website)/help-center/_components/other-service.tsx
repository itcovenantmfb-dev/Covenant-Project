import {
  otherServicesData,
  SectionData,
  ServiceCard,
} from "@/app/(website)/_data/other-service-data";
import React from "react";

interface OtherServicesProps {
  displaySectionId?: "card-service" | "loans";
}

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

const OtherServices: React.FC<OtherServicesProps> = ({ displaySectionId }) => {
  const sectionsToRender = displaySectionId
    ? otherServicesData.filter((section) => section.id === displaySectionId)
    : otherServicesData;

  return (
    <section className="bg-white mt-10">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-20">
        {sectionsToRender.map((section: SectionData) => (
          <div key={section.title}>
            <h2 className="text-center text-3xl md:text-4xl font-bold text-slate-800 mb-14">
              {section.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {section.cards.map(
                (cardItems: ServiceCard, cardIndex: number) => (
                  <div key={cardIndex} className="bg-slate-50 p-8 rounded-2xl">
                    <ul className="space-y-5">
                      {cardItems.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <span className="mr-3 text-slate-600 mt-1">•</span>
                          <div className="text-slate-700">
                            <p>
                              <ContentRenderer parts={item.content} />
                            </p>
                            {item.contactInfo && (
                              <div className="mt-3 space-y-1">
                                {item.contactInfo.phone && (
                                  <a
                                    href={`tel:${item.contactInfo.phone}`}
                                    className="block text-[#1D9B5E] hover:text-green-700 font-medium"
                                  >
                                    {item.contactInfo.phone}
                                  </a>
                                )}
                                {item.contactInfo.email && (
                                  <a
                                    href={`mailto:${item.contactInfo.email}`}
                                    className="block text-[#1D9B5E] hover:text-green-700 font-medium"
                                  >
                                    {item.contactInfo.email}
                                  </a>
                                )}
                              </div>
                            )}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OtherServices;
