"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { ClipboardList, UserCheck, Calendar, Award } from "lucide-react";

const steps = [
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

export function HowItWorks() {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">How It Works</h2>
          <p className="text-lg text-muted-foreground">
            Getting started is simple. Join our team in four easy steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 h-full border bg-card text-card-foreground relative">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-[#7E57C2]/10 dark:bg-[#7E57C2]/20">
                    <step.icon className="w-6 h-6 text-[#7E57C2] dark:text-[#9E7AFF]" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                <div className="absolute top-4 left-4 w-6 h-6 rounded-full bg-[#7E57C2] text-white flex items-center justify-center text-sm font-medium">
                  {index + 1}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
