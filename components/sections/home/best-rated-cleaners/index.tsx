import { Suspense } from "react";
import { getTopCleaners } from "@/lib/data/cleaners";
import { CleanerCard } from "./cleaner-card";
import { CleanerCardSkeleton } from "./cleaner-card-skeleton";

export async function BestRatedCleaners() {
  const cleaners = await getTopCleaners();

  return (
    <section className="py-24 bg-accent">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Best rated cleaners near me</h2>
          <p className="text-lg text-muted-foreground">
            Meet our top-rated cleaning professionals, trusted by thousands of customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cleaners.map((cleaner) => (
            <Suspense key={cleaner.id} fallback={<CleanerCardSkeleton />}>
              <CleanerCard cleaner={cleaner} />
            </Suspense>
          ))}
        </div>
      </div>
    </section>
  );
}