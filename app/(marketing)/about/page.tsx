import { Suspense } from "react";
import { Metadata } from "next";
import { SectionSkeleton } from "@/components/skeletons/section-skeleton";
import { HeroSection } from "@/components/sections/about/hero-section";
import { StorySection } from "@/components/sections/about/story-section";
import { IkigaiSection } from "@/components/sections/about/ikigai-section";
import { TimelineSection } from "@/components/sections/about/timeline-section";
import { DifferenceSection } from "@/components/sections/about/difference-section";
import { TestimonialsSection } from "@/components/sections/about/testimonials-section";
import { TeamSection } from "@/components/sections/about/team-section";
import { CTASection } from "@/components/sections/about/cta-section";

export const metadata: Metadata = {
  title: "About Simply Maid - Our Story & Mission",
  description:
    "Learn about Simply Maid's journey, values, and the team behind Sydney's most trusted cleaning service. Founded in 2015, we're building a company with purpose.",
};

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Suspense fallback={<SectionSkeleton />}>
        <HeroSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <StorySection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <IkigaiSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <TimelineSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <DifferenceSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <TestimonialsSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <TeamSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <CTASection />
      </Suspense>
    </main>
  );
}