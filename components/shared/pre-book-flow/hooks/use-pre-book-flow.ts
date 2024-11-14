"use client";

import { useState, useCallback } from "react";
import { type FormData } from "@/lib/types/pre-book-flow";
import { ValidationService } from "@/lib/services/validation";

const initialFormData: FormData = {
  bedrooms: "",
  bathrooms: "",
  cleanType: "",
  location: "",
  email: "",
  name: "",
  mobile: "",
};

export function usePreBookFlow() {
  const [step, setStep] = useState<"initial" | "address" | "contact">("initial");
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [error, setError] = useState<string | null>(null);

  const handleInitialSubmit = useCallback(
    (data: Pick<FormData, "bedrooms" | "bathrooms" | "cleanType">) => {
      const validationError = ValidationService.validateFormData({ ...formData, ...data });
      if (validationError) {
        setError(validationError);
        return;
      }

      setFormData((prev) => ({ ...prev, ...data }));
      setStep("address");
    },
    [formData]
  );

  const handleAddressSubmit = useCallback((location: string) => {
    setFormData((prev) => ({ ...prev, location }));
    setStep("contact");
  }, []);

  const handleContactSubmit = useCallback((field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }, []);

  const handleBack = useCallback(() => {
    switch (step) {
      case "address":
        setStep("initial");
        break;
      case "contact":
        setStep("address");
        break;
    }
  }, [step]);

  const handleComplete = useCallback(async () => {
    try {
      // Here you would typically:
      // 1. Validate all form data
      // 2. Submit to your API
      // 3. Generate magic link
      // 4. Send confirmation email/SMS
      console.log("Form completed:", formData);
    } catch (error) {
      console.error("Error submitting form:", error);
      setError(error instanceof Error ? error.message : "An error occurred");
    }
  }, [formData]);

  return {
    step,
    formData,
    error,
    handleInitialSubmit,
    handleAddressSubmit,
    handleContactSubmit,
    handleBack,
    handleComplete,
  };
}
