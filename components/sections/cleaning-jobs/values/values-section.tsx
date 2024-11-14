"use client";

import { SectionLayout } from "@/components/shared/ui/section-layout";
import { ValuesGrid } from "./values-grid";

export function ValuesSection() {
  return (
    <SectionLayout
      title="Our Values"
      description="What drives us and shapes our culture"
      className="bg-accent"
    >
      <ValuesGrid />
    </SectionLayout>
  );
}
