import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { ErrorBoundary } from "@/components/error-boundary";
import { cn } from "@/lib/utils";
import { inter } from "@/lib/utils/font-optimization";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://simplymaid.com"),
  title: {
    default: "Simply Maid - Sydney's Most Trusted Cleaning Service",
    template: "%s | Simply Maid",
  },
  description:
    "Book a clean in Sydney in 60 seconds. Simply Maid is Sydney's most-loved cleaning service—trusted by 15,000+ happy customers.",
  keywords: ["Cleaning Service", "House Cleaning", "Sydney", "Domestic Cleaning"],
  authors: [{ name: "Simply Maid" }],
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://simplymaid.com",
    title: "Simply Maid - Sydney's Most Trusted Cleaning Service",
    description:
      "Book a clean in Sydney in 60 seconds. Simply Maid is Sydney's most-loved cleaning service—trusted by 15,000+ happy customers.",
    siteName: "Simply Maid",
  },
  twitter: {
    card: "summary_large_image",
    title: "Simply Maid - Sydney's Most Trusted Cleaning Service",
    description:
      "Book a clean in Sydney in 60 seconds. Simply Maid is Sydney's most-loved cleaning service—trusted by 15,000+ happy customers.",
    creator: "@simplymaid",
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
  manifest: "/manifest.json",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        <meta name="darkreader-lock" />
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://maps.googleapis.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://maps.googleapis.com" />
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body className={cn("min-h-screen bg-background font-sans antialiased")}>
        <ErrorBoundary>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            storageKey="simply-maid-theme"
          >
            {children}
            <Toaster />
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}