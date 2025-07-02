import { TabsContent } from "@/components/ui/tabs";
import JobListTable from "./job-list-table";
import AddJobForm from "./add-job-form";
const TableTabsContent = () => {
  return (
    <>
      <TabsContent value="jobs">
        <JobListTable />
      </TabsContent>
      <TabsContent value="add">
        <AddJobForm />
      </TabsContent>
    </>
  );
};

export default TableTabsContent;
