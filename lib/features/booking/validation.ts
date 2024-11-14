import { type BookingFormData, type BookingValidation } from "@/lib/types";
import { ValidationService } from "@/lib/services/validation";

export function validateBookingForm(data: Partial<BookingFormData>): BookingValidation {
  const errors: Partial<Record<keyof BookingFormData, string>> = {};

  // Required fields
  if (!data.bedrooms) {
    errors.bedrooms = "Please select number of bedrooms";
  }
  if (!data.bathrooms) {
    errors.bathrooms = "Please select number of bathrooms";
  }
  if (!data.cleanType) {
    errors.cleanType = "Please select type of clean";
  }
  if (!data.location) {
    errors.location = "Please enter your location";
  }
  if (!data.date) {
    errors.date = "Please select a date";
  }
  if (!data.time) {
    errors.time = "Please select a time";
  }
  if (!data.frequency) {
    errors.frequency = "Please select cleaning frequency";
  }

  // Location validation
  if (data.location) {
    const locationError = ValidationService.validateLocation(data.location);
    if (locationError) {
      errors.location = locationError;
    }
  }

  // Date validation
  if (data.date) {
    const today = new Date();
    const selectedDate = new Date(data.date);
    if (selectedDate < today) {
      errors.date = "Please select a future date";
    }
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
