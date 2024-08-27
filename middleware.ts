import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const sessionToken = request.cookies.get("next-auth.session-token")?.value;
  if (!sessionToken) {
    return NextResponse.redirect(new URL('/api/auth/signin', request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/'
  ],
};
