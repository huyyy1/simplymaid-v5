"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Heart, Users, Star } from "lucide-react";

const values = [
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
      "Simply Maid is more than just a cleaning service—it's a family. We focus on quality, care, and a personal touch, building lasting relationships with our team and clients.",
  },
  {
    icon: Star,
    title: "A Commitment to Excellence",
    description:
      "Through training, support, and the right tools, we empower our cleaners to perform at their best. Every cleaner is a reflection of Simply Maid.",
  },
];

export function IkigaiSection() {
  return (
    <section className="py-24 bg-accent">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Our Ikigai: A Purpose That Drives Us All
          </h2>
          <p className="text-lg text-muted-foreground">
            At Simply Maid, we're guided by a deep purpose—our Ikigai—our reason for being. This
            purpose drives us to create a work environment that values people, supports growth, and
            improves lives.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 h-full">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
