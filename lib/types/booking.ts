export interface BookingDetails {
  id: string;
  userId: string;
  serviceId: string;
  locationId: string;
  bedrooms: number;
  bathrooms: number;
  status: "pending" | "confirmed" | "completed" | "cancelled";
  scheduledDate: Date | null;
  totalPrice: number;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface BookingFormData {
  bedrooms: string;
  bathrooms: string;
  cleanType: string;
  location: string;
  date: Date;
  time: string;
  frequency: "once" | "weekly" | "fortnightly" | "monthly";
  extras: string[];
  notes?: string;
}

export interface BookingValidation {
  isValid: boolean;
  errors: Partial<Record<keyof BookingFormData, string>>;
}

export interface BookingPricing {
  basePrice: number;
  extras: {
    name: string;
    price: number;
  }[];
  discount?: {
    type: "frequency" | "seasonal" | "firstTime";
    amount: number;
  };
  total: number;
}
