import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section 
      className="relative bg-cover bg-center bg-no-repeat py-40 text-white"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop')`,
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-6xl font-extrabold tracking-tight mb-4">
          FASHION COLLECTION
        </h1>
        <p className="text-2xl font-semibold text-pink-300 mb-8">
          UP TO 70% OFF — SUMMER SALE
        </p>
        <Button asChild size="lg" className="text-lg bg-white text-pink-600 hover:bg-gray-200 transition-colors duration-300 shadow-lg">
          <Link href="/shop.html">
            Shop Now
          </Link>
        </Button>
      </div>
    </section>
  );
}
