import { type ImageProps } from "next/image";

export function getImageProps(
  src: string,
  { width, height, alt, ...rest }: Omit<ImageProps, "src">
): ImageProps {
  // For external images (e.g., Unsplash)
  if (src.startsWith("http")) {
    return {
      src,
      width,
      height,
      alt,
      ...rest,
    };
  }

  // For local images
  return {
    src: `/images/${src}`,
    width,
    height,
    alt,
    ...rest,
  };
}

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

export function getBlurDataURL(width: number, height: number): string {
  const svg = `
    <svg width="${width}" height="${height}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <linearGradient id="g">
          <stop stop-color="#f6f7f8" offset="0%" />
          <stop stop-color="#edeef1" offset="20%" />
          <stop stop-color="#f6f7f8" offset="40%" />
          <stop stop-color="#f6f7f8" offset="100%" />
        </linearGradient>
      </defs>
      <rect width="${width}" height="${height}" fill="#f6f7f8" />
      <rect id="r" width="${width}" height="${height}" fill="url(#g)" />
    </svg>
  `;

  return `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;
}
