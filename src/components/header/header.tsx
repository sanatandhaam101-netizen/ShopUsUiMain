"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { GitCompareArrows, Heart, Menu, Search, ShoppingCart } from "lucide-react";
import { CategoryDropdown } from "./category-dropdown";
import { MobileMenu } from "./mobile-menu";

export function Header() {
  return (
    <header className="bg-card shadow-sm">
      {/* Top bar */}
      <div className="border-b bg-secondary/50 py-2 text-sm text-muted-foreground">
        <div className="container mx-auto flex items-center justify-between px-4">
          <div className="hidden items-center gap-6 md:flex">
            <Link href="#" className="hover:text-primary">
              Account
            </Link>
            <Link href="#" className="hover:text-primary">
              Track Order
            </Link>
            <Link href="#" className="hover:text-primary">
              Support
            </Link>
          </div>
          <div className="text-right w-full md:w-auto">
            Need help? Call us:{" "}
            <Link href="#" className="font-semibold text-foreground hover:text-primary">
              + 00645 4568
            </Link>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="py-4">
        <div className="container mx-auto flex items-center justify-between px-4">
          <Link href="/" className="text-3xl font-bold text-gray-800">
            Shopus
          </Link>

          <div className="hidden w-full max-w-xl lg:flex">
            <div className="relative w-full">
              <Input
                type="text"
                placeholder="Search for products..."
                className="rounded-r-none border-r-0 focus-visible:ring-primary"
              />
              <Button
                type="submit"
                className="absolute right-0 top-0 rounded-l-none"
              >
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link href="#" className="relative text-muted-foreground hover:text-primary">
              <GitCompareArrows className="h-6 w-6" />
              <Badge variant="destructive" className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full p-0">3</Badge>
            </Link>
            <Link href="#" className="relative text-muted-foreground hover:text-primary">
              <Heart className="h-6 w-6" />
              <Badge variant="destructive" className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full p-0">5</Badge>
            </Link>
            <Link href="#" className="relative text-muted-foreground hover:text-primary">
              <ShoppingCart className="h-6 w-6" />
              <Badge variant="destructive" className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full p-0">2</Badge>
            </Link>
            <MobileMenu>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </MobileMenu>
          </div>
        </div>
      </nav>

      {/* Bottom navigation bar */}
      <div className="hidden border-t lg:block">
        <div className="container mx-auto flex items-center justify-between px-4">
          <CategoryDropdown />

          <div className="flex gap-8">
            <Link href="#" className="font-semibold text-gray-700 hover:text-primary">Home</Link>
            <Link href="#" className="font-semibold text-gray-700 hover:text-primary">Shop</Link>
            <Link href="#" className="font-semibold text-gray-700 hover:text-primary">Pages</Link>
            <Link href="#" className="font-semibold text-gray-700 hover:text-primary">About</Link>
            <Link href="#" className="font-semibold text-gray-700 hover:text-primary">Blog</Link>
            <Link href="#" className="font-semibold text-gray-700 hover:text-primary">Contact</Link>
          </div>

          <Link href="#" className="font-semibold text-primary hover:text-primary/80">
            Become Vendor
          </Link>
        </div>
      </div>
    </header>
  );
}
