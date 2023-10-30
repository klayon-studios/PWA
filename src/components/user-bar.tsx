"use client";
import { usePrivy } from "@privy-io/react-auth";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const TopBar = () => {
  const { user } = usePrivy();
  return (
    <div className="top-0 fixed bg-background border-b w-full px-8 py-4 justify-between items-center flex">
      <Avatar>
        <AvatarFallback>{user?.google?.name?.slice(0, 2)}</AvatarFallback>
      </Avatar>
      <p>{user?.google?.name}</p>
    </div>
  );
};

export default TopBar;
