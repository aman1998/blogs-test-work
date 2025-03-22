"use client";

import React from "react";
import { Image } from "@heroui/image";
import { Card, CardBody, CardHeader } from "@heroui/card";
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
    <Card isPressable onPress={() => router.push(ROUTES.blogId(blog.id))}>
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">{blog.title}</p>
        {/*<small className="text-default-500">User ID {blog.userId}</small>*/}
        {/*<h4 className="font-bold text-large">{blog.body}</h4>*/}
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          isBlurred
          alt="HeroUI Album Cover"
          as={NextImage}
          className="object-cover rounded-xl"
          classNames={{ wrapper: "mt-auto" }}
          height={240}
          src="https://heroui.com/images/album-cover.png"
          width={270}
        />
      </CardBody>
    </Card>
  );
};

export default BlogCard;
