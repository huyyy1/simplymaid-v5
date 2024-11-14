import { cn } from "@/lib/utils";
import { typography } from "@/lib/styles/tokens/typography";

import type { JSX } from "react";

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: keyof typeof typography.sizes;
  as?: keyof JSX.IntrinsicElements;
  weight?: keyof typeof typography.weights;
  leading?: keyof typeof typography.leading;
  children: React.ReactNode;
}

export function Typography({
  variant = "body-base",
  as: Component = "p",
  weight,
  leading,
  className,
  children,
  ...props
}: TypographyProps) {
  const styles = typography.sizes[variant];
  const weightClass = weight ? `font-${weight}` : `font-${styles.weight}`;
  const leadingClass = leading ? `leading-${leading}` : `leading-[${styles.lineHeight}]`;

  return (
    <Component
      className={cn(
        `text-[${styles.size}]`,
        weightClass,
        leadingClass,
        styles.letterSpacing && `tracking-[${styles.letterSpacing}]`,
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
