"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { cn } from "@/lib/utils";

export function ResultCard() {
  return (
    <Card
      className={cn(
        "p-4",
        "bg-white/95 dark:bg-gray-900/95",
        "backdrop-blur-sm shadow-xl",
        "w-full sm:w-[280px]"
      )}
    >
      <div className="space-y-3">
        <div className="relative">
          <OptimizedImage
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
            alt="Clean living room"
            width={400}
            height={225}
            aspectRatio="video"
            className="rounded-lg"
          />
          <Badge
            variant="secondary"
            className="absolute top-2 right-2 bg-white/90 dark:bg-gray-900/90"
          >
            <Sparkles className="w-3 h-3 mr-1" />
            Just Cleaned
          </Badge>
        </div>
        <div>
          <h3 className="font-semibold">Living Room</h3>
          <p className="text-xs text-muted-foreground">
            Spotless and fresh, ready for you to enjoy
          </p>
        </div>
      </div>
    </Card>
  );
}