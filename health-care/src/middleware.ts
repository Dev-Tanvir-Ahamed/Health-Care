import { cookies } from "next/headers";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
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
  console.log(pathname);
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;
  console.log(accessToken);
  if (!accessToken) {
    return NextResponse.redirect(new URL("/login", request.url)); // Redirect to login if no token
  }
  if (accessToken && commonPrivateRoutes.includes(pathname)) {
    return NextResponse.next();
  }
  return NextResponse.redirect(new URL("/", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/dashboard/:page*",
};
