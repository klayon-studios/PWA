"use client";
import Stepper from "@/components/StatusBar";

import Scan from "./components/Scan";
import Collect from "./components/Collect";

import { useState } from "react";
import Finished from "./components/Finished";

export default function CollectPage() {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const ActiveViews = [
    {
      title: "Scan",
      view: <Scan handleNextStep={handleNextStep} />,
    },
    {
      title: "Collect",
      view: <Collect handleNextStep={handleNextStep} />,
    },
    {
      title: "Finished",
      view: <Finished />,
    },
  ];

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center w-full gap-24 p-8">
        <Stepper currentStep={currentStep} steps={ActiveViews} />
        {ActiveViews[currentStep].view}
      </div>
    </div>
  );
}
