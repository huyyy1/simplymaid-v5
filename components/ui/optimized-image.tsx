"use client";

import { useState } from "react";
import Image, { type ImageProps } from "next/image";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

interface OptimizedImageProps extends Omit<ImageProps, "onLoadingComplete"> {
  fallback?: React.ReactNode;
  aspectRatio?: "square" | "video" | "portrait" | "auto";
  containerClassName?: string;
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  fallback,
  aspectRatio = "auto",
  containerClassName,
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const aspectRatioClasses = {
    square: "aspect-square",
    video: "aspect-video",
    portrait: "aspect-[3/4]",
    auto: "",
  };

  if (error && fallback) {
    return <>{fallback}</>;
  }

  return (
    <div
      className={cn(
        "relative overflow-hidden",
        aspectRatioClasses[aspectRatio],
        containerClassName
      )}
    >
      {isLoading && (
        <Skeleton
          className={cn(
            "absolute inset-0",
            aspectRatioClasses[aspectRatio],
            "animate-pulse bg-muted"
          )}
        />
      )}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={cn(
          "object-cover duration-700 ease-in-out",
          isLoading ? "scale-110 blur-lg" : "scale-100 blur-0",
          className
        )}
        onLoadingComplete={() => setIsLoading(false)}
        onError={() => setError(true)}
        {...props}
      />
    </div>
  );
}