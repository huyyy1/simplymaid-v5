"use client";

import NextImage, { type ImageProps as NextImageProps } from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { getBlurDataURL } from "@/lib/utils/image";

interface ImageProps extends NextImageProps {
  aspectRatio?: "square" | "video" | "portrait" | "auto";
}

export function Image({ src, alt, className, aspectRatio = "auto", ...props }: ImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div
      className={cn(
        "overflow-hidden",
        aspectRatio === "square" && "aspect-square",
        aspectRatio === "video" && "aspect-video",
        aspectRatio === "portrait" && "aspect-[3/4]",
        className
      )}
    >
      <NextImage
        className={cn(
          "object-cover duration-700 ease-in-out",
          isLoading ? "scale-110 blur-2xl grayscale" : "scale-100 blur-0 grayscale-0"
        )}
        src={src}
        alt={alt}
        quality={90}
        placeholder="blur"
        blurDataURL={getBlurDataURL(700, 475)}
        onLoadingComplete={() => setIsLoading(false)}
        {...props}
      />
    </div>
  );
}
