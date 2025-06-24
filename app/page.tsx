import React from "react";
import Header from "../components/header";
import TableTabs from "@/components/table-tabs";
import TableTabsContent from "@/components/table-tabs-content";

const page = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white p-6">
      <Header />
      <TableTabs>
        <TableTabsContent />
      </TableTabs>
    </div>
  );
};

export default page;
