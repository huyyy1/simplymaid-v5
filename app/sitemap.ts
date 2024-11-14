import { MetadataRoute } from "next";
import { services } from "@/lib/data/services";
import { locations } from "@/lib/data/locations";

export default function sitemap(): MetadataRoute.Sitemap {
  // Base routes
  const routes = [
    {
      url: "https://simplymaid.com",
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1,
    },
    {
      url: "https://simplymaid.com/about",
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: "https://simplymaid.com/cleaning-jobs",
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: "https://simplymaid.com/book",
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
  ];

  // Add dynamic routes
  const serviceRoutes = services.map((service) => ({
    url: `https://simplymaid.com/services/${service.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const locationRoutes = locations.map((location) => ({
    url: `https://simplymaid.com/locations/${location.name.toLowerCase().replace(/\s+/g, "-")}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...routes, ...serviceRoutes, ...locationRoutes];
}