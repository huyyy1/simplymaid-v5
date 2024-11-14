"use client";

import { cn } from "@/lib/utils";
import { headingVariants } from "@/lib/styles/tokens/variants";
import { motion, HTMLMotionProps } from "framer-motion";

interface HeadingProps extends HTMLMotionProps<"h1" | "h2" | "h3" | "h4" | "h5" | "h6"> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  weight?: "normal" | "medium" | "semibold" | "bold";
  animate?: boolean;
  children: React.ReactNode;
}

export function Heading({
  as: Tag = "h2",
  size,
  weight,
  animate = true,
  className,
  children,
  ...props
}: HeadingProps) {
  const Comp = animate ? motion[Tag] : Tag;
  const animationProps = animate
    ? {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 },
      }
    : {};

  return (
    <Comp
      className={cn(headingVariants({ size, weight }), className)}
      {...animationProps}
      {...props}
    >
      {children}
    </Comp>
  );
}
