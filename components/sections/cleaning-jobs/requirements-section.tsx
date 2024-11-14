"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { REQUIREMENTS } from "@/lib/constants/cleaning-jobs";

export function RequirementsSection() {
  return (
    <section className="py-24 bg-accent">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">What We Need</h2>
          <div className="space-y-6">
            {REQUIREMENTS.map((req, i) => (
              <motion.div
                key={req}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 p-4 bg-background rounded-lg"
              >
                <Check className="w-5 h-5 text-primary" />
                <p className="text-lg">{req}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
