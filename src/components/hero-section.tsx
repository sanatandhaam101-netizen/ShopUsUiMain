import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="bg-pink-50/50 py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Fashion Collection
        </h1>
        <p className="text-xl text-primary font-semibold mb-8">
          UP TO 70% OFF - Summer Sale
        </p>
        <Button asChild size="lg" className="text-lg">
          <Link href="#">
            Shop Now
          </Link>
        </Button>
      </div>
    </section>
  );
}
