import { PackagesSection } from "@/components/packages-card";
import ResortCarousel from "@/components/property-list";

export const metadata = {
  title: 'Kanthalloor Mistovers | South Kerala Hill Escape',
  description: 'Explore Kanthalloor in the mist. Trips, stays, jeep safari, food & campfire with easy WhatsApp booking. Local team, best price, 24/7 support.',
};

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <PackagesSection />
      <ResortCarousel />
    </main>
  );
}
