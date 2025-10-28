import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const blogPosts = [
  {
    id: 1,
    date: 'Oct 26, 2025',
    title: '10 Quick Tips About Fashion',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    imageId: 'blog-post-1',
  },
  {
    id: 2,
    date: 'Oct 25, 2025',
    title: 'The Best Guide to Summer Style',
    excerpt: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
    imageId: 'blog-post-2',
  },
  {
    id: 3,
    date: 'Oct 24, 2025',
    title: 'How to Accessorize Like a Pro',
    excerpt: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco...',
    imageId: 'blog-post-3',
  },
];

export function BlogSection() {
    const getImage = (id: string) => PlaceHolderImages.find(img => img.id === id);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-bold text-gray-800">From Our Blog</h2>
          <Link href="#" className="font-semibold text-primary hover:underline">
            View All
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {blogPosts.map((post) => {
            const image = getImage(post.imageId);
            return (
              <Card key={post.id} className="overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl">
                 <Link href="#" className="block">
                  {image && (
                     <Image
                      src={image.imageUrl}
                      alt={post.title}
                      width={400}
                      height={250}
                      data-ai-hint={image.imageHint}
                      className="h-48 w-full object-cover"
                    />
                  )}
                 </Link>
                <CardContent className="p-6">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <h4 className="my-2 text-xl font-semibold text-gray-800">
                    <Link href="#" className="hover:text-primary">{post.title}</Link>
                  </h4>
                  <p className="mb-4 text-gray-600">{post.excerpt}</p>
                  <Link href="#" className="font-semibold text-primary hover:text-primary/80">
                    Read More
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
