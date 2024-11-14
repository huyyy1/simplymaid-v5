"use client";

import { cn } from "@/lib/utils";
import { type BaseProps } from "@/lib/types";

interface GradientBackgroundProps extends BaseProps {
  variant?: "primary" | "secondary" | "accent";
  direction?: "to-t" | "to-b" | "to-r" | "to-l" | "to-tr" | "to-tl" | "to-br" | "to-bl";
  opacity?: number;
}

export function GradientBackground({
  variant = "primary",
  direction = "to-b",
  opacity = 0.1,
  className,
}: GradientBackgroundProps) {
  return (
    <div
      className={cn(
        "absolute inset-0 pointer-events-none",
        `bg-gradient-${direction}`,
        variant === "primary" && "from-primary/20 via-primary/10 to-transparent",
        variant === "secondary" && "from-secondary/20 via-secondary/10 to-transparent",
        variant === "accent" && "from-accent/20 via-accent/10 to-transparent",
        className
      )}
      style={{ opacity }}
      aria-hidden="true"
    />
  );
}
