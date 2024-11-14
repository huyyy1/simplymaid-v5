import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function CleanerCardSkeleton() {
  return (
    <Card className="p-6 h-full flex flex-col">
      <div className="flex items-start gap-4">
        <Skeleton className="w-16 h-16 rounded-full" />
        <div className="flex-1 space-y-2">
          <Skeleton className="h-5 w-32" />
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-28" />
        </div>
      </div>

      <div className="mt-4 flex gap-2">
        <Skeleton className="h-6 w-20" />
        <Skeleton className="h-6 w-20" />
      </div>

      <div className="mt-4 flex-1">
        <Skeleton className="h-16 w-full" />
      </div>

      <Skeleton className="h-10 w-full mt-6" />
    </Card>
  );
}