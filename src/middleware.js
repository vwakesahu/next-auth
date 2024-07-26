import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
// import { getServerSession } from "next-auth";
export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/dashboard/:path*", "/signin", "/sign-up", "/", "/verify/:path*"],
};

export async function middleware(request) {
  const token = await getToken({
    req: request,
    secret: process.env.JWT_SECRET,
  });
  const url = request.nextUrl;
  console.log("pathname : ", url.pathname);

  // Handle authenticated user trying to access sign-in or home
  if (token && url.pathname === "/signin") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Handle unauthenticated user trying to access protected routes
  if (!token && url.pathname === "/") {
    return NextResponse.redirect(new URL("/signin", request.url));
  }

  // Allow access to other routes
  return NextResponse.next();
}
