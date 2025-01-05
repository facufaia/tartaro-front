"use client";

import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useSession } from "next-auth/react";
import { Menu } from "lucide-react";
import { X } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { User } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const { data: user } = useSession();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const NavLinks = () => (
    <>
      <Link
        href="/"
        className={`hover:text-primary duration-300 ease-in-out transition-colors ${
          pathname === "/" ? "text-primary" : ""
        }`}
        onClick={() => setIsOpen(false)}
      >
        HOME
      </Link>
      <Link
        href="/products"
        className={`hover:text-primary duration-300 ease-in-out transition-colors ${
          pathname === "/products" ? "text-primary" : ""
        }`}
        onClick={() => setIsOpen(false)}
      >
        PRODUCTS
      </Link>
      <Link
        href="/about"
        className={`hover:text-primary duration-300 ease-in-out transition-colors ${
          pathname === "/about" ? "text-primary" : ""
        }`}
        onClick={() => setIsOpen(false)}
      >
        ABOUT
      </Link>
      <Link
        href="/faq"
        className={`hover:text-primary duration-300 ease-in-out transition-colors ${
          pathname === "/faq" ? "text-primary" : ""
        }`}
        onClick={() => setIsOpen(false)}
      >
        FAQ
      </Link>
    </>
  );

  return (
    <nav className="bg-background/80 fixed z-20 backdrop-blur-sm w-full mx-auto">
      <div className="mx-auto flex justify-between items-center py-4 px-7 md:px-12">
        <Link href="/" className="text-white text-lg font-bold animate-fade-in">
          <img alt="Tartaro Logo" src="/logo.svg" className="h-8" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center space-x-8 text-white animate-fade-in">
          <NavLinks />
        </div>

        <div className="flex items-center justify-center space-x-4 md:space-x-8 text-white animate-fade-in">
          <Link
            href="/cart"
            className={`hover:text-primary duration-300 ease-in-out transition-colors ${
              pathname === "/cart" ? "text-primary" : ""
            }`}
          >
            <ShoppingCart />
          </Link>
          {user ? (
            <Link href="/dashboard" className="block">
              <Avatar>
                <AvatarImage src={user.user.image} />
                <AvatarFallback>
                  <User
                    className={pathname === "/dashboard" ? "text-primary" : ""}
                  />
                </AvatarFallback>
              </Avatar>
            </Link>
          ) : (
            <Link href="/login" className="block">
              <User className={pathname === "/login" ? "text-primary" : ""} />
            </Link>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden z-30 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out backdrop-blur-sm min-w-full min-h-[100svh] fixed bg-bg`}
      >
        <div className="absolute top-0 left-0 min-w-full min-h-[100svh] flex items-center justify-center">
          <div className="flex flex-col items-center justify-center h-full space-y-8 text-white text-lg">
            <NavLinks />
          </div>
        </div>
      </div>
    </nav>
  );
}
