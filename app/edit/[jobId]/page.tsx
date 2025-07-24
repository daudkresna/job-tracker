import { auth } from "@/auth";

export default async function EditJobPage({
  params,
}: {
  params: { jobId: string };
}) {
  const session = await auth();
  if (!session?.user?.id) {
    return (
      <div className="max-w-3xl mx-auto">
        You must be logged in to edit a job.
      </div>
    );
  }

  const { jobId } = params;

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">{params.jobId}</h1>
      {/* Add your edit job form component here, passing the jobId as a prop */}
      {/* <EditJobForm jobId={params.jobId} /> */}
    </div>
  );
}
