"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { logger } from "@/lib/utils/logger";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    logger.error("Global error:", error);
  }, [error]);

  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center bg-background p-4">
          <div className="text-center space-y-6">
            <h1 className="text-4xl font-bold">Something went wrong!</h1>
            <p className="text-lg text-muted-foreground">
              We apologize for the inconvenience. Please try again.
            </p>
            {process.env.NODE_ENV === "development" && (
              <pre className="mt-4 p-4 bg-red-50 dark:bg-red-900/10 rounded-lg text-left text-sm overflow-auto">
                {error.message}
                {"\n"}
                {error.stack}
              </pre>
            )}
            <Button onClick={() => reset()}>Try again</Button>
          </div>
        </div>
      </body>
    </html>
  );
}
