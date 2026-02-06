export interface Property {
  id: number;
  name: string;
  slug: string;
  image: string;
  location: string;
  category: string;
}

export const RESORTS: Property[] = [
  {
    id: 1,
    name: "Muziris Villa",
    slug: "muziris-villa-kanthalloor",
    image: "/properties/muziris-kanthalloor.jpg",
    location: "Kanthalloor, Kerala",
    category: "Villa",
  },
  {
    id: 2,
    name: "Cheeni Hill Resorts",
    slug: "cheeni-hill-resorts-kanthalloor",
    image: "/properties/cheeni-kanthalloor.jpg",
    location: "Kanthalloor, Kerala",
    category: "Resort",
  },
  {
    id: 3,
    name: "Zen Zoner Homestay",
    slug: "zen-zoner-homestay-puthoor",
    image: "/properties/zen-zoner-puthoor.jpg",
    location: "Puthoor, Kanthalloor",
    category: "Homestay",
  },
  {
    id: 4,
    name: "Clevland Resorts",
    slug: "clevland-resorts-kanthalloor",
    image: "/properties/clevland-kanthalloor.jpg",
    location: "Kanthalloor, Kerala",
    category: "Resort",
  },
];