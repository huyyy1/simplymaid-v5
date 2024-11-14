"use client";

import { motion } from "framer-motion";
import { FeatureCard } from "@/components/shared/ui/feature-card";
import { TEAM_VALUES } from "@/lib/constants/static-data";

export function ValuesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {TEAM_VALUES.map((value, index) => (
        <motion.div
          key={value.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
        >
          <FeatureCard icon={value.icon} title={value.title} description={value.description} />
        </motion.div>
      ))}
    </div>
  );
}
