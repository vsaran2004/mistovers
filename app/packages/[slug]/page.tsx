"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, MapPin, Clock, Users, CheckCircle2 } from 'lucide-react';
import { PACKAGES, type TravelPackage } from '@/data/package-data';
import { useParams } from 'next/navigation';

export default function PackageDetails() {
  const params = useParams();
  const slug = params.slug as string;
  const pkg = PACKAGES.find((p: TravelPackage) => p.slug === slug);

  if (!pkg) return <div className="p-20 text-center">Package not found.</div>;

  return (
    <div className="bg-white min-h-screen pb-24 font-sans">
      <div className="relative w-full h-[45vh] lg:h-[60vh]">
        <Image src={pkg.image} alt={pkg.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <Link href="/packages" className="absolute top-6 left-6 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white">
          <ChevronLeft size={24} />
        </Link>
        <div className="absolute bottom-10 left-6 right-6 lg:max-w-5xl lg:mx-auto text-left">
          <h1 className="font-poppins text-3xl md:text-5xl font-bold text-white mb-2">{pkg.title}</h1>
          <div className="flex items-center gap-4 text-white/90"><MapPin size={18} className="text-[#FF8A3D]" /> {pkg.location}</div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12 text-left">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 p-6 bg-[#F3F7F5] rounded-[24px] mb-12">
          <div><p className="text-[10px] uppercase font-bold text-[#5B6675]">Duration</p><div className="flex items-center gap-2 font-bold text-[#0F3D2E]"><Clock size={16}/> {pkg.duration}</div></div>
          <div><p className="text-[10px] uppercase font-bold text-[#5B6675]">Group</p><div className="flex items-center gap-2 font-bold text-[#0F3D2E]"><Users size={16}/> {pkg.groupSize}</div></div>
          <div className="col-span-2 md:col-span-1"><p className="text-[10px] uppercase font-bold text-[#5B6675]">Starting Price</p><div className="font-bold text-[#0F3D2E] text-xl">₹{pkg.price}</div></div>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-[#0B1220] mb-4">Overview</h2>
            <p className="text-[#5B6675] leading-relaxed text-lg">{pkg.description}</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-[#0B1220] mb-6">What's Included</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {pkg.inclusions.map((item: string, i: number) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-white border border-gray-100 rounded-2xl">
                  <CheckCircle2 className="text-[#FF8A3D]" size={20} />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* FIXED BOTTOM BAR */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-t p-4 px-6 flex items-center justify-between shadow-lg">
        <div><p className="text-[10px] font-bold text-[#5B6675]">TOTAL FROM</p><p className="text-2xl font-bold text-[#0F3D2E]">₹{pkg.price}</p></div>
        <Link href={`https://wa.me/919999999999?text=Booking request for ${pkg.title}`} className="bg-[#FF8A3D] text-white px-8 py-3 rounded-xl font-bold active:scale-95 transition-all">
          Book Now
        </Link>
      </div>
    </div>
  );
}
