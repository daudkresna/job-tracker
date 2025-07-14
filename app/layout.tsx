import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { TabsProvider } from "@/lib/context/tabs-context";
import { Toaster } from "@/components/ui/sonner";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Na Job Tracker",
  description: "Job application tracking made easy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <TabsProvider>
        <body className={`${urbanist.className} antialiased`}>
          <div className="flex flex-col min-h-screen bg-white p-6">
            <Header />
            {children}
            <Toaster />
          </div>
        </body>
      </TabsProvider>
    </html>
  );
}
