import { getPlaiceholder } from "plaiceholder";
import { type ImageProps } from "next/image";

interface OptimizedImageProps extends Omit<ImageProps, "src"> {
  src: string;
  sizes?: string;
  quality?: number;
}

/**
 * Get optimized image props with blur placeholder
 */
export async function getOptimizedImageProps({
  src,
  sizes = "100vw",
  quality = 75,
  ...props
}: OptimizedImageProps): Promise<ImageProps> {
  try {
    // Generate blur placeholder
    const buffer = await fetch(src).then(async (res) => Buffer.from(await res.arrayBuffer()));
    const { 
      base64,
      metadata: { height, width }
    } = await getPlaiceholder(buffer);

    // Generate srcSet for responsive images
    const breakpoints = [640, 750, 828, 1080, 1200, 1920];
    const srcSet = breakpoints
      .map((w) => `${src}?w=${w}&q=${quality} ${w}w`)
      .join(", ");

    return {
      src,
      sizes,
      width,
      height,
      placeholder: "blur",
      blurDataURL: base64,
      srcSet,
      ...props,
    };
  } catch (error) {
    console.error("Error optimizing image:", error);
    return {
      src,
      sizes,
      ...props,
    };
  }
}

/**
 * Get responsive image sizes based on breakpoints
 */
export function getResponsiveImageSizes({
  mobile = "100vw",
  tablet = "50vw",
  desktop = "33vw",
}: {
  mobile?: string;
  tablet?: string;
  desktop?: string;
} = {}): string {
  return `(max-width: 640px) ${mobile}, (max-width: 1024px) ${tablet}, ${desktop}`;
}

/**
 * Lazy load image with IntersectionObserver
 */
export function lazyLoadImage(
  src: string,
  options: { threshold?: number; rootMargin?: string } = {}
): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            img.src = src;
            observer.disconnect();
          }
        });
      },
      {
        threshold: options.threshold || 0,
        rootMargin: options.rootMargin || "50px",
      }
    );

    observer.observe(img);

    img.onload = () => {
      observer.disconnect();
      resolve(img);
    };
    img.onerror = reject;
  });
}

/**
 * Preload critical images
 */
export function preloadCriticalImages(images: string[]) {
  images.forEach((src) => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = src;
    document.head.appendChild(link);
  });
}