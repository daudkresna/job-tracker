import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { placeholderJobs } from "./placeholder-data";
import { Job } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const statusColors = {
  Applied: "text-blue-600 dark:text-blue-300",
  Interviewing: "text-yellow-600 dark:text-yellow-300",
  Offer: "text-green-600 dark:text-green-300",
  Rejected: "text-red-600 dark:text-red-300",
};

export const getStatusCounts = () => {
  return {
    Applied: placeholderJobs.filter((job) => job.status === "Applied").length,
    Interviewing: placeholderJobs.filter((job) => job.status === "Interview")
      .length,
    Offer: placeholderJobs.filter((job) => job.status === "Offer").length,
    Rejected: placeholderJobs.filter((job) => job.status === "Rejected").length,
  };
};

export const getAllJobStatusCounts = ({ allJobs }: { allJobs: Job[] }) => {
  if (!allJobs || allJobs.length === 0) {
    return {
      Applied: 0,
      Interviewing: 0,
      Offer: 0,
      Rejected: 0,
    };
  }
  return {
    Applied: allJobs.filter((job) => job.status === "Applied").length,
    Interviewing: allJobs.filter((job) => job.status === "Interview").length,
    Offer: allJobs.filter((job) => job.status === "Offer").length,
    Rejected: allJobs.filter((job) => job.status === "Rejected").length,
  };
};

export const getDateString = (date: Date | string) => {
  if (!date) return "";
  const d = new Date(date);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
};

export const generatePagination = (currentPage: number, totalPages: number) => {
  // If the total number of pages is 7 or less,
  // display all pages without any ellipsis.
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // If the current page is among the first 3 pages,
  // show the first 3, an ellipsis, and the last 2 pages.
  if (currentPage <= 3) {
    return [1, 2, 3, "...", totalPages - 1, totalPages];
  }

  // If the current page is among the last 3 pages,
  // show the first 2, an ellipsis, and the last 3 pages.
  if (currentPage >= totalPages - 2) {
    return [1, 2, "...", totalPages - 2, totalPages - 1, totalPages];
  }

  // If the current page is somewhere in the middle,
  // show the first page, an ellipsis, the current page and its neighbors,
  // another ellipsis, and the last page.
  return [
    1,
    "...",
    currentPage - 1,
    currentPage,
    currentPage + 1,
    "...",
    totalPages,
  ];
};
