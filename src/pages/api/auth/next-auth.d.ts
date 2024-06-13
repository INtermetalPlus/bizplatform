import NextAuth from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
      accessToken:string;
      error?: "RefreshAccessTokenError"
    
}
interface User {
    id: number;
    email: string;
    accessToken: string;
    refreshToken: string;
    accessTokenExpires: number;
}
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken: string
    expires_at: number
    refresh_token: string
    error?: "RefreshAccessTokenError"
  }
}
