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
  },
  format: {
    mobile: "Please enter a valid mobile number starting with 04",
  },
} as const;
