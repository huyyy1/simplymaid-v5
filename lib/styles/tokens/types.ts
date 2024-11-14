import { tokens } from "./index";

export type TokenCategory = keyof typeof tokens;
export type TokenValue<T extends TokenCategory> = (typeof tokens)[T];
export type AnimationPreset = keyof typeof tokens.animation.presets;
export type AnimationDuration = keyof typeof tokens.animation.durations;
export type AnimationEasing = keyof typeof tokens.animation.easings;

export type ResponsiveBreakpoint = "base" | "sm" | "md" | "lg" | "xl" | "2xl";
export type ResponsiveValue<T> = Partial<Record<ResponsiveBreakpoint, T>>;

export type TokenClassName = string;
export type CSSVarObject = Record<string, string>;
