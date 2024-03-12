import type { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials"

export const options: NextAuthOptions = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username:",
                    type: "text",
                    placeholder: "realSynced999"
                },
                password: {
                    label: "Password:",
                    type: "password",
                    placeholder: "password123"
                }
            },
            async authorize(credentials) {
                // This is where you need to retrieve user data 
                // to verify credentials
                // Docs: https://next-auth.js.org/configuration/providers/credentials
                const user = { id: "founder", name: "abraham", password: "nextauth2929"}

                if(credentials?.username === user.name && credentials?.password === user.password){
                    return user;
                } else {
                    return null;
                }
            },
        })
    ],
    pages: {
        signIn: "/accounts/signin",
        // signOut: "/accounts/signout"
    }
}