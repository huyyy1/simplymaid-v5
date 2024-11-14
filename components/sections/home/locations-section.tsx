"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { MapPin } from "lucide-react";
import { LOCATIONS } from "@/lib/constants/home";
import { stagger } from "@/lib/styles/tokens/animations";
import Link from "next/link";

export function LocationsSection() {
  return (
    <Section intent="primary">
      <motion.div
        variants={stagger.container}
        initial="initial"
        animate="animate"
        className="space-y-16"
      >
        <motion.div variants={stagger.item} className="text-center max-w-3xl mx-auto">
          <Heading>Serving All Across Sydney</Heading>
          <Text size="lg" intent="muted" className="mt-4">
            We're proud to offer our high-quality cleaning services across Sydney, from the bustling
            city center to the suburbs.
          </Text>
        </motion.div>

        <motion.div variants={stagger.item} className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          {LOCATIONS.map((location) => (
            <Card key={location.name} className="group relative h-[200px] overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={location.image}
                  alt={location.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              </div>
              <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-white">
                <MapPin className="w-4 h-4" />
                <span className="font-medium">{location.name}</span>
              </div>
            </Card>
          ))}
        </motion.div>

        <motion.div variants={stagger.item} className="text-center">
          <Text size="lg">
            Not sure if we serve your area?{" "}
            <Link href="/contact" className="text-primary hover:text-primary/80 font-medium">
              Contact us
            </Link>
          </Text>
        </motion.div>
      </motion.div>
    </Section>
  );
}
