"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface StepHeaderProps {
  heading: string;
  subtext: string;
  onBack?: () => void;
}

export function StepHeader({ heading, subtext, onBack }: StepHeaderProps) {
  return (
    <div className="flex items-center gap-4">
      {onBack && (
        <Button
          variant="ghost"
          size="icon"
          onClick={onBack}
          className="h-9 w-9 text-white/80 hover:text-white hover:bg-white/10"
        >
          <ArrowLeft className="h-4 w-4" />
        </Button>
      )}
      <div>
        <h3 className="text-2xl font-bold text-white">{heading}</h3>
        <p className="text-sm text-white/80 mt-1">{subtext}</p>
      </div>
    </div>
  );
}
