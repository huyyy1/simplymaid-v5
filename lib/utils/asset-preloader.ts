/**
 * Asset preloader utility for critical resources
 */
export function preloadCriticalAssets() {
  // Preload critical images
  const criticalImages = [
    // Hero section images
    "https://vqxgzfcwifmbxwixhsxv.supabase.co/storage/v1/object/public/web-assets/sydney-cleaning-team-simply-maid-poster.jpg",
    // Logo and icons
    "/logo.png",
    "/favicon.ico",
  ];

  criticalImages.forEach((src) => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = src;
    document.head.appendChild(link);
  });

  // Preload critical fonts
  const criticalFonts = [
    "/fonts/inter-var.woff2",
  ];

  criticalFonts.forEach((src) => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "font";
    link.type = "font/woff2";
    link.crossOrigin = "anonymous";
    link.href = src;
    document.head.appendChild(link);
  });

  // Preload critical scripts
  const criticalScripts = [
    "https://maps.googleapis.com/maps/api/js",
  ];

  criticalScripts.forEach((src) => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "script";
    link.href = src;
    document.head.appendChild(link);
  });

  // Preload critical styles
  const criticalStyles = [
    "/styles/critical.css",
  ];

  criticalStyles.forEach((src) => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "style";
    link.href = src;
    document.head.appendChild(link);
  });
}