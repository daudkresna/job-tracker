"use client";

import { createContext, useContext, useState } from "react";

interface TabsContextType {
  activeTab: string;
  handleTabChange: (value: string) => void;
}

const TabsContext = createContext<TabsContextType | null>(null);

export const TabsProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeTab, setActiveTab] = useState("jobs");

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  return (
    <TabsContext.Provider value={{ activeTab, handleTabChange }}>
      {children}
    </TabsContext.Provider>
  );
};

export const useTabs = () => useContext(TabsContext);
