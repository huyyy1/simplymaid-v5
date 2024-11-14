import { type BookingFormData, type BookingPricing } from "@/lib/types";
import { PRICING } from "@/lib/constants/app";

export function calculateBookingPrice(formData: BookingFormData): BookingPricing {
  const basePrice = PRICING.baseRates[formData.cleanType as keyof typeof PRICING.baseRates];

  // Calculate extras
  const extras = formData.extras.map((extra) => ({
    name: extra,
    price: 25, // Replace with actual pricing logic
  }));

  // Calculate discount
  let discount;
  if (formData.frequency !== "once") {
    discount = {
      type: "frequency" as const,
      amount: formData.frequency === "weekly" ? 20 : formData.frequency === "fortnightly" ? 15 : 10,
    };
  }

  // Calculate total
  const extrasTotal = extras.reduce((sum, extra) => sum + extra.price, 0);
  const subtotal = basePrice + extrasTotal;
  const discountAmount = discount ? (subtotal * discount.amount) / 100 : 0;
  const total = subtotal - discountAmount;

  return {
    basePrice,
    extras,
    discount,
    total,
  };
}
