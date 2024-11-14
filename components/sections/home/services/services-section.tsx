"use client";

import { SectionLayout } from "@/components/shared/ui/section-layout";
import { ServiceGrid } from "./service-grid";

export function ServicesSection() {
  return (
    <SectionLayout
      title="Our Services"
      description="Professional cleaning services tailored to your needs"
      className="bg-background"
    >
      <ServiceGrid />
    </SectionLayout>
  );
}
