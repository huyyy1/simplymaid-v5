export const themeTokens = {
  colors: {
    brand: {
      primary: {
        light: "hsl(267, 83%, 60%)", // #7E57C2
        dark: "hsl(267, 70%, 75%)",
        gradient: "linear-gradient(135deg, hsl(267, 83%, 60%) 0%, hsl(267, 70%, 75%) 100%)",
      },
      secondary: {
        light: "hsl(339, 100%, 65%)", // #FF4E8E
        dark: "hsl(339, 100%, 75%)",
        gradient: "linear-gradient(135deg, hsl(339, 100%, 65%) 0%, hsl(339, 100%, 75%) 100%)",
      },
    },
    overlays: {
      dark: {
        light: "bg-black/40",
        medium: "bg-black/60",
        heavy: "bg-black/80",
      },
      blur: {
        light: "backdrop-blur-sm",
        medium: "backdrop-blur-md",
        heavy: "backdrop-blur-lg",
      },
    },
  },
  spacing: {
    section: {
      sm: "py-12",
      md: "py-16 lg:py-20",
      lg: "py-20 lg:py-24",
      xl: "py-24 lg:py-32",
    },
    container: {
      sm: "px-4",
      md: "px-6",
      lg: "px-8",
    },
  },
  typography: {
    hero: {
      h1: "text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.15] lg:leading-[1.2]",
      body: "text-xl leading-relaxed",
    },
  },
};
