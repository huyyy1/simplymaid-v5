"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface SubmitButtonProps {
  onClick: () => void;
  error?: string | null;
  className?: string;
}

export function SubmitButton({ onClick, error, className }: SubmitButtonProps) {
  return (
    <motion.div
      animate={
        !error
          ? {
              y: [0, -4, 0],
              transition: {
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              },
            }
          : {}
      }
    >
      <Button
        onClick={onClick}
        className={cn(
          "w-full h-14 text-lg font-semibold transition-all duration-300",
          !error
            ? "bg-[#FF4E8E] hover:bg-[#FF4E8E]/90 text-white shadow-xl shadow-[#FF4E8E]/20 hover:shadow-2xl hover:shadow-[#FF4E8E]/30 hover:-translate-y-0.5"
            : "bg-[#FF4E8E]/40 text-white/90 hover:bg-[#FF4E8E]/50",
          className
        )}
      >
        GET MY PRICE
        <ArrowRight
          className={cn(
            "ml-2 w-5 h-5 transition-transform duration-300",
            !error && "group-hover:translate-x-1"
          )}
        />
      </Button>
    </motion.div>
  );
}
