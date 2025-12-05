import React from "react";
import Title from "./title";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { PortableText } from "@portabletext/react";
import { portableTextComponents } from "@/lib/portableTextComponents";

interface FAQ {
  _id: string;
  question: string;
  answer: any; // PortableText block content
  category: string;
}

interface FAQSectionProps {
  faqs: FAQ[];
}

const categoryMapping: Record<string, string> = {
  "digital-banking": "Questions Pertaining Digital Banking (E-Channels)",
  "loans-investments": "Questions Pertaining Loans/Investments",
  "accounts": "Questions Pertaining Accounts",
  "general": "General Questions",
};

const FAQSection = ({ faqs }: FAQSectionProps) => {
  // Group FAQs by category
  const groupedFaqs = faqs.reduce((acc, faq) => {
    const category = faq.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(faq);
    return acc;
  }, {} as Record<string, FAQ[]>);

  // Convert to array format for rendering
  const faqData = Object.entries(groupedFaqs).map(([category, questions]) => ({
    category: categoryMapping[category] || category,
    questions,
  }));
  return (
    <section data-aos="fade-up" className="py-6 lg:py-16 flex flex-col items-center justify-center gap-6 px-4">
      <Title
        text="Frequently Asked Questions (FAQ)"
        borderColor="[#1D9B5E]/40"
        textColor="#1D9B5E"
      />
      <div className="max-w-[945px] mx-auto mb-8">
        <h2 className="font-semibold text-xl lg:text-[28px] text-[#020617]">
          Find quick answers to common questions about Covenant MFB — helping
          you bank smarter with clarity, ease, and confidence.
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-[1200px] mx-auto ">
        {faqData.length > 0 ? (
          faqData.map((cat) => (
            <div key={cat.category} className="space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[#1D9B5E] text-2xl">•</span>
                <span className="font-semibold text-[#5B5B5B] text- lg:text-lg">
                  {cat.category}
                </span>
              </div>
              <Accordion type="single" collapsible className="space-y-4">
                {cat.questions.map((q) => (
                  <AccordionItem
                    key={q._id}
                    value={q._id}
                    className={`rounded-[17px] bg-[#FFFFFF] data-[state=open]:bg-[#F1F5EB] shadow-md data-[state=open]:shadow-none border-none px-6 py-4 h-fit`}
                  >
                    <AccordionTrigger
                      className={` flex items-center justify-between w-full text-left px-0 py-0 hover:no-underline cursor-pointer shadow-none`}
                      style={{ boxShadow: "none" }}
                    >
                      <span className="font-semibold text-base lg:text-lg text-[#034833]">
                        {q.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-[#727272] text-sm lg:text-base text-justify leading-7 tracking-wide pt-2 pb-1 px-0 ">
                      <PortableText value={q.answer} components={portableTextComponents} />
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))
        ) : (
          <p className="col-span-2 text-center text-gray-500">No FAQs available at the moment.</p>
        )}
      </div>
    </section>
  );
};

export default FAQSection;
