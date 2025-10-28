"use client"

import React from "react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";

const categories = [
  { name: "Dresses", href: "#" },
  { name: "Bags", href: "#" },
  { name: "Sweaters", href: "#" },
  { name: "Boots", href: "#" },
  { name: "Gifts", href: "#" },
];

export function MobileMenu({ children }: { children: React.ReactNode }) {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent side="left" className="w-72 max-w-full bg-card p-6">
        <SheetHeader>
          <SheetTitle className="text-2xl font-bold">Menu</SheetTitle>
        </SheetHeader>
        <div className="mt-6 flex flex-col gap-4">
          <Input placeholder="Search..." />
          <nav className="flex flex-col gap-4 text-lg">
            <Link href="#" className="font-semibold text-gray-700 hover:text-primary">Home</Link>
            <Link href="#" className="font-semibold text-gray-700 hover:text-primary">Shop</Link>
            <Link href="#" className="font-semibold text-gray-700 hover:text-primary">Pages</Link>
            <Link href="#" className="font-semibold text-gray-700 hover:text-primary">About</Link>
            <Link href="#" className="font-semibold text-gray-700 hover:text-primary">Blog</Link>
            <Link href="#" className="font-semibold text-gray-700 hover:text-primary">Contact</Link>
          </nav>
          <Separator />
          <Accordion type="single" collapsible>
            <AccordionItem value="categories">
              <AccordionTrigger className="font-semibold text-lg text-gray-700 hover:text-primary">
                All Categories
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-2 pl-4">
                  {categories.map((category) => (
                    <Link key={category.name} href={category.href} className="text-gray-600 hover:text-primary">
                      {category.name}
                    </Link>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Separator />
          <Link href="#" className="font-semibold text-primary hover:text-primary/80 text-lg">
            Become Vendor
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
