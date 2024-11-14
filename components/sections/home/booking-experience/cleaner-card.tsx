"use client";

import { AnimatedCard } from "@/components/shared/ui/animated-card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { StarRating } from "@/components/sections/recently-cleaned/star-rating";
import { Shield } from "lucide-react";
import { OptimizedImage } from "@/components/ui/optimized-image";

export function CleanerCard() {
  return (
    <AnimatedCard className="p-4 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-xl w-full sm:w-[280px]">
      <div className="flex items-start gap-4">
        <Avatar className="h-10 sm:h-12 w-10 sm:w-12 border-2 relative overflow-hidden">
          <OptimizedImage
            src="https://i.pravatar.cc/100?img=5"
            alt="Sarah M."
            width={48}
            height={48}
            className="absolute inset-0"
            fallback={<AvatarFallback>SM</AvatarFallback>}
          />
        </Avatar>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1">
            <h3 className="font-semibold truncate">Sarah M.</h3>
            <Badge variant="secondary" className="flex items-center gap-1">
              <Shield className="w-3 h-3" />
              Verified
            </Badge>
          </div>
          <StarRating rating={4.9} size={12} />
          <p className="text-xs text-muted-foreground mt-1">1,234 cleans completed</p>
        </div>
      </div>
    </AnimatedCard>
  );
}