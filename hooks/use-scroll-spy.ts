"use client";

import { useState, useEffect } from "react";

export function useScrollSpy(selectors: string[], options?: IntersectionObserverInit) {
  const [activeId, setActiveId] = useState<string>();

  useEffect(() => {
    const elements = selectors.map(selector => 
      document.querySelector(selector)
    ).filter((element): element is Element => element !== null);

    if (elements.length === 0) return;

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.getAttribute("id") ?? undefined);
        }
      });
    };

    const observer = new IntersectionObserver(callback, {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
      ...options
    });

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [selectors, options]);

  return activeId;
}