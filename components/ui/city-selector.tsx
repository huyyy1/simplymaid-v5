"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { MapPin } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface CitySelectorProps {
  isTransparent?: boolean;
}

const CITIES = [
  {
    title: "Sydney CBD",
    href: "/locations/sydney-cbd",
    description: "Central Business District and surrounding areas",
  },
  {
    title: "Inner West",
    href: "/locations/inner-west",
    description: "Newtown, Marrickville, Leichhardt and surrounds",
  },
  {
    title: "Eastern Suburbs",
    href: "/locations/eastern-suburbs",
    description: "Bondi, Double Bay, Rose Bay and surrounds",
  },
  {
    title: "North Shore",
    href: "/locations/north-shore",
    description: "Chatswood, Lane Cove, North Sydney and surrounds",
  },
];

export function CitySelector({ isTransparent }: CitySelectorProps) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={cn(
              "text-sm font-medium gap-2",
              isTransparent
                ? "text-white hover:text-white/90"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            <MapPin className="w-4 h-4" />
            Select Location
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4">
              {CITIES.map((city) => (
                <li key={city.href}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={city.href}
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">{city.title}</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {city.description}
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
