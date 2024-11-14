import { type LucideIcon } from "lucide-react";

export interface Step {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Testimonial {
  content: string;
  author: string;
  role: string;
  image: string;
  rating: number;
}

export interface FAQ {
  question: string;
  answer: string;
}
