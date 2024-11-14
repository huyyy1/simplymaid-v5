"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface AnimatedCTAButtonProps extends React.ComponentProps<typeof Button> {
  children: React.ReactNode;
}

export function AnimatedCTAButton({ children, className, ...props }: AnimatedCTAButtonProps) {
  return (
    <Button
      {...props}
      className={cn(
        "relative overflow-hidden group",
        "bg-gradient-to-r from-[#FF4E8E] to-[#FF6BA4]",
        "hover:from-[#FF6BA4] hover:to-[#FF4E8E]",
        "text-white border-none",
        "shadow-[0_8px_40px_-12px_rgba(255,78,142,0.3)]",
        "hover:shadow-[0_12px_50px_-10px_rgba(255,78,142,0.4)]",
        "transition-all duration-300",
        "hover:scale-[1.02] hover:-translate-y-0.5",
        className
      )}
    >
      <motion.span
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
        initial={{ x: "-100%" }}
        animate={{ x: "200%" }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "linear",
        }}
      />
      {children}
    </Button>
  );
}
