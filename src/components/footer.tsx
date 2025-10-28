import Link from "next/link";
import { FacebookIcon, TwitterIcon, YoutubeIcon } from "./icons";
import { MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-800 pt-16 pb-8 text-gray-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h4 className="mb-4 text-2xl font-bold text-white">Shopus</h4>
            <p className="mb-4">
              The most popular ecommerce platform for fashion and style.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-700 transition-colors hover:bg-primary">
                <FacebookIcon className="h-5 w-5" />
              </Link>
              <Link href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-700 transition-colors hover:bg-primary">
                <TwitterIcon className="h-5 w-5" />
              </Link>
              <Link href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-700 transition-colors hover:bg-primary">
                <YoutubeIcon className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h5 className="mb-4 text-lg font-semibold text-white">About Us</h5>
            <ul className="space-y-3">
              <li><Link href="#" className="transition-colors hover:text-primary">Rave’s Story</Link></li>
              <li><Link href="#" className="transition-colors hover:text-primary">Work With Us</Link></li>
              <li><Link href="#" className="transition-colors hover:text-primary">Corporate News</Link></li>
              <li><Link href="#" className="transition-colors hover:text-primary">Investors</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="mb-4 text-lg font-semibold text-white">Useful Links</h5>
            <ul className="space-y-3">
              <li><Link href="#" className="transition-colors hover:text-primary">Secure Payment</Link></li>
              <li><Link href="#" className="transition-colors hover:text-primary">Privacy Policy</Link></li>
              <li><Link href="#" className="transition-colors hover:text-primary">Terms of Use</Link></li>
              <li><Link href="#" className="transition-colors hover:text-primary">Archived Products</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="mb-4 text-lg font-semibold text-white">Contact Info</h5>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 text-primary" />
                <span>4517 Washington Ave. Manchester, Kentucky 39495</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <span>+880171889547</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm">
          <p>&copy; 2025 Shopus. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
