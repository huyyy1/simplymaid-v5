"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { AddressValidation } from "@/components/shared/pre-book-flow/address-validation";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { ErrorHandlingService } from "@/lib/services/error-handling";

interface AddressStepProps {
  onSubmit: (address: string) => void;
  onBack: () => void;
}

export function AddressStep({ onSubmit, onBack }: AddressStepProps) {
  const [address, setAddress] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [selectedFromSuggestions, setSelectedFromSuggestions] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleSubmit = (value: string) => {
    if (!value) {
      setError("Please enter your location");
      return;
    }

    if (selectedFromSuggestions) {
      onSubmit(value);
    } else {
      setError("Please select an address from the suggestions");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit(address);
    }
  };

  const handleAddressSelect = (selectedAddress: string) => {
    setAddress(selectedAddress);
    setError(null);
    setSelectedFromSuggestions(true);
    onSubmit(selectedAddress); // Immediately submit when a valid selection is made
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setAddress(value);
    setError(null);
    setSelectedFromSuggestions(false); // Reset selection state on manual input
  };

  return (
    <Card className="p-8 bg-[#1B1E2E]/95 backdrop-blur-sm rounded-xl border-white/10">
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={onBack}
            className="h-9 w-9 text-white/80 hover:text-white hover:bg-white/10"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div>
            <h3 className="text-2xl font-bold text-white">Where do you need the clean?</h3>
            <p className="text-sm text-white/80 mt-1">Postcode or full address—either works!</p>
          </div>
        </div>

        <div className="space-y-2">
          <div className="relative">
            <PlaceholdersAndVanishInput
              value={address}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              onSubmit={() => handleSubmit(address)}
              onFocus={() => setIsInputFocused(true)}
              onBlur={() => {
                setTimeout(() => {
                  setIsInputFocused(false);
                }, 200);
              }}
              placeholders={["👉 Enter your postcode or address…"]}
              error={error}
            />

            <AddressValidation
              value={address}
              onSelect={handleAddressSelect}
              onChange={(value) => {
                setAddress(value);
                setError(null);
              }}
              isInputFocused={isInputFocused}
            />
          </div>
          <p className="text-sm text-white/60 px-4">
            Enter a postcode (e.g., 2000) or start typing your full address
          </p>
        </div>

        {error && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm text-red-400"
          >
            {error}
          </motion.p>
        )}
      </div>
    </Card>
  );
}
