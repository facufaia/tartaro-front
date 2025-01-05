import Link from "next/link";
// import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background/80 backdrop-blur-sm text-white p-8 md:px-12">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in">
        {/* Logo & Description */}
        <div className="space-y-4">
          <Link href="/" className="inline-block">
            <img alt="Tartaro Logo" src="/logo.svg" className="h-8" />
          </Link>
          <p className="text-sm text-muted-foreground">
            Premium streetwear for those who dare to be different.
          </p>
        </div>
        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="font-semibold">Quick Links</h3>
          <nav className="flex flex-col space-y-2">
            <Link
              href="/terms-conditions"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Terms and Conditions
            </Link>
            <Link
              href="/privacy-policy"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/faq"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              FAQ
            </Link>
          </nav>
        </div>
        {/* Social & Contact
        <div className="space-y-4">
          <h3 className="font-semibold">Follow Us</h3>
          <div className="flex space-x-4">
            <Link
              href="https://instagram.com"
              className="hover:text-primary transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </Link>
            <Link
              href="https://facebook.com"
              className="hover:text-primary transition-colors"
            >
              <Facebook className="h-5 w-5" />
            </Link>
            <Link
              href="https://twitter.com"
              className="hover:text-primary transition-colors"
            >
              <Twitter className="h-5 w-5" />
            </Link>
          </div>
        </div>*/}
      </div>

      {/* Copyright */}
      <div className="container mx-auto mt-8 pt-8 border-t border-white/10 animate-fade-in">
        <p className="text-sm text-center text-muted-foreground">
          © {new Date().getFullYear()} Tartaro. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
