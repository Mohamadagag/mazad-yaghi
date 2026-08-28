import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const isMazadPage = request.nextUrl.pathname.startsWith("/mazad");

  if (!isMazadPage) {
    return NextResponse.next();
  }

  const authenticated = request.cookies.get("admin-auth");

  if (authenticated?.value === "true") {
    return NextResponse.next();
  }

  return NextResponse.redirect(
    new URL("/login", request.url)
  );
}

export const config = {
  matcher: ["/mazad/:path*"],
};
