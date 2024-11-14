"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { tokens } from "@/lib/styles/tokens";
import { type BaseProps } from "@/lib/types/shared";

interface SectionLayoutProps extends BaseProps {
  badge?: string;
  title?: string;
  description?: string;
  pattern?: "none" | "dots" | "grid";
  gradient?: boolean;
  intent?: "default" | "primary" | "muted";
}

export function SectionLayout({
  badge,
  title,
  description,
  pattern = "none",
  gradient = false,
  intent = "default",
  className,
  children,
}: SectionLayoutProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden",
        tokens.spacing.section.lg,
        intent === "primary" && "bg-primary text-white",
        intent === "muted" && "bg-muted",
        className
      )}
    >
      {/* Background pattern */}
      {pattern !== "none" && (
        <div
          className={cn(
            "absolute inset-0 pointer-events-none",
            pattern === "dots" &&
              "bg-[radial-gradient(circle_at_center,_var(--primary)_1px,_transparent_1px)] bg-[size:32px_32px] opacity-[0.015] dark:opacity-[0.03]",
            pattern === "grid" &&
              "bg-[linear-gradient(to_right,_var(--primary)_1px,_transparent_1px),_linear-gradient(to_bottom,_var(--primary)_1px,_transparent_1px)] bg-[size:32px_32px] opacity-[0.015] dark:opacity-[0.03]"
          )}
          aria-hidden="true"
        />
      )}

      {/* Gradient overlay */}
      {gradient && (
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      )}

      <div className={cn("container mx-auto relative z-10", tokens.spacing.container.base)}>
        {/* Section header */}
        {(badge || title || description) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
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
            {title && (
              <h2 className={cn("text-4xl sm:text-5xl font-bold mb-6", description && "mb-4")}>
                {title}
              </h2>
            )}
            {description && <p className="text-lg text-muted-foreground">{description}</p>}
          </motion.div>
        )}

        {children}
      </div>
    </section>
  );
}
