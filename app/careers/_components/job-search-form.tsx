"use client";

import React, { useState } from "react";
import { Search } from "lucide-react";

const experienceLevels = [
  "All Experience Level",
  "Entry-Level",
  "Mid-Level",
  "Senior",
  "Lead",
  "Manager",
];
const locations = [
  "All Location",
  "Lagos, Nigeria",
  "Abuja, Nigeria",
  "Port Harcourt, Nigeria",
  "Remote",
];
const categories = [
  "All Categories",
  "Technology",
  "Finance & Accounting",
  "Customer Support",
  "Operations",
  "Marketing",
];
interface JobSearchFormProps {
  searchQuery: string;
  experience: string;
  location: string;
  category: string;
  setSearchQuery: (query: string) => void;
  setExperience: (level: string) => void;
  setLocation: (loc: string) => void;
  setCategory: (cat: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
}
const JobSearchForm: React.FC<JobSearchFormProps> = ({
  searchQuery,
  experience,
  location,
  category,
  setSearchQuery,
  setExperience,
  setLocation,
  setCategory,
  handleSubmit,
}) => {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <div className="rounded-3xl bg-[#F1F5EB] p-6 sm:p-8 shadow-lg">
        <form onSubmit={handleSubmit}>
          {/* Search Input */}
          <div className="relative mb-6">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for jobs..."
              className="w-full rounded-lg border-gray-300 py-3 pl-4 pr-12 text-gray-700 shadow-sm focus:border-green-500 focus:ring-2 focus:ring-green-200"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-4">
              <Search className="h-5 w-5 text-gray-900" />
            </div>
          </div>

          {/* Dropdown Filters */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Experience Level */}
            <div>
              <label
                htmlFor="experience"
                className="block text-sm font-bold text-gray-800 mb-2"
              >
                Experience Level
              </label>
              <select
                id="experience"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                className="w-full rounded-lg border-gray-300 py-3 pl-3 pr-10 text-gray-700 shadow-sm focus:border-green-500 focus:ring-2 focus:ring-green-200"
              >
                {experienceLevels.map((level) => (
                  <option key={level}>{level}</option>
                ))}
              </select>
            </div>

            {/* Location */}
            <div>
              <label
                htmlFor="location"
                className="block text-sm font-bold text-gray-800 mb-2"
              >
                Location
              </label>
              <select
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full rounded-lg border-gray-300 py-3 pl-3 pr-10 text-gray-700 shadow-sm focus:border-green-500 focus:ring-2 focus:ring-green-200"
              >
                {locations.map((loc) => (
                  <option key={loc}>{loc}</option>
                ))}
              </select>
            </div>

            {/* Category */}
            <div>
              <label
                htmlFor="category"
                className="block text-sm font-bold text-gray-800 mb-2"
              >
                Category
              </label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full rounded-lg border-gray-300 py-3 pl-3 pr-10 text-gray-700 shadow-sm focus:border-green-500 focus:ring-2 focus:ring-green-200"
              >
                {categories.map((cat) => (
                  <option key={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-8 text-center">
            <button
              type="submit"
              className="rounded-lg bg-[#1D9B5E] px-10 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              View Job
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobSearchForm;
