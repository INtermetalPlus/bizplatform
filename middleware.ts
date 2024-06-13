import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req:NextRequest) {
  // Define paths that require authentication
  const protectedPaths = ['/chat', '/orders', '/profile'];
  
  // Check if the request path is one of the protected paths
  const requiresAuth = protectedPaths.some((path) => req.nextUrl.pathname.startsWith(path));

  if (requiresAuth) {
    // Get the token from the request
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

    if (!token) {
      // If there is no token, redirect to the login page
      return NextResponse.redirect(new URL('/', req.url));
    }
  }

  // Allow the request to proceed
  return NextResponse.next();
}

// Specify paths where the middleware should run
export const config = {
  matcher: ['/chat', '/orders', '/profile'],
};
