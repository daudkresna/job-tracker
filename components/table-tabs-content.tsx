import { TabsContent } from "@/components/ui/tabs";
import JobListTable from "./job-list-table";
import AddJobForm from "./add-job-form";
import { useSearchParams } from "next/navigation";

export type TableTabsContentProps = {
  searchParams?: Promise<{
    search?: string;
    page?: string;
  }>;
};

const TableTabsContent = async ({
  jobTable,
  children,
}: {
  jobTable: React.ReactNode;
  children: React.ReactNode;
}) => {
  // const searchParams = useSearchParams();
  // const query = searchParams.get("search") || "";
  // const currentPage = Number(searchParams.get("page")) || 1;
  // console.log("Search Query:", query, "Current Page:", currentPage);
  return (
    <>
      <TabsContent value="jobs">{jobTable}</TabsContent>
      <TabsContent value="add">{children}</TabsContent>
    </>
  );
};

export default TableTabsContent;
