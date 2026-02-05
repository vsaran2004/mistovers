import "./globals.css";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: {
    default: "Kanthalloor Mistovers",
    template: "%s | Kanthalloor Mistovers",
  },
  description:
    "Explore Kanthalloor with curated travel packages, resorts, and local experiences by Kanthalloor Mistovers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}