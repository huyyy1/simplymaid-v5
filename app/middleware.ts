// For static exports, we use client-side routing only
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  return NextResponse.next();
}

// Configure middleware to run only for static export paths
export const config = {
  matcher: [], // Empty matcher since we're using static export
};