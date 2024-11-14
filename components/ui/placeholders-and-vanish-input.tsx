"use client";

import { useState, useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface PlaceholdersAndVanishInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholders?: string[];
  onSubmit?: (value: string) => void;
  error?: string | null;
  validate?: (value: string) => string | null;
}

export function PlaceholdersAndVanishInput({
  placeholders = [],
  value = "",
  onChange,
  onSubmit,
  error,
  validate,
  className,
  ...props
}: PlaceholdersAndVanishInputProps) {
  const [currentPlaceholderIndex, setCurrentPlaceholderIndex] = useState(0);
  const [isValid, setIsValid] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (placeholders.length > 1) {
        setCurrentPlaceholderIndex((prev) => (prev === placeholders.length - 1 ? 0 : prev + 1));
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [placeholders.length]);

  useEffect(() => {
    if (validate && typeof value === "string") {
      const validationError = validate(value);
      setIsValid(!validationError);
    }
  }, [value, validate]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && isValid) {
      e.preventDefault();
      onSubmit?.(value as string);
    }
  };

  const handleSubmit = () => {
    if (isValid) {
      onSubmit?.(value as string);
    }
  };

  return (
    <div className="relative">
      <Input
        ref={inputRef}
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholders[currentPlaceholderIndex] || ""}
        className={cn(
          "h-14 bg-white/5 border-white/10 text-white placeholder:text-white/40 pr-12",
          "focus:border-white/20 focus:ring-white/20 focus:ring-offset-0",
          error && "border-red-400/50 focus:border-red-400/50",
          className
        )}
        {...props}
      />
      <Button
        size="icon"
        onClick={handleSubmit}
        disabled={!isValid}
        className={cn(
          "absolute right-1 top-1 w-12 h-12",
          "bg-[#7E57C2] hover:bg-[#7E57C2]/90 disabled:bg-white/5",
          "transition-colors duration-200"
        )}
      >
        <ArrowRight className={cn("w-5 h-5", isValid ? "text-white" : "text-white/40")} />
      </Button>
    </div>
  );
}
