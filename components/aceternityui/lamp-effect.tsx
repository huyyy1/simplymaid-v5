"use client";

import { cn } from "@/lib/utils";
import { useRef, useState } from "react";

/**
 * @name LampEffect
 * @description Text effect with dynamic spotlight from Aceternity UI
 * @source https://ui.aceternity.com/components/lamp-effect
 *
 * @example
 * ```tsx
 * <LampEffect>
 *   <h1 className="text-4xl font-bold text-center">
 *     Ready to experience a cleaner home?
 *   </h1>
 * </LampEffect>
 * ```
 */
export function LampEffect({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setPosition({ x, y });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className={cn(
        "relative flex min-h-[40rem] flex-col items-center justify-center overflow-hidden bg-background w-full rounded-md z-0",
        className
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-all duration-300 ease-in-out"
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(126, 87, 194, 0.1), transparent 40%)`,
        }}
      />
      <div className="relative z-10 w-full text-center">{children}</div>
    </div>
  );
}
