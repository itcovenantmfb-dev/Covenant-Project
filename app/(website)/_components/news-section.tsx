import React from "react";
import Title from "./title";
import NewsCard from "./news-card";
import { urlFor } from "@/sanity/lib/image";

interface NewsArticle {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  image: any;
  publishedAt: string;
}

interface NewsSectionProps {
  newsArticles: NewsArticle[];
  showTitle?: boolean;
}

const NewsSection = ({ newsArticles, showTitle = true }: NewsSectionProps) => {
  return (
    <section data-aos="fade-up" className="py-6 lg:py-16 bg-[#F1F5EB]">
      <div className="flex flex-col items-center justify-center gap-6 px-4">
        {showTitle && (
          <>
            <Title
              text="News / Announcement"
              borderColor="[#1D9B5E]/40"
              textColor="#1D9B5E"
            />
            <div className="max-w-[655px] mx-auto mb-8 text-center">
              <h2 className="font-semibold text-lg lg:text-[28px] text-[#020617]">
                Stay Updated with the latest news, events and official
                announcements from Covenant MFB
              </h2>
            </div>
          </>
        )}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {newsArticles.length > 0 ? (
            newsArticles.map((newsItem) => (
              <NewsCard
                key={newsItem._id}
                title={newsItem.title}
                text={
                  newsItem.excerpt.length > 150
                    ? `${newsItem.excerpt.substring(0, 150)}...`
                    : newsItem.excerpt
                }
                date={new Date(newsItem.publishedAt).toLocaleDateString(
                  "en-US",
                  {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  }
                )}
                image={
                  newsItem.image
                    ? urlFor(newsItem.image).width(600).height(400).url()
                    : "/image (3).svg"
                }
                slug={newsItem.slug.current}
              />
            ))
          ) : (
            <p className="col-span-2 text-center text-gray-500">
              No news articles available at the moment.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
