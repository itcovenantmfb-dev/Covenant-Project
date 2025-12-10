import React from "react";
import Title from "./title";
import CSRCard from "./csr-card";
import { urlFor } from "@/sanity/lib/image";

interface CSRArticle {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  image: any;
  publishedAt: string;
}

interface CSRSectionProps {
  csrArticles: CSRArticle[];
  showTitle?: boolean;
}

const CSRSection = ({ csrArticles, showTitle = true }: CSRSectionProps) => {
  return (
    <section data-aos="fade-up" className="py-6 lg:py-16 bg-[#F1F5EB]">
      <div className="flex flex-col items-center justify-center gap-6 px-4">
        {showTitle && (
          <>
            <Title
              text="CSR Initiatives"
              borderColor="[#1D9B5E]/40"
              textColor="#1D9B5E"
            />
            <div className="max-w-[655px] mx-auto mb-8 text-center">
              <h2 className="font-semibold text-lg lg:text-[28px] text-[#020617]">
                Discover our Corporate Social Responsibility initiatives and
                community impact programs
              </h2>
            </div>
          </>
        )}
        {csrArticles.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {csrArticles.map((csrItem) => (
              <CSRCard
                key={csrItem._id}
                title={csrItem.title}
                text={
                  csrItem.excerpt.length > 150
                    ? `${csrItem.excerpt.substring(0, 150)}...`
                    : csrItem.excerpt
                }
                date={new Date(csrItem.publishedAt).toLocaleDateString(
                  "en-US",
                  {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  }
                )}
                image={
                  csrItem.image
                    ? urlFor(csrItem.image).width(600).height(400).url()
                    : "/image (3).svg"
                }
                slug={csrItem.slug.current}
              />
            ))}
          </div>
        ) : (
          <div className="w-full max-w-4xl mx-auto">
            <div className="text-center py-16 px-8 border border-gray-200 rounded-xl bg-white/50">
              <div className="mx-auto max-w-md">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-6">
                  <svg
                    className="h-8 w-8 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No CSR Initiatives
                </h3>
                <p className="text-gray-600">
                  We don't have any CSR initiatives published at the moment. Check
                  back soon for updates on our community impact programs!
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CSRSection;
