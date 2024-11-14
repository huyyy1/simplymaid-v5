"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  className?: string;
  contentClassName?: string;
}

export function SectionLayout({
  children,
  title,
  description,
  className,
  contentClassName,
}: SectionLayoutProps) {
  return (
    <section className={cn("py-24", className)}>
      <div className="container px-4 mx-auto">
        {(title || description) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            {title && <h2 className="text-3xl sm:text-4xl font-bold mb-6">{title}</h2>}
            {description && <p className="text-lg text-muted-foreground">{description}</p>}
          </motion.div>
        )}
        <div className={contentClassName}>{children}</div>
      </div>
    </section>
  );
}
