import { type FAQ, type Testimonial, type Step } from "@/lib/types/careers";
import { ClipboardList, UserCheck, Calendar, Award } from "lucide-react";

export const applicationSteps: Step[] = [
  {
    icon: ClipboardList,
    title: "Simple Application",
    description: "Fill out our online form in just 5 minutes. No complex paperwork needed.",
  },
  {
    icon: UserCheck,
    title: "Quick Verification",
    description: "Complete a brief background check and verify your work eligibility.",
  },
  {
    icon: Calendar,
    title: "Choose Your Schedule",
    description: "Set your own hours and work when it suits you best.",
  },
  {
    icon: Award,
    title: "Start Earning",
    description: "Begin working and earning competitive rates with weekly payments.",
  },
];

export const testimonials: Testimonial[] = [
  {
    content:
      "Working with Simply Maid has given me the flexibility to balance work and family life. The team is incredibly supportive!",
    author: "Sarah Chen",
    role: "Cleaner",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    rating: 5,
  },
  {
    content:
      "I've been with Simply Maid for 2 years now. The pay is great and I love being able to choose my own schedule.",
    author: "Michael Rodriguez",
    role: "Senior Cleaner",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    rating: 5,
  },
  {
    content:
      "The training and support here is fantastic. I've learned so much and grown professionally in my role.",
    author: "Emma Thompson",
    role: "Team Leader",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    rating: 5,
  },
];

export const faqs: FAQ[] = [
  {
    question: "What qualifications do I need?",
    answer:
      "No formal qualifications are required, but you must have valid work rights in Australia, be physically fit, and have great attention to detail.",
  },
  {
    question: "How much can I earn?",
    answer:
      "Our cleaners typically earn between $25-35 per hour, with opportunities for bonuses and increased rates based on experience and performance.",
  },
  {
    question: "Can I choose my own schedule?",
    answer:
      "Yes! We offer flexible scheduling where you can choose your availability and preferred working hours.",
  },
  {
    question: "Is training provided?",
    answer:
      "Absolutely! We provide comprehensive initial training and ongoing support to ensure you're confident and successful in your role.",
  },
  {
    question: "What areas do you service?",
    answer:
      "We currently operate throughout Sydney, including the CBD, Inner West, Eastern Suburbs, and North Shore.",
  },
  {
    question: "Are cleaning supplies provided?",
    answer:
      "Yes, we provide all necessary cleaning supplies and equipment. You just need to bring your positive attitude!",
  },
];
