import React from "react";
import { Link } from "@heroui/link";

import UserCard from "../../entities/User/ui/UserCard";

import { ROUTES } from "@/src/shared/config/routes";
import { IUser } from "@/src/entities/User/model/types";

const BestUsers: React.FC = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users?_start=0&_limit=4",
  );
  const users: IUser[] = await res.json();

  return (
    <section>
      <div className="flex justify-between">
        <h4 className="font-extrabold text-2xl mb-3">Best users</h4>
        <Link color="foreground" href={ROUTES.user}>
          All users
        </Link>
      </div>
      <div className="gap-2 grid grid-cols-1 sm:grid-cols-4">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </section>
  );
};

export default BestUsers;
