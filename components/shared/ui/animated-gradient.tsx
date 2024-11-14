"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { type BaseProps } from "@/lib/types";

interface AnimatedGradientProps extends BaseProps {
  colors?: {
    first: string;
    second: string;
  };
}

export function AnimatedGradient({
  colors = {
    first: "rgb(var(--primary))",
    second: "rgb(var(--secondary))",
  },
  className,
}: AnimatedGradientProps) {
  return (
    <>
      <motion.div
        className={cn(
          "absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob",
          className
        )}
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -50, 20, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ backgroundColor: colors.first }}
      />
      <motion.div
        className={cn(
          "absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob animation-delay-2000",
          className
        )}
        animate={{
          x: [0, -30, 20, 0],
          y: [0, 50, -20, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "linear",
          delay: 1,
        }}
        style={{ backgroundColor: colors.second }}
      />
    </>
  );
}
