"use client";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { generatePagination } from "@/lib/utils";
import { usePathname, useSearchParams } from "next/navigation";

const PaginationButton = ({
  totalPages,
  currentPage,
}: {
  totalPages: number;
  currentPage: number;
}) => {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const pages = generatePagination(currentPage, totalPages);

  const createPageUrl = (page: number | string) => {
    if (page === "...") return;
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    return `${pathName}?${params.toString()}`;
  };
  return (
    <Pagination className="mt-4">
      <PaginationContent>
        {currentPage > 1 && (
          <PaginationItem>
            <PaginationPrevious href={createPageUrl(currentPage - 1)} />
          </PaginationItem>
        )}
        {pages.map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              href={createPageUrl(page)}
              isActive={page === currentPage}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext href={createPageUrl(currentPage + 1)} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationButton;
