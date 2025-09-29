"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { allJobs, Job } from "@/app/_data/job-data";
import PaginationControls from "@/app/_components/pigination-controls";

interface JobListingsProps {
  searchQuery: string;
  experience: string;
  location: string;
  category: string;
}

const JobCard: React.FC<{ job: Job }> = ({ job }) => (
  <article className="relative flex h-[30rem] w-full max-w-md mx-auto flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-gray-200">
    <div className="absolute inset-x-0 top-0 h-1/2 overflow-hidden rounded-t-2xl relative">
      <Image
        src={job.imageSrc}
        alt={job.title}
        fill
        className="object-cover"
        priority
      />
    </div>

    <div
      className="absolute left-1/2 top-1/3 w-[88%] -translate-x-1/2 rounded-t-xl bg-gradient-to-b from-white via-white to-white px-6 py-6 z-10"
      style={{
        background:
          "linear-gradient(to bottom, white 0%, white 70%, rgba(255,255,255,0) 100%)",
      }}
      aria-hidden={false}
    >
      <h3 className="text-center text-lg md:text-xl font-extrabold text-emerald-800 leading-tight">
        {job.title}
      </h3>
      <p className="mt-3 text-center text-sm leading-relaxed text-gray-600 ">
        {job.description}
      </p>
    </div>

    <div className="relative mt-30 flex justify-center p-6 z-20">
      <Link
        href={`/careers/${job.slug}`}
        className="inline-block rounded-lg bg-green-600/80 hover:bg-green-700/90 text-white px-6 py-2.5 text-center text-sm font-semibold transition-all duration-200 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-green-400"
      >
        View Details
      </Link>
    </div>
  </article>
);

const JobListings: React.FC<JobListingsProps> = ({
  searchQuery,
  experience,
  location,
  category,
}) => {
  const [filteredJobs, setFilteredJobs] = useState<Job[]>(allJobs);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  useEffect(() => {
    let jobs = allJobs;
    if (searchQuery) {
      jobs = jobs.filter((job) =>
        job.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    if (experience && experience !== "All Experience Level") {
      jobs = jobs.filter((job) => job.experience === experience);
    }
    if (location && location !== "All Location") {
      jobs = jobs.filter((job) => job.location === location);
    }
    if (category && category !== "All Categories") {
      jobs = jobs.filter((job) => job.category === category);
    }
    setFilteredJobs(jobs);
    setCurrentPage(1);
  }, [searchQuery, experience, location, category]);

  const currentJobs = filteredJobs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const totalPages = Math.ceil(filteredJobs.length / itemsPerPage);

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      {/* Job Grid */}
      {currentJobs.length > 0 ? (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {currentJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <h3 className="text-xl font-semibold text-gray-700">No jobs found</h3>
          <p className="mt-2 text-gray-500">
            Try adjusting your search filters.
          </p>
        </div>
      )}

      {filteredJobs.length > 0 && (
        <PaginationControls
          currentPage={currentPage}
          totalPages={totalPages}
          itemsPerPage={itemsPerPage}
          onPageChange={setCurrentPage}
          onItemsPerPageChange={(count) => {
            setItemsPerPage(count);
            setCurrentPage(1);
          }}
          itemOptions={[4, 8, 12]}
        />
      )}
    </div>
  );
};

export default JobListings;
