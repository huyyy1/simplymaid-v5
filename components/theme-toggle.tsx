"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useMounted } from "@/hooks/use-mounted";

interface ThemeToggleProps {
  isTransparent?: boolean;
}

export function ThemeToggle({ isTransparent }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const mounted = useMounted();

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className={cn("h-8 w-8", isTransparent && "text-white hover:bg-white/10 border-white/20")}
      >
        <span className="sr-only">Toggle theme</span>
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className={cn("h-8 w-8", isTransparent && "text-white hover:bg-white/10 border-white/20")}
    >
      <Sun
        className={cn(
          "h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0",
          isTransparent && "text-white"
        )}
      />
      <Moon
        className={cn(
          "absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100",
          isTransparent && "text-white"
        )}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
