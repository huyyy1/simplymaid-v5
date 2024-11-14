import { type User, type Session, type BookingDetails } from "@/lib/types";

export function isUser(value: unknown): value is User {
  if (!value || typeof value !== "object") return false;

  return (
    "id" in value &&
    "email" in value &&
    "firstName" in value &&
    "lastName" in value &&
    "role" in value &&
    "status" in value
  );
}

export function isSession(value: unknown): value is Session {
  if (!value || typeof value !== "object") return false;

  return "user" in value && isUser((value as any).user) && "token" in value && "expiresAt" in value;
}

export function isBookingDetails(value: unknown): value is BookingDetails {
  if (!value || typeof value !== "object") return false;

  return (
    "id" in value &&
    "userId" in value &&
    "serviceId" in value &&
    "locationId" in value &&
    "bedrooms" in value &&
    "bathrooms" in value &&
    "status" in value &&
    "totalPrice" in value
  );
}

export function assertNonNull<T>(value: T | null | undefined, message: string): asserts value is T {
  if (value === null || value === undefined) {
    throw new Error(message);
  }
}

export function assertUser(value: unknown, message = "User is required"): asserts value is User {
  if (!isUser(value)) {
    throw new Error(message);
  }
}

export function assertSession(
  value: unknown,
  message = "Session is required"
): asserts value is Session {
  if (!isSession(value)) {
    throw new Error(message);
  }
}

export function assertBookingDetails(
  value: unknown,
  message = "Booking details are required"
): asserts value is BookingDetails {
  if (!isBookingDetails(value)) {
    throw new Error(message);
  }
}
