"use client";

import { DollarSign } from "lucide-react";
import { cn } from "@/lib/utils";
import { typography } from "@/lib/styles/typography";

export function PaymentNotificationBadge() {
  return (
    <div
      className={cn(
        "absolute top-4 left-4",
        "bg-white/95 dark:bg-white/90 backdrop-blur-sm",
        "rounded-full px-4 py-2",
        "shadow-lg shadow-black/5"
      )}
    >
      <div className="flex items-center gap-2">
        <div
          className={cn("w-6 h-6 rounded-full", "bg-green-500 flex items-center justify-center")}
        >
          <DollarSign className="w-4 h-4 text-white" />
        </div>
        <span className={cn(typography.body.base, "font-medium")}>Payment Complete</span>
        <span className={cn(typography.body.small, "text-muted-foreground")}>• 3min ago</span>
      </div>
    </div>
  );
}