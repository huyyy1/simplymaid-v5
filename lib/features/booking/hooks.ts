"use client";

import { useState, useCallback } from "react";
import { type BookingFormData, type BookingValidation, type BookingPricing } from "@/lib/types";
import { validateBookingForm } from "./validation";
import { calculateBookingPrice } from "./pricing";
import { createClient } from "@/lib/supabase/client";

export function useBookingForm(initialData?: Partial<BookingFormData>) {
  const [formData, setFormData] = useState<Partial<BookingFormData>>(initialData || {});
  const [validation, setValidation] = useState<BookingValidation>({
    isValid: false,
    errors: {},
  });
  const [pricing, setPricing] = useState<BookingPricing | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const updateField = useCallback((field: keyof BookingFormData, value: any) => {
    setFormData((prev) => {
      const updated = { ...prev, [field]: value };
      const validation = validateBookingForm(updated);
      setValidation(validation);

      if (validation.isValid) {
        const pricing = calculateBookingPrice(updated as BookingFormData);
        setPricing(pricing);
      }

      return updated;
    });
  }, []);

  const submitBooking = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const validation = validateBookingForm(formData);
      if (!validation.isValid) {
        setValidation(validation);
        return;
      }

      const supabase = createClient();
      const { error } = await supabase.from("bookings").insert({
        ...formData,
        status: "pending",
        total_price: pricing?.total,
      });

      if (error) throw error;

      // Reset form
      setFormData({});
      setValidation({ isValid: false, errors: {} });
      setPricing(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  }, [formData, pricing]);

  return {
    formData,
    validation,
    pricing,
    loading,
    error,
    updateField,
    submitBooking,
  };
}
