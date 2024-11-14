import { Skeleton } from "@/components/ui/skeleton";

export function SectionSkeleton() {
  return (
    <div className="w-full space-y-8 py-24">
      <div className="container px-4 mx-auto">
        <Skeleton className="h-8 w-[200px] mx-auto mb-4" />
        <Skeleton className="h-4 w-[300px] mx-auto mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Skeleton className="h-[200px] rounded-xl" />
          <Skeleton className="h-[200px] rounded-xl" />
          <Skeleton className="h-[200px] rounded-xl" />
        </div>
      </div>
    </div>
  );
}
