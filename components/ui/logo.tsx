"use client";

import { cn } from "@/lib/utils";

interface LogoProps {
  isTransparent?: boolean;
  className?: string;
}

export function Logo({ isTransparent, className }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div
        className={cn(
          "font-bold text-xl tracking-tight",
          isTransparent ? "text-white" : "text-foreground"
        )}
      >
        Simply Maid
      </div>
    </div>
  );
}