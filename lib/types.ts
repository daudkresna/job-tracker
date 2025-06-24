export type JobStatus = "Applied" | "Interview" | "Offer" | "Rejected";
export type JobCategory =
  | "Software"
  | "Design"
  | "Marketing"
  | "Sales"
  | "Other";

export type Job = {
  id: string;
  title: string;
  description: string;
  status: JobStatus;
  category: JobCategory;
  link: string;
  company?: string;
  dateApplied?: string;
};
