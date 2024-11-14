import { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "@/lib/data/services";
import { ServiceDetails } from "@/components/sections/services/service-details";
import { RelatedServices } from "@/components/sections/services/related-services";
import { ServicePricing } from "@/components/sections/services/service-pricing";
import { ServiceFAQ } from "@/components/sections/services/service-faq";
import { ServiceCTA } from "@/components/sections/services/service-cta";

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const service = services.find((s) => s.id === params.slug);
  if (!service) return {};

  return {
    title: `${service.title} - Simply Maid Sydney`,
    description: service.description,
    openGraph: {
      title: `${service.title} - Professional Cleaning Services in Sydney`,
      description: service.description,
      images: [{ url: service.image, width: 1200, height: 630, alt: service.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} - Simply Maid Sydney`,
      description: service.description,
      images: [service.image],
    },
  };
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.id,
  }));
}

export default async function ServicePage(props: Props) {
  const params = await props.params;
  const service = services.find((s) => s.id === params.slug);
  if (!service) notFound();

  // Get related services
  const relatedServices = services
    .filter((s) => s.id !== service.id)
    .slice(0, 3);

  return (
    <main className="flex min-h-screen flex-col">
      <ServiceDetails service={service} />
      <ServicePricing service={service} />
      <RelatedServices services={relatedServices} />
      <ServiceFAQ service={service} />
      <ServiceCTA service={service} />
    </main>
  );
}