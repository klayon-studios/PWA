"use client";
import { cn } from "@/lib/utils";
import { Separator } from "../ui/separator";

import { Icons } from "../icons";

type StepperProps = {
  currentStep: number;
  steps: any[];
};

export default function Stepper({ currentStep, steps }: StepperProps) {
  return (
    <div className="flex items-center w-full justify-between">
      {steps.map((step, index) => (
        <div key={index} className="flex space-x-4 items-center ">
          <Step title={step.title} step={index} currentStep={currentStep} />
          {index < steps.length - 1 && <Separator className="w-full ml-4" />}
        </div>
      ))}
    </div>
  );
}

type StepProps = {
  title: string;
  step: number;
  currentStep: number;
};

type Status = "complete" | "active" | "incomplete";

const Step = ({ title, step, currentStep }: StepProps) => {
  const status: Status =
    step < currentStep
      ? "complete"
      : step === currentStep
      ? "active"
      : "incomplete";
  return (
    <div className="flex flex-col items-center">
      <div
        className={cn(
          "flex justify-center rounded-full border w-8 h-8 items-center",
          status !== "incomplete" && "border-primary"
        )}
      >
        {status === "incomplete" && (
          <span className="text-primary">{step + 1}</span>
        )}
        <ActiveCircle status={status} />
      </div>
      <p className={cn(status === "incomplete" && "text-muted-foreground")}>
        {title}
      </p>
    </div>
  );
};

const ActiveViews = {
  active: <div className="flex items-center rounded-full w-3 h-3 bg-primary" />,
  complete: <Icons.check className="w-4 h-4 text-primary" />,
  incomplete: null,
};

const ActiveCircle = ({ status }: { status: Status }) => {
  const CurrentView = ActiveViews[status];
  return <>{CurrentView}</>;
};
