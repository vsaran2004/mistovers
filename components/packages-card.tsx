"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MessageCircle, Clock, CheckCircle2 } from 'lucide-react';
import { PACKAGES, type TravelPackage } from '@/data/package-data';

export default function PackageCard({ pkg }: { pkg: TravelPackage }) {
  return (
    <div className="bg-white rounded-[24px] border border-[#E3EAE6] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full overflow-hidden group">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image src={pkg.image} alt={pkg.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1">
          <Clock size={14} className="text-[#FF8A3D]" />
          <span className="text-[10px] font-bold uppercase text-[#0B1220]">{pkg.duration}</span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow text-left">
        <h3 className="font-poppins font-semibold text-xl text-[#0B1220] mb-2">{pkg.title}</h3>
        <p className="text-xl font-bold text-[#0F3D2E] mb-4">₹{pkg.price} <span className="text-xs text-[#5B6675] font-normal">/ person</span></p>
        
        <ul className="space-y-2 mb-6 flex-grow">
          {pkg.highlights.slice(0, 3).map((item, idx) => (
            <li key={idx} className="flex items-center gap-2 text-sm text-[#5B6675]">
              <CheckCircle2 size={16} className="text-[#FF8A3D]" /> {item}
            </li>
          ))}
        </ul>

        <div className="space-y-3 mt-auto">
          <Link href={`/packages/${pkg.slug}`} className="block w-full text-center py-3 bg-[#0F3D2E] text-white font-bold rounded-xl text-sm">
            View Details
          </Link>
          <Link href={`https://wa.me/919999999999?text=Interested in ${pkg.title}`} className="flex items-center justify-center gap-2 w-full py-3 border-2 border-[#FF8A3D] text-[#FF8A3D] font-bold rounded-xl text-sm">
            <MessageCircle size={18} /> WhatsApp
          </Link>
        </div>
      </div>
    </div>
  );
}

export function PackagesSection() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-[#FDFEFD]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#FF8A3D] font-bold tracking-[0.2em] text-xs uppercase block mb-3">
            Our Packages
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F3D2E] mb-4">
            Curated Kanthalloor Experiences
          </h2>
          <p className="text-[#5B6675] max-w-2xl mx-auto text-base md:text-lg">
            Choose the perfect itinerary to explore the misty hills, fruit orchards, and hidden waterfalls of Kanthalloor.
          </p>
        </div>

        {/* Package Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {PACKAGES.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <p className="text-[#5B6675] mb-6 text-base">
            Looking for a custom itinerary? We can tailor any package to your needs.
          </p>
          <Link
            href="https://wa.me/919999999999?text=Hi%20Kanthalloor%20Mistovers%2C%20I%20need%20a%20custom%20package."
            className="inline-flex items-center justify-center gap-2 bg-[#FF8A3D] hover:bg-[#ff9a57] text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-lg hover:shadow-xl"
          >
            Plan Custom Trip
          </Link>
        </div>
      </div>
    </section>
  );
}