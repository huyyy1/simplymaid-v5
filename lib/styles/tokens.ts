export const tokens = {
  colors: {
    brand: {
      // Primary - Warm Purple
      purple: {
        50: "hsl(273, 100%, 98%)", // Lightest - backgrounds
        100: "hsl(273, 95%, 96%)", // Light backgrounds
        200: "hsl(273, 90%, 92%)", // Hover states
        300: "hsl(273, 85%, 85%)", // Disabled states
        400: "hsl(273, 80%, 75%)", // Dark mode primary
        500: "hsl(273, 83%, 60%)", // Primary - Main brand color
        600: "hsl(273, 85%, 55%)", // Hover state for primary
        700: "hsl(273, 87%, 50%)", // Active state
        800: "hsl(273, 89%, 45%)", // Dark variant
        900: "hsl(273, 91%, 40%)", // Darkest - text
        950: "hsl(273, 93%, 35%)", // Extra dark - headings
      },
      // Secondary - Vibrant Pink
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
      success: "hsl(150, 84%, 45%)", // Fresh Green
      warning: "hsl(35, 95%, 60%)", // Warm Orange
      error: "hsl(350, 84%, 60%)", // Soft Red
      info: "hsl(195, 85%, 45%)", // Clear Blue
      neutral: {
        50: "hsl(273, 20%, 98%)",
        100: "hsl(273, 16%, 96%)",
        200: "hsl(273, 14%, 90%)",
        300: "hsl(273, 12%, 83%)",
        400: "hsl(273, 10%, 64%)",
        500: "hsl(273, 8%, 45%)",
        600: "hsl(273, 6%, 32%)",
        700: "hsl(273, 4%, 25%)",
        800: "hsl(273, 3%, 15%)",
        900: "hsl(273, 2%, 9%)",
        950: "hsl(273, 2%, 4%)",
      },
    },
  },

  typography: {
    fonts: {
      heading: "var(--font-inter)",
      body: "var(--font-inter)",
      mono: "var(--font-jetbrains-mono)",
    },
    sizes: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "3.75rem",
    },
    weights: {
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
    },
    lineHeights: {
      none: "1",
      tight: "1.25",
      snug: "1.375",
      normal: "1.5",
      relaxed: "1.625",
      loose: "2",
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

  shadows: {
    sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    base: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
    md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
  },

  radii: {
    none: "0",
    sm: "0.125rem",
    base: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    "3xl": "1.5rem",
    full: "9999px",
  },
} as const;
