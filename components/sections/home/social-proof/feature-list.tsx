"use client";

import { motion } from "framer-motion";
import { Shield, Clock, DollarSign } from "lucide-react";
import { type Feature } from "./types";
import { cn } from "@/lib/utils";
import { typography } from "@/lib/styles/typography";
import { stagger } from "@/lib/styles/tokens/animations";

const features: Feature[] = [
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
];

export function FeatureList() {
  return (
    <motion.div
      variants={stagger.container}
      initial="initial"
      animate="animate"
      className="space-y-6"
    >
      {features.map((feature, index) => (
        <motion.div key={feature.title} variants={stagger.item} className="flex gap-4">
          <div
            className={cn(
              "flex-shrink-0 w-12 h-12 rounded-xl",
              "bg-white/10 hover:bg-white/20",
              "transition-colors duration-200"
            )}
          >
            <div className="flex items-center justify-center h-full">
              <feature.icon className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="space-y-1">
            <h3 className={cn(typography.heading.h4, "text-white")}>{feature.title}</h3>
            <p className={cn(typography.body.base, "text-white/80")}>{feature.description}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}