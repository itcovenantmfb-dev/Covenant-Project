"use client";

import React, { useState } from "react";
import { Form, allForms } from "../../_data/forms-data";
import { FileText } from "lucide-react";
import SectionPill from "../../about-us/_components/section-pill";

const FormCard: React.FC<{ form: Form }> = ({ form }) => (
  <div className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5">
    <div className="flex items-center justify-between">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#A2DE49] ">
        <FileText className="h-5 w-5" />
      </div>
      <span className="rounded-xl bg-gray-100 px-4 py-2 text-xs font-medium text-gray-600">
        {form.category}
      </span>
    </div>
    <div className="mt-4 flex-grow">
      <h3 className="text-base font-bold text-gray-900">{form.title}</h3>
      <p className="mt-2 text-sm text-gray-600 line-clamp-3">
        {form.description}
      </p>
    </div>
    <div className="mt-2 border-gray-200 pt-2">
      <div className="flex items-center justify-between text-sm text-gray-500">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#0F9D58]"></span>
          <span className="text-[#0F9D58] font-semibold text-sm">
            {form.fileType}
          </span>
        </div>
        <span>{form.fileSize}</span>
      </div>
      <a
        href={form.downloadLink}
        download
        className="mt-4 block w-full rounded-xl bg-green-600 px-6 py-2.5 text-center text-sm font-semibold text-white shadow-sm transition-colors hover:bg-green-700"
      >
        Download Form
      </a>
    </div>
  </div>
);

// --- The Main Component with Filtering Logic ---
const DownloadableForms = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const filterCategories = [
    "All",
    "Accounts",
    "Credits",
    "Electronic",
    "ATM/Debit",
    "Others",
  ];

  const categoryDisplayNames: Record<string, string> = {
    Accounts: "Account Opening Forms",
    Credits: "Credit Facility Forms",
    "ATM/Debit": "ATM / Debit Card Forms",
    Electronic: "Electronic Banking Forms",
    Others: "Other Forms",
  };

  const filteredForms =
    activeFilter === "All"
      ? allForms
      : allForms.filter((form) => form.category === activeFilter);

  const groupedForms = allForms.reduce(
    (acc, form) => {
      const category = form.category;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(form);
      return acc;
    },
    {} as Record<Form["category"], Form[]>
  );

  // Define the order in which you want the categories to appear.
  const categoryOrder: Form["category"][] = [
    "Accounts",
    "Credits",
    "Electronic",
    "ATM/Debit",
    "Others",
  ];

  return (
    <section className="bg-[#FFFFFF] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Filter Tabs */}
        <div className="mb-12 flex items-center justify-center">
          <div className="flex space-x-2 rounded-full bg-[#F9FFF5] p-1.5 shadow-sm ring-1 ring-inset ring-gray-200">
            {filterCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`rounded-full px-6 py-1 text-sm font-semibold transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2
                  ${
                    activeFilter === cat
                      ? "bg-white text-gray-700 shadow" // Active state
                      : "text-gray-600 hover:bg-white/50" // Inactive state
                  }
                `}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {activeFilter === "All" ? (
          categoryOrder.map((category) => {
            const formsInCategory = groupedForms[category];
            if (!formsInCategory || formsInCategory.length === 0) return null;

            return (
              <div key={category} className="mb-20 last:mb-0">
                <div className="mb-12 text-center">
                  <SectionPill>{categoryDisplayNames[category]} </SectionPill>
                </div>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {formsInCategory.map((form) => (
                    <FormCard key={form.id} form={form} />
                  ))}
                </div>
              </div>
            );
          })
        ) : (
          <div className="mb-20 last:mb-0">
            <div className="mb-12 text-center">
              <SectionPill>{categoryDisplayNames[activeFilter]}</SectionPill>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filteredForms.map((form) => (
                <FormCard key={form.id} form={form} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default DownloadableForms;
