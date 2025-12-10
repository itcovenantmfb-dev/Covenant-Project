"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import PaginationControls from "../../_components/pigination-controls";
import { urlFor } from "@/sanity/lib/image";

const LoadingSkeleton = () => (
  <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className="relative flex h-[28rem] sm:h-[30rem] w-full max-w-sm sm:max-w-md mx-auto flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-gray-200 animate-pulse"
        >
          <div className="absolute inset-x-0 top-0 h-1/2 bg-gray-200 rounded-t-2xl" />
          <div className="absolute left-1/2 top-1/3 w-[88%] -translate-x-1/2 rounded-t-xl bg-white px-4 sm:px-6 py-4 sm:py-6 z-10">
            <div className="h-6 bg-gray-200 rounded mb-3" />
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded" />
              <div className="h-4 bg-gray-200 rounded w-3/4" />
            </div>
          </div>
          <div className="relative mt-28 sm:mt-30 flex justify-center p-4 sm:p-6 z-20">
            <div className="h-10 w-24 bg-gray-200 rounded-lg" />
          </div>
        </div>
      ))}
    </div>
  </div>
);

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

interface JobListingsProps {
  searchQuery: string;
  experience: string;
  location: string;
  category: string;
  jobs: CareerJob[];
  error?: string;
  loading?: boolean;
}

const JobCard: React.FC<{ job: CareerJob }> = ({ job }) => (
  <article className="relative flex h-[28rem] sm:h-[28rem] w-full max-w-sm sm:max-w-md mx-auto flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-gray-200">
    <div className="absolute inset-x-0 top-0 h-1/2 overflow-hidden rounded-t-2xl ">
      <Image
        src={urlFor(job.image).width(400).height(300).url()}
        alt={job.title}
        fill
        className="object-cover"
        priority
      />
    </div>

    <div
      className="absolute left-1/2 top-1/3 w-[88%] -translate-x-1/2 rounded-t-xl bg-gradient-to-b from-white via-white to-white px-4 sm:px-6 py-4 sm:py-6 z-10"
      style={{
        background:
          "linear-gradient(to bottom, white 0%, white 70%, rgba(255,255,255,0) 100%)",
      }}
      aria-hidden={false}
    >
      <h3 className="text-center text-base sm:text-lg md:text-xl font-extrabold text-emerald-800 leading-tight">
        {job.title}
      </h3>
      <p className="mt-2 sm:mt-3 text-center text-xs sm:text-sm leading-relaxed text-gray-600">
        {job.description}
      </p>
      <div className=" flex items-center justify-center mt-3 space-x-2">
        <Link
          href={`/careers/${job.slug.current}`}
          className="inline-block rounded-lg bg-green-600/80 hover:bg-green-700/90 text-white px-4 sm:px-6 py-2 sm:py-2.5 text-center text-xs sm:text-sm font-semibold transition-all duration-200 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          View Details
        </Link>
      </div>
    </div>
  </article>
);

const JobListings: React.FC<JobListingsProps> = ({
  searchQuery,
  experience,
  location,
  category,
  jobs,
  error,
  loading = false,
}) => {
  const [filteredJobs, setFilteredJobs] = useState<CareerJob[]>(jobs);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  useEffect(() => {
    let filteredJobsList = jobs;
    if (searchQuery) {
      filteredJobsList = filteredJobsList.filter((job: CareerJob) =>
        job.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    if (experience && experience !== "All Experience Level") {
      filteredJobsList = filteredJobsList.filter(
        (job: CareerJob) => job.experience === experience
      );
    }
    if (location && location !== "All Location") {
      filteredJobsList = filteredJobsList.filter(
        (job: CareerJob) => job.location === location
      );
    }
    if (category && category !== "All Categories") {
      filteredJobsList = filteredJobsList.filter(
        (job: CareerJob) => job.category === category
      );
    }
    setFilteredJobs(filteredJobsList);
    setCurrentPage(1);
  }, [searchQuery, experience, location, category, jobs]);

  const currentJobs = filteredJobs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const totalPages = Math.ceil(filteredJobs.length / itemsPerPage);

  // Loading State
  if (loading) {
    return <LoadingSkeleton />;
  }

  // Error State
  if (error) {
    return (
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-16">
        <div className="text-center py-16 px-8 border border-red-200 rounded-xl bg-red-50/30">
          <div className="mx-auto max-w-md">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-100 mb-6">
              <svg
                className="h-8 w-8 text-red-600"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Something went wrong
            </h3>
            <p className="text-gray-600 mb-6">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="inline-flex items-center px-4 py-2 bg-[#1D9B5E] text-white text-sm font-medium rounded-lg hover:bg-green-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  // No Jobs Available State
  if (jobs.length === 0) {
    return (
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-40">
        <div className="text-center py-16 px-8 border border-gray-200 rounded-xl bg-gray-50/30">
          <div className="mx-auto max-w-md">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 mb-6">
              <svg
                className="h-8 w-8 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3A2.25 2.25 0 008.25 5.25v.876m4.5 0V5.25m0 .876V6a2.25 2.25 0 11-4.5 0v-.624"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No Job Openings
            </h3>
            <p className="text-gray-600 mb-6">
              We don't have any job openings at the moment. Check back soon for
              new opportunities!
            </p>
            <p className="text-sm text-gray-500">
              You can also send your resume to{" "}
              <a
                href="mailto:careers@covenantmfb.com.ng"
                className="text-[#1D9B5E] hover:underline"
              >
                careers@covenantmfb.com.ng
              </a>{" "}
              for future consideration.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      {/* Job Grid */}
      {currentJobs.length > 0 ? (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {currentJobs.map((job) => (
            <JobCard key={job._id} job={job} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 px-8 border border-green-200 rounded-xl bg-green-50/30">
          <div className="mx-auto max-w-md">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-6">
              <svg
                className="h-8 w-8 text-green-600/80 "
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No matching jobs found
            </h3>
            <p className="text-gray-600 mb-6">
              We couldn't find any jobs matching your search criteria. Try
              adjusting your filters or search terms.
            </p>
            <div className="space-y-2 text-sm text-gray-500">
              <p>Suggestions:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Try broader search terms</li>
                <li>Remove some filters</li>
                <li>Check for typos in your search</li>
              </ul>
            </div>
          </div>
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
