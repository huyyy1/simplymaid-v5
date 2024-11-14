"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { JOURNEY_MILESTONES } from "@/lib/constants/about";

export function JourneySection() {
  return (
    <section className="py-24 bg-accent">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Our Journey</h2>
          <p className="text-lg text-muted-foreground">
            From humble beginnings to Sydney's most-loved cleaning service.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-border" />

          <div className="space-y-16">
            {JOURNEY_MILESTONES.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex items-center ${index % 2 === 0 ? "flex-row-reverse" : ""}`}
              >
                <div className="w-1/2 px-8">
                  <Card className="p-6 relative">
                    <div
                      className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background
                      ${index % 2 === 0 ? "left-0 -translate-x-1/2" : "right-0 translate-x-1/2"}`}
                    />
                    <span className="text-sm font-semibold text-primary">{milestone.year}</span>
                    <h3 className="text-xl font-bold mt-2 mb-3">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
