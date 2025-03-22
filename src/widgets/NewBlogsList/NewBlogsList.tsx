"use client";

import React from "react";
import { Link } from "@heroui/link";

import { IBlog } from "@/src/entities/Blog/model/types";
import BlogCard from "@/src/entities/Blog/ui/BlogCard";
import { ROUTES } from "@/src/shared/config/routes";

const NewBlogsList: React.FC = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_start=0&_limit=4",
  );
  const blogs: IBlog[] = await res.json();

  if (!blogs || !blogs?.length) return null;

  return (
    <div>
      <div className="flex justify-between">
        <h4 className="font-extrabold text-2xl mb-3">New blogs</h4>
        <Link color="foreground" href={ROUTES.blog}>
          All blogs
        </Link>
      </div>
      <div className="gap-2 grid grid-cols-1 sm:grid-cols-4">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default NewBlogsList;
