// Consolidate all utility functions into a single file
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Core utility functions
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Re-export all utility functions
export * from "./analytics";
export * from "./error";
export * from "./image-optimization";
export * from "./performance";
export * from "./type-guards";
export * from "./validation";
export * from "./video-optimization";
export * from "./font-optimization";
export * from "./asset-preloader";
export * from "./rate-limit";
export * from "./logger";