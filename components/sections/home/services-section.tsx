"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { ArrowRight } from "lucide-react";
import { FEATURES } from "@/lib/constants/home";
import { stagger } from "@/lib/styles/tokens/animations";
import Link from "next/link";

export function ServicesSection() {
  return (
    <Section intent="accent">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          variants={stagger.container}
          initial="initial"
          animate="animate"
          className="space-y-8"
        >
          <motion.div variants={stagger.item}>
            <Heading>Professional cleaning services that fit your schedule</Heading>
            <Text size="lg" intent="muted" className="mt-4">
              Choose from a range of services designed to keep your home spotless and make your life
              easier.
            </Text>
          </motion.div>

          <motion.div variants={stagger.item} className="space-y-6">
            {FEATURES.map((feature) => (
              <Card key={feature.title} className="p-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <Text weight="semibold" size="lg" className="mb-1">
                      {feature.title}
                    </Text>
                    <Text intent="muted">{feature.description}</Text>
                  </div>
                </div>
              </Card>
            ))}
          </motion.div>

          <motion.div variants={stagger.item}>
            <Button size="lg" asChild>
              <Link href="/services">
                View All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative aspect-square rounded-2xl overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952"
            alt="Professional cleaning service"
            className="object-cover w-full h-full"
          />
        </motion.div>
      </div>
    </Section>
  );
}
