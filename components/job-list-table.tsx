// ShadCN UI
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";

// Icons
import { Filter } from "lucide-react";

import { auth } from "@/auth";
import { badgeColors, getDateString } from "@/lib/utils";
import Link from "next/link";
import Search from "./search";
import { fetchFilteredJob, fetchTotalPages } from "@/lib/data";
import PaginationButton from "./pagination-button";

export type JobListTableProps = {
  query: string;
  pageNumber: number;
};

const JobListTable = async ({ query, pageNumber }: JobListTableProps) => {
  const session = await auth();

  const filteredJobs = await fetchFilteredJob(query, pageNumber);
  const totalPages = await fetchTotalPages(query);

  if (!filteredJobs || filteredJobs.length === 0) {
    return (
      <Card>
        <CardHeader className="flex items-center justify-between">
          <div className="w-fit">
            <h2 className="text-lg font-bold">Job List</h2>
            <p className="text-sm text-muted-foreground">
              A list of all jobs with their details.
            </p>
          </div>
          <Search />
          <div>
            {/* Filter */}
            <Filter className="h-5 w-5 text-muted-foreground cursor-pointer " />
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-center text-gray-500">
            No jobs found matching your search criteria.
          </p>
        </CardContent>
      </Card>
    );
  }
  if (!session?.user?.id) {
    return (
      <Card>
        <CardHeader>
          <h2 className="text-lg font-bold">User Not Authenticated</h2>
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
        <Search />
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
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredJobs.map((job) => {
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
                    <Badge className={badgeColors[job.status]}>
                      {job.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{formattedDate}</TableCell>
                  <TableCell className="text-left">
                    <Link
                      href={`/edit/${job.id}`}
                      className="text-blue-500 hover:underline text-center"
                    >
                      Edit
                    </Link>
                  </TableCell>
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
        <PaginationButton currentPage={pageNumber} totalPages={totalPages} />
      </CardContent>
    </Card>
  );
};

export default JobListTable;
