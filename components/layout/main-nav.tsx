"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Logo } from "@/components/ui/logo";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { NavItem } from "@/components/navigation/nav-item";
import { MobileNav } from "@/components/navigation/mobile-nav";
import { NAVIGATION_ITEMS } from "@/lib/config/navigation";

export function MainNav() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const isTransparent = pathname === "/" || pathname === "/about" || pathname === "/cleaning-jobs";

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b shadow-sm"
          : isTransparent
            ? "bg-transparent absolute border-transparent"
            : "bg-background border-b"
      )}
    >
      <div className="container mx-auto">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="inline-flex">
              <Logo isTransparent={!isScrolled && isTransparent} />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex flex-1 justify-center px-8">
            <NavigationMenu>
              <NavigationMenuList className="gap-2">
                {NAVIGATION_ITEMS.map((item) => (
                  <NavItem
                    key={item.title}
                    item={item}
                    isScrolled={isScrolled}
                    isTransparent={isTransparent}
                    pathname={pathname}
                  />
                ))}
              </NavigationMenuList>
              <NavigationMenuViewport />
            </NavigationMenu>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <ThemeToggle isTransparent={!isScrolled && isTransparent} />

            <Button
              size="sm"
              className={cn(
                "hidden md:inline-flex h-9 px-6 text-sm font-medium tracking-wide",
                !isScrolled && isTransparent && "bg-white/10 hover:bg-white/20 text-white"
              )}
              asChild
            >
              <Link href="/book">Book Now</Link>
            </Button>

            {/* Mobile Menu */}
            <div className="lg:hidden">
              <MobileNav items={NAVIGATION_ITEMS} isTransparent={!isScrolled && isTransparent} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
