import { Link } from "@heroui/link";
import React from "react";
import { Skeleton } from "@heroui/skeleton";

import { ROUTES } from "@/src/shared/config/routes";

const NewBlogsSkeleton = () => (
  <div>
    <div className="flex justify-between">
      <h4 className="font-extrabold text-2xl mb-3">New blogs</h4>
      <Link color="foreground" href={ROUTES.blog}>
        All blogs
      </Link>
    </div>
    <div className="gap-2 grid grid-cols-1 sm:grid-cols-4">
      {Array.from({ length: 4 }, (_, i) => (
        <Skeleton key={i} className="rounded-lg">
          <div className="h-64 rounded-lg bg-default-300" />
        </Skeleton>
      ))}
    </div>
  </div>
);

export default NewBlogsSkeleton;
