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
    slug: "standard-group-package",
    title: "Standard Group Package",
    duration: "1N/2D",
    price: "1999",
    location: "Kanthalloor, Kerala",
    groupSize: "7-15 People",
    image: "/package/standard-package.png", // Fixed typo: standart -> standard
    description: "The ultimate budget-friendly getaway for large groups and bachelors in the heart of Kanthalloor.",
    highlights: [
      "Jeep Trekking",
      "Campfire Night",
      "Homely Food",
      "Sightseeing",
      "Private Stay"
    ],
    inclusions: [
      "4x4 off-road jeep ride through mountain trails",
      "Private campfire setup with music",
      "Freshly cooked local organic meals",
      "Visit to waterfalls and local farms",
      "Exclusive stay space for group privacy",
      "Check-In: 12:00 PM | Check-Out: 11:00 AM",
      "Note: Exclusive for bachelor/large groups"
    ]
  },
  {
    id: "2",
    slug: "kanthalloor-adventure-explorer",
    title: "Adventure Explorer",
    duration: "2N/3D",
    price: "4999",
    location: "Kanthalloor, Kerala",
    groupSize: "4-10 People",
    image: "/package/2days-package.png",
    description: "An extended 3-day adventure exploring the deep forest trails and hidden waterfalls of Kanthalloor.",
    highlights: [
      "Deep Forest Jeep Safari",
      "Night Trekking",
      "Orchard Visits",
      "Riverside Camping",
      "Traditional BBQ Night"
    ],
    inclusions: [
      "2 Nights stay in premium tents/cottages",
      "Extended 4x4 safari to watchtowers",
      "6 Local Kanthalloor style meals",
      "Guided trekking to Lemon Grass hills",
      "Guided fruit orchard & sandalwood tour",
      "Check-In: 12:00 PM | Check-Out: 11:00 AM",
      "Note: Best suited for nature lovers"
    ]
  },
  {
    id: "3",
    slug: "romantic-misty-escape",
    title: "Romantic Misty Escape",
    duration: "1N/2D",
    price: "8500",
    location: "Kanthalloor, Kerala",
    groupSize: "2 People (Couples)",
    image: "/package/couple-package.png",
    description: "A cozy, private retreat designed specifically for couples looking for peace and mountain mist.",
    highlights: [
      "Private Cabin Stay",
      "Candlelight Dinner",
      "Fruit Orchard Walk",
      "Private Sunrise View",
      "Personalized Jeep Tour"
    ],
    inclusions: [
      "Stay in secluded wooden valley-view cabin",
      "Romantic candlelight dinner with music",
      "In-room traditional Kerala breakfast",
      "Private strawberry farm tour",
      "Personal jeep for local sightseeing",
      "Check-In: 12:00 PM | Check-Out: 11:00 AM",
      "Note: Perfect for honeymooners"
    ]
  }
];