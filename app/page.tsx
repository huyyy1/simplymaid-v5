import { Suspense } from "react";
import { HeroSection } from "@/components/sections/home/hero-section";
import { SocialProofSection } from "@/components/sections/home/social-proof-section";
import { RecentlyCleaned } from "@/components/sections/home/recently-cleaned";
import { CleaningServices } from "@/components/sections/home/cleaning-services";
import { BookingExperienceSection } from "@/components/sections/home/booking-experience-section";
import { CleaningServicesTabs } from "@/components/sections/home/cleaning-services-tabs";
import { BestRatedCleaners } from "@/components/sections/home/best-rated-cleaners";
import { ServingLocations } from "@/components/sections/home/serving-locations";
import { ComparisonSection } from "@/components/sections/home/comparison-section";
import { FAQSection } from "@/components/sections/home/faq-section";
import { FinalCTASection } from "@/components/sections/home/final-cta-section";
import { SectionSkeleton } from "@/components/skeletons/section-skeleton";

export default async function HomePage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero section remains client-side due to interactivity */}
      <HeroSection />
      
      {/* Convert static sections to server components with Suspense */}
      <Suspense fallback={<SectionSkeleton />}>
        <SocialProofSection />
      </Suspense>
      
      <Suspense fallback={<SectionSkeleton />}>
        <RecentlyCleaned />
      </Suspense>
      
      <Suspense fallback={<SectionSkeleton />}>
        <CleaningServices />
      </Suspense>
      
      <Suspense fallback={<SectionSkeleton />}>
        <BookingExperienceSection />
      </Suspense>
      
      {/* Tabs require client interaction */}
      <CleaningServicesTabs />
      
      <Suspense fallback={<SectionSkeleton />}>
        <BestRatedCleaners />
      </Suspense>
      
      <Suspense fallback={<SectionSkeleton />}>
        <ServingLocations />
      </Suspense>
      
      <Suspense fallback={<SectionSkeleton />}>
        <ComparisonSection />
      </Suspense>
      
      <Suspense fallback={<SectionSkeleton />}>
        <FAQSection />
      </Suspense>
      
      <Suspense fallback={<SectionSkeleton />}>
        <FinalCTASection />
      </Suspense>
    </main>
  );
}