export interface LocationImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  params: string;
}

export interface Location {
  name: string;
  image: LocationImage;
  description: string;
}

export function getLocationImageUrl(image: LocationImage): string {
  return `${image.src}${image.params}`;
}