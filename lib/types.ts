import * as z from "zod/v4";

export type JobStatus = "Applied" | "Interview" | "Offer" | "Rejected";
export type JobCategory =
  | "Software"
  | "Design"
  | "Marketing"
  | "Sales"
  | "Other";

export type Job = {
  id: string;
  link: string | null;
  title: string;
  description: string | null;
  status: JobStatus;
  company: string | null;
  category: string | null;
  location: string | null;
  notes: string | null;
  createdAt: Date;
  userId: string;
};

export const jobSchema = z.object({
  jobTitle: z.string().min(3, "Job title is required"),
  jobCategory: z.union([
    z.literal("Technology"),
    z.literal("Marketing"),
    z.literal("Sales"),
    z.literal("Design"),
    z.literal("Finance"),
    z.literal("Other"),
  ]),
  jobDescription: z.string().min(1, "Job description is required"),
  jobStatus: z.string().min(1, "Job status is required"),
  companyName: z.string().min(1, "Company name is required"),
});
