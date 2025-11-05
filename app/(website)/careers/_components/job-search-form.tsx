"use client";

import React, { useState } from "react";
import { Search } from "lucide-react";

const experienceLevels = [
  "All Experience Level",
  "Entry-Level",
  "Mid-Level",
  "Senior",
];
const locations = [
  "All Location",
  "Lagos, Nigeria",
  "Abuja, Nigeria",
  "Remote",
  "Abeokuta, Nigeria",
];
const categories = [
  "All Categories",
  "Technology",
  "Finance & Accounting",
  "Operations",
  "Marketing",
  "Customer Service",
  "Human Resources",
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
  // Check if any filters are applied
  const hasActiveFilters = 
    searchQuery.trim() !== '' || 
    experience !== 'All Experience Level' || 
    location !== 'All Location' || 
    category !== 'All Categories';

  const handleReset = () => {
    setSearchQuery('');
    setExperience('All Experience Level');
    setLocation('All Location');
    setCategory('All Categories');
  };
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <div className="rounded-2xl sm:rounded-3xl bg-[#F1F5EB] p-4 sm:p-6 lg:p-8 shadow-lg">
        <form onSubmit={handleSubmit}>
          {/* Search Input */}
          <div className="relative mb-4 sm:mb-6">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for jobs..."
              className="w-full rounded-lg border-gray-300 py-3 pl-4 pr-12 text-sm sm:text-base text-gray-700 shadow-sm focus:border-green-500 focus:ring-2 focus:ring-green-200"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-4">
              <Search className="h-4 w-4 sm:h-5 sm:w-5 text-gray-900" />
            </div>
          </div>

          {/* Dropdown Filters */}
          <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Experience Level */}
            <div>
              <label
                htmlFor="experience"
                className="block text-xs sm:text-sm font-bold text-gray-800 mb-2"
              >
                Experience Level
              </label>
              <select
                id="experience"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                className="w-full rounded-lg border-gray-300 py-3 pl-3 pr-10 text-sm sm:text-base text-gray-700 shadow-sm focus:border-green-500 focus:ring-2 focus:ring-green-200"
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
                className="block text-xs sm:text-sm font-bold text-gray-800 mb-2"
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

          {/* Reset Button - Only show when filters are active */}
          {hasActiveFilters && (
            <div className="mt-6 text-center">
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-colors shadow-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Clear All Filters
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default JobSearchForm;
