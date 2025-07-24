import React from "react";
import Header from "../components/header";
import TableTabs from "@/components/table-tabs";
import TableTabsContent from "@/components/table-tabs-content";
import { auth } from "@/auth";
import Cards from "@/components/cards";
import AddJobForm from "@/components/add-job-form";
import JobListTable from "@/components/job-list-table";

export type PageProps = {
  searchParams?: Promise<{
    search?: string;
    page?: string;
  }>;
};

const page = async (props: PageProps) => {
  const searchParams = await props.searchParams;
  const query = searchParams?.search || "";
  const currentPage = Number(searchParams?.page) || 1;
  const session = await auth();
  if (!session) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold">
          Please log in to access this page.
        </h1>
      </div>
    );
  }

  return (
    <>
      <Cards />
      <TableTabs>
        <TableTabsContent
          jobTable={
            <JobListTable
              query={query} // Placeholder for query, can be replaced with actual search logic
              pageNumber={currentPage} // Placeholder for page number, can be replaced with actual pagination logic
            />
          }
        >
          <AddJobForm />
        </TableTabsContent>
      </TableTabs>
    </>
  );
};

export default page;
