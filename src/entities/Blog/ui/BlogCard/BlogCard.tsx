"use client";

import React from "react";
import { Image } from "@heroui/image";
import { Card } from "@heroui/card";
import { useRouter } from "next/navigation";
import NextImage from "next/image";

import { IBlog } from "@/src/entities/Blog/model/types";
import { ROUTES } from "@/src/shared/config/routes";

interface Props {
  blog: IBlog;
}

const BlogCard: React.FC<Props> = ({ blog }) => {
  const router = useRouter();

  return (
    <Card
      isPressable
      className="p-4 flex flex-col items-center justify-center gap-3"
      onPress={() => router.push(ROUTES.blogId(blog.id))}
    >
      <p className="text-tiny uppercase font-bold">{blog.title}</p>

      <Image
        isBlurred
        alt="HeroUI Album Cover"
        as={NextImage}
        className="object-cover rounded-xl "
        classNames={{ wrapper: "mt-auto" }}
        height={240}
        src="https://heroui.com/images/album-cover.png"
        width={270}
      />
    </Card>
  );
};

export default BlogCard;
