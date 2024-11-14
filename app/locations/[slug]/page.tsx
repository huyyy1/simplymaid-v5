import { Metadata } from "next";
import { notFound } from "next/navigation";
import { locations } from "@/lib/data/locations";
import { LocationHero } from "@/components/sections/locations/location-hero";
import { LocationServices } from "@/components/sections/locations/location-services";
import { LocationReviews } from "@/components/sections/locations/location-reviews";
import { LocationCoverage } from "@/components/sections/locations/location-coverage";
import { LocationFAQ } from "@/components/sections/locations/location-faq";
import { LocationCTA } from "@/components/sections/locations/location-cta";

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const location = locations.find(
    (l) => l.name.toLowerCase().replace(/\s+/g, "-") === params.slug
  );
  if (!location) return {};

  return {
    title: `${location.name} House Cleaning Services - Simply Maid Sydney`,
    description: `Professional house cleaning services in ${location.name}. ${location.description}`,
    openGraph: {
      title: `${location.name} House Cleaning Services - Simply Maid Sydney`,
      description: `Professional house cleaning services in ${location.name}. ${location.description}`,
      images: [{ url: location.image, width: 1200, height: 630, alt: location.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${location.name} House Cleaning Services - Simply Maid Sydney`,
      description: `Professional house cleaning services in ${location.name}. ${location.description}`,
      images: [location.image],
    },
  };
}

export async function generateStaticParams() {
  return locations.map((location) => ({
    slug: location.name.toLowerCase().replace(/\s+/g, "-"),
  }));
}

export default async function LocationPage(props: Props) {
  const params = await props.params;
  const location = locations.find(
    (l) => l.name.toLowerCase().replace(/\s+/g, "-") === params.slug
  );
  if (!location) notFound();

  return (
    <main className="flex min-h-screen flex-col">
      <LocationHero location={location} />
      <LocationServices location={location} />
      <LocationReviews location={location} />
      <LocationCoverage location={location} />
      <LocationFAQ location={location} />
      <LocationCTA location={location} />
    </main>
  );
}