# Aceternity UI Components

This directory contains components from [Aceternity UI](https://ui.aceternity.com/), a collection of beautiful and reusable UI components.

## Components

### Tabs

A beautiful animated tabs component with 3D perspective effects and smooth transitions.

[See Tabs documentation above...]

### LampEffect

A dynamic spotlight effect that follows the mouse cursor, creating an engaging lighting effect on content.

#### Usage

```tsx
import { LampEffect } from "@/components/aceternityui/lamp-effect";

export function MyComponent() {
  return (
    <LampEffect className="min-h-[40rem]">
      <motion.h1 className="text-4xl font-bold text-center">
        Your Heading Here
      </motion.h1>
      <p className="text-xl text-muted-foreground">
        Supporting text content
      </p>
    </LampEffect>
  );
}
```

#### Props

- `children`: ReactNode - Content to display with the lamp effect
- `className`: Optional string - Additional classes for the container

#### Important Notes

1. The effect works best with:
   - Sufficient height (min-h-[40rem] recommended)
   - Centered content
   - Dark or muted backgrounds
   - Light text colors

2. The spotlight color can be customized through the --spotlight-color CSS variable

## Guidelines

1. Do not modify the core functionality of these components
2. Keep the original animations and transitions
3. Only customize through the provided props and className options
4. Maintain the same markup structure for proper animations

## Dependencies

These components require:

- framer-motion
- clsx
- tailwind-merge

Make sure these are installed in your project.