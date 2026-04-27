import { HeroSection } from "@/components/sections/hero-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { ServicesSection } from "@/components/sections/services-section";
import { AboutSection } from "@/components/sections/about-section";
import { LocationSection } from "@/components/sections/location-section";
import { CTASection } from "@/components/sections/cta-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <ServicesSection />
      <AboutSection />
      <LocationSection />
      <CTASection />
    </main>
  );
}
