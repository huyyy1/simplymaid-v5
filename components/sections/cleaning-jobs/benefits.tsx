"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { DollarSign, Clock, Shield, Award } from "lucide-react";

const benefits = [
  {
    icon: DollarSign,
    title: "Competitive Pay",
    description: "Earn above-market rates with opportunities for bonuses and tips.",
  },
  {
    icon: Clock,
    title: "Flexible Schedule",
    description: "Work when you want with our flexible scheduling system.",
  },
  {
    icon: Shield,
    title: "Insurance Coverage",
    description: "Comprehensive insurance coverage for peace of mind.",
  },
  {
    icon: Award,
    title: "Growth Opportunities",
    description: "Career advancement and professional development programs.",
  },
];

export function Benefits() {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Why Work With Us</h2>
          <p className="text-lg text-muted-foreground">
            Join our team and enjoy these amazing benefits.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 h-full">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
