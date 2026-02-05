"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, ArrowRight } from 'lucide-react';

// --- Types & Sample Data ---
interface Resort {
  id: number;
  name: string;
  slug: string;
  image: string;
}

const RESORTS: Resort[] = [
  {
    id: 1,
    name: "Misty Valley Resort",
    slug: "misty-valley-resort",
    image: "/logo.jpeg"
  },
  {
    id: 2,
    name: "Hill Breeze Stay",
    slug: "hill-breeze-stay",
    image: "/logo.jpeg"
  },
  {
    id: 3,
    name: "Green Farm Retreat",
    slug: "green-farm-retreat",
    image: "/logo.jpeg"
  },
  {
    id: 4,
    name: "Cloud View Homestay",
    slug: "cloud-view-homestay",
    image: "/logo.jpeg"
  },
];

export default function ResortCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollNext = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const scrollPrev = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-[#F3F7F5]/30 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- SECTION HEADER --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div className="text-left">
            <span className="text-[#FF8A3D] font-bold tracking-[0.2em] text-xs uppercase block mb-3">
              Stay Options
            </span>
            <h2 className="font-poppins text-3xl md:text-4xl font-semibold text-[#0B1220] mb-3">
              Handpicked Resorts in Kanthalloor
            </h2>
            <p className="text-[#5B6675] text-sm md:text-base max-w-lg">
              Comfortable and scenic stays selected by our local team for an authentic experience.
            </p>
          </div>

          <Link 
            href="/stays" 
            className="hidden md:flex items-center gap-2 text-[#0F3D2E] font-bold hover:gap-3 transition-all duration-300"
          >
            View All Stays <ArrowRight size={18} />
          </Link>
        </div>

        {/* --- CAROUSEL WRAPPER --- */}
        <div className="relative group">
          
          {/* Scroll Container */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4 -mx-6 px-6 md:mx-0 md:px-0"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {RESORTS.map((resort) => (
              <Link 
                key={resort.id}
                href={`/stays/${resort.slug}`}
                className="min-w-[75%] sm:min-w-[45%] md:min-w-[30%] lg:min-w-[22%] snap-start group/card relative aspect-[4/5] rounded-[24px] overflow-hidden shadow-md hover:shadow-xl transition-all duration-500"
              >
                {/* Resort Image */}
                <Image
                  src={resort.image}
                  alt={resort.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover/card:scale-110"
                />

                {/* Bottom Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220]/90 via-[#0B1220]/20 to-transparent opacity-80" />

                {/* Resort Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-poppins font-semibold text-lg md:text-xl text-white leading-tight">
                    {resort.name}
                  </h3>
                  
                  <div className="mt-2 flex items-center gap-1 text-white/0 group-hover/card:text-white/100 -translate-y-2 group-hover/card:translate-y-0 transition-all duration-300 text-xs font-bold uppercase tracking-widest">
                    <span>Explore</span>
                    <ChevronRight size={14} />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Desktop Navigation Buttons */}
          <div className="hidden lg:block">
             <button 
              onClick={scrollPrev}
              className="absolute -left-5 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-[#0F3D2E] opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#0F3D2E] hover:text-white z-10"
              aria-label="Previous stays"
            >
              <ChevronRight size={24} className="rotate-180" />
            </button>
            <button 
              onClick={scrollNext}
              className="absolute -right-5 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-[#0F3D2E] opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#0F3D2E] hover:text-white z-10"
              aria-label="Next stays"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Subtle Side Fades (Visual Premium Polish) */}
          <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[#F3F7F5]/30 to-transparent pointer-events-none md:hidden" />
          <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[#F3F7F5]/30 to-transparent pointer-events-none md:hidden" />
        </div>

        {/* Mobile View All Link */}
        <Link 
          href="/stays" 
          className="mt-8 flex md:hidden items-center justify-center gap-2 text-[#0F3D2E] font-bold text-sm bg-white py-4 rounded-xl shadow-sm active:scale-95 transition-all"
        >
          View All Stays <ArrowRight size={16} />
        </Link>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}