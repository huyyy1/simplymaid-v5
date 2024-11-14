"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { StarRating } from "@/components/sections/recently-cleaned/star-rating";
import { cn } from "@/lib/utils";

interface ReviewCardProps {
  img: string;
  name: string;
  location: string;
  body: string;
  rating: number;
}

export function ReviewCard({ img, name, location, body, rating }: ReviewCardProps) {
  return (
    <Card
      className={cn(
        "relative w-[350px] cursor-pointer overflow-hidden rounded-xl p-6",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] transition-colors duration-300",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
        "transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
      )}
    >
      <div className="flex flex-row items-center gap-4">
        <Avatar className="h-12 w-12 border-2">
          <AvatarImage src={img} alt={name} />
          <AvatarFallback>
            {name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <figcaption className="text-base font-semibold dark:text-white">{name}</figcaption>
          <p className="text-sm text-muted-foreground">{location}</p>
        </div>
      </div>
      <div className="mt-4">
        <StarRating rating={rating} size={16} />
      </div>
      <blockquote className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</blockquote>
    </Card>
  );
}
