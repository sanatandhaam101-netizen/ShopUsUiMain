import { Truck, Undo, Lock, BadgeCheck } from 'lucide-react';

const features = [
  {
    icon: Truck,
    title: 'Free Shipping',
    description: 'When ordering over $100',
  },
  {
    icon: Undo,
    title: 'Free Return',
    description: 'Get Return within 30 days',
  },
  {
    icon: Lock,
    title: 'Secure Payment',
    description: '100% Secure Online Payment',
  },
  {
    icon: BadgeCheck,
    title: 'Best Quality',
    description: 'Original Product Guaranteed',
  },
];

export function FeaturesBar() {
  return (
    <section className="border-y bg-card py-12">
      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-4">
            <feature.icon className="h-10 w-10 text-primary" strokeWidth={1.5} />
            <div>
              <h5 className="font-bold text-gray-800">{feature.title}</h5>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
