"use client";

import { motion } from "framer-motion";

export function SectionHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center max-w-3xl mx-auto mb-16"
    >
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
        Serving All Across{" "}
        <span className="text-[#7E57C2]">Sydney</span>
      </h2>
      <p className="text-lg text-muted-foreground">
        We're proud to offer our high-quality cleaning services across Sydney, from the bustling
        city center to the suburbs.
      </p>
    </motion.div>
  );
}