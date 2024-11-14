import { Skeleton } from "@/components/ui/skeleton";
import { Container } from "@/components/ui/container";

export default function Loading() {
  return (
    <Container className="py-24 space-y-12">
      {/* Hero Section Loading */}
      <div className="space-y-4">
        <Skeleton className="h-12 w-2/3 max-w-xl mx-auto" />
        <Skeleton className="h-6 w-1/2 max-w-md mx-auto" />
      </div>

      {/* Content Loading */}
      <div className="grid gap-8 md:grid-cols-3">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="space-y-4">
            <Skeleton className="h-48 w-full rounded-xl" />
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        ))}
      </div>
    </Container>
  );
}