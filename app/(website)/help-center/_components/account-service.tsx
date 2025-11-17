// src/components/AccountServices.tsx

import {
  servicesData,
  ServiceCardData,
} from "@/app/(website)/_data/account-service-data";
import React from "react";

const ContentRenderer: React.FC<{ parts: any[] }> = ({ parts }) => {
  return (
    <>
      {parts.map((part, index) => {
        const linkClasses = "text-[#1D9B5E] hover:text-green-700 font-medium";

        switch (part.type) {
          case "link":
            return (
              <a key={index} href={part.href} className={linkClasses}>
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
          case "ussd":
            return (
              <span key={index} className={linkClasses}>
                {part.content}
              </span>
            );

          default:
            return <span key={index}>{part.content}</span>;
        }
      })}
    </>
  );
};

const AccountServices: React.FC = () => {
  return (
    <section className="bg-white mt-8">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-slate-800 mb-14">
          Account Services
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((card: ServiceCardData, cardIndex: number) => (
            <div key={cardIndex} className="bg-slate-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-slate-900 mb-5">
                {card.title}
              </h3>
              <ul className="space-y-4 text-slate-700">
                {card.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <span className="mr-3 text-slate-600 mt-1">•</span>
                    <div>
                      <p>
                        <ContentRenderer parts={item.content} />
                      </p>
                      {item.subContent && (
                        <p className="mt-3">
                          <ContentRenderer parts={item.subContent} />
                        </p>
                      )}
                      {item.contactInfo && (
                        <div className=" space-y-1">
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccountServices;
