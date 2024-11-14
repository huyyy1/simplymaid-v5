"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { AlertTriangle } from "lucide-react";
import { logger } from "@/lib/utils/logger";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    logger.error("Client-side error:", error);
  }, [error]);

  return (
    <Container className="flex min-h-[400px] items-center justify-center py-24">
      <div className="text-center space-y-6">
        <div className="flex justify-center">
          <div className="p-3 rounded-full bg-red-100 dark:bg-red-900/20">
            <AlertTriangle className="w-6 h-6 text-red-600 dark:text-red-400" />
          </div>
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">Something went wrong!</h2>
          <p className="text-muted-foreground">
            We apologize for the inconvenience. Please try again.
          </p>
          {process.env.NODE_ENV === "development" && (
            <pre className="mt-4 p-4 bg-red-50 dark:bg-red-900/10 rounded-lg text-left text-sm overflow-auto">
              {error.message}
              {"\n"}
              {error.stack}
            </pre>
          )}
        </div>
        <div className="space-y-4">
          <Button onClick={() => reset()}>Try again</Button>
        </div>
      </div>
    </Container>
  );
}