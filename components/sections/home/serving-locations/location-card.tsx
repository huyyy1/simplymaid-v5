"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { type Location } from "@/lib/types/locations";
import { getLocationImageUrl } from "@/lib/types/locations";

interface LocationCardProps {
  location: Location;
  index: number;
}

export function LocationCard({ location, index }: LocationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="relative group"
    >
      <div className="relative h-[200px] rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10" />
        <OptimizedImage
          src={getLocationImageUrl(location.image)}
          alt={location.image.alt}
          width={location.image.width}
          height={location.image.height}
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute bottom-4 left-4 z-20 flex flex-col gap-1">
          <div className="flex items-center gap-1.5 text-white">
            <MapPin className="w-4 h-4" />
            <span className="font-medium">{location.name}</span>
          </div>
          <span className="text-sm text-white/80">{location.description}</span>
        </div>
      </div>
    </motion.div>
  );
}