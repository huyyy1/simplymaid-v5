import { tokens } from "./tokens";

export const typography = {
  // Hero/Display
  hero: {
    h1: "text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.15] lg:leading-[1.2]",
    h2: "text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15] lg:leading-[1.2]",
    lead: "text-lg xs:text-xl text-muted-foreground leading-relaxed max-w-xl font-medium",
  },

  // Headings
  heading: {
    h1: "text-3xl sm:text-4xl font-bold tracking-tight",
    h2: "text-2xl sm:text-3xl font-bold tracking-tight",
    h3: "text-xl sm:text-2xl font-semibold tracking-tight",
    h4: "text-lg sm:text-xl font-semibold",
  },

  // Body Text
  body: {
    large: "text-lg sm:text-xl text-muted-foreground leading-relaxed",
    base: "text-base sm:text-lg text-muted-foreground leading-relaxed",
    small: "text-sm sm:text-base text-muted-foreground",
    tiny: "text-xs sm:text-sm text-muted-foreground",
  },

  // Form Elements
  form: {
    label: "text-sm lg:text-base font-medium text-muted-foreground",
    input: "text-base lg:text-lg",
    button: "text-base lg:text-lg font-medium",
  },
};

// Section spacing
export const spacing = {
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
};
