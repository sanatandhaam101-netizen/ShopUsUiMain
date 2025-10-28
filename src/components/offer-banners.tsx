import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function OfferBanners() {
  const styleImage = PlaceHolderImages.find(img => img.id === 'offer-style');
  const megaImage = PlaceHolderImages.find(img => img.id === 'offer-mega');

  return (
    <section className="py-16">
      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 md:grid-cols-2">
        <Card className="overflow-hidden border-purple-200 bg-gradient-to-r from-purple-50 to-purple-100">
          <CardContent className="flex items-center justify-between p-8">
            <div>
              <span className="font-semibold text-accent">NEW STYLE</span>
              <h3 className="my-2 text-3xl font-bold text-gray-800">
                Get 65% Offer
              </h3>
              <p className="mb-4 text-gray-600">& Make New Fusion.</p>
              <Button asChild style={{ backgroundColor: '#9C27B0', color: 'white' }} className="hover:bg-accent/90">
                <Link href="#">Shop Now</Link>
              </Button>
            </div>
            {styleImage && (
              <Image
                src={styleImage.imageUrl}
                alt={styleImage.description}
                width={128}
                height={128}
                data-ai-hint={styleImage.imageHint}
                className="hidden h-32 w-32 rounded-lg object-cover sm:block"
              />
            )}
          </CardContent>
        </Card>

        <Card className="overflow-hidden border-yellow-200 bg-gradient-to-r from-yellow-50 to-yellow-100">
          <CardContent className="flex items-center justify-between p-8">
            <div>
              <span className="font-semibold text-yellow-600">MEGA OFFER</span>
              <h3 className="my-2 text-3xl font-bold text-gray-800">
                Make your New Styles
              </h3>
              <p className="mb-4 text-gray-600">with Our Products.</p>
               <Button asChild className="bg-yellow-500 text-white hover:bg-yellow-600">
                <Link href="#">Shop Now</Link>
              </Button>
            </div>
            {megaImage && (
              <Image
                src={megaImage.imageUrl}
                alt={megaImage.description}
                width={128}
                height={128}
                data-ai-hint={megaImage.imageHint}
                className="hidden h-32 w-32 rounded-lg object-cover sm:block"
              />
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
