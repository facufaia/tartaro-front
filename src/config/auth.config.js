import Google from "next-auth/providers/google";
import Facebook from "next-auth/providers/facebook";
import Credentials from "next-auth/providers/credentials";
import { compare } from "bcryptjs";

export const authConfig = {
  providers: [
    Google({
      profile(profile) {
        return {
          id: profile.sub,
          email: profile.email,
          name: profile.name,
          image: profile.picture,
          role: "patient",
          profileCompleted: false,
        };
      },
    }),
    Facebook({
      profile(profile) {
        return {
          id: profile.id,
          email: profile.email,
          name: profile.name,
          image: profile.picture.data.url,
          role: "patient",
          profileCompleted: false,
        };
      },
    }),
    Credentials({
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Invalid credentials");
        }

        // const user = await prisma.user.findUnique({
        //   where: { email: credentials.email },
        //   select: {
        //     id: true,
        //     email: true,
        //     password: true,
        //     role: true,
        //     profileCompleted: true,
        //   },
        // });

        if (!user || !user.password) {
          throw new Error("Invalid credentials");
        }

        const isPasswordValid = await compare(
          credentials.password,
          user.password
        );

        if (!isPasswordValid) {
          throw new Error("Invalid credentials");
        }

        return {
          id: user.id,
          email: user.email,
          role: user.role,
          profileCompleted: user.profileCompleted,
        };
      },
    }),
  ],
  session: { strategy: "jwt" },
  pages: {
    signIn: "/login",
    error: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token.id = user.id;
        token.profileCompleted = user.profileCompleted;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.role = token.role;
        session.user.id = token.id;
        session.user.profileCompleted = token.profileCompleted;
      }
      return session;
    },
  },
};

export default authConfig;
