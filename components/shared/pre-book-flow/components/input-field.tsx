"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ValidationService } from "@/lib/services/validation";
import { type FormData } from "@/lib/types/pre-book-flow";

interface InputFieldProps {
  type: "text" | "email" | "tel";
  field: keyof FormData;
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  helperText?: string;
}

export function InputField({
  type,
  field,
  value,
  placeholder,
  onChange,
  onSubmit,
  helperText,
}: InputFieldProps) {
  const [error, setError] = useState<string | null>(null);
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      let newValue = e.target.value;

      if (field === "mobile") {
        newValue = ValidationService.formatMobileNumber(newValue);
      }

      onChange(newValue);
      setError(null);
    },
    [field, onChange]
  );

  const handleBlur = useCallback(() => {
    setIsFocused(false);
    if (value) {
      const validationError = ValidationService.validateField(field, value);
      setError(validationError);
    }
  }, [field, value]);

  const handleSubmit = useCallback(() => {
    const validationError = ValidationService.validateField(field, value);
    if (validationError) {
      setError(validationError);
      return;
    }
    onSubmit();
  }, [field, value, onSubmit]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        e.preventDefault();
        handleSubmit();
      }
    },
    [handleSubmit]
  );

  return (
    <div className="space-y-2">
      <div className="relative">
        <Input
          type={type}
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsFocused(true)}
          onBlur={handleBlur}
          placeholder={placeholder}
          className={`h-12 pr-12 bg-white/5 border-white/10 text-white placeholder:text-white/40 
            focus:border-white/20 focus:ring-white/20 focus:ring-offset-0
            ${error ? "border-red-400/50 focus:border-red-400/50" : ""}`}
        />
        <Button
          size="icon"
          onClick={handleSubmit}
          disabled={!value}
          className="absolute right-1 top-1 w-10 h-10 bg-[#7E57C2] hover:bg-[#7E57C2]/90 disabled:bg-white/5"
        >
          <ArrowRight className="w-5 h-5" />
        </Button>
      </div>

      {error ? (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm text-red-400 px-4"
        >
          {error}
        </motion.p>
      ) : (
        helperText && <p className="text-sm text-white/60 px-4">{helperText}</p>
      )}
    </div>
  );
}
