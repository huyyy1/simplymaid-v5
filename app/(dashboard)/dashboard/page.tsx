import { Suspense } from "react";
import { StatsSection } from "@/components/sections/dashboard/stats-section";
import { AnalyticsSection } from "@/components/sections/dashboard/analytics-section";
import { SectionSkeleton } from "@/components/skeletons/section-skeleton";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <Suspense fallback={<SectionSkeleton />}>
        <StatsSection />
      </Suspense>
      
      <Suspense fallback={<SectionSkeleton />}>
        <AnalyticsSection />
      </Suspense>
    </div>
  );
}