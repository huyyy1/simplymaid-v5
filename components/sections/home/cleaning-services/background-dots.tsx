"use client";

export function BackgroundDots() {
  return (
    <div
      className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[length:24px_24px] opacity-10"
      aria-hidden="true"
    />
  );
}
