import { NextResponse } from "next/server";
import { decrypt } from "./app/lib/session";

const protectedRoutes = ["/"];
const publicRoutes = ["/login", "signup"];

export async function middleware(req) {
  const path = req.nextUrl.pathname;

  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);

  const cookie = req.cookies.get("session")?.value;

  let session = null;

  if (cookie) {
    session = await decrypt(cookie);
  }

  if (isProtectedRoute && !session?.userId) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  if (isPublicRoute && session?.userId) {
    return NextResponse.redirect(new URL("/", req.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/login", "/signup"],
};
