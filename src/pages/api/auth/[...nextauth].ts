import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import JWT from 'jsonwebtoken'

async function refreshAccessToken(token:any) {
  try {

    const response = await fetch('http://167.172.161.102:82/api/v1/authorization/token/refresh/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        grant_type: 'refresh',
        refresh: token.rawRefreshToken,
      }),
    });
    const refreshedTokens = await response.json();

    if (!response.ok) {
      throw refreshedTokens;
    }

    return {
      ...token,
      accessToken: refreshedTokens.access,
      accessTokenExpires: Date.now() + refreshedTokens.expires_in * 1000, // Adjust the expiration time
      refreshToken: refreshedTokens.refresh || token.refreshToken,
    };
  } catch (error) {
    console.error('Error refreshing access token:', error);
    return {
      ...token,
      error: 'RefreshAccessTokenError',
    };
  }
}

function isTokenExpired(token:any) {
  const expirationTime = token.accessTokenExpires;
  return Date.now() > expirationTime;
}

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const res = await fetch("http://167.172.161.102:82/api/v1/authorization/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
        });
        const user = await res.json();
  
        
        if (user && user.access && user.refresh) {

          const decodedToken = JWT.decode(user.access) as any

          console.log('decoded token: ', decodedToken)
          
          return {
            ...decodedToken,
            rawAccessToken:user.access,
            rawRefreshToken:user.refresh,
            accessTokenExpires: Date.now() + 5 * 60 * 1000, // 5 minutes
          };
        } else {
          return null;
        }
      }
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
  
      if (account && user) {
        console.log('JWT callback: setting new token');
        return {
          ...token,
          user_id:user.user_id,
          rawAccessToken: user.rawAccessToken,
          rawRefreshToken: user.rawRefreshToken,
          accessTokenExpires: user.accessTokenExpires,
        };
      }

      if (isTokenExpired(token)) {
        console.log('JWT callback: token expired, refreshing');
        token = await refreshAccessToken(user);
      }

      return token;
    },
    async session({ session, token }) {
      session.user = token as any;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },
  pages: {
    signIn: '/',
  },
});
