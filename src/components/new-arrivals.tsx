import Link from 'next/link';
import { ProductCard } from './product-card';
import { products } from '@/lib/products';

export function NewArrivals() {
  return (
    <section className="bg-card py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-bold text-gray-800">New Arrivals</h2>
          <Link href="#" className="font-semibold text-primary hover:underline">
            View All
          </Link>
        </div>
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
