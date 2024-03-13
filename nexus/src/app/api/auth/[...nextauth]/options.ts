import type { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    // GithubProvider({
    //   clientId: process.env.GITHUB_ID as string,
    //   clientSecret: process.env.GITHUB_SECRET as string,
    // }),
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        if (email !== "john@example.com" || password !== "pass") {
          throw new Error("Invalid email or password");
        }

        return { id: "1234", name: "abraham", email: "john@example.com" };
      },
    }),
  ],
  pages: {
    signIn: "/accounts/login",
    // signOut: "/accounts/signout"
  },
};
