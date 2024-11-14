"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, Phone, Award } from "lucide-react";
import { StarRating } from "@/components/sections/recently-cleaned/star-rating";
import { type Cleaner } from "@/lib/data/cleaners";

interface CleanerCardProps {
  cleaner: Cleaner;
}

export function CleanerCard({ cleaner }: CleanerCardProps) {
  return (
    <Card className="p-6 h-full flex flex-col">
      <div className="flex items-start gap-4">
        <div className="relative w-16 h-16 rounded-full overflow-hidden">
          <Image src={cleaner.image} alt={cleaner.name} fill className="object-cover" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold truncate">{cleaner.name}</h3>
          <p className="text-sm text-muted-foreground">{cleaner.location}</p>
          <div className="flex items-center gap-1 mt-1">
            <StarRating rating={cleaner.rating} size={12} />
            <span className="text-sm font-medium">{cleaner.rating}</span>
            <span className="text-sm text-muted-foreground">({cleaner.reviews})</span>
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {cleaner.badges.includes("verified") && (
          <Badge variant="secondary" className="gap-1">
            <Shield className="w-3 h-3" />
            Verified
          </Badge>
        )}
        {cleaner.badges.includes("mobile") && (
          <Badge variant="secondary" className="gap-1">
            <Phone className="w-3 h-3" />
            Mobile
          </Badge>
        )}
        {cleaner.badges.includes("award") && (
          <Badge variant="secondary" className="gap-1">
            <Award className="w-3 h-3" />
            Top Rated
          </Badge>
        )}
      </div>

      <div className="mt-4 flex-1">
        <p className="text-sm text-muted-foreground italic">"{cleaner.latestReview}"</p>
      </div>

      <Button className="w-full mt-6" variant="outline">
        Request a Quote
      </Button>
    </Card>
  );
}