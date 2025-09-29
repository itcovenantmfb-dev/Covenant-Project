import React from "react";
import Title from "./title";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqData = [
  {
    category: "General Questions",
    questions: [
      {
        question: "How can I open an account with Covenant MFB?",
        answer:
          "You can open an account by visiting any of our branches or starting online. All you need is a valid ID and proof of address.",
        // active: true,
      },
      {
        question: "What types of loans does Covenant MFB offer?",
        answer:
          "We offer personal, business, and asset financing loans tailored to your needs.",
      },
    ],
  },
  {
    category: "Questions Pertaining Digital Banking (E-Channels)",
    questions: [
      {
        question: "How can I open an account with Covenant MFB?",
        answer:
          "You can open an account by visiting any of our branches or starting online. All you need is a valid ID and proof of address.",
        // active: true,
      },
      {
        question: "What types of loans does Covenant MFB offer?",
        answer:
          "We offer personal, business, and asset financing loans tailored to your needs.",
      },
    ],
  },
  {
    category: "Questions Pertaining Accounts",
    questions: [
      {
        question: "How do I become a POS or agency banking partner?",
        answer:
          "Contact our business team or visit a branch to get started as a partner.",
      },
      {
        question: "Is internet banking secure with Covenant MFB?",
        answer:
          "Yes, our internet banking platform uses advanced security protocols to protect your data.",
      },
    ],
  },
  {
    category: "Questions Pertaining Loans/Investments",
    questions: [
      {
        question: "How do I become a POS or agency banking partner?",
        answer:
          "Contact our business team or visit a branch to get started as a partner.",
      },
      {
        question: "Is internet banking secure with Covenant MFB?",
        answer:
          "Yes, our internet banking platform uses advanced security protocols to protect your data.",
      },
    ],
  },
];
const FAQSection = () => {
  return (
    <section className="py-6 lg:py-16 flex flex-col items-center justify-center gap-6 px-4">
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
        {faqData.map((cat) => (
          <div key={cat.category} className="space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[#1D9B5E] text-2xl">•</span>
              <span className="font-semibold text-[#5B5B5B] text- lg:text-lg">
                {cat.category}
              </span>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              {cat.questions.map((q, index) => (
                <AccordionItem
                  key={index}
                  value={q.question}
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
                    {q.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
