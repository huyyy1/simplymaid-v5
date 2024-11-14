// Single source of truth for design tokens
export const tokens = {
  colors: {
    brand: {
      purple: {
        50: "hsl(273, 100%, 98%)",
        100: "hsl(273, 95%, 96%)",
        200: "hsl(273, 90%, 92%)",
        300: "hsl(273, 85%, 85%)",
        400: "hsl(273, 80%, 75%)", // Dark mode primary
        500: "hsl(273, 83%, 60%)", // Primary - Main brand color
        600: "hsl(273, 85%, 55%)",
        700: "hsl(273, 87%, 50%)",
        800: "hsl(273, 89%, 45%)",
        900: "hsl(273, 91%, 40%)",
        950: "hsl(273, 93%, 35%)",
      },
      pink: {
        50: "hsl(335, 100%, 98%)",
        100: "hsl(335, 95%, 96%)",
        200: "hsl(335, 90%, 92%)",
        300: "hsl(335, 85%, 85%)",
        400: "hsl(335, 80%, 75%)", // Dark mode secondary
        500: "hsl(335, 85%, 65%)", // Secondary - Accent color
        600: "hsl(335, 87%, 60%)",
        700: "hsl(335, 89%, 55%)",
        800: "hsl(335, 91%, 50%)",
        900: "hsl(335, 93%, 45%)",
        950: "hsl(335, 95%, 40%)",
      },
    },
    semantic: {
      success: "hsl(150, 84%, 45%)",
      warning: "hsl(35, 95%, 60%)",
      error: "hsl(350, 84%, 60%)",
      info: "hsl(195, 85%, 45%)",
    },
  },

  typography: {
    fonts: {
      heading: "var(--font-inter)",
      body: "var(--font-inter)",
      mono: "var(--font-jetbrains-mono)",
    },
    sizes: {
      xs: ["0.75rem", { lineHeight: "1rem" }],
      sm: ["0.875rem", { lineHeight: "1.25rem" }],
      base: ["1rem", { lineHeight: "1.5rem" }],
      lg: ["1.125rem", { lineHeight: "1.75rem" }],
      xl: ["1.25rem", { lineHeight: "1.75rem" }],
      "2xl": ["1.5rem", { lineHeight: "2rem" }],
      "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
      "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
      "5xl": ["3rem", { lineHeight: "1" }],
      "6xl": ["3.75rem", { lineHeight: "1" }],
    },
    weights: {
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
    },
  },

  spacing: {
    section: {
      sm: "py-12 sm:py-16",
      base: "py-16 sm:py-20",
      lg: "py-20 sm:py-24",
      xl: "py-24 sm:py-32",
    },
    container: {
      sm: "px-4 sm:px-6 lg:px-8",
      base: "px-4 sm:px-6 lg:px-8 xl:px-12",
      lg: "px-4 sm:px-8 lg:px-12 xl:px-16",
    },
  },

  animation: {
    durations: {
      fastest: "100ms",
      faster: "150ms",
      fast: "200ms",
      normal: "300ms",
      slow: "400ms",
      slower: "500ms",
      slowest: "700ms",
    },
    easings: {
      productive: {
        in: "cubic-bezier(0.4, 0.0, 1, 1)",
        out: "cubic-bezier(0.0, 0.0, 0.2, 1)",
        inOut: "cubic-bezier(0.4, 0.0, 0.2, 1)",
      },
      expressive: {
        in: "cubic-bezier(0.4, 0.14, 1, 1)",
        out: "cubic-bezier(0, 0, 0.3, 1)",
        inOut: "cubic-bezier(0.4, 0.14, 0.3, 1)",
      },
    },
    presets: {
      fadeIn: {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.3, ease: "easeOut" },
      },
      slideUp: {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
        transition: { duration: 0.5, ease: "easeOut" },
      },
      scale: {
        initial: { opacity: 0, scale: 0.95 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 1.05 },
        transition: { duration: 0.3, ease: "easeOut" },
      },
    },
  },
} as const;
