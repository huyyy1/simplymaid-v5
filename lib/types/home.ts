import { LucideIcon } from "lucide-react";

export type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type Location = {
  name: string;
  image: string;
};

export type Review = {
  id: string;
  author: string;
  content: string;
  rating: number;
  date: string;
  location: string;
};
