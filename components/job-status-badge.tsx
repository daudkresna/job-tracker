import { JobStatus } from "@/lib/types";

const JobStatusBadge = (status: JobStatus) => {
  return <div>{status}</div>;
};

export default JobStatusBadge;
