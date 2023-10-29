import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";

type ScanProps = {
  handleNextStep: () => void;
};

const Collect = ({ handleNextStep }: ScanProps) => {
  const handleCollect = () => {
    handleNextStep();
  };
  return (
    <>
      <div className="rounded-full w-48 h-48 border-2 justify-center items-center flex">
        <Icons.collect className="w-24 h-24" />
      </div>
      <div className="w-full">
        <h1 className="text-3xl text-left w-full font-bold">Collect</h1>
        <p className="text-left w-full mt-2">Collect your item</p>
        <Button className="w-full mt-8" size="lg" onClick={handleCollect}>
          Collect
        </Button>
      </div>
    </>
  );
};

export default Collect;
