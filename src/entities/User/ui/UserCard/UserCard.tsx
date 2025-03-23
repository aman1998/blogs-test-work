"use client";

import React from "react";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Avatar } from "@heroui/avatar";
import { useRouter } from "next/navigation";

import { ROUTES } from "@/src/shared/config/routes";

interface Props {
  user: IUser;
}
const UserCard: React.FC<Props> = ({ user }) => {
  const router = useRouter();

  return (
    <Card
      isPressable
      className="w-full"
      onPress={() => router.push(ROUTES.userId(user.id))}
    >
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar isBordered radius="full" size="md" src="/ronaldo.jpg" />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">
              {user.username}
            </h4>
            <h5 className="text-small tracking-tight text-default-400">
              {user.website}
            </h5>
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-400">
        <p>
          {user.address.city}, {user.address.street}
        </p>
        <span className="pt-2">
          #{user.name}
          <span aria-label="computer" className="py-2" role="img">
            💻
          </span>
        </span>
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">
            {user.phone}
          </p>
          <p className=" text-default-400 text-small">Phone</p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default UserCard;
