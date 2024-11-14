"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { ClipboardList, UserCheck, Calendar, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  {
    icon: ClipboardList,
    title: "Book Online",
    description: "Fill out our simple booking form in just 60 seconds",
    step: "Step 1",
  },
  {
    icon: UserCheck,
    title: "We Match",
    description: "We'll assign the perfect cleaner for your needs",
    step: "Step 2",
  },
  {
    icon: Calendar,
    title: "We Clean",
    description: "Your trusted cleaner arrives and works their magic",
    step: "Step 3",
  },
  {
    icon: Sparkles,
    title: "You Relax",
    description: "Enjoy your spotless home, or we'll re-clean for free",
    step: "Step 4",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-24 bg-accent overflow-hidden">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            How Simply Maid Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Book your clean in 60 seconds and let us handle the rest. It's that simple!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 relative bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center text-center space-y-4"
                >
                  <div className="p-4 rounded-full bg-primary text-white">
                    <step.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-primary mb-2">{step.step}</div>
                    <h3 className="text-xl font-semibold mb-1">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
