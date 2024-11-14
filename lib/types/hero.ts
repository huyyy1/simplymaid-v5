import { type LucideIcon } from "lucide-react";

export interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface BookingStep {
  id: string;
  label: string;
  type: "number" | "select" | "text";
  options?: any[];
  required?: boolean;
}

export interface SocialProof {
  rating: number;
  reviewCount: number;
  featuredReview: {
    author: string;
    location: string;
    content: string;
    avatar: string;
  };
}

export interface HeroConfig {
  benefits: Benefit[];
  bookingSteps: BookingStep[];
  socialProof: SocialProof;
}
