// types/package.ts (or inside package-data.ts)
export interface TravelPackage {
  id: string;
  slug: string;
  title: string;
  duration: string;
  price: string;
  location: string;
  groupSize: string;
  image: string;
  description: string;
  highlights: string[];
  inclusions: string[];
}

export const PACKAGES: TravelPackage[] = [
  {
    id: "1",
    slug: "kanthalloor-highlights",
    title: "Kanthalloor Highlights",
    duration: "1 Day Trip",
    price: "1,499",
    location: "Kanthalloor, Kerala",
    groupSize: "2-15 People",
    image: "/logo.jpeg",
    description: "Perfect for those short on time. Experience the best of Kanthalloor's fruit orchards, waterfalls, and viewpoints in a single action-packed day.",
    highlights: ["Fruit Orchard Tour", "Hidden Waterfall Visit", "Jeep Safari"],
    inclusions: ["Guide", "Jeep Safari", "Entry Fees"]
  },
  {
    id: "2",
    slug: "campfire-stay",
    title: "Campfire & Jeep Stay",
    duration: "1N / 2D",
    price: "2,999",
    location: "Kanthalloor Hills",
    groupSize: "2-10 People",
    image: "/logo.jpeg",
    description: "Unwind under the stars. Enjoy a cozy stay in a mountain farmstay followed by a morning jeep safari to the misty peaks.",
    highlights: ["Night Campfire", "Traditional Meals", "Sunrise Point Visit"],
    inclusions: ["Stay", "Dinner & Breakfast", "Campfire"]
  }
];