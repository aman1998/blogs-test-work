import React from "react";

import UserCard from "../../entities/User/ui/UserCard";

import { IUser } from "@/src/entities/User/model/types";

const UsersList: React.FC = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: IUser[] = await res.json();

  return (
    <section className="gap-2 grid grid-cols-1 sm:grid-cols-4">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </section>
  );
};

export default UsersList;
