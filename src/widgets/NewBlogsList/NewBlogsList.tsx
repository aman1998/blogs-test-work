"use client";

import React from "react";

import { IBlog } from "@/src/entities/Blog/model/types";
import BlogCard from "@/src/entities/Blog/ui/BlogCard";

interface Props {
  blogs: IBlog[];
}

const NewBlogsList: React.FC<Props> = ({ blogs }) => {
  return (
    <div>
      <h4 className="font-extrabold text-2xl mb-3">New blogs</h4>
      <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default NewBlogsList;
