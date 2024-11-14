import { type Metadata } from "next";

export const siteConfig = {
  name: "Simply Maid",
  description: "Sydney's Most Trusted Cleaning Service",
  url: process.env.NEXT_PUBLIC_APP_URL || "https://simplymaid.com",
  ogImage: "https://simplymaid.com/og.jpg",
  twitter: "@simplymaid",
  author: "Simply Maid",
};

export function constructMetadata({
  title = siteConfig.name,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title: {
      default: title,
      template: `%s | ${siteConfig.name}`,
    },
    description,
    authors: [{ name: siteConfig.author }],
    creator: siteConfig.author,
    openGraph: {
      type: "website",
      locale: "en_AU",
      url: siteConfig.url,
      title: {
        default: title,
        template: `%s | ${siteConfig.name}`,
      },
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: siteConfig.twitter,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: "/",
    },
  };
}
