"use client";

import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { BACKGROUNDS, BORDERS } from "@/lib/constants/ui";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "dark" | "light";
  children: React.ReactNode;
}

export function GlassCard({ variant = "dark", className, children, ...props }: GlassCardProps) {
  return (
    <Card
      className={cn(
        "p-8 rounded-xl",
        variant === "dark" ? BACKGROUNDS.GLASS_DARK : BACKGROUNDS.GLASS_LIGHT,
        BORDERS.GLASS,
        className
      )}
      {...props}
    >
      {children}
    </Card>
  );
}
