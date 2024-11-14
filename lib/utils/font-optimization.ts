import { Inter } from "next/font/google";

// Optimize Inter font loading
export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
  adjustFontFallback: true,
  variable: "--font-inter",
});

// Font loading optimization utilities
export const fontOptimization = {
  preloadFonts: () => {
    const fonts = [
      "/fonts/inter-var.woff2",
    ];

    fonts.forEach((font) => {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "font";
      link.type = "font/woff2";
      link.crossOrigin = "anonymous";
      link.href = font;
      document.head.appendChild(link);
    });
  },

  loadFontsCritical: () => {
    // Add class to document when fonts are loaded
    if (document.fonts) {
      document.fonts.ready.then(() => {
        document.documentElement.classList.add("fonts-loaded");
      });
    }
  },
};