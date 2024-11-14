"use client";

import { BookingCard } from "./booking-experience/booking-card";
import { CleanerCard } from "./booking-experience/cleaner-card";
import { ResultCard } from "./booking-experience/result-card";
import { ReviewCard } from "./booking-experience/review-card";
import { SectionLayout } from "@/components/shared/layouts/section-layout";
import { motion } from "framer-motion";

export function BookingExperienceSection() {
  return (
    <SectionLayout
      badge="THE SIMPLY MAID EXPERIENCE"
      title="Book with confidence"
      description="Experience the joy of coming home to a perfectly clean space, every time."
      pattern="dots"
    >
      <div className="relative max-w-5xl mx-auto">
        {/* Center Booking Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <BookingCard />
        </motion.div>

        {/* Floating Cards - Only visible on larger screens */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="absolute -left-4 sm:-left-8 lg:-left-20 top-1/4 z-20 hidden md:block"
        >
          <CleanerCard />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="absolute -right-4 sm:-right-8 lg:-right-20 top-1/3 z-20 hidden md:block"
        >
          <ResultCard />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="absolute -bottom-12 sm:-bottom-16 lg:-bottom-20 left-1/2 -translate-x-1/2 z-20 hidden md:block"
        >
          <ReviewCard />
        </motion.div>

        {/* Mobile Cards Stack */}
        <div className="grid grid-cols-1 gap-4 mt-4 md:hidden">
          <CleanerCard />
          <ResultCard />
          <ReviewCard />
        </div>
      </div>
    </SectionLayout>
  );
}
