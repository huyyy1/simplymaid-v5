"use client";

import { useState, useCallback } from "react";
import { ValidationService } from "@/lib/services/validation";

interface UseFormStepProps<T> {
  initialData: T;
  onSubmit: (data: T) => void;
  validateStep?: (data: T) => string | null;
}

export function useFormStep<T extends Record<string, any>>({
  initialData,
  onSubmit,
  validateStep
}: UseFormStepProps<T>) {
  const [data, setData] = useState<T>(initialData);
  const [error, setError] = useState<string | null>(null);

  const handleChange = useCallback((field: keyof T, value: any) => {
    setData(prev => ({ ...prev, [field]: value }));
    setError(null);
  }, []);

  const handleSubmit = useCallback(() => {
    const validationError = validateStep?.(data) ?? null;
    if (validationError) {
      setError(validationError);
      return;
    }
    onSubmit(data);
  }, [data, onSubmit, validateStep]);

  return {
    data,
    error,
    setError,
    handleChange,
    handleSubmit
  };
}