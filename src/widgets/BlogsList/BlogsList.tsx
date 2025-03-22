"use client";

import React from "react";
import { Button } from "@heroui/button";

import { IBlog } from "@/src/entities/Blog/model/types";
import BlogCard from "@/src/entities/Blog/ui/BlogCard";
import { useBlogsStore } from "@/src/widgets/BlogsList/model/store";
import {
  blogsHasMoreSelector,
  blogsIsLoadingSelector,
  blogsSelector,
  loadMoreBlogsSelector,
  setBlogsSelector,
} from "@/src/widgets/BlogsList/model/selectors";

interface Props {
  blogs: IBlog[]; // 1 страница
}

const BlogsList: React.FC<Props> = ({ blogs: initialBlogs }) => {
  const blogs = useBlogsStore(blogsSelector);
  const setBlogs = useBlogsStore(setBlogsSelector);
  const isLoading = useBlogsStore(blogsIsLoadingSelector);
  const hasMore = useBlogsStore(blogsHasMoreSelector);
  const loadMore = useBlogsStore(loadMoreBlogsSelector);

  React.useEffect(() => {
    if (blogs.length) return;

    setBlogs(initialBlogs);
  }, [initialBlogs, setBlogs]);

  const displayedBlogs = blogs.length > 0 ? blogs : initialBlogs;

  return (
    <div>
      <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
        {displayedBlogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>

      {hasMore && (
        <div className="mt-4 w-full flex justify-center">
          <Button
            className="p-2  disabled:bg-gray-400"
            disabled={isLoading}
            onPress={loadMore}
          >
            {isLoading ? "Loading..." : "Load More"}
          </Button>
        </div>
      )}
    </div>
  );
};

export default BlogsList;
