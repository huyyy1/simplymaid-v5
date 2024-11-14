"use client";

import { SectionLayout } from "@/components/shared/ui/section-layout";
import { ReviewCarousel } from "./review-carousel";
import { REVIEWS } from "@/lib/constants/static-data";

export function ReviewsSection() {
  return (
    <SectionLayout
      title="What Our Customers Say"
      description="Join thousands of satisfied customers who trust Simply Maid"
      className="bg-accent"
    >
      <ReviewCarousel reviews={REVIEWS} />
    </SectionLayout>
  );
}
