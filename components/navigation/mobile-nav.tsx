"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { type NavigationItem } from "@/lib/types/navigation";

interface MobileNavProps {
  items: NavigationItem[];
  isTransparent: boolean;
}

export function MobileNav({ items, isTransparent }: MobileNavProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className={cn("h-9 w-9", isTransparent && "text-white hover:bg-white/10")}
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <nav className="mt-6">
          <ul className="space-y-4">
            {items.map((item) => (
              <MobileNavItem key={item.title} item={item} />
            ))}
          </ul>
          <div className="mt-6 pt-6 border-t">
            <Button className="w-full" asChild>
              <Link href="/book">Book Now</Link>
            </Button>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}

function MobileNavItem({ item }: { item: NavigationItem }) {
  if (item.type === "link") {
    return (
      <li>
        <Link
          href={item.href}
          className="flex items-center py-2 text-base font-medium whitespace-nowrap"
        >
          {item.icon && <item.icon className="mr-3 h-5 w-5" />}
          {item.title}
        </Link>
      </li>
    );
  }

  return (
    <li>
      <button className="flex items-center py-2 text-base font-medium w-full text-left whitespace-nowrap">
        {item.icon && <item.icon className="mr-3 h-5 w-5" />}
        {item.title}
      </button>
    </li>
  );
}