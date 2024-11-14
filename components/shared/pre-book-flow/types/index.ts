export interface FormData {
  bedrooms: string;
  bathrooms: string;
  cleanType: string;
  location: string;
  email: string;
  name: string;
  mobile: string;
}

export interface ValidationResult {
  isValid: boolean;
  error: string | null;
}

export interface ContactStepField {
  field: keyof Pick<FormData, "email" | "name" | "mobile">;
  heading: string;
  subtext: string;
  placeholder: string;
  helperText: string;
}
