"use client";

import { motion } from "framer-motion";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { ROOM_COUNTS } from "../constants";

interface RoomSelectorProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export function RoomSelector({ label, value, onChange, className }: RoomSelectorProps) {
  return (
    <div
      className={cn("space-y-3", className)}
      role="radiogroup"
      aria-labelledby={`${label.toLowerCase()}-label`}
    >
      <Label id={`${label.toLowerCase()}-label`} className="text-sm font-medium text-white/80">
        {label}
      </Label>
      <div className="grid grid-cols-6 gap-2">
        {ROOM_COUNTS.map((num) => (
          <motion.button
            key={num}
            role="radio"
            aria-checked={value === num.toString()}
            tabIndex={0}
            onClick={() => onChange(num.toString())}
            className={cn(
              "relative flex items-center justify-center rounded-lg border h-12 text-base font-medium transition-all duration-200",
              value === num.toString()
                ? "bg-[#7E57C2] text-white border-[#7E57C2] shadow-lg shadow-[#7E57C2]/20"
                : "bg-white/5 text-white hover:bg-white/10 border-white/10 hover:border-white/20"
            )}
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
          >
            {num}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
