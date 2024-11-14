"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { BENEFITS } from "@/lib/constants/cleaning-jobs";
import { ErrorBoundary } from "@/components/error-boundary";

export function BenefitsSection() {
  return (
    <ErrorBoundary>
      <section className="py-24 bg-background">
        <div className="container px-4 mx-auto">
          <SectionHeading
            title="Why Choose Us?"
            description="Join a team that values your growth."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BENEFITS.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="p-6 h-full">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-[1.25rem] font-semibold">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </ErrorBoundary>
  );
}
