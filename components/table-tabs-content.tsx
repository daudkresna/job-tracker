import { TabsContent } from "@/components/ui/tabs";
import JobListTable from "./job-list-table";
const TableTabsContent = () => {
  return (
    <>
      <TabsContent value="jobs">
        <JobListTable />
      </TabsContent>
      <TabsContent value="add">
        <h1>Add Job</h1>
      </TabsContent>
    </>
  );
};

export default TableTabsContent;
