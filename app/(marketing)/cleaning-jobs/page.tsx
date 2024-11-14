import { Suspense } from "react";
import { Metadata } from "next";
import { SectionSkeleton } from "@/components/skeletons/section-skeleton";
import { HeroSection } from "@/components/sections/cleaning-jobs/hero-section";
import { StatsBanner } from "@/components/sections/cleaning-jobs/stats-banner";
import { FreedomSection } from "@/components/sections/cleaning-jobs/freedom-section";
import { EarningsBentoGrid } from "@/components/sections/cleaning-jobs/earnings-bento-grid";
import { IkigaiSection } from "@/components/sections/cleaning-jobs/ikigai-section";
import { LookingForBentoGrid } from "@/components/sections/cleaning-jobs/looking-for-bento-grid";
import { HowItWorksSection } from "@/components/sections/cleaning-jobs/how-it-works-section";
import { SuccessStories } from "@/components/sections/cleaning-jobs/success-stories";
import { GrowthChampionBentoGrid } from "@/components/sections/cleaning-jobs/growth-champion-bento-grid";
import { TestimonialsSection } from "@/components/sections/cleaning-jobs/testimonials-section";
import { FAQSection } from "@/components/sections/cleaning-jobs/faq-section";
import { CTASection } from "@/components/sections/cleaning-jobs/cta-section";

export const metadata: Metadata = {
  title: "Cleaning Jobs - Join Sydney's Most Trusted Cleaning Service",
  description:
    "Join Simply Maid as a professional cleaner. Flexible hours, competitive pay, and a supportive work environment. Start your journey with Sydney's leading cleaning service.",
};

export default function CleaningJobsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Suspense fallback={<SectionSkeleton />}>
        <HeroSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <StatsBanner />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <FreedomSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <EarningsBentoGrid />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <IkigaiSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <LookingForBentoGrid />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <HowItWorksSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <SuccessStories />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <GrowthChampionBentoGrid />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <TestimonialsSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <FAQSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <CTASection />
      </Suspense>
    </main>
  );
}