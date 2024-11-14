"use client";

import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { StarRating } from "@/components/sections/recently-cleaned/star-rating";
import { cn } from "@/lib/utils";

export function ReviewCard() {
  return (
    <Card
      className={cn(
        "p-4",
        "bg-white/95 dark:bg-gray-900/95",
        "backdrop-blur-sm shadow-xl",
        "w-full sm:w-[320px]"
      )}
    >
      <div className="flex items-start gap-4">
        <Avatar className="h-8 sm:h-10 w-8 sm:w-10">
          <AvatarImage src="https://i.pravatar.cc/100?img=3" alt="Emma L." />
          <AvatarFallback>EL</AvatarFallback>
        </Avatar>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1">
            <h3 className="font-semibold">Emma L.</h3>
            <StarRating rating={5} size={12} />
          </div>
          <p className="text-sm text-muted-foreground">
            "Absolutely amazing service! My home has never looked better. Will definitely book
            again! ⭐️"
          </p>
          <p className="text-xs text-muted-foreground mt-2">2 hours ago</p>
        </div>
      </div>
    </Card>
  );
}
