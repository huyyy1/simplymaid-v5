"use client";

import { cn } from "@/lib/utils";
import { textVariants } from "@/lib/styles/tokens/variants";
import { motion, HTMLMotionProps } from "framer-motion";

interface TextProps extends HTMLMotionProps<"p"> {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  weight?: "normal" | "medium" | "semibold" | "bold";
  intent?: "primary" | "muted" | "white";
  animate?: boolean;
  children: React.ReactNode;
}

export function Text({
  size,
  weight,
  intent,
  animate = true,
  className,
  children,
  ...props
}: TextProps) {
  const Comp = animate ? motion.p : "p";
  const animationProps = animate
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.5 },
      }
    : {};

  return (
    <Comp
      className={cn(textVariants({ size, weight, intent }), className)}
      {...animationProps}
      {...props}
    >
      {children}
    </Comp>
  );
}
