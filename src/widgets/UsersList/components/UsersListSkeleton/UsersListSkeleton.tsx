import React from "react";
import { Skeleton } from "@heroui/skeleton";

const UsersListSkeleton = () => (
  <div className="gap-2 grid grid-cols-1 sm:grid-cols-4">
    {Array.from({ length: 10 }, () => (
      <Skeleton className="rounded-lg">
        <div className="h-48 rounded-lg bg-default-300" />
      </Skeleton>
    ))}
  </div>
);

export default UsersListSkeleton;
