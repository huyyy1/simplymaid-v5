# Simply Maid Design System

## 🎨 Colors

### Brand Colors
```css
--primary: 267 83% 60%;    /* Purple - #7E57C2 */
--secondary: 339 83% 60%;  /* Pink - #FF4E8E */
```

### Semantic Colors
```css
--background: 267 45% 99%;
--foreground: 267 45% 15%;
--muted: 267 60% 97%;
--muted-foreground: 267 20% 45%;
--accent: 267 60% 97%;
--accent-foreground: 267 45% 15%;
```

### Dark Mode Colors
```css
--background: 267 45% 8%;
--foreground: 267 10% 98%;
--muted: 267 40% 15%;
--muted-foreground: 267 20% 75%;
```

## 📝 Typography

### Hero Typography
```css
.hero-heading-primary {
  @apply text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] lg:leading-[1.15];
}

.hero-heading-secondary {
  @apply text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.2] lg:leading-[1.25];
}

.hero-lead {
  @apply text-lg md:text-xl lg:text-2xl leading-relaxed font-medium;
}
```

### Section Typography
```css
.section-heading {
  @apply text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.2];
}

.section-subheading {
  @apply text-xl md:text-2xl font-semibold tracking-tight leading-relaxed text-muted-foreground;
}

.section-lead {
  @apply text-lg md:text-xl leading-relaxed text-muted-foreground;
}
```

### Content Typography
```css
.content-large {
  @apply text-lg leading-relaxed;
}

.content-base {
  @apply text-base leading-relaxed;
}

.content-small {
  @apply text-sm leading-relaxed;
}
```

## 📏 Spacing

### Section Spacing
```css
.section-spacing-sm {
  @apply py-12 sm:py-16;
}

.section-spacing-base {
  @apply py-16 sm:py-20;
}

.section-spacing-lg {
  @apply py-20 sm:py-24;
}

.section-spacing-xl {
  @apply py-24 sm:py-32;
}
```

### Container Spacing
```css
.container-spacing-sm {
  @apply px-4 sm:px-6 lg:px-8;
}

.container-spacing-base {
  @apply px-4 sm:px-6 lg:px-8 xl:px-12;
}

.container-spacing-lg {
  @apply px-4 sm:px-8 lg:px-12 xl:px-16;
}
```

## 🎯 UI Components

### Cards
```css
.light-card {
  @apply bg-white border border-white/20 shadow-lg backdrop-blur-sm;
}

.light-glass {
  @apply bg-white/90 backdrop-blur-md shadow-xl border border-white/50;
}
```

### Buttons
```css
.light-button {
  @apply bg-white shadow-md border border-white/10 transition-all duration-300 hover:shadow-lg;
}
```

### Form Elements
```css
.form-label {
  @apply text-base font-medium text-muted-foreground;
}

.form-input {
  @apply text-lg;
}

.form-button {
  @apply text-lg font-medium;
}
```

## 🎭 Animations

### Transitions
```css
.transition-base {
  @apply transition-all duration-300;
}

.transition-slow {
  @apply transition-all duration-500;
}
```

### Motion Variants
```typescript
export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.3 }
};

export const slideUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};
```

## 📱 Breakpoints

```css
sm: '640px'
md: '768px'
lg: '1024px'
xl: '1280px'
2xl: '1536px'
```

## 🎨 Design Principles

1. **Consistency**
   - Use design tokens for colors, spacing, and typography
   - Maintain consistent component patterns
   - Follow established layout structures

2. **Hierarchy**
   - Clear visual hierarchy in typography
   - Important elements should stand out
   - Use whitespace to create visual separation

3. **Accessibility**
   - Maintain WCAG 2.1 AA compliance
   - Ensure sufficient color contrast
   - Support keyboard navigation
   - Include proper ARIA labels

4. **Responsiveness**
   - Mobile-first approach
   - Fluid typography and spacing
   - Adaptive layouts based on screen size

5. **Performance**
   - Optimize images and animations
   - Lazy load components when possible
   - Minimize CSS bundle size

## 🔄 Component Patterns

### Section Layout
```tsx
<section className="py-24 bg-background">
  <div className="container px-4 mx-auto">
    <div className="max-w-3xl mx-auto text-center mb-16">
      <h2 className="section-heading">Section Title</h2>
      <p className="section-lead">Section description</p>
    </div>
    {/* Content */}
  </div>
</section>
```

### Card Pattern
```tsx
<Card className="p-6 h-full">
  <div className="flex flex-col items-center text-center space-y-4">
    <div className="p-3 rounded-full bg-primary/10">
      <Icon className="w-6 h-6 text-primary" />
    </div>
    <h3 className="card-title">{title}</h3>
    <p className="card-description">{description}</p>
  </div>
</Card>
```

### Form Pattern
```tsx
<form className="space-y-6">
  <div className="space-y-2">
    <Label className="form-label">Label</Label>
    <Input className="form-input" />
  </div>
  <Button className="form-button">Submit</Button>
</form>
```