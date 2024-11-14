"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface StepFlowContextType {
  currentStep: number;
  totalSteps: number;
  nextStep: () => void;
  prevStep: () => void;
  goToStep: (step: number) => void;
  isFirstStep: boolean;
  isLastStep: boolean;
}

const StepFlowContext = createContext<StepFlowContextType | undefined>(undefined);

interface StepFlowProps {
  children: ReactNode;
  totalSteps: number;
  initialStep?: number;
}

export function StepFlow({ children, totalSteps, initialStep = 1 }: StepFlowProps) {
  const [currentStep, setCurrentStep] = useState(initialStep);

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));
  const goToStep = (step: number) => setCurrentStep(Math.min(Math.max(1, step), totalSteps));

  return (
    <StepFlowContext.Provider
      value={{
        currentStep,
        totalSteps,
        nextStep,
        prevStep,
        goToStep,
        isFirstStep: currentStep === 1,
        isLastStep: currentStep === totalSteps,
      }}
    >
      {children}
    </StepFlowContext.Provider>
  );
}

interface StepProps {
  step: number;
  children: ReactNode;
}

export function Step({ step, children }: StepProps) {
  const context = useContext(StepFlowContext);

  if (!context) {
    throw new Error("Step must be used within StepFlow");
  }

  const { currentStep } = context;

  if (step !== currentStep) {
    return null;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={step}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export function useStepFlow() {
  const context = useContext(StepFlowContext);

  if (!context) {
    throw new Error("useStepFlow must be used within StepFlow");
  }

  return context;
}

interface StepIndicatorProps {
  className?: string;
}

export function StepIndicator({ className }: StepIndicatorProps) {
  const { currentStep, totalSteps } = useStepFlow();

  return (
    <div className={className}>
      <div className="flex items-center gap-2">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <div
            key={index}
            className={`h-2 rounded-full transition-all duration-300 ${
              index + 1 === currentStep
                ? "w-4 bg-primary"
                : index + 1 < currentStep
                  ? "w-2 bg-primary/50"
                  : "w-2 bg-primary/20"
            }`}
          />
        ))}
      </div>
      <p className="text-sm text-muted-foreground mt-2">
        Step {currentStep} of {totalSteps}
      </p>
    </div>
  );
}
