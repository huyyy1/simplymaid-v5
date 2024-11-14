"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Users, Clock, Award, Star } from "lucide-react";

const differences = [
  {
    icon: Users,
    title: "People-Centered Approach",
    description:
      "Simply Maid is a people-first company. We put the well-being and satisfaction of our team at the forefront, knowing that happy cleaners lead to happy clients.",
  },
  {
    icon: Clock,
    title: "Reliable, Weekly Pay",
    description:
      "Unlike many other platforms, Simply Maid ensures that cleaners are paid on time, every week. There's no need to chase invoices or worry about payments.",
  },
  {
    icon: Award,
    title: "Growth Champion Program",
    description:
      "We're not just about jobs; we're about growth. Through our Growth Champion Program, experienced cleaners can take on leadership roles and earn additional income.",
  },
  {
    icon: Star,
    title: "Commitment to Excellence",
    description:
      "Every cleaner represents the Simply Maid name, which means we invest in training, support, and quality assurance. Our mission is to exceed expectations, one clean at a time.",
  },
];

export function DifferenceSection() {
  return (
    <section className="py-32 bg-white dark:bg-gray-950">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <motion.span
            className="text-primary font-medium tracking-wide"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Why Choose Us
          </motion.span>
          <motion.h2
            className="text-3xl sm:text-4xl font-bold tracking-tight mt-2 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            The Simply Maid Difference
          </motion.h2>
          <p className="text-lg text-muted-foreground">
            Since our beginnings, we've built Simply Maid around the belief that people come first.
            Here's what makes us different.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {differences.map((difference, index) => (
            <motion.div
              key={difference.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-8 h-full hover:shadow-lg transition-shadow duration-300">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <difference.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">{difference.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {difference.description}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
