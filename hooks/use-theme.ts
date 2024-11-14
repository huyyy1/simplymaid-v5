"use client";

import { theme } from "@/lib/styles/theme";

export function useTheme() {
  const getHeroStyles = () => ({
    wrapper: theme.spacing.section.lg,
    heading: theme.text.hero.h1,
    subheading: theme.text.hero.h2,
    lead: theme.text.hero.lead
  });

  const getSectionStyles = () => ({
    wrapper: theme.spacing.section.base,
    heading: theme.text.section.h2,
    subheading: theme.text.section.h3,
    lead: theme.text.section.lead
  });

  return {
    theme,
    getHeroStyles,
    getSectionStyles
  };
}