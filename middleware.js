import { NextResponse } from "next/server";
import { decrypt } from "./app/lib/session";

const publicRoutes = ["/login", "/signup"];
const protectedRoutes = ["/"];
const adminRoutes = ["/admin", "/admin/roles", "/admin/users"];

// ---- MIDDLEWARE ----
export async function middleware(req) {
  const path = req.nextUrl.pathname;

  const cookie = req.cookies.get("session")?.value;
  const session = cookie ? await decrypt(cookie) : null;

  // 🔒 Redirect logged-in users away from login/signup
  if (publicRoutes.includes(path) && session?.userId) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // 🔒 Protect normal authenticated pages
  if (protectedRoutes.includes(path) && !session?.userId) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // 🔒 Protect admin pages
  if (adminRoutes.some((route) => path.startsWith(route))) {
    if (!session || session.role !== "admin") {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",               // protected home page
    "/login",          // public
    "/signup",         // public
    "/admin/:path*",   // protect all admin pages
  ],
};
