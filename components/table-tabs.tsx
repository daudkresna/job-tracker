"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTabs } from "@/lib/context/tabs-context";
const TableTabs = ({ children }: { children: React.ReactNode }) => {
  const tabs = useTabs();
  return (
    <Tabs defaultValue="jobs" value={tabs?.activeTab} className="space-y-6">
      <TabsList className="rounded-sm">
        <TabsTrigger
          className="data-[state=active]:font-bold data-[state=active]:rounded-sm data-[state=active]:p-2 data-[state=active]:text-black text-gray-400"
          value="jobs"
          onClick={() => tabs?.handleTabChange("jobs")}
        >
          Job List
        </TabsTrigger>
        <TabsTrigger
          className="data-[state=active]:font-bold data-[state=active]:rounded-sm data-[state=active]:p-2 data-[state=active]:text-black text-gray-400"
          value="add"
          onClick={() => tabs?.handleTabChange("add")}
        >
          Add New Job
        </TabsTrigger>
      </TabsList>
      {children}
    </Tabs>
  );
};

export default TableTabs;
