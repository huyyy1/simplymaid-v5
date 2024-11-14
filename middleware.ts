import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Add security headers
  const headers = new Headers(request.headers);
  
  // Security headers
  headers.set("X-DNS-Prefetch-Control", "on");
  headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains");
  headers.set("X-Frame-Options", "SAMEORIGIN");
  headers.set("X-Content-Type-Options", "nosniff");
  headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  headers.set("X-Permitted-Cross-Domain-Policies", "none");
  
  // Content Security Policy
  headers.set(
    "Content-Security-Policy",
    [
      "default-src 'self'",
      "script-src 'self' 'unsafe-eval' 'unsafe-inline' *.google.com *.googleapis.com",
      "style-src 'self' 'unsafe-inline' *.googleapis.com",
      "img-src 'self' data: blob: *.unsplash.com *.pravatar.cc *.supabase.co",
      "font-src 'self' data: *.googleapis.com *.gstatic.com",
      "connect-src 'self' *.supabase.co",
      "frame-src 'self'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join("; ")
  );

  // Return response with added headers
  const response = NextResponse.next({
    request: {
      headers,
    },
  });

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};