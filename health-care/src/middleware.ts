import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { UserRole } from "./types";
const AuthRoutes = ["/login", "/register"];
const commonPrivateRoutes = [
  "/dashboard",
  "/dashboard/change-password",
  "/doctors",
];
const roleBasedPrivateRoutes = {
  PATIENT: [/^\/dashboard\/patient/],
  DOCTOR: [/^\/dashboard\/doctor/],
  ADMIN: [/^\/dashboard\/admin/],
  SUPER_ADMIN: [/^\/dashboard\/super-admin/],
};
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  // console.log(request.nextUrl);
  const { pathname } = request.nextUrl;
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;
  let decodeData = null;
  if (accessToken) {
    decodeData = jwtDecode(accessToken) as any;
  }
  const role = decodeData?.role;
  console.log(role);

  if (!accessToken) {
    if (AuthRoutes.includes(pathname)) {
      return NextResponse.next();
    }
    return NextResponse.redirect(new URL("/login", request.url)); // Redirect to login if no token
  }

  if (accessToken && commonPrivateRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  // if (role === "admin" && pathname.startsWith("/dashboard/admin")) {
  //   return NextResponse.next();
  // }

  // if (role === "doctor" && pathname.startsWith("/dashboard/doctor")) {
  //   return NextResponse.next();
  // }

  if (role && roleBasedPrivateRoutes[role as UserRole]) {
    const routes = roleBasedPrivateRoutes[role as UserRole];
    if (routes.some((route) => pathname.match(route))) {
      return NextResponse.next();
    }
  }

  return NextResponse.redirect(new URL("/", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/login", "/register", "/dashboard/:page*"],
};
