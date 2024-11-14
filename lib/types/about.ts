import { LucideIcon } from "lucide-react";

export type CompanyValue = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type TeamMember = {
  name: string;
  role: string;
  image: string;
  quote: string;
};

export type JourneyMilestone = {
  year: string;
  title: string;
  description: string;
};
