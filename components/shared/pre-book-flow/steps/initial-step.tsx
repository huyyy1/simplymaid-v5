"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";
import { TrustSignals } from "../components/trust-signals";
import { RoomSelector } from "../components/room-selector";
import { CleanTypeSelector } from "../components/clean-type-selector";
import { type FormData } from "@/lib/types/pre-book-flow";
import { TRUST_SIGNALS } from "../constants";

interface InitialStepProps {
  formData: FormData;
  onSubmit: (data: Pick<FormData, "bedrooms" | "bathrooms" | "cleanType">) => void;
}

export function InitialStep({ formData, onSubmit }: InitialStepProps) {
  const [error, setError] = useState<string | null>(null);
  const [localFormData, setLocalFormData] = useState<
    Pick<FormData, "bedrooms" | "bathrooms" | "cleanType">
  >({
    bedrooms: formData.bedrooms,
    bathrooms: formData.bathrooms,
    cleanType: formData.cleanType,
  });

  const handleSelect = (field: keyof typeof localFormData, value: string) => {
    setLocalFormData((prev) => ({ ...prev, [field]: value }));
    setError(null);
  };

  const handleSubmit = () => {
    if (!localFormData.bedrooms || !localFormData.bathrooms || !localFormData.cleanType) {
      setError("Please fill in all fields");
      return;
    }
    onSubmit(localFormData);
  };

  return (
    <Card className="p-8 bg-[#1B1E2E]/95 backdrop-blur-sm rounded-xl border-white/10">
      <div className="space-y-6">
        <TrustSignals />

        <div className="space-y-5">
          <RoomSelector
            label="Bedrooms"
            value={localFormData.bedrooms}
            onChange={(value) => handleSelect("bedrooms", value)}
          />

          <RoomSelector
            label="Bathrooms"
            value={localFormData.bathrooms}
            onChange={(value) => handleSelect("bathrooms", value)}
          />

          <CleanTypeSelector
            value={localFormData.cleanType}
            onChange={(value) => handleSelect("cleanType", value)}
          />
        </div>

        {error && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm text-red-400 px-1"
          >
            {error}
          </motion.p>
        )}

        <motion.div
          animate={
            !error
              ? {
                  y: [0, -4, 0],
                  transition: {
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  },
                }
              : {}
          }
        >
          <Button
            onClick={handleSubmit}
            className={`w-full h-14 text-lg font-semibold transition-all duration-300 ${
              !error
                ? "bg-[#FF4E8E] hover:bg-[#FF4E8E]/90 text-white shadow-xl shadow-[#FF4E8E]/20 hover:shadow-2xl hover:shadow-[#FF4E8E]/30 hover:-translate-y-0.5"
                : "bg-[#FF4E8E]/40 text-white/90 hover:bg-[#FF4E8E]/50"
            }`}
          >
            GET MY PRICE
          </Button>
        </motion.div>

        <div className="flex items-center justify-center gap-1.5 text-xs text-[#FF4E8E]">
          <Clock className="w-3.5 h-3.5" />
          <span>Only {TRUST_SIGNALS.slotsLeft} Slots Left This Week</span>
        </div>
      </div>
    </Card>
  );
}
