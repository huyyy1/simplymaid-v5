export class ValidationService {
  private static readonly PATTERNS = {
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    name: /^[a-zA-Z\s'-]+$/,
    mobile: /^(?:\+61|0)[4]\d{8}$/,
    postcode: /^\d{4}$/,
  };

  private static readonly MESSAGES = {
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
  };

  static validateField(field: string, value: string): string | null {
    if (!value) {
      return (
        this.MESSAGES.required[field as keyof typeof this.MESSAGES.required] ||
        "This field is required"
      );
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
    if (!this.PATTERNS.email.test(value)) {
      return this.MESSAGES.invalid.email;
    }
    return null;
  }

  static validateName(value: string): string | null {
    if (value.length < 2) {
      return this.MESSAGES.invalid.name;
    }
    if (!this.PATTERNS.name.test(value)) {
      return "Please enter a valid name";
    }
    return null;
  }

  static validateMobile(value: string): string | null {
    const cleaned = value.replace(/\D/g, "");

    if (cleaned.startsWith("61")) {
      if (cleaned.length !== 11) return this.MESSAGES.invalid.mobile;
    } else if (cleaned.startsWith("0")) {
      if (cleaned.length !== 10) return this.MESSAGES.invalid.mobile;
    } else {
      return this.MESSAGES.invalid.mobile;
    }

    if (!cleaned.startsWith("614") && !cleaned.startsWith("04")) {
      return "Please enter a valid mobile number starting with 04";
    }

    return null;
  }

  static validateLocation(value: string, selectedFromSuggestions = false): string | null {
    if (!selectedFromSuggestions) {
      return this.MESSAGES.invalid.location;
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

  static validateFormData(data: Record<string, any>): string | null {
    const requiredFields = ["bedrooms", "bathrooms", "cleanType"];

    for (const field of requiredFields) {
      if (!data[field]) {
        return this.MESSAGES.required[field as keyof typeof this.MESSAGES.required];
      }
    }

    return null;
  }
}
