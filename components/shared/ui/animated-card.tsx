"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { type BaseProps } from "@/lib/types/shared";

interface AnimatedCardProps extends BaseProps {
  delay?: number;
  hover?: boolean;
}

export function AnimatedCard({ delay = 0, hover = true, className, children }: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
    >
      <Card
        className={cn(
          "h-full",
          hover && "hover:shadow-lg transition-shadow duration-300",
          className
        )}
      >
        {children}
      </Card>
    </motion.div>
  );
}
