"use client"

import Image from "next/image";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const CategoryIcon = () => (
    <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="14" height="1" fill="white"></rect>
        <rect y="8" width="14" height="1" fill="white"></rect>
        <rect y="4" width="10" height="1" fill="white"></rect>
    </svg>
);

const categories = [
  { name: "Dresses", href: "#", imageId: "category-dresses" },
  { name: "Bags", href: "#", imageId: "category-bags" },
  { name: "Sweaters", href: "#", imageId: "category-sweaters" },
  { name: "Boots", href: "#", imageId: "category-boots" },
  { name: "Gifts", href: "#", imageId: "category-gifts" },
];

export function CategoryDropdown() {
  const getImage = (id: string) => PlaceHolderImages.find(img => img.id === id);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="gap-2 rounded-b-none rounded-t-lg py-6 text-base">
          <CategoryIcon />
          All Categories
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80 p-2">
        {categories.map((category) => {
          const image = getImage(category.imageId);
          return (
            <DropdownMenuItem key={category.name} asChild>
              <Link href={category.href} className="flex items-center gap-3 p-2">
                {image && (
                    <Image
                      src={image.imageUrl}
                      alt={category.name}
                      width={32}
                      height={32}
                      data-ai-hint={image.imageHint}
                      className="rounded-full"
                    />
                )}
                <span className="font-semibold text-gray-700">{category.name}</span>
              </Link>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
