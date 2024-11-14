"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

export const Timeline = ({
  data,
  className,
}: {
  data: {
    title: string;
    content: React.ReactNode;
  }[];
  className?: string;
}) => {
  const targetRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [-100, 0]);

  return (
    <div
      ref={targetRef}
      className={cn(
        "relative min-h-screen w-full py-24",
        "bg-gradient-to-b from-white via-violet-50/50 to-white dark:from-background dark:via-background dark:to-background",
        className
      )}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--primary)_1px,_transparent_1px)] bg-[size:32px_32px] opacity-[0.015] dark:opacity-[0.03]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--secondary)_1px,_transparent_1px)] bg-[size:24px_24px] opacity-[0.015] dark:opacity-[0.03]" />

      <motion.div style={{ opacity }} className="relative mx-auto max-w-6xl px-4">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="px-4 py-1.5 rounded-full bg-primary/[0.08] dark:bg-primary/[0.15]"
            >
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-semibold">
                Our Journey
              </span>
            </motion.div>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent">
            A Legacy of Excellence
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From humble beginnings to becoming Sydney's most trusted cleaning service, our story is
            one of dedication, growth, and unwavering commitment to our values.
          </p>
        </motion.div>

        {/* Timeline line with enhanced gradient */}
        <div className="absolute left-1/2 h-full w-0.5 -translate-x-1/2">
          <div className="h-full w-full bg-gradient-to-b from-primary via-primary/50 to-transparent opacity-20 dark:opacity-40 blur-[1px]" />
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary to-secondary origin-top"
          />
        </div>

        {/* Timeline entries */}
        <div className="relative">
          {data.map((item, idx) => (
            <div key={idx} className="mb-32 last:mb-0">
              <div
                className={`flex items-center ${idx % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className={cn(
                    "w-[calc(50%-2rem)] space-y-4",
                    idx % 2 === 0 ? "pr-8 text-right" : "pl-8"
                  )}
                >
                  <div className="relative">
                    <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-primary/[0.08] to-secondary/[0.08] dark:from-primary/[0.15] dark:to-secondary/[0.15] blur-xl" />
                    <h3 className="relative text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      {item.title}
                    </h3>
                  </div>
                  <div className="relative">
                    <div className="absolute -inset-4 rounded-xl bg-white/40 dark:bg-white/[0.03] shadow-xl shadow-primary/5 backdrop-blur-sm" />
                    <div className="relative bg-white/80 dark:bg-gray-950/80 rounded-lg p-6 shadow-sm">
                      {item.content}
                    </div>
                  </div>
                </motion.div>

                {/* Timeline dot with enhanced ripple effect */}
                <div className="absolute left-1/2 -translate-x-1/2">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", duration: 1, delay: 0.2 }}
                    className="relative"
                  >
                    <div className="absolute -inset-8 rounded-full animate-pulse bg-primary/10 dark:bg-primary/20 blur-md" />
                    <div className="absolute -inset-6 rounded-full animate-pulse bg-secondary/10 dark:bg-secondary/20 blur-sm" />
                    <div className="relative w-4 h-4 rounded-full bg-gradient-to-r from-primary to-secondary border-4 border-white dark:border-gray-950 shadow-lg" />
                  </motion.div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
