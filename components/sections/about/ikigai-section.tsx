"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Heart, Star, Globe, DollarSign } from "lucide-react";

const ikigaiElements = [
  {
    icon: Heart,
    title: "What We Love",
    description:
      "We love providing dependable, high-quality cleaning services that bring a sense of calm and joy to our clients' lives. Every clean, every job, every detail—it all reflects our passion for service.",
  },
  {
    icon: Star,
    title: "What We're Good At",
    description:
      "Our cleaners are professionals who excel at their craft, supported by ongoing training, a reliable scheduling system, and a responsive support team. We hold ourselves to the highest standards.",
  },
  {
    icon: Globe,
    title: "What the World Needs",
    description:
      "A clean home isn't just about appearance; it's about health, safety, and comfort. By offering eco-friendly cleaning options and using non-toxic products, we aim to make a positive impact.",
  },
  {
    icon: DollarSign,
    title: "What We're Paid For",
    description:
      "We believe in fair, transparent pricing that reflects the value of the work we provide. Our cleaners are compensated fairly and consistently, ensuring their efforts are recognized and rewarded.",
  },
];

export function IkigaiSection() {
  return (
    <section className="py-32 bg-violet-50 dark:bg-gray-950/50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,0,0,0.02)_1px,_transparent_1px)] bg-[length:24px_24px]" />
      <motion.div
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-violet-500/5 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container px-4 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <motion.span
            className="text-primary font-medium tracking-wide"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Our Purpose
          </motion.span>
          <motion.h2
            className="text-3xl sm:text-4xl font-bold tracking-tight mt-2 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Our Ikigai: Purpose at the Heart
            <br />
            of Simply Maid
          </motion.h2>
          <p className="text-lg text-muted-foreground">
            In everything we do, we're guided by a deep sense of purpose—our Ikigai—our reason for
            being. Ikigai represents the intersection of four key elements that drive our mission.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {ikigaiElements.map((element, index) => (
            <motion.div
              key={element.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-8 h-full bg-white/50 dark:bg-gray-900/30 backdrop-blur-sm hover:shadow-lg transition-shadow duration-300">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <element.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">{element.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{element.description}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
