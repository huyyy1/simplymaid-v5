"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  description?: string;
  className?: string;
  badge?: string;
}

export function SectionHeader({ title, description, className, badge }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn("max-w-3xl mx-auto text-center", className)}
    >
      {badge && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="inline-block mb-4"
        >
          <div className="px-4 py-1.5 rounded-full bg-primary/[0.08] dark:bg-primary/[0.15]">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-semibold">
              {badge}
            </span>
          </div>
        </motion.div>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold mb-6">{title}</h2>
      {description && <p className="text-lg text-muted-foreground">{description}</p>}
    </motion.div>
  );
}
