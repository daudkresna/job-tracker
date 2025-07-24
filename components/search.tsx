"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { Input } from "./ui/input";

export default function Search() {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("search", term);
    } else {
      params.delete("search");
    }
    replace(`${pathName}?${params.toString()}`);
  }, 500);

  return (
    <div className="flex w-full max-w-sm items-center gap-2">
      <Input
        type="text"
        placeholder="Search your job"
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get("search")?.toString()}
      />
      {/* <Button type="submit" variant="default">
        Search
      </Button> */}
    </div>
  );
}
