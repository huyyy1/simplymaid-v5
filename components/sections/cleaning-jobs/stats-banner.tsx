"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Users, DollarSign, Star, Clock } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "500+",
    label: "Active Cleaners",
  },
  {
    icon: DollarSign,
    value: "$1.2M+",
    label: "Paid Last Month",
  },
  {
    icon: Star,
    value: "4.9",
    label: "Average Rating",
  },
  {
    icon: Clock,
    value: "25K+",
    label: "Hours Cleaned",
  },
];

export function StatsBanner() {
  return (
    <div className="bg-primary/5 py-12 mt-[-4rem] relative z-20">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <Card className="p-6 text-center bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
                <div className="flex justify-center mb-4">
                  <div className="p-2 rounded-full bg-primary/10">
                    <stat.icon className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
