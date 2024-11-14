"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Users, Award, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const benefits = [
  {
    icon: Users,
    title: "Refer & Earn",
    description:
      "Recommend talented cleaners to join Simply Maid, and earn a percentage of their income as they grow.",
  },
  {
    icon: Award,
    title: "Train & Lead",
    description:
      "Be a mentor for new team members, helping them learn the ropes while solidifying your role in the Simply Maid community.",
  },
  {
    icon: TrendingUp,
    title: "Residual Income",
    description:
      "Earn ongoing income for every referred cleaner who stays active. It's a way to increase your earnings while helping others succeed.",
  },
];

export function GrowthChampionSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Growth Champion Program – Earn More by Leading Others
          </h2>
          <p className="text-lg text-muted-foreground">
            Simply Maid's Growth Champion Program is perfect for those who are ready to take on more
            responsibility and earn additional income through leadership.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
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

        <div className="text-center">
          <Button size="lg" asChild>
            <Link href="/apply">Learn More About Growth Champions</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
