import { LucideIcon } from "lucide-react";

export type Benefit = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type CTAButton = {
  text: string;
  href: string;
  variant: "default" | "outline";
};
