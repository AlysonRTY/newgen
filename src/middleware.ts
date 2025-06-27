import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/ducks") &&
    !pathname.startsWith("/ducks/gateway") &&
    !request.cookies.has("can-access-ducks")
  ) {
    const gatewayUrl = new URL("/ducks/gateway", request.url);
    return NextResponse.redirect(gatewayUrl);
  }

  return NextResponse.next();
}
