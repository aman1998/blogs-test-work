import { Link } from "@heroui/link";
import React from "react";
import { Skeleton } from "@heroui/skeleton";

import { ROUTES } from "@/src/shared/config/routes";

const BestUsersSkeleton = () => (
  <div>
    <div className="flex justify-between">
      <h4 className="font-extrabold text-2xl mb-3">Best users</h4>
      <Link color="foreground" href={ROUTES.user}>
        All users
      </Link>
    </div>
    <div className="gap-2 grid grid-cols-1 sm:grid-cols-4">
      {Array.from({ length: 4 }, (_, i) => (
        <Skeleton key={i} className="rounded-lg">
          <div className="h-48 rounded-lg bg-default-300" />
        </Skeleton>
      ))}
    </div>
  </div>
);

export default BestUsersSkeleton;
