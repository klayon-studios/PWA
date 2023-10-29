import Link from "next/link";
import { Icons } from "./icons";
import { Button } from "./ui/button";

const NavBar = () => {
  return (
    <div className="bottom-0 fixed bg-background border-t w-full px-8 py-4 justify-between flex">
      {menuItems.map((item) => (
        <Button size="icon" variant="ghost" key={item.name} asChild>
          <Link href={item.path}>{item.icon}</Link>
        </Button>
      ))}
    </div>
  );
};

export default NavBar;

const menuItems = [
  {
    name: "Home",
    path: "/",
    icon: <Icons.home className="w-6 h-6" />,
  },
  {
    name: "Collect",
    path: "/collect",
    icon: <Icons.scan className="w-6 h-6" />,
  },
  {
    name: "Inventory",
    path: "/inventory",
    icon: <Icons.inventory className="w-6 h-6" />,
  },
];
