import React from "react";
import { notFound } from "next/navigation";

import BlogInfo from "@/src/widgets/BlogInfo";
import { IBlog } from "@/src/entities/Blog/model/types";

interface Props {
  params: { id: string };
}
const Page: React.FC<Props> = async ({ params }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`,
  );

  const blog = await res.json();

  if (!blog) return notFound();

  return (
    <div className="max-w-4xl mx-auto shadow-lg rounded-lg p-6 space-y-6">
      <BlogInfo blog={blog as IBlog} />
    </div>
  );
};

export default Page;
