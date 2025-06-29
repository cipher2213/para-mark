import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });
  const isAuthPage = request.nextUrl.pathname.startsWith("/api/auth");
  const isPublicPage = ["/", "/about", "/contact"].includes(request.nextUrl.pathname);

  if (!token && !isAuthPage && !isPublicPage) {
    const url = new URL(`/api/auth/signin`, request.url);
    url.searchParams.set("callbackUrl", request.nextUrl.pathname);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/menu-page/:path*",
    "/cart/:path*",
    "/order-confirmation/:path*",
    "/order-history/:path*",
  ],
}; 