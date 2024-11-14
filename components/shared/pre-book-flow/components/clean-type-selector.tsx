"use client";

import { motion } from "framer-motion";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { CLEAN_TYPES } from "../constants";

interface CleanTypeSelectorProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export function CleanTypeSelector({ value, onChange, className }: CleanTypeSelectorProps) {
  return (
    <div
      className={cn("space-y-3", className)}
      role="radiogroup"
      aria-labelledby="clean-type-label"
    >
      <Label id="clean-type-label" className="text-sm font-medium text-white/80">
        Clean Type
      </Label>
      <div className="grid grid-cols-3 gap-2">
        {CLEAN_TYPES.map((type) => (
          <motion.button
            key={type.value}
            role="radio"
            aria-checked={value === type.value}
            tabIndex={0}
            onClick={() => onChange(type.value)}
            className={cn(
              "relative flex items-center justify-center rounded-lg border px-4 h-12 text-sm font-medium transition-all duration-200",
              value === type.value
                ? "bg-[#7E57C2] text-white border-[#7E57C2] shadow-lg shadow-[#7E57C2]/20"
                : "bg-white/5 text-white hover:bg-white/10 border-white/10 hover:border-white/20"
            )}
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
          >
            {type.label}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
