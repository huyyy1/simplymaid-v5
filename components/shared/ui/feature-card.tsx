"use client";

import { type LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  variant?: "default" | "gradient";
  gradientColors?: {
    from: string;
    to: string;
  };
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  className,
  variant = "default",
  gradientColors,
}: FeatureCardProps) {
  return (
    <Card
      className={cn(
        "p-6 h-full hover:shadow-lg transition-shadow duration-300",
        variant === "gradient" &&
          gradientColors &&
          `bg-gradient-to-br from-${gradientColors.from} to-${gradientColors.to} text-white`,
        className
      )}
    >
      <div className="flex flex-col items-center text-center space-y-4">
        <div
          className={cn(
            "p-3 rounded-full",
            variant === "default" ? "bg-primary/10" : "bg-white/10"
          )}
        >
          <Icon className={cn("w-6 h-6", variant === "default" ? "text-primary" : "text-white")} />
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className={cn(variant === "default" ? "text-muted-foreground" : "text-white/80")}>
          {description}
        </p>
      </div>
    </Card>
  );
}
