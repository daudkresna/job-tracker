import { auth } from "@/auth";
import { prisma } from "@/prisma";

// Fetch user jobs from the database
export async function fetchFilteredJob(query: string, pageNumber: number) {
  const session = await auth();
  if (!session?.user?.id) {
    throw new Error("User not authenticated");
  }

  const jobs = await prisma.job.findMany({
    where: {
      userId: session.user.id,
      description: {
        contains: query,
        mode: "insensitive", // Case-insensitive search
      },
      title: {
        contains: query,
        mode: "insensitive", // Case-insensitive search
      },
    },
    skip: (pageNumber - 1) * 10, // Assuming 10 jobs per page
    take: 10,
    orderBy: {
      createdAt: "desc",
    },
  });

  return jobs;
}

export async function fetchTotalPages(query: string) {
  const session = await auth();
  if (!session?.user?.id) {
    throw new Error("User not authenticated");
  }

  const totalJobs = await prisma.job.count({
    where: {
      userId: session.user.id,
      description: {
        contains: query,
        mode: "insensitive", // Case-insensitive search
      },
      title: {
        contains: query,
        mode: "insensitive", // Case-insensitive search
      },
    },
  });

  return Math.ceil(totalJobs / 10); // Assuming 10 jobs per page
}
