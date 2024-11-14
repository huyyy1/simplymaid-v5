"use client";

import { Star, Bell } from "lucide-react";
import { TRUST_SIGNALS } from "../constants";

export function TrustSignals() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold text-white">Get Your Price in 60 Seconds</h3>
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
          <span className="text-sm font-medium text-white/90">{TRUST_SIGNALS.rating}</span>
        </div>
      </div>
      <p className="text-sm text-white/80">See how quick it is—we'll surprise you! 🎁</p>
      <div className="flex items-center gap-2 text-xs text-white/60">
        <Bell className="w-3.5 h-3.5 text-pink-500 fill-pink-500" />
        <span>Loved by {TRUST_SIGNALS.customerCount} customers</span>
      </div>
    </div>
  );
}
