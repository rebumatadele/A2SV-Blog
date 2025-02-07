import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from 'next-auth';
import { login } from "@/lib/fetch/auth-control";
export const options: NextAuthOptions = {
  session: {
    strategy: "jwt", // Use JWT for session strategy
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Username", type: "string" },
        password: { label: "Password", type: "string" }
      },
    
      async authorize(credentials, req) {
        try {
          const response = await login(credentials as { email: string; password: string });
          if (response.success) {
            return response.data; // Return the user data object
          } else {
            return null;
          }
        } catch (error) {
          console.error('Authorization error:', error);
          return null;
        }
      },
    })
    
  ],

  pages:{
    signIn: '/api/auth/signin'
  },
  callbacks: {
    async jwt({ token, user }: any) {
      if (user) {
        token.access_token = user.access_token;
        token.data = user.data;
        token.refresh_token = user.refresh_token;
      }
      return token
    },
    async session({ session, token }: any) {
      session.user.access_token = token.access_token;
      session.user.data = token.data;
      session.user.refresh_token = token.refresh_token;
      return session;
    },
  },
};
