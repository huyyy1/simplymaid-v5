"use client";

import * as React from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";
import {
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { locations } from "@/lib/data/locations";

interface LocationItemProps {
  isScrolled: boolean;
  pathname: string;
}

export function LocationItem({ isScrolled, pathname }: LocationItemProps) {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger
        className={cn(
          "h-9 px-4",
          !isScrolled && pathname === "/" ? "text-white hover:bg-white/10" : ""
        )}
      >
        <MapPin className="w-4 h-4 mr-2" />
        Sydney
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className="grid w-[600px] grid-cols-2 gap-4 p-6">
          <div>
            <h4 className="text-lg font-medium mb-4">Current Location</h4>
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image
                src={locations[0].image}
                alt={locations[0].name}
                fill
                className="object-cover"
              />
            </div>
            <div className="mt-2">
              <h5 className="font-medium">{locations[0].name}</h5>
              <p className="text-sm text-muted-foreground">{locations[0].description}</p>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-medium mb-4">Coming Soon</h4>
            <div className="space-y-4">
              {locations.slice(1).map((location) => (
                <div key={location.name} className="group">
                  <h5 className="font-medium">{location.name}</h5>
                  <p className="text-sm text-muted-foreground">{location.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}
