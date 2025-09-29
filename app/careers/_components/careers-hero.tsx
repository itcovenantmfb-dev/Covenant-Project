"use client";

import { useState } from "react";
import PageBanner from "@/app/_components/reusable-hero-banner";
import JobSearchForm from "./job-search-form";
import JobListings from "./job-listing";

export default function CareersPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [experience, setExperience] = useState("All Experience Level");
  const [location, setLocation] = useState("All Location");
  const [category, setCategory] = useState("All Categories");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching with filters:", {
      searchQuery,
      experience,
      location,
      category,
    });
  };

  const pageTitle = (
    <>
      Grow with us. Build a <br /> future in banking.
    </>
  );

  return (
    <main className="bg-white">
      <PageBanner pillText="Career" title={pageTitle} />

      <div className="relative z-10 -mt-20 pb-16">
        <JobSearchForm
          searchQuery={searchQuery}
          experience={experience}
          location={location}
          category={category}
          setSearchQuery={setSearchQuery}
          setExperience={setExperience}
          setLocation={setLocation}
          setCategory={setCategory}
          handleSubmit={handleSearch}
        />
      </div>

      <div className="pb-24">
        <JobListings
          searchQuery={searchQuery}
          experience={experience}
          location={location}
          category={category}
        />
      </div>
    </main>
  );
}
