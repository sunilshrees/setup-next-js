import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Just return the same URL as a redirect
  // return NextResponse.redirect(new URL(request.nextUrl.pathname, request.url));
}

export const config = {
  matcher: "/(.*)",
};
