import { Users, Scale, Heart, ArrowUpCircle } from "lucide-react";
import type { CompanyValue, TeamMember, JourneyMilestone } from "@/lib/types/about";

export const COMPANY_VALUES: CompanyValue[] = [
  {
    icon: Users,
    title: "People First",
    description:
      "Our clients and cleaners are our top priority. When our cleaners are happy and respected, they deliver their best work.",
  },
  {
    icon: Scale,
    title: "Transparency & Fairness",
    description:
      "We are committed to being upfront about pricing, ensuring clarity for clients and fair compensation for cleaners.",
  },
  {
    icon: Heart,
    title: "Community & Trust",
    description:
      "We are building more than a business; we are creating a community where trust is the foundation of everything we do.",
  },
  {
    icon: ArrowUpCircle,
    title: "Continuous Improvement",
    description:
      "Through training, process refinement, and innovation, we constantly evolve to better serve our community.",
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Sarah Johnson",
    role: "Senior Cleaner",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    quote:
      "Simply Maid is not just a job - it is a family. The support and growth opportunities here are incredible.",
  },
  {
    name: "Michael Chen",
    role: "Team Leader",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    quote:
      "I take pride in mentoring new team members and ensuring every home gets the perfect clean.",
  },
  {
    name: "Emma Thompson",
    role: "Customer Service",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    quote: "Helping customers and supporting our cleaning teams brings me joy every single day.",
  },
];

export const JOURNEY_MILESTONES: JourneyMilestone[] = [
  {
    year: "2015",
    title: "The Beginning",
    description:
      "Simply Maid starts with just one cleaner and a dream to revolutionize the cleaning industry.",
  },
  {
    year: "2017",
    title: "Growing Strong",
    description:
      "Expanded to 50+ cleaners, maintaining our commitment to quality and personal service.",
  },
  {
    year: "2020",
    title: "Pandemic Resilience",
    description:
      "Adapted to unprecedented challenges, keeping our team employed and our clients safe.",
  },
  {
    year: "2022",
    title: "Innovation & Growth",
    description: "Launched new technology solutions while maintaining our human-first approach.",
  },
  {
    year: "2024",
    title: "Looking Forward",
    description: "Continuing to grow while staying true to our core values and mission.",
  },
];
