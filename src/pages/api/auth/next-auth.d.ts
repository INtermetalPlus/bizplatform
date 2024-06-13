import NextAuth from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
      rawAccessToken:string;
      accessToken:string;
      error?: string;
}
interface User {
    id: number;
    user_id:number;
    email: string;
    rawAccessToken:string;
    rawRefreshToken: string;
    accessTokenExpires: number;
}
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken: string
    expires_at: number
    refresh_token: string
    error?: string
    rawAccessToken:string;
  }
}
