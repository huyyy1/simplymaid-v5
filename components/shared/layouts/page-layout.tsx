"use client";

import { motion } from "framer-motion";
import { type WithTitle } from "@/lib/types";
import { cn } from "@/lib/utils";

interface PageLayoutProps extends WithTitle {
  variant?: "default" | "accent" | "primary";
  spacing?: "sm" | "md" | "lg";
  header?: React.ReactNode;
  footer?: React.ReactNode;
}

export function PageLayout({
  title,
  description,
  variant = "default",
  spacing = "lg",
  header,
  footer,
  className,
  children,
}: PageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {header}
      <main
        className={cn(
          "flex-1",
          spacing === "sm" && "py-12",
          spacing === "md" && "py-16",
          spacing === "lg" && "py-24",
          className
        )}
      >
        {(title || description) && (
          <div className="container px-4 mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">{title}</h1>
              {description && <p className="text-xl text-muted-foreground">{description}</p>}
            </motion.div>
          </div>
        )}
        {children}
      </main>
      {footer}
    </div>
  );
}
