"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StepContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function StepContainer({ children, className }: StepContainerProps) {
  return (
    <Card
      className={cn("p-8 bg-[#1B1E2E]/95 backdrop-blur-sm rounded-xl border-white/10", className)}
    >
      {children}
    </Card>
  );
}
