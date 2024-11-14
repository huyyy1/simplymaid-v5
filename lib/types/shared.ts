import { type LucideIcon } from "lucide-react";

export interface BaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface WithTitle extends BaseProps {
  title: string;
  description?: string;
}

export interface WithIcon extends BaseProps {
  icon: LucideIcon;
}

export interface WithImage extends BaseProps {
  image: string;
  alt?: string;
}

// Animation variants
export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.3 },
};

export const slideUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.5 },
};

export const stagger = {
  container: {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  },
  item: {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  },
};
