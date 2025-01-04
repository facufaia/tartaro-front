import localFont from "next/font/local";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ToastProvider from "@/components/layout/ToastProvider";

import { ThemeProvider } from "@/components/ui/theme-provider";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "@/components/ui/toaster";

import StickyNotifications from "@/components/modals/StickyNotifications";

import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Tartaro | Store",
  description:
    "Discover premium clothing and accessories at Tartaro. Shop our curated collection of modern fashion essentials, featuring high-quality materials and timeless designs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SessionProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <ToastProvider>
              <Navbar />
              <div className="pt-12">{children}</div>
              <Footer />
              <Toaster />
            </ToastProvider>
          </ThemeProvider>
          <StickyNotifications />
        </SessionProvider>
      </body>
    </html>
  );
}
