import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { useState } from "react";

type ScanProps = {
  handleNextStep: () => void;
};

const Collect = ({ handleNextStep }: ScanProps) => {
  const [loading, setLoading] = useState(false);
  const handleCollect = () => {
    setLoading(true);
    // TODO: Add logic
    setTimeout(() => {
      setLoading(false);
      handleNextStep();
    }, 5000);
  };
  return (
    <>
      <div className="rounded-full w-48 h-48 border-2 justify-center items-center flex">
        {loading ? (
          <Icons.loader className="w-24 h-24 animate-spin text-accent" />
        ) : (
          <Icons.collect className="w-24 h-24" />
        )}
      </div>
      <div className="w-full">
        <h1 className="text-3xl text-left w-full font-bold">Collect</h1>
        <p className="text-left w-full mt-2">Collect your item</p>
        <Button
          className="w-full mt-8"
          size="lg"
          onClick={handleCollect}
          disabled={loading}
        >
          {loading ? "Please wait..." : "Collect"}
        </Button>
      </div>
    </>
  );
};

export default Collect;
