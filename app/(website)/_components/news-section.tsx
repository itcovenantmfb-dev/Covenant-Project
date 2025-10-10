import React from "react";
import Title from "./title";
import NewsCard from "./news-card";

const newsData = [
  {
    title: "Unlocking Flexible Pricing for SaaS Success",
    text: "Learn how customizable pricing boosts customer satisfaction and drives revenue growth in the SaaS world....",
    date: "16 Jun 2024",
    image: "/image (3).svg",
    slug: "flexible-saas-pricing",
  },
  {
    title: "Decoding the Psychology of Pricing Tiers",
    text: "Pricing perception impacts decision-making. Learn how visual cues and strategic tiering influence customer choices....",
    date: "16 Jun 2024",
    image: "/image (4).svg",
    slug: "psychology-of-pricing",
  },
  {
    title: "Starter Plans Tailored for Small Businesses",
    text: "Starter plans offer cost-effective solutions tailored to small businesses. Find out how they enable growth without breaking the bank......",
    date: "16 Jun 2024",
    image: "/image (5).svg",
    slug: "starter-plans-smb",
  },
  {
    title: "Unlocking Flexible Pricing for SaaS Success",
    text: "Learn how customizable pricing boosts customer satisfaction and drives revenue growth in the SaaS world....",
    date: "16 Jun 2024",
    image: "/image (6).svg",
    slug: "flexible-saas-pricing-2",
  },
];

const NewsSection = () => {
  return (
    <section data-aos="fade-up" className="py-6 lg:py-16 bg-[#F1F5EB]">
      <div className="flex flex-col items-center justify-center gap-6 px-4">
        <Title
          text="News / Announcement"
          borderColor="[#1D9B5E]/40"
          textColor="#1D9B5E"
        />
        <div className="max-w-[655px] mx-auto mb-8">
          <h2 className="font-semibold text-lg lg:text-[28px] text-[#020617]">
            Stay Updated with the latest news, events and official announcements
            from Covenant MFB
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {newsData.map((newsItem, index) => (
            <NewsCard key={index} {...newsItem} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
