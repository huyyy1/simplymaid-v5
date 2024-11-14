/**
 * SEO optimization utilities
 */
import { type Metadata } from "next";

interface SEOProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  authors?: string[];
  keywords?: string[];
}

export function generateSEOMeta({
  title,
  description,
  path,
  image = "https://simplymaid.com/og-image.jpg",
  type = "website",
  publishedTime,
  authors = [],
  keywords = [],
}: SEOProps): Metadata {
  const url = `${process.env.NEXT_PUBLIC_APP_URL}${path}`;

  return {
    title: {
      default: title,
      template: `%s | Simply Maid`,
    },
    description,
    keywords,
    authors: authors.map((name) => ({ name })),
    openGraph: {
      title,
      description,
      url,
      siteName: "Simply Maid",
      locale: "en_AU",
      type,
      ...(publishedTime && { publishedTime }),
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
      creator: "@simplymaid",
    },
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
