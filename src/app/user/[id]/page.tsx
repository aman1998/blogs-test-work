import React, { cache } from "react";
import { notFound } from "next/navigation";

import UserCard from "@/src/entities/User/ui/UserCard";
import { IUser } from "@/src/entities/User/model/types";

interface Props {
  params: { id: string };
}

const fetchUserData = async (id: string) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

  if (!res.ok) return null;

  const user: IUser = await res.json();

  return { user };
};

const fetchUserDataCached = cache(fetchUserData);

export async function generateMetadata({ params }: Props) {
  const data = await fetchUserDataCached(params.id);

  if (!data) {
    return {
      title: "Blog Not Found",
      description: "The blog you are looking for does not exist.",
    };
  }

  const { user } = data;
  const authorName = user.name;
  const authorUrl = `https://jsonplaceholder.typicode.com/users/${user.id}`;

  return {
    title: authorName,
    description: `${authorName} blog`,
    authors: [
      {
        name: authorName,
        url: authorUrl,
      },
    ],
    creator: authorName,
    publisher: authorName,
    alternates: {
      canonical: `/user/${params.id}`,
    },
  };
}

const Page: React.FC<Props> = async ({ params }) => {
  const data = await fetchUserDataCached(params.id);

  if (!data) return notFound();

  const { user } = data;

  return <UserCard user={user} />;
};

export default Page;
