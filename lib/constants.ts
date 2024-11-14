import {
  Shield,
  Clock,
  Award,
  Star,
  Heart,
  Users,
  DollarSign,
  TrendingUp,
  MapPin,
} from "lucide-react";

// App Configuration
export const APP_CONFIG = {
  name: "Simply Maid",
  description: "Sydney's Most Trusted Cleaning Service",
  domain: "simplymaid.com.au",
  supportEmail: "support@simplymaid.com.au",
  socialLinks: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
  },
} as const;

// Navigation
export const NAVIGATION = {
  main: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
    { name: "Careers", href: "/cleaning-jobs" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "Sitemap", href: "/sitemap" },
  ],
} as const;

// Features
export const FEATURES = [
  {
    icon: Shield,
    title: "Secure payments",
    description: "Only release payment when the task is completed to your satisfaction",
  },
  {
    icon: Clock,
    title: "Flexible options",
    description:
      "Whether you need a one-time clean or regular housekeeping, we offer a range of services to fit your needs and budget.",
  },
  {
    icon: DollarSign,
    title: "Honest value",
    description: "We never compromise on quality, even when we are offering competitive prices.",
  },
] as const;

// Company Values
export const COMPANY_VALUES = [
  {
    icon: Heart,
    title: "People First",
    description:
      "Our cleaners, clients, and staff come first. We prioritize fair pay, recognition, and creating a culture where everyone feels respected and empowered.",
  },
  {
    icon: Users,
    title: "Growing Together",
    description:
      "Simply Maid is more than just a cleaning service—it's a family. We focus on quality, care, and a personal touch.",
  },
  {
    icon: Star,
    title: "Excellence",
    description:
      "Through training, support, and the right tools, we empower our cleaners to perform at their best.",
  },
] as const;

// Pre-book Flow Configuration
export const PRE_BOOK_FLOW = {
  trustSignals: {
    rating: "4.8/5",
    customerCount: "15,000+",
    slotsLeft: 3,
  },
  cleanTypes: [
    { value: "standard", label: "Standard Clean" },
    { value: "deep", label: "Deep Clean" },
    { value: "end", label: "End of Lease" },
  ],
  roomCounts: [1, 2, 3, 4, 5, 6],
  contactSteps: [
    {
      field: "email" as const,
      heading: "Where should we send your price?",
      subtext: "We'll make it easy for you to come back.",
      placeholder: "✌️ Your email for price & magic link!",
      helperText: "Enter a valid email address (e.g., name@example.com)",
    },
    {
      field: "name" as const,
      heading: "Who should we make this out to?",
      subtext: "Just a first name is perfect!",
      placeholder: "😊 Enter your name…",
      helperText: "Enter your first name (at least 2 characters)",
    },
    {
      field: "mobile" as const,
      heading: "Last step! Where do we send your little surprise 🎁",
      subtext: "Put in your mobile—Trust me, you're going to want to see it.",
      placeholder: "📱 Enter your mobile… Get your price & something special",
      helperText: "Enter your Australian mobile number (starting with 04)",
    },
  ],
} as const;

// Pricing Configuration
export const PRICING = {
  baseRates: {
    standard: 120,
    deep: 250,
    endOfLease: 350,
  },
  hourlyRates: {
    standard: 35,
    deep: 45,
    endOfLease: 50,
  },
  minimumHours: {
    standard: 2,
    deep: 4,
    endOfLease: 6,
  },
} as const;
