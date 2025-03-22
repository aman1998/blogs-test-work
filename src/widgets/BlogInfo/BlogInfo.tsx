import React from "react";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Image } from "@heroui/image";
import NextImage from "next/image";

import { IBlog } from "@/src/entities/Blog/model/types";

interface Props {
  blog: IBlog;
}

const BlogInfo: React.FC<Props> = ({ blog }) => (
  <div className="container mx-auto p-4">
    <Card className="max-w-2xl mx-auto">
      <CardHeader className="flex flex-col items-start gap-2">
        <Image
          priority
          removeWrapper
          alt={blog.title}
          as={NextImage}
          className="z-0 m-auto object-cover"
          height={320}
          src="https://heroui.com/images/album-cover.png"
          width={300}
        />
        <h1 className="text-2xl font-bold">{blog.title}</h1>
        <p className="text-sm">User ID: {blog.userId}</p>
        <p className="text-sm">Post ID: {blog.id}</p>
      </CardHeader>
      <CardBody>
        <p>{blog.body}</p>
      </CardBody>
    </Card>
  </div>
);

export default BlogInfo;
