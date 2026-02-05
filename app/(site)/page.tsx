import { HeroSection } from '@/components/hero-section';
import AboutSections from '@/components/about';
import ReviewsAndContact from '@/components/contact-us';
import FAQSection from '@/components/faq';

export const metadata = {
  title: 'Kanthalloor Mistovers | South Kerala Hill Escape',
  description: 'Explore Kanthalloor in the mist. Trips, stays, jeep safari, food & campfire with easy WhatsApp booking. Local team, best price, 24/7 support.',
};

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <HeroSection />
      <AboutSections />
      <ReviewsAndContact />
      <FAQSection />
      {/* Additional sections can be added here */}
    </main>
  );
}
