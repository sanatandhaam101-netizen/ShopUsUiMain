'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/lib/products';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Eye } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

declare global {
  interface Window {
    addToCart: (product: Product) => void;
  }
}

export function ProductCard({ product }: ProductCardProps) {
  const handleAddToCart = () => {
    if (window.addToCart) {
      window.addToCart(product);
    }
  };

  return (
    <Card className="overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl">
      <div className="group relative block">
        <Image
          src={product.image}
          alt={product.name}
          width={300}
          height={300}
          data-ai-hint={product.imageHint}
          className="h-56 w-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black/0 opacity-0 transition-all group-hover:bg-black/40 group-hover:opacity-100">
          <Button
            variant="outline"
            size="icon"
            className="h-10 w-10 translate-y-4 rounded-full bg-white text-gray-700 transition-all duration-300 hover:bg-primary hover:text-white group-hover:translate-y-0"
          >
            <Heart className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="h-10 w-10 translate-y-4 rounded-full bg-white text-gray-700 transition-all duration-300 [transition-delay:100ms] hover:bg-primary hover:text-white group-hover:translate-y-0"
          >
            <Eye className="h-5 w-5" />
          </Button>
        </div>
      </div>
      <CardContent className="p-4">
        <h4 className="mb-1 truncate text-lg font-semibold text-gray-800">
          <Link href="#" className="hover:text-primary">
            {product.name}
          </Link>
        </h4>
        <div className="mb-3 flex items-center gap-2">
          <span className="text-xl font-bold text-primary">${product.price.toFixed(2)}</span>
          {product.oldPrice && (
            <del className="text-sm text-gray-500">${product.oldPrice.toFixed(2)}</del>
          )}
        </div>
        <Button className="w-full" onClick={handleAddToCart}>Add To Cart</Button>
      </CardContent>
    </Card>
  );
}
