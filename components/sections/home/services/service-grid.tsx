"use client";

import { motion } from "framer-motion";
import { FeatureCard } from "@/components/shared/ui/feature-card";
import { FEATURES } from "@/lib/constants/static-data";

export function ServiceGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {FEATURES.map((feature, index) => (
        <motion.div
          key={feature.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
        >
          <FeatureCard
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        </motion.div>
      ))}
    </div>
  );
}
