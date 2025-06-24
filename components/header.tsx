import { Briefcase } from "lucide-react";
import Cards from "./cards";

export default function Header() {
  return (
    <>
      <h1 className="flex items-center text-3xl gap-2 font-semibold">
        <Briefcase className="h-8 w-8" /> Job Tracker
      </h1>
      <p className="text-gray-500 mb-8">
        Manage and track your job applications in one place
      </p>
      <Cards />
    </>
  );
}
