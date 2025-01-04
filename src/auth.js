import NextAuth from "next-auth";
// import { authConfig } from "@/config/auth.config";
import Google from "next-auth/providers/google";

export const { auth, handlers, signIn, signOut } = NextAuth({
  // ...authConfig,
  providers: [Google],
});
