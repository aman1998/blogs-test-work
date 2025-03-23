import React, { cache } from "react";
import { notFound } from "next/navigation";

import BlogInfo from "@/src/widgets/BlogInfo";
import { IBlog } from "@/src/entities/Blog/model/types";
import UserCard from "@/src/entities/User/ui/UserCard";
import { IUser } from "@/src/entities/User/model/types";

interface Props {
  params: { id: string };
}

const fetchBlogData = async (id: string) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  if (!res.ok) return null;

  const blog: IBlog = await res.json();

  const resUser = await fetch(
    `https://jsonplaceholder.typicode.com/users/${blog.userId}`,
  );
  const user: IUser = await resUser.json();

  return { blog, user };
};

const fetchBlogDataCached = cache(fetchBlogData);

export async function generateMetadata({ params }: Props) {
  const data = await fetchBlogDataCached(params.id);

  if (!data) {
    return {
      title: "Blog Not Found",
      description: "The blog you are looking for does not exist.",
    };
  }

  const { blog, user } = data;
  const authorName = user.name;
  const authorUrl = `https://jsonplaceholder.typicode.com/users/${user.id}`;

  return {
    title: `${authorName}-${blog.title}`,
    description: blog.body,
    authors: [
      {
        name: authorName,
        url: authorUrl,
      },
    ],
    creator: authorName,
    publisher: authorName,
    alternates: {
      canonical: `/blog/${params.id}`,
    },
  };
}

const Page: React.FC<Props> = async ({ params }) => {
  const data = await fetchBlogDataCached(params.id);

  if (!data) return notFound();

  const { blog, user } = data;

  return (
    <section className="flex flex-col gap-3">
      <UserCard user={user} />
      <BlogInfo blog={blog} />
    </section>
  );
};

export default Page;
