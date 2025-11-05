"use client";

import { useState } from "react";

import JobSearchForm from "./job-search-form";
import JobListings from "./job-listing";
import PageBanner from "../../_components/reusable-hero-banner";

interface CareerJob {
  _id: string;
  title: string;
  slug: { current: string };
  description: string;
  image: any;
  category: string;
  location: string;
  employmentType: string;
  experience: string;
  salary?: string;
  tags?: string[];
  postedDate: string;
}

interface CareersPageProps {
  jobs: CareerJob[];
  error?: string;
}

export default function CareersPage({ jobs, error }: CareersPageProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [experience, setExperience] = useState("All Experience Level");
  const [location, setLocation] = useState("All Location");
  const [category, setCategory] = useState("All Categories");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // console.log("Searching with filters:", {
    //   searchQuery,
    //   experience,
    //   location,
    //   category,
    // });
  };

  const pageTitle = (
    <>
      Grow with us. Build a <br /> future in banking.
    </>
  );

  // Check if we have jobs available (not just filtered jobs, but actual jobs)
  const hasJobs = jobs && jobs.length > 0;

  return (
    <main className="bg-white">
      <div>
        <PageBanner pillText="Career" title={pageTitle} />
      </div>

      {/* Only show search form if there are jobs available */}
      {hasJobs && !error && (
        <div data-aos="fade-up" className="relative z-10 -mt-20 pb-16">
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
      )}

      <div data-aos="fade-up" className={hasJobs && !error ? "pb-24" : "pb-24 -mt-20"}>
        <JobListings
          searchQuery={searchQuery}
          experience={experience}
          location={location}
          category={category}
          jobs={jobs}
          error={error}
        />
      </div>
    </main>
  );
}
