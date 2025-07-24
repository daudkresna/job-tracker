"use server";
import * as z from "zod/v4";
import { jobSchema } from "./types";
import { prisma } from "@/prisma";
import { Status } from "@/generated/prisma";
import { auth } from "@/auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export type State = {
  errors?: {
    userId?: string[];
    jobTitle?: string[];
    jobDescription?: string[];
    jobCategory?: string[];
    jobStatus?: string[];
    companyName?: string[];
  };
  message?: string | null;
};

export type Result = {
  success: boolean;
  message?: string;
};

export async function addJob(
  values: z.infer<typeof jobSchema>
): Promise<Result> {
  const session = await auth();
  // This function would typically interact with a database to add a job.
  //   console.log("Adding job with values:", values);

  if (!session?.user?.id) {
    throw new Error("User not authenticated");
  }
  // Here you would use your database client to insert the job.

  try {
    const job = await prisma.job.create({
      data: {
        title: values.jobTitle,
        category: values.jobCategory,
        description: values.jobDescription,
        status: values.jobStatus.toString() as Status,
        company: values.companyName,
        userId: session?.user?.id, // Ensure userId is set
      },
    });

    if (job) {
      revalidatePath("/");
      return { success: true, message: "Job created successfully!" };
    }
  } catch (error) {
    return {
      success: false,
      message: `Failed to create job: ${
        error instanceof Error ? error.message : "Unknown error"
      }`,
    };
  }
  return { success: false, message: "Failed to create job" };
}

export async function changeJobStatus(formData: FormData) {
  const jobId = formData.get("jobId")?.toString();
  const status = formData.get("status")?.toString() as Status;

  console.log("Changing job status for jobId:", jobId, "to status:", status);

  // const session = await auth();
  // if (!session?.user?.id) {
  //   throw new Error("User not authenticated");
  // }

  // try {
  //   const job = await prisma.job.update({
  //     where: { id: jobId, userId: session.user.id },
  //     data: { status },
  //   });

  //   if (job) {
  //     revalidatePath("/");
  //     return { success: true, message: "Job status updated successfully!" };
  //   }
  // } catch (error) {
  //   return {
  //     success: false,
  //     message: `Failed to update job status: ${
  //       error instanceof Error ? error.message : "Unknown error"
  //     }`,
  //   };
  // }
  // return { success: false, message: "Failed to update job status" };
}
