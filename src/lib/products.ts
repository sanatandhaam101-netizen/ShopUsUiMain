import { PlaceHolderImages } from './placeholder-images';

export type Product = {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  imageHint: string;
};

const findImage = (id: string) => {
    const img = PlaceHolderImages.find(p => p.id === id);
    if (!img) {
        return {
            imageUrl: "https://picsum.photos/seed/default/300/300",
            imageHint: "product"
        };
    }
    return {
        imageUrl: img.imageUrl,
        imageHint: img.imageHint
    };
}


export const products: Product[] = [
  {
    id: '1',
    name: 'Floral Summer Dress',
    price: 49.99,
    oldPrice: 79.99,
    image: findImage('product-1').imageUrl,
    imageHint: findImage('product-1').imageHint
  },
  {
    id: '2',
    name: 'Leather Crossbody Bag',
    price: 89.99,
    image: findImage('product-2').imageUrl,
    imageHint: findImage('product-2').imageHint
  },
  {
    id: '3',
    name: 'Knit Cropped Sweater',
    price: 59.99,
    oldPrice: 99.99,
    image: findImage('product-3').imageUrl,
    imageHint: findImage('product-3').imageHint
  },
  {
    id: '4',
    name: 'Suede Ankle Boots',
    price: 129.99,
    image: findImage('product-4').imageUrl,
    imageHint: findImage('product-4').imageHint
  },
];
