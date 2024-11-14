import { MapPin, Sparkles, Home, Key, Shield, Box, Sun, Brush } from "lucide-react";
import { type NavigationItem } from "@/lib/types/navigation";

export const NAVIGATION_ITEMS: NavigationItem[] = [
  {
    type: "location",
    title: "Sydney",
    icon: MapPin,
    current: {
      name: "Sydney",
      image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9",
      description: "Currently serving Sydney and surrounding areas",
    },
    upcoming: [
      {
        name: "Melbourne",
        image: "https://images.unsplash.com/photo-1514395462725-fb4566210144",
        description: "Coming soon to Melbourne",
      },
      {
        name: "Brisbane",
        image: "https://images.unsplash.com/photo-1536179247184-595913ca4a28",
        description: "Coming soon to Brisbane",
      },
    ],
  },
  {
    type: "dropdown",
    title: "Services",
    items: [
      {
        title: "Standard Clean",
        description: "Regular cleaning to keep your home fresh and welcoming",
        href: "/services/standard-clean",
        icon: Home,
      },
      {
        title: "Deep Clean",
        description: "Thorough cleaning for those hard-to-reach spots",
        href: "/services/deep-clean",
        icon: Sparkles,
      },
      {
        title: "End of Lease",
        description: "Get your full bond back with our detailed cleaning",
        href: "/services/end-of-lease",
        icon: Key,
      },
      {
        title: "Bond Clean",
        description: "Guaranteed bond return with our comprehensive clean",
        href: "/services/bond-clean",
        icon: Shield,
      },
      {
        title: "Move In/Out",
        description: "Fresh start or clean finish for your move",
        href: "/services/move-clean",
        icon: Box,
      },
      {
        title: "Spring Clean",
        description: "Seasonal refresh for your entire home",
        href: "/services/spring-clean",
        icon: Sun,
      },
    ],
  },
  {
    type: "dropdown",
    title: "Cleaning Tips",
    items: [
      {
        title: "Kitchen Cleaning",
        description: "Professional tips for a spotless kitchen",
        href: "/tips/kitchen",
        icon: Brush,
      },
      {
        title: "Bathroom Deep Clean",
        description: "Step-by-step guide for sparkling bathrooms",
        href: "/tips/bathroom",
        icon: Sparkles,
      },
      {
        title: "Eco-Friendly Methods",
        description: "Natural cleaning solutions for a greener home",
        href: "/tips/eco-friendly",
        icon: Sun,
      },
      {
        title: "Stain Removal Guide",
        description: "Expert tricks for tough stains",
        href: "/tips/stain-removal",
        icon: Shield,
      },
      {
        title: "Weekly Schedule",
        description: "Maintain a clean home with our proven routine",
        href: "/tips/cleaning-schedule",
        icon: Home,
      },
      {
        title: "Pro Secrets",
        description: "Industry insights from our top cleaners",
        href: "/tips/pro-secrets",
        icon: Sparkles,
      },
    ],
  },
  {
    type: "link",
    title: "About",
    href: "/about",
  },
  {
    type: "link",
    title: "Cleaning Jobs",
    href: "/cleaning-jobs",
  },
];

export const FOOTER_LINKS = {
  company: [
    { title: "About", href: "/about" },
    { title: "Service Areas", href: "/locations" },
    { title: "Contact", href: "/contact" },
    { title: "Blog", href: "/blog" },
  ],
  services: [
    { title: "Standard Clean", href: "/services/standard-clean" },
    { title: "Deep Clean", href: "/services/deep-clean" },
    { title: "End of Lease", href: "/services/end-of-lease" },
    { title: "Bond Clean", href: "/services/bond-clean" },
  ],
  support: [
    { title: "FAQs", href: "/faqs" },
    { title: "Pricing", href: "/pricing" },
    { title: "Terms of Service", href: "/terms" },
    { title: "Privacy Policy", href: "/privacy" },
  ],
  locations: [
    { title: "Sydney CBD", href: "/locations/sydney-cbd" },
    { title: "Inner West", href: "/locations/inner-west" },
    { title: "Eastern Suburbs", href: "/locations/eastern-suburbs" },
    { title: "North Shore", href: "/locations/north-shore" },
  ],
};
