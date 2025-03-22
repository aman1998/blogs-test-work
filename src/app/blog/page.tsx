import React from "react";

import BlogsList from "../../widgets/BlogsList";

import { IBlog } from "@/src/entities/Blog/model/types";
import SearchBlogs from "@/src/features/SearchBlogs";

const BlogsPage: React.FC = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10&_page=1",
  );
  const blogs = await res.json();

  return (
    <div className="flex flex-col gap-3 ">
      <div className="flex gap-3 max-w-xs">
        <SearchBlogs />
        <div>asd</div>
      </div>
      <BlogsList blogs={blogs as IBlog[]} />
    </div>
  );
};

export default BlogsPage;
