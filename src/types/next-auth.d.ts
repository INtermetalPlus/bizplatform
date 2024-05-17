import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      access: string;
      refresh: string;
      exp: number;
      iat: numder;
      jti: string;
    };
  }
}