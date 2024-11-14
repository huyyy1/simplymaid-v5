"use client";

import { motion } from "framer-motion";
import { type WithTitle } from "@/lib/types";
import { cn } from "@/lib/utils";

interface SectionLayoutProps extends WithTitle {
  variant?: "default" | "accent" | "primary";
  spacing?: "sm" | "md" | "lg";
}

export function SectionLayout({
  title,
  description,
  variant = "default",
  spacing = "lg",
  className,
  children,
}: SectionLayoutProps) {
  return (
    <section
      className={cn(
        "relative",
        variant === "accent" && "bg-accent",
        variant === "primary" && "bg-primary text-white",
        spacing === "sm" && "py-12",
        spacing === "md" && "py-16",
        spacing === "lg" && "py-24",
        className
      )}
    >
      <div className="container px-4 mx-auto">
        {(title || description) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">{title}</h2>
            {description && <p className="text-lg text-muted-foreground">{description}</p>}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
