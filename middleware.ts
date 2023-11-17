// import { NextRequest, NextResponse } from "next/server";
export { default } from "next-auth/middleware";

// We don't need below code as Nextjs provides us middleware.
// export function middleware(request: NextRequest) {
//   return NextResponse.redirect(new URL("/new-page", request.url));
// }

// If we want to execute middleware on specific path/api

export const config = {
  // *: zero or more
  // +: one or more
  // ?: zero or one
  matcher: ["/dashboard/:path*"],
};
