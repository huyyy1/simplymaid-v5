"use client";

import { Clock } from "lucide-react";
import { TRUST_SIGNALS } from "../constants";

export function UrgencyIndicator() {
  return (
    <div className="flex items-center justify-center gap-2 text-xs font-medium">
      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 text-[#FF4E8E]">
        <Clock className="w-3.5 h-3.5" />
        <span>Only {TRUST_SIGNALS.slotsLeft} Slots Left This Week</span>
      </div>
    </div>
  );
}
