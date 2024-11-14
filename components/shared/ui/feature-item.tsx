"use client";

import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { type BaseProps } from "@/lib/types/shared";

interface FeatureItemProps extends BaseProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
  intent?: "default" | "light";
}

export function FeatureItem({
  icon: Icon,
  title,
  description,
  delay = 0,
  intent = "default",
  className,
}: FeatureItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className={cn("flex gap-4", className)}
    >
      <div
        className={cn(
          "flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center",
          intent === "default" && "bg-primary/10",
          intent === "light" && "bg-white/10"
        )}
      >
        <Icon
          className={cn(
            "w-6 h-6",
            intent === "default" && "text-primary",
            intent === "light" && "text-white"
          )}
        />
      </div>
      <div>
        <h3 className={cn("font-semibold mb-1", intent === "light" && "text-white")}>{title}</h3>
        <p
          className={cn(
            intent === "default" && "text-muted-foreground",
            intent === "light" && "text-white/80"
          )}
        >
          {description}
        </p>
      </div>
    </motion.div>
  );
}
