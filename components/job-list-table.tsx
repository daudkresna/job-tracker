// ShadCN UI
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";

//Placeholder data
import { placeholderJobs } from "@/lib/placeholder-data";

// Icons
import { Filter } from "lucide-react";

import { auth } from "@/auth";
import { prisma } from "@/prisma";
import { getDateString } from "@/lib/utils";

const JobListTable = async () => {
  const session = await auth();
  // Fetch jobs from the database
  const allJobs = await prisma.job.findMany({
    where: {
      userId: session?.user?.id,
    },
  });

  if (!allJobs || allJobs.length === 0) {
    return (
      <Card>
        <CardHeader>
          <h2 className="text-lg font-bold">No Jobs Found</h2>
          <p className="text-sm text-muted-foreground">
            You have not added any jobs yet.
          </p>
        </CardHeader>
      </Card>
    );
  }
  return (
    <Card>
      <CardHeader className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold">Job List</h2>
          <p className="text-sm text-muted-foreground">
            A list of all jobs with their details.
          </p>
        </div>
        <div>
          {/* Filter */}
          <Filter className="h-5 w-5 text-muted-foreground cursor-pointer" />
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Job Title</TableHead>
              <TableHead className="max-w-[100px]">Description</TableHead>
              <TableHead className="max-w-[100px]">Company</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date Added</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {allJobs.map((job) => {
              // Format the date
              const formattedDate = getDateString(job.createdAt);
              return (
                <TableRow key={job.id}>
                  <TableCell className="font-medium">{job.title}</TableCell>
                  <TableCell className="truncate max-w-xs">
                    {job.description}
                  </TableCell>
                  <TableCell className="truncate max-w-xs">
                    {job.company}
                  </TableCell>
                  <TableCell>
                    <Badge variant={"default"}>{job.category}</Badge>
                  </TableCell>
                  <TableCell>
                    <Select value={job.status.toLowerCase()}>
                      <SelectTrigger className="w-[140px]">
                        <SelectValue placeholder="Select a fruit" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Job Status</SelectLabel>
                          <SelectItem value="applied">Applied</SelectItem>
                          <SelectItem value="interview">Interview</SelectItem>
                          <SelectItem value="offer">Offer</SelectItem>
                          <SelectItem value="rejected">Rejected</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </TableCell>
                  <TableCell>{formattedDate}</TableCell>
                  <TableCell>{job.link}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
          {/* <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell className="text-right">$2,500.00</TableCell>
            </TableRow>
          </TableFooter> */}
        </Table>
      </CardContent>
    </Card>
  );
};

export default JobListTable;
