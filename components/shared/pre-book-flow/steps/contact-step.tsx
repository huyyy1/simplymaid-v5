"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { StepHeader } from "../components/step-header";
import { PreBookInput } from "../components/pre-book-input";
import { type FormData } from "@/lib/types/pre-book-flow";
import { CONTACT_STEPS } from "../constants";

interface ContactStepProps {
  formData: FormData;
  onChange: (field: keyof FormData, value: string) => void;
  onBack: () => void;
  onComplete: () => void;
}

export function ContactStep({ formData, onChange, onBack, onComplete }: ContactStepProps) {
  const [currentField, setCurrentField] = useState<"email" | "name" | "mobile">("email");
  const currentStep = CONTACT_STEPS.find((step) => step.field === currentField)!;

  const moveToNextStep = () => {
    const currentIndex = CONTACT_STEPS.findIndex((step) => step.field === currentField);
    if (currentIndex < CONTACT_STEPS.length - 1) {
      setCurrentField(CONTACT_STEPS[currentIndex + 1].field as "email" | "name" | "mobile");
    } else {
      onComplete();
    }
  };

  return (
    <Card className="p-8 bg-[#1B1E2E]/95 backdrop-blur-sm rounded-xl border-white/10">
      <div className="space-y-6">
        <StepHeader heading={currentStep.heading} subtext={currentStep.subtext} onBack={onBack} />

        <PreBookInput
          type={currentField === "email" ? "email" : currentField === "mobile" ? "tel" : "text"}
          field={currentField}
          value={formData[currentField]}
          onChange={(value) => onChange(currentField, value)}
          onSubmit={moveToNextStep}
          placeholder={currentStep.placeholder}
          helperText={currentStep.helperText}
        />
      </div>
    </Card>
  );
}
