"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { type NavigationItem } from "@/lib/types/navigation";

interface NavItemProps {
  item: NavigationItem;
  isScrolled: boolean;
  isTransparent: boolean;
  pathname: string;
}

export function NavItem({ item, isScrolled, isTransparent, pathname }: NavItemProps) {
  const isActive = item.type === "link" && pathname === item.href;

  if (item.type === "link") {
    return (
      <NavigationMenuItem>
        <Link
          href={item.href}
          className={cn(
            "inline-flex h-9 items-center justify-center rounded-md px-4 py-2",
            "text-sm font-medium tracking-wide transition-colors",
            isActive && "bg-accent",
            !isScrolled && isTransparent
              ? "text-white hover:bg-white/10"
              : "hover:bg-accent hover:text-accent-foreground"
          )}
        >
          {item.icon && <item.icon className="mr-2 h-4 w-4" />}
          {item.title}
        </Link>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger
        className={cn(
          "h-9 px-4 text-sm font-medium tracking-wide",
          !isScrolled && isTransparent ? "text-white hover:bg-white/10" : ""
        )}
      >
        <span className="inline-flex items-center gap-2">
          {item.icon && <item.icon className="h-4 w-4" />}
          {item.title}
        </span>
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        {item.type === "dropdown" && <DropdownContent items={item.items} />}
        {item.type === "location" && (
          <LocationContent current={item.current} upcoming={item.upcoming} />
        )}
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}

function DropdownContent({
  items,
}: {
  items: NavigationItem["type"] extends "dropdown" ? NavigationItem["items"] : never;
}) {
  return (
    <ul className="grid w-[400px] gap-3 p-6 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
      {items.map((item) => (
        <li key={item.title}>
          <NavigationMenuLink asChild>
            <Link
              href={item.href}
              className={cn(
                "block select-none rounded-md p-3.5 leading-none no-underline outline-none transition-colors",
                "hover:bg-accent hover:text-accent-foreground",
                "focus:bg-accent focus:text-accent-foreground",
                "active:scale-[0.98] active:transition-none"
              )}
            >
              <div className="flex items-center gap-2">
                {item.icon && <item.icon className="h-4 w-4" />}
                <span className="text-sm font-medium">{item.title}</span>
              </div>
              <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground mt-1.5">
                {item.description}
              </p>
            </Link>
          </NavigationMenuLink>
        </li>
      ))}
    </ul>
  );
}

function LocationContent({
  current,
  upcoming,
}: {
  current: NavigationItem["type"] extends "location" ? NavigationItem["current"] : never;
  upcoming: NavigationItem["type"] extends "location" ? NavigationItem["upcoming"] : never;
}) {
  return (
    <div className="grid w-[600px] grid-cols-2 gap-6 p-6">
      <div>
        <h4 className="text-base font-medium mb-4">Current Location</h4>
        <div className="relative aspect-video overflow-hidden rounded-lg">
          <Image src={current.image} alt={current.name} fill className="object-cover" />
        </div>
        <div className="mt-2">
          <h5 className="text-sm font-medium">{current.name}</h5>
          <p className="text-sm text-muted-foreground">{current.description}</p>
        </div>
      </div>
      <div>
        <h4 className="text-base font-medium mb-4">Coming Soon</h4>
        <div className="space-y-6">
          {upcoming.map((location) => (
            <div key={location.name} className="group">
              <h5 className="text-sm font-medium">{location.name}</h5>
              <p className="text-sm text-muted-foreground">{location.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}