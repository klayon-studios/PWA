"use client";
import { useEffect } from "react";
import Stepper from "@/components/StatusBar";

import Scan from "./components/Scan";
import Collect from "./components/Collect";

import { useState } from "react";
import Finished from "./components/Finished";
import { useRouter } from "next/navigation";
import { usePrivy } from "@privy-io/react-auth";

export default function CollectPage() {
  const router = useRouter();
  const { ready, authenticated, user, logout } = usePrivy();
  const [currentStep, setCurrentStep] = useState(0);
  const [statusText, setStatusText] = useState("");
  const [chipSig, setChipSig] = useState("");
  const [signBlock, setSignBlock] = useState(BigInt(0));

  useEffect(() => {
    if (ready && !authenticated) {
      router.push("/");
    }
  }, [ready, authenticated, router]);

  const handleNextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const ActiveViews = [
    {
      title: "Scan",
      view: (
        <Scan
          handleNextStep={handleNextStep}
          setStatusText={setStatusText}
          setChipSig={setChipSig}
          setSignBlock={setSignBlock}
        />
      ),
    },
    {
      title: "Collect",
      view: <Collect handleNextStep={handleNextStep} chipSig={chipSig} signBlock={signBlock} />,
    },
    {
      title: "Finished",
      view: <Finished />,
    },
  ];

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='flex flex-col items-center w-full gap-24 p-8'>
        <Stepper currentStep={currentStep} steps={ActiveViews} />
        {ActiveViews[currentStep].view}
      </div>
    </div>
  );
}
