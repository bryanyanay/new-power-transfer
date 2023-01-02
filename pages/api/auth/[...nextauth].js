import NextAuth from "next-auth";

import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET, // i believe we have to set this to a random value in production?? what properties must it have?
  pages: {
    signIn: "/signin"
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
};

export default NextAuth(authOptions);