// Consolidate all validation functions into a single file
import { type FormData } from "@/lib/types";

export const VALIDATION_PATTERNS = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  name: /^[a-zA-Z\s'-]+$/,
  mobile: /^(?:\+61|0)[4]\d{8}$/,
  postcode: /^\d{4}$/,
} as const;

export const VALIDATION_MESSAGES = {
  required: {
    location: "Please enter your location",
    email: "Please enter your email",
    name: "Please enter your name",
    mobile: "Please enter your mobile number",
    bedrooms: "Please select number of bedrooms",
    bathrooms: "Please select number of bathrooms",
    cleanType: "Please select type of clean",
  },
  invalid: {
    location: "Please select an address from the suggestions",
    email: "Please enter a valid email address",
    name: "Name must be at least 2 characters",
    mobile: "Please enter a valid Australian mobile number",
    postcode: "Please enter a valid Australian postcode",
  },
  format: {
    mobile: "Please enter a valid mobile number starting with 04",
  },
} as const;

export class ValidationService {
  static validateField(field: keyof FormData, value: string): string | null {
    if (!value) {
      return VALIDATION_MESSAGES.required[field] || "This field is required";
    }

    switch (field) {
      case "email":
        return this.validateEmail(value);
      case "name":
        return this.validateName(value);
      case "mobile":
        return this.validateMobile(value);
      case "location":
        return this.validateLocation(value);
      default:
        return null;
    }
  }

  static validateEmail(value: string): string | null {
    if (!VALIDATION_PATTERNS.email.test(value)) {
      return VALIDATION_MESSAGES.invalid.email;
    }
    return null;
  }

  static validateName(value: string): string | null {
    if (value.length < 2) {
      return VALIDATION_MESSAGES.invalid.name;
    }
    if (!VALIDATION_PATTERNS.name.test(value)) {
      return "Please enter a valid name";
    }
    return null;
  }

  static validateMobile(value: string): string | null {
    const cleaned = value.replace(/\D/g, "");

    if (cleaned.startsWith("61")) {
      if (cleaned.length !== 11) return VALIDATION_MESSAGES.invalid.mobile;
    } else if (cleaned.startsWith("0")) {
      if (cleaned.length !== 10) return VALIDATION_MESSAGES.invalid.mobile;
    } else {
      return VALIDATION_MESSAGES.invalid.mobile;
    }

    if (!cleaned.startsWith("614") && !cleaned.startsWith("04")) {
      return VALIDATION_MESSAGES.format.mobile;
    }

    return null;
  }

  static validateLocation(value: string, selectedFromSuggestions = false): string | null {
    if (!selectedFromSuggestions) {
      return VALIDATION_MESSAGES.invalid.location;
    }
    return null;
  }

  static formatMobileNumber(value: string): string {
    const cleaned = value.replace(/\D/g, "");

    if (cleaned.startsWith("61") && cleaned.length > 2) {
      return (
        "+61 " +
        cleaned
          .slice(2)
          .replace(/(\d{3})(\d{3})?(\d{3})?/, "$1 $2 $3")
          .trim()
      );
    }

    if (cleaned.startsWith("0") && cleaned.length > 1) {
      return (
        "0" +
        cleaned
          .slice(1)
          .replace(/(\d{3})(\d{3})?(\d{3})?/, "$1 $2 $3")
          .trim()
      );
    }

    return cleaned;
  }

  static validateFormData(data: Partial<FormData>): string | null {
    const requiredFields = ["bedrooms", "bathrooms", "cleanType"];

    for (const field of requiredFields) {
      if (!data[field as keyof FormData]) {
        return VALIDATION_MESSAGES.required[field as keyof typeof VALIDATION_MESSAGES.required];
      }
    }

    return null;
  }
}