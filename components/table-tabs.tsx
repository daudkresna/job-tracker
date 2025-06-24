import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
const TableTabs = ({ children }: { children: React.ReactNode }) => {
  return (
    <Tabs defaultValue="jobs" className="space-y-6">
      <TabsList className="rounded-sm">
        <TabsTrigger
          className="data-[state=active]:font-bold data-[state=active]:rounded-sm data-[state=active]:p-2 data-[state=active]:text-black text-gray-400"
          value="jobs"
        >
          Job List
        </TabsTrigger>
        <TabsTrigger
          className="data-[state=active]:font-bold data-[state=active]:rounded-sm data-[state=active]:p-2 data-[state=active]:text-black text-gray-400"
          value="add"
        >
          Add New Job
        </TabsTrigger>
      </TabsList>
      {children}
    </Tabs>
  );
};

export default TableTabs;
