"use client";
import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
  onItemsPerPageChange: (count: number) => void;
  itemOptions?: number[];
}

const PaginationControls: React.FC<PaginationControlsProps> = ({
  currentPage,
  totalPages,
  itemsPerPage,
  onPageChange,
  onItemsPerPageChange,
  itemOptions = [4, 6, 8],
}) => {
  return (
    <div className="mt-10 h-15 flex flex-row flex-wrap items-center justify-between gap-x-4 gap-y-2 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-gray-900/5 sm:flex-nowrap md:p-6 md:gap-x-6">
      <div className="flex items-center gap-2 text-sm text-gray-600">
        <span>Show</span>
        <select
          value={itemsPerPage}
          onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
          className="rounded-md border-gray-300 py-1.5 shadow-sm focus:border-green-500 focus:ring-green-500 p-2"
          aria-label="Items per page"
        >
          {itemOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <span>entries</span>
      </div>

      {totalPages > 1 && (
        <div className="flex items-center gap-1 sm:gap-2">
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="flex items-center gap-1 rounded-md p-2 text-sm text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed md:px-3"
            aria-label="Go to previous page"
          >
            <ChevronLeft className="h-5 w-5" />
            <span className="hidden md:inline">Previous</span>
          </button>

          <span className="rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold text-white">
            {currentPage}
          </span>

          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="flex items-center gap-1 rounded-md p-2 text-sm text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed md:px-3"
            aria-label="Go to next page"
          >
            <span className="hidden md:inline">Next</span>
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      )}
    </div>
  );
};

export default PaginationControls;
