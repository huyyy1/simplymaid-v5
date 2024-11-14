import { type LucideIcon } from "lucide-react";

export interface Service {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  details: string;
  image: string;
  benefits: string[];
  price: string;
  duration: string;
}
