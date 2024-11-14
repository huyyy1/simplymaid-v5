import { cva } from "class-variance-authority";

export const navigationItemStyles = cva(
  "inline-flex h-11 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors",
  {
    variants: {
      isActive: {
        true: "bg-accent",
        false: "",
      },
      isScrolled: {
        true: "text-foreground",
        false: "",
      },
      isTransparent: {
        true: "text-white hover:bg-white/10",
        false: "hover:bg-accent hover:text-accent-foreground",
      },
    },
    compoundVariants: [
      {
        isScrolled: false,
        isTransparent: false,
        className: "text-foreground",
      },
    ],
    defaultVariants: {
      isActive: false,
      isScrolled: true,
      isTransparent: false,
    },
  }
);
