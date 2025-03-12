
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import ThemeToggle from "@/components/ThemeToggle";

const NavLinks = [
  { name: "Buy", href: "/properties/buy" },
  { name: "Rent", href: "/properties/rent" },
  { name: "Sell", href: "/sell" },
  { name: "Loans", href: "/loans" },
  { name: "Agents", href: "/agents" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-primary">EstateHub</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:gap-x-6">
          <NavigationMenu>
            <NavigationMenuList>
              {NavLinks.map((link) => (
                <NavigationMenuItem key={link.name}>
                  <Link href={link.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "text-base font-medium",
                        pathname === link.href
                          ? "text-primary"
                          : "text-foreground"
                      )}
                    >
                      {link.name}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right side items */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <div className="hidden md:block">
            <Button variant="outline" className="mr-2">
              Sign In
            </Button>
            <Button>Sign Up</Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-4 pb-5 pt-2">
            {NavLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "block py-2 font-medium",
                  pathname === link.href
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-5 flex flex-col space-y-3">
              <Button variant="outline">Sign In</Button>
              <Button>Sign Up</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
