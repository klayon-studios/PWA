import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Finished = () => {
  const router = useRouter();
  const handleFinished = () => {
    router.push("/inventory");
  };
  return (
    <>
      <div className="rounded-full w-48 h-48 border-2 justify-center items-center flex">
        <Icons.check className="w-24 h-24" />
      </div>
      <div className="w-full">
        <h1 className="text-3xl text-left w-full font-bold">Finished</h1>
        <p className="text-left w-full mt-2">You have collected the item</p>
        <Button className="w-full mt-8" size="lg" onClick={handleFinished}>
          View in Inventory
        </Button>
      </div>
    </>
  );
};

export default Finished;
