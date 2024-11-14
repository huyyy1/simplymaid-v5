import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { tokens } from "./tokens";

// Core utility functions
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Type-safe token getters with memoization
const tokenCache = new Map();

export function getToken<T extends keyof typeof tokens, K extends keyof (typeof tokens)[T]>(
  category: T,
  token: K
): (typeof tokens)[T][K] {
  const cacheKey = `${category}.${String(token)}`;

  if (!tokenCache.has(cacheKey)) {
    tokenCache.set(cacheKey, tokens[category][token]);
  }

  return tokenCache.get(cacheKey);
}

// Animation utilities
export function getAnimationPreset(
  presetName: keyof typeof tokens.animation.presets,
  overrides?: Record<string, any>
) {
  return {
    ...tokens.animation.presets[presetName],
    ...overrides,
  };
}

export function createTransition(
  properties: string[],
  duration: keyof typeof tokens.animation.durations = "normal",
  easing: string = "productive.inOut"
): string {
  const [category, type] = easing.split(".");
  const easingValue =
    tokens.animation.easings[category as keyof typeof tokens.animation.easings][
      type as "in" | "out" | "inOut"
    ];

  return properties
    .map((prop) => `${prop} ${tokens.animation.durations[duration]} ${easingValue}`)
    .join(", ");
}
