import NextAuth from 'next-auth'
import GitHubProvider from "next-auth/providers/github";


export const authoptions =  NextAuth({
    providers: [
      // OAuth authentication providers...
      GitHubProvider({
        clientId: process.env.GITHUB_ID as string,
        clientSecret: process.env.GITHUB_SECRET as string
      }),
    ],
  })

  export { authoptions as GET, authoptions as POST}