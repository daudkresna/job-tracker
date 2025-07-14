import { Briefcase } from "lucide-react";
import AuthButton from "./auth-button";

export default async function Header() {
  return (
    <>
      <div className="flex flex-row justify-between items-center mb-8">
        <div>
          <h1 className="flex items-center text-3xl gap-2 font-semibold">
            <Briefcase className="h-8 w-8" /> Job Tracker
          </h1>
          <p className="text-gray-500">
            Manage and track your job applications in one place
          </p>
        </div>
        <AuthButton />
      </div>
    </>
  );
}
