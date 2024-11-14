"use client";

import * as React from "react";
import { MapPin } from "lucide-react";
import {
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { LOCATIONS } from "@/lib/data/navigation";

interface LocationMenuProps {
  isScrolled: boolean;
  pathname: string;
}

export function LocationMenu({ isScrolled, pathname }: LocationMenuProps) {
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
            <h3 className="mb-3 text-lg font-medium">Current Location</h3>
            <div className="space-y-4">
              {LOCATIONS.filter((loc) => loc.active).map((location) => (
                <div key={location.name} className="flex items-start gap-4">
                  <div className="relative w-20 h-20 rounded-lg overflow-hidden">
                    <img
                      src={location.image}
                      alt={location.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <div className="font-medium">{location.name}</div>
                    <p className="text-sm text-muted-foreground">{location.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 text-lg font-medium">Coming Soon</h3>
            <div className="space-y-4">
              {LOCATIONS.filter((loc) => !loc.active).map((location) => (
                <div key={location.name} className="flex items-start gap-4">
                  <div className="relative w-20 h-20 rounded-lg overflow-hidden grayscale">
                    <img
                      src={location.image}
                      alt={location.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <div className="font-medium">{location.name}</div>
                    <p className="text-sm text-muted-foreground">{location.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}
