"use client";

import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { type BaseProps } from "@/lib/types/shared";

interface TrustBadgeProps extends BaseProps {
  icon: LucideIcon;
  title: string;
  description: string;
  intent?: "default" | "dark";
}

export function TrustBadge({
  icon: Icon,
  title,
  description,
  intent = "default",
  className,
}: TrustBadgeProps) {
  return (
    <div
      className={cn(
        "rounded-xl p-3 shadow-lg backdrop-blur-sm",
        intent === "default" && "bg-white/90 dark:bg-gray-900/90",
        intent === "dark" && "bg-gray-900/90",
        className
      )}
    >
      <div className="flex items-center gap-2 mb-1">
        <Icon
          className={cn(
            "w-4 h-4",
            intent === "default" && "text-primary",
            intent === "dark" && "text-white"
          )}
        />
        <span className={cn("text-sm font-medium", intent === "dark" && "text-white")}>
          {title}
        </span>
      </div>
      <p
        className={cn(
          "text-xs",
          intent === "default" && "text-muted-foreground",
          intent === "dark" && "text-white/80"
        )}
      >
        {description}
      </p>
    </div>
  );
}
