import React from "react";
import Header from "../components/header";
import TableTabs from "@/components/table-tabs";
import TableTabsContent from "@/components/table-tabs-content";
import { auth } from "@/auth";
import Cards from "@/components/cards";

const page = async () => {
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
        <TableTabsContent />
      </TableTabs>
    </>
  );
};

export default page;
