import { Header } from "@/components/header/header";
import { HeroSection } from "@/components/hero-section";
import { OfferBanners } from "@/components/offer-banners";
import { NewArrivals } from "@/components/new-arrivals";
import { BlogSection } from "@/components/blog-section";
import { FeaturesBar } from "@/components/features-bar";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main>
        <HeroSection />
        <OfferBanners />
        <NewArrivals />
        <BlogSection />
        <FeaturesBar />
      </main>
      <Footer />
    </div>
  );
}
