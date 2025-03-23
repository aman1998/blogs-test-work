import React from "react";

import BlogsList from "../../../widgets/BlogsList";

import { IBlog } from "@/src/entities/Blog/model/types";
import SearchBlogs from "@/src/features/SearchBlogs";
import BlogsListSkeleton from "@/src/widgets/BlogsList/components/BlogsListSkeleton";

const fetchBlogs = async (url: string): Promise<IBlog[]> => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Failed to fetch blogs");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching blogs:", error);

    return [];
  }
};

interface Props {
  searchParams?: Promise<{ query?: string }>;
}

const BlogsPage = async ({ searchParams: searchParamsProp }: Props) => {
  const searchParams = await searchParamsProp;
  const query = searchParams?.query || "";

  let blogs: IBlog[] = [];

  if (query) {
    const allBlogs = await fetchBlogs(
      "https://jsonplaceholder.typicode.com/posts",
    );

    blogs = allBlogs.filter((blog) =>
      blog.title.includes(query.trim().toLowerCase()),
    );
  } else {
    blogs = await fetchBlogs(
      "https://jsonplaceholder.typicode.com/posts?_limit=10&_page=1",
    );
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-3 max-w-xs">
        <SearchBlogs />
      </div>
      <React.Suspense fallback={<BlogsListSkeleton />}>
        <BlogsList blogs={blogs} />
      </React.Suspense>
    </div>
  );
};

export default BlogsPage;
