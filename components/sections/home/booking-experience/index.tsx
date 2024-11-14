"use client";

import { motion } from "framer-motion";
import { BookingCard } from "./booking-card";
import { CleanerCard } from "./cleaner-card";
import { ResultCard } from "./result-card";
import { ReviewCard } from "./review-card";

export function BookingExperienceSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Dot pattern background */}
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--primary)_1px,_transparent_1px)] bg-[size:24px_24px] opacity-[0.015] dark:opacity-[0.03]"
        aria-hidden="true"
      />

      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <div className="px-4 py-1.5 rounded-full bg-primary/[0.08] dark:bg-primary/[0.15]">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-semibold">
                THE SIMPLY MAID EXPERIENCE
              </span>
            </div>
          </motion.div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Book with confidence</h2>
          <p className="text-lg text-muted-foreground">
            Experience the joy of coming home to a perfectly clean space, every time.
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Central booking experience */}
          <div className="relative z-10">
            <BookingCard />
          </div>

          {/* Floating cards */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="absolute -left-8 top-1/4 z-20"
          >
            <CleanerCard />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="absolute -bottom-12 left-1/4 z-20"
          >
            <ResultCard />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="absolute -right-8 top-1/3 z-20"
          >
            <ReviewCard />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
