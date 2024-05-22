import { NextResponse, NextRequest } from 'next/server';
import { verifyToken, refreshToken as refresh } from '@/features/Login/api/utils/auth'; // Utility functions to verify and refresh tokens

export async function middleware(req:NextRequest) {
  const accessToken = req.cookies.get('accessToken');
  const refreshToken = req.cookies.get('refreshToken');

  if (!accessToken) {
    return NextResponse.redirect('/'); // Redirect to login if no access token
  }

  try {
    await verifyToken(accessToken);
  } catch (error:any) {
    if (error.name === 'TokenExpiredError') {
      try {
        if(refreshToken) {
          const newTokens = await refresh(refreshToken);
          const response = NextResponse.next();
          response.cookies.set('accessToken', newTokens.accessToken, { httpOnly: true, path: '/', maxAge: 3600 });
          response.cookies.set('refreshToken', newTokens.refreshToken, { httpOnly: true, path: '/', maxAge: 2592000 });
          return response;
        }
    
      } catch (refreshError) {
        return NextResponse.redirect('/');
      }
    } else {

      return NextResponse.redirect('/');
    }
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ['/api/v1/:path*'],
};

