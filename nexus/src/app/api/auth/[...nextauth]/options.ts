import type { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        if (email !== "john@example.com" || password !== "nextauth2929") {
          return null;
        }

        return { id: "1234", name: "abraham", email: "john@example.com" };
      },

      // CredentialsProvider({
      //   name: "Credentials",
      //   credentials: {
      //     username: {
      //       label: "Username:",
      //       type: "text",
      //       placeholder: "realSynced999",
      //     },
      //     password: {
      //       label: "Password:",
      //       type: "password",
      //       placeholder: "password123",
      //     },
      //   },
      //   authorize(credentials) {
      //     // This is where you need to retrieve user data
      //     // to verify credentials
      //     // Docs: https://next-auth.js.org/configuration/providers/credentials
      //     const user = {
      //       id: "founder",
      //       name: "abraham",
      //       password: "nextauth2929",
      //     };

      //     if (
      //       credentials?.username === user.name &&
      //       credentials?.password === user.password
      //     ) {
      //       return user;
      //     } else {
      //       return null;
      //     }
      //   },
    }),
  ],
  pages: {
    signIn: "/accounts/logIn",
    // signOut: "/accounts/signout"
  },
};
