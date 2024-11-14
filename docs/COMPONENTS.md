# Component Guidelines

## Core Principles

1. **Shared Components**
   - Use components from `components/shared` for reusable UI elements
   - Follow consistent prop patterns using base interfaces from `lib/types`

2. **Layout Components**
   - `PageLayout`: Base layout for all pages
   - `SectionLayout`: Consistent section spacing and structure
   - `HeroSection`: Reusable hero section with variants

3. **UI Components**
   - `FeatureGrid`: Display feature lists
   - `TestimonialGrid`: Show testimonials
   - `BackgroundPattern`: Reusable background patterns
   - `GradientBackground`: Gradient overlays

## Usage Examples

### Page Layout
```tsx
import { PageLayout } from "@/components/shared/layouts/page-layout";

export default function AboutPage() {
  return (
    <PageLayout
      title="About Us"
      description="Our story and mission"
      variant="default"
      spacing="lg"
    >
      {/* Page content */}
    </PageLayout>
  );
}
```

### Section Layout
```tsx
import { SectionLayout } from "@/components/shared/layouts/section-layout";

export function FeaturesSection() {
  return (
    <SectionLayout
      title="Our Features"
      description="What sets us apart"
      variant="accent"
      pattern="dots"
      gradient
    >
      {/* Section content */}
    </SectionLayout>
  );
}
```

### Feature Grid
```tsx
import { FeatureGrid } from "@/components/shared/sections/feature-grid";
import { FEATURES } from "@/lib/constants";

export function Features() {
  return (
    <FeatureGrid
      features={FEATURES}
      columns={3}
      variant="card"
    />
  );
}
```

## Best Practices

1. **Props**
   - Use base interfaces from `lib/types`
   - Keep props minimal and focused
   - Use consistent naming patterns

2. **Styling**
   - Use Tailwind utility classes
   - Follow design token system
   - Use `cn()` for class merging

3. **Performance**
   - Lazy load components when appropriate
   - Use proper React hooks
   - Optimize images and animations

4. **Accessibility**
   - Include proper ARIA labels
   - Ensure keyboard navigation
   - Maintain color contrast