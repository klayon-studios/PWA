import { Icons } from "./icons";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";

const TopBar = () => {
  return (
    <div className="top-0 fixed bg-background border-b w-full px-8 py-4 justify-between flex">
      <Avatar>
        <AvatarFallback>AA</AvatarFallback>
        <AvatarImage src="https://pbs.twimg.com/profile_images/1718328290191314944/7-8Mp-I0_400x400.jpg" />
      </Avatar>
    </div>
  );
};

export default TopBar;
