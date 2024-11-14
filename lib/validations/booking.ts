import { z } from "zod";

const bookingSchema = z.object({
  service_id: z.string().uuid(),
  location_id: z.string().uuid(),
  bedrooms: z.number().min(1).max(6),
  bathrooms: z.number().min(1).max(6),
  scheduled_date: z.string().datetime(),
  notes: z.string().optional(),
  frequency: z.enum(["once", "weekly", "fortnightly", "monthly"]),
  extras: z.array(z.string()).optional(),
});

export function validateBookingData(data: unknown) {
  return bookingSchema.safeParse(data);
}
