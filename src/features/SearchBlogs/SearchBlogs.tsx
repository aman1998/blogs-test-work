"use client";

import { Input } from "@heroui/input";
import { useDebouncedCallback } from "use-debounce";
import { useQueryState } from "nuqs";

import { SearchIcon } from "@/src/shared/icons/icons";

const SearchBlogs = () => {
  const [query, setQuery] = useQueryState("query", { defaultValue: "" });

  const handleSearch = useDebouncedCallback((value: string) => {
    setQuery(value);
  }, 300);

  return (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      defaultValue={query}
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
      onChange={(e) => {
        handleSearch(e.target.value);
      }}
      onClear={() => setQuery("")}
    />
  );
};

export default SearchBlogs;
