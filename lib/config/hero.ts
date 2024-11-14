import { Shield, Clock, Award } from "lucide-react";
import { type HeroConfig } from "@/lib/types/hero";

export const HERO_CONFIG: HeroConfig = {
  benefits: [
    {
      icon: Shield,
      title: "Trusted & Verified",
      description: "Background-checked cleaners you can trust",
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Book online in 60 seconds, 7 days a week",
    },
    {
      icon: Award,
      title: "100% Satisfaction",
      description: "Not happy? We will re-clean for free",
    },
  ],

  bookingSteps: [
    {
      id: "bedrooms",
      label: "Bedrooms",
      type: "number",
      options: [1, 2, 3, 4, 5, 6],
      required: true,
    },
    {
      id: "bathrooms",
      label: "Bathrooms",
      type: "number",
      options: [1, 2, 3, 4, 5, 6],
      required: true,
    },
    {
      id: "cleanType",
      label: "Clean Type",
      type: "select",
      options: [
        { value: "standard", label: "Standard Clean" },
        { value: "deep", label: "Deep Clean" },
        { value: "end", label: "End of Lease" },
      ],
      required: true,
    },
  ],

  socialProof: {
    rating: 4.8,
    reviewCount: 1456,
    featuredReview: {
      author: "April B.",
      location: "Sydney",
      content:
        "Absolutely beyond my expectations! The best house cleaning service I've ever hired. Thank you!!!",
      avatar: "https://i.pravatar.cc/100?img=5",
    },
  },
};
