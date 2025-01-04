import { HeroSection } from '@/components/ui/hero-section';
import { FeaturesSection } from '@/components/ui/features-section';
import { ServicesSection } from '@/components/ui/services-section';
import { AboutSection } from '@/components/ui/about-section';
import { LocationSection } from '@/components/ui/location-section';
import { CTASection } from '@/components/ui/cta-section';

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