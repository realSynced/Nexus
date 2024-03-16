import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";
import { sql } from "@vercel/postgres";



const  handler = NextAuth({
        session: {
            strategy: 'jwt',
        },
        providers: [
          // GithubProvider({
          //   clientId: process.env.GITHUB_ID as string,
          //   clientSecret: process.env.GITHUB_SECRET as string,
          // }),
          CredentialsProvider({
            credentials: {
              username: {  },
              email: {  },
              password: {  }
            },
            async authorize(credentials, req) {
                //
                const response = await sql `
                    SELECT * FROM users WHERE email = ${credentials?.email}`;
                    const user = response.rows[0];

                    const passwordCorrect = await compare(credentials?.password || " ", user.password);

                    console.log({passwordCorrect, credentials})

                    if(passwordCorrect){
                        // userInfo.username = user.username;
                        // userInfo.email = user.email;
                        // userInfo.password = user.password;
                        return {
                            id: user.id,
                            username: user.username,
                            email: user.email,
                        };
                    }
                    return null;
            }
          }),
        ],
        pages: {
          signIn: "/accounts/login",
          // signOut: "/accounts/signout"
        },
})
export {handler as GET, handler as POST}