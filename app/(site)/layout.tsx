import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingActions from "@/components/buble";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        {/* NAVBAR: 
            Placed at the top. Ensure your Navbar component 
            uses 'fixed' or 'sticky' if you want it to follow the scroll.
        */}
        <Navbar />

        {/* MAIN CONTENT: 
            'flex-grow' ensures this section takes up all available space, 
            pushing the footer to the bottom of the screen on short pages.
        */}
        <main className="flex-grow">
          {children}
        </main>

        {/* FOOTER: 
            Now correctly placed after the children so it appears at 
            the end of the page content.
        */}
        <Footer />
        {/* FLOATING ACTIONS: 
            This component will be rendered on top of all content, 
            so it should be placed after the main content and footer.
        */}
        <FloatingActions />
      </body>
    </html>
  );
}