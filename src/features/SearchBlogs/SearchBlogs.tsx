"use client";

import { Input } from "@heroui/input";
import { useDebouncedCallback } from "use-debounce";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { SearchIcon } from "@/src/shared/icons/icons";

const SearchBlogs = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set("query", value);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  const handleClear = () => {
    const params = new URLSearchParams(searchParams);

    params.delete("query");
    replace(pathname);
  };

  return (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      defaultValue={searchParams.get("query")?.toString()}
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
      onChange={(e) => {
        handleSearch(e.target.value);
      }}
      onClear={handleClear}
    />
  );
};

export default SearchBlogs;
