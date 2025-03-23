import React from "react";
import { Image } from "@heroui/image";
import NextImage from "next/image";

import { IBlog } from "@/src/entities/Blog/model/types";

interface Props {
  blog: IBlog;
}

const BlogInfo: React.FC<Props> = ({ blog }) => (
  <article>
    <div className="flex flex-col items-start gap-2">
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
      <h1 className="text-2xl m-auto font-bold text-center">{blog.title}</h1>
    </div>
    <p className="text-center m-auto w-1/2">{blog.body}</p>
  </article>
);

export default BlogInfo;
