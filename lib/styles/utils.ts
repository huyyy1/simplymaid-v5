import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { theme } from "./theme";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getColor(path: string): string {
  const [category, shade] = path.split(".");
  return theme.colors.brand[category as keyof typeof theme.colors.brand][
    shade as keyof typeof theme.colors.brand.primary
  ];
}

export function getSemanticColor(type: keyof typeof theme.colors.semantic): string {
  return theme.colors.semantic[type];
}

export function getAnimationDuration(duration: keyof typeof theme.animation.durations): string {
  return theme.animation.durations[duration];
}

export function getAnimationEasing(
  category: keyof typeof theme.animation.easings,
  type: keyof typeof theme.animation.easings.productive
): string {
  return theme.animation.easings[category][type];
}

export function getSpacing(size: keyof typeof theme.spacing): string {
  return theme.spacing[size];
}
