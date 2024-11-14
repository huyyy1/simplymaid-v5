"use client";

import { SectionLayout } from "@/components/shared/ui/section-layout";
import { GrowthCard } from "./growth-card";
import { RequirementsCard } from "./requirements-card";
import { EarningsCard } from "./earnings-card";

export function GrowthSection() {
  return (
    <SectionLayout
      title="Growth Champion Program"
      description="Take your career to the next level. Lead, mentor, and earn more."
      className="bg-background"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto">
        <div className="md:col-span-2 md:row-span-2">
          <GrowthCard />
        </div>
        <RequirementsCard />
        <EarningsCard />
      </div>
    </SectionLayout>
  );
}
