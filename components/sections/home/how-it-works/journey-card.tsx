"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface JourneyCardProps {
  title: string;
  description: string;
  image: string;
  overlayContent: React.ReactNode;
  index: number;
  total: number;
}

export function JourneyCard({
  title,
  description,
  image,
  overlayContent,
  index,
  total,
}: JourneyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className="relative group"
    >
      {/* Arrow indicator */}
      {index < total - 1 && (
        <div className="absolute top-1/2 -right-4 w-8 h-0.5 hidden md:block">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 + index * 0.2 }}
            className="absolute inset-0 bg-primary/40"
            style={{ transformOrigin: "left" }}
          />
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-primary rotate-45 transform origin-center" />
        </div>
      )}

      <div className="relative bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
        {/* Image with overlay */}
        <div className="relative aspect-video">
          <Image src={image} alt={title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

          {/* Animated overlay content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + index * 0.2 }}
          >
            {overlayContent}
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}
