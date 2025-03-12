
import HeroSection from "@/components/HeroSection";
import FeaturedProperties from "@/components/FeaturedProperties";
import PropertyTypeSection from "@/components/PropertyTypeSection";
import PropertySearchSection from "@/components/PropertySearchSection";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <PropertySearchSection />
      <FeaturedProperties />
      <PropertyTypeSection />
      <HowItWorks />
      <Testimonials />
    </main>
  );
}
