"use client";

import { AnimatedCard } from "@/components/shared/ui/animated-card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";
import { OptimizedImage } from "@/components/ui/optimized-image";

export function BookingCard() {
  return (
    <AnimatedCard className="p-4 sm:p-6 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-xl">
      <div className="flex flex-col md:flex-row gap-4 sm:gap-6">
        <div className="relative w-full md:w-1/2">
          <OptimizedImage
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2788&auto=format&fit=crop"
            alt="Happy customer booking a clean"
            width={800}
            height={600}
            aspectRatio="video"
            className="rounded-lg"
            priority
          />
        </div>

        <div className="flex-1 space-y-4">
          <div className="flex items-center gap-2 flex-wrap">
            <Badge variant="secondary" className="px-3 py-1">
              <Calendar className="w-4 h-4 mr-1" />
              Today
            </Badge>
            <Badge variant="secondary" className="px-3 py-1">
              <Clock className="w-4 h-4 mr-1" />
              2:00 PM
            </Badge>
          </div>

          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Standard Clean</h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              3 Bedrooms • 2 Bathrooms • 2 Hours
            </p>
          </div>

          <div className="pt-4 border-t">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Total</span>
              <span className="text-xl sm:text-2xl font-bold">$120</span>
            </div>
          </div>
        </div>
      </div>
    </AnimatedCard>
  );
}